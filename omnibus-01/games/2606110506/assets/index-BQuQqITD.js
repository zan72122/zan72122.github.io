(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wo="165",wc=0,Yo=1,Ec=2,Nl=1,Tc=2,mn=3,Dn=0,De=1,Ge=2,gn=0,Ri=1,ao=2,$o=3,Ko=4,Ac=5,qn=100,bc=101,Rc=102,Cc=103,Pc=104,Dc=200,Lc=201,Uc=202,Ic=203,lo=204,co=205,Nc=206,Fc=207,Oc=208,zc=209,Bc=210,Vc=211,Hc=212,kc=213,Gc=214,Wc=0,Xc=1,qc=2,$s=3,Yc=4,$c=5,Kc=6,Zc=7,or=0,Jc=1,jc=2,Pn=0,Qc=1,tu=2,eu=3,nu=4,iu=5,su=6,ru=7,Fl=300,Di=301,Li=302,uo=303,ho=304,ar=306,fo=1e3,Rn=1001,po=1002,Le=1003,ou=1004,ps=1005,We=1006,yr=1007,$n=1008,Ln=1009,au=1010,lu=1011,Ks=1012,Ol=1013,Ui=1014,Cn=1015,os=1016,zl=1017,Bl=1018,Ii=1020,cu=35902,uu=1021,hu=1022,Ze=1023,fu=1024,du=1025,Ci=1026,Ni=1027,pu=1028,Vl=1029,mu=1030,Hl=1031,kl=1033,Sr=33776,wr=33777,Er=33778,Tr=33779,Zo=35840,Jo=35841,jo=35842,Qo=35843,ta=36196,ea=37492,na=37496,ia=37808,sa=37809,ra=37810,oa=37811,aa=37812,la=37813,ca=37814,ua=37815,ha=37816,fa=37817,da=37818,pa=37819,ma=37820,va=37821,Ar=36492,ga=36494,_a=36495,vu=36283,xa=36284,Ma=36285,ya=36286,gu=3200,_u=3201,Eo=0,xu=1,bn="",Ke="srgb",In="srgb-linear",To="display-p3",lr="display-p3-linear",Zs="linear",Qt="srgb",Js="rec709",js="p3",ti=7680,Sa=519,Mu=512,yu=513,Su=514,Gl=515,wu=516,Eu=517,Tu=518,Au=519,wa=35044,Ea="300 es",vn=2e3,Qs=2001;class zi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ta=1234567;const Ji=Math.PI/180,ns=180/Math.PI;function jn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[i&255]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function _e(i,t,e){return Math.max(t,Math.min(e,i))}function Ao(i,t){return(i%t+t)%t}function bu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ru(i,t,e){return i!==t?(e-i)/(t-i):0}function ji(i,t,e){return(1-e)*i+e*t}function Cu(i,t,e,n){return ji(i,t,1-Math.exp(-e*n))}function Pu(i,t=1){return t-Math.abs(Ao(i,t*2)-t)}function Du(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Lu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Uu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Iu(i,t){return i+Math.random()*(t-i)}function Nu(i){return i*(.5-Math.random())}function Fu(i){i!==void 0&&(Ta=i);let t=Ta+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ou(i){return i*Ji}function zu(i){return i*ns}function Bu(i){return(i&i-1)===0&&i!==0}function Vu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ku(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),v=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*v,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*v,a*c);break;case"ZYZ":i.set(l*v,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ei(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Kn={DEG2RAD:Ji,RAD2DEG:ns,generateUUID:jn,clamp:_e,euclideanModulo:Ao,mapLinear:bu,inverseLerp:Ru,lerp:ji,damp:Cu,pingpong:Pu,smoothstep:Du,smootherstep:Lu,randInt:Uu,randFloat:Iu,randFloatSpread:Nu,seededRandom:Fu,degToRad:Ou,radToDeg:zu,isPowerOfTwo:Bu,ceilPowerOfTwo:Vu,floorPowerOfTwo:Hu,setQuaternionFromProperEuler:ku,normalize:be,denormalize:Ei};class ot{constructor(t=0,e=0){ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bt{constructor(t,e,n,s,r,o,a,l,c){bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],v=n[8],g=s[0],p=s[3],m=s[6],S=s[1],x=s[4],w=s[7],N=s[2],b=s[5],R=s[8];return r[0]=o*g+a*S+l*N,r[3]=o*p+a*x+l*b,r[6]=o*m+a*w+l*R,r[1]=c*g+u*S+h*N,r[4]=c*p+u*x+h*b,r[7]=c*m+u*w+h*R,r[2]=d*g+f*S+v*N,r[5]=d*p+f*x+v*b,r[8]=d*m+f*w+v*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,v=e*h+n*d+s*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=h*g,t[1]=(s*c-u*n)*g,t[2]=(a*n-s*o)*g,t[3]=d*g,t[4]=(u*e-s*l)*g,t[5]=(s*r-a*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(br.makeScale(t,e)),this}rotate(t){return this.premultiply(br.makeRotation(-t)),this}translate(t,e){return this.premultiply(br.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const br=new bt;function Wl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gu(){const i=tr("canvas");return i.style.display="block",i}const Aa={};function Xl(i){i in Aa||(Aa[i]=!0,console.warn(i))}function Wu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const ba=new bt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ra=new bt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ms={[In]:{transfer:Zs,primaries:Js,toReference:i=>i,fromReference:i=>i},[Ke]:{transfer:Qt,primaries:Js,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[lr]:{transfer:Zs,primaries:js,toReference:i=>i.applyMatrix3(Ra),fromReference:i=>i.applyMatrix3(ba)},[To]:{transfer:Qt,primaries:js,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ra),fromReference:i=>i.applyMatrix3(ba).convertLinearToSRGB()}},Xu=new Set([In,lr]),qt={enabled:!0,_workingColorSpace:In,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Xu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=ms[t].toReference,s=ms[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ms[i].primaries},getTransfer:function(i){return i===bn?Zs:ms[i].transfer}};function Pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Rr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ei;class qu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ei===void 0&&(ei=tr("canvas")),ei.width=t.width,ei.height=t.height;const n=ei.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ei}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=tr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Pi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Pi(e[n]/255)*255):e[n]=Pi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Yu=0;class ql{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=jn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Cr(s[o].image)):r.push(Cr(s[o]))}else r=Cr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Cr(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?qu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $u=0;class Ue extends zi{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,n=Rn,s=Rn,r=We,o=$n,a=Ze,l=Ln,c=Ue.DEFAULT_ANISOTROPY,u=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=jn(),this.name="",this.source=new ql(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fo:t.x=t.x-Math.floor(t.x);break;case Rn:t.x=t.x<0?0:1;break;case po:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fo:t.y=t.y-Math.floor(t.y);break;case Rn:t.y=t.y<0?0:1;break;case po:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=Fl;Ue.DEFAULT_ANISOTROPY=1;class jt{constructor(t=0,e=0,n=0,s=1){jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],v=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(v+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,w=(f+1)/2,N=(m+1)/2,b=(u+d)/4,R=(h+g)/4,I=(v+p)/4;return x>w&&x>N?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=b/n,r=R/n):w>N?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=b/s,r=I/s):N<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),n=R/r,s=I/r),this.set(n,s,r,e),this}let S=Math.sqrt((p-v)*(p-v)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(p-v)/S,this.y=(h-g)/S,this.z=(d-u)/S,this.w=Math.acos((c+f+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ku extends zi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new jt(0,0,t,e),this.scissorTest=!1,this.viewport=new jt(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ue(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ql(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends Ku{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Yl extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zu extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class as{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],f=r[o+1],v=r[o+2],g=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=v,t[e+3]=g;return}if(h!==g||l!==d||c!==f||u!==v){let p=1-a;const m=l*d+c*f+u*v+h*g,S=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const N=Math.sqrt(x),b=Math.atan2(N,m*S);p=Math.sin(p*b)/N,a=Math.sin(a*b)/N}const w=a*S;if(l=l*p+d*w,c=c*p+f*w,u=u*p+v*w,h=h*p+g*w,p===1-a){const N=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=N,c*=N,u*=N,h*=N}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],v=r[o+3];return t[e]=a*v+u*h+l*f-c*d,t[e+1]=l*v+u*d+c*h-a*f,t[e+2]=c*v+u*f+a*d-l*h,t[e+3]=u*v-a*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*v,this._y=c*f*h-d*u*v,this._z=c*u*v+d*f*h,this._w=c*u*h-d*f*v;break;case"YXZ":this._x=d*u*h+c*f*v,this._y=c*f*h-d*u*v,this._z=c*u*v-d*f*h,this._w=c*u*h+d*f*v;break;case"ZXY":this._x=d*u*h-c*f*v,this._y=c*f*h+d*u*v,this._z=c*u*v+d*f*h,this._w=c*u*h-d*f*v;break;case"ZYX":this._x=d*u*h-c*f*v,this._y=c*f*h+d*u*v,this._z=c*u*v-d*f*h,this._w=c*u*h+d*f*v;break;case"YZX":this._x=d*u*h+c*f*v,this._y=c*f*h+d*u*v,this._z=c*u*v-d*f*h,this._w=c*u*h-d*f*v;break;case"XZY":this._x=d*u*h-c*f*v,this._y=c*f*h-d*u*v,this._z=c*u*v+d*f*h,this._w=c*u*h+d*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ca.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ca.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Pr.copy(this).projectOnVector(t),this.sub(Pr)}reflect(t){return this.sub(Pr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pr=new A,Ca=new as;class ls{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,qe):qe.fromBufferAttribute(r,o),qe.applyMatrix4(t.matrixWorld),this.expandByPoint(qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vs.copy(n.boundingBox)),vs.applyMatrix4(t.matrixWorld),this.union(vs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,qe),qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ki),gs.subVectors(this.max,ki),ni.subVectors(t.a,ki),ii.subVectors(t.b,ki),si.subVectors(t.c,ki),Mn.subVectors(ii,ni),yn.subVectors(si,ii),zn.subVectors(ni,si);let e=[0,-Mn.z,Mn.y,0,-yn.z,yn.y,0,-zn.z,zn.y,Mn.z,0,-Mn.x,yn.z,0,-yn.x,zn.z,0,-zn.x,-Mn.y,Mn.x,0,-yn.y,yn.x,0,-zn.y,zn.x,0];return!Dr(e,ni,ii,si,gs)||(e=[1,0,0,0,1,0,0,0,1],!Dr(e,ni,ii,si,gs))?!1:(_s.crossVectors(Mn,yn),e=[_s.x,_s.y,_s.z],Dr(e,ni,ii,si,gs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const un=[new A,new A,new A,new A,new A,new A,new A,new A],qe=new A,vs=new ls,ni=new A,ii=new A,si=new A,Mn=new A,yn=new A,zn=new A,ki=new A,gs=new A,_s=new A,Bn=new A;function Dr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Bn.fromArray(i,r);const a=s.x*Math.abs(Bn.x)+s.y*Math.abs(Bn.y)+s.z*Math.abs(Bn.z),l=t.dot(Bn),c=e.dot(Bn),u=n.dot(Bn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ju=new ls,Gi=new A,Lr=new A;class Zn{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ju.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gi.subVectors(t,this.center);const e=Gi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Gi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gi.copy(t.center).add(Lr)),this.expandByPoint(Gi.copy(t.center).sub(Lr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hn=new A,Ur=new A,xs=new A,Sn=new A,Ir=new A,Ms=new A,Nr=new A;class cr{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hn.copy(this.origin).addScaledVector(this.direction,e),hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ur.copy(t).add(e).multiplyScalar(.5),xs.copy(e).sub(t).normalize(),Sn.copy(this.origin).sub(Ur);const r=t.distanceTo(e)*.5,o=-this.direction.dot(xs),a=Sn.dot(this.direction),l=-Sn.dot(xs),c=Sn.lengthSq(),u=Math.abs(1-o*o);let h,d,f,v;if(u>0)if(h=o*l-a,d=o*a-l,v=r*u,h>=0)if(d>=-v)if(d<=v){const g=1/u;h*=g,d*=g,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ur).addScaledVector(xs,d),f}intersectSphere(t,e){hn.subVectors(t.center,this.origin);const n=hn.dot(this.direction),s=hn.dot(hn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,hn)!==null}intersectTriangle(t,e,n,s,r){Ir.subVectors(e,t),Ms.subVectors(n,t),Nr.crossVectors(Ir,Ms);let o=this.direction.dot(Nr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Sn.subVectors(this.origin,t);const l=a*this.direction.dot(Ms.crossVectors(Sn,Ms));if(l<0)return null;const c=a*this.direction.dot(Ir.cross(Sn));if(c<0||l+c>o)return null;const u=-a*Sn.dot(Nr);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(t,e,n,s,r,o,a,l,c,u,h,d,f,v,g,p){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,h,d,f,v,g,p)}set(t,e,n,s,r,o,a,l,c,u,h,d,f,v,g,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=v,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ri.setFromMatrixColumn(t,0).length(),r=1/ri.setFromMatrixColumn(t,1).length(),o=1/ri.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,f=o*h,v=a*u,g=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+v*c,e[5]=d-g*c,e[9]=-a*l,e[2]=g-d*c,e[6]=v+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,f=l*h,v=c*u,g=c*h;e[0]=d+g*a,e[4]=v*a-f,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-v,e[6]=g+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,f=l*h,v=c*u,g=c*h;e[0]=d-g*a,e[4]=-o*h,e[8]=v+f*a,e[1]=f+v*a,e[5]=o*u,e[9]=g-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,f=o*h,v=a*u,g=a*h;e[0]=l*u,e[4]=v*c-f,e[8]=d*c+g,e[1]=l*h,e[5]=g*c+d,e[9]=f*c-v,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,v=a*l,g=a*c;e[0]=l*u,e[4]=g-d*h,e[8]=v*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*h+v,e[10]=d-g*h}else if(t.order==="XZY"){const d=o*l,f=o*c,v=a*l,g=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+g,e[5]=o*u,e[9]=f*h-v,e[2]=v*h-f,e[6]=a*u,e[10]=g*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ju,t,Qu)}lookAt(t,e,n){const s=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),wn.crossVectors(n,Ne),wn.lengthSq()===0&&(Math.abs(n.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),wn.crossVectors(n,Ne)),wn.normalize(),ys.crossVectors(Ne,wn),s[0]=wn.x,s[4]=ys.x,s[8]=Ne.x,s[1]=wn.y,s[5]=ys.y,s[9]=Ne.y,s[2]=wn.z,s[6]=ys.z,s[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],v=n[2],g=n[6],p=n[10],m=n[14],S=n[3],x=n[7],w=n[11],N=n[15],b=s[0],R=s[4],I=s[8],E=s[12],y=s[1],D=s[5],V=s[9],z=s[13],W=s[2],q=s[6],k=s[10],K=s[14],H=s[3],ht=s[7],pt=s[11],vt=s[15];return r[0]=o*b+a*y+l*W+c*H,r[4]=o*R+a*D+l*q+c*ht,r[8]=o*I+a*V+l*k+c*pt,r[12]=o*E+a*z+l*K+c*vt,r[1]=u*b+h*y+d*W+f*H,r[5]=u*R+h*D+d*q+f*ht,r[9]=u*I+h*V+d*k+f*pt,r[13]=u*E+h*z+d*K+f*vt,r[2]=v*b+g*y+p*W+m*H,r[6]=v*R+g*D+p*q+m*ht,r[10]=v*I+g*V+p*k+m*pt,r[14]=v*E+g*z+p*K+m*vt,r[3]=S*b+x*y+w*W+N*H,r[7]=S*R+x*D+w*q+N*ht,r[11]=S*I+x*V+w*k+N*pt,r[15]=S*E+x*z+w*K+N*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],v=t[3],g=t[7],p=t[11],m=t[15];return v*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*f-n*l*f)+g*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+p*(+e*c*h-e*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+m*(-s*a*u-e*l*h+e*a*d+s*o*h-n*o*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],v=t[12],g=t[13],p=t[14],m=t[15],S=h*p*c-g*d*c+g*l*f-a*p*f-h*l*m+a*d*m,x=v*d*c-u*p*c-v*l*f+o*p*f+u*l*m-o*d*m,w=u*g*c-v*h*c+v*a*f-o*g*f-u*a*m+o*h*m,N=v*h*l-u*g*l-v*a*d+o*g*d+u*a*p-o*h*p,b=e*S+n*x+s*w+r*N;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=S*R,t[1]=(g*d*r-h*p*r-g*s*f+n*p*f+h*s*m-n*d*m)*R,t[2]=(a*p*r-g*l*r+g*s*c-n*p*c-a*s*m+n*l*m)*R,t[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*f-n*l*f)*R,t[4]=x*R,t[5]=(u*p*r-v*d*r+v*s*f-e*p*f-u*s*m+e*d*m)*R,t[6]=(v*l*r-o*p*r-v*s*c+e*p*c+o*s*m-e*l*m)*R,t[7]=(o*d*r-u*l*r+u*s*c-e*d*c-o*s*f+e*l*f)*R,t[8]=w*R,t[9]=(v*h*r-u*g*r-v*n*f+e*g*f+u*n*m-e*h*m)*R,t[10]=(o*g*r-v*a*r+v*n*c-e*g*c-o*n*m+e*a*m)*R,t[11]=(u*a*r-o*h*r-u*n*c+e*h*c+o*n*f-e*a*f)*R,t[12]=N*R,t[13]=(u*g*s-v*h*s+v*n*d-e*g*d-u*n*p+e*h*p)*R,t[14]=(v*a*s-o*g*s-v*n*l+e*g*l+o*n*p-e*a*p)*R,t[15]=(o*h*s-u*a*s+u*n*l-e*h*l-o*n*d+e*a*d)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,v=r*h,g=o*u,p=o*h,m=a*h,S=l*c,x=l*u,w=l*h,N=n.x,b=n.y,R=n.z;return s[0]=(1-(g+m))*N,s[1]=(f+w)*N,s[2]=(v-x)*N,s[3]=0,s[4]=(f-w)*b,s[5]=(1-(d+m))*b,s[6]=(p+S)*b,s[7]=0,s[8]=(v+x)*R,s[9]=(p-S)*R,s[10]=(1-(d+g))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ri.set(s[0],s[1],s[2]).length();const o=ri.set(s[4],s[5],s[6]).length(),a=ri.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ye.copy(this);const c=1/r,u=1/o,h=1/a;return Ye.elements[0]*=c,Ye.elements[1]*=c,Ye.elements[2]*=c,Ye.elements[4]*=u,Ye.elements[5]*=u,Ye.elements[6]*=u,Ye.elements[8]*=h,Ye.elements[9]*=h,Ye.elements[10]*=h,e.setFromRotationMatrix(Ye),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=vn){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let f,v;if(a===vn)f=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Qs)f=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=vn){const l=this.elements,c=1/(e-t),u=1/(n-s),h=1/(o-r),d=(e+t)*c,f=(n+s)*u;let v,g;if(a===vn)v=(o+r)*h,g=-2*h;else if(a===Qs)v=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ri=new A,Ye=new te,ju=new A(0,0,0),Qu=new A(1,1,1),wn=new A,ys=new A,Ne=new A,Pa=new te,Da=new as;class Je{constructor(t=0,e=0,n=0,s=Je.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Pa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Da.setFromEuler(this),this.setFromQuaternion(Da,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Je.DEFAULT_ORDER="XYZ";class bo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let th=0;const La=new A,oi=new as,fn=new te,Ss=new A,Wi=new A,eh=new A,nh=new as,Ua=new A(1,0,0),Ia=new A(0,1,0),Na=new A(0,0,1),Fa={type:"added"},ih={type:"removed"},ai={type:"childadded",child:null},Fr={type:"childremoved",child:null};class fe extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fe.DEFAULT_UP.clone();const t=new A,e=new Je,n=new as,s=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new bt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return oi.setFromAxisAngle(t,e),this.quaternion.multiply(oi),this}rotateOnWorldAxis(t,e){return oi.setFromAxisAngle(t,e),this.quaternion.premultiply(oi),this}rotateX(t){return this.rotateOnAxis(Ua,t)}rotateY(t){return this.rotateOnAxis(Ia,t)}rotateZ(t){return this.rotateOnAxis(Na,t)}translateOnAxis(t,e){return La.copy(t).applyQuaternion(this.quaternion),this.position.add(La.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ua,t)}translateY(t){return this.translateOnAxis(Ia,t)}translateZ(t){return this.translateOnAxis(Na,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ss.copy(t):Ss.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(Wi,Ss,this.up):fn.lookAt(Ss,Wi,this.up),this.quaternion.setFromRotationMatrix(fn),s&&(fn.extractRotation(s.matrixWorld),oi.setFromRotationMatrix(fn),this.quaternion.premultiply(oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fa),ai.child=t,this.dispatchEvent(ai),ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ih),Fr.child=t,this.dispatchEvent(Fr),Fr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fa),ai.child=t,this.dispatchEvent(ai),ai.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,t,eh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,nh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),v=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}fe.DEFAULT_UP=new A(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $e=new A,dn=new A,Or=new A,pn=new A,li=new A,ci=new A,Oa=new A,zr=new A,Br=new A,Vr=new A;class en{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),$e.subVectors(t,e),s.cross($e);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){$e.subVectors(s,e),dn.subVectors(n,e),Or.subVectors(t,e);const o=$e.dot($e),a=$e.dot(dn),l=$e.dot(Or),c=dn.dot(dn),u=dn.dot(Or),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,v=(o*u-a*l)*d;return r.set(1-f-v,v,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,pn.x),l.addScaledVector(o,pn.y),l.addScaledVector(a,pn.z),l)}static isFrontFacing(t,e,n,s){return $e.subVectors(n,e),dn.subVectors(t,e),$e.cross(dn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),$e.cross(dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return en.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return en.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return en.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return en.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return en.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;li.subVectors(s,n),ci.subVectors(r,n),zr.subVectors(t,n);const l=li.dot(zr),c=ci.dot(zr);if(l<=0&&c<=0)return e.copy(n);Br.subVectors(t,s);const u=li.dot(Br),h=ci.dot(Br);if(u>=0&&h<=u)return e.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(li,o);Vr.subVectors(t,r);const f=li.dot(Vr),v=ci.dot(Vr);if(v>=0&&f<=v)return e.copy(r);const g=f*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),e.copy(n).addScaledVector(ci,a);const p=u*v-f*h;if(p<=0&&h-u>=0&&f-v>=0)return Oa.subVectors(r,s),a=(h-u)/(h-u+(f-v)),e.copy(s).addScaledVector(Oa,a);const m=1/(p+g+d);return o=g*m,a=d*m,e.copy(n).addScaledVector(li,o).addScaledVector(ci,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $l={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},ws={h:0,s:0,l:0};function Hr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=Ao(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Hr(o,r,t+1/3),this.g=Hr(o,r,t),this.b=Hr(o,r,t-1/3)}return qt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){const n=$l[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}copyLinearToSRGB(t){return this.r=Rr(t.r),this.g=Rr(t.g),this.b=Rr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return qt.fromWorkingColorSpace(we.copy(this),t),Math.round(_e(we.r*255,0,255))*65536+Math.round(_e(we.g*255,0,255))*256+Math.round(_e(we.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(we.copy(this),e);const n=we.r,s=we.g,r=we.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=Ke){qt.fromWorkingColorSpace(we.copy(this),t);const e=we.r,n=we.g,s=we.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(En),this.setHSL(En.h+t,En.s+e,En.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(En),t.getHSL(ws);const n=ji(En.h,ws.h,e),s=ji(En.s,ws.s,e),r=ji(En.l,ws.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const we=new xt;xt.NAMES=$l;let sh=0;class Nn extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=Ri,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lo,this.blendDst=co,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ti,this.stencilZFail=ti,this.stencilZPass=ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lo&&(n.blendSrc=this.blendSrc),this.blendDst!==co&&(n.blendDst=this.blendDst),this.blendEquation!==qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ro extends Nn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.combine=or,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ue=new A,Es=new ot;class Ce{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=wa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Xl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Es.fromBufferAttribute(this,e),Es.applyMatrix3(t),this.setXY(e,Es.x,Es.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ei(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ei(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ei(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ei(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wa&&(t.usage=this.usage),t}}class Kl extends Ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Zl extends Ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Zt extends Ce{constructor(t,e,n){super(new Float32Array(t),e,n)}}let rh=0;const Be=new te,kr=new fe,ui=new A,Fe=new ls,Xi=new ls,ge=new A;class Me extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wl(t)?Zl:Kl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Be.makeRotationFromQuaternion(t),this.applyMatrix4(Be),this}rotateX(t){return Be.makeRotationX(t),this.applyMatrix4(Be),this}rotateY(t){return Be.makeRotationY(t),this.applyMatrix4(Be),this}rotateZ(t){return Be.makeRotationZ(t),this.applyMatrix4(Be),this}translate(t,e,n){return Be.makeTranslation(t,e,n),this.applyMatrix4(Be),this}scale(t,e,n){return Be.makeScale(t,e,n),this.applyMatrix4(Be),this}lookAt(t){return kr.lookAt(t),kr.updateMatrix(),this.applyMatrix4(kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Zt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Fe.setFromBufferAttribute(r),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Xi.setFromBufferAttribute(a),this.morphTargetsRelative?(ge.addVectors(Fe.min,Xi.min),Fe.expandByPoint(ge),ge.addVectors(Fe.max,Xi.max),Fe.expandByPoint(ge)):(Fe.expandByPoint(Xi.min),Fe.expandByPoint(Xi.max))}Fe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ge.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ge));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ge.fromBufferAttribute(a,c),l&&(ui.fromBufferAttribute(t,c),ge.add(ui)),s=Math.max(s,n.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new A,l[I]=new A;const c=new A,u=new A,h=new A,d=new ot,f=new ot,v=new ot,g=new A,p=new A;function m(I,E,y){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,y),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,E),v.fromBufferAttribute(r,y),u.sub(c),h.sub(c),f.sub(d),v.sub(d);const D=1/(f.x*v.y-v.x*f.y);isFinite(D)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(h,-f.y).multiplyScalar(D),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-v.x).multiplyScalar(D),a[I].add(g),a[E].add(g),a[y].add(g),l[I].add(p),l[E].add(p),l[y].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let I=0,E=S.length;I<E;++I){const y=S[I],D=y.start,V=y.count;for(let z=D,W=D+V;z<W;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const x=new A,w=new A,N=new A,b=new A;function R(I){N.fromBufferAttribute(s,I),b.copy(N);const E=a[I];x.copy(E),x.sub(N.multiplyScalar(N.dot(E))).normalize(),w.crossVectors(b,E);const D=w.dot(l[I])<0?-1:1;o.setXYZW(I,x.x,x.y,x.z,D)}for(let I=0,E=S.length;I<E;++I){const y=S[I],D=y.start,V=y.count;for(let z=D,W=D+V;z<W;z+=3)R(t.getX(z+0)),R(t.getX(z+1)),R(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new A,r=new A,o=new A,a=new A,l=new A,c=new A,u=new A,h=new A;if(t)for(let d=0,f=t.count;d<f;d+=3){const v=t.getX(d+0),g=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,v=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*u;for(let m=0;m<u;m++)d[v++]=c[f++]}return new Ce(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Me,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const za=new te,Vn=new cr,Ts=new Zn,Ba=new A,hi=new A,fi=new A,di=new A,Gr=new A,As=new A,bs=new ot,Rs=new ot,Cs=new ot,Va=new A,Ha=new A,ka=new A,Ps=new A,Ds=new A;class j extends fe{constructor(t=new Me,e=new Ro){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){As.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Gr.fromBufferAttribute(h,t),o?As.addScaledVector(Gr,u):As.addScaledVector(Gr.sub(e),u))}e.add(As)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ts.copy(n.boundingSphere),Ts.applyMatrix4(r),Vn.copy(t.ray).recast(t.near),!(Ts.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(Ts,Ba)===null||Vn.origin.distanceToSquared(Ba)>(t.far-t.near)**2))&&(za.copy(r).invert(),Vn.copy(t.ray).applyMatrix4(za),!(n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const p=d[v],m=o[p.materialIndex],S=Math.max(p.start,f.start),x=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let w=S,N=x;w<N;w+=3){const b=a.getX(w),R=a.getX(w+1),I=a.getX(w+2);s=Ls(this,m,t,n,c,u,h,b,R,I),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const v=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let p=v,m=g;p<m;p+=3){const S=a.getX(p),x=a.getX(p+1),w=a.getX(p+2);s=Ls(this,o,t,n,c,u,h,S,x,w),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const p=d[v],m=o[p.materialIndex],S=Math.max(p.start,f.start),x=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let w=S,N=x;w<N;w+=3){const b=w,R=w+1,I=w+2;s=Ls(this,m,t,n,c,u,h,b,R,I),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const v=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=v,m=g;p<m;p+=3){const S=p,x=p+1,w=p+2;s=Ls(this,o,t,n,c,u,h,S,x,w),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function oh(i,t,e,n,s,r,o,a){let l;if(t.side===De?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Dn,a),l===null)return null;Ds.copy(a),Ds.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ds);return c<e.near||c>e.far?null:{distance:c,point:Ds.clone(),object:i}}function Ls(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,hi),i.getVertexPosition(l,fi),i.getVertexPosition(c,di);const u=oh(i,t,e,n,hi,fi,di,Ps);if(u){s&&(bs.fromBufferAttribute(s,a),Rs.fromBufferAttribute(s,l),Cs.fromBufferAttribute(s,c),u.uv=en.getInterpolation(Ps,hi,fi,di,bs,Rs,Cs,new ot)),r&&(bs.fromBufferAttribute(r,a),Rs.fromBufferAttribute(r,l),Cs.fromBufferAttribute(r,c),u.uv1=en.getInterpolation(Ps,hi,fi,di,bs,Rs,Cs,new ot)),o&&(Va.fromBufferAttribute(o,a),Ha.fromBufferAttribute(o,l),ka.fromBufferAttribute(o,c),u.normal=en.getInterpolation(Ps,hi,fi,di,Va,Ha,ka,new A),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new A,materialIndex:0};en.getNormal(hi,fi,di,h.normal),u.face=h}return u}class he extends Me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;v("z","y","x",-1,-1,n,e,t,o,r,0),v("z","y","x",1,-1,n,e,-t,o,r,1),v("x","z","y",1,1,t,n,e,s,o,2),v("x","z","y",1,-1,t,n,-e,s,o,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(h,2));function v(g,p,m,S,x,w,N,b,R,I,E){const y=w/R,D=N/I,V=w/2,z=N/2,W=b/2,q=R+1,k=I+1;let K=0,H=0;const ht=new A;for(let pt=0;pt<k;pt++){const vt=pt*D-z;for(let Bt=0;Bt<q;Bt++){const Yt=Bt*y-V;ht[g]=Yt*S,ht[p]=vt*x,ht[m]=W,c.push(ht.x,ht.y,ht.z),ht[g]=0,ht[p]=0,ht[m]=b>0?1:-1,u.push(ht.x,ht.y,ht.z),h.push(Bt/R),h.push(1-pt/I),K+=1}}for(let pt=0;pt<I;pt++)for(let vt=0;vt<R;vt++){const Bt=d+vt+q*pt,Yt=d+vt+q*(pt+1),X=d+(vt+1)+q*(pt+1),Q=d+(vt+1)+q*pt;l.push(Bt,Yt,Q),l.push(Yt,X,Q),H+=6}a.addGroup(f,H,E),f+=H,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new he(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Re(i){const t={};for(let e=0;e<i.length;e++){const n=Fi(i[e]);for(const s in n)t[s]=n[s]}return t}function ah(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Jl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const lh={clone:Fi,merge:Re};var ch=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jt extends Nn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ch,this.fragmentShader=uh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fi(t.uniforms),this.uniformsGroups=ah(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Co extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tn=new A,Ga=new ot,Wa=new ot;class ke extends Co{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ns*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ji*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ns*2*Math.atan(Math.tan(Ji*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z)}getViewSize(t,e){return this.getViewBounds(t,Ga,Wa),e.subVectors(Wa,Ga)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ji*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const pi=-90,mi=1;class hh extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ke(pi,mi,t,e);s.layers=this.layers,this.add(s);const r=new ke(pi,mi,t,e);r.layers=this.layers,this.add(r);const o=new ke(pi,mi,t,e);o.layers=this.layers,this.add(o);const a=new ke(pi,mi,t,e);a.layers=this.layers,this.add(a);const l=new ke(pi,mi,t,e);l.layers=this.layers,this.add(l);const c=new ke(pi,mi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class jl extends Ue{constructor(t,e,n,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Di,super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fh extends Un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new jl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:We}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new he(5,5,5),r=new Jt({name:"CubemapFromEquirect",uniforms:Fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:gn});r.uniforms.tEquirect.value=e;const o=new j(s,r),a=e.minFilter;return e.minFilter===$n&&(e.minFilter=We),new hh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Wr=new A,dh=new A,ph=new bt;class An{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Wr.subVectors(n,e).cross(dh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Wr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ph.getNormalMatrix(t),s=this.coplanarPoint(Wr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new Zn,Us=new A;class Po{constructor(t=new An,e=new An,n=new An,s=new An,r=new An,o=new An){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],v=s[9],g=s[10],p=s[11],m=s[12],S=s[13],x=s[14],w=s[15];if(n[0].setComponents(l-r,d-c,p-f,w-m).normalize(),n[1].setComponents(l+r,d+c,p+f,w+m).normalize(),n[2].setComponents(l+o,d+u,p+v,w+S).normalize(),n[3].setComponents(l-o,d-u,p-v,w-S).normalize(),n[4].setComponents(l-a,d-h,p-g,w-x).normalize(),e===vn)n[5].setComponents(l+a,d+h,p+g,w+x).normalize();else if(e===Qs)n[5].setComponents(a,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(t){return Hn.center.set(0,0,0),Hn.radius=.7071067811865476,Hn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Us.x=s.normal.x>0?t.max.x:t.min.x,Us.y=s.normal.y>0?t.max.y:t.min.y,Us.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Us)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ql(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function mh(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l._updateRange,d=l.updateRanges;if(i.bindBuffer(c,a),h.count===-1&&d.length===0&&i.bufferSubData(c,0,u),d.length!==0){for(let f=0,v=d.length;f<v;f++){const g=d[f];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}h.count!==-1&&(i.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class ie extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=t/a,d=e/l,f=[],v=[],g=[],p=[];for(let m=0;m<u;m++){const S=m*d-o;for(let x=0;x<c;x++){const w=x*h-r;v.push(w,-S,0),g.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){const x=S+c*m,w=S+c*(m+1),N=S+1+c*(m+1),b=S+1+c*m;f.push(x,w,b),f.push(w,N,b)}this.setIndex(f),this.setAttribute("position",new Zt(v,3)),this.setAttribute("normal",new Zt(g,3)),this.setAttribute("uv",new Zt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ie(t.width,t.height,t.widthSegments,t.heightSegments)}}var vh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gh=`#ifdef USE_ALPHAHASH
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
#endif`,_h=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sh=`#ifdef USE_AOMAP
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
#endif`,wh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Th=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ah=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ch=`#ifdef USE_IRIDESCENCE
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
#endif`,Ph=`#ifdef USE_BUMPMAP
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
#endif`,Dh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Oh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zh=`#if defined( USE_COLOR_ALPHA )
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
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,Bh=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Vh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hh=`vec3 transformedNormal = objectNormal;
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
#endif`,kh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,$h=`#ifdef USE_ENVMAP
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
#endif`,Kh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zh=`#ifdef USE_ENVMAP
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
#endif`,Jh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jh=`#ifdef USE_ENVMAP
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
#endif`,Qh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ef=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sf=`#ifdef USE_GRADIENTMAP
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
}`,rf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,of=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,af=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lf=`uniform bool receiveShadow;
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
#endif`,cf=`#ifdef USE_ENVMAP
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
#endif`,uf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ff=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pf=`PhysicalMaterial material;
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
#endif`,mf=`struct PhysicalMaterial {
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
}`,vf=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,gf=`#if defined( RE_IndirectDiffuse )
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
#endif`,_f=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ef=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Af=`#if defined( USE_POINTS_UV )
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
#endif`,bf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pf=`#if defined( USE_MORPHCOLORS )
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
#endif`,Lf=`#ifdef USE_MORPHTARGETS
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
#endif`,Uf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,If=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ff=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bf=`#ifdef USE_NORMALMAP
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
#endif`,Vf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,qf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$f=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return shadow;
	}
#endif`,Qf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,td=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ed=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,id=`#ifdef USE_SKINNING
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
#endif`,sd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rd=`#ifdef USE_SKINNING
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
#endif`,od=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ad=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ld=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cd=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ud=`#ifdef USE_TRANSMISSION
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
#endif`,hd=`#ifdef USE_TRANSMISSION
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
#endif`,fd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,md=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gd=`uniform sampler2D t2D;
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
}`,_d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sd=`#include <common>
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
}`,wd=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ed=`#define DISTANCE
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
}`,Td=`#define DISTANCE
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
}`,Ad=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rd=`uniform float scale;
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
}`,Cd=`uniform vec3 diffuse;
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
}`,Pd=`#include <common>
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
}`,Dd=`uniform vec3 diffuse;
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
}`,Ld=`#define LAMBERT
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
}`,Ud=`#define LAMBERT
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
}`,Id=`#define MATCAP
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
}`,Nd=`#define MATCAP
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
}`,Fd=`#define NORMAL
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
}`,Od=`#define NORMAL
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
}`,zd=`#define PHONG
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
}`,Bd=`#define PHONG
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
}`,Vd=`#define STANDARD
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
}`,Hd=`#define STANDARD
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
}`,kd=`#define TOON
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
}`,Gd=`#define TOON
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
}`,Wd=`uniform float size;
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
}`,Xd=`uniform vec3 diffuse;
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
}`,qd=`#include <common>
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
}`,Yd=`uniform vec3 color;
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
}`,$d=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Kd=`uniform vec3 diffuse;
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
}`,Pt={alphahash_fragment:vh,alphahash_pars_fragment:gh,alphamap_fragment:_h,alphamap_pars_fragment:xh,alphatest_fragment:Mh,alphatest_pars_fragment:yh,aomap_fragment:Sh,aomap_pars_fragment:wh,batching_pars_vertex:Eh,batching_vertex:Th,begin_vertex:Ah,beginnormal_vertex:bh,bsdfs:Rh,iridescence_fragment:Ch,bumpmap_pars_fragment:Ph,clipping_planes_fragment:Dh,clipping_planes_pars_fragment:Lh,clipping_planes_pars_vertex:Uh,clipping_planes_vertex:Ih,color_fragment:Nh,color_pars_fragment:Fh,color_pars_vertex:Oh,color_vertex:zh,common:Bh,cube_uv_reflection_fragment:Vh,defaultnormal_vertex:Hh,displacementmap_pars_vertex:kh,displacementmap_vertex:Gh,emissivemap_fragment:Wh,emissivemap_pars_fragment:Xh,colorspace_fragment:qh,colorspace_pars_fragment:Yh,envmap_fragment:$h,envmap_common_pars_fragment:Kh,envmap_pars_fragment:Zh,envmap_pars_vertex:Jh,envmap_physical_pars_fragment:cf,envmap_vertex:jh,fog_vertex:Qh,fog_pars_vertex:tf,fog_fragment:ef,fog_pars_fragment:nf,gradientmap_pars_fragment:sf,lightmap_pars_fragment:rf,lights_lambert_fragment:of,lights_lambert_pars_fragment:af,lights_pars_begin:lf,lights_toon_fragment:uf,lights_toon_pars_fragment:hf,lights_phong_fragment:ff,lights_phong_pars_fragment:df,lights_physical_fragment:pf,lights_physical_pars_fragment:mf,lights_fragment_begin:vf,lights_fragment_maps:gf,lights_fragment_end:_f,logdepthbuf_fragment:xf,logdepthbuf_pars_fragment:Mf,logdepthbuf_pars_vertex:yf,logdepthbuf_vertex:Sf,map_fragment:wf,map_pars_fragment:Ef,map_particle_fragment:Tf,map_particle_pars_fragment:Af,metalnessmap_fragment:bf,metalnessmap_pars_fragment:Rf,morphinstance_vertex:Cf,morphcolor_vertex:Pf,morphnormal_vertex:Df,morphtarget_pars_vertex:Lf,morphtarget_vertex:Uf,normal_fragment_begin:If,normal_fragment_maps:Nf,normal_pars_fragment:Ff,normal_pars_vertex:Of,normal_vertex:zf,normalmap_pars_fragment:Bf,clearcoat_normal_fragment_begin:Vf,clearcoat_normal_fragment_maps:Hf,clearcoat_pars_fragment:kf,iridescence_pars_fragment:Gf,opaque_fragment:Wf,packing:Xf,premultiplied_alpha_fragment:qf,project_vertex:Yf,dithering_fragment:$f,dithering_pars_fragment:Kf,roughnessmap_fragment:Zf,roughnessmap_pars_fragment:Jf,shadowmap_pars_fragment:jf,shadowmap_pars_vertex:Qf,shadowmap_vertex:td,shadowmask_pars_fragment:ed,skinbase_vertex:nd,skinning_pars_vertex:id,skinning_vertex:sd,skinnormal_vertex:rd,specularmap_fragment:od,specularmap_pars_fragment:ad,tonemapping_fragment:ld,tonemapping_pars_fragment:cd,transmission_fragment:ud,transmission_pars_fragment:hd,uv_pars_fragment:fd,uv_pars_vertex:dd,uv_vertex:pd,worldpos_vertex:md,background_vert:vd,background_frag:gd,backgroundCube_vert:_d,backgroundCube_frag:xd,cube_vert:Md,cube_frag:yd,depth_vert:Sd,depth_frag:wd,distanceRGBA_vert:Ed,distanceRGBA_frag:Td,equirect_vert:Ad,equirect_frag:bd,linedashed_vert:Rd,linedashed_frag:Cd,meshbasic_vert:Pd,meshbasic_frag:Dd,meshlambert_vert:Ld,meshlambert_frag:Ud,meshmatcap_vert:Id,meshmatcap_frag:Nd,meshnormal_vert:Fd,meshnormal_frag:Od,meshphong_vert:zd,meshphong_frag:Bd,meshphysical_vert:Vd,meshphysical_frag:Hd,meshtoon_vert:kd,meshtoon_frag:Gd,points_vert:Wd,points_frag:Xd,shadow_vert:qd,shadow_frag:Yd,sprite_vert:$d,sprite_frag:Kd},it={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new bt}},envmap:{envMap:{value:null},envMapRotation:{value:new bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new bt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0},uvTransform:{value:new bt}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}}},tn={basic:{uniforms:Re([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:Re([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new xt(0)}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:Re([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:Re([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:Re([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new xt(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:Re([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:Re([it.points,it.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:Re([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:Re([it.common,it.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:Re([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:Re([it.sprite,it.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new bt}},vertexShader:Pt.backgroundCube_vert,fragmentShader:Pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distanceRGBA:{uniforms:Re([it.common,it.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distanceRGBA_vert,fragmentShader:Pt.distanceRGBA_frag},shadow:{uniforms:Re([it.lights,it.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};tn.physical={uniforms:Re([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new bt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new bt},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new bt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new bt},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new bt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new bt}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};const Is={r:0,b:0,g:0},kn=new Je,Zd=new te;function Jd(i,t,e,n,s,r,o){const a=new xt(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function v(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?e:t).get(x)),x}function g(S){let x=!1;const w=v(S);w===null?m(a,l):w&&w.isColor&&(m(w,1),x=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(S,x){const w=v(x);w&&(w.isCubeTexture||w.mapping===ar)?(u===void 0&&(u=new j(new he(1,1,1),new Jt({name:"BackgroundCubeMaterial",uniforms:Fi(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),kn.copy(x.backgroundRotation),kn.x*=-1,kn.y*=-1,kn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Zd.makeRotationFromEuler(kn)),u.material.toneMapped=qt.getTransfer(w.colorSpace)!==Qt,(h!==w||d!==w.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=w,d=w.version,f=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new j(new ie(2,2),new Jt({name:"BackgroundMaterial",uniforms:Fi(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=qt.getTransfer(w.colorSpace)!==Qt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||d!==w.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=w,d=w.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,x){S.getRGB(Is,Jl(i)),n.buffers.color.setClear(Is.r,Is.g,Is.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(a,l)},render:g,addToRenderList:p}}function jd(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(y,D,V,z,W){let q=!1;const k=h(z,V,D);r!==k&&(r=k,c(r.object)),q=f(y,z,V,W),q&&v(y,z,V,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,w(y,D,V,z),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,D,V){const z=V.wireframe===!0;let W=n[y.id];W===void 0&&(W={},n[y.id]=W);let q=W[D.id];q===void 0&&(q={},W[D.id]=q);let k=q[z];return k===void 0&&(k=d(l()),q[z]=k),k}function d(y){const D=[],V=[],z=[];for(let W=0;W<e;W++)D[W]=0,V[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:V,attributeDivisors:z,object:y,attributes:{},index:null}}function f(y,D,V,z){const W=r.attributes,q=D.attributes;let k=0;const K=V.getAttributes();for(const H in K)if(K[H].location>=0){const pt=W[H];let vt=q[H];if(vt===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(vt=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(vt=y.instanceColor)),pt===void 0||pt.attribute!==vt||vt&&pt.data!==vt.data)return!0;k++}return r.attributesNum!==k||r.index!==z}function v(y,D,V,z){const W={},q=D.attributes;let k=0;const K=V.getAttributes();for(const H in K)if(K[H].location>=0){let pt=q[H];pt===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(pt=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(pt=y.instanceColor));const vt={};vt.attribute=pt,pt&&pt.data&&(vt.data=pt.data),W[H]=vt,k++}r.attributes=W,r.attributesNum=k,r.index=z}function g(){const y=r.newAttributes;for(let D=0,V=y.length;D<V;D++)y[D]=0}function p(y){m(y,0)}function m(y,D){const V=r.newAttributes,z=r.enabledAttributes,W=r.attributeDivisors;V[y]=1,z[y]===0&&(i.enableVertexAttribArray(y),z[y]=1),W[y]!==D&&(i.vertexAttribDivisor(y,D),W[y]=D)}function S(){const y=r.newAttributes,D=r.enabledAttributes;for(let V=0,z=D.length;V<z;V++)D[V]!==y[V]&&(i.disableVertexAttribArray(V),D[V]=0)}function x(y,D,V,z,W,q,k){k===!0?i.vertexAttribIPointer(y,D,V,W,q):i.vertexAttribPointer(y,D,V,z,W,q)}function w(y,D,V,z){g();const W=z.attributes,q=V.getAttributes(),k=D.defaultAttributeValues;for(const K in q){const H=q[K];if(H.location>=0){let ht=W[K];if(ht===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor)),ht!==void 0){const pt=ht.normalized,vt=ht.itemSize,Bt=t.get(ht);if(Bt===void 0)continue;const Yt=Bt.buffer,X=Bt.type,Q=Bt.bytesPerElement,dt=X===i.INT||X===i.UNSIGNED_INT||ht.gpuType===Ol;if(ht.isInterleavedBufferAttribute){const at=ht.data,It=at.stride,Dt=ht.offset;if(at.isInstancedInterleavedBuffer){for(let Ht=0;Ht<H.locationSize;Ht++)m(H.location+Ht,at.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ht=0;Ht<H.locationSize;Ht++)p(H.location+Ht);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let Ht=0;Ht<H.locationSize;Ht++)x(H.location+Ht,vt/H.locationSize,X,pt,It*Q,(Dt+vt/H.locationSize*Ht)*Q,dt)}else{if(ht.isInstancedBufferAttribute){for(let at=0;at<H.locationSize;at++)m(H.location+at,ht.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let at=0;at<H.locationSize;at++)p(H.location+at);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let at=0;at<H.locationSize;at++)x(H.location+at,vt/H.locationSize,X,pt,vt*Q,vt/H.locationSize*at*Q,dt)}}else if(k!==void 0){const pt=k[K];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(H.location,pt);break;case 3:i.vertexAttrib3fv(H.location,pt);break;case 4:i.vertexAttrib4fv(H.location,pt);break;default:i.vertexAttrib1fv(H.location,pt)}}}}S()}function N(){I();for(const y in n){const D=n[y];for(const V in D){const z=D[V];for(const W in z)u(z[W].object),delete z[W];delete D[V]}delete n[y]}}function b(y){if(n[y.id]===void 0)return;const D=n[y.id];for(const V in D){const z=D[V];for(const W in z)u(z[W].object),delete z[W];delete D[V]}delete n[y.id]}function R(y){for(const D in n){const V=n[D];if(V[y.id]===void 0)continue;const z=V[y.id];for(const W in z)u(z[W].object),delete z[W];delete V[y.id]}}function I(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:N,releaseStatesOfGeometry:b,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:p,disableUnusedAttributes:S}}function Qd(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<h;f++)this.render(c[f],u[f]);else{d.multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let v=0;v<h;v++)f+=u[v];e.update(f,n,1)}}function l(c,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<c.length;v++)o(c[v],u[v],d[v]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let v=0;for(let g=0;g<h;g++)v+=u[g];for(let g=0;g<d.length;g++)e.update(v,n,d[g])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function tp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==Ze&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const R=b===os&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Ln&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Cn&&!R)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=f>0,N=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:w,maxSamples:N}}function ep(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new An,a=new bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const v=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,m=i.get(h);if(!s||v===null||v.length===0||r&&!p)r?u(null):c();else{const S=r?0:n,x=S*4;let w=m.clippingState||null;l.value=w,w=u(v,d,x,f);for(let N=0;N!==x;++N)w[N]=e[N];m.clippingState=w,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,v){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,v!==!0||p===null){const m=f+g*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,w=f;x!==g;++x,w+=4)o.copy(h[x]).applyMatrix4(S,a),o.normal.toArray(p,w),p[w+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function np(i){let t=new WeakMap;function e(o,a){return a===uo?o.mapping=Di:a===ho&&(o.mapping=Li),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===uo||a===ho)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new fh(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class tc extends Co{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ai=4,Xa=[.125,.215,.35,.446,.526,.582],Yn=20,Xr=new tc,qa=new xt;let qr=null,Yr=0,$r=0,Kr=!1;const Xn=(1+Math.sqrt(5))/2,vi=1/Xn,Ya=[new A(-Xn,vi,0),new A(Xn,vi,0),new A(-vi,0,Xn),new A(vi,0,Xn),new A(0,Xn,-vi),new A(0,Xn,vi),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class $a{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){qr=this._renderer.getRenderTarget(),Yr=this._renderer.getActiveCubeFace(),$r=this._renderer.getActiveMipmapLevel(),Kr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ja(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Za(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qr,Yr,$r),this._renderer.xr.enabled=Kr,t.scissorTest=!1,Ns(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Di||t.mapping===Li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qr=this._renderer.getRenderTarget(),Yr=this._renderer.getActiveCubeFace(),$r=this._renderer.getActiveMipmapLevel(),Kr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:os,format:Ze,colorSpace:In,depthBuffer:!1},s=Ka(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ka(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ip(r)),this._blurMaterial=sp(r,t,e)}return s}_compileMaterial(t){const e=new j(this._lodPlanes[0],t);this._renderer.compile(e,Xr)}_sceneToCubeUV(t,e,n,s){const a=new ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(qa),u.toneMapping=Pn,u.autoClear=!1;const f=new Ro({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),v=new j(new he,f);let g=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,g=!0):(f.color.copy(qa),g=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):S===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;Ns(s,S*x,m>2?x:0,x,x),u.setRenderTarget(s),g&&u.render(v,a),u.render(t,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Di||t.mapping===Li;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ja()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Za());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new j(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ns(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Xr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ya[(s-r-1)%Ya.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new j(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Yn-1),g=r/v,p=isFinite(r)?1+Math.floor(u*g):Yn;p>Yn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Yn}`);const m=[];let S=0;for(let R=0;R<Yn;++R){const I=R/g,E=Math.exp(-I*I/2);m.push(E),R===0?S+=E:R<p&&(S+=2*E)}for(let R=0;R<m.length;R++)m[R]=m[R]/S;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=v,d.mipInt.value=x-n;const w=this._sizeLods[s],N=3*w*(s>x-Ai?s-x+Ai:0),b=4*(this._cubeSize-w);Ns(e,N,b,3*w,2*w),l.setRenderTarget(e),l.render(h,Xr)}}function ip(i){const t=[],e=[],n=[];let s=i;const r=i-Ai+1+Xa.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Ai?l=Xa[o-i+Ai-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,v=6,g=3,p=2,m=1,S=new Float32Array(g*v*f),x=new Float32Array(p*v*f),w=new Float32Array(m*v*f);for(let b=0;b<f;b++){const R=b%3*2/3-1,I=b>2?0:-1,E=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];S.set(E,g*v*b),x.set(d,p*v*b);const y=[b,b,b,b,b,b];w.set(y,m*v*b)}const N=new Me;N.setAttribute("position",new Ce(S,g)),N.setAttribute("uv",new Ce(x,p)),N.setAttribute("faceIndex",new Ce(w,m)),t.push(N),s>Ai&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ka(i,t,e){const n=new Un(i,t,e);return n.texture.mapping=ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ns(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function sp(i,t,e){const n=new Float32Array(Yn),s=new A(0,1,0);return new Jt({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Do(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Za(){return new Jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Do(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Ja(){return new Jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Do(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Do(){return`

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
	`}function rp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===uo||l===ho,u=l===Di||l===Li;if(c||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new $a(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new $a(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function op(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Xl("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ap(i,t,e,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let p=0,m=g.length;p<m;p++)t.remove(g[p])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const v in d)t.update(d[v],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const v in f){const g=f[v];for(let p=0,m=g.length;p<m;p++)t.update(g[p],i.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,v=h.attributes.position;let g=0;if(f!==null){const S=f.array;g=f.version;for(let x=0,w=S.length;x<w;x+=3){const N=S[x+0],b=S[x+1],R=S[x+2];d.push(N,b,b,R,R,N)}}else if(v!==void 0){const S=v.array;g=v.version;for(let x=0,w=S.length/3-1;x<w;x+=3){const N=x+0,b=x+1,R=x+2;d.push(N,b,b,R,R,N)}}else return;const p=new(Wl(d)?Zl:Kl)(d,1);p.version=g;const m=r.get(h);m&&t.remove(m),r.set(h,p)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function lp(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,v){v!==0&&(i.drawElementsInstanced(n,f,r,d*o,v),e.update(f,n,v))}function u(d,f,v){if(v===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<v;p++)this.render(d[p]/o,f[p]);else{g.multiDrawElementsWEBGL(n,f,0,r,d,0,v);let p=0;for(let m=0;m<v;m++)p+=f[m];e.update(p,n,1)}}function h(d,f,v,g){if(v===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,v);let m=0;for(let S=0;S<v;S++)m+=f[S];for(let S=0;S<g.length;S++)e.update(m,n,g[S])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function cp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function up(i,t,e){const n=new WeakMap,s=new jt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let y=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let w=0;v===!0&&(w=1),g===!0&&(w=2),p===!0&&(w=3);let N=a.attributes.position.count*w,b=1;N>t.maxTextureSize&&(b=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const R=new Float32Array(N*b*4*h),I=new Yl(R,N,b,h);I.type=Cn,I.needsUpdate=!0;const E=w*4;for(let D=0;D<h;D++){const V=m[D],z=S[D],W=x[D],q=N*b*4*D;for(let k=0;k<V.count;k++){const K=k*E;v===!0&&(s.fromBufferAttribute(V,k),R[q+K+0]=s.x,R[q+K+1]=s.y,R[q+K+2]=s.z,R[q+K+3]=0),g===!0&&(s.fromBufferAttribute(z,k),R[q+K+4]=s.x,R[q+K+5]=s.y,R[q+K+6]=s.z,R[q+K+7]=0),p===!0&&(s.fromBufferAttribute(W,k),R[q+K+8]=s.x,R[q+K+9]=s.y,R[q+K+10]=s.z,R[q+K+11]=W.itemSize===4?s.w:1)}}d={count:h,texture:I,size:new ot(N,b)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let v=0;for(let p=0;p<c.length;p++)v+=c[p];const g=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function hp(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class ec extends Ue{constructor(t,e,n,s,r,o,a,l,c,u=Ci){if(u!==Ci&&u!==Ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ci&&(n=Ui),n===void 0&&u===Ni&&(n=Ii),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Le,this.minFilter=l!==void 0?l:Le,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const nc=new Ue,ic=new ec(1,1);ic.compareFunction=Gl;const sc=new Yl,rc=new Zu,oc=new jl,ja=[],Qa=[],tl=new Float32Array(16),el=new Float32Array(9),nl=new Float32Array(4);function Bi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ja[s];if(r===void 0&&(r=new Float32Array(s),ja[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function de(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ur(i,t){let e=Qa[t];e===void 0&&(e=new Int32Array(t),Qa[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function fp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function dp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;i.uniform2fv(this.addr,t),pe(e,t)}}function pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(de(e,t))return;i.uniform3fv(this.addr,t),pe(e,t)}}function mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;i.uniform4fv(this.addr,t),pe(e,t)}}function vp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),pe(e,t)}else{if(de(e,n))return;nl.set(n),i.uniformMatrix2fv(this.addr,!1,nl),pe(e,n)}}function gp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),pe(e,t)}else{if(de(e,n))return;el.set(n),i.uniformMatrix3fv(this.addr,!1,el),pe(e,n)}}function _p(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),pe(e,t)}else{if(de(e,n))return;tl.set(n),i.uniformMatrix4fv(this.addr,!1,tl),pe(e,n)}}function xp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;i.uniform2iv(this.addr,t),pe(e,t)}}function yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;i.uniform3iv(this.addr,t),pe(e,t)}}function Sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;i.uniform4iv(this.addr,t),pe(e,t)}}function wp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ep(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;i.uniform2uiv(this.addr,t),pe(e,t)}}function Tp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;i.uniform3uiv(this.addr,t),pe(e,t)}}function Ap(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;i.uniform4uiv(this.addr,t),pe(e,t)}}function bp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?ic:nc;e.setTexture2D(t||r,s)}function Rp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||rc,s)}function Cp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||oc,s)}function Pp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||sc,s)}function Dp(i){switch(i){case 5126:return fp;case 35664:return dp;case 35665:return pp;case 35666:return mp;case 35674:return vp;case 35675:return gp;case 35676:return _p;case 5124:case 35670:return xp;case 35667:case 35671:return Mp;case 35668:case 35672:return yp;case 35669:case 35673:return Sp;case 5125:return wp;case 36294:return Ep;case 36295:return Tp;case 36296:return Ap;case 35678:case 36198:case 36298:case 36306:case 35682:return bp;case 35679:case 36299:case 36307:return Rp;case 35680:case 36300:case 36308:case 36293:return Cp;case 36289:case 36303:case 36311:case 36292:return Pp}}function Lp(i,t){i.uniform1fv(this.addr,t)}function Up(i,t){const e=Bi(t,this.size,2);i.uniform2fv(this.addr,e)}function Ip(i,t){const e=Bi(t,this.size,3);i.uniform3fv(this.addr,e)}function Np(i,t){const e=Bi(t,this.size,4);i.uniform4fv(this.addr,e)}function Fp(i,t){const e=Bi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Op(i,t){const e=Bi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function zp(i,t){const e=Bi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Bp(i,t){i.uniform1iv(this.addr,t)}function Vp(i,t){i.uniform2iv(this.addr,t)}function Hp(i,t){i.uniform3iv(this.addr,t)}function kp(i,t){i.uniform4iv(this.addr,t)}function Gp(i,t){i.uniform1uiv(this.addr,t)}function Wp(i,t){i.uniform2uiv(this.addr,t)}function Xp(i,t){i.uniform3uiv(this.addr,t)}function qp(i,t){i.uniform4uiv(this.addr,t)}function Yp(i,t,e){const n=this.cache,s=t.length,r=ur(e,s);de(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||nc,r[o])}function $p(i,t,e){const n=this.cache,s=t.length,r=ur(e,s);de(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||rc,r[o])}function Kp(i,t,e){const n=this.cache,s=t.length,r=ur(e,s);de(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||oc,r[o])}function Zp(i,t,e){const n=this.cache,s=t.length,r=ur(e,s);de(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||sc,r[o])}function Jp(i){switch(i){case 5126:return Lp;case 35664:return Up;case 35665:return Ip;case 35666:return Np;case 35674:return Fp;case 35675:return Op;case 35676:return zp;case 5124:case 35670:return Bp;case 35667:case 35671:return Vp;case 35668:case 35672:return Hp;case 35669:case 35673:return kp;case 5125:return Gp;case 36294:return Wp;case 36295:return Xp;case 36296:return qp;case 35678:case 36198:case 36298:case 36306:case 35682:return Yp;case 35679:case 36299:case 36307:return $p;case 35680:case 36300:case 36308:case 36293:return Kp;case 36289:case 36303:case 36311:case 36292:return Zp}}class jp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Dp(e.type)}}class Qp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jp(e.type)}}class tm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Zr=/(\w+)(\])?(\[|\.)?/g;function il(i,t){i.seq.push(t),i.map[t.id]=t}function em(i,t,e){const n=i.name,s=n.length;for(Zr.lastIndex=0;;){const r=Zr.exec(n),o=Zr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){il(e,c===void 0?new jp(a,i,t):new Qp(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new tm(a),il(e,h)),e=h}}}class Ys{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);em(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function sl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const nm=37297;let im=0;function sm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function rm(i){const t=qt.getPrimaries(qt.workingColorSpace),e=qt.getPrimaries(i);let n;switch(t===e?n="":t===js&&e===Js?n="LinearDisplayP3ToLinearSRGB":t===Js&&e===js&&(n="LinearSRGBToLinearDisplayP3"),i){case In:case lr:return[n,"LinearTransferOETF"];case Ke:case To:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function rl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+sm(i.getShaderSource(t),o)}else return s}function om(i,t){const e=rm(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function am(i,t){let e;switch(t){case Qc:e="Linear";break;case tu:e="Reinhard";break;case eu:e="OptimizedCineon";break;case nu:e="ACESFilmic";break;case su:e="AgX";break;case ru:e="Neutral";break;case iu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function lm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zi).join(`
`)}function cm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function um(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Zi(i){return i!==""}function ol(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function al(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const hm=/^[ \t]*#include +<([\w\d./]+)>/gm;function mo(i){return i.replace(hm,dm)}const fm=new Map;function dm(i,t){let e=Pt[t];if(e===void 0){const n=fm.get(t);if(n!==void 0)e=Pt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return mo(e)}const pm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ll(i){return i.replace(pm,mm)}function mm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function vm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Nl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Tc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mn&&(t="SHADOWMAP_TYPE_VSM"),t}function gm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Di:case Li:t="ENVMAP_TYPE_CUBE";break;case ar:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _m(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Li:t="ENVMAP_MODE_REFRACTION";break}return t}function xm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case or:t="ENVMAP_BLENDING_MULTIPLY";break;case Jc:t="ENVMAP_BLENDING_MIX";break;case jc:t="ENVMAP_BLENDING_ADD";break}return t}function Mm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function ym(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=vm(e),c=gm(e),u=_m(e),h=xm(e),d=Mm(e),f=lm(e),v=cm(r),g=s.createProgram();let p,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Zi).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Zi).join(`
`),m.length>0&&(m+=`
`)):(p=[cl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zi).join(`
`),m=[cl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pn?"#define TONE_MAPPING":"",e.toneMapping!==Pn?Pt.tonemapping_pars_fragment:"",e.toneMapping!==Pn?am("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Pt.colorspace_pars_fragment,om("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zi).join(`
`)),o=mo(o),o=ol(o,e),o=al(o,e),a=mo(a),a=ol(a,e),a=al(a,e),o=ll(o),a=ll(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Ea?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ea?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=S+p+o,w=S+m+a,N=sl(s,s.VERTEX_SHADER,x),b=sl(s,s.FRAGMENT_SHADER,w);s.attachShader(g,N),s.attachShader(g,b),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function R(D){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(g).trim(),z=s.getShaderInfoLog(N).trim(),W=s.getShaderInfoLog(b).trim();let q=!0,k=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,N,b);else{const K=rl(s,N,"vertex"),H=rl(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+K+`
`+H)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(z===""||W==="")&&(k=!1);k&&(D.diagnostics={runnable:q,programLog:V,vertexShader:{log:z,prefix:p},fragmentShader:{log:W,prefix:m}})}s.deleteShader(N),s.deleteShader(b),I=new Ys(s,g),E=um(s,g)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(g,nm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=im++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=N,this.fragmentShader=b,this}let Sm=0;class wm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Em(t),e.set(t,n)),n}}class Em{constructor(t){this.id=Sm++,this.code=t,this.usedTimes=0}}function Tm(i,t,e,n,s,r,o){const a=new bo,l=new wm,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,y,D,V,z){const W=V.fog,q=z.geometry,k=E.isMeshStandardMaterial?V.environment:null,K=(E.isMeshStandardMaterial?e:t).get(E.envMap||k),H=K&&K.mapping===ar?K.image.height:null,ht=v[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const pt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,vt=pt!==void 0?pt.length:0;let Bt=0;q.morphAttributes.position!==void 0&&(Bt=1),q.morphAttributes.normal!==void 0&&(Bt=2),q.morphAttributes.color!==void 0&&(Bt=3);let Yt,X,Q,dt;if(ht){const $t=tn[ht];Yt=$t.vertexShader,X=$t.fragmentShader}else Yt=E.vertexShader,X=E.fragmentShader,l.update(E),Q=l.getVertexShaderID(E),dt=l.getFragmentShaderID(E);const at=i.getRenderTarget(),It=z.isInstancedMesh===!0,Dt=z.isBatchedMesh===!0,Ht=!!E.map,P=!!E.matcap,Vt=!!K,Ot=!!E.aoMap,ee=!!E.lightMap,St=!!E.bumpMap,kt=!!E.normalMap,Nt=!!E.displacementMap,Ct=!!E.emissiveMap,ce=!!E.metalnessMap,T=!!E.roughnessMap,_=E.anisotropy>0,B=E.clearcoat>0,$=E.dispersion>0,Z=E.iridescence>0,J=E.sheen>0,Mt=E.transmission>0,st=_&&!!E.anisotropyMap,rt=B&&!!E.clearcoatMap,Lt=B&&!!E.clearcoatNormalMap,tt=B&&!!E.clearcoatRoughnessMap,gt=Z&&!!E.iridescenceMap,Ft=Z&&!!E.iridescenceThicknessMap,Tt=J&&!!E.sheenColorMap,lt=J&&!!E.sheenRoughnessMap,Ut=!!E.specularMap,zt=!!E.specularColorMap,ae=!!E.specularIntensityMap,C=Mt&&!!E.transmissionMap,ct=Mt&&!!E.thicknessMap,G=!!E.gradientMap,Y=!!E.alphaMap,nt=E.alphaTest>0,At=!!E.alphaHash,Gt=!!E.extensions;let le=Pn;E.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(le=i.toneMapping);const me={shaderID:ht,shaderType:E.type,shaderName:E.name,vertexShader:Yt,fragmentShader:X,defines:E.defines,customVertexShaderID:Q,customFragmentShaderID:dt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Dt,batchingColor:Dt&&z._colorsTexture!==null,instancing:It,instancingColor:It&&z.instanceColor!==null,instancingMorph:It&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:In,alphaToCoverage:!!E.alphaToCoverage,map:Ht,matcap:P,envMap:Vt,envMapMode:Vt&&K.mapping,envMapCubeUVHeight:H,aoMap:Ot,lightMap:ee,bumpMap:St,normalMap:kt,displacementMap:d&&Nt,emissiveMap:Ct,normalMapObjectSpace:kt&&E.normalMapType===xu,normalMapTangentSpace:kt&&E.normalMapType===Eo,metalnessMap:ce,roughnessMap:T,anisotropy:_,anisotropyMap:st,clearcoat:B,clearcoatMap:rt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:tt,dispersion:$,iridescence:Z,iridescenceMap:gt,iridescenceThicknessMap:Ft,sheen:J,sheenColorMap:Tt,sheenRoughnessMap:lt,specularMap:Ut,specularColorMap:zt,specularIntensityMap:ae,transmission:Mt,transmissionMap:C,thicknessMap:ct,gradientMap:G,opaque:E.transparent===!1&&E.blending===Ri&&E.alphaToCoverage===!1,alphaMap:Y,alphaTest:nt,alphaHash:At,combine:E.combine,mapUv:Ht&&g(E.map.channel),aoMapUv:Ot&&g(E.aoMap.channel),lightMapUv:ee&&g(E.lightMap.channel),bumpMapUv:St&&g(E.bumpMap.channel),normalMapUv:kt&&g(E.normalMap.channel),displacementMapUv:Nt&&g(E.displacementMap.channel),emissiveMapUv:Ct&&g(E.emissiveMap.channel),metalnessMapUv:ce&&g(E.metalnessMap.channel),roughnessMapUv:T&&g(E.roughnessMap.channel),anisotropyMapUv:st&&g(E.anisotropyMap.channel),clearcoatMapUv:rt&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:lt&&g(E.sheenRoughnessMap.channel),specularMapUv:Ut&&g(E.specularMap.channel),specularColorMapUv:zt&&g(E.specularColorMap.channel),specularIntensityMapUv:ae&&g(E.specularIntensityMap.channel),transmissionMapUv:C&&g(E.transmissionMap.channel),thicknessMapUv:ct&&g(E.thicknessMap.channel),alphaMapUv:Y&&g(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(kt||_),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!q.attributes.uv&&(Ht||Y),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:z.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Bt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:Ht&&E.map.isVideoTexture===!0&&qt.getTransfer(E.map.colorSpace)===Qt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ge,flipSided:E.side===De,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Gt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Gt&&E.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function m(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)y.push(D),y.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(S(y,E),x(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function S(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function x(E,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.doubleSided&&a.enable(10),y.flipSided&&a.enable(11),y.useDepthPacking&&a.enable(12),y.dithering&&a.enable(13),y.transmission&&a.enable(14),y.sheen&&a.enable(15),y.opaque&&a.enable(16),y.pointsUvs&&a.enable(17),y.decodeVideoTexture&&a.enable(18),y.alphaToCoverage&&a.enable(19),E.push(a.mask)}function w(E){const y=v[E.type];let D;if(y){const V=tn[y];D=lh.clone(V.uniforms)}else D=E.uniforms;return D}function N(E,y){let D;for(let V=0,z=u.length;V<z;V++){const W=u[V];if(W.cacheKey===y){D=W,++D.usedTimes;break}}return D===void 0&&(D=new ym(i,y,E,r),u.push(D)),D}function b(E){if(--E.usedTimes===0){const y=u.indexOf(E);u[y]=u[u.length-1],u.pop(),E.destroy()}}function R(E){l.remove(E)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:w,acquireProgram:N,releaseProgram:b,releaseShaderCache:R,programs:u,dispose:I}}function Am(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function bm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ul(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function hl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,d,f,v,g,p){let m=i[t];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:v,renderOrder:h.renderOrder,z:g,group:p},i[t]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=v,m.renderOrder=h.renderOrder,m.z=g,m.group=p),t++,m}function a(h,d,f,v,g,p){const m=o(h,d,f,v,g,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(h,d,f,v,g,p){const m=o(h,d,f,v,g,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(h,d){e.length>1&&e.sort(h||bm),n.length>1&&n.sort(d||ul),s.length>1&&s.sort(d||ul)}function u(){for(let h=t,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Rm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new hl,i.set(n,[o])):s>=r.length?(o=new hl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Cm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new xt};break;case"SpotLight":e={position:new A,direction:new A,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":e={color:new xt,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function Pm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Dm=0;function Lm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Um(i){const t=new Cm,e=Pm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);const s=new A,r=new te,o=new te;function a(c){let u=0,h=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,v=0,g=0,p=0,m=0,S=0,x=0,w=0,N=0,b=0,R=0;c.sort(Lm);for(let E=0,y=c.length;E<y;E++){const D=c[E],V=D.color,z=D.intensity,W=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=V.r*z,h+=V.g*z,d+=V.b*z;else if(D.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(D.sh.coefficients[k],z);R++}else if(D.isDirectionalLight){const k=t.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const K=D.shadow,H=e.get(D);H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=D.shadow.matrix,S++}n.directional[f]=k,f++}else if(D.isSpotLight){const k=t.get(D);k.position.setFromMatrixPosition(D.matrixWorld),k.color.copy(V).multiplyScalar(z),k.distance=W,k.coneCos=Math.cos(D.angle),k.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),k.decay=D.decay,n.spot[g]=k;const K=D.shadow;if(D.map&&(n.spotLightMap[N]=D.map,N++,K.updateMatrices(D),D.castShadow&&b++),n.spotLightMatrix[g]=K.matrix,D.castShadow){const H=e.get(D);H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=q,w++}g++}else if(D.isRectAreaLight){const k=t.get(D);k.color.copy(V).multiplyScalar(z),k.halfWidth.set(D.width*.5,0,0),k.halfHeight.set(0,D.height*.5,0),n.rectArea[p]=k,p++}else if(D.isPointLight){const k=t.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),k.distance=D.distance,k.decay=D.decay,D.castShadow){const K=D.shadow,H=e.get(D);H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,H.shadowCameraNear=K.camera.near,H.shadowCameraFar=K.camera.far,n.pointShadow[v]=H,n.pointShadowMap[v]=q,n.pointShadowMatrix[v]=D.shadow.matrix,x++}n.point[v]=k,v++}else if(D.isHemisphereLight){const k=t.get(D);k.skyColor.copy(D.color).multiplyScalar(z),k.groundColor.copy(D.groundColor).multiplyScalar(z),n.hemi[m]=k,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==v||I.spotLength!==g||I.rectAreaLength!==p||I.hemiLength!==m||I.numDirectionalShadows!==S||I.numPointShadows!==x||I.numSpotShadows!==w||I.numSpotMaps!==N||I.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=p,n.point.length=v,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=w+N-b,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=R,I.directionalLength=f,I.pointLength=v,I.spotLength=g,I.rectAreaLength=p,I.hemiLength=m,I.numDirectionalShadows=S,I.numPointShadows=x,I.numSpotShadows=w,I.numSpotMaps=N,I.numLightProbes=R,n.version=Dm++)}function l(c,u){let h=0,d=0,f=0,v=0,g=0;const p=u.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const x=c[m];if(x.isDirectionalLight){const w=n.directional[h];w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),h++}else if(x.isSpotLight){const w=n.spot[f];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),f++}else if(x.isRectAreaLight){const w=n.rectArea[v];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const w=n.point[d];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const w=n.hemi[g];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function fl(i){const t=new Um(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Im(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new fl(i),t.set(s,[a])):r>=o.length?(a=new fl(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Nm extends Nn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Fm extends Nn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Om=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zm=`uniform sampler2D shadow_pass;
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
}`;function Bm(i,t,e){let n=new Po;const s=new ot,r=new ot,o=new jt,a=new Nm({depthPacking:_u}),l=new Fm,c={},u=e.maxTextureSize,h={[Dn]:De,[De]:Dn,[Ge]:Ge},d=new Jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:Om,fragmentShader:zm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const v=new Me;v.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new j(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nl;let m=this.type;this.render=function(b,R,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const E=i.getRenderTarget(),y=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),V=i.state;V.setBlending(gn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const z=m!==mn&&this.type===mn,W=m===mn&&this.type!==mn;for(let q=0,k=b.length;q<k;q++){const K=b[q],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const ht=H.getFrameExtents();if(s.multiply(ht),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ht.x),s.x=r.x*ht.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ht.y),s.y=r.y*ht.y,H.mapSize.y=r.y)),H.map===null||z===!0||W===!0){const vt=this.type!==mn?{minFilter:Le,magFilter:Le}:{};H.map!==null&&H.map.dispose(),H.map=new Un(s.x,s.y,vt),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const pt=H.getViewportCount();for(let vt=0;vt<pt;vt++){const Bt=H.getViewport(vt);o.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),V.viewport(o),H.updateMatrices(K,vt),n=H.getFrustum(),w(R,I,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===mn&&S(H,I),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(E,y,D)};function S(b,R){const I=t.update(g);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Un(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,I,d,g,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,I,f,g,null)}function x(b,R,I,E){let y=null;const D=I.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)y=D;else if(y=I.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const V=y.uuid,z=R.uuid;let W=c[V];W===void 0&&(W={},c[V]=W);let q=W[z];q===void 0&&(q=y.clone(),W[z]=q,R.addEventListener("dispose",N)),y=q}if(y.visible=R.visible,y.wireframe=R.wireframe,E===mn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:h[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const V=i.properties.get(y);V.light=I}return y}function w(b,R,I,E,y){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===mn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld);const z=t.update(b),W=b.material;if(Array.isArray(W)){const q=z.groups;for(let k=0,K=q.length;k<K;k++){const H=q[k],ht=W[H.materialIndex];if(ht&&ht.visible){const pt=x(b,ht,E,y);b.onBeforeShadow(i,b,R,I,z,pt,H),i.renderBufferDirect(I,null,z,pt,b,H),b.onAfterShadow(i,b,R,I,z,pt,H)}}}else if(W.visible){const q=x(b,W,E,y);b.onBeforeShadow(i,b,R,I,z,q,null),i.renderBufferDirect(I,null,z,q,b,null),b.onAfterShadow(i,b,R,I,z,q,null)}}const V=b.children;for(let z=0,W=V.length;z<W;z++)w(V[z],R,I,E,y)}function N(b){b.target.removeEventListener("dispose",N);for(const I in c){const E=c[I],y=b.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}function Vm(i){function t(){let C=!1;const ct=new jt;let G=null;const Y=new jt(0,0,0,0);return{setMask:function(nt){G!==nt&&!C&&(i.colorMask(nt,nt,nt,nt),G=nt)},setLocked:function(nt){C=nt},setClear:function(nt,At,Gt,le,me){me===!0&&(nt*=le,At*=le,Gt*=le),ct.set(nt,At,Gt,le),Y.equals(ct)===!1&&(i.clearColor(nt,At,Gt,le),Y.copy(ct))},reset:function(){C=!1,G=null,Y.set(-1,0,0,0)}}}function e(){let C=!1,ct=null,G=null,Y=null;return{setTest:function(nt){nt?dt(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(nt){ct!==nt&&!C&&(i.depthMask(nt),ct=nt)},setFunc:function(nt){if(G!==nt){switch(nt){case Wc:i.depthFunc(i.NEVER);break;case Xc:i.depthFunc(i.ALWAYS);break;case qc:i.depthFunc(i.LESS);break;case $s:i.depthFunc(i.LEQUAL);break;case Yc:i.depthFunc(i.EQUAL);break;case $c:i.depthFunc(i.GEQUAL);break;case Kc:i.depthFunc(i.GREATER);break;case Zc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}G=nt}},setLocked:function(nt){C=nt},setClear:function(nt){Y!==nt&&(i.clearDepth(nt),Y=nt)},reset:function(){C=!1,ct=null,G=null,Y=null}}}function n(){let C=!1,ct=null,G=null,Y=null,nt=null,At=null,Gt=null,le=null,me=null;return{setTest:function($t){C||($t?dt(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function($t){ct!==$t&&!C&&(i.stencilMask($t),ct=$t)},setFunc:function($t,je,Qe){(G!==$t||Y!==je||nt!==Qe)&&(i.stencilFunc($t,je,Qe),G=$t,Y=je,nt=Qe)},setOp:function($t,je,Qe){(At!==$t||Gt!==je||le!==Qe)&&(i.stencilOp($t,je,Qe),At=$t,Gt=je,le=Qe)},setLocked:function($t){C=$t},setClear:function($t){me!==$t&&(i.clearStencil($t),me=$t)},reset:function(){C=!1,ct=null,G=null,Y=null,nt=null,At=null,Gt=null,le=null,me=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],f=null,v=!1,g=null,p=null,m=null,S=null,x=null,w=null,N=null,b=new xt(0,0,0),R=0,I=!1,E=null,y=null,D=null,V=null,z=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,k=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=k>=1):K.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=k>=2);let H=null,ht={};const pt=i.getParameter(i.SCISSOR_BOX),vt=i.getParameter(i.VIEWPORT),Bt=new jt().fromArray(pt),Yt=new jt().fromArray(vt);function X(C,ct,G,Y){const nt=new Uint8Array(4),At=i.createTexture();i.bindTexture(C,At),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<G;Gt++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,Y,0,i.RGBA,i.UNSIGNED_BYTE,nt):i.texImage2D(ct+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,nt);return At}const Q={};Q[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),dt(i.DEPTH_TEST),r.setFunc($s),St(!1),kt(Yo),dt(i.CULL_FACE),Ot(gn);function dt(C){c[C]!==!0&&(i.enable(C),c[C]=!0)}function at(C){c[C]!==!1&&(i.disable(C),c[C]=!1)}function It(C,ct){return u[C]!==ct?(i.bindFramebuffer(C,ct),u[C]=ct,C===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ct),C===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function Dt(C,ct){let G=d,Y=!1;if(C){G=h.get(ct),G===void 0&&(G=[],h.set(ct,G));const nt=C.textures;if(G.length!==nt.length||G[0]!==i.COLOR_ATTACHMENT0){for(let At=0,Gt=nt.length;At<Gt;At++)G[At]=i.COLOR_ATTACHMENT0+At;G.length=nt.length,Y=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,Y=!0);Y&&i.drawBuffers(G)}function Ht(C){return f!==C?(i.useProgram(C),f=C,!0):!1}const P={[qn]:i.FUNC_ADD,[bc]:i.FUNC_SUBTRACT,[Rc]:i.FUNC_REVERSE_SUBTRACT};P[Cc]=i.MIN,P[Pc]=i.MAX;const Vt={[Dc]:i.ZERO,[Lc]:i.ONE,[Uc]:i.SRC_COLOR,[lo]:i.SRC_ALPHA,[Bc]:i.SRC_ALPHA_SATURATE,[Oc]:i.DST_COLOR,[Nc]:i.DST_ALPHA,[Ic]:i.ONE_MINUS_SRC_COLOR,[co]:i.ONE_MINUS_SRC_ALPHA,[zc]:i.ONE_MINUS_DST_COLOR,[Fc]:i.ONE_MINUS_DST_ALPHA,[Vc]:i.CONSTANT_COLOR,[Hc]:i.ONE_MINUS_CONSTANT_COLOR,[kc]:i.CONSTANT_ALPHA,[Gc]:i.ONE_MINUS_CONSTANT_ALPHA};function Ot(C,ct,G,Y,nt,At,Gt,le,me,$t){if(C===gn){v===!0&&(at(i.BLEND),v=!1);return}if(v===!1&&(dt(i.BLEND),v=!0),C!==Ac){if(C!==g||$t!==I){if((p!==qn||x!==qn)&&(i.blendEquation(i.FUNC_ADD),p=qn,x=qn),$t)switch(C){case Ri:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ao:i.blendFunc(i.ONE,i.ONE);break;case $o:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ko:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ao:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case $o:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ko:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}m=null,S=null,w=null,N=null,b.set(0,0,0),R=0,g=C,I=$t}return}nt=nt||ct,At=At||G,Gt=Gt||Y,(ct!==p||nt!==x)&&(i.blendEquationSeparate(P[ct],P[nt]),p=ct,x=nt),(G!==m||Y!==S||At!==w||Gt!==N)&&(i.blendFuncSeparate(Vt[G],Vt[Y],Vt[At],Vt[Gt]),m=G,S=Y,w=At,N=Gt),(le.equals(b)===!1||me!==R)&&(i.blendColor(le.r,le.g,le.b,me),b.copy(le),R=me),g=C,I=!1}function ee(C,ct){C.side===Ge?at(i.CULL_FACE):dt(i.CULL_FACE);let G=C.side===De;ct&&(G=!G),St(G),C.blending===Ri&&C.transparent===!1?Ot(gn):Ot(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),r.setFunc(C.depthFunc),r.setTest(C.depthTest),r.setMask(C.depthWrite),s.setMask(C.colorWrite);const Y=C.stencilWrite;o.setTest(Y),Y&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ct(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function St(C){E!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),E=C)}function kt(C){C!==wc?(dt(i.CULL_FACE),C!==y&&(C===Yo?i.cullFace(i.BACK):C===Ec?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),y=C}function Nt(C){C!==D&&(q&&i.lineWidth(C),D=C)}function Ct(C,ct,G){C?(dt(i.POLYGON_OFFSET_FILL),(V!==ct||z!==G)&&(i.polygonOffset(ct,G),V=ct,z=G)):at(i.POLYGON_OFFSET_FILL)}function ce(C){C?dt(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function T(C){C===void 0&&(C=i.TEXTURE0+W-1),H!==C&&(i.activeTexture(C),H=C)}function _(C,ct,G){G===void 0&&(H===null?G=i.TEXTURE0+W-1:G=H);let Y=ht[G];Y===void 0&&(Y={type:void 0,texture:void 0},ht[G]=Y),(Y.type!==C||Y.texture!==ct)&&(H!==G&&(i.activeTexture(G),H=G),i.bindTexture(C,ct||Q[C]),Y.type=C,Y.texture=ct)}function B(){const C=ht[H];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Mt(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function st(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function rt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Lt(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function gt(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ft(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Tt(C){Bt.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),Bt.copy(C))}function lt(C){Yt.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),Yt.copy(C))}function Ut(C,ct){let G=l.get(ct);G===void 0&&(G=new WeakMap,l.set(ct,G));let Y=G.get(C);Y===void 0&&(Y=i.getUniformBlockIndex(ct,C.name),G.set(C,Y))}function zt(C,ct){const Y=l.get(ct).get(C);a.get(ct)!==Y&&(i.uniformBlockBinding(ct,Y,C.__bindingPointIndex),a.set(ct,Y))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},H=null,ht={},u={},h=new WeakMap,d=[],f=null,v=!1,g=null,p=null,m=null,S=null,x=null,w=null,N=null,b=new xt(0,0,0),R=0,I=!1,E=null,y=null,D=null,V=null,z=null,Bt.set(0,0,i.canvas.width,i.canvas.height),Yt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:dt,disable:at,bindFramebuffer:It,drawBuffers:Dt,useProgram:Ht,setBlending:Ot,setMaterial:ee,setFlipSided:St,setCullFace:kt,setLineWidth:Nt,setPolygonOffset:Ct,setScissorTest:ce,activeTexture:T,bindTexture:_,unbindTexture:B,compressedTexImage2D:$,compressedTexImage3D:Z,texImage2D:gt,texImage3D:Ft,updateUBOMapping:Ut,uniformBlockBinding:zt,texStorage2D:Lt,texStorage3D:tt,texSubImage2D:J,texSubImage3D:Mt,compressedTexSubImage2D:st,compressedTexSubImage3D:rt,scissor:Tt,viewport:lt,reset:ae}}function Hm(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(T){}function v(T,_){return f?new OffscreenCanvas(T,_):tr("canvas")}function g(T,_,B){let $=1;const Z=ce(T);if((Z.width>B||Z.height>B)&&($=B/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&T instanceof ImageBitmap||typeof VideoFrame!="undefined"&&T instanceof VideoFrame){const J=Math.floor($*Z.width),Mt=Math.floor($*Z.height);h===void 0&&(h=v(J,Mt));const st=_?v(J,Mt):h;return st.width=J,st.height=Mt,st.getContext("2d").drawImage(T,0,0,J,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+J+"x"+Mt+")."),st}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function p(T){return T.generateMipmaps&&T.minFilter!==Le&&T.minFilter!==We}function m(T){i.generateMipmap(T)}function S(T,_,B,$,Z=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let J=_;if(_===i.RED&&(B===i.FLOAT&&(J=i.R32F),B===i.HALF_FLOAT&&(J=i.R16F),B===i.UNSIGNED_BYTE&&(J=i.R8)),_===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.R8UI),B===i.UNSIGNED_SHORT&&(J=i.R16UI),B===i.UNSIGNED_INT&&(J=i.R32UI),B===i.BYTE&&(J=i.R8I),B===i.SHORT&&(J=i.R16I),B===i.INT&&(J=i.R32I)),_===i.RG&&(B===i.FLOAT&&(J=i.RG32F),B===i.HALF_FLOAT&&(J=i.RG16F),B===i.UNSIGNED_BYTE&&(J=i.RG8)),_===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RG8UI),B===i.UNSIGNED_SHORT&&(J=i.RG16UI),B===i.UNSIGNED_INT&&(J=i.RG32UI),B===i.BYTE&&(J=i.RG8I),B===i.SHORT&&(J=i.RG16I),B===i.INT&&(J=i.RG32I)),_===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),_===i.RGBA){const Mt=Z?Zs:qt.getTransfer($);B===i.FLOAT&&(J=i.RGBA32F),B===i.HALF_FLOAT&&(J=i.RGBA16F),B===i.UNSIGNED_BYTE&&(J=Mt===Qt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function x(T,_){let B;return T?_===null||_===Ui||_===Ii?B=i.DEPTH24_STENCIL8:_===Cn?B=i.DEPTH32F_STENCIL8:_===Ks&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ui||_===Ii?B=i.DEPTH_COMPONENT24:_===Cn?B=i.DEPTH_COMPONENT32F:_===Ks&&(B=i.DEPTH_COMPONENT16),B}function w(T,_){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Le&&T.minFilter!==We?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function N(T){const _=T.target;_.removeEventListener("dispose",N),R(_),_.isVideoTexture&&u.delete(_)}function b(T){const _=T.target;_.removeEventListener("dispose",b),E(_)}function R(T){const _=n.get(T);if(_.__webglInit===void 0)return;const B=T.source,$=d.get(B);if($){const Z=$[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&I(T),Object.keys($).length===0&&d.delete(B)}n.remove(T)}function I(T){const _=n.get(T);i.deleteTexture(_.__webglTexture);const B=T.source,$=d.get(B);delete $[_.__cacheKey],o.memory.textures--}function E(T){const _=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let Z=0;Z<_.__webglFramebuffer[$].length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[$][Z]);else i.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)i.deleteFramebuffer(_.__webglFramebuffer[$]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const B=T.textures;for(let $=0,Z=B.length;$<Z;$++){const J=n.get(B[$]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(B[$])}n.remove(T)}let y=0;function D(){y=0}function V(){const T=y;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),y+=1,T}function z(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function W(T,_){const B=n.get(T);if(T.isVideoTexture&&Nt(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Yt(B,T,_);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+_)}function q(T,_){const B=n.get(T);if(T.version>0&&B.__version!==T.version){Yt(B,T,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+_)}function k(T,_){const B=n.get(T);if(T.version>0&&B.__version!==T.version){Yt(B,T,_);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+_)}function K(T,_){const B=n.get(T);if(T.version>0&&B.__version!==T.version){X(B,T,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+_)}const H={[fo]:i.REPEAT,[Rn]:i.CLAMP_TO_EDGE,[po]:i.MIRRORED_REPEAT},ht={[Le]:i.NEAREST,[ou]:i.NEAREST_MIPMAP_NEAREST,[ps]:i.NEAREST_MIPMAP_LINEAR,[We]:i.LINEAR,[yr]:i.LINEAR_MIPMAP_NEAREST,[$n]:i.LINEAR_MIPMAP_LINEAR},pt={[Mu]:i.NEVER,[Au]:i.ALWAYS,[yu]:i.LESS,[Gl]:i.LEQUAL,[Su]:i.EQUAL,[Tu]:i.GEQUAL,[wu]:i.GREATER,[Eu]:i.NOTEQUAL};function vt(T,_){if(_.type===Cn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===We||_.magFilter===yr||_.magFilter===ps||_.magFilter===$n||_.minFilter===We||_.minFilter===yr||_.minFilter===ps||_.minFilter===$n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,H[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,H[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,H[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ht[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ht[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,pt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Le||_.minFilter!==ps&&_.minFilter!==$n||_.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Bt(T,_){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",N));const $=_.source;let Z=d.get($);Z===void 0&&(Z={},d.set($,Z));const J=z(_);if(J!==T.__cacheKey){Z[J]===void 0&&(Z[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Z[J].usedTimes++;const Mt=Z[T.__cacheKey];Mt!==void 0&&(Z[T.__cacheKey].usedTimes--,Mt.usedTimes===0&&I(_)),T.__cacheKey=J,T.__webglTexture=Z[J].texture}return B}function Yt(T,_,B){let $=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=i.TEXTURE_3D);const Z=Bt(T,_),J=_.source;e.bindTexture($,T.__webglTexture,i.TEXTURE0+B);const Mt=n.get(J);if(J.version!==Mt.__version||Z===!0){e.activeTexture(i.TEXTURE0+B);const st=qt.getPrimaries(qt.workingColorSpace),rt=_.colorSpace===bn?null:qt.getPrimaries(_.colorSpace),Lt=_.colorSpace===bn||st===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let tt=g(_.image,!1,s.maxTextureSize);tt=Ct(_,tt);const gt=r.convert(_.format,_.colorSpace),Ft=r.convert(_.type);let Tt=S(_.internalFormat,gt,Ft,_.colorSpace,_.isVideoTexture);vt($,_);let lt;const Ut=_.mipmaps,zt=_.isVideoTexture!==!0,ae=Mt.__version===void 0||Z===!0,C=J.dataReady,ct=w(_,tt);if(_.isDepthTexture)Tt=x(_.format===Ni,_.type),ae&&(zt?e.texStorage2D(i.TEXTURE_2D,1,Tt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Tt,tt.width,tt.height,0,gt,Ft,null));else if(_.isDataTexture)if(Ut.length>0){zt&&ae&&e.texStorage2D(i.TEXTURE_2D,ct,Tt,Ut[0].width,Ut[0].height);for(let G=0,Y=Ut.length;G<Y;G++)lt=Ut[G],zt?C&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,lt.width,lt.height,gt,Ft,lt.data):e.texImage2D(i.TEXTURE_2D,G,Tt,lt.width,lt.height,0,gt,Ft,lt.data);_.generateMipmaps=!1}else zt?(ae&&e.texStorage2D(i.TEXTURE_2D,ct,Tt,tt.width,tt.height),C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,gt,Ft,tt.data)):e.texImage2D(i.TEXTURE_2D,0,Tt,tt.width,tt.height,0,gt,Ft,tt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){zt&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Tt,Ut[0].width,Ut[0].height,tt.depth);for(let G=0,Y=Ut.length;G<Y;G++)if(lt=Ut[G],_.format!==Ze)if(gt!==null)if(zt){if(C)if(_.layerUpdates.size>0){for(const nt of _.layerUpdates){const At=lt.width*lt.height;e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,nt,lt.width,lt.height,1,gt,lt.data.slice(At*nt,At*(nt+1)),0,0)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,lt.width,lt.height,tt.depth,gt,lt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Tt,lt.width,lt.height,tt.depth,0,lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?C&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,lt.width,lt.height,tt.depth,gt,Ft,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,Tt,lt.width,lt.height,tt.depth,0,gt,Ft,lt.data)}else{zt&&ae&&e.texStorage2D(i.TEXTURE_2D,ct,Tt,Ut[0].width,Ut[0].height);for(let G=0,Y=Ut.length;G<Y;G++)lt=Ut[G],_.format!==Ze?gt!==null?zt?C&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,lt.width,lt.height,gt,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,G,Tt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?C&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,lt.width,lt.height,gt,Ft,lt.data):e.texImage2D(i.TEXTURE_2D,G,Tt,lt.width,lt.height,0,gt,Ft,lt.data)}else if(_.isDataArrayTexture)if(zt){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Tt,tt.width,tt.height,tt.depth),C)if(_.layerUpdates.size>0){let G;switch(Ft){case i.UNSIGNED_BYTE:switch(gt){case i.ALPHA:G=1;break;case i.LUMINANCE:G=1;break;case i.LUMINANCE_ALPHA:G=2;break;case i.RGB:G=3;break;case i.RGBA:G=4;break;default:throw new Error(`Unknown texel size for format ${gt}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:G=1;break;default:throw new Error(`Unknown texel size for type ${Ft}.`)}const Y=tt.width*tt.height*G;for(const nt of _.layerUpdates)e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,tt.width,tt.height,1,gt,Ft,tt.data.slice(Y*nt,Y*(nt+1)));_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,gt,Ft,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Tt,tt.width,tt.height,tt.depth,0,gt,Ft,tt.data);else if(_.isData3DTexture)zt?(ae&&e.texStorage3D(i.TEXTURE_3D,ct,Tt,tt.width,tt.height,tt.depth),C&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,gt,Ft,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Tt,tt.width,tt.height,tt.depth,0,gt,Ft,tt.data);else if(_.isFramebufferTexture){if(ae)if(zt)e.texStorage2D(i.TEXTURE_2D,ct,Tt,tt.width,tt.height);else{let G=tt.width,Y=tt.height;for(let nt=0;nt<ct;nt++)e.texImage2D(i.TEXTURE_2D,nt,Tt,G,Y,0,gt,Ft,null),G>>=1,Y>>=1}}else if(Ut.length>0){if(zt&&ae){const G=ce(Ut[0]);e.texStorage2D(i.TEXTURE_2D,ct,Tt,G.width,G.height)}for(let G=0,Y=Ut.length;G<Y;G++)lt=Ut[G],zt?C&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,gt,Ft,lt):e.texImage2D(i.TEXTURE_2D,G,Tt,gt,Ft,lt);_.generateMipmaps=!1}else if(zt){if(ae){const G=ce(tt);e.texStorage2D(i.TEXTURE_2D,ct,Tt,G.width,G.height)}C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Ft,tt)}else e.texImage2D(i.TEXTURE_2D,0,Tt,gt,Ft,tt);p(_)&&m($),Mt.__version=J.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function X(T,_,B){if(_.image.length!==6)return;const $=Bt(T,_),Z=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);const J=n.get(Z);if(Z.version!==J.__version||$===!0){e.activeTexture(i.TEXTURE0+B);const Mt=qt.getPrimaries(qt.workingColorSpace),st=_.colorSpace===bn?null:qt.getPrimaries(_.colorSpace),rt=_.colorSpace===bn||Mt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);const Lt=_.isCompressedTexture||_.image[0].isCompressedTexture,tt=_.image[0]&&_.image[0].isDataTexture,gt=[];for(let Y=0;Y<6;Y++)!Lt&&!tt?gt[Y]=g(_.image[Y],!0,s.maxCubemapSize):gt[Y]=tt?_.image[Y].image:_.image[Y],gt[Y]=Ct(_,gt[Y]);const Ft=gt[0],Tt=r.convert(_.format,_.colorSpace),lt=r.convert(_.type),Ut=S(_.internalFormat,Tt,lt,_.colorSpace),zt=_.isVideoTexture!==!0,ae=J.__version===void 0||$===!0,C=Z.dataReady;let ct=w(_,Ft);vt(i.TEXTURE_CUBE_MAP,_);let G;if(Lt){zt&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Ut,Ft.width,Ft.height);for(let Y=0;Y<6;Y++){G=gt[Y].mipmaps;for(let nt=0;nt<G.length;nt++){const At=G[nt];_.format!==Ze?Tt!==null?zt?C&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,nt,0,0,At.width,At.height,Tt,At.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,nt,Ut,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,nt,0,0,At.width,At.height,Tt,lt,At.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,nt,Ut,At.width,At.height,0,Tt,lt,At.data)}}}else{if(G=_.mipmaps,zt&&ae){G.length>0&&ct++;const Y=ce(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Ut,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(tt){zt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,gt[Y].width,gt[Y].height,Tt,lt,gt[Y].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ut,gt[Y].width,gt[Y].height,0,Tt,lt,gt[Y].data);for(let nt=0;nt<G.length;nt++){const Gt=G[nt].image[Y].image;zt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,nt+1,0,0,Gt.width,Gt.height,Tt,lt,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,nt+1,Ut,Gt.width,Gt.height,0,Tt,lt,Gt.data)}}else{zt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Tt,lt,gt[Y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ut,Tt,lt,gt[Y]);for(let nt=0;nt<G.length;nt++){const At=G[nt];zt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,nt+1,0,0,Tt,lt,At.image[Y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,nt+1,Ut,Tt,lt,At.image[Y])}}}p(_)&&m(i.TEXTURE_CUBE_MAP),J.__version=Z.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Q(T,_,B,$,Z,J){const Mt=r.convert(B.format,B.colorSpace),st=r.convert(B.type),rt=S(B.internalFormat,Mt,st,B.colorSpace);if(!n.get(_).__hasExternalTextures){const tt=Math.max(1,_.width>>J),gt=Math.max(1,_.height>>J);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,J,rt,tt,gt,_.depth,0,Mt,st,null):e.texImage2D(Z,J,rt,tt,gt,0,Mt,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),kt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Z,n.get(B).__webglTexture,0,St(_)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,Z,n.get(B).__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(T,_,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){const $=_.depthTexture,Z=$&&$.isDepthTexture?$.type:null,J=x(_.stencilBuffer,Z),Mt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=St(_);kt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,J,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,J,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,J,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,T)}else{const $=_.textures;for(let Z=0;Z<$.length;Z++){const J=$[Z],Mt=r.convert(J.format,J.colorSpace),st=r.convert(J.type),rt=S(J.internalFormat,Mt,st,J.colorSpace),Lt=St(_);B&&kt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,rt,_.width,_.height):kt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt,rt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,rt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W(_.depthTexture,0);const $=n.get(_.depthTexture).__webglTexture,Z=St(_);if(_.depthTexture.format===Ci)kt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(_.depthTexture.format===Ni)kt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function It(T){const _=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");at(_.__webglFramebuffer,T)}else if(B){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]=i.createRenderbuffer(),dt(_.__webglDepthbuffer[$],T,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),dt(_.__webglDepthbuffer,T,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(T,_,B){const $=n.get(T);_!==void 0&&Q($.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&It(T)}function Ht(T){const _=T.texture,B=n.get(T),$=n.get(_);T.addEventListener("dispose",b);const Z=T.textures,J=T.isWebGLCubeRenderTarget===!0,Mt=Z.length>1;if(Mt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=_.version,o.memory.textures++),J){B.__webglFramebuffer=[];for(let st=0;st<6;st++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[st]=[];for(let rt=0;rt<_.mipmaps.length;rt++)B.__webglFramebuffer[st][rt]=i.createFramebuffer()}else B.__webglFramebuffer[st]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let st=0;st<_.mipmaps.length;st++)B.__webglFramebuffer[st]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let st=0,rt=Z.length;st<rt;st++){const Lt=n.get(Z[st]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&kt(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let st=0;st<Z.length;st++){const rt=Z[st];B.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[st]);const Lt=r.convert(rt.format,rt.colorSpace),tt=r.convert(rt.type),gt=S(rt.internalFormat,Lt,tt,rt.colorSpace,T.isXRRenderTarget===!0),Ft=St(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,gt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,B.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),vt(i.TEXTURE_CUBE_MAP,_);for(let st=0;st<6;st++)if(_.mipmaps&&_.mipmaps.length>0)for(let rt=0;rt<_.mipmaps.length;rt++)Q(B.__webglFramebuffer[st][rt],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,rt);else Q(B.__webglFramebuffer[st],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);p(_)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let st=0,rt=Z.length;st<rt;st++){const Lt=Z[st],tt=n.get(Lt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),vt(i.TEXTURE_2D,Lt),Q(B.__webglFramebuffer,T,Lt,i.COLOR_ATTACHMENT0+st,i.TEXTURE_2D,0),p(Lt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(st=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,$.__webglTexture),vt(st,_),_.mipmaps&&_.mipmaps.length>0)for(let rt=0;rt<_.mipmaps.length;rt++)Q(B.__webglFramebuffer[rt],T,_,i.COLOR_ATTACHMENT0,st,rt);else Q(B.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,st,0);p(_)&&m(st),e.unbindTexture()}T.depthBuffer&&It(T)}function P(T){const _=T.textures;for(let B=0,$=_.length;B<$;B++){const Z=_[B];if(p(Z)){const J=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Mt=n.get(Z).__webglTexture;e.bindTexture(J,Mt),m(J),e.unbindTexture()}}}const Vt=[],Ot=[];function ee(T){if(T.samples>0){if(kt(T)===!1){const _=T.textures,B=T.width,$=T.height;let Z=i.COLOR_BUFFER_BIT;const J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(T),st=_.length>1;if(st)for(let rt=0;rt<_.length;rt++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let rt=0;rt<_.length;rt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[rt]);const Lt=n.get(_[rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Lt,0)}i.blitFramebuffer(0,0,B,$,0,0,B,$,Z,i.NEAREST),l===!0&&(Vt.length=0,Ot.length=0,Vt.push(i.COLOR_ATTACHMENT0+rt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Vt.push(J),Ot.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ot)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Vt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let rt=0;rt<_.length;rt++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[rt]);const Lt=n.get(_[rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,Lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function St(T){return Math.min(s.maxSamples,T.samples)}function kt(T){const _=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Nt(T){const _=o.render.frame;u.get(T)!==_&&(u.set(T,_),T.update())}function Ct(T,_){const B=T.colorSpace,$=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==In&&B!==bn&&(qt.getTransfer(B)===Qt?($!==Ze||Z!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),_}function ce(T){return typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame!="undefined"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=D,this.setTexture2D=W,this.setTexture2DArray=q,this.setTexture3D=k,this.setTextureCube=K,this.rebindTextures=Dt,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=kt}function km(i,t){function e(n,s=bn){let r;const o=qt.getTransfer(s);if(n===Ln)return i.UNSIGNED_BYTE;if(n===zl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Bl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===cu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===au)return i.BYTE;if(n===lu)return i.SHORT;if(n===Ks)return i.UNSIGNED_SHORT;if(n===Ol)return i.INT;if(n===Ui)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===os)return i.HALF_FLOAT;if(n===uu)return i.ALPHA;if(n===hu)return i.RGB;if(n===Ze)return i.RGBA;if(n===fu)return i.LUMINANCE;if(n===du)return i.LUMINANCE_ALPHA;if(n===Ci)return i.DEPTH_COMPONENT;if(n===Ni)return i.DEPTH_STENCIL;if(n===pu)return i.RED;if(n===Vl)return i.RED_INTEGER;if(n===mu)return i.RG;if(n===Hl)return i.RG_INTEGER;if(n===kl)return i.RGBA_INTEGER;if(n===Sr||n===wr||n===Er||n===Tr)if(o===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zo||n===Jo||n===jo||n===Qo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Zo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ta||n===ea||n===na)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ta||n===ea)return o===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===na)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ia||n===sa||n===ra||n===oa||n===aa||n===la||n===ca||n===ua||n===ha||n===fa||n===da||n===pa||n===ma||n===va)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ia)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sa)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ra)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oa)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===aa)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===la)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ca)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ua)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ha)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fa)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===da)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pa)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ma)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===va)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ar||n===ga||n===_a)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ar)return o===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ga)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_a)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vu||n===xa||n===Ma||n===ya)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ar)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ma)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ya)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ii?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Gm extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Pe extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wm={type:"move"};class Jr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,v=.005;c.inputState.pinching&&d>f+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Xm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qm=`
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

}`;class Ym{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ue,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Jt({vertexShader:Xm,fragmentShader:qm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new j(new ie(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class $m extends zi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,v=null;const g=new Ym,p=e.getContextAttributes();let m=null,S=null;const x=[],w=[],N=new ot;let b=null;const R=new ke;R.layers.enable(1),R.viewport=new jt;const I=new ke;I.layers.enable(2),I.viewport=new jt;const E=[R,I],y=new Gm;y.layers.enable(1),y.layers.enable(2);let D=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=x[X];return Q===void 0&&(Q=new Jr,x[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=x[X];return Q===void 0&&(Q=new Jr,x[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=x[X];return Q===void 0&&(Q=new Jr,x[X]=Q),Q.getHandSpace()};function z(X){const Q=w.indexOf(X.inputSource);if(Q===-1)return;const dt=x[Q];dt!==void 0&&(dt.update(X.inputSource,X.frame,c||o),dt.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",q);for(let X=0;X<x.length;X++){const Q=w[X];Q!==null&&(w[X]=null,x[X].disconnect(Q))}D=null,V=null,g.reset(),t.setRenderTarget(m),f=null,d=null,h=null,s=null,S=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",W),s.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(N),s.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Un(f.framebufferWidth,f.framebufferHeight,{format:Ze,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,dt=null,at=null;p.depth&&(at=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=p.stencil?Ni:Ci,dt=p.stencil?Ii:Ui);const It={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(It),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Un(d.textureWidth,d.textureHeight,{format:Ze,type:Ln,depthTexture:new ec(d.textureWidth,d.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Yt.setContext(s),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function q(X){for(let Q=0;Q<X.removed.length;Q++){const dt=X.removed[Q],at=w.indexOf(dt);at>=0&&(w[at]=null,x[at].disconnect(dt))}for(let Q=0;Q<X.added.length;Q++){const dt=X.added[Q];let at=w.indexOf(dt);if(at===-1){for(let Dt=0;Dt<x.length;Dt++)if(Dt>=w.length){w.push(dt),at=Dt;break}else if(w[Dt]===null){w[Dt]=dt,at=Dt;break}if(at===-1)break}const It=x[at];It&&It.connect(dt)}}const k=new A,K=new A;function H(X,Q,dt){k.setFromMatrixPosition(Q.matrixWorld),K.setFromMatrixPosition(dt.matrixWorld);const at=k.distanceTo(K),It=Q.projectionMatrix.elements,Dt=dt.projectionMatrix.elements,Ht=It[14]/(It[10]-1),P=It[14]/(It[10]+1),Vt=(It[9]+1)/It[5],Ot=(It[9]-1)/It[5],ee=(It[8]-1)/It[0],St=(Dt[8]+1)/Dt[0],kt=Ht*ee,Nt=Ht*St,Ct=at/(-ee+St),ce=Ct*-ee;Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ce),X.translateZ(Ct),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const T=Ht+Ct,_=P+Ct,B=kt-ce,$=Nt+(at-ce),Z=Vt*P/_*T,J=Ot*P/_*T;X.projectionMatrix.makePerspective(B,$,Z,J,T,_),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function ht(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;g.texture!==null&&(X.near=g.depthNear,X.far=g.depthFar),y.near=I.near=R.near=X.near,y.far=I.far=R.far=X.far,(D!==y.near||V!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),D=y.near,V=y.far,R.near=D,R.far=V,I.near=D,I.far=V,R.updateProjectionMatrix(),I.updateProjectionMatrix(),X.updateProjectionMatrix());const Q=X.parent,dt=y.cameras;ht(y,Q);for(let at=0;at<dt.length;at++)ht(dt[at],Q);dt.length===2?H(y,R,I):y.projectionMatrix.copy(R.projectionMatrix),pt(X,y,Q)};function pt(X,Q,dt){dt===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(dt.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ns*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let vt=null;function Bt(X,Q){if(u=Q.getViewerPose(c||o),v=Q,u!==null){const dt=u.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let at=!1;dt.length!==y.cameras.length&&(y.cameras.length=0,at=!0);for(let Dt=0;Dt<dt.length;Dt++){const Ht=dt[Dt];let P=null;if(f!==null)P=f.getViewport(Ht);else{const Ot=h.getViewSubImage(d,Ht);P=Ot.viewport,Dt===0&&(t.setRenderTargetTextures(S,Ot.colorTexture,d.ignoreDepthValues?void 0:Ot.depthStencilTexture),t.setRenderTarget(S))}let Vt=E[Dt];Vt===void 0&&(Vt=new ke,Vt.layers.enable(Dt),Vt.viewport=new jt,E[Dt]=Vt),Vt.matrix.fromArray(Ht.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Ht.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(P.x,P.y,P.width,P.height),Dt===0&&(y.matrix.copy(Vt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),at===!0&&y.cameras.push(Vt)}const It=s.enabledFeatures;if(It&&It.includes("depth-sensing")){const Dt=h.getDepthInformation(dt[0]);Dt&&Dt.isValid&&Dt.texture&&g.init(t,Dt,s.renderState)}}for(let dt=0;dt<x.length;dt++){const at=w[dt],It=x[dt];at!==null&&It!==void 0&&It.update(at,Q,c||o)}vt&&vt(X,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),v=null}const Yt=new Ql;Yt.setAnimationLoop(Bt),this.setAnimationLoop=function(X){vt=X},this.dispose=function(){}}}const Gn=new Je,Km=new te;function Zm(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Jl(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,S,x,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,w)):m.isMeshMatcapMaterial?(r(p,m),v(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),g(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,S,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===De&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===De&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=t.get(m),x=S.envMap,w=S.envMapRotation;x&&(p.envMap.value=x,Gn.copy(w),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),p.envMapRotation.value.setFromMatrix4(Km.makeRotationFromEuler(Gn)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===De&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const S=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Jm(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,x){const w=x.program;n.uniformBlockBinding(S,w)}function c(S,x){let w=s[S.id];w===void 0&&(v(S),w=u(S),s[S.id]=w,S.addEventListener("dispose",p));const N=x.program;n.updateUBOMapping(S,N);const b=t.render.frame;r[S.id]!==b&&(d(S),r[S.id]=b)}function u(S){const x=h();S.__bindingPointIndex=x;const w=i.createBuffer(),N=S.__size,b=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,N,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,w),w}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const x=s[S.id],w=S.uniforms,N=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let b=0,R=w.length;b<R;b++){const I=Array.isArray(w[b])?w[b]:[w[b]];for(let E=0,y=I.length;E<y;E++){const D=I[E];if(f(D,b,E,N)===!0){const V=D.__offset,z=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let q=0;q<z.length;q++){const k=z[q],K=g(k);typeof k=="number"||typeof k=="boolean"?(D.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,V+W,D.__data)):k.isMatrix3?(D.__data[0]=k.elements[0],D.__data[1]=k.elements[1],D.__data[2]=k.elements[2],D.__data[3]=0,D.__data[4]=k.elements[3],D.__data[5]=k.elements[4],D.__data[6]=k.elements[5],D.__data[7]=0,D.__data[8]=k.elements[6],D.__data[9]=k.elements[7],D.__data[10]=k.elements[8],D.__data[11]=0):(k.toArray(D.__data,W),W+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,x,w,N){const b=S.value,R=x+"_"+w;if(N[R]===void 0)return typeof b=="number"||typeof b=="boolean"?N[R]=b:N[R]=b.clone(),!0;{const I=N[R];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return N[R]=b,!0}else if(I.equals(b)===!1)return I.copy(b),!0}return!1}function v(S){const x=S.uniforms;let w=0;const N=16;for(let R=0,I=x.length;R<I;R++){const E=Array.isArray(x[R])?x[R]:[x[R]];for(let y=0,D=E.length;y<D;y++){const V=E[y],z=Array.isArray(V.value)?V.value:[V.value];for(let W=0,q=z.length;W<q;W++){const k=z[W],K=g(k),H=w%N;H!==0&&N-H<K.boundary&&(w+=N-H),V.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=w,w+=K.storage}}}const b=w%N;return b>0&&(w+=N-b),S.__size=w,S.__cache={},this}function g(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function p(S){const x=S.target;x.removeEventListener("dispose",p);const w=o.indexOf(x.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function m(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class jm{constructor(t={}){const{canvas:e=Gu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const m=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ke,this.toneMapping=Pn,this.toneMappingExposure=1;const x=this;let w=!1,N=0,b=0,R=null,I=-1,E=null;const y=new jt,D=new jt;let V=null;const z=new xt(0);let W=0,q=e.width,k=e.height,K=1,H=null,ht=null;const pt=new jt(0,0,q,k),vt=new jt(0,0,q,k);let Bt=!1;const Yt=new Po;let X=!1,Q=!1;const dt=new te,at=new A,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Dt=!1;function Ht(){return R===null?K:1}let P=n;function Vt(M,L){return e.getContext(M,L)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wo}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",G,!1),e.addEventListener("webglcontextcreationerror",Y,!1),P===null){const L="webgl2";if(P=Vt(L,M),P===null)throw Vt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ot,ee,St,kt,Nt,Ct,ce,T,_,B,$,Z,J,Mt,st,rt,Lt,tt,gt,Ft,Tt,lt,Ut,zt;function ae(){Ot=new op(P),Ot.init(),lt=new km(P,Ot),ee=new tp(P,Ot,t,lt),St=new Vm(P),kt=new cp(P),Nt=new Am,Ct=new Hm(P,Ot,St,Nt,ee,lt,kt),ce=new np(x),T=new rp(x),_=new mh(P),Ut=new jd(P,_),B=new ap(P,_,kt,Ut),$=new hp(P,B,_,kt),gt=new up(P,ee,Ct),rt=new ep(Nt),Z=new Tm(x,ce,T,Ot,ee,Ut,rt),J=new Zm(x,Nt),Mt=new Rm,st=new Im(Ot),tt=new Jd(x,ce,T,St,$,d,l),Lt=new Bm(x,$,ee),zt=new Jm(P,kt,ee,St),Ft=new Qd(P,Ot,kt),Tt=new lp(P,Ot,kt),kt.programs=Z.programs,x.capabilities=ee,x.extensions=Ot,x.properties=Nt,x.renderLists=Mt,x.shadowMap=Lt,x.state=St,x.info=kt}ae();const C=new $m(x,P);this.xr=C,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const M=Ot.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ot.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(M){M!==void 0&&(K=M,this.setSize(q,k,!1))},this.getSize=function(M){return M.set(q,k)},this.setSize=function(M,L,F=!0){if(C.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=M,k=L,e.width=Math.floor(M*K),e.height=Math.floor(L*K),F===!0&&(e.style.width=M+"px",e.style.height=L+"px"),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(q*K,k*K).floor()},this.setDrawingBufferSize=function(M,L,F){q=M,k=L,K=F,e.width=Math.floor(M*F),e.height=Math.floor(L*F),this.setViewport(0,0,M,L)},this.getCurrentViewport=function(M){return M.copy(y)},this.getViewport=function(M){return M.copy(pt)},this.setViewport=function(M,L,F,O){M.isVector4?pt.set(M.x,M.y,M.z,M.w):pt.set(M,L,F,O),St.viewport(y.copy(pt).multiplyScalar(K).round())},this.getScissor=function(M){return M.copy(vt)},this.setScissor=function(M,L,F,O){M.isVector4?vt.set(M.x,M.y,M.z,M.w):vt.set(M,L,F,O),St.scissor(D.copy(vt).multiplyScalar(K).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(M){St.setScissorTest(Bt=M)},this.setOpaqueSort=function(M){H=M},this.setTransparentSort=function(M){ht=M},this.getClearColor=function(M){return M.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(M=!0,L=!0,F=!0){let O=0;if(M){let U=!1;if(R!==null){const et=R.texture.format;U=et===kl||et===Hl||et===Vl}if(U){const et=R.texture.type,ut=et===Ln||et===Ui||et===Ks||et===Ii||et===zl||et===Bl,ft=tt.getClearColor(),mt=tt.getClearAlpha(),wt=ft.r,Et=ft.g,yt=ft.b;ut?(f[0]=wt,f[1]=Et,f[2]=yt,f[3]=mt,P.clearBufferuiv(P.COLOR,0,f)):(v[0]=wt,v[1]=Et,v[2]=yt,v[3]=mt,P.clearBufferiv(P.COLOR,0,v))}else O|=P.COLOR_BUFFER_BIT}L&&(O|=P.DEPTH_BUFFER_BIT),F&&(O|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",G,!1),e.removeEventListener("webglcontextcreationerror",Y,!1),Mt.dispose(),st.dispose(),Nt.dispose(),ce.dispose(),T.dispose(),$.dispose(),Ut.dispose(),zt.dispose(),Z.dispose(),C.dispose(),C.removeEventListener("sessionstart",je),C.removeEventListener("sessionend",Qe),Fn.stop()};function ct(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const M=kt.autoReset,L=Lt.enabled,F=Lt.autoUpdate,O=Lt.needsUpdate,U=Lt.type;ae(),kt.autoReset=M,Lt.enabled=L,Lt.autoUpdate=F,Lt.needsUpdate=O,Lt.type=U}function Y(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function nt(M){const L=M.target;L.removeEventListener("dispose",nt),At(L)}function At(M){Gt(M),Nt.remove(M)}function Gt(M){const L=Nt.get(M).programs;L!==void 0&&(L.forEach(function(F){Z.releaseProgram(F)}),M.isShaderMaterial&&Z.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,F,O,U,et){L===null&&(L=It);const ut=U.isMesh&&U.matrixWorld.determinant()<0,ft=xc(M,L,F,O,U);St.setMaterial(O,ut);let mt=F.index,wt=1;if(O.wireframe===!0){if(mt=B.getWireframeAttribute(F),mt===void 0)return;wt=2}const Et=F.drawRange,yt=F.attributes.position;let Wt=Et.start*wt,se=(Et.start+Et.count)*wt;et!==null&&(Wt=Math.max(Wt,et.start*wt),se=Math.min(se,(et.start+et.count)*wt)),mt!==null?(Wt=Math.max(Wt,0),se=Math.min(se,mt.count)):yt!=null&&(Wt=Math.max(Wt,0),se=Math.min(se,yt.count));const re=se-Wt;if(re<0||re===1/0)return;Ut.setup(U,O,ft,F,mt);let Ie,Xt=Ft;if(mt!==null&&(Ie=_.get(mt),Xt=Tt,Xt.setIndex(Ie)),U.isMesh)O.wireframe===!0?(St.setLineWidth(O.wireframeLinewidth*Ht()),Xt.setMode(P.LINES)):Xt.setMode(P.TRIANGLES);else if(U.isLine){let _t=O.linewidth;_t===void 0&&(_t=1),St.setLineWidth(_t*Ht()),U.isLineSegments?Xt.setMode(P.LINES):U.isLineLoop?Xt.setMode(P.LINE_LOOP):Xt.setMode(P.LINE_STRIP)}else U.isPoints?Xt.setMode(P.POINTS):U.isSprite&&Xt.setMode(P.TRIANGLES);if(U.isBatchedMesh)U._multiDrawInstances!==null?Xt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances):Xt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else if(U.isInstancedMesh)Xt.renderInstances(Wt,re,U.count);else if(F.isInstancedBufferGeometry){const _t=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Ae=Math.min(F.instanceCount,_t);Xt.renderInstances(Wt,re,Ae)}else Xt.render(Wt,re)};function le(M,L,F){M.transparent===!0&&M.side===Ge&&M.forceSinglePass===!1?(M.side=De,M.needsUpdate=!0,fs(M,L,F),M.side=Dn,M.needsUpdate=!0,fs(M,L,F),M.side=Ge):fs(M,L,F)}this.compile=function(M,L,F=null){F===null&&(F=M),p=st.get(F),p.init(L),S.push(p),F.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),M!==F&&M.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const O=new Set;return M.traverse(function(U){const et=U.material;if(et)if(Array.isArray(et))for(let ut=0;ut<et.length;ut++){const ft=et[ut];le(ft,F,U),O.add(ft)}else le(et,F,U),O.add(et)}),S.pop(),p=null,O},this.compileAsync=function(M,L,F=null){const O=this.compile(M,L,F);return new Promise(U=>{function et(){if(O.forEach(function(ut){Nt.get(ut).currentProgram.isReady()&&O.delete(ut)}),O.size===0){U(M);return}setTimeout(et,10)}Ot.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let me=null;function $t(M){me&&me(M)}function je(){Fn.stop()}function Qe(){Fn.start()}const Fn=new Ql;Fn.setAnimationLoop($t),typeof self!="undefined"&&Fn.setContext(self),this.setAnimationLoop=function(M){me=M,C.setAnimationLoop(M),M===null?Fn.stop():Fn.start()},C.addEventListener("sessionstart",je),C.addEventListener("sessionend",Qe),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),C.enabled===!0&&C.isPresenting===!0&&(C.cameraAutoUpdate===!0&&C.updateCamera(L),L=C.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,L,R),p=st.get(M,S.length),p.init(L),S.push(p),dt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Yt.setFromProjectionMatrix(dt),Q=this.localClippingEnabled,X=rt.init(this.clippingPlanes,Q),g=Mt.get(M,m.length),g.init(),m.push(g),C.enabled===!0&&C.isPresenting===!0){const et=x.xr.getDepthSensingMesh();et!==null&&gr(et,L,-1/0,x.sortObjects)}gr(M,L,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(H,ht),Dt=C.enabled===!1||C.isPresenting===!1||C.hasDepthSensing()===!1,Dt&&tt.addToRenderList(g,M),this.info.render.frame++,X===!0&&rt.beginShadows();const F=p.state.shadowsArray;Lt.render(F,M,L),X===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=g.opaque,U=g.transmissive;if(p.setupLights(),L.isArrayCamera){const et=L.cameras;if(U.length>0)for(let ut=0,ft=et.length;ut<ft;ut++){const mt=et[ut];ko(O,U,M,mt)}Dt&&tt.render(M);for(let ut=0,ft=et.length;ut<ft;ut++){const mt=et[ut];Ho(g,M,mt,mt.viewport)}}else U.length>0&&ko(O,U,M,L),Dt&&tt.render(M),Ho(g,M,L);R!==null&&(Ct.updateMultisampleRenderTarget(R),Ct.updateRenderTargetMipmap(R)),M.isScene===!0&&M.onAfterRender(x,M,L),Ut.resetDefaultState(),I=-1,E=null,S.pop(),S.length>0?(p=S[S.length-1],X===!0&&rt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function gr(M,L,F,O){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)F=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Yt.intersectsSprite(M)){O&&at.setFromMatrixPosition(M.matrixWorld).applyMatrix4(dt);const ut=$.update(M),ft=M.material;ft.visible&&g.push(M,ut,ft,F,at.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Yt.intersectsObject(M))){const ut=$.update(M),ft=M.material;if(O&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),at.copy(M.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),at.copy(ut.boundingSphere.center)),at.applyMatrix4(M.matrixWorld).applyMatrix4(dt)),Array.isArray(ft)){const mt=ut.groups;for(let wt=0,Et=mt.length;wt<Et;wt++){const yt=mt[wt],Wt=ft[yt.materialIndex];Wt&&Wt.visible&&g.push(M,ut,Wt,F,at.z,yt)}}else ft.visible&&g.push(M,ut,ft,F,at.z,null)}}const et=M.children;for(let ut=0,ft=et.length;ut<ft;ut++)gr(et[ut],L,F,O)}function Ho(M,L,F,O){const U=M.opaque,et=M.transmissive,ut=M.transparent;p.setupLightsView(F),X===!0&&rt.setGlobalState(x.clippingPlanes,F),O&&St.viewport(y.copy(O)),U.length>0&&hs(U,L,F),et.length>0&&hs(et,L,F),ut.length>0&&hs(ut,L,F),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function ko(M,L,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[O.id]===void 0&&(p.state.transmissionRenderTarget[O.id]=new Un(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?os:Ln,minFilter:$n,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const et=p.state.transmissionRenderTarget[O.id],ut=O.viewport||y;et.setSize(ut.z,ut.w);const ft=x.getRenderTarget();x.setRenderTarget(et),x.getClearColor(z),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),Dt?tt.render(F):x.clear();const mt=x.toneMapping;x.toneMapping=Pn;const wt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),p.setupLightsView(O),X===!0&&rt.setGlobalState(x.clippingPlanes,O),hs(M,F,O),Ct.updateMultisampleRenderTarget(et),Ct.updateRenderTargetMipmap(et),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let yt=0,Wt=L.length;yt<Wt;yt++){const se=L[yt],re=se.object,Ie=se.geometry,Xt=se.material,_t=se.group;if(Xt.side===Ge&&re.layers.test(O.layers)){const Ae=Xt.side;Xt.side=De,Xt.needsUpdate=!0,Go(re,F,O,Ie,Xt,_t),Xt.side=Ae,Xt.needsUpdate=!0,Et=!0}}Et===!0&&(Ct.updateMultisampleRenderTarget(et),Ct.updateRenderTargetMipmap(et))}x.setRenderTarget(ft),x.setClearColor(z,W),wt!==void 0&&(O.viewport=wt),x.toneMapping=mt}function hs(M,L,F){const O=L.isScene===!0?L.overrideMaterial:null;for(let U=0,et=M.length;U<et;U++){const ut=M[U],ft=ut.object,mt=ut.geometry,wt=O===null?ut.material:O,Et=ut.group;ft.layers.test(F.layers)&&Go(ft,L,F,mt,wt,Et)}}function Go(M,L,F,O,U,et){M.onBeforeRender(x,L,F,O,U,et),M.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(x,L,F,O,M,et),U.transparent===!0&&U.side===Ge&&U.forceSinglePass===!1?(U.side=De,U.needsUpdate=!0,x.renderBufferDirect(F,L,O,U,M,et),U.side=Dn,U.needsUpdate=!0,x.renderBufferDirect(F,L,O,U,M,et),U.side=Ge):x.renderBufferDirect(F,L,O,U,M,et),M.onAfterRender(x,L,F,O,U,et)}function fs(M,L,F){L.isScene!==!0&&(L=It);const O=Nt.get(M),U=p.state.lights,et=p.state.shadowsArray,ut=U.state.version,ft=Z.getParameters(M,U.state,et,L,F),mt=Z.getProgramCacheKey(ft);let wt=O.programs;O.environment=M.isMeshStandardMaterial?L.environment:null,O.fog=L.fog,O.envMap=(M.isMeshStandardMaterial?T:ce).get(M.envMap||O.environment),O.envMapRotation=O.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,wt===void 0&&(M.addEventListener("dispose",nt),wt=new Map,O.programs=wt);let Et=wt.get(mt);if(Et!==void 0){if(O.currentProgram===Et&&O.lightsStateVersion===ut)return Xo(M,ft),Et}else ft.uniforms=Z.getUniforms(M),M.onBuild(F,ft,x),M.onBeforeCompile(ft,x),Et=Z.acquireProgram(ft,mt),wt.set(mt,Et),O.uniforms=ft.uniforms;const yt=O.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(yt.clippingPlanes=rt.uniform),Xo(M,ft),O.needsLights=yc(M),O.lightsStateVersion=ut,O.needsLights&&(yt.ambientLightColor.value=U.state.ambient,yt.lightProbe.value=U.state.probe,yt.directionalLights.value=U.state.directional,yt.directionalLightShadows.value=U.state.directionalShadow,yt.spotLights.value=U.state.spot,yt.spotLightShadows.value=U.state.spotShadow,yt.rectAreaLights.value=U.state.rectArea,yt.ltc_1.value=U.state.rectAreaLTC1,yt.ltc_2.value=U.state.rectAreaLTC2,yt.pointLights.value=U.state.point,yt.pointLightShadows.value=U.state.pointShadow,yt.hemisphereLights.value=U.state.hemi,yt.directionalShadowMap.value=U.state.directionalShadowMap,yt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,yt.spotShadowMap.value=U.state.spotShadowMap,yt.spotLightMatrix.value=U.state.spotLightMatrix,yt.spotLightMap.value=U.state.spotLightMap,yt.pointShadowMap.value=U.state.pointShadowMap,yt.pointShadowMatrix.value=U.state.pointShadowMatrix),O.currentProgram=Et,O.uniformsList=null,Et}function Wo(M){if(M.uniformsList===null){const L=M.currentProgram.getUniforms();M.uniformsList=Ys.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function Xo(M,L){const F=Nt.get(M);F.outputColorSpace=L.outputColorSpace,F.batching=L.batching,F.batchingColor=L.batchingColor,F.instancing=L.instancing,F.instancingColor=L.instancingColor,F.instancingMorph=L.instancingMorph,F.skinning=L.skinning,F.morphTargets=L.morphTargets,F.morphNormals=L.morphNormals,F.morphColors=L.morphColors,F.morphTargetsCount=L.morphTargetsCount,F.numClippingPlanes=L.numClippingPlanes,F.numIntersection=L.numClipIntersection,F.vertexAlphas=L.vertexAlphas,F.vertexTangents=L.vertexTangents,F.toneMapping=L.toneMapping}function xc(M,L,F,O,U){L.isScene!==!0&&(L=It),Ct.resetTextureUnits();const et=L.fog,ut=O.isMeshStandardMaterial?L.environment:null,ft=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:In,mt=(O.isMeshStandardMaterial?T:ce).get(O.envMap||ut),wt=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Et=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),yt=!!F.morphAttributes.position,Wt=!!F.morphAttributes.normal,se=!!F.morphAttributes.color;let re=Pn;O.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(re=x.toneMapping);const Ie=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Xt=Ie!==void 0?Ie.length:0,_t=Nt.get(O),Ae=p.state.lights;if(X===!0&&(Q===!0||M!==E)){const ze=M===E&&O.id===I;rt.setState(O,M,ze)}let Kt=!1;O.version===_t.__version?(_t.needsLights&&_t.lightsStateVersion!==Ae.state.version||_t.outputColorSpace!==ft||U.isBatchedMesh&&_t.batching===!1||!U.isBatchedMesh&&_t.batching===!0||U.isBatchedMesh&&_t.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&_t.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&_t.instancing===!1||!U.isInstancedMesh&&_t.instancing===!0||U.isSkinnedMesh&&_t.skinning===!1||!U.isSkinnedMesh&&_t.skinning===!0||U.isInstancedMesh&&_t.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&_t.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&_t.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&_t.instancingMorph===!1&&U.morphTexture!==null||_t.envMap!==mt||O.fog===!0&&_t.fog!==et||_t.numClippingPlanes!==void 0&&(_t.numClippingPlanes!==rt.numPlanes||_t.numIntersection!==rt.numIntersection)||_t.vertexAlphas!==wt||_t.vertexTangents!==Et||_t.morphTargets!==yt||_t.morphNormals!==Wt||_t.morphColors!==se||_t.toneMapping!==re||_t.morphTargetsCount!==Xt)&&(Kt=!0):(Kt=!0,_t.__version=O.version);let cn=_t.currentProgram;Kt===!0&&(cn=fs(O,L,U));let ds=!1,On=!1,_r=!1;const ve=cn.getUniforms(),xn=_t.uniforms;if(St.useProgram(cn.program)&&(ds=!0,On=!0,_r=!0),O.id!==I&&(I=O.id,On=!0),ds||E!==M){ve.setValue(P,"projectionMatrix",M.projectionMatrix),ve.setValue(P,"viewMatrix",M.matrixWorldInverse);const ze=ve.map.cameraPosition;ze!==void 0&&ze.setValue(P,at.setFromMatrixPosition(M.matrixWorld)),ee.logarithmicDepthBuffer&&ve.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ve.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,On=!0,_r=!0)}if(U.isSkinnedMesh){ve.setOptional(P,U,"bindMatrix"),ve.setOptional(P,U,"bindMatrixInverse");const ze=U.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),ve.setValue(P,"boneTexture",ze.boneTexture,Ct))}U.isBatchedMesh&&(ve.setOptional(P,U,"batchingTexture"),ve.setValue(P,"batchingTexture",U._matricesTexture,Ct),ve.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&ve.setValue(P,"batchingColorTexture",U._colorsTexture,Ct));const xr=F.morphAttributes;if((xr.position!==void 0||xr.normal!==void 0||xr.color!==void 0)&&gt.update(U,F,cn),(On||_t.receiveShadow!==U.receiveShadow)&&(_t.receiveShadow=U.receiveShadow,ve.setValue(P,"receiveShadow",U.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(xn.envMap.value=mt,xn.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&L.environment!==null&&(xn.envMapIntensity.value=L.environmentIntensity),On&&(ve.setValue(P,"toneMappingExposure",x.toneMappingExposure),_t.needsLights&&Mc(xn,_r),et&&O.fog===!0&&J.refreshFogUniforms(xn,et),J.refreshMaterialUniforms(xn,O,K,k,p.state.transmissionRenderTarget[M.id]),Ys.upload(P,Wo(_t),xn,Ct)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Ys.upload(P,Wo(_t),xn,Ct),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ve.setValue(P,"center",U.center),ve.setValue(P,"modelViewMatrix",U.modelViewMatrix),ve.setValue(P,"normalMatrix",U.normalMatrix),ve.setValue(P,"modelMatrix",U.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const ze=O.uniformsGroups;for(let Mr=0,Sc=ze.length;Mr<Sc;Mr++){const qo=ze[Mr];zt.update(qo,cn),zt.bind(qo,cn)}}return cn}function Mc(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function yc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(M,L,F){Nt.get(M.texture).__webglTexture=L,Nt.get(M.depthTexture).__webglTexture=F;const O=Nt.get(M);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,L){const F=Nt.get(M);F.__webglFramebuffer=L,F.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,F=0){R=M,N=L,b=F;let O=!0,U=null,et=!1,ut=!1;if(M){const mt=Nt.get(M);mt.__useDefaultFramebuffer!==void 0?(St.bindFramebuffer(P.FRAMEBUFFER,null),O=!1):mt.__webglFramebuffer===void 0?Ct.setupRenderTarget(M):mt.__hasExternalTextures&&Ct.rebindTextures(M,Nt.get(M.texture).__webglTexture,Nt.get(M.depthTexture).__webglTexture);const wt=M.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(ut=!0);const Et=Nt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Et[L])?U=Et[L][F]:U=Et[L],et=!0):M.samples>0&&Ct.useMultisampledRTT(M)===!1?U=Nt.get(M).__webglMultisampledFramebuffer:Array.isArray(Et)?U=Et[F]:U=Et,y.copy(M.viewport),D.copy(M.scissor),V=M.scissorTest}else y.copy(pt).multiplyScalar(K).floor(),D.copy(vt).multiplyScalar(K).floor(),V=Bt;if(St.bindFramebuffer(P.FRAMEBUFFER,U)&&O&&St.drawBuffers(M,U),St.viewport(y),St.scissor(D),St.setScissorTest(V),et){const mt=Nt.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+L,mt.__webglTexture,F)}else if(ut){const mt=Nt.get(M.texture),wt=L||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,mt.__webglTexture,F||0,wt)}I=-1},this.readRenderTargetPixels=function(M,L,F,O,U,et,ut){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=Nt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ut!==void 0&&(ft=ft[ut]),ft){St.bindFramebuffer(P.FRAMEBUFFER,ft);try{const mt=M.texture,wt=mt.format,Et=mt.type;if(!ee.textureFormatReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-O&&F>=0&&F<=M.height-U&&P.readPixels(L,F,O,U,lt.convert(wt),lt.convert(Et),et)}finally{const mt=R!==null?Nt.get(R).__webglFramebuffer:null;St.bindFramebuffer(P.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(M,L,F,O,U,et,ut){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=Nt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ut!==void 0&&(ft=ft[ut]),ft){St.bindFramebuffer(P.FRAMEBUFFER,ft);try{const mt=M.texture,wt=mt.format,Et=mt.type;if(!ee.textureFormatReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=M.width-O&&F>=0&&F<=M.height-U){const yt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,yt),P.bufferData(P.PIXEL_PACK_BUFFER,et.byteLength,P.STREAM_READ),P.readPixels(L,F,O,U,lt.convert(wt),lt.convert(Et),0),P.flush();const Wt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);await Wu(P,Wt,4);try{P.bindBuffer(P.PIXEL_PACK_BUFFER,yt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,et)}finally{P.deleteBuffer(yt),P.deleteSync(Wt)}return et}}finally{const mt=R!==null?Nt.get(R).__webglFramebuffer:null;St.bindFramebuffer(P.FRAMEBUFFER,mt)}}},this.copyFramebufferToTexture=function(M,L=null,F=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,M=arguments[1]);const O=Math.pow(2,-F),U=Math.floor(M.image.width*O),et=Math.floor(M.image.height*O),ut=L!==null?L.x:0,ft=L!==null?L.y:0;Ct.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,F,0,0,ut,ft,U,et),St.unbindTexture()},this.copyTextureToTexture=function(M,L,F=null,O=null,U=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,M=arguments[1],L=arguments[2],U=arguments[3]||0,F=null);let et,ut,ft,mt,wt,Et;F!==null?(et=F.max.x-F.min.x,ut=F.max.y-F.min.y,ft=F.min.x,mt=F.min.y):(et=M.image.width,ut=M.image.height,ft=0,mt=0),O!==null?(wt=O.x,Et=O.y):(wt=0,Et=0);const yt=lt.convert(L.format),Wt=lt.convert(L.type);Ct.setTexture2D(L,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,L.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,L.unpackAlignment);const se=P.getParameter(P.UNPACK_ROW_LENGTH),re=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ie=P.getParameter(P.UNPACK_SKIP_PIXELS),Xt=P.getParameter(P.UNPACK_SKIP_ROWS),_t=P.getParameter(P.UNPACK_SKIP_IMAGES),Ae=M.isCompressedTexture?M.mipmaps[U]:M.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Ae.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ae.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ft),P.pixelStorei(P.UNPACK_SKIP_ROWS,mt),M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,wt,Et,et,ut,yt,Wt,Ae.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,wt,Et,Ae.width,Ae.height,yt,Ae.data):P.texSubImage2D(P.TEXTURE_2D,U,wt,Et,yt,Wt,Ae),P.pixelStorei(P.UNPACK_ROW_LENGTH,se),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,re),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ie),P.pixelStorei(P.UNPACK_SKIP_ROWS,Xt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,_t),U===0&&L.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),St.unbindTexture()},this.copyTextureToTexture3D=function(M,L,F=null,O=null,U=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,M=arguments[2],L=arguments[3],U=arguments[4]||0);let et,ut,ft,mt,wt,Et,yt,Wt,se;const re=M.isCompressedTexture?M.mipmaps[U]:M.image;F!==null?(et=F.max.x-F.min.x,ut=F.max.y-F.min.y,ft=F.max.z-F.min.z,mt=F.min.x,wt=F.min.y,Et=F.min.z):(et=re.width,ut=re.height,ft=re.depth,mt=0,wt=0,Et=0),O!==null?(yt=O.x,Wt=O.y,se=O.z):(yt=0,Wt=0,se=0);const Ie=lt.convert(L.format),Xt=lt.convert(L.type);let _t;if(L.isData3DTexture)Ct.setTexture3D(L,0),_t=P.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)Ct.setTexture2DArray(L,0),_t=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,L.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,L.unpackAlignment);const Ae=P.getParameter(P.UNPACK_ROW_LENGTH),Kt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),cn=P.getParameter(P.UNPACK_SKIP_PIXELS),ds=P.getParameter(P.UNPACK_SKIP_ROWS),On=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,re.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,re.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,mt),P.pixelStorei(P.UNPACK_SKIP_ROWS,wt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Et),M.isDataTexture||M.isData3DTexture?P.texSubImage3D(_t,U,yt,Wt,se,et,ut,ft,Ie,Xt,re.data):L.isCompressedArrayTexture?P.compressedTexSubImage3D(_t,U,yt,Wt,se,et,ut,ft,Ie,re.data):P.texSubImage3D(_t,U,yt,Wt,se,et,ut,ft,Ie,Xt,re),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ae),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Kt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,cn),P.pixelStorei(P.UNPACK_SKIP_ROWS,ds),P.pixelStorei(P.UNPACK_SKIP_IMAGES,On),U===0&&L.generateMipmaps&&P.generateMipmap(_t),St.unbindTexture()},this.initRenderTarget=function(M){Nt.get(M).__webglFramebuffer===void 0&&Ct.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ct.setTextureCube(M,0):M.isData3DTexture?Ct.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ct.setTexture2DArray(M,0):Ct.setTexture2D(M,0),St.unbindTexture()},this.resetState=function(){N=0,b=0,R=null,St.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===To?"display-p3":"srgb",e.unpackColorSpace=qt.workingColorSpace===lr?"display-p3":"srgb"}}class hr{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new xt(t),this.near=e,this.far=n}clone(){return new hr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ac extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Je,this.environmentIntensity=1,this.environmentRotation=new Je,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Qm extends Nn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const er=new A,nr=new A,dl=new te,qi=new cr,Fs=new Zn,jr=new A,pl=new A;class t0 extends fe{constructor(t=new Me,e=new Qm){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)er.fromBufferAttribute(e,s-1),nr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=er.distanceTo(nr);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere),Fs.applyMatrix4(s),Fs.radius+=r,t.ray.intersectsSphere(Fs)===!1)return;dl.copy(s).invert(),qi.copy(t.ray).applyMatrix4(dl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let g=f,p=v-1;g<p;g+=c){const m=u.getX(g),S=u.getX(g+1),x=Os(this,t,qi,l,m,S);x&&e.push(x)}if(this.isLineLoop){const g=u.getX(v-1),p=u.getX(f),m=Os(this,t,qi,l,g,p);m&&e.push(m)}}else{const f=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let g=f,p=v-1;g<p;g+=c){const m=Os(this,t,qi,l,g,g+1);m&&e.push(m)}if(this.isLineLoop){const g=Os(this,t,qi,l,v-1,f);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Os(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(er.fromBufferAttribute(o,s),nr.fromBufferAttribute(o,r),e.distanceSqToSegment(er,nr,jr,pl)>n)return;jr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(jr);if(!(l<t.near||l>t.far))return{distance:l,point:pl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,object:i}}const ml=new A,vl=new A;class vo extends t0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)ml.fromBufferAttribute(e,s),vl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ml.distanceTo(vl);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class e0 extends Nn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const gl=new te,go=new cr,zs=new Zn,Bs=new A;class Lo extends fe{constructor(t=new Me,e=new e0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere),zs.applyMatrix4(s),zs.radius+=r,t.ray.intersectsSphere(zs)===!1)return;gl.copy(s).invert(),go.copy(t.ray).applyMatrix4(gl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let v=d,g=f;v<g;v++){const p=c.getX(v);Bs.fromBufferAttribute(h,p),_l(Bs,p,l,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let v=d,g=f;v<g;v++)Bs.fromBufferAttribute(h,v),_l(Bs,v,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function _l(i,t,e,n,s,r,o){const a=go.distanceSqToPoint(i);if(a<e){const l=new A;go.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class rn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ot:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new A,s=[],r=[],o=[],a=new A,l=new te;for(let f=0;f<=t;f++){const v=f/t;s[f]=this.getTangentAt(v,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(_e(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,v))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(_e(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let v=1;v<=t;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],f*v)),o[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Uo extends rn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ot){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class n0 extends Uo{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Io(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Vs=new A,Qr=new Io,to=new Io,eo=new Io;class i0 extends rn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new A){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Vs.subVectors(s[0],s[1]).add(s[0]),c=Vs);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Vs.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Vs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(u),f);g<1e-4&&(g=1),v<1e-4&&(v=g),p<1e-4&&(p=g),Qr.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,v,g,p),to.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,v,g,p),eo.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,v,g,p)}else this.curveType==="catmullrom"&&(Qr.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),to.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),eo.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Qr.calc(l),to.calc(l),eo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function xl(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function s0(i,t){const e=1-i;return e*e*t}function r0(i,t){return 2*(1-i)*i*t}function o0(i,t){return i*i*t}function Qi(i,t,e,n){return s0(i,t)+r0(i,e)+o0(i,n)}function a0(i,t){const e=1-i;return e*e*e*t}function l0(i,t){const e=1-i;return 3*e*e*i*t}function c0(i,t){return 3*(1-i)*i*i*t}function u0(i,t){return i*i*i*t}function ts(i,t,e,n,s){return a0(i,t)+l0(i,e)+c0(i,n)+u0(i,s)}class lc extends rn{constructor(t=new ot,e=new ot,n=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ot){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ts(t,s.x,r.x,o.x,a.x),ts(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class h0 extends rn{constructor(t=new A,e=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new A){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ts(t,s.x,r.x,o.x,a.x),ts(t,s.y,r.y,o.y,a.y),ts(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class cc extends rn{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class f0 extends rn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uc extends rn{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Qi(t,s.x,r.x,o.x),Qi(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class d0 extends rn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Qi(t,s.x,r.x,o.x),Qi(t,s.y,r.y,o.y),Qi(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hc extends rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(xl(a,l.x,c.x,u.x,h.x),xl(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ot().fromArray(s))}return this}}var Ml=Object.freeze({__proto__:null,ArcCurve:n0,CatmullRomCurve3:i0,CubicBezierCurve:lc,CubicBezierCurve3:h0,EllipseCurve:Uo,LineCurve:cc,LineCurve3:f0,QuadraticBezierCurve:uc,QuadraticBezierCurve3:d0,SplineCurve:hc});class p0 extends rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ml[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Ml[s.type]().fromJSON(s))}return this}}class ir extends p0{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new cc(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new uc(this.currentPoint.clone(),new ot(t,e),new ot(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new lc(this.currentPoint.clone(),new ot(t,e),new ot(n,s),new ot(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new hc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new Uo(t,e,n,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class fr extends Me{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=_e(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/e,h=new A,d=new ot,f=new A,v=new A,g=new A;let p=0,m=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:p=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(g.x,g.y,g.z);break;default:p=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,f.x=m*1,f.y=-p,f.z=m*0,v.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),l.push(f.x,f.y,f.z),g.copy(v)}for(let S=0;S<=e;S++){const x=n+S*u*s,w=Math.sin(x),N=Math.cos(x);for(let b=0;b<=t.length-1;b++){h.x=t[b].x*w,h.y=t[b].y,h.z=t[b].x*N,o.push(h.x,h.y,h.z),d.x=S/e,d.y=b/(t.length-1),a.push(d.x,d.y);const R=l[3*b+0]*w,I=l[3*b+1],E=l[3*b+0]*N;c.push(R,I,E)}}for(let S=0;S<e;S++)for(let x=0;x<t.length-1;x++){const w=x+S*t.length,N=w,b=w+t.length,R=w+t.length+1,I=w+1;r.push(N,b,I),r.push(R,I,b)}this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("uv",new Zt(a,2)),this.setAttribute("normal",new Zt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fr(t.points,t.segments,t.phiStart,t.phiLength)}}class sr extends fr{constructor(t=1,e=1,n=4,s=8){const r=new ir;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new sr(t.radius,t.length,t.capSegments,t.radialSegments)}}class dr extends Me{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new A,u=new ot;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const f=n+h/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(a,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class xe extends Me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let v=0;const g=[],p=n/2;let m=0;S(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Zt(h,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(f,2));function S(){const w=new A,N=new A;let b=0;const R=(e-t)/n;for(let I=0;I<=r;I++){const E=[],y=I/r,D=y*(e-t)+t;for(let V=0;V<=s;V++){const z=V/s,W=z*l+a,q=Math.sin(W),k=Math.cos(W);N.x=D*q,N.y=-y*n+p,N.z=D*k,h.push(N.x,N.y,N.z),w.set(q,R,k).normalize(),d.push(w.x,w.y,w.z),f.push(z,1-y),E.push(v++)}g.push(E)}for(let I=0;I<s;I++)for(let E=0;E<r;E++){const y=g[E][I],D=g[E+1][I],V=g[E+1][I+1],z=g[E][I+1];u.push(y,D,z),u.push(D,V,z),b+=6}c.addGroup(m,b,0),m+=b}function x(w){const N=v,b=new ot,R=new A;let I=0;const E=w===!0?t:e,y=w===!0?1:-1;for(let V=1;V<=s;V++)h.push(0,p*y,0),d.push(0,y,0),f.push(.5,.5),v++;const D=v;for(let V=0;V<=s;V++){const W=V/s*l+a,q=Math.cos(W),k=Math.sin(W);R.x=E*k,R.y=p*y,R.z=E*q,h.push(R.x,R.y,R.z),d.push(0,y,0),b.x=q*.5+.5,b.y=k*.5*y+.5,f.push(b.x,b.y),v++}for(let V=0;V<s;V++){const z=N+V,W=D+V;w===!0?u.push(W,W+1,z):u.push(W+1,W,z),I+=3}c.addGroup(m,I,w===!0?1:2),m+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qn extends xe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Qn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fc extends ir{constructor(t){super(t),this.uuid=jn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new ir().fromJSON(s))}return this}}const m0={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=dc(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,d,f;if(n&&(r=M0(i,t,r,e)),i.length>80*e){a=c=i[0],l=u=i[1];for(let v=e;v<s;v+=e)h=i[v],d=i[v+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return is(r,o,e,a,l,f,0),o}};function dc(i,t,e,n,s){let r,o;if(s===D0(i,t,e,n)>0)for(r=t;r<e;r+=n)o=yl(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=yl(r,i[r],i[r+1],o);return o&&pr(o,o.next)&&(rs(o),o=o.next),o}function Jn(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(pr(e,e.next)||ne(e.prev,e,e.next)===0)){if(rs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function is(i,t,e,n,s,r,o){if(!i)return;!o&&r&&T0(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?g0(i,n,s,r):v0(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),rs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=_0(Jn(i),t,e),is(i,t,e,n,s,r,2)):o===2&&x0(i,t,e,n,s,r):is(Jn(i),t,e,n,s,r,1);break}}}function v0(i){const t=i.prev,e=i,n=i.next;if(ne(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c;let v=n.next;for(;v!==t;){if(v.x>=u&&v.x<=d&&v.y>=h&&v.y<=f&&bi(s,a,r,l,o,c,v.x,v.y)&&ne(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function g0(i,t,e,n){const s=i.prev,r=i,o=i.next;if(ne(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,v=u<h?u<d?u:d:h<d?h:d,g=a>l?a>c?a:c:l>c?l:c,p=u>h?u>d?u:d:h>d?h:d,m=_o(f,v,t,e,n),S=_o(g,p,t,e,n);let x=i.prevZ,w=i.nextZ;for(;x&&x.z>=m&&w&&w.z<=S;){if(x.x>=f&&x.x<=g&&x.y>=v&&x.y<=p&&x!==s&&x!==o&&bi(a,u,l,h,c,d,x.x,x.y)&&ne(x.prev,x,x.next)>=0||(x=x.prevZ,w.x>=f&&w.x<=g&&w.y>=v&&w.y<=p&&w!==s&&w!==o&&bi(a,u,l,h,c,d,w.x,w.y)&&ne(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;x&&x.z>=m;){if(x.x>=f&&x.x<=g&&x.y>=v&&x.y<=p&&x!==s&&x!==o&&bi(a,u,l,h,c,d,x.x,x.y)&&ne(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;w&&w.z<=S;){if(w.x>=f&&w.x<=g&&w.y>=v&&w.y<=p&&w!==s&&w!==o&&bi(a,u,l,h,c,d,w.x,w.y)&&ne(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function _0(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!pr(s,r)&&pc(s,n,n.next,r)&&ss(s,r)&&ss(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),rs(n),rs(n.next),n=i=r),n=n.next}while(n!==i);return Jn(n)}function x0(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&R0(o,a)){let l=mc(o,a);o=Jn(o,o.next),l=Jn(l,l.next),is(o,t,e,n,s,r,0),is(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function M0(i,t,e,n){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=dc(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(b0(c));for(s.sort(y0),r=0;r<s.length;r++)e=S0(s[r],e);return e}function y0(i,t){return i.x-t.x}function S0(i,t){const e=w0(i,t);if(!e)return t;const n=mc(e,i);return Jn(n,n.next),Jn(e,e.next)}function w0(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&bi(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),ss(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&E0(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function E0(i,t){return ne(i.prev,i,t.prev)<0&&ne(t.next,i,i.next)<0}function T0(i,t,e,n){let s=i;do s.z===0&&(s.z=_o(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,A0(s)}function A0(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function _o(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function b0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function bi(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function R0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!C0(i,t)&&(ss(i,t)&&ss(t,i)&&P0(i,t)&&(ne(i.prev,i,t.prev)||ne(i,t.prev,t))||pr(i,t)&&ne(i.prev,i,i.next)>0&&ne(t.prev,t,t.next)>0)}function ne(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function pr(i,t){return i.x===t.x&&i.y===t.y}function pc(i,t,e,n){const s=ks(ne(i,t,e)),r=ks(ne(i,t,n)),o=ks(ne(e,n,i)),a=ks(ne(e,n,t));return!!(s!==r&&o!==a||s===0&&Hs(i,e,t)||r===0&&Hs(i,n,t)||o===0&&Hs(e,i,n)||a===0&&Hs(e,t,n))}function Hs(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ks(i){return i>0?1:i<0?-1:0}function C0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&pc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ss(i,t){return ne(i.prev,i,i.next)<0?ne(i,t,i.next)>=0&&ne(i,i.prev,t)>=0:ne(i,t,i.prev)<0||ne(i,i.next,t)<0}function P0(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function mc(i,t){const e=new xo(i.i,i.x,i.y),n=new xo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function yl(i,t,e,n){const s=new xo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function rs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function xo(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function D0(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class es{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return es.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Sl(t),wl(n,t);let o=t.length;e.forEach(Sl);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,wl(n,e[l]);const a=m0.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Sl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function wl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class No extends Me{constructor(t=new fc([new ot(0,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Zt(s,3)),this.setAttribute("normal",new Zt(r,3)),this.setAttribute("uv",new Zt(o,2));function c(u){const h=s.length/3,d=u.extractPoints(e);let f=d.shape;const v=d.holes;es.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=v.length;p<m;p++){const S=v[p];es.isClockWise(S)===!0&&(v[p]=S.reverse())}const g=es.triangulateShape(f,v);for(let p=0,m=v.length;p<m;p++){const S=v[p];f=f.concat(S)}for(let p=0,m=f.length;p<m;p++){const S=f[p];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let p=0,m=g.length;p<m;p++){const S=g[p],x=S[0]+h,w=S[1]+h,N=S[2]+h;n.push(x,w,N),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return L0(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new No(n,t.curveSegments)}}function L0(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Te extends Me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new A,d=new A,f=[],v=[],g=[],p=[];for(let m=0;m<=n;m++){const S=[],x=m/n;let w=0;m===0&&o===0?w=.5/e:m===n&&l===Math.PI&&(w=-.5/e);for(let N=0;N<=e;N++){const b=N/e;h.x=-t*Math.cos(s+b*r)*Math.sin(o+x*a),h.y=t*Math.cos(o+x*a),h.z=t*Math.sin(s+b*r)*Math.sin(o+x*a),v.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),p.push(b+w,1-x),S.push(c++)}u.push(S)}for(let m=0;m<n;m++)for(let S=0;S<e;S++){const x=u[m][S+1],w=u[m][S],N=u[m+1][S],b=u[m+1][S+1];(m!==0||o>0)&&f.push(x,w,b),(m!==n-1||l<Math.PI)&&f.push(w,N,b)}this.setIndex(f),this.setAttribute("position",new Zt(v,3)),this.setAttribute("normal",new Zt(g,3)),this.setAttribute("uv",new Zt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class cs extends Me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new A,h=new A,d=new A;for(let f=0;f<=n;f++)for(let v=0;v<=s;v++){const g=v/s*r,p=f/n*Math.PI*2;h.x=(t+e*Math.cos(p))*Math.cos(g),h.y=(t+e*Math.cos(p))*Math.sin(g),h.z=e*Math.sin(p),a.push(h.x,h.y,h.z),u.x=t*Math.cos(g),u.y=t*Math.sin(g),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(v/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let v=1;v<=s;v++){const g=(s+1)*f+v-1,p=(s+1)*(f-1)+v-1,m=(s+1)*(f-1)+v,S=(s+1)*f+v;o.push(g,p,S),o.push(p,m,S)}this.setIndex(o),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class nn extends Nn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new xt(16777215),this.specular=new xt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.combine=or,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Rt extends Nn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.combine=or,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vc extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class U0 extends vc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const no=new te,El=new A,Tl=new A;class I0{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Po,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;El.setFromMatrixPosition(t.matrixWorld),e.position.copy(El),Tl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Tl),e.updateMatrixWorld(),no.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(no),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(no)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class N0 extends I0{constructor(){super(new tc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class F0 extends vc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new N0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class O0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Al(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Al();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Al(){return(typeof performance=="undefined"?Date:performance).now()}const bl=new te;class z0{constructor(t,e,n=0,s=1/0){this.ray=new cr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new bo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return bl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bl),this}intersectObject(t,e=!0,n=[]){return Mo(t,this,n,e),n.sort(Rl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Mo(t[s],this,n,e);return n.sort(Rl),n}}function Rl(i,t){return i.distance-t.distance}function Mo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Mo(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wo);class B0{constructor(t,e){var n;this.container=t,this.quality=e,this.renderer=new jm({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(e.pixelRatio()),this.renderer.outputColorSpace=Ke,t.appendChild(this.renderer.domElement),this.floatOk=this.renderer.extensions.has("EXT_color_buffer_float")||this.renderer.extensions.has("EXT_color_buffer_half_float"),this.floatOk||console.warn("half-float レンダーターゲット非対応の環境です。表示品質が低下する可能性があります。"),this.scene=new ac,this.scene.background=new xt("#0a2a4a"),this.camera=new ke(46,1,.05,200),this.camera.position.set(0,2.1,3.6),this.lookTarget=new A(0,1,0),this.camera.lookAt(this.lookTarget),this.clock=new O0,this.elapsed=0,this.frames=0,this.fps=0,this._fpsAcc=0,this._fpsFrames=0,this._updaters=new Set,this._raycaster=new z0,this._plane=new An,this._planeHit=new A,this._ndc=new ot,this._resize=this._resize.bind(this),window.addEventListener("resize",this._resize),(n=window.visualViewport)==null||n.addEventListener("resize",this._resize),this._resize(),this.renderer.setAnimationLoop(()=>this._frame())}_resize(){const t=this.container.clientWidth||window.innerWidth,e=this.container.clientHeight||window.innerHeight;this.renderer.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}applyPixelRatio(){this.renderer.setPixelRatio(this.quality.pixelRatio()),this._resize()}_frame(){const t=Math.min(this.clock.getDelta(),.1);this.elapsed+=t,this.frames++,this._fpsAcc+=t,this._fpsFrames++,this._fpsAcc>=.5&&(this.fps=this._fpsFrames/this._fpsAcc,this._fpsAcc=0,this._fpsFrames=0);for(const e of[...this._updaters])e(t,this.elapsed);this.camera.lookAt(this.lookTarget),this.renderer.render(this.scene,this.camera)}onUpdate(t){return this._updaters.add(t),()=>this._updaters.delete(t)}worldToScreen(t,e={x:0,y:0}){const n=t.clone().project(this.camera),s=this.renderer.domElement.clientWidth,r=this.renderer.domElement.clientHeight;return e.x=(n.x*.5+.5)*s,e.y=(-n.y*.5+.5)*r,e}screenToPlane(t,e,n,s=new A){const r=this.renderer.domElement.clientWidth,o=this.renderer.domElement.clientHeight;return this._ndc.set(t/r*2-1,-(e/o)*2+1),this._raycaster.setFromCamera(this._ndc,this.camera),this._plane.set(new A(0,1,0),-n),this._raycaster.ray.intersectPlane(this._plane,this._planeHit)&&s.copy(this._planeHit),s}screenToCustomPlane(t,e,n,s,r=new A){const o=this.renderer.domElement.clientWidth,a=this.renderer.domElement.clientHeight;return this._ndc.set(t/o*2-1,-(e/a)*2+1),this._raycaster.setFromCamera(this._ndc,this.camera),this._plane.set(n,s),this._raycaster.ray.intersectPlane(this._plane,this._planeHit)?r.copy(this._planeHit):null}raycastMesh(t,e,n){const s=this.renderer.domElement.clientWidth,r=this.renderer.domElement.clientHeight;this._ndc.set(t/s*2-1,-(e/r)*2+1),this._raycaster.setFromCamera(this._ndc,this.camera);const o=this._raycaster.intersectObject(n,!1);return o.length?o[0]:null}}const Cl="fluidviz-quality";class V0{constructor(){const t=new URLSearchParams(location.search).get("q"),e=(()=>{try{return localStorage.getItem(Cl)}catch(n){return null}})();this.level=["high","low","auto"].includes(t)?t:["high","low","auto"].includes(e)?e:"auto",this.locked=!!t,this.effective=this.level==="low"?"low":"high",this.onChange=null}get high(){return this.effective==="high"}res(t){return this.high?t:Math.max(64,Math.round(t/2.5))}particleRes(t){return this.high?t:Math.max(48,Math.round(t/2.5))}iters(t){return this.high?t:Math.max(6,Math.round(t/2))}pixelRatio(){return this.high?Math.min(window.devicePixelRatio||1,2):1}cycle(){if(!this.locked){this.level=this.level==="auto"?"high":this.level==="high"?"low":"auto";try{localStorage.setItem(Cl,this.level)}catch(t){}this._apply(this.level==="low"?"low":"high")}}autoDowngrade(){return this.locked||this.level!=="auto"||this.effective==="low"?!1:(this._apply("low"),!0)}resetAuto(){this.locked||this.level!=="auto"||this.effective!=="high"&&this._apply("high")}_apply(t){var e,n;if(this.effective===t){(e=this.onChange)==null||e.call(this,!1);return}this.effective=t,(n=this.onChange)==null||n.call(this,!0)}label(){const t={auto:"自動",high:"高",low:"低"};return`画質: ${t[this.level]}${this.level==="auto"?`(${t[this.effective]})`:""}`}}class H0{constructor(t){this.ctx=t,this._factories=new Map,this.current=null,this.currentName=null,this.onSwitch=null}register(t,e){this._factories.set(t,e)}get names(){return[...this._factories.keys()]}goto(t){var e;this._factories.has(t)&&(this.current&&(this.current.exit(),this.current.dispose()),this.current=this._factories.get(t)(),this.currentName=t,this.current.enter(this.ctx),(e=this.onSwitch)==null||e.call(this,t))}reenter(){this.currentName&&this.goto(this.currentName)}update(t,e){var n;(n=this.current)==null||n.update(t,e)}onDown(t){var e;(e=this.current)==null||e.onDown(t)}onMove(t){var e;(e=this.current)==null||e.onMove(t)}onUp(t){var e;(e=this.current)==null||e.onUp(t)}}const k0=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;class G0{constructor(t){this.renderer=t,this._scene=new ac,this._camera=new Co,this._mesh=new j(new ie(2,2),null),this._mesh.frustumCulled=!1,this._scene.add(this._mesh)}material(t,e={}){return new Jt({vertexShader:k0,fragmentShader:t,uniforms:e,depthTest:!1,depthWrite:!1,blending:gn})}run(t,e){const n=this.renderer.getRenderTarget();this._mesh.material=t,this.renderer.setRenderTarget(e),this.renderer.render(this._scene,this._camera),this.renderer.setRenderTarget(n)}dispose(){this._mesh.geometry.dispose()}}class W0{constructor(t,e){this.handlers=e,this.down=!1,this.x=0,this.y=0,this._id=null;const n={passive:!1};t.addEventListener("pointerdown",r=>{var o;this._id===null&&(this._id=r.pointerId,this.down=!0,this.x=r.clientX,this.y=r.clientY,(o=e.onDown)==null||o.call(e,{x:this.x,y:this.y,dx:0,dy:0}))},n),t.addEventListener("pointermove",r=>{var l,c;if(r.pointerId!==this._id){this._id===null&&((l=e.onHover)==null||l.call(e,{x:r.clientX,y:r.clientY}));return}const o=r.clientX-this.x,a=r.clientY-this.y;this.x=r.clientX,this.y=r.clientY,this.down&&((c=e.onMove)==null||c.call(e,{x:this.x,y:this.y,dx:o,dy:a}))},n);const s=r=>{var o;r.pointerId===this._id&&(this._id=null,this.down&&(this.down=!1,(o=e.onUp)==null||o.call(e,{x:r.clientX,y:r.clientY,dx:0,dy:0})))};t.addEventListener("pointerup",s,n),t.addEventListener("pointercancel",s,n),document.addEventListener("touchmove",r=>r.preventDefault(),{passive:!1}),document.addEventListener("gesturestart",r=>r.preventDefault()),document.addEventListener("dblclick",r=>r.preventDefault())}}class X0{constructor(t,e,n){this.container=t,this.buttons=new Map;for(const s of e){const r=document.createElement("button");r.type="button",r.className="scene-btn",r.dataset.scene=s.id,r.innerHTML=`<span class="emo">${s.emoji}</span><span>${s.label}</span>`,r.addEventListener("pointerdown",o=>{o.stopPropagation(),n(s.id)}),t.appendChild(r),this.buttons.set(s.id,r)}}setActive(t){var e;for(const[n,s]of this.buttons)s.classList.toggle("active",n===t);(e=this.buttons.get(t))==null||e.scrollIntoView({inline:"center",block:"nearest"})}}class q0{constructor(t){this.el=t,this._timer=null}show(t,e,n){this.el.innerHTML=`<h2>${t}</h2><p>${e}</p><span class="phys">${n}</span>`,this.el.classList.add("show"),clearTimeout(this._timer),this._timer=setTimeout(()=>this.el.classList.remove("show"),9e3)}}class Y0{constructor(t){this.quality=t,this.qualityBtn=document.getElementById("quality-btn"),this.fpsEl=document.getElementById("fps"),this._acc=0,this.qualityBtn.addEventListener("pointerdown",e=>{e.stopPropagation(),t.cycle(),this.refresh()}),this.refresh()}refresh(){this.qualityBtn.textContent=this.quality.label()}update(t,e){this._acc+=t,this._acc>=.5&&(this._acc=0,this.fpsEl.textContent=`${Math.round(e)} fps`)}}const Yi=1/60;class on{constructor(){this.simReady=!1,this.simSteps=0,this.interactCount=0,this.group=new Pe,this._disposables=[],this._acc=0,this.simTime=0}enter(t){this.ctx=t,t.app.scene.add(this.group),t.sceneUi.innerHTML="",this.build(t)}exit(){this.ctx.app.scene.remove(this.group),this.ctx.sceneUi.innerHTML=""}track(t){return this._disposables.push(t),t}dispose(){var t;for(const e of this._disposables)(t=e.dispose)==null||t.call(e);this._disposables.length=0,this.group.traverse(e=>{var s,r,o;(r=(s=e.geometry)==null?void 0:s.dispose)==null||r.call(s);const n=Array.isArray(e.material)?e.material:[e.material];for(const a of n)(o=a==null?void 0:a.dispose)==null||o.call(a)}),this.group.clear()}update(t,e){this._acc+=t;let n=0;for(;this._acc>=Yi&&n<3;)this.simTime+=Yi,this.simStep(Yi,this.simTime),this._acc-=Yi,n++,this.simSteps++;this._acc>=Yi&&(this._acc=0),this.frame(t,e),this.simSteps>0&&(this.simReady=!0)}build(t){}simStep(t,e){}frame(t,e){}onDown(t){}onMove(t){}onUp(t){}}function rr(i,t,{filter:e=We,wrap:n=Rn}={}){return new Un(i,t,{type:os,format:Ze,minFilter:e,magFilter:e,wrapS:n,wrapT:n,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1})}class sn{constructor(t,e,n){this.width=t,this.height=e,this.texel=new ot(1/t,1/e),this._a=rr(t,e,n),this._b=rr(t,e,n)}get read(){return this._a}get write(){return this._b}get texture(){return this._a.texture}swap(){const t=this._a;this._a=this._b,this._b=t}dispose(){this._a.dispose(),this._b.dispose()}}const _n=`
vec3 permute3(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
float snoise2(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute3(permute3(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m; m = m*m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
`,$0=`
vec2 curl2(vec2 p) {
  const float e = 0.08;
  float n1 = snoise2(p + vec2(0.0, e));
  float n2 = snoise2(p - vec2(0.0, e));
  float n3 = snoise2(p + vec2(e, 0.0));
  float n4 = snoise2(p - vec2(e, 0.0));
  return vec2((n1 - n2), -(n3 - n4)) / (2.0 * e);
}
`,an=`
float hash11(float p) { p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
vec2 hash21(float p) {
  vec3 p3 = fract(vec3(p) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xx + p3.yz) * p3.zy);
}
vec3 hash31(float p) {
  vec3 p3 = fract(vec3(p) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xxy + p3.yzz) * p3.zyx);
}
`,mr=`
uniform vec4 uSplats[8];
uniform vec4 uSplatVals[8];
uniform int uSplatCount;
`,K0=`
precision highp float;
uniform sampler2D uPrev;
uniform vec2 uTexel;
uniform float uDamp;     // 0.97〜0.999: 揺れの持続
uniform float uC2;       // 波速²(安定条件: < 0.5)
uniform float uEdgeAbsorb; // 1で端の反射を吸収
${mr}
varying vec2 vUv;
void main() {
  vec4 c = texture2D(uPrev, vUv);
  float h = c.r;
  float hp = c.g;
  float l = texture2D(uPrev, vUv - vec2(uTexel.x, 0.0)).r;
  float r = texture2D(uPrev, vUv + vec2(uTexel.x, 0.0)).r;
  float b = texture2D(uPrev, vUv - vec2(0.0, uTexel.y)).r;
  float t = texture2D(uPrev, vUv + vec2(0.0, uTexel.y)).r;
  float lap = l + r + b + t - 4.0 * h;
  float nh = h + (h - hp) * uDamp + lap * uC2;
  for (int i = 0; i < 8; i++) {
    if (i >= uSplatCount) break;
    vec4 s = uSplats[i];
    float d = distance(vUv, s.xy) / max(s.z, 1e-5);
    nh += uSplatVals[i].x * exp(-d * d);
  }
  if (uEdgeAbsorb > 0.5) {
    float e = min(min(vUv.x, 1.0 - vUv.x), min(vUv.y, 1.0 - vUv.y));
    nh *= smoothstep(0.0, 0.06, e) * 0.4 + 0.6;
  }
  gl_FragColor = vec4(nh, h, 0.0, 1.0);
}
`;class Vi{constructor(t,e,{damping:n=.992,c2:s=.24,edgeAbsorb:r=!0}={}){this.computer=t,this.pp=new sn(e,e),this._queue=[],this._mat=t.material(K0,{uPrev:{value:null},uTexel:{value:this.pp.texel},uDamp:{value:n},uC2:{value:s},uEdgeAbsorb:{value:r?1:0},uSplats:{value:Array.from({length:8},()=>new jt)},uSplatVals:{value:Array.from({length:8},()=>new jt)},uSplatCount:{value:0}})}get texture(){return this.pp.texture}get texel(){return this.pp.texel}addSplat(t,e,n,s){this._queue.length<32&&this._queue.push([t,e,n,s])}step(){const t=this._mat.uniforms,e=Math.min(this._queue.length,8);for(let n=0;n<e;n++){const[s,r,o,a]=this._queue[n];t.uSplats.value[n].set(s,r,o,0),t.uSplatVals.value[n].set(a,0,0,0)}this._queue.splice(0,e),t.uSplatCount.value=e,t.uPrev.value=this.pp.texture,this.computer.run(this._mat,this.pp.write),this.pp.swap()}dispose(){this.pp.dispose(),this._mat.dispose()}}function Hi({top:i="#0a66b0",mid:t="#7fd0f0",bottom:e="#e8f8ff",radius:n=90}={}){const s=new Jt({side:De,depthWrite:!1,uniforms:{uTop:{value:new xt(i)},uMid:{value:new xt(t)},uBottom:{value:new xt(e)}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 uTop; uniform vec3 uMid; uniform vec3 uBottom;
      varying vec3 vDir;
      void main() {
        float h = clamp(vDir.y, -0.2, 1.0);
        vec3 c = h > 0.25 ? mix(uMid, uTop, smoothstep(0.25, 1.0, h))
                          : mix(uBottom, uMid, smoothstep(-0.2, 0.25, h));
        gl_FragColor = vec4(c, 1.0);
      }
    `}),r=new j(new Te(n,24,16),s);return r.frustumCulled=!1,r}function Z0({height:i=4.2,lean:t=.12}={}){const e=new Pe,n=new Rt({color:"#9a6e44"}),s=new Rt({color:"#2f8f4e",side:Ge}),r=6,o=[];let a=e;const l=i/r;for(let f=0;f<r;f++){const v=new Pe;v.position.y=f===0?0:l;const g=.13*(1-f/(r+2)),p=.13*(1-(f+1)/(r+2)),m=new j(new xe(p,g,l,7),n);m.position.y=l/2,v.add(m),a.add(v),a=v,o.push(v)}const c=new Pe;c.position.y=l,a.add(c);const u=[],h=J0();for(let f=0;f<8;f++){const v=new j(h,s),g=new Pe;g.rotation.y=f/8*Math.PI*2,g.rotation.z=-.5-f%3*.22,g.add(v),c.add(g),u.push(g)}function d(f,v,g=0){for(let p=0;p<o.length;p++){const m=Math.sin(v*2.1+g+p*.45)*.03*(.3+f);o[p].rotation.z=t/r+f*.1*(p+1)/r*3+m}for(let p=0;p<u.length;p++){const m=Math.sin(v*(6+p%3)+g+p*1.7)*(.04+f*.22);u[p].rotation.x=m}}return{group:e,update:d}}function J0(){const i=[];for(let o=0;o<=7;o++){const a=o/7;i.push(new A(a*1.7,Math.sin(a*Math.PI)*.28-a*.62,0))}const e=i.map((o,a)=>.16*Math.sin(a/7*Math.PI*.92+.12)),n=[],s=[];for(let o=0;o<=7;o++)if(n.push(i[o].x,i[o].y,-e[o],i[o].x,i[o].y,e[o]),o<7){const a=o*2;s.push(a,a+1,a+2,a+1,a+3,a+2)}const r=new Me;return r.setAttribute("position",new Zt(n,3)),r.setIndex(s),r.computeVertexNormals(),r}function ln(i,{sky:t="#cdeeff",ground:e="#5a8a66",hemiIntensity:n=.9,sunColor:s="#fff3d6",sunIntensity:r=1.6,sunPos:o=[6,10,4]}={}){const a=new U0(t,e,n);i.add(a);const l=new F0(s,r);return l.position.set(...o),i.add(l),{hemi:a,sun:l}}const gi=26,_i=18,Fo=`
float sandY(vec2 xz) {
  return (xz.y - 1.2) * 0.15 + sin(xz.x * 0.42) * 0.06;
}
float crest(float p) {
  float s = 0.5 + 0.5 * sin(p);
  return 1.5 * pow(s, 2.3) - 0.55;
}
float waveH(vec2 xz, float t) {
  float d0 = -sandY(xz);
  float shoal = 1.0 + 1.4 * exp(-max(d0, 0.0) * 1.1);
  float h = 0.17 * crest(xz.y * 0.85 + xz.x * 0.05 - t * 1.45);
  h += 0.06 * crest(xz.y * 1.8 - xz.x * 0.14 - t * 2.4 + 1.7);
  h += 0.10 * crest(xz.y * 0.5 + xz.x * 0.18 - t * 1.0 + 4.2);
  h += 0.03 * sin(xz.x * 1.3 + t * 0.8);
  h *= shoal;
  h *= smoothstep(-0.3, 0.15, d0); // 打ち上がった先で減衰
  return h;
}
`,j0=`
uniform float uTime;
uniform sampler2D uRipple;
varying vec2 vUv;
varying vec3 vWorldPos;
${Fo}
void main() {
  vUv = uv;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  float h = waveH(wp.xz, uTime) + texture2D(uRipple, uv).r * 0.1;
  wp.y += h;
  vWorldPos = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Q0=`
precision highp float;
uniform float uTime;
uniform sampler2D uRipple;
uniform vec2 uTexel;
uniform vec3 uSunDir;
varying vec2 vUv;
varying vec3 vWorldPos;
${_n}
${Fo}
void main() {
  vec2 xz = vWorldPos.xz;
  float t = uTime;
  float h = waveH(xz, t);
  float rip = texture2D(uRipple, vUv).r * 0.1;
  float depth = (h + rip) - sandY(xz);
  if (depth < 0.012) discard;

  // 法線(解析波 + さざ波テクスチャの有限差分)
  const float e = 0.18;
  float hx = waveH(xz + vec2(e, 0.0), t) - waveH(xz - vec2(e, 0.0), t);
  float hz = waveH(xz + vec2(0.0, e), t) - waveH(xz - vec2(0.0, e), t);
  float rx = texture2D(uRipple, vUv + vec2(uTexel.x, 0.0)).r - texture2D(uRipple, vUv - vec2(uTexel.x, 0.0)).r;
  float rz = texture2D(uRipple, vUv + vec2(0.0, uTexel.y)).r - texture2D(uRipple, vUv - vec2(0.0, uTexel.y)).r;
  vec3 n = normalize(vec3(-(hx / (2.0 * e) + rx * 5.0), 1.0, -(hz / (2.0 * e) - rz * 5.0)));

  // 沖縄の海のグラデーション: 浅瀬エメラルド → 沖の群青
  vec3 emerald = vec3(0.30, 0.86, 0.80);
  vec3 mid = vec3(0.06, 0.55, 0.69);
  vec3 deep = vec3(0.02, 0.23, 0.50);
  vec3 col = mix(emerald, mid, smoothstep(0.05, 0.9, depth));
  col = mix(col, deep, smoothstep(0.9, 2.4, depth));

  vec3 viewDir = normalize(cameraPosition - vWorldPos);
  float fres = pow(1.0 - max(dot(n, viewDir), 0.0), 3.0);
  col = mix(col, vec3(0.55, 0.75, 0.92), fres * 0.55);

  vec3 sunDir = normalize(uSunDir);
  vec3 halfV = normalize(sunDir + viewDir);
  col += vec3(1.0, 0.96, 0.85) * pow(max(dot(n, halfV), 0.0), 160.0) * 1.2;

  // 砕け波の泡: 浅瀬で波高が高い所 + 波打ち際のレース模様
  float crestFoam = smoothstep(0.2, 0.34, h) * smoothstep(0.8, 0.2, depth);
  float edgeFoam = smoothstep(0.22, 0.04, depth);
  float lace = 0.5 + 0.5 * snoise2(xz * vec2(2.0, 3.0) + vec2(0.0, -t * 1.2));
  lace = smoothstep(0.25, 0.75, lace);
  float foam = clamp(crestFoam * (0.4 + 0.6 * lace) + edgeFoam * lace, 0.0, 1.0);
  col = mix(col, vec3(0.99), foam);

  float alpha = mix(0.78, 0.98, smoothstep(0.0, 1.4, depth));
  alpha = mix(alpha, 1.0, foam);
  gl_FragColor = vec4(col, alpha);
}
`,tv=`
precision highp float;
uniform sampler2D uSelf;
uniform float uTime;
uniform vec2 uWorldScale;
varying vec2 vUv;
${Fo}
void main() {
  float w = texture2D(uSelf, vUv).r;
  vec2 xz = vec2((vUv.x - 0.5) * uWorldScale.x, (0.5 - vUv.y) * uWorldScale.y);
  float depth = waveH(xz, uTime) - sandY(xz);
  float covered = smoothstep(0.0, 0.05, depth);
  w = max(w * 0.9975 - 0.0006, covered);
  gl_FragColor = vec4(w, 0.0, 0.0, 1.0);
}
`,ev=`
precision highp float;
uniform sampler2D uWet;
uniform vec3 uSunDir;
varying vec2 vUv;
varying vec3 vWorldPos;
varying vec3 vNormal;
${_n}
void main() {
  vec3 dry = vec3(0.93, 0.85, 0.66);
  float grain = snoise2(vWorldPos.xz * 14.0) * 0.5 + snoise2(vWorldPos.xz * 47.0) * 0.5;
  dry *= 0.95 + grain * 0.06;
  float w = texture2D(uWet, vUv).r;
  vec3 col = mix(dry, dry * vec3(0.55, 0.52, 0.48), w * 0.85);
  // 濡れた砂のてかり
  vec3 viewDir = normalize(cameraPosition - vWorldPos);
  vec3 halfV = normalize(normalize(uSunDir) + viewDir);
  col += vec3(1.0) * pow(max(dot(normalize(vNormal), halfV), 0.0), 80.0) * w * 0.5;
  float diff = max(dot(normalize(vNormal), normalize(uSunDir)), 0.0);
  col *= 0.65 + diff * 0.4;
  gl_FragColor = vec4(col, 1.0);
}
`,nv=`
varying vec2 vUv;
varying vec3 vWorldPos;
varying vec3 vNormal;
void main() {
  vUv = uv;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  vNormal = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;class iv extends on{build(t){const{app:e,quality:n,computer:s}=t;this.computer=s,e.scene.background=null,e.camera.position.set(0,3.6,8.6),e.camera.fov=50,e.camera.updateProjectionMatrix(),e.lookTarget.set(0,.2,-1),this.group.add(Hi({top:"#0d6cc0",mid:"#8fd8f5",bottom:"#fdf6e0"})),ln(this.group,{sunPos:[-6,12,5],sunIntensity:1.8});const r=new ie(gi+8,_i+10,80,64);r.rotateX(-Math.PI/2);const o=r.attributes.position;for(let d=0;d<o.count;d++){const f=o.getX(d),v=o.getZ(d);o.setY(d,(v-1.2)*.15+Math.sin(f*.42)*.06+Math.sin(f*2.2+v*1.4)*.008)}r.computeVertexNormals(),this.sandMat=new Jt({vertexShader:nv,fragmentShader:ev,uniforms:{uWet:{value:null},uSunDir:{value:new A(-.4,.8,.35)}}});const a=new j(r,this.sandMat);this.group.add(a),this.ripple=this.track(new Vi(s,n.res(320),{damping:.985,c2:.24}));const l=n.high?200:100;this.waterMat=new Jt({vertexShader:j0,fragmentShader:Q0,uniforms:{uTime:{value:0},uRipple:{value:this.ripple.texture},uTexel:{value:this.ripple.texel},uSunDir:{value:new A(-.4,.8,.35)}},transparent:!0});const c=new j(new ie(gi,_i,l,Math.round(l*_i/gi)),this.waterMat);c.rotation.x=-Math.PI/2,this.group.add(c),this.wet=this.track(new sn(n.res(256),n.res(256))),this.wetMat=this.track(s.material(tv,{uSelf:{value:null},uTime:{value:0},uWorldScale:{value:new ot(gi+8,_i+10)}})),this._wetTick=0;const u=new j(new Qn(6,1.6,24),new Rt({color:"#5a7d92"}));u.position.set(-14,-.2,-28),u.scale.y=.7,this.group.add(u);const h=new Rt({color:"#ffffff"});for(const[d,f,v,g]of[[-10,7,-30,3.2],[8,8.5,-34,4],[16,6.5,-26,2.4]]){const p=new j(new Te(1,12,8),h);p.position.set(d,f,v),p.scale.set(g,g*.32,g*.5),this.group.add(p)}}simStep(t,e){this.ripple.step(),this._wetTick++,this._wetTick%2===0&&(this.wetMat.uniforms.uSelf.value=this.wet.texture,this.wetMat.uniforms.uTime.value=e,this.computer.run(this.wetMat,this.wet.write),this.wet.swap())}frame(t,e){this.waterMat.uniforms.uTime.value=this.simTime,this.waterMat.uniforms.uRipple.value=this.ripple.texture,this.sandMat.uniforms.uWet.value=this.wet.texture,this.ctx.app.camera.position.x=Math.sin(e*.1)*.8}_touch(t,e){const n=this.ctx.app.screenToPlane(t.x,t.y,0);if(Math.abs(n.x)<gi/2&&Math.abs(n.z)<_i/2){const s=n.x/gi+.5,r=.5-n.z/_i;this.ripple.addSplat(s,r,.018,e),this.interactCount++}}onDown(t){this._touch(t,-1.2)}onMove(t){this._touch(t,-.5)}}const Pl=`
precision highp float;
uniform sampler2D uPos;
uniform sampler2D uVel;
uniform float uDt;
uniform float uTime;
uniform float uReset;
varying vec2 vUv;
`;class Oi{constructor(t,e,{velFrag:n,posFrag:s,uniforms:r={}}){this.computer=t,this.res=e,this.count=e*e,this.pos=new sn(e,e,{filter:Le}),this.vel=new sn(e,e,{filter:Le}),this.uniforms={uPos:{value:null},uVel:{value:null},uDt:{value:0},uTime:{value:0},uReset:{value:1},...r},this._velMat=t.material(Pl+n,this.uniforms),this._posMat=t.material(Pl+s,this.uniforms),this._first=!0}get posTexture(){return this.pos.texture}get velTexture(){return this.vel.texture}step(t,e){const n=this.uniforms;n.uDt.value=t,n.uTime.value=e,n.uReset.value=this._first?1:0,this._first=!1,n.uPos.value=this.pos.texture,n.uVel.value=this.vel.texture,this.computer.run(this._velMat,this.vel.write),this.vel.swap(),n.uVel.value=this.vel.texture,this.computer.run(this._posMat,this.pos.write),this.pos.swap()}pointsGeometry(){const t=this.count,e=new Me,n=new Float32Array(t*2);for(let s=0;s<t;s++)n[s*2]=(s%this.res+.5)/this.res,n[s*2+1]=(Math.floor(s/this.res)+.5)/this.res;return e.setAttribute("position",new Ce(new Float32Array(t*3),3)),e.setAttribute("aRef",new Ce(n,2)),e.boundingSphere=new Zn(new A,1e5),e}streakGeometry(){const t=this.count,e=new Me,n=new Float32Array(t*4),s=new Float32Array(t*2);for(let r=0;r<t;r++){const o=(r%this.res+.5)/this.res,a=(Math.floor(r/this.res)+.5)/this.res;n[r*4]=o,n[r*4+1]=a,n[r*4+2]=o,n[r*4+3]=a,s[r*2]=0,s[r*2+1]=1}return e.setAttribute("position",new Ce(new Float32Array(t*6),3)),e.setAttribute("aRef",new Ce(n,2)),e.setAttribute("aEnd",new Ce(s,1)),e.boundingSphere=new Zn(new A,1e5),e}dispose(){this.pos.dispose(),this.vel.dispose(),this._velMat.dispose(),this._posMat.dispose()}}const Gs={x:15,yMin:.15,yMax:8,z:7},sv=`
uniform vec3 uWind;     // 大局風(突風含む)
uniform float uGustT;
vec3 windField(vec3 p, float t) {
  // 大局風: ほぼ+x、時間でうねる
  float gust = 0.75 + 0.35 * sin(t * 0.6) + 0.2 * sin(t * 1.7 + p.z);
  vec3 w = uWind * gust;
  // カールノイズの乱流(非圧縮の渦)
  vec2 c1 = curl2(p.xz * 0.16 + vec2(t * 0.10, 0.0));
  vec2 c2 = curl2(p.xy * 0.30 + vec2(0.0, t * 0.16));
  w.xz += c1 * 2.6;
  w.xy += c2 * 1.3;
  // 地面近くは遅い(境界層)
  w *= 0.35 + 0.65 * smoothstep(0.0, 2.5, p.y);
  return w;
}
`,rv=`
${_n}
${$0}
${an}
${sv}
void main() {
  vec3 vel = texture2D(uVel, vUv).xyz;
  vec3 pos = texture2D(uPos, vUv).xyz;
  vec3 target = windField(pos, uTime);
  if (uReset > 0.5) {
    vel = target;
  } else {
    vel = mix(vel, target, 0.12); // 慣性
  }
  gl_FragColor = vec4(vel, 1.0);
}
`,ov=`
${an}
uniform vec3 uDomain;
uniform float uYMin;
uniform float uYMax;
void main() {
  vec4 pos = texture2D(uPos, vUv);
  vec3 vel = texture2D(uVel, vUv).xyz;
  float seed = vUv.x * 419.3 + vUv.y * 173.9;
  if (uReset > 0.5) {
    vec3 h = hash31(seed);
    pos = vec4(
      (h.x - 0.5) * 2.0 * uDomain.x,
      uYMin + h.y * (uYMax - uYMin),
      (h.z - 0.5) * 2.0 * uDomain.z,
      hash11(seed * 3.1));
  } else {
    pos.xyz += vel * uDt;
    // 領域ラップ(風上から再投入)
    if (pos.x > uDomain.x) { pos.x -= uDomain.x * 2.0; pos.y = uYMin + hash11(seed + uTime) * (uYMax - uYMin); }
    if (pos.x < -uDomain.x) pos.x += uDomain.x * 2.0;
    if (pos.z > uDomain.z) pos.z -= uDomain.z * 2.0;
    if (pos.z < -uDomain.z) pos.z += uDomain.z * 2.0;
    pos.y = clamp(pos.y, uYMin, uYMax);
  }
  gl_FragColor = pos;
}
`,av=`
uniform sampler2D uPos;
uniform sampler2D uVel;
uniform float uStreak;
attribute vec2 aRef;
attribute float aEnd;
varying float vSpeed;
varying float vEnd;
void main() {
  vec3 p = texture2D(uPos, aRef).xyz;
  vec3 v = texture2D(uVel, aRef).xyz;
  vSpeed = length(v);
  vEnd = aEnd;
  p -= v * uStreak * aEnd;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`,lv=`
precision highp float;
varying float vSpeed;
varying float vEnd;
void main() {
  float a = clamp(vSpeed * 0.055, 0.025, 0.26) * (1.0 - vEnd * 0.85);
  gl_FragColor = vec4(0.75, 0.88, 1.0, a);
}
`,cv=`
${an}
uniform vec3 uWind;
void main() {
  vec4 pos = texture2D(uPos, vUv);
  float seed = vUv.x * 911.7 + vUv.y * 337.1;
  if (uReset > 0.5 || pos.y < 0.0) {
    vec3 h = hash31(seed + floor(uTime * 7.0));
    pos = vec4((h.x - 0.5) * 36.0, 8.0 + h.y * 4.0, (h.z - 0.5) * 16.0, 1.0);
  } else {
    pos.x += (uWind.x * 1.6 + 2.0) * uDt;
    pos.y -= 13.0 * uDt;
  }
  gl_FragColor = pos;
}
`,uv=`
void main() { gl_FragColor = vec4(0.0); }
`,hv=`
uniform sampler2D uPos;
uniform vec3 uWind;
attribute vec2 aRef;
attribute float aEnd;
varying float vEnd;
void main() {
  vec3 p = texture2D(uPos, aRef).xyz;
  vEnd = aEnd;
  p += vec3(-(uWind.x * 1.6 + 2.0), 13.0, 0.0) * 0.035 * aEnd;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`,fv=`
precision highp float;
varying float vEnd;
void main() { gl_FragColor = vec4(0.8, 0.88, 0.97, 0.32 * (1.0 - vEnd * 0.6)); }
`;class dv extends on{build(t){const{app:e,quality:n,computer:s}=t;e.scene.background=null,e.camera.position.set(0,2.6,10.5),e.camera.fov=50,e.camera.updateProjectionMatrix(),e.lookTarget.set(0,2.2,0),this.group.add(Hi({top:"#1c2733",mid:"#46535e",bottom:"#6e7a80"})),ln(this.group,{sky:"#8a99a8",ground:"#2c3a33",hemiIntensity:.85,sunColor:"#aebccb",sunIntensity:.7,sunPos:[4,10,6]}),e.scene.fog=new hr("#56636d",14,40);const r=new j(new ie(60,40),new Rt({color:"#3d4f41"}));r.rotation.x=-Math.PI/2,this.group.add(r);const o=new Pe,a=new j(new he(2.6,1.4,2),new Rt({color:"#cfc6b0"}));a.position.y=.7;const l=new j(new Qn(2.2,.9,4),new Rt({color:"#b0492f"}));l.position.y=1.85,l.rotation.y=Math.PI/4,o.add(a,l),o.position.set(4.6,0,-2.5),this.group.add(o),this.palms=[];for(const[u,h,d]of[[-3.2,-1.5,4.4],[-.6,-3,3.6],[2,-.5,4.8]]){const f=Z0({height:d});f.group.position.set(u,0,h),this.group.add(f.group),this.palms.push(f)}this.gust=new A,this.windBase=new A(5.2,0,.6);const c=n.particleRes(180);this.wind=this.track(new Oi(s,c,{velFrag:rv,posFrag:ov,uniforms:{uWind:{value:new A},uGustT:{value:0},uDomain:{value:new A(Gs.x,0,Gs.z)},uYMin:{value:Gs.yMin},uYMax:{value:Gs.yMax}}})),this.windMat=new Jt({vertexShader:av,fragmentShader:lv,uniforms:{uPos:{value:this.wind.posTexture},uVel:{value:this.wind.velTexture},uStreak:{value:.07}},transparent:!0,depthWrite:!1,blending:ao}),this.windLines=new vo(this.wind.streakGeometry(),this.windMat),this.group.add(this.windLines),this.rain=this.track(new Oi(s,n.particleRes(80),{velFrag:uv,posFrag:cv,uniforms:{uWind:{value:new A}}})),this.rainMat=new Jt({vertexShader:hv,fragmentShader:fv,uniforms:{uPos:{value:this.rain.posTexture},uWind:{value:new A}},transparent:!0,depthWrite:!1}),this.rainLines=new vo(this.rain.streakGeometry(),this.rainMat),this.group.add(this.rainLines)}exit(){this.ctx.app.scene.fog=null,super.exit()}simStep(t,e){this.gust.multiplyScalar(Math.pow(.25,t));const n=this.wind.uniforms.uWind.value;n.copy(this.windBase).add(this.gust),this.rain.uniforms.uWind.value.copy(n),this.wind.step(t,e),this.rain.step(t,e),this.windStrength=n.length()/6}frame(t,e){var s,r;this.windMat.uniforms.uPos.value=this.wind.posTexture,this.windMat.uniforms.uVel.value=this.wind.velTexture,this.rainMat.uniforms.uPos.value=this.rain.posTexture,this.rainMat.uniforms.uWind.value.copy(this.rain.uniforms.uWind.value);const n=Math.min(((s=this.windStrength)!=null?s:.8)*.55,1.1);this.palms.forEach((o,a)=>o.update(n,e,a*2.4)),this.ctx.app.camera.position.x=Math.sin(e*.4)*.06*(1+((r=this.windStrength)!=null?r:1))}onMove(t){this.gust.x+=t.dx*.045,this.gust.y-=t.dy*.03,this.gust.clampLength(0,9),this.interactCount++}onDown(){this.interactCount++}}const xi=14,pv=`
varying vec2 vUv;
varying vec3 vWorldPos;
void main() {
  vUv = uv;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,mv=`
precision highp float;
uniform sampler2D uHeight;
uniform vec2 uTexel;
uniform vec3 uSunDir;
varying vec2 vUv;
varying vec3 vWorldPos;
${_n}
void main() {
  // 水たまりマスク(ノイズのくぼみ)
  float n = snoise2(vWorldPos.xz * 0.32) * 0.6 + snoise2(vWorldPos.xz * 0.9 + 7.0) * 0.4;
  float puddle = smoothstep(0.16, 0.4, n);

  // アスファルト
  float grain = snoise2(vWorldPos.xz * 22.0);
  vec3 asphalt = vec3(0.23, 0.24, 0.26) * (0.92 + grain * 0.1);
  asphalt *= 0.75 + 0.25 * smoothstep(0.3, 0.0, puddle); // 濡れた縁を暗く

  // 波紋の法線
  float h = texture2D(uHeight, vUv).r;
  float gx = texture2D(uHeight, vUv + vec2(uTexel.x, 0.0)).r - texture2D(uHeight, vUv - vec2(uTexel.x, 0.0)).r;
  float gy = texture2D(uHeight, vUv + vec2(0.0, uTexel.y)).r - texture2D(uHeight, vUv - vec2(0.0, uTexel.y)).r;
  vec3 nrm = normalize(vec3(-gx * 15.0, 1.0, gy * 15.0));

  // 雨空の鏡面反射(上ほど明るい灰色の空)
  vec3 viewDir = normalize(cameraPosition - vWorldPos);
  vec3 refl = reflect(-viewDir, nrm);
  vec3 skyCol = mix(vec3(0.45, 0.5, 0.54), vec3(0.85, 0.9, 0.94), clamp(refl.y * 1.6 + 0.25, 0.0, 1.0));
  float fres = pow(1.0 - max(dot(nrm, viewDir), 0.0), 2.0);
  vec3 water = mix(vec3(0.16, 0.18, 0.21), skyCol, 0.3 + fres * 0.5);
  vec3 halfV = normalize(normalize(uSunDir) + viewDir);
  water += vec3(0.9) * pow(max(dot(nrm, halfV), 0.0), 90.0);

  vec3 col = mix(asphalt, water, puddle);
  gl_FragColor = vec4(col, 1.0);
}
`,vv=`
${an}
void main() {
  vec4 pos = texture2D(uPos, vUv);
  float seed = vUv.x * 733.1 + vUv.y * 269.7;
  if (uReset > 0.5 || pos.y < 0.0) {
    vec3 h = hash31(seed + floor(uTime * 9.0));
    pos = vec4((h.x - 0.5) * 22.0, 7.0 + h.y * 4.0, (h.z - 0.5) * 18.0, 1.0);
  } else {
    pos.y -= 11.5 * uDt;
    pos.x += 0.8 * uDt;
  }
  gl_FragColor = pos;
}
`,gv=`
void main() { gl_FragColor = vec4(0.0); }
`,_v=`
uniform sampler2D uPos;
attribute vec2 aRef;
attribute float aEnd;
varying float vEnd;
void main() {
  vec3 p = texture2D(uPos, aRef).xyz;
  vEnd = aEnd;
  p += vec3(-0.8, 11.5, 0.0) * 0.04 * aEnd;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`,xv=`
precision highp float;
varying float vEnd;
void main() { gl_FragColor = vec4(0.82, 0.88, 0.95, 0.38 * (1.0 - vEnd * 0.65)); }
`;class Mv extends on{build(t){const{app:e,quality:n,computer:s}=t;e.scene.background=null,e.camera.position.set(0,3.4,6.4),e.camera.fov=48,e.camera.updateProjectionMatrix(),e.lookTarget.set(0,0,-.5),this.group.add(Hi({top:"#3c4a55",mid:"#6b7880",bottom:"#9aa5aa"})),ln(this.group,{sky:"#9fadb8",ground:"#3a4440",hemiIntensity:.9,sunColor:"#c2cdd8",sunIntensity:.55,sunPos:[3,9,5]}),e.scene.fog=new hr("#7d8a90",16,42),this.height=this.track(new Vi(s,n.res(384),{damping:.982,c2:.3})),this.groundMat=new Jt({vertexShader:pv,fragmentShader:mv,uniforms:{uHeight:{value:this.height.texture},uTexel:{value:this.height.texel},uSunDir:{value:new A(.3,.9,.5)}}});const r=new j(new ie(xi,xi),this.groundMat);r.rotation.x=-Math.PI/2,this.group.add(r);const o=new j(new ie(60,50),new Rt({color:"#42584a"}));o.rotation.x=-Math.PI/2,o.position.y=-.02,this.group.add(o);const a=new Pe,l=new j(new he(3.4,1.5,2.2),new Rt({color:"#d8cfba"}));l.position.y=.75;const c=new j(new Qn(2.7,1,4),new Rt({color:"#a8432c"}));c.position.y=1.95,c.rotation.y=Math.PI/4,a.add(l,c),a.position.set(-5.4,0,-5.5),this.group.add(a),this.rain=this.track(new Oi(s,n.particleRes(96),{velFrag:gv,posFrag:vv})),this.rainMat=new Jt({vertexShader:_v,fragmentShader:xv,uniforms:{uPos:{value:this.rain.posTexture}},transparent:!0,depthWrite:!1}),this.group.add(new vo(this.rain.streakGeometry(),this.rainMat)),this.intensity=1}exit(){this.ctx.app.scene.fog=null,super.exit()}simStep(t,e){this.intensity=.55+.45*Math.sin(e*.22);const n=this.intensity>.4?Math.random()<this.intensity?3:2:1;for(let s=0;s<n;s++)this.height.addSplat(Math.random(),Math.random(),.0045+Math.random()*.004,-.2);this.height.step(),this.rain.step(t,e)}frame(t,e){this.groundMat.uniforms.uHeight.value=this.height.texture,this.rainMat.uniforms.uPos.value=this.rain.posTexture,this.ctx.app.camera.position.x=Math.sin(e*.09)*.5}_touch(t,e,n){const s=this.ctx.app.screenToPlane(t.x,t.y,0);if(Math.abs(s.x)<xi/2&&Math.abs(s.z)<xi/2){const r=s.x/xi+.5,o=.5-s.z/xi;this.height.addSplat(r,o,n,e),this.interactCount++}}onDown(t){this._touch(t,-.8,.014)}onMove(t){this._touch(t,-.25,.008)}}const yv=`
precision highp float;
uniform sampler2D uSelf;
uniform vec2 uTexel;
uniform float uTime;
${_n}
${mr}
void main() {
  vec2 uv = vec2(gl_FragCoord.xy) * uTexel;
  // 斜面の急峻さ: 頂上(v=1)は平ら、縁(v=0)ほど急 → 流下速度が増す
  float slope = sin((1.0 - uv.y) * 1.5708);
  // 粘性流: 上(v+)から内容を引き寄せる(=下へ流れる)。厚いほど速い
  float wob = snoise2(uv * vec2(18.0, 5.0) + uTime * 0.15) * 0.4;
  vec2 src = uv + vec2(wob * uTexel.x * 2.0, uTexel.y * (0.6 + slope * 2.4));
  vec4 c = texture2D(uSelf, src);
  // 横方向の拡散(にじみ)
  vec4 l = texture2D(uSelf, src - vec2(uTexel.x, 0.0));
  vec4 r = texture2D(uSelf, src + vec2(uTexel.x, 0.0));
  c = c * 0.86 + (l + r) * 0.07;
  // 薄い所は表面張力で留まる(流下を弱める)
  vec4 stay = texture2D(uSelf, uv);
  float mobility = smoothstep(0.015, 0.12, stay.a);
  c = mix(stay, c, 0.25 + 0.75 * mobility);
  c.a *= 0.9995;
  for (int i = 0; i < 8; i++) {
    if (i >= uSplatCount) break;
    vec4 s = uSplats[i];
    float d = distance(uv, s.xy) / max(s.z, 1e-5);
    c += uSplatVals[i] * exp(-d * d);
  }
  gl_FragColor = clamp(c, 0.0, 12.0);
}
`,Sv=`
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vWorldPos;
void main() {
  vUv = uv;
  vNormal = normalize(mat3(modelMatrix) * normal);
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,wv=`
precision highp float;
uniform sampler2D uSyrup;
uniform float uTime;
uniform vec3 uSunDir;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vWorldPos;
${_n}
void main() {
  // 削り氷: 細かい結晶のきらめき
  vec3 snow = vec3(0.97, 0.985, 1.0);
  float sparkle = pow(max(snoise2(vUv * vec2(90.0, 50.0) + floor(uTime * 3.0) * 0.7), 0.0), 14.0);
  float fluff = snoise2(vUv * vec2(28.0, 16.0)) * 0.05;
  snow *= 0.95 + fluff;

  vec4 syr = texture2D(uSyrup, vUv);
  vec3 syrupCol = syr.a > 0.003 ? clamp(syr.rgb / syr.a, 0.0, 1.0) : vec3(1.0);
  // Beer-Lambert: 厚いほど濃い
  float absorb = 1.0 - exp(-syr.a * 5.5);
  vec3 col = mix(snow, syrupCol * (0.55 + 0.45 * exp(-syr.a * 1.2)), absorb);

  vec3 n = normalize(vNormal);
  vec3 sunDir = normalize(uSunDir);
  float diff = max(dot(n, sunDir), 0.0);
  col *= 0.6 + diff * 0.5;
  col += vec3(1.0) * sparkle * (0.6 - absorb * 0.4);

  // シロップのてかり
  vec3 viewDir = normalize(cameraPosition - vWorldPos);
  vec3 halfV = normalize(sunDir + viewDir);
  col += vec3(1.0, 0.97, 0.9) * pow(max(dot(n, halfV), 0.0), 90.0) * absorb * 0.9;
  gl_FragColor = vec4(col, 1.0);
}
`,Ws=[{id:"ichigo",label:"いちご",color:new xt("#e8294a"),css:"#e8294a"},{id:"melon",label:"メロン",color:new xt("#3fc448"),css:"#3fc448"},{id:"shikuwasa",label:"シークヮーサー",color:new xt("#f5cd2a"),css:"#f5cd2a"}];class Ev extends on{build(t){const{app:e,quality:n,computer:s}=t;this.computer=s,e.scene.background=new xt("#fbeede"),e.scene.fog=null,e.camera.position.set(0,1.7,2.9),e.camera.fov=44,e.camera.updateProjectionMatrix(),e.lookTarget.set(0,.75,0),ln(this.group,{sky:"#fff4e0",ground:"#c89c70",sunPos:[3,6,4],sunIntensity:1.3});const r=new j(new xe(4,4,.12,36),new Rt({color:"#a9743f"}));r.position.y=-.06,this.group.add(r);const o=new nn({color:"#cfe8f2",transparent:!0,opacity:.35,shininess:140}),a=new j(new xe(.62,.3,.42,32,1,!0),o);a.position.y=.32,this.group.add(a);const l=new j(new xe(.09,.2,.14,16),o);l.position.y=.07,this.group.add(l);const c=n.res(224);this.syrup=this.track(new sn(c,c)),this.flowMat=this.track(s.material(yv,{uSelf:{value:null},uTexel:{value:this.syrup.texel},uTime:{value:0},uSplats:{value:Array.from({length:8},()=>new jt)},uSplatVals:{value:Array.from({length:8},()=>new jt)},uSplatCount:{value:0}})),this._queue=[],this.domeMat=new Jt({vertexShader:Sv,fragmentShader:wv,uniforms:{uSyrup:{value:this.syrup.texture},uTime:{value:0},uSunDir:{value:new A(.5,.9,.6)}}}),this.dome=new j(new Te(.72,56,30,0,Math.PI*2,0,Math.PI*.52),this.domeMat),this.dome.position.y=.52,this.dome.scale.y=1.12,this.group.add(this.dome),this.selected=Ws[0];for(const u of Ws){const h=document.createElement("button");h.type="button",h.className="syrup-btn"+(u===this.selected?" active":""),h.dataset.syrup=u.id,h.style.background=u.css,h.textContent=u.label.slice(0,3),h.addEventListener("pointerdown",d=>{d.stopPropagation(),this.selected=u,t.sceneUi.querySelectorAll(".syrup-btn").forEach(f=>f.classList.toggle("active",f===h))}),t.sceneUi.appendChild(h)}this._pourTimer=1,this._pourLeft=0,this._pourU=.5,this._autoColor=0}_addSyrup(t,e,n,s){this._queue.length<32&&this._queue.push([t,e,.03,s.r*n,s.g*n,s.b*n,n])}simStep(t,e){this._pourTimer-=t,this._pourTimer<=0&&this._pourLeft<=0&&(this._pourLeft=1.1,this._pourU=Math.random(),this._autoColor=(this._autoColor+1)%Ws.length,this._pourTimer=3.2+Math.random()*2),this._pourLeft>0&&(this._pourLeft-=t,this._addSyrup(this._pourU+Math.sin(e*3)*.04,.93,.45,Ws[this._autoColor].color));const n=this.flowMat.uniforms,s=Math.min(this._queue.length,8);for(let r=0;r<s;r++){const[o,a,l,c,u,h,d]=this._queue[r];n.uSplats.value[r].set(o,a,l,0),n.uSplatVals.value[r].set(c,u,h,d)}this._queue.splice(0,s),n.uSplatCount.value=s,n.uSelf.value=this.syrup.texture,n.uTime.value=e,this.computer.run(this.flowMat,this.syrup.write),this.syrup.swap()}frame(t,e){this.domeMat.uniforms.uSyrup.value=this.syrup.texture,this.domeMat.uniforms.uTime.value=e,this.ctx.app.camera.position.x=Math.sin(e*.15)*.25}_pour(t){const e=this.ctx.app.raycastMesh(t.x,t.y,this.dome);e&&e.uv&&(this._addSyrup(e.uv.x,e.uv.y,.6,this.selected.color),this.interactCount++)}onDown(t){this._pour(t)}onMove(t){this._pour(t)}}const Tv=`
precision highp float;
uniform sampler2D uVel;
uniform sampler2D uSrc;
uniform float uDt;
uniform float uDissipation;
varying vec2 vUv;
void main() {
  vec2 coord = vUv - uDt * texture2D(uVel, vUv).xy;
  gl_FragColor = uDissipation * texture2D(uSrc, coord);
}
`,Av=`
precision highp float;
uniform sampler2D uSrc;
${mr}
varying vec2 vUv;
void main() {
  vec4 v = texture2D(uSrc, vUv);
  for (int i = 0; i < 8; i++) {
    if (i >= uSplatCount) break;
    vec4 s = uSplats[i];
    float d = distance(vUv, s.xy) / max(s.z, 1e-5);
    v += uSplatVals[i] * exp(-d * d);
  }
  gl_FragColor = v;
}
`,bv=`
precision highp float;
uniform sampler2D uVel;
uniform vec2 uTexel;
varying vec2 vUv;
void main() {
  float l = texture2D(uVel, vUv - vec2(uTexel.x, 0.0)).y;
  float r = texture2D(uVel, vUv + vec2(uTexel.x, 0.0)).y;
  float b = texture2D(uVel, vUv - vec2(0.0, uTexel.y)).x;
  float t = texture2D(uVel, vUv + vec2(0.0, uTexel.y)).x;
  gl_FragColor = vec4(0.5 * (r - l - t + b), 0.0, 0.0, 1.0);
}
`,Rv=`
precision highp float;
uniform sampler2D uVel;
uniform sampler2D uCurl;
uniform vec2 uTexel;
uniform float uStrength;
uniform float uDt;
varying vec2 vUv;
void main() {
  float l = texture2D(uCurl, vUv - vec2(uTexel.x, 0.0)).x;
  float r = texture2D(uCurl, vUv + vec2(uTexel.x, 0.0)).x;
  float b = texture2D(uCurl, vUv - vec2(0.0, uTexel.y)).x;
  float t = texture2D(uCurl, vUv + vec2(0.0, uTexel.y)).x;
  float c = texture2D(uCurl, vUv).x;
  vec2 force = 0.5 * vec2(abs(t) - abs(b), abs(r) - abs(l));
  force /= length(force) + 1e-4;
  force *= uStrength * c;
  force.y *= -1.0;
  vec2 vel = texture2D(uVel, vUv).xy + force * uDt;
  gl_FragColor = vec4(vel, 0.0, 1.0);
}
`,Cv=`
precision highp float;
uniform sampler2D uVel;
uniform sampler2D uDye;
uniform float uKTemp;
uniform float uKDens;
uniform float uDt;
varying vec2 vUv;
void main() {
  vec4 d = texture2D(uDye, vUv);
  float dens = dot(d.rgb, vec3(0.333));
  vec2 vel = texture2D(uVel, vUv).xy;
  vel.y += (uKTemp * d.a - uKDens * dens) * uDt;
  gl_FragColor = vec4(vel, 0.0, 1.0);
}
`,Pv=`
precision highp float;
uniform sampler2D uVel;
uniform vec2 uTexel;
varying vec2 vUv;
void main() {
  float l = texture2D(uVel, vUv - vec2(uTexel.x, 0.0)).x;
  float r = texture2D(uVel, vUv + vec2(uTexel.x, 0.0)).x;
  float b = texture2D(uVel, vUv - vec2(0.0, uTexel.y)).y;
  float t = texture2D(uVel, vUv + vec2(0.0, uTexel.y)).y;
  gl_FragColor = vec4(0.5 * (r - l + t - b), 0.0, 0.0, 1.0);
}
`,Dv=`
precision highp float;
uniform sampler2D uSrc;
uniform float uValue;
varying vec2 vUv;
void main() {
  gl_FragColor = uValue * texture2D(uSrc, vUv);
}
`,Lv=`
precision highp float;
uniform sampler2D uPressure;
uniform sampler2D uDivergence;
uniform vec2 uTexel;
varying vec2 vUv;
void main() {
  float l = texture2D(uPressure, vUv - vec2(uTexel.x, 0.0)).x;
  float r = texture2D(uPressure, vUv + vec2(uTexel.x, 0.0)).x;
  float b = texture2D(uPressure, vUv - vec2(0.0, uTexel.y)).x;
  float t = texture2D(uPressure, vUv + vec2(0.0, uTexel.y)).x;
  float div = texture2D(uDivergence, vUv).x;
  gl_FragColor = vec4((l + r + b + t - div) * 0.25, 0.0, 0.0, 1.0);
}
`,Uv=`
precision highp float;
uniform sampler2D uPressure;
uniform sampler2D uVel;
uniform vec2 uTexel;
varying vec2 vUv;
void main() {
  float l = texture2D(uPressure, vUv - vec2(uTexel.x, 0.0)).x;
  float r = texture2D(uPressure, vUv + vec2(uTexel.x, 0.0)).x;
  float b = texture2D(uPressure, vUv - vec2(0.0, uTexel.y)).x;
  float t = texture2D(uPressure, vUv + vec2(0.0, uTexel.y)).x;
  vec2 vel = texture2D(uVel, vUv).xy - 0.5 * vec2(r - l, t - b);
  gl_FragColor = vec4(vel, 0.0, 1.0);
}
`;function Iv(){return{uSrc:{value:null},uSplats:{value:Array.from({length:8},()=>new jt)},uSplatVals:{value:Array.from({length:8},()=>new jt)},uSplatCount:{value:0}}}class Oo{constructor(t,{simRes:e=192,dyeRes:n=384,velDissipation:s=.999,dyeDissipation:r=.995,pressureIters:o=18,pressureDecay:a=.8,curl:l=0,buoyancy:c=null}={}){this.computer=t,this.pressureIters=o,this.curlStrength=l,this.buoyancy=c,this.vel=new sn(e,e),this.dye=new sn(n,n),this.prs=new sn(e,e),this.div=rr(e,e),this.curlT=l>0?rr(e,e):null;const u=this.vel.texel;this._advect=t.material(Tv,{uVel:{value:null},uSrc:{value:null},uDt:{value:0},uDissipation:{value:1}}),this._splat=t.material(Av,Iv()),this._divergence=t.material(Pv,{uVel:{value:null},uTexel:{value:u}}),this._clear=t.material(Dv,{uSrc:{value:null},uValue:{value:a}}),this._pressure=t.material(Lv,{uPressure:{value:null},uDivergence:{value:null},uTexel:{value:u}}),this._gradient=t.material(Uv,{uPressure:{value:null},uVel:{value:null},uTexel:{value:u}}),this._curl=l>0?t.material(bv,{uVel:{value:null},uTexel:{value:u}}):null,this._vorticity=l>0?t.material(Rv,{uVel:{value:null},uCurl:{value:null},uTexel:{value:u},uStrength:{value:l},uDt:{value:0}}):null,this._buoyancy=c?t.material(Cv,{uVel:{value:null},uDye:{value:null},uKTemp:{value:c.kTemp},uKDens:{value:c.kDens},uDt:{value:0}}):null,this.velDissipation=s,this.dyeDissipation=r,this._velQueue=[],this._dyeQueue=[]}get velTexture(){return this.vel.texture}get dyeTexture(){return this.dye.texture}splat(t,e,n,s,r){this._velQueue.length<32&&this._velQueue.push([t,e,r,n,s])}dyeSplat(t,e,n,s,r,o,a=0){this._dyeQueue.length<32&&this._dyeQueue.push([t,e,n,s,r,o,a])}_runSplats(t,e,n){if(!t.length)return;const s=this._splat.uniforms;for(;t.length;){const r=Math.min(t.length,8);for(let o=0;o<r;o++){const a=t[o];s.uSplats.value[o].set(a[0],a[1],a[2],0),n(s.uSplatVals.value[o],a)}t.splice(0,r),s.uSplatCount.value=r,s.uSrc.value=e.texture,this.computer.run(this._splat,e.write),e.swap()}}step(t){const e=this.computer;this._advect.uniforms.uVel.value=this.vel.texture,this._advect.uniforms.uSrc.value=this.vel.texture,this._advect.uniforms.uDt.value=t,this._advect.uniforms.uDissipation.value=this.velDissipation,e.run(this._advect,this.vel.write),this.vel.swap(),this._runSplats(this._velQueue,this.vel,(n,s)=>n.set(s[3],s[4],0,0)),this._runSplats(this._dyeQueue,this.dye,(n,s)=>n.set(s[3],s[4],s[5],s[6])),this._buoyancy&&(this._buoyancy.uniforms.uVel.value=this.vel.texture,this._buoyancy.uniforms.uDye.value=this.dye.texture,this._buoyancy.uniforms.uDt.value=t,e.run(this._buoyancy,this.vel.write),this.vel.swap()),this._curl&&(this._curl.uniforms.uVel.value=this.vel.texture,e.run(this._curl,this.curlT),this._vorticity.uniforms.uVel.value=this.vel.texture,this._vorticity.uniforms.uCurl.value=this.curlT.texture,this._vorticity.uniforms.uDt.value=t,e.run(this._vorticity,this.vel.write),this.vel.swap()),this._divergence.uniforms.uVel.value=this.vel.texture,e.run(this._divergence,this.div),this._clear.uniforms.uSrc.value=this.prs.texture,e.run(this._clear,this.prs.write),this.prs.swap();for(let n=0;n<this.pressureIters;n++)this._pressure.uniforms.uPressure.value=this.prs.texture,this._pressure.uniforms.uDivergence.value=this.div.texture,e.run(this._pressure,this.prs.write),this.prs.swap();this._gradient.uniforms.uPressure.value=this.prs.texture,this._gradient.uniforms.uVel.value=this.vel.texture,e.run(this._gradient,this.vel.write),this.vel.swap(),this._advect.uniforms.uVel.value=this.vel.texture,this._advect.uniforms.uSrc.value=this.dye.texture,this._advect.uniforms.uDissipation.value=this.dyeDissipation,e.run(this._advect,this.dye.write),this.dye.swap()}dispose(){var t;this.vel.dispose(),this.dye.dispose(),this.prs.dispose(),this.div.dispose(),(t=this.curlT)==null||t.dispose();for(const e of[this._advect,this._splat,this._divergence,this._clear,this._pressure,this._gradient,this._curl,this._vorticity,this._buoyancy])e==null||e.dispose()}}const Nv=`
uniform sampler2D uHeight;
uniform float uHeightScale;
varying vec2 vUv;
varying vec3 vWorldPos;
void main() {
  vUv = uv;
  vec3 p = position;
  p.z += texture2D(uHeight, uv).r * uHeightScale;
  vec4 wp = modelMatrix * vec4(p, 1.0);
  vWorldPos = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Fv=`
uniform sampler2D uHeight;
uniform vec2 uTexel;
uniform float uNormalScale;
uniform mat3 uNormalMat;
uniform vec3 uDeep;
uniform vec3 uShallow;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform float uShininess;
uniform float uSpecStrength;
uniform float uOpacity;
uniform float uFoamThreshold;
#ifdef USE_DYE
uniform sampler2D uDye;
uniform vec3 uDyeTint;
#endif
varying vec2 vUv;
varying vec3 vWorldPos;
void main() {
  float h = texture2D(uHeight, vUv).r;
  float gx = texture2D(uHeight, vUv + vec2(uTexel.x, 0.0)).r - texture2D(uHeight, vUv - vec2(uTexel.x, 0.0)).r;
  float gy = texture2D(uHeight, vUv + vec2(0.0, uTexel.y)).r - texture2D(uHeight, vUv - vec2(0.0, uTexel.y)).r;
  vec3 n = normalize(uNormalMat * normalize(vec3(-gx * uNormalScale, -gy * uNormalScale, 1.0)));
  vec3 viewDir = normalize(cameraPosition - vWorldPos);
  vec3 sunDir = normalize(uSunDir);

  float fres = pow(1.0 - max(dot(n, viewDir), 0.0), 3.0);
  float diff = max(dot(n, sunDir), 0.0);
  vec3 color = mix(uDeep, uShallow, clamp(fres * 0.85 + diff * 0.25, 0.0, 1.0));

#ifdef USE_DYE
  vec4 dye = texture2D(uDye, vUv);
  float dyeAmt = clamp(dot(dye.rgb, vec3(0.4)), 0.0, 1.0);
  color = mix(color, dye.rgb * uDyeTint, dyeAmt * 0.85);
#endif

  vec3 halfV = normalize(sunDir + viewDir);
  float spec = pow(max(dot(n, halfV), 0.0), uShininess) * uSpecStrength;
  color += uSunColor * spec;

  // 泡: 波が高い・急峻な箇所を白く
  if (uFoamThreshold > 0.0) {
    float slope = length(vec2(gx, gy));
    float foam = smoothstep(uFoamThreshold, uFoamThreshold * 2.2, abs(h) + slope * 1.6);
    color = mix(color, vec3(0.98), foam * 0.85);
  }

  gl_FragColor = vec4(color, clamp(uOpacity + fres * 0.25 + spec, 0.0, 1.0));
}
`;function zo({heightTex:i,texel:t,heightScale:e=.15,normalScale:n=60,deep:s="#06435f",shallow:r="#3fc1c9",sunDir:o=[.5,.8,.3],sunColor:a="#fff4d6",shininess:l=120,specStrength:c=1,opacity:u=.92,foamThreshold:h=0,dyeTex:d=null,dyeTint:f="#ffffff"}={}){const v={},g={uHeight:{value:i},uTexel:{value:t},uHeightScale:{value:e},uNormalScale:{value:n},uNormalMat:{value:new bt},uDeep:{value:new xt(s)},uShallow:{value:new xt(r)},uSunDir:{value:new A(...o)},uSunColor:{value:new xt(a)},uShininess:{value:l},uSpecStrength:{value:c},uOpacity:{value:u},uFoamThreshold:{value:h}};d&&(v.USE_DYE="",g.uDye={value:d},g.uDyeTint={value:new xt(f)});const p=new Jt({vertexShader:Nv,fragmentShader:Fv,uniforms:g,defines:v,transparent:!0});return p.syncNormalMat=m=>{m.updateMatrixWorld(),g.uNormalMat.value.getNormalMatrix(m.matrixWorld)},p}const Ve=2.6,He=1.8,$i=.62;class Ov extends on{build(t){const{app:e,quality:n,computer:s}=t;e.scene.background=new xt("#cfe9ea"),e.scene.fog=null,e.camera.position.set(0,2.5,2.9),e.camera.fov=50,e.camera.updateProjectionMatrix(),e.lookTarget.set(0,.45,0),ln(this.group,{sky:"#e8f6f6",ground:"#9fb5b5",sunPos:[2,6,3],sunIntensity:1,hemiIntensity:1.1});const r=new Rt({color:"#bfe2e4"}),o=new j(new ie(12,6),r);o.position.set(0,3,-3.2),this.group.add(o);const a=new j(new ie(10,6),r);a.position.set(-4.2,3,0),a.rotation.y=Math.PI/2,this.group.add(a);const l=new j(new ie(14,10),new Rt({color:"#dcebe9"}));l.rotation.x=-Math.PI/2,this.group.add(l);const c=new Rt({color:"#f6f1e3"}),u=.14,h=.85;for(const[v,g,p,m]of[[Ve+u*2,u,0,He/2+u/2],[Ve+u*2,u,0,-He/2-u/2],[u,He,-Ve/2-u/2,0],[u,He,Ve/2+u/2,0]]){const S=new j(new he(v,h,g),c);S.position.set(p,h/2,m),this.group.add(S)}const d=new j(new he(Ve,.06,He),new Rt({color:"#e8e2d2"}));d.position.y=.06,this.group.add(d),this.fluids=this.track(new Oo(s,{simRes:n.res(160),dyeRes:n.res(384),velDissipation:.998,dyeDissipation:.994,pressureIters:n.iters(20),curl:14})),this.height=this.track(new Vi(s,n.res(192),{damping:.98,c2:.22})),this.waterMat=zo({heightTex:this.height.texture,texel:this.height.texel,heightScale:.05,normalScale:90,deep:"#2e8d96",shallow:"#8fdcd8",opacity:.94,dyeTex:this.fluids.dyeTexture,dyeTint:"#ffffff"});const f=n.high?128:72;this.water=new j(new ie(Ve,He,f,Math.round(f*He/Ve)),this.waterMat),this.water.rotation.x=-Math.PI/2,this.water.position.y=$i,this.group.add(this.water),this.waterMat.syncNormalMat(this.water),this.duck=this._makeDuck(),this.duck.position.set(.4,$i,.2),this.group.add(this.duck),this.duckVel=new ot,this.impulses=[],this._stirAngle=0,this._lastHit=null}_makeDuck(){const t=new Pe,e=new Rt({color:"#ffd23e"}),n=new j(new Te(.13,16,12),e);n.scale.set(1.25,.95,1);const s=new j(new Te(.08,14,10),e);s.position.set(.1,.13,0);const r=new j(new Qn(.035,.07,8),new Rt({color:"#ff8a3c"}));r.rotation.z=-Math.PI/2,r.position.set(.19,.12,0);const o=new Ro({color:"#222"}),a=new j(new Te(.012,6,6),o);a.position.set(.14,.16,.05);const l=a.clone();return l.position.z=-.05,t.add(n,s,r,a,l),t}_uvFromWorld(t,e){return[t/Ve+.5,.5-e/He]}_stir(t,e,n,s,r){const[o,a]=this._uvFromWorld(t,e);this.fluids.splat(o,a,n/Ve,-s/He,.045),r>0&&this.fluids.dyeSplat(o,a,.05,r,r,r*1.05,0),this.height.addSplat(o,a,.03,-Math.min(Math.hypot(n,s)*.06,.25)),this.impulses.push({x:t,z:e,vx:n,vz:s,t:this.simTime}),this.impulses.length>40&&this.impulses.shift()}simStep(t,e){this._stirAngle+=t*1.5;const n=this._stirAngle,s=Math.cos(n)*.72,r=Math.sin(n)*.5,o=-Math.sin(n)*.72*1.5,a=Math.cos(n)*.5*1.5;this._stir(s,r,o*.55,a*.55,.12),this.fluids.step(t),this.height.step();const l=this.duck.position;let c=0,u=0;for(const h of this.impulses){const d=Math.exp(-((l.x-h.x)**2+(l.z-h.z)**2)/.32000000000000006),f=Math.exp(-(this.simTime-h.t)/1.4);c+=h.vx*d*f*.4,u+=h.vz*d*f*.4}this.duckVel.x+=(c-this.duckVel.x)*t*2.5,this.duckVel.y+=(u-this.duckVel.y)*t*2.5,l.x=Kn.clamp(l.x+this.duckVel.x*t,-Ve/2+.18,Ve/2-.18),l.z=Kn.clamp(l.z+this.duckVel.y*t,-He/2+.18,He/2-.18)}frame(t,e){this.waterMat.uniforms.uHeight.value=this.height.texture,this.waterMat.uniforms.uDye.value=this.fluids.dyeTexture,this.duck.position.y=$i+.015+Math.sin(e*2.6)*.018,this.duck.rotation.z=Math.sin(e*2.1)*.08,this.duckVel.lengthSq()>4e-4&&(this.duck.rotation.y=Kn.lerp(this.duck.rotation.y,Math.atan2(-this.duckVel.y,this.duckVel.x),.06))}onDown(t){const e=this.ctx.app.screenToPlane(t.x,t.y,$i);this._lastHit={x:e.x,z:e.z},this.interactCount++}onMove(t){const e=this.ctx.app.screenToPlane(t.x,t.y,$i);if(Math.abs(e.x)<Ve/2&&Math.abs(e.z)<He/2&&this._lastHit){const n=(e.x-this._lastHit.x)*22,s=(e.z-this._lastHit.z)*22;this._stir(e.x,e.z,n,s,.5),this.interactCount++}this._lastHit={x:e.x,z:e.z}}onUp(){this._lastHit=null}}function gc({shirt:i="#ff8c42",skin:t="#ffd9b0",hair:e="#3a2a1a"}={}){const n=new Pe,s=new Rt({color:t}),r=new Rt({color:i}),o=new Rt({color:e}),a=new j(new sr(.16,.2,4,10),r);a.position.y=.42,n.add(a);const l=new j(new Te(.155,14,12),s);l.position.y=.78,n.add(l);const c=new j(new Te(.16,14,8,0,Math.PI*2,0,Math.PI*.55),o);c.position.y=.8,n.add(c);const u=(p,m,S)=>new j(new sr(m,p,3,8),S),h=u(.2,.05,s),d=u(.2,.05,s);h.position.set(-.2,.5,0),d.position.set(.2,.5,0),n.add(h,d);const f=u(.18,.06,s),v=u(.18,.06,s);f.position.set(-.09,.13,0),v.position.set(.09,.13,0),n.add(f,v);function g(p){p==="dive"?(h.rotation.z=Math.PI*.92,d.rotation.z=-Math.PI*.92,h.position.set(-.1,.74,0),d.position.set(.1,.74,0),f.rotation.x=.18,v.rotation.x=-.12):(h.rotation.z=.35,d.rotation.z=-.35,h.position.set(-.2,.5,0),d.position.set(.2,.5,0),f.rotation.x=0,v.rotation.x=0)}return g("stand"),{group:n,pose:g}}const io=10,Xs=6,so=.4,zv=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Bv=`
precision highp float;
uniform sampler2D uDye;
varying vec2 vUv;
void main() {
  vec3 d = texture2D(uDye, vUv).rgb;
  float luma = dot(d, vec3(0.45));
  float edge = smoothstep(0.0, 0.1, vUv.x) * smoothstep(1.0, 0.9, vUv.x)
             * smoothstep(0.0, 0.1, vUv.y) * smoothstep(1.0, 0.85, vUv.y);
  gl_FragColor = vec4(0.95, 0.98, 1.0, clamp(luma, 0.0, 1.0) * 0.6 * edge);
}
`,Vv=`
uniform float uTime;
uniform float uSeed;
varying vec3 vNormal;
varying vec3 vWorldPos;
void main() {
  vec3 p = position;
  // 膜の揺らぎ(ぷるぷる)
  p += normal * 0.05 * sin(uTime * 7.0 + uSeed * 20.0 + position.y * 9.0 + position.x * 6.0);
  vNormal = normalize(mat3(modelMatrix) * normal);
  vec4 wp = modelMatrix * vec4(p, 1.0);
  vWorldPos = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Hv=`
precision highp float;
uniform float uTime;
uniform float uSeed;
uniform vec3 uSunDir;
varying vec3 vNormal;
varying vec3 vWorldPos;
void main() {
  vec3 n = normalize(vNormal);
  vec3 viewDir = normalize(cameraPosition - vWorldPos);
  float ct = abs(dot(n, viewDir));
  float fres = pow(1.0 - ct, 2.2);
  // 薄膜干渉: 膜厚(時間とともに流れ落ちる)と視角で光路差が変わり色が回る
  float phase = uSeed * 9.0 + uTime * 0.6 - vWorldPos.y * 1.6;
  vec3 irid = 0.5 + 0.5 * cos(6.2832 * ((1.0 - ct) * 2.4 + phase + vec3(0.0, 0.33, 0.67)));
  vec3 col = mix(vec3(0.6, 0.75, 0.85), irid, 0.85);
  vec3 halfV = normalize(normalize(uSunDir) + viewDir);
  col += vec3(1.2) * pow(max(dot(n, halfV), 0.0), 130.0);
  float alpha = fres * 0.8 + 0.14;
  gl_FragColor = vec4(col, alpha);
}
`;class kv extends on{build(t){const{app:e,quality:n,computer:s}=t;e.scene.background=null,e.scene.fog=null,e.camera.position.set(0,1.9,6.6),e.camera.fov=48,e.camera.updateProjectionMatrix(),e.lookTarget.set(0,1.9,0),this.group.add(Hi({top:"#0d6cc0",mid:"#8fd8f5",bottom:"#fdf2da"})),ln(this.group,{sunPos:[-5,9,6],sunIntensity:1.5});const r=new j(new ie(50,40),new Rt({color:"#6fae62"}));r.rotation.x=-Math.PI/2,this.group.add(r);const o=new Rt({color:"#2e7a44"}),a=new Rt({color:"#e6395c"});for(const[h,d,f]of[[4.2,-2.2,1.1],[5.6,-1,.8],[-5,-2.6,1]]){const v=new j(new Te(f,12,9),o);v.position.set(h,f*.62,d),v.scale.y=.78,this.group.add(v);for(let g=0;g<5;g++){const p=new j(new Te(.09,8,6),a),m=g/5*Math.PI*2;p.position.set(h+Math.cos(m)*f*.7,f*.62+(.2+Math.abs(Math.sin(m*1.7))*.45)*f,d+Math.sin(m)*f*.55),this.group.add(p)}}this.kid=gc({shirt:"#4db6e2"}),this.kid.group.position.set(-3.4,0,.4),this.kid.group.rotation.y=Math.PI/2-.3,this.kid.group.scale.setScalar(1.6),this.group.add(this.kid.group);const l=new j(new xe(.02,.02,.5,8),new Rt({color:"#e85f8a"}));l.position.set(-2.7,1.45,.4),l.rotation.z=Math.PI/2-.35,this.group.add(l);const c=new j(new cs(.09,.015,8,20),new Rt({color:"#e85f8a"}));c.position.set(-2.46,1.53,.4),c.rotation.y=Math.PI/2,this.group.add(c),this.mouth=new A(-2.45,1.53,.4),this.fluids=this.track(new Oo(s,{simRes:n.res(112),dyeRes:n.res(256),velDissipation:.997,dyeDissipation:.982,pressureIters:n.iters(16),curl:10})),this.breathMat=new Jt({vertexShader:zv,fragmentShader:Bv,uniforms:{uDye:{value:this.fluids.dyeTexture}},transparent:!0,depthWrite:!1});const u=new j(new ie(io,Xs),this.breathMat);u.position.set(0,so+Xs/2,.4),this.group.add(u),this.bubbleGeo=new Te(1,24,18),this.bubbles=[],this.impulses=[],this._blowTimer=.8,this._blowLeft=0}_uvFromWorld(t,e){return[t/io+.5,(e-so)/Xs]}_spawnBubble(t,e,n){if(this.bubbles.length>=36)return;const s=new Jt({vertexShader:Vv,fragmentShader:Hv,uniforms:{uTime:{value:0},uSeed:{value:Math.random()},uSunDir:{value:new A(-.5,.9,.6)}},transparent:!0,depthWrite:!1}),r=new j(this.bubbleGeo,s),o=.15+Math.random()*.18;r.scale.setScalar(.01),r.position.set(t,e,n+(Math.random()-.5)*.5),this.group.add(r),this.bubbles.push({mesh:r,r:o,vel:new A(.5+Math.random()*.4,.1,0),age:0,life:5+Math.random()*7})}_popBubble(t){const e=this.bubbles[t];this.group.remove(e.mesh),e.mesh.material.dispose(),this.bubbles.splice(t,1)}_blow(t,e,n,s,r){const[o,a]=this._uvFromWorld(t,e);this.fluids.splat(o,a,n/io,s/Xs,.04),r&&this.fluids.dyeSplat(o,a,.035,.55,.6,.65,0),this.impulses.push({x:t,y:e,vx:n,vy:s,t:this.simTime}),this.impulses.length>30&&this.impulses.shift()}simStep(t,e){if(this._blowTimer-=t,this._blowTimer<=0&&this._blowLeft<=0){this._blowLeft=.7,this._blowTimer=2.6+Math.random()*1.6;const n=2+Math.floor(Math.random()*3);for(let s=0;s<n;s++)this._spawnBubble(this.mouth.x+.1+Math.random()*.2,this.mouth.y+(Math.random()-.5)*.2,this.mouth.z)}this._blowLeft>0&&(this._blowLeft-=t,this._blow(this.mouth.x+.15,this.mouth.y,2.6,.5+Math.sin(e*5)*.3,!0)),this.fluids.step(t);for(let n=this.bubbles.length-1;n>=0;n--){const s=this.bubbles[n];s.age+=t;const r=s.mesh.position;let o=.3+Math.sin(r.y*1.2+e*.7)*.18,a=.16+Math.sin(r.x*.9-e*.5)*.14;for(const c of this.impulses){const u=Math.exp(-((r.x-c.x)**2+(r.y-c.y)**2)/1.2800000000000002),h=Math.exp(-(this.simTime-c.t)/.9);o+=c.vx*u*h*.5,a+=c.vy*u*h*.5}s.vel.x+=(o-s.vel.x)*t*1.8,s.vel.y+=(a-s.vel.y)*t*1.8,s.vel.z+=(Math.sin(s.age*1.3+n)*.05-s.vel.z)*t,r.addScaledVector(s.vel,t);const l=Math.min(s.age*4,1);s.mesh.scale.setScalar(s.r*l),(s.age>s.life||r.y>7||r.x>7)&&this._popBubble(n)}}frame(t,e){this.breathMat.uniforms.uDye.value=this.fluids.dyeTexture;for(const n of this.bubbles)n.mesh.material.uniforms.uTime.value=e;this.ctx.app.camera.position.x=Math.sin(e*.13)*.4}onDown(t){const e=this.ctx.app.screenToCustomPlane(t.x,t.y,new A(0,0,1),-.4);if(e){for(let n=0;n<3;n++)this._spawnBubble(e.x,Math.max(e.y,.5),.4);this.interactCount++}}onMove(t){const e=this.ctx.app.screenToCustomPlane(t.x,t.y,new A(0,0,1),-.4);e&&(this._blow(e.x,Math.max(e.y,so),t.dx*.1,-t.dy*.1,!0),this.interactCount++)}dispose(){for(const t of this.bubbles)t.mesh.material.dispose();this.bubbles.length=0,this.bubbleGeo.dispose(),super.dispose()}}const Dl=2.4,ro=3,Ll=.5,Ul=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Gv=`
precision highp float;
uniform sampler2D uDye;
uniform float uOffset;
varying vec2 vUv;
void main() {
  vec2 uv = vec2(clamp(vUv.x + uOffset, 0.0, 1.0), vUv.y);
  vec3 d = texture2D(uDye, uv).rgb;
  float luma = pow(clamp(dot(d, vec3(0.5)), 0.0, 1.0), 0.85);
  float edge = smoothstep(0.0, 0.16, vUv.x) * smoothstep(1.0, 0.84, vUv.x)
             * smoothstep(0.0, 0.04, vUv.y) * smoothstep(1.0, 0.6, vUv.y);
  gl_FragColor = vec4(1.0, 1.0, 1.0, luma * 0.42 * edge);
}
`,Wv=`
precision highp float;
uniform float uTime;
varying vec2 vUv;
${_n}
void main() {
  vec2 c = vUv - 0.5;
  float r = length(c);
  vec3 broth = mix(vec3(0.62, 0.42, 0.2), vec3(0.45, 0.28, 0.12), r * 1.6);
  float shimmer = snoise2(vUv * 7.0 + uTime * 0.25);
  broth += vec3(0.22, 0.16, 0.08) * pow(max(shimmer, 0.0), 3.0);
  // 油の輪
  float oil = smoothstep(0.04, 0.0, abs(snoise2(vUv * 3.5 - uTime * 0.05) * 0.3 - r + 0.18));
  broth += vec3(0.25, 0.2, 0.05) * oil;
  gl_FragColor = vec4(broth, 1.0);
}
`;class Xv extends on{build(t){const{app:e,quality:n,computer:s}=t;e.scene.background=new xt("#3d3328"),e.scene.fog=null,e.camera.position.set(0,1.7,2.7),e.camera.fov=46,e.camera.updateProjectionMatrix(),e.lookTarget.set(0,.9,0),ln(this.group,{sky:"#ffe9c4",ground:"#5a4631",hemiIntensity:.75,sunColor:"#ffd9a0",sunIntensity:1.1,sunPos:[2,5,3]});const r=new j(new he(7,.14,4.4),new Rt({color:"#8a5a30"}));r.position.y=-.07,this.group.add(r);const o=[];for(let g=0;g<=9;g++){const p=g/9;o.push(new ot(.18+Math.sin(p*Math.PI*.52)*.62,p*.52))}const a=new j(new fr(o,40),new nn({color:"#b8452e",shininess:60}));this.group.add(a);const l=new j(new xe(.2,.24,.06,24),new nn({color:"#8f3422"}));l.position.y=.03,this.group.add(l),this.brothMat=new Jt({vertexShader:Ul,fragmentShader:Wv,uniforms:{uTime:{value:0}}});const c=new j(new dr(.72,36),this.brothMat);c.rotation.x=-Math.PI/2,c.position.y=.46,this.group.add(c);const u=new Rt({color:"#f2e3b2"});for(let g=0;g<4;g++){const p=new j(new cs(.16+g*.05,.025,8,24,Math.PI*(1.2+g*.3)),u);p.rotation.x=-Math.PI/2,p.rotation.z=g*1.7,p.position.set(-.1+g*.06,.47,.05-g*.04),this.group.add(p)}const h=new j(new he(.34,.06,.24),new Rt({color:"#9c6240"}));h.position.set(.25,.5,-.18),h.rotation.y=.4,this.group.add(h);const d=new j(new xe(.11,.11,.035,18,1,!1,0,Math.PI),new Rt({color:"#f6dde2"}));d.rotation.z=Math.PI/2,d.rotation.y=Math.PI/2,d.position.set(-.3,.5,-.15),this.group.add(d);const f=new Rt({color:"#5fae46"});for(let g=0;g<7;g++){const p=new j(new xe(.014,.014,.05,6),f);p.position.set((Math.random()-.5)*.5,.485,(Math.random()-.5)*.5),p.rotation.set(Math.PI/2,0,Math.random()*Math.PI),this.group.add(p)}const v=new Rt({color:"#c8a060"});for(const g of[0,.05]){const p=new j(new xe(.012,.018,1.1,6),v);p.position.set(1.2,.04,.5+g),p.rotation.set(Math.PI/2,0,-.2),this.group.add(p)}this.fluids=this.track(new Oo(s,{simRes:n.res(128),dyeRes:n.res(256),velDissipation:.993,dyeDissipation:.965,pressureIters:n.iters(18),curl:16,buoyancy:{kTemp:2,kDens:.5}})),this.steamMats=[];for(const[g,p]of[[-.5,-.05],[0,0],[.5,.05]]){const m=new Jt({vertexShader:Ul,fragmentShader:Gv,uniforms:{uDye:{value:this.fluids.dyeTexture},uOffset:{value:p}},transparent:!0,depthWrite:!1,side:Ge}),S=new j(new ie(Dl,ro),m);S.position.set(0,Ll+ro/2,0),S.rotation.y=g,this.group.add(S),this.steamMats.push(m)}this._puffTimer=4,this._puffLeft=0}simStep(t,e){const n=Math.sin(e*.8)*.05;this.fluids.dyeSplat(.5+n,.05,.04,.35,.35,.37,.7),this.fluids.dyeSplat(.38-n,.04,.03,.2,.2,.22,.5),this.fluids.dyeSplat(.62+n*.5,.04,.03,.2,.2,.22,.5),this.fluids.splat(.5+n,.06,0,.1,.06),this._puffTimer-=t,this._puffTimer<=0&&(this._puffTimer=5+Math.random()*3,this._puffLeft=.5),this._puffLeft>0&&(this._puffLeft-=t,this.fluids.splat(.18,.3,.5,.05,.07)),this.fluids.step(t)}frame(t,e){this.brothMat.uniforms.uTime.value=e;for(const n of this.steamMats)n.uniforms.uDye.value=this.fluids.dyeTexture;this.ctx.app.camera.position.x=Math.sin(e*.14)*.3}onMove(t){const e=this.ctx.app.screenToCustomPlane(t.x,t.y,new A(0,0,1),0);if(e){const n=e.x/Dl+.5,s=(e.y-Ll)/ro;n>-.1&&n<1.1&&s>-.1&&s<1.1&&(this.fluids.splat(n,s,t.dx*.0035,-t.dy*.0035,.05),this.interactCount++)}}onDown(){this.interactCount++}}const Wn=.55,qs=.4,oo=.95,Ti=.365,Ki=.42,qv=`
${an}
uniform vec3 uSpout;
uniform vec3 uJetVel;
uniform float uPour;
void main() {
  vec4 vel = texture2D(uVel, vUv);
  vec4 pos = texture2D(uPos, vUv);
  float seed = vUv.x * 523.7 + vUv.y * 389.1;
  float r = hash11(seed + floor(uTime * 60.0));
  if (uReset > 0.5) {
    vel = vec4(0.0);
  } else if (pos.w <= 0.0 && uPour > 0.01 && r < uPour * 0.5) {
    vec3 j = hash31(seed * 2.3 + floor(uTime * 60.0)) - 0.5;
    vel.xyz = uJetVel * (0.97 + j.x * 0.06) + vec3(0.0, j.y, j.z) * 0.06;
  } else {
    vel.y -= 9.8 * uDt;
  }
  gl_FragColor = vel;
}
`,Yv=`
${an}
uniform vec3 uSpout;
uniform vec3 uJetDir;
uniform float uPour;
uniform float uFillY;
uniform float uGlassX;
void main() {
  vec4 pos = texture2D(uPos, vUv);
  vec3 vel = texture2D(uVel, vUv).xyz;
  float seed = vUv.x * 523.7 + vUv.y * 389.1;
  float r = hash11(seed + floor(uTime * 60.0));
  if (uReset > 0.5) {
    pos = vec4(0.0, -10.0, 0.0, 0.0);
  } else if (pos.w <= 0.0 && uPour > 0.01 && r < uPour * 0.5) {
    vec3 j = (hash31(seed * 4.9 + floor(uTime * 60.0)) - 0.5) * 0.02;
    pos = vec4(uSpout + j, 1.0);
  } else if (pos.w > 0.0) {
    pos.xyz += vel * uDt;
    float inGlass = step(distance(pos.xz, vec2(uGlassX, 0.0)), ${Ti.toFixed(3)});
    if (pos.y < uFillY && inGlass > 0.5) pos.w = 0.0;
    if (pos.y < 0.02) pos.w = 0.0;
    if (pos.w <= 0.0) pos.y = -10.0;
  }
  gl_FragColor = pos;
}
`,$v=`
uniform sampler2D uPos;
attribute vec2 aRef;
varying float vLife;
void main() {
  vec4 p = texture2D(uPos, aRef);
  vLife = p.w;
  vec4 mv = modelViewMatrix * vec4(p.xyz, 1.0);
  gl_PointSize = 14.0 / max(-mv.z, 0.1);
  gl_Position = projectionMatrix * mv;
}
`,Kv=`
precision highp float;
varying float vLife;
void main() {
  if (vLife <= 0.0) discard;
  vec2 d = gl_PointCoord - 0.5;
  float a = smoothstep(0.5, 0.1, length(d));
  gl_FragColor = vec4(0.93, 0.78, 0.42, a * 0.9);
}
`;class Zv extends on{build(t){const{app:e,quality:n,computer:s}=t;e.scene.background=new xt("#f3e8d2"),e.scene.fog=null,e.camera.position.set(0,1.5,2.6),e.camera.fov=46,e.camera.updateProjectionMatrix(),e.lookTarget.set(0,.8,0),ln(this.group,{sky:"#fff6e2",ground:"#b09872",sunPos:[2,6,5],sunIntensity:1.4,hemiIntensity:1.25});const r=new j(new he(6,.12,4),new Rt({color:"#9c6b3a"}));r.position.y=-.06,this.group.add(r);const o=new nn({color:"#dceef2",transparent:!0,opacity:.22,shininess:160,side:Ge}),a=new j(new xe(qs,qs*.86,oo,28,1,!0),o);a.position.set(Wn,oo/2,0),this.group.add(a);const l=new j(new xe(qs*.86,qs*.86,.05,28),o);l.position.set(Wn,.025,0),this.group.add(l),this.fill=.18;const c=new nn({color:"#c98c2e",transparent:!0,opacity:.78,shininess:90});this.liquid=new j(new xe(Ti,Ti*.88,1,26),c),this.group.add(this.liquid),this.slosh=this.track(new Vi(s,n.res(96),{damping:.97,c2:.2})),this.surfMat=zo({heightTex:this.slosh.texture,texel:this.slosh.texel,heightScale:.035,normalScale:22,deep:"#a96f17",shallow:"#ecc35e",opacity:.95,shininess:90}),this.surface=new j(new dr(Ti,36),this.surfMat),this.surface.rotation.x=-Math.PI/2,this.group.add(this.surface),this.surfMat.syncNormalMat(this.surface),this.teapot=new Pe;const u=new Rt({color:"#9fc7a5",emissive:"#37503c"}),h=new j(new Te(.3,22,16),u);h.scale.y=.82;const d=new j(new Qn(.13,.1,16),u);d.position.y=.26;const f=new j(new Te(.04,10,8),u);f.position.y=.33,this.spoutMesh=new j(new xe(.035,.05,.34,10),u),this.spoutMesh.position.set(.3,.05,0),this.spoutMesh.rotation.z=-1;const v=new j(new cs(.14,.03,8,20,Math.PI*1.2),u);v.position.set(-.27,.05,0),v.rotation.z=1.9,this.teapot.add(h,d,f,this.spoutMesh,v),this.teapot.position.set(-.78,1.28,0),this.teapot.scale.setScalar(.85),this.group.add(this.teapot),this.jet=this.track(new Oi(s,n.particleRes(80),{velFrag:qv,posFrag:Yv,uniforms:{uSpout:{value:new A},uJetVel:{value:new A},uPour:{value:0},uFillY:{value:.1},uGlassX:{value:Wn}}})),this.jetMat=new Jt({vertexShader:$v,fragmentShader:Kv,uniforms:{uPos:{value:this.jet.posTexture}},transparent:!0,depthWrite:!1}),this.group.add(new Lo(this.jet.pointsGeometry(),this.jetMat)),this.tilt=0,this.userHold=!1,this._cycle=0,this._spoutWorld=new A}get fillY(){return .05+this.fill*(oo-.22)}simStep(t,e){if(!this.userHold){this._cycle+=t;const l=this._cycle%8;let c=0;l<1?c=l:l<4.5?c=1:l<5.5&&(c=1-(l-4.5)),this.tilt+=(c-this.tilt)*t*4}this.fill>.93&&(this.tilt=Math.min(this.tilt,.1));const n=Kn.clamp((this.tilt-.45)/.5,0,1);this.teapot.rotation.z=-this.tilt*.95,this._spoutWorld.set(.46,-.06,0),this.teapot.localToWorld(this._spoutWorld),this.jet.uniforms.uSpout.value.copy(this._spoutWorld);const s=Wn+Math.sin(e*1.3)*.07,r=Math.sin(e*.9)*.05,o=this._spoutWorld;if(this.jet.uniforms.uJetVel.value.set((s-o.x)/Ki,(this.fillY-o.y+4.9*Ki*Ki)/Ki,(r-o.z)/Ki),this.jet.uniforms.uPour.value=n,this.jet.uniforms.uFillY.value=this.fillY,n>.02){this.fill<.95&&(this.fill+=n*t*.075);const l=(s-Wn)/(Ti*2)+.5,c=.5-r/(Ti*2);this.slosh.addSplat(l,c,.1,-.22*n)}else this.fill>.9&&this._cycle%8>6&&(this.fill=Math.max(.15,this.fill-t*.3));this.slosh.step(),this.jet.step(t,e)}frame(t,e){this.jetMat.uniforms.uPos.value=this.jet.posTexture,this.surfMat.uniforms.uHeight.value=this.slosh.texture;const n=this.fillY;this.liquid.scale.y=Math.max(n-.05,.01),this.liquid.position.set(Wn,.05+(n-.05)/2,0),this.surface.position.set(Wn,n+.005,0),this.ctx.app.camera.position.x=Math.sin(e*.16)*.2}onDown(t){this.userHold=!0,this._lastY=t.y,this.interactCount++}onMove(t){this.userHold&&(this.tilt=Kn.clamp(this.tilt-t.dy*.006,0,1),this.interactCount++)}onUp(){this.userHold=!1,this._cycle=6}}const oe=5.2,ye=3.8,Mi=.55,Jv=`
${an}
uniform float uBurstAge;
uniform vec3 uImpact;
void main() {
  vec4 vel = texture2D(uVel, vUv);
  vec4 pos = texture2D(uPos, vUv);
  float seed = vUv.x * 613.7 + vUv.y * 271.3;
  if (uReset > 0.5) {
    vel = vec4(0.0, 0.0, 0.0, 0.0);
  } else if (uBurstAge >= 0.0 && uBurstAge < 0.034 && pos.w <= 0.0) {
    vec3 h = hash31(seed + floor(uTime * 13.0));
    float ang = h.x * 6.2832;
    float up = 2.2 + h.y * 2.6;
    float out_ = 0.5 + h.z * 1.6;
    vel.xyz = vec3(cos(ang) * out_, up, sin(ang) * out_ * 0.8);
  } else {
    vel.y -= 9.8 * uDt;
    vel.xyz *= 0.995;
  }
  gl_FragColor = vel;
}
`,jv=`
${an}
uniform float uBurstAge;
uniform vec3 uImpact;
uniform float uWaterY;
void main() {
  vec4 pos = texture2D(uPos, vUv);
  vec3 vel = texture2D(uVel, vUv).xyz;
  float seed = vUv.x * 613.7 + vUv.y * 271.3;
  if (uReset > 0.5) {
    pos = vec4(0.0, -10.0, 0.0, 0.0); // 水面下で待機
  } else if (uBurstAge >= 0.0 && uBurstAge < 0.034 && pos.w <= 0.0) {
    vec2 j = hash21(seed * 1.7) - 0.5;
    pos = vec4(uImpact + vec3(j.x * 0.3, 0.05, j.y * 0.3), 0.7 + hash11(seed) * 0.6);
  } else if (pos.w > 0.0) {
    pos.xyz += vel * uDt;
    pos.w -= uDt;
    if (pos.y < uWaterY && vel.y < 0.0) pos.w = 0.0; // 着水で消滅
    if (pos.w <= 0.0) pos.y = -10.0;
  }
  gl_FragColor = pos;
}
`,Qv=`
uniform sampler2D uPos;
uniform float uSize;
attribute vec2 aRef;
varying float vLife;
void main() {
  vec4 p = texture2D(uPos, aRef);
  vLife = p.w;
  vec4 mv = modelViewMatrix * vec4(p.xyz, 1.0);
  gl_PointSize = uSize * clamp(p.w + 0.4, 0.0, 1.3) / max(-mv.z, 0.1);
  gl_Position = projectionMatrix * mv;
}
`,tg=`
precision highp float;
varying float vLife;
void main() {
  if (vLife <= 0.0) discard;
  vec2 d = gl_PointCoord - 0.5;
  float a = smoothstep(0.5, 0.12, length(d));
  gl_FragColor = vec4(0.92, 0.97, 1.0, a * 0.85);
}
`,eg=`
precision highp float;
uniform sampler2D uHeight;
uniform vec2 uTexel;
uniform float uTime;
varying vec2 vUv;
void main() {
  vec3 tile = vec3(0.55, 0.83, 0.92);
  vec2 g = abs(fract(vUv * vec2(13.0, 9.0)) - 0.5);
  float line = smoothstep(0.44, 0.49, max(g.x, g.y));
  vec3 base = mix(tile, vec3(0.35, 0.62, 0.78), line);

  float h = texture2D(uHeight, vUv).r;
  float l = texture2D(uHeight, vUv - vec2(uTexel.x * 2.0, 0.0)).r;
  float r = texture2D(uHeight, vUv + vec2(uTexel.x * 2.0, 0.0)).r;
  float b = texture2D(uHeight, vUv - vec2(0.0, uTexel.y * 2.0)).r;
  float t = texture2D(uHeight, vUv + vec2(0.0, uTexel.y * 2.0)).r;
  float lap = l + r + b + t - 4.0 * h;
  // 凹レンズ集光の近似: 曲率が負(凹)の場所に光が集まる
  float caustic = clamp(-lap * 260.0, -0.35, 1.6);
  base *= 1.0 + caustic * 0.55;
  base += vec3(1.0, 1.0, 0.9) * max(caustic - 0.5, 0.0) * 0.4;
  gl_FragColor = vec4(base, 1.0);
}
`;class ng extends on{build(t){const{app:e,quality:n,computer:s}=t;e.scene.background=null,e.camera.position.set(0,3.1,5.6),e.camera.fov=46,e.camera.updateProjectionMatrix(),e.lookTarget.set(0,.5,0),this.group.add(Hi({top:"#0a66b0",mid:"#7fd0f0",bottom:"#eafaff"})),ln(this.group,{sunPos:[5,9,3]});const r=new fc;r.moveTo(-20,-15),r.lineTo(20,-15),r.lineTo(20,15),r.lineTo(-20,15),r.closePath();const o=new ir;o.moveTo(-oe/2,-ye/2),o.lineTo(oe/2,-ye/2),o.lineTo(oe/2,ye/2),o.lineTo(-oe/2,ye/2),o.closePath(),r.holes.push(o);const a=new j(new No(r),new Rt({color:"#d8cfb6"}));a.rotation.x=-Math.PI/2,a.position.y=.78,this.group.add(a);const l=new Rt({color:"#bfe6f0"}),c=(S,x,w,N,b)=>{const R=new j(new ie(S,x),l);R.position.set(w,.78-x/2,N),R.rotation.y=b,this.group.add(R)};c(oe,.85,0,ye/2,Math.PI),c(oe,.85,0,-ye/2,0),c(ye,.85,-oe/2,0,Math.PI/2),c(ye,.85,oe/2,0,-Math.PI/2);const u=new Rt({color:"#f2ece0"}),h=.1;for(const[S,x,w,N]of[[oe+.7,.35,0,ye/2+.17],[oe+.7,.35,0,-ye/2-.17],[.35,ye,-oe/2-.17,0],[.35,ye,oe/2+.17,0]]){const b=new j(new he(S,h,x),u);b.position.set(w,.79,N),this.group.add(b)}const d=n.res(384);this.height=this.track(new Vi(s,d,{damping:.975,c2:.24})),this.waterMat=zo({heightTex:this.height.texture,texel:this.height.texel,heightScale:.12,normalScale:70,deep:"#1273a8",shallow:"#7fe3e8",foamThreshold:.5,opacity:.78});const f=n.high?180:96;this.water=new j(new ie(oe,ye,f,Math.round(f*ye/oe)),this.waterMat),this.water.rotation.x=-Math.PI/2,this.water.position.y=Mi,this.group.add(this.water),this.waterMat.syncNormalMat(this.water),this.floorMat=new Jt({vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:eg,uniforms:{uHeight:{value:this.height.texture},uTexel:{value:this.height.texel},uTime:{value:0}}});const v=new j(new ie(oe,ye),this.floorMat);v.rotation.x=-Math.PI/2,v.position.y=-.06,this.group.add(v);const g=new Rt({color:"#3fa9d0"});this.board=new j(new he(1,.08,.5),g),this.board.position.set(-oe/2-.2,1.45,0),this.group.add(this.board);const p=new j(new he(.12,.7,.12),g);p.position.set(-oe/2-.45,1.1,0),this.group.add(p),this.kid=gc(),this.group.add(this.kid.group);const m=n.particleRes(112);this.spray=this.track(new Oi(s,m,{velFrag:Jv,posFrag:jv,uniforms:{uBurstAge:{value:-1},uImpact:{value:new A(0,Mi,0)},uWaterY:{value:Mi}}})),this.sprayMat=new Jt({vertexShader:Qv,fragmentShader:tg,uniforms:{uPos:{value:this.spray.posTexture},uSize:{value:26}},transparent:!0,depthWrite:!1}),this.sprayPoints=new Lo(this.spray.pointsGeometry(),this.sprayMat),this.group.add(this.sprayPoints),this.divePhase="wait",this.diveTimer=1.2,this.burstTime=-100,this._resetKid()}_resetKid(){this.kid.pose("stand"),this.kid.group.position.set(-oe/2-.2,1.5,0),this.kid.group.rotation.set(0,Math.PI/2,0),this.kid.group.visible=!0}_uvFromWorld(t,e){return[t/oe+.5,.5-e/ye]}_startDive(){this.divePhase==="wait"&&(this.divePhase="fly",this.diveTimer=0,this.kid.pose("dive"))}_splash(t,e,n){const[s,r]=this._uvFromWorld(t,e);this.height.addSplat(s,r,n?.04:.016,n?-.42:-.14),n&&(this.burstTime=this.simTime,this.spray.uniforms.uImpact.value.set(t,Mi,e))}simStep(t,e){if(this.divePhase==="wait")this.diveTimer-=t,this.diveTimer<=0&&this._startDive();else if(this.divePhase==="fly"){this.diveTimer+=t;const s=this.diveTimer/.85,r=-oe/2-.2+s*(oe/2+.2-.6),o=1.5+1.1*s-2.1*s*s;if(this.kid.group.position.set(r,o,0),this.kid.group.rotation.z=-s*2.2,o<=Mi+.1){this._splash(r,0,!0);for(let a=0;a<4;a++){const[l,c]=this._uvFromWorld(r+(Math.random()-.5)*1.2,(Math.random()-.5)*1);this.height.addSplat(l,c,.014,-.1)}this.divePhase="under",this.diveTimer=0,this.kid.group.visible=!1}}else this.divePhase==="under"&&(this.diveTimer+=t,this.diveTimer>2.6&&(this.divePhase="wait",this.diveTimer=3.4,this._resetKid()));this.height.step();const n=this.simTime-this.burstTime;this.spray.uniforms.uBurstAge.value=n<1?n:-1,this.spray.step(t,e)}frame(t,e){this.floorMat.uniforms.uTime.value=e,this.sprayMat.uniforms.uPos.value=this.spray.posTexture,this.waterMat.uniforms.uHeight.value=this.height.texture,this.floorMat.uniforms.uHeight.value=this.height.texture,this.ctx.app.camera.position.x=Math.sin(e*.12)*.5}_pointerSplash(t,e){const n=this.ctx.app.screenToPlane(t.x,t.y,Mi);return Math.abs(n.x)<oe/2&&Math.abs(n.z)<ye/2?(this._splash(n.x,n.z,!1),e&&this._splash(n.x,n.z,!0),this.interactCount++,!0):!1}onDown(t){if(this.ctx.app.raycastMesh(t.x,t.y,this.board)){this._startDive(),this.interactCount++;return}this._pointerSplash(t,!0)}onMove(t){this._pointerSplash(t,!1)}}const Ee=-4,yi=9,Si=2.6,yo=9.5,wi=8,ig=`
${an}
uniform vec3 uMuzzle;
uniform vec3 uDir;
uniform float uFire;
void main() {
  vec4 vel = texture2D(uVel, vUv);
  vec4 pos = texture2D(uPos, vUv);
  float seed = vUv.x * 727.3 + vUv.y * 461.9;
  float r = hash11(seed + floor(uTime * 60.0));
  if (uReset > 0.5) {
    vel = vec4(0.0);
  } else if (pos.w <= 0.0 && uFire > 0.5 && r < 0.45) {
    vec3 j = hash31(seed * 3.7 + floor(uTime * 60.0)) - 0.5;
    vel.xyz = uDir * ${yo.toFixed(1)} * (0.96 + j.x * 0.08) + j * 0.5;
  } else {
    vel.y -= 9.8 * uDt;
  }
  gl_FragColor = vel;
}
`,sg=`
${an}
uniform vec3 uMuzzle;
uniform float uFire;
uniform float uWallZ;
void main() {
  vec4 pos = texture2D(uPos, vUv);
  vec3 vel = texture2D(uVel, vUv).xyz;
  float seed = vUv.x * 727.3 + vUv.y * 461.9;
  float r = hash11(seed + floor(uTime * 60.0));
  if (uReset > 0.5) {
    pos = vec4(0.0, -10.0, 0.0, 0.0);
  } else if (pos.w <= 0.0 && uFire > 0.5 && r < 0.45) {
    pos = vec4(uMuzzle + (hash31(seed * 6.1 + floor(uTime * 60.0)) - 0.5) * 0.05, 1.2);
  } else if (pos.w > 0.0) {
    pos.xyz += vel * uDt;
    pos.w -= uDt * 0.3;
    if (pos.z < uWallZ + 0.06 || pos.y < 0.03) pos.w = 0.0;
    if (pos.w <= 0.0) pos.y = -10.0;
  }
  gl_FragColor = pos;
}
`,rg=`
uniform sampler2D uPos;
attribute vec2 aRef;
varying float vLife;
void main() {
  vec4 p = texture2D(uPos, aRef);
  vLife = p.w;
  vec4 mv = modelViewMatrix * vec4(p.xyz, 1.0);
  gl_PointSize = 11.0 / max(-mv.z, 0.1);
  gl_Position = projectionMatrix * mv;
}
`,og=`
precision highp float;
varying float vLife;
void main() {
  if (vLife <= 0.0) discard;
  vec2 d = gl_PointCoord - 0.5;
  float a = smoothstep(0.5, 0.1, length(d));
  gl_FragColor = vec4(0.72, 0.88, 1.0, a * 0.85);
}
`,ag=`
precision highp float;
uniform sampler2D uSelf;
${mr}
varying vec2 vUv;
void main() {
  float w = texture2D(uSelf, vUv).r * 0.9985;
  // 濡れは少し下へ垂れる
  w = max(w, texture2D(uSelf, vUv + vec2(0.0, 0.012)).r * 0.96);
  for (int i = 0; i < 8; i++) {
    if (i >= uSplatCount) break;
    vec4 s = uSplats[i];
    float d = distance(vUv, s.xy) / max(s.z, 1e-5);
    w += uSplatVals[i].x * exp(-d * d);
  }
  gl_FragColor = vec4(clamp(w, 0.0, 1.0), 0.0, 0.0, 1.0);
}
`,lg=`
precision highp float;
uniform sampler2D uWet;
uniform vec3 uSunDir;
varying vec2 vUv;
varying vec3 vWorldPos;
${_n}
void main() {
  vec3 concrete = vec3(0.82, 0.80, 0.74) * (0.94 + snoise2(vWorldPos.xy * 9.0) * 0.07);
  // 花ブロック: セルごとに円形の抜き模様
  vec2 cell = fract(vUv * vec2(12.0, 3.5)) - 0.5;
  float ring = abs(length(cell) - 0.3);
  float pattern = smoothstep(0.05, 0.1, ring);
  vec2 grid = abs(fract(vUv * vec2(12.0, 3.5)) - 0.5);
  float mortar = smoothstep(0.46, 0.5, max(grid.x, grid.y));
  concrete *= 0.72 + 0.28 * pattern;
  concrete *= 1.0 - mortar * 0.25;

  float w = texture2D(uWet, vUv).r;
  vec3 col = mix(concrete, concrete * vec3(0.42, 0.45, 0.5), clamp(w * 1.2, 0.0, 1.0));
  // 濡れたところのてかり
  vec3 viewDir = normalize(cameraPosition - vWorldPos);
  vec3 halfV = normalize(normalize(uSunDir) + viewDir);
  vec3 n = vec3(0.0, 0.0, 1.0);
  col += vec3(1.0) * pow(max(dot(n, halfV), 0.0), 50.0) * w * 0.6;
  gl_FragColor = vec4(col, 1.0);
}
`,Il=`
varying vec2 vUv;
varying vec3 vWorldPos;
void main() {
  vUv = uv;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,cg=`
precision highp float;
uniform sampler2D uHeight;
uniform sampler2D uWet;
uniform vec2 uTexel;
uniform vec3 uSunDir;
varying vec2 vUv;
varying vec3 vWorldPos;
${_n}
void main() {
  vec3 dirt = vec3(0.72, 0.6, 0.45) * (0.93 + snoise2(vWorldPos.xz * 11.0) * 0.09);
  float w = texture2D(uWet, vUv).r;
  float h = texture2D(uHeight, vUv).r;
  float gx = texture2D(uHeight, vUv + vec2(uTexel.x, 0.0)).r - texture2D(uHeight, vUv - vec2(uTexel.x, 0.0)).r;
  float gy = texture2D(uHeight, vUv + vec2(0.0, uTexel.y)).r - texture2D(uHeight, vUv - vec2(0.0, uTexel.y)).r;
  vec3 n = normalize(vec3(-gx * 26.0, 1.0, gy * 26.0));
  vec3 viewDir = normalize(cameraPosition - vWorldPos);
  vec3 refl = reflect(-viewDir, n);
  vec3 skyCol = mix(vec3(0.5, 0.62, 0.7), vec3(0.92, 0.97, 1.0), clamp(refl.y * 1.5 + 0.2, 0.0, 1.0));
  float fres = pow(1.0 - max(dot(n, viewDir), 0.0), 2.0);
  vec3 wet = mix(dirt * 0.5, skyCol, 0.3 + fres * 0.55);
  vec3 halfV = normalize(normalize(uSunDir) + viewDir);
  wet += vec3(1.0) * pow(max(dot(n, halfV), 0.0), 80.0) * 0.7;
  vec3 col = mix(dirt, wet, smoothstep(0.08, 0.5, w));
  gl_FragColor = vec4(col, 1.0);
}
`;class ug extends on{build(t){const{app:e,quality:n,computer:s}=t;this.computer=s,e.scene.background=null,e.scene.fog=null,e.camera.position.set(0,1.6,3.6),e.camera.fov=52,e.camera.updateProjectionMatrix(),e.lookTarget.set(0,1.2,Ee),this.group.add(Hi({top:"#0d6cc0",mid:"#8fd8f5",bottom:"#fdf2da"})),ln(this.group,{sunPos:[4,8,5],sunIntensity:1.5}),this.wallWet=this.track(new sn(n.res(256),n.res(256))),this.groundWet=this.track(new sn(n.res(192),n.res(192))),this.wetMat=this.track(s.material(ag,{uSelf:{value:null},uSplats:{value:Array.from({length:8},()=>new jt)},uSplatVals:{value:Array.from({length:8},()=>new jt)},uSplatCount:{value:0}})),this._wallQueue=[],this._groundQueue=[],this.wallMat=new Jt({vertexShader:Il,fragmentShader:lg,uniforms:{uWet:{value:this.wallWet.texture},uSunDir:{value:new A(.4,.8,.6)}}});const r=new j(new ie(yi,Si),this.wallMat);r.position.set(0,Si/2,Ee),this.group.add(r);const o=new j(new he(yi,.12,.3),new Rt({color:"#cdc8ba"}));o.position.set(0,Si+.06,Ee-.05),this.group.add(o),this.puddle=this.track(new Vi(s,n.res(192),{damping:.985,c2:.26})),this.groundMat=new Jt({vertexShader:Il,fragmentShader:cg,uniforms:{uHeight:{value:this.puddle.texture},uWet:{value:this.groundWet.texture},uTexel:{value:this.puddle.texel},uSunDir:{value:new A(.4,.8,.6)}}});const a=new j(new ie(wi,wi),this.groundMat);a.rotation.x=-Math.PI/2,a.position.z=Ee+wi/2,this.group.add(a);const l=new j(new ie(50,40),new Rt({color:"#79b169"}));l.rotation.x=-Math.PI/2,l.position.y=-.02,this.group.add(l);const c=new j(new he(3.2,.07,.4),new Rt({color:"#8a6238"}));c.position.set(0,1.05,Ee+.35),this.group.add(c);for(const[v,g]of[[-1,Ee+.35],[0,Ee+.35],[1,Ee+.35]]){const p=new j(new he(.08,1.05,.08),new Rt({color:"#74522e"}));p.position.set(v,.52,g),this.group.add(p)}this.cans=[];const u=["#d94f3c","#3c8fd9","#e8b53a"];for(let v=0;v<3;v++){const g=new j(new xe(.09,.09,.26,16),new nn({color:u[v],shininess:100})),p=new A(-.9+v*.9,1.05+.035+.13,Ee+.35);g.position.copy(p),this.group.add(g),this.cans.push({mesh:g,home:p,state:"up",vel:new A,spin:0,timer:0})}this.hits=0,this.gun=new Pe;const h=new j(new he(.3,.16,.1),new nn({color:"#ff8c2e",shininess:70})),d=new j(new Te(.1,14,10),new nn({color:"#73d2f0",transparent:!0,opacity:.7}));d.position.set(-.05,.14,0),this.barrel=new j(new xe(.03,.04,.34,12),new nn({color:"#2ab07a"})),this.barrel.rotation.x=Math.PI/2,this.barrel.position.set(0,.03,-.22);const f=new j(new he(.08,.18,.08),new nn({color:"#2ab07a"}));f.position.set(0,-.15,.05),f.rotation.x=.3,this.gun.add(h,d,this.barrel,f),this.gun.position.set(.55,1,1.85),this.group.add(this.gun),this.jet=this.track(new Oi(s,n.particleRes(96),{velFrag:ig,posFrag:sg,uniforms:{uMuzzle:{value:new A},uDir:{value:new A(0,0,-1)},uFire:{value:0},uWallZ:{value:Ee}}})),this.jetMat=new Jt({vertexShader:rg,fragmentShader:og,uniforms:{uPos:{value:this.jet.posTexture}},transparent:!0,depthWrite:!1}),this.group.add(new Lo(this.jet.pointsGeometry(),this.jetMat)),this.aim=new A(0,1.3,Ee),this.firing=!1,this.userAim=!1,this._muzzle=new A}_runWet(t,e){const n=this.wetMat.uniforms,s=Math.min(e.length,8);for(let r=0;r<s;r++){const[o,a,l,c]=e[r];n.uSplats.value[r].set(o,a,l,0),n.uSplatVals.value[r].set(c,0,0,0)}e.splice(0,s),n.uSplatCount.value=s,n.uSelf.value=t.texture,this.computer.run(this.wetMat,t.write),t.swap()}simStep(t,e){this.userAim||(this.aim.set(Math.sin(e*.55)*2.2,1.15+Math.sin(e*1.4)*.35,Ee),this.firing=e%2.4<1.1),this.gun.lookAt(this.aim),this._muzzle.set(0,.03,-.42),this.gun.localToWorld(this._muzzle);const n=this.aim.clone().sub(this._muzzle).normalize(),s=this._muzzle.distanceTo(this.aim);if(n.y+=4.9*(s/yo)**2/s,n.normalize(),this.jet.uniforms.uMuzzle.value.copy(this._muzzle),this.jet.uniforms.uDir.value.copy(n),this.jet.uniforms.uFire.value=this.firing?1:0,this.firing){const o=this._muzzle,a=n.clone().multiplyScalar(yo),l=(Ee+.06-o.z)/a.z;if(l>0){const c=o.x+a.x*l,u=o.y+a.y*l-4.9*l*l;if(u>.05&&u<Si&&Math.abs(c)<yi/2)this._wallQueue.push([c/yi+.5,u/Si,.03,.22]);else if(u<=.05){const h=a.y*a.y+19.6*o.y,d=(a.y+Math.sqrt(h))/9.8,f=o.x+a.x*d,v=o.z+a.z*d,g=f/wi+.5,p=.5-(v-(Ee+wi/2))/wi;g>0&&g<1&&p>0&&p<1&&(this._groundQueue.push([g,p,.03,.1]),this.puddle.addSplat(g,p,.015,-.4))}for(const h of this.cans){if(h.state!=="up")continue;const d=(h.home.z-o.z)/a.z;if(d>0){const f=o.x+a.x*d,v=o.y+a.y*d-4.9*d*d;Math.abs(f-h.home.x)<.14&&Math.abs(v-h.home.y)<.2&&(h.state="fly",h.vel.set(a.x*.12+(Math.random()-.5),1.6,-1.2),h.spin=(Math.random()-.5)*14,this.hits++)}}}}let r=!0;for(const o of this.cans){if(o.state==="up"){r=!1;continue}o.state==="fly"?(o.vel.y-=9.8*t,o.mesh.position.addScaledVector(o.vel,t),o.mesh.rotation.x+=o.spin*t,o.mesh.position.y<.1&&(o.state="down",o.timer=0,o.mesh.position.y=.1)):o.state==="down"&&(o.timer+=t)}if(r&&this.cans.every(o=>o.state==="down"&&o.timer>2.5))for(const o of this.cans)o.state="up",o.mesh.position.copy(o.home),o.mesh.rotation.set(0,0,0);this._runWet(this.wallWet,this._wallQueue),(this._groundQueue.length||this.simSteps%2===0)&&this._runWet(this.groundWet,this._groundQueue),this.puddle.step(),this.jet.step(t,e)}frame(t,e){this.jetMat.uniforms.uPos.value=this.jet.posTexture,this.wallMat.uniforms.uWet.value=this.wallWet.texture,this.groundMat.uniforms.uHeight.value=this.puddle.texture,this.groundMat.uniforms.uWet.value=this.groundWet.texture}_aimAt(t){const e=this.ctx.app.screenToCustomPlane(t.x,t.y,new A(0,0,1),-Ee);e&&this.aim.set(Kn.clamp(e.x,-yi/2,yi/2),Kn.clamp(e.y,.1,Si+.6),Ee)}onDown(t){this.userAim=!0,this.firing=!0,this._aimAt(t),this.interactCount++}onMove(t){this.userAim&&(this._aimAt(t),this.interactCount++)}onUp(){this.firing=!1,setTimeout(()=>{this.userAim=!1},2e3)}}const Bo=[{id:"nami",emoji:"🌊",label:"なみ",title:"美ら海の波打ちぎわ",desc:"朝のビーチ。沖からのうねりが浅瀬で背を伸ばして砕け、レースのような泡が砂浜を駆け上がります。引いた波の跡は濡れた砂として残ります。さわると さざ波が広がるよ。",phys:"浅水波の変形 + 波動方程式ハイトフィールド",make:()=>new iv},{id:"taifu",emoji:"🌀",label:"たいふう",title:"台風の暴風",desc:"台風の日、おうちの窓から見える風。数万本の流線が空気の流れを描き、ヤシの木が大きくしなります。ドラッグで突風を起こしてみよう。",phys:"カールノイズ乱流 + GPU流線粒子",make:()=>new dv},{id:"squall",emoji:"🌧️",label:"スコール",title:"スコールと水たまり",desc:"急に降り出す通り雨。雨粒の一つ一つが水たまりに波紋を作り、互いに干渉しながら広がります。さわって大きな波紋を作ってみよう。",phys:"波動方程式の干渉波紋",make:()=>new Mv},{id:"kakigori",emoji:"🍧",label:"かきごおり",title:"かき氷のシロップ",desc:"おやつのかき氷。とろりとしたシロップが氷の山をゆっくり流れ落ちます。粘り気のある液体の「薄膜流」です。ドームをなでてシロップをかけよう。色も選べるよ。",phys:"粘性薄膜流 + Beer-Lambert吸収",make:()=>new Ev},{id:"ofuro",emoji:"🛁",label:"おふろ",title:"お風呂のかきまぜ",desc:"夜のお風呂で水あそび。水面をかき混ぜると渦ができて、白い入浴剤がマーブル模様に伸びていきます。アヒルさんも流れに乗って漂うよ。",phys:"ナビエ・ストークス方程式(安定流体法)",make:()=>new Ov},{id:"shabon",emoji:"🫧",label:"シャボンだま",title:"シャボン玉と息の気流",desc:"お庭でシャボン玉。ふーっと吹いた息の流れが白くうずを巻き、シャボン玉は薄い膜が光を干渉させて虹色に輝きます。ドラッグで風を送ろう。タップで新しいシャボン玉。",phys:"安定流体法の気流 + 薄膜干渉",make:()=>new kv},{id:"yuge",emoji:"🍜",label:"そばのゆげ",title:"沖縄そばの湯気",desc:"お昼は沖縄そば。熱いだし汁に温められた空気が軽くなって立ち上り、渦を巻きながら冷えて消えます。これが熱対流。ドラッグで湯気をかき乱せるよ。",phys:"浮力項つき安定流体法(熱対流)",make:()=>new Xv},{id:"sanpincha",emoji:"🍵",label:"さんぴんちゃ",title:"さんぴん茶を注ぐ",desc:"おやつの時間のさんぴん茶。急須から落ちる水流は重力で放物線を描き、着水点からグラスの中に波が揺れ広がります。ドラッグで急須を傾けてみよう。",phys:"GPU粒子噴流 + スロッシング",make:()=>new Zv},{id:"pool",emoji:"🏊",label:"プール",title:"プールの飛び込み",desc:"夕方のプール。飛び込んだ瞬間、水面に大きな波の輪としぶきが弾け、プールの底には光のゆらめき(コースティクス)が踊ります。水面タップでスプラッシュ、飛び込み台タップでダイブ!",phys:"波動方程式 + 弾道しぶき粒子 + コースティクス",make:()=>new ng},{id:"mizudeppo",emoji:"🔫",label:"みずでっぽう",title:"水鉄砲",desc:"お庭で水鉄砲。噴き出した水は放物線を描いて飛び、花ブロックの塀に当たって黒い濡れジミを残します。狙って撃って、空き缶を倒そう!",phys:"噴流の弾道 + 濡れの蓄積シミュレーション",make:()=>new ug}],hg=`
<svg class="title-art" viewBox="0 0 220 130">
  <!-- 太陽 -->
  <circle cx="178" cy="28" r="14" fill="#ffd95e"/>
  <!-- 雲 -->
  <ellipse cx="50" cy="24" rx="22" ry="8" fill="#fff" opacity=".9"/>
  <ellipse cx="66" cy="20" rx="14" ry="6" fill="#fff" opacity=".9"/>
  <!-- ヤシの木 -->
  <path d="M36 96 q4 -28 2 -44" fill="none" stroke="#8a623c" stroke-width="6" stroke-linecap="round"/>
  <path d="M38 52 q-16 -10 -26 -2 M38 52 q-2 -16 8 -22 M38 52 q14 -8 24 0 M38 52 q12 4 16 14" fill="none" stroke="#2f9e54" stroke-width="6" stroke-linecap="round"/>
  <!-- 波 -->
  <path d="M0 104 q14 -10 28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 L224 130 L0 130 Z" fill="#1d9fce"/>
  <path d="M0 112 q14 -8 28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 L224 130 L0 130 Z" fill="#43d6c9" opacity=".85"/>
  <path d="M0 104 q14 -10 28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0" fill="none" stroke="#fff" stroke-width="3" opacity=".8"/>
  <!-- シャボン玉 -->
  <circle cx="120" cy="44" r="9" fill="none" stroke="#bfeaff" stroke-width="2.4" opacity=".95"/>
  <circle cx="140" cy="60" r="5" fill="none" stroke="#ffd9f0" stroke-width="2" opacity=".9"/>
  <circle cx="104" cy="64" r="4" fill="none" stroke="#d2ffe8" stroke-width="2" opacity=".9"/>
</svg>`,fg=`
<svg id="start-btn" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="46" fill="#12b3d6" stroke="#0a6f96" stroke-width="5"/>
  <path d="M40 30 L72 50 L40 70 Z" fill="#fff" stroke="#0a6f96" stroke-width="4" stroke-linejoin="round"/>
</svg>`,us=new V0,Oe=new B0(document.getElementById("app"),us),dg=new G0(Oe.renderer),vr={app:Oe,quality:us,computer:dg,sceneUi:document.getElementById("scene-ui"),fps:0,get frames(){return Oe.frames}},Xe=new H0(vr);vr.scenes=Xe;for(const i of Bo)Xe.register(i.id,i.make);const pg=new q0(document.getElementById("info-panel")),Vo=new Y0(us),mg=new X0(document.getElementById("scene-bar"),Bo,i=>Xe.goto(i));let _c=0;Xe.onSwitch=i=>{const t=Bo.find(e=>e.id===i);t&&pg.show(t.title,t.desc,t.phys),mg.setActive(i),_c=Oe.elapsed,Vo.refresh()};us.onChange=i=>{Vo.refresh(),i&&Xe.currentName&&(Oe.applyPixelRatio(),Xe.reenter())};new W0(Oe.renderer.domElement,{onDown:i=>Xe.onDown(i),onMove:i=>Xe.onMove(i),onUp:i=>Xe.onUp(i),onHover:i=>{var t,e;return(e=(t=Xe.current)==null?void 0:t.onHover)==null?void 0:e.call(t,i)}});Oe.onUpdate(i=>{Xe.update(i,Oe.elapsed),vr.fps=Oe.fps,Vo.update(i,Oe.fps);const t=Oe.elapsed-_c;t>3&&t<6&&Oe.fps>0&&Oe.fps<24&&us.autoDowngrade()});window.__ctx=vr;const So=document.getElementById("start-screen");So.innerHTML=`${hg}
  <h1>3D流体力学ビジュアライザー</h1>
  <div class="sub">〜 おきなわの一日 〜</div>
  ${fg}`;So.addEventListener("pointerdown",()=>{So.classList.add("hide"),Xe.goto("nami")},{once:!0});
