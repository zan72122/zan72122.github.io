var Hl=Object.defineProperty;var Vl=(i,t,e)=>t in i?Hl(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var T=(i,t,e)=>Vl(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ea="169",Wl=0,La=1,Xl=2,Xc=1,qc=2,xn=3,wn=0,Le=1,Pe=2,Fn=0,ai=1,Ia=2,Da=3,oo=4,ql=5,ei=100,Yl=101,Zl=102,Kl=103,$l=104,Jl=200,jl=201,Ql=202,th=203,ao=204,co=205,eh=206,nh=207,ih=208,sh=209,rh=210,oh=211,ah=212,ch=213,lh=214,lo=0,ho=1,uo=2,Ui=3,fo=4,po=5,mo=6,go=7,Yc=0,hh=1,uh=2,On=0,dh=1,fh=2,ph=3,Zc=4,mh=5,gh=6,vh=7,Kc=300,Ni=301,Fi=302,vo=303,_o=304,sr=306,xo=1e3,Mn=1001,Mo=1002,Oe=1003,_h=1004,ds=1005,We=1006,fr=1007,ii=1008,ln=1009,$c=1010,Jc=1011,os=1012,na=1013,ci=1014,an=1015,as=1016,ia=1017,sa=1018,Oi=1020,jc=35902,Qc=1021,tl=1022,sn=1023,el=1024,nl=1025,Li=1026,zi=1027,rr=1028,ra=1029,il=1030,oa=1031,aa=1033,Bs=33776,ks=33777,Gs=33778,Hs=33779,yo=35840,So=35841,wo=35842,bo=35843,Eo=36196,To=37492,Ao=37496,Co=37808,Ro=37809,Po=37810,Lo=37811,Io=37812,Do=37813,Uo=37814,No=37815,Fo=37816,Oo=37817,zo=37818,Bo=37819,ko=37820,Go=37821,Vs=36492,Ho=36494,Vo=36495,sl=36283,Wo=36284,Xo=36285,qo=36286,xh=3200,Mh=3201,rl=0,yh=1,Dn="",en="srgb",kn="srgb-linear",ca="display-p3",or="display-p3-linear",Ks="linear",ae="srgb",$s="rec709",Js="p3",di=7680,Ua=519,Sh=512,wh=513,bh=514,ol=515,Eh=516,Th=517,Ah=518,Ch=519,Na=35044,Fa="300 es",yn=2e3,js=2001;class Vi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pr=Math.PI/180,Yo=180/Math.PI;function cs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ae[i&255]+Ae[i>>8&255]+Ae[i>>16&255]+Ae[i>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]).toLowerCase()}function ye(i,t,e){return Math.max(t,Math.min(e,i))}function Rh(i,t){return(i%t+t)%t}function mr(i,t,e){return(1-e)*i+e*t}function Yi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ne(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class tt{constructor(t=0,e=0){tt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,n,s,r,o,a,l,h){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,h)}set(t,e,n,s,r,o,a,l,h){const c=this.elements;return c[0]=t,c[1]=s,c[2]=a,c[3]=e,c[4]=r,c[5]=l,c[6]=n,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],c=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],y=s[1],x=s[4],w=s[7],L=s[2],C=s[5],E=s[8];return r[0]=o*v+a*y+l*L,r[3]=o*m+a*x+l*C,r[6]=o*p+a*w+l*E,r[1]=h*v+c*y+u*L,r[4]=h*m+c*x+u*C,r[7]=h*p+c*w+u*E,r[2]=d*v+f*y+g*L,r[5]=d*m+f*x+g*C,r[8]=d*p+f*w+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8];return e*o*c-e*a*h-n*r*c+n*a*l+s*r*h-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],u=c*o-a*h,d=a*l-c*r,f=h*r-o*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*h-c*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(c*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*l-h*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*o+h*a)+o+t,-s*h,s*l,-s*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(gr.makeScale(t,e)),this}rotate(t){return this.premultiply(gr.makeRotation(-t)),this}translate(t,e){return this.premultiply(gr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const gr=new Ft;function al(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ph(){const i=Qs("canvas");return i.style.display="block",i}const Oa={};function Ws(i){i in Oa||(Oa[i]=!0,console.warn(i))}function Lh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ih(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Dh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const za=new Ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ba=new Ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zi={[kn]:{transfer:Ks,primaries:$s,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[en]:{transfer:ae,primaries:$s,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[or]:{transfer:Ks,primaries:Js,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Ba),fromReference:i=>i.applyMatrix3(za)},[ca]:{transfer:ae,primaries:Js,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ba),fromReference:i=>i.applyMatrix3(za).convertLinearToSRGB()}},Uh=new Set([kn,or]),Qt={enabled:!0,_workingColorSpace:kn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Uh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Zi[t].toReference,s=Zi[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Zi[i].primaries},getTransfer:function(i){return i===Dn?Ks:Zi[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Zi[t].luminanceCoefficients)}};function Ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let fi;class Nh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fi===void 0&&(fi=Qs("canvas")),fi.width=t.width,fi.height=t.height;const n=fi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=fi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Qs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ii(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ii(e[n]/255)*255):e[n]=Ii(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Fh=0;class cl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=cs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(_r(s[o].image)):r.push(_r(s[o]))}else r=_r(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function _r(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Oh=0;class Ie extends Vi{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,n=Mn,s=Mn,r=We,o=ii,a=sn,l=ln,h=Ie.DEFAULT_ANISOTROPY,c=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=cs(),this.name="",this.source=new cl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xo:t.x=t.x-Math.floor(t.x);break;case Mn:t.x=t.x<0?0:1;break;case Mo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xo:t.y=t.y-Math.floor(t.y);break;case Mn:t.y=t.y<0?0:1;break;case Mo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=Kc;Ie.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,n=0,s=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,h=l[0],c=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(c-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(h+1)/2,w=(f+1)/2,L=(p+1)/2,C=(c+d)/4,E=(u+v)/4,P=(g+m)/4;return x>w&&x>L?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=C/n,r=E/n):w>L?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=C/s,r=P/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=E/r,s=P/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-c)*(d-c));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-v)/y,this.z=(d-c)/y,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zh extends Vi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ie(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new cl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends zh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ll extends Ie{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bh extends Ie{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],h=n[s+1],c=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==d||h!==f||c!==g){let m=1-a;const p=l*d+h*f+c*g+u*v,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const L=Math.sqrt(x),C=Math.atan2(L,p*y);m=Math.sin(m*C)/L,a=Math.sin(a*C)/L}const w=a*y;if(l=l*m+d*w,h=h*m+f*w,c=c*m+g*w,u=u*m+v*w,m===1-a){const L=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=L,h*=L,c*=L,u*=L}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],h=n[s+2],c=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+c*u+l*f-h*d,t[e+1]=l*g+c*d+h*u-a*f,t[e+2]=h*g+c*f+a*d-l*u,t[e+3]=c*g-a*u-l*d-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(n/2),c=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*c*u+h*f*g,this._y=h*f*u-d*c*g,this._z=h*c*g+d*f*u,this._w=h*c*u-d*f*g;break;case"YXZ":this._x=d*c*u+h*f*g,this._y=h*f*u-d*c*g,this._z=h*c*g-d*f*u,this._w=h*c*u+d*f*g;break;case"ZXY":this._x=d*c*u-h*f*g,this._y=h*f*u+d*c*g,this._z=h*c*g+d*f*u,this._w=h*c*u-d*f*g;break;case"ZYX":this._x=d*c*u-h*f*g,this._y=h*f*u+d*c*g,this._z=h*c*g-d*f*u,this._w=h*c*u+d*f*g;break;case"YZX":this._x=d*c*u+h*f*g,this._y=h*f*u+d*c*g,this._z=h*c*g-d*f*u,this._w=h*c*u-d*f*g;break;case"XZY":this._x=d*c*u-h*f*g,this._y=h*f*u-d*c*g,this._z=h*c*g+d*f*u,this._w=h*c*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],c=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-h)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(c-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+h)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-h)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+c)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,c=e._w;return this._x=n*c+o*a+s*h-r*l,this._y=s*c+o*l+r*a-n*h,this._z=r*c+o*h+n*l-s*a,this._w=o*c-n*a-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const h=Math.sqrt(l),c=Math.atan2(h,a),u=Math.sin((1-e)*c)/h,d=Math.sin(e*c)/h;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ka.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ka.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*s-a*n),c=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*h+o*u-a*c,this.y=n+l*c+a*h-r*u,this.z=s+l*u+r*c-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xr.copy(this).projectOnVector(t),this.sub(xr)}reflect(t){return this.sub(xr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xr=new R,ka=new hn;class hi{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,je):je.fromBufferAttribute(r,o),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fs.copy(n.boundingBox)),fs.applyMatrix4(t.matrixWorld),this.union(fs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ki),ps.subVectors(this.max,Ki),pi.subVectors(t.a,Ki),mi.subVectors(t.b,Ki),gi.subVectors(t.c,Ki),En.subVectors(mi,pi),Tn.subVectors(gi,mi),Wn.subVectors(pi,gi);let e=[0,-En.z,En.y,0,-Tn.z,Tn.y,0,-Wn.z,Wn.y,En.z,0,-En.x,Tn.z,0,-Tn.x,Wn.z,0,-Wn.x,-En.y,En.x,0,-Tn.y,Tn.x,0,-Wn.y,Wn.x,0];return!Mr(e,pi,mi,gi,ps)||(e=[1,0,0,0,1,0,0,0,1],!Mr(e,pi,mi,gi,ps))?!1:(ms.crossVectors(En,Tn),e=[ms.x,ms.y,ms.z],Mr(e,pi,mi,gi,ps))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const fn=[new R,new R,new R,new R,new R,new R,new R,new R],je=new R,fs=new hi,pi=new R,mi=new R,gi=new R,En=new R,Tn=new R,Wn=new R,Ki=new R,ps=new R,ms=new R,Xn=new R;function Mr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Xn.fromArray(i,r);const a=s.x*Math.abs(Xn.x)+s.y*Math.abs(Xn.y)+s.z*Math.abs(Xn.z),l=t.dot(Xn),h=e.dot(Xn),c=n.dot(Xn);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>a)return!1}return!0}const kh=new hi,$i=new R,yr=new R;class Gn{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):kh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$i.subVectors(t,this.center);const e=$i.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector($i,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($i.copy(t.center).add(yr)),this.expandByPoint($i.copy(t.center).sub(yr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new R,Sr=new R,gs=new R,An=new R,wr=new R,vs=new R,br=new R;class la{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pn.copy(this.origin).addScaledVector(this.direction,e),pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Sr.copy(t).add(e).multiplyScalar(.5),gs.copy(e).sub(t).normalize(),An.copy(this.origin).sub(Sr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(gs),a=An.dot(this.direction),l=-An.dot(gs),h=An.lengthSq(),c=Math.abs(1-o*o);let u,d,f,g;if(c>0)if(u=o*l-a,d=o*a-l,g=r*c,u>=0)if(d>=-g)if(d<=g){const v=1/c;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+h}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+h):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+h):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+h);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Sr).addScaledVector(gs,d),f}intersectSphere(t,e){pn.subVectors(t.center,this.origin);const n=pn.dot(this.direction),s=pn.dot(pn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,s=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,s=(t.min.x-d.x)*h),c>=0?(r=(t.min.y-d.y)*c,o=(t.max.y-d.y)*c):(r=(t.max.y-d.y)*c,o=(t.min.y-d.y)*c),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,pn)!==null}intersectTriangle(t,e,n,s,r){wr.subVectors(e,t),vs.subVectors(n,t),br.crossVectors(wr,vs);let o=this.direction.dot(br),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;An.subVectors(this.origin,t);const l=a*this.direction.dot(vs.crossVectors(An,vs));if(l<0)return null;const h=a*this.direction.dot(wr.cross(An));if(h<0||l+h>o)return null;const c=-a*An.dot(br);return c<0?null:this.at(c/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(t,e,n,s,r,o,a,l,h,c,u,d,f,g,v,m){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,h,c,u,d,f,g,v,m)}set(t,e,n,s,r,o,a,l,h,c,u,d,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=h,p[6]=c,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/vi.setFromMatrixColumn(t,0).length(),r=1/vi.setFromMatrixColumn(t,1).length(),o=1/vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),h=Math.sin(s),c=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*c,f=o*u,g=a*c,v=a*u;e[0]=l*c,e[4]=-l*u,e[8]=h,e[1]=f+g*h,e[5]=d-v*h,e[9]=-a*l,e[2]=v-d*h,e[6]=g+f*h,e[10]=o*l}else if(t.order==="YXZ"){const d=l*c,f=l*u,g=h*c,v=h*u;e[0]=d+v*a,e[4]=g*a-f,e[8]=o*h,e[1]=o*u,e[5]=o*c,e[9]=-a,e[2]=f*a-g,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*c,f=l*u,g=h*c,v=h*u;e[0]=d-v*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*c,e[9]=v-d*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*c,f=o*u,g=a*c,v=a*u;e[0]=l*c,e[4]=g*h-f,e[8]=d*h+v,e[1]=l*u,e[5]=v*h+d,e[9]=f*h-g,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*h,g=a*l,v=a*h;e[0]=l*c,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*c,e[9]=-a*c,e[2]=-h*c,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*l,f=o*h,g=a*l,v=a*h;e[0]=l*c,e[4]=-u,e[8]=h*c,e[1]=d*u+v,e[5]=o*c,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*c,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gh,t,Hh)}lookAt(t,e,n){const s=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),Cn.crossVectors(n,Ge),Cn.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),Cn.crossVectors(n,Ge)),Cn.normalize(),_s.crossVectors(Ge,Cn),s[0]=Cn.x,s[4]=_s.x,s[8]=Ge.x,s[1]=Cn.y,s[5]=_s.y,s[9]=Ge.y,s[2]=Cn.z,s[6]=_s.z,s[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],c=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],y=n[3],x=n[7],w=n[11],L=n[15],C=s[0],E=s[4],P=s[8],W=s[12],_=s[1],M=s[5],D=s[9],z=s[13],X=s[2],Y=s[6],O=s[10],G=s[14],V=s[3],rt=s[7],lt=s[11],vt=s[15];return r[0]=o*C+a*_+l*X+h*V,r[4]=o*E+a*M+l*Y+h*rt,r[8]=o*P+a*D+l*O+h*lt,r[12]=o*W+a*z+l*G+h*vt,r[1]=c*C+u*_+d*X+f*V,r[5]=c*E+u*M+d*Y+f*rt,r[9]=c*P+u*D+d*O+f*lt,r[13]=c*W+u*z+d*G+f*vt,r[2]=g*C+v*_+m*X+p*V,r[6]=g*E+v*M+m*Y+p*rt,r[10]=g*P+v*D+m*O+p*lt,r[14]=g*W+v*z+m*G+p*vt,r[3]=y*C+x*_+w*X+L*V,r[7]=y*E+x*M+w*Y+L*rt,r[11]=y*P+x*D+w*O+L*lt,r[15]=y*W+x*z+w*G+L*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],c=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*h*u-r*a*d+n*h*d+s*a*f-n*l*f)+v*(+e*l*f-e*h*d+r*o*d-s*o*f+s*h*c-r*l*c)+m*(+e*h*u-e*a*f-r*o*u+n*o*f+r*a*c-n*h*c)+p*(-s*a*c-e*l*u+e*a*d+s*o*u-n*o*d+n*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],y=u*m*h-v*d*h+v*l*f-a*m*f-u*l*p+a*d*p,x=g*d*h-c*m*h-g*l*f+o*m*f+c*l*p-o*d*p,w=c*v*h-g*u*h+g*a*f-o*v*f-c*a*p+o*u*p,L=g*u*l-c*v*l-g*a*d+o*v*d+c*a*m-o*u*m,C=e*y+n*x+s*w+r*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/C;return t[0]=y*E,t[1]=(v*d*r-u*m*r-v*s*f+n*m*f+u*s*p-n*d*p)*E,t[2]=(a*m*r-v*l*r+v*s*h-n*m*h-a*s*p+n*l*p)*E,t[3]=(u*l*r-a*d*r-u*s*h+n*d*h+a*s*f-n*l*f)*E,t[4]=x*E,t[5]=(c*m*r-g*d*r+g*s*f-e*m*f-c*s*p+e*d*p)*E,t[6]=(g*l*r-o*m*r-g*s*h+e*m*h+o*s*p-e*l*p)*E,t[7]=(o*d*r-c*l*r+c*s*h-e*d*h-o*s*f+e*l*f)*E,t[8]=w*E,t[9]=(g*u*r-c*v*r-g*n*f+e*v*f+c*n*p-e*u*p)*E,t[10]=(o*v*r-g*a*r+g*n*h-e*v*h-o*n*p+e*a*p)*E,t[11]=(c*a*r-o*u*r-c*n*h+e*u*h+o*n*f-e*a*f)*E,t[12]=L*E,t[13]=(c*v*s-g*u*s+g*n*d-e*v*d-c*n*m+e*u*m)*E,t[14]=(g*a*s-o*v*s-g*n*l+e*v*l+o*n*m-e*a*m)*E,t[15]=(o*u*s-c*a*s+c*n*l-e*u*l-o*n*d+e*a*d)*E,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,h=r*o,c=r*a;return this.set(h*o+n,h*a-s*l,h*l+s*a,0,h*a+s*l,c*a+n,c*l-s*o,0,h*l-s*a,c*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,c=o+o,u=a+a,d=r*h,f=r*c,g=r*u,v=o*c,m=o*u,p=a*u,y=l*h,x=l*c,w=l*u,L=n.x,C=n.y,E=n.z;return s[0]=(1-(v+p))*L,s[1]=(f+w)*L,s[2]=(g-x)*L,s[3]=0,s[4]=(f-w)*C,s[5]=(1-(d+p))*C,s[6]=(m+y)*C,s[7]=0,s[8]=(g+x)*E,s[9]=(m-y)*E,s[10]=(1-(d+v))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=vi.set(s[0],s[1],s[2]).length();const o=vi.set(s[4],s[5],s[6]).length(),a=vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Qe.copy(this);const h=1/r,c=1/o,u=1/a;return Qe.elements[0]*=h,Qe.elements[1]*=h,Qe.elements[2]*=h,Qe.elements[4]*=c,Qe.elements[5]*=c,Qe.elements[6]*=c,Qe.elements[8]*=u,Qe.elements[9]*=u,Qe.elements[10]*=u,e.setFromRotationMatrix(Qe),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=yn){const l=this.elements,h=2*r/(e-t),c=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===yn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===js)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=yn){const l=this.elements,h=1/(e-t),c=1/(n-s),u=1/(o-r),d=(e+t)*h,f=(n+s)*c;let g,v;if(a===yn)g=(o+r)*u,v=-2*u;else if(a===js)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const vi=new R,Qe=new Ht,Gh=new R(0,0,0),Hh=new R(1,1,1),Cn=new R,_s=new R,Ge=new R,Ga=new Ht,Ha=new hn;class $e{constructor(t=0,e=0,n=0,s=$e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],c=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ga.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ga,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ha.setFromEuler(this),this.setFromQuaternion(Ha,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$e.DEFAULT_ORDER="XYZ";class ha{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Vh=0;const Va=new R,_i=new hn,mn=new Ht,xs=new R,Ji=new R,Wh=new R,Xh=new hn,Wa=new R(1,0,0),Xa=new R(0,1,0),qa=new R(0,0,1),Ya={type:"added"},qh={type:"removed"},xi={type:"childadded",child:null},Er={type:"childremoved",child:null};class Se extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new R,e=new $e,n=new hn,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ht},normalMatrix:{value:new Ft}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ha,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.multiply(_i),this}rotateOnWorldAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.premultiply(_i),this}rotateX(t){return this.rotateOnAxis(Wa,t)}rotateY(t){return this.rotateOnAxis(Xa,t)}rotateZ(t){return this.rotateOnAxis(qa,t)}translateOnAxis(t,e){return Va.copy(t).applyQuaternion(this.quaternion),this.position.add(Va.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wa,t)}translateY(t){return this.translateOnAxis(Xa,t)}translateZ(t){return this.translateOnAxis(qa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xs.copy(t):xs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Ji,xs,this.up):mn.lookAt(xs,Ji,this.up),this.quaternion.setFromRotationMatrix(mn),s&&(mn.extractRotation(s.matrixWorld),_i.setFromRotationMatrix(mn),this.quaternion.premultiply(_i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ya),xi.child=t,this.dispatchEvent(xi),xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qh),Er.child=t,this.dispatchEvent(Er),Er.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ya),xi.child=t,this.dispatchEvent(xi),xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,t,Wh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,Xh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const u=l[h];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),h=o(t.textures),c=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const h in a){const c=a[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Se.DEFAULT_UP=new R(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new R,gn=new R,Tr=new R,vn=new R,Mi=new R,yi=new R,Za=new R,Ar=new R,Cr=new R,Rr=new R,Pr=new he,Lr=new he,Ir=new he;class nn{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),tn.subVectors(t,e),s.cross(tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){tn.subVectors(s,e),gn.subVectors(n,e),Tr.subVectors(t,e);const o=tn.dot(tn),a=tn.dot(gn),l=tn.dot(Tr),h=gn.dot(gn),c=gn.dot(Tr),u=o*h-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(h*l-a*c)*d,g=(o*c-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vn.x),l.addScaledVector(o,vn.y),l.addScaledVector(a,vn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Pr.setScalar(0),Lr.setScalar(0),Ir.setScalar(0),Pr.fromBufferAttribute(t,e),Lr.fromBufferAttribute(t,n),Ir.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Pr,r.x),o.addScaledVector(Lr,r.y),o.addScaledVector(Ir,r.z),o}static isFrontFacing(t,e,n,s){return tn.subVectors(n,e),gn.subVectors(t,e),tn.cross(gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),tn.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return nn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Mi.subVectors(s,n),yi.subVectors(r,n),Ar.subVectors(t,n);const l=Mi.dot(Ar),h=yi.dot(Ar);if(l<=0&&h<=0)return e.copy(n);Cr.subVectors(t,s);const c=Mi.dot(Cr),u=yi.dot(Cr);if(c>=0&&u<=c)return e.copy(s);const d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(n).addScaledVector(Mi,o);Rr.subVectors(t,r);const f=Mi.dot(Rr),g=yi.dot(Rr);if(g>=0&&f<=g)return e.copy(r);const v=f*h-l*g;if(v<=0&&h>=0&&g<=0)return a=h/(h-g),e.copy(n).addScaledVector(yi,a);const m=c*g-f*u;if(m<=0&&u-c>=0&&f-g>=0)return Za.subVectors(r,s),a=(u-c)/(u-c+(f-g)),e.copy(s).addScaledVector(Za,a);const p=1/(m+v+d);return o=v*p,a=d*p,e.copy(n).addScaledVector(Mi,o).addScaledVector(yi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const hl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function Dr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=Rh(t,1),e=ye(e,0,1),n=ye(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Dr(o,r,t+1/3),this.g=Dr(o,r,t),this.b=Dr(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=en){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=en){const n=hl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ii(t.r),this.g=Ii(t.g),this.b=Ii(t.b),this}copyLinearToSRGB(t){return this.r=vr(t.r),this.g=vr(t.g),this.b=vr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return Qt.fromWorkingColorSpace(Ce.copy(this),t),Math.round(ye(Ce.r*255,0,255))*65536+Math.round(ye(Ce.g*255,0,255))*256+Math.round(ye(Ce.b*255,0,255))}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Ce.copy(this),e);const n=Ce.r,s=Ce.g,r=Ce.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,h;const c=(a+o)/2;if(a===o)l=0,h=0;else{const u=o-a;switch(h=c<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=en){Qt.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,n=Ce.g,s=Ce.b;return t!==en?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Rn),this.setHSL(Rn.h+t,Rn.s+e,Rn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Rn),t.getHSL(Ms);const n=mr(Rn.h,Ms.h,e),s=mr(Rn.s,Ms.s,e),r=mr(Rn.l,Ms.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new gt;gt.NAMES=hl;let Yh=0;class Wi extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=cs(),this.name="",this.type="Material",this.blending=ai,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ao,this.blendDst=co,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ua,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ai&&(n.blending=this.blending),this.side!==wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ao&&(n.blendSrc=this.blendSrc),this.blendDst!==co&&(n.blendDst=this.blendDst),this.blendEquation!==ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ua&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ul extends Wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.combine=Yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new R,ys=new tt;class pe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Na,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ys.fromBufferAttribute(this,e),ys.applyMatrix3(t),this.setXY(e,ys.x,ys.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Yi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array),r=Ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Na&&(t.usage=this.usage),t}}class dl extends pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class fl extends pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ue extends pe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Zh=0;const Ye=new Ht,Ur=new Se,Si=new R,He=new hi,ji=new hi,Me=new R;class Te extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(al(t)?fl:dl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,n){return Ye.makeTranslation(t,e,n),this.applyMatrix4(Ye),this}scale(t,e,n){return Ye.makeScale(t,e,n),this.applyMatrix4(Ye),this}lookAt(t){return Ur.lookAt(t),Ur.updateMatrix(),this.applyMatrix4(Ur.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ue(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];He.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ji.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors(He.min,ji.min),He.expandByPoint(Me),Me.addVectors(He.max,ji.max),He.expandByPoint(Me)):(He.expandByPoint(ji.min),He.expandByPoint(ji.max))}He.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Me));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let h=0,c=a.count;h<c;h++)Me.fromBufferAttribute(a,h),l&&(Si.fromBufferAttribute(t,h),Me.add(Si)),s=Math.max(s,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new R,l[P]=new R;const h=new R,c=new R,u=new R,d=new tt,f=new tt,g=new tt,v=new R,m=new R;function p(P,W,_){h.fromBufferAttribute(n,P),c.fromBufferAttribute(n,W),u.fromBufferAttribute(n,_),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,W),g.fromBufferAttribute(r,_),c.sub(h),u.sub(h),f.sub(d),g.sub(d);const M=1/(f.x*g.y-g.x*f.y);isFinite(M)&&(v.copy(c).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(M),m.copy(u).multiplyScalar(f.x).addScaledVector(c,-g.x).multiplyScalar(M),a[P].add(v),a[W].add(v),a[_].add(v),l[P].add(m),l[W].add(m),l[_].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,W=y.length;P<W;++P){const _=y[P],M=_.start,D=_.count;for(let z=M,X=M+D;z<X;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const x=new R,w=new R,L=new R,C=new R;function E(P){L.fromBufferAttribute(s,P),C.copy(L);const W=a[P];x.copy(W),x.sub(L.multiplyScalar(L.dot(W))).normalize(),w.crossVectors(C,W);const M=w.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,M)}for(let P=0,W=y.length;P<W;++P){const _=y[P],M=_.start,D=_.count;for(let z=M,X=M+D;z<X;z+=3)E(t.getX(z+0)),E(t.getX(z+1)),E(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new R,r=new R,o=new R,a=new R,l=new R,h=new R,c=new R,u=new R;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),c.subVectors(o,r),u.subVectors(s,r),c.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),h.fromBufferAttribute(n,m),a.add(c),l.add(c),h.add(c),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),c.subVectors(o,r),u.subVectors(s,r),c.cross(u),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(a,l){const h=a.array,c=a.itemSize,u=a.normalized,d=new h.constructor(l.length*c);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*c;for(let p=0;p<c;p++)d[g++]=h[f++]}return new pe(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Te,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],h=t(l,n);e.setAttribute(a,h)}const r=this.morphAttributes;for(const a in r){const l=[],h=r[a];for(let c=0,u=h.length;c<u;c++){const d=h[c],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const h=n[l];t.data.attributes[l]=h.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){const f=h[u];c.push(f.toJSON(t.data))}c.length>0&&(s[l]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const h in s){const c=s[h];this.setAttribute(h,c.clone(e))}const r=t.morphAttributes;for(const h in r){const c=[],u=r[h];for(let d=0,f=u.length;d<f;d++)c.push(u[d].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let h=0,c=o.length;h<c;h++){const u=o[h];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ka=new Ht,qn=new la,Ss=new Gn,$a=new R,ws=new R,bs=new R,Es=new R,Nr=new R,Ts=new R,Ja=new R,As=new R;class it extends Se{constructor(t=new Te,e=new ul){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Ts.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const c=a[l],u=r[l];c!==0&&(Nr.fromBufferAttribute(u,t),o?Ts.addScaledVector(Nr,c):Ts.addScaledVector(Nr.sub(e),c))}e.add(Ts)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(r),qn.copy(t.ray).recast(t.near),!(Ss.containsPoint(qn.origin)===!1&&(qn.intersectSphere(Ss,$a)===null||qn.origin.distanceToSquared($a)>(t.far-t.near)**2))&&(Ka.copy(r).invert(),qn.copy(t.ray).applyMatrix4(Ka),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let w=y,L=x;w<L;w+=3){const C=a.getX(w),E=a.getX(w+1),P=a.getX(w+2);s=Cs(this,p,t,n,h,c,u,C,E,P),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=a.getX(m),x=a.getX(m+1),w=a.getX(m+2);s=Cs(this,o,t,n,h,c,u,y,x,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let w=y,L=x;w<L;w+=3){const C=w,E=w+1,P=w+2;s=Cs(this,p,t,n,h,c,u,C,E,P),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=m,x=m+1,w=m+2;s=Cs(this,o,t,n,h,c,u,y,x,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Kh(i,t,e,n,s,r,o,a){let l;if(t.side===Le?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===wn,a),l===null)return null;As.copy(a),As.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(As);return h<e.near||h>e.far?null:{distance:h,point:As.clone(),object:i}}function Cs(i,t,e,n,s,r,o,a,l,h){i.getVertexPosition(a,ws),i.getVertexPosition(l,bs),i.getVertexPosition(h,Es);const c=Kh(i,t,e,n,ws,bs,Es,Ja);if(c){const u=new R;nn.getBarycoord(Ja,ws,bs,Es,u),s&&(c.uv=nn.getInterpolatedAttribute(s,a,l,h,u,new tt)),r&&(c.uv1=nn.getInterpolatedAttribute(r,a,l,h,u,new tt)),o&&(c.normal=nn.getInterpolatedAttribute(o,a,l,h,u,new R),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:h,normal:new R,materialIndex:0};nn.getNormal(ws,bs,Es,d.normal),c.face=d,c.barycoord=u}return c}class Gt extends Te{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],h=[],c=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ue(h,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(u,2));function g(v,m,p,y,x,w,L,C,E,P,W){const _=w/E,M=L/P,D=w/2,z=L/2,X=C/2,Y=E+1,O=P+1;let G=0,V=0;const rt=new R;for(let lt=0;lt<O;lt++){const vt=lt*M-z;for(let Zt=0;Zt<Y;Zt++){const te=Zt*_-D;rt[v]=te*y,rt[m]=vt*x,rt[p]=X,h.push(rt.x,rt.y,rt.z),rt[v]=0,rt[m]=0,rt[p]=C>0?1:-1,c.push(rt.x,rt.y,rt.z),u.push(Zt/E),u.push(1-lt/P),G+=1}}for(let lt=0;lt<P;lt++)for(let vt=0;vt<E;vt++){const Zt=d+vt+Y*lt,te=d+vt+Y*(lt+1),Z=d+(vt+1)+Y*(lt+1),Q=d+(vt+1)+Y*lt;l.push(Zt,te,Q),l.push(te,Z,Q),V+=6}a.addGroup(f,V,W),f+=V,d+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Bi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Re(i){const t={};for(let e=0;e<i.length;e++){const n=Bi(i[e]);for(const s in n)t[s]=n[s]}return t}function $h(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function pl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const Jh={clone:Bi,merge:Re};var jh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xe extends Wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jh,this.fragmentShader=Qh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bi(t.uniforms),this.uniformsGroups=$h(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ml extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pn=new R,ja=new tt,Qa=new tt;class Ke extends ml{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Yo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yo*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z)}getViewSize(t,e){return this.getViewBounds(t,ja,Qa),e.subVectors(Qa,ja)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(pr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/h,s*=o.width/l,n*=o.height/h}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const wi=-90,bi=1;class tu extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ke(wi,bi,t,e);s.layers=this.layers,this.add(s);const r=new Ke(wi,bi,t,e);r.layers=this.layers,this.add(r);const o=new Ke(wi,bi,t,e);o.layers=this.layers,this.add(o);const a=new Ke(wi,bi,t,e);a.layers=this.layers,this.add(a);const l=new Ke(wi,bi,t,e);l.layers=this.layers,this.add(l);const h=new Ke(wi,bi,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const h of e)this.remove(h);if(t===yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,h,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,c),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class gl extends Ie{constructor(t,e,n,s,r,o,a,l,h,c){t=t!==void 0?t:[],e=e!==void 0?e:Ni,super(t,e,n,s,r,o,a,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class eu extends li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new gl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:We}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gt(5,5,5),r=new Xe({name:"CubemapFromEquirect",uniforms:Bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:Fn});r.uniforms.tEquirect.value=e;const o=new it(s,r),a=e.minFilter;return e.minFilter===ii&&(e.minFilter=We),new tu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Fr=new R,nu=new R,iu=new Ft;class jn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Fr.subVectors(n,e).cross(nu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Fr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||iu.getNormalMatrix(t),s=this.coplanarPoint(Fr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yn=new Gn,Rs=new R;class ua{constructor(t=new jn,e=new jn,n=new jn,s=new jn,r=new jn,o=new jn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],h=s[4],c=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],y=s[13],x=s[14],w=s[15];if(n[0].setComponents(l-r,d-h,m-f,w-p).normalize(),n[1].setComponents(l+r,d+h,m+f,w+p).normalize(),n[2].setComponents(l+o,d+c,m+g,w+y).normalize(),n[3].setComponents(l-o,d-c,m-g,w-y).normalize(),n[4].setComponents(l-a,d-u,m-v,w-x).normalize(),e===yn)n[5].setComponents(l+a,d+u,m+v,w+x).normalize();else if(e===js)n[5].setComponents(a,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(t){return Yn.center.set(0,0,0),Yn.radius=.7071067811865476,Yn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Rs.x=s.normal.x>0?t.max.x:t.min.x,Rs.y=s.normal.y>0?t.max.y:t.min.y,Rs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vl(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function su(i){const t=new WeakMap;function e(a,l){const h=a.array,c=a.usage,u=h.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,h,c),a.onUploadCallback();let f;if(h instanceof Float32Array)f=i.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=i.SHORT;else if(h instanceof Uint32Array)f=i.UNSIGNED_INT;else if(h instanceof Int32Array)f=i.INT;else if(h instanceof Int8Array)f=i.BYTE;else if(h instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,h){const c=l.array,u=l.updateRanges;if(i.bindBuffer(h,a),u.length===0)i.bufferSubData(h,0,c);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];i.bufferSubData(h,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}class Hn extends Te{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),h=a+1,c=l+1,u=t/a,d=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<c;p++){const y=p*d-o;for(let x=0;x<h;x++){const w=x*u-r;g.push(w,-y,0),v.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const x=y+h*p,w=y+h*(p+1),L=y+1+h*(p+1),C=y+1+h*p;f.push(x,w,C),f.push(w,L,C)}this.setIndex(f),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(v,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hn(t.width,t.height,t.widthSegments,t.heightSegments)}}var ru=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ou=`#ifdef USE_ALPHAHASH
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
#endif`,au=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uu=`#ifdef USE_AOMAP
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
#endif`,du=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fu=`#ifdef USE_BATCHING
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
#endif`,pu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_u=`#ifdef USE_IRIDESCENCE
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
#endif`,xu=`#ifdef USE_BUMPMAP
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
#endif`,Mu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Su=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Eu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Au=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cu=`#define PI 3.141592653589793
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
} // validated`,Ru=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pu=`vec3 transformedNormal = objectNormal;
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
#endif`,Lu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Iu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Du=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fu=`
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
}`,Ou=`#ifdef USE_ENVMAP
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
#endif`,zu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bu=`#ifdef USE_ENVMAP
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
#endif`,ku=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gu=`#ifdef USE_ENVMAP
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
#endif`,Hu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qu=`#ifdef USE_GRADIENTMAP
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
}`,Yu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ku=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$u=`uniform bool receiveShadow;
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
#endif`,Ju=`#ifdef USE_ENVMAP
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
#endif`,ju=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,td=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nd=`PhysicalMaterial material;
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
#endif`,id=`struct PhysicalMaterial {
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
}`,sd=`
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
#endif`,rd=`#if defined( RE_IndirectDiffuse )
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
#endif`,od=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ad=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ld=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ud=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pd=`#if defined( USE_POINTS_UV )
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
#endif`,md=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_d=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Md=`#ifdef USE_MORPHTARGETS
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
#endif`,yd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Td=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ad=`#ifdef USE_NORMALMAP
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
#endif`,Cd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ld=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Id=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ud=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Od=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vd=`float getShadowMask() {
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
}`,Wd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xd=`#ifdef USE_SKINNING
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
#endif`,qd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yd=`#ifdef USE_SKINNING
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
#endif`,Zd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$d=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jd=`#ifdef USE_TRANSMISSION
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
#endif`,Qd=`#ifdef USE_TRANSMISSION
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
#endif`,tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,of=`uniform sampler2D t2D;
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
}`,af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uf=`#include <common>
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
}`,df=`#if DEPTH_PACKING == 3200
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
}`,ff=`#define DISTANCE
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
}`,pf=`#define DISTANCE
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
}`,mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vf=`uniform float scale;
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
}`,_f=`uniform vec3 diffuse;
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
}`,xf=`#include <common>
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
}`,Mf=`uniform vec3 diffuse;
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
}`,yf=`#define LAMBERT
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
}`,Sf=`#define LAMBERT
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
}`,wf=`#define MATCAP
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
}`,bf=`#define MATCAP
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
}`,Ef=`#define NORMAL
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
}`,Tf=`#define NORMAL
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
}`,Af=`#define PHONG
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
}`,Cf=`#define PHONG
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
}`,Rf=`#define STANDARD
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
}`,Pf=`#define STANDARD
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
}`,Lf=`#define TOON
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
}`,If=`#define TOON
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
}`,Df=`uniform float size;
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
}`,Uf=`uniform vec3 diffuse;
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
}`,Nf=`#include <common>
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
}`,Ff=`uniform vec3 color;
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
}`,Of=`uniform float rotation;
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
}`,zf=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:ru,alphahash_pars_fragment:ou,alphamap_fragment:au,alphamap_pars_fragment:cu,alphatest_fragment:lu,alphatest_pars_fragment:hu,aomap_fragment:uu,aomap_pars_fragment:du,batching_pars_vertex:fu,batching_vertex:pu,begin_vertex:mu,beginnormal_vertex:gu,bsdfs:vu,iridescence_fragment:_u,bumpmap_pars_fragment:xu,clipping_planes_fragment:Mu,clipping_planes_pars_fragment:yu,clipping_planes_pars_vertex:Su,clipping_planes_vertex:wu,color_fragment:bu,color_pars_fragment:Eu,color_pars_vertex:Tu,color_vertex:Au,common:Cu,cube_uv_reflection_fragment:Ru,defaultnormal_vertex:Pu,displacementmap_pars_vertex:Lu,displacementmap_vertex:Iu,emissivemap_fragment:Du,emissivemap_pars_fragment:Uu,colorspace_fragment:Nu,colorspace_pars_fragment:Fu,envmap_fragment:Ou,envmap_common_pars_fragment:zu,envmap_pars_fragment:Bu,envmap_pars_vertex:ku,envmap_physical_pars_fragment:Ju,envmap_vertex:Gu,fog_vertex:Hu,fog_pars_vertex:Vu,fog_fragment:Wu,fog_pars_fragment:Xu,gradientmap_pars_fragment:qu,lightmap_pars_fragment:Yu,lights_lambert_fragment:Zu,lights_lambert_pars_fragment:Ku,lights_pars_begin:$u,lights_toon_fragment:ju,lights_toon_pars_fragment:Qu,lights_phong_fragment:td,lights_phong_pars_fragment:ed,lights_physical_fragment:nd,lights_physical_pars_fragment:id,lights_fragment_begin:sd,lights_fragment_maps:rd,lights_fragment_end:od,logdepthbuf_fragment:ad,logdepthbuf_pars_fragment:cd,logdepthbuf_pars_vertex:ld,logdepthbuf_vertex:hd,map_fragment:ud,map_pars_fragment:dd,map_particle_fragment:fd,map_particle_pars_fragment:pd,metalnessmap_fragment:md,metalnessmap_pars_fragment:gd,morphinstance_vertex:vd,morphcolor_vertex:_d,morphnormal_vertex:xd,morphtarget_pars_vertex:Md,morphtarget_vertex:yd,normal_fragment_begin:Sd,normal_fragment_maps:wd,normal_pars_fragment:bd,normal_pars_vertex:Ed,normal_vertex:Td,normalmap_pars_fragment:Ad,clearcoat_normal_fragment_begin:Cd,clearcoat_normal_fragment_maps:Rd,clearcoat_pars_fragment:Pd,iridescence_pars_fragment:Ld,opaque_fragment:Id,packing:Dd,premultiplied_alpha_fragment:Ud,project_vertex:Nd,dithering_fragment:Fd,dithering_pars_fragment:Od,roughnessmap_fragment:zd,roughnessmap_pars_fragment:Bd,shadowmap_pars_fragment:kd,shadowmap_pars_vertex:Gd,shadowmap_vertex:Hd,shadowmask_pars_fragment:Vd,skinbase_vertex:Wd,skinning_pars_vertex:Xd,skinning_vertex:qd,skinnormal_vertex:Yd,specularmap_fragment:Zd,specularmap_pars_fragment:Kd,tonemapping_fragment:$d,tonemapping_pars_fragment:Jd,transmission_fragment:jd,transmission_pars_fragment:Qd,uv_pars_fragment:tf,uv_pars_vertex:ef,uv_vertex:nf,worldpos_vertex:sf,background_vert:rf,background_frag:of,backgroundCube_vert:af,backgroundCube_frag:cf,cube_vert:lf,cube_frag:hf,depth_vert:uf,depth_frag:df,distanceRGBA_vert:ff,distanceRGBA_frag:pf,equirect_vert:mf,equirect_frag:gf,linedashed_vert:vf,linedashed_frag:_f,meshbasic_vert:xf,meshbasic_frag:Mf,meshlambert_vert:yf,meshlambert_frag:Sf,meshmatcap_vert:wf,meshmatcap_frag:bf,meshnormal_vert:Ef,meshnormal_frag:Tf,meshphong_vert:Af,meshphong_frag:Cf,meshphysical_vert:Rf,meshphysical_frag:Pf,meshtoon_vert:Lf,meshtoon_frag:If,points_vert:Df,points_frag:Uf,shadow_vert:Nf,shadow_frag:Ff,sprite_vert:Of,sprite_frag:zf},st={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},on={basic:{uniforms:Re([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Re([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new gt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Re([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Re([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Re([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new gt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Re([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Re([st.points,st.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Re([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Re([st.common,st.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Re([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Re([st.sprite,st.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:Re([st.common,st.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:Re([st.lights,st.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};on.physical={uniforms:Re([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const Ps={r:0,b:0,g:0},Zn=new $e,Bf=new Ht;function kf(i,t,e,n,s,r,o){const a=new gt(0);let l=r===!0?0:1,h,c,u=null,d=0,f=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function v(y){let x=!1;const w=g(y);w===null?p(a,l):w&&w.isColor&&(p(w,1),x=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,x){const w=g(x);w&&(w.isCubeTexture||w.mapping===sr)?(c===void 0&&(c=new it(new Gt(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:Bi(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(L,C,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),Zn.copy(x.backgroundRotation),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),c.material.uniforms.envMap.value=w,c.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Bf.makeRotationFromEuler(Zn)),c.material.toneMapped=Qt.getTransfer(w.colorSpace)!==ae,(u!==w||d!==w.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=w,d=w.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(h===void 0&&(h=new it(new Hn(2,2),new Xe({name:"BackgroundMaterial",uniforms:Bi(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=w,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.toneMapped=Qt.getTransfer(w.colorSpace)!==ae,w.matrixAutoUpdate===!0&&w.updateMatrix(),h.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null))}function p(y,x){y.getRGB(Ps,pl(i)),n.buffers.color.setClear(Ps.r,Ps.g,Ps.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:v,addToRenderList:m}}function Gf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(_,M,D,z,X){let Y=!1;const O=u(z,D,M);r!==O&&(r=O,h(r.object)),Y=f(_,z,D,X),Y&&g(_,z,D,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,w(_,M,D,z),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return i.createVertexArray()}function h(_){return i.bindVertexArray(_)}function c(_){return i.deleteVertexArray(_)}function u(_,M,D){const z=D.wireframe===!0;let X=n[_.id];X===void 0&&(X={},n[_.id]=X);let Y=X[M.id];Y===void 0&&(Y={},X[M.id]=Y);let O=Y[z];return O===void 0&&(O=d(l()),Y[z]=O),O}function d(_){const M=[],D=[],z=[];for(let X=0;X<e;X++)M[X]=0,D[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:D,attributeDivisors:z,object:_,attributes:{},index:null}}function f(_,M,D,z){const X=r.attributes,Y=M.attributes;let O=0;const G=D.getAttributes();for(const V in G)if(G[V].location>=0){const lt=X[V];let vt=Y[V];if(vt===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(vt=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(vt=_.instanceColor)),lt===void 0||lt.attribute!==vt||vt&&lt.data!==vt.data)return!0;O++}return r.attributesNum!==O||r.index!==z}function g(_,M,D,z){const X={},Y=M.attributes;let O=0;const G=D.getAttributes();for(const V in G)if(G[V].location>=0){let lt=Y[V];lt===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(lt=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(lt=_.instanceColor));const vt={};vt.attribute=lt,lt&&lt.data&&(vt.data=lt.data),X[V]=vt,O++}r.attributes=X,r.attributesNum=O,r.index=z}function v(){const _=r.newAttributes;for(let M=0,D=_.length;M<D;M++)_[M]=0}function m(_){p(_,0)}function p(_,M){const D=r.newAttributes,z=r.enabledAttributes,X=r.attributeDivisors;D[_]=1,z[_]===0&&(i.enableVertexAttribArray(_),z[_]=1),X[_]!==M&&(i.vertexAttribDivisor(_,M),X[_]=M)}function y(){const _=r.newAttributes,M=r.enabledAttributes;for(let D=0,z=M.length;D<z;D++)M[D]!==_[D]&&(i.disableVertexAttribArray(D),M[D]=0)}function x(_,M,D,z,X,Y,O){O===!0?i.vertexAttribIPointer(_,M,D,X,Y):i.vertexAttribPointer(_,M,D,z,X,Y)}function w(_,M,D,z){v();const X=z.attributes,Y=D.getAttributes(),O=M.defaultAttributeValues;for(const G in Y){const V=Y[G];if(V.location>=0){let rt=X[G];if(rt===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(rt=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(rt=_.instanceColor)),rt!==void 0){const lt=rt.normalized,vt=rt.itemSize,Zt=t.get(rt);if(Zt===void 0)continue;const te=Zt.buffer,Z=Zt.type,Q=Zt.bytesPerElement,xt=Z===i.INT||Z===i.UNSIGNED_INT||rt.gpuType===na;if(rt.isInterleavedBufferAttribute){const dt=rt.data,Dt=dt.stride,Et=rt.offset;if(dt.isInstancedInterleavedBuffer){for(let Vt=0;Vt<V.locationSize;Vt++)p(V.location+Vt,dt.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Vt=0;Vt<V.locationSize;Vt++)m(V.location+Vt);i.bindBuffer(i.ARRAY_BUFFER,te);for(let Vt=0;Vt<V.locationSize;Vt++)x(V.location+Vt,vt/V.locationSize,Z,lt,Dt*Q,(Et+vt/V.locationSize*Vt)*Q,xt)}else{if(rt.isInstancedBufferAttribute){for(let dt=0;dt<V.locationSize;dt++)p(V.location+dt,rt.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let dt=0;dt<V.locationSize;dt++)m(V.location+dt);i.bindBuffer(i.ARRAY_BUFFER,te);for(let dt=0;dt<V.locationSize;dt++)x(V.location+dt,vt/V.locationSize,Z,lt,vt*Q,vt/V.locationSize*dt*Q,xt)}}else if(O!==void 0){const lt=O[G];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(V.location,lt);break;case 3:i.vertexAttrib3fv(V.location,lt);break;case 4:i.vertexAttrib4fv(V.location,lt);break;default:i.vertexAttrib1fv(V.location,lt)}}}}y()}function L(){P();for(const _ in n){const M=n[_];for(const D in M){const z=M[D];for(const X in z)c(z[X].object),delete z[X];delete M[D]}delete n[_]}}function C(_){if(n[_.id]===void 0)return;const M=n[_.id];for(const D in M){const z=M[D];for(const X in z)c(z[X].object),delete z[X];delete M[D]}delete n[_.id]}function E(_){for(const M in n){const D=n[M];if(D[_.id]===void 0)continue;const z=D[_.id];for(const X in z)c(z[X].object),delete z[X];delete D[_.id]}}function P(){W(),o=!0,r!==s&&(r=s,h(r.object))}function W(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:W,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function Hf(i,t,e){let n;function s(h){n=h}function r(h,c){i.drawArrays(n,h,c),e.update(c,n,1)}function o(h,c,u){u!==0&&(i.drawArraysInstanced(n,h,c,u),e.update(c,n,u))}function a(h,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,c,0,u);let f=0;for(let g=0;g<u;g++)f+=c[g];e.update(f,n,1)}function l(h,c,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<h.length;g++)o(h[g],c[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,c,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=c[v];for(let v=0;v<d.length;v++)e.update(g,n,d[v])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Vf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==sn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const P=E===as&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==ln&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==an&&!P)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const E=t.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:w,vertexTextures:L,maxSamples:C}}function Wf(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new jn,a=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=c(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?c(null):h();else{const y=r?0:n,x=y*4;let w=p.clippingState||null;l.value=w,w=c(g,d,x,f);for(let L=0;L!==x;++L)w[L]=e[L];p.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,w=f;x!==v;++x,w+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Xf(i){let t=new WeakMap;function e(o,a){return a===vo?o.mapping=Ni:a===_o&&(o.mapping=Fi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===vo||a===_o)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const h=new eu(l.height);return h.fromEquirectangularTexture(i,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class _l extends ml{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ci=4,tc=[.125,.215,.35,.446,.526,.582],ni=20,Or=new _l,ec=new gt;let zr=null,Br=0,kr=0,Gr=!1;const Qn=(1+Math.sqrt(5))/2,Ei=1/Qn,nc=[new R(-Qn,Ei,0),new R(Qn,Ei,0),new R(-Ei,0,Qn),new R(Ei,0,Qn),new R(0,Qn,-Ei),new R(0,Qn,Ei),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class ic{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){zr=this._renderer.getRenderTarget(),Br=this._renderer.getActiveCubeFace(),kr=this._renderer.getActiveMipmapLevel(),Gr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(zr,Br,kr),this._renderer.xr.enabled=Gr,t.scissorTest=!1,Ls(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ni||t.mapping===Fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zr=this._renderer.getRenderTarget(),Br=this._renderer.getActiveCubeFace(),kr=this._renderer.getActiveMipmapLevel(),Gr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:as,format:sn,colorSpace:kn,depthBuffer:!1},s=sc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qf(r)),this._blurMaterial=Yf(r,t,e)}return s}_compileMaterial(t){const e=new it(this._lodPlanes[0],t);this._renderer.compile(e,Or)}_sceneToCubeUV(t,e,n,s){const a=new Ke(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,d=c.toneMapping;c.getClearColor(ec),c.toneMapping=On,c.autoClear=!1;const f=new ul({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),g=new it(new Gt,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(ec),v=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(h[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,h[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,h[p]));const x=this._cubeSize;Ls(s,y*x,p>2?x:0,x,x),c.setRenderTarget(s),v&&c.render(g,a),c.render(t,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ni||t.mapping===Fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new it(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ls(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Or)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=nc[(s-r-1)%nc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new it(this._lodPlanes[s],h),d=h.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ni-1),v=r/g,m=isFinite(r)?1+Math.floor(c*v):ni;m>ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ni}`);const p=[];let y=0;for(let E=0;E<ni;++E){const P=E/v,W=Math.exp(-P*P/2);p.push(W),E===0?y+=W:E<m&&(y+=2*W)}for(let E=0;E<p.length;E++)p[E]=p[E]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const w=this._sizeLods[s],L=3*w*(s>x-Ci?s-x+Ci:0),C=4*(this._cubeSize-w);Ls(e,L,C,3*w,2*w),l.setRenderTarget(e),l.render(u,Or)}}function qf(i){const t=[],e=[],n=[];let s=i;const r=i-Ci+1+tc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Ci?l=tc[o-i+Ci-1]:o===0&&(l=0),n.push(l);const h=1/(a-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],f=6,g=6,v=3,m=2,p=1,y=new Float32Array(v*g*f),x=new Float32Array(m*g*f),w=new Float32Array(p*g*f);for(let C=0;C<f;C++){const E=C%3*2/3-1,P=C>2?0:-1,W=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];y.set(W,v*g*C),x.set(d,m*g*C);const _=[C,C,C,C,C,C];w.set(_,p*g*C)}const L=new Te;L.setAttribute("position",new pe(y,v)),L.setAttribute("uv",new pe(x,m)),L.setAttribute("faceIndex",new pe(w,p)),t.push(L),s>Ci&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function sc(i,t,e){const n=new li(i,t,e);return n.texture.mapping=sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ls(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Yf(i,t,e){const n=new Float32Array(ni),s=new R(0,1,0);return new Xe({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:da(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function rc(){return new Xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:da(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function oc(){return new Xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function da(){return`

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
	`}function Zf(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,h=l===vo||l===_o,c=l===Ni||l===Fi;if(h||c){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new ic(i)),u=h?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return h&&f&&f.height>0||c&&f&&s(f)?(e===null&&(e=new ic(i)),u=h?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const h=6;for(let c=0;c<h;c++)a[c]!==void 0&&l++;return l===h}function r(a){const l=a.target;l.removeEventListener("dispose",r);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Kf(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ws("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function $f(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],i.ARRAY_BUFFER)}}function h(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let x=0,w=y.length;x<w;x+=3){const L=y[x+0],C=y[x+1],E=y[x+2];d.push(L,C,C,E,E,L)}}else if(g!==void 0){const y=g.array;v=g.version;for(let x=0,w=y.length/3-1;x<w;x+=3){const L=x+0,C=x+1,E=x+2;d.push(L,C,C,E,E,L)}}else return;const m=new(al(d)?fl:dl)(d,1);m.version=v;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function c(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&h(u)}else h(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:c}}function Jf(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function h(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function c(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)h(d[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y];for(let y=0;y<v.length;y++)e.update(p,n,v[y])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function jf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Qf(i,t,e){const n=new WeakMap,s=new he;function r(o,a,l){const h=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=c!==void 0?c.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let _=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",_)};var f=_;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let w=0;g===!0&&(w=1),v===!0&&(w=2),m===!0&&(w=3);let L=a.attributes.position.count*w,C=1;L>t.maxTextureSize&&(C=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const E=new Float32Array(L*C*4*u),P=new ll(E,L,C,u);P.type=an,P.needsUpdate=!0;const W=w*4;for(let M=0;M<u;M++){const D=p[M],z=y[M],X=x[M],Y=L*C*4*M;for(let O=0;O<D.count;O++){const G=O*W;g===!0&&(s.fromBufferAttribute(D,O),E[Y+G+0]=s.x,E[Y+G+1]=s.y,E[Y+G+2]=s.z,E[Y+G+3]=0),v===!0&&(s.fromBufferAttribute(z,O),E[Y+G+4]=s.x,E[Y+G+5]=s.y,E[Y+G+6]=s.z,E[Y+G+7]=0),m===!0&&(s.fromBufferAttribute(X,O),E[Y+G+8]=s.x,E[Y+G+9]=s.y,E[Y+G+10]=s.z,E[Y+G+11]=X.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new tt(L,C)},n.set(a,d),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<h.length;m++)g+=h[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function tp(i,t,e,n){let s=new WeakMap;function r(l){const h=n.render.frame,c=l.geometry,u=t.get(l,c);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return u}function o(){s=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}class xl extends Ie{constructor(t,e,n,s,r,o,a,l,h,c=Li){if(c!==Li&&c!==zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===Li&&(n=ci),n===void 0&&c===zi&&(n=Oi),super(null,s,r,o,a,l,c,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Oe,this.minFilter=l!==void 0?l:Oe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ml=new Ie,ac=new xl(1,1),yl=new ll,Sl=new Bh,wl=new gl,cc=[],lc=[],hc=new Float32Array(16),uc=new Float32Array(9),dc=new Float32Array(4);function Xi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=cc[s];if(r===void 0&&(r=new Float32Array(s),cc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function _e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ar(i,t){let e=lc[t];e===void 0&&(e=new Int32Array(t),lc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ep(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function np(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2fv(this.addr,t),xe(e,t)}}function ip(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;i.uniform3fv(this.addr,t),xe(e,t)}}function sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4fv(this.addr,t),xe(e,t)}}function rp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;dc.set(n),i.uniformMatrix2fv(this.addr,!1,dc),xe(e,n)}}function op(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;uc.set(n),i.uniformMatrix3fv(this.addr,!1,uc),xe(e,n)}}function ap(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;hc.set(n),i.uniformMatrix4fv(this.addr,!1,hc),xe(e,n)}}function cp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function lp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2iv(this.addr,t),xe(e,t)}}function hp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3iv(this.addr,t),xe(e,t)}}function up(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4iv(this.addr,t),xe(e,t)}}function dp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function fp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2uiv(this.addr,t),xe(e,t)}}function pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3uiv(this.addr,t),xe(e,t)}}function mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4uiv(this.addr,t),xe(e,t)}}function gp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ac.compareFunction=ol,r=ac):r=Ml,e.setTexture2D(t||r,s)}function vp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Sl,s)}function _p(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||wl,s)}function xp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||yl,s)}function Mp(i){switch(i){case 5126:return ep;case 35664:return np;case 35665:return ip;case 35666:return sp;case 35674:return rp;case 35675:return op;case 35676:return ap;case 5124:case 35670:return cp;case 35667:case 35671:return lp;case 35668:case 35672:return hp;case 35669:case 35673:return up;case 5125:return dp;case 36294:return fp;case 36295:return pp;case 36296:return mp;case 35678:case 36198:case 36298:case 36306:case 35682:return gp;case 35679:case 36299:case 36307:return vp;case 35680:case 36300:case 36308:case 36293:return _p;case 36289:case 36303:case 36311:case 36292:return xp}}function yp(i,t){i.uniform1fv(this.addr,t)}function Sp(i,t){const e=Xi(t,this.size,2);i.uniform2fv(this.addr,e)}function wp(i,t){const e=Xi(t,this.size,3);i.uniform3fv(this.addr,e)}function bp(i,t){const e=Xi(t,this.size,4);i.uniform4fv(this.addr,e)}function Ep(i,t){const e=Xi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Tp(i,t){const e=Xi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ap(i,t){const e=Xi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Cp(i,t){i.uniform1iv(this.addr,t)}function Rp(i,t){i.uniform2iv(this.addr,t)}function Pp(i,t){i.uniform3iv(this.addr,t)}function Lp(i,t){i.uniform4iv(this.addr,t)}function Ip(i,t){i.uniform1uiv(this.addr,t)}function Dp(i,t){i.uniform2uiv(this.addr,t)}function Up(i,t){i.uniform3uiv(this.addr,t)}function Np(i,t){i.uniform4uiv(this.addr,t)}function Fp(i,t,e){const n=this.cache,s=t.length,r=ar(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ml,r[o])}function Op(i,t,e){const n=this.cache,s=t.length,r=ar(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Sl,r[o])}function zp(i,t,e){const n=this.cache,s=t.length,r=ar(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||wl,r[o])}function Bp(i,t,e){const n=this.cache,s=t.length,r=ar(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||yl,r[o])}function kp(i){switch(i){case 5126:return yp;case 35664:return Sp;case 35665:return wp;case 35666:return bp;case 35674:return Ep;case 35675:return Tp;case 35676:return Ap;case 5124:case 35670:return Cp;case 35667:case 35671:return Rp;case 35668:case 35672:return Pp;case 35669:case 35673:return Lp;case 5125:return Ip;case 36294:return Dp;case 36295:return Up;case 36296:return Np;case 35678:case 36198:case 36298:case 36306:case 35682:return Fp;case 35679:case 36299:case 36307:return Op;case 35680:case 36300:case 36308:case 36293:return zp;case 36289:case 36303:case 36311:case 36292:return Bp}}class Gp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Mp(e.type)}}class Hp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kp(e.type)}}class Vp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Hr=/(\w+)(\])?(\[|\.)?/g;function fc(i,t){i.seq.push(t),i.map[t.id]=t}function Wp(i,t,e){const n=i.name,s=n.length;for(Hr.lastIndex=0;;){const r=Hr.exec(n),o=Hr.lastIndex;let a=r[1];const l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){fc(e,h===void 0?new Gp(a,i,t):new Hp(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Vp(a),fc(e,u)),e=u}}}class Xs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Wp(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function pc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Xp=37297;let qp=0;function Yp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Zp(i){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(i);let n;switch(t===e?n="":t===Js&&e===$s?n="LinearDisplayP3ToLinearSRGB":t===$s&&e===Js&&(n="LinearSRGBToLinearDisplayP3"),i){case kn:case or:return[n,"LinearTransferOETF"];case en:case ca:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function mc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Yp(i.getShaderSource(t),o)}else return s}function Kp(i,t){const e=Zp(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function $p(i,t){let e;switch(t){case dh:e="Linear";break;case fh:e="Reinhard";break;case ph:e="Cineon";break;case Zc:e="ACESFilmic";break;case gh:e="AgX";break;case vh:e="Neutral";break;case mh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Is=new R;function Jp(){Qt.getLuminanceCoefficients(Is);const i=Is.x.toFixed(4),t=Is.y.toFixed(4),e=Is.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(es).join(`
`)}function Qp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function tm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function es(i){return i!==""}function gc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const em=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zo(i){return i.replace(em,im)}const nm=new Map;function im(i,t){let e=Nt[t];if(e===void 0){const n=nm.get(t);if(n!==void 0)e=Nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Zo(e)}const sm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _c(i){return i.replace(sm,rm)}function rm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function om(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===qc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xn&&(t="SHADOWMAP_TYPE_VSM"),t}function am(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ni:case Fi:t="ENVMAP_TYPE_CUBE";break;case sr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function cm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Fi:t="ENVMAP_MODE_REFRACTION";break}return t}function lm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Yc:t="ENVMAP_BLENDING_MULTIPLY";break;case hh:t="ENVMAP_BLENDING_MIX";break;case uh:t="ENVMAP_BLENDING_ADD";break}return t}function hm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function um(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=om(e),h=am(e),c=cm(e),u=lm(e),d=hm(e),f=jp(e),g=Qp(r),v=s.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(es).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(es).join(`
`),p.length>0&&(p+=`
`)):(m=[xc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),p=[xc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?Nt.tonemapping_pars_fragment:"",e.toneMapping!==On?$p("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,Kp("linearToOutputTexel",e.outputColorSpace),Jp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(es).join(`
`)),o=Zo(o),o=gc(o,e),o=vc(o,e),a=Zo(a),a=gc(a,e),a=vc(a,e),o=_c(o),a=_c(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Fa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+m+o,w=y+p+a,L=pc(s,s.VERTEX_SHADER,x),C=pc(s,s.FRAGMENT_SHADER,w);s.attachShader(v,L),s.attachShader(v,C),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function E(M){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(v).trim(),z=s.getShaderInfoLog(L).trim(),X=s.getShaderInfoLog(C).trim();let Y=!0,O=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,L,C);else{const G=mc(s,L,"vertex"),V=mc(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+D+`
`+G+`
`+V)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(z===""||X==="")&&(O=!1);O&&(M.diagnostics={runnable:Y,programLog:D,vertexShader:{log:z,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(L),s.deleteShader(C),P=new Xs(s,v),W=tm(s,v)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let W;this.getAttributes=function(){return W===void 0&&E(this),W};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,Xp)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qp++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=C,this}let dm=0;class fm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new pm(t),e.set(t,n)),n}}class pm{constructor(t){this.id=dm++,this.code=t,this.usedTimes=0}}function mm(i,t,e,n,s,r,o){const a=new ha,l=new fm,h=new Set,c=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures;let g=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return h.add(_),_===0?"uv":`uv${_}`}function p(_,M,D,z,X){const Y=z.fog,O=X.geometry,G=_.isMeshStandardMaterial?z.environment:null,V=(_.isMeshStandardMaterial?e:t).get(_.envMap||G),rt=V&&V.mapping===sr?V.image.height:null,lt=v[_.type];_.precision!==null&&(g=s.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const vt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Zt=vt!==void 0?vt.length:0;let te=0;O.morphAttributes.position!==void 0&&(te=1),O.morphAttributes.normal!==void 0&&(te=2),O.morphAttributes.color!==void 0&&(te=3);let Z,Q,xt,dt;if(lt){const Ue=on[lt];Z=Ue.vertexShader,Q=Ue.fragmentShader}else Z=_.vertexShader,Q=_.fragmentShader,l.update(_),xt=l.getVertexShaderID(_),dt=l.getFragmentShaderID(_);const Dt=i.getRenderTarget(),Et=X.isInstancedMesh===!0,Vt=X.isBatchedMesh===!0,ne=!!_.map,Wt=!!_.matcap,I=!!V,ze=!!_.aoMap,Bt=!!_.lightMap,qt=!!_.bumpMap,Ct=!!_.normalMap,re=!!_.displacementMap,It=!!_.emissiveMap,A=!!_.metalnessMap,S=!!_.roughnessMap,B=_.anisotropy>0,$=_.clearcoat>0,j=_.dispersion>0,K=_.iridescence>0,yt=_.sheen>0,ot=_.transmission>0,ft=B&&!!_.anisotropyMap,Yt=$&&!!_.clearcoatMap,et=$&&!!_.clearcoatNormalMap,pt=$&&!!_.clearcoatRoughnessMap,Rt=K&&!!_.iridescenceMap,Pt=K&&!!_.iridescenceThicknessMap,mt=yt&&!!_.sheenColorMap,kt=yt&&!!_.sheenRoughnessMap,Ut=!!_.specularMap,se=!!_.specularColorMap,U=!!_.specularIntensityMap,ht=ot&&!!_.transmissionMap,q=ot&&!!_.thicknessMap,J=!!_.gradientMap,at=!!_.alphaMap,ut=_.alphaTest>0,Xt=!!_.alphaHash,me=!!_.extensions;let De=On;_.toneMapped&&(Dt===null||Dt.isXRRenderTarget===!0)&&(De=i.toneMapping);const Kt={shaderID:lt,shaderType:_.type,shaderName:_.name,vertexShader:Z,fragmentShader:Q,defines:_.defines,customVertexShaderID:xt,customFragmentShaderID:dt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Vt,batchingColor:Vt&&X._colorsTexture!==null,instancing:Et,instancingColor:Et&&X.instanceColor!==null,instancingMorph:Et&&X.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Dt===null?i.outputColorSpace:Dt.isXRRenderTarget===!0?Dt.texture.colorSpace:kn,alphaToCoverage:!!_.alphaToCoverage,map:ne,matcap:Wt,envMap:I,envMapMode:I&&V.mapping,envMapCubeUVHeight:rt,aoMap:ze,lightMap:Bt,bumpMap:qt,normalMap:Ct,displacementMap:f&&re,emissiveMap:It,normalMapObjectSpace:Ct&&_.normalMapType===yh,normalMapTangentSpace:Ct&&_.normalMapType===rl,metalnessMap:A,roughnessMap:S,anisotropy:B,anisotropyMap:ft,clearcoat:$,clearcoatMap:Yt,clearcoatNormalMap:et,clearcoatRoughnessMap:pt,dispersion:j,iridescence:K,iridescenceMap:Rt,iridescenceThicknessMap:Pt,sheen:yt,sheenColorMap:mt,sheenRoughnessMap:kt,specularMap:Ut,specularColorMap:se,specularIntensityMap:U,transmission:ot,transmissionMap:ht,thicknessMap:q,gradientMap:J,opaque:_.transparent===!1&&_.blending===ai&&_.alphaToCoverage===!1,alphaMap:at,alphaTest:ut,alphaHash:Xt,combine:_.combine,mapUv:ne&&m(_.map.channel),aoMapUv:ze&&m(_.aoMap.channel),lightMapUv:Bt&&m(_.lightMap.channel),bumpMapUv:qt&&m(_.bumpMap.channel),normalMapUv:Ct&&m(_.normalMap.channel),displacementMapUv:re&&m(_.displacementMap.channel),emissiveMapUv:It&&m(_.emissiveMap.channel),metalnessMapUv:A&&m(_.metalnessMap.channel),roughnessMapUv:S&&m(_.roughnessMap.channel),anisotropyMapUv:ft&&m(_.anisotropyMap.channel),clearcoatMapUv:Yt&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:et&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:kt&&m(_.sheenRoughnessMap.channel),specularMapUv:Ut&&m(_.specularMap.channel),specularColorMapUv:se&&m(_.specularColorMap.channel),specularIntensityMapUv:U&&m(_.specularIntensityMap.channel),transmissionMapUv:ht&&m(_.transmissionMap.channel),thicknessMapUv:q&&m(_.thicknessMap.channel),alphaMapUv:at&&m(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Ct||B),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!O.attributes.uv&&(ne||at),fog:!!Y,useFog:_.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:X.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Zt,morphTextureStride:te,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,decodeVideoTexture:ne&&_.map.isVideoTexture===!0&&Qt.getTransfer(_.map.colorSpace)===ae,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Pe,flipSided:_.side===Le,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:me&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&_.extensions.multiDraw===!0||Vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Kt.vertexUv1s=h.has(1),Kt.vertexUv2s=h.has(2),Kt.vertexUv3s=h.has(3),h.clear(),Kt}function y(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const D in _.defines)M.push(D),M.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(x(M,_),w(M,_),M.push(i.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function x(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function w(_,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),_.push(a.mask)}function L(_){const M=v[_.type];let D;if(M){const z=on[M];D=Jh.clone(z.uniforms)}else D=_.uniforms;return D}function C(_,M){let D;for(let z=0,X=c.length;z<X;z++){const Y=c[z];if(Y.cacheKey===M){D=Y,++D.usedTimes;break}}return D===void 0&&(D=new um(i,M,_,r),c.push(D)),D}function E(_){if(--_.usedTimes===0){const M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),_.destroy()}}function P(_){l.remove(_)}function W(){l.dispose()}return{getParameters:p,getProgramCacheKey:y,getUniforms:L,acquireProgram:C,releaseProgram:E,releaseShaderCache:P,programs:c,dispose:W}}function gm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function vm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Mc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function yc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,v,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function a(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function h(u,d){e.length>1&&e.sort(u||vm),n.length>1&&n.sort(d||Mc),s.length>1&&s.sort(d||Mc)}function c(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:c,sort:h}}function _m(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new yc,i.set(n,[o])):s>=r.length?(o=new yc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function xm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new gt};break;case"SpotLight":e={position:new R,direction:new R,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":e={color:new gt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function Mm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let ym=0;function Sm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function wm(i){const t=new xm,e=Mm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new R);const s=new R,r=new Ht,o=new Ht;function a(h){let c=0,u=0,d=0;for(let W=0;W<9;W++)n.probe[W].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,y=0,x=0,w=0,L=0,C=0,E=0;h.sort(Sm);for(let W=0,_=h.length;W<_;W++){const M=h[W],D=M.color,z=M.intensity,X=M.distance,Y=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)c+=D.r*z,u+=D.g*z,d+=D.b*z;else if(M.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(M.sh.coefficients[O],z);E++}else if(M.isDirectionalLight){const O=t.get(M);if(O.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const G=M.shadow,V=e.get(M);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=M.shadow.matrix,y++}n.directional[f]=O,f++}else if(M.isSpotLight){const O=t.get(M);O.position.setFromMatrixPosition(M.matrixWorld),O.color.copy(D).multiplyScalar(z),O.distance=X,O.coneCos=Math.cos(M.angle),O.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),O.decay=M.decay,n.spot[v]=O;const G=M.shadow;if(M.map&&(n.spotLightMap[L]=M.map,L++,G.updateMatrices(M),M.castShadow&&C++),n.spotLightMatrix[v]=G.matrix,M.castShadow){const V=e.get(M);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=Y,w++}v++}else if(M.isRectAreaLight){const O=t.get(M);O.color.copy(D).multiplyScalar(z),O.halfWidth.set(M.width*.5,0,0),O.halfHeight.set(0,M.height*.5,0),n.rectArea[m]=O,m++}else if(M.isPointLight){const O=t.get(M);if(O.color.copy(M.color).multiplyScalar(M.intensity),O.distance=M.distance,O.decay=M.decay,M.castShadow){const G=M.shadow,V=e.get(M);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,V.shadowCameraNear=G.camera.near,V.shadowCameraFar=G.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=M.shadow.matrix,x++}n.point[g]=O,g++}else if(M.isHemisphereLight){const O=t.get(M);O.skyColor.copy(M.color).multiplyScalar(z),O.groundColor.copy(M.groundColor).multiplyScalar(z),n.hemi[p]=O,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==x||P.numSpotShadows!==w||P.numSpotMaps!==L||P.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=w+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=E,P.directionalLength=f,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=x,P.numSpotShadows=w,P.numSpotMaps=L,P.numLightProbes=E,n.version=ym++)}function l(h,c){let u=0,d=0,f=0,g=0,v=0;const m=c.matrixWorldInverse;for(let p=0,y=h.length;p<y;p++){const x=h[p];if(x.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),u++}else if(x.isSpotLight){const w=n.spot[f];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const w=n.rectArea[g];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const w=n.point[d];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const w=n.hemi[v];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function Sc(i){const t=new wm(i),e=[],n=[];function s(c){h.camera=c,e.length=0,n.length=0}function r(c){e.push(c)}function o(c){n.push(c)}function a(){t.setup(e)}function l(c){t.setupView(e,c)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function bm(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Sc(i),t.set(s,[a])):r>=o.length?(a=new Sc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Em extends Wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Tm extends Wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Am=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cm=`uniform sampler2D shadow_pass;
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
}`;function Rm(i,t,e){let n=new ua;const s=new tt,r=new tt,o=new he,a=new Em({depthPacking:Mh}),l=new Tm,h={},c=e.maxTextureSize,u={[wn]:Le,[Le]:wn,[Pe]:Pe},d=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:Am,fragmentShader:Cm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Te;g.setAttribute("position",new pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new it(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xc;let p=this.type;this.render=function(C,E,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const W=i.getRenderTarget(),_=i.getActiveCubeFace(),M=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Fn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const z=p!==xn&&this.type===xn,X=p===xn&&this.type!==xn;for(let Y=0,O=C.length;Y<O;Y++){const G=C[Y],V=G.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const rt=V.getFrameExtents();if(s.multiply(rt),r.copy(V.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/rt.x),s.x=r.x*rt.x,V.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/rt.y),s.y=r.y*rt.y,V.mapSize.y=r.y)),V.map===null||z===!0||X===!0){const vt=this.type!==xn?{minFilter:Oe,magFilter:Oe}:{};V.map!==null&&V.map.dispose(),V.map=new li(s.x,s.y,vt),V.map.texture.name=G.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const lt=V.getViewportCount();for(let vt=0;vt<lt;vt++){const Zt=V.getViewport(vt);o.set(r.x*Zt.x,r.y*Zt.y,r.x*Zt.z,r.y*Zt.w),D.viewport(o),V.updateMatrices(G,vt),n=V.getFrustum(),w(E,P,V.camera,G,this.type)}V.isPointLightShadow!==!0&&this.type===xn&&y(V,P),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(W,_,M)};function y(C,E){const P=t.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new li(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(E,null,P,d,v,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(E,null,P,f,v,null)}function x(C,E,P,W){let _=null;const M=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(M!==void 0)_=M;else if(_=P.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const D=_.uuid,z=E.uuid;let X=h[D];X===void 0&&(X={},h[D]=X);let Y=X[z];Y===void 0&&(Y=_.clone(),X[z]=Y,E.addEventListener("dispose",L)),_=Y}if(_.visible=E.visible,_.wireframe=E.wireframe,W===xn?_.side=E.shadowSide!==null?E.shadowSide:E.side:_.side=E.shadowSide!==null?E.shadowSide:u[E.side],_.alphaMap=E.alphaMap,_.alphaTest=E.alphaTest,_.map=E.map,_.clipShadows=E.clipShadows,_.clippingPlanes=E.clippingPlanes,_.clipIntersection=E.clipIntersection,_.displacementMap=E.displacementMap,_.displacementScale=E.displacementScale,_.displacementBias=E.displacementBias,_.wireframeLinewidth=E.wireframeLinewidth,_.linewidth=E.linewidth,P.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const D=i.properties.get(_);D.light=P}return _}function w(C,E,P,W,_){if(C.visible===!1)return;if(C.layers.test(E.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===xn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const z=t.update(C),X=C.material;if(Array.isArray(X)){const Y=z.groups;for(let O=0,G=Y.length;O<G;O++){const V=Y[O],rt=X[V.materialIndex];if(rt&&rt.visible){const lt=x(C,rt,W,_);C.onBeforeShadow(i,C,E,P,z,lt,V),i.renderBufferDirect(P,null,z,lt,C,V),C.onAfterShadow(i,C,E,P,z,lt,V)}}}else if(X.visible){const Y=x(C,X,W,_);C.onBeforeShadow(i,C,E,P,z,Y,null),i.renderBufferDirect(P,null,z,Y,C,null),C.onAfterShadow(i,C,E,P,z,Y,null)}}const D=C.children;for(let z=0,X=D.length;z<X;z++)w(D[z],E,P,W,_)}function L(C){C.target.removeEventListener("dispose",L);for(const P in h){const W=h[P],_=C.target.uuid;_ in W&&(W[_].dispose(),delete W[_])}}}const Pm={[lo]:ho,[uo]:mo,[fo]:go,[Ui]:po,[ho]:lo,[mo]:uo,[go]:fo,[po]:Ui};function Lm(i){function t(){let U=!1;const ht=new he;let q=null;const J=new he(0,0,0,0);return{setMask:function(at){q!==at&&!U&&(i.colorMask(at,at,at,at),q=at)},setLocked:function(at){U=at},setClear:function(at,ut,Xt,me,De){De===!0&&(at*=me,ut*=me,Xt*=me),ht.set(at,ut,Xt,me),J.equals(ht)===!1&&(i.clearColor(at,ut,Xt,me),J.copy(ht))},reset:function(){U=!1,q=null,J.set(-1,0,0,0)}}}function e(){let U=!1,ht=!1,q=null,J=null,at=null;return{setReversed:function(ut){ht=ut},setTest:function(ut){ut?xt(i.DEPTH_TEST):dt(i.DEPTH_TEST)},setMask:function(ut){q!==ut&&!U&&(i.depthMask(ut),q=ut)},setFunc:function(ut){if(ht&&(ut=Pm[ut]),J!==ut){switch(ut){case lo:i.depthFunc(i.NEVER);break;case ho:i.depthFunc(i.ALWAYS);break;case uo:i.depthFunc(i.LESS);break;case Ui:i.depthFunc(i.LEQUAL);break;case fo:i.depthFunc(i.EQUAL);break;case po:i.depthFunc(i.GEQUAL);break;case mo:i.depthFunc(i.GREATER);break;case go:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=ut}},setLocked:function(ut){U=ut},setClear:function(ut){at!==ut&&(i.clearDepth(ut),at=ut)},reset:function(){U=!1,q=null,J=null,at=null}}}function n(){let U=!1,ht=null,q=null,J=null,at=null,ut=null,Xt=null,me=null,De=null;return{setTest:function(Kt){U||(Kt?xt(i.STENCIL_TEST):dt(i.STENCIL_TEST))},setMask:function(Kt){ht!==Kt&&!U&&(i.stencilMask(Kt),ht=Kt)},setFunc:function(Kt,Ue,dn){(q!==Kt||J!==Ue||at!==dn)&&(i.stencilFunc(Kt,Ue,dn),q=Kt,J=Ue,at=dn)},setOp:function(Kt,Ue,dn){(ut!==Kt||Xt!==Ue||me!==dn)&&(i.stencilOp(Kt,Ue,dn),ut=Kt,Xt=Ue,me=dn)},setLocked:function(Kt){U=Kt},setClear:function(Kt){De!==Kt&&(i.clearStencil(Kt),De=Kt)},reset:function(){U=!1,ht=null,q=null,J=null,at=null,ut=null,Xt=null,me=null,De=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let h={},c={},u=new WeakMap,d=[],f=null,g=!1,v=null,m=null,p=null,y=null,x=null,w=null,L=null,C=new gt(0,0,0),E=0,P=!1,W=null,_=null,M=null,D=null,z=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,O=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(G)[1]),Y=O>=1):G.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),Y=O>=2);let V=null,rt={};const lt=i.getParameter(i.SCISSOR_BOX),vt=i.getParameter(i.VIEWPORT),Zt=new he().fromArray(lt),te=new he().fromArray(vt);function Z(U,ht,q,J){const at=new Uint8Array(4),ut=i.createTexture();i.bindTexture(U,ut),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<q;Xt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,at):i.texImage2D(ht+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,at);return ut}const Q={};Q[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),xt(i.DEPTH_TEST),r.setFunc(Ui),Bt(!1),qt(La),xt(i.CULL_FACE),I(Fn);function xt(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function dt(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Dt(U,ht){return c[U]!==ht?(i.bindFramebuffer(U,ht),c[U]=ht,U===i.DRAW_FRAMEBUFFER&&(c[i.FRAMEBUFFER]=ht),U===i.FRAMEBUFFER&&(c[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function Et(U,ht){let q=d,J=!1;if(U){q=u.get(ht),q===void 0&&(q=[],u.set(ht,q));const at=U.textures;if(q.length!==at.length||q[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Xt=at.length;ut<Xt;ut++)q[ut]=i.COLOR_ATTACHMENT0+ut;q.length=at.length,J=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,J=!0);J&&i.drawBuffers(q)}function Vt(U){return f!==U?(i.useProgram(U),f=U,!0):!1}const ne={[ei]:i.FUNC_ADD,[Yl]:i.FUNC_SUBTRACT,[Zl]:i.FUNC_REVERSE_SUBTRACT};ne[Kl]=i.MIN,ne[$l]=i.MAX;const Wt={[Jl]:i.ZERO,[jl]:i.ONE,[Ql]:i.SRC_COLOR,[ao]:i.SRC_ALPHA,[rh]:i.SRC_ALPHA_SATURATE,[ih]:i.DST_COLOR,[eh]:i.DST_ALPHA,[th]:i.ONE_MINUS_SRC_COLOR,[co]:i.ONE_MINUS_SRC_ALPHA,[sh]:i.ONE_MINUS_DST_COLOR,[nh]:i.ONE_MINUS_DST_ALPHA,[oh]:i.CONSTANT_COLOR,[ah]:i.ONE_MINUS_CONSTANT_COLOR,[ch]:i.CONSTANT_ALPHA,[lh]:i.ONE_MINUS_CONSTANT_ALPHA};function I(U,ht,q,J,at,ut,Xt,me,De,Kt){if(U===Fn){g===!0&&(dt(i.BLEND),g=!1);return}if(g===!1&&(xt(i.BLEND),g=!0),U!==ql){if(U!==v||Kt!==P){if((m!==ei||x!==ei)&&(i.blendEquation(i.FUNC_ADD),m=ei,x=ei),Kt)switch(U){case ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ia:i.blendFunc(i.ONE,i.ONE);break;case Da:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ia:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Da:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}p=null,y=null,w=null,L=null,C.set(0,0,0),E=0,v=U,P=Kt}return}at=at||ht,ut=ut||q,Xt=Xt||J,(ht!==m||at!==x)&&(i.blendEquationSeparate(ne[ht],ne[at]),m=ht,x=at),(q!==p||J!==y||ut!==w||Xt!==L)&&(i.blendFuncSeparate(Wt[q],Wt[J],Wt[ut],Wt[Xt]),p=q,y=J,w=ut,L=Xt),(me.equals(C)===!1||De!==E)&&(i.blendColor(me.r,me.g,me.b,De),C.copy(me),E=De),v=U,P=!1}function ze(U,ht){U.side===Pe?dt(i.CULL_FACE):xt(i.CULL_FACE);let q=U.side===Le;ht&&(q=!q),Bt(q),U.blending===ai&&U.transparent===!1?I(Fn):I(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),s.setMask(U.colorWrite);const J=U.stencilWrite;o.setTest(J),J&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),re(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?xt(i.SAMPLE_ALPHA_TO_COVERAGE):dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(U){W!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),W=U)}function qt(U){U!==Wl?(xt(i.CULL_FACE),U!==_&&(U===La?i.cullFace(i.BACK):U===Xl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):dt(i.CULL_FACE),_=U}function Ct(U){U!==M&&(Y&&i.lineWidth(U),M=U)}function re(U,ht,q){U?(xt(i.POLYGON_OFFSET_FILL),(D!==ht||z!==q)&&(i.polygonOffset(ht,q),D=ht,z=q)):dt(i.POLYGON_OFFSET_FILL)}function It(U){U?xt(i.SCISSOR_TEST):dt(i.SCISSOR_TEST)}function A(U){U===void 0&&(U=i.TEXTURE0+X-1),V!==U&&(i.activeTexture(U),V=U)}function S(U,ht,q){q===void 0&&(V===null?q=i.TEXTURE0+X-1:q=V);let J=rt[q];J===void 0&&(J={type:void 0,texture:void 0},rt[q]=J),(J.type!==U||J.texture!==ht)&&(V!==q&&(i.activeTexture(q),V=q),i.bindTexture(U,ht||Q[U]),J.type=U,J.texture=ht)}function B(){const U=rt[V];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Yt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Rt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pt(U){Zt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Zt.copy(U))}function mt(U){te.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),te.copy(U))}function kt(U,ht){let q=l.get(ht);q===void 0&&(q=new WeakMap,l.set(ht,q));let J=q.get(U);J===void 0&&(J=i.getUniformBlockIndex(ht,U.name),q.set(U,J))}function Ut(U,ht){const J=l.get(ht).get(U);a.get(ht)!==J&&(i.uniformBlockBinding(ht,J,U.__bindingPointIndex),a.set(ht,J))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},V=null,rt={},c={},u=new WeakMap,d=[],f=null,g=!1,v=null,m=null,p=null,y=null,x=null,w=null,L=null,C=new gt(0,0,0),E=0,P=!1,W=null,_=null,M=null,D=null,z=null,Zt.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:xt,disable:dt,bindFramebuffer:Dt,drawBuffers:Et,useProgram:Vt,setBlending:I,setMaterial:ze,setFlipSided:Bt,setCullFace:qt,setLineWidth:Ct,setPolygonOffset:re,setScissorTest:It,activeTexture:A,bindTexture:S,unbindTexture:B,compressedTexImage2D:$,compressedTexImage3D:j,texImage2D:pt,texImage3D:Rt,updateUBOMapping:kt,uniformBlockBinding:Ut,texStorage2D:Yt,texStorage3D:et,texSubImage2D:K,texSubImage3D:yt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ft,scissor:Pt,viewport:mt,reset:se}}function wc(i,t,e,n){const s=Im(n);switch(e){case Qc:return i*t;case el:return i*t;case nl:return i*t*2;case rr:return i*t/s.components*s.byteLength;case ra:return i*t/s.components*s.byteLength;case il:return i*t*2/s.components*s.byteLength;case oa:return i*t*2/s.components*s.byteLength;case tl:return i*t*3/s.components*s.byteLength;case sn:return i*t*4/s.components*s.byteLength;case aa:return i*t*4/s.components*s.byteLength;case Bs:case ks:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Gs:case Hs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case So:case bo:return Math.max(i,16)*Math.max(t,8)/4;case yo:case wo:return Math.max(i,8)*Math.max(t,8)/2;case Eo:case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ro:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Po:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Io:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Do:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case No:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case zo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ko:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Go:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Vs:case Ho:case Vo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case sl:case Wo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Xo:case qo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Im(i){switch(i){case ln:case $c:return{byteLength:1,components:1};case os:case Jc:case as:return{byteLength:2,components:1};case ia:case sa:return{byteLength:2,components:4};case ci:case na:case an:return{byteLength:4,components:1};case jc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Dm(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new tt,c=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return f?new OffscreenCanvas(A,S):Qs("canvas")}function v(A,S,B){let $=1;const j=It(A);if((j.width>B||j.height>B)&&($=B/Math.max(j.width,j.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const K=Math.floor($*j.width),yt=Math.floor($*j.height);u===void 0&&(u=g(K,yt));const ot=S?g(K,yt):u;return ot.width=K,ot.height=yt,ot.getContext("2d").drawImage(A,0,0,K,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+K+"x"+yt+")."),ot}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==Oe&&A.minFilter!==We}function p(A){i.generateMipmap(A)}function y(A,S,B,$,j=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=S;if(S===i.RED&&(B===i.FLOAT&&(K=i.R32F),B===i.HALF_FLOAT&&(K=i.R16F),B===i.UNSIGNED_BYTE&&(K=i.R8)),S===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.R8UI),B===i.UNSIGNED_SHORT&&(K=i.R16UI),B===i.UNSIGNED_INT&&(K=i.R32UI),B===i.BYTE&&(K=i.R8I),B===i.SHORT&&(K=i.R16I),B===i.INT&&(K=i.R32I)),S===i.RG&&(B===i.FLOAT&&(K=i.RG32F),B===i.HALF_FLOAT&&(K=i.RG16F),B===i.UNSIGNED_BYTE&&(K=i.RG8)),S===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RG8UI),B===i.UNSIGNED_SHORT&&(K=i.RG16UI),B===i.UNSIGNED_INT&&(K=i.RG32UI),B===i.BYTE&&(K=i.RG8I),B===i.SHORT&&(K=i.RG16I),B===i.INT&&(K=i.RG32I)),S===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGB8UI),B===i.UNSIGNED_SHORT&&(K=i.RGB16UI),B===i.UNSIGNED_INT&&(K=i.RGB32UI),B===i.BYTE&&(K=i.RGB8I),B===i.SHORT&&(K=i.RGB16I),B===i.INT&&(K=i.RGB32I)),S===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),B===i.UNSIGNED_INT&&(K=i.RGBA32UI),B===i.BYTE&&(K=i.RGBA8I),B===i.SHORT&&(K=i.RGBA16I),B===i.INT&&(K=i.RGBA32I)),S===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),S===i.RGBA){const yt=j?Ks:Qt.getTransfer($);B===i.FLOAT&&(K=i.RGBA32F),B===i.HALF_FLOAT&&(K=i.RGBA16F),B===i.UNSIGNED_BYTE&&(K=yt===ae?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function x(A,S){let B;return A?S===null||S===ci||S===Oi?B=i.DEPTH24_STENCIL8:S===an?B=i.DEPTH32F_STENCIL8:S===os&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ci||S===Oi?B=i.DEPTH_COMPONENT24:S===an?B=i.DEPTH_COMPONENT32F:S===os&&(B=i.DEPTH_COMPONENT16),B}function w(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Oe&&A.minFilter!==We?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function L(A){const S=A.target;S.removeEventListener("dispose",L),E(S),S.isVideoTexture&&c.delete(S)}function C(A){const S=A.target;S.removeEventListener("dispose",C),W(S)}function E(A){const S=n.get(A);if(S.__webglInit===void 0)return;const B=A.source,$=d.get(B);if($){const j=$[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&P(A),Object.keys($).length===0&&d.delete(B)}n.remove(A)}function P(A){const S=n.get(A);i.deleteTexture(S.__webglTexture);const B=A.source,$=d.get(B);delete $[S.__cacheKey],o.memory.textures--}function W(A){const S=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let j=0;j<S.__webglFramebuffer[$].length;j++)i.deleteFramebuffer(S.__webglFramebuffer[$][j]);else i.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)i.deleteFramebuffer(S.__webglFramebuffer[$]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=A.textures;for(let $=0,j=B.length;$<j;$++){const K=n.get(B[$]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(B[$])}n.remove(A)}let _=0;function M(){_=0}function D(){const A=_;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),_+=1,A}function z(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function X(A,S){const B=n.get(A);if(A.isVideoTexture&&Ct(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(B,A,S);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+S)}function Y(A,S){const B=n.get(A);if(A.version>0&&B.__version!==A.version){te(B,A,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+S)}function O(A,S){const B=n.get(A);if(A.version>0&&B.__version!==A.version){te(B,A,S);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+S)}function G(A,S){const B=n.get(A);if(A.version>0&&B.__version!==A.version){Z(B,A,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+S)}const V={[xo]:i.REPEAT,[Mn]:i.CLAMP_TO_EDGE,[Mo]:i.MIRRORED_REPEAT},rt={[Oe]:i.NEAREST,[_h]:i.NEAREST_MIPMAP_NEAREST,[ds]:i.NEAREST_MIPMAP_LINEAR,[We]:i.LINEAR,[fr]:i.LINEAR_MIPMAP_NEAREST,[ii]:i.LINEAR_MIPMAP_LINEAR},lt={[Sh]:i.NEVER,[Ch]:i.ALWAYS,[wh]:i.LESS,[ol]:i.LEQUAL,[bh]:i.EQUAL,[Ah]:i.GEQUAL,[Eh]:i.GREATER,[Th]:i.NOTEQUAL};function vt(A,S){if(S.type===an&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===We||S.magFilter===fr||S.magFilter===ds||S.magFilter===ii||S.minFilter===We||S.minFilter===fr||S.minFilter===ds||S.minFilter===ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,V[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,V[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,V[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,rt[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,rt[S.minFilter]),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,lt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Oe||S.minFilter!==ds&&S.minFilter!==ii||S.type===an&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Zt(A,S){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",L));const $=S.source;let j=d.get($);j===void 0&&(j={},d.set($,j));const K=z(S);if(K!==A.__cacheKey){j[K]===void 0&&(j[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),j[K].usedTimes++;const yt=j[A.__cacheKey];yt!==void 0&&(j[A.__cacheKey].usedTimes--,yt.usedTimes===0&&P(S)),A.__cacheKey=K,A.__webglTexture=j[K].texture}return B}function te(A,S,B){let $=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=i.TEXTURE_3D);const j=Zt(A,S),K=S.source;e.bindTexture($,A.__webglTexture,i.TEXTURE0+B);const yt=n.get(K);if(K.version!==yt.__version||j===!0){e.activeTexture(i.TEXTURE0+B);const ot=Qt.getPrimaries(Qt.workingColorSpace),ft=S.colorSpace===Dn?null:Qt.getPrimaries(S.colorSpace),Yt=S.colorSpace===Dn||ot===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let et=v(S.image,!1,s.maxTextureSize);et=re(S,et);const pt=r.convert(S.format,S.colorSpace),Rt=r.convert(S.type);let Pt=y(S.internalFormat,pt,Rt,S.colorSpace,S.isVideoTexture);vt($,S);let mt;const kt=S.mipmaps,Ut=S.isVideoTexture!==!0,se=yt.__version===void 0||j===!0,U=K.dataReady,ht=w(S,et);if(S.isDepthTexture)Pt=x(S.format===zi,S.type),se&&(Ut?e.texStorage2D(i.TEXTURE_2D,1,Pt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Pt,et.width,et.height,0,pt,Rt,null));else if(S.isDataTexture)if(kt.length>0){Ut&&se&&e.texStorage2D(i.TEXTURE_2D,ht,Pt,kt[0].width,kt[0].height);for(let q=0,J=kt.length;q<J;q++)mt=kt[q],Ut?U&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,mt.width,mt.height,pt,Rt,mt.data):e.texImage2D(i.TEXTURE_2D,q,Pt,mt.width,mt.height,0,pt,Rt,mt.data);S.generateMipmaps=!1}else Ut?(se&&e.texStorage2D(i.TEXTURE_2D,ht,Pt,et.width,et.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,pt,Rt,et.data)):e.texImage2D(i.TEXTURE_2D,0,Pt,et.width,et.height,0,pt,Rt,et.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ut&&se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Pt,kt[0].width,kt[0].height,et.depth);for(let q=0,J=kt.length;q<J;q++)if(mt=kt[q],S.format!==sn)if(pt!==null)if(Ut){if(U)if(S.layerUpdates.size>0){const at=wc(mt.width,mt.height,S.format,S.type);for(const ut of S.layerUpdates){const Xt=mt.data.subarray(ut*at/mt.data.BYTES_PER_ELEMENT,(ut+1)*at/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,ut,mt.width,mt.height,1,pt,Xt,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,mt.width,mt.height,et.depth,pt,mt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Pt,mt.width,mt.height,et.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,mt.width,mt.height,et.depth,pt,Rt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Pt,mt.width,mt.height,et.depth,0,pt,Rt,mt.data)}else{Ut&&se&&e.texStorage2D(i.TEXTURE_2D,ht,Pt,kt[0].width,kt[0].height);for(let q=0,J=kt.length;q<J;q++)mt=kt[q],S.format!==sn?pt!==null?Ut?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Pt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?U&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,mt.width,mt.height,pt,Rt,mt.data):e.texImage2D(i.TEXTURE_2D,q,Pt,mt.width,mt.height,0,pt,Rt,mt.data)}else if(S.isDataArrayTexture)if(Ut){if(se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Pt,et.width,et.height,et.depth),U)if(S.layerUpdates.size>0){const q=wc(et.width,et.height,S.format,S.type);for(const J of S.layerUpdates){const at=et.data.subarray(J*q/et.data.BYTES_PER_ELEMENT,(J+1)*q/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,et.width,et.height,1,pt,Rt,at)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,pt,Rt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,et.width,et.height,et.depth,0,pt,Rt,et.data);else if(S.isData3DTexture)Ut?(se&&e.texStorage3D(i.TEXTURE_3D,ht,Pt,et.width,et.height,et.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,pt,Rt,et.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,et.width,et.height,et.depth,0,pt,Rt,et.data);else if(S.isFramebufferTexture){if(se)if(Ut)e.texStorage2D(i.TEXTURE_2D,ht,Pt,et.width,et.height);else{let q=et.width,J=et.height;for(let at=0;at<ht;at++)e.texImage2D(i.TEXTURE_2D,at,Pt,q,J,0,pt,Rt,null),q>>=1,J>>=1}}else if(kt.length>0){if(Ut&&se){const q=It(kt[0]);e.texStorage2D(i.TEXTURE_2D,ht,Pt,q.width,q.height)}for(let q=0,J=kt.length;q<J;q++)mt=kt[q],Ut?U&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,pt,Rt,mt):e.texImage2D(i.TEXTURE_2D,q,Pt,pt,Rt,mt);S.generateMipmaps=!1}else if(Ut){if(se){const q=It(et);e.texStorage2D(i.TEXTURE_2D,ht,Pt,q.width,q.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Rt,et)}else e.texImage2D(i.TEXTURE_2D,0,Pt,pt,Rt,et);m(S)&&p($),yt.__version=K.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Z(A,S,B){if(S.image.length!==6)return;const $=Zt(A,S),j=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);const K=n.get(j);if(j.version!==K.__version||$===!0){e.activeTexture(i.TEXTURE0+B);const yt=Qt.getPrimaries(Qt.workingColorSpace),ot=S.colorSpace===Dn?null:Qt.getPrimaries(S.colorSpace),ft=S.colorSpace===Dn||yt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Yt=S.isCompressedTexture||S.image[0].isCompressedTexture,et=S.image[0]&&S.image[0].isDataTexture,pt=[];for(let J=0;J<6;J++)!Yt&&!et?pt[J]=v(S.image[J],!0,s.maxCubemapSize):pt[J]=et?S.image[J].image:S.image[J],pt[J]=re(S,pt[J]);const Rt=pt[0],Pt=r.convert(S.format,S.colorSpace),mt=r.convert(S.type),kt=y(S.internalFormat,Pt,mt,S.colorSpace),Ut=S.isVideoTexture!==!0,se=K.__version===void 0||$===!0,U=j.dataReady;let ht=w(S,Rt);vt(i.TEXTURE_CUBE_MAP,S);let q;if(Yt){Ut&&se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,kt,Rt.width,Rt.height);for(let J=0;J<6;J++){q=pt[J].mipmaps;for(let at=0;at<q.length;at++){const ut=q[at];S.format!==sn?Pt!==null?Ut?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,at,0,0,ut.width,ut.height,Pt,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,at,kt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,at,0,0,ut.width,ut.height,Pt,mt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,at,kt,ut.width,ut.height,0,Pt,mt,ut.data)}}}else{if(q=S.mipmaps,Ut&&se){q.length>0&&ht++;const J=It(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,kt,J.width,J.height)}for(let J=0;J<6;J++)if(et){Ut?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,pt[J].width,pt[J].height,Pt,mt,pt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,kt,pt[J].width,pt[J].height,0,Pt,mt,pt[J].data);for(let at=0;at<q.length;at++){const Xt=q[at].image[J].image;Ut?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,at+1,0,0,Xt.width,Xt.height,Pt,mt,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,at+1,kt,Xt.width,Xt.height,0,Pt,mt,Xt.data)}}else{Ut?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Pt,mt,pt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,kt,Pt,mt,pt[J]);for(let at=0;at<q.length;at++){const ut=q[at];Ut?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,at+1,0,0,Pt,mt,ut.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,at+1,kt,Pt,mt,ut.image[J])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),K.__version=j.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Q(A,S,B,$,j,K){const yt=r.convert(B.format,B.colorSpace),ot=r.convert(B.type),ft=y(B.internalFormat,yt,ot,B.colorSpace);if(!n.get(S).__hasExternalTextures){const et=Math.max(1,S.width>>K),pt=Math.max(1,S.height>>K);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,K,ft,et,pt,S.depth,0,yt,ot,null):e.texImage2D(j,K,ft,et,pt,0,yt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),qt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,j,n.get(B).__webglTexture,0,Bt(S)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,j,n.get(B).__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(A,S,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer){const $=S.depthTexture,j=$&&$.isDepthTexture?$.type:null,K=x(S.stencilBuffer,j),yt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=Bt(S);qt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,K,S.width,S.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,K,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,K,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,A)}else{const $=S.textures;for(let j=0;j<$.length;j++){const K=$[j],yt=r.convert(K.format,K.colorSpace),ot=r.convert(K.type),ft=y(K.internalFormat,yt,ot,K.colorSpace),Yt=Bt(S);B&&qt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,ft,S.width,S.height):qt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt,ft,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ft,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function dt(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const $=n.get(S.depthTexture).__webglTexture,j=Bt(S);if(S.depthTexture.format===Li)qt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(S.depthTexture.format===zi)qt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Dt(A){const S=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const $=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",j)};$.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=$}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");dt(S.__webglFramebuffer,A)}else if(B){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=i.createRenderbuffer(),xt(S.__webglDepthbuffer[$],A,!1);else{const j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,K)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),xt(S.__webglDepthbuffer,A,!1);else{const $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(A,S,B){const $=n.get(A);S!==void 0&&Q($.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Dt(A)}function Vt(A){const S=A.texture,B=n.get(A),$=n.get(S);A.addEventListener("dispose",C);const j=A.textures,K=A.isWebGLCubeRenderTarget===!0,yt=j.length>1;if(yt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=S.version,o.memory.textures++),K){B.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[ot]=[];for(let ft=0;ft<S.mipmaps.length;ft++)B.__webglFramebuffer[ot][ft]=i.createFramebuffer()}else B.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let ot=0;ot<S.mipmaps.length;ot++)B.__webglFramebuffer[ot]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(yt)for(let ot=0,ft=j.length;ot<ft;ot++){const Yt=n.get(j[ot]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&qt(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ot=0;ot<j.length;ot++){const ft=j[ot];B.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ot]);const Yt=r.convert(ft.format,ft.colorSpace),et=r.convert(ft.type),pt=y(ft.internalFormat,Yt,et,ft.colorSpace,A.isXRRenderTarget===!0),Rt=Bt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,pt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,B.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),xt(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),vt(i.TEXTURE_CUBE_MAP,S);for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0)for(let ft=0;ft<S.mipmaps.length;ft++)Q(B.__webglFramebuffer[ot][ft],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ft);else Q(B.__webglFramebuffer[ot],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(S)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let ot=0,ft=j.length;ot<ft;ot++){const Yt=j[ot],et=n.get(Yt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),vt(i.TEXTURE_2D,Yt),Q(B.__webglFramebuffer,A,Yt,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),m(Yt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ot=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,$.__webglTexture),vt(ot,S),S.mipmaps&&S.mipmaps.length>0)for(let ft=0;ft<S.mipmaps.length;ft++)Q(B.__webglFramebuffer[ft],A,S,i.COLOR_ATTACHMENT0,ot,ft);else Q(B.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,ot,0);m(S)&&p(ot),e.unbindTexture()}A.depthBuffer&&Dt(A)}function ne(A){const S=A.textures;for(let B=0,$=S.length;B<$;B++){const j=S[B];if(m(j)){const K=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,yt=n.get(j).__webglTexture;e.bindTexture(K,yt),p(K),e.unbindTexture()}}}const Wt=[],I=[];function ze(A){if(A.samples>0){if(qt(A)===!1){const S=A.textures,B=A.width,$=A.height;let j=i.COLOR_BUFFER_BIT;const K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(A),ot=S.length>1;if(ot)for(let ft=0;ft<S.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let ft=0;ft<S.length;ft++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[ft]);const Yt=n.get(S[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Yt,0)}i.blitFramebuffer(0,0,B,$,0,0,B,$,j,i.NEAREST),l===!0&&(Wt.length=0,I.length=0,Wt.push(i.COLOR_ATTACHMENT0+ft),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Wt.push(K),I.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Wt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let ft=0;ft<S.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,yt.__webglColorRenderbuffer[ft]);const Yt=n.get(S[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Bt(A){return Math.min(s.maxSamples,A.samples)}function qt(A){const S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ct(A){const S=o.render.frame;c.get(A)!==S&&(c.set(A,S),A.update())}function re(A,S){const B=A.colorSpace,$=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==kn&&B!==Dn&&(Qt.getTransfer(B)===ae?($!==sn||j!==ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function It(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(h.width=A.naturalWidth||A.width,h.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(h.width=A.displayWidth,h.height=A.displayHeight):(h.width=A.width,h.height=A.height),h}this.allocateTextureUnit=D,this.resetTextureUnits=M,this.setTexture2D=X,this.setTexture2DArray=Y,this.setTexture3D=O,this.setTextureCube=G,this.rebindTextures=Et,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=qt}function Um(i,t){function e(n,s=Dn){let r;const o=Qt.getTransfer(s);if(n===ln)return i.UNSIGNED_BYTE;if(n===ia)return i.UNSIGNED_SHORT_4_4_4_4;if(n===sa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$c)return i.BYTE;if(n===Jc)return i.SHORT;if(n===os)return i.UNSIGNED_SHORT;if(n===na)return i.INT;if(n===ci)return i.UNSIGNED_INT;if(n===an)return i.FLOAT;if(n===as)return i.HALF_FLOAT;if(n===Qc)return i.ALPHA;if(n===tl)return i.RGB;if(n===sn)return i.RGBA;if(n===el)return i.LUMINANCE;if(n===nl)return i.LUMINANCE_ALPHA;if(n===Li)return i.DEPTH_COMPONENT;if(n===zi)return i.DEPTH_STENCIL;if(n===rr)return i.RED;if(n===ra)return i.RED_INTEGER;if(n===il)return i.RG;if(n===oa)return i.RG_INTEGER;if(n===aa)return i.RGBA_INTEGER;if(n===Bs||n===ks||n===Gs||n===Hs)if(o===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Bs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Bs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yo||n===So||n===wo||n===bo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Eo||n===To||n===Ao)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Eo||n===To)return o===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ao)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Co||n===Ro||n===Po||n===Lo||n===Io||n===Do||n===Uo||n===No||n===Fo||n===Oo||n===zo||n===Bo||n===ko||n===Go)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Co)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ro)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Po)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Io)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Do)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===No)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ko)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Go)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vs||n===Ho||n===Vo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Vs)return o===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ho)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sl||n===Wo||n===Xo||n===qo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Oi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Nm extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ce extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fm={type:"move"};class Vr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(h,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=c.position.distanceTo(u.position),f=.02,g=.005;h.inputState.pinching&&d>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ce;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Om=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zm=`
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

}`;class Bm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ie,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Xe({vertexShader:Om,fragmentShader:zm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new it(new Hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class km extends Vi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,h=null,c=null,u=null,d=null,f=null,g=null;const v=new Bm,m=e.getContextAttributes();let p=null,y=null;const x=[],w=[],L=new tt;let C=null;const E=new Ke;E.layers.enable(1),E.viewport=new he;const P=new Ke;P.layers.enable(2),P.viewport=new he;const W=[E,P],_=new Nm;_.layers.enable(1),_.layers.enable(2);let M=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let Q=x[Z];return Q===void 0&&(Q=new Vr,x[Z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Z){let Q=x[Z];return Q===void 0&&(Q=new Vr,x[Z]=Q),Q.getGripSpace()},this.getHand=function(Z){let Q=x[Z];return Q===void 0&&(Q=new Vr,x[Z]=Q),Q.getHandSpace()};function z(Z){const Q=w.indexOf(Z.inputSource);if(Q===-1)return;const xt=x[Q];xt!==void 0&&(xt.update(Z.inputSource,Z.frame,h||o),xt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function X(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",Y);for(let Z=0;Z<x.length;Z++){const Q=w[Z];Q!==null&&(w[Z]=null,x[Z].disconnect(Q))}M=null,D=null,v.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,y=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(Z){h=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",X),s.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new li(f.framebufferWidth,f.framebufferHeight,{format:sn,type:ln,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,xt=null,dt=null;m.depth&&(dt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?zi:Li,xt=m.stencil?Oi:ci);const Dt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Dt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new li(d.textureWidth,d.textureHeight,{format:sn,type:ln,depthTexture:new xl(d.textureWidth,d.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y(Z){for(let Q=0;Q<Z.removed.length;Q++){const xt=Z.removed[Q],dt=w.indexOf(xt);dt>=0&&(w[dt]=null,x[dt].disconnect(xt))}for(let Q=0;Q<Z.added.length;Q++){const xt=Z.added[Q];let dt=w.indexOf(xt);if(dt===-1){for(let Et=0;Et<x.length;Et++)if(Et>=w.length){w.push(xt),dt=Et;break}else if(w[Et]===null){w[Et]=xt,dt=Et;break}if(dt===-1)break}const Dt=x[dt];Dt&&Dt.connect(xt)}}const O=new R,G=new R;function V(Z,Q,xt){O.setFromMatrixPosition(Q.matrixWorld),G.setFromMatrixPosition(xt.matrixWorld);const dt=O.distanceTo(G),Dt=Q.projectionMatrix.elements,Et=xt.projectionMatrix.elements,Vt=Dt[14]/(Dt[10]-1),ne=Dt[14]/(Dt[10]+1),Wt=(Dt[9]+1)/Dt[5],I=(Dt[9]-1)/Dt[5],ze=(Dt[8]-1)/Dt[0],Bt=(Et[8]+1)/Et[0],qt=Vt*ze,Ct=Vt*Bt,re=dt/(-ze+Bt),It=re*-ze;if(Q.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(It),Z.translateZ(re),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Dt[10]===-1)Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const A=Vt+re,S=ne+re,B=qt-It,$=Ct+(dt-It),j=Wt*ne/S*A,K=I*ne/S*A;Z.projectionMatrix.makePerspective(B,$,j,K,A,S),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function rt(Z,Q){Q===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(Q.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let Q=Z.near,xt=Z.far;v.texture!==null&&(v.depthNear>0&&(Q=v.depthNear),v.depthFar>0&&(xt=v.depthFar)),_.near=P.near=E.near=Q,_.far=P.far=E.far=xt,(M!==_.near||D!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),M=_.near,D=_.far);const dt=Z.parent,Dt=_.cameras;rt(_,dt);for(let Et=0;Et<Dt.length;Et++)rt(Dt[Et],dt);Dt.length===2?V(_,E,P):_.projectionMatrix.copy(E.projectionMatrix),lt(Z,_,dt)};function lt(Z,Q,xt){xt===null?Z.matrix.copy(Q.matrixWorld):(Z.matrix.copy(xt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(Q.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Yo*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let vt=null;function Zt(Z,Q){if(c=Q.getViewerPose(h||o),g=Q,c!==null){const xt=c.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let dt=!1;xt.length!==_.cameras.length&&(_.cameras.length=0,dt=!0);for(let Et=0;Et<xt.length;Et++){const Vt=xt[Et];let ne=null;if(f!==null)ne=f.getViewport(Vt);else{const I=u.getViewSubImage(d,Vt);ne=I.viewport,Et===0&&(t.setRenderTargetTextures(y,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),t.setRenderTarget(y))}let Wt=W[Et];Wt===void 0&&(Wt=new Ke,Wt.layers.enable(Et),Wt.viewport=new he,W[Et]=Wt),Wt.matrix.fromArray(Vt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Vt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(ne.x,ne.y,ne.width,ne.height),Et===0&&(_.matrix.copy(Wt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),dt===!0&&_.cameras.push(Wt)}const Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const Et=u.getDepthInformation(xt[0]);Et&&Et.isValid&&Et.texture&&v.init(t,Et,s.renderState)}}for(let xt=0;xt<x.length;xt++){const dt=w[xt],Dt=x[xt];dt!==null&&Dt!==void 0&&Dt.update(dt,Q,h||o)}vt&&vt(Z,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const te=new vl;te.setAnimationLoop(Zt),this.setAnimationLoop=function(Z){vt=Z},this.dispose=function(){}}}const Kn=new $e,Gm=new Ht;function Hm(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,pl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,x,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,w)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,x):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Le&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Le&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),x=y.envMap,w=y.envMapRotation;x&&(m.envMap.value=x,Kn.copy(w),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),m.envMapRotation.value.setFromMatrix4(Gm.makeRotationFromEuler(Kn)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Le&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vm(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const w=x.program;n.uniformBlockBinding(y,w)}function h(y,x){let w=s[y.id];w===void 0&&(g(y),w=c(y),s[y.id]=w,y.addEventListener("dispose",m));const L=x.program;n.updateUBOMapping(y,L);const C=t.render.frame;r[y.id]!==C&&(d(y),r[y.id]=C)}function c(y){const x=u();y.__bindingPointIndex=x;const w=i.createBuffer(),L=y.__size,C=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,L,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,w),w}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=s[y.id],w=y.uniforms,L=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let C=0,E=w.length;C<E;C++){const P=Array.isArray(w[C])?w[C]:[w[C]];for(let W=0,_=P.length;W<_;W++){const M=P[W];if(f(M,C,W,L)===!0){const D=M.__offset,z=Array.isArray(M.value)?M.value:[M.value];let X=0;for(let Y=0;Y<z.length;Y++){const O=z[Y],G=v(O);typeof O=="number"||typeof O=="boolean"?(M.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,D+X,M.__data)):O.isMatrix3?(M.__data[0]=O.elements[0],M.__data[1]=O.elements[1],M.__data[2]=O.elements[2],M.__data[3]=0,M.__data[4]=O.elements[3],M.__data[5]=O.elements[4],M.__data[6]=O.elements[5],M.__data[7]=0,M.__data[8]=O.elements[6],M.__data[9]=O.elements[7],M.__data[10]=O.elements[8],M.__data[11]=0):(O.toArray(M.__data,X),X+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,M.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,x,w,L){const C=y.value,E=x+"_"+w;if(L[E]===void 0)return typeof C=="number"||typeof C=="boolean"?L[E]=C:L[E]=C.clone(),!0;{const P=L[E];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return L[E]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function g(y){const x=y.uniforms;let w=0;const L=16;for(let E=0,P=x.length;E<P;E++){const W=Array.isArray(x[E])?x[E]:[x[E]];for(let _=0,M=W.length;_<M;_++){const D=W[_],z=Array.isArray(D.value)?D.value:[D.value];for(let X=0,Y=z.length;X<Y;X++){const O=z[X],G=v(O),V=w%L,rt=V%G.boundary,lt=V+rt;w+=rt,lt!==0&&L-lt<G.storage&&(w+=L-lt),D.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=w,w+=G.storage}}}const C=w%L;return C>0&&(w+=L-C),y.__size=w,y.__cache={},this}function v(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const w=o.indexOf(x.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:h,dispose:p}}class Wm{constructor(t={}){const{canvas:e=Ph(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=en,this.toneMapping=On,this.toneMappingExposure=1;const x=this;let w=!1,L=0,C=0,E=null,P=-1,W=null;const _=new he,M=new he;let D=null;const z=new gt(0);let X=0,Y=e.width,O=e.height,G=1,V=null,rt=null;const lt=new he(0,0,Y,O),vt=new he(0,0,Y,O);let Zt=!1;const te=new ua;let Z=!1,Q=!1;const xt=new Ht,dt=new Ht,Dt=new R,Et=new he,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function Wt(){return E===null?G:1}let I=n;function ze(b,N){return e.getContext(b,N)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ea}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",at,!1),e.addEventListener("webglcontextcreationerror",ut,!1),I===null){const N="webgl2";if(I=ze(N,b),I===null)throw ze(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Bt,qt,Ct,re,It,A,S,B,$,j,K,yt,ot,ft,Yt,et,pt,Rt,Pt,mt,kt,Ut,se,U;function ht(){Bt=new Kf(I),Bt.init(),Ut=new Um(I,Bt),qt=new Vf(I,Bt,t,Ut),Ct=new Lm(I),qt.reverseDepthBuffer&&Ct.buffers.depth.setReversed(!0),re=new jf(I),It=new gm,A=new Dm(I,Bt,Ct,It,qt,Ut,re),S=new Xf(x),B=new Zf(x),$=new su(I),se=new Gf(I,$),j=new $f(I,$,re,se),K=new tp(I,j,$,re),Pt=new Qf(I,qt,A),et=new Wf(It),yt=new mm(x,S,B,Bt,qt,se,et),ot=new Hm(x,It),ft=new _m,Yt=new bm(Bt),Rt=new kf(x,S,B,Ct,K,d,l),pt=new Rm(x,K,qt),U=new Vm(I,re,qt,Ct),mt=new Hf(I,Bt,re),kt=new Jf(I,Bt,re),re.programs=yt.programs,x.capabilities=qt,x.extensions=Bt,x.properties=It,x.renderLists=ft,x.shadowMap=pt,x.state=Ct,x.info=re}ht();const q=new km(x,I);this.xr=q,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=Bt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Bt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(b){b!==void 0&&(G=b,this.setSize(Y,O,!1))},this.getSize=function(b){return b.set(Y,O)},this.setSize=function(b,N,k=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=b,O=N,e.width=Math.floor(b*G),e.height=Math.floor(N*G),k===!0&&(e.style.width=b+"px",e.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(Y*G,O*G).floor()},this.setDrawingBufferSize=function(b,N,k){Y=b,O=N,G=k,e.width=Math.floor(b*k),e.height=Math.floor(N*k),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(_)},this.getViewport=function(b){return b.copy(lt)},this.setViewport=function(b,N,k,H){b.isVector4?lt.set(b.x,b.y,b.z,b.w):lt.set(b,N,k,H),Ct.viewport(_.copy(lt).multiplyScalar(G).round())},this.getScissor=function(b){return b.copy(vt)},this.setScissor=function(b,N,k,H){b.isVector4?vt.set(b.x,b.y,b.z,b.w):vt.set(b,N,k,H),Ct.scissor(M.copy(vt).multiplyScalar(G).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(b){Ct.setScissorTest(Zt=b)},this.setOpaqueSort=function(b){V=b},this.setTransparentSort=function(b){rt=b},this.getClearColor=function(b){return b.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(b=!0,N=!0,k=!0){let H=0;if(b){let F=!1;if(E!==null){const nt=E.texture.format;F=nt===aa||nt===oa||nt===ra}if(F){const nt=E.texture.type,ct=nt===ln||nt===ci||nt===os||nt===Oi||nt===ia||nt===sa,_t=Rt.getClearColor(),Mt=Rt.getClearAlpha(),bt=_t.r,Tt=_t.g,St=_t.b;ct?(f[0]=bt,f[1]=Tt,f[2]=St,f[3]=Mt,I.clearBufferuiv(I.COLOR,0,f)):(g[0]=bt,g[1]=Tt,g[2]=St,g[3]=Mt,I.clearBufferiv(I.COLOR,0,g))}else H|=I.COLOR_BUFFER_BIT}N&&(H|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),k&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",at,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),ft.dispose(),Yt.dispose(),It.dispose(),S.dispose(),B.dispose(),K.dispose(),se.dispose(),U.dispose(),yt.dispose(),q.dispose(),q.removeEventListener("sessionstart",wa),q.removeEventListener("sessionend",ba),Vn.stop()};function J(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function at(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const b=re.autoReset,N=pt.enabled,k=pt.autoUpdate,H=pt.needsUpdate,F=pt.type;ht(),re.autoReset=b,pt.enabled=N,pt.autoUpdate=k,pt.needsUpdate=H,pt.type=F}function ut(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Xt(b){const N=b.target;N.removeEventListener("dispose",Xt),me(N)}function me(b){De(b),It.remove(b)}function De(b){const N=It.get(b).programs;N!==void 0&&(N.forEach(function(k){yt.releaseProgram(k)}),b.isShaderMaterial&&yt.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,k,H,F,nt){N===null&&(N=Vt);const ct=F.isMesh&&F.matrixWorld.determinant()<0,_t=zl(b,N,k,H,F);Ct.setMaterial(H,ct);let Mt=k.index,bt=1;if(H.wireframe===!0){if(Mt=j.getWireframeAttribute(k),Mt===void 0)return;bt=2}const Tt=k.drawRange,St=k.attributes.position;let ee=Tt.start*bt,oe=(Tt.start+Tt.count)*bt;nt!==null&&(ee=Math.max(ee,nt.start*bt),oe=Math.min(oe,(nt.start+nt.count)*bt)),Mt!==null?(ee=Math.max(ee,0),oe=Math.min(oe,Mt.count)):St!=null&&(ee=Math.max(ee,0),oe=Math.min(oe,St.count));const de=oe-ee;if(de<0||de===1/0)return;se.setup(F,H,_t,k,Mt);let Be,Jt=mt;if(Mt!==null&&(Be=$.get(Mt),Jt=kt,Jt.setIndex(Be)),F.isMesh)H.wireframe===!0?(Ct.setLineWidth(H.wireframeLinewidth*Wt()),Jt.setMode(I.LINES)):Jt.setMode(I.TRIANGLES);else if(F.isLine){let wt=H.linewidth;wt===void 0&&(wt=1),Ct.setLineWidth(wt*Wt()),F.isLineSegments?Jt.setMode(I.LINES):F.isLineLoop?Jt.setMode(I.LINE_LOOP):Jt.setMode(I.LINE_STRIP)}else F.isPoints?Jt.setMode(I.POINTS):F.isSprite&&Jt.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Jt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const wt=F._multiDrawStarts,be=F._multiDrawCounts,jt=F._multiDrawCount,Je=Mt?$.get(Mt).bytesPerElement:1,ui=It.get(H).currentProgram.getUniforms();for(let ke=0;ke<jt;ke++)ui.setValue(I,"_gl_DrawID",ke),Jt.render(wt[ke]/Je,be[ke])}else if(F.isInstancedMesh)Jt.renderInstances(ee,de,F.count);else if(k.isInstancedBufferGeometry){const wt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,be=Math.min(k.instanceCount,wt);Jt.renderInstances(ee,de,be)}else Jt.render(ee,de)};function Kt(b,N,k){b.transparent===!0&&b.side===Pe&&b.forceSinglePass===!1?(b.side=Le,b.needsUpdate=!0,us(b,N,k),b.side=wn,b.needsUpdate=!0,us(b,N,k),b.side=Pe):us(b,N,k)}this.compile=function(b,N,k=null){k===null&&(k=b),m=Yt.get(k),m.init(N),y.push(m),k.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),b!==k&&b.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const H=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const nt=F.material;if(nt)if(Array.isArray(nt))for(let ct=0;ct<nt.length;ct++){const _t=nt[ct];Kt(_t,k,F),H.add(_t)}else Kt(nt,k,F),H.add(nt)}),y.pop(),m=null,H},this.compileAsync=function(b,N,k=null){const H=this.compile(b,N,k);return new Promise(F=>{function nt(){if(H.forEach(function(ct){It.get(ct).currentProgram.isReady()&&H.delete(ct)}),H.size===0){F(b);return}setTimeout(nt,10)}Bt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Ue=null;function dn(b){Ue&&Ue(b)}function wa(){Vn.stop()}function ba(){Vn.start()}const Vn=new vl;Vn.setAnimationLoop(dn),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(b){Ue=b,q.setAnimationLoop(b),b===null?Vn.stop():Vn.start()},q.addEventListener("sessionstart",wa),q.addEventListener("sessionend",ba),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,N,E),m=Yt.get(b,y.length),m.init(N),y.push(m),dt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),te.setFromProjectionMatrix(dt),Q=this.localClippingEnabled,Z=et.init(this.clippingPlanes,Q),v=ft.get(b,p.length),v.init(),p.push(v),q.enabled===!0&&q.isPresenting===!0){const nt=x.xr.getDepthSensingMesh();nt!==null&&lr(nt,N,-1/0,x.sortObjects)}lr(b,N,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(V,rt),ne=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,ne&&Rt.addToRenderList(v,b),this.info.render.frame++,Z===!0&&et.beginShadows();const k=m.state.shadowsArray;pt.render(k,b,N),Z===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=v.opaque,F=v.transmissive;if(m.setupLights(),N.isArrayCamera){const nt=N.cameras;if(F.length>0)for(let ct=0,_t=nt.length;ct<_t;ct++){const Mt=nt[ct];Ta(H,F,b,Mt)}ne&&Rt.render(b);for(let ct=0,_t=nt.length;ct<_t;ct++){const Mt=nt[ct];Ea(v,b,Mt,Mt.viewport)}}else F.length>0&&Ta(H,F,b,N),ne&&Rt.render(b),Ea(v,b,N);E!==null&&(A.updateMultisampleRenderTarget(E),A.updateRenderTargetMipmap(E)),b.isScene===!0&&b.onAfterRender(x,b,N),se.resetDefaultState(),P=-1,W=null,y.pop(),y.length>0?(m=y[y.length-1],Z===!0&&et.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function lr(b,N,k,H){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)k=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||te.intersectsSprite(b)){H&&Et.setFromMatrixPosition(b.matrixWorld).applyMatrix4(dt);const ct=K.update(b),_t=b.material;_t.visible&&v.push(b,ct,_t,k,Et.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||te.intersectsObject(b))){const ct=K.update(b),_t=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Et.copy(b.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Et.copy(ct.boundingSphere.center)),Et.applyMatrix4(b.matrixWorld).applyMatrix4(dt)),Array.isArray(_t)){const Mt=ct.groups;for(let bt=0,Tt=Mt.length;bt<Tt;bt++){const St=Mt[bt],ee=_t[St.materialIndex];ee&&ee.visible&&v.push(b,ct,ee,k,Et.z,St)}}else _t.visible&&v.push(b,ct,_t,k,Et.z,null)}}const nt=b.children;for(let ct=0,_t=nt.length;ct<_t;ct++)lr(nt[ct],N,k,H)}function Ea(b,N,k,H){const F=b.opaque,nt=b.transmissive,ct=b.transparent;m.setupLightsView(k),Z===!0&&et.setGlobalState(x.clippingPlanes,k),H&&Ct.viewport(_.copy(H)),F.length>0&&hs(F,N,k),nt.length>0&&hs(nt,N,k),ct.length>0&&hs(ct,N,k),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function Ta(b,N,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new li(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?as:ln,minFilter:ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const nt=m.state.transmissionRenderTarget[H.id],ct=H.viewport||_;nt.setSize(ct.z,ct.w);const _t=x.getRenderTarget();x.setRenderTarget(nt),x.getClearColor(z),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),ne&&Rt.render(k);const Mt=x.toneMapping;x.toneMapping=On;const bt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),Z===!0&&et.setGlobalState(x.clippingPlanes,H),hs(b,k,H),A.updateMultisampleRenderTarget(nt),A.updateRenderTargetMipmap(nt),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let St=0,ee=N.length;St<ee;St++){const oe=N[St],de=oe.object,Be=oe.geometry,Jt=oe.material,wt=oe.group;if(Jt.side===Pe&&de.layers.test(H.layers)){const be=Jt.side;Jt.side=Le,Jt.needsUpdate=!0,Aa(de,k,H,Be,Jt,wt),Jt.side=be,Jt.needsUpdate=!0,Tt=!0}}Tt===!0&&(A.updateMultisampleRenderTarget(nt),A.updateRenderTargetMipmap(nt))}x.setRenderTarget(_t),x.setClearColor(z,X),bt!==void 0&&(H.viewport=bt),x.toneMapping=Mt}function hs(b,N,k){const H=N.isScene===!0?N.overrideMaterial:null;for(let F=0,nt=b.length;F<nt;F++){const ct=b[F],_t=ct.object,Mt=ct.geometry,bt=H===null?ct.material:H,Tt=ct.group;_t.layers.test(k.layers)&&Aa(_t,N,k,Mt,bt,Tt)}}function Aa(b,N,k,H,F,nt){b.onBeforeRender(x,N,k,H,F,nt),b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(x,N,k,H,b,nt),F.transparent===!0&&F.side===Pe&&F.forceSinglePass===!1?(F.side=Le,F.needsUpdate=!0,x.renderBufferDirect(k,N,H,F,b,nt),F.side=wn,F.needsUpdate=!0,x.renderBufferDirect(k,N,H,F,b,nt),F.side=Pe):x.renderBufferDirect(k,N,H,F,b,nt),b.onAfterRender(x,N,k,H,F,nt)}function us(b,N,k){N.isScene!==!0&&(N=Vt);const H=It.get(b),F=m.state.lights,nt=m.state.shadowsArray,ct=F.state.version,_t=yt.getParameters(b,F.state,nt,N,k),Mt=yt.getProgramCacheKey(_t);let bt=H.programs;H.environment=b.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(b.isMeshStandardMaterial?B:S).get(b.envMap||H.environment),H.envMapRotation=H.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,bt===void 0&&(b.addEventListener("dispose",Xt),bt=new Map,H.programs=bt);let Tt=bt.get(Mt);if(Tt!==void 0){if(H.currentProgram===Tt&&H.lightsStateVersion===ct)return Ra(b,_t),Tt}else _t.uniforms=yt.getUniforms(b),b.onBeforeCompile(_t,x),Tt=yt.acquireProgram(_t,Mt),bt.set(Mt,Tt),H.uniforms=_t.uniforms;const St=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(St.clippingPlanes=et.uniform),Ra(b,_t),H.needsLights=kl(b),H.lightsStateVersion=ct,H.needsLights&&(St.ambientLightColor.value=F.state.ambient,St.lightProbe.value=F.state.probe,St.directionalLights.value=F.state.directional,St.directionalLightShadows.value=F.state.directionalShadow,St.spotLights.value=F.state.spot,St.spotLightShadows.value=F.state.spotShadow,St.rectAreaLights.value=F.state.rectArea,St.ltc_1.value=F.state.rectAreaLTC1,St.ltc_2.value=F.state.rectAreaLTC2,St.pointLights.value=F.state.point,St.pointLightShadows.value=F.state.pointShadow,St.hemisphereLights.value=F.state.hemi,St.directionalShadowMap.value=F.state.directionalShadowMap,St.directionalShadowMatrix.value=F.state.directionalShadowMatrix,St.spotShadowMap.value=F.state.spotShadowMap,St.spotLightMatrix.value=F.state.spotLightMatrix,St.spotLightMap.value=F.state.spotLightMap,St.pointShadowMap.value=F.state.pointShadowMap,St.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Tt,H.uniformsList=null,Tt}function Ca(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=Xs.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function Ra(b,N){const k=It.get(b);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function zl(b,N,k,H,F){N.isScene!==!0&&(N=Vt),A.resetTextureUnits();const nt=N.fog,ct=H.isMeshStandardMaterial?N.environment:null,_t=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:kn,Mt=(H.isMeshStandardMaterial?B:S).get(H.envMap||ct),bt=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Tt=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),St=!!k.morphAttributes.position,ee=!!k.morphAttributes.normal,oe=!!k.morphAttributes.color;let de=On;H.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(de=x.toneMapping);const Be=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Jt=Be!==void 0?Be.length:0,wt=It.get(H),be=m.state.lights;if(Z===!0&&(Q===!0||b!==W)){const qe=b===W&&H.id===P;et.setState(H,b,qe)}let jt=!1;H.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==be.state.version||wt.outputColorSpace!==_t||F.isBatchedMesh&&wt.batching===!1||!F.isBatchedMesh&&wt.batching===!0||F.isBatchedMesh&&wt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&wt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&wt.instancing===!1||!F.isInstancedMesh&&wt.instancing===!0||F.isSkinnedMesh&&wt.skinning===!1||!F.isSkinnedMesh&&wt.skinning===!0||F.isInstancedMesh&&wt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&wt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&wt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&wt.instancingMorph===!1&&F.morphTexture!==null||wt.envMap!==Mt||H.fog===!0&&wt.fog!==nt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==et.numPlanes||wt.numIntersection!==et.numIntersection)||wt.vertexAlphas!==bt||wt.vertexTangents!==Tt||wt.morphTargets!==St||wt.morphNormals!==ee||wt.morphColors!==oe||wt.toneMapping!==de||wt.morphTargetsCount!==Jt)&&(jt=!0):(jt=!0,wt.__version=H.version);let Je=wt.currentProgram;jt===!0&&(Je=us(H,N,F));let ui=!1,ke=!1,hr=!1;const fe=Je.getUniforms(),bn=wt.uniforms;if(Ct.useProgram(Je.program)&&(ui=!0,ke=!0,hr=!0),H.id!==P&&(P=H.id,ke=!0),ui||W!==b){qt.reverseDepthBuffer?(xt.copy(b.projectionMatrix),Ih(xt),Dh(xt),fe.setValue(I,"projectionMatrix",xt)):fe.setValue(I,"projectionMatrix",b.projectionMatrix),fe.setValue(I,"viewMatrix",b.matrixWorldInverse);const qe=fe.map.cameraPosition;qe!==void 0&&qe.setValue(I,Dt.setFromMatrixPosition(b.matrixWorld)),qt.logarithmicDepthBuffer&&fe.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&fe.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),W!==b&&(W=b,ke=!0,hr=!0)}if(F.isSkinnedMesh){fe.setOptional(I,F,"bindMatrix"),fe.setOptional(I,F,"bindMatrixInverse");const qe=F.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),fe.setValue(I,"boneTexture",qe.boneTexture,A))}F.isBatchedMesh&&(fe.setOptional(I,F,"batchingTexture"),fe.setValue(I,"batchingTexture",F._matricesTexture,A),fe.setOptional(I,F,"batchingIdTexture"),fe.setValue(I,"batchingIdTexture",F._indirectTexture,A),fe.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&fe.setValue(I,"batchingColorTexture",F._colorsTexture,A));const ur=k.morphAttributes;if((ur.position!==void 0||ur.normal!==void 0||ur.color!==void 0)&&Pt.update(F,k,Je),(ke||wt.receiveShadow!==F.receiveShadow)&&(wt.receiveShadow=F.receiveShadow,fe.setValue(I,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(bn.envMap.value=Mt,bn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(bn.envMapIntensity.value=N.environmentIntensity),ke&&(fe.setValue(I,"toneMappingExposure",x.toneMappingExposure),wt.needsLights&&Bl(bn,hr),nt&&H.fog===!0&&ot.refreshFogUniforms(bn,nt),ot.refreshMaterialUniforms(bn,H,G,O,m.state.transmissionRenderTarget[b.id]),Xs.upload(I,Ca(wt),bn,A)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Xs.upload(I,Ca(wt),bn,A),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&fe.setValue(I,"center",F.center),fe.setValue(I,"modelViewMatrix",F.modelViewMatrix),fe.setValue(I,"normalMatrix",F.normalMatrix),fe.setValue(I,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const qe=H.uniformsGroups;for(let dr=0,Gl=qe.length;dr<Gl;dr++){const Pa=qe[dr];U.update(Pa,Je),U.bind(Pa,Je)}}return Je}function Bl(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function kl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(b,N,k){It.get(b.texture).__webglTexture=N,It.get(b.depthTexture).__webglTexture=k;const H=It.get(b);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,N){const k=It.get(b);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,k=0){E=b,L=N,C=k;let H=!0,F=null,nt=!1,ct=!1;if(b){const Mt=It.get(b);if(Mt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(I.FRAMEBUFFER,null),H=!1;else if(Mt.__webglFramebuffer===void 0)A.setupRenderTarget(b);else if(Mt.__hasExternalTextures)A.rebindTextures(b,It.get(b.texture).__webglTexture,It.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const St=b.depthTexture;if(Mt.__boundDepthTexture!==St){if(St!==null&&It.has(St)&&(b.width!==St.image.width||b.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(b)}}const bt=b.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(ct=!0);const Tt=It.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Tt[N])?F=Tt[N][k]:F=Tt[N],nt=!0):b.samples>0&&A.useMultisampledRTT(b)===!1?F=It.get(b).__webglMultisampledFramebuffer:Array.isArray(Tt)?F=Tt[k]:F=Tt,_.copy(b.viewport),M.copy(b.scissor),D=b.scissorTest}else _.copy(lt).multiplyScalar(G).floor(),M.copy(vt).multiplyScalar(G).floor(),D=Zt;if(Ct.bindFramebuffer(I.FRAMEBUFFER,F)&&H&&Ct.drawBuffers(b,F),Ct.viewport(_),Ct.scissor(M),Ct.setScissorTest(D),nt){const Mt=It.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,Mt.__webglTexture,k)}else if(ct){const Mt=It.get(b.texture),bt=N||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Mt.__webglTexture,k||0,bt)}P=-1},this.readRenderTargetPixels=function(b,N,k,H,F,nt,ct){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=It.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ct!==void 0&&(_t=_t[ct]),_t){Ct.bindFramebuffer(I.FRAMEBUFFER,_t);try{const Mt=b.texture,bt=Mt.format,Tt=Mt.type;if(!qt.textureFormatReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-H&&k>=0&&k<=b.height-F&&I.readPixels(N,k,H,F,Ut.convert(bt),Ut.convert(Tt),nt)}finally{const Mt=E!==null?It.get(E).__webglFramebuffer:null;Ct.bindFramebuffer(I.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(b,N,k,H,F,nt,ct){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=It.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ct!==void 0&&(_t=_t[ct]),_t){const Mt=b.texture,bt=Mt.format,Tt=Mt.type;if(!qt.textureFormatReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=b.width-H&&k>=0&&k<=b.height-F){Ct.bindFramebuffer(I.FRAMEBUFFER,_t);const St=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,St),I.bufferData(I.PIXEL_PACK_BUFFER,nt.byteLength,I.STREAM_READ),I.readPixels(N,k,H,F,Ut.convert(bt),Ut.convert(Tt),0);const ee=E!==null?It.get(E).__webglFramebuffer:null;Ct.bindFramebuffer(I.FRAMEBUFFER,ee);const oe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Lh(I,oe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,St),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,nt),I.deleteBuffer(St),I.deleteSync(oe),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,N=null,k=0){b.isTexture!==!0&&(Ws("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,b=arguments[1]);const H=Math.pow(2,-k),F=Math.floor(b.image.width*H),nt=Math.floor(b.image.height*H),ct=N!==null?N.x:0,_t=N!==null?N.y:0;A.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,k,0,0,ct,_t,F,nt),Ct.unbindTexture()},this.copyTextureToTexture=function(b,N,k=null,H=null,F=0){b.isTexture!==!0&&(Ws("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,b=arguments[1],N=arguments[2],F=arguments[3]||0,k=null);let nt,ct,_t,Mt,bt,Tt;k!==null?(nt=k.max.x-k.min.x,ct=k.max.y-k.min.y,_t=k.min.x,Mt=k.min.y):(nt=b.image.width,ct=b.image.height,_t=0,Mt=0),H!==null?(bt=H.x,Tt=H.y):(bt=0,Tt=0);const St=Ut.convert(N.format),ee=Ut.convert(N.type);A.setTexture2D(N,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const oe=I.getParameter(I.UNPACK_ROW_LENGTH),de=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Be=I.getParameter(I.UNPACK_SKIP_PIXELS),Jt=I.getParameter(I.UNPACK_SKIP_ROWS),wt=I.getParameter(I.UNPACK_SKIP_IMAGES),be=b.isCompressedTexture?b.mipmaps[F]:b.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,be.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,be.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,_t),I.pixelStorei(I.UNPACK_SKIP_ROWS,Mt),b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,F,bt,Tt,nt,ct,St,ee,be.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,F,bt,Tt,be.width,be.height,St,be.data):I.texSubImage2D(I.TEXTURE_2D,F,bt,Tt,nt,ct,St,ee,be),I.pixelStorei(I.UNPACK_ROW_LENGTH,oe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,de),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Be),I.pixelStorei(I.UNPACK_SKIP_ROWS,Jt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,wt),F===0&&N.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Ct.unbindTexture()},this.copyTextureToTexture3D=function(b,N,k=null,H=null,F=0){b.isTexture!==!0&&(Ws("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,H=arguments[1]||null,b=arguments[2],N=arguments[3],F=arguments[4]||0);let nt,ct,_t,Mt,bt,Tt,St,ee,oe;const de=b.isCompressedTexture?b.mipmaps[F]:b.image;k!==null?(nt=k.max.x-k.min.x,ct=k.max.y-k.min.y,_t=k.max.z-k.min.z,Mt=k.min.x,bt=k.min.y,Tt=k.min.z):(nt=de.width,ct=de.height,_t=de.depth,Mt=0,bt=0,Tt=0),H!==null?(St=H.x,ee=H.y,oe=H.z):(St=0,ee=0,oe=0);const Be=Ut.convert(N.format),Jt=Ut.convert(N.type);let wt;if(N.isData3DTexture)A.setTexture3D(N,0),wt=I.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)A.setTexture2DArray(N,0),wt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const be=I.getParameter(I.UNPACK_ROW_LENGTH),jt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Je=I.getParameter(I.UNPACK_SKIP_PIXELS),ui=I.getParameter(I.UNPACK_SKIP_ROWS),ke=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,de.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,de.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Mt),I.pixelStorei(I.UNPACK_SKIP_ROWS,bt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Tt),b.isDataTexture||b.isData3DTexture?I.texSubImage3D(wt,F,St,ee,oe,nt,ct,_t,Be,Jt,de.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(wt,F,St,ee,oe,nt,ct,_t,Be,de.data):I.texSubImage3D(wt,F,St,ee,oe,nt,ct,_t,Be,Jt,de),I.pixelStorei(I.UNPACK_ROW_LENGTH,be),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,jt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Je),I.pixelStorei(I.UNPACK_SKIP_ROWS,ui),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ke),F===0&&N.generateMipmaps&&I.generateMipmap(wt),Ct.unbindTexture()},this.initRenderTarget=function(b){It.get(b).__webglFramebuffer===void 0&&A.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),Ct.unbindTexture()},this.resetState=function(){L=0,C=0,E=null,Ct.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ca?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===or?"display-p3":"srgb"}}class fa{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new gt(t),this.near=e,this.far=n}clone(){return new fa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Xm extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $e,this.environmentIntensity=1,this.environmentRotation=new $e,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class bl extends Ie{constructor(t=null,e=1,n=1,s,r,o,a,l,h=Oe,c=Oe,u,d){super(null,o,a,l,h,c,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ki extends pe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ti=new Ht,bc=new Ht,Ds=[],Ec=new hi,qm=new Ht,Qi=new it,ts=new Gn;class zn extends it{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ki(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,qm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new hi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ti),Ec.copy(t.boundingBox).applyMatrix4(Ti),this.boundingBox.union(Ec)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ti),ts.copy(t.boundingSphere).applyMatrix4(Ti),this.boundingSphere.union(ts)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Qi.geometry=this.geometry,Qi.material=this.material,Qi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ts.copy(this.boundingSphere),ts.applyMatrix4(n),t.ray.intersectsSphere(ts)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ti),bc.multiplyMatrices(n,Ti),Qi.matrixWorld=bc,Qi.raycast(t,Ds);for(let o=0,a=Ds.length;o<a;o++){const l=Ds[o];l.instanceId=r,l.object=this,e.push(l)}Ds.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ki(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new bl(new Float32Array(s*this.count),s,this.count,rr,an));const r=this.morphTexture.source.data.data;let o=0;for(let h=0;h<n.length;h++)o+=n[h];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ym extends Wi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Tc=new Ht,Ko=new la,Us=new Gn,Ns=new R;class Zm extends Se{constructor(t=new Te,e=new Ym){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(s),Us.radius+=r,t.ray.intersectsSphere(Us)===!1)return;Tc.copy(s).invert(),Ko.copy(t.ray).applyMatrix4(Tc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=n.index,u=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,v=f;g<v;g++){const m=h.getX(g);Ns.fromBufferAttribute(u,m),Ac(Ns,m,l,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,v=f;g<v;g++)Ns.fromBufferAttribute(u,g),Ac(Ns,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ac(i,t,e,n,s,r,o){const a=Ko.distanceSqToPoint(i);if(a<e){const l=new R;Ko.closestPointToPoint(i,l),l.applyMatrix4(n);const h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class un{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,h;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),h=n[s]-o,h<0)a=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const c=n[s],d=n[s+1]-c,f=(o-c)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new tt:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,s=[],r=[],o=[],a=new R,l=new Ht;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let h=Number.MAX_VALUE;const c=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);c<=h&&(h=c,n.set(1,0,0)),u<=h&&(h=u,n.set(0,1,0)),d<=h&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ye(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ye(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class pa extends un{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new tt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=h-this.aY;l=d*c-f*u+this.aX,h=d*u+f*c+this.aY}return n.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Km extends pa{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ma(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){s(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,c,u){let d=(o-r)/h-(a-r)/(h+c)+(a-o)/c,f=(a-o)/c-(l-o)/(c+u)+(l-a)/u;d*=c,f*=c,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Fs=new R,Wr=new ma,Xr=new ma,qr=new ma;class El extends un{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,c;this.closed||a>0?h=s[(a-1)%r]:(Fs.subVectors(s[0],s[1]).add(s[0]),h=Fs);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?c=s[(a+2)%r]:(Fs.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=Fs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(h.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(c),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Wr.initNonuniformCatmullRom(h.x,u.x,d.x,c.x,g,v,m),Xr.initNonuniformCatmullRom(h.y,u.y,d.y,c.y,g,v,m),qr.initNonuniformCatmullRom(h.z,u.z,d.z,c.z,g,v,m)}else this.curveType==="catmullrom"&&(Wr.initCatmullRom(h.x,u.x,d.x,c.x,this.tension),Xr.initCatmullRom(h.y,u.y,d.y,c.y,this.tension),qr.initCatmullRom(h.z,u.z,d.z,c.z,this.tension));return n.set(Wr.calc(l),Xr.calc(l),qr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Cc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function $m(i,t){const e=1-i;return e*e*t}function Jm(i,t){return 2*(1-i)*i*t}function jm(i,t){return i*i*t}function is(i,t,e,n){return $m(i,t)+Jm(i,e)+jm(i,n)}function Qm(i,t){const e=1-i;return e*e*e*t}function tg(i,t){const e=1-i;return 3*e*e*i*t}function eg(i,t){return 3*(1-i)*i*i*t}function ng(i,t){return i*i*i*t}function ss(i,t,e,n,s){return Qm(i,t)+tg(i,e)+eg(i,n)+ng(i,s)}class Tl extends un{constructor(t=new tt,e=new tt,n=new tt,s=new tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new tt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ss(t,s.x,r.x,o.x,a.x),ss(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ig extends un{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ss(t,s.x,r.x,o.x,a.x),ss(t,s.y,r.y,o.y,a.y),ss(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Al extends un{constructor(t=new tt,e=new tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new tt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sg extends un{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cl extends un{constructor(t=new tt,e=new tt,n=new tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new tt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(is(t,s.x,r.x,o.x),is(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rg extends un{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(is(t,s.x,r.x,o.x),is(t,s.y,r.y,o.y),is(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rl extends un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new tt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],h=s[o],c=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Cc(a,l.x,h.x,c.x,u.x),Cc(a,l.y,h.y,c.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new tt().fromArray(s))}return this}}var Rc=Object.freeze({__proto__:null,ArcCurve:Km,CatmullRomCurve3:El,CubicBezierCurve:Tl,CubicBezierCurve3:ig,EllipseCurve:pa,LineCurve:Al,LineCurve3:sg,QuadraticBezierCurve:Cl,QuadraticBezierCurve3:rg,SplineCurve:Rl});class og extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Rc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){const c=l[h];n&&n.equals(c)||(e.push(c),n=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Rc[s.type]().fromJSON(s))}return this}}class ag extends og{constructor(t){super(),this.type="Path",this.currentPoint=new tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Al(this.currentPoint.clone(),new tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Cl(this.currentPoint.clone(),new tt(t,e),new tt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Tl(this.currentPoint.clone(),new tt(t,e),new tt(n,s),new tt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Rl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+h,e+c,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const h=new pa(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);const c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ga extends Te{constructor(t=[new tt(0,-.5),new tt(.5,0),new tt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ye(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],h=[],c=1/e,u=new R,d=new tt,f=new R,g=new R,v=new R;let m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let y=0;y<=e;y++){const x=n+y*c*s,w=Math.sin(x),L=Math.cos(x);for(let C=0;C<=t.length-1;C++){u.x=t[C].x*w,u.y=t[C].y,u.z=t[C].x*L,o.push(u.x,u.y,u.z),d.x=y/e,d.y=C/(t.length-1),a.push(d.x,d.y);const E=l[3*C+0]*w,P=l[3*C+1],W=l[3*C+0]*L;h.push(E,P,W)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){const w=x+y*t.length,L=w,C=w+t.length,E=w+t.length+1,P=w+1;r.push(L,C,P),r.push(E,P,C)}this.setIndex(r),this.setAttribute("position",new ue(o,3)),this.setAttribute("uv",new ue(a,2)),this.setAttribute("normal",new ue(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ga(t.points,t.segments,t.phiStart,t.phiLength)}}class Un extends ga{constructor(t=1,e=1,n=4,s=8){const r=new ag;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Un(t.radius,t.length,t.capSegments,t.radialSegments)}}class ve extends Te{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const h=this;s=Math.floor(s),r=Math.floor(r);const c=[],u=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(c),this.setAttribute("position",new ue(u,3)),this.setAttribute("normal",new ue(d,3)),this.setAttribute("uv",new ue(f,2));function y(){const w=new R,L=new R;let C=0;const E=(e-t)/n;for(let P=0;P<=r;P++){const W=[],_=P/r,M=_*(e-t)+t;for(let D=0;D<=s;D++){const z=D/s,X=z*l+a,Y=Math.sin(X),O=Math.cos(X);L.x=M*Y,L.y=-_*n+m,L.z=M*O,u.push(L.x,L.y,L.z),w.set(Y,E,O).normalize(),d.push(w.x,w.y,w.z),f.push(z,1-_),W.push(g++)}v.push(W)}for(let P=0;P<s;P++)for(let W=0;W<r;W++){const _=v[W][P],M=v[W+1][P],D=v[W+1][P+1],z=v[W][P+1];t>0&&(c.push(_,M,z),C+=3),e>0&&(c.push(M,D,z),C+=3)}h.addGroup(p,C,0),p+=C}function x(w){const L=g,C=new tt,E=new R;let P=0;const W=w===!0?t:e,_=w===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,m*_,0),d.push(0,_,0),f.push(.5,.5),g++;const M=g;for(let D=0;D<=s;D++){const X=D/s*l+a,Y=Math.cos(X),O=Math.sin(X);E.x=W*O,E.y=m*_,E.z=W*Y,u.push(E.x,E.y,E.z),d.push(0,_,0),C.x=Y*.5+.5,C.y=O*.5*_+.5,f.push(C.x,C.y),g++}for(let D=0;D<s;D++){const z=L+D,X=M+D;w===!0?c.push(X,X+1,z):c.push(X+1,X,z),P+=3}h.addGroup(p,P,w===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ve(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class va extends Te{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),h(n),c(),this.setAttribute("position",new ue(r,3)),this.setAttribute("normal",new ue(r.slice(),3)),this.setAttribute("uv",new ue(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const x=new R,w=new R,L=new R;for(let C=0;C<e.length;C+=3)f(e[C+0],x),f(e[C+1],w),f(e[C+2],L),l(x,w,L,y)}function l(y,x,w,L){const C=L+1,E=[];for(let P=0;P<=C;P++){E[P]=[];const W=y.clone().lerp(w,P/C),_=x.clone().lerp(w,P/C),M=C-P;for(let D=0;D<=M;D++)D===0&&P===C?E[P][D]=W:E[P][D]=W.clone().lerp(_,D/M)}for(let P=0;P<C;P++)for(let W=0;W<2*(C-P)-1;W++){const _=Math.floor(W/2);W%2===0?(d(E[P][_+1]),d(E[P+1][_]),d(E[P][_])):(d(E[P][_+1]),d(E[P+1][_+1]),d(E[P+1][_]))}}function h(y){const x=new R;for(let w=0;w<r.length;w+=3)x.x=r[w+0],x.y=r[w+1],x.z=r[w+2],x.normalize().multiplyScalar(y),r[w+0]=x.x,r[w+1]=x.y,r[w+2]=x.z}function c(){const y=new R;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const w=m(y)/2/Math.PI+.5,L=p(y)/Math.PI+.5;o.push(w,1-L)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){const x=o[y+0],w=o[y+2],L=o[y+4],C=Math.max(x,w,L),E=Math.min(x,w,L);C>.9&&E<.1&&(x<.2&&(o[y+0]+=1),w<.2&&(o[y+2]+=1),L<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,x){const w=y*3;x.x=t[w+0],x.y=t[w+1],x.z=t[w+2]}function g(){const y=new R,x=new R,w=new R,L=new R,C=new tt,E=new tt,P=new tt;for(let W=0,_=0;W<r.length;W+=9,_+=6){y.set(r[W+0],r[W+1],r[W+2]),x.set(r[W+3],r[W+4],r[W+5]),w.set(r[W+6],r[W+7],r[W+8]),C.set(o[_+0],o[_+1]),E.set(o[_+2],o[_+3]),P.set(o[_+4],o[_+5]),L.copy(y).add(x).add(w).divideScalar(3);const M=m(L);v(C,_+0,y,M),v(E,_+2,x,M),v(P,_+4,w,M)}}function v(y,x,w,L){L<0&&y.x===1&&(o[x]=y.x-1),w.x===0&&w.z===0&&(o[x]=L/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new va(t.vertices,t.indices,t.radius,t.details)}}class _a extends va{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new _a(t.radius,t.detail)}}class Sn extends Te{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let h=0;const c=[],u=new R,d=new R,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const y=[],x=p/n;let w=0;p===0&&o===0?w=.5/e:p===n&&l===Math.PI&&(w=-.5/e);for(let L=0;L<=e;L++){const C=L/e;u.x=-t*Math.cos(s+C*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+C*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(C+w,1-x),y.push(h++)}c.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const x=c[p][y+1],w=c[p][y],L=c[p+1][y],C=c[p+1][y+1];(p!==0||o>0)&&f.push(x,w,C),(p!==n-1||l<Math.PI)&&f.push(w,L,C)}this.setIndex(f),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(v,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Fe extends Te{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],h=[],c=new R,u=new R,d=new R;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const v=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),c.x=t*Math.cos(v),c.y=t*Math.sin(v),d.subVectors(u,c).normalize(),l.push(d.x,d.y,d.z),h.push(g/s),h.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,y=(s+1)*f+g;o.push(v,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(l,3)),this.setAttribute("uv",new ue(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fe(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class zt extends Wi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rl,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class cg extends zt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new gt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new gt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new gt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Pl extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class lg extends Pl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Yr=new Ht,Pc=new R,Lc=new R;class hg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ua,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Pc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pc),Lc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lc),e.updateMatrixWorld(),Yr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Yr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ug extends hg{constructor(){super(new _l(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dg extends Pl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new ug}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Ic=new Ht;class fg{constructor(t,e,n=0,s=1/0){this.ray=new la(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ha,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ic.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ic),this}intersectObject(t,e=!0,n=[]){return $o(t,this,n,e),n.sort(Dc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)$o(t[s],this,n,e);return n.sort(Dc),n}}function Dc(i,t){return i.distance-t.distance}function $o(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)$o(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ea}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ea);class pg{constructor(t){T(this,"pointer",{ndc:new tt,screen:new tt,delta:new tt,down:!1,justDown:!1,justUp:!1,start:new tt,heldFor:0,lastActivity:performance.now()});T(this,"activeId",null);T(this,"pendingDown",!1);T(this,"pendingUp",!1);T(this,"prev",new tt);T(this,"accum",new tt);T(this,"raycaster",new fg);T(this,"block",t=>{t.preventDefault()});T(this,"onDown",t=>{if(this.activeId===null){this.activeId=t.pointerId,this.setFrom(t),this.prev.copy(this.pointer.screen),this.pointer.start.copy(this.pointer.screen),this.pointer.heldFor=0,this.pendingDown=!0,t.preventDefault();try{this.el.setPointerCapture(t.pointerId)}catch{}}});T(this,"onMove",t=>{this.activeId!==null&&t.pointerId!==this.activeId||(this.setFrom(t),this.activeId!==null&&(this.accum.add(this.pointer.screen.clone().sub(this.prev)),this.prev.copy(this.pointer.screen)),t.preventDefault())});T(this,"onUp",t=>{t.pointerId===this.activeId&&(this.activeId=null,this.pendingUp=!0,this.pointer.lastActivity=performance.now())});this.el=t;const e={passive:!1};t.addEventListener("pointerdown",this.onDown,e),t.addEventListener("pointermove",this.onMove,e),window.addEventListener("pointerup",this.onUp,e),window.addEventListener("pointercancel",this.onUp,e),t.addEventListener("touchstart",this.block,e),t.addEventListener("touchmove",this.block,e),t.addEventListener("gesturestart",this.block,e)}setFrom(t){const e=this.el.getBoundingClientRect(),n=t.clientX-e.left,s=t.clientY-e.top;this.pointer.screen.set(n,s),this.pointer.ndc.set(n/e.width*2-1,-(s/e.height)*2+1),this.pointer.lastActivity=performance.now()}beginFrame(t){const e=this.pointer;e.justDown=this.pendingDown,e.justUp=this.pendingUp,this.pendingDown&&(e.down=!0),this.pendingUp&&(e.down=!1),this.pendingDown=!1,this.pendingUp=!1,e.delta.copy(this.accum),this.accum.set(0,0),e.heldFor=e.down?e.heldFor+t:0}reset(){this.activeId=null,this.pendingDown=!1,this.pendingUp=this.pointer.down,this.accum.set(0,0)}worldOnPlane(t,e,n=new R){this.raycaster.setFromCamera(this.pointer.ndc,t);const{origin:s,direction:r}=this.raycaster.ray;if(Math.abs(r.y)<1e-5)return null;const o=(e-s.y)/r.y;return o<0?null:n.copy(s).addScaledVector(r,o)}static project(t,e,n,s){const r=t.clone().project(e);return new tt((r.x+1)/2*n,(-r.y+1)/2*s)}}const Ll="pokopoko.settings.v1",Zr={volume:.8,voice:!0,reduceMotion:!1,lowGraphics:!1};function mg(){try{const i=localStorage.getItem(Ll);if(!i)return{...Zr};const t=JSON.parse(i);return{...Zr,...t}}catch{return{...Zr}}}const $t=mg();function Kr(){try{localStorage.setItem(Ll,JSON.stringify($t))}catch{}}function qs(){return $t.reduceMotion||typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}function gg(){const i=navigator,t=i.hardwareConcurrency??4,e=i.deviceMemory??4,n=Math.max(screen.width,screen.height)*(window.devicePixelRatio||1);return t<=4||e<=3?"low":t>=6&&n>=1600?"high":"mid"}function vg(){try{const i=new URLSearchParams(location.search).get("tier");return i==="low"||i==="mid"||i==="high"?i:null}catch{return null}}let ns=vg()??gg();function si(){return $t.lowGraphics?"low":ns}function _g(){return ns==="high"?(ns="mid",!0):ns==="mid"?(ns="low",!0):!1}const xg={low:{berries:1150,waterSegments:48,particles:150,vines:520,maxPixelRatio:1.25,shadows:!1,decor:!1},mid:{berries:1700,waterSegments:80,particles:280,vines:820,maxPixelRatio:1.75,shadows:!0,decor:!0},high:{berries:2300,waterSegments:118,particles:440,vines:1150,maxPixelRatio:2,shadows:!0,decor:!0}};function qi(){return xg[si()]}let At=null,we=null,Bn=null,$r=0,Uc=0;function xa(){if(At){At.resume();return}const i=window.AudioContext||window.webkitAudioContext;if(!i)return;At=new i,we=At.createGain(),we.gain.value=$t.volume,we.connect(At.destination);const t=Math.floor(At.sampleRate*2);Bn=At.createBuffer(1,t,At.sampleRate);const e=Bn.getChannelData(0);for(let n=0;n<t;n++)e[n]=Math.random()*2-1;At.resume()}function tr(i){we&&At&&we.gain.setTargetAtTime(i,At.currentTime,.05)}function Il(){At&&At.state==="running"&&At.suspend()}function Mg(){At&&At.state==="suspended"&&At.resume()}function Ma(i=6){const t=performance.now();return t-Uc>50&&(Uc=t,$r=0),$r>=i?!1:($r++,!0)}function Dl(){if(!At||!Bn)return null;const i=At.createBufferSource();return i.buffer=Bn,i.loop=!0,i.playbackRate.value=.8+Math.random()*.4,i}const cn=(i,t)=>i+Math.random()*(t-i);function yg(i=1){if(!At||!we||!Ma(7))return;const t=At.currentTime,e=At.createOscillator(),n=At.createGain(),s=cn(280,660);e.type="sine",e.frequency.setValueAtTime(s*.55,t),e.frequency.exponentialRampToValueAtTime(s*cn(1.7,2.6),t+.055),n.gain.setValueAtTime(0,t),n.gain.linearRampToValueAtTime(.16*i,t+.006),n.gain.exponentialRampToValueAtTime(8e-4,t+cn(.09,.16)),e.connect(n).connect(we),e.start(t),e.stop(t+.24);const r=Dl();if(r){const o=At.createBiquadFilter();o.type="bandpass",o.frequency.value=cn(1800,4200),o.Q.value=3;const a=At.createGain();a.gain.setValueAtTime(.05*i,t),a.gain.exponentialRampToValueAtTime(5e-4,t+.05),r.connect(o).connect(a).connect(we),r.start(t),r.stop(t+.08)}}function Sg(i=1){if(!At||!we||!Ma(4))return;const t=At.currentTime,e=Dl();if(!e)return;const n=At.createBiquadFilter();n.type="bandpass",n.frequency.setValueAtTime(cn(700,1400),t),n.frequency.exponentialRampToValueAtTime(cn(2200,3600),t+.12),n.Q.value=1.1;const s=At.createGain();s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(.09*i,t+.02),s.gain.exponentialRampToValueAtTime(6e-4,t+cn(.16,.3)),e.connect(n).connect(s).connect(we),e.start(t),e.stop(t+.4)}function Jr(){if(!At||!we||!Ma(5))return;const i=At.currentTime,t=At.createOscillator(),e=At.createGain();t.type="triangle",t.frequency.setValueAtTime(cn(90,190),i),t.frequency.exponentialRampToValueAtTime(cn(55,95),i+.09),e.gain.setValueAtTime(.09,i),e.gain.exponentialRampToValueAtTime(6e-4,i+cn(.07,.13)),t.connect(e).connect(we),t.start(i),t.stop(i+.2)}function Ul(){if(!At||!we)return;const i=At.currentTime,t=At.createOscillator(),e=At.createGain();t.type="square",t.frequency.setValueAtTime(880,i),t.frequency.exponentialRampToValueAtTime(320,i+.05),e.gain.setValueAtTime(.1,i),e.gain.exponentialRampToValueAtTime(5e-4,i+.08),t.connect(e).connect(we),t.start(i),t.stop(i+.12)}function wg(){if(!At||!we)return;const i=At.currentTime;[523.25,659.25,783.99].forEach((t,e)=>{const n=At.createOscillator(),s=At.createGain();n.type="sine",n.frequency.value=t;const r=i+e*.11;s.gain.setValueAtTime(0,r),s.gain.linearRampToValueAtTime(.1,r+.02),s.gain.exponentialRampToValueAtTime(5e-4,r+.7),n.connect(s).connect(we),n.start(r),n.stop(r+.8)})}class cr{constructor(t){T(this,"gain",null);T(this,"nodes",[]);T(this,"target",0);this.build=t}ensure(){this.gain||!At||!we||(this.gain=At.createGain(),this.gain.gain.value=0,this.gain.connect(we),this.nodes=this.build(At,this.gain),this.nodes.forEach(t=>t.start()))}set(t){t<=.001&&!this.gain||(this.ensure(),!(!this.gain||!At)&&(Math.abs(t-this.target)<.002||(this.target=t,this.gain.gain.setTargetAtTime(t,At.currentTime,.09))))}stop(){this.set(0)}}const Jo=new cr((i,t)=>{const e=i.createBufferSource();e.buffer=Bn,e.loop=!0;const n=i.createBiquadFilter();n.type="lowpass",n.frequency.value=900;const s=i.createBiquadFilter();s.type="highpass",s.frequency.value=160;const r=i.createGain();r.gain.value=.5,e.connect(n).connect(s).connect(r).connect(t);const o=i.createOscillator();o.type="sawtooth",o.frequency.value=46;const a=i.createGain();a.gain.value=.055;const l=i.createBiquadFilter();return l.type="lowpass",l.frequency.value=220,o.connect(l).connect(a).connect(t),[e,o]}),jo=new cr((i,t)=>{const e=i.createOscillator();e.type="sawtooth",e.frequency.value=78;const n=i.createBiquadFilter();n.type="lowpass",n.frequency.value=420;const s=i.createGain();s.gain.value=.09,e.connect(n).connect(s).connect(t);const r=i.createOscillator();r.type="sine",r.frequency.value=7.5;const o=i.createGain();o.gain.value=.055,r.connect(o).connect(s.gain);const a=i.createBufferSource();a.buffer=Bn,a.loop=!0;const l=i.createBiquadFilter();l.type="bandpass",l.frequency.value=2400,l.Q.value=.7;const h=i.createGain();h.gain.value=.16;const c=i.createOscillator();c.type="sine",c.frequency.value=7.5;const u=i.createGain();return u.gain.value=.11,c.connect(u).connect(h.gain),a.connect(l).connect(h).connect(t),[e,r,a,c]}),Ys=new cr((i,t)=>{const e=i.createBufferSource();e.buffer=Bn,e.loop=!0;const n=i.createBiquadFilter();n.type="bandpass",n.frequency.value=700,n.Q.value=.6;const s=i.createGain();s.gain.value=.34,e.connect(n).connect(s).connect(t);const r=i.createOscillator();r.type="square",r.frequency.value=58;const o=i.createBiquadFilter();o.type="lowpass",o.frequency.value=300;const a=i.createGain();a.gain.value=.07,r.connect(o).connect(a).connect(t);const l=i.createOscillator();l.type="sine",l.frequency.value=11;const h=i.createGain();return h.gain.value=.16,l.connect(h).connect(s.gain),[e,r,l]}),Nl=new cr((i,t)=>{const e=i.createBufferSource();e.buffer=Bn,e.loop=!0;const n=i.createBiquadFilter();n.type="lowpass",n.frequency.value=420;const s=i.createGain();s.gain.value=.35,e.connect(n).connect(s).connect(t);const r=i.createOscillator();r.type="sine",r.frequency.value=.13;const o=i.createGain();return o.gain.value=.18,r.connect(o).connect(s.gain),[e,r]});let Nc="",Fc=0;function _n(i){if(!$t.voice||$t.volume<=.01||typeof speechSynthesis>"u")return;const t=performance.now();if(!(i===Nc&&t-Fc<6e3)){Nc=i,Fc=t;try{const e=new SpeechSynthesisUtterance(i);e.lang="ja-JP",e.rate=.95,e.pitch=1.35,e.volume=Math.min(1,$t.volume),speechSynthesis.cancel(),speechSynthesis.speak(e)}catch{}}}function Di(){try{typeof speechSynthesis<"u"&&speechSynthesis.cancel()}catch{}}const bg="http://www.w3.org/2000/svg";function Ln(i,t="0 0 48 48",e=""){return`<svg xmlns="${bg}" viewBox="${t}" fill="none" stroke-linecap="round" stroke-linejoin="round" ${e}>${i}</svg>`}const Ze={gear:Ln(`<circle cx="24" cy="24" r="7" stroke="#ffe9c9" stroke-width="3.4"/>
     <path d="M24 4v6M24 38v6M4 24h6M38 24h6M10 10l4.2 4.2M33.8 33.8L38 38M38 10l-4.2 4.2M14.2 33.8L10 38"
       stroke="#ffe9c9" stroke-width="3.4"/>`),sound:Ln(`<path d="M12 19h7l9-7v24l-9-7h-7z" fill="#ffe9c9"/>
     <path d="M33 18c2.6 2.4 2.6 9.6 0 12M38 13c5 5 5 17 0 22" stroke="#ffe9c9" stroke-width="3.2"/>`),mute:Ln(`<path d="M12 19h7l9-7v24l-9-7h-7z" fill="#ffe9c9"/>
     <path d="M33 18l11 12M44 18L33 30" stroke="#ffe9c9" stroke-width="3.4"/>`),pump:Ln(`<circle cx="24" cy="24" r="15" fill="#b81f38"/>
     <path d="M24 12v13M24 25l-7 8M24 25l7 8" stroke="#ffe9c9" stroke-width="4"/>
     <circle cx="24" cy="36" r="3.4" fill="#ffe9c9"/>`),replay:Ln(`<path d="M38 24a14 14 0 1 1-4.6-10.4" stroke="#a3132c" stroke-width="5"/>
     <path d="M36 6v10H26" stroke="#a3132c" stroke-width="5"/>`),newField:Ln(`<path d="M6 32c6-4 12-4 18 0s12 4 18 0" stroke="#2f7a6c" stroke-width="4.5"/>
     <path d="M6 40c6-4 12-4 18 0s12 4 18 0" stroke="#2f7a6c" stroke-width="4.5"/>
     <circle cx="15" cy="16" r="5" fill="#a3132c"/>
     <circle cx="27" cy="12" r="5" fill="#c8324c"/>
     <circle cx="36" cy="19" r="5" fill="#7d0f22"/>`),sandbox:Ln(`<circle cx="17" cy="30" r="6" fill="#a3132c"/>
     <circle cx="30" cy="33" r="5" fill="#c8324c"/>
     <circle cx="26" cy="20" r="4.5" fill="#7d0f22"/>
     <path d="M8 40h32" stroke="#2f7a6c" stroke-width="4"/>
     <path d="M22 9c0 4-4 4-4 8" stroke="#ffe9c9" stroke-width="3"/>
     <path d="M32 7c0 4-4 4-4 8" stroke="#ffe9c9" stroke-width="3"/>`),hand:Ln(`<path d="M22 40c-6 0-10-4-11-9l-3-8c-.8-2 .4-3.7 2.2-4 1.5-.3 2.8.5 3.5 1.9L16 25V9c0-2 1.4-3.2 3-3.2S22 7 22 9v10V6.5C22 4.5 23.4 3.3 25 3.3S28 4.5 28 6.5V19v-9c0-2 1.4-3.2 3-3.2S34 8 34 10v9.5V14c0-1.9 1.4-3 3-3s3 1.1 3 3v14c0 7-4.5 12-11 12z"
      fill="#ffe9c9" stroke="#8a5a2b" stroke-width="1.6"/>`)};class Eg{constructor(t,e,n){T(this,"beads",[]);T(this,"hint");T(this,"pumpBtn");T(this,"endcard");T(this,"sheet");T(this,"soundChip");T(this,"boot");T(this,"volSlider");T(this,"voiceTgl");T(this,"motionTgl");T(this,"lowTgl");this.cb=e,this.boot=document.getElementById("boot");const s=document.createElement("div");s.className="beads";for(let u=0;u<n;u++){const d=document.createElement("div");d.className="bead",s.appendChild(d),this.beads.push(d)}t.appendChild(s);const r=document.createElement("div");r.className="topbar",this.soundChip=document.createElement("button"),this.soundChip.className="chip",this.soundChip.setAttribute("aria-label","音のオン・オフ"),this.soundChip.innerHTML=$t.volume>.01?Ze.sound:Ze.mute,this.soundChip.onclick=()=>{$t.volume=$t.volume>.01?0:.8,tr($t.volume),$t.volume<=.01&&Di(),this.soundChip.innerHTML=$t.volume>.01?Ze.sound:Ze.mute,Kr(),this.syncSheet(),e.onSettingsChanged()};const o=document.createElement("button");o.className="chip",o.setAttribute("aria-label","せってい"),o.innerHTML=Ze.gear,o.onclick=()=>this.openSheet(!0),r.append(this.soundChip,o),t.appendChild(r),this.hint=document.createElement("div"),this.hint.className="hint",this.hint.innerHTML=`<div class="hint-inner">${Ze.hand}</div>`,t.appendChild(this.hint),this.pumpBtn=document.createElement("button"),this.pumpBtn.className="big-btn hidden",this.pumpBtn.setAttribute("aria-label","すいこむ"),this.pumpBtn.innerHTML=Ze.pump;const a=u=>{u.preventDefault(),u.stopPropagation(),this.pumpBtn.classList.add("pressed"),e.onPumpDown()},l=u=>{u.preventDefault(),u.stopPropagation(),this.pumpBtn.classList.remove("pressed"),e.onPumpUp()};this.pumpBtn.addEventListener("pointerdown",a),this.pumpBtn.addEventListener("pointerup",l),this.pumpBtn.addEventListener("pointercancel",l),this.pumpBtn.addEventListener("pointerleave",l),t.appendChild(this.pumpBtn),this.endcard=document.createElement("div"),this.endcard.className="endcard";const h=(u,d,f,g)=>{const v=document.createElement("button");return v.className="big-btn",v.style.width=`${f}px`,v.style.height=`${f}px`,v.setAttribute("aria-label",d),v.innerHTML=u,v.onclick=()=>{Ul(),g()},v},c=h(Ze.replay,"おなじ はたけで もういちど",128,e.onReplaySame);c.classList.add("calling"),this.endcard.append(h(Ze.newField,"べつの はたけ",88,e.onReplayNew),c,h(Ze.sandbox,"じゆうに あそぶ",88,e.onSandbox)),t.appendChild(this.endcard),this.sheet=this.buildSheet(),t.appendChild(this.sheet),this.layout()}buildSheet(){const t=document.createElement("div");t.className="sheet";const e=document.createElement("div");e.className="sheet-card",e.innerHTML=`
      <h2>せってい / Settings</h2>
      <p class="sub">保護者のかた向けの設定です。ゲームの進行はリセットされません。</p>`;const n=document.createElement("div");n.className="row",n.innerHTML="<label>おと の おおきさ<small>Volume</small></label>",this.volSlider=document.createElement("input"),this.volSlider.type="range",this.volSlider.min="0",this.volSlider.max="1",this.volSlider.step="0.05",this.volSlider.value=String($t.volume),this.volSlider.oninput=()=>{$t.volume=Number(this.volSlider.value),tr($t.volume),$t.volume<=.01&&Di(),this.soundChip.innerHTML=$t.volume>.01?Ze.sound:Ze.mute,Kr(),this.cb.onSettingsChanged()},n.appendChild(this.volSlider),e.appendChild(n);const s=(o,a,l,h)=>{const c=document.createElement("div");c.className="row",c.innerHTML=`<label>${o}<small>${a}</small></label>`;const u=document.createElement("button");return u.className="toggle"+(l()?" on":""),u.innerHTML="<i></i>",u.onclick=()=>{h(!l()),u.classList.toggle("on",l()),Kr(),this.cb.onSettingsChanged()},c.appendChild(u),e.appendChild(c),u};this.voiceTgl=s("こえ の あんない","Short spoken cues (Japanese)",()=>$t.voice,o=>{$t.voice=o,o||Di()}),this.motionTgl=s("うごき を よわく","Reduce motion — shorter camera moves",()=>$t.reduceMotion,o=>{$t.reduceMotion=o}),this.lowTgl=s("かるい モード","Low graphics — fewer particles, simpler water",()=>$t.lowGraphics,o=>{$t.lowGraphics=o});const r=document.createElement("button");return r.className="sheet-close",r.textContent="とじる / Close",r.onclick=()=>this.openSheet(!1),e.appendChild(r),t.appendChild(e),t.addEventListener("pointerdown",o=>{o.target===t&&this.openSheet(!1)}),t}syncSheet(){this.volSlider.value=String($t.volume),this.voiceTgl.classList.toggle("on",$t.voice),this.motionTgl.classList.toggle("on",$t.reduceMotion),this.lowTgl.classList.toggle("on",$t.lowGraphics)}openSheet(t){xa(),this.syncSheet(),this.sheet.classList.toggle("on",t)}get sheetOpen(){return this.sheet.classList.contains("on")}setStep(t){this.beads.forEach((e,n)=>{e.classList.toggle("done",n<t),e.classList.toggle("now",n===t)})}showHint(t,e,n){this.hint.style.left=`${t}px`,this.hint.style.top=`${e}px`;const s=this.hint.firstElementChild;s.className=`hint-inner hint-${n}`,this.hint.classList.add("on")}hideHint(){this.hint.classList.remove("on")}showPump(t){this.pumpBtn.classList.toggle("hidden",!t),this.pumpBtn.classList.toggle("calling",t)}setPumpCalling(t){this.pumpBtn.classList.toggle("calling",t)}showEndCard(t){this.endcard.classList.toggle("on",t)}bootProgress(t){const e=this.boot?.querySelector("i");e&&(e.style.width=`${Math.round(t*100)}%`)}hideBoot(){this.boot?.classList.add("gone"),window.setTimeout(()=>this.boot?.remove(),600)}layout(){const t=window.innerHeight>=window.innerWidth,e=window.innerWidth,n=window.innerHeight,s=Math.round(Math.min(Math.max(Math.min(e,n)*.26,96),156));this.pumpBtn.style.width=`${s}px`,this.pumpBtn.style.height=`${s}px`,t?(this.pumpBtn.style.left=`calc(50% - ${s/2}px)`,this.pumpBtn.style.right="auto",this.pumpBtn.style.bottom="calc(var(--safe-b) + 26px)"):(this.pumpBtn.style.left="auto",this.pumpBtn.style.right="calc(var(--safe-r) + 26px)",this.pumpBtn.style.bottom="calc(var(--safe-b) + 22px)")}pumpRect(){return this.pumpBtn.getBoundingClientRect()}get pumpVisible(){return!this.pumpBtn.classList.contains("hidden")}}const Lt=(i,t,e)=>i<t?t:i>e?e:i,le=(i,t,e)=>i+(t-i)*e,Ve=i=>{const t=Lt(i,0,1);return t*t*(3-2*t)},Ot=(i,t,e,n)=>t+(i-t)*Math.exp(-e*n);function Tg(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Ag(i){const t=Tg(i),e=()=>t();return e.range=(n,s)=>n+t()*(s-n),e.int=(n,s)=>Math.floor(n+t()*(s-n+1)),e.pick=n=>n[Math.floor(t()*n.length)%n.length],e.bell=()=>(t()+t()+t())/3,e}function rs(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=(f,g)=>{let v=f*374761393+g*668265263;return v=(v^v>>>13)*1274126177,((v^v>>>16)>>>0)/4294967296},a=s*s*(3-2*s),l=r*r*(3-2*r),h=o(e,n),c=o(e+1,n),u=o(e,n+1),d=o(e+1,n+1);return le(le(h,c,a),le(u,d,a),l)}const Nn=-.27,ti=.62,Cg=.145,Rg=[["#6fb3d0","#dff0f2","#ffd9a3"],["#7ba8c9","#f6e2c8","#ffcb8f"],["#5f9fb8","#e8eddc","#ffe0ae"],["#8fb6c6","#ffe6cf","#ffc98a"]],Pg=["#e8734a","#4f9ad6","#e2b83f","#8f6fc4","#5fb98a"];function Lg(i){const t=Ag(i),e=t.pick(Rg),n=t.range(6.2,7),s=t.range(5.2,5.9);return{seed:i,halfX:n,halfZ:s,corner:t.range(1.1,2.2),berryCount:0,paleRatio:t.range(.015,.05),skyTop:new gt(e[0]),skyBottom:new gt(e[1]),sunColor:new gt(e[2]),waterTint:new gt().setHSL(t.range(.47,.53),t.range(.36,.48),t.range(.15,.21)),truckColor:new gt(t.pick(Pg)),waveAmp:t.range(.028,.055),waveFreq:t.range(.28,.42),reelStart:new tt(t.range(-.6,.6),t.range(-.6,.6)).normalize(),rng:t}}function ls(i,t,e){const n=Math.abs(t)-(i.halfX-i.corner),s=Math.abs(e)-(i.halfZ-i.corner),r=Math.max(n,0),o=Math.max(s,0),a=Math.hypot(r,o)-i.corner,l=Math.min(Math.max(n,s),0)-i.corner;return-(a+l)}function Gi(i,t,e){const n=i.halfX-e,s=i.halfZ-e;t.x=Math.max(-n,Math.min(n,t.x)),t.y=Math.max(-s,Math.min(s,t.y));const r=Math.max(Math.abs(t.x)-(n-i.corner),0),o=Math.max(Math.abs(t.y)-(s-i.corner),0),a=Math.hypot(r,o);if(a>i.corner){const l=i.corner/a;t.x=Math.sign(t.x)*(n-i.corner+r*l),t.y=Math.sign(t.y)*(s-i.corner+o*l)}}function Ri(i,t,e){const n=t/i.halfX,s=e/i.halfZ;return-.06+.19*(n*.45+s*.55)+.05*Math.sin(n*4.1)*Math.cos(s*3.3)}function Fl(i){return new R(-i.halfX*.3,0,-i.halfZ-2.6)}function Ig(i){return new R(i.halfX*1.25,0,i.halfZ+6.2)}const Dg=`
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Ug=`
  uniform vec3 uTop;
  uniform vec3 uBottom;
  uniform vec3 uSun;
  uniform vec3 uSunDir;
  uniform float uDusk;
  varying vec3 vDir;
  void main() {
    float t = clamp(vDir.y * 2.1 + 0.14, 0.0, 1.0);
    vec3 col = mix(uBottom, uTop, pow(t, 0.7));
    float sun = pow(max(dot(normalize(vDir), normalize(uSunDir)), 0.0), 22.0);
    col += uSun * sun * (0.35 + uDusk * 0.85);
    // evening warmth creeps up from the horizon during the last scene
    col = mix(col, uSun * 0.95, uDusk * (1.0 - t) * 0.7);
    gl_FragColor = vec4(col, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;function Oc(i,t,e){const n=ls(i,t,e),s=rs(t*.22,e*.22),r=rs(t*.06+40,e*.06-12);if(n>=0)return Ri(i,t,e)+(s-.5)*.07;const o=-n,a=Ve(Lt(o/3.2,0,1))*1.7,l=Ve(Lt((o-3.2)/10,0,1));return a-l*.85+(s-.5)*.16+r*.9*l}class Ng{constructor(t,e){T(this,"group",new ce);T(this,"skyMat");T(this,"disposables",[]);this.v=t,this.group.name="terrain";const n=new Sn(300,24,16);this.skyMat=new Xe({uniforms:{uTop:{value:t.skyTop.clone()},uBottom:{value:t.skyBottom.clone()},uSun:{value:t.sunColor.clone()},uSunDir:{value:new R(.42,.34,.58).normalize()},uDusk:{value:0}},vertexShader:Dg,fragmentShader:Ug,side:Le,depthWrite:!1,fog:!1});const s=new it(n,this.skyMat);s.renderOrder=-100,s.frustumCulled=!1,this.group.add(s),this.disposables.push(n,this.skyMat);const r=Math.max(t.halfX,t.halfZ)*2+70,o=160,a=new Hn(r,r,o,o);a.rotateX(-Math.PI/2);const l=a.attributes.position,h=new Float32Array(l.count*3),c=new gt,u=new gt("#3b2e1d"),d=new gt("#5b4826"),f=new gt("#5d6d29"),g=new gt("#9a854c"),v=new gt("#6d8433"),m=new gt("#b3872e");for(let x=0;x<l.count;x++){const w=l.getX(x),L=l.getZ(x),C=ls(t,w,L),E=rs(w*.22,L*.22),P=rs(w*.06+40,L*.06-12),W=Oc(t,w,L);if(C>=0){const _=Ve(C/1.8);c.copy(g).lerp(d,_).lerp(f,(.35+E*.6)*_),c.lerp(u,.22*P*_)}else{const _=Lt(-C/3.2,0,1);c.copy(g).lerp(v,_).lerp(m,E*.5*_)}l.setY(x,W),h[x*3]=c.r,h[x*3+1]=c.g,h[x*3+2]=c.b}a.setAttribute("color",new pe(h,3)),a.computeVertexNormals();const p=new zt({vertexColors:!0,roughness:.94,metalness:0}),y=new it(a,p);y.receiveShadow=!0,y.name="ground",this.group.add(y),this.disposables.push(a,p),this.buildChannel(),e&&this.buildTrees()}buildChannel(){const t=this.v,e=new ce,n=Fl(t),s=new zt({color:"#7d7466",roughness:.9}),r=new zt({color:t.waterTint.clone().multiplyScalar(1.35),roughness:.18,metalness:.05});this.disposables.push(s,r);const o=7.5,a=.95,l=new Gt(a*2,1.5,o),h=new it(l,s);h.position.set(n.x,.35,n.z-o/2-.4),h.receiveShadow=!0,e.add(h),this.disposables.push(l);const c=new Gt(a*2-.08,.06,o-.1),u=new it(c,r);u.position.set(n.x,.92,n.z-o/2-.4),e.add(u),this.disposables.push(c);const d=new Gt(.34,.22,o);for(const f of[-a-.15,a+.15]){const g=new it(d,s);g.position.set(n.x+f,1.05,n.z-o/2-.4),g.castShadow=!0,g.receiveShadow=!0,e.add(g)}this.disposables.push(d),this.group.add(e)}buildTrees(){const t=this.v,e=t.rng,n=130,s=new ve(.24,.38,2.4,5),r=new _a(1,1),o=r.attributes.position;for(let p=0;p<o.count;p++){const y=o.getX(p),x=o.getY(p),w=o.getZ(p),L=.82+rs(y*3+5,w*3+9)*.4;o.setXYZ(p,y*L*1.1,x*L*.86,w*L*1.1)}r.computeVertexNormals();const a=new zt({color:"#4a3a2c",roughness:.95}),l=new zt({color:"#ffffff",roughness:.9}),h=new zn(s,a,n),c=new zn(r,l,n);c.instanceColor=new ki(new Float32Array(n*3),3);const u=new Ht,d=new hn,f=new R,g=new R,v=new gt,m=["#5f7a34","#8a6a2c","#a85a2c","#6d8a3f","#c08a35"];for(let p=0;p<n;p++){const y=p/n*Math.PI*2+e.range(-.34,.34),x=Math.max(t.halfX,t.halfZ)+11+e.range(0,46)*(.45+e.bell()),w=Math.cos(y)*x*1.15,L=Math.sin(y)*x,C=Oc(t,w,L),E=e.range(3.2,7.6);g.set(w,C,L),d.identity(),f.set(1,E/2.4,1),u.compose(g,d,f),h.setMatrixAt(p,u);const P=e.range(1.5,3.3);g.set(w,C+E*.62+P*.5,L),d.setFromAxisAngle(new R(0,1,0),e.range(0,6.28)),f.set(P,P*e.range(.85,1.2),P),u.compose(g,d,f),c.setMatrixAt(p,u),v.set(e.pick(m)).offsetHSL(0,e.range(-.06,.06),e.range(-.07,.07)),c.setColorAt(p,v)}h.instanceMatrix.needsUpdate=!0,c.instanceMatrix.needsUpdate=!0,c.instanceColor&&(c.instanceColor.needsUpdate=!0),h.frustumCulled=!1,c.frustumCulled=!1,h.castShadow=!0,c.castShadow=!0,c.receiveShadow=!0,this.group.add(h,c),this.disposables.push(s,r,a,l)}setDusk(t){this.skyMat.uniforms.uDusk.value=t}dispose(){this.disposables.forEach(t=>t.dispose())}}const Pi=4,Fg=`
  uniform float uTime;
  uniform float uLevel;
  uniform float uAmp;
  uniform float uFreq;
  uniform vec4  uDisturb[${Pi}];   // xz = centre, z = strength, w = radius
  uniform float uDetail;

  varying vec3 vWorld;
  varying vec3 vNormal2;
  varying float vRipple;
  varying float vDepthV;

  float waveAt(vec2 p) {
    float h =
        sin(p.x * uFreq + uTime * 0.85) * 0.50
      + sin(p.y * uFreq * 1.27 - uTime * 0.63) * 0.34
      + sin((p.x + p.y) * uFreq * 0.71 + uTime * 1.21) * 0.26
      + sin((p.x - p.y * 0.6) * uFreq * 2.3 + uTime * 1.9) * 0.12 * uDetail;
    return h * uAmp;
  }

  // A wake rings *outward* from whatever is stirring the water. The
  // smoothstep is what makes the centre calm: without it every disturber is
  // a piston under its own source, and the reel, the nozzle and the boom
  // buoys all buzz vertically on their own ripples.
  float rippleAt(vec2 p) {
    float r = 0.0;
    for (int i = 0; i < ${Pi}; i++) {
      vec4 d = uDisturb[i];
      if (d.z <= 0.001) continue;
      float dist = distance(p, d.xy);
      float fall = exp(-(dist * dist) / max(d.w * d.w, 0.0001));
      float birth = smoothstep(0.0, max(d.w * 0.32, 0.35), dist);
      r += d.z * fall * birth * sin(dist * 5.2 - uTime * 8.5);
    }
    return r;
  }

  void main() {
    vec3 p = position;
    vec2 xz = vec2(p.x, -p.y);           // plane is rotated onto XZ below
    float rip = rippleAt(xz);
    float h = waveAt(xz) + rip;
    vRipple = abs(rip);

    // normal from the same field, so lighting and shape never disagree
    float e = 0.45;
    float hx = waveAt(xz + vec2(e, 0.0)) + rippleAt(xz + vec2(e, 0.0));
    float hz = waveAt(xz + vec2(0.0, e)) + rippleAt(xz + vec2(0.0, e));
    vec3 n = normalize(vec3(-(hx - h) / e, 1.0, -(hz - h) / e));
    vNormal2 = n;

    p.z += h;                             // local z becomes world y after rotation
    vec4 world = modelMatrix * vec4(p, 1.0);
    world.y = uLevel + h;
    vWorld = world.xyz;
    vec4 mv = viewMatrix * world;
    vDepthV = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`,Og=`
  precision highp float;

  uniform float uTime;
  uniform float uLevel;
  uniform vec3  uTint;
  uniform vec3  uDeep;
  uniform vec3  uShallow;
  uniform vec3  uSky;
  uniform vec3  uSunDir;
  uniform vec3  uSunColor;
  uniform vec2  uHalf;
  uniform float uCorner;
  uniform float uOpacity;
  uniform sampler2D uRaft;
  uniform float uRaftAmount;
  uniform vec3  uFogColor;
  uniform vec2  uFogRange;

  varying vec3 vWorld;
  varying vec3 vNormal2;
  varying float vRipple;
  varying float vDepthV;

  // must mirror floorHeight() in layout.ts
  float floorHeight(vec2 p) {
    float nx = p.x / uHalf.x;
    float nz = p.y / uHalf.y;
    return -0.06 + 0.19 * (nx * 0.45 + nz * 0.55) + 0.05 * sin(nx * 4.1) * cos(nz * 3.3);
  }

  // must mirror bogInset() in layout.ts
  float bogInset(vec2 p) {
    vec2 a = abs(p) - (uHalf - uCorner);
    vec2 q = max(a, 0.0);
    float outside = length(q) - uCorner;
    float inside = min(max(a.x, a.y), 0.0) - uCorner;
    return -(outside + inside);
  }

  // Cheap cell pattern: the surface of a packed raft is a field of little
  // domes, not a flat red sheet. Two hashes give per-cell size and shade.
  vec2 hash2(vec2 c) {
    float n = sin(dot(c, vec2(41.3, 289.1))) * 43758.5453;
    return fract(vec2(n, n * 1.371));
  }

  float raftBumps(vec2 p, out float shade) {
    vec2 g = p / 0.34;
    vec2 gi = floor(g);
    vec2 gf = fract(g);
    float best = 1e9;
    shade = 0.0;
    for (int oy = -1; oy <= 1; oy++) {
      for (int ox = -1; ox <= 1; ox++) {
        vec2 o = vec2(float(ox), float(oy));
        vec2 h = hash2(gi + o);
        float d = length(gf - (o + h));
        if (d < best) {
          best = d;
          shade = h.y;
        }
      }
    }
    return best;
  }

  void main() {
    vec2 p = vWorld.xz;
    float inset = bogInset(p);
    if (inset < 0.0) discard;

    float depth = uLevel - floorHeight(p);
    if (depth <= 0.004) discard;

    vec3 view = normalize(cameraPosition - vWorld);
    vec3 n = normalize(vNormal2);
    float fres = pow(1.0 - clamp(dot(n, view), 0.0, 1.0), 3.0);

    // shallow water shows the peat + vines beneath; deep water goes teal
    float dTerm = clamp(depth / 0.55, 0.0, 1.0);
    // shallow water over peat is brown-green; deeper goes to the tint
    vec3 base = mix(uShallow, uTint, dTerm);
    vec3 col = mix(base, uSky, fres * 0.16);

    // sun glint
    vec3 h = normalize(uSunDir + view);
    float spec = pow(max(dot(n, h), 0.0), 200.0);
    col += uSunColor * spec * 0.35;

    // churn foam where something is stirring the water
    float foam = smoothstep(0.06, 0.2, vRipple);
    col = mix(col, vec3(0.86, 0.9, 0.88), foam * 0.42);

    // shoreline lace
    float shore = 1.0 - smoothstep(0.0, 0.55, depth);
    col = mix(col, vec3(0.72, 0.72, 0.62), shore * 0.3);
    float edge = smoothstep(0.0, 1.5, inset);

    float alpha = uOpacity * mix(0.34, 0.72, dTerm);
    alpha = mix(alpha, min(1.0, alpha + 0.25), foam);
    alpha *= edge;
    alpha = clamp(alpha + fres * 0.1, 0.0, 1.0);

    // ---- the floating raft, painted straight into the surface ----
    if (uRaftAmount > 0.001) {
      vec2 ruv = (p + uHalf + vec2(2.0)) / ((uHalf + vec2(2.0)) * 2.0);
      float dens = texture2D(uRaft, ruv).r * uRaftAmount;
      if (dens > 0.4) {
        float shade;
        float cellD = raftBumps(p, shade);
        // domes: bright toward the cell centre, dark in the crevices
        float dome = smoothstep(0.42, 0.03, cellD);
        vec3 skin = mix(vec3(0.30, 0.017, 0.045), vec3(0.62, 0.05, 0.075), shade);
        skin *= 0.55 + dome * 0.85;
        // a wet highlight riding the top of each dome
        // the wet highlight belongs to a *packed* raft; fading it with cover
        // stops the outer fringe reading as a pink glow on open water
        skin += vec3(1.0, 0.85, 0.8) * pow(dome, 6.0) * 0.28 * smoothstep(0.55, 1.0, dens);
        // Only fill in where the fruit is genuinely crowded. A linear ramp
        // put a red halo around every isolated berry, which read as a glow
        // rather than as neighbours packed too close to see between.
        float cover = smoothstep(0.52, 1.0, dens);
        // crevices between fruit still show a little dark water
        cover *= 0.35 + 0.65 * smoothstep(0.5, 0.12, cellD);
        col = mix(col, skin, cover);
        alpha = max(alpha, cover);
      }
    }

    gl_FragColor = vec4(col, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    // matched by hand to the scene fog: three's fog chunks assume the
    // standard varying set, which this shader does not have
    float fogF = smoothstep(uFogRange.x, uFogRange.y, vDepthV);
    gl_FragColor.rgb = mix(gl_FragColor.rgb, uFogColor, fogF);
  }
`;class zg{constructor(t,e,n){T(this,"mesh");T(this,"mat");T(this,"disturb",new Array(Pi));T(this,"level",Nn);T(this,"targetLevel",Nn);T(this,"time",0);T(this,"amp");T(this,"freq");this.v=t,this.amp=t.waveAmp,this.freq=t.waveFreq;for(let r=0;r<Pi;r++)this.disturb[r]=new he(0,0,0,1);const s=new Hn(t.halfX*2+2,t.halfZ*2+2,e,Math.round(e*(t.halfZ/t.halfX)));s.rotateX(-Math.PI/2),this.mat=new Xe({uniforms:{uTime:{value:0},uLevel:{value:this.level},uAmp:{value:this.amp},uFreq:{value:this.freq},uDetail:{value:n},uDisturb:{value:this.disturb},uTint:{value:t.waterTint.clone()},uDeep:{value:t.waterTint.clone().multiplyScalar(.55)},uShallow:{value:new gt("#4a3d1e").lerp(t.waterTint,.45)},uSky:{value:t.skyBottom.clone()},uSunDir:{value:new R(.42,.7,.58).normalize()},uSunColor:{value:t.sunColor.clone()},uHalf:{value:new tt(t.halfX,t.halfZ)},uCorner:{value:t.corner},uOpacity:{value:.9},uRaft:{value:null},uRaftAmount:{value:0},uFogColor:{value:new gt("#ffffff")},uFogRange:{value:new tt(1e6,2e6)}},vertexShader:Fg,fragmentShader:Og,transparent:!0,depthWrite:!1,side:Pe}),this.mesh=new it(s,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=6,this.mesh.name="water"}setFog(t,e,n){this.mat.uniforms.uFogColor.value.copy(t),this.mat.uniforms.uFogRange.value.set(e,n)}setRaft(t,e){this.mat.uniforms.uRaft.value=t,this.mat.uniforms.uRaftAmount.value=e}heightAt(t,e){const n=this.time,s=this.freq,r=Math.sin(t*s+n*.85)*.5+Math.sin(e*s*1.27-n*.63)*.34+Math.sin((t+e)*s*.71+n*1.21)*.26;let o=0;for(let a=0;a<Pi;a++){const l=this.disturb[a];if(l.z<=.001)continue;const h=Math.hypot(t-l.x,e-l.y),c=Math.exp(-(h*h)/Math.max(l.w*l.w,1e-4)),u=Ve(h/Math.max(l.w*.32,.35));o+=l.z*c*u*Math.sin(h*5.2-n*8.5)}return this.level+r*this.amp+o}setDisturb(t,e,n,s,r){t<0||t>=Pi||this.disturb[t].set(e,n,s,r)}fadeDisturb(t,e,n=3){const s=this.disturb[t];s.z=Ot(s.z,0,n,e)}get flood(){return Lt((this.level-Nn)/(ti-Nn),0,1)}update(t){this.time+=t;const e=this.targetLevel>this.level?.55:.18;this.level=Ot(this.level,this.targetLevel,e,t),this.mat.uniforms.uTime.value=this.time,this.mat.uniforms.uLevel.value=this.level,this.mesh.position.y=0}setQuality(t,e){this.mat.uniforms.uDetail.value=t,this.mat.uniforms.uOpacity.value=e}dispose(){this.mesh.geometry.dispose(),this.mat.dispose()}get variant(){return this.v}}function Bg(i,t,e,n,s,r,o,a){const l=i.length/3,h=new R(0,1,0),c=new R(-n.y,0,n.x).normalize();for(let u=0;u<=a;u++){const d=u/a,f=e.x+n.x*s*d,g=e.z+n.y*s*d,v=e.y+r*Math.sin(d*Math.PI*.82)-d*d*r*.25,m=o*(1-d*.72);for(let p=0;p<3;p++){const y=p/3*Math.PI*2+d*.6,x=Math.cos(y)*m,w=Math.sin(y)*m;i.push(f+c.x*x+h.x*w,v+c.y*x+h.y*w,g+c.z*x+h.z*w)}}for(let u=0;u<a;u++){const d=l+u*3,f=l+(u+1)*3;for(let g=0;g<3;g++){const v=(g+1)%3;t.push(d+g,f+g,d+v),t.push(d+v,f+g,f+v)}}}function kg(i,t,e,n,s,r){const o=i.length/3,a=new R(n.x,Math.sin(r),n.y).normalize(),l=new R(-n.y,0,n.x).normalize().multiplyScalar(s*.34),h=new R().crossVectors(a,l).normalize().multiplyScalar(s*.05),c=a.clone().multiplyScalar(s),u=a.clone().multiplyScalar(s*.45);[e.clone(),e.clone().add(u).add(l).add(h),e.clone().add(c),e.clone().add(u).sub(l).add(h),e.clone().add(u).add(l).sub(h),e.clone().add(u).sub(l).sub(h)].forEach(f=>i.push(f.x,f.y,f.z)),t.push(o,o+1,o+2,o+2,o+3,o),t.push(o,o+2,o+4,o+2,o+5,o)}function Gg(i){const t=[],e=[];let n=i;const s=()=>(n=n*1664525+1013904223>>>0,n/4294967296),r=6;for(let a=0;a<r;a++){const l=a/r*Math.PI*2+s()*.9,h=new tt(Math.cos(l),Math.sin(l)),c=.34+s()*.26;Bg(t,e,new R(0,.02,0),h,c,.13+s()*.12,.019+s()*.011,2);for(let u=0;u<2;u++){const d=.4+u*.38;kg(t,e,new R(h.x*c*d,.05+.12*Math.sin(d*2.4),h.y*c*d),new tt(Math.cos(l+s()*1.4-.7),Math.sin(l+s()*1.4-.7)),.085+s()*.05,.5+s()*.7)}}const o=new Te;return o.setAttribute("position",new ue(t,3)),o.setIndex(e),o.computeVertexNormals(),o}class Hg{constructor(t,e){T(this,"mesh");T(this,"mat");T(this,"geo");T(this,"uniforms",{uTime:{value:0},uSway:{value:.01},uWet:{value:0}});T(this,"anchors",[]);this.geo=Gg(t.seed^40503),this.mat=new zt({color:"#ffffff",roughness:.82,metalness:0,vertexColors:!1}),this.mat.onBeforeCompile=u=>{u.uniforms.uTime=this.uniforms.uTime,u.uniforms.uSway=this.uniforms.uSway,u.uniforms.uWet=this.uniforms.uWet,u.vertexShader=u.vertexShader.replace("#include <common>",`#include <common>
           uniform float uTime;
           uniform float uSway;`).replace("#include <begin_vertex>",`#include <begin_vertex>
           vec3 iPos = instanceMatrix[3].xyz;
           float amt = uSway * smoothstep(-0.02, 0.34, transformed.y);
           transformed.x += sin(uTime * 1.25 + iPos.x * 0.8 + iPos.z * 0.35) * amt;
           transformed.z += cos(uTime * 0.97 + iPos.z * 0.72 - iPos.x * 0.3) * amt * 0.8;
           transformed.y += sin(uTime * 1.7 + iPos.x * 1.1) * amt * 0.25;`),u.fragmentShader=u.fragmentShader.replace("#include <common>",`#include <common>
uniform float uWet;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
           gl_FragColor.rgb = mix(gl_FragColor.rgb, gl_FragColor.rgb * vec3(0.42, 0.58, 0.58), uWet);`)},this.mesh=new zn(this.geo,this.mat,e),this.mesh.instanceColor=new ki(new Float32Array(e*3),3),this.mesh.frustumCulled=!1,this.mesh.castShadow=!1,this.mesh.receiveShadow=!0,this.mesh.name="vines";const n=new Ht,s=new hn,r=new R,o=new R,a=new gt,l=t.rng;let h=0,c=0;for(;h<e&&c<e*12;){c++;const u=l.range(-t.halfX,t.halfX),d=l.range(-t.halfZ,t.halfZ);if(ls(t,u,d)<.5)continue;const f=Ri(t,u,d);o.set(u,f,d),s.setFromAxisAngle(new R(0,1,0),l.range(0,Math.PI*2));const g=l.range(.5,.85);r.set(g,l.range(.8,1.25)*g,g),n.compose(o,s,r),this.mesh.setMatrixAt(h,n);const v=l.bell();a.setHSL(.22-v*.15,.42+v*.2,.17+v*.09),this.mesh.setColorAt(h,a),h%1===0&&this.anchors.push(new R(u+l.range(-.4,.4),f+l.range(.12,.34),d+l.range(-.4,.4))),h++}this.mesh.count=h,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}update(t,e){this.uniforms.uTime.value+=t,this.uniforms.uSway.value=.012+Lt(e,0,1)*.055,this.uniforms.uWet.value=Lt(e*1.15,0,1)}dispose(){this.geo.dispose(),this.mat.dispose()}}function jr(i,t,e){const n=new Sn(i,t,e),s=n.attributes.position,r=new R;for(let o=0;o<s.count;o++){r.fromBufferAttribute(s,o);const a=r.clone().normalize();r.y*=.9,r.x*=1.04;const l=Lt(a.y,0,1),h=Math.pow(l,6)*.34;r.multiplyScalar(1-h),a.y<-.86&&(r.y-=i*.05);const c=Math.sin(a.x*7.3)*Math.cos(a.z*6.1)*.018;r.multiplyScalar(1+c),s.setXYZ(o,r.x,r.y,r.z)}return n.computeVertexNormals(),n}const Vg=13*13,zc=.45;class Wg{constructor(t,e,n,s,r,o){T(this,"group",new ce);T(this,"near");T(this,"far");T(this,"geoNear");T(this,"geoFar");T(this,"matNear");T(this,"matFar");T(this,"n");T(this,"px");T(this,"py");T(this,"pz");T(this,"vx");T(this,"vy");T(this,"vz");T(this,"state");T(this,"delay");T(this,"scale");T(this,"spin");T(this,"spinRate");T(this,"hoseT");T(this,"hoseOff");T(this,"bedSlot");T(this,"baseCol");T(this,"wobble");T(this,"homeX");T(this,"homeY");T(this,"homeZ");T(this,"stray");T(this,"recycleToVine",!1);T(this,"packFactor",1);T(this,"crowd");T(this,"dropScale");T(this,"bedSlots",[]);T(this,"bedUsed",0);T(this,"bedOrigin",new R);T(this,"radius");T(this,"cell");T(this,"gw");T(this,"gh");T(this,"gx0");T(this,"gz0");T(this,"cellCount");T(this,"cellStart");T(this,"cellItems");T(this,"tmpM",new Ht);T(this,"tmpQ",new hn);T(this,"tmpE",new $e);T(this,"tmpV",new R);T(this,"tmpS",new R);T(this,"tmp2",new tt);T(this,"col",new gt);T(this,"densityTex");T(this,"densityData");T(this,"densityRaw");T(this,"dw");T(this,"dh");T(this,"densityClock",0);T(this,"time",0);T(this,"floatingCount",0);T(this,"onVineCount",0);T(this,"bedCount",0);T(this,"inHoseCount",0);T(this,"surfacedCount",0);T(this,"intakePoint",new R);T(this,"intakeActive",!1);T(this,"intakeRadius",3.2);T(this,"intakeRate",18);T(this,"intakeTokens",0);T(this,"stirAt",null);T(this,"stirStrength",0);T(this,"containFn",null);T(this,"hoseCurve",null);T(this,"hoseSpeed",0);T(this,"strayCount",0);this.v=t,this.water=e,this.events=r,this.n=Math.min(s,n.length*3),this.radius=Cg*Lt(Math.sqrt(1700/Math.max(1,this.n)),1,1.2),this.cell=this.radius*1.95,this.gx0=-(t.halfX+3),this.gz0=-(t.halfZ+3),this.gw=Math.ceil((t.halfX+3)*2/this.cell)+1,this.gh=Math.ceil((t.halfZ+3)*2/this.cell)+1,this.cellCount=new Int32Array(this.gw*this.gh+1),this.cellStart=new Int32Array(this.gw*this.gh+1);const a=this.n;this.cellItems=new Int32Array(a),this.px=new Float32Array(a),this.py=new Float32Array(a),this.pz=new Float32Array(a),this.vx=new Float32Array(a),this.vy=new Float32Array(a),this.vz=new Float32Array(a),this.state=new Uint8Array(a),this.delay=new Float32Array(a),this.scale=new Float32Array(a),this.spin=new Float32Array(a*3),this.spinRate=new Float32Array(a*3),this.hoseT=new Float32Array(a),this.hoseOff=new Float32Array(a*2),this.bedSlot=new Int32Array(a).fill(-1),this.baseCol=new Float32Array(a*3),this.wobble=new Float32Array(a),this.homeX=new Float32Array(a),this.homeY=new Float32Array(a),this.homeZ=new Float32Array(a),this.stray=new Uint8Array(a),this.crowd=new Float32Array(a),this.dropScale=new Float32Array(a).fill(1),this.dw=Math.max(8,Math.round((t.halfX+2)*2/.55)),this.dh=Math.max(8,Math.round((t.halfZ+2)*2/.55)),this.densityRaw=new Float32Array(this.dw*this.dh),this.densityData=new Uint8Array(new ArrayBuffer(this.dw*this.dh)),this.densityTex=new bl(this.densityData,this.dw,this.dh,rr,ln),this.densityTex.minFilter=We,this.densityTex.magFilter=We,this.densityTex.wrapS=Mn,this.densityTex.wrapT=Mn,this.densityTex.needsUpdate=!0;const l=t.rng;for(let h=0;h<a;h++){const c=n[h%n.length];this.px[h]=c.x+l.range(-.5,.5),this.pz[h]=c.z+l.range(-.5,.5),this.py[h]=c.y+l.range(-.02,.2),this.homeX[h]=this.px[h],this.homeY[h]=this.py[h],this.homeZ[h]=this.pz[h],this.state[h]=0,this.scale[h]=l.range(.82,1.22),this.wobble[h]=l.range(0,Math.PI*2);for(let d=0;d<3;d++)this.spin[h*3+d]=l.range(0,Math.PI*2),this.spinRate[h*3+d]=l.range(-1.4,1.4);this.hoseOff[h*2]=l.range(-1,1),this.hoseOff[h*2+1]=l.range(-1,1);const u=l();u<t.paleRatio?this.col.setHSL(l.range(.03,.07),l.range(.3,.5),l.range(.62,.76)):u<.3?this.col.setHSL(l.range(.965,.995),l.range(.62,.78),l.range(.31,.4)):u<.78?this.col.setHSL(l.range(.975,1.005),l.range(.7,.86),l.range(.24,.32)):this.col.setHSL(l.range(.955,.985),l.range(.55,.72),l.range(.16,.23)),this.baseCol[h*3]=this.col.r,this.baseCol[h*3+1]=this.col.g,this.baseCol[h*3+2]=this.col.b}this.onVineCount=a,this.geoNear=o?jr(this.radius,9,7):jr(this.radius,14,10),this.geoFar=jr(this.radius,7,5),this.matNear=new cg({color:16777215,roughness:.34,metalness:0,clearcoat:o?0:.75,clearcoatRoughness:.14,sheen:0}),this.matFar=new zt({color:16777215,roughness:.45,metalness:0}),this.near=new zn(this.geoNear,this.matNear,a),this.far=new zn(this.geoFar,this.matFar,a);for(const h of[this.near,this.far])h.instanceColor=new ki(new Float32Array(a*3),3),h.frustumCulled=!1,h.count=0,h.castShadow=!1,h.receiveShadow=!0;this.near.name="berries-near",this.far.name="berries-far",this.group.add(this.near,this.far),this.group.name="berries"}set castShadow(t){this.near.castShadow=t}get harvested(){return 1-this.onVineCount/this.n}get collected(){return this.bedCount/this.n}get onWater(){return this.floatingCount}harvestAt(t,e,n,s){let r=0;const o=n*n;for(let a=0;a<this.n;a++){if(this.state[a]!==0)continue;const l=this.px[a]-t,h=this.pz[a]-e,c=l*l+h*h;if(c>o||Math.random()>s)continue;const u=Math.sqrt(c)||.001;this.state[a]=1,this.vx[a]=l/u*(.5+Math.random()*1.5),this.vz[a]=h/u*(.5+Math.random()*1.5),this.vy[a]=-.35-Math.random()*.5,this.delay[a]=Math.random()*.55,this.onVineCount--,r++}return r}harvestAll(){for(let t=0;t<this.n;t++)this.state[t]===0&&(this.state[t]=1,this.vy[t]=-.2,this.delay[t]=Math.random()*1.4,this.onVineCount--)}setIntake(t,e,n=3.2){this.intakeActive=t,this.intakeRadius=n,e&&this.intakePoint.copy(e),t||(this.intakeTokens=Math.min(this.intakeTokens,1))}setBed(t,e){this.bedOrigin=t,this.bedSlots=e,this.bedUsed=0}setStir(t,e=1){this.stirAt=t,this.stirStrength=e}setContainment(t){this.containFn=t}setHose(t,e){this.hoseCurve=t,this.hoseSpeed=e}gcol(t){const e=Math.floor((t-this.gx0)/this.cell);return e<0?0:e>=this.gw?this.gw-1:e}grow(t){const e=Math.floor((t-this.gz0)/this.cell);return e<0?0:e>=this.gh?this.gh-1:e}update(t,e){this.time+=t,this.intakeActive&&(this.intakeTokens=Math.min(this.intakeTokens+this.intakeRate*t,this.intakeRate*.5));const n=this.water,s=this.radius*.15;let r=0,o=0,a=0;const l=this.gw*this.gh;this.cellCount.fill(0,0,l+1);for(let c=0;c<this.n;c++){const u=this.state[c];u!==3&&u!==4||this.cellCount[this.grow(this.pz[c])*this.gw+this.gcol(this.px[c])]++}let h=0;for(let c=0;c<l;c++)this.cellStart[c]=h,h+=this.cellCount[c],this.cellCount[c]=this.cellStart[c];this.cellStart[l]=h;for(let c=0;c<this.n;c++){const u=this.state[c];if(u!==3&&u!==4)continue;const d=this.grow(this.pz[c])*this.gw+this.gcol(this.px[c]);this.cellItems[this.cellCount[d]++]=c}for(let c=0;c<this.n;c++){const u=this.state[c];switch(u){case 0:{const d=this.wobble[c],f=n.flood*.05;this.px[c]+=Math.sin(this.time*1.3+d)*f*t,this.pz[c]+=Math.cos(this.time*1.1+d)*f*t;break}case 1:{this.delay[c]-=t,this.px[c]+=this.vx[c]*t,this.pz[c]+=this.vz[c]*t,this.py[c]+=this.vy[c]*t,this.vx[c]=Ot(this.vx[c],0,3.4,t),this.vz[c]=Ot(this.vz[c],0,3.4,t),this.vy[c]=Ot(this.vy[c],0,2.6,t),this.delay[c]<=0&&(this.state[c]=2,this.vy[c]=.25);break}case 2:{const d=n.heightAt(this.px[c],this.pz[c])-s;this.vy[c]+=(1.9+this.scale[c]*.5)*t,this.vy[c]=Math.min(this.vy[c],2.4),this.py[c]+=this.vy[c]*t;const f=this.wobble[c];this.px[c]+=Math.sin(this.time*2.6+f)*.24*t,this.pz[c]+=Math.cos(this.time*2.2+f*1.7)*.24*t,Math.random()<t*5&&this.events.onBubble(this.px[c],this.py[c],this.pz[c]),this.py[c]>=d&&(this.py[c]=d,this.events.onSurface(this.px[c],this.py[c],this.pz[c],this.vy[c]),this.vy[c]*=-.28,this.state[c]=3,this.surfacedCount++);break}case 3:case 4:{r++;let d=0,f=0;const g=this.time*.22;if(d+=Math.sin(this.pz[c]*.16+g)*.16,f+=Math.cos(this.px[c]*.14-g*1.1)*.16,this.stirAt){const M=this.px[c]-this.stirAt.x,D=this.pz[c]-this.stirAt.y,z=M*M+D*D;if(z<3.6){const X=Math.sqrt(z)||.001,Y=(1-X/1.9)*7*this.stirStrength;d+=M/X*Y,f+=D/X*Y}}if(this.containFn&&!this.stray[c]){const M=this.containFn(this.px[c],this.pz[c],this.tmpV);if(M>0){const D=Math.min(M,1.2)*16;d+=this.tmpV.x*D,f+=this.tmpV.z*D}}const v=this.gcol(this.px[c]),m=this.grow(this.pz[c]),p=this.radius*1.92*this.packFactor;let y=0;const x=v>0?-1:0,w=v<this.gw-1?1:0,L=m>0?-1:0,C=m<this.gh-1?1:0;for(let M=x;M<=w;M++)for(let D=L;D<=C;D++){const z=(m+D)*this.gw+(v+M),X=this.cellCount[z];for(let Y=this.cellStart[z];Y<X;Y++){const O=this.cellItems[Y];if(O===c)continue;const G=this.px[c]-this.px[O],V=this.pz[c]-this.pz[O],rt=G*G+V*V;if(rt>p*p||rt<1e-6)continue;const lt=Math.sqrt(rt),vt=(p-lt)/p;d+=G/lt*vt*9,f+=V/lt*vt*9,y++}}if(u===4){const M=this.intakePoint.x-this.px[c],D=this.intakePoint.z-this.pz[c],z=Math.hypot(M,D)||.001,X=26/Math.max(z,.6);if(d+=M/z*X,f+=D/z*X,z<.62){this.state[c]=5,this.hoseT[c]=0,this.spinRate[c*3]=(Math.random()-.5)*9,this.spinRate[c*3+1]=(Math.random()-.5)*9,this.spinRate[c*3+2]=(Math.random()-.5)*9,r--;break}}else if(this.intakeActive&&!this.stray[c]&&this.intakeTokens>=1){const M=this.intakePoint.x-this.px[c],D=this.intakePoint.z-this.pz[c],z=M*M+D*D;z<this.intakeRadius*this.intakeRadius&&Math.random()<t*(7-Math.sqrt(z)*1.2)&&(this.state[c]=4,this.intakeTokens-=1)}this.vx[c]=Ot(this.vx[c]+d*t,0,3.2,t),this.vz[c]=Ot(this.vz[c]+f*t,0,3.2,t);const E=Math.hypot(this.vx[c],this.vz[c]),P=u===4?9:3.4;if(E>P&&(this.vx[c]*=P/E,this.vz[c]*=P/E),this.px[c]+=this.vx[c]*t,this.pz[c]+=this.vz[c]*t,ls(this.v,this.px[c],this.pz[c])<.45){const M=this.tmp2.set(this.px[c],this.pz[c]);Gi(this.v,M,.45),this.px[c]=M.x,this.pz[c]=M.y,this.vx[c]*=.4,this.vz[c]*=.4}this.crowd[c]=Ot(this.crowd[c],Lt(y/6,0,1),4,t);const _=n.heightAt(this.px[c],this.pz[c])-s+this.crowd[c]*this.radius*1.5;this.py[c]=Ot(this.py[c],_,12,t),this.spin[c*3]+=(this.vz[c]*.9+Math.sin(this.time+this.wobble[c])*.2)*t,this.spin[c*3+2]-=this.vx[c]*.9*t;break}case 5:{if(a++,!this.hoseCurve)break;if(this.hoseT[c]+=this.hoseSpeed*t*(.85+this.scale[c]*.2),this.hoseT[c]>=1){if(this.recycleToVine){this.px[c]=this.homeX[c],this.py[c]=this.homeY[c],this.pz[c]=this.homeZ[c],this.vx[c]=this.vy[c]=this.vz[c]=0,this.state[c]=0,this.onVineCount++;break}this.state[c]=6,this.dropScale[c]=1;const w=this.hoseCurve.getPointAt(1,this.tmpV);this.px[c]=w.x,this.py[c]=w.y,this.pz[c]=w.z,this.vx[c]=(Math.random()-.5)*.8,this.vz[c]=(Math.random()-.5)*.8,this.vy[c]=-.4,this.bedSlot[c]=this.bedUsed<this.bedSlots.length?this.bedUsed++:-1;break}const d=this.hoseCurve.getPointAt(Lt(this.hoseT[c],0,1),this.tmpV),f=this.hoseCurve.getTangentAt(Lt(this.hoseT[c],0,1),this.tmpS),g=-f.z,v=f.x,m=Math.hypot(g,v)||1,p=this.hoseOff[c*2]*.075,y=this.hoseOff[c*2+1]*.075,x=Math.sin(this.time*6+this.wobble[c])*.04;this.px[c]=d.x+g/m*(p+x),this.pz[c]=d.z+v/m*(p+x),this.py[c]=d.y+y;for(let w=0;w<3;w++)this.spin[c*3+w]+=this.spinRate[c*3+w]*t;break}case 6:{this.dropScale[c]=Ot(this.dropScale[c],zc,7,t),this.vy[c]-=9.2*t,this.px[c]+=this.vx[c]*t,this.py[c]+=this.vy[c]*t,this.pz[c]+=this.vz[c]*t;for(let g=0;g<3;g++)this.spin[c*3+g]+=this.spinRate[c*3+g]*t;const d=this.bedSlot[c],f=d>=0?this.bedSlots[d]:null;if(f){const g=this.bedOrigin.y+f.y;this.py[c]<=g?(this.px[c]=this.bedOrigin.x+f.x,this.py[c]=g,this.pz[c]=this.bedOrigin.z+f.z,this.state[c]=7,this.events.onBedLand(this.px[c],this.py[c],this.pz[c])):(this.px[c]=Ot(this.px[c],this.bedOrigin.x+f.x,4,t),this.pz[c]=Ot(this.pz[c],this.bedOrigin.z+f.z,4,t))}else this.py[c]<this.bedOrigin.y&&(this.state[c]=7);break}case 7:{o++;const d=this.bedSlot[c];if(d>=0){const f=this.bedSlots[d];this.px[c]=this.bedOrigin.x+f.x,this.py[c]=this.bedOrigin.y+f.y,this.pz[c]=this.bedOrigin.z+f.z}break}}}this.floatingCount=r,this.bedCount=o,this.inHoseCount=a,this.densityClock-=t,this.densityClock<=0&&(this.densityClock=.1,this.updateDensity()),this.writeInstances(e)}updateDensity(){const t=this.densityRaw;t.fill(0);const e=this.dw/((this.v.halfX+2)*2),n=this.dh/((this.v.halfZ+2)*2),s=this.radius*this.radius*Math.PI/(.55*.55);for(let a=0;a<this.n;a++){const l=this.state[a];if(l!==3&&l!==4)continue;const h=Math.floor((this.px[a]+this.v.halfX+2)*e),c=Math.floor((this.pz[a]+this.v.halfZ+2)*n);h<0||c<0||h>=this.dw||c>=this.dh||(t[c*this.dw+h]+=s)}const r=this.dw,o=this.dh;for(let a=0;a<o;a++){let l=t[a*r];for(let h=0;h<r;h++){const c=t[a*r+h],u=h+1<r?t[a*r+h+1]:c;t[a*r+h]=(l+c*2+u)*.25,l=c}}for(let a=0;a<r;a++){let l=t[a];for(let h=0;h<o;h++){const c=t[h*r+a],u=h+1<o?t[(h+1)*r+a]:c;t[h*r+a]=(l+c*2+u)*.25,l=c}}for(let a=0;a<t.length;a++)this.densityData[a]=Math.min(255,Math.round(t[a]*255*1.25));this.densityTex.needsUpdate=!0}writeInstances(t){const e=t.position;let n=0,s=0;const r=this.near.instanceColor.array,o=this.far.instanceColor.array,a=this.water.level;for(let l=0;l<this.n;l++){const h=this.px[l],c=this.py[l],u=this.pz[l],d=h-e.x,f=c-e.y,g=u-e.z,v=d*d+f*f+g*g,m=this.state[l],p=this.scale[l]*(m===7?zc:m===6?this.dropScale[l]:1);this.tmpE.set(this.spin[l*3],this.spin[l*3+1],this.spin[l*3+2]),this.tmpQ.setFromEuler(this.tmpE),this.tmpV.set(h,c,u),this.tmpS.set(p,p*.98,p),this.tmpM.compose(this.tmpV,this.tmpQ,this.tmpS);let y=this.baseCol[l*3],x=this.baseCol[l*3+1],w=this.baseCol[l*3+2];const L=this.state[l];if(L===0||L===1||L===2){const C=Lt((a-c)/.8,0,1)*Ve(this.water.flood*2),E=C*.68,P=this.v.waterTint,W=1-C*.38;y=(y*(1-E*.92)+P.r*E*.45)*W,x=(x*(1-E*.6)+P.g*E*.6)*W,w=(w*(1-E*.5)+P.b*E*.7)*W}v<Vg?(this.near.setMatrixAt(n,this.tmpM),r[n*3]=y,r[n*3+1]=x,r[n*3+2]=w,n++):(this.far.setMatrixAt(s,this.tmpM),o[s*3]=y,o[s*3+1]=x,o[s*3+2]=w,s++)}this.near.count=n,this.far.count=s,this.near.instanceMatrix.needsUpdate=!0,this.far.instanceMatrix.needsUpdate=!0,this.near.instanceColor.needsUpdate=!0,this.far.instanceColor.needsUpdate=!0}floatCentroid(t=new tt){let e=0,n=0,s=0;for(let r=0;r<this.n;r++)this.state[r]!==3&&this.state[r]!==4||(e+=this.px[r],n+=this.pz[r],s++);return s?t.set(e/s,n/s):t.set(0,0)}spread(t,e){let n=0,s=0;for(let r=0;r<this.n;r++)this.state[r]!==3&&this.state[r]!==4||(n+=Math.hypot(this.px[r]-t,this.pz[r]-e),s++);return s?n/s:0}nearestFloating(t,e,n){let s=1/0,r=-1;for(let o=0;o<this.n;o++){if(this.state[o]!==3)continue;const a=(this.px[o]-t)**2+(this.pz[o]-e)**2;a<s&&(s=a,r=o)}return r<0?!1:(n.set(this.px[r],this.py[r],this.pz[r]),!0)}makeStrays(t,e){let n=0;const s=this.v.rng;for(let r=0;r<this.n&&n<t;r++){if(this.state[r]!==3||this.stray[r])continue;const o=s.range(0,Math.PI*2),a=s.range(.55,.9),l=e.x+Math.cos(o)*this.v.halfX*a,h=e.y+Math.sin(o)*this.v.halfZ*a,c=new tt(l,h);Gi(this.v,c,1.6),this.px[r]=c.x,this.pz[r]=c.y,this.stray[r]=1,n++}return this.strayCount=n,n}get strays(){return this.strayCount}dispose(){this.densityTex.dispose(),this.geoNear.dispose(),this.geoFar.dispose(),this.matNear.dispose(),this.matFar.dispose()}}var In=(i=>(i[i.Bubble=0]="Bubble",i[i.Droplet=1]="Droplet",i[i.Foam=2]="Foam",i[i.Leaf=3]="Leaf",i[i.Spark=4]="Spark",i))(In||{});const Xg=`
  attribute float aSize;
  attribute float aLife;      // 0..1 remaining
  attribute vec3  aColor;
  attribute float aKind;
  varying float vLife;
  varying vec3 vColor;
  varying float vKind;
  uniform float uPixelScale;
  void main() {
    vLife = aLife;
    vColor = aColor;
    vKind = aKind;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    // foam rings spread as they fade
    float grow = aKind > 1.5 && aKind < 2.5 ? (1.0 + (1.0 - aLife) * 2.2) : 1.0;
    // aSize is a world-space diameter; uPixelScale converts it to pixels at
    // one unit of depth. Capped so nothing can ever flood the screen.
    gl_PointSize = clamp(aSize * grow * uPixelScale / max(-mv.z, 0.25), 1.0, 110.0);
    gl_Position = projectionMatrix * mv;
  }
`,qg=`
  precision mediump float;
  varying float vLife;
  varying vec3 vColor;
  varying float vKind;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    if (d > 0.5) discard;
    float alpha;
    vec3 col = vColor;
    if (vKind > 1.5 && vKind < 2.5) {
      // foam ring
      float ring = smoothstep(0.5, 0.34, d) * smoothstep(0.16, 0.32, d);
      alpha = ring * vLife * 0.8;
    } else if (vKind < 0.5) {
      // bubble: bright rim, hollow middle
      float rim = smoothstep(0.5, 0.36, d);
      float core = smoothstep(0.30, 0.44, d);
      alpha = rim * (0.34 + core * 0.66) * vLife;
      col += vec3(0.22) * core;
    } else {
      alpha = smoothstep(0.5, 0.1, d) * vLife;
    }
    if (alpha < 0.01) discard;
    gl_FragColor = vec4(col, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;class Yg{constructor(t){T(this,"points");T(this,"geo");T(this,"mat");T(this,"pos");T(this,"vel");T(this,"size");T(this,"life");T(this,"maxLife");T(this,"color");T(this,"kind");T(this,"alive",0);T(this,"free",[]);T(this,"index");this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.size=new Float32Array(t),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.color=new Float32Array(t*3),this.kind=new Float32Array(t),this.index=new Int32Array(t);for(let e=t-1;e>=0;e--)this.free.push(e);this.geo=new Te,this.geo.setAttribute("position",new pe(new Float32Array(t*3),3)),this.geo.setAttribute("aSize",new pe(new Float32Array(t),1)),this.geo.setAttribute("aLife",new pe(new Float32Array(t),1)),this.geo.setAttribute("aColor",new pe(new Float32Array(t*3),3)),this.geo.setAttribute("aKind",new pe(new Float32Array(t),1)),this.geo.setDrawRange(0,0),this.geo.boundingSphere=new Gn(new R,400),this.mat=new Xe({uniforms:{uPixelScale:{value:420}},vertexShader:Xg,fragmentShader:qg,transparent:!0,depthWrite:!1,blending:ai}),this.points=new Zm(this.geo,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=8,this.points.name="particles"}setProjection(t,e){const n=t*.5/Math.tan(e*Math.PI/360);this.mat.uniforms.uPixelScale.value=n}spawn(t,e,n,s,r,o,a,l,h,c){const u=this.free.pop();u!==void 0&&(this.pos[u*3]=e,this.pos[u*3+1]=n,this.pos[u*3+2]=s,this.vel[u*3]=r,this.vel[u*3+1]=o,this.vel[u*3+2]=a,this.size[u]=l,this.life[u]=h,this.maxLife[u]=h,this.color[u*3]=c.r,this.color[u*3+1]=c.g,this.color[u*3+2]=c.b,this.kind[u]=t,this.index[this.alive++]=u)}get used(){return this.alive}update(t,e){const n=this.geo.attributes.position,s=this.geo.attributes.aSize,r=this.geo.attributes.aLife,o=this.geo.attributes.aColor,a=this.geo.attributes.aKind,l=n.array,h=s.array,c=r.array,u=o.array,d=a.array;let f=0;for(let g=0;g<this.alive;g++){const v=this.index[g];if(this.life[v]-=t,this.life[v]<=0){this.free.push(v);continue}const m=this.kind[v],p=v*3;m===0?(this.vel[p+1]+=1.6*t,this.vel[p]+=Math.sin(this.life[v]*9+v)*.3*t,this.pos[p+1]>e&&(this.life[v]=Math.min(this.life[v],.06))):m===1?(this.vel[p+1]-=9.4*t,this.pos[p+1]<e&&(this.life[v]=Math.min(this.life[v],.05))):m===2?(this.vel[p]*=1-1.6*t,this.vel[p+2]*=1-1.6*t,this.pos[p+1]=e+.02):m===3?(this.vel[p+1]-=1.1*t,this.pos[p+1]=Math.max(this.pos[p+1],e+.03),this.vel[p]*=1-.8*t,this.vel[p+2]*=1-.8*t):this.vel[p+1]-=2.4*t,this.pos[p]+=this.vel[p]*t,this.pos[p+1]+=this.vel[p+1]*t,this.pos[p+2]+=this.vel[p+2]*t,l[f*3]=this.pos[p],l[f*3+1]=this.pos[p+1],l[f*3+2]=this.pos[p+2],h[f]=this.size[v],c[f]=Math.min(1,this.life[v]/this.maxLife[v]),u[f*3]=this.color[p],u[f*3+1]=this.color[p+1],u[f*3+2]=this.color[p+2],d[f]=m,this.index[f]=v,f++}this.alive=f,this.geo.setDrawRange(0,f),n.needsUpdate=!0,s.needsUpdate=!0,r.needsUpdate=!0,o.needsUpdate=!0,a.needsUpdate=!0}clear(){for(let t=0;t<this.alive;t++)this.free.push(this.index[t]);this.alive=0,this.geo.setDrawRange(0,0)}dispose(){this.geo.dispose(),this.mat.dispose()}}const Zg=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Kg=`
  precision mediump float;
  uniform float uTime;
  uniform float uOpen;
  uniform vec3 uColor;
  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5453);
  }

  void main() {
    if (uOpen < 0.02) discard;
    // vertical streaks scrolling downstream
    float lane = floor(vUv.x * 14.0);
    float speed = 1.4 + hash(vec2(lane, 3.0)) * 1.6;
    float v = fract(vUv.y * 2.2 - uTime * speed + hash(vec2(lane, 7.0)));
    float streak = smoothstep(0.55, 0.05, abs(v - 0.5) * 2.0);
    float body = smoothstep(0.0, 0.28, vUv.y) * smoothstep(1.0, 0.62, vUv.y);
    float edge = smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.88, vUv.x);
    float a = (0.22 + streak * 0.42) * body * edge * clamp(uOpen * 1.4, 0.0, 1.0);
    vec3 col = mix(uColor, vec3(0.86, 0.93, 0.92), streak * 0.6 + 0.12);
    gl_FragColor = vec4(col, a);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,Ai=.42;class $g{constructor(t){T(this,"group",new ce);T(this,"open",0);T(this,"targetOpen",0);T(this,"panel");T(this,"wheel");T(this,"pourMat");T(this,"pour");T(this,"disposables",[]);T(this,"time",0);T(this,"handle",new R);T(this,"mouth",new R);T(this,"deckY",4.67*Ai);const e=Fl(t);this.group.position.copy(e),this.group.name="gate",this.group.scale.setScalar(Ai);const n=new zt({color:"#9c968a",roughness:.92}),s=new zt({color:"#7c8894",roughness:.42,metalness:.72}),r=new zt({color:"#d8a12c",roughness:.55,metalness:.25});this.disposables.push(n,s,r);const o=new Gt(7.4,3.4,1.5),a=new it(o,n);a.position.set(0,1.2,0),a.castShadow=!0,a.receiveShadow=!0,this.group.add(a),this.disposables.push(o);const l=new Gt(1.7,4.6,1.7);for(const M of[-2.6,2.6]){const D=new it(l,n);D.position.set(M,1.9,0),D.castShadow=!0,this.group.add(D)}this.disposables.push(l);const h=new Gt(6.9,.7,1.7),c=new it(h,n);c.position.set(0,4.05,0),this.group.add(c),this.disposables.push(h);const u=new Gt(3.5,2.9,.28);this.panel=new it(u,s),this.panel.position.set(0,1.35,-.35),this.panel.castShadow=!0,this.group.add(this.panel),this.disposables.push(u);const d=new Gt(3.6,.16,.42);for(const M of[-.85,0,.85]){const D=new it(d,r);D.position.set(0,M,.05),this.panel.add(D)}this.disposables.push(d);const f=new ve(.13,.13,3.6,8),g=new it(f,s);g.position.set(0,5.4,-.35),this.group.add(g),this.disposables.push(f);const v=new Gt(2.4,.34,.6),m=new it(v,r);m.position.set(0,4.55,-.35),this.group.add(m),this.disposables.push(v),this.wheel=new ce,this.wheel.position.set(0,7.1,-.35);const p=new Fe(1.05,.15,8,22),y=new it(p,r);y.rotation.x=Math.PI/2,this.wheel.add(y);const x=new ve(.08,.08,2.05,6);for(let M=0;M<3;M++){const D=new it(x,r);D.rotation.z=Math.PI/2,D.rotation.y=M/3*Math.PI,this.wheel.add(D)}const w=new ve(.26,.26,.44,10),L=new it(w,s);this.wheel.add(L),this.group.add(this.wheel),this.disposables.push(p,x,w);const C=new Hn(3.3,7.6,1,1);this.pourMat=new Xe({uniforms:{uTime:{value:0},uOpen:{value:0},uColor:{value:t.waterTint.clone().multiplyScalar(1.8)}},vertexShader:Zg,fragmentShader:Kg,transparent:!0,depthWrite:!1,side:Pe}),this.pour=new it(C,this.pourMat),this.pour.position.set(0,.62,2.9),this.pour.rotation.x=-Math.PI/2.18,this.pour.renderOrder=7,this.group.add(this.pour),this.disposables.push(C,this.pourMat);const E=new Gt(3,.14,1.5),P=new it(E,r);P.position.set(0,4.6,-1.5),P.castShadow=!0,P.receiveShadow=!0,this.group.add(P);const W=new ve(.06,.06,3,6);W.rotateZ(Math.PI/2);for(const M of[.55,1.05]){const D=new it(W,s);D.position.set(0,4.6+M,-2.2),this.group.add(D)}const _=new ve(.07,.07,1.2,6);for(const M of[-1.4,1.4]){const D=new it(_,s);D.position.set(M,5.2,-2.2),this.group.add(D)}this.disposables.push(E,W,_),this.handle.copy(e).add(new R(0,7.1*Ai,-.35*Ai)),this.mouth.copy(e).add(new R(0,.6*Ai,4.4*Ai))}nudge(t){this.targetOpen=Lt(this.targetOpen+t,0,1)}setTarget(t){this.targetOpen=Lt(t,0,1)}get target(){return this.targetOpen}update(t){this.time+=t,this.open=Ot(this.open,this.targetOpen,3.4,t),this.panel.position.y=1.35+this.open*2.55,this.wheel.rotation.y+=this.open>.002?t*2.2*(this.targetOpen-this.open+.35):0,this.pourMat.uniforms.uTime.value=this.time,this.pourMat.uniforms.uOpen.value=this.open,this.pour.visible=this.open>.02}dispose(){this.disposables.forEach(t=>t.dispose())}}function Bc(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Te;let h=0;for(let c=0;c<i.length;++c){const u=i[c];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,f,c),h+=f}}if(e){let c=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+c);c+=i[d].attributes.position.count}l.setIndex(u)}for(const c in r){const u=kc(r[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,u)}for(const c in o){const u=o[c][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<u;++d){const f=[];for(let v=0;v<o[c].length;++v)f.push(o[c][v][d]);const g=kc(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function kc(i){let t,e,n,s=-1,r=0;for(let h=0;h<i.length;++h){const c=i[h];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=c.itemSize),e!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.count*e}const o=new t(r),a=new pe(o,e,n);let l=0;for(let h=0;h<i.length;++h){const c=i[h];if(c.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=c.count;d<f;d++)for(let g=0;g<e;g++){const v=c.getComponent(d,g);a.setComponent(d+u,g,v)}}else o.set(c.array,l);l+=c.count*e}return s!==void 0&&(a.gpuType=s),a}const Qr=1.2,Jg=.55;class jg{constructor(t){T(this,"group",new ce);T(this,"pos",new tt(0,0));T(this,"heading",0);T(this,"viewHeading",0);T(this,"speed",0);T(this,"spin",0);T(this,"drums",[]);T(this,"disposables",[]);T(this,"hull",new ce);T(this,"bob",0);T(this,"roll",0);T(this,"turnRate",0);T(this,"floatY",Number.NaN);T(this,"engaged",!1);T(this,"churn",new R);T(this,"swathe",1.05);this.v=t,this.group.name="reel",this.group.add(this.hull),this.group.scale.setScalar(Jg);const e=new zt({color:"#8d97a2",roughness:.38,metalness:.8}),n=new zt({color:"#e5b524",roughness:.48,metalness:.2}),s=new zt({color:"#3c4348",roughness:.62,metalness:.45}),r=new zt({color:"#eceee6",roughness:.55});this.disposables.push(e,n,s,r);const o=new Un(.38,2.9,4,10);o.rotateX(Math.PI/2);for(const O of[-1.55,1.55]){const G=new it(o,n);G.position.set(O,.06,-.25),G.castShadow=!0,this.hull.add(G)}this.disposables.push(o);const a=new Gt(3.5,.16,.24);for(const O of[-1.35,.15,1.15]){const G=new it(a,e);G.position.set(0,.5,O),this.hull.add(G)}this.disposables.push(a);const l=new Gt(.09,.62,.09),h=new Gt(.34,.26,.1),c=[],u=[],d=new Ht,f=new $e,g=8,v=5;for(let O=0;O<g;O++){const G=O/g*Math.PI*2;for(let V=0;V<v;V++){const rt=-1.28+V/(v-1)*2.56;f.set(-G,0,0),d.makeRotationFromEuler(f),d.setPosition(rt,Math.cos(G)*.36,Math.sin(G)*.36),c.push(l.clone().applyMatrix4(d)),f.set(-G+.4,0,0),d.makeRotationFromEuler(f),d.setPosition(rt,Math.cos(G)*.7,Math.sin(G)*.7),u.push(h.clone().applyMatrix4(d))}}const m=Bc(c,!1),p=Bc(u,!1);c.forEach(O=>O.dispose()),u.forEach(O=>O.dispose()),l.dispose(),h.dispose();const y=new ve(.22,.22,3.05,10);y.rotateZ(Math.PI/2);const x=[.95,-.55];for(let O=0;O<2;O++){const G=new ce;G.position.set(0,.32,x[O]),G.add(new it(y,s)),G.add(new it(m,e)),G.add(new it(p,O===0?n:r)),this.drums.push(G),this.hull.add(G)}this.disposables.push(y,m,p);const w=new ve(.98,.98,3.2,14,1,!0,Math.PI*.06,Math.PI*.88);w.rotateZ(Math.PI/2);const L=new it(w,n);L.material.side=Pe,L.position.set(0,.32,.95),L.castShadow=!0,this.hull.add(L),this.disposables.push(w);const C=new Gt(1.05,.66,1.1),E=new it(C,s);E.position.set(0,.78,-1.2),E.castShadow=!0,this.hull.add(E),this.disposables.push(C);const P=new ve(.055,.055,1.1,6),W=new it(P,e);W.position.set(0,1.35,-1.2),this.hull.add(W),this.disposables.push(P);const _=new Sn(.16,10,8),M=new zt({color:"#ffb4c4",emissive:"#ff5f86",emissiveIntensity:.6,roughness:.4}),D=new it(_,M);D.position.set(0,1.95,-1.2),this.hull.add(D),this.disposables.push(_,M);const z=new Fe(.52,.055,6,14,Math.PI),X=new it(z,e);X.position.set(0,1.42,-2.05),X.rotation.x=Math.PI/2.6,this.hull.add(X);const Y=new ve(.045,.045,1.5,6);for(const O of[-.5,.5]){const G=new it(Y,e);G.position.set(O,1,-1.66),G.rotation.x=.62,this.hull.add(G)}this.disposables.push(z,Y)}reset(t,e,n){this.pos.set(t,e),this.heading=n,this.speed=0,this.spin=0,this.turnRate=0,this.roll=0,this.floatY=Number.NaN,this.engaged=!1,this.viewHeading=n}steerTo(t,e,n){const s=t.x-this.pos.x,r=t.y-this.pos.y,o=Math.hypot(s,r),a=this.engaged?Qr:Qr*1.7;if(this.engaged=o>a,this.engaged){let u=Math.atan2(s,r)-this.heading;for(;u>Math.PI;)u-=Math.PI*2;for(;u<-Math.PI;)u+=Math.PI*2;const d=1.5*n,f=Lt(u*.6,-d,d);this.heading+=f,this.turnRate=Ot(this.turnRate,f/Math.max(n,.001),7,n)}else this.turnRate=Ot(this.turnRate,0,6,n);this.roll=Ot(this.roll,Lt(this.turnRate*.16,-.22,.22),5,n);const l=this.engaged?Ve((o-Qr)/1.2):0,h=Lt(e,0,1)*1.25*l;this.speed=Ot(this.speed,h,h>this.speed?1.5:2.4,n)}coast(t){this.engaged=!1,this.speed=Ot(this.speed,0,2.2,t),this.turnRate=Ot(this.turnRate,0,4,t),this.roll=Ot(this.roll,0,4,t)}update(t,e){let n=this.heading-this.viewHeading;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;this.viewHeading=Ot(this.viewHeading+n,this.heading,2.4,t),this.pos.x+=Math.sin(this.heading)*this.speed*t,this.pos.y+=Math.cos(this.heading)*this.speed*t,Gi(this.v,this.pos,1.5);const s=6.5+this.speed*7;this.spin+=s*t,this.drums[0].rotation.x=-this.spin,this.drums[1].rotation.x=-this.spin*1.15+.4,this.bob+=t*(2.4+this.speed);const r=e(this.pos.x,this.pos.y)-.14;this.floatY=Number.isNaN(this.floatY)?r:Ot(this.floatY,r,6,t),this.group.position.set(this.pos.x,this.floatY+Math.sin(this.bob)*.02,this.pos.y),this.group.rotation.y=this.heading,this.hull.rotation.z=this.roll,this.hull.rotation.x=Math.sin(this.bob*.7)*.02-this.speed*.015,this.churn.set(this.pos.x-Math.sin(this.heading)*.12,r,this.pos.y-Math.cos(this.heading)*.12)}frontPoint(t=new R){return t.set(this.pos.x+Math.sin(this.heading)*.6,this.group.position.y+.18,this.pos.y+Math.cos(this.heading)*.6)}dispose(){this.disposables.forEach(t=>t.dispose())}}const $n=72;class Qg{constructor(t){T(this,"group",new ce);T(this,"centre",new tt);T(this,"radius",9);T(this,"angleA",0);T(this,"handleA");T(this,"handleB");T(this,"posA",new tt);T(this,"posB",new tt);T(this,"floats");T(this,"skirts");T(this,"disposables",[]);T(this,"rMin",4);T(this,"rMax",9);T(this,"targetRadius",9);T(this,"strength",0);T(this,"time",0);T(this,"haulRate",0);T(this,"contain",(t,e,n)=>{if(this.strength<=.001)return-1;let s=t-this.centre.x,r=e-this.centre.y;const o=Math.hypot(s,r),a=this.radius-.14;return o<=a?-1:(o<1e-5?(s=1,r=0):(s/=o,r/=o),n.set(-s,0,-r),(o-a)*this.strength)});this.v=t,this.group.name="boom";const e=new zt({color:"#f4c623",roughness:.5,metalness:.05}),n=new zt({color:"#f2f4ee",roughness:.55}),s=new zt({color:"#33403f",roughness:.85,side:Pe});this.disposables.push(e,n,s);const r=new Un(.105,.2,3,8);r.rotateZ(Math.PI/2),this.floats=new zn(r,e,$n),this.floats.instanceColor=new ki(new Float32Array($n*3),3);const o=new gt("#f4c623"),a=new gt("#f6f7f1");for(let h=0;h<$n;h++)this.floats.setColorAt(h,h%2?o:a);this.floats.instanceColor.needsUpdate=!0,this.floats.frustumCulled=!1,this.group.add(this.floats),this.disposables.push(r);const l=new Gt(.3,.26,.02);this.skirts=new zn(l,s,$n),this.skirts.frustumCulled=!1,this.group.add(this.skirts),this.disposables.push(l),this.handleA=this.buildHandle(e,n),this.handleB=this.buildHandle(e,n),this.group.add(this.handleA,this.handleB)}buildHandle(t,e){const n=new ce,s=new Sn(.27,14,10),r=new it(s,t);r.scale.y=.84,n.add(r);const o=new Fe(.26,.045,8,18),a=new it(o,e);a.rotation.x=Math.PI/2,a.position.y=.04,n.add(a);const l=new ve(.028,.028,1.05,6),h=new it(l,e);h.position.y=.55,n.add(h);const c=new Fe(.15,.035,8,16),u=new it(c,t);return u.position.y=1.02,u.rotation.y=Math.PI/2,n.add(u),this.disposables.push(s,o,l,c),n}deploy(t,e,n){this.rMax=Math.min(this.v.halfX,this.v.halfZ)*.98;const s=Math.max(10,e*n);this.rMin=Lt(Math.sqrt(s/Math.PI),1.8,this.rMax*.72),this.centre.copy(t),Gi(this.v,this.centre,1),this.radius=this.rMax,this.targetRadius=this.rMax,this.angleA=0,this.strength=0,this.updateHandlePositions()}updateHandlePositions(){this.posA.set(this.centre.x+Math.cos(this.angleA)*this.radius,this.centre.y+Math.sin(this.angleA)*this.radius),this.posB.set(this.centre.x-Math.cos(this.angleA)*this.radius,this.centre.y-Math.sin(this.angleA)*this.radius)}pickHandle(t){return t.distanceToSquared(this.posA)<=t.distanceToSquared(this.posB)?"a":"b"}haul(t,e,n){const s=t==="a"?1:-1,r=e.x-this.centre.x,o=e.y-this.centre.y,a=Math.hypot(r,o);if(a<.05){this.targetRadius=Lt(this.targetRadius-3*n,this.rMin,this.rMax);return}const l=Math.atan2(o,r),h=Lt(a,this.rMin,this.rMax),c=4.5*n,u=this.targetRadius;this.targetRadius=Lt(this.targetRadius+Lt(h-this.targetRadius,-c,c),this.rMin,this.rMax),this.haulRate=Math.abs(u-this.targetRadius)/Math.max(n,.001);let f=(s>0?l:l+Math.PI)-this.angleA;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;this.angleA+=Lt(f,-2.4*n,2.4*n)}get tightness(){return Lt(1-(this.radius-this.rMin)/Math.max(.001,this.rMax-this.rMin),0,1)}get area(){return Math.PI*this.radius*this.radius}update(t,e){this.time+=t,this.strength=Math.min(1,this.strength+t*.85),this.haulRate=Ot(this.haulRate,0,6,t),this.radius=Ot(this.radius,this.targetRadius,6,t),this.updateHandlePositions();const n=this.radius,s=new Ht,r=new hn,o=new R,a=new R(1,1,1),l=new R,h=new R(1,0,0),c=Math.PI*2*n/$n;for(let f=0;f<$n;f++){const g=f/$n*Math.PI*2,v=this.centre.x+Math.cos(g)*n,m=this.centre.y+Math.sin(g)*n,p=e(v,m);l.set(-Math.sin(g),0,Math.cos(g)),r.setFromUnitVectors(h,l),o.set(v,p+.02,m),a.set(Lt(c/.41,.6,2.6),1,1),s.compose(o,r,a),this.floats.setMatrixAt(f,s),o.set(v,p-.13,m),a.set(Lt(c/.3,.6,2.8),1,1),s.compose(o,r,a),this.skirts.setMatrixAt(f,s)}this.floats.instanceMatrix.needsUpdate=!0,this.skirts.instanceMatrix.needsUpdate=!0;const u=Math.sin(this.time*1.9)*.04,d=Math.sin(this.time*1.9+1.7)*.04;this.handleA.position.set(this.posA.x,e(this.posA.x,this.posA.y)+u,this.posA.y),this.handleB.position.set(this.posB.x,e(this.posB.x,this.posB.y)+d,this.posB.y),this.handleA.rotation.z=Math.sin(this.time*1.3)*.07,this.handleB.rotation.z=Math.sin(this.time*1.3+2.1)*.07}dispose(){this.disposables.forEach(t=>t.dispose())}}const rn=12,Jn=96,to=.02,eo=.34;class t0{constructor(t,e,n){T(this,"group",new ce);T(this,"nozzle",new ce);T(this,"mouth",new R);T(this,"coupling",new ce);T(this,"couplingPos",new R);T(this,"curve");T(this,"connected",!1);T(this,"mesh");T(this,"geo");T(this,"matBody");T(this,"matClear");T(this,"disposables",[]);T(this,"ctrl",[]);T(this,"nozzlePos",new tt);T(this,"ringMat");T(this,"collars",[]);T(this,"time",0);this.pumpIntake=t,this.pump=e,this.discharge=n,this.group.name="hose";for(let o=0;o<7;o++)this.ctrl.push(new R);this.curve=new El(this.ctrl,!1,"catmullrom",.4),this.matBody=new zt({color:"#4d5763",roughness:.6,metalness:.18,side:Pe}),this.matClear=new zt({color:"#7e9a97",roughness:.14,metalness:.06,transparent:!0,opacity:.5,side:wn,depthWrite:!1}),this.disposables.push(this.matBody,this.matClear),this.geo=this.buildTube(),this.mesh=new it(this.geo,[this.matBody,this.matClear]),this.mesh.frustumCulled=!1,this.mesh.renderOrder=9,this.group.add(this.mesh),this.disposables.push(this.geo);const s=new Fe(.33,.055,8,18),r=new zt({color:"#aeb6bc",roughness:.32,metalness:.85});this.collars=[new it(s,r),new it(s,r)],this.collars.forEach(o=>{o.frustumCulled=!1,this.group.add(o)}),this.disposables.push(s,r),this.buildNozzle(),this.buildCoupling(),this.ringMat=this.coupling.userData.mat}buildTube(){const t=new Te,e=(Jn+1)*(rn+1);t.setAttribute("position",new pe(new Float32Array(e*3),3)),t.setAttribute("normal",new pe(new Float32Array(e*3),3));const n=new Float32Array(e*2);for(let l=0;l<=Jn;l++)for(let h=0;h<=rn;h++){const c=l*(rn+1)+h;n[c*2]=l/Jn,n[c*2+1]=h/rn}t.setAttribute("uv",new pe(n,2));const s=[],r=[];let o=0,a=0;for(let l=0;l<Jn;l++){const h=(l+.5)/Jn,c=h>to&&h<eo?1:0;c!==a&&(r.push([o,s.length-o,a]),o=s.length,a=c);for(let u=0;u<rn;u++){const d=l*(rn+1)+u,f=(l+1)*(rn+1)+u;s.push(d,d+1,f,d+1,f+1,f)}}r.push([o,s.length-o,a]),t.setIndex(s);for(const[l,h,c]of r)t.addGroup(l,h,c);return t.boundingSphere=new Gn(new R,200),t}buildNozzle(){const t=new zt({color:"#b9c2c8",roughness:.34,metalness:.85}),e=new zt({color:"#ef7d3c",roughness:.6}),n=new zt({color:"#f6f2e6",roughness:.85});this.disposables.push(t,e,n);const s=new ve(.47,.28,.58,16,1,!0),r=new it(s,t);r.material.side=Pe,r.position.y=-.12,this.nozzle.add(r);const o=new Fe(.3,.06,8,16),a=new it(o,e);a.rotation.x=Math.PI/2,a.position.y=.18,this.nozzle.add(a);const l=new Fe(.56,.135,10,20),h=new it(l,n);h.rotation.x=Math.PI/2,h.position.y=.1,this.nozzle.add(h);const c=new Fe(.2,.04,8,14,Math.PI),u=new it(c,e);u.position.y=.42,this.nozzle.add(u);const d=new ve(.26,.26,.3,12),f=new it(d,t);f.position.y=.34,this.nozzle.add(f),this.disposables.push(s,o,l,c,d),this.group.add(this.nozzle)}buildCoupling(){const t=new zt({color:"#ffd166",emissive:"#ffae2b",emissiveIntensity:.5,roughness:.5,transparent:!0,opacity:.9}),e=new Fe(.7,.075,8,22),n=new it(e,t);n.rotation.x=-Math.PI/2,this.coupling.add(n);const s=new Fe(.45,.045,8,18),r=new it(s,t);r.rotation.x=-Math.PI/2,this.coupling.add(r),this.coupling.userData.mat=t,this.disposables.push(t,e,s),this.group.add(this.coupling)}place(t,e,n){this.nozzlePos.set(t,e),this.couplingPos.set(n.x,0,n.y),this.connected=!1}dragTo(t,e,n){const s=14*n,r=t-this.nozzlePos.x,o=e-this.nozzlePos.y,a=Math.hypot(r,o);if(a>1e-4){const l=Math.min(a,s);this.nozzlePos.x+=r/a*l,this.nozzlePos.y+=o/a*l}}distanceToCoupling(){return Math.hypot(this.nozzlePos.x-this.couplingPos.x,this.nozzlePos.y-this.couplingPos.z)}trySnap(t=3.6){return this.connected||this.distanceToCoupling()>t?!1:(this.connected=!0,!0)}update(t,e,n){this.time+=t,this.connected&&(this.nozzlePos.x=Ot(this.nozzlePos.x,this.couplingPos.x,9,t),this.nozzlePos.y=Ot(this.nozzlePos.y,this.couplingPos.z,9,t));const s=this.nozzlePos.x,r=this.nozzlePos.y,o=e(s,r),a=n*.1;this.nozzle.position.set(s,o+.07-a*.6+Math.sin(this.time*2.1)*.02,r),this.nozzle.rotation.z=Math.sin(this.time*1.4)*.05,this.mouth.set(s,o-.2,r),this.coupling.position.set(this.couplingPos.x,e(this.couplingPos.x,this.couplingPos.z)+.05,this.couplingPos.z);const l=.5+Math.sin(this.time*3.2)*.35;this.ringMat.emissiveIntensity=this.connected?.15:l,this.coupling.visible=!this.connected;const h=this.connected?1:1+Math.sin(this.time*3.2)*.06;this.coupling.scale.setScalar(h);const c=this.ctrl;c[0].set(s,o-.1,r),c[1].set(s,o+.32,r);const u=new R(this.pumpIntake.x-s,0,this.pumpIntake.z-r),d=u.length()||1;u.divideScalar(d),c[2].set(s+u.x*d*.42,o+.72+Math.sin(this.time*1.6)*.04,r+u.z*d*.42),c[3].copy(this.pumpIntake),c[4].copy(this.pump).add(new R(0,.55,0)),c[5].set((this.pump.x+this.discharge.x)/2,Math.max(this.pump.y,this.discharge.y)+1.9,(this.pump.z+this.discharge.z)/2),c[6].copy(this.discharge),this.curve.updateArcLengths(),this.rebuildTube()}rebuildTube(){const t=this.geo.attributes.position,e=this.geo.attributes.normal,n=t.array,s=e.array,r=new R,o=new R,a=new R,l=new R,h=new R(0,1,0),c=new R(1,0,0);for(let d=0;d<=Jn;d++){const f=d/Jn;this.curve.getPointAt(f,r),this.curve.getTangentAt(f,o).normalize(),a.copy(c).sub(o.clone().multiplyScalar(c.dot(o))),a.lengthSq()<1e-6&&a.crossVectors(h,o),a.normalize(),c.copy(a),l.crossVectors(o,a).normalize();const g=.25+.05*Math.sin(f*Math.PI)+.008*Math.sin(this.time*7-f*12);for(let v=0;v<=rn;v++){const m=v/rn*Math.PI*2,p=Math.cos(m),y=Math.sin(m),x=(d*(rn+1)+v)*3,w=a.x*p+l.x*y,L=a.y*p+l.y*y,C=a.z*p+l.z*y;n[x]=r.x+w*g,n[x+1]=r.y+L*g,n[x+2]=r.z+C*g,s[x]=w,s[x+1]=L,s[x+2]=C}}t.needsUpdate=!0,e.needsUpdate=!0;const u=new R(0,0,1);[to,eo].forEach((d,f)=>{const g=this.collars[f];g&&(this.curve.getPointAt(d,r),this.curve.getTangentAt(d,o).normalize(),g.position.copy(r),g.quaternion.setFromUnitVectors(u,o))})}intakePoint(t=new R){return t.copy(this.mouth)}windowPoint(t=new R){return this.curve.getPointAt(Lt((to+eo)/2,0,1),t)}archPoint(t=new R){return this.curve.getPointAt(.22,t)}dispose(){this.disposables.forEach(t=>t.dispose())}}const Os=.72;class e0{constructor(t,e){T(this,"group",new ce);T(this,"bedOrigin",new R);T(this,"slots",[]);T(this,"discharge",new R);T(this,"pump",new R);T(this,"pumpIntake",new R);T(this,"wheels",[]);T(this,"disposables",[]);T(this,"driveT",-1);T(this,"idle",0);T(this,"home",new R);T(this,"bedHome",new R);T(this,"dischargeHome",new R);T(this,"pumpGroup",null);const n=Ig(t);this.group.name="truck",this.group.position.copy(n),this.group.rotation.y=-Math.PI/2+.16,this.group.scale.setScalar(Os);const s=new zt({color:t.truckColor.clone(),roughness:.42,metalness:.24}),r=new zt({color:"#2f3436",roughness:.72,metalness:.3}),o=new zt({color:"#8fb9c4",roughness:.12,metalness:.1,transparent:!0,opacity:.72}),a=new zt({color:"#9aa3ab",roughness:.4,metalness:.8}),l=new zt({color:"#6f7a72",roughness:.66,metalness:.35});this.disposables.push(s,r,o,a,l);const h=new Gt(9.4,.42,2.9),c=new it(h,r);c.position.set(0,1.06,0),c.castShadow=!0,this.group.add(c),this.disposables.push(h);const u=new Gt(2.5,2.1,2.7),d=new it(u,s);d.position.set(3.3,2.35,0),d.castShadow=!0,this.group.add(d),this.disposables.push(u);const f=new Gt(1.3,1.2,2.6),g=new it(f,s);g.position.set(4.9,1.85,0),g.castShadow=!0,this.group.add(g),this.disposables.push(f);const v=new Gt(.14,1,2.3),m=new it(v,o);m.position.set(4.56,2.72,0),this.group.add(m);const p=new Gt(1.9,.9,.12);for(const O of[-1.36,1.36]){const G=new it(p,o);G.position.set(3.35,2.72,O),this.group.add(G)}this.disposables.push(v,p);const y=3.05,x=1.42,w=1.55,L=1.32,C=new Gt(y*2+.3,.22,x*2+.3),E=new it(C,l);E.position.set(-1.5,L-.14,0),E.receiveShadow=!0,this.group.add(E),this.disposables.push(C);const P=new Gt(y*2+.3,w,.16);for(const O of[-x-.06,x+.06]){const G=new it(P,s);G.position.set(-1.5,L+w/2,O),G.castShadow=!0,this.group.add(G)}this.disposables.push(P);const W=new Gt(.16,w,x*2+.3);for(const O of[-1.5-y-.07,-1.5+y+.07]){const G=new it(W,s);G.position.set(O,L+w/2,0),G.castShadow=!0,this.group.add(G)}this.disposables.push(W);const _=new Gt(.12,w*.92,.3);for(let O=0;O<5;O++)for(const G of[-x-.16,x+.16]){const V=new it(_,r);V.position.set(-1.5-y+.6+O*1.45,L+w/2,G),this.group.add(V)}this.disposables.push(_);const M=new ve(.82,.82,.62,16);M.rotateX(Math.PI/2);const D=new ve(.34,.34,.66,10);D.rotateX(Math.PI/2);for(const O of[3.4,-1.1,-2.5])for(const G of[-1.55,1.55]){const V=new it(M,r);V.position.set(O,.86,G),V.castShadow=!0,this.group.add(V),this.wheels.push(V);const rt=new it(D,a);rt.position.set(O,.86,G*1.02),this.group.add(rt)}this.disposables.push(M,D);const z=new Gt(.16,2.6,.16);for(const O of[-x-.1,x+.1]){const G=new it(z,a);G.position.set(-1.5,L+w+.6,O),this.group.add(G)}const X=new Gt(.9,.16,x*2+.4),Y=new it(X,a);Y.position.set(-1.5,L+w+1.9,0),this.group.add(Y),this.disposables.push(z,X),this.buildSlots(e,y,x,w),this.group.updateMatrixWorld(!0),this.bedOrigin.set(-1.5,L,0),this.group.localToWorld(this.bedOrigin),this.bedHome.copy(this.bedOrigin),this.discharge.set(-1.5,L+w+.95,0),this.group.localToWorld(this.discharge),this.dischargeHome.copy(this.discharge),this.home.copy(this.group.position),this.pump.set(t.halfX*.72,1.55,t.halfZ+3.1),this.pumpIntake.set(t.halfX*.72,1.2,t.halfZ+.55),this.buildPump(t,s,r,a)}buildSlots(t,e,n,s){const r=this.group.rotation.y,o=Math.cos(r),a=Math.sin(r);for(let l=.42;l>=.27;l-=.02){this.slots.length=0;const h=Math.floor(e*2/l),c=Math.floor(n*2/l),u=l*.84,d=26;for(let f=0;f<d&&this.slots.length<t;f++){const g=.2+f*u,v=Math.max(0,g-s),m=v>0?Math.max(0,1-v/1.15):1;if(m<=.05)break;for(let p=0;p<h;p++)for(let y=0;y<c;y++){const x=(-e+l*.5+p*l)*(v>0?m:1),w=(-n+l*.5+y*l)*(v>0?m:1),L=x+(Math.random()-.5)*l*.3,C=w+(Math.random()-.5)*l*.3,E=g+(Math.random()-.5)*u*.25;this.slots.push(new R((L*o+C*a)*Os,E*Os,(-L*a+C*o)*Os))}}if(this.slots.length>=t)break}this.slots.sort((l,h)=>l.y-h.y)}buildPump(t,e,n,s){const r=new ce;r.position.set(this.pump.x,0,this.pump.z),r.rotation.y=Math.PI,r.scale.setScalar(.62);const o=new Gt(3.2,.34,2.2),a=new it(o,n);a.position.y=1.25,r.add(a);const l=new ve(.92,.92,1.9,16);l.rotateZ(Math.PI/2);const h=new it(l,e);h.position.set(0,2.1,0),h.castShadow=!0,r.add(h);const c=new Fe(.72,.42,10,20),u=new it(c,s);u.position.set(-.9,2.1,0),u.rotation.y=Math.PI/2,r.add(u);const d=new ve(.14,.18,1.3,8),f=new it(d,n);f.position.set(.7,3.1,-.5),r.add(f);const g=new Fe(1.15,.06,6,18,Math.PI),v=new it(g,s);v.position.set(0,2.4,1),v.rotation.x=Math.PI/2,r.add(v),this.pumpGroup=r,this.disposables.push(o,l,c,d,g)}driveAway(){this.driveT<0&&(this.driveT=0)}get leaving(){return this.driveT>=0}update(t,e){this.idle+=t;const n=.006+e*.016;if(this.group.position.y=this.home.y+Math.sin(this.idle*22)*n,this.driveT>=0){this.driveT+=t;const s=Math.min(4.2,this.driveT*1.5),r=Math.cos(this.group.rotation.y)*s*t,o=-Math.sin(this.group.rotation.y)*s*t;this.group.position.x+=r,this.group.position.z+=o,this.bedOrigin.set(this.bedHome.x+(this.group.position.x-this.home.x),this.bedHome.y,this.bedHome.z+(this.group.position.z-this.home.z)),this.discharge.set(this.dischargeHome.x+(this.group.position.x-this.home.x),this.dischargeHome.y,this.dischargeHome.z+(this.group.position.z-this.home.z));for(const a of this.wheels)a.rotation.z-=s*t*1.2}}dispose(){this.disposables.forEach(t=>t.dispose()),this.pumpGroup?.removeFromParent()}}const Gc=["#c85a2e","#3f6f9c","#8a8f3d","#b0483f"];class Hc{constructor(t,e=0){T(this,"group",new ce);T(this,"hips",new ce);T(this,"torso",new ce);T(this,"legs",[]);T(this,"arms",[]);T(this,"disposables",[]);T(this,"phase",0);T(this,"lean",0);T(this,"lastX",0);T(this,"lastZ",0);T(this,"smoothedSpeed",0);this.group.name="worker";const n=new zt({color:"#3c4a52",roughness:.55}),s=new zt({color:Gc[e%Gc.length],roughness:.82}),r=new zt({color:"#c79a76",roughness:.78}),o=new zt({color:"#2f3a3f",roughness:.85});this.disposables.push(n,s,r,o);const a=new Un(.098,.66,3,8),l=new Gt(.15,.09,.29);for(const C of[-.11,.11]){const E=new ce;E.position.set(C,.9,0);const P=new it(a,n);P.position.y=-.43,P.castShadow=!0,E.add(P);const W=new it(l,n);W.position.set(0,-.85,.05),E.add(W),this.legs.push(E),this.hips.add(E)}this.disposables.push(a,l);const h=new Un(.19,.34,4,10),c=new it(h,n);c.position.y=1.13,c.scale.set(1.15,1,.78),c.castShadow=!0,this.torso.add(c);const u=new Un(.205,.26,4,10),d=new it(u,s);d.position.y=1.36,d.scale.set(1.18,1,.8),d.castShadow=!0,this.torso.add(d);const f=new ve(.055,.065,.09,6),g=new it(f,r);g.position.y=1.56,this.torso.add(g);const v=new Sn(.098,12,10),m=new it(v,r);m.position.y=1.65,m.scale.set(.92,1.08,1),m.castShadow=!0,this.torso.add(m);const p=new Sn(.104,12,8,0,Math.PI*2,0,Math.PI*.55),y=new it(p,o);y.position.y=1.665,this.torso.add(y);const x=new Gt(.16,.018,.09),w=new it(x,o);w.position.set(0,1.665,.11),this.torso.add(w);const L=new Un(.055,.44,3,8);for(const C of[-.235,.235]){const E=new ce;E.position.set(C,1.46,0);const P=new it(L,s);P.position.y=-.27,P.castShadow=!0,E.add(P);const W=new it(new Sn(.052,8,6),r);W.position.y=-.53,E.add(W),this.arms.push(E),this.torso.add(E)}this.disposables.push(h,u,f,v,p,x,L),this.group.add(this.hips,this.torso)}update(t,e,n,s,r){const o=Math.hypot(e-this.lastX,s-this.lastZ);this.lastX=e,this.lastZ=s;const a=o/Math.max(t,.001);this.smoothedSpeed=Ot(this.smoothedSpeed,a,6,t),this.phase+=o/.72*Math.PI;const l=Lt(this.smoothedSpeed/1.2,0,1),h=Math.sin(this.phase)*.62*l;this.legs[0].rotation.x=h,this.legs[1].rotation.x=-h;const c=Math.sin(this.phase-.35)*.42*l;this.arms[0].rotation.x=-c,this.arms[1].rotation.x=c;const u=Math.abs(Math.cos(this.phase))*.035*l;this.lean=Ot(this.lean,l*.09,4,t),this.hips.position.y=u,this.torso.position.y=u,this.torso.rotation.x=this.lean,this.torso.rotation.z=Math.sin(this.phase)*.035*l,this.group.position.set(e,n,s),this.group.rotation.y=r}gripForward(){this.arms[0].rotation.set(-1.02,0,.16),this.arms[1].rotation.set(-1.02,0,-.16)}reachUp(t){this.arms[0].rotation.set(-2.1+Math.sin(t)*.25,0,.3),this.arms[1].rotation.set(-.3,0,-.12)}setVisible(t){this.group.visible=t}dispose(){this.disposables.forEach(t=>t.dispose())}}const n0=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,i0=`
  precision mediump float;
  varying vec2 vUv;
  void main() {
    float d = length(vUv - 0.5) * 2.0;
    // soft-edged, never fully black: this is water scattering, not a hole
    float a = smoothstep(1.0, 0.15, d);
    vec3 tint = mix(vec3(1.0), vec3(0.34, 0.38, 0.36), a);
    gl_FragColor = vec4(tint, 1.0);
  }
`;class s0{constructor(t=6){T(this,"mesh");T(this,"geo");T(this,"mat");T(this,"m",new Ht);T(this,"q",new hn().setFromAxisAngle(new R(1,0,0),-Math.PI/2));T(this,"p",new R);T(this,"s",new R);T(this,"used",0);this.geo=new Hn(1,1),this.mat=new Xe({vertexShader:n0,fragmentShader:i0,transparent:!0,depthWrite:!1,blending:oo}),this.mesh=new zn(this.geo,this.mat,t),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=7,this.mesh.name="contact-shadows"}begin(){this.used=0}add(t,e,n,s){this.used>=this.mesh.instanceMatrix.count||(this.p.set(t,e+.012,n),this.s.set(s*2,s*2,1),this.m.compose(this.p,this.q,this.s),this.mesh.setMatrixAt(this.used++,this.m))}end(){this.mesh.count=this.used,this.mesh.instanceMatrix.needsUpdate=!0}dispose(){this.geo.dispose(),this.mat.dispose()}}class no{constructor(t){T(this,"root",new ce);T(this,"variant");T(this,"terrain");T(this,"water");T(this,"vines");T(this,"berries");T(this,"particles");T(this,"gate");T(this,"reel");T(this,"boom");T(this,"hose");T(this,"truck");T(this,"driver");T(this,"hand");T(this,"sun");T(this,"hemi");T(this,"fog");T(this,"contact",new s0(8));T(this,"bubbleColor",new gt("#dff2f0"));T(this,"dropColor",new gt("#cfe8ea"));T(this,"foamColor",new gt("#f4faf7"));T(this,"leafColor",new gt("#6d7c3a"));T(this,"popBudget",0);T(this,"eveningSun",new gt("#ffb05f"));const e=qi(),n=Lg(t);if(this.variant=n,this.root.name="world",this.terrain=new Ng(n,e.decor),this.water=new zg(n,e.waterSegments,si()==="low"?0:1),this.vines=new Hg(n,e.vines),this.particles=new Yg(e.particles),this.berries=new Wg(n,this.water,this.vines.anchors,e.berries,{onSurface:(s,r,o,a)=>this.onSurface(s,r,o,a),onBubble:(s,r,o)=>this.onBubble(s,r,o),onBedLand:(s,r,o)=>this.onBedLand(s,r,o)},si()==="low"),n.berryCount=this.berries.n,this.fog=new fa(n.skyBottom.clone().lerp(n.skyTop,.3),22,105),this.gate=new $g(n),this.reel=new jg(n),this.boom=new Qg(n),this.truck=new e0(n,this.berries.n),this.hose=new t0(this.truck.pumpIntake,this.truck.pump,this.truck.discharge),this.driver=new Hc(n.seed,0),this.hand=new Hc(n.seed^81,1),this.hand.update(.016,this.truck.pump.x-1.5,1.62,this.truck.pump.z+.4,-2.5),this.berries.setBed(this.truck.bedOrigin,this.truck.slots),this.water.setRaft(this.berries.densityTex,1),this.water.setFog(this.fog.color,this.fog.near,this.fog.far),this.hemi=new lg(n.skyTop.clone(),new gt("#54492e"),1),this.sun=new dg(n.sunColor.clone(),2.7),this.sun.position.set(16,26,13),e.shadows){this.sun.castShadow=!0,this.sun.shadow.mapSize.set(si()==="high"?2048:1536,si()==="high"?2048:1536);const s=this.sun.shadow.camera,r=Math.max(n.halfX,n.halfZ)+11;s.left=-r,s.right=r,s.top=r,s.bottom=-r,s.near=1,s.far=80,this.sun.shadow.bias=-6e-4,this.sun.shadow.normalBias=.02,this.driver.group.traverse(o=>{o.castShadow=!0}),this.hand.group.traverse(o=>{o.castShadow=!0})}this.root.add(this.terrain.group,this.vines.mesh,this.berries.group,this.water.mesh,this.particles.points,this.contact.mesh,this.gate.group,this.reel.group,this.boom.group,this.hose.group,this.truck.group,this.driver.group,this.hand.group,this.hemi,this.sun,this.sun.target),this.truck.pumpGroup&&this.root.add(this.truck.pumpGroup),this.reel.group.visible=!1,this.boom.group.visible=!1,this.hose.group.visible=!1,this.water.level=Nn,this.water.targetLevel=Nn}onSurface(t,e,n,s){const r=this.particles,o=s>1.4?3:2;for(let a=0;a<o;a++)r.spawn(In.Droplet,t+(Math.random()-.5)*.2,e+.08,n+(Math.random()-.5)*.2,(Math.random()-.5)*1.3,.9+Math.random()*1.5,(Math.random()-.5)*1.3,.07+Math.random()*.07,.45+Math.random()*.3,this.dropColor);r.spawn(In.Foam,t,e,n,0,0,0,.16,.55,this.foamColor),this.popBudget<=0?(yg(.55+Math.random()*.5),this.popBudget=2+Math.floor(Math.random()*4)):this.popBudget--}onBubble(t,e,n){this.particles.spawn(In.Bubble,t+(Math.random()-.5)*.16,e,n+(Math.random()-.5)*.16,(Math.random()-.5)*.15,.5+Math.random()*.5,(Math.random()-.5)*.15,.09+Math.random()*.09,.7+Math.random()*.6,this.bubbleColor)}onBedLand(t,e,n){Math.random()<.22&&this.particles.spawn(In.Spark,t,e+.1,n,(Math.random()-.5)*.6,.3,(Math.random()-.5)*.6,.06,.3,this.leafColor)}setEvening(t){const e=Math.min(Math.max(t,0),1);this.sun.color.copy(this.variant.sunColor).lerp(this.eveningSun,e),this.sun.intensity=3.1-e*1.15,this.sun.position.set(16-e*6,26-e*17,13+e*6),this.hemi.intensity=.8-e*.26,this.terrain.setDusk(e*.8)}spawnChurn(t,e,n,s){const r=this.particles,o=Math.min(3,1+Math.floor(s*3));for(let a=0;a<o;a++)r.spawn(In.Droplet,t+(Math.random()-.5)*.8,e+.06,n+(Math.random()-.5)*.8,(Math.random()-.5)*1.6,.8+Math.random()*1.5*s,(Math.random()-.5)*1.6,.07+Math.random()*.08,.4+Math.random()*.4,this.dropColor);Math.random()<.4*s&&r.spawn(In.Foam,t,e,n,0,0,0,.28,.7,this.foamColor),Math.random()<.1&&r.spawn(In.Leaf,t+(Math.random()-.5)*1,e+.2,n+(Math.random()-.5)*1,(Math.random()-.5)*1.4,.6,(Math.random()-.5)*1.4,.13,4+Math.random()*4,this.leafColor)}dispose(){this.contact.dispose(),this.driver.dispose(),this.hand.dispose(),this.terrain.dispose(),this.water.dispose(),this.vines.dispose(),this.berries.dispose(),this.particles.dispose(),this.gate.dispose(),this.reel.dispose(),this.boom.dispose(),this.hose.dispose(),this.truck.dispose(),this.root.removeFromParent(),this.root.clear()}}class io{constructor(){T(this,"camera");T(this,"cur",{target:new R,yaw:0,pitch:.5,dist:40,fov:46,bias:0});T(this,"want",null);T(this,"time",0);T(this,"breathe",0);this.camera=new Ke(46,1,.3,600),this.camera.position.set(0,22,44)}set(t,e=!1){this.want=t,e&&(this.cur.target.copy(t.target),this.cur.yaw=t.yaw,this.cur.pitch=t.pitch,this.cur.dist=t.dist,this.cur.fov=t.fov,this.cur.bias=t.bias??0,this.apply())}retarget(t){this.want&&this.want.target.copy(t)}update(t){this.time+=t;const e=this.want;if(!e)return;const n=qs(),s=(e.rate??1.6)*(n?2.6:1);this.cur.target.x=Ot(this.cur.target.x,e.target.x,s,t),this.cur.target.y=Ot(this.cur.target.y,e.target.y,s,t),this.cur.target.z=Ot(this.cur.target.z,e.target.z,s,t);let r=e.yaw-this.cur.yaw;for(;r>Math.PI;)r-=Math.PI*2;for(;r<-Math.PI;)r+=Math.PI*2;this.cur.yaw=Ot(this.cur.yaw+r,e.yaw,s,t),this.cur.pitch=Ot(this.cur.pitch,e.pitch,s,t),this.cur.dist=Ot(this.cur.dist,e.dist,s,t),this.cur.fov=Ot(this.cur.fov,e.fov,s,t),this.cur.bias=Ot(this.cur.bias,e.bias??0,s,t),this.breathe=n?0:Math.sin(this.time*.28)*.012,this.apply()}apply(){const t=this.cur,e=t.pitch+this.breathe,n=Math.cos(e),s=Math.sin(e);this.camera.position.set(t.target.x+Math.sin(t.yaw)*n*t.dist,t.target.y+s*t.dist,t.target.z+Math.cos(t.yaw)*n*t.dist),this.camera.lookAt(t.target.x,t.target.y-t.bias,t.target.z),Math.abs(this.camera.fov-t.fov)>.01&&(this.camera.fov=t.fov,this.camera.updateProjectionMatrix())}resize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}static blend(t,e,n){return{target:t.target.clone().lerp(e.target,n),yaw:le(t.yaw,e.yaw,n),pitch:le(t.pitch,e.pitch,n),dist:le(t.dist,e.dist,n),fov:le(t.fov,e.fov,n),bias:le(t.bias??0,e.bias??0,n),rate:t.rate??e.rate}}}const r0={0:0,1:0,2:1,3:1,4:2,5:3,6:3,7:4,8:4},o0=.3,Qo=.52,Vc=i=>(i*1.92*Qo)**2*.866*.95;class a0{constructor(t,e,n){T(this,"scene",new Xm);T(this,"director",new io);T(this,"world");T(this,"step",0);T(this,"stepTime",0);T(this,"seed");T(this,"fill",0);T(this,"revealPhase",0);T(this,"boomGrab",null);T(this,"boomSettled",0);T(this,"hoseGrabbed",!1);T(this,"pumping",!1);T(this,"pumpProgress",0);T(this,"pumpTotal",1);T(this,"doneT",0);T(this,"endShown",!1);T(this,"lastStirSound",0);T(this,"gateAssist",0);T(this,"tmp3",new R);T(this,"tmp2",new tt);T(this,"tmpB",new tt);T(this,"shot",{target:new R,yaw:.35,pitch:.4,dist:60,fov:46,bias:0,rate:1.6});T(this,"berryMs",0);this.input=t,this.ui=e,this.seed=n,this.scene.background=null,this.world=new no(n),this.scene.fog=this.world.fog,this.scene.add(this.world.root),this.enter(0)}get currentStep(){return this.step}get elapsedInStep(){return this.stepTime}get suctionProgress(){return this.pumpProgress}get variant(){return this.world.variant}restart(t,e=!1){const n=t?this.seed:Math.random()*16777215|0;this.seed=n,this.scene.remove(this.world.root),this.world.dispose(),this.world=new no(n),this.scene.fog=this.world.fog,this.scene.add(this.world.root),this.fill=0,this.pumping=!1,this.pumpProgress=0,this.doneT=0,this.endShown=!1,this.boomGrab=null,this.boomSettled=0,this.hoseGrabbed=!1,this.gateAssist=0,this.ui.showEndCard(!1),this.ui.showPump(!1),Jo.stop(),jo.stop(),Ys.stop(),this.input.reset(),this.enter(e?8:0)}debugJump(t){const e=this.world;if(t>=2&&t!==0&&(this.fill=1,e.gate.setTarget(0),e.gate.open=0,e.water.targetLevel=ti,e.water.level=ti),t>=4&&t<=7){e.reel.group.visible=!0,e.berries.harvestAll();for(let n=0;n<400;n++)e.berries.update(1/30,this.director.camera)}if(t>=5&&t<=7){e.boom.group.visible=!0;const n=e.berries.floatCentroid(this.tmp2);e.boom.deploy(n,e.berries.floatingCount,Vc(e.berries.radius)),e.berries.setContainment(e.boom.contain),e.berries.packFactor=Qo,e.reel.reset(-e.variant.halfX*.72,-e.variant.halfZ*.72,2.4)}t>=6&&t<=7&&(e.hose.group.visible=!0,e.hose.place(e.boom.centre.x,e.boom.centre.y,e.boom.centre),e.hose.connected=!0),this.enter(t)}rebuildForQuality(){const t=this.step,e=this.fill;this.scene.remove(this.world.root),this.world.dispose(),this.world=new no(this.seed),this.scene.fog=this.world.fog,this.scene.add(this.world.root),this.fill=t>=2?1:e,t<2?(this.world.water.targetLevel=le(Nn,ti,Ve(e)),this.world.water.level=this.world.water.targetLevel,this.world.gate.setTarget(e),this.world.gate.open=e,this.enter(t)):this.debugJump(t)}enter(t){this.step=t,this.stepTime=0,this.ui.setStep(r0[t]??0),this.ui.hideHint();const e=this.world;switch(t){case 0:e.reel.group.visible=!1,e.boom.group.visible=!1,e.hose.group.visible=!1;break;case 1:_n("おみずを いれてみよう");break;case 2:{e.reel.group.visible=!0,e.reel.reset(-e.variant.halfX*.42,-e.variant.halfZ*.42,.7),e.gate.setTarget(0),_n("ぐるぐる いくよ");break}case 3:this.revealPhase=0,e.berries.harvestAll();break;case 4:{e.boom.group.visible=!0;const n=e.berries.floatCentroid(this.tmp2);e.boom.deploy(n,e.berries.floatingCount,Vc(e.berries.radius)),e.berries.setContainment(e.boom.contain),_n("ぎゅーっと あつめよう");break}case 5:{e.hose.group.visible=!0;const n=e.boom.centre;e.berries.makeStrays(10,n);const s=new tt(n.x+e.variant.halfX*.12,n.y-e.variant.halfZ*.62);Gi(e.variant,s,1.6),e.hose.place(s.x,s.y,n),_n("ホースを もっていこう");break}case 6:this.ui.showPump(!0),this.pumpTotal=Math.max(1,e.berries.onWater-e.berries.strays),e.berries.intakeRate=this.pumpTotal/32,e.berries.setHose(e.hose.curve,.62),_n("すいこむよー！");break;case 7:this.doneT=0,this.ui.showPump(!1),e.berries.setIntake(!1),Ys.stop(),_n("トラック いっぱい！"),wg();break;case 8:{e.water.level=ti,e.water.targetLevel=ti,e.gate.setTarget(1),e.gate.open=1,this.fill=1,e.reel.group.visible=!0,e.reel.reset(0,0,.4),e.hose.group.visible=!0;const n=new tt(e.variant.halfX*.3,e.variant.halfZ*.3);e.hose.place(n.x,n.y,n),e.hose.connected=!0,e.berries.setHose(e.hose.curve,.62),e.berries.recycleToVine=!0,this.ui.showPump(!0),_n("すきなだけ あそんでね");break}}}update(t,e,n){this.stepTime+=t;const s=this.world,r=n>=e;this.ui.sheetOpen||this.handleInput(t,e,n,r),s.gate.update(t),s.water.update(t),s.vines.update(t,s.water.flood),s.reel.update(t,(c,u)=>s.water.heightAt(c,u)),s.boom.group.visible&&s.boom.update(t,(c,u)=>s.water.heightAt(c,u)),s.hose.group.visible&&(s.hose.update(t,(c,u)=>s.water.heightAt(c,u),this.pumping?1:0),s.berries.setHose(s.hose.curve,.62)),this.updateWorkers(t),s.truck.update(t,this.pumping?1:0);const o=performance.now();s.berries.update(t,this.director.camera),this.berryMs=this.berryMs*.9+(performance.now()-o)*.1;const a=s.contact;a.begin();const l=s.water.level;if(s.water.flood>.25){if(s.reel.group.visible&&a.add(s.reel.pos.x,l,s.reel.pos.y,1.35),s.driver.group.visible){const c=s.driver.group.position;a.add(c.x,l,c.z,.5)}if(s.hose.group.visible){const c=s.hose.nozzle.position;a.add(c.x,l,c.z,.62)}}a.end(),s.particles.update(t,s.water.level),s.particles.setProjection(n,this.director.camera.fov),Nl.set(.05),Jo.set(s.gate.open*(this.fill<1?.55:.12));const h=(this.step===2||this.step===8)&&s.reel.group.visible;jo.set(h?.18+Lt(s.reel.speed/3.6,0,1)*.5:0),Ys.set(this.pumping?.6:0),this.updateStep(t,e,n,r),this.composeShot(r,e,n),this.director.set(this.shot),this.director.update(t),this.updateHint(t,e,n)}updateWorkers(t){const e=this.world,n=e.reel;if(this.step===2||this.step===8){const r=n.pos.x-Math.sin(n.heading)*1.32,o=n.pos.y-Math.cos(n.heading)*1.32;e.driver.update(t,r,Ri(e.variant,r,o),o,n.heading),e.driver.gripForward(),e.driver.setVisible(!0)}else if(this.step===4){const r=e.boom.posB,o=Math.atan2(e.boom.centre.x-r.x,e.boom.centre.y-r.y);this.tmpB.set(r.x-Math.sin(o)*1.1,r.y-Math.cos(o)*1.1),Gi(e.variant,this.tmpB,.4),e.driver.update(t,this.tmpB.x,Ri(e.variant,this.tmpB.x,this.tmpB.y),this.tmpB.y,o),e.driver.gripForward(),e.driver.setVisible(!0)}else if(this.step===5||this.step===6){const r=e.hose.nozzle.position,o=Math.atan2(r.x-e.boom.centre.x,r.z-e.boom.centre.y);e.driver.update(t,r.x-.85,Ri(e.variant,r.x-.85,r.z-.7),r.z-.7,o),e.driver.gripForward(),e.driver.setVisible(!0)}else if(this.step===1){const r=e.gate.handle;e.driver.update(t,r.x+.34,e.gate.deckY,r.z-.62,Math.PI),e.driver.reachUp(this.stepTime*5*(.2+e.gate.open)),e.driver.setVisible(!0)}else if(e.driver.setVisible(this.step===0||this.step===3),this.step===3){const r=n.pos.x-Math.sin(n.heading)*1.32,o=n.pos.y-Math.cos(n.heading)*1.32;e.driver.update(t,r,Ri(e.variant,r,o),o,n.heading),e.driver.gripForward()}else if(this.step===0){const r=e.gate.handle;e.driver.update(t,r.x+.34,e.gate.deckY,r.z-.62,Math.PI),e.driver.reachUp(this.stepTime)}e.hand.setVisible(this.step>=5&&this.step<=7)}handleInput(t,e,n,s){const r=this.input.pointer,o=this.world;switch(this.step){case 0:r.justDown&&this.enter(1);break;case 1:{if(r.down&&(Math.abs(r.delta.y)>.01||Math.abs(r.delta.x)>.01)){const a=-r.delta.y/(n*.32);o.gate.nudge(a)}break}case 2:case 8:{if(r.down&&!this.overPumpButton(r.screen.x,r.screen.y)){const a=this.input.worldOnPlane(this.director.camera,o.water.level,this.tmp3);if(a){this.tmp2.set(a.x,a.z);const l=r.delta.length()/Math.max(t,.001),h=Lt(.55+l/(n*.9),.55,1);o.reel.steerTo(this.tmp2,h,t)}}else o.reel.coast(t);break}case 3:{if(r.down){const a=this.input.worldOnPlane(this.director.camera,o.water.level,this.tmp3);a&&ls(o.variant,a.x,a.z)>0&&(o.berries.setStir(this.tmp2.set(a.x,a.z),1),o.water.setDisturb(1,a.x,a.z,.1,2.2),this.stirSound(a.x,a.z))}else o.berries.setStir(null),o.water.fadeDisturb(1,t,2.5);break}case 4:{if(r.justDown){const a=this.input.worldOnPlane(this.director.camera,o.water.level,this.tmp3);a&&(this.boomGrab=o.boom.pickHandle(this.tmp2.set(a.x,a.z)))}if(r.down&&this.boomGrab){const a=this.input.worldOnPlane(this.director.camera,o.water.level,this.tmp3);if(a){o.boom.haul(this.boomGrab,this.tmp2.set(a.x,a.z),t);const l=this.boomGrab==="a"?o.boom.posA:o.boom.posB;o.water.setDisturb(3,l.x,l.y,.06,2.6),o.boom.haulRate>.6&&this.stirSound(l.x,l.y,.5)}}r.justUp&&(this.boomGrab=null),r.down||o.water.fadeDisturb(3,t,2);break}case 5:{if(r.justDown&&this.input.worldOnPlane(this.director.camera,o.water.level,this.tmp3)&&(this.hoseGrabbed=!0),r.down&&this.hoseGrabbed){const a=this.input.worldOnPlane(this.director.camera,o.water.level,this.tmp3);if(a){const l=this.tmpB.set(a.x,a.z);o.hose.dragTo(l.x,l.y,t),o.water.setDisturb(2,l.x,l.y,.07,1.8)}}r.justUp&&(this.hoseGrabbed=!1);break}}}parkReel(t){const e=this.world,n=this.tmpB.set(-e.variant.halfX*.74,-e.variant.halfZ*.74);e.reel.pos.distanceTo(n)>1.2?e.reel.steerTo(n,.55,t):e.reel.coast(t)}stirSound(t,e,n=1){const s=performance.now();s-this.lastStirSound>220&&(this.lastStirSound=s,Sg(.5*n))}overPumpButton(t,e){if(!this.ui.pumpVisible)return!1;const n=this.ui.pumpRect();return t>=n.left-12&&t<=n.right+12&&e>=n.top-12&&e<=n.bottom+12}updateStep(t,e,n,s){const r=this.world;switch(this.step){case 0:this.stepTime>(qs()?2.4:4.5)&&this.enter(1);break;case 1:{r.gate.target<.05?(this.gateAssist+=t,this.gateAssist>18&&r.gate.nudge(t*.09)):this.gateAssist=0,this.fill=Lt(this.fill+r.gate.open*t*.15,0,1),r.water.targetLevel=le(Nn,ti,Ve(this.fill)),r.gate.open>.05&&Math.random()<r.gate.open*.9&&r.spawnChurn(r.gate.mouth.x,r.water.level,r.gate.mouth.z+1.4,r.gate.open*.8),r.water.setDisturb(0,r.gate.mouth.x,r.gate.mouth.z+1.6,r.gate.open*.09,5.5),this.fill>=.999&&this.enter(2);break}case 2:{r.water.setDisturb(0,r.reel.churn.x,r.reel.churn.z,.02+Lt(r.reel.speed/1.25,0,1)*.05,1.5);const o=r.reel.frontPoint(this.tmp3),a=Lt(r.reel.speed/1,0,1);r.berries.harvestAt(o.x,o.z,r.reel.swathe,.07+a*.5),Math.random()<.7&&r.spawnChurn(o.x,r.water.level,o.z,.2+a*.6),r.berries.harvested>=o0&&this.enter(3);break}case 3:{r.reel.coast(t),r.water.fadeDisturb(0,t,1.2);const o=qs(),a=o?1.6:3.2,l=a+(o?1.6:3.4),h=l+(o?1.4:2.6);this.revealPhase=this.stepTime<a?0:this.stepTime<l?1:2,this.stepTime>h&&this.enter(4),this.revealPhase===1&&this.stepTime-t<a&&_n("いっぱい ういた！");break}case 4:{this.parkReel(t);const o=r.boom.tightness;r.berries.packFactor=le(1,Qo,Ve(o)),o>.93?(this.boomSettled+=t,this.boomSettled===t&&Jr(),this.boomSettled>1.6&&this.enter(5)):this.boomSettled=Math.max(0,this.boomSettled-t*.5);break}case 5:{this.parkReel(t),r.hose.trySnap(1.7)&&(Ul(),_n("カチッ"),window.setTimeout(()=>{this.step===5&&this.enter(6)},700));break}case 6:{r.berries.setIntake(this.pumping,r.hose.intakePoint(this.tmp3),r.boom.radius+1.5),this.pumping?(r.water.setDisturb(2,r.hose.mouth.x,r.hose.mouth.z,.11,2.4),Math.random()<.5&&r.spawnChurn(r.hose.mouth.x,r.water.level,r.hose.mouth.z,.35),Math.random()<.3&&Jr()):r.water.fadeDisturb(2,t,2);const o=r.berries.onWater-r.berries.strays;this.pumpProgress=Ot(this.pumpProgress,Lt(1-o/this.pumpTotal,0,1),1.4,t),this.ui.setPumpCalling(!this.pumping),o<=0&&r.berries.inHoseCount===0&&(this.pumping=!1,this.enter(7));break}case 7:{this.doneT+=t,r.setEvening(Lt(this.doneT/6,0,1)),r.water.fadeDisturb(2,t,1.5),this.doneT>2.2&&(r.hose.group.visible=!1),this.doneT>2.6&&!r.truck.leaving&&r.truck.driveAway(),this.doneT>6.5&&!this.endShown&&(this.endShown=!0,this.ui.showEndCard(!0));break}case 8:{r.water.setDisturb(0,r.reel.churn.x,r.reel.churn.z,.02+Lt(r.reel.speed/1.25,0,1)*.05,1.5);const o=r.reel.frontPoint(this.tmp3),a=Lt(r.reel.speed/1,0,1);r.berries.harvestAt(o.x,o.z,r.reel.swathe,.07+a*.5),Math.random()<.6&&r.spawnChurn(o.x,r.water.level,o.z,.2+a*.6),r.berries.setIntake(this.pumping,r.hose.intakePoint(this.tmp3),5.5),this.pumping&&Math.random()<.3&&Jr();break}}}composeShot(t,e,n){const s=this.world,r=s.variant,o=this.shot,a=Math.max(r.halfX,r.halfZ),l=t?1.34:1,h=t?60:46;switch(o.rate=1.6,o.bias=0,this.step){case 0:{const c=Lt(this.stepTime/5,0,1);o.target.set(r.halfX*.18,.5,.4),o.yaw=.5-c*.16,o.pitch=(t?.56:.4)+c*.03,o.dist=a*3.5*(t?1.2:1)-c*a*.3,o.fov=h,o.rate=.7;break}case 1:{const c=s.gate.group.position;o.target.set(c.x*.6,.8,le(c.z+3.4,-r.halfZ*.1,this.fill*.85)),o.yaw=t?.12:.24,o.pitch=t?.44:.3,o.dist=(t?12:11)*l,o.fov=h,o.bias=t?1.5:.5,o.rate=1.1;break}case 2:{const c=s.reel;o.target.set(c.pos.x+Math.sin(c.viewHeading)*.9,s.water.level+.35,c.pos.y+Math.cos(c.viewHeading)*.9),o.yaw=c.viewHeading+Math.PI+(t?.22:.36),o.pitch=t?.52:.3,o.dist=t?5.6:4.6,o.fov=t?58:52,o.bias=t?1:.35,o.rate=2.2;break}case 3:{const c=s.berries.floatCentroid(this.tmp2),u=qs(),d=u?1.6:3.2,f=u?1.6:3.4;if(this.revealPhase===0)o.target.set(s.reel.churn.x,s.water.level+.15,s.reel.churn.z),o.yaw=s.reel.viewHeading+Math.PI+.95,o.pitch=.08,o.dist=3.4,o.fov=t?66:58,o.bias=.75,o.rate=1.1;else{const g=Lt((this.stepTime-d)/f,0,1),v=Ve(g);o.target.set(c.x*.5,s.water.level,c.y*.5),o.yaw=s.reel.viewHeading+Math.PI+.95-v*.6,o.pitch=le(.05,t?1.05:.88,v),o.dist=le(3.4,a*(t?2.4:1.95),v),o.fov=le(t?66:58,h,v),o.bias=le(.75,0,v),o.rate=.95}break}case 4:{const c=s.boom.centre,u=s.boom.radius*2;o.target.set(c.x,s.water.level,c.y),o.yaw=t?.06:.16,o.pitch=t?1:.82,o.dist=Lt(u*(t?1.6:1.2)+3.4,7.5,a*3),o.fov=h,o.rate=.9;break}case 5:{const c=s.boom.centre,u=s.hose.nozzle.position;o.target.set((c.x+u.x)/2,s.water.level+.2,(c.y+u.z)/2),o.yaw=Math.PI+(t?.14:.3),o.pitch=t?.62:.5,o.dist=t?9.5:8.5,o.fov=h,o.bias=t?1.2:.4,o.rate=1.2;break}case 6:{const c=Lt(this.pumpProgress,0,1),u={target:new R(s.hose.mouth.x,s.water.level+.1,s.hose.mouth.z),yaw:Math.PI+(t?.1:.26),pitch:t?.62:.52,dist:t?7.5:6.6,fov:t?64:54,bias:t?1.5:.5},f={target:s.hose.archPoint(this.tmp3).clone(),yaw:Math.PI+(t?.34:.46),pitch:t?.3:.24,dist:t?3.6:3.2,fov:t?62:52,bias:t?.35:.1},g=s.truck.bedOrigin,v={target:new R(g.x,g.y+.9,g.z),yaw:t?1.35:1.25,pitch:t?.4:.34,dist:t?6.2:6.6,fov:t?60:50,bias:t?.35:.2},m=c<.4?io.blend(u,f,Ve(c/.4)):c<.72?f:io.blend(f,v,Ve((c-.72)/.28));o.target.copy(m.target),o.yaw=m.yaw,o.pitch=m.pitch,o.dist=m.dist,o.fov=m.fov,o.bias=m.bias??0,o.rate=.8;break}case 7:{const c=Ve(Lt((this.doneT-2.8)/5.5,0,1)),u=s.truck.bedOrigin;o.target.set(le(u.x,0,c),le(u.y+1,1.5,c),le(u.z,r.halfZ*.25,c)),o.yaw=le(1.25,.5,c),o.pitch=le(.4,t?.44:.32,c),o.dist=le(6.6,a*3*l,c),o.fov=le(t?60:50,h,c),o.rate=.5;break}case 8:{const c=s.reel;o.target.set(c.pos.x,s.water.level+.5,c.pos.y),o.yaw=c.viewHeading+Math.PI+.4,o.pitch=t?.58:.44,o.dist=t?11:9,o.fov=t?62:52,o.bias=t?1.1:.35,o.rate=1.8;break}}}updateHint(t,e,n){const s=performance.now()-this.input.pointer.lastActivity;let r=null,o="tap";const a=this.world;switch(this.step){case 1:a.gate.target<.06&&(r=a.gate.handle,o="swipe-up");break;case 2:case 8:r=this.tmp3.set(a.reel.pos.x,a.water.level+1,a.reel.pos.y),o="drag";break;case 3:if(this.revealPhase===2){const u=a.berries.floatCentroid(this.tmp2);r=this.tmp3.set(u.x,a.water.level,u.y),o="stir"}break;case 4:{r=this.tmp3.copy(a.boom.handleA.position),o="pull";break}case 5:r=this.tmp3.copy(a.hose.nozzle.position),o="drag";break;case 6:{if(!this.pumping){const u=this.ui.pumpRect();this.ui.showHint(u.left+u.width/2,u.top+u.height/2,"hold");return}break}}if(!r||s<3200){this.ui.hideHint();return}const l=r.clone().project(this.director.camera);if(l.z>1){this.ui.hideHint();return}const h=Lt((l.x+1)/2*e,60,e-60),c=Lt((-l.y+1)/2*n,80,n-80);this.ui.showHint(h,c,o)}setPumping(t){this.step!==6&&this.step!==8||(this.pumping=t,t&&(this.input.pointer.lastActivity=performance.now()))}get quality(){return qi()}}const er=document.getElementById("scene"),c0=document.getElementById("ui"),Ee=new Wm({canvas:er,antialias:si()!=="low",powerPreference:"high-performance",alpha:!1,stencil:!1});Ee.outputColorSpace=en;Ee.toneMapping=Zc;Ee.toneMappingExposure=1.06;Ee.shadowMap.enabled=qi().shadows;Ee.shadowMap.type=qc;const ya=new pg(er);let ie;const nr=new Eg(c0,{onPumpDown:()=>{xa(),ie.setPumping(!0)},onPumpUp:()=>ie.setPumping(!1),onReplaySame:()=>ie.restart(!0),onReplayNew:()=>ie.restart(!1),onSandbox:()=>ie.restart(!0,!0),onSettingsChanged:()=>l0()},5);ie=new a0(ya,nr,Math.random()*16777215|0);let ri=1,oi=1;function Sa(){return Math.min(window.devicePixelRatio||1,qi().maxPixelRatio)}function Hi(){const i=window.visualViewport;ri=Math.max(1,Math.round(i?.width??window.innerWidth)),oi=Math.max(1,Math.round(i?.height??window.innerHeight)),Ee.setPixelRatio(Sa()),Ee.setSize(ri,oi,!1),er.style.width=`${ri}px`,er.style.height=`${oi}px`,ie.director.resize(ri,oi),nr.layout()}window.addEventListener("resize",Hi);window.visualViewport?.addEventListener("resize",Hi);window.addEventListener("orientationchange",()=>{window.setTimeout(Hi,60),window.setTimeout(Hi,340)});function l0(){tr($t.volume),$t.volume<=.01&&Di();const i=qi();Ee.shadowMap.enabled=i.shadows,Ee.setPixelRatio(Sa()),Ee.setSize(ri,oi,!1),i.berries!==ie.world.berries.n&&ie.rebuildForQuality()}const ir=()=>{xa(),tr($t.volume),window.removeEventListener("pointerdown",ir),window.removeEventListener("touchend",ir)};window.addEventListener("pointerdown",ir,{passive:!0});window.addEventListener("touchend",ir,{passive:!0});let ta=!1;document.addEventListener("visibilitychange",()=>{ta=document.hidden,ta?(Jo.stop(),jo.stop(),Ys.stop(),Nl.stop(),Di(),Il()):(Mg(),Zs=performance.now(),ya.reset(),Hi())});window.addEventListener("pagehide",()=>{Di(),Il()});let Zs=performance.now(),zs=0,so=0,Wc=!1,ro=0;function Ol(i){if(requestAnimationFrame(Ol),ta){Zs=i;return}const t=Math.min((i-Zs)/1e3,1/20);if(Zs=i,ya.beginFrame(t),ie.update(t,ri,oi),Ee.render(ie.scene,ie.director.camera),!Wc){ro++,nr.bootProgress(Math.min(1,ro/4)),ro>4&&(Wc=!0,nr.hideBoot());return}if(t>1/26?(zs++,so=0):(so++,so>120&&(zs=0)),zs>90&&(zs=0,_g())){const e=qi();Ee.shadowMap.enabled=e.shadows,Ee.setPixelRatio(Sa()),Ee.setSize(ri,oi,!1)}}Hi();requestAnimationFrame(Ol);window.__game={step:()=>ie.currentStep,stepTime:()=>ie.elapsedInStep,suction:()=>ie.suctionProgress,reel:()=>({x:ie.world.reel.pos.x,z:ie.world.reel.pos.y,heading:ie.world.reel.heading,view:ie.world.reel.viewHeading,speed:ie.world.reel.speed}),water:()=>ie.world.water.level,floating:()=>ie.world.berries.floatingCount,bed:()=>ie.world.berries.bedCount,harvested:()=>ie.world.berries.harvested,setStep:i=>ie.debugJump(i),restart:(i,t=!1)=>ie.restart(i,t),tier:()=>si(),drawCalls:()=>Ee.info.render.calls,perf:()=>({berryMs:ie.berryMs,tris:Ee.info.render.triangles,calls:Ee.info.render.calls,berries:ie.world.berries.n})};
