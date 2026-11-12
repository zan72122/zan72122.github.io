(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ga="170",ih=0,Ga=1,sh=2,el=1,nl=2,bn=3,Xn=0,Be=1,fn=2,Vn=0,Bi=1,So=2,Va=3,Wa=4,rh=5,ii=100,oh=101,ah=102,ch=103,lh=104,hh=200,uh=201,dh=202,fh=203,wo=204,Eo=205,ph=206,mh=207,gh=208,_h=209,vh=210,xh=211,Mh=212,yh=213,Sh=214,bo=0,To=1,Ao=2,Hi=3,Ro=4,Co=5,Po=6,Lo=7,il=0,wh=1,Eh=2,Wn=0,bh=1,Th=2,Ah=3,sl=4,Rh=5,Ch=6,Ph=7,rl=300,Gi=301,Vi=302,Io=303,Do=304,wr=306,vs=1e3,oi=1001,Uo=1002,an=1003,Lh=1004,Cs=1005,mn=1006,Pr=1007,ai=1008,Pn=1009,ol=1010,al=1011,xs=1012,_a=1013,ci=1014,Tn=1015,Ts=1016,va=1017,xa=1018,Wi=1020,cl=35902,ll=1021,hl=1022,on=1023,ul=1024,dl=1025,zi=1026,Xi=1027,fl=1028,Ma=1029,pl=1030,ya=1031,Sa=1033,ar=33776,cr=33777,lr=33778,hr=33779,No=35840,Fo=35841,Oo=35842,Bo=35843,zo=36196,ko=37492,Ho=37496,Go=37808,Vo=37809,Wo=37810,Xo=37811,qo=37812,Yo=37813,Zo=37814,$o=37815,Jo=37816,Ko=37817,jo=37818,Qo=37819,ta=37820,ea=37821,ur=36492,na=36494,ia=36495,ml=36283,sa=36284,ra=36285,oa=36286,Ih=3200,Dh=3201,gl=0,Uh=1,Hn="",Ne="srgb",Zi="srgb-linear",Er="linear",re="srgb",mi=7680,Xa=519,Nh=512,Fh=513,Oh=514,_l=515,Bh=516,zh=517,kh=518,Hh=519,aa=35044,qa="300 es",An=2e3,xr=2001;class $i{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lr=Math.PI/180,ca=180/Math.PI;function Rn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Re(i,t,e){return Math.max(t,Math.min(e,i))}function Gh(i,t){return(i%t+t)%t}function Ir(i,t,e){return(1-e)*i+e*t}function pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class lt{constructor(t=0,e=0){lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,n,s,r,o,a,c,l){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],M=s[1],x=s[4],v=s[7],L=s[2],T=s[5],A=s[8];return r[0]=o*_+a*M+c*L,r[3]=o*m+a*x+c*T,r[6]=o*f+a*v+c*A,r[1]=l*_+h*M+u*L,r[4]=l*m+h*x+u*T,r[7]=l*f+h*v+u*A,r[2]=d*_+p*M+g*L,r[5]=d*m+p*x+g*T,r[8]=d*f+p*v+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Dr.makeScale(t,e)),this}rotate(t){return this.premultiply(Dr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Dr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Dr=new qt;function vl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vh(){const i=Mr("canvas");return i.style.display="block",i}const Ya={};function cs(i){i in Ya||(Ya[i]=!0,console.warn(i))}function Wh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Xh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function qh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Qt={enabled:!0,workingColorSpace:Zi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===re&&(i.r=Cn(i.r),i.g=Cn(i.g),i.b=Cn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===re&&(i.r=ki(i.r),i.g=ki(i.g),i.b=ki(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Hn?Er:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Za=[.64,.33,.3,.6,.15,.06],$a=[.2126,.7152,.0722],Ja=[.3127,.329],Ka=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ja=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[Zi]:{primaries:Za,whitePoint:Ja,transfer:Er,toXYZ:Ka,fromXYZ:ja,luminanceCoefficients:$a,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:Za,whitePoint:Ja,transfer:re,toXYZ:Ka,fromXYZ:ja,luminanceCoefficients:$a,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}});let gi;class Yh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{gi===void 0&&(gi=Mr("canvas")),gi.width=t.width,gi.height=t.height;const n=gi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=gi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Mr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Cn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Cn(e[n]/255)*255):e[n]=Cn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Zh=0;class xl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=Rn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ur(s[o].image)):r.push(Ur(s[o]))}else r=Ur(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ur(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $h=0;class ze extends $i{constructor(t=ze.DEFAULT_IMAGE,e=ze.DEFAULT_MAPPING,n=oi,s=oi,r=mn,o=ai,a=on,c=Pn,l=ze.DEFAULT_ANISOTROPY,h=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=Rn(),this.name="",this.source=new xl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vs:t.x=t.x-Math.floor(t.x);break;case oi:t.x=t.x<0?0:1;break;case Uo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vs:t.y=t.y-Math.floor(t.y);break;case oi:t.y=t.y<0?0:1;break;case Uo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=rl;ze.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,s=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,v=(p+1)/2,L=(f+1)/2,T=(h+d)/4,A=(u+_)/4,I=(g+m)/4;return x>v&&x>L?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=A/n):v>L?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=I/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=A/r,s=I/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jh extends $i{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new ze(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new xl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends Jh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ml extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kh extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ui{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==p||h!==g){let m=1-a;const f=c*d+l*p+h*g+u*_,M=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const L=Math.sqrt(x),T=Math.atan2(L,f*M);m=Math.sin(m*T)/L,a=Math.sin(a*T)/L}const v=a*M;if(c=c*m+d*v,l=l*m+p*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*p-l*d,t[e+1]=c*g+h*d+l*u-a*p,t[e+2]=l*g+h*p+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Nr.copy(this).projectOnVector(t),this.sub(Nr)}reflect(t){return this.sub(Nr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nr=new C,Qa=new ui;class di{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,tn):tn.fromBufferAttribute(r,o),tn.applyMatrix4(t.matrixWorld),this.expandByPoint(tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ps.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ps.copy(n.boundingBox)),Ps.applyMatrix4(t.matrixWorld),this.union(Ps)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,tn),tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qi),Ls.subVectors(this.max,Qi),_i.subVectors(t.a,Qi),vi.subVectors(t.b,Qi),xi.subVectors(t.c,Qi),Un.subVectors(vi,_i),Nn.subVectors(xi,vi),Zn.subVectors(_i,xi);let e=[0,-Un.z,Un.y,0,-Nn.z,Nn.y,0,-Zn.z,Zn.y,Un.z,0,-Un.x,Nn.z,0,-Nn.x,Zn.z,0,-Zn.x,-Un.y,Un.x,0,-Nn.y,Nn.x,0,-Zn.y,Zn.x,0];return!Fr(e,_i,vi,xi,Ls)||(e=[1,0,0,0,1,0,0,0,1],!Fr(e,_i,vi,xi,Ls))?!1:(Is.crossVectors(Un,Nn),e=[Is.x,Is.y,Is.z],Fr(e,_i,vi,xi,Ls))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Mn=[new C,new C,new C,new C,new C,new C,new C,new C],tn=new C,Ps=new di,_i=new C,vi=new C,xi=new C,Un=new C,Nn=new C,Zn=new C,Qi=new C,Ls=new C,Is=new C,$n=new C;function Fr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){$n.fromArray(i,r);const a=s.x*Math.abs($n.x)+s.y*Math.abs($n.y)+s.z*Math.abs($n.z),c=t.dot($n),l=e.dot($n),h=n.dot($n);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const jh=new di,ts=new C,Or=new C;class br{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):jh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ts.subVectors(t,this.center);const e=ts.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ts,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Or.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ts.copy(t.center).add(Or)),this.expandByPoint(ts.copy(t.center).sub(Or))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new C,Br=new C,Ds=new C,Fn=new C,zr=new C,Us=new C,kr=new C;class wa{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.origin).addScaledVector(this.direction,e),yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Br.copy(t).add(e).multiplyScalar(.5),Ds.copy(e).sub(t).normalize(),Fn.copy(this.origin).sub(Br);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ds),a=Fn.dot(this.direction),c=-Fn.dot(Ds),l=Fn.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Br).addScaledVector(Ds,d),p}intersectSphere(t,e){yn.subVectors(t.center,this.origin);const n=yn.dot(this.direction),s=yn.dot(yn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,n,s,r){zr.subVectors(e,t),Us.subVectors(n,t),kr.crossVectors(zr,Us);let o=this.direction.dot(kr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fn.subVectors(this.origin,t);const c=a*this.direction.dot(Us.crossVectors(Fn,Us));if(c<0)return null;const l=a*this.direction.dot(zr.cross(Fn));if(l<0||c+l>o)return null;const h=-a*Fn.dot(kr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,n,s,r,o,a,c,l,h,u,d,p,g,_,m){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,p,g,_,m)}set(t,e,n,s,r,o,a,c,l,h,u,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Mi.setFromMatrixColumn(t,0).length(),r=1/Mi.setFromMatrixColumn(t,1).length(),o=1/Mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,p=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,p=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,p=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-p,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qh,t,tu)}lookAt(t,e,n){const s=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),On.crossVectors(n,Ge),On.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),On.crossVectors(n,Ge)),On.normalize(),Ns.crossVectors(Ge,On),s[0]=On.x,s[4]=Ns.x,s[8]=Ge.x,s[1]=On.y,s[5]=Ns.y,s[9]=Ge.y,s[2]=On.z,s[6]=Ns.z,s[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],M=n[3],x=n[7],v=n[11],L=n[15],T=s[0],A=s[4],I=s[8],E=s[12],S=s[1],P=s[5],G=s[9],O=s[13],W=s[2],J=s[6],X=s[10],tt=s[14],k=s[3],at=s[7],pt=s[11],dt=s[15];return r[0]=o*T+a*S+c*W+l*k,r[4]=o*A+a*P+c*J+l*at,r[8]=o*I+a*G+c*X+l*pt,r[12]=o*E+a*O+c*tt+l*dt,r[1]=h*T+u*S+d*W+p*k,r[5]=h*A+u*P+d*J+p*at,r[9]=h*I+u*G+d*X+p*pt,r[13]=h*E+u*O+d*tt+p*dt,r[2]=g*T+_*S+m*W+f*k,r[6]=g*A+_*P+m*J+f*at,r[10]=g*I+_*G+m*X+f*pt,r[14]=g*E+_*O+m*tt+f*dt,r[3]=M*T+x*S+v*W+L*k,r[7]=M*A+x*P+v*J+L*at,r[11]=M*I+x*G+v*X+L*pt,r[15]=M*E+x*O+v*tt+L*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*p-n*c*p)+_*(+e*c*p-e*l*d+r*o*d-s*o*p+s*l*h-r*c*h)+m*(+e*l*u-e*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+f*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],M=u*m*l-_*d*l+_*c*p-a*m*p-u*c*f+a*d*f,x=g*d*l-h*m*l-g*c*p+o*m*p+h*c*f-o*d*f,v=h*_*l-g*u*l+g*a*p-o*_*p-h*a*f+o*u*f,L=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,T=e*M+n*x+s*v+r*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=M*A,t[1]=(_*d*r-u*m*r-_*s*p+n*m*p+u*s*f-n*d*f)*A,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*f+n*c*f)*A,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*p-n*c*p)*A,t[4]=x*A,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*A,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*f-e*c*f)*A,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*p+e*c*p)*A,t[8]=v*A,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*f-e*u*f)*A,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*f+e*a*f)*A,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*p-e*a*p)*A,t[12]=L*A,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*A,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*A,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,g=r*u,_=o*h,m=o*u,f=a*u,M=c*l,x=c*h,v=c*u,L=n.x,T=n.y,A=n.z;return s[0]=(1-(_+f))*L,s[1]=(p+v)*L,s[2]=(g-x)*L,s[3]=0,s[4]=(p-v)*T,s[5]=(1-(d+f))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(g+x)*A,s[9]=(m-M)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Mi.set(s[0],s[1],s[2]).length();const o=Mi.set(s[4],s[5],s[6]).length(),a=Mi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],en.copy(this);const l=1/r,h=1/o,u=1/a;return en.elements[0]*=l,en.elements[1]*=l,en.elements[2]*=l,en.elements[4]*=h,en.elements[5]*=h,en.elements[6]*=h,en.elements[8]*=u,en.elements[9]*=u,en.elements[10]*=u,e.setFromRotationMatrix(en),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=An){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(a===An)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===xr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=An){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,p=(n+s)*h;let g,_;if(a===An)g=(o+r)*u,_=-2*u;else if(a===xr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Mi=new C,en=new le,Qh=new C(0,0,0),tu=new C(1,1,1),On=new C,Ns=new C,Ge=new C,tc=new le,ec=new ui;class cn{constructor(t=0,e=0,n=0,s=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Re(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Re(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return tc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ec.setFromEuler(this),this.setFromQuaternion(ec,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class Ea{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let eu=0;const nc=new C,yi=new ui,Sn=new le,Fs=new C,es=new C,nu=new C,iu=new ui,ic=new C(1,0,0),sc=new C(0,1,0),rc=new C(0,0,1),oc={type:"added"},su={type:"removed"},Si={type:"childadded",child:null},Hr={type:"childremoved",child:null};class Ee extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new C,e=new cn,n=new ui,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new qt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.multiply(yi),this}rotateOnWorldAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.premultiply(yi),this}rotateX(t){return this.rotateOnAxis(ic,t)}rotateY(t){return this.rotateOnAxis(sc,t)}rotateZ(t){return this.rotateOnAxis(rc,t)}translateOnAxis(t,e){return nc.copy(t).applyQuaternion(this.quaternion),this.position.add(nc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ic,t)}translateY(t){return this.translateOnAxis(sc,t)}translateZ(t){return this.translateOnAxis(rc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fs.copy(t):Fs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(es,Fs,this.up):Sn.lookAt(Fs,es,this.up),this.quaternion.setFromRotationMatrix(Sn),s&&(Sn.extractRotation(s.matrixWorld),yi.setFromRotationMatrix(Sn),this.quaternion.premultiply(yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(oc),Si.child=t,this.dispatchEvent(Si),Si.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(su),Hr.child=t,this.dispatchEvent(Hr),Hr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(oc),Si.child=t,this.dispatchEvent(Si),Si.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,t,nu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,iu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ee.DEFAULT_UP=new C(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new C,wn=new C,Gr=new C,En=new C,wi=new C,Ei=new C,ac=new C,Vr=new C,Wr=new C,Xr=new C,qr=new ce,Yr=new ce,Zr=new ce;class Je{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),nn.subVectors(t,e),s.cross(nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){nn.subVectors(s,e),wn.subVectors(n,e),Gr.subVectors(t,e);const o=nn.dot(nn),a=nn.dot(wn),c=nn.dot(Gr),l=wn.dot(wn),h=wn.dot(Gr),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,En)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,En.x),c.addScaledVector(o,En.y),c.addScaledVector(a,En.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return qr.setScalar(0),Yr.setScalar(0),Zr.setScalar(0),qr.fromBufferAttribute(t,e),Yr.fromBufferAttribute(t,n),Zr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(qr,r.x),o.addScaledVector(Yr,r.y),o.addScaledVector(Zr,r.z),o}static isFrontFacing(t,e,n,s){return nn.subVectors(n,e),wn.subVectors(t,e),nn.cross(wn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return nn.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),nn.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Je.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;wi.subVectors(s,n),Ei.subVectors(r,n),Vr.subVectors(t,n);const c=wi.dot(Vr),l=Ei.dot(Vr);if(c<=0&&l<=0)return e.copy(n);Wr.subVectors(t,s);const h=wi.dot(Wr),u=Ei.dot(Wr);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(wi,o);Xr.subVectors(t,r);const p=wi.dot(Xr),g=Ei.dot(Xr);if(g>=0&&p<=g)return e.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ei,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return ac.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(ac,a);const f=1/(m+_+d);return o=_*f,a=d*f,e.copy(n).addScaledVector(wi,o).addScaledVector(Ei,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const yl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Os={h:0,s:0,l:0};function $r(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=Gh(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=$r(o,r,t+1/3),this.g=$r(o,r,t),this.b=$r(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const n=yl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cn(t.r),this.g=Cn(t.g),this.b=Cn(t.b),this}copyLinearToSRGB(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return Qt.fromWorkingColorSpace(De.copy(this),t),Math.round(Re(De.r*255,0,255))*65536+Math.round(Re(De.g*255,0,255))*256+Math.round(Re(De.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(De.copy(this),e);const n=De.r,s=De.g,r=De.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=Ne){Qt.fromWorkingColorSpace(De.copy(this),t);const e=De.r,n=De.g,s=De.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Bn),this.setHSL(Bn.h+t,Bn.s+e,Bn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bn),t.getHSL(Os);const n=Ir(Bn.h,Os.h,e),s=Ir(Bn.s,Os.s,e),r=Ir(Bn.l,Os.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new Jt;Jt.NAMES=yl;let ru=0;class fi extends $i{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=Rn(),this.name="",this.blending=Bi,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wo,this.blendDst=Eo,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=Hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mi,this.stencilZFail=mi,this.stencilZPass=mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wo&&(n.blendSrc=this.blendSrc),this.blendDst!==Eo&&(n.blendDst=this.blendDst),this.blendEquation!==ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class rn extends fi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new C,Bs=new lt;class Pe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=aa,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Bs.fromBufferAttribute(this,e),Bs.applyMatrix3(t),this.setXY(e,Bs.x,Bs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==aa&&(t.usage=this.usage),t}}class Sl extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wl extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class he extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ou=0;const Ze=new le,Jr=new Ee,bi=new C,Ve=new di,ns=new di,Ae=new C;class Me extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vl(t)?wl:Sl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return Jr.lookAt(t),Jr.updateMatrix(),this.applyMatrix4(Jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bi).negate(),this.translate(bi.x,bi.y,bi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new he(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ve.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new br);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ns.setFromBufferAttribute(a),this.morphTargetsRelative?(Ae.addVectors(Ve.min,ns.min),Ve.expandByPoint(Ae),Ae.addVectors(Ve.max,ns.max),Ve.expandByPoint(Ae)):(Ve.expandByPoint(ns.min),Ve.expandByPoint(ns.max))}Ve.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ae.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ae));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ae.fromBufferAttribute(a,l),c&&(bi.fromBufferAttribute(t,l),Ae.add(bi)),s=Math.max(s,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new C,c[I]=new C;const l=new C,h=new C,u=new C,d=new lt,p=new lt,g=new lt,_=new C,m=new C;function f(I,E,S){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,I),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,S),h.sub(l),u.sub(l),p.sub(d),g.sub(d);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[I].add(_),a[E].add(_),a[S].add(_),c[I].add(m),c[E].add(m),c[S].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let I=0,E=M.length;I<E;++I){const S=M[I],P=S.start,G=S.count;for(let O=P,W=P+G;O<W;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const x=new C,v=new C,L=new C,T=new C;function A(I){L.fromBufferAttribute(s,I),T.copy(L);const E=a[I];x.copy(E),x.sub(L.multiplyScalar(L.dot(E))).normalize(),v.crossVectors(T,E);const P=v.dot(c[I])<0?-1:1;o.setXYZW(I,x.x,x.y,x.z,P)}for(let I=0,E=M.length;I<E;++I){const S=M[I],P=S.start,G=S.count;for(let O=P,W=P+G;O<W;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new C,r=new C,o=new C,a=new C,c=new C,l=new C,h=new C,u=new C;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new Pe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Me,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cc=new le,Jn=new wa,zs=new br,lc=new C,ks=new C,Hs=new C,Gs=new C,Kr=new C,Vs=new C,hc=new C,Ws=new C;class z extends Ee{constructor(t=new Me,e=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Vs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Kr.fromBufferAttribute(u,t),o?Vs.addScaledVector(Kr,h):Vs.addScaledVector(Kr.sub(e),h))}e.add(Vs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere),zs.applyMatrix4(r),Jn.copy(t.ray).recast(t.near),!(zs.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(zs,lc)===null||Jn.origin.distanceToSquared(lc)>(t.far-t.near)**2))&&(cc.copy(r).invert(),Jn.copy(t.ray).applyMatrix4(cc),!(n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Jn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=M,L=x;v<L;v+=3){const T=a.getX(v),A=a.getX(v+1),I=a.getX(v+2);s=Xs(this,f,t,n,l,h,u,T,A,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const M=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);s=Xs(this,o,t,n,l,h,u,M,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=M,L=x;v<L;v+=3){const T=v,A=v+1,I=v+2;s=Xs(this,f,t,n,l,h,u,T,A,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const M=m,x=m+1,v=m+2;s=Xs(this,o,t,n,l,h,u,M,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function au(i,t,e,n,s,r,o,a){let c;if(t.side===Be?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Xn,a),c===null)return null;Ws.copy(a),Ws.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ws);return l<e.near||l>e.far?null:{distance:l,point:Ws.clone(),object:i}}function Xs(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,ks),i.getVertexPosition(c,Hs),i.getVertexPosition(l,Gs);const h=au(i,t,e,n,ks,Hs,Gs,hc);if(h){const u=new C;Je.getBarycoord(hc,ks,Hs,Gs,u),s&&(h.uv=Je.getInterpolatedAttribute(s,a,c,l,u,new lt)),r&&(h.uv1=Je.getInterpolatedAttribute(r,a,c,l,u,new lt)),o&&(h.normal=Je.getInterpolatedAttribute(o,a,c,l,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new C,materialIndex:0};Je.getNormal(ks,Hs,Gs,d.normal),h.face=d,h.barycoord=u}return h}class Ot extends Me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(u,2));function g(_,m,f,M,x,v,L,T,A,I,E){const S=v/A,P=L/I,G=v/2,O=L/2,W=T/2,J=A+1,X=I+1;let tt=0,k=0;const at=new C;for(let pt=0;pt<X;pt++){const dt=pt*P-O;for(let bt=0;bt<J;bt++){const ot=bt*S-G;at[_]=ot*M,at[m]=dt*x,at[f]=W,l.push(at.x,at.y,at.z),at[_]=0,at[m]=0,at[f]=T>0?1:-1,h.push(at.x,at.y,at.z),u.push(bt/A),u.push(1-pt/I),tt+=1}}for(let pt=0;pt<I;pt++)for(let dt=0;dt<A;dt++){const bt=d+dt+J*pt,ot=d+dt+J*(pt+1),U=d+(dt+1)+J*(pt+1),Z=d+(dt+1)+J*pt;c.push(bt,ot,Z),c.push(ot,U,Z),k+=6}a.addGroup(p,k,E),p+=k,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ot(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function qi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Oe(i){const t={};for(let e=0;e<i.length;e++){const n=qi(i[e]);for(const s in n)t[s]=n[s]}return t}function cu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function El(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const lu={clone:qi,merge:Oe};var hu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends fi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hu,this.fragmentShader=uu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qi(t.uniforms),this.uniformsGroups=cu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class bl extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=An}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zn=new C,uc=new lt,dc=new lt;class Xe extends bl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ca*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ca*2*Math.atan(Math.tan(Lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zn.x,zn.y).multiplyScalar(-t/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-t/zn.z)}getViewSize(t,e){return this.getViewBounds(t,uc,dc),e.subVectors(dc,uc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Lr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ti=-90,Ai=1;class du extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Xe(Ti,Ai,t,e);s.layers=this.layers,this.add(s);const r=new Xe(Ti,Ai,t,e);r.layers=this.layers,this.add(r);const o=new Xe(Ti,Ai,t,e);o.layers=this.layers,this.add(o);const a=new Xe(Ti,Ai,t,e);a.layers=this.layers,this.add(a);const c=new Xe(Ti,Ai,t,e);c.layers=this.layers,this.add(c);const l=new Xe(Ti,Ai,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Tl extends ze{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Gi,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fu extends li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Tl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ot(5,5,5),r=new qn({name:"CubemapFromEquirect",uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:Vn});r.uniforms.tEquirect.value=e;const o=new z(s,r),a=e.minFilter;return e.minFilter===ai&&(e.minFilter=mn),new du(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const jr=new C,pu=new C,mu=new qt;class ti{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=jr.subVectors(n,e).cross(pu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(jr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||mu.getNormalMatrix(t),s=this.coplanarPoint(jr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kn=new br,qs=new C;class ba{constructor(t=new ti,e=new ti,n=new ti,s=new ti,r=new ti,o=new ti){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=An){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],M=s[13],x=s[14],v=s[15];if(n[0].setComponents(c-r,d-l,m-p,v-f).normalize(),n[1].setComponents(c+r,d+l,m+p,v+f).normalize(),n[2].setComponents(c+o,d+h,m+g,v+M).normalize(),n[3].setComponents(c-o,d-h,m-g,v-M).normalize(),n[4].setComponents(c-a,d-u,m-_,v-x).normalize(),e===An)n[5].setComponents(c+a,d+u,m+_,v+x).normalize();else if(e===xr)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(t){return Kn.center.set(0,0,0),Kn.radius=.7071067811865476,Kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(qs.x=s.normal.x>0?t.max.x:t.min.x,qs.y=s.normal.y>0?t.max.y:t.min.y,qs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Al(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function gu(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Ue extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const M=f*d-o;for(let x=0;x<l;x++){const v=x*u-r;g.push(v,-M,0),_.push(0,0,1),m.push(x/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<a;M++){const x=M+l*f,v=M+l*(f+1),L=M+1+l*(f+1),T=M+1+l*f;p.push(x,v,T),p.push(v,L,T)}this.setIndex(p),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(_,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ue(t.width,t.height,t.widthSegments,t.heightSegments)}}var _u=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vu=`#ifdef USE_ALPHAHASH
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
#endif`,xu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Su=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wu=`#ifdef USE_AOMAP
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
#endif`,Eu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bu=`#ifdef USE_BATCHING
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
#endif`,Tu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Au=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ru=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pu=`#ifdef USE_IRIDESCENCE
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
#endif`,Lu=`#ifdef USE_BUMPMAP
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
#endif`,Iu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Du=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ou=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ku=`#define PI 3.141592653589793
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
} // validated`,Hu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gu=`vec3 transformedNormal = objectNormal;
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
#endif`,Vu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$u=`#ifdef USE_ENVMAP
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
#endif`,Ju=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ku=`#ifdef USE_ENVMAP
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
#endif`,ju=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qu=`#ifdef USE_ENVMAP
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
#endif`,td=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ed=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,id=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sd=`#ifdef USE_GRADIENTMAP
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
}`,rd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,od=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cd=`uniform bool receiveShadow;
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
#endif`,ld=`#ifdef USE_ENVMAP
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
#endif`,hd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ud=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pd=`PhysicalMaterial material;
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
#endif`,md=`struct PhysicalMaterial {
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
}`,gd=`
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
#endif`,_d=`#if defined( RE_IndirectDiffuse )
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
#endif`,vd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Md=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ed=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Td=`#if defined( USE_POINTS_UV )
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
#endif`,Ad=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ld=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Id=`#ifdef USE_MORPHTARGETS
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
#endif`,Dd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ud=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Od=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zd=`#ifdef USE_NORMALMAP
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
#endif`,kd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$d=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ef=`float getShadowMask() {
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
}`,nf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sf=`#ifdef USE_SKINNING
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
#endif`,rf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,of=`#ifdef USE_SKINNING
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
#endif`,af=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uf=`#ifdef USE_TRANSMISSION
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
#endif`,df=`#ifdef USE_TRANSMISSION
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
#endif`,ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _f=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vf=`uniform sampler2D t2D;
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
}`,xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wf=`#include <common>
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
}`,Ef=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bf=`#define DISTANCE
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
}`,Tf=`#define DISTANCE
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
}`,Af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cf=`uniform float scale;
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
}`,Pf=`uniform vec3 diffuse;
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
}`,Lf=`#include <common>
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
}`,If=`uniform vec3 diffuse;
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
}`,Df=`#define LAMBERT
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
}`,Uf=`#define LAMBERT
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
}`,Nf=`#define MATCAP
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
}`,Ff=`#define MATCAP
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
}`,Of=`#define NORMAL
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
}`,Bf=`#define NORMAL
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
}`,zf=`#define PHONG
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
}`,kf=`#define PHONG
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
}`,Hf=`#define STANDARD
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
}`,Gf=`#define STANDARD
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
}`,Vf=`#define TOON
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
}`,Wf=`#define TOON
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
}`,Xf=`uniform float size;
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
}`,qf=`uniform vec3 diffuse;
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
}`,Yf=`#include <common>
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
}`,Zf=`uniform vec3 color;
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
}`,$f=`uniform float rotation;
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
}`,Jf=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:_u,alphahash_pars_fragment:vu,alphamap_fragment:xu,alphamap_pars_fragment:Mu,alphatest_fragment:yu,alphatest_pars_fragment:Su,aomap_fragment:wu,aomap_pars_fragment:Eu,batching_pars_vertex:bu,batching_vertex:Tu,begin_vertex:Au,beginnormal_vertex:Ru,bsdfs:Cu,iridescence_fragment:Pu,bumpmap_pars_fragment:Lu,clipping_planes_fragment:Iu,clipping_planes_pars_fragment:Du,clipping_planes_pars_vertex:Uu,clipping_planes_vertex:Nu,color_fragment:Fu,color_pars_fragment:Ou,color_pars_vertex:Bu,color_vertex:zu,common:ku,cube_uv_reflection_fragment:Hu,defaultnormal_vertex:Gu,displacementmap_pars_vertex:Vu,displacementmap_vertex:Wu,emissivemap_fragment:Xu,emissivemap_pars_fragment:qu,colorspace_fragment:Yu,colorspace_pars_fragment:Zu,envmap_fragment:$u,envmap_common_pars_fragment:Ju,envmap_pars_fragment:Ku,envmap_pars_vertex:ju,envmap_physical_pars_fragment:ld,envmap_vertex:Qu,fog_vertex:td,fog_pars_vertex:ed,fog_fragment:nd,fog_pars_fragment:id,gradientmap_pars_fragment:sd,lightmap_pars_fragment:rd,lights_lambert_fragment:od,lights_lambert_pars_fragment:ad,lights_pars_begin:cd,lights_toon_fragment:hd,lights_toon_pars_fragment:ud,lights_phong_fragment:dd,lights_phong_pars_fragment:fd,lights_physical_fragment:pd,lights_physical_pars_fragment:md,lights_fragment_begin:gd,lights_fragment_maps:_d,lights_fragment_end:vd,logdepthbuf_fragment:xd,logdepthbuf_pars_fragment:Md,logdepthbuf_pars_vertex:yd,logdepthbuf_vertex:Sd,map_fragment:wd,map_pars_fragment:Ed,map_particle_fragment:bd,map_particle_pars_fragment:Td,metalnessmap_fragment:Ad,metalnessmap_pars_fragment:Rd,morphinstance_vertex:Cd,morphcolor_vertex:Pd,morphnormal_vertex:Ld,morphtarget_pars_vertex:Id,morphtarget_vertex:Dd,normal_fragment_begin:Ud,normal_fragment_maps:Nd,normal_pars_fragment:Fd,normal_pars_vertex:Od,normal_vertex:Bd,normalmap_pars_fragment:zd,clearcoat_normal_fragment_begin:kd,clearcoat_normal_fragment_maps:Hd,clearcoat_pars_fragment:Gd,iridescence_pars_fragment:Vd,opaque_fragment:Wd,packing:Xd,premultiplied_alpha_fragment:qd,project_vertex:Yd,dithering_fragment:Zd,dithering_pars_fragment:$d,roughnessmap_fragment:Jd,roughnessmap_pars_fragment:Kd,shadowmap_pars_fragment:jd,shadowmap_pars_vertex:Qd,shadowmap_vertex:tf,shadowmask_pars_fragment:ef,skinbase_vertex:nf,skinning_pars_vertex:sf,skinning_vertex:rf,skinnormal_vertex:of,specularmap_fragment:af,specularmap_pars_fragment:cf,tonemapping_fragment:lf,tonemapping_pars_fragment:hf,transmission_fragment:uf,transmission_pars_fragment:df,uv_pars_fragment:ff,uv_pars_vertex:pf,uv_vertex:mf,worldpos_vertex:gf,background_vert:_f,background_frag:vf,backgroundCube_vert:xf,backgroundCube_frag:Mf,cube_vert:yf,cube_frag:Sf,depth_vert:wf,depth_frag:Ef,distanceRGBA_vert:bf,distanceRGBA_frag:Tf,equirect_vert:Af,equirect_frag:Rf,linedashed_vert:Cf,linedashed_frag:Pf,meshbasic_vert:Lf,meshbasic_frag:If,meshlambert_vert:Df,meshlambert_frag:Uf,meshmatcap_vert:Nf,meshmatcap_frag:Ff,meshnormal_vert:Of,meshnormal_frag:Bf,meshphong_vert:zf,meshphong_frag:kf,meshphysical_vert:Hf,meshphysical_frag:Gf,meshtoon_vert:Vf,meshtoon_frag:Wf,points_vert:Xf,points_frag:qf,shadow_vert:Yf,shadow_frag:Zf,sprite_vert:$f,sprite_frag:Jf},_t={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},dn={basic:{uniforms:Oe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Oe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Oe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Oe([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Oe([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Oe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Oe([_t.points,_t.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Oe([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Oe([_t.common,_t.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Oe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Oe([_t.sprite,_t.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:Oe([_t.common,_t.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:Oe([_t.lights,_t.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};dn.physical={uniforms:Oe([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const Ys={r:0,b:0,g:0},jn=new cn,Kf=new le;function jf(i,t,e,n,s,r,o){const a=new Jt(0);let c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function _(M){let x=!1;const v=g(M);v===null?f(a,c):v&&v.isColor&&(f(v,1),x=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===wr)?(h===void 0&&(h=new z(new Ot(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:qi(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),jn.copy(x.backgroundRotation),jn.x*=-1,jn.y*=-1,jn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Kf.makeRotationFromEuler(jn)),h.material.toneMapped=Qt.getTransfer(v.colorSpace)!==re,(u!==v||d!==v.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new z(new Ue(2,2),new qn({name:"BackgroundMaterial",uniforms:qi(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(v.colorSpace)!==re,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function f(M,x){M.getRGB(Ys,El(i)),n.buffers.color.setClear(Ys.r,Ys.g,Ys.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),c=x,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,f(a,c)},render:_,addToRenderList:m}}function Qf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(S,P,G,O,W){let J=!1;const X=u(O,G,P);r!==X&&(r=X,l(r.object)),J=p(S,O,G,W),J&&g(S,O,G,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,v(S,P,G,O),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,P,G){const O=G.wireframe===!0;let W=n[S.id];W===void 0&&(W={},n[S.id]=W);let J=W[P.id];J===void 0&&(J={},W[P.id]=J);let X=J[O];return X===void 0&&(X=d(c()),J[O]=X),X}function d(S){const P=[],G=[],O=[];for(let W=0;W<e;W++)P[W]=0,G[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:G,attributeDivisors:O,object:S,attributes:{},index:null}}function p(S,P,G,O){const W=r.attributes,J=P.attributes;let X=0;const tt=G.getAttributes();for(const k in tt)if(tt[k].location>=0){const pt=W[k];let dt=J[k];if(dt===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(dt=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(dt=S.instanceColor)),pt===void 0||pt.attribute!==dt||dt&&pt.data!==dt.data)return!0;X++}return r.attributesNum!==X||r.index!==O}function g(S,P,G,O){const W={},J=P.attributes;let X=0;const tt=G.getAttributes();for(const k in tt)if(tt[k].location>=0){let pt=J[k];pt===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(pt=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(pt=S.instanceColor));const dt={};dt.attribute=pt,pt&&pt.data&&(dt.data=pt.data),W[k]=dt,X++}r.attributes=W,r.attributesNum=X,r.index=O}function _(){const S=r.newAttributes;for(let P=0,G=S.length;P<G;P++)S[P]=0}function m(S){f(S,0)}function f(S,P){const G=r.newAttributes,O=r.enabledAttributes,W=r.attributeDivisors;G[S]=1,O[S]===0&&(i.enableVertexAttribArray(S),O[S]=1),W[S]!==P&&(i.vertexAttribDivisor(S,P),W[S]=P)}function M(){const S=r.newAttributes,P=r.enabledAttributes;for(let G=0,O=P.length;G<O;G++)P[G]!==S[G]&&(i.disableVertexAttribArray(G),P[G]=0)}function x(S,P,G,O,W,J,X){X===!0?i.vertexAttribIPointer(S,P,G,W,J):i.vertexAttribPointer(S,P,G,O,W,J)}function v(S,P,G,O){_();const W=O.attributes,J=G.getAttributes(),X=P.defaultAttributeValues;for(const tt in J){const k=J[tt];if(k.location>=0){let at=W[tt];if(at===void 0&&(tt==="instanceMatrix"&&S.instanceMatrix&&(at=S.instanceMatrix),tt==="instanceColor"&&S.instanceColor&&(at=S.instanceColor)),at!==void 0){const pt=at.normalized,dt=at.itemSize,bt=t.get(at);if(bt===void 0)continue;const ot=bt.buffer,U=bt.type,Z=bt.bytesPerElement,ht=U===i.INT||U===i.UNSIGNED_INT||at.gpuType===_a;if(at.isInterleavedBufferAttribute){const it=at.data,mt=it.stride,zt=at.offset;if(it.isInstancedInterleavedBuffer){for(let Bt=0;Bt<k.locationSize;Bt++)f(k.location+Bt,it.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Bt=0;Bt<k.locationSize;Bt++)m(k.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let Bt=0;Bt<k.locationSize;Bt++)x(k.location+Bt,dt/k.locationSize,U,pt,mt*Z,(zt+dt/k.locationSize*Bt)*Z,ht)}else{if(at.isInstancedBufferAttribute){for(let it=0;it<k.locationSize;it++)f(k.location+it,at.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let it=0;it<k.locationSize;it++)m(k.location+it);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let it=0;it<k.locationSize;it++)x(k.location+it,dt/k.locationSize,U,pt,dt*Z,dt/k.locationSize*it*Z,ht)}}else if(X!==void 0){const pt=X[tt];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(k.location,pt);break;case 3:i.vertexAttrib3fv(k.location,pt);break;case 4:i.vertexAttrib4fv(k.location,pt);break;default:i.vertexAttrib1fv(k.location,pt)}}}}M()}function L(){I();for(const S in n){const P=n[S];for(const G in P){const O=P[G];for(const W in O)h(O[W].object),delete O[W];delete P[G]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const G in P){const O=P[G];for(const W in O)h(O[W].object),delete O[W];delete P[G]}delete n[S.id]}function A(S){for(const P in n){const G=n[P];if(G[S.id]===void 0)continue;const O=G[S.id];for(const W in O)h(O[W].object),delete O[W];delete G[S.id]}}function I(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function tp(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function c(l,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function ep(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==on&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const I=A===Ts&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Pn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Tn&&!I)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:L,maxSamples:T}}function np(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ti,a=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const M=r?0:n,x=M*4;let v=f.clippingState||null;c.value=v,v=h(g,d,x,p);for(let L=0;L!==x;++L)v[L]=e[L];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,v=p;x!==_;++x,v+=4)o.copy(u[x]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function ip(i){let t=new WeakMap;function e(o,a){return a===Io?o.mapping=Gi:a===Do&&(o.mapping=Vi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Io||a===Do)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new fu(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Rl extends bl{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Fi=4,fc=[.125,.215,.35,.446,.526,.582],si=20,Qr=new Rl,pc=new Jt;let to=null,eo=0,no=0,io=!1;const ei=(1+Math.sqrt(5))/2,Ri=1/ei,mc=[new C(-ei,Ri,0),new C(ei,Ri,0),new C(-Ri,0,ei),new C(Ri,0,ei),new C(0,ei,-Ri),new C(0,ei,Ri),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class gc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){to=this._renderer.getRenderTarget(),eo=this._renderer.getActiveCubeFace(),no=this._renderer.getActiveMipmapLevel(),io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(to,eo,no),this._renderer.xr.enabled=io,t.scissorTest=!1,Zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gi||t.mapping===Vi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),to=this._renderer.getRenderTarget(),eo=this._renderer.getActiveCubeFace(),no=this._renderer.getActiveMipmapLevel(),io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Ts,format:on,colorSpace:Zi,depthBuffer:!1},s=_c(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_c(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sp(r)),this._blurMaterial=rp(r,t,e)}return s}_compileMaterial(t){const e=new z(this._lodPlanes[0],t);this._renderer.compile(e,Qr)}_sceneToCubeUV(t,e,n,s){const a=new Xe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(pc),h.toneMapping=Wn,h.autoClear=!1;const p=new rn({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),g=new z(new Ot,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(pc),_=!0);for(let f=0;f<6;f++){const M=f%3;M===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):M===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const x=this._cubeSize;Zs(s,M*x,f>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Gi||t.mapping===Vi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new z(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Zs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Qr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=mc[(s-r-1)%mc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new z(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*si-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):si;m>si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${si}`);const f=[];let M=0;for(let A=0;A<si;++A){const I=A/_,E=Math.exp(-I*I/2);f.push(E),A===0?M+=E:A<m&&(M+=2*E)}for(let A=0;A<f.length;A++)f[A]=f[A]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const v=this._sizeLods[s],L=3*v*(s>x-Fi?s-x+Fi:0),T=4*(this._cubeSize-v);Zs(e,L,T,3*v,2*v),c.setRenderTarget(e),c.render(u,Qr)}}function sp(i){const t=[],e=[],n=[];let s=i;const r=i-Fi+1+fc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Fi?c=fc[o-i+Fi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,M=new Float32Array(_*g*p),x=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,I=T>2?0:-1,E=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];M.set(E,_*g*T),x.set(d,m*g*T);const S=[T,T,T,T,T,T];v.set(S,f*g*T)}const L=new Me;L.setAttribute("position",new Pe(M,_)),L.setAttribute("uv",new Pe(x,m)),L.setAttribute("faceIndex",new Pe(v,f)),t.push(L),s>Fi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function _c(i,t,e){const n=new li(i,t,e);return n.texture.mapping=wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function rp(i,t,e){const n=new Float32Array(si),s=new C(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ta(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function vc(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ta(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function xc(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Ta(){return`

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
	`}function op(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Io||c===Do,h=c===Gi||c===Vi;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new gc(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new gc(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ap(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&cs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function cp(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let x=0,v=M.length;x<v;x+=3){const L=M[x+0],T=M[x+1],A=M[x+2];d.push(L,T,T,A,A,L)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,v=M.length/3-1;x<v;x+=3){const L=x+0,T=x+1,A=x+2;d.push(L,T,T,A,A,L)}}else return;const m=new(vl(d)?wl:Sl)(d,1);m.version=_;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function lp(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function l(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let M=0;M<g;M++)f+=p[M]*_[M];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function hp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function up(i,t,e){const n=new WeakMap,s=new ce;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let L=a.attributes.position.count*v,T=1;L>t.maxTextureSize&&(T=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const A=new Float32Array(L*T*4*u),I=new Ml(A,L,T,u);I.type=Tn,I.needsUpdate=!0;const E=v*4;for(let P=0;P<u;P++){const G=f[P],O=M[P],W=x[P],J=L*T*4*P;for(let X=0;X<G.count;X++){const tt=X*E;g===!0&&(s.fromBufferAttribute(G,X),A[J+tt+0]=s.x,A[J+tt+1]=s.y,A[J+tt+2]=s.z,A[J+tt+3]=0),_===!0&&(s.fromBufferAttribute(O,X),A[J+tt+4]=s.x,A[J+tt+5]=s.y,A[J+tt+6]=s.z,A[J+tt+7]=0),m===!0&&(s.fromBufferAttribute(W,X),A[J+tt+8]=s.x,A[J+tt+9]=s.y,A[J+tt+10]=s.z,A[J+tt+11]=W.itemSize===4?s.w:1)}}d={count:u,texture:I,size:new lt(L,T)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function dp(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Cl extends ze{constructor(t,e,n,s,r,o,a,c,l,h=zi){if(h!==zi&&h!==Xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zi&&(n=ci),n===void 0&&h===Xi&&(n=Wi),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:an,this.minFilter=c!==void 0?c:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Pl=new ze,Mc=new Cl(1,1),Ll=new Ml,Il=new Kh,Dl=new Tl,yc=[],Sc=[],wc=new Float32Array(16),Ec=new Float32Array(9),bc=new Float32Array(4);function Ji(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=yc[s];if(r===void 0&&(r=new Float32Array(s),yc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Tr(i,t){let e=Sc[t];e===void 0&&(e=new Int32Array(t),Sc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function fp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function gp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function _p(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(be(e,n))return;bc.set(n),i.uniformMatrix2fv(this.addr,!1,bc),Te(e,n)}}function vp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(be(e,n))return;Ec.set(n),i.uniformMatrix3fv(this.addr,!1,Ec),Te(e,n)}}function xp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(be(e,n))return;wc.set(n),i.uniformMatrix4fv(this.addr,!1,wc),Te(e,n)}}function Mp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function Sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function wp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function Ep(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function bp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function Tp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function Ap(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function Rp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Mc.compareFunction=_l,r=Mc):r=Pl,e.setTexture2D(t||r,s)}function Cp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Il,s)}function Pp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Dl,s)}function Lp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ll,s)}function Ip(i){switch(i){case 5126:return fp;case 35664:return pp;case 35665:return mp;case 35666:return gp;case 35674:return _p;case 35675:return vp;case 35676:return xp;case 5124:case 35670:return Mp;case 35667:case 35671:return yp;case 35668:case 35672:return Sp;case 35669:case 35673:return wp;case 5125:return Ep;case 36294:return bp;case 36295:return Tp;case 36296:return Ap;case 35678:case 36198:case 36298:case 36306:case 35682:return Rp;case 35679:case 36299:case 36307:return Cp;case 35680:case 36300:case 36308:case 36293:return Pp;case 36289:case 36303:case 36311:case 36292:return Lp}}function Dp(i,t){i.uniform1fv(this.addr,t)}function Up(i,t){const e=Ji(t,this.size,2);i.uniform2fv(this.addr,e)}function Np(i,t){const e=Ji(t,this.size,3);i.uniform3fv(this.addr,e)}function Fp(i,t){const e=Ji(t,this.size,4);i.uniform4fv(this.addr,e)}function Op(i,t){const e=Ji(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Bp(i,t){const e=Ji(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function zp(i,t){const e=Ji(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function kp(i,t){i.uniform1iv(this.addr,t)}function Hp(i,t){i.uniform2iv(this.addr,t)}function Gp(i,t){i.uniform3iv(this.addr,t)}function Vp(i,t){i.uniform4iv(this.addr,t)}function Wp(i,t){i.uniform1uiv(this.addr,t)}function Xp(i,t){i.uniform2uiv(this.addr,t)}function qp(i,t){i.uniform3uiv(this.addr,t)}function Yp(i,t){i.uniform4uiv(this.addr,t)}function Zp(i,t,e){const n=this.cache,s=t.length,r=Tr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Pl,r[o])}function $p(i,t,e){const n=this.cache,s=t.length,r=Tr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Il,r[o])}function Jp(i,t,e){const n=this.cache,s=t.length,r=Tr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Dl,r[o])}function Kp(i,t,e){const n=this.cache,s=t.length,r=Tr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ll,r[o])}function jp(i){switch(i){case 5126:return Dp;case 35664:return Up;case 35665:return Np;case 35666:return Fp;case 35674:return Op;case 35675:return Bp;case 35676:return zp;case 5124:case 35670:return kp;case 35667:case 35671:return Hp;case 35668:case 35672:return Gp;case 35669:case 35673:return Vp;case 5125:return Wp;case 36294:return Xp;case 36295:return qp;case 36296:return Yp;case 35678:case 36198:case 36298:case 36306:case 35682:return Zp;case 35679:case 36299:case 36307:return $p;case 35680:case 36300:case 36308:case 36293:return Jp;case 36289:case 36303:case 36311:case 36292:return Kp}}class Qp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ip(e.type)}}class tm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jp(e.type)}}class em{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const so=/(\w+)(\])?(\[|\.)?/g;function Tc(i,t){i.seq.push(t),i.map[t.id]=t}function nm(i,t,e){const n=i.name,s=n.length;for(so.lastIndex=0;;){const r=so.exec(n),o=so.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Tc(e,l===void 0?new Qp(a,i,t):new tm(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new em(a),Tc(e,u)),e=u}}}class dr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);nm(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Ac(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const im=37297;let sm=0;function rm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Rc=new qt;function om(i){Qt._getMatrix(Rc,Qt.workingColorSpace,i);const t=`mat3( ${Rc.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case Er:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Cc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+rm(i.getShaderSource(t),o)}else return s}function am(i,t){const e=om(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function cm(i,t){let e;switch(t){case bh:e="Linear";break;case Th:e="Reinhard";break;case Ah:e="Cineon";break;case sl:e="ACESFilmic";break;case Ch:e="AgX";break;case Ph:e="Neutral";break;case Rh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const $s=new C;function lm(){Qt.getLuminanceCoefficients($s);const i=$s.x.toFixed(4),t=$s.y.toFixed(4),e=$s.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ls).join(`
`)}function um(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function dm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ls(i){return i!==""}function Pc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fm=/^[ \t]*#include +<([\w\d./]+)>/gm;function la(i){return i.replace(fm,mm)}const pm=new Map;function mm(i,t){let e=Zt[t];if(e===void 0){const n=pm.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return la(e)}const gm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ic(i){return i.replace(gm,_m)}function _m(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Dc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function vm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===el?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===nl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===bn&&(t="SHADOWMAP_TYPE_VSM"),t}function xm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gi:case Vi:t="ENVMAP_TYPE_CUBE";break;case wr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Mm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Vi:t="ENVMAP_MODE_REFRACTION";break}return t}function ym(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case il:t="ENVMAP_BLENDING_MULTIPLY";break;case wh:t="ENVMAP_BLENDING_MIX";break;case Eh:t="ENVMAP_BLENDING_ADD";break}return t}function Sm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function wm(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=vm(e),l=xm(e),h=Mm(e),u=ym(e),d=Sm(e),p=hm(e),g=um(r),_=s.createProgram();let m,f,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ls).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ls).join(`
`),f.length>0&&(f+=`
`)):(m=[Dc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),f=[Dc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wn?"#define TONE_MAPPING":"",e.toneMapping!==Wn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Wn?cm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,am("linearToOutputTexel",e.outputColorSpace),lm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ls).join(`
`)),o=la(o),o=Pc(o,e),o=Lc(o,e),a=la(a),a=Pc(a,e),a=Lc(a,e),o=Ic(o),a=Ic(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===qa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=M+m+o,v=M+f+a,L=Ac(s,s.VERTEX_SHADER,x),T=Ac(s,s.FRAGMENT_SHADER,v);s.attachShader(_,L),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(P){if(i.debug.checkShaderErrors){const G=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(L).trim(),W=s.getShaderInfoLog(T).trim();let J=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,L,T);else{const tt=Cc(s,L,"vertex"),k=Cc(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+tt+`
`+k)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(O===""||W==="")&&(X=!1);X&&(P.diagnostics={runnable:J,programLog:G,vertexShader:{log:O,prefix:m},fragmentShader:{log:W,prefix:f}})}s.deleteShader(L),s.deleteShader(T),I=new dr(s,_),E=dm(s,_)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,im)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=T,this}let Em=0;class bm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Tm(t),e.set(t,n)),n}}class Tm{constructor(t){this.id=Em++,this.code=t,this.usedTimes=0}}function Am(i,t,e,n,s,r,o){const a=new Ea,c=new bm,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,S,P,G,O){const W=G.fog,J=O.geometry,X=E.isMeshStandardMaterial?G.environment:null,tt=(E.isMeshStandardMaterial?e:t).get(E.envMap||X),k=tt&&tt.mapping===wr?tt.image.height:null,at=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const pt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,dt=pt!==void 0?pt.length:0;let bt=0;J.morphAttributes.position!==void 0&&(bt=1),J.morphAttributes.normal!==void 0&&(bt=2),J.morphAttributes.color!==void 0&&(bt=3);let ot,U,Z,ht;if(at){const se=dn[at];ot=se.vertexShader,U=se.fragmentShader}else ot=E.vertexShader,U=E.fragmentShader,c.update(E),Z=c.getVertexShaderID(E),ht=c.getFragmentShaderID(E);const it=i.getRenderTarget(),mt=i.state.buffers.depth.getReversed(),zt=O.isInstancedMesh===!0,Bt=O.isBatchedMesh===!0,gt=!!E.map,q=!!E.matcap,st=!!tt,R=!!E.aoMap,Tt=!!E.lightMap,Q=!!E.bumpMap,vt=!!E.normalMap,rt=!!E.displacementMap,Nt=!!E.emissiveMap,yt=!!E.metalnessMap,b=!!E.roughnessMap,y=E.anisotropy>0,B=E.clearcoat>0,K=E.dispersion>0,nt=E.iridescence>0,j=E.sheen>0,Lt=E.transmission>0,xt=y&&!!E.anisotropyMap,At=B&&!!E.clearcoatMap,$t=B&&!!E.clearcoatNormalMap,ct=B&&!!E.clearcoatRoughnessMap,Rt=nt&&!!E.iridescenceMap,kt=nt&&!!E.iridescenceThicknessMap,Ht=j&&!!E.sheenColorMap,Ct=j&&!!E.sheenRoughnessMap,Kt=!!E.specularMap,Yt=!!E.specularColorMap,ue=!!E.specularIntensityMap,D=Lt&&!!E.transmissionMap,Mt=Lt&&!!E.thicknessMap,$=!!E.gradientMap,et=!!E.alphaMap,Et=E.alphaTest>0,St=!!E.alphaHash,Wt=!!E.extensions;let _e=Wn;E.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(_e=i.toneMapping);const Le={shaderID:at,shaderType:E.type,shaderName:E.name,vertexShader:ot,fragmentShader:U,defines:E.defines,customVertexShaderID:Z,customFragmentShaderID:ht,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Bt,batchingColor:Bt&&O._colorsTexture!==null,instancing:zt,instancingColor:zt&&O.instanceColor!==null,instancingMorph:zt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Zi,alphaToCoverage:!!E.alphaToCoverage,map:gt,matcap:q,envMap:st,envMapMode:st&&tt.mapping,envMapCubeUVHeight:k,aoMap:R,lightMap:Tt,bumpMap:Q,normalMap:vt,displacementMap:d&&rt,emissiveMap:Nt,normalMapObjectSpace:vt&&E.normalMapType===Uh,normalMapTangentSpace:vt&&E.normalMapType===gl,metalnessMap:yt,roughnessMap:b,anisotropy:y,anisotropyMap:xt,clearcoat:B,clearcoatMap:At,clearcoatNormalMap:$t,clearcoatRoughnessMap:ct,dispersion:K,iridescence:nt,iridescenceMap:Rt,iridescenceThicknessMap:kt,sheen:j,sheenColorMap:Ht,sheenRoughnessMap:Ct,specularMap:Kt,specularColorMap:Yt,specularIntensityMap:ue,transmission:Lt,transmissionMap:D,thicknessMap:Mt,gradientMap:$,opaque:E.transparent===!1&&E.blending===Bi&&E.alphaToCoverage===!1,alphaMap:et,alphaTest:Et,alphaHash:St,combine:E.combine,mapUv:gt&&_(E.map.channel),aoMapUv:R&&_(E.aoMap.channel),lightMapUv:Tt&&_(E.lightMap.channel),bumpMapUv:Q&&_(E.bumpMap.channel),normalMapUv:vt&&_(E.normalMap.channel),displacementMapUv:rt&&_(E.displacementMap.channel),emissiveMapUv:Nt&&_(E.emissiveMap.channel),metalnessMapUv:yt&&_(E.metalnessMap.channel),roughnessMapUv:b&&_(E.roughnessMap.channel),anisotropyMapUv:xt&&_(E.anisotropyMap.channel),clearcoatMapUv:At&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:$t&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&_(E.sheenRoughnessMap.channel),specularMapUv:Kt&&_(E.specularMap.channel),specularColorMapUv:Yt&&_(E.specularColorMap.channel),specularIntensityMapUv:ue&&_(E.specularIntensityMap.channel),transmissionMapUv:D&&_(E.transmissionMap.channel),thicknessMapUv:Mt&&_(E.thicknessMap.channel),alphaMapUv:et&&_(E.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(vt||y),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!J.attributes.uv&&(gt||et),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:mt,skinning:O.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:bt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:_e,decodeVideoTexture:gt&&E.map.isVideoTexture===!0&&Qt.getTransfer(E.map.colorSpace)===re,decodeVideoTextureEmissive:Nt&&E.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(E.emissiveMap.colorSpace)===re,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===fn,flipSided:E.side===Be,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Wt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&E.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function f(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)S.push(P),S.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(M(S,E),x(S,E),S.push(i.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function M(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function x(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function v(E){const S=g[E.type];let P;if(S){const G=dn[S];P=lu.clone(G.uniforms)}else P=E.uniforms;return P}function L(E,S){let P;for(let G=0,O=h.length;G<O;G++){const W=h[G];if(W.cacheKey===S){P=W,++P.usedTimes;break}}return P===void 0&&(P=new wm(i,S,E,r),h.push(P)),P}function T(E){if(--E.usedTimes===0){const S=h.indexOf(E);h[S]=h[h.length-1],h.pop(),E.destroy()}}function A(E){c.remove(E)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:L,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:I}}function Rm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Cm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Uc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Nc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,g,_,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function a(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||Cm),n.length>1&&n.sort(d||Uc),s.length>1&&s.sort(d||Uc)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Pm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Nc,i.set(n,[o])):s>=r.length?(o=new Nc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Lm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Jt};break;case"SpotLight":e={position:new C,direction:new C,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function Im(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Dm=0;function Um(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Nm(i){const t=new Lm,e=Im(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);const s=new C,r=new le,o=new le;function a(l){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,M=0,x=0,v=0,L=0,T=0,A=0;l.sort(Um);for(let E=0,S=l.length;E<S;E++){const P=l[E],G=P.color,O=P.intensity,W=P.distance,J=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=G.r*O,u+=G.g*O,d+=G.b*O;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],O);A++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const tt=P.shadow,k=e.get(P);k.shadowIntensity=tt.intensity,k.shadowBias=tt.bias,k.shadowNormalBias=tt.normalBias,k.shadowRadius=tt.radius,k.shadowMapSize=tt.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=P.shadow.matrix,M++}n.directional[p]=X,p++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(G).multiplyScalar(O),X.distance=W,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[_]=X;const tt=P.shadow;if(P.map&&(n.spotLightMap[L]=P.map,L++,tt.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[_]=tt.matrix,P.castShadow){const k=e.get(P);k.shadowIntensity=tt.intensity,k.shadowBias=tt.bias,k.shadowNormalBias=tt.normalBias,k.shadowRadius=tt.radius,k.shadowMapSize=tt.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=J,v++}_++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(G).multiplyScalar(O),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=X,m++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const tt=P.shadow,k=e.get(P);k.shadowIntensity=tt.intensity,k.shadowBias=tt.bias,k.shadowNormalBias=tt.normalBias,k.shadowRadius=tt.radius,k.shadowMapSize=tt.mapSize,k.shadowCameraNear=tt.camera.near,k.shadowCameraFar=tt.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=P.shadow.matrix,x++}n.point[g]=X,g++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(O),X.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[f]=X,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==f||I.numDirectionalShadows!==M||I.numPointShadows!==x||I.numSpotShadows!==v||I.numSpotMaps!==L||I.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+L-T,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,I.directionalLength=p,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=f,I.numDirectionalShadows=M,I.numPointShadows=x,I.numSpotShadows=v,I.numSpotMaps=L,I.numLightProbes=A,n.version=Dm++)}function c(l,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,M=l.length;f<M;f++){const x=l[f];if(x.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(x.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Fc(i){const t=new Nm(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Fm(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Fc(i),t.set(s,[a])):r>=o.length?(a=new Fc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Om extends fi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ih,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Bm extends fi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const zm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,km=`uniform sampler2D shadow_pass;
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
}`;function Hm(i,t,e){let n=new ba;const s=new lt,r=new lt,o=new ce,a=new Om({depthPacking:Dh}),c=new Bm,l={},h=e.maxTextureSize,u={[Xn]:Be,[Be]:Xn,[fn]:fn},d=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:zm,fragmentShader:km}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Me;g.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new z(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=el;let f=this.type;this.render=function(T,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const E=i.getRenderTarget(),S=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Vn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const O=f!==bn&&this.type===bn,W=f===bn&&this.type!==bn;for(let J=0,X=T.length;J<X;J++){const tt=T[J],k=tt.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const at=k.getFrameExtents();if(s.multiply(at),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/at.x),s.x=r.x*at.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/at.y),s.y=r.y*at.y,k.mapSize.y=r.y)),k.map===null||O===!0||W===!0){const dt=this.type!==bn?{minFilter:an,magFilter:an}:{};k.map!==null&&k.map.dispose(),k.map=new li(s.x,s.y,dt),k.map.texture.name=tt.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const pt=k.getViewportCount();for(let dt=0;dt<pt;dt++){const bt=k.getViewport(dt);o.set(r.x*bt.x,r.y*bt.y,r.x*bt.z,r.y*bt.w),G.viewport(o),k.updateMatrices(tt,dt),n=k.getFrustum(),v(A,I,k.camera,tt,this.type)}k.isPointLightShadow!==!0&&this.type===bn&&M(k,I),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(E,S,P)};function M(T,A){const I=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new li(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,I,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,I,p,_,null)}function x(T,A,I,E){let S=null;const P=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)S=P;else if(S=I.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=S.uuid,O=A.uuid;let W=l[G];W===void 0&&(W={},l[G]=W);let J=W[O];J===void 0&&(J=S.clone(),W[O]=J,A.addEventListener("dispose",L)),S=J}if(S.visible=A.visible,S.wireframe=A.wireframe,E===bn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const G=i.properties.get(S);G.light=I}return S}function v(T,A,I,E,S){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===bn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const O=t.update(T),W=T.material;if(Array.isArray(W)){const J=O.groups;for(let X=0,tt=J.length;X<tt;X++){const k=J[X],at=W[k.materialIndex];if(at&&at.visible){const pt=x(T,at,E,S);T.onBeforeShadow(i,T,A,I,O,pt,k),i.renderBufferDirect(I,null,O,pt,T,k),T.onAfterShadow(i,T,A,I,O,pt,k)}}}else if(W.visible){const J=x(T,W,E,S);T.onBeforeShadow(i,T,A,I,O,J,null),i.renderBufferDirect(I,null,O,J,T,null),T.onAfterShadow(i,T,A,I,O,J,null)}}const G=T.children;for(let O=0,W=G.length;O<W;O++)v(G[O],A,I,E,S)}function L(T){T.target.removeEventListener("dispose",L);for(const I in l){const E=l[I],S=T.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const Gm={[bo]:To,[Ao]:Po,[Ro]:Lo,[Hi]:Co,[To]:bo,[Po]:Ao,[Lo]:Ro,[Co]:Hi};function Vm(i,t){function e(){let D=!1;const Mt=new ce;let $=null;const et=new ce(0,0,0,0);return{setMask:function(Et){$!==Et&&!D&&(i.colorMask(Et,Et,Et,Et),$=Et)},setLocked:function(Et){D=Et},setClear:function(Et,St,Wt,_e,Le){Le===!0&&(Et*=_e,St*=_e,Wt*=_e),Mt.set(Et,St,Wt,_e),et.equals(Mt)===!1&&(i.clearColor(Et,St,Wt,_e),et.copy(Mt))},reset:function(){D=!1,$=null,et.set(-1,0,0,0)}}}function n(){let D=!1,Mt=!1,$=null,et=null,Et=null;return{setReversed:function(St){if(Mt!==St){const Wt=t.get("EXT_clip_control");Mt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);const _e=Et;Et=null,this.setClear(_e)}Mt=St},getReversed:function(){return Mt},setTest:function(St){St?it(i.DEPTH_TEST):mt(i.DEPTH_TEST)},setMask:function(St){$!==St&&!D&&(i.depthMask(St),$=St)},setFunc:function(St){if(Mt&&(St=Gm[St]),et!==St){switch(St){case bo:i.depthFunc(i.NEVER);break;case To:i.depthFunc(i.ALWAYS);break;case Ao:i.depthFunc(i.LESS);break;case Hi:i.depthFunc(i.LEQUAL);break;case Ro:i.depthFunc(i.EQUAL);break;case Co:i.depthFunc(i.GEQUAL);break;case Po:i.depthFunc(i.GREATER);break;case Lo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}et=St}},setLocked:function(St){D=St},setClear:function(St){Et!==St&&(Mt&&(St=1-St),i.clearDepth(St),Et=St)},reset:function(){D=!1,$=null,et=null,Et=null,Mt=!1}}}function s(){let D=!1,Mt=null,$=null,et=null,Et=null,St=null,Wt=null,_e=null,Le=null;return{setTest:function(se){D||(se?it(i.STENCIL_TEST):mt(i.STENCIL_TEST))},setMask:function(se){Mt!==se&&!D&&(i.stencilMask(se),Mt=se)},setFunc:function(se,je,vn){($!==se||et!==je||Et!==vn)&&(i.stencilFunc(se,je,vn),$=se,et=je,Et=vn)},setOp:function(se,je,vn){(St!==se||Wt!==je||_e!==vn)&&(i.stencilOp(se,je,vn),St=se,Wt=je,_e=vn)},setLocked:function(se){D=se},setClear:function(se){Le!==se&&(i.clearStencil(se),Le=se)},reset:function(){D=!1,Mt=null,$=null,et=null,Et=null,St=null,Wt=null,_e=null,Le=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,M=null,x=null,v=null,L=null,T=null,A=new Jt(0,0,0),I=0,E=!1,S=null,P=null,G=null,O=null,W=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,tt=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(k)[1]),X=tt>=1):k.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),X=tt>=2);let at=null,pt={};const dt=i.getParameter(i.SCISSOR_BOX),bt=i.getParameter(i.VIEWPORT),ot=new ce().fromArray(dt),U=new ce().fromArray(bt);function Z(D,Mt,$,et){const Et=new Uint8Array(4),St=i.createTexture();i.bindTexture(D,St),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<$;Wt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,et,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(Mt+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return St}const ht={};ht[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(i.DEPTH_TEST),o.setFunc(Hi),Q(!1),vt(Ga),it(i.CULL_FACE),R(Vn);function it(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function mt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function zt(D,Mt){return u[D]!==Mt?(i.bindFramebuffer(D,Mt),u[D]=Mt,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Mt),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Bt(D,Mt){let $=p,et=!1;if(D){$=d.get(Mt),$===void 0&&($=[],d.set(Mt,$));const Et=D.textures;if($.length!==Et.length||$[0]!==i.COLOR_ATTACHMENT0){for(let St=0,Wt=Et.length;St<Wt;St++)$[St]=i.COLOR_ATTACHMENT0+St;$.length=Et.length,et=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,et=!0);et&&i.drawBuffers($)}function gt(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const q={[ii]:i.FUNC_ADD,[oh]:i.FUNC_SUBTRACT,[ah]:i.FUNC_REVERSE_SUBTRACT};q[ch]=i.MIN,q[lh]=i.MAX;const st={[hh]:i.ZERO,[uh]:i.ONE,[dh]:i.SRC_COLOR,[wo]:i.SRC_ALPHA,[vh]:i.SRC_ALPHA_SATURATE,[gh]:i.DST_COLOR,[ph]:i.DST_ALPHA,[fh]:i.ONE_MINUS_SRC_COLOR,[Eo]:i.ONE_MINUS_SRC_ALPHA,[_h]:i.ONE_MINUS_DST_COLOR,[mh]:i.ONE_MINUS_DST_ALPHA,[xh]:i.CONSTANT_COLOR,[Mh]:i.ONE_MINUS_CONSTANT_COLOR,[yh]:i.CONSTANT_ALPHA,[Sh]:i.ONE_MINUS_CONSTANT_ALPHA};function R(D,Mt,$,et,Et,St,Wt,_e,Le,se){if(D===Vn){_===!0&&(mt(i.BLEND),_=!1);return}if(_===!1&&(it(i.BLEND),_=!0),D!==rh){if(D!==m||se!==E){if((f!==ii||v!==ii)&&(i.blendEquation(i.FUNC_ADD),f=ii,v=ii),se)switch(D){case Bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case So:i.blendFunc(i.ONE,i.ONE);break;case Va:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case So:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Va:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,x=null,L=null,T=null,A.set(0,0,0),I=0,m=D,E=se}return}Et=Et||Mt,St=St||$,Wt=Wt||et,(Mt!==f||Et!==v)&&(i.blendEquationSeparate(q[Mt],q[Et]),f=Mt,v=Et),($!==M||et!==x||St!==L||Wt!==T)&&(i.blendFuncSeparate(st[$],st[et],st[St],st[Wt]),M=$,x=et,L=St,T=Wt),(_e.equals(A)===!1||Le!==I)&&(i.blendColor(_e.r,_e.g,_e.b,Le),A.copy(_e),I=Le),m=D,E=!1}function Tt(D,Mt){D.side===fn?mt(i.CULL_FACE):it(i.CULL_FACE);let $=D.side===Be;Mt&&($=!$),Q($),D.blending===Bi&&D.transparent===!1?R(Vn):R(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const et=D.stencilWrite;a.setTest(et),et&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Nt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Q(D){S!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),S=D)}function vt(D){D!==ih?(it(i.CULL_FACE),D!==P&&(D===Ga?i.cullFace(i.BACK):D===sh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):mt(i.CULL_FACE),P=D}function rt(D){D!==G&&(X&&i.lineWidth(D),G=D)}function Nt(D,Mt,$){D?(it(i.POLYGON_OFFSET_FILL),(O!==Mt||W!==$)&&(i.polygonOffset(Mt,$),O=Mt,W=$)):mt(i.POLYGON_OFFSET_FILL)}function yt(D){D?it(i.SCISSOR_TEST):mt(i.SCISSOR_TEST)}function b(D){D===void 0&&(D=i.TEXTURE0+J-1),at!==D&&(i.activeTexture(D),at=D)}function y(D,Mt,$){$===void 0&&(at===null?$=i.TEXTURE0+J-1:$=at);let et=pt[$];et===void 0&&(et={type:void 0,texture:void 0},pt[$]=et),(et.type!==D||et.texture!==Mt)&&(at!==$&&(i.activeTexture($),at=$),i.bindTexture(D,Mt||ht[D]),et.type=D,et.texture=Mt)}function B(){const D=pt[at];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Lt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function At(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $t(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function kt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ht(D){ot.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),ot.copy(D))}function Ct(D){U.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),U.copy(D))}function Kt(D,Mt){let $=l.get(Mt);$===void 0&&($=new WeakMap,l.set(Mt,$));let et=$.get(D);et===void 0&&(et=i.getUniformBlockIndex(Mt,D.name),$.set(D,et))}function Yt(D,Mt){const et=l.get(Mt).get(D);c.get(Mt)!==et&&(i.uniformBlockBinding(Mt,et,D.__bindingPointIndex),c.set(Mt,et))}function ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},at=null,pt={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,M=null,x=null,v=null,L=null,T=null,A=new Jt(0,0,0),I=0,E=!1,S=null,P=null,G=null,O=null,W=null,ot.set(0,0,i.canvas.width,i.canvas.height),U.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:mt,bindFramebuffer:zt,drawBuffers:Bt,useProgram:gt,setBlending:R,setMaterial:Tt,setFlipSided:Q,setCullFace:vt,setLineWidth:rt,setPolygonOffset:Nt,setScissorTest:yt,activeTexture:b,bindTexture:y,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:nt,texImage2D:Rt,texImage3D:kt,updateUBOMapping:Kt,uniformBlockBinding:Yt,texStorage2D:$t,texStorage3D:ct,texSubImage2D:j,texSubImage3D:Lt,compressedTexSubImage2D:xt,compressedTexSubImage3D:At,scissor:Ht,viewport:Ct,reset:ue}}function Oc(i,t,e,n){const s=Wm(n);switch(e){case ll:return i*t;case ul:return i*t;case dl:return i*t*2;case fl:return i*t/s.components*s.byteLength;case Ma:return i*t/s.components*s.byteLength;case pl:return i*t*2/s.components*s.byteLength;case ya:return i*t*2/s.components*s.byteLength;case hl:return i*t*3/s.components*s.byteLength;case on:return i*t*4/s.components*s.byteLength;case Sa:return i*t*4/s.components*s.byteLength;case ar:case cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case lr:case hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fo:case Bo:return Math.max(i,16)*Math.max(t,8)/4;case No:case Oo:return Math.max(i,8)*Math.max(t,8)/2;case zo:case ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case qo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case $o:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case jo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ta:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ea:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ur:case na:case ia:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ml:case sa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ra:case oa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wm(i){switch(i){case Pn:case ol:return{byteLength:1,components:1};case xs:case al:case Ts:return{byteLength:2,components:1};case va:case xa:return{byteLength:2,components:4};case ci:case _a:case Tn:return{byteLength:4,components:1};case cl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Xm(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new lt,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,y){return p?new OffscreenCanvas(b,y):Mr("canvas")}function _(b,y,B){let K=1;const nt=yt(b);if((nt.width>B||nt.height>B)&&(K=B/Math.max(nt.width,nt.height)),K<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const j=Math.floor(K*nt.width),Lt=Math.floor(K*nt.height);u===void 0&&(u=g(j,Lt));const xt=y?g(j,Lt):u;return xt.width=j,xt.height=Lt,xt.getContext("2d").drawImage(b,0,0,j,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+j+"x"+Lt+")."),xt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),b;return b}function m(b){return b.generateMipmaps}function f(b){i.generateMipmap(b)}function M(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(b,y,B,K,nt=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let j=y;if(y===i.RED&&(B===i.FLOAT&&(j=i.R32F),B===i.HALF_FLOAT&&(j=i.R16F),B===i.UNSIGNED_BYTE&&(j=i.R8)),y===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.R8UI),B===i.UNSIGNED_SHORT&&(j=i.R16UI),B===i.UNSIGNED_INT&&(j=i.R32UI),B===i.BYTE&&(j=i.R8I),B===i.SHORT&&(j=i.R16I),B===i.INT&&(j=i.R32I)),y===i.RG&&(B===i.FLOAT&&(j=i.RG32F),B===i.HALF_FLOAT&&(j=i.RG16F),B===i.UNSIGNED_BYTE&&(j=i.RG8)),y===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RG8UI),B===i.UNSIGNED_SHORT&&(j=i.RG16UI),B===i.UNSIGNED_INT&&(j=i.RG32UI),B===i.BYTE&&(j=i.RG8I),B===i.SHORT&&(j=i.RG16I),B===i.INT&&(j=i.RG32I)),y===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGB8UI),B===i.UNSIGNED_SHORT&&(j=i.RGB16UI),B===i.UNSIGNED_INT&&(j=i.RGB32UI),B===i.BYTE&&(j=i.RGB8I),B===i.SHORT&&(j=i.RGB16I),B===i.INT&&(j=i.RGB32I)),y===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),B===i.UNSIGNED_INT&&(j=i.RGBA32UI),B===i.BYTE&&(j=i.RGBA8I),B===i.SHORT&&(j=i.RGBA16I),B===i.INT&&(j=i.RGBA32I)),y===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),y===i.RGBA){const Lt=nt?Er:Qt.getTransfer(K);B===i.FLOAT&&(j=i.RGBA32F),B===i.HALF_FLOAT&&(j=i.RGBA16F),B===i.UNSIGNED_BYTE&&(j=Lt===re?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function v(b,y){let B;return b?y===null||y===ci||y===Wi?B=i.DEPTH24_STENCIL8:y===Tn?B=i.DEPTH32F_STENCIL8:y===xs&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ci||y===Wi?B=i.DEPTH_COMPONENT24:y===Tn?B=i.DEPTH_COMPONENT32F:y===xs&&(B=i.DEPTH_COMPONENT16),B}function L(b,y){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==an&&b.minFilter!==mn?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function T(b){const y=b.target;y.removeEventListener("dispose",T),I(y),y.isVideoTexture&&h.delete(y)}function A(b){const y=b.target;y.removeEventListener("dispose",A),S(y)}function I(b){const y=n.get(b);if(y.__webglInit===void 0)return;const B=b.source,K=d.get(B);if(K){const nt=K[y.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&E(b),Object.keys(K).length===0&&d.delete(B)}n.remove(b)}function E(b){const y=n.get(b);i.deleteTexture(y.__webglTexture);const B=b.source,K=d.get(B);delete K[y.__cacheKey],o.memory.textures--}function S(b){const y=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let nt=0;nt<y.__webglFramebuffer[K].length;nt++)i.deleteFramebuffer(y.__webglFramebuffer[K][nt]);else i.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)i.deleteFramebuffer(y.__webglFramebuffer[K]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const B=b.textures;for(let K=0,nt=B.length;K<nt;K++){const j=n.get(B[K]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(B[K])}n.remove(b)}let P=0;function G(){P=0}function O(){const b=P;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),P+=1,b}function W(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function J(b,y){const B=n.get(b);if(b.isVideoTexture&&rt(b),b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){const K=b.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{U(B,b,y);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+y)}function X(b,y){const B=n.get(b);if(b.version>0&&B.__version!==b.version){U(B,b,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+y)}function tt(b,y){const B=n.get(b);if(b.version>0&&B.__version!==b.version){U(B,b,y);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+y)}function k(b,y){const B=n.get(b);if(b.version>0&&B.__version!==b.version){Z(B,b,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+y)}const at={[vs]:i.REPEAT,[oi]:i.CLAMP_TO_EDGE,[Uo]:i.MIRRORED_REPEAT},pt={[an]:i.NEAREST,[Lh]:i.NEAREST_MIPMAP_NEAREST,[Cs]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[Pr]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},dt={[Nh]:i.NEVER,[Hh]:i.ALWAYS,[Fh]:i.LESS,[_l]:i.LEQUAL,[Oh]:i.EQUAL,[kh]:i.GEQUAL,[Bh]:i.GREATER,[zh]:i.NOTEQUAL};function bt(b,y){if(y.type===Tn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===mn||y.magFilter===Pr||y.magFilter===Cs||y.magFilter===ai||y.minFilter===mn||y.minFilter===Pr||y.minFilter===Cs||y.minFilter===ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,at[y.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,at[y.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,at[y.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,pt[y.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,pt[y.minFilter]),y.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,dt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===an||y.minFilter!==Cs&&y.minFilter!==ai||y.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ot(b,y){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",T));const K=y.source;let nt=d.get(K);nt===void 0&&(nt={},d.set(K,nt));const j=W(y);if(j!==b.__cacheKey){nt[j]===void 0&&(nt[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),nt[j].usedTimes++;const Lt=nt[b.__cacheKey];Lt!==void 0&&(nt[b.__cacheKey].usedTimes--,Lt.usedTimes===0&&E(y)),b.__cacheKey=j,b.__webglTexture=nt[j].texture}return B}function U(b,y,B){let K=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=i.TEXTURE_3D);const nt=ot(b,y),j=y.source;e.bindTexture(K,b.__webglTexture,i.TEXTURE0+B);const Lt=n.get(j);if(j.version!==Lt.__version||nt===!0){e.activeTexture(i.TEXTURE0+B);const xt=Qt.getPrimaries(Qt.workingColorSpace),At=y.colorSpace===Hn?null:Qt.getPrimaries(y.colorSpace),$t=y.colorSpace===Hn||xt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let ct=_(y.image,!1,s.maxTextureSize);ct=Nt(y,ct);const Rt=r.convert(y.format,y.colorSpace),kt=r.convert(y.type);let Ht=x(y.internalFormat,Rt,kt,y.colorSpace,y.isVideoTexture);bt(K,y);let Ct;const Kt=y.mipmaps,Yt=y.isVideoTexture!==!0,ue=Lt.__version===void 0||nt===!0,D=j.dataReady,Mt=L(y,ct);if(y.isDepthTexture)Ht=v(y.format===Xi,y.type),ue&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Ht,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Ht,ct.width,ct.height,0,Rt,kt,null));else if(y.isDataTexture)if(Kt.length>0){Yt&&ue&&e.texStorage2D(i.TEXTURE_2D,Mt,Ht,Kt[0].width,Kt[0].height);for(let $=0,et=Kt.length;$<et;$++)Ct=Kt[$],Yt?D&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Ct.width,Ct.height,Rt,kt,Ct.data):e.texImage2D(i.TEXTURE_2D,$,Ht,Ct.width,Ct.height,0,Rt,kt,Ct.data);y.generateMipmaps=!1}else Yt?(ue&&e.texStorage2D(i.TEXTURE_2D,Mt,Ht,ct.width,ct.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,Rt,kt,ct.data)):e.texImage2D(i.TEXTURE_2D,0,Ht,ct.width,ct.height,0,Rt,kt,ct.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Yt&&ue&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Ht,Kt[0].width,Kt[0].height,ct.depth);for(let $=0,et=Kt.length;$<et;$++)if(Ct=Kt[$],y.format!==on)if(Rt!==null)if(Yt){if(D)if(y.layerUpdates.size>0){const Et=Oc(Ct.width,Ct.height,y.format,y.type);for(const St of y.layerUpdates){const Wt=Ct.data.subarray(St*Et/Ct.data.BYTES_PER_ELEMENT,(St+1)*Et/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,St,Ct.width,Ct.height,1,Rt,Wt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Ct.width,Ct.height,ct.depth,Rt,Ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Ht,Ct.width,Ct.height,ct.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Ct.width,Ct.height,ct.depth,Rt,kt,Ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,Ht,Ct.width,Ct.height,ct.depth,0,Rt,kt,Ct.data)}else{Yt&&ue&&e.texStorage2D(i.TEXTURE_2D,Mt,Ht,Kt[0].width,Kt[0].height);for(let $=0,et=Kt.length;$<et;$++)Ct=Kt[$],y.format!==on?Rt!==null?Yt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,Ct.width,Ct.height,Rt,Ct.data):e.compressedTexImage2D(i.TEXTURE_2D,$,Ht,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?D&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Ct.width,Ct.height,Rt,kt,Ct.data):e.texImage2D(i.TEXTURE_2D,$,Ht,Ct.width,Ct.height,0,Rt,kt,Ct.data)}else if(y.isDataArrayTexture)if(Yt){if(ue&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Ht,ct.width,ct.height,ct.depth),D)if(y.layerUpdates.size>0){const $=Oc(ct.width,ct.height,y.format,y.type);for(const et of y.layerUpdates){const Et=ct.data.subarray(et*$/ct.data.BYTES_PER_ELEMENT,(et+1)*$/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,ct.width,ct.height,1,Rt,kt,Et)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Rt,kt,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ht,ct.width,ct.height,ct.depth,0,Rt,kt,ct.data);else if(y.isData3DTexture)Yt?(ue&&e.texStorage3D(i.TEXTURE_3D,Mt,Ht,ct.width,ct.height,ct.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Rt,kt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Ht,ct.width,ct.height,ct.depth,0,Rt,kt,ct.data);else if(y.isFramebufferTexture){if(ue)if(Yt)e.texStorage2D(i.TEXTURE_2D,Mt,Ht,ct.width,ct.height);else{let $=ct.width,et=ct.height;for(let Et=0;Et<Mt;Et++)e.texImage2D(i.TEXTURE_2D,Et,Ht,$,et,0,Rt,kt,null),$>>=1,et>>=1}}else if(Kt.length>0){if(Yt&&ue){const $=yt(Kt[0]);e.texStorage2D(i.TEXTURE_2D,Mt,Ht,$.width,$.height)}for(let $=0,et=Kt.length;$<et;$++)Ct=Kt[$],Yt?D&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Rt,kt,Ct):e.texImage2D(i.TEXTURE_2D,$,Ht,Rt,kt,Ct);y.generateMipmaps=!1}else if(Yt){if(ue){const $=yt(ct);e.texStorage2D(i.TEXTURE_2D,Mt,Ht,$.width,$.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,kt,ct)}else e.texImage2D(i.TEXTURE_2D,0,Ht,Rt,kt,ct);m(y)&&f(K),Lt.__version=j.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function Z(b,y,B){if(y.image.length!==6)return;const K=ot(b,y),nt=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+B);const j=n.get(nt);if(nt.version!==j.__version||K===!0){e.activeTexture(i.TEXTURE0+B);const Lt=Qt.getPrimaries(Qt.workingColorSpace),xt=y.colorSpace===Hn?null:Qt.getPrimaries(y.colorSpace),At=y.colorSpace===Hn||Lt===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const $t=y.isCompressedTexture||y.image[0].isCompressedTexture,ct=y.image[0]&&y.image[0].isDataTexture,Rt=[];for(let et=0;et<6;et++)!$t&&!ct?Rt[et]=_(y.image[et],!0,s.maxCubemapSize):Rt[et]=ct?y.image[et].image:y.image[et],Rt[et]=Nt(y,Rt[et]);const kt=Rt[0],Ht=r.convert(y.format,y.colorSpace),Ct=r.convert(y.type),Kt=x(y.internalFormat,Ht,Ct,y.colorSpace),Yt=y.isVideoTexture!==!0,ue=j.__version===void 0||K===!0,D=nt.dataReady;let Mt=L(y,kt);bt(i.TEXTURE_CUBE_MAP,y);let $;if($t){Yt&&ue&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Kt,kt.width,kt.height);for(let et=0;et<6;et++){$=Rt[et].mipmaps;for(let Et=0;Et<$.length;Et++){const St=$[Et];y.format!==on?Ht!==null?Yt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et,0,0,St.width,St.height,Ht,St.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et,Kt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et,0,0,St.width,St.height,Ht,Ct,St.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et,Kt,St.width,St.height,0,Ht,Ct,St.data)}}}else{if($=y.mipmaps,Yt&&ue){$.length>0&&Mt++;const et=yt(Rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Kt,et.width,et.height)}for(let et=0;et<6;et++)if(ct){Yt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Rt[et].width,Rt[et].height,Ht,Ct,Rt[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Kt,Rt[et].width,Rt[et].height,0,Ht,Ct,Rt[et].data);for(let Et=0;Et<$.length;Et++){const Wt=$[Et].image[et].image;Yt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et+1,0,0,Wt.width,Wt.height,Ht,Ct,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et+1,Kt,Wt.width,Wt.height,0,Ht,Ct,Wt.data)}}else{Yt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Ht,Ct,Rt[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Kt,Ht,Ct,Rt[et]);for(let Et=0;Et<$.length;Et++){const St=$[Et];Yt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et+1,0,0,Ht,Ct,St.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et+1,Kt,Ht,Ct,St.image[et])}}}m(y)&&f(i.TEXTURE_CUBE_MAP),j.__version=nt.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function ht(b,y,B,K,nt,j){const Lt=r.convert(B.format,B.colorSpace),xt=r.convert(B.type),At=x(B.internalFormat,Lt,xt,B.colorSpace),$t=n.get(y),ct=n.get(B);if(ct.__renderTarget=y,!$t.__hasExternalTextures){const Rt=Math.max(1,y.width>>j),kt=Math.max(1,y.height>>j);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,j,At,Rt,kt,y.depth,0,Lt,xt,null):e.texImage2D(nt,j,At,Rt,kt,0,Lt,xt,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),vt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,nt,ct.__webglTexture,0,Q(y)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,nt,ct.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(b,y,B){if(i.bindRenderbuffer(i.RENDERBUFFER,b),y.depthBuffer){const K=y.depthTexture,nt=K&&K.isDepthTexture?K.type:null,j=v(y.stencilBuffer,nt),Lt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=Q(y);vt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,j,y.width,y.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,j,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,j,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,b)}else{const K=y.textures;for(let nt=0;nt<K.length;nt++){const j=K[nt],Lt=r.convert(j.format,j.colorSpace),xt=r.convert(j.type),At=x(j.internalFormat,Lt,xt,j.colorSpace),$t=Q(y);B&&vt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,At,y.width,y.height):vt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t,At,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,At,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(y.depthTexture);K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),J(y.depthTexture,0);const nt=K.__webglTexture,j=Q(y);if(y.depthTexture.format===zi)vt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(y.depthTexture.format===Xi)vt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function zt(b){const y=n.get(b),B=b.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==b.depthTexture){const K=b.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const nt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",nt)};K.addEventListener("dispose",nt),y.__depthDisposeCallback=nt}y.__boundDepthTexture=K}if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");mt(y.__webglFramebuffer,b)}else if(B){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=i.createRenderbuffer(),it(y.__webglDepthbuffer[K],b,!1);else{const nt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),it(y.__webglDepthbuffer,b,!1);else{const K=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,nt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(b,y,B){const K=n.get(b);y!==void 0&&ht(K.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&zt(b)}function gt(b){const y=b.texture,B=n.get(b),K=n.get(y);b.addEventListener("dispose",A);const nt=b.textures,j=b.isWebGLCubeRenderTarget===!0,Lt=nt.length>1;if(Lt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=y.version,o.memory.textures++),j){B.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[xt]=[];for(let At=0;At<y.mipmaps.length;At++)B.__webglFramebuffer[xt][At]=i.createFramebuffer()}else B.__webglFramebuffer[xt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let xt=0;xt<y.mipmaps.length;xt++)B.__webglFramebuffer[xt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let xt=0,At=nt.length;xt<At;xt++){const $t=n.get(nt[xt]);$t.__webglTexture===void 0&&($t.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&vt(b)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let xt=0;xt<nt.length;xt++){const At=nt[xt];B.__webglColorRenderbuffer[xt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[xt]);const $t=r.convert(At.format,At.colorSpace),ct=r.convert(At.type),Rt=x(At.internalFormat,$t,ct,At.colorSpace,b.isXRRenderTarget===!0),kt=Q(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,Rt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,B.__webglColorRenderbuffer[xt])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),it(B.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),bt(i.TEXTURE_CUBE_MAP,y);for(let xt=0;xt<6;xt++)if(y.mipmaps&&y.mipmaps.length>0)for(let At=0;At<y.mipmaps.length;At++)ht(B.__webglFramebuffer[xt][At],b,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,At);else ht(B.__webglFramebuffer[xt],b,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);m(y)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let xt=0,At=nt.length;xt<At;xt++){const $t=nt[xt],ct=n.get($t);e.bindTexture(i.TEXTURE_2D,ct.__webglTexture),bt(i.TEXTURE_2D,$t),ht(B.__webglFramebuffer,b,$t,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,0),m($t)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let xt=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(xt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,K.__webglTexture),bt(xt,y),y.mipmaps&&y.mipmaps.length>0)for(let At=0;At<y.mipmaps.length;At++)ht(B.__webglFramebuffer[At],b,y,i.COLOR_ATTACHMENT0,xt,At);else ht(B.__webglFramebuffer,b,y,i.COLOR_ATTACHMENT0,xt,0);m(y)&&f(xt),e.unbindTexture()}b.depthBuffer&&zt(b)}function q(b){const y=b.textures;for(let B=0,K=y.length;B<K;B++){const nt=y[B];if(m(nt)){const j=M(b),Lt=n.get(nt).__webglTexture;e.bindTexture(j,Lt),f(j),e.unbindTexture()}}}const st=[],R=[];function Tt(b){if(b.samples>0){if(vt(b)===!1){const y=b.textures,B=b.width,K=b.height;let nt=i.COLOR_BUFFER_BIT;const j=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(b),xt=y.length>1;if(xt)for(let At=0;At<y.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let At=0;At<y.length;At++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),xt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[At]);const $t=n.get(y[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$t,0)}i.blitFramebuffer(0,0,B,K,0,0,B,K,nt,i.NEAREST),c===!0&&(st.length=0,R.length=0,st.push(i.COLOR_ATTACHMENT0+At),b.depthBuffer&&b.resolveDepthBuffer===!1&&(st.push(j),R.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xt)for(let At=0;At<y.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[At]);const $t=n.get(y[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,$t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const y=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Q(b){return Math.min(s.maxSamples,b.samples)}function vt(b){const y=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function rt(b){const y=o.render.frame;h.get(b)!==y&&(h.set(b,y),b.update())}function Nt(b,y){const B=b.colorSpace,K=b.format,nt=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||B!==Zi&&B!==Hn&&(Qt.getTransfer(B)===re?(K!==on||nt!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}function yt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=G,this.setTexture2D=J,this.setTexture2DArray=X,this.setTexture3D=tt,this.setTextureCube=k,this.rebindTextures=Bt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=vt}function qm(i,t){function e(n,s=Hn){let r;const o=Qt.getTransfer(s);if(n===Pn)return i.UNSIGNED_BYTE;if(n===va)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===cl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ol)return i.BYTE;if(n===al)return i.SHORT;if(n===xs)return i.UNSIGNED_SHORT;if(n===_a)return i.INT;if(n===ci)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===Ts)return i.HALF_FLOAT;if(n===ll)return i.ALPHA;if(n===hl)return i.RGB;if(n===on)return i.RGBA;if(n===ul)return i.LUMINANCE;if(n===dl)return i.LUMINANCE_ALPHA;if(n===zi)return i.DEPTH_COMPONENT;if(n===Xi)return i.DEPTH_STENCIL;if(n===fl)return i.RED;if(n===Ma)return i.RED_INTEGER;if(n===pl)return i.RG;if(n===ya)return i.RG_INTEGER;if(n===Sa)return i.RGBA_INTEGER;if(n===ar||n===cr||n===lr||n===hr)if(o===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===No||n===Fo||n===Oo||n===Bo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===No)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zo||n===ko||n===Ho)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zo||n===ko)return o===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ho)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Go||n===Vo||n===Wo||n===Xo||n===qo||n===Yo||n===Zo||n===$o||n===Jo||n===Ko||n===jo||n===Qo||n===ta||n===ea)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Go)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$o)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ko)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ta)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ea)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ur||n===na||n===ia)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ur)return o===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===na)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ia)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ml||n===sa||n===ra||n===oa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ur)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Ym extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class jt extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zm={type:"move"};class ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Zm)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const $m=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jm=`
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

}`;class Km{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new ze,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new qn({vertexShader:$m,fragmentShader:Jm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new z(new Ue(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jm extends $i{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null;const _=new Km,m=e.getContextAttributes();let f=null,M=null;const x=[],v=[],L=new lt;let T=null;const A=new Xe;A.viewport=new ce;const I=new Xe;I.viewport=new ce;const E=[A,I],S=new Ym;let P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let Z=x[U];return Z===void 0&&(Z=new ro,x[U]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(U){let Z=x[U];return Z===void 0&&(Z=new ro,x[U]=Z),Z.getGripSpace()},this.getHand=function(U){let Z=x[U];return Z===void 0&&(Z=new ro,x[U]=Z),Z.getHandSpace()};function O(U){const Z=v.indexOf(U.inputSource);if(Z===-1)return;const ht=x[Z];ht!==void 0&&(ht.update(U.inputSource,U.frame,l||o),ht.dispatchEvent({type:U.type,data:U.inputSource}))}function W(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",J);for(let U=0;U<x.length;U++){const Z=v[U];Z!==null&&(v[U]=null,x[U].disconnect(Z))}P=null,G=null,_.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,M=null,ot.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",W),s.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Z),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new li(p.framebufferWidth,p.framebufferHeight,{format:on,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,ht=null,it=null;m.depth&&(it=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=m.stencil?Xi:zi,ht=m.stencil?Wi:ci);const mt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(mt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new li(d.textureWidth,d.textureHeight,{format:on,type:Pn,depthTexture:new Cl(d.textureWidth,d.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ot.setContext(s),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J(U){for(let Z=0;Z<U.removed.length;Z++){const ht=U.removed[Z],it=v.indexOf(ht);it>=0&&(v[it]=null,x[it].disconnect(ht))}for(let Z=0;Z<U.added.length;Z++){const ht=U.added[Z];let it=v.indexOf(ht);if(it===-1){for(let zt=0;zt<x.length;zt++)if(zt>=v.length){v.push(ht),it=zt;break}else if(v[zt]===null){v[zt]=ht,it=zt;break}if(it===-1)break}const mt=x[it];mt&&mt.connect(ht)}}const X=new C,tt=new C;function k(U,Z,ht){X.setFromMatrixPosition(Z.matrixWorld),tt.setFromMatrixPosition(ht.matrixWorld);const it=X.distanceTo(tt),mt=Z.projectionMatrix.elements,zt=ht.projectionMatrix.elements,Bt=mt[14]/(mt[10]-1),gt=mt[14]/(mt[10]+1),q=(mt[9]+1)/mt[5],st=(mt[9]-1)/mt[5],R=(mt[8]-1)/mt[0],Tt=(zt[8]+1)/zt[0],Q=Bt*R,vt=Bt*Tt,rt=it/(-R+Tt),Nt=rt*-R;if(Z.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Nt),U.translateZ(rt),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),mt[10]===-1)U.projectionMatrix.copy(Z.projectionMatrix),U.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const yt=Bt+rt,b=gt+rt,y=Q-Nt,B=vt+(it-Nt),K=q*gt/b*yt,nt=st*gt/b*yt;U.projectionMatrix.makePerspective(y,B,K,nt,yt,b),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function at(U,Z){Z===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(Z.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;let Z=U.near,ht=U.far;_.texture!==null&&(_.depthNear>0&&(Z=_.depthNear),_.depthFar>0&&(ht=_.depthFar)),S.near=I.near=A.near=Z,S.far=I.far=A.far=ht,(P!==S.near||G!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,G=S.far),A.layers.mask=U.layers.mask|2,I.layers.mask=U.layers.mask|4,S.layers.mask=A.layers.mask|I.layers.mask;const it=U.parent,mt=S.cameras;at(S,it);for(let zt=0;zt<mt.length;zt++)at(mt[zt],it);mt.length===2?k(S,A,I):S.projectionMatrix.copy(A.projectionMatrix),pt(U,S,it)};function pt(U,Z,ht){ht===null?U.matrix.copy(Z.matrixWorld):(U.matrix.copy(ht.matrixWorld),U.matrix.invert(),U.matrix.multiply(Z.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(Z.projectionMatrix),U.projectionMatrixInverse.copy(Z.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=ca*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(U){c=U,d!==null&&(d.fixedFoveation=U),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=U)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let dt=null;function bt(U,Z){if(h=Z.getViewerPose(l||o),g=Z,h!==null){const ht=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let it=!1;ht.length!==S.cameras.length&&(S.cameras.length=0,it=!0);for(let zt=0;zt<ht.length;zt++){const Bt=ht[zt];let gt=null;if(p!==null)gt=p.getViewport(Bt);else{const st=u.getViewSubImage(d,Bt);gt=st.viewport,zt===0&&(t.setRenderTargetTextures(M,st.colorTexture,d.ignoreDepthValues?void 0:st.depthStencilTexture),t.setRenderTarget(M))}let q=E[zt];q===void 0&&(q=new Xe,q.layers.enable(zt),q.viewport=new ce,E[zt]=q),q.matrix.fromArray(Bt.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(Bt.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(gt.x,gt.y,gt.width,gt.height),zt===0&&(S.matrix.copy(q.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),it===!0&&S.cameras.push(q)}const mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")){const zt=u.getDepthInformation(ht[0]);zt&&zt.isValid&&zt.texture&&_.init(t,zt,s.renderState)}}for(let ht=0;ht<x.length;ht++){const it=v[ht],mt=x[ht];it!==null&&mt!==void 0&&mt.update(it,Z,l||o)}dt&&dt(U,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const ot=new Al;ot.setAnimationLoop(bt),this.setAnimationLoop=function(U){dt=U},this.dispose=function(){}}}const Qn=new cn,Qm=new le;function t0(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,El(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,x,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,M,x):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Be&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Be&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=t.get(f),x=M.envMap,v=M.envMapRotation;x&&(m.envMap.value=x,Qn.copy(v),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),m.envMapRotation.value.setFromMatrix4(Qm.makeRotationFromEuler(Qn)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,M,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=x*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Be&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const M=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function e0(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,x){const v=x.program;n.uniformBlockBinding(M,v)}function l(M,x){let v=s[M.id];v===void 0&&(g(M),v=h(M),s[M.id]=v,M.addEventListener("dispose",m));const L=x.program;n.updateUBOMapping(M,L);const T=t.render.frame;r[M.id]!==T&&(d(M),r[M.id]=T)}function h(M){const x=u();M.__bindingPointIndex=x;const v=i.createBuffer(),L=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,L,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=s[M.id],v=M.uniforms,L=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,A=v.length;T<A;T++){const I=Array.isArray(v[T])?v[T]:[v[T]];for(let E=0,S=I.length;E<S;E++){const P=I[E];if(p(P,T,E,L)===!0){const G=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let J=0;J<O.length;J++){const X=O[J],tt=_(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,G+W,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,W),W+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,x,v,L){const T=M.value,A=x+"_"+v;if(L[A]===void 0)return typeof T=="number"||typeof T=="boolean"?L[A]=T:L[A]=T.clone(),!0;{const I=L[A];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return L[A]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(M){const x=M.uniforms;let v=0;const L=16;for(let A=0,I=x.length;A<I;A++){const E=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,P=E.length;S<P;S++){const G=E[S],O=Array.isArray(G.value)?G.value:[G.value];for(let W=0,J=O.length;W<J;W++){const X=O[W],tt=_(X),k=v%L,at=k%tt.boundary,pt=k+at;v+=at,pt!==0&&L-pt<tt.storage&&(v+=L-pt),G.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=v,v+=tt.storage}}}const T=v%L;return T>0&&(v+=L-T),M.__size=v,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}class n0{constructor(t={}){const{canvas:e=Vh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const M=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this.toneMapping=Wn,this.toneMappingExposure=1;const v=this;let L=!1,T=0,A=0,I=null,E=-1,S=null;const P=new ce,G=new ce;let O=null;const W=new Jt(0);let J=0,X=e.width,tt=e.height,k=1,at=null,pt=null;const dt=new ce(0,0,X,tt),bt=new ce(0,0,X,tt);let ot=!1;const U=new ba;let Z=!1,ht=!1;const it=new le,mt=new le,zt=new C,Bt=new ce,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let q=!1;function st(){return I===null?k:1}let R=n;function Tt(w,N){return e.getContext(w,N)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ga}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",St,!1),R===null){const N="webgl2";if(R=Tt(N,w),R===null)throw Tt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Q,vt,rt,Nt,yt,b,y,B,K,nt,j,Lt,xt,At,$t,ct,Rt,kt,Ht,Ct,Kt,Yt,ue,D;function Mt(){Q=new ap(R),Q.init(),Yt=new qm(R,Q),vt=new ep(R,Q,t,Yt),rt=new Vm(R,Q),vt.reverseDepthBuffer&&d&&rt.buffers.depth.setReversed(!0),Nt=new hp(R),yt=new Rm,b=new Xm(R,Q,rt,yt,vt,Yt,Nt),y=new ip(v),B=new op(v),K=new gu(R),ue=new Qf(R,K),nt=new cp(R,K,Nt,ue),j=new dp(R,nt,K,Nt),Ht=new up(R,vt,b),ct=new np(yt),Lt=new Am(v,y,B,Q,vt,ue,ct),xt=new t0(v,yt),At=new Pm,$t=new Fm(Q),kt=new jf(v,y,B,rt,j,p,c),Rt=new Hm(v,j,vt),D=new e0(R,Nt,vt,rt),Ct=new tp(R,Q,Nt),Kt=new lp(R,Q,Nt),Nt.programs=Lt.programs,v.capabilities=vt,v.extensions=Q,v.properties=yt,v.renderLists=At,v.shadowMap=Rt,v.state=rt,v.info=Nt}Mt();const $=new jm(v,R);this.xr=$,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const w=Q.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Q.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(w){w!==void 0&&(k=w,this.setSize(X,tt,!1))},this.getSize=function(w){return w.set(X,tt)},this.setSize=function(w,N,H=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,tt=N,e.width=Math.floor(w*k),e.height=Math.floor(N*k),H===!0&&(e.style.width=w+"px",e.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(X*k,tt*k).floor()},this.setDrawingBufferSize=function(w,N,H){X=w,tt=N,k=H,e.width=Math.floor(w*H),e.height=Math.floor(N*H),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(dt)},this.setViewport=function(w,N,H,V){w.isVector4?dt.set(w.x,w.y,w.z,w.w):dt.set(w,N,H,V),rt.viewport(P.copy(dt).multiplyScalar(k).round())},this.getScissor=function(w){return w.copy(bt)},this.setScissor=function(w,N,H,V){w.isVector4?bt.set(w.x,w.y,w.z,w.w):bt.set(w,N,H,V),rt.scissor(G.copy(bt).multiplyScalar(k).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(w){rt.setScissorTest(ot=w)},this.setOpaqueSort=function(w){at=w},this.setTransparentSort=function(w){pt=w},this.getClearColor=function(w){return w.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(w=!0,N=!0,H=!0){let V=0;if(w){let F=!1;if(I!==null){const ut=I.texture.format;F=ut===Sa||ut===ya||ut===Ma}if(F){const ut=I.texture.type,wt=ut===Pn||ut===ci||ut===xs||ut===Wi||ut===va||ut===xa,It=kt.getClearColor(),Dt=kt.getClearAlpha(),Gt=It.r,Xt=It.g,Ut=It.b;wt?(g[0]=Gt,g[1]=Xt,g[2]=Ut,g[3]=Dt,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=Gt,_[1]=Xt,_[2]=Ut,_[3]=Dt,R.clearBufferiv(R.COLOR,0,_))}else V|=R.COLOR_BUFFER_BIT}N&&(V|=R.DEPTH_BUFFER_BIT),H&&(V|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",St,!1),At.dispose(),$t.dispose(),yt.dispose(),y.dispose(),B.dispose(),j.dispose(),ue.dispose(),D.dispose(),Lt.dispose(),$.dispose(),$.removeEventListener("sessionstart",Ua),$.removeEventListener("sessionend",Na),Yn.stop()};function et(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const w=Nt.autoReset,N=Rt.enabled,H=Rt.autoUpdate,V=Rt.needsUpdate,F=Rt.type;Mt(),Nt.autoReset=w,Rt.enabled=N,Rt.autoUpdate=H,Rt.needsUpdate=V,Rt.type=F}function St(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Wt(w){const N=w.target;N.removeEventListener("dispose",Wt),_e(N)}function _e(w){Le(w),yt.remove(w)}function Le(w){const N=yt.get(w).programs;N!==void 0&&(N.forEach(function(H){Lt.releaseProgram(H)}),w.isShaderMaterial&&Lt.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,H,V,F,ut){N===null&&(N=gt);const wt=F.isMesh&&F.matrixWorld.determinant()<0,It=th(w,N,H,V,F);rt.setMaterial(V,wt);let Dt=H.index,Gt=1;if(V.wireframe===!0){if(Dt=nt.getWireframeAttribute(H),Dt===void 0)return;Gt=2}const Xt=H.drawRange,Ut=H.attributes.position;let te=Xt.start*Gt,de=(Xt.start+Xt.count)*Gt;ut!==null&&(te=Math.max(te,ut.start*Gt),de=Math.min(de,(ut.start+ut.count)*Gt)),Dt!==null?(te=Math.max(te,0),de=Math.min(de,Dt.count)):Ut!=null&&(te=Math.max(te,0),de=Math.min(de,Ut.count));const fe=de-te;if(fe<0||fe===1/0)return;ue.setup(F,V,It,H,Dt);let ke,ne=Ct;if(Dt!==null&&(ke=K.get(Dt),ne=Kt,ne.setIndex(ke)),F.isMesh)V.wireframe===!0?(rt.setLineWidth(V.wireframeLinewidth*st()),ne.setMode(R.LINES)):ne.setMode(R.TRIANGLES);else if(F.isLine){let Ft=V.linewidth;Ft===void 0&&(Ft=1),rt.setLineWidth(Ft*st()),F.isLineSegments?ne.setMode(R.LINES):F.isLineLoop?ne.setMode(R.LINE_LOOP):ne.setMode(R.LINE_STRIP)}else F.isPoints?ne.setMode(R.POINTS):F.isSprite&&ne.setMode(R.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ne.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))ne.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ft=F._multiDrawStarts,xn=F._multiDrawCounts,ie=F._multiDrawCount,Qe=Dt?K.get(Dt).bytesPerElement:1,pi=yt.get(V).currentProgram.getUniforms();for(let He=0;He<ie;He++)pi.setValue(R,"_gl_DrawID",He),ne.render(Ft[He]/Qe,xn[He])}else if(F.isInstancedMesh)ne.renderInstances(te,fe,F.count);else if(H.isInstancedBufferGeometry){const Ft=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,xn=Math.min(H.instanceCount,Ft);ne.renderInstances(te,fe,xn)}else ne.render(te,fe)};function se(w,N,H){w.transparent===!0&&w.side===fn&&w.forceSinglePass===!1?(w.side=Be,w.needsUpdate=!0,Rs(w,N,H),w.side=Xn,w.needsUpdate=!0,Rs(w,N,H),w.side=fn):Rs(w,N,H)}this.compile=function(w,N,H=null){H===null&&(H=w),f=$t.get(H),f.init(N),x.push(f),H.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),w!==H&&w.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const V=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ut=F.material;if(ut)if(Array.isArray(ut))for(let wt=0;wt<ut.length;wt++){const It=ut[wt];se(It,H,F),V.add(It)}else se(ut,H,F),V.add(ut)}),x.pop(),f=null,V},this.compileAsync=function(w,N,H=null){const V=this.compile(w,N,H);return new Promise(F=>{function ut(){if(V.forEach(function(wt){yt.get(wt).currentProgram.isReady()&&V.delete(wt)}),V.size===0){F(w);return}setTimeout(ut,10)}Q.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let je=null;function vn(w){je&&je(w)}function Ua(){Yn.stop()}function Na(){Yn.start()}const Yn=new Al;Yn.setAnimationLoop(vn),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(w){je=w,$.setAnimationLoop(w),w===null?Yn.stop():Yn.start()},$.addEventListener("sessionstart",Ua),$.addEventListener("sessionend",Na),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(N),N=$.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,N,I),f=$t.get(w,x.length),f.init(N),x.push(f),mt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),U.setFromProjectionMatrix(mt),ht=this.localClippingEnabled,Z=ct.init(this.clippingPlanes,ht),m=At.get(w,M.length),m.init(),M.push(m),$.enabled===!0&&$.isPresenting===!0){const ut=v.xr.getDepthSensingMesh();ut!==null&&Cr(ut,N,-1/0,v.sortObjects)}Cr(w,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(at,pt),q=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,q&&kt.addToRenderList(m,w),this.info.render.frame++,Z===!0&&ct.beginShadows();const H=f.state.shadowsArray;Rt.render(H,w,N),Z===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,F=m.transmissive;if(f.setupLights(),N.isArrayCamera){const ut=N.cameras;if(F.length>0)for(let wt=0,It=ut.length;wt<It;wt++){const Dt=ut[wt];Oa(V,F,w,Dt)}q&&kt.render(w);for(let wt=0,It=ut.length;wt<It;wt++){const Dt=ut[wt];Fa(m,w,Dt,Dt.viewport)}}else F.length>0&&Oa(V,F,w,N),q&&kt.render(w),Fa(m,w,N);I!==null&&(b.updateMultisampleRenderTarget(I),b.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(v,w,N),ue.resetDefaultState(),E=-1,S=null,x.pop(),x.length>0?(f=x[x.length-1],Z===!0&&ct.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Cr(w,N,H,V){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||U.intersectsSprite(w)){V&&Bt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(mt);const wt=j.update(w),It=w.material;It.visible&&m.push(w,wt,It,H,Bt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||U.intersectsObject(w))){const wt=j.update(w),It=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Bt.copy(w.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Bt.copy(wt.boundingSphere.center)),Bt.applyMatrix4(w.matrixWorld).applyMatrix4(mt)),Array.isArray(It)){const Dt=wt.groups;for(let Gt=0,Xt=Dt.length;Gt<Xt;Gt++){const Ut=Dt[Gt],te=It[Ut.materialIndex];te&&te.visible&&m.push(w,wt,te,H,Bt.z,Ut)}}else It.visible&&m.push(w,wt,It,H,Bt.z,null)}}const ut=w.children;for(let wt=0,It=ut.length;wt<It;wt++)Cr(ut[wt],N,H,V)}function Fa(w,N,H,V){const F=w.opaque,ut=w.transmissive,wt=w.transparent;f.setupLightsView(H),Z===!0&&ct.setGlobalState(v.clippingPlanes,H),V&&rt.viewport(P.copy(V)),F.length>0&&As(F,N,H),ut.length>0&&As(ut,N,H),wt.length>0&&As(wt,N,H),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function Oa(w,N,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new li(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?Ts:Pn,minFilter:ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const ut=f.state.transmissionRenderTarget[V.id],wt=V.viewport||P;ut.setSize(wt.z,wt.w);const It=v.getRenderTarget();v.setRenderTarget(ut),v.getClearColor(W),J=v.getClearAlpha(),J<1&&v.setClearColor(16777215,.5),v.clear(),q&&kt.render(H);const Dt=v.toneMapping;v.toneMapping=Wn;const Gt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),Z===!0&&ct.setGlobalState(v.clippingPlanes,V),As(w,H,V),b.updateMultisampleRenderTarget(ut),b.updateRenderTargetMipmap(ut),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Ut=0,te=N.length;Ut<te;Ut++){const de=N[Ut],fe=de.object,ke=de.geometry,ne=de.material,Ft=de.group;if(ne.side===fn&&fe.layers.test(V.layers)){const xn=ne.side;ne.side=Be,ne.needsUpdate=!0,Ba(fe,H,V,ke,ne,Ft),ne.side=xn,ne.needsUpdate=!0,Xt=!0}}Xt===!0&&(b.updateMultisampleRenderTarget(ut),b.updateRenderTargetMipmap(ut))}v.setRenderTarget(It),v.setClearColor(W,J),Gt!==void 0&&(V.viewport=Gt),v.toneMapping=Dt}function As(w,N,H){const V=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ut=w.length;F<ut;F++){const wt=w[F],It=wt.object,Dt=wt.geometry,Gt=V===null?wt.material:V,Xt=wt.group;It.layers.test(H.layers)&&Ba(It,N,H,Dt,Gt,Xt)}}function Ba(w,N,H,V,F,ut){w.onBeforeRender(v,N,H,V,F,ut),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(v,N,H,V,w,ut),F.transparent===!0&&F.side===fn&&F.forceSinglePass===!1?(F.side=Be,F.needsUpdate=!0,v.renderBufferDirect(H,N,V,F,w,ut),F.side=Xn,F.needsUpdate=!0,v.renderBufferDirect(H,N,V,F,w,ut),F.side=fn):v.renderBufferDirect(H,N,V,F,w,ut),w.onAfterRender(v,N,H,V,F,ut)}function Rs(w,N,H){N.isScene!==!0&&(N=gt);const V=yt.get(w),F=f.state.lights,ut=f.state.shadowsArray,wt=F.state.version,It=Lt.getParameters(w,F.state,ut,N,H),Dt=Lt.getProgramCacheKey(It);let Gt=V.programs;V.environment=w.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(w.isMeshStandardMaterial?B:y).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Gt===void 0&&(w.addEventListener("dispose",Wt),Gt=new Map,V.programs=Gt);let Xt=Gt.get(Dt);if(Xt!==void 0){if(V.currentProgram===Xt&&V.lightsStateVersion===wt)return ka(w,It),Xt}else It.uniforms=Lt.getUniforms(w),w.onBeforeCompile(It,v),Xt=Lt.acquireProgram(It,Dt),Gt.set(Dt,Xt),V.uniforms=It.uniforms;const Ut=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ut.clippingPlanes=ct.uniform),ka(w,It),V.needsLights=nh(w),V.lightsStateVersion=wt,V.needsLights&&(Ut.ambientLightColor.value=F.state.ambient,Ut.lightProbe.value=F.state.probe,Ut.directionalLights.value=F.state.directional,Ut.directionalLightShadows.value=F.state.directionalShadow,Ut.spotLights.value=F.state.spot,Ut.spotLightShadows.value=F.state.spotShadow,Ut.rectAreaLights.value=F.state.rectArea,Ut.ltc_1.value=F.state.rectAreaLTC1,Ut.ltc_2.value=F.state.rectAreaLTC2,Ut.pointLights.value=F.state.point,Ut.pointLightShadows.value=F.state.pointShadow,Ut.hemisphereLights.value=F.state.hemi,Ut.directionalShadowMap.value=F.state.directionalShadowMap,Ut.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ut.spotShadowMap.value=F.state.spotShadowMap,Ut.spotLightMatrix.value=F.state.spotLightMatrix,Ut.spotLightMap.value=F.state.spotLightMap,Ut.pointShadowMap.value=F.state.pointShadowMap,Ut.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Xt,V.uniformsList=null,Xt}function za(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=dr.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function ka(w,N){const H=yt.get(w);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function th(w,N,H,V,F){N.isScene!==!0&&(N=gt),b.resetTextureUnits();const ut=N.fog,wt=V.isMeshStandardMaterial?N.environment:null,It=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Zi,Dt=(V.isMeshStandardMaterial?B:y).get(V.envMap||wt),Gt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Xt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ut=!!H.morphAttributes.position,te=!!H.morphAttributes.normal,de=!!H.morphAttributes.color;let fe=Wn;V.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(fe=v.toneMapping);const ke=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ne=ke!==void 0?ke.length:0,Ft=yt.get(V),xn=f.state.lights;if(Z===!0&&(ht===!0||w!==S)){const Ye=w===S&&V.id===E;ct.setState(V,w,Ye)}let ie=!1;V.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==xn.state.version||Ft.outputColorSpace!==It||F.isBatchedMesh&&Ft.batching===!1||!F.isBatchedMesh&&Ft.batching===!0||F.isBatchedMesh&&Ft.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ft.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ft.instancing===!1||!F.isInstancedMesh&&Ft.instancing===!0||F.isSkinnedMesh&&Ft.skinning===!1||!F.isSkinnedMesh&&Ft.skinning===!0||F.isInstancedMesh&&Ft.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ft.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ft.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ft.instancingMorph===!1&&F.morphTexture!==null||Ft.envMap!==Dt||V.fog===!0&&Ft.fog!==ut||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==ct.numPlanes||Ft.numIntersection!==ct.numIntersection)||Ft.vertexAlphas!==Gt||Ft.vertexTangents!==Xt||Ft.morphTargets!==Ut||Ft.morphNormals!==te||Ft.morphColors!==de||Ft.toneMapping!==fe||Ft.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,Ft.__version=V.version);let Qe=Ft.currentProgram;ie===!0&&(Qe=Rs(V,N,F));let pi=!1,He=!1,Ki=!1;const pe=Qe.getUniforms(),hn=Ft.uniforms;if(rt.useProgram(Qe.program)&&(pi=!0,He=!0,Ki=!0),V.id!==E&&(E=V.id,He=!0),pi||S!==w){rt.buffers.depth.getReversed()?(it.copy(w.projectionMatrix),Xh(it),qh(it),pe.setValue(R,"projectionMatrix",it)):pe.setValue(R,"projectionMatrix",w.projectionMatrix),pe.setValue(R,"viewMatrix",w.matrixWorldInverse);const In=pe.map.cameraPosition;In!==void 0&&In.setValue(R,zt.setFromMatrixPosition(w.matrixWorld)),vt.logarithmicDepthBuffer&&pe.setValue(R,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&pe.setValue(R,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,He=!0,Ki=!0)}if(F.isSkinnedMesh){pe.setOptional(R,F,"bindMatrix"),pe.setOptional(R,F,"bindMatrixInverse");const Ye=F.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),pe.setValue(R,"boneTexture",Ye.boneTexture,b))}F.isBatchedMesh&&(pe.setOptional(R,F,"batchingTexture"),pe.setValue(R,"batchingTexture",F._matricesTexture,b),pe.setOptional(R,F,"batchingIdTexture"),pe.setValue(R,"batchingIdTexture",F._indirectTexture,b),pe.setOptional(R,F,"batchingColorTexture"),F._colorsTexture!==null&&pe.setValue(R,"batchingColorTexture",F._colorsTexture,b));const ji=H.morphAttributes;if((ji.position!==void 0||ji.normal!==void 0||ji.color!==void 0)&&Ht.update(F,H,Qe),(He||Ft.receiveShadow!==F.receiveShadow)&&(Ft.receiveShadow=F.receiveShadow,pe.setValue(R,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(hn.envMap.value=Dt,hn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(hn.envMapIntensity.value=N.environmentIntensity),He&&(pe.setValue(R,"toneMappingExposure",v.toneMappingExposure),Ft.needsLights&&eh(hn,Ki),ut&&V.fog===!0&&xt.refreshFogUniforms(hn,ut),xt.refreshMaterialUniforms(hn,V,k,tt,f.state.transmissionRenderTarget[w.id]),dr.upload(R,za(Ft),hn,b)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(dr.upload(R,za(Ft),hn,b),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&pe.setValue(R,"center",F.center),pe.setValue(R,"modelViewMatrix",F.modelViewMatrix),pe.setValue(R,"normalMatrix",F.normalMatrix),pe.setValue(R,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ye=V.uniformsGroups;for(let In=0,Dn=Ye.length;In<Dn;In++){const Ha=Ye[In];D.update(Ha,Qe),D.bind(Ha,Qe)}}return Qe}function eh(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function nh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,N,H){yt.get(w.texture).__webglTexture=N,yt.get(w.depthTexture).__webglTexture=H;const V=yt.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){const H=yt.get(w);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,H=0){I=w,T=N,A=H;let V=!0,F=null,ut=!1,wt=!1;if(w){const Dt=yt.get(w);if(Dt.__useDefaultFramebuffer!==void 0)rt.bindFramebuffer(R.FRAMEBUFFER,null),V=!1;else if(Dt.__webglFramebuffer===void 0)b.setupRenderTarget(w);else if(Dt.__hasExternalTextures)b.rebindTextures(w,yt.get(w.texture).__webglTexture,yt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ut=w.depthTexture;if(Dt.__boundDepthTexture!==Ut){if(Ut!==null&&yt.has(Ut)&&(w.width!==Ut.image.width||w.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(w)}}const Gt=w.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(wt=!0);const Xt=yt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Xt[N])?F=Xt[N][H]:F=Xt[N],ut=!0):w.samples>0&&b.useMultisampledRTT(w)===!1?F=yt.get(w).__webglMultisampledFramebuffer:Array.isArray(Xt)?F=Xt[H]:F=Xt,P.copy(w.viewport),G.copy(w.scissor),O=w.scissorTest}else P.copy(dt).multiplyScalar(k).floor(),G.copy(bt).multiplyScalar(k).floor(),O=ot;if(rt.bindFramebuffer(R.FRAMEBUFFER,F)&&V&&rt.drawBuffers(w,F),rt.viewport(P),rt.scissor(G),rt.setScissorTest(O),ut){const Dt=yt.get(w.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,Dt.__webglTexture,H)}else if(wt){const Dt=yt.get(w.texture),Gt=N||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Dt.__webglTexture,H||0,Gt)}E=-1},this.readRenderTargetPixels=function(w,N,H,V,F,ut,wt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=yt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&wt!==void 0&&(It=It[wt]),It){rt.bindFramebuffer(R.FRAMEBUFFER,It);try{const Dt=w.texture,Gt=Dt.format,Xt=Dt.type;if(!vt.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-V&&H>=0&&H<=w.height-F&&R.readPixels(N,H,V,F,Yt.convert(Gt),Yt.convert(Xt),ut)}finally{const Dt=I!==null?yt.get(I).__webglFramebuffer:null;rt.bindFramebuffer(R.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(w,N,H,V,F,ut,wt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=yt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&wt!==void 0&&(It=It[wt]),It){const Dt=w.texture,Gt=Dt.format,Xt=Dt.type;if(!vt.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-V&&H>=0&&H<=w.height-F){rt.bindFramebuffer(R.FRAMEBUFFER,It);const Ut=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ut),R.bufferData(R.PIXEL_PACK_BUFFER,ut.byteLength,R.STREAM_READ),R.readPixels(N,H,V,F,Yt.convert(Gt),Yt.convert(Xt),0);const te=I!==null?yt.get(I).__webglFramebuffer:null;rt.bindFramebuffer(R.FRAMEBUFFER,te);const de=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Wh(R,de,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ut),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ut),R.deleteBuffer(Ut),R.deleteSync(de),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,H=0){w.isTexture!==!0&&(cs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);const V=Math.pow(2,-H),F=Math.floor(w.image.width*V),ut=Math.floor(w.image.height*V),wt=N!==null?N.x:0,It=N!==null?N.y:0;b.setTexture2D(w,0),R.copyTexSubImage2D(R.TEXTURE_2D,H,0,0,wt,It,F,ut),rt.unbindTexture()},this.copyTextureToTexture=function(w,N,H=null,V=null,F=0){w.isTexture!==!0&&(cs("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],N=arguments[2],F=arguments[3]||0,H=null);let ut,wt,It,Dt,Gt,Xt,Ut,te,de;const fe=w.isCompressedTexture?w.mipmaps[F]:w.image;H!==null?(ut=H.max.x-H.min.x,wt=H.max.y-H.min.y,It=H.isBox3?H.max.z-H.min.z:1,Dt=H.min.x,Gt=H.min.y,Xt=H.isBox3?H.min.z:0):(ut=fe.width,wt=fe.height,It=fe.depth||1,Dt=0,Gt=0,Xt=0),V!==null?(Ut=V.x,te=V.y,de=V.z):(Ut=0,te=0,de=0);const ke=Yt.convert(N.format),ne=Yt.convert(N.type);let Ft;N.isData3DTexture?(b.setTexture3D(N,0),Ft=R.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(b.setTexture2DArray(N,0),Ft=R.TEXTURE_2D_ARRAY):(b.setTexture2D(N,0),Ft=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);const xn=R.getParameter(R.UNPACK_ROW_LENGTH),ie=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Qe=R.getParameter(R.UNPACK_SKIP_PIXELS),pi=R.getParameter(R.UNPACK_SKIP_ROWS),He=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,fe.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,fe.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Dt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Gt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Xt);const Ki=w.isDataArrayTexture||w.isData3DTexture,pe=N.isDataArrayTexture||N.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const hn=yt.get(w),ji=yt.get(N),Ye=yt.get(hn.__renderTarget),In=yt.get(ji.__renderTarget);rt.bindFramebuffer(R.READ_FRAMEBUFFER,Ye.__webglFramebuffer),rt.bindFramebuffer(R.DRAW_FRAMEBUFFER,In.__webglFramebuffer);for(let Dn=0;Dn<It;Dn++)Ki&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,yt.get(w).__webglTexture,F,Xt+Dn),w.isDepthTexture?(pe&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,yt.get(N).__webglTexture,F,de+Dn),R.blitFramebuffer(Dt,Gt,ut,wt,Ut,te,ut,wt,R.DEPTH_BUFFER_BIT,R.NEAREST)):pe?R.copyTexSubImage3D(Ft,F,Ut,te,de+Dn,Dt,Gt,ut,wt):R.copyTexSubImage2D(Ft,F,Ut,te,de+Dn,Dt,Gt,ut,wt);rt.bindFramebuffer(R.READ_FRAMEBUFFER,null),rt.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else pe?w.isDataTexture||w.isData3DTexture?R.texSubImage3D(Ft,F,Ut,te,de,ut,wt,It,ke,ne,fe.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(Ft,F,Ut,te,de,ut,wt,It,ke,fe.data):R.texSubImage3D(Ft,F,Ut,te,de,ut,wt,It,ke,ne,fe):w.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,F,Ut,te,ut,wt,ke,ne,fe.data):w.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,F,Ut,te,fe.width,fe.height,ke,fe.data):R.texSubImage2D(R.TEXTURE_2D,F,Ut,te,ut,wt,ke,ne,fe);R.pixelStorei(R.UNPACK_ROW_LENGTH,xn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ie),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Qe),R.pixelStorei(R.UNPACK_SKIP_ROWS,pi),R.pixelStorei(R.UNPACK_SKIP_IMAGES,He),F===0&&N.generateMipmaps&&R.generateMipmap(Ft),rt.unbindTexture()},this.copyTextureToTexture3D=function(w,N,H=null,V=null,F=0){return w.isTexture!==!0&&(cs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,w=arguments[2],N=arguments[3],F=arguments[4]||0),cs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,N,H,V,F)},this.initRenderTarget=function(w){yt.get(w).__webglFramebuffer===void 0&&b.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?b.setTextureCube(w,0):w.isData3DTexture?b.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?b.setTexture2DArray(w,0):b.setTexture2D(w,0),rt.unbindTexture()},this.resetState=function(){T=0,A=0,I=null,rt.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}class Aa{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Jt(t),this.near=e,this.far=n}clone(){return new Aa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class i0 extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class s0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=aa,this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fe=new C;class yr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=pn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Pe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new yr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ul extends fi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ci;const is=new C,Pi=new C,Li=new C,Ii=new lt,ss=new lt,Nl=new le,Js=new C,rs=new C,Ks=new C,Bc=new lt,oo=new lt,zc=new lt;class r0 extends Ee{constructor(t=new Ul){if(super(),this.isSprite=!0,this.type="Sprite",Ci===void 0){Ci=new Me;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new s0(e,5);Ci.setIndex([0,1,2,0,2,3]),Ci.setAttribute("position",new yr(n,3,0,!1)),Ci.setAttribute("uv",new yr(n,2,3,!1))}this.geometry=Ci,this.material=t,this.center=new lt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Pi.setFromMatrixScale(this.matrixWorld),Nl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Li.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Pi.multiplyScalar(-Li.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;js(Js.set(-.5,-.5,0),Li,o,Pi,s,r),js(rs.set(.5,-.5,0),Li,o,Pi,s,r),js(Ks.set(.5,.5,0),Li,o,Pi,s,r),Bc.set(0,0),oo.set(1,0),zc.set(1,1);let a=t.ray.intersectTriangle(Js,rs,Ks,!1,is);if(a===null&&(js(rs.set(-.5,.5,0),Li,o,Pi,s,r),oo.set(0,1),a=t.ray.intersectTriangle(Js,Ks,rs,!1,is),a===null))return;const c=t.ray.origin.distanceTo(is);c<t.near||c>t.far||e.push({distance:c,point:is.clone(),uv:Je.getInterpolation(is,Js,rs,Ks,Bc,oo,zc,new lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function js(i,t,e,n,s,r){Ii.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ss.x=r*Ii.x-s*Ii.y,ss.y=s*Ii.x+r*Ii.y):ss.copy(Ii),i.copy(t),i.x+=ss.x,i.y+=ss.y,i.applyMatrix4(Nl)}class fs extends fi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const kc=new le,ha=new wa,Qs=new br,tr=new C;class fr extends Ee{constructor(t=new Me,e=new fs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(s),Qs.radius+=r,t.ray.intersectsSphere(Qs)===!1)return;kc.copy(s).invert(),ha.copy(t.ray).applyMatrix4(kc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=l.getX(g);tr.fromBufferAttribute(u,m),Hc(tr,m,c,s,t,e,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,_=p;g<_;g++)tr.fromBufferAttribute(u,g),Hc(tr,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Hc(i,t,e,n,s,r,o){const a=ha.distanceSqToPoint(i);if(a<e){const c=new C;ha.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class hs extends ze{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new lt:new C);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,s=[],r=[],o=[],a=new C,c=new le;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Re(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Re(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ra extends gn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new lt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class o0 extends Ra{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ca(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const er=new C,ao=new Ca,co=new Ca,lo=new Ca;class Fl extends gn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(er.subVectors(s[0],s[1]).add(s[0]),l=er);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(er.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=er),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ao.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),co.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),lo.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(ao.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),co.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),lo.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(ao.calc(c),co.calc(c),lo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Gc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function a0(i,t){const e=1-i;return e*e*t}function c0(i,t){return 2*(1-i)*i*t}function l0(i,t){return i*i*t}function ps(i,t,e,n){return a0(i,t)+c0(i,e)+l0(i,n)}function h0(i,t){const e=1-i;return e*e*e*t}function u0(i,t){const e=1-i;return 3*e*e*i*t}function d0(i,t){return 3*(1-i)*i*i*t}function f0(i,t){return i*i*i*t}function ms(i,t,e,n,s){return h0(i,t)+u0(i,e)+d0(i,n)+f0(i,s)}class Ol extends gn{constructor(t=new lt,e=new lt,n=new lt,s=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new lt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ms(t,s.x,r.x,o.x,a.x),ms(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class p0 extends gn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ms(t,s.x,r.x,o.x,a.x),ms(t,s.y,r.y,o.y,a.y),ms(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Bl extends gn{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class m0 extends gn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zl extends gn{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ps(t,s.x,r.x,o.x),ps(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kl extends gn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ps(t,s.x,r.x,o.x),ps(t,s.y,r.y,o.y),ps(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hl extends gn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Gc(a,c.x,l.x,h.x,u.x),Gc(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new lt().fromArray(s))}return this}}var Sr=Object.freeze({__proto__:null,ArcCurve:o0,CatmullRomCurve3:Fl,CubicBezierCurve:Ol,CubicBezierCurve3:p0,EllipseCurve:Ra,LineCurve:Bl,LineCurve3:m0,QuadraticBezierCurve:zl,QuadraticBezierCurve3:kl,SplineCurve:Hl});class g0 extends gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Sr[s.type]().fromJSON(s))}return this}}class ua extends g0{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Bl(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new zl(this.currentPoint.clone(),new lt(t,e),new lt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Ol(this.currentPoint.clone(),new lt(t,e),new lt(n,s),new lt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Hl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Ra(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ms extends Me{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Re(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new C,d=new lt,p=new C,g=new C,_=new C;let m=0,f=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,f=t[M+1].y-t[M].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[M+1].x-t[M].x,f=t[M+1].y-t[M].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),c.push(p.x,p.y,p.z),_.copy(g)}for(let M=0;M<=e;M++){const x=n+M*h*s,v=Math.sin(x),L=Math.cos(x);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*v,u.y=t[T].y,u.z=t[T].x*L,o.push(u.x,u.y,u.z),d.x=M/e,d.y=T/(t.length-1),a.push(d.x,d.y);const A=c[3*T+0]*v,I=c[3*T+1],E=c[3*T+0]*L;l.push(A,I,E)}}for(let M=0;M<e;M++)for(let x=0;x<t.length-1;x++){const v=x+M*t.length,L=v,T=v+t.length,A=v+t.length+1,I=v+1;r.push(L,T,I),r.push(A,I,T)}this.setIndex(r),this.setAttribute("position",new he(o,3)),this.setAttribute("uv",new he(a,2)),this.setAttribute("normal",new he(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ms(t.points,t.segments,t.phiStart,t.phiLength)}}class kn extends Ms{constructor(t=1,e=1,n=4,s=8){const r=new ua;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new kn(t.radius,t.length,t.capSegments,t.radialSegments)}}class ri extends Me{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new C,h=new lt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new he(o,3)),this.setAttribute("normal",new he(a,3)),this.setAttribute("uv",new he(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ri(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class xe extends Me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;M(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new he(u,3)),this.setAttribute("normal",new he(d,3)),this.setAttribute("uv",new he(p,2));function M(){const v=new C,L=new C;let T=0;const A=(e-t)/n;for(let I=0;I<=r;I++){const E=[],S=I/r,P=S*(e-t)+t;for(let G=0;G<=s;G++){const O=G/s,W=O*c+a,J=Math.sin(W),X=Math.cos(W);L.x=P*J,L.y=-S*n+m,L.z=P*X,u.push(L.x,L.y,L.z),v.set(J,A,X).normalize(),d.push(v.x,v.y,v.z),p.push(O,1-S),E.push(g++)}_.push(E)}for(let I=0;I<s;I++)for(let E=0;E<r;E++){const S=_[E][I],P=_[E+1][I],G=_[E+1][I+1],O=_[E][I+1];(t>0||E!==0)&&(h.push(S,P,O),T+=3),(e>0||E!==r-1)&&(h.push(P,G,O),T+=3)}l.addGroup(f,T,0),f+=T}function x(v){const L=g,T=new lt,A=new C;let I=0;const E=v===!0?t:e,S=v===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),g++;const P=g;for(let G=0;G<=s;G++){const W=G/s*c+a,J=Math.cos(W),X=Math.sin(W);A.x=E*X,A.y=m*S,A.z=E*J,u.push(A.x,A.y,A.z),d.push(0,S,0),T.x=J*.5+.5,T.y=X*.5*S+.5,p.push(T.x,T.y),g++}for(let G=0;G<s;G++){const O=L+G,W=P+G;v===!0?h.push(W,W+1,O):h.push(W+1,W,O),I+=3}l.addGroup(f,I,v===!0?1:2),f+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class gs extends xe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new gs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Gl extends ua{constructor(t){super(t),this.uuid=Rn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new ua().fromJSON(s))}return this}}const _0={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Vl(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,p;if(n&&(r=S0(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return ys(r,o,e,a,c,p,0),o}};function Vl(i,t,e,n,s){let r,o;if(s===D0(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Vc(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Vc(r,i[r],i[r+1],o);return o&&Ar(o,o.next)&&(ws(o),o=o.next),o}function hi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ar(e,e.next)||ge(e.prev,e,e.next)===0)){if(ws(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ys(i,t,e,n,s,r,o){if(!i)return;!o&&r&&A0(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?x0(i,n,s,r):v0(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),ws(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=M0(hi(i),t,e),ys(i,t,e,n,s,r,2)):o===2&&y0(i,t,e,n,s,r):ys(hi(i),t,e,n,s,r,1);break}}}function v0(i){const t=i.prev,e=i,n=i.next;if(ge(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,p=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Oi(s,a,r,c,o,l,g.x,g.y)&&ge(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function x0(i,t,e,n){const s=i.prev,r=i,o=i.next;if(ge(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,p=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,f=da(p,g,t,e,n),M=da(_,m,t,e,n);let x=i.prevZ,v=i.nextZ;for(;x&&x.z>=f&&v&&v.z<=M;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Oi(a,h,c,u,l,d,x.x,x.y)&&ge(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Oi(a,h,c,u,l,d,v.x,v.y)&&ge(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=f;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Oi(a,h,c,u,l,d,x.x,x.y)&&ge(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=M;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Oi(a,h,c,u,l,d,v.x,v.y)&&ge(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function M0(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Ar(s,r)&&Wl(s,n,n.next,r)&&Ss(s,r)&&Ss(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),ws(n),ws(n.next),n=i=r),n=n.next}while(n!==i);return hi(n)}function y0(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&P0(o,a)){let c=Xl(o,a);o=hi(o,o.next),c=hi(c,c.next),ys(o,t,e,n,s,r,0),ys(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function S0(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Vl(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(C0(l));for(s.sort(w0),r=0;r<s.length;r++)e=E0(s[r],e);return e}function w0(i,t){return i.x-t.x}function E0(i,t){const e=b0(i,t);if(!e)return t;const n=Xl(e,i);return hi(n,n.next),hi(e,e.next)}function b0(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Oi(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Ss(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&T0(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function T0(i,t){return ge(i.prev,i,t.prev)<0&&ge(t.next,i,i.next)<0}function A0(i,t,e,n){let s=i;do s.z===0&&(s.z=da(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,R0(s)}function R0(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function da(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function C0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Oi(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function P0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!L0(i,t)&&(Ss(i,t)&&Ss(t,i)&&I0(i,t)&&(ge(i.prev,i,t.prev)||ge(i,t.prev,t))||Ar(i,t)&&ge(i.prev,i,i.next)>0&&ge(t.prev,t,t.next)>0)}function ge(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ar(i,t){return i.x===t.x&&i.y===t.y}function Wl(i,t,e,n){const s=ir(ge(i,t,e)),r=ir(ge(i,t,n)),o=ir(ge(e,n,i)),a=ir(ge(e,n,t));return!!(s!==r&&o!==a||s===0&&nr(i,e,t)||r===0&&nr(i,n,t)||o===0&&nr(e,i,n)||a===0&&nr(e,t,n))}function nr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ir(i){return i>0?1:i<0?-1:0}function L0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Wl(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ss(i,t){return ge(i.prev,i,i.next)<0?ge(i,t,i.next)>=0&&ge(i,i.prev,t)>=0:ge(i,t,i.prev)<0||ge(i,i.next,t)<0}function I0(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Xl(i,t){const e=new fa(i.i,i.x,i.y),n=new fa(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Vc(i,t,e,n){const s=new fa(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ws(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function fa(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function D0(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class _s{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return _s.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Wc(t),Xc(n,t);let o=t.length;e.forEach(Wc);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Xc(n,e[c]);const a=_0.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Wc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Xc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Pa extends Me{constructor(t=new Gl([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new he(s,3)),this.setAttribute("uv",new he(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:U0;let x,v=!1,L,T,A,I;f&&(x=f.getSpacedPoints(h),v=!0,d=!1,L=f.computeFrenetFrames(h,!1),T=new C,A=new C,I=new C),d||(m=0,p=0,g=0,_=0);const E=a.extractPoints(l);let S=E.shape;const P=E.holes;if(!_s.isClockWise(S)){S=S.reverse();for(let q=0,st=P.length;q<st;q++){const R=P[q];_s.isClockWise(R)&&(P[q]=R.reverse())}}const O=_s.triangulateShape(S,P),W=S;for(let q=0,st=P.length;q<st;q++){const R=P[q];S=S.concat(R)}function J(q,st,R){return st||console.error("THREE.ExtrudeGeometry: vec does not exist"),q.clone().addScaledVector(st,R)}const X=S.length,tt=O.length;function k(q,st,R){let Tt,Q,vt;const rt=q.x-st.x,Nt=q.y-st.y,yt=R.x-q.x,b=R.y-q.y,y=rt*rt+Nt*Nt,B=rt*b-Nt*yt;if(Math.abs(B)>Number.EPSILON){const K=Math.sqrt(y),nt=Math.sqrt(yt*yt+b*b),j=st.x-Nt/K,Lt=st.y+rt/K,xt=R.x-b/nt,At=R.y+yt/nt,$t=((xt-j)*b-(At-Lt)*yt)/(rt*b-Nt*yt);Tt=j+rt*$t-q.x,Q=Lt+Nt*$t-q.y;const ct=Tt*Tt+Q*Q;if(ct<=2)return new lt(Tt,Q);vt=Math.sqrt(ct/2)}else{let K=!1;rt>Number.EPSILON?yt>Number.EPSILON&&(K=!0):rt<-Number.EPSILON?yt<-Number.EPSILON&&(K=!0):Math.sign(Nt)===Math.sign(b)&&(K=!0),K?(Tt=-Nt,Q=rt,vt=Math.sqrt(y)):(Tt=rt,Q=Nt,vt=Math.sqrt(y/2))}return new lt(Tt/vt,Q/vt)}const at=[];for(let q=0,st=W.length,R=st-1,Tt=q+1;q<st;q++,R++,Tt++)R===st&&(R=0),Tt===st&&(Tt=0),at[q]=k(W[q],W[R],W[Tt]);const pt=[];let dt,bt=at.concat();for(let q=0,st=P.length;q<st;q++){const R=P[q];dt=[];for(let Tt=0,Q=R.length,vt=Q-1,rt=Tt+1;Tt<Q;Tt++,vt++,rt++)vt===Q&&(vt=0),rt===Q&&(rt=0),dt[Tt]=k(R[Tt],R[vt],R[rt]);pt.push(dt),bt=bt.concat(dt)}for(let q=0;q<m;q++){const st=q/m,R=p*Math.cos(st*Math.PI/2),Tt=g*Math.sin(st*Math.PI/2)+_;for(let Q=0,vt=W.length;Q<vt;Q++){const rt=J(W[Q],at[Q],Tt);it(rt.x,rt.y,-R)}for(let Q=0,vt=P.length;Q<vt;Q++){const rt=P[Q];dt=pt[Q];for(let Nt=0,yt=rt.length;Nt<yt;Nt++){const b=J(rt[Nt],dt[Nt],Tt);it(b.x,b.y,-R)}}}const ot=g+_;for(let q=0;q<X;q++){const st=d?J(S[q],bt[q],ot):S[q];v?(A.copy(L.normals[0]).multiplyScalar(st.x),T.copy(L.binormals[0]).multiplyScalar(st.y),I.copy(x[0]).add(A).add(T),it(I.x,I.y,I.z)):it(st.x,st.y,0)}for(let q=1;q<=h;q++)for(let st=0;st<X;st++){const R=d?J(S[st],bt[st],ot):S[st];v?(A.copy(L.normals[q]).multiplyScalar(R.x),T.copy(L.binormals[q]).multiplyScalar(R.y),I.copy(x[q]).add(A).add(T),it(I.x,I.y,I.z)):it(R.x,R.y,u/h*q)}for(let q=m-1;q>=0;q--){const st=q/m,R=p*Math.cos(st*Math.PI/2),Tt=g*Math.sin(st*Math.PI/2)+_;for(let Q=0,vt=W.length;Q<vt;Q++){const rt=J(W[Q],at[Q],Tt);it(rt.x,rt.y,u+R)}for(let Q=0,vt=P.length;Q<vt;Q++){const rt=P[Q];dt=pt[Q];for(let Nt=0,yt=rt.length;Nt<yt;Nt++){const b=J(rt[Nt],dt[Nt],Tt);v?it(b.x,b.y+x[h-1].y,x[h-1].x+R):it(b.x,b.y,u+R)}}}U(),Z();function U(){const q=s.length/3;if(d){let st=0,R=X*st;for(let Tt=0;Tt<tt;Tt++){const Q=O[Tt];mt(Q[2]+R,Q[1]+R,Q[0]+R)}st=h+m*2,R=X*st;for(let Tt=0;Tt<tt;Tt++){const Q=O[Tt];mt(Q[0]+R,Q[1]+R,Q[2]+R)}}else{for(let st=0;st<tt;st++){const R=O[st];mt(R[2],R[1],R[0])}for(let st=0;st<tt;st++){const R=O[st];mt(R[0]+X*h,R[1]+X*h,R[2]+X*h)}}n.addGroup(q,s.length/3-q,0)}function Z(){const q=s.length/3;let st=0;ht(W,st),st+=W.length;for(let R=0,Tt=P.length;R<Tt;R++){const Q=P[R];ht(Q,st),st+=Q.length}n.addGroup(q,s.length/3-q,1)}function ht(q,st){let R=q.length;for(;--R>=0;){const Tt=R;let Q=R-1;Q<0&&(Q=q.length-1);for(let vt=0,rt=h+m*2;vt<rt;vt++){const Nt=X*vt,yt=X*(vt+1),b=st+Tt+Nt,y=st+Q+Nt,B=st+Q+yt,K=st+Tt+yt;zt(b,y,B,K)}}}function it(q,st,R){c.push(q),c.push(st),c.push(R)}function mt(q,st,R){Bt(q),Bt(st),Bt(R);const Tt=s.length/3,Q=M.generateTopUV(n,s,Tt-3,Tt-2,Tt-1);gt(Q[0]),gt(Q[1]),gt(Q[2])}function zt(q,st,R,Tt){Bt(q),Bt(st),Bt(Tt),Bt(st),Bt(R),Bt(Tt);const Q=s.length/3,vt=M.generateSideWallUV(n,s,Q-6,Q-3,Q-2,Q-1);gt(vt[0]),gt(vt[1]),gt(vt[3]),gt(vt[1]),gt(vt[2]),gt(vt[3])}function Bt(q){s.push(c[q*3+0]),s.push(c[q*3+1]),s.push(c[q*3+2])}function gt(q){r.push(q.x),r.push(q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return N0(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Sr[s.type]().fromJSON(s)),new Pa(n,t.options)}}const U0={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new lt(r,o),new lt(a,c),new lt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new lt(o,1-c),new lt(l,1-u),new lt(d,1-g),new lt(_,1-f)]:[new lt(a,1-c),new lt(h,1-u),new lt(p,1-g),new lt(m,1-f)]}};function N0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class me extends Me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new C,d=new C,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const M=[],x=f/n;let v=0;f===0&&o===0?v=.5/e:f===n&&c===Math.PI&&(v=-.5/e);for(let L=0;L<=e;L++){const T=L/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+v,1-x),M.push(l++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<e;M++){const x=h[f][M+1],v=h[f][M],L=h[f+1][M],T=h[f+1][M+1];(f!==0||o>0)&&p.push(x,v,T),(f!==n-1||c<Math.PI)&&p.push(v,L,T)}this.setIndex(p),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(_,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new me(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ce extends Me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new C,u=new C,d=new C;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,M=(s+1)*p+g;o.push(_,m,M),o.push(m,f,M)}this.setIndex(o),this.setAttribute("position",new he(a,3)),this.setAttribute("normal",new he(c,3)),this.setAttribute("uv",new he(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ce(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class La extends Me{constructor(t=new kl(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new C,c=new C,l=new lt;let h=new C;const u=[],d=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new he(u,3)),this.setAttribute("normal",new he(d,3)),this.setAttribute("uv",new he(p,2));function _(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),M(),f()}function m(x){h=t.getPointAt(x/e,h);const v=o.normals[x],L=o.binormals[x];for(let T=0;T<=s;T++){const A=T/s*Math.PI*2,I=Math.sin(A),E=-Math.cos(A);c.x=E*v.x+I*L.x,c.y=E*v.y+I*L.y,c.z=E*v.z+I*L.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function f(){for(let x=1;x<=e;x++)for(let v=1;v<=s;v++){const L=(s+1)*(x-1)+(v-1),T=(s+1)*x+(v-1),A=(s+1)*x+v,I=(s+1)*(x-1)+v;g.push(L,T,I),g.push(T,A,I)}}function M(){for(let x=0;x<=e;x++)for(let v=0;v<=s;v++)l.x=x/e,l.y=v/s,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new La(new Sr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class ft extends fi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gl,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ia extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class F0 extends Ia{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ho=new le,qc=new C,Yc=new C;class ql{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ba,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;qc.setFromMatrixPosition(t.matrixWorld),e.position.copy(qc),Yc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yc),e.updateMatrixWorld(),ho.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ho),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ho)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Zc=new le,os=new C,uo=new C;class O0 extends ql{constructor(){super(new Xe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),os.setFromMatrixPosition(t.matrixWorld),n.position.copy(os),uo.copy(n.position),uo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(uo),n.updateMatrixWorld(),s.makeTranslation(-os.x,-os.y,-os.z),Zc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zc)}}class fo extends Ia{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new O0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class B0 extends ql{constructor(){super(new Rl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class z0 extends Ia{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new B0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class k0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$c(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=$c();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function $c(){return performance.now()}const Jc=new le;class H0{constructor(t,e,n=0,s=1/0){this.ray=new wa(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ea,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Jc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jc),this}intersectObject(t,e=!0,n=[]){return pa(t,this,n,e),n.sort(Kc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)pa(t[s],this,n,e);return n.sort(Kc),n}}function Kc(i,t){return i.distance-t.distance}function pa(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)pa(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ga}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ga);function sr(i,t,e){return i<t?t:i>e?e:i}function oe(i){return i<0?0:i>1?1:i}function Pt(i,t,e){return i+(t-i)*e}function as(i,t,e,n,s){return n+(s-n)*oe((i-t)/(e-t))}function us(i,t,e,n){return Pt(i,t,1-Math.exp(-e*n))}function we(i){return i*i*(3-2*i)}function pr(i){return 1-(1-i)*(1-i)}function mr(i){return i*i}function G0(i){return 1+2.4*Math.pow(i-1,3)+1.4*Math.pow(i-1,2)}function rr(i){const t=2*Math.PI/3;return i===0||i===1?i:Math.pow(2,-10*i)*Math.sin((i*10-.75)*t)+1}function ye(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function ee(i,t,e){return t+(e-t)*i()}function Ln(i){const e=[];for(let s=0;s<64*64;s++)e.push(i());const n=(s,r)=>e[(r%64+64)%64*64+(s%64+64)%64];return(s,r)=>{const o=Math.floor(s),a=Math.floor(r),c=s-o,l=r-a,h=we(c),u=we(l),d=Pt(n(o,a),n(o+1,a),h),p=Pt(n(o,a+1),n(o+1,a+1),h);return Pt(d,p,u)}}function ln(i,t,e,n=4){let s=0,r=.5,o=1;for(let a=0;a<n;a++)s+=r*i(t*o,e*o),r*=.5,o*=2;return s}class We{constructor(){this.items=[],this.calls=[],this.time=0,this.len=0,this.onComplete=null,this.completed=!1}add(t,e,n,s){return this.items.push({start:t,dur:e,fn:n,done:s,fired:!1,finished:!1}),this.len=Math.max(this.len,t+e),this}call(t,e){return this.calls.push({at:t,fn:e,fired:!1}),this.len=Math.max(this.len,t),this}then(t){return this.onComplete=t,this}get duration(){return this.len}update(t){this.time+=t;for(const e of this.calls)!e.fired&&this.time>=e.at&&(e.fired=!0,e.fn());for(const e of this.items)if(this.time>=e.start&&!e.finished){e.fired=!0;const n=e.dur<=0?1:oe((this.time-e.start)/e.dur);e.fn(n),n>=1&&(e.finished=!0,e.done&&e.done())}return this.time>=this.len&&!this.completed&&(this.completed=!0,this.onComplete&&this.onComplete()),this.time<this.len}}function _n(i,t,e){const n=document.createElement("canvas");n.width=i,n.height=t;const s=n.getContext("2d");e(s);const r=new hs(n);return r.colorSpace=Ne,r.wrapS=vs,r.wrapT=vs,r.anisotropy=4,r}function Yi(i,t,e){return`hsl(${i}, ${t}%, ${e}%)`}function po(i,t=512,e=512){const n=ye(i.seed),s=Ln(ye(i.seed+7));return _n(t,e,r=>{r.fillStyle=Yi(i.hue+6,Math.max(4,i.sat*.25),58),r.fillRect(0,0,t,e);for(let d=0;d<2600;d++){const p=n()*t,g=n()*e;r.fillStyle=`rgba(${30+n()*40}, ${28+n()*36}, ${26+n()*34}, ${.05+n()*.08})`,r.fillRect(p,g,1+n()*2,1+n()*2)}const o=10,a=e/o,c=a*2.15,l=Math.max(2,e*.012);for(let d=0;d<o;d++){const p=d%2*c*.5;for(let g=-1;g<t/c+1;g++){const _=g*c+p+l/2,m=d*a+l/2,f=c-l,M=a-l,x=(n()-.5)*9+(s(g*.8,d*.8)-.5)*14,v=(n()-.5)*10;r.fillStyle=Yi(i.hue+v,i.sat+(n()-.5)*8,i.light+x);const L=(n()-.5)*2,T=(n()-.5)*2;r.fillRect(_+L,m+T,f,M),r.fillStyle="rgba(255,235,220,0.10)",r.fillRect(_+L,m+T,f,2),r.fillStyle="rgba(20,10,8,0.22)",r.fillRect(_+L,m+T+M-2.5,f,2.5);const A=Math.floor(n()*4);for(let I=0;I<A;I++){r.fillStyle=`rgba(${20+n()*30},${14+n()*20},${12+n()*16},${.05+n()*.12})`;const E=_+n()*f,S=m+n()*M;r.beginPath(),r.ellipse(E,S,2+n()*8,1.5+n()*5,n()*Math.PI,0,Math.PI*2),r.fill()}}}const h=r.getImageData(0,0,t,e),u=h.data;for(let d=0;d<e;d++){const p=d/e,g=Pt(i.sootTop,i.sootBottom,p);for(let _=0;_<t;_++){const m=(d*t+_)*4,M=.82+ln(s,_/90,d/90,3)*.36,x=ln(s,_/34,p*2.2,3),v=oe(g*(.4+x*.9))*.85,L=M*(1-v);u[m]=u[m]*L,u[m+1]=u[m+1]*L*(1-v*.15),u[m+2]=u[m+2]*L*(1-v*.2)}}r.putImageData(h,0,0)})}function mo(i,t=512,e=512){const n=ye(i),s=Ln(ye(i+3));return _n(t,e,r=>{const o=r.createImageData(t,e),a=o.data;for(let c=0;c<e;c++)for(let l=0;l<t;l++){const h=(c*t+l)*4,u=ln(s,l/60,c/60,4),d=ln(s,l/14,c/14,2),p=168+u*46+d*16;a[h]=p*.86,a[h+1]=p*.92,a[h+2]=Math.min(255,p*1.06),a[h+3]=255}r.putImageData(o,0,0);for(let c=0;c<130;c++){const l=n()*t,h=n()*e;r.fillStyle=`rgba(235, 242, 255, ${.25+n()*.4})`,r.fillRect(l,h,1.4,1.4)}})}function V0(i,t=512,e=512){const n=ye(i),s=Ln(ye(i+11));return _n(t,e,r=>{const o=r.createImageData(t,e),a=o.data;for(let c=0;c<e;c++)for(let l=0;l<t;l++){const h=(c*t+l)*4,u=(l%3===0?.05:0)+(c%3===0?.04:0),d=ln(s,l/70,c/70,4),p=Math.sin(c/26+ln(s,l/48,c/120,3)*7),g=.72+d*.3+p*.1-u;a[h]=172*g,a[h+1]=30*g,a[h+2]=34*g,a[h+3]=255}r.putImageData(o,0,0),r.strokeStyle="rgba(96, 10, 14, 0.55)",r.lineWidth=2;for(const c of[t*.24,t*.76]){r.beginPath(),r.moveTo(c,0);for(let l=0;l<=e;l+=8)r.lineTo(c+Math.sin(l/40)*3+(n()-.5)*1.5,l);r.stroke(),r.strokeStyle="rgba(230, 120, 110, 0.28)",r.lineWidth=1,r.beginPath(),r.moveTo(c+3,0);for(let l=0;l<=e;l+=8)r.lineTo(c+3+Math.sin(l/40)*3,l);r.stroke(),r.strokeStyle="rgba(96, 10, 14, 0.55)",r.lineWidth=2}for(let c=0;c<7;c++){const l=n()*t,h=n()*e,u=r.createRadialGradient(l,h,0,l,h,24+n()*40);u.addColorStop(0,`rgba(210, 120, 110, ${.06+n()*.1})`),u.addColorStop(1,"rgba(210, 120, 110, 0)"),r.fillStyle=u,r.fillRect(0,0,t,e)}for(let c=0;c<5;c++){const l=n()*t,h=e*(.75+n()*.25),u=r.createRadialGradient(l,h,0,l,h,20+n()*30);u.addColorStop(0,`rgba(20, 16, 14, ${.1+n()*.12})`),u.addColorStop(1,"rgba(20, 16, 14, 0)"),r.fillStyle=u,r.fillRect(0,0,t,e)}})}function W0(i,t=256,e=256){const n=ye(i),s=Ln(ye(i+5));return _n(t,e,r=>{r.fillStyle="#cfc9bd",r.fillRect(0,0,t,e);for(let o=0;o<2400;o++){const a=n()*t,c=n()*e,l=4+n()*9,h=-Math.PI/2+(n()-.5)*1.1+(s(a/40,c/40)-.5)*1.4,u=200+n()*55;r.strokeStyle=`rgba(${u}, ${u-4}, ${u-14}, ${.16+n()*.2})`,r.lineWidth=.8+n()*.9,r.beginPath(),r.moveTo(a,c),r.lineTo(a+Math.cos(h)*l,c+Math.sin(h)*l),r.stroke()}for(let o=0;o<26;o++){const a=n()*t;r.strokeStyle=`rgba(90, 84, 74, ${.1+n()*.1})`,r.lineWidth=2+n()*3,r.beginPath(),r.moveTo(a,0),r.bezierCurveTo(a+10,e*.3,a-10,e*.6,a+(n()-.5)*20,e),r.stroke()}for(let o=0;o<8;o++){const a=n()*t,c=n()*e,l=r.createRadialGradient(a,c,0,a,c,14+n()*26);l.addColorStop(0,`rgba(70, 60, 48, ${.05+n()*.09})`),l.addColorStop(1,"rgba(70, 60, 48, 0)"),r.fillStyle=l,r.fillRect(0,0,t,e)}})}function X0(i,t=512,e=512){const n=ye(i),s=Ln(ye(i+17));return _n(t,e,r=>{const o=r.createImageData(t,e),a=o.data;for(let u=0;u<e;u++)for(let d=0;d<t;d++){const p=(u*t+d)*4,g=ln(s,d/80,u/80,4),_=ln(s,d/8,u/8,2)*.12,m=Math.sin((d+u*.4)/60+g*5)*.06,f=.62+g*.3+_+m;a[p]=118*f,a[p+1]=52*f,a[p+2]=40*f,a[p+3]=255}r.putImageData(o,0,0);const c=t*(.55+n()*.2),l=e*(.5+n()*.25);r.fillStyle="rgba(84, 44, 30, 0.85)",r.fillRect(c,l,70,54),r.strokeStyle="rgba(220, 190, 150, 0.6)",r.lineWidth=2,r.setLineDash([6,5]),r.strokeRect(c+4,l+4,62,46),r.setLineDash([]);const h=r.createLinearGradient(0,e*.7,0,e);h.addColorStop(0,"rgba(18, 14, 12, 0)"),h.addColorStop(1,"rgba(18, 14, 12, 0.35)"),r.fillStyle=h,r.fillRect(0,0,t,e)})}function gr(i,t=26,e=512,n=256){const s=ye(i),r=Ln(ye(i+23));return _n(e,n,o=>{const a=o.createImageData(e,n),c=a.data;for(let l=0;l<n;l++)for(let h=0;h<e;h++){const u=(l*e+h)*4,d=ln(r,h/160,l/9,4),p=Math.sin(d*22+h/30)*.5+.5,g=.34+d*.3+p*.12;c[u]=150*g*(1+t/100),c[u+1]=96*g,c[u+2]=58*g,c[u+3]=255}o.putImageData(a,0,0);for(let l=0;l<5;l++){const h=s()*e,u=s()*n;o.fillStyle="rgba(40, 22, 12, 0.5)",o.beginPath(),o.ellipse(h,u,3+s()*4,2+s()*3,0,0,Math.PI*2),o.fill()}})}function q0(i,t,e=512,n=512){const s=Ln(ye(i+31));return _n(e,n,r=>{r.fillStyle=Yi(t,22,56),r.fillRect(0,0,e,n);for(let c=0;c<e;c+=64)r.fillStyle="rgba(255, 250, 235, 0.06)",r.fillRect(c,0,26,n);r.fillStyle="rgba(60, 46, 40, 0.10)";for(let c=32;c<n;c+=96)for(let l=32;l<e;l+=64)r.beginPath(),r.arc(l,c,5,0,Math.PI*2),r.arc(l,c+9,3.4,0,Math.PI*2),r.fill();const o=r.getImageData(0,0,e,n),a=o.data;for(let c=0;c<n;c++)for(let l=0;l<e;l++){const h=(c*e+l)*4,d=.86+ln(s,l/120,c/120,3)*.2;a[h]*=d,a[h+1]*=d,a[h+2]*=d*.98}r.putImageData(o,0,0)})}function Y0(i,t,e=256,n=256){const s=Ln(ye(i+41));return _n(e,n,r=>{r.fillStyle=Yi(t,52,40),r.fillRect(0,0,e,n);for(let o=0;o<n;o+=10)for(let a=0;a<e;a+=8){const c=s(a/30,o/30);r.strokeStyle=`hsla(${t}, 55%, ${30+c*26}%, 0.8)`,r.lineWidth=2.2,r.beginPath(),r.moveTo(a,o),r.lineTo(a+4,o+7),r.lineTo(a+8,o),r.stroke()}})}function Z0(i,t=128,e=128){const n=Ln(ye(i+51));return _n(t,e,s=>{const r=s.createImageData(t,e),o=r.data;for(let a=0;a<e;a++)for(let c=0;c<t;c++){const l=(a*t+c)*4,h=ln(n,c/26,a/26,3);o[l]=226*(.9+h*.16),o[l+1]=176*(.88+h*.16),o[l+2]=152*(.86+h*.16),o[l+3]=255}s.putImageData(r,0,0)})}function $0(i,t,e=256,n=256){const s=ye(i);return _n(e,n,r=>{r.fillStyle=Yi(t,34,34),r.fillRect(0,0,e,n);for(let o=0;o<7;o++)r.strokeStyle=Yi(t+o*14,32,30+o*4),r.lineWidth=10,r.beginPath(),r.ellipse(e/2,n/2,e*.44-o*15,n*.42-o*14,0,0,Math.PI*2),r.stroke();for(let o=0;o<500;o++)r.fillStyle=`rgba(0,0,0,${.03+s()*.05})`,r.fillRect(s()*e,s()*n,2,2)})}const Y={ridgeY:4.9,eaveY:3.05,eaveX:2.9,chimneyX:1.35,chimneyZ:-1.62,chimneyTopY:5.02,innerHalf:.31,shaftBottomY:1,fireboxFloorY:.03,roomFloorTopY:.02,fireboxFloorTopY:.06,hearthTopY:.09,fireboxFrontZ:-1.12,roomSantaZ:0,roomCeilY:2.75,standX:2.1,standZ:-1.62,sledX:-.6,sledZ:1.1,stockingX:.78,stockingTopY:1.22,stockingZ:-1.06,bagRestX:2.35,bagRestZ:0};function Gn(i){return Y.ridgeY-(Y.ridgeY-Y.eaveY)/Y.eaveX*Math.abs(i)}function J0(i){const t=ye(i);return{seed:i,brickHue:ee(t,4,26),brickSat:ee(t,26,44),brickLight:ee(t,34,48),wallHue:[36,148,210,16][Math.floor(t()*4)],stockingHue:[0,352,145,214][Math.floor(t()*4)],innerHalf:ee(t,.29,.33),moonAz:ee(t,-.7,.35)}}class K0{constructor(t){this.group=new jt,this.frontFadeMats=[],this.houseFadeMats=[],this.frontFade=1,this.houseFade=1,this.emberMats=[],this.flames=[],this.snowVel=[],this.time=0,this.trailRng=ye(Date.now()%1e5+7),this.completedSootMarks=[],this.activeSootMarks=[],this.damperGroup=new jt,this.cleanoutGroup=new jt,this.damperRestAngle=-Math.PI/2,this.historyZone=null,this.historyT=99,this.historyMark=new jt,this.distantSleigh=new jt,this.distantSleighT=99,this.hintMoteT=99,this.fireLevel=.85,this.variation=J0(t),this.trailCanvas=document.createElement("canvas"),this.trailCanvas.width=384,this.trailCanvas.height=1280,this.trailCtx=this.trailCanvas.getContext("2d"),Y.innerHalf=this.variation.innerHalf,this.build()}build(){const t=this.variation,e=ye(t.seed+500),n=this.group,s=document.createElement("canvas");s.width=16,s.height=256;const r=s.getContext("2d"),o=r.createLinearGradient(0,0,0,256);o.addColorStop(0,"#04060f"),o.addColorStop(.42,"#0a1226"),o.addColorStop(.75,"#16223f"),o.addColorStop(1,"#233252"),r.fillStyle=o,r.fillRect(0,0,16,256);const a=new hs(s);a.colorSpace=Ne;const c=new z(new me(70,24,18),new rn({map:a,side:Be,fog:!1,depthWrite:!1}));c.position.y=6,n.add(c);{const _=new Float32Array(720);for(let M=0;M<240;M++){const x=e()*Math.PI*2,v=e()*1.15+.12,L=66;_[M*3]=Math.cos(x)*Math.cos(v)*L,_[M*3+1]=Math.sin(v)*L+4,_[M*3+2]=Math.sin(x)*Math.cos(v)*L}const m=new Me;m.setAttribute("position",new Pe(_,3));const f=new fr(m,new fs({color:13621743,size:.16,sizeAttenuation:!0,fog:!1,transparent:!0,opacity:.85,depthWrite:!1}));n.add(f)}this.buildDistantSleigh();const l=new C(-.5+Math.sin(t.moonAz)*.2,.85,.7+Math.cos(t.moonAz)*.15).normalize();{const g=l.clone().multiplyScalar(60).add(new C(0,6,0)),_=new z(new ri(2.6,28),new rn({color:15920346,fog:!1}));_.position.copy(g),_.lookAt(0,4,0),n.add(_);const m=document.createElement("canvas");m.width=m.height=128;const f=m.getContext("2d"),M=f.createRadialGradient(64,64,6,64,64,64);M.addColorStop(0,"rgba(235, 232, 210, 0.55)"),M.addColorStop(.35,"rgba(200, 205, 225, 0.16)"),M.addColorStop(1,"rgba(200, 205, 225, 0)"),f.fillStyle=M,f.fillRect(0,0,128,128);const x=new hs(m),v=new r0(new Ul({map:x,transparent:!0,fog:!1,depthWrite:!1}));v.scale.setScalar(15),v.position.copy(g),n.add(v)}this.moonLight=new z0(11058404,1.9),this.moonLight.position.copy(l.clone().multiplyScalar(18).add(new C(1,2,0))),this.moonLight.target.position.set(1,3,-1),this.moonLight.castShadow=!0,this.moonLight.shadow.mapSize.set(1024,1024);const h=this.moonLight.shadow.camera;h.left=-7,h.right=7,h.top=8,h.bottom=-6,h.near=2,h.far=40,this.moonLight.shadow.bias=-.002,this.moonLight.shadow.radius=4,n.add(this.moonLight,this.moonLight.target),this.hemi=new F0(3753835,1053727,.85),n.add(this.hemi),this.fireLight=new fo(16747056,0,8,1.9),this.fireLight.position.set(Y.chimneyX,.55,Y.chimneyZ+.2),n.add(this.fireLight),this.roomFill=new fo(16757866,0,7,1.6),this.roomFill.position.set(.7,1.7,.3),n.add(this.roomFill),this.descentLamp=new fo(13162751,0,4.6,1.4),this.descentLamp.position.set(Y.chimneyX,4,Y.chimneyZ+.6),n.add(this.descentLamp);const u=mo(t.seed+1);u.repeat.set(10,10);const d=new ft({map:u,roughness:.94}),p=new z(new Ue(120,120,24,24),d);p.rotation.x=-Math.PI/2,p.position.y=-.02,p.receiveShadow=!0;{const g=p.geometry.attributes.position;for(let _=0;_<g.count;_++){const m=g.getX(_),f=g.getY(_);(Math.abs(m)>4||Math.abs(f)>4)&&g.setZ(_,(Math.sin(m*.4)+Math.cos(f*.33))*.25*e())}p.geometry.computeVertexNormals()}n.add(p);for(let g=0;g<5;g++){const _=ee(e,-30,30),m=ee(e,-38,-14)*(e()>.7?-1:1);if(Math.abs(_)<8&&Math.abs(m)<10)continue;const f=ee(e,4,7),M=ee(e,4,6),x=ee(e,2.5,4),v=new jt,L=new z(new Ot(f,x,M),new ft({color:1778227,roughness:.95}));L.position.y=x/2,v.add(L);const T=new z(new gs(Math.max(f,M)*.72,ee(e,1.4,2.2),4),new ft({color:12109016,roughness:.95}));T.rotation.y=Math.PI/4,T.position.y=x+.7,v.add(T);const A=1+Math.floor(e()*3);for(let I=0;I<A;I++){const E=new z(new Ue(.5,.7),new rn({color:16757854}));E.position.set(ee(e,-f/3,f/3),ee(e,.8,x-.6),M/2+.01),v.add(E)}v.position.set(_,0,m),v.rotation.y=ee(e,-.4,.4),n.add(v)}for(let g=0;g<10;g++){const _=ee(e,-34,34),m=ee(e,-34,34);if(Math.abs(_)<6&&Math.abs(m)<6)continue;const f=ee(e,2,5),M=new z(new gs(f*.32,f,7),new ft({color:1384984,roughness:1}));M.position.set(_,f/2,m),n.add(M)}this.buildHouse(e),this.buildRoof(e),this.buildChimney(e),this.buildRoom(e);{const _=new Float32Array(600);this.snowVel=[];for(let f=0;f<200;f++)_[f*3]=ee(e,-9,9),_[f*3+1]=ee(e,0,12),_[f*3+2]=ee(e,-9,9),this.snowVel.push(ee(e,.25,.6));const m=new Me;m.setAttribute("position",new Pe(_,3)),this.snowPoints=new fr(m,new fs({color:14542581,size:.045,transparent:!0,opacity:.75,depthWrite:!1})),n.add(this.snowPoints)}{const _=new Float32Array(18);for(let f=0;f<6;f++)_[f*3]=Y.chimneyX+ee(e,-.16,.16),_[f*3+1]=Y.chimneyTopY+.5+f*.14,_[f*3+2]=Y.chimneyZ+ee(e,-.16,.16);const m=new Me;m.setAttribute("position",new Pe(_,3)),this.hintMotes=new fr(m,new fs({color:15265531,size:.06,transparent:!0,opacity:0,depthWrite:!1})),n.add(this.hintMotes)}}buildHouse(t){const e=this.group,n=new ft({color:5921362,roughness:.92}),s=new ft({color:5921362,roughness:.92,transparent:!0});this.houseFadeMats.push(s);for(const o of[1,-1]){const a=new z(new Ot(.24,3.05,4.4),n);a.position.set(2.6*o,3.05/2,0),a.castShadow=a.receiveShadow=!0,e.add(a)}const r=n;{const o=new z(new Ot(5.44,3.05,.24),r);o.position.set(0,3.05/2,-2.2),e.add(o);const a=this.gableTriangle(r);a.position.set(0,0,-2.2),e.add(a)}{const o=new z(new Ot(5.44,3.05,.24),s);o.position.set(0,3.05/2,2.2),o.castShadow=!0,e.add(o);const a=new ft({color:5921362,roughness:.92,transparent:!0});this.houseFadeMats.push(a);const c=this.gableTriangle(a);c.position.set(0,0,2.2),e.add(c);for(const l of[-1.5,.6]){const h=new rn({color:16757854,transparent:!0});this.houseFadeMats.push(h);const u=new z(new Ue(.55,.75),h);u.position.set(l,1.5,2.33),e.add(u);const d=new ft({color:2892828,roughness:.8,transparent:!0});this.houseFadeMats.push(d);const p=new z(new Ot(.68,.88,.05),d);p.position.set(l,1.5,2.31),e.add(p)}}}gableTriangle(t){const e=new Gl;e.moveTo(-2.72,3.05),e.lineTo(2.72,3.05),e.lineTo(0,Y.ridgeY),e.closePath();const n=new Pa(e,{depth:.24,bevelEnabled:!1}),s=new z(n,t);return s.position.z=-.12,s}buildRoof(t){const e=this.group,n=this.variation,s=mo(n.seed+2);s.repeat.set(2.2,3);const r=new ft({map:s,roughness:.93,transparent:!0}),o=new ft({color:3025448,roughness:.9,transparent:!0});this.houseFadeMats.push(r,o);const a=Math.hypot(Y.eaveX,Y.ridgeY-Y.eaveY)+.4,c=Math.atan2(Y.ridgeY-Y.eaveY,Y.eaveX);for(const d of[1,-1]){const p=new jt,g=new z(new Ot(a,.1,4.8),o);g.castShadow=g.receiveShadow=!0,p.add(g);const _=new Ot(a,.14,4.8,18,1,14),m=_.attributes.position;for(let v=0;v<m.count;v++)m.getY(v)>0&&m.setY(v,m.getY(v)+(t()-.3)*.05);_.computeVertexNormals();const f=new z(_,r);f.position.y=.12,f.receiveShadow=!0,f.castShadow=!0,p.add(f);const M=new z(new xe(.1,.12,4.7,8),r);M.rotation.x=Math.PI/2,M.position.set(a/2-.03,.1,0),p.add(M),p.rotation.z=-c*d;const x=Y.eaveX/2*d;p.position.set(x,(Y.ridgeY+Y.eaveY)/2+.02,0),e.add(p)}const l=new z(new xe(.16,.16,4.75,10),r);l.rotation.x=Math.PI/2,l.scale.y=.7,l.position.set(0,Y.ridgeY+.13,0),e.add(l);const h=new ft({color:10465484,roughness:.85}),u=()=>{const d=new z(new Ot(.09,.05,2.6),h);return d.visible=!1,e.add(d),d};this.sledTrackL=u(),this.sledTrackR=u();for(const[d,p]of[[this.sledTrackL,-.3],[this.sledTrackR,.3]])d.position.set(Y.sledX+p,Gn(Y.sledX+p)+.22,Y.sledZ+.7),d.rotation.z=-c}buildDistantSleigh(){const t=new rn({color:1120812,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),e=new z(new Ot(.9,.18,.28),t);e.position.set(.7,0,0),this.distantSleigh.add(e);const n=new z(new Ce(.48,.025,5,18,Math.PI),t);n.rotation.set(Math.PI/2,0,Math.PI),n.position.set(.7,-.14,0),this.distantSleigh.add(n);for(let s=0;s<3;s++){const r=new jt,o=new z(new me(.14,6,5),t);o.scale.set(1.45,.8,.65);const a=new z(new me(.075,6,5),t);a.position.set(-.24,.1,0);const c=new z(new Ce(.09,.012,4,8,Math.PI*.9),t);c.position.set(-.25,.19,0),c.rotation.z=-.4,r.add(o,a,c),r.position.set(-.15-s*.48,s%2*.05,0),this.distantSleigh.add(r)}this.distantSleigh.position.set(-8,8.4,-23),this.distantSleigh.scale.setScalar(.75),this.distantSleigh.visible=!1,this.group.add(this.distantSleigh)}buildChimneyFixtures(t,e,n,s,r){const o=T=>n-T*s,a=new ft({color:7166798,roughness:.98});for(const T of[-1,1]){const A=new z(new Ot(.095,.58,.44),a);A.position.set(t+T*.275,o(.19),e-.02),this.group.add(A)}const c=t+.09,l=.27,h=.08,u=.015;for(const[T,A]of[[.32,-1],[.43,1]]){const I=new z(new Ot(h,.12,.45),r);I.name=`chimney-bend-ledge-${A<0?"left":"right"}`,I.position.set(c+A*(l+h/2-u),o(T),e-.02),I.rotation.z=A*.12,this.group.add(I)}const d=new z(new Ue(.78,s*.2),new ft({color:2168851,roughness:1,transparent:!0,opacity:.28,depthWrite:!1}));d.position.set(t+.02,o(.58),e-Y.innerHalf+.012),this.group.add(d),this.damperPlateMat=new ft({color:6445909,metalness:.55,roughness:.63,emissive:2824976,emissiveIntensity:0});const p=new z(new Ot(.37,.055,.34),this.damperPlateMat);p.name="chimney-damper-plate";const g=-Y.innerHalf+.015;p.rotation.x=this.damperRestAngle,p.position.z=g;const _=new z(new xe(.025,.025,.7,8),this.damperPlateMat);_.name="chimney-damper-axle",_.rotation.z=Math.PI/2,_.position.z=g;const m=new z(new me(.055,8,6),new ft({color:11831880,metalness:.65,roughness:.42}));m.position.set(.38,0,g),this.damperGroup.add(p,_,m),this.damperGroup.position.set(t,o(.755),e),this.group.add(this.damperGroup),this.cleanoutMat=new ft({color:4341049,metalness:.5,roughness:.7,emissive:3350544,emissiveIntensity:0});const f=new z(new Ot(.38,.4,.045),this.cleanoutMat),M=new z(new Ot(.46,.48,.025),a);M.position.z=-.025;const x=new z(new Ce(.055,.012,6,12),this.damperPlateMat);x.position.set(.1,0,.045),this.cleanoutGroup.add(M,f,x),this.cleanoutGroup.position.set(t,o(.89),e-Y.innerHalf+.015),this.group.add(this.cleanoutGroup);const v=new ft({color:12884056,emissive:9064224,emissiveIntensity:.8,transparent:!0,opacity:0,roughness:.8,depthWrite:!1}),L=new z(new ri(.075,12),v);L.scale.y=1.15,this.historyMark.add(L);for(let T=0;T<4;T++){const A=new z(new ri(.022,8),v);A.position.set(-.055+T*.037,.09+Math.sin(T*1.2)*.018,0),this.historyMark.add(A)}this.historyMark.visible=!1,this.group.add(this.historyMark)}buildChimney(t){const e=this.group,n=this.variation,s=Y.chimneyX,r=Y.chimneyZ,o=Y.innerHalf,a=.24,c=o+a,l=Y.chimneyTopY,h=Gn(s+c)-.4,u=po({hue:n.brickHue,sat:n.brickSat,light:n.brickLight,sootTop:.35,sootBottom:.05,seed:n.seed+10});u.repeat.set(1.1,1.6);const d=new ft({map:u,roughness:.9}),p=new ft({map:u,roughness:.9,transparent:!0});this.frontFadeMats.push(p);const g=l-h,_=h+g/2,m=(dt,bt,ot,U,Z)=>{const ht=new z(new Ot(dt,g,bt),Z);return ht.position.set(ot,_,U),ht.castShadow=ht.receiveShadow=!0,e.add(ht),ht};m(a,c*2,s-o-a/2,r,d),m(a,c*2,s+o+a/2,r,d),m(o*2,a,s,r-o-a/2,d),m(o*2,a,s,r+o+a/2,p);const f=new ft({color:7235422,roughness:.75}),M=.09,x=c+.05,v=l+M/2,L=[[x*2,x-o,s,r-(o+(x-o)/2)],[x*2,x-o,s,r+(o+(x-o)/2)],[x-o,o*2,s-(o+(x-o)/2),r],[x-o,o*2,s+(o+(x-o)/2),r]];for(const[dt,bt,ot,U]of L){const Z=new z(new Ot(dt,M,bt),f);Z.position.set(ot,v,U),Z.castShadow=Z.receiveShadow=!0,e.add(Z)}const T=new ft({map:mo(n.seed+3),roughness:.95});for(let dt=0;dt<7;dt++){const bt=new z(new me(ee(t,.05,.11),8,6),T),ot=ee(t,-.6,Math.PI+.6);bt.position.set(s+Math.cos(ot)*(o+.16),l+M+.01,r-Math.abs(Math.sin(ot))*(o+.14)+.08),bt.scale.y=.45,bt.castShadow=!0,e.add(bt)}const A=l,I=Y.shaftBottomY,E=A-I,S=I+E/2;this.paintTrailBase(),this.trailTex=new hs(this.trailCanvas),this.trailTex.colorSpace=Ne;const P=new ft({map:this.trailTex,roughness:.94}),G=new z(new Ue(o*2+.22,E),P);G.position.set(s,S,r-o+.005),e.add(G);const O=po({hue:n.brickHue,sat:n.brickSat*.7,light:n.brickLight*.78,sootTop:.45,sootBottom:.6,seed:n.seed+11});O.repeat.set(.5,3.2);const W=new ft({map:O,roughness:.94}),J=[{p0:0,p1:.1,half:o,off:0},{p0:.1,p1:.27,half:.23,off:0},{p0:.27,p1:.47,half:.27,off:.09},{p0:.47,p1:.69,half:o+.1,off:.02},{p0:.69,p1:.83,half:.28,off:0},{p0:.83,p1:1,half:o,off:0}];for(const dt of J){const bt=Math.max(.02,(dt.p1-dt.p0)*E),ot=l-(dt.p0+dt.p1)*.5*E;for(const U of[-1,1]){const Z=new z(new Ue(o*2,bt+.025),W);Z.rotation.y=U<0?Math.PI/2:-Math.PI/2,Z.position.set(s+dt.off+U*dt.half,ot,r),e.add(Z)}}this.buildChimneyFixtures(s,r,l,E,W);const X=new ft({color:4866104,roughness:.96}),k=Gn(s)+.1-I;for(const dt of[-1,1]){const bt=new z(new Ot(a,k,.06),X);bt.position.set(s+(o+a/2)*dt,I+k/2,r+o+.03),e.add(bt)}const at=W;for(const dt of[-1,1]){const bt=new z(new Ot(a,k,o*2+a),at);bt.position.set(s+(o+a/2)*dt,I+k/2,r-a/2+.02),bt.castShadow=!0,e.add(bt)}const pt=new z(new Ot((o+a)*2,k,a),at);pt.position.set(s,I+k/2,r-o-a/2),e.add(pt)}buildRoom(t){const e=this.group,n=this.variation,s=Y.chimneyX,r=Y.chimneyZ,o=gr(n.seed+4);o.repeat.set(3,3);const a=new z(new Ot(5.2,.08,4.4),new ft({map:o,roughness:.7}));a.name="room-floor",a.position.set(0,-.02,0),a.receiveShadow=!0,e.add(a);const c=new ft({color:13485234,roughness:.95,transparent:!0});this.houseFadeMats.push(c);const l=new z(new Ot(5.2,.1,4.4),c);l.position.set(0,Y.roomCeilY+.05,0),e.add(l);const h=q0(n.seed+5,n.wallHue);h.repeat.set(2.4,1.3);const u=new z(new Ue(5.2,Y.roomCeilY),new ft({map:h,roughness:.95}));u.position.set(0,Y.roomCeilY/2,-2.06),u.receiveShadow=!0,e.add(u);const d=new ft({map:h,roughness:.95});for(const ot of[1,-1]){const U=new z(new Ue(4.4,Y.roomCeilY),d);U.rotation.y=Math.PI/2*ot,U.position.set(-2.45*ot,Y.roomCeilY/2,0),U.receiveShadow=!0,e.add(U)}{const ot=new z(new Ot(.9,1.2,.08),new ft({color:3418656,roughness:.8}));ot.position.set(-1.1,1.6,-2.04),e.add(ot);const U=new z(new Ue(.74,1.04),new rn({color:9414872}));U.position.set(-1.1,1.6,-1.96),e.add(U);const Z=new z(new Ot(.05,1.04,.03),ot.material);Z.position.set(-1.1,1.6,-1.98),e.add(Z);const ht=new z(new Ot(.74,.05,.03),ot.material);ht.position.set(-1.1,1.6,-1.98),e.add(ht)}const p=po({hue:n.brickHue,sat:n.brickSat,light:n.brickLight*.92,sootTop:.25,sootBottom:.1,seed:n.seed+12});p.repeat.set(1.4,1.8);const g=new ft({map:p,roughness:.9}),_=new ft({map:p,roughness:.9,transparent:!0});this.frontFadeMats.push(_);const m=1.55,f=s,M=Y.fireboxFrontZ,x=.96,v=.98;for(const ot of[1,-1]){const U=(m-x)/2,Z=new z(new Ot(U,v,M-(r-.45)),g);Z.name=`firebox-pillar-${ot>0?"right":"left"}`,Z.position.set(f+(x/2+U/2)*ot,v/2,(M+r-.45)/2),Z.castShadow=Z.receiveShadow=!0,e.add(Z)}const L=Y.roomCeilY-v,T=new z(new Ot(m,L,.22),_);T.name="firebox-lintel",T.position.set(f,v+L/2,M-.11),T.castShadow=!0,e.add(T);const A=Y.innerHalf,I=M-.24-(r-.45);for(const ot of[1,-1]){const U=m/2-A,Z=new z(new Ot(U,L,I),g);Z.position.set(f+(A+U/2)*ot,v+L/2,(M-.24+r-.45)/2),e.add(Z)}const E=new z(new Ot(A*2,L,.14),g);E.position.set(f,v+L/2,r-.38),e.add(E);const S=new ft({color:1577486,roughness:.98}),P=new z(new Ue(x,v),S);P.position.set(f,v/2,r-.42),e.add(P);for(const ot of[1,-1]){const U=new z(new Ue(M-(r-.45),v),S);U.rotation.y=Math.PI/2*ot,U.position.set(f-x/2*ot,v/2,(M+r-.45)/2),e.add(U)}const G=new z(new Ot(x,.06,Math.max(.05,M-(r+A))),S);G.name="firebox-throat-front",G.position.set(f,v+.03,(M+r+A)/2),e.add(G);const O=new z(new Ot(x,.06,.16),S);O.name="firebox-throat-back",O.position.set(f,v+.03,r-.37),e.add(O);for(const ot of[1,-1]){const U=new z(new Ot((x-A*2)/2,.06,M-(r-.45)),S);U.name=`firebox-throat-${ot>0?"right":"left"}`,U.position.set(f+(A+(x/2-A)/2)*ot,v+.03,(M+r-.45)/2),e.add(U)}const W=new z(new Ot(x,.06,M-(r-.45)),new ft({color:2366486,roughness:.95}));W.name="firebox-floor",W.position.set(f,.03,(M+r-.45)/2),W.receiveShadow=!0,e.add(W);const J=new z(new Ot(m+.4,.07,.7),new ft({color:5525578,roughness:.85}));J.name="hearth-slab",J.position.set(f,.055,M+.35),J.receiveShadow=!0,e.add(J);const X=new z(new Ot(m+.24,.09,.34),new ft({map:gr(n.seed+6,18),roughness:.6}));X.position.set(f,Y.stockingTopY+.09,M-.02),X.castShadow=X.receiveShadow=!0,e.add(X);{const ot=new z(new xe(.03,.035,.14,10),new ft({color:14208952,roughness:.7}));ot.position.set(f-.55,Y.stockingTopY+.2,M-.06),e.add(ot);const U=new z(new xe(.09,.09,.05,16),new ft({color:4864038,roughness:.6}));U.rotation.x=Math.PI/2,U.position.set(f+.42,Y.stockingTopY+.24,M-.12),e.add(U);const Z=new z(new ri(.068,16),new ft({color:11050372,roughness:.7}));Z.position.set(f+.42,Y.stockingTopY+.24,M-.09),e.add(Z)}const tt=new ft({color:1905680,roughness:.95});for(let ot=0;ot<3;ot++){const U=new z(new xe(.05,.06,.5,8),tt);U.rotation.z=Math.PI/2,U.rotation.y=ee(t,-.5,.5),U.position.set(f+ee(t,-.12,.12),.08+ot*.05,r-.28+ee(t,-.05,.05)),e.add(U)}for(let ot=0;ot<6;ot++){const U=new ft({color:3153946,emissive:16734746,emissiveIntensity:.8,roughness:.9});this.emberMats.push(U);const Z=new z(new me(ee(t,.025,.05),8,6),U);Z.position.set(f+ee(t,-.2,.2),.07,r-.26+ee(t,-.08,.08)),e.add(Z)}const k=document.createElement("canvas");k.width=32,k.height=64;const at=k.getContext("2d"),pt=at.createLinearGradient(0,64,0,0);pt.addColorStop(0,"rgba(255, 140, 30, 0.9)"),pt.addColorStop(.55,"rgba(255, 90, 20, 0.5)"),pt.addColorStop(1,"rgba(255, 60, 10, 0)"),at.fillStyle=pt,at.beginPath(),at.ellipse(16,40,10,24,0,0,Math.PI*2),at.fill();const dt=new hs(k);for(let ot=0;ot<2;ot++){const U=new z(new Ue(.14,.26),new rn({map:dt,transparent:!0,blending:So,depthWrite:!1}));U.position.set(f+(ot-.5)*.16,.2,r-.24),this.flames.push(U),e.add(U)}const bt=new z(new ri(.95,26),new ft({map:$0(n.seed+7,(n.wallHue+140)%360),roughness:.95}));bt.rotation.x=-Math.PI/2,bt.position.set(f-.3,.025,M+1.15),bt.receiveShadow=!0,e.add(bt);{const ot=new ft({color:3032116,roughness:.9}),U=new jt,Z=new z(new Ot(.62,.3,.6),ot);Z.position.y=.28,U.add(Z);const ht=new z(new Ot(.62,.55,.16),ot);ht.position.set(0,.62,-.24),ht.rotation.x=-.12,U.add(ht);for(const mt of[1,-1]){const zt=new z(new Ot(.14,.32,.56),ot);zt.position.set(.31*mt,.48,0),U.add(zt)}const it=new z(new Ot(.5,.1,.46),new ft({color:6505530,roughness:.95}));it.position.set(0,.42,.03),U.add(it),U.position.set(-.85,0,-.7),U.rotation.y=.7,U.traverse(mt=>{mt instanceof z&&(mt.castShadow=!0,mt.receiveShadow=!0)}),e.add(U)}{const ot=new jt,U=new ft({color:1848098,roughness:.95});for(let it=0;it<3;it++){const mt=new z(new gs(.42-it*.11,.5,9),U);mt.position.y=.45+it*.32,mt.castShadow=!0,ot.add(mt)}const Z=new z(new xe(.06,.07,.3,8),new ft({color:3811868,roughness:.9}));Z.position.y=.15,ot.add(Z);const ht=[11547700,13148220,3829416];for(let it=0;it<6;it++){const mt=new z(new me(.035,10,8),new ft({color:ht[it%3],roughness:.3,metalness:.2})),zt=ee(t,0,Math.PI*2),Bt=Math.floor(t()*3),gt=(.4-Bt*.11)*.82;mt.position.set(Math.cos(zt)*gt,.38+Bt*.32,Math.sin(zt)*gt),ot.add(mt)}ot.position.set(-1.95,0,-1.55),e.add(ot)}{const ot=new z(new xe(.17,.19,.3,12),new ft({map:gr(n.seed+8,30),roughness:.7}));ot.position.set(f-1.05,.15,M+.5),ot.castShadow=!0,e.add(ot);const U=new z(new xe(.11,.09,.02,14),new ft({color:14472904,roughness:.4}));U.position.set(f-1.05,.31,M+.5),e.add(U);for(let ht=0;ht<2;ht++){const it=new z(new xe(.035,.035,.014,10),new ft({color:10645564,roughness:.9}));it.position.set(f-1.05+(ht-.5)*.07,.33,M+.5+(ht-.5)*.03),e.add(it)}const Z=new z(new xe(.035,.03,.08,10),new ft({color:8138800,roughness:.5}));Z.position.set(f-.92,.35,M+.44),e.add(Z)}}paintTrailBase(){const t=this.trailCtx,e=this.trailCanvas.width,n=this.trailCanvas.height,s=ye(this.variation.seed+77);t.fillStyle="#4c3a30",t.fillRect(0,0,e,n);const r=30,o=n/r,a=o*2.1;for(let l=0;l<r;l++){const h=l%2*a*.5;for(let u=-1;u<e/a+1;u++){const d=22+s()*12;t.fillStyle=`hsl(${14+s()*10}, ${18+s()*12}%, ${d}%)`,t.fillRect(u*a+h+2,l*o+2,a-4,o-4)}}const c=t.createLinearGradient(0,0,0,n);c.addColorStop(0,"rgba(10,8,6,0.25)"),c.addColorStop(1,"rgba(8,6,5,0.55)"),t.fillStyle=c,t.fillRect(0,0,e,n)}beginSootRun(t=!1){if(this.activeSootMarks=[],t&&this.completedSootMarks.length===0){for(let e=1;e<=26;e++){const n=e/28,s=.5+Math.sin(e*.72)*.16,r={v:n,x01:s};this.completedSootMarks.push(r),this.drawSootMark(r,.42,!0)}this.trailTex.needsUpdate=!0}}finishSootRun(){this.completedSootMarks.push(...this.activeSootMarks),this.completedSootMarks.length>700&&this.completedSootMarks.splice(0,this.completedSootMarks.length-700),this.activeSootMarks=[]}paintSoot(t,e,n){const s=this.completedSootMarks.some(o=>Math.abs(o.v-t)<.038&&Math.abs(o.x01-e)<.14),r={v:oe(t),x01:oe(e)};return this.activeSootMarks.push(r),this.drawSootMark(r,n,s),this.trailTex.needsUpdate=!0,s?"old-soot":"fresh-brick"}drawSootMark(t,e,n){const s=this.trailCtx,r=this.trailCanvas.width,o=this.trailCanvas.height,a=this.trailRng,c=t.v*o,l=t.x01*r*.72+r*.14+(a()-.5)*26,h=(n?7:10)+e*(n?15:24)+a()*10,u=(n?.035:.065)+e*(n?.065:.11)+a()*.035,d=s.createRadialGradient(l,c,0,l,c,h);d.addColorStop(0,n?`rgba(66, 58, 51, ${u})`:`rgba(10, 7, 5, ${u})`),d.addColorStop(1,"rgba(12, 9, 7, 0)"),s.fillStyle=d,s.beginPath(),s.ellipse(l,c,h,h*(1.6+e),0,0,Math.PI*2),s.fill(),a()<(n?.18:.42)&&(s.strokeStyle=n?`rgba(94, 82, 71, ${u*.75})`:`rgba(8, 6, 5, ${u})`,s.lineWidth=(n?1:1.8)+a()*2,s.beginPath(),s.moveTo(l+(a()-.5)*14,c-h),s.lineTo(l+(a()-.5)*14,c+h*(1.5+e*2)),s.stroke())}showHistory(t){this.historyZone=t,this.historyT=0;const e=t==="damper"?this.damperGroup.position.y+.24:this.cleanoutGroup.position.y+.3;this.historyMark.position.set(Y.chimneyX+(t==="damper"?-.12:.16),e,Y.chimneyZ-Y.innerHalf+.055),this.historyMark.visible=!0}showDistantSleighEcho(){this.distantSleighT=0,this.distantSleigh.visible=!0,this.distantSleigh.position.set(-8,8.4,-23)}setFrontFade(t){this.frontFade=t}setHouseFade(t){this.houseFade=t}showHintMotes(){this.hintMoteT=0}showSledTracks(t){for(const e of[this.sledTrackL,this.sledTrackR]){e.visible=t>.02,e.scale.z=Math.max(.02,t);const n=1.3;e.position.z=Y.sledZ+.7+n*(1-t)}}update(t,e){this.time+=t;const n=this.time;for(const o of this.frontFadeMats){const a=o;a.opacity=Pt(a.opacity??1,this.frontFade,Math.min(1,t*4)),a.depthWrite=a.opacity>.5}for(const o of this.houseFadeMats){const a=o;a.opacity=Pt(a.opacity??1,this.houseFade,Math.min(1,t*4)),a.depthWrite=a.opacity>.5}const s=oe((3.4-e)/2.6),r=.85+Math.sin(n*9.2)*.06+Math.sin(n*23.7)*.05;this.fireLight.intensity=(.35+s*3.3)*r*this.fireLevel,this.roomFill.intensity=s*1.7*this.fireLevel,this.moonLight.intensity=Pt(1.9,.55,s),this.hemi.intensity=Pt(.85,.45,s);{const o=oe((3.6-this.descentLamp.position.y)/2.8);this.descentLamp.color.setRGB(Pt(.78,1,o),Pt(.85,.72,o),Pt(1,.45,o))}for(let o=0;o<this.emberMats.length;o++)this.emberMats[o].emissiveIntensity=(.5+Math.sin(n*3.1+o*1.7)*.3+Math.sin(n*7.7+o)*.15)*this.fireLevel;for(let o=0;o<this.flames.length;o++){const a=this.flames[o];a.scale.y=(.8+Math.sin(n*11+o*2.4)*.22)*this.fireLevel,a.scale.x=.9+Math.sin(n*8+o)*.12,a.material.opacity=.55*this.fireLevel+Math.sin(n*13+o)*.1}if(this.historyT<3.2){this.historyT+=t;const o=Math.sin(oe(this.historyT/2.2)*Math.PI);this.damperPlateMat.emissiveIntensity=this.historyZone==="damper"?o*1.5:0,this.cleanoutMat.emissiveIntensity=this.historyZone==="cleanout"?o*1.3:0;const a=this.damperGroup.children[0];a.rotation.x=this.damperRestAngle+(this.historyZone==="damper"?Math.sin(this.historyT*5)*.08*o:0);const c=this.cleanoutGroup.children[1];c.rotation.y=this.historyZone==="cleanout"?-.18*o:0,this.historyMark.traverse(l=>{l instanceof z&&(l.material.opacity=o*.78)}),this.historyMark.scale.setScalar(.8+o*.35)}else this.historyMark.visible&&(this.historyMark.visible=!1,this.damperPlateMat.emissiveIntensity=0,this.cleanoutMat.emissiveIntensity=0,this.damperGroup.children[0].rotation.x=this.damperRestAngle,this.cleanoutGroup.children[1].rotation.y=0);if(this.distantSleighT<3.6){this.distantSleighT+=t;const o=oe(this.distantSleighT/3.6),a=Math.sin(o*Math.PI)*.38;this.distantSleigh.position.x=Pt(-8,7,o),this.distantSleigh.position.y=8.4+Math.sin(o*Math.PI)*.4,this.distantSleigh.traverse(c=>{c instanceof z&&(c.material.opacity=a)}),o>=1&&(this.distantSleigh.visible=!1)}{const o=this.snowPoints.geometry.attributes.position;for(let a=0;a<o.count;a++){let c=o.getY(a)-this.snowVel[a]*t,l=o.getX(a)+Math.sin(n*.7+a)*t*.18;c<0&&(c=11+Math.random(),l=-9+Math.random()*18),o.setY(a,c),o.setX(a,l)}o.needsUpdate=!0}if(this.hintMoteT<3.2){this.hintMoteT+=t;const o=this.hintMoteT,a=this.hintMotes.material;a.opacity=o<.4?o/.4:o>2.4?Math.max(0,1-(o-2.4)/.8):1;const c=this.hintMotes.geometry.attributes.position;for(let l=0;l<c.count;l++){let h=c.getY(l)-t*.55;h<Y.chimneyTopY-.5&&(h=Y.chimneyTopY+.6),c.setY(l,h)}c.needsUpdate=!0}else this.hintMotes.material.opacity=0}}const Yl={carry:{spine:{r:[.14,0,.06]},hips:{r:[0,0,-.04]},shoulderR:{r:[-2.5,0,-.5]},elbowR:{r:[-.9,0,0]},shoulderL:{r:[.25,0,.35]},elbowL:{r:[-.4,0,0]},head:{r:[-.08,0,-.05]},bag:{r:[.12,0,-.1]}},peek:{spine:{r:[.48,0,.14]},hips:{r:[.1,0,0],p:[0,-.05,0]},neck:{r:[.22,0,0]},head:{r:[.18,.18,.08]},shoulderL:{r:[.5,0,.5]},elbowL:{r:[-.5,0,0]},shoulderR:{r:[-2.2,0,-.55]},elbowR:{r:[-.8,0,0]},hipL:{r:[-.12,0,0]},kneeL:{r:[.2,0,0]},bag:{r:[.05,0,-.12],p:[0,-.06,-.08]}},rimSit:{hips:{p:[0,-.1,0]},spine:{r:[.18,0,0]},hipL:{r:[-1.5,0,-.12]},kneeL:{r:[.5,0,0]},hipR:{r:[-1.5,0,.12]},kneeR:{r:[.5,0,0]},shoulderL:{r:[-2.9,0,-.25]},elbowL:{r:[-.35,0,0]},shoulderR:{r:[-2.9,0,.25]},elbowR:{r:[-.35,0,0]},head:{r:[.16,0,0]},bag:{p:[0,1.05,.34],r:[0,0,0]}},tuck:{spine:{r:[.04,0,0]},hipL:{r:[-.18,0,-.06]},kneeL:{r:[.3,0,0]},hipR:{r:[-.18,0,.06]},kneeR:{r:[.3,0,0]},shoulderL:{r:[-2.98,0,-.14]},elbowL:{r:[-.2,0,0]},shoulderR:{r:[-2.98,0,.14]},elbowR:{r:[-.2,0,0]},neck:{r:[-.05,0,0]},head:{r:[.1,0,0]},bag:{p:[0,1.12,.3],r:[0,0,0]}},squat:{hips:{p:[0,-.3,0],r:[.18,0,0]},spine:{r:[.3,0,0]},hipL:{r:[-1.15,0,-.2]},kneeL:{r:[1.5,0,0]},hipR:{r:[-1.15,0,.2]},kneeR:{r:[1.5,0,0]},shoulderL:{r:[.6,0,.6]},shoulderR:{r:[.6,0,-.6]},elbowL:{r:[-.5,0,0]},elbowR:{r:[-.5,0,0]},head:{r:[-.12,0,0]},bag:{r:[.35,0,0],p:[0,-.12,.05]}},brushBeard:{spine:{r:[.06,0,0]},shoulderR:{r:[-1.9,-.5,-.9]},elbowR:{r:[-1.9,0,0]},shoulderL:{r:[.15,0,.25]},head:{r:[-.14,-.1,.06]},bag:{r:[.1,0,0]}},kneel:{hips:{p:[0,-.42,0],r:[.05,0,0]},spine:{r:[.22,0,0]},hipL:{r:[-1.6,0,-.15]},kneeL:{r:[1.9,0,0]},hipR:{r:[-.3,0,.15]},kneeR:{r:[1.9,0,0]},shoulderL:{r:[.3,0,.4]},elbowL:{r:[-.7,0,0]},shoulderR:{r:[.2,0,-.3]},elbowR:{r:[-.5,0,0]},head:{r:[.14,0,0]},bag:{r:[.3,0,.3],p:[-.1,-.3,.15]}},reach:{spine:{r:[.24,-.3,0]},shoulderR:{r:[-1.5,-.6,-.35]},elbowR:{r:[-.35,0,0]},head:{r:[.15,-.35,0]}},nose:{spine:{r:[-.04,.1,0]},shoulderR:{r:[-2.05,-.75,-.6]},elbowR:{r:[-2.25,.25,0]},shoulderL:{r:[.12,0,.2]},head:{r:[-.05,-.14,.08]},bag:{r:[.08,0,0]}},launch:{spine:{r:[-.1,0,0]},shoulderL:{r:[-3,0,-.1]},elbowL:{r:[-.1,0,0]},shoulderR:{r:[-3,0,.1]},elbowR:{r:[-.1,0,0]},hipL:{r:[.1,0,-.04]},hipR:{r:[.1,0,.04]},kneeL:{r:[.15,0,0]},kneeR:{r:[.15,0,0]},neck:{r:[-.15,0,0]},bag:{p:[0,1.1,.3]}},brushSnow:{spine:{r:[.18,0,-.08]},shoulderL:{r:[-.6,.3,.7]},elbowL:{r:[-1.2,0,0]},shoulderR:{r:[.3,0,-.3]},head:{r:[.25,.15,0]}},sit:{hips:{p:[0,-.16,0]},spine:{r:[.1,0,0]},hipL:{r:[-1.35,0,-.1]},kneeL:{r:[1.15,0,0]},hipR:{r:[-1.35,0,.1]},kneeR:{r:[1.15,0,0]},shoulderL:{r:[.35,0,.3]},elbowL:{r:[-.6,0,0]},shoulderR:{r:[.35,0,-.3]},elbowR:{r:[-.6,0,0]},bag:{r:[.2,0,0],p:[0,-.1,.08]}},wave:{shoulderR:{r:[-2.9,0,.5]},elbowR:{r:[-.5,0,0]},head:{r:[-.06,.2,.08]}},faceCam:{neck:{r:[-.14,0,0]},head:{r:[-.16,0,0]}}},Di=Object.keys(Yl);function Ui(i,t,e,n){const s=ye(n),r=[];for(let c=0;c<64;c++)r.push(s()*2-1);const o=i.attributes.position,a=new C;for(let c=0;c<o.count;c++){a.fromBufferAttribute(o,c);const h=1+(Math.sin(a.x*e+r[0]*5)*Math.cos(a.y*e*1.3+r[1]*5)+Math.sin(a.z*e*.8+r[2]*5)*.7)*t;o.setXYZ(c,a.x*h,a.y*h,a.z*h)}o.needsUpdate=!0,i.computeVertexNormals()}class j0{constructor(t=1){this.root=new jt,this.nodes=new Map,this.rest=new Map,this.weights=Object.fromEntries(Di.map(e=>[e,0])),this.targets=Object.fromEntries(Di.map(e=>[e,0])),this.poseLambda=8,this.squash=0,this.bagSquash=0,this.lean=0,this.wobble=0,this.descentSpeed=0,this.walkSpeed=0,this.peekPhase=0,this.bagBaseScale=1,this.walkPhase=0,this.blinkT=2.5,this.blinkState=0,this.time=0,this.faceTarget=new Ee,this.boundsScratch=new di,this.bagDetached=!1,this.build(t)}reg(t,e){return this.nodes.set(t,e),e}build(t){const e=V0(t+100);e.repeat.set(2,1.4);const n=W0(t+200),s=X0(t+300),r=Z0(t+400),o=new ft({map:e,roughness:.88,metalness:0}),a=new ft({color:8133150,roughness:.9}),c=new ft({map:n,roughness:.97,metalness:0}),l=new ft({color:2365974,roughness:.55,metalness:.05}),h=new ft({color:2826266,roughness:.5,metalness:.1}),u=new ft({color:9073728,roughness:.35,metalness:.6}),d=new ft({map:r,roughness:.62}),p=new ft({map:n,roughness:.95,color:16052198}),g=new ft({map:s,roughness:.92}),_=new ft({color:2569503,roughness:.85}),m=gt=>(gt.castShadow=!0,gt.receiveShadow=!1,gt),f=this.reg("hips",new jt);f.position.set(0,.88,0),this.root.add(f);const M=(gt,q,st)=>{const R=this.reg(q,new jt);R.position.set(.15*gt,-.02,0),f.add(R);const Tt=m(new z(new kn(.125,.3,6,14),a));Tt.position.set(0,-.19,0),R.add(Tt);const Q=this.reg(st,new jt);Q.position.set(0,-.4,0),R.add(Q);const vt=m(new z(new kn(.1,.24,6,12),a));vt.position.set(0,-.14,0),Q.add(vt);const rt=m(new z(new xe(.115,.125,.2,14),l));rt.position.set(0,-.33,0),Q.add(rt);const Nt=m(new z(new Ce(.115,.035,8,16),c));Nt.rotation.x=Math.PI/2,Nt.position.set(0,-.25,0),Q.add(Nt);const yt=m(new z(new me(.11,14,10),l));return yt.scale.set(1,.62,1.7),yt.position.set(0,-.44,.06),Q.add(yt),R};M(1,"hipR","kneeR"),M(-1,"hipL","kneeL");const x=this.reg("spine",new jt);x.position.set(0,.06,0),f.add(x),this.torso=x;const v=[],L=(gt,q)=>v.push(new lt(gt,q));L(.3,0),L(.36,.05),L(.415,.16),L(.435,.26),L(.42,.36),L(.385,.46),L(.345,.55),L(.3,.62),L(.22,.68),L(.13,.71);const T=new Ms(v,26);Ui(T,.016,9,t+1);const A=m(new z(T,o));A.position.y=-.06,x.add(A);const I=m(new z(new Ce(.315,.05,10,24),c));I.rotation.x=Math.PI/2,I.position.y=-.05,Ui(I.geometry,.06,14,t+2),x.add(I);for(let gt=0;gt<6;gt++){const q=gt/5,st=Pt(.6,0,q)-.06,R=Pt(.13,.435,Math.sin(q*Math.PI*.82)+.12),Tt=Math.min(.44,R)*.99,Q=m(new z(new me(.05,10,8),c));Q.scale.set(1.15,1,.55),Q.position.set(0,st,Tt),x.add(Q)}const E=m(new z(new xe(.445,.45,.09,26,1,!0),h));E.position.y=.2,x.add(E);const S=m(new z(new Ot(.12,.1,.03),u));S.position.set(0,.2,.435),x.add(S);const P=(gt,q,st)=>{const R=this.reg(q,new jt);R.position.set(.3*gt,.56,0),x.add(R);const Tt=m(new z(new kn(.095,.2,6,12),o));Tt.position.set(.03*gt,-.13,0),Tt.rotation.z=-.12*gt,R.add(Tt);const Q=this.reg(st,new jt);Q.position.set(.05*gt,-.28,0),R.add(Q);const vt=m(new z(new kn(.085,.16,6,12),o));vt.position.set(0,-.1,0),Q.add(vt);const rt=m(new z(new Ce(.085,.035,8,14),c));rt.rotation.x=Math.PI/2,rt.position.set(0,-.2,0),Q.add(rt);const Nt=m(new z(new me(.085,12,10),_));return Nt.scale.set(.9,1.15,.95),Nt.position.set(0,-.29,0),Q.add(Nt),gt===-1&&(this.mittenR=Nt),R};P(1,"shoulderL","elbowL"),P(-1,"shoulderR","elbowR");const G=this.reg("neck",new jt);G.position.set(0,.68,0),x.add(G),this.headCounter=new jt,G.add(this.headCounter);const O=this.reg("head",new jt);O.position.set(0,.1,.02),this.headCounter.add(O),this.head=O;const W=m(new z(new me(.148,20,16),d));W.scale.set(1,1.05,.98),O.add(W);for(const gt of[1,-1]){const q=new z(new me(.045,10,8),new ft({color:14256758,roughness:.7,transparent:!0,opacity:.65}));q.position.set(.075*gt,-.02,.105),q.scale.set(1,.8,.5),O.add(q)}this.noseMesh=m(new z(new me(.042,14,12),new ft({color:14389367,roughness:.55}))),this.noseMesh.position.set(0,0,.142),this.noseMesh.scale.set(1,.9,1.05),O.add(this.noseMesh),this.noseHit=new z(new me(.4,8,6),new rn({visible:!1})),this.noseHit.position.copy(this.noseMesh.position),O.add(this.noseHit);const J=new me(.018,10,8),X=new ft({color:2760726,roughness:.25});this.eyeL=new z(J,X),this.eyeL.position.set(.056,.048,.147),O.add(this.eyeL),this.eyeR=new z(J,X),this.eyeR.position.set(-.056,.048,.147),O.add(this.eyeR);for(const gt of[1,-1]){const q=new z(new kn(.014,.045,4,8),p);q.rotation.z=Math.PI/2+.22*gt,q.position.set(.058*gt,.085,.126),O.add(q)}const tt=new me(.15,18,14);Ui(tt,.09,11,t+3);const k=m(new z(tt,p));k.scale.set(1.02,1.3,.72),k.position.set(0,-.115,.05),O.add(k);for(const gt of[1,-1]){const q=m(new z(new kn(.022,.05,4,8),p));q.rotation.z=Math.PI/2-.55*gt,q.rotation.y=.25*gt,q.position.set(.04*gt,-.058,.118),O.add(q)}const at=m(new z(new Ce(.15,.045,10,22),c));Ui(at.geometry,.05,13,t+4),at.rotation.x=Math.PI/2+.05,at.position.set(0,.122,0),O.add(at);const pt=m(new z(new me(.145,16,10,0,Math.PI*2,0,Math.PI*.52),o));pt.position.set(0,.035,0),O.add(pt);const dt=o;new C(0,.1,0);const bt=new jt;O.add(bt);let ot=bt;const U=4;for(let gt=0;gt<U;gt++){const q=gt/U,st=(gt+1)/U,R=Pt(.14,.02,q),Tt=Pt(.14,.02,st),Q=.09,vt=m(new z(new xe(Tt,R,Q,14),dt)),rt=new jt;rt.position.copy(gt===0?new C(0,.14,0):new C(0,Q,0)),rt.rotation.set(.28*(gt>0?1:.3),0,.22*(gt>0?1:0)),vt.position.set(0,Q/2,0),rt.add(vt),ot.add(rt),ot=rt}this.hatTip=ot;const Z=m(new z(new me(.05,12,10),c));Ui(Z.geometry,.08,16,t+5),Z.position.set(0,.11,0),ot.add(Z),this.faceTarget.position.set(0,0,.15),O.add(this.faceTarget);const ht=this.reg("bag",new jt);ht.position.set(-.12,.42,-.42),ht.rotation.set(-.25,0,.18),x.add(ht),this.bagNode=ht;const it=[],mt=(gt,q)=>it.push(new lt(gt,q));mt(.06,0),mt(.24,.03),mt(.36,.14),mt(.4,.3),mt(.375,.46),mt(.32,.6),mt(.24,.72),mt(.13,.8),mt(.1,.86),mt(.145,.92);const zt=new Ms(it,22);Ui(zt,.05,6,t+6),this.bagMesh=m(new z(zt,g)),this.bagMesh.position.y=-.42,ht.add(this.bagMesh);const Bt=m(new z(new Ce(.105,.02,8,16),new ft({color:10124111,roughness:.8})));Bt.rotation.x=Math.PI/2,Bt.position.y=.44,ht.add(Bt);for(const[gt,q]of this.nodes)this.rest.set(gt,{p:q.position.clone(),q:q.quaternion.clone()})}setPose(t,e=!1){for(const n of Di)this.targets[n]=t[n]??0;if(e)for(const n of Di)this.weights[n]=this.targets[n]}update(t,e){this.time+=t;const n=this.time,s=1-Math.exp(-this.poseLambda*t);for(const M of Di)this.weights[M]=Pt(this.weights[M],this.targets[M],s);const r=new Map,o=new Map;for(const M of Di){const x=this.weights[M];if(x<.004)continue;const v=Yl[M];for(const L of Object.keys(v)){const T=v[L];if(T.r){let A=r.get(L);A||r.set(L,A=new C),A.x+=T.r[0]*x,A.y+=T.r[1]*x,A.z+=T.r[2]*x}if(T.p){let A=o.get(L);A||o.set(L,A=new C),A.x+=T.p[0]*x,A.y+=T.p[1]*x,A.z+=T.p[2]*x}}}const a=(M,x,v,L)=>{let T=r.get(M);T||r.set(M,T=new C),T.x+=x,T.y+=v,T.z+=L},c=(M,x,v,L)=>{let T=o.get(M);T||o.set(M,T=new C),T.x+=x,T.y+=v,T.z+=L};if(a("spine",Math.sin(n*1.4)*.012,0,0),this.walkSpeed>.01){this.walkPhase+=t*this.walkSpeed*7.5;const M=this.walkPhase,x=Math.min(1,this.walkSpeed);a("hipL",Math.sin(M)*.55*x,0,0),a("hipR",Math.sin(M+Math.PI)*.55*x,0,0),a("kneeL",Math.max(0,Math.sin(M+Math.PI*.75))*.7*x,0,0),a("kneeR",Math.max(0,Math.sin(M+Math.PI*1.75))*.7*x,0,0),a("hips",0,0,Math.sin(M)*.075*x),a("spine",.04*x,Math.sin(M)*.05*x,-Math.sin(M)*.05*x),a("shoulderL",Math.sin(M+Math.PI)*.25*x,0,0),c("hips",0,Math.abs(Math.sin(M))*.035*x,0),a("head",0,0,Math.sin(M+.5)*.03*x)}if(this.peekPhase>.01){const M=this.peekPhase,x=Math.sin(n*1.15),v=Math.sin(n*.6+1.3);a("spine",x*.05*M+.04*M,0,v*.055*M+.05*M),a("head",x*.09*M,Math.sin(n*.45)*.14*M,v*.05*M),a("bag",Math.sin(n*1.15+.7)*.1*M,0,Math.sin(n*.8+.3)*.085*M),c("bag",Math.sin(n*.8)*.02*M,Math.abs(Math.sin(n*1.15))*.012*M,Math.sin(n*1.15+1)*.03*M)}if(this.wobble>.005){const M=this.wobble;a("hipL",Math.sin(n*4.2)*.16*M,0,0),a("hipR",Math.sin(n*4.2+1.5)*.16*M,0,0),a("kneeL",Math.sin(n*5.1+.4)*.12*M,0,0),a("kneeR",Math.sin(n*5.1+2.1)*.12*M,0,0),a("bag",Math.sin(n*3.4)*.1*M,0,Math.sin(n*2.9+.8)*.09*M),a("spine",0,0,Math.sin(n*3.1)*.035*M)}const l=Math.abs(this.descentSpeed);if(l>.01){const M=oe(1-l*2.2);a("spine",0,0,Math.sin(n*9)*.05*M*Math.min(1,l*6)),a("hips",0,Math.sin(n*7)*.05*M*Math.min(1,l*6),0);const x=oe(l*1.4-.3);a("bag",Math.sin(n*16)*.03*x,0,0),a("head",Math.sin(n*13)*.016*x,0,0)}const h=new ui,u=new cn;for(const[M,x]of this.nodes){if(M==="bag"&&this.bagDetached)continue;const v=this.rest.get(M),L=r.get(M),T=o.get(M);L?(u.set(L.x,L.y,L.z,"XYZ"),h.setFromEuler(u),x.quaternion.copy(v.q).multiply(h)):x.quaternion.copy(v.q),T?x.position.copy(v.p).add(T):x.position.copy(v.p)}const d=this.squash,p=1-.55*d,g=1+.24*d;this.torso.scale.set(p,g,p);const _=this.nodes.get("hips");_.scale.set(1-.3*d,1+.06*d,1-.3*d);const m=1/p,f=1-.12*d;if(this.headCounter.scale.set(m*f,1/g*(1+.06*d),m*f),this.torso.rotation.z+=this.lean*-.18,_.rotation.z+=this.lean*.1,!this.bagDetached){const M=this.nodes.get("bag");M.rotation.z+=this.lean*-.22;const x=this.bagSquash;M.scale.set((1-.3*x)*this.bagBaseScale,(1+.55*x)*this.bagBaseScale,(1-.34*x)*this.bagBaseScale)}this.hatTip.rotation.z=Math.sin(n*2.1)*.1+this.descentSpeed*.4,this.blinkT-=t,this.blinkT<=0&&(this.blinkState=.12,this.blinkT=1.8+Math.random()*3.2),this.blinkState>0?(this.blinkState-=t,this.eyeL.scale.y=.12,this.eyeR.scale.y=.12):(this.eyeL.scale.y=1,this.eyeR.scale.y=1)}wink(){this.blinkState=.5,this.blinkT=2}detachBag(t){t.attach(this.bagNode),this.bagDetached=!0}reattachBag(t=1){this.torso.attach(this.bagNode);const e=this.rest.get("bag");this.bagNode.position.copy(e.p),this.bagNode.quaternion.copy(e.q),this.bagNode.scale.setScalar(t),this.bagDetached=!1}visibleBounds(t){return t.makeEmpty(),this.root.updateWorldMatrix(!0,!0),this.root.traverse(e=>{if(!(e instanceof z)||!e.geometry||!e.visible||(Array.isArray(e.material)?e.material:[e.material]).every(r=>!r.visible))return;e.geometry.boundingBox||e.geometry.computeBoundingBox();const s=e.geometry.boundingBox;s&&(this.boundsScratch.copy(s).applyMatrix4(e.matrixWorld),t.union(this.boundsScratch))}),t}get flueHalfWidth(){return .435*(1-.55*this.squash)}}class Q0{constructor(t){this.group=new jt;const e=new ft({map:gr(t+60,22),roughness:.62}),n=new ft({color:8135206,roughness:.55,metalness:.05}),s=new ft({color:4860954,roughness:.7}),r=d=>(d.receiveShadow=!0,d),o=d=>{const p=[];for(let m=0;m<=20;m++){const f=m/20,M=-.85+f*1.9;let x=.05;if(f>.78){const v=(f-.78)/.22;x=.05+Math.sin(v*Math.PI*.65)*.34}p.push(new C(d,x,M))}const g=new Fl(p),_=r(new z(new La(g,24,.035,8),e));this.group.add(_);for(const m of[-.5,.35]){const f=r(new z(new Ot(.05,.22,.06),e));f.position.set(d,.18,m),this.group.add(f)}};o(-.32),o(.32);const a=r(new z(new Ot(.72,.06,1.5),n));a.position.set(0,.32,-.05),this.group.add(a);for(const d of[1,-1]){const p=r(new z(new Ot(.05,.3,1.5),n));p.position.set(.36*d,.48,-.05),this.group.add(p)}const c=r(new z(new xe(.36,.36,.72,14,1,!1,0,Math.PI),n));c.rotation.z=Math.PI/2,c.rotation.y=Math.PI/2,c.position.set(0,.52,-.78),this.group.add(c);const l=r(new z(new Ot(.72,.24,.05),n));l.position.set(0,.45,.68),this.group.add(l);const h=r(new z(new Ot(.66,.05,.34),e));h.position.set(0,.5,-.42),this.group.add(h);for(const d of[1,-1]){const p=r(new z(new xe(.022,.022,1.48,8),s));p.rotation.x=Math.PI/2,p.position.set(.36*d,.64,-.05),this.group.add(p)}const u=r(new z(new Ot(.5,.12,.4),new ft({color:3887461,roughness:.95})));u.rotation.y=.15,u.position.set(-.04,.42,.28),this.group.add(u)}}const un=22,$e=14;class tg{constructor(t,e){this.group=new jt,this.baseRing=[],this.bulges=[],this.peek=null,this.time=0,this.wobbleAmt=0;const n=Y0(t,e);n.repeat.set(2,2);const s=new ft({map:n,roughness:.95,side:fn});this.geo=new Me;const r=.62;for(let u=0;u<un;u++){const d=u/(un-1);let p=Pt(.085,.105,d),g=0,_=-d*r;if(d>.68){const m=(d-.68)/.32;g=Math.sin(m*Math.PI*.5)*.16,_=-(.68*r+Math.sin(m*Math.PI*.42)*.14),p=Pt(.105,.075,m*m)}this.baseRing.push({cx:0,cy:_,cz:g,r:p})}const o=new Float32Array(un*($e+1)*3),a=new Float32Array(un*($e+1)*2),c=[];for(let u=0;u<un;u++)for(let d=0;d<=$e;d++)if(a[(u*($e+1)+d)*2]=d/$e,a[(u*($e+1)+d)*2+1]=u/(un-1),u<un-1&&d<$e){const p=u*($e+1)+d,g=p+$e+1;c.push(p,g,p+1,g,g+1,p+1)}this.geo.setAttribute("position",new Pe(o,3)),this.geo.setAttribute("uv",new Pe(a,2)),this.geo.setIndex(c),this.mesh=new z(this.geo,s),this.mesh.castShadow=!0,this.group.add(this.mesh);const l=new z(new xe(.1,.095,.09,14),new ft({color:15262420,roughness:.95}));l.position.y=-.02,l.castShadow=!0,this.group.add(l);const h=new z(new Ce(.03,.008,6,12),new ft({color:13152392,roughness:.8}));h.position.y=.045,this.group.add(h),this.rebuild()}addGift(t,e){const n=.9-e*.21;let s;t==="box"?s={center:n,width:.1,rx:.055,rz:.045,squareness:.85,grow:0}:t==="ball"?s={center:n,width:.085,rx:.05,rz:.05,squareness:0,grow:0}:s={center:n-.02,width:.16,rx:.028,rz:.024,squareness:.2,grow:0},this.bulges.push(s),this.wobbleAmt=1}showPeek(t){this.peek&&this.group.remove(this.peek);const e=new jt;if(t==="box"){const n=new z(new Ot(.07,.07,.07),new ft({color:3830448,roughness:.6}));n.rotation.set(.4,.5,.2),e.add(n);const s=new z(new Ot(.074,.018,.074),new ft({color:14205530,roughness:.5}));s.rotation.copy(n.rotation),e.add(s)}else if(t==="ball"){const n=new z(new me(.045,12,10),new ft({color:12601416,roughness:.4}));e.add(n)}else{const n=new ft({color:15262426,roughness:.5}),s=new z(new xe(.014,.014,.12,8),n);e.add(s);const r=new z(new Ce(.035,.014,8,12,Math.PI),n);r.position.y=.06,e.add(r);const o=new ft({color:11544616,roughness:.5});for(let a=0;a<3;a++){const c=new z(new Ce(.0148,.006,6,10),o);c.rotation.x=Math.PI/2,c.position.y=-.045+a*.035,e.add(c)}}e.position.set(0,.05,.01),e.scale.setScalar(.01),this.peek=e,this.group.add(e)}ringDeform(t){let e=0,n=0,s=0,r=0;for(const o of this.bulges){const a=(t-o.center)/o.width,c=Math.exp(-a*a);e+=o.rx*c*o.grow,n+=o.rz*c*o.grow,s=Math.max(s,o.squareness*c*o.grow),r+=.012*c*o.grow}return{rx:e,rz:n,sq:s,drop:r}}rebuild(){const t=this.geo.attributes.position,e=Math.sin(this.time*7)*.06*this.wobbleAmt;let n=0;for(let s=0;s<un;s++){const r=s/(un-1),o=this.baseRing[s],a=this.ringDeform(r);n+=a.drop/un*8;for(let c=0;c<=$e;c++){const l=c/$e*Math.PI*2;let h=Math.cos(l),u=Math.sin(l);if(a.sq>0){const f=1+a.sq*.35*Math.abs(Math.cos(2*l));h*=f,u*=f}const d=o.r+a.rx,p=o.r+a.rz,g=o.cx+h*d+e*Math.sin(r*6),_=o.cy-n,m=o.cz+u*p;t.setXYZ(s*($e+1)+c,g,_,m)}}t.needsUpdate=!0,this.geo.computeVertexNormals()}update(t){this.time+=t;let e=this.wobbleAmt>.01;for(const n of this.bulges)n.grow<1&&(n.grow=Math.min(1,n.grow+t*2.2),e=!0);if(this.wobbleAmt>.01&&(this.wobbleAmt*=Math.exp(-t*2.4)),e&&this.rebuild(),this.peek&&this.peek.scale.x<1){const n=Math.min(1,this.peek.scale.x+t*2.5);this.peek.scale.setScalar(n)}}reset(){this.bulges.length=0,this.wobbleAmt=0,this.peek&&(this.group.remove(this.peek),this.peek=null),this.rebuild()}get filled(){return this.bulges.length}}function eg(i){const t=[],e=n=>new z(new me(n,8,6),new rn({visible:!1}));{const n=new jt,s=new z(new Ot(.16,.13,.14),new ft({color:3830448,roughness:.55}));s.castShadow=!0,n.add(s);const r=new ft({color:14205530,roughness:.45}),o=new z(new Ot(.165,.135,.03),r);n.add(o);const a=new z(new Ot(.03,.135,.145),r);n.add(a);const c=new z(new me(.025,8,6),r);c.position.y=.075,n.add(c);const l=e(.24);n.add(l),t.push({kind:"box",group:n,hit:l,home:new C,state:"idle",flyT:0,from:new C,bob:0})}{const n=new jt,s=new z(new me(.085,16,12),new ft({color:12601416,roughness:.35}));s.castShadow=!0,n.add(s);const r=new z(new Ce(.085,.012,8,20),new ft({color:15261904,roughness:.4}));r.rotation.x=Math.PI/2.4,n.add(r);const o=e(.22);n.add(o),t.push({kind:"ball",group:n,hit:o,home:new C,state:"idle",flyT:0,from:new C,bob:1.3})}{const n=new jt,s=new ft({color:15262426,roughness:.45}),r=new z(new xe(.02,.02,.2,10),s);r.castShadow=!0,n.add(r);const o=new z(new Ce(.05,.02,8,14,Math.PI),s);o.position.y=.1,n.add(o);const a=new ft({color:11544616,roughness:.45});for(let l=0;l<4;l++){const h=new z(new Ce(.021,.008,6,10),a);h.rotation.x=Math.PI/2,h.position.y=-.08+l*.05,n.add(h)}const c=e(.22);n.add(c),t.push({kind:"cane",group:n,hit:c,home:new C,state:"idle",flyT:0,from:new C,bob:2.6})}return t}function ng(i,t,e){if(i.state!=="flying")return!1;i.flyT+=t/.75;const n=Math.min(1,i.flyT),s=i.group.position;s.x=i.from.x+(e.x-i.from.x)*n,s.z=i.from.z+(e.z-i.from.z)*n;const r=Math.sin(n*Math.PI)*.5;s.y=i.from.y+(e.y-i.from.y)*mr(n)+r,i.group.rotation.x+=t*6,i.group.rotation.z+=t*3;const o=n>.75?1-pr((n-.75)/.25)*.9:1;return i.group.scale.setScalar(o),n>=1?(i.state="done",i.group.visible=!1,!0):!1}class jc{constructor(t,e,n,s,r=.75){this.pool=[],this.gravity=s,this.geo=new Me;const o=new Float32Array(t*3);this.geo.setAttribute("position",new Pe(o,3)),this.mat=new fs({color:e,size:n,transparent:!0,opacity:r,depthWrite:!1,sizeAttenuation:!0}),this.points=new fr(this.geo,this.mat),this.points.frustumCulled=!1;for(let a=0;a<t;a++)this.pool.push({alive:!1,pos:new C(0,-100,0),vel:new C,life:0,maxLife:1,size:n})}emit(t,e,n,s,r=1){let o=0;for(const a of this.pool){if(o>=e)break;a.alive||(a.alive=!0,a.pos.copy(t).add(new C((Math.random()-.5)*n,(Math.random()-.5)*n*.5,(Math.random()-.5)*n)),a.vel.set((Math.random()-.5)*n*2.2,s*(.5+Math.random()*.8),(Math.random()-.5)*n*2.2),a.life=0,a.maxLife=r*(.6+Math.random()*.8),o++)}}update(t){const e=this.geo.attributes.position;let n=0;for(const s of this.pool)s.alive&&(s.life+=t,s.life>=s.maxLife?(s.alive=!1,s.pos.set(0,-100,0)):(s.vel.y+=this.gravity*t,s.vel.multiplyScalar(1-t*1.8),s.pos.addScaledVector(s.vel,t))),e.setXYZ(n,s.pos.x,s.pos.y,s.pos.z),n++;e.needsUpdate=!0}}class ig{constructor(t){this.curPos=new C,this.curLook=new C,this.curFov=45,this.lambda=2.2,this.camera=new Xe(45,t,.08,90)}snapTo(t){this.curPos.copy(t.pos),this.curLook.copy(t.look),this.curFov=t.fov,this.apply()}update(t,e){const n=1-Math.exp(-this.lambda*e);this.curPos.lerp(t.pos,n),this.curLook.lerp(t.look,n),this.curFov=us(this.curFov,t.fov,this.lambda,e),this.apply()}apply(){this.camera.position.copy(this.curPos),this.camera.lookAt(this.curLook),Math.abs(this.camera.fov-this.curFov)>.01&&(this.camera.fov=this.curFov,this.camera.updateProjectionMatrix())}get y(){return this.curPos.y}setAspect(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}}const sg=`
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <path d="M14 32 L32 16 L50 32" fill="none" stroke="#e8ecf8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="19" y="32" width="26" height="16" rx="2" fill="#e8ecf8"/>
  <rect x="38" y="18" width="6" height="10" fill="#e8ecf8"/>
  <path d="M24 57 a10 8 0 1 1 20 0" fill="none" stroke="#8fd0a0" stroke-width="4" stroke-linecap="round"/>
  <path d="M46 51 L46 59 L38 57 Z" fill="#8fd0a0"/>
</svg>`,rg=`
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <rect x="18" y="8" width="28" height="48" rx="4" fill="none" stroke="#d8a078" stroke-width="4"/>
  <path d="M25 12 C43 22 21 33 39 53" fill="none" stroke="#171310" stroke-width="7" stroke-linecap="round"/>
  <path d="M40 12 C20 24 45 34 27 52" fill="none" stroke="#70645c" stroke-width="4" stroke-linecap="round" stroke-dasharray="4 5"/>
  <circle cx="33" cy="32" r="5" fill="#f2d06a" opacity=".85"/>
</svg>`,og=`
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <rect x="22" y="8" width="20" height="48" rx="3" fill="none" stroke="#d8a078" stroke-width="4"/>
  <path d="M32 49 C18 39 45 34 31 24 C22 18 37 13 37 8" fill="none" stroke="#a8d8e8" stroke-width="4" stroke-linecap="round"/>
  <path d="M19 33 L45 27" stroke="#9b8b7e" stroke-width="5" stroke-linecap="round"/>
  <circle cx="18" cy="34" r="4" fill="#f2d06a"/>
  <path d="M49 44 q7 -5 0 -10 q-5 -4 1 -9" fill="none" stroke="#e8ecf8" stroke-width="3" stroke-linecap="round"/>
</svg>`,ag=`
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <rect x="24" y="12" width="16" height="42" rx="2" fill="none" stroke="#d8a078" stroke-width="4"/>
  <rect x="20" y="8" width="24" height="6" rx="2" fill="#d8a078"/>
  <path d="M12 26 L12 42 M7 31 L12 26 L17 31" fill="none" stroke="#e8ecf8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M52 42 L52 26 M47 37 L52 42 L57 37" fill="none" stroke="#e8ecf8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="32" cy="33" r="6" fill="#c85050"/>
</svg>`,cg=`
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <path d="M40 12 L20 32 L40 52" fill="none" stroke="#e8ecf8" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;class lg{constructor(){this.menuEl=document.getElementById("menu"),this.exitEl=document.getElementById("exit-free"),this.debugEl=document.getElementById("debug-overlay"),this.onAgain=null,this.onSoot=null,this.onBreath=null,this.onFree=null,this.onExitFree=null;const t=document.getElementById("btn-again"),e=document.getElementById("btn-newhouse"),n=document.getElementById("btn-breath"),s=document.getElementById("btn-free");t.innerHTML=sg,e.innerHTML=rg,n.innerHTML=og,s.innerHTML=ag,this.exitEl.innerHTML=cg,t.addEventListener("click",()=>this.onAgain?.()),e.addEventListener("click",()=>this.onSoot?.()),n.addEventListener("click",()=>this.onBreath?.()),s.addEventListener("click",()=>this.onFree?.()),this.exitEl.addEventListener("click",()=>this.onExitFree?.()),new URLSearchParams(location.search).has("debug")&&(this.debugEl.style.display="block")}configureExperienceMenu(t,e){const n=document.getElementById("btn-again"),s=document.getElementById("btn-newhouse"),r=document.getElementById("btn-breath"),o=document.getElementById("btn-free"),a={"first-passage":n,"soot-remembers":s,"old-chimney-breath":r};for(const l of[n,s,r,o])l.classList.remove("featured");if(t){n.hidden=s.hidden=r.hidden=o.hidden=!1;return}n.hidden=s.hidden=r.hidden=o.hidden=!0;const c=e?a[e]:n;c.hidden=!1,c.classList.add("featured")}showMenu(t){this.menuEl.classList.toggle("visible",t)}showExit(t){this.exitEl.classList.toggle("visible",t)}setDebug(t){this.debugEl.style.display!=="none"&&(this.debugEl.textContent=t)}}class hg{constructor(){this.ctx=null,this.master=null,this.slideNoise=null,this.slideGain=null,this.slideFilter=null,this.scrapeTimer=0,this.surfaceCueTimer=0,this.draftTimer=0}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.5,this.master.connect(this.ctx.destination),this.startSlideLoop()}catch{this.ctx=null}}noiseBuffer(t){const e=this.ctx,n=e.createBuffer(1,e.sampleRate*t,e.sampleRate),s=n.getChannelData(0);for(let r=0;r<s.length;r++)s[r]=Math.random()*2-1;return n}startSlideLoop(){const t=this.ctx,e=t.createBufferSource();e.buffer=this.noiseBuffer(2),e.loop=!0;const n=t.createBiquadFilter();n.type="bandpass",n.frequency.value=500,n.Q.value=.8;const s=t.createGain();s.gain.value=0,e.connect(n).connect(s).connect(this.master),e.start(),this.slideNoise=e,this.slideGain=s,this.slideFilter=n}setSlide(t,e,n="normal"){if(!this.ctx||!this.slideGain||!this.slideFilter)return;const s=this.ctx.currentTime;this.surfaceCueTimer-=e;const r=n==="old-soot"?.72:n==="fresh-brick"?1.12:1,o=Math.min(.4,t*.5*r);this.slideGain.gain.setTargetAtTime(o,s,.06);const a=n==="old-soot"?.72:n==="fresh-brick"?1.18:1;this.slideFilter.frequency.setTargetAtTime((300+t*1900)*a,s,.08),t>.02&&t<.3&&(this.scrapeTimer-=e,this.scrapeTimer<=0&&(this.scrapeTimer=.12+Math.random()*.2,this.tick(160+Math.random()*120,.05,.05)))}sootContact(t){this.surfaceCueTimer>0||(this.surfaceCueTimer=.3,t?this.blip([260,330],.16,.035,"sine"):this.tick(185+Math.random()*65,.08,.055))}chimneyBreath(t,e){this.draftTimer-=e,t>.35&&this.draftTimer<=0&&(this.draftTimer=.55+Math.random()*.35,this.blip([220+t*70,300+t*90],.35,.025,"sine"))}oldIronKnock(t=!1){this.blip(t?[430,590]:[190,260],.22,.07,"triangle")}distantBell(){this.blip([1175,1568,1175],.48,.025,"sine")}tick(t,e,n){if(!this.ctx||!this.master)return;const s=this.ctx,r=s.createOscillator();r.type="triangle",r.frequency.value=t;const o=s.createGain();o.gain.setValueAtTime(n,s.currentTime),o.gain.exponentialRampToValueAtTime(1e-4,s.currentTime+e),r.connect(o).connect(this.master),r.start(),r.stop(s.currentTime+e+.02)}blip(t,e,n,s="sine"){if(!this.ctx||!this.master)return;const r=this.ctx;t.forEach((o,a)=>{const c=r.createOscillator();c.type=s,c.frequency.value=o;const l=r.createGain(),h=r.currentTime+a*.09;l.gain.setValueAtTime(0,h),l.gain.linearRampToValueAtTime(n,h+.02),l.gain.exponentialRampToValueAtTime(1e-4,h+e),c.connect(l).connect(this.master),c.start(h),c.stop(h+e+.05)})}landThump(){if(!this.ctx||!this.master)return;const t=this.ctx,e=t.createOscillator();e.type="sine",e.frequency.setValueAtTime(120,t.currentTime),e.frequency.exponentialRampToValueAtTime(45,t.currentTime+.18);const n=t.createGain();n.gain.setValueAtTime(.35,t.currentTime),n.gain.exponentialRampToValueAtTime(1e-4,t.currentTime+.25),e.connect(n).connect(this.master),e.start(),e.stop(t.currentTime+.3)}softLand(){this.blip([180,90],.2,.16,"sine")}giftPluck(t){this.blip([523*Math.pow(1.19,t)],.35,.2,"triangle")}stockingPop(){this.blip([320,480],.18,.14,"sine")}noseChime(){this.blip([784,988,1319],.5,.14,"sine")}whooshUp(){if(!this.ctx||!this.master)return;const t=this.ctx,e=t.createBufferSource();e.buffer=this.noiseBuffer(.8);const n=t.createBiquadFilter();n.type="bandpass",n.Q.value=1.2,n.frequency.setValueAtTime(300,t.currentTime),n.frequency.exponentialRampToValueAtTime(2600,t.currentTime+.7);const s=t.createGain();s.gain.setValueAtTime(.28,t.currentTime),s.gain.exponentialRampToValueAtTime(1e-4,t.currentTime+.8),e.connect(n).connect(s).connect(this.master),e.start()}hintChime(){this.blip([659,880],.4,.08,"sine")}sleighBell(){this.blip([1568,2093,1568],.3,.06,"sine")}}const ve=new hg,Qc="santa-chimney-metrics-v1";class ug{constructor(){this.t0=performance.now(),this.data={sessionStart:Date.now(),firstInputMs:null,firstDescentDoneMs:null,firstRetryMs:null,hintCount:0,descents:0,loopsCompleted:0},this.load()}now(){return Math.round(performance.now()-this.t0)}firstInput(){this.data.firstInputMs===null&&(this.data.firstInputMs=this.now(),this.save())}descentDone(){this.data.descents++,this.data.firstDescentDoneMs===null&&(this.data.firstDescentDoneMs=this.now()),this.save()}retry(){this.data.firstRetryMs===null&&(this.data.firstRetryMs=this.now(),this.save())}hint(){this.data.hintCount++,this.save()}loopCompleted(){this.data.loopsCompleted++,this.save()}save(){try{localStorage.setItem(Qc,JSON.stringify(this.data))}catch{}}load(){try{const t=localStorage.getItem(Qc);if(t){const e=JSON.parse(t);this.data.hintCount=0,this.data.loopsCompleted=e.loopsCompleted||0}}catch{}}summary(){const t=this.data;return[`firstInput: ${t.firstInputMs??"-"}ms`,`firstDescent: ${t.firstDescentDoneMs??"-"}ms`,`firstRetry: ${t.firstRetryMs??"-"}ms`,`hints: ${t.hintCount}`,`descents: ${t.descents}`,`loops: ${t.loopsCompleted}`].join(`
`)}}const ni=new ug,Zl="santa-night:v1",ma=1,Es=Object.freeze(["reindeer","sack","chimney"]),dg=Object.freeze({reindeer:[],sack:[],chimney:[]}),fg=Object.freeze({reindeer:null,sack:null,chimney:null});function $l(){const i=Date.now().toString(36),t=Math.random().toString(36).slice(2,8);return`${i}-${t}`}function _r(){return{version:ma,nightId:$l(),nightPhase:0,seenRuns:{reindeer:[],sack:[],chimney:[]},litHouses:[],latestTrace:{reindeer:null,sack:null,chimney:null}}}function bs(i){return Array.isArray(i)?[...new Set(i.filter(t=>typeof t=="string"&&t.length<=80))]:[]}function vr(i,t){if(typeof i!="string"||i.length===0||i.length>80)throw new TypeError(`${t} must be a non-empty string of at most 80 characters`);return i}function Jl(i){if(!i||typeof i!="object"||Array.isArray(i))return null;const t=typeof i.id=="string"?i.id.slice(0,80):"";if(!t)return null;const e=typeof i.detail=="string"?i.detail.slice(0,120):void 0;return e?{id:t,detail:e}:{id:t}}function Kl(i){if(!i||typeof i!="object"||i.version!==ma)return _r();const t={},e={};for(const r of Es)t[r]=bs(i.seenRuns?.[r]??dg[r]),e[r]=Jl(i.latestTrace?.[r]??fg[r]);const n=Es.reduce((r,o)=>r+t[o].length,0),s=Number.isFinite(i.nightPhase)?Math.floor(i.nightPhase):n;return{version:ma,nightId:typeof i.nightId=="string"&&i.nightId.length<=80?i.nightId:$l(),nightPhase:Math.max(0,Math.min(9,s,n)),seenRuns:t,litHouses:bs(i.litHouses),latestTrace:e}}function jl(i){try{return globalThis.localStorage}catch{return null}}function Da(i){const t=jl();if(!t)return _r();try{const e=t.getItem(Zl);return e?Kl(JSON.parse(e)):_r()}catch{return _r()}}function pg(i,t){const e=Kl(i),n=jl();if(n)try{n.setItem(Zl,JSON.stringify(e))}catch{}return e}function mg(i,t,e={},n){if(!Es.includes(i))throw new TypeError(`Unknown Santa game: ${i}`);vr(t,"runId");const s=Da();if(s.seenRuns[i]=bs([...s.seenRuns[i],t]),e.litHouseId!==void 0&&(s.litHouses=bs([...s.litHouses,vr(e.litHouseId,"litHouseId")])),e.traceId!==void 0){if(vr(e.traceId,"traceId"),e.traceDetail!==void 0&&(typeof e.traceDetail!="string"||e.traceDetail.length>120))throw new TypeError("traceDetail must be a string of at most 120 characters");s.latestTrace[i]=Jl({id:e.traceId,detail:e.traceDetail})}const r=Es.reduce((o,a)=>o+s.seenRuns[a].length,0);return s.nightPhase=Math.min(9,r),pg(s)}function go(i,t,e){if(!Es.includes(i))throw new TypeError(`Unknown Santa game: ${i}`);for(const r of t)vr(r,"ordered runId");const n=bs(t),s=new Set(Da().seenRuns[i]);return n.find(r=>!s.has(r))??n[0]??null}const Ni=["first-passage","soot-remembers","old-chimney-breath"];function _o(i){return i!==null&&Ni.includes(i)}function vo(i){return i<.08?"mouth":i<.27?"narrow-throat":i<.47?"bend":i<.69?"soot-chamber":i<.83?"damper":i<.97?"cleanout":"firebox"}function gg(i){switch(i){case"narrow-throat":return .23;case"bend":return .27;case"soot-chamber":return Y.innerHalf+.1;case"damper":return .28;default:return Y.innerHalf}}function _g(i){return i<=.24||i>=.58?0:Math.sin((i-.24)/.34*Math.PI)*.11}function tl(){return{stops:0,reverses:0,left:0,right:0,oldSoot:0,freshBrick:0,damperStory:!1,cleanoutStory:!1,zones:new Set}}const Vt=(i,t,e)=>new C(i,t,e);function sn(i){return Gn(i)+.24}class vg{constructor(t,e,n){this.scene=new i0,this.gifts=[],this.ui=new lg,this.phase="intro",this.tl=null,this.time=0,this.zone="roof",this.reaction="idle",this.runStats=tl(),this.runRecorded=!1,this.lastZone="roof",this.zoneStillT=0,this.stopLatched=!1,this.reverseLatched=!1,this.surface="normal",this.lastSurface="normal",this.draftT=0,this.historySeen=new Set,this.historyReactionT=0,this.externalEchoPlayed=!1,this.sackEchoGift=-1,this.pos=new C,this.yaw=0,this.yawTarget=0,this.entryE=0,this.p=0,this.vel=0,this.dragAccum=0,this.dragXAccum=0,this.scrubRate=0,this.lastDragT=0,this.touching=!1,this.lean=0,this.lastPaintP=-1,this.movedRecently=0,this.retriedThisRun=!1,this.giftOrder=0,this.lastGift="ball",this.reachTimer=0,this.idleT=0,this.hintCooldown=0,this.demoT=0,this.sledFly=0,this.raycaster=new H0,this.supportBounds=new di,this.debugSupportGap=null,this.noseArmed=!1,this.pendingLaunch=0,this.yShaftTop=4.12,this.yShaftBot=.98,this.fps=60,this.debugMinVel=0,this.upScrub=0,this.seed=t,this.input=e,this.nightState=Da();const s=Ni.every(o=>this.nightState.seenRuns.chimney.includes(o)),r=s?null:go("chimney",Ni);this.runId=_o(r)?r:"first-passage",this.sackTrace=this.nightState.latestTrace.sack,this.reindeerTrace=this.nightState.latestTrace.reindeer,this.rig=new ig(n),this.scene.fog=new Aa(1055280,16,60),this.santa=new j0(t),this.santa.root.visible=!1,this.scene.add(this.santa.root),this.soot=new jc(90,1840402,.05,-.6,.8),this.snowPuff=new jc(60,14674166,.06,-1.2,.8),this.scene.add(this.soot.points,this.snowPuff.points),this.buildWorld(t),this.resetRun(),e.handler=this.makeInputHandler(),this.wireUI(),s?this.startRevisitMenu():this.startIntro(),this.rig.snapTo(this.shotFor(0))}get cx(){return Y.chimneyX}get cz(){return Y.chimneyZ}seatPos(){return Vt(Y.sledX,Gn(Y.sledX)+.36,Y.sledZ-.45)}buildWorld(t){this.world&&(this.scene.remove(this.world.group),this.world.group.traverse(s=>{if(s instanceof z){s.geometry.dispose();const r=Array.isArray(s.material)?s.material:[s.material];for(const o of r){for(const a of["map","normalMap","roughnessMap"]){const c=o[a];c&&c.dispose()}o.dispose()}}})),this.sled&&this.scene.remove(this.sled.group),this.stocking&&this.scene.remove(this.stocking.group);for(const s of this.gifts)this.scene.remove(s.group);this.world=new K0(t),this.scene.add(this.world.group),this.yShaftTop=Y.chimneyTopY-.9,this.yShaftBot=Y.shaftBottomY-.02,this.sled=new Q0(t);const e=Math.atan2(Y.ridgeY-Y.eaveY,Y.eaveX);this.sled.group.rotation.z=e*1,this.sled.group.position.set(Y.sledX,Gn(Y.sledX)+.2,Y.sledZ),this.scene.add(this.sled.group),this.stocking=new tg(t+40,this.world.variation.stockingHue),this.stocking.group.position.set(Y.stockingX,Y.stockingTopY,Y.stockingZ),this.scene.add(this.stocking.group),this.gifts=eg();const n=[[1.5,.09,-.52],[1.82,.1,-.38],[2.14,.13,-.5]];this.gifts.forEach((s,r)=>{s.home.set(...n[r]),s.group.position.copy(s.home),s.group.visible=!1,this.scene.add(s.group)}),this.applySackTraceToGift()}applySackTraceToGift(){if(this.sackEchoGift=-1,!this.sackTrace||this.gifts.length===0)return;let t=0;for(const s of`${this.sackTrace.id}:${this.sackTrace.detail??""}`)t=t*31+s.charCodeAt(0)>>>0;this.sackEchoGift=t%this.gifts.length;const e=this.gifts[this.sackEchoGift],n=new z(new Ce(.105,.012,7,24),new ft({color:16045175,emissive:12086050,emissiveIntensity:.8,metalness:.25,roughness:.42}));n.rotation.x=Math.PI/2,n.position.y=.06,e.group.add(n)}wireUI(){this.ui.onAgain=()=>{if(this.phase!=="menu")return;const t=go("chimney",Ni);this.startSelectedRun(_o(t)?t:"first-passage")},this.ui.onSoot=()=>{this.phase==="menu"&&this.startSelectedRun("soot-remembers")},this.ui.onBreath=()=>{this.phase==="menu"&&this.startSelectedRun("old-chimney-breath")},this.ui.onFree=()=>{this.phase==="menu"&&(this.ui.showMenu(!1),this.startFreeEnter())},this.ui.onExitFree=()=>{this.phase==="free"&&(this.ui.showExit(!1),this.startFreeExit())}}startSelectedRun(t){this.ui.showMenu(!1),this.runId=t,this.resetRun(),this.startWalkFromSled()}startRevisitMenu(){this.santa.root.visible=!0,this.sledFly=1,this.world.showSledTracks(1),this.pos.copy(this.seatPos()),this.yaw=this.yawTarget=0,this.startMenu()}resetRun(){this.stocking.reset(),this.giftOrder=0;for(const e of this.gifts)e.state="idle",e.group.visible=!1,e.group.scale.setScalar(1),e.group.position.copy(e.home),e.group.rotation.set(0,0,0);this.santa.bagDetached&&this.santa.reattachBag(1),this.santa.bagBaseScale=1,this.santa.squash=0,this.santa.bagSquash=0,this.retriedThisRun=!1,this.noseArmed=!1,this.pendingLaunch=0,this.runStats=tl(),this.runRecorded=!1,this.lastZone="roof",this.zone="roof",this.reaction="idle",this.zoneStillT=0,this.stopLatched=!1,this.reverseLatched=!1,this.surface=this.lastSurface="normal",this.draftT=0,this.historySeen.clear(),this.historyReactionT=0,this.externalEchoPlayed=!1;const t=this.runId==="soot-remembers"&&this.nightState.seenRuns.chimney.length>0;this.world.beginSootRun(t)}startIntro(){this.phase="intro",this.santa.root.visible=!1,this.sledFly=0,this.world.showSledTracks(0);const t=new We;t.add(.4,3.2,e=>{this.sledFly=e;const n=we(e),s=Y.sledX,r=Y.sledZ,o=Gn(s)+4.2,a=Pt(o,Gn(s)+.2,pr(n)),c=Pt(r+9,r,n);this.sled.group.position.set(s,a,c),this.sled.group.rotation.x=Math.sin(e*Math.PI)*-.12,e>.72&&this.world.showSledTracks(as(e,.72,1,0,1))}),t.call(3.4,()=>{ve.softLand(),ve.sleighBell(),this.snowPuff.emit(this.sled.group.position.clone().add(Vt(0,.1,.4)),10,.5,.5,.9)}),this.reindeerTrace&&t.call(1.25,()=>{this.world.showDistantSleighEcho(),ve.distantBell(),this.reaction="reindeer-echo",this.externalEchoPlayed=!0}),t.call(4,()=>{this.santa.root.visible=!0,this.pos.set(Y.sledX+.15,sn(Y.sledX+.15),Y.sledZ-1),this.yaw=this.yawTarget=Math.PI,this.santa.setPose({carry:1},!0)}),t.then(()=>this.startWalk()),this.tl=t}startWalkFromSled(){this.santa.root.visible=!0,this.pos.set(Y.sledX+.15,sn(Y.sledX+.15),Y.sledZ-1),this.yaw=this.yawTarget=Math.PI,this.santa.setPose({carry:1},!0),this.startWalk()}startWalk(){this.phase="walk";const t=this.pos.clone(),e=Vt(Y.standX,sn(Y.standX),Y.standZ),n=Vt(1.5,sn(1.5),-.55),s=new We;s.add(0,3,r=>{const o=we(r),a=t.clone().lerp(n,o),c=n.clone().lerp(e,o),l=a.lerp(c,o);l.y=sn(l.x);const h=Math.atan2(c.x-a.x||1e-4,c.z-a.z||-1e-4);this.yawTarget=h,this.pos.copy(l),this.santa.walkSpeed=.85,this.santa.setPose({carry:1})}),s.then(()=>{this.santa.walkSpeed=0,this.yawTarget=-Math.PI/2,this.startPeek()}),this.tl=s}startPeek(){this.phase="peek",this.tl=null,this.idleT=0,this.hintCooldown=5.5,this.entryE=0,this.santa.setPose({peek:1,carry:.25}),this.santa.peekPhase=1}startEntry(){this.phase="entry",ni.firstInput(),this.santa.peekPhase=0,this.idleT=0}startDescend(t){this.phase=t?"free":"descend",this.p=.02,this.upScrub=0,this.vel=0,this.lean=0,this.lastPaintP=-1,this.idleT=0,this.hintCooldown=7,this.santa.setPose({tuck:1}),this.zone="mouth",this.lastZone="mouth",this.reaction="slow-roll"}startLanding(){this.phase="landing",this.zone="firebox",this.reaction="landed",ni.descentDone(),ve.setSlide(0,0);const t=()=>this.pos.clone().add(Vt(0,.05,0)),e=new We;e.add(0,.5,s=>{this.pos.y=Pt(this.yShaftBot,Y.fireboxFloorY+.02,mr(s)),this.santa.squash=Pt(1,.55,s),this.santa.bagSquash=Pt(1,.4,s),this.santa.setPose({squat:s,tuck:1-s})}),e.call(.5,()=>{ve.landThump(),this.soot.emit(t(),14,.35,1.1,1.1),this.world.paintSoot(.985,.5,.6)}),e.add(.5,.8,s=>{this.santa.squash=Pt(.55,1,we(s)),this.santa.bagSquash=Pt(.4,1,we(s)),this.santa.setPose({squat:Pt(1,.75,s),carry:.3*s})}),e.add(1.5,.8,s=>{const r=we(s);this.pos.x=this.cx,this.pos.z=Pt(this.cz,Y.roomSantaZ,r),this.yawTarget=.5,this.santa.walkSpeed=.5;const o=as(this.pos.z,Y.fireboxFrontZ-.2,Y.fireboxFrontZ+.25,0,1);this.santa.squash=1,this.santa.bagSquash=1,this.santa.setPose({squat:(1-o)*.75,carry:.3})}),e.add(2.3,.6,s=>{const r=we(s);this.pos.x=Pt(this.cx,2.05,r),this.pos.z=Y.roomSantaZ,this.yawTarget=.5,this.santa.walkSpeed=.5,this.santa.squash=Pt(1,0,r),this.santa.bagSquash=Pt(1,0,r),this.santa.setPose({carry:.3})}),e.call(2.9,()=>{this.santa.walkSpeed=0}),e.add(3,1.3,s=>{const r=Math.sin(oe(s)*Math.PI);this.santa.setPose({brushBeard:r,carry:.3})}),e.call(3.35,()=>{const s=new C;this.santa.faceTarget.getWorldPosition(s),this.soot.emit(s.add(Vt(0,-.15,.1)),8,.16,.15,1)}),e.call(3.6,()=>this.soot.emit(this.pos.clone().add(Vt(0,1.2,.2)),4,.14,.1,.8)),e.call(4.4,()=>{this.santa.detachBag(this.scene)}),e.add(4.4,.8,s=>{const r=we(s),o=this.santa.bagNode;o.position.lerp(Vt(Y.bagRestX,.44,Y.bagRestZ),r*.5+(s>=1?1:0)),o.quaternion.slerp(new ui,r*.5),s>=1&&(o.position.set(Y.bagRestX,.44,Y.bagRestZ),o.quaternion.identity())});const n=Math.min(this.giftOrder,this.gifts.length-1);e.call(5.15,()=>{const s=this.gifts[n];s.group.position.copy(this.gifts[0].home),s.group.visible=!0,s.group.scale.setScalar(.01),ve.giftPluck(n),n===this.sackEchoGift&&(this.reaction="sack-echo",this.santa.wink(),this.snowPuff.emit(s.group.position.clone().add(Vt(0,.12,0)),5,.12,.2,.55))}),e.add(5.15,.4,s=>{const r=this.gifts[n];r.state==="idle"&&r.group.scale.setScalar(G0(s))}),e.then(()=>this.startGifts()),this.tl=e}startGifts(){this.phase="gifts",this.tl=null,this.idleT=0,this.hintCooldown=7,this.yawTarget=-.9,this.santa.setPose({kneel:.4}),this.zone="room"}startPrepAscend(){this.phase="prepAscend";const t=new We,e=this.pos.clone();t.add(0,.9,n=>{const s=we(n);this.pos.x=Pt(e.x,2.2,s),this.pos.z=Pt(e.z,Y.roomSantaZ+.02,s),this.yawTarget=Math.PI/2,this.santa.walkSpeed=.6,this.santa.setPose({})}),t.call(.95,()=>{const n=1-this.giftOrder*.07;this.santa.reattachBag(n),this.santa.bagBaseScale=n}),t.add(.9,.5,n=>{this.santa.walkSpeed=0,this.santa.setPose({squat:Math.sin(n*Math.PI)*.6,carry:n})}),t.add(1.5,.7,n=>{const s=we(n);this.pos.x=Pt(2.2,this.cx,s),this.pos.z=Y.roomSantaZ+.02,this.yawTarget=Pt(Math.PI/2,.25,s),this.santa.walkSpeed=.55,this.santa.squash=Pt(0,1,s),this.santa.bagSquash=Pt(0,1,s),this.santa.setPose({carry:1,squat:.12*s})}),t.add(2.2,.8,n=>{const s=we(n);this.pos.x=this.cx,this.pos.z=Pt(Y.roomSantaZ+.02,this.cz+.05,s),this.yawTarget=Pt(.25,0,s),this.santa.walkSpeed=.55,this.santa.squash=1,this.santa.bagSquash=1;const r=as(this.pos.z,Y.fireboxFrontZ+.2,Y.fireboxFrontZ-.2,0,1);this.santa.setPose({carry:1,squat:r*.6})}),t.then(()=>{this.santa.walkSpeed=0,this.santa.setPose({carry:.7,squat:.55,faceCam:1}),this.startNose()}),this.tl=t}startNose(){this.phase="nose",this.tl=null,this.idleT=0,this.demoT=1.4,this.hintCooldown=6}triggerNose(){if(this.phase!=="nose")return;this.phase="awaitUp",this.santa.wink(),ve.noseChime();const t=new We;t.add(0,.55,e=>{this.santa.setPose({nose:e,squat:.55,carry:.5,faceCam:1})}),t.add(.55,.8,e=>{this.santa.setPose({nose:1-e*.5,squat:.55+e*.15,carry:.6,faceCam:1})}),t.then(()=>{this.tl=null,this.idleT=0,this.hintCooldown=5,this.pendingLaunch>0&&this.startAscend()}),this.tl=t,this.noseArmed=!0}startAscend(){this.phase="ascend",this.reaction="ascending",ve.whooshUp();let t=this.pos.y;const e=this.santa.squash,n=this.santa.bagSquash,s=new We;s.add(0,.3,r=>{this.santa.squash=Pt(e,1,r),this.santa.bagSquash=Pt(n,1,r),this.santa.setPose({launch:r,squat:(1-r)*.8}),this.pos.x=Pt(this.pos.x,this.cx,r),this.pos.z=Pt(this.pos.z,this.cz,r)}),s.call(.3,()=>{t=this.pos.y}),s.add(.3,.75,r=>{const o=mr(r)*.4+r*.6;this.pos.y=Pt(t,this.yShaftTop+.55,o),this.zone=vo(oe(1-o)),Math.random()<.35&&this.world.paintSoot(oe(1-o),.5+(Math.random()-.5)*.2,.35)}),s.call(1.05,()=>{this.soot.emit(Vt(this.cx,Y.chimneyTopY+.25,this.cz),16,.3,1.6,1.2)}),s.add(1.05,.6,r=>{const o=pr(r);this.pos.x=Pt(this.cx,Y.standX,o),this.pos.z=Pt(this.cz,Y.standZ,o);const a=Pt(this.yShaftTop+.55,sn(Y.standX),o);this.pos.y=a+Math.sin(r*Math.PI)*.55,this.santa.squash=1-rr(r),this.santa.bagSquash=1-rr(r),this.santa.setPose({launch:1-r,carry:r*.8}),this.yawTarget=Math.PI*.75}),s.then(()=>this.startRoofReturn()),this.tl=s}startRoofReturn(){if(this.giftOrder<3){this.startNextPassOnRoof();return}this.phase="roofReturn",this.zone="roof",this.completeRun(),ni.loopCompleted();const t=new We;t.add(.2,1.5,n=>{const s=Math.sin(oe(n)*Math.PI);this.santa.setPose({brushSnow:s,carry:.4})}),t.call(.6,()=>this.snowPuff.emit(this.pos.clone().add(Vt(0,1,.15)),8,.3,.3,.8)),t.call(1.1,()=>this.soot.emit(this.pos.clone().add(Vt(0,.9,.15)),5,.25,.2,.8));const e=Vt(Y.sledX+.15,0,Y.sledZ-.95);t.add(1.8,2.4,n=>{const s=we(n),r=Vt(Y.standX,0,Y.standZ),o=Vt(1.4,0,-.6),a=r.clone().lerp(o,s),c=o.clone().lerp(e,s),l=a.lerp(c,s);this.pos.x=l.x,this.pos.z=l.z,this.pos.y=sn(l.x),this.yawTarget=Math.atan2(c.x-a.x||.001,c.z-a.z||.001),this.santa.walkSpeed=.8,this.santa.setPose({carry:1})}),t.add(4.2,.8,n=>{this.santa.walkSpeed=0;const s=we(n);this.pos.lerp(this.seatPos(),s),this.pos.y+=Math.sin(n*Math.PI)*.3,this.yawTarget=0,this.santa.setPose({sit:n,carry:1-n})}),t.call(5.2,()=>ve.sleighBell()),t.then(()=>this.startMenu()),this.tl=t}startNextPassOnRoof(){this.phase="roofReturn",this.zone="roof",this.reaction="next-gift",this.world.finishSootRun(),this.world.beginSootRun(!1);const t=new We;t.add(.15,1.25,e=>{const n=Math.sin(oe(e)*Math.PI);this.santa.setPose({brushSnow:n,carry:.75})}),t.call(.55,()=>this.soot.emit(this.pos.clone().add(Vt(0,.9,.15)),5,.2,.25,.75)),t.call(1.45,()=>{ve.sleighBell(),this.santa.wink()}),t.then(()=>this.startPeek()),this.tl=t}startMenu(){this.phase="menu",this.zone="roof",this.reaction="idle",this.tl=null,this.santa.setPose({sit:1,wave:.6});const t=Ni.every(n=>this.nightState.seenRuns.chimney.includes(n)),e=t?null:go("chimney",Ni);this.ui.configureExperienceMenu(t,_o(e)?e:null),this.ui.showMenu(!0)}completeRun(){if(this.runRecorded)return;this.runRecorded=!0,this.world.finishSootRun();const t=this.runStats,e=this.runId==="first-passage"?`body-${t.reverses>0?"reverse":"down"}-${t.left+t.right>0?"walls":"centre"}`:this.runId==="soot-remembers"?`soot-${t.oldSoot>0?"crossed":"fresh"}-${t.oldSoot}-${t.freshBrick}`:`breath-${t.damperStory?"damper":"flow"}-${t.cleanoutStory?"cleanout":"open"}`,n=[`zones:${[...t.zones].join(",")}`,`stops:${t.stops}`,`reverse:${t.reverses}`,`old:${t.oldSoot}`,`fresh:${t.freshBrick}`].join(";").slice(0,120);this.nightState=mg("chimney",this.runId,{litHouseId:"old-chimney-hearth",traceId:e,traceDetail:n})}startFreeEnter(){this.phase="freeEnter",this.santa.setPose({carry:1},!0);const t=new We;t.add(0,1,e=>{const n=we(e),s=Vt(Y.standX,sn(Y.standX),Y.standZ);this.pos.lerpVectors(this.seatPos(),s,n),this.pos.y+=Math.sin(e*Math.PI)*.35,this.yawTarget=-Math.PI/2,this.santa.setPose({carry:1,sit:1-e})}),t.add(1.1,1.4,e=>{this.entryE=e,this.applyEntry(e)}),t.then(()=>{this.startDescend(!0),this.ui.showExit(!0)}),this.tl=t}startFreeExit(){this.phase="freeExit",this.world.finishSootRun(),ve.whooshUp();const t=this.pos.y,e=new We;e.add(0,.7,n=>{this.pos.y=Pt(t,this.yShaftTop+.55,mr(n)*.4+n*.6)}),e.call(.72,()=>{this.soot.emit(Vt(this.cx,Y.chimneyTopY+.25,this.cz),12,.3,1.5,1.1)}),e.add(.72,.6,n=>{const s=pr(n);this.pos.x=Pt(this.cx,Y.standX,s),this.pos.z=Pt(this.cz,Y.standZ,s),this.pos.y=Pt(this.yShaftTop+.55,sn(Y.standX),s)+Math.sin(n*Math.PI)*.5,this.santa.squash=1-rr(n),this.santa.bagSquash=1-rr(n),this.santa.setPose({carry:n})}),e.add(1.4,1.4,n=>{const s=we(n),r=this.seatPos(),o=Vt(Y.standX,sn(Y.standX),Y.standZ);this.pos.lerpVectors(o,r,s),this.pos.y+=Math.sin(n*Math.PI)*.25,this.santa.walkSpeed=n<.8?.7:0,this.yawTarget=Pt(Math.PI*.6,0,s),this.santa.setPose({carry:1-n,sit:n})}),e.then(()=>{this.santa.walkSpeed=0,this.startMenu()}),this.tl=e}applyEntry(t){this.zone="mouth",this.reaction="squeeze";const e=Vt(Y.standX,sn(Y.standX),Y.standZ),n=Vt(this.cx+.34,Y.chimneyTopY-.62,this.cz),s=Vt(this.cx,this.yShaftTop,this.cz);if(t<.38){const r=we(t/.38);this.pos.lerpVectors(e,n,r),this.pos.y+=Math.sin(r*Math.PI)*.42,this.yawTarget=Pt(-Math.PI/2,0,r),this.santa.setPose({peek:1-r,rimSit:r,carry:(1-r)*.3}),this.santa.squash=0,this.santa.bagSquash=r*.15}else{const r=we((t-.38)/.62);this.pos.lerpVectors(n,s,r),this.yawTarget=0;const o=oe(r*1.25);this.santa.squash=o,this.santa.bagSquash=oe(r*1.35),this.santa.setPose({rimSit:1-r,tuck:r})}}makeInputHandler(){return{onDown:(t,e)=>{ve.unlock(),this.touching=!0,this.dragAccum=0,this.dragXAccum=0,this.scrubRate=0,this.lastDragT=performance.now(),this.idleT=0},onDrag:(t,e,n,s)=>{if(this.idleT=0,this.phase==="peek")this.dragAccum+=e,this.dragAccum>.018&&this.startEntry();else if(this.phase==="entry")this.entryE=oe(this.entryE+Math.max(0,e)*2.4);else if(this.phase==="descend"||this.phase==="free"){const r=performance.now(),o=sr((r-this.lastDragT)/1e3,.004,.1);this.lastDragT=r,this.scrubRate=Pt(this.scrubRate,e/o,.45),this.dragXAccum+=t,e<-.008?(this.reaction="reverse-climb",this.reverseLatched||(this.runStats.reverses++,this.reverseLatched=!0)):e>.008&&(this.reverseLatched=!1,this.reaction=Math.abs(e/o)>1.1?"fast-swish":"slow-roll"),t<-.008&&this.reaction!=="wall-left"?(this.reaction="wall-left",this.runStats.left++):t>.008&&this.reaction!=="wall-right"&&(this.reaction="wall-right",this.runStats.right++)}else this.phase==="nose"?(this.dragAccum+=e,this.dragAccum<-.05&&(this.pendingLaunch=1,this.triggerNose())):this.phase==="awaitUp"&&(this.dragAccum+=e,this.dragAccum<-.035&&this.noseArmed&&(this.tl?this.pendingLaunch=1:this.startAscend()))},onUp:(t,e,n)=>{this.touching=!1,t&&this.handleTap(e,n)}}}handleTap(t,e){const n=new lt(t*2-1,-(e*2-1));if(this.raycaster.setFromCamera(n,this.rig.camera),this.phase==="gifts"){const s=this.gifts.filter(o=>o.state==="idle"&&o.group.visible).map(o=>o.hit),r=this.raycaster.intersectObjects(s,!1);if(r.length>0){const o=this.gifts.find(a=>a.hit===r[0].object);this.throwGift(o)}}else this.phase==="nose"?this.raycaster.intersectObject(this.santa.noseHit,!1).length>0&&this.triggerNose():this.phase==="peek"&&this.raycaster.intersectObjects([this.santa.root],!0).length>0&&(this.santa.wink(),ve.hintChime())}throwGift(t){t.state="flying",t.flyT=0,t.from.copy(t.group.position),ve.giftPluck(this.giftOrder),this.reachTimer=.9,this.idleT=0}shotFor(t){const e=window.innerHeight>window.innerWidth;this.cx,this.cz;const n=this.pos.y,s=(o,a,c,l,h,u,d)=>({pos:Vt(o,a,c),look:Vt(l,h,u),fov:d}),r=new C;switch(this.phase){case"intro":{const o=this.sled.group.position;return e?s(6.2,6.3,8.8,Pt(1.2,1.6,this.sledFly),Pt(5.6,4.4,this.sledFly),o.z*.3,50):s(7,6,8.2,Pt(1.2,1.6,this.sledFly),Pt(5.4,4.3,this.sledFly),o.z*.3,44)}case"walk":return e?s(5,5.8,4.8,1.9,4.25,-.5,46):s(5.3,5.4,4.4,1.85,4.15,-.5,41);case"peek":return this.compareShot(e);case"entry":{const o=we(as(this.entryE,.3,.95,0,1)),a=this.compareShot(e),c=this.followShot(e,n);return{pos:a.pos.lerp(c.pos,o),look:a.look.lerp(c.look,o),fov:Pt(a.fov,c.fov,o)}}case"descend":case"free":return this.followShot(e,n);case"landing":return(this.tl?this.tl.time:0)<1.2?this.followShot(e,Math.max(n,.7)):e?s(.7,1.68,4,1.4,.9,-.75,51):s(.2,1.6,3.2,1.4,.85,-.75,44);case"gifts":return e?s(.8,1.58,4.15,1.4,.78,-.72,52):s(.35,1.42,3.25,1.45,.75,-.72,44);case"prepAscend":return e?s(.8,1.62,4.15,1.42,.86,-.75,52):s(.3,1.5,3.25,1.45,.82,-.75,44);case"nose":case"awaitUp":return this.santa.faceTarget.getWorldPosition(r),e?{pos:r.clone().add(Vt(.14,.18,1.1)),look:r.clone().add(Vt(0,.03,0)),fov:38}:{pos:r.clone().add(Vt(.22,.16,1)),look:r.clone().add(Vt(0,.03,0)),fov:35};case"ascend":return this.followShot(e,n);case"roofReturn":return e?s(4.9,5.6,5.4,1.9,4.3,-.4,46):s(5.2,5.3,4.9,1.9,4.15,-.4,41);case"menu":return e?s(5.6,6.4,8.4,.9,3.9,.1,48):s(6.4,5.9,7.6,.9,3.7,.1,43);case"freeEnter":{if((this.tl?this.tl.time:0)<1.1)return this.compareShot(e);const a=we(as(this.entryE,.3,.95,0,1)),c=this.compareShot(e),l=this.followShot(e,n);return{pos:c.pos.lerp(l.pos,a),look:c.look.lerp(l.look,a),fov:Pt(c.fov,l.fov,a)}}case"freeExit":return this.followShot(e,Math.min(n,this.yShaftTop))}}compareShot(t){return t?{pos:Vt(1.35,4.95,5.7),look:Vt(1.8,4.55,-1.62),fov:46}:{pos:Vt(.5,4.85,4.6),look:Vt(1.78,4.45,-1.62),fov:40}}followShot(t,e){const n=this.cx,s=this.cz,r=this.pos.x||n,o=sr(e,.85,this.yShaftTop+.4);return t?{pos:Vt(r+.05,o+1.25,s+3.2),look:Vt(r,o+.95,s),fov:46}:{pos:Vt(r+.95,o+1.2,s+2.9),look:Vt(r-.25,o+.92,s),fov:41}}update(t){if(t=Math.min(t,.09),this.time+=t,this.tl&&!this.tl.update(t)&&this.tl&&this.tl.time>=this.tl.duration,this.updatePhase(t),this.updateHints(t),this.phase==="gifts"||this.phase==="prepAscend"){const e=Vt(Y.stockingX,Y.stockingTopY+.08,Y.stockingZ+.02);for(const n of this.gifts){if(ng(n,t,e)){this.stocking.addGift(n.kind,this.giftOrder),this.lastGift=n.kind,this.giftOrder++,ve.stockingPop();const s=new We;this.giftOrder>=3&&s.call(.7,()=>this.stocking.showPeek(this.lastGift)),s.call(this.giftOrder>=3?1.9:1.15,()=>this.startPrepAscend()),this.tl=s}n.state==="idle"&&n.group.visible&&(n.group.position.y=n.home.y+Math.sin(this.time*2.2+n.bob)*.015,n.group.rotation.y+=t*.4)}this.reachTimer>0&&(this.reachTimer-=t,this.santa.setPose({kneel:.4,reach:Math.sin(oe(this.reachTimer/.9)*Math.PI)}))}this.updateFades(),this.yaw=us(this.yaw,this.yawTarget,7,t),this.santa.root.position.copy(this.pos),this.santa.root.rotation.y=this.yaw,this.santa.update(t,this.time),this.enforceSupport();{const e=this.world.descentLamp,n=this.phase==="descend"||this.phase==="free"||this.phase==="ascend"||this.phase==="freeExit"||(this.phase==="entry"||this.phase==="freeEnter")&&this.entryE>.4||this.phase==="landing"&&(this.tl?.time??9)<1,s=this.phase==="nose"||this.phase==="awaitUp";if(e.intensity=us(e.intensity,n?2:s?1.1:0,5,t),n)e.position.set(this.cx+.05,this.pos.y+1.35,this.cz+.5);else if(s){const r=new C;this.santa.faceTarget.getWorldPosition(r),e.position.copy(r).add(Vt(.35,.55,.9))}}this.world.update(t,this.rig.y),this.stocking.update(t),this.soot.update(t),this.snowPuff.update(t),this.rig.lambda=this.phase==="descend"||this.phase==="free"||this.phase==="ascend"?6.5:this.phase==="entry"||this.phase==="freeEnter"?3.2:this.phase==="nose"||this.phase==="awaitUp"?3.5:2,this.rig.update(this.shotFor(t),t),this.ui.setDebug(`phase: ${this.phase}
run: ${this.runId}
zone: ${this.zone}
reaction: ${this.reaction}
fps: ${this.fps.toFixed(0)}
p: ${this.p.toFixed(2)} v: ${this.vel.toFixed(2)}
${ni.summary()}`)}get debugState(){return{phase:this.phase,runId:this.runId,zone:this.zone,reaction:this.reaction,p:+this.p.toFixed(3),velocity:+this.vel.toFixed(3),seenRuns:[...this.nightState.seenRuns.chimney],supportGap:this.debugSupportGap===null?null:+this.debugSupportGap.toFixed(3)}}updatePhase(t){switch(this.phase){case"peek":{this.santa.peekPhase=1;break}case"entry":{this.touching?this.entryE=oe(this.entryE+t*.1):this.entryE>.55&&(this.entryE=oe(this.entryE+t*.75)),this.applyEntry(this.entryE),this.entryE>=1&&this.startDescend(!1);break}case"descend":case"free":{this.zone=vo(this.p),this.runStats.zones.add(this.zone),this.zone!==this.lastZone&&(this.lastZone=this.zone,this.zoneStillT=0);let e=this.runId==="first-passage"?.34:.3;this.runId==="soot-remembers"&&(e*=this.surface==="old-soot"?1.2:this.surface==="fresh-brick"?.84:1);let n=this.touching?sr(this.scrubRate*e,-1,1):0,s=0;if(this.runId==="old-chimney-breath"&&(this.zone==="bend"||this.zone==="soot-chamber"||this.zone==="damper")){s=.45+Math.sin(this.time*2.4+this.p*13)*.35;const p=this.zone==="damper";n-=(this.touching?.035:p?0:.065)*s,this.draftT-=t,this.draftT<=0&&(this.draftT=.3+(1-s)*.35,this.soot.emit(this.pos.clone().add(Vt(0,.2,0)),3,.16,1.05+s*.5,1.1)),ve.chimneyBreath(s,t)}this.scrubRate*=Math.exp(-t*6),this.vel=us(this.vel,n,this.touching?10:7,t),this.debugMinVel=Math.min(this.debugMinVel,this.vel);const r=this.p;this.p=this.p+this.vel*t;const o=sr(this.dragXAccum*6,-1,1);if(this.dragXAccum*=Math.exp(-t*4),this.lean=us(this.lean,this.touching?o:0,5,t),this.phase==="free")this.p>=.985&&(this.p=.985,this.vel>.12&&(ve.softLand(),this.soot.emit(this.pos.clone().add(Vt(0,.1,0)),8,.3,.9,.9)),this.vel=Math.min(0,-this.vel*.35)),this.p<=.015&&(this.p=.015,this.vel=Math.max(0,-this.vel*.35));else if(this.p<=.01&&(this.p=.01,this.vel=Math.max(this.vel,0)),r>.14&&(this.upScrub+=Math.max(0,r-this.p)),!this.retriedThisRun&&this.upScrub>.07&&(this.retriedThisRun=!0,ni.retry()),this.p>=1){this.p=1,this.pos.set(this.cx,this.yShaftBot,this.cz),this.startLanding();break}this.zone=vo(this.p);const a=gg(this.zone),c=oe((.42-a)/.19);this.santa.squash=.48+c*.52,this.santa.bagSquash=.42+c*.58;const l=Math.max(0,a-this.santa.flueHalfWidth-.008),h=_g(this.p);this.pos.set(this.cx+h+this.lean*l,Pt(this.yShaftTop,this.yShaftBot,this.p),this.cz),this.santa.lean=this.lean,this.santa.descentSpeed=this.vel;const u=oe(Math.abs(this.vel)/.85);Math.abs(this.vel)<.04?this.movedRecently=Math.max(0,this.movedRecently-t*.5):this.movedRecently=1,this.santa.wobble=Math.abs(this.vel)<.04?this.movedRecently:.15,Math.abs(this.vel)>.08?(this.stopLatched=!1,this.vel<-.05?this.reaction="reverse-climb":Math.abs(this.lean)>.42?this.reaction=this.lean<0?"wall-left":"wall-right":this.reaction=u>.62?"fast-swish":"slow-roll"):Math.abs(this.vel)<.035&&this.movedRecently>.22&&!this.stopLatched?(this.stopLatched=!0,this.runStats.stops++,this.reaction="pause-wobble"):s>.62&&Math.abs(this.vel)<.08&&this.reaction!=="pause-wobble"&&(this.reaction="updraft");const d=this.zone==="damper"?"damper":this.zone==="cleanout"?"cleanout":null;if(this.runId==="old-chimney-breath"&&d&&Math.abs(this.vel)<.045?(this.zoneStillT+=t,this.zoneStillT>.62&&!this.historySeen.has(d)&&(this.historySeen.add(d),this.historyReactionT=2.2,this.world.showHistory(d),ve.oldIronKnock(d==="damper"),d==="damper"?(this.runStats.damperStory=!0,this.reaction="damper-story"):(this.runStats.cleanoutStory=!0,this.reaction="cleanout-story"))):this.zoneStillT=0,this.lastPaintP<0||Math.abs(this.p-this.lastPaintP)>.022){this.lastPaintP=this.p;const p=this.pos.y+.85,g=oe((Y.chimneyTopY-p)/(Y.chimneyTopY-Y.shaftBottomY)),_=oe(.5+h*.9+this.lean*.3),m=this.world.paintSoot(g,_,u);this.surface=m,this.runId==="soot-remembers"&&(m==="old-soot"?this.runStats.oldSoot++:this.runStats.freshBrick++,m!==this.lastSurface&&ve.sootContact(m==="old-soot"),this.reaction=m==="old-soot"?"old-soot-glide":"fresh-brick-scrape",this.lastSurface=m)}u>.45&&Math.random()<u*.5&&this.soot.emit(this.pos.clone().add(Vt((Math.random()-.5)*.3,.9,.1)),2,.2,.6,.9),this.historyReactionT>0&&(this.historyReactionT-=t,this.reaction=this.zone==="cleanout"?"cleanout-story":"damper-story"),ve.setSlide(u,t,this.runId==="soot-remembers"?this.surface:"normal");break}case"nose":{if(this.demoT-=t,this.demoT<=0){this.demoT=5.5;const e=new We;e.add(0,1.5,n=>{const s=Math.sin(oe(n)*Math.PI);this.santa.setPose({nose:s*.9,squat:.55,carry:.6,faceCam:1})}),this.tl=e}break}}this.santa.descentSpeed=this.phase==="descend"||this.phase==="free"?this.vel:0,this.phase!=="descend"&&this.phase!=="free"&&(this.santa.wobble=0,this.santa.lean*=Math.exp(-t*6),ve.setSlide(0,t))}supportPlaneY(){return this.phase==="landing"||this.phase==="gifts"||this.phase==="prepAscend"||this.phase==="nose"||this.phase==="awaitUp"||this.phase==="ascend"&&(this.tl?.time??99)<=.3?this.pos.z<=Y.fireboxFrontZ+.005?Y.fireboxFloorTopY:this.pos.z<=Y.fireboxFrontZ+.7?Y.hearthTopY:Y.roomFloorTopY:null}enforceSupport(){const t=this.supportPlaneY();if(t===null||!this.santa.root.visible){this.debugSupportGap=null;return}const e=this.santa.visibleBounds(this.supportBounds);if(e.isEmpty()){this.debugSupportGap=null;return}const n=t-e.min.y;!(this.phase==="landing"&&(this.tl?.time??0)<.5)||n>0?(this.pos.y+=n,this.santa.root.position.y+=n,this.santa.root.updateWorldMatrix(!0,!0),this.debugSupportGap=0):this.debugSupportGap=e.min.y-t}updateFades(){switch(this.phase){case"intro":case"walk":case"peek":case"roofReturn":case"menu":this.world.setFrontFade(1),this.world.setHouseFade(1);break;case"entry":case"freeEnter":this.world.setFrontFade(this.entryE>.3?0:1),this.world.setHouseFade(this.entryE>.5?0:1);break;case"descend":case"free":case"ascend":case"freeExit":this.world.setFrontFade(0),this.world.setHouseFade(0);break;case"landing":this.world.setFrontFade(this.tl&&this.tl.time>2.6?1:0),this.world.setHouseFade(0);break;case"gifts":case"prepAscend":this.world.setFrontFade(1),this.world.setHouseFade(0);break;case"nose":case"awaitUp":this.world.setFrontFade(0),this.world.setHouseFade(0);break}}updateHints(t){if((this.phase==="peek"||this.phase==="gifts"||this.phase==="nose"||this.phase==="awaitUp")&&(this.idleT+=t,this.idleT>this.hintCooldown))if(this.idleT=0,this.hintCooldown=7,ni.hint(),ve.hintChime(),this.phase==="peek")this.world.showHintMotes();else if(this.phase==="gifts"){for(const s of this.gifts)s.state==="idle"&&(s.bob+=Math.PI);const n=new We;n.add(0,.8,s=>{for(const r of this.gifts)r.state==="idle"&&r.group.visible&&(r.group.position.y=r.home.y+Math.sin(oe(s)*Math.PI)*.12)}),this.tl=this.tl??n}else this.phase==="nose"?this.demoT=.01:this.phase==="awaitUp"&&this.soot.emit(this.pos.clone().add(Vt(0,1.4,0)),6,.2,1.4,1.2)}}class xg{constructor(t){this.handler=null,this.activeId=null,this.startX=0,this.startY=0,this.lastX=0,this.lastY=0,this.startT=0,this.moved=0,this.down=e=>{if(this.activeId===null){this.activeId=e.pointerId;try{this.el.setPointerCapture(e.pointerId)}catch{}this.startX=this.lastX=e.clientX,this.startY=this.lastY=e.clientY,this.startT=performance.now(),this.moved=0,this.handler?.onDown(e.clientX/window.innerWidth,e.clientY/window.innerHeight),e.preventDefault()}},this.move=e=>{if(e.pointerId!==this.activeId)return;const n=this.norm(),s=(e.clientX-this.lastX)/n,r=(e.clientY-this.lastY)/n;this.lastX=e.clientX,this.lastY=e.clientY,this.moved+=Math.abs(s)+Math.abs(r),this.handler?.onDrag(s,r,e.clientX/window.innerWidth,e.clientY/window.innerHeight),e.preventDefault()},this.up=e=>{if(e.pointerId!==this.activeId)return;this.activeId=null;const n=this.moved<.05;this.handler?.onUp(n,e.clientX/window.innerWidth,e.clientY/window.innerHeight),e.preventDefault()},this.cancel=e=>{e.pointerId===this.activeId&&(this.activeId=null,this.handler?.onUp(!1,this.lastX/window.innerWidth,this.lastY/window.innerHeight))},this.el=t,t.addEventListener("pointerdown",this.down,{passive:!1}),t.addEventListener("pointermove",this.move,{passive:!1}),t.addEventListener("pointerup",this.up,{passive:!1}),t.addEventListener("pointercancel",this.cancel,{passive:!1}),t.addEventListener("touchstart",e=>e.preventDefault(),{passive:!1})}norm(){return Math.min(window.innerWidth,window.innerHeight)}get touching(){return this.activeId!==null}}const Mg=document.getElementById("app"),Ke=new n0({antialias:!0,powerPreference:"high-performance"});Ke.outputColorSpace=Ne;Ke.toneMapping=sl;Ke.toneMappingExposure=1.05;Ke.shadowMap.enabled=!0;Ke.shadowMap.type=nl;Mg.appendChild(Ke.domElement);let yg=Math.min(window.devicePixelRatio||1,2),ds=yg;function Rr(){const i=window.innerWidth,t=window.innerHeight;Ke.setPixelRatio(ds),Ke.setSize(i,t)}Rr();const Sg=new xg(Ke.domElement),qe=new vg(20251224,Sg,window.innerWidth/window.innerHeight);window.addEventListener("resize",()=>{Rr(),qe.rig.setAspect(window.innerWidth/window.innerHeight)});window.addEventListener("orientationchange",()=>{setTimeout(()=>{Rr(),qe.rig.setAspect(window.innerWidth/window.innerHeight)},120)});let xo=0,Mo=performance.now(),or=0;const wg=new k0;function Ql(){requestAnimationFrame(Ql);const i=wg.getDelta();qe.update(i),Ke.render(qe.scene,qe.rig.camera),xo++;const t=performance.now();if(t-Mo>2e3){const e=xo*1e3/(t-Mo);qe.fps=e,xo=0,Mo=t,e<26&&ds>1?(or++,or>=2&&(ds=Math.max(1,ds-.25),Rr(),or=0,ds<=1.25&&Ke.shadowMap.enabled&&(Ke.shadowMap.enabled=!1,qe.scene.traverse(n=>{n instanceof z&&(n.castShadow=!1)})))):e>40&&(or=0)}}Ql();window.__santaMetrics=()=>ni.summary();window.__santaGame=qe;window.__santaDebug=()=>qe.debugState;const yo=new C;window.__screenOf=(i,t=0)=>{let e=null;return i==="gift"?e=qe.gifts[t]?.hit??null:i==="nose"?e=qe.santa.noseHit:i==="santa"&&(e=qe.santa.head),e?(e.updateWorldMatrix(!0,!1),yo.setFromMatrixPosition(e.matrixWorld).project(qe.rig.camera),{x:(yo.x*.5+.5)*window.innerWidth,y:(-yo.y*.5+.5)*window.innerHeight}):null};
