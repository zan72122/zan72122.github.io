(()=>{var xh=0,Hl=1,_h=2;var er=1,Oa=2,cs=3,zi=0,Oe=1,ii=2,ni=0,bn=1,An=2,Wl=3,Xl=4,vh=5;var nn=100,yh=101,Mh=102,Sh=103,bh=104,Th=200,wh=201,Eh=202,Ah=203,ta=204,ea=205,Ch=206,Rh=207,Ih=208,Ph=209,Lh=210,Dh=211,Uh=212,Nh=213,Fh=214,ia=0,na=1,sa=2,Tn=3,ra=4,aa=5,oa=6,la=7,ql=0,Oh=1,Bh=2,di=0,ir=1,nr=2,sr=3,Cn=4,rr=5,ar=6,or=7;var Yl=300,cn=301,Rn=302,Ba=303,za=304,lr=306,wn=1e3,vi=1001,ca=1002,Le=1003,zh=1004;var cr=1005;var Ne=1006,ka=1007;var hn=1008;var Xe=1009,Zl=1010,$l=1011,hs=1012,Ga=1013,fi=1014,si=1015,Ge=1016,Va=1017,Ha=1018,us=1020,Jl=35902,Kl=35899,jl=1021,Ql=1022,ri=1023,yi=1026,un=1027,Wa=1028,Xa=1029,dn=1030,qa=1031;var Ya=1033,hr=33776,ur=33777,dr=33778,fr=33779,Za=35840,$a=35841,Ja=35842,Ka=35843,ja=36196,Qa=37492,to=37496,eo=37488,io=37489,pr=37490,no=37491,so=37808,ro=37809,ao=37810,oo=37811,lo=37812,co=37813,ho=37814,uo=37815,fo=37816,po=37817,mo=37818,go=37819,xo=37820,_o=37821,vo=36492,yo=36494,Mo=36495,So=36283,bo=36284,mr=36285,To=36286;var Cs=2300,ha=2301,Qr=2302,Dl=2303,Ul=2400,Nl=2401,Fl=2402;var kh=3200;var wo=0,Gh=1,Hi="",Se="srgb",Rs="srgb-linear",Is="linear",jt="srgb";var Sn=7680;var Ol=519,Vh=512,Hh=513,Wh=514,Eo=515,Xh=516,qh=517,Ao=518,Yh=519,ua=35044;var tc="300 es",hi=2e3,ts=2001;function rd(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ad(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ps(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Zh(){let s=Ps("canvas");return s.style.display="block",s}var Xc={},es=null;function Ls(...s){let t="THREE."+s.shift();es?es("log",t,...s):console.log(t,...s)}function $h(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ct(...s){s=$h(s);let t="THREE."+s.shift();if(es)es("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function At(...s){s=$h(s);let t="THREE."+s.shift();if(es)es("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function da(...s){let t=s.join(" ");t in Xc||(Xc[t]=!0,Ct(...s))}function Jh(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Kh={[ia]:na,[sa]:oa,[ra]:la,[Tn]:aa,[na]:ia,[oa]:sa,[la]:ra,[aa]:Tn},Mi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}},ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ll=Math.PI/180,fa=180/Math.PI;function en(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ze[s&255]+ze[s>>8&255]+ze[s>>16&255]+ze[s>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]).toLowerCase()}function Zt(s,t,e){return Math.max(t,Math.min(e,s))}function od(s,t){return(s%t+t)%t}function cl(s,t,e){return(1-e)*s+e*t}function _i(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ne(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var rc=class rc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};rc.prototype.isVector2=!0;var bt=rc,Si=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let l=i[n+0],c=i[n+1],u=i[n+2],d=i[n+3],h=r[a+0],m=r[a+1],x=r[a+2],S=r[a+3];if(d!==S||l!==h||c!==m||u!==x){let p=l*h+c*m+u*x+d*S;p<0&&(h=-h,m=-m,x=-x,S=-S,p=-p);let f=1-o;if(p<.9995){let v=Math.acos(p),T=Math.sin(v);f=Math.sin(f*v)/T,o=Math.sin(o*v)/T,l=l*f+h*o,c=c*f+m*o,u=u*f+x*o,d=d*f+S*o}else{l=l*f+h*o,c=c*f+m*o,u=u*f+x*o,d=d*f+S*o;let v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,r,a){let o=i[n],l=i[n+1],c=i[n+2],u=i[n+3],d=r[a],h=r[a+1],m=r[a+2],x=r[a+3];return t[e]=o*x+u*d+l*m-c*h,t[e+1]=l*x+u*h+c*d-o*m,t[e+2]=c*x+u*m+o*h-l*d,t[e+3]=u*x-o*d-l*h-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(n/2),d=o(r/2),h=l(i/2),m=l(n/2),x=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*m*x,this._y=c*m*d-h*u*x,this._z=c*u*x+h*m*d,this._w=c*u*d-h*m*x;break;case"YXZ":this._x=h*u*d+c*m*x,this._y=c*m*d-h*u*x,this._z=c*u*x-h*m*d,this._w=c*u*d+h*m*x;break;case"ZXY":this._x=h*u*d-c*m*x,this._y=c*m*d+h*u*x,this._z=c*u*x+h*m*d,this._w=c*u*d-h*m*x;break;case"ZYX":this._x=h*u*d-c*m*x,this._y=c*m*d+h*u*x,this._z=c*u*x-h*m*d,this._w=c*u*d+h*m*x;break;case"YZX":this._x=h*u*d+c*m*x,this._y=c*m*d+h*u*x,this._z=c*u*x-h*m*d,this._w=c*u*d-h*m*x;break;case"XZY":this._x=h*u*d-c*m*x,this._y=c*m*d-h*u*x,this._z=c*u*x+h*m*d,this._w=c*u*d+h*m*x;break;default:Ct("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=i+o+d;if(h>0){let m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-n)*m}else if(i>o&&i>d){let m=2*Math.sqrt(1+i-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(n+a)/m,this._z=(r+c)/m}else if(o>d){let m=2*Math.sqrt(1+o-i-d);this._w=(r-c)/m,this._x=(n+a)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+d-i-o);this._w=(a-n)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+n*c-r*l,this._y=n*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-n*o,this._w=a*u-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ac=class ac{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),u=2*(o*e-r*n),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*u,this.y=i+l*u+o*c-r*d,this.z=n+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return hl.copy(this).projectOnVector(t),this.sub(hl)}reflect(t){return this.sub(hl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ac.prototype.isVector3=!0;var U=ac,hl=new U,qc=new Si,oc=class oc{constructor(t,e,i,n,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c)}set(t,e,i,n,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=n,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],m=i[5],x=i[8],S=n[0],p=n[3],f=n[6],v=n[1],T=n[4],y=n[7],A=n[2],b=n[5],I=n[8];return r[0]=a*S+o*v+l*A,r[3]=a*p+o*T+l*b,r[6]=a*f+o*y+l*I,r[1]=c*S+u*v+d*A,r[4]=c*p+u*T+d*b,r[7]=c*f+u*y+d*I,r[2]=h*S+m*v+x*A,r[5]=h*p+m*T+x*b,r[8]=h*f+m*y+x*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*r*u+i*o*l+n*r*c-n*a*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*r,m=c*r-a*l,x=e*d+i*h+n*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/x;return t[0]=d*S,t[1]=(n*c-u*i)*S,t[2]=(o*i-n*a)*S,t[3]=h*S,t[4]=(u*e-n*l)*S,t[5]=(n*r-o*e)*S,t[6]=m*S,t[7]=(i*l-c*e)*S,t[8]=(a*e-i*r)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ul.makeScale(t,e)),this}rotate(t){return this.premultiply(ul.makeRotation(-t)),this}translate(t,e){return this.premultiply(ul.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};oc.prototype.isMatrix3=!0;var Nt=oc,ul=new Nt,Yc=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zc=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ld(){let s={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===jt&&(n.r=Bi(n.r),n.g=Bi(n.g),n.b=Bi(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===jt&&(n.r=Qn(n.r),n.g=Qn(n.g),n.b=Qn(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Hi?Is:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return da("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return da("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(n,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Rs]:{primaries:t,whitePoint:i,transfer:Is,toXYZ:Yc,fromXYZ:Zc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Se},outputColorSpaceConfig:{drawingBufferColorSpace:Se}},[Se]:{primaries:t,whitePoint:i,transfer:jt,toXYZ:Yc,fromXYZ:Zc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Se}}}),s}var Ht=ld();function Bi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Qn(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Fn,pa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Fn===void 0&&(Fn=Ps("canvas")),Fn.width=t.width,Fn.height=t.height;let n=Fn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=Fn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ps("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=Bi(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Bi(e[i]/255)*255):e[i]=Bi(e[i]);return{data:e,width:t.width,height:t.height}}else return Ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},cd=0,is=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=en(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(dl(n[a].image)):r.push(dl(n[a]))}else r=dl(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function dl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?pa.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ct("Texture: Unable to serialize Texture."),{})}var hd=0,fl=new U,We=class s extends Mi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=vi,n=vi,r=Ne,a=hn,o=ri,l=Xe,c=s.DEFAULT_ANISOTROPY,u=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=en(),this.name="",this.source=new is(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fl).x}get height(){return this.source.getSize(fl).y}get depth(){return this.source.getSize(fl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Ct(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Ct(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wn:t.x=t.x-Math.floor(t.x);break;case vi:t.x=t.x<0?0:1;break;case ca:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wn:t.y=t.y-Math.floor(t.y);break;case vi:t.y=t.y<0?0:1;break;case ca:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=Yl;We.DEFAULT_ANISOTROPY=1;var lc=class lc{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],x=l[9],S=l[2],p=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-S)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+S)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,y=(m+1)/2,A=(f+1)/2,b=(u+h)/4,I=(d+S)/4,g=(x+p)/4;return T>y&&T>A?T<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(T),n=b/i,r=I/i):y>A?y<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(y),i=b/n,r=g/n):A<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(A),i=I/r,n=g/r),this.set(i,n,r,e),this}let v=Math.sqrt((p-x)*(p-x)+(d-S)*(d-S)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(p-x)/v,this.y=(d-S)/v,this.z=(h-u)/v,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};lc.prototype.isVector4=!0;var pe=lc,ma=class extends Mi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ne,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e),this.textures=[];let n={width:t,height:e,depth:i.depth},r=new We(n),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let e={minFilter:Ne,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new is(n)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ae=class extends ma{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ds=class extends We{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Le,this.minFilter=Le,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ga=class extends We{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Le,this.minFilter=Le,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fa=class Fa{constructor(t,e,i,n,r,a,o,l,c,u,d,h,m,x,S,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c,u,d,h,m,x,S,p)}set(t,e,i,n,r,a,o,l,c,u,d,h,m,x,S,p){let f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=n,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=m,f[7]=x,f[11]=S,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fa().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();let e=this.elements,i=t.elements,n=1/On.setFromMatrixColumn(t,0).length(),r=1/On.setFromMatrixColumn(t,1).length(),a=1/On.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=a*u,m=a*d,x=o*u,S=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=m+x*c,e[5]=h-S*c,e[9]=-o*l,e[2]=S-h*c,e[6]=x+m*c,e[10]=a*l}else if(t.order==="YXZ"){let h=l*u,m=l*d,x=c*u,S=c*d;e[0]=h+S*o,e[4]=x*o-m,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=m*o-x,e[6]=S+h*o,e[10]=a*l}else if(t.order==="ZXY"){let h=l*u,m=l*d,x=c*u,S=c*d;e[0]=h-S*o,e[4]=-a*d,e[8]=x+m*o,e[1]=m+x*o,e[5]=a*u,e[9]=S-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let h=a*u,m=a*d,x=o*u,S=o*d;e[0]=l*u,e[4]=x*c-m,e[8]=h*c+S,e[1]=l*d,e[5]=S*c+h,e[9]=m*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let h=a*l,m=a*c,x=o*l,S=o*c;e[0]=l*u,e[4]=S-h*d,e[8]=x*d+m,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*d+x,e[10]=h-S*d}else if(t.order==="XZY"){let h=a*l,m=a*c,x=o*l,S=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+S,e[5]=a*u,e[9]=m*d-x,e[2]=x*d-m,e[6]=o*u,e[10]=S*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ud,t,dd)}lookAt(t,e,i){let n=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),$i.crossVectors(i,$e),$i.lengthSq()===0&&(Math.abs(i.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),$i.crossVectors(i,$e)),$i.normalize(),Ar.crossVectors($e,$i),n[0]=$i.x,n[4]=Ar.x,n[8]=$e.x,n[1]=$i.y,n[5]=Ar.y,n[9]=$e.y,n[2]=$i.z,n[6]=Ar.z,n[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],m=i[13],x=i[2],S=i[6],p=i[10],f=i[14],v=i[3],T=i[7],y=i[11],A=i[15],b=n[0],I=n[4],g=n[8],w=n[12],R=n[1],C=n[5],P=n[9],z=n[13],G=n[2],L=n[6],B=n[10],F=n[14],q=n[3],Z=n[7],tt=n[11],st=n[15];return r[0]=a*b+o*R+l*G+c*q,r[4]=a*I+o*C+l*L+c*Z,r[8]=a*g+o*P+l*B+c*tt,r[12]=a*w+o*z+l*F+c*st,r[1]=u*b+d*R+h*G+m*q,r[5]=u*I+d*C+h*L+m*Z,r[9]=u*g+d*P+h*B+m*tt,r[13]=u*w+d*z+h*F+m*st,r[2]=x*b+S*R+p*G+f*q,r[6]=x*I+S*C+p*L+f*Z,r[10]=x*g+S*P+p*B+f*tt,r[14]=x*w+S*z+p*F+f*st,r[3]=v*b+T*R+y*G+A*q,r[7]=v*I+T*C+y*L+A*Z,r[11]=v*g+T*P+y*B+A*tt,r[15]=v*w+T*z+y*F+A*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],m=t[14],x=t[3],S=t[7],p=t[11],f=t[15],v=l*m-c*h,T=o*m-c*d,y=o*h-l*d,A=a*m-c*u,b=a*h-l*u,I=a*d-o*u;return e*(S*v-p*T+f*y)-i*(x*v-p*A+f*b)+n*(x*T-S*A+f*I)-r*(x*y-S*b+p*I)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],m=t[11],x=t[12],S=t[13],p=t[14],f=t[15],v=e*o-i*a,T=e*l-n*a,y=e*c-r*a,A=i*l-n*o,b=i*c-r*o,I=n*c-r*l,g=u*S-d*x,w=u*p-h*x,R=u*f-m*x,C=d*p-h*S,P=d*f-m*S,z=h*f-m*p,G=v*z-T*P+y*C+A*R-b*w+I*g;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/G;return t[0]=(o*z-l*P+c*C)*L,t[1]=(n*P-i*z-r*C)*L,t[2]=(S*I-p*b+f*A)*L,t[3]=(h*b-d*I-m*A)*L,t[4]=(l*R-a*z-c*w)*L,t[5]=(e*z-n*R+r*w)*L,t[6]=(p*y-x*I-f*T)*L,t[7]=(u*I-h*y+m*T)*L,t[8]=(a*P-o*R+c*g)*L,t[9]=(i*R-e*P-r*g)*L,t[10]=(x*b-S*y+f*v)*L,t[11]=(d*y-u*b-m*v)*L,t[12]=(o*w-a*C-l*g)*L,t[13]=(e*C-i*w+n*g)*L,t[14]=(S*T-x*A-p*v)*L,t[15]=(u*A-d*T+h*v)*L,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,u*o+i,u*l-n*a,0,c*l-n*o,u*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,h=r*c,m=r*u,x=r*d,S=a*u,p=a*d,f=o*d,v=l*c,T=l*u,y=l*d,A=i.x,b=i.y,I=i.z;return n[0]=(1-(S+f))*A,n[1]=(m+y)*A,n[2]=(x-T)*A,n[3]=0,n[4]=(m-y)*b,n[5]=(1-(h+f))*b,n[6]=(p+v)*b,n[7]=0,n[8]=(x+T)*I,n[9]=(p-v)*I,n[10]=(1-(h+S))*I,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];let r=this.determinant();if(r===0)return i.set(1,1,1),e.identity(),this;let a=On.set(n[0],n[1],n[2]).length(),o=On.set(n[4],n[5],n[6]).length(),l=On.set(n[8],n[9],n[10]).length();r<0&&(a=-a),oi.copy(this);let c=1/a,u=1/o,d=1/l;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=u,oi.elements[5]*=u,oi.elements[6]*=u,oi.elements[8]*=d,oi.elements[9]*=d,oi.elements[10]*=d,e.setFromRotationMatrix(oi),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,n,r,a,o=hi,l=!1){let c=this.elements,u=2*r/(e-t),d=2*r/(i-n),h=(e+t)/(e-t),m=(i+n)/(i-n),x,S;if(l)x=r/(a-r),S=a*r/(a-r);else if(o===hi)x=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===ts)x=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=hi,l=!1){let c=this.elements,u=2/(e-t),d=2/(i-n),h=-(e+t)/(e-t),m=-(i+n)/(i-n),x,S;if(l)x=1/(a-r),S=a/(a-r);else if(o===hi)x=-2/(a-r),S=-(a+r)/(a-r);else if(o===ts)x=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Fa.prototype.isMatrix4=!0;var Qt=Fa,On=new U,oi=new Qt,ud=new U(0,0,0),dd=new U(1,1,1),$i=new U,Ar=new U,$e=new U,$c=new Qt,Jc=new Si,ki=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],u=n[9],d=n[2],h=n[6],m=n[10];switch(e){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return $c.makeRotationFromQuaternion(t),this.setFromRotationMatrix($c,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jc.setFromEuler(this),this.setFromQuaternion(Jc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ki.DEFAULT_ORDER="XYZ";var Us=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},fd=0,Kc=new U,Bn=new Si,Li=new Qt,Cr=new U,vs=new U,pd=new U,md=new Si,jc=new U(1,0,0),Qc=new U(0,1,0),th=new U(0,0,1),eh={type:"added"},gd={type:"removed"},zn={type:"childadded",child:null},pl={type:"childremoved",child:null},De=class s extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=en(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new U,e=new ki,i=new Si,n=new U(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Nt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bn.setFromAxisAngle(t,e),this.quaternion.multiply(Bn),this}rotateOnWorldAxis(t,e){return Bn.setFromAxisAngle(t,e),this.quaternion.premultiply(Bn),this}rotateX(t){return this.rotateOnAxis(jc,t)}rotateY(t){return this.rotateOnAxis(Qc,t)}rotateZ(t){return this.rotateOnAxis(th,t)}translateOnAxis(t,e){return Kc.copy(t).applyQuaternion(this.quaternion),this.position.add(Kc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jc,t)}translateY(t){return this.translateOnAxis(Qc,t)}translateZ(t){return this.translateOnAxis(th,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Cr.copy(t):Cr.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(vs,Cr,this.up):Li.lookAt(Cr,vs,this.up),this.quaternion.setFromRotationMatrix(Li),n&&(Li.extractRotation(n.matrixWorld),Bn.setFromRotationMatrix(Li),this.quaternion.premultiply(Bn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(At("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(eh),zn.child=t,this.dispatchEvent(zn),zn.child=null):At("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gd),pl.child=t,this.dispatchEvent(pl),pl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Li.multiply(t.parent.matrixWorld)),t.applyMatrix4(Li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(eh),zn.child=t,this.dispatchEvent(zn),zn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,t,pd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,md,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,n=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*n,r[13]+=i-r[1]*e-r[5]*i-r[9]*n,r[14]+=n-r[2]*e-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),this.static!==!1&&(n.static=this.static),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),m=a(t.animations),x=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=n,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};De.DEFAULT_UP=new U(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var be=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}},xd={type:"move"},ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let S of t.hand.values()){let p=e.getJointPose(S,i),f=this._getHandJoint(c,S);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,x=.005;c.inputState.pinching&&h>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xd)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new be;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},Rr={h:0,s:0,l:0};function ml(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Rt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ht.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=Ht.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ht.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=Ht.workingColorSpace){if(t=od(t,1),e=Zt(e,0,1),i=Zt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=ml(a,r,t+1/3),this.g=ml(a,r,t),this.b=ml(a,r,t-1/3)}return Ht.colorSpaceToWorking(this,n),this}setStyle(t,e=Se){function i(r){r!==void 0&&parseFloat(r)<1&&Ct("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ct("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ct("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Se){let i=jh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ct("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}copyLinearToSRGB(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Se){return Ht.workingToColorSpace(ke.copy(this),t),Math.round(Zt(ke.r*255,0,255))*65536+Math.round(Zt(ke.g*255,0,255))*256+Math.round(Zt(ke.b*255,0,255))}getHexString(t=Se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ht.workingColorSpace){Ht.workingToColorSpace(ke.copy(this),e);let i=ke.r,n=ke.g,r=ke.b,a=Math.max(i,n,r),o=Math.min(i,n,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(n-r)/d+(n<r?6:0);break;case n:l=(r-i)/d+2;break;case r:l=(i-n)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Ht.workingColorSpace){return Ht.workingToColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=Se){Ht.workingToColorSpace(ke.copy(this),t);let e=ke.r,i=ke.g,n=ke.b;return t!==Se?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Ji),this.setHSL(Ji.h+t,Ji.s+e,Ji.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ji),t.getHSL(Rr);let i=cl(Ji.h,Rr.h,e),n=cl(Ji.s,Rr.s,e),r=cl(Ji.l,Rr.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ke=new Rt;Rt.NAMES=jh;var Ns=class s{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Rt(t),this.near=e,this.far=i}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Fs=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},li=new U,Di=new U,gl=new U,Ui=new U,kn=new U,Gn=new U,ih=new U,xl=new U,_l=new U,vl=new U,yl=new pe,Ml=new pe,Sl=new pe,Oi=class s{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),li.subVectors(t,e),n.cross(li);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){li.subVectors(n,e),Di.subVectors(i,e),gl.subVectors(t,e);let a=li.dot(li),o=li.dot(Di),l=li.dot(gl),c=Di.dot(Di),u=Di.dot(gl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,m=(c*l-o*u)*h,x=(a*u-o*l)*h;return r.set(1-m-x,x,m)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(t,e,i,n,r,a,o,l){return this.getBarycoord(t,e,i,n,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ui.x),l.addScaledVector(a,Ui.y),l.addScaledVector(o,Ui.z),l)}static getInterpolatedAttribute(t,e,i,n,r,a){return yl.setScalar(0),Ml.setScalar(0),Sl.setScalar(0),yl.fromBufferAttribute(t,e),Ml.fromBufferAttribute(t,i),Sl.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(yl,r.x),a.addScaledVector(Ml,r.y),a.addScaledVector(Sl,r.z),a}static isFrontFacing(t,e,i,n){return li.subVectors(i,e),Di.subVectors(t,e),li.cross(Di).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),li.cross(Di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,a,o;kn.subVectors(n,i),Gn.subVectors(r,i),xl.subVectors(t,i);let l=kn.dot(xl),c=Gn.dot(xl);if(l<=0&&c<=0)return e.copy(i);_l.subVectors(t,n);let u=kn.dot(_l),d=Gn.dot(_l);if(u>=0&&d<=u)return e.copy(n);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(kn,a);vl.subVectors(t,r);let m=kn.dot(vl),x=Gn.dot(vl);if(x>=0&&m<=x)return e.copy(r);let S=m*c-l*x;if(S<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(i).addScaledVector(Gn,o);let p=u*x-m*d;if(p<=0&&d-u>=0&&m-x>=0)return ih.subVectors(r,n),o=(d-u)/(d-u+(m-x)),e.copy(n).addScaledVector(ih,o);let f=1/(p+S+h);return a=S*f,o=h*f,e.copy(i).addScaledVector(kn,a).addScaledVector(Gn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},bi=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ci):ci.fromBufferAttribute(r,a),ci.applyMatrix4(t.matrixWorld),this.expandByPoint(ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ir.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ir.copy(i.boundingBox)),Ir.applyMatrix4(t.matrixWorld),this.union(Ir)}let n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ys),Pr.subVectors(this.max,ys),Vn.subVectors(t.a,ys),Hn.subVectors(t.b,ys),Wn.subVectors(t.c,ys),Ki.subVectors(Hn,Vn),ji.subVectors(Wn,Hn),_n.subVectors(Vn,Wn);let e=[0,-Ki.z,Ki.y,0,-ji.z,ji.y,0,-_n.z,_n.y,Ki.z,0,-Ki.x,ji.z,0,-ji.x,_n.z,0,-_n.x,-Ki.y,Ki.x,0,-ji.y,ji.x,0,-_n.y,_n.x,0];return!bl(e,Vn,Hn,Wn,Pr)||(e=[1,0,0,0,1,0,0,0,1],!bl(e,Vn,Hn,Wn,Pr))?!1:(Lr.crossVectors(Ki,ji),e=[Lr.x,Lr.y,Lr.z],bl(e,Vn,Hn,Wn,Pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ni=[new U,new U,new U,new U,new U,new U,new U,new U],ci=new U,Ir=new bi,Vn=new U,Hn=new U,Wn=new U,Ki=new U,ji=new U,_n=new U,ys=new U,Pr=new U,Lr=new U,vn=new U;function bl(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){vn.fromArray(s,r);let o=n.x*Math.abs(vn.x)+n.y*Math.abs(vn.y)+n.z*Math.abs(vn.z),l=t.dot(vn),c=e.dot(vn),u=i.dot(vn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Me=new U,Dr=new bt,_d=0,Ee=class extends Mi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_d++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ua,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Dr.fromBufferAttribute(this,e),Dr.applyMatrix3(t),this.setXY(e,Dr.x,Dr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=_i(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ne(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_i(e,this.array)),e}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_i(e,this.array)),e}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_i(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_i(e,this.array)),e}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),n=ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),n=ne(n,this.array),r=ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ua&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var Os=class extends Ee{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Bs=class extends Ee{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var kt=class extends Ee{constructor(t,e,i){super(new Float32Array(t),e,i)}},vd=new bi,Ms=new U,Tl=new U,Gi=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):vd.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ms.subVectors(t,this.center);let e=Ms.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Ms,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Tl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ms.copy(t.center).add(Tl)),this.expandByPoint(Ms.copy(t.center).sub(Tl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},yd=0,ti=new Qt,wl=new De,Xn=new U,Je=new bi,Ss=new bi,Pe=new U,le=class s extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=en(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rd(t)?Bs:Os)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Nt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ti.makeRotationFromQuaternion(t),this.applyMatrix4(ti),this}rotateX(t){return ti.makeRotationX(t),this.applyMatrix4(ti),this}rotateY(t){return ti.makeRotationY(t),this.applyMatrix4(ti),this}rotateZ(t){return ti.makeRotationZ(t),this.applyMatrix4(ti),this}translate(t,e,i){return ti.makeTranslation(t,e,i),this.applyMatrix4(ti),this}scale(t,e,i){return ti.makeScale(t,e,i),this.applyMatrix4(ti),this}lookAt(t){return wl.lookAt(t),wl.updateMatrix(),this.applyMatrix4(wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xn).negate(),this.translate(Xn.x,Xn.y,Xn.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,r=t.length;n<r;n++){let a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new kt(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&Ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){At("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&At('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){At("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let i=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ss.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(Je.min,Ss.min),Je.expandByPoint(Pe),Pe.addVectors(Je.max,Ss.max),Je.expandByPoint(Pe)):(Je.expandByPoint(Ss.min),Je.expandByPoint(Ss.max))}Je.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)Pe.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Pe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Pe.fromBufferAttribute(o,c),l&&(Xn.fromBufferAttribute(t,c),Pe.add(Xn)),n=Math.max(n,i.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&At('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){At("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ee(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let g=0;g<i.count;g++)o[g]=new U,l[g]=new U;let c=new U,u=new U,d=new U,h=new bt,m=new bt,x=new bt,S=new U,p=new U;function f(g,w,R){c.fromBufferAttribute(i,g),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,R),h.fromBufferAttribute(r,g),m.fromBufferAttribute(r,w),x.fromBufferAttribute(r,R),u.sub(c),d.sub(c),m.sub(h),x.sub(h);let C=1/(m.x*x.y-x.x*m.y);isFinite(C)&&(S.copy(u).multiplyScalar(x.y).addScaledVector(d,-m.y).multiplyScalar(C),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(C),o[g].add(S),o[w].add(S),o[R].add(S),l[g].add(p),l[w].add(p),l[R].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let g=0,w=v.length;g<w;++g){let R=v[g],C=R.start,P=R.count;for(let z=C,G=C+P;z<G;z+=3)f(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let T=new U,y=new U,A=new U,b=new U;function I(g){A.fromBufferAttribute(n,g),b.copy(A);let w=o[g];T.copy(w),T.sub(A.multiplyScalar(A.dot(w))).normalize(),y.crossVectors(b,w);let C=y.dot(l[g])<0?-1:1;a.setXYZW(g,T.x,T.y,T.z,C)}for(let g=0,w=v.length;g<w;++g){let R=v[g],C=R.start,P=R.count;for(let z=C,G=C+P;z<G;z+=3)I(t.getX(z+0)),I(t.getX(z+1)),I(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);let n=new U,r=new U,a=new U,o=new U,l=new U,c=new U,u=new U,d=new U;if(t)for(let h=0,m=t.count;h<m;h+=3){let x=t.getX(h+0),S=t.getX(h+1),p=t.getX(h+2);n.fromBufferAttribute(e,x),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,p),u.subVectors(a,r),d.subVectors(n,r),u.cross(d),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=e.count;h<m;h+=3)n.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(n,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),m=0,x=0;for(let S=0,p=l.length;S<p;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*u;for(let f=0;f<u;f++)h[x++]=c[m++]}return new Ee(h,u,d)}if(this.index===null)return Ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],m=t(h,i);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let m=c[d];u.push(m.toJSON(t.data))}u.length>0&&(n[l]=u,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let c in n){let u=n[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},xa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ua,this.updateRanges=[],this.version=0,this.uuid=en()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=en()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=en()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},He=new U,zs=class s{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=_i(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ne(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=_i(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=_i(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=_i(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=_i(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),n=ne(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),n=ne(n,this.array),r=ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ls("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new Ee(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ls("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Md=0,Ti=class extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=en(),this.name="",this.type="Material",this.blending=bn,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ta,this.blendDst=ea,this.blendEquation=nn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Tn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ol,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sn,this.stencilZFail=Sn,this.stencilZPass=Sn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Ct(`Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Ct(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bn&&(i.blending=this.blending),this.side!==zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ta&&(i.blendSrc=this.blendSrc),this.blendDst!==ea&&(i.blendDst=this.blendDst),this.blendEquation!==nn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Tn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ol&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Sn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Sn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},En=class extends Ti{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},qn,bs=new U,Yn=new U,Zn=new U,$n=new bt,Ts=new bt,Qh=new Qt,Ur=new U,ws=new U,Nr=new U,nh=new bt,El=new bt,sh=new bt,ss=class extends De{constructor(t=new En){if(super(),this.isSprite=!0,this.type="Sprite",qn===void 0){qn=new le;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new xa(e,5);qn.setIndex([0,1,2,0,2,3]),qn.setAttribute("position",new zs(i,3,0,!1)),qn.setAttribute("uv",new zs(i,2,3,!1))}this.geometry=qn,this.material=t,this.center=new bt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&At('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Yn.setFromMatrixScale(this.matrixWorld),Qh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Zn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Yn.multiplyScalar(-Zn.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let a=this.center;Fr(Ur.set(-.5,-.5,0),Zn,a,Yn,n,r),Fr(ws.set(.5,-.5,0),Zn,a,Yn,n,r),Fr(Nr.set(.5,.5,0),Zn,a,Yn,n,r),nh.set(0,0),El.set(1,0),sh.set(1,1);let o=t.ray.intersectTriangle(Ur,ws,Nr,!1,bs);if(o===null&&(Fr(ws.set(-.5,.5,0),Zn,a,Yn,n,r),El.set(0,1),o=t.ray.intersectTriangle(Ur,Nr,ws,!1,bs),o===null))return;let l=t.ray.origin.distanceTo(bs);l<t.near||l>t.far||e.push({distance:l,point:bs.clone(),uv:Oi.getInterpolation(bs,Ur,ws,Nr,nh,El,sh,new bt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Fr(s,t,e,i,n,r){$n.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(Ts.x=r*$n.x-n*$n.y,Ts.y=n*$n.x+r*$n.y):Ts.copy($n),s.copy(t),s.x+=Ts.x,s.y+=Ts.y,s.applyMatrix4(Qh)}var Fi=new U,Al=new U,Or=new U,Qi=new U,Cl=new U,Br=new U,Rl=new U,ks=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fi.copy(this.origin).addScaledVector(this.direction,e),Fi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Al.copy(t).add(e).multiplyScalar(.5),Or.copy(e).sub(t).normalize(),Qi.copy(this.origin).sub(Al);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Or),o=Qi.dot(this.direction),l=-Qi.dot(Or),c=Qi.lengthSq(),u=Math.abs(1-a*a),d,h,m,x;if(u>0)if(d=a*l-o,h=a*o-l,x=r*u,d>=0)if(h>=-x)if(h<=x){let S=1/u;d*=S,h*=S,m=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;else h<=-x?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+c):h<=x?(d=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Al).addScaledVector(Or,h),m}intersectSphere(t,e){Fi.subVectors(t.center,this.origin);let i=Fi.dot(this.direction),n=Fi.dot(Fi)-i*i,r=t.radius*t.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,n=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,n=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Fi)!==null}intersectTriangle(t,e,i,n,r){Cl.subVectors(e,t),Br.subVectors(i,t),Rl.crossVectors(Cl,Br);let a=this.direction.dot(Rl),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qi.subVectors(this.origin,t);let l=o*this.direction.dot(Br.crossVectors(Qi,Br));if(l<0)return null;let c=o*this.direction.dot(Cl.cross(Qi));if(c<0||l+c>a)return null;let u=-o*Qi.dot(Rl);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ui=class extends Ti{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},rh=new Qt,yn=new ks,zr=new Gi,ah=new U,kr=new U,Gr=new U,Vr=new U,Il=new U,Hr=new U,oh=new U,Wr=new U,yt=class extends De{constructor(t=new le,e=new ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(r&&o){Hr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(Il.fromBufferAttribute(d,t),a?Hr.addScaledVector(Il,u):Hr.addScaledVector(Il.sub(e),u))}e.add(Hr)}return e}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zr.copy(i.boundingSphere),zr.applyMatrix4(r),yn.copy(t.ray).recast(t.near),!(zr.containsPoint(yn.origin)===!1&&(yn.intersectSphere(zr,ah)===null||yn.origin.distanceToSquared(ah)>(t.far-t.near)**2))&&(rh.copy(r).invert(),yn.copy(t.ray).applyMatrix4(rh),!(i.boundingBox!==null&&yn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,yn)))}_computeIntersections(t,e,i){let n,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,S=h.length;x<S;x++){let p=h[x],f=a[p.materialIndex],v=Math.max(p.start,m.start),T=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=v,A=T;y<A;y+=3){let b=o.getX(y),I=o.getX(y+1),g=o.getX(y+2);n=Xr(this,f,t,i,c,u,d,b,I,g),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{let x=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let p=x,f=S;p<f;p+=3){let v=o.getX(p),T=o.getX(p+1),y=o.getX(p+2);n=Xr(this,a,t,i,c,u,d,v,T,y),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,S=h.length;x<S;x++){let p=h[x],f=a[p.materialIndex],v=Math.max(p.start,m.start),T=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=v,A=T;y<A;y+=3){let b=y,I=y+1,g=y+2;n=Xr(this,f,t,i,c,u,d,b,I,g),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{let x=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let p=x,f=S;p<f;p+=3){let v=p,T=p+1,y=p+2;n=Xr(this,a,t,i,c,u,d,v,T,y),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}}};function Sd(s,t,e,i,n,r,a,o){let l;if(t.side===Oe?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,t.side===zi,o),l===null)return null;Wr.copy(o),Wr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Wr);return c<e.near||c>e.far?null:{distance:c,point:Wr.clone(),object:s}}function Xr(s,t,e,i,n,r,a,o,l,c){s.getVertexPosition(o,kr),s.getVertexPosition(l,Gr),s.getVertexPosition(c,Vr);let u=Sd(s,t,e,i,kr,Gr,Vr,oh);if(u){let d=new U;Oi.getBarycoord(oh,kr,Gr,Vr,d),n&&(u.uv=Oi.getInterpolatedAttribute(n,o,l,c,d,new bt)),r&&(u.uv1=Oi.getInterpolatedAttribute(r,o,l,c,d,new bt)),a&&(u.normal=Oi.getInterpolatedAttribute(a,o,l,c,d,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new U,materialIndex:0};Oi.getNormal(kr,Gr,Vr,h.normal),u.face=h,u.barycoord=d}return u}var Gs=class extends We{constructor(t=null,e=1,i=1,n,r,a,o,l,c=Le,u=Le,d,h){super(null,a,o,l,c,u,n,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vs=class extends Ee{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Jn=new Qt,lh=new Qt,qr=[],ch=new bi,bd=new Qt,Es=new yt,As=new Gi,rs=class extends yt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Vs(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,bd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new bi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Jn),ch.copy(t.boundingBox).applyMatrix4(Jn),this.boundingBox.union(ch)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Jn),As.copy(t.boundingSphere).applyMatrix4(Jn),this.boundingSphere.union(As)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(Es.geometry=this.geometry,Es.material=this.material,Es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),As.copy(this.boundingSphere),As.applyMatrix4(i),t.ray.intersectsSphere(As)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Jn),lh.multiplyMatrices(i,Jn),Es.matrixWorld=lh,Es.raycast(t,qr);for(let a=0,o=qr.length;a<o;a++){let l=qr[a];l.instanceId=r,l.object=this,e.push(l)}qr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Vs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Gs(new Float32Array(n*this.count),n,this.count,Wa,si));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Pl=new U,Td=new U,wd=new Nt,xi=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Pl.subVectors(i,e).cross(Td.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let n=t.delta(Pl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||wd.getNormalMatrix(t),n=this.coplanarPoint(Pl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Mn=new Gi,Ed=new bt(.5,.5),Yr=new U,as=class{constructor(t=new xi,e=new xi,i=new xi,n=new xi,r=new xi,a=new xi){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=hi,i=!1){let n=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],m=r[7],x=r[8],S=r[9],p=r[10],f=r[11],v=r[12],T=r[13],y=r[14],A=r[15];if(n[0].setComponents(c-a,m-u,f-x,A-v).normalize(),n[1].setComponents(c+a,m+u,f+x,A+v).normalize(),n[2].setComponents(c+o,m+d,f+S,A+T).normalize(),n[3].setComponents(c-o,m-d,f-S,A-T).normalize(),i)n[4].setComponents(l,h,p,y).normalize(),n[5].setComponents(c-l,m-h,f-p,A-y).normalize();else if(n[4].setComponents(c-l,m-h,f-p,A-y).normalize(),e===hi)n[5].setComponents(c+l,m+h,f+p,A+y).normalize();else if(e===ts)n[5].setComponents(l,h,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mn)}intersectsSprite(t){Mn.center.set(0,0,0);let e=Ed.distanceTo(t.center);return Mn.radius=.7071067811865476+e,Mn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(Yr.x=n.normal.x>0?t.max.x:t.min.x,Yr.y=n.normal.y>0?t.max.y:t.min.y,Yr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var _a=class extends Ti{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},hh=new Qt,Bl=new ks,Zr=new Gi,$r=new U,Hs=class extends De{constructor(t=new le,e=new _a){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zr.copy(i.boundingSphere),Zr.applyMatrix4(n),Zr.radius+=r,t.ray.intersectsSphere(Zr)===!1)return;hh.copy(n).invert(),Bl.copy(t.ray).applyMatrix4(hh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let x=h,S=m;x<S;x++){let p=c.getX(x);$r.fromBufferAttribute(d,p),uh($r,p,l,n,t,e,this)}}else{let h=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let x=h,S=m;x<S;x++)$r.fromBufferAttribute(d,x),uh($r,x,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function uh(s,t,e,i,n,r,a){let o=Bl.distanceSqToPoint(s);if(o<e){let l=new U;Bl.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Ws=class extends We{constructor(t=[],e=cn,i,n,r,a,o,l,c,u){super(t,e,i,n,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},sn=class extends We{constructor(t,e,i,n,r,a,o,l,c){super(t,e,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Vi=class extends We{constructor(t,e,i=fi,n,r,a,o=Le,l=Le,c,u=yi,d=1){if(u!==yi&&u!==un)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:d};super(h,n,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new is(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},va=class extends Vi{constructor(t,e=fi,i=cn,n,r,a=Le,o=Le,l,c=yi){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,i,n,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Xs=class extends We{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Fe=class s extends le{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,m=0;x("z","y","x",-1,-1,i,e,t,a,r,0),x("z","y","x",1,-1,i,e,-t,a,r,1),x("x","z","y",1,1,t,i,e,n,a,2),x("x","z","y",1,-1,t,i,-e,n,a,3),x("x","y","z",1,-1,t,e,i,n,r,4),x("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(u,3)),this.setAttribute("uv",new kt(d,2));function x(S,p,f,v,T,y,A,b,I,g,w){let R=y/I,C=A/g,P=y/2,z=A/2,G=b/2,L=I+1,B=g+1,F=0,q=0,Z=new U;for(let tt=0;tt<B;tt++){let st=tt*C-z;for(let ct=0;ct<L;ct++){let Et=ct*R-P;Z[S]=Et*v,Z[p]=st*T,Z[f]=G,c.push(Z.x,Z.y,Z.z),Z[S]=0,Z[p]=0,Z[f]=b>0?1:-1,u.push(Z.x,Z.y,Z.z),d.push(ct/I),d.push(1-tt/g),F+=1}}for(let tt=0;tt<g;tt++)for(let st=0;st<I;st++){let ct=h+st+L*tt,Et=h+st+L*(tt+1),Wt=h+(st+1)+L*(tt+1),Dt=h+(st+1)+L*tt;l.push(ct,Et,Dt),l.push(Et,Wt,Dt),q+=6}o.addGroup(m,q,w),m+=q,h+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var qs=class s extends le{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new U,u=new bt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){let m=i+d/e*n;c.x=t*Math.cos(m),c.y=t*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/t+1)/2,u.y=(a[h+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new kt(a,3)),this.setAttribute("normal",new kt(o,3)),this.setAttribute("uv",new kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ce=class s extends le{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let u=[],d=[],h=[],m=[],x=0,S=[],p=i/2,f=0;v(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new kt(d,3)),this.setAttribute("normal",new kt(h,3)),this.setAttribute("uv",new kt(m,2));function v(){let y=new U,A=new U,b=0,I=(e-t)/i;for(let g=0;g<=r;g++){let w=[],R=g/r,C=R*(e-t)+t;for(let P=0;P<=n;P++){let z=P/n,G=z*l+o,L=Math.sin(G),B=Math.cos(G);A.x=C*L,A.y=-R*i+p,A.z=C*B,d.push(A.x,A.y,A.z),y.set(L,I,B).normalize(),h.push(y.x,y.y,y.z),m.push(z,1-R),w.push(x++)}S.push(w)}for(let g=0;g<n;g++)for(let w=0;w<r;w++){let R=S[w][g],C=S[w+1][g],P=S[w+1][g+1],z=S[w][g+1];(t>0||w!==0)&&(u.push(R,C,z),b+=3),(e>0||w!==r-1)&&(u.push(C,P,z),b+=3)}c.addGroup(f,b,0),f+=b}function T(y){let A=x,b=new bt,I=new U,g=0,w=y===!0?t:e,R=y===!0?1:-1;for(let P=1;P<=n;P++)d.push(0,p*R,0),h.push(0,R,0),m.push(.5,.5),x++;let C=x;for(let P=0;P<=n;P++){let G=P/n*l+o,L=Math.cos(G),B=Math.sin(G);I.x=w*B,I.y=p*R,I.z=w*L,d.push(I.x,I.y,I.z),h.push(0,R,0),b.x=L*.5+.5,b.y=B*.5*R+.5,m.push(b.x,b.y),x++}for(let P=0;P<n;P++){let z=A+P,G=C+P;y===!0?u.push(G,G+1,z):u.push(G+1,G,z),g+=3}c.addGroup(f,g,y===!0?1:2),f+=g}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ei=class s extends Ce{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ya=class s extends le{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let r=[],a=[];o(n),c(i),u(),this.setAttribute("position",new kt(r,3)),this.setAttribute("normal",new kt(r.slice(),3)),this.setAttribute("uv",new kt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let T=new U,y=new U,A=new U;for(let b=0;b<e.length;b+=3)m(e[b+0],T),m(e[b+1],y),m(e[b+2],A),l(T,y,A,v)}function l(v,T,y,A){let b=A+1,I=[];for(let g=0;g<=b;g++){I[g]=[];let w=v.clone().lerp(y,g/b),R=T.clone().lerp(y,g/b),C=b-g;for(let P=0;P<=C;P++)P===0&&g===b?I[g][P]=w:I[g][P]=w.clone().lerp(R,P/C)}for(let g=0;g<b;g++)for(let w=0;w<2*(b-g)-1;w++){let R=Math.floor(w/2);w%2===0?(h(I[g][R+1]),h(I[g+1][R]),h(I[g][R])):(h(I[g][R+1]),h(I[g+1][R+1]),h(I[g+1][R]))}}function c(v){let T=new U;for(let y=0;y<r.length;y+=3)T.x=r[y+0],T.y=r[y+1],T.z=r[y+2],T.normalize().multiplyScalar(v),r[y+0]=T.x,r[y+1]=T.y,r[y+2]=T.z}function u(){let v=new U;for(let T=0;T<r.length;T+=3){v.x=r[T+0],v.y=r[T+1],v.z=r[T+2];let y=p(v)/2/Math.PI+.5,A=f(v)/Math.PI+.5;a.push(y,1-A)}x(),d()}function d(){for(let v=0;v<a.length;v+=6){let T=a[v+0],y=a[v+2],A=a[v+4],b=Math.max(T,y,A),I=Math.min(T,y,A);b>.9&&I<.1&&(T<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),A<.2&&(a[v+4]+=1))}}function h(v){r.push(v.x,v.y,v.z)}function m(v,T){let y=v*3;T.x=t[y+0],T.y=t[y+1],T.z=t[y+2]}function x(){let v=new U,T=new U,y=new U,A=new U,b=new bt,I=new bt,g=new bt;for(let w=0,R=0;w<r.length;w+=9,R+=6){v.set(r[w+0],r[w+1],r[w+2]),T.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),b.set(a[R+0],a[R+1]),I.set(a[R+2],a[R+3]),g.set(a[R+4],a[R+5]),A.copy(v).add(T).add(y).divideScalar(3);let C=p(A);S(b,R+0,v,C),S(I,R+2,T,C),S(g,R+4,y,C)}}function S(v,T,y,A){A<0&&v.x===1&&(a[T]=v.x-1),y.x===0&&y.z===0&&(a[T]=A/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var Ys=class s extends ya{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},wi=class s extends le{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,u=l+1,d=t/o,h=e/l,m=[],x=[],S=[],p=[];for(let f=0;f<u;f++){let v=f*h-a;for(let T=0;T<c;T++){let y=T*d-r;x.push(y,-v,0),S.push(0,0,1),p.push(T/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){let T=v+c*f,y=v+c*(f+1),A=v+1+c*(f+1),b=v+1+c*f;m.push(T,y,b),m.push(y,A,b)}this.setIndex(m),this.setAttribute("position",new kt(x,3)),this.setAttribute("normal",new kt(S,3)),this.setAttribute("uv",new kt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ei=class s extends le{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new U,h=new U,m=[],x=[],S=[],p=[];for(let f=0;f<=i;f++){let v=[],T=f/i,y=0;f===0&&a===0?y=.5/e:f===i&&l===Math.PI&&(y=-.5/e);for(let A=0;A<=e;A++){let b=A/e;d.x=-t*Math.cos(n+b*r)*Math.sin(a+T*o),d.y=t*Math.cos(a+T*o),d.z=t*Math.sin(n+b*r)*Math.sin(a+T*o),x.push(d.x,d.y,d.z),h.copy(d).normalize(),S.push(h.x,h.y,h.z),p.push(b+y,1-T),v.push(c++)}u.push(v)}for(let f=0;f<i;f++)for(let v=0;v<e;v++){let T=u[f][v+1],y=u[f][v],A=u[f+1][v],b=u[f+1][v+1];(f!==0||a>0)&&m.push(T,y,b),(f!==i-1||l<Math.PI)&&m.push(y,A,b)}this.setIndex(m),this.setAttribute("position",new kt(x,3)),this.setAttribute("normal",new kt(S,3)),this.setAttribute("uv",new kt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Zs=class s extends le{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],u=[],d=[],h=new U,m=new U,x=new U;for(let S=0;S<=i;S++){let p=a+S/i*o;for(let f=0;f<=n;f++){let v=f/n*r;m.x=(t+e*Math.cos(p))*Math.cos(v),m.y=(t+e*Math.cos(p))*Math.sin(v),m.z=e*Math.sin(p),c.push(m.x,m.y,m.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),x.subVectors(m,h).normalize(),u.push(x.x,x.y,x.z),d.push(f/n),d.push(S/i)}}for(let S=1;S<=i;S++)for(let p=1;p<=n;p++){let f=(n+1)*S+p-1,v=(n+1)*(S-1)+p-1,T=(n+1)*(S-1)+p,y=(n+1)*S+p;l.push(f,v,y),l.push(v,T,y)}this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(u,3)),this.setAttribute("uv",new kt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};function In(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];if(dh(n))n.isRenderTargetTexture?(Ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(dh(n[0])){let r=[];for(let a=0,o=n.length;a<o;a++)r[a]=n[a].clone();t[e][i]=r}else t[e][i]=n.slice();else t[e][i]=n}}return t}function Ve(s){let t={};for(let e=0;e<s.length;e++){let i=In(s[e]);for(let n in i)t[n]=i[n]}return t}function dh(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Ad(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ec(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ht.workingColorSpace}var Wi={clone:In,merge:Ve},Cd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,me=class extends Ti{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cd,this.fragmentShader=Rd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=In(t.uniforms),this.uniformsGroups=Ad(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},os=class extends me{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},It=class extends Ti{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wo,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ma=class extends Ti{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Sa=class extends Ti{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Jr(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}var rn=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let a=0;a!==n;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ba=class extends rn{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ul,endingEnd:Ul}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,a=t+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Nl:r=t,o=2*e-i;break;case Fl:r=n.length-2,o=e+n[r]-n[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Nl:a=t,l=2*i-e;break;case Fl:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,m=this._weightNext,x=(i-e)/(n-e),S=x*x,p=S*x,f=-h*p+2*h*S-h*x,v=(1+h)*p+(-1.5-2*h)*S+(-.5+h)*x+1,T=(-1-m)*p+(1.5+m)*S+.5*x,y=m*p-m*S;for(let A=0;A!==o;++A)r[A]=f*a[u+A]+v*a[c+A]+T*a[l+A]+y*a[d+A];return r}},Ta=class extends rn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(i-e)/(n-e),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},wa=class extends rn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Ea=class extends rn{interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.settings||this.DefaultSettings_,d=u.inTangents,h=u.outTangents;if(!d||!h){let S=(i-e)/(n-e),p=1-S;for(let f=0;f!==o;++f)r[f]=a[c+f]*p+a[l+f]*S;return r}let m=o*2,x=t-1;for(let S=0;S!==o;++S){let p=a[c+S],f=a[l+S],v=x*m+S*2,T=h[v],y=h[v+1],A=t*m+S*2,b=d[A],I=d[A+1],g=(i-e)/(n-e),w,R,C,P,z;for(let G=0;G<8;G++){w=g*g,R=w*g,C=1-g,P=C*C,z=P*C;let B=z*e+3*P*g*T+3*C*w*b+R*n-i;if(Math.abs(B)<1e-10)break;let F=3*P*(T-e)+6*C*g*(b-T)+3*w*(n-b);if(Math.abs(F)<1e-10)break;g=g-B/F,g=Math.max(0,Math.min(1,g))}r[S]=z*p+3*P*g*y+3*C*w*I+R*f}return r}},Ke=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Jr(e,this.TimeBufferType),this.values=Jr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Jr(t.times,Array),values:Jr(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ta(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ba(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ea(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.settings=this.settings),e}setInterpolation(t){let e;switch(t){case Cs:e=this.InterpolantFactoryMethodDiscrete;break;case ha:e=this.InterpolantFactoryMethodLinear;break;case Qr:e=this.InterpolantFactoryMethodSmooth;break;case Dl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ct("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cs;case this.InterpolantFactoryMethodLinear:return ha;case this.InterpolantFactoryMethodSmooth:return Qr;case this.InterpolantFactoryMethodBezier:return Dl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(At("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(At("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){At("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){At("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&ad(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){At("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Qr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(n)l=!0;else{let d=o*i,h=d-i,m=d+i;for(let x=0;x!==i;++x){let S=e[d+x];if(S!==e[h+x]||S!==e[m+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*i,h=a*i;for(let m=0;m!==i;++m)e[h+m]=e[d+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};Ke.prototype.ValueTypeName="";Ke.prototype.TimeBufferType=Float32Array;Ke.prototype.ValueBufferType=Float32Array;Ke.prototype.DefaultInterpolation=ha;var an=class extends Ke{constructor(t,e,i){super(t,e,i)}};an.prototype.ValueTypeName="bool";an.prototype.ValueBufferType=Array;an.prototype.DefaultInterpolation=Cs;an.prototype.InterpolantFactoryMethodLinear=void 0;an.prototype.InterpolantFactoryMethodSmooth=void 0;var Aa=class extends Ke{constructor(t,e,i,n){super(t,e,i,n)}};Aa.prototype.ValueTypeName="color";var Ca=class extends Ke{constructor(t,e,i,n){super(t,e,i,n)}};Ca.prototype.ValueTypeName="number";var Ra=class extends rn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e),c=t*o;for(let u=c+o;c!==u;c+=4)Si.slerpFlat(r,0,a,c-o,a,c,l);return r}},$s=class extends Ke{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new Ra(this.times,this.values,this.getValueSize(),t)}};$s.prototype.ValueTypeName="quaternion";$s.prototype.InterpolantFactoryMethodSmooth=void 0;var on=class extends Ke{constructor(t,e,i){super(t,e,i)}};on.prototype.ValueTypeName="string";on.prototype.ValueBufferType=Array;on.prototype.DefaultInterpolation=Cs;on.prototype.InterpolantFactoryMethodLinear=void 0;on.prototype.InterpolantFactoryMethodSmooth=void 0;var Ia=class extends Ke{constructor(t,e,i,n){super(t,e,i,n)}};Ia.prototype.ValueTypeName="vector";var Pa=class{constructor(t,e,i){let n=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&n.onStart!==void 0&&n.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,n.onProgress!==void 0&&n.onProgress(u,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let m=c[d],x=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},tu=new Pa,La=class{constructor(t){this.manager=t!==void 0?t:tu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};La.DEFAULT_MATERIAL_NAME="__DEFAULT";var ls=class extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Js=class extends ls{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Ll=new Qt,fh=new U,ph=new U,Da=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.mapType=Xe,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new as,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;fh.setFromMatrixPosition(t.matrixWorld),e.position.copy(fh),ph.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ph),e.updateMatrixWorld(),Ll.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ll,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===ts||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ll)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Kr=new U,jr=new Si,gi=new U,Ks=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Kr,jr,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kr,jr,gi.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(Kr,jr,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kr,jr,gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},tn=new U,mh=new bt,gh=new bt,Ue=class extends Ks{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=fa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ll*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fa*2*Math.atan(Math.tan(ll*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(tn.x,tn.y).multiplyScalar(-t/tn.z),tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(tn.x,tn.y).multiplyScalar(-t/tn.z)}getViewSize(t,e){return this.getViewBounds(t,mh,gh),e.subVectors(gh,mh)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ll*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var zl=class extends Da{constructor(){super(new Ue(90,1,.5,500)),this.isPointLightShadow=!0}},js=class extends ls{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new zl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ln=class extends Ks{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},kl=class extends Da{constructor(){super(new ln(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qs=class extends ls{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new kl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Kn=-90,jn=1,Ua=class extends De{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Ue(Kn,jn,t,e);n.layers=this.layers,this.add(n);let r=new Ue(Kn,jn,t,e);r.layers=this.layers,this.add(r);let a=new Ue(Kn,jn,t,e);a.layers=this.layers,this.add(a);let o=new Ue(Kn,jn,t,e);o.layers=this.layers,this.add(o);let l=new Ue(Kn,jn,t,e);l.layers=this.layers,this.add(l);let c=new Ue(Kn,jn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===hi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ts)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,m),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},Na=class extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},tr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Id.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Id(){this._document.hidden===!1&&this.reset()}var ic="\\[\\]\\.:\\/",Pd=new RegExp("["+ic+"]","g"),nc="[^"+ic+"]",Ld="[^"+ic.replace("\\.","")+"]",Dd=/((?:WC+[\/:])*)/.source.replace("WC",nc),Ud=/(WCOD+)?/.source.replace("WCOD",Ld),Nd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nc),Fd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nc),Od=new RegExp("^"+Dd+Ud+Nd+Fd+"$"),Bd=["material","materials","bones","map"],Gl=class{constructor(t,e,i){let n=i||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},he=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Pd,"")}static parseTrackName(t){let e=Od.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);Bd.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ct("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){At("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){At("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){At("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){At("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){At("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){At("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){At("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[n];if(a===void 0){let c=e.nodeName;At("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){At("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){At("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};he.Composite=Gl;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Jg=new Float32Array(1);var cc=class cc{constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=n,this}};cc.prototype.isMatrix2=!0;var Vl=cc;function sc(s,t,e,i){let n=zd(i);switch(e){case jl:return s*t;case Wa:return s*t/n.components*n.byteLength;case Xa:return s*t/n.components*n.byteLength;case dn:return s*t*2/n.components*n.byteLength;case qa:return s*t*2/n.components*n.byteLength;case Ql:return s*t*3/n.components*n.byteLength;case ri:return s*t*4/n.components*n.byteLength;case Ya:return s*t*4/n.components*n.byteLength;case hr:case ur:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case dr:case fr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case $a:case Ka:return Math.max(s,16)*Math.max(t,8)/4;case Za:case Ja:return Math.max(s,8)*Math.max(t,8)/2;case ja:case Qa:case eo:case io:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case to:case pr:case no:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case so:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ro:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ao:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case oo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case lo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case co:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ho:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case uo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case fo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case po:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case mo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case go:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case xo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case _o:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case vo:case yo:case Mo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case So:case bo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case mr:case To:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zd(s){switch(s){case Xe:case Zl:return{byteLength:1,components:1};case hs:case $l:case Ge:return{byteLength:2,components:1};case Va:case Ha:return{byteLength:2,components:4};case fi:case Ga:case si:return{byteLength:4,components:1};case Jl:case Kl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?Ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function bu(){let s=null,t=!1,e=null,i=null;function n(r,a){e(r,a),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&s!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Gd(s){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=s.createBuffer();s.bindBuffer(l,h),s.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=s.SHORT;else if(c instanceof Uint32Array)m=s.UNSIGNED_INT;else if(c instanceof Int32Array)m=s.INT;else if(c instanceof Int8Array)m=s.BYTE;else if(c instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let u=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,u);else{d.sort((m,x)=>m.start-x.start);let h=0;for(let m=1;m<d.length;m++){let x=d[h],S=d[m];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++h,d[h]=S)}d.length=h+1;for(let m=0,x=d.length;m<x;m++){let S=d[m];s.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var Vd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hd=`#ifdef USE_ALPHAHASH
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
#endif`,Wd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zd=`#ifdef USE_AOMAP
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
#endif`,$d=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jd=`#ifdef USE_BATCHING
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
#endif`,Kd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ef=`#ifdef USE_IRIDESCENCE
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
#endif`,nf=`#ifdef USE_BUMPMAP
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
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,uf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,df=`#define PI 3.141592653589793
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
} // validated`,ff=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pf=`vec3 transformedNormal = objectNormal;
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
#endif`,mf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_f=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vf="gl_FragColor = linearToOutputTexel( gl_FragColor );",yf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mf=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Sf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bf=`#ifdef USE_ENVMAP
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
#endif`,Tf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Af=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,If=`#ifdef USE_GRADIENTMAP
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
}`,Pf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uf=`uniform bool receiveShadow;
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
#endif
#include <lightprobes_pars_fragment>`,Nf=`#ifdef USE_ENVMAP
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
#endif`,Ff=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kf=`PhysicalMaterial material;
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
#endif`,Gf=`uniform sampler2D dfgLUT;
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
}`,Vf=`
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
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xf=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,qf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$f=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qf=`#if defined( USE_POINTS_UV )
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
#endif`,tp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ep=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ip=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,np=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rp=`#ifdef USE_MORPHTARGETS
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
#endif`,ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,op=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dp=`#ifdef USE_NORMALMAP
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
#endif`,fp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_p=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ep=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ap=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,Cp=`float getShadowMask() {
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
}`,Rp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ip=`#ifdef USE_SKINNING
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
#endif`,Pp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lp=`#ifdef USE_SKINNING
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
#endif`,Dp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Up=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Np=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Op=`#ifdef USE_TRANSMISSION
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
#endif`,Bp=`#ifdef USE_TRANSMISSION
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
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Hp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wp=`uniform sampler2D t2D;
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
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$p=`#include <common>
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
}`,Jp=`#if DEPTH_PACKING == 3200
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
}`,Kp=`#define DISTANCE
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
}`,jp=`#define DISTANCE
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
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`uniform float scale;
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
}`,im=`uniform vec3 diffuse;
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
}`,nm=`#include <common>
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
}`,sm=`uniform vec3 diffuse;
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
}`,rm=`#define LAMBERT
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
}`,am=`#define LAMBERT
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
}`,om=`#define MATCAP
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
}`,lm=`#define MATCAP
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
}`,cm=`#define NORMAL
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
}`,hm=`#define NORMAL
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
}`,um=`#define PHONG
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
}`,dm=`#define PHONG
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
}`,fm=`#define STANDARD
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
}`,pm=`#define STANDARD
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
}`,mm=`#define TOON
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
}`,gm=`#define TOON
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
}`,xm=`uniform float size;
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
}`,_m=`uniform vec3 diffuse;
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
}`,vm=`#include <common>
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
}`,ym=`uniform vec3 color;
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
}`,Mm=`uniform float rotation;
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
}`,Sm=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:Vd,alphahash_pars_fragment:Hd,alphamap_fragment:Wd,alphamap_pars_fragment:Xd,alphatest_fragment:qd,alphatest_pars_fragment:Yd,aomap_fragment:Zd,aomap_pars_fragment:$d,batching_pars_vertex:Jd,batching_vertex:Kd,begin_vertex:jd,beginnormal_vertex:Qd,bsdfs:tf,iridescence_fragment:ef,bumpmap_pars_fragment:nf,clipping_planes_fragment:sf,clipping_planes_pars_fragment:rf,clipping_planes_pars_vertex:af,clipping_planes_vertex:of,color_fragment:lf,color_pars_fragment:cf,color_pars_vertex:hf,color_vertex:uf,common:df,cube_uv_reflection_fragment:ff,defaultnormal_vertex:pf,displacementmap_pars_vertex:mf,displacementmap_vertex:gf,emissivemap_fragment:xf,emissivemap_pars_fragment:_f,colorspace_fragment:vf,colorspace_pars_fragment:yf,envmap_fragment:Mf,envmap_common_pars_fragment:Sf,envmap_pars_fragment:bf,envmap_pars_vertex:Tf,envmap_physical_pars_fragment:Nf,envmap_vertex:wf,fog_vertex:Ef,fog_pars_vertex:Af,fog_fragment:Cf,fog_pars_fragment:Rf,gradientmap_pars_fragment:If,lightmap_pars_fragment:Pf,lights_lambert_fragment:Lf,lights_lambert_pars_fragment:Df,lights_pars_begin:Uf,lights_toon_fragment:Ff,lights_toon_pars_fragment:Of,lights_phong_fragment:Bf,lights_phong_pars_fragment:zf,lights_physical_fragment:kf,lights_physical_pars_fragment:Gf,lights_fragment_begin:Vf,lights_fragment_maps:Hf,lights_fragment_end:Wf,lightprobes_pars_fragment:Xf,logdepthbuf_fragment:qf,logdepthbuf_pars_fragment:Yf,logdepthbuf_pars_vertex:Zf,logdepthbuf_vertex:$f,map_fragment:Jf,map_pars_fragment:Kf,map_particle_fragment:jf,map_particle_pars_fragment:Qf,metalnessmap_fragment:tp,metalnessmap_pars_fragment:ep,morphinstance_vertex:ip,morphcolor_vertex:np,morphnormal_vertex:sp,morphtarget_pars_vertex:rp,morphtarget_vertex:ap,normal_fragment_begin:op,normal_fragment_maps:lp,normal_pars_fragment:cp,normal_pars_vertex:hp,normal_vertex:up,normalmap_pars_fragment:dp,clearcoat_normal_fragment_begin:fp,clearcoat_normal_fragment_maps:pp,clearcoat_pars_fragment:mp,iridescence_pars_fragment:gp,opaque_fragment:xp,packing:_p,premultiplied_alpha_fragment:vp,project_vertex:yp,dithering_fragment:Mp,dithering_pars_fragment:Sp,roughnessmap_fragment:bp,roughnessmap_pars_fragment:Tp,shadowmap_pars_fragment:wp,shadowmap_pars_vertex:Ep,shadowmap_vertex:Ap,shadowmask_pars_fragment:Cp,skinbase_vertex:Rp,skinning_pars_vertex:Ip,skinning_vertex:Pp,skinnormal_vertex:Lp,specularmap_fragment:Dp,specularmap_pars_fragment:Up,tonemapping_fragment:Np,tonemapping_pars_fragment:Fp,transmission_fragment:Op,transmission_pars_fragment:Bp,uv_pars_fragment:zp,uv_pars_vertex:kp,uv_vertex:Gp,worldpos_vertex:Vp,background_vert:Hp,background_frag:Wp,backgroundCube_vert:Xp,backgroundCube_frag:qp,cube_vert:Yp,cube_frag:Zp,depth_vert:$p,depth_frag:Jp,distance_vert:Kp,distance_frag:jp,equirect_vert:Qp,equirect_frag:tm,linedashed_vert:em,linedashed_frag:im,meshbasic_vert:nm,meshbasic_frag:sm,meshlambert_vert:rm,meshlambert_frag:am,meshmatcap_vert:om,meshmatcap_frag:lm,meshnormal_vert:cm,meshnormal_frag:hm,meshphong_vert:um,meshphong_frag:dm,meshphysical_vert:fm,meshphysical_frag:pm,meshtoon_vert:mm,meshtoon_frag:gm,points_vert:xm,points_frag:_m,shadow_vert:vm,shadow_frag:ym,sprite_vert:Mm,sprite_frag:Sm},ut={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},Ci={basic:{uniforms:Ve([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Ve([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Ve([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Ve([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Ve([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Ve([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Ve([ut.points,ut.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Ve([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Ve([ut.common,ut.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Ve([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Ve([ut.sprite,ut.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distance:{uniforms:Ve([ut.common,ut.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distance_vert,fragmentShader:Gt.distance_frag},shadow:{uniforms:Ve([ut.lights,ut.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Ci.physical={uniforms:Ve([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};var Co={r:0,b:0,g:0},bm=new Qt,Tu=new Nt;Tu.set(-1,0,0,0,1,0,0,0,1);function Tm(s,t,e,i,n,r){let a=new Rt(0),o=n===!0?0:1,l,c,u=null,d=0,h=null;function m(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){let y=v.backgroundBlurriness>0;T=t.get(T,y)}return T}function x(v){let T=!1,y=m(v);y===null?p(a,o):y&&y.isColor&&(p(y,1),T=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(v,T){let y=m(T);y&&(y.isCubeTexture||y.mapping===lr)?(c===void 0&&(c=new yt(new Fe(1,1,1),new me({name:"BackgroundCubeMaterial",uniforms:In(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,b,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(bm.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Tu),c.material.toneMapped=Ht.getTransfer(y.colorSpace)!==jt,(u!==y||d!==y.version||h!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new yt(new wi(2,2),new me({name:"BackgroundMaterial",uniforms:In(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Ht.getTransfer(y.colorSpace)!==jt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==s.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,T){v.getRGB(Co,ec(s)),e.buffers.color.setClear(Co.r,Co.g,Co.b,T,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,T=1){a.set(v),o=T,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:x,addToRenderList:S,dispose:f}}function wm(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=h(null),r=n,a=!1;function o(C,P,z,G,L){let B=!1,F=d(C,G,z,P);r!==F&&(r=F,c(r.object)),B=m(C,G,z,L),B&&x(C,G,z,L),L!==null&&t.update(L,s.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,y(C,P,z,G),L!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return s.createVertexArray()}function c(C){return s.bindVertexArray(C)}function u(C){return s.deleteVertexArray(C)}function d(C,P,z,G){let L=G.wireframe===!0,B=i[P.id];B===void 0&&(B={},i[P.id]=B);let F=C.isInstancedMesh===!0?C.id:0,q=B[F];q===void 0&&(q={},B[F]=q);let Z=q[z.id];Z===void 0&&(Z={},q[z.id]=Z);let tt=Z[L];return tt===void 0&&(tt=h(l()),Z[L]=tt),tt}function h(C){let P=[],z=[],G=[];for(let L=0;L<e;L++)P[L]=0,z[L]=0,G[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:G,object:C,attributes:{},index:null}}function m(C,P,z,G){let L=r.attributes,B=P.attributes,F=0,q=z.getAttributes();for(let Z in q)if(q[Z].location>=0){let st=L[Z],ct=B[Z];if(ct===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(ct=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(ct=C.instanceColor)),st===void 0||st.attribute!==ct||ct&&st.data!==ct.data)return!0;F++}return r.attributesNum!==F||r.index!==G}function x(C,P,z,G){let L={},B=P.attributes,F=0,q=z.getAttributes();for(let Z in q)if(q[Z].location>=0){let st=B[Z];st===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(st=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(st=C.instanceColor));let ct={};ct.attribute=st,st&&st.data&&(ct.data=st.data),L[Z]=ct,F++}r.attributes=L,r.attributesNum=F,r.index=G}function S(){let C=r.newAttributes;for(let P=0,z=C.length;P<z;P++)C[P]=0}function p(C){f(C,0)}function f(C,P){let z=r.newAttributes,G=r.enabledAttributes,L=r.attributeDivisors;z[C]=1,G[C]===0&&(s.enableVertexAttribArray(C),G[C]=1),L[C]!==P&&(s.vertexAttribDivisor(C,P),L[C]=P)}function v(){let C=r.newAttributes,P=r.enabledAttributes;for(let z=0,G=P.length;z<G;z++)P[z]!==C[z]&&(s.disableVertexAttribArray(z),P[z]=0)}function T(C,P,z,G,L,B,F){F===!0?s.vertexAttribIPointer(C,P,z,L,B):s.vertexAttribPointer(C,P,z,G,L,B)}function y(C,P,z,G){S();let L=G.attributes,B=z.getAttributes(),F=P.defaultAttributeValues;for(let q in B){let Z=B[q];if(Z.location>=0){let tt=L[q];if(tt===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(tt=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(tt=C.instanceColor)),tt!==void 0){let st=tt.normalized,ct=tt.itemSize,Et=t.get(tt);if(Et===void 0)continue;let Wt=Et.buffer,Dt=Et.type,K=Et.bytesPerElement,dt=Dt===s.INT||Dt===s.UNSIGNED_INT||tt.gpuType===Ga;if(tt.isInterleavedBufferAttribute){let rt=tt.data,Pt=rt.stride,Ft=tt.offset;if(rt.isInstancedInterleavedBuffer){for(let Lt=0;Lt<Z.locationSize;Lt++)f(Z.location+Lt,rt.meshPerAttribute);C.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Lt=0;Lt<Z.locationSize;Lt++)p(Z.location+Lt);s.bindBuffer(s.ARRAY_BUFFER,Wt);for(let Lt=0;Lt<Z.locationSize;Lt++)T(Z.location+Lt,ct/Z.locationSize,Dt,st,Pt*K,(Ft+ct/Z.locationSize*Lt)*K,dt)}else{if(tt.isInstancedBufferAttribute){for(let rt=0;rt<Z.locationSize;rt++)f(Z.location+rt,tt.meshPerAttribute);C.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let rt=0;rt<Z.locationSize;rt++)p(Z.location+rt);s.bindBuffer(s.ARRAY_BUFFER,Wt);for(let rt=0;rt<Z.locationSize;rt++)T(Z.location+rt,ct/Z.locationSize,Dt,st,ct*K,ct/Z.locationSize*rt*K,dt)}}else if(F!==void 0){let st=F[q];if(st!==void 0)switch(st.length){case 2:s.vertexAttrib2fv(Z.location,st);break;case 3:s.vertexAttrib3fv(Z.location,st);break;case 4:s.vertexAttrib4fv(Z.location,st);break;default:s.vertexAttrib1fv(Z.location,st)}}}}v()}function A(){w();for(let C in i){let P=i[C];for(let z in P){let G=P[z];for(let L in G){let B=G[L];for(let F in B)u(B[F].object),delete B[F];delete G[L]}}delete i[C]}}function b(C){if(i[C.id]===void 0)return;let P=i[C.id];for(let z in P){let G=P[z];for(let L in G){let B=G[L];for(let F in B)u(B[F].object),delete B[F];delete G[L]}}delete i[C.id]}function I(C){for(let P in i){let z=i[P];for(let G in z){let L=z[G];if(L[C.id]===void 0)continue;let B=L[C.id];for(let F in B)u(B[F].object),delete B[F];delete L[C.id]}}}function g(C){for(let P in i){let z=i[P],G=C.isInstancedMesh===!0?C.id:0,L=z[G];if(L!==void 0){for(let B in L){let F=L[B];for(let q in F)u(F[q].object),delete F[q];delete L[B]}delete z[G],Object.keys(z).length===0&&delete i[P]}}}function w(){R(),a=!0,r!==n&&(r=n,c(r.object))}function R(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfObject:g,releaseStatesOfProgram:I,initAttributes:S,enableAttribute:p,disableUnusedAttributes:v}}function Em(s,t,e){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,u){u!==0&&(s.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let m=0;m<u;m++)h+=c[m];e.update(h,i,1)}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Am(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(I){return!(I!==ri&&i.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let g=I===Ge&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Xe&&i.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==si&&!g)}function l(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Ct("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:y,maxSamples:A,samples:b}}function Cm(s){let t=this,e=null,i=0,n=!1,r=!1,a=new xi,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let m=d.length!==0||h||i!==0||n;return n=h,i=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,m){let x=d.clippingPlanes,S=d.clipIntersection,p=d.clipShadows,f=s.get(d);if(!n||x===null||x.length===0||r&&!p)r?u(null):c();else{let v=r?0:i,T=v*4,y=f.clippingState||null;l.value=y,y=u(x,h,T,m);for(let A=0;A!==T;++A)y[A]=e[A];f.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,m,x){let S=d!==null?d.length:0,p=null;if(S!==0){if(p=l.value,x!==!0||p===null){let f=m+S*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<f)&&(p=new Float32Array(f));for(let T=0,y=m;T!==S;++T,y+=4)a.copy(d[T]).applyMatrix4(v,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,p}}var fn=4,eu=[.125,.215,.35,.446,.526,.582],Pn=20,Rm=256,gr=new ln,iu=new Rt,hc=null,uc=0,dc=0,fc=!1,Im=new U,Io=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,n=100,r={}){let{size:a=256,position:o=Im}=r;hc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,n,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(hc,uc,dc),this._renderer.xr.enabled=fc,t.scissorTest=!1,ds(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cn||t.mapping===Rn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ne,minFilter:Ne,generateMipmaps:!1,type:Ge,format:ri,colorSpace:Rs,depthBuffer:!1},n=nu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nu(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Pm(r)),this._blurMaterial=Dm(r,t,e),this._ggxMaterial=Lm(r,t,e)}return n}_compileMaterial(t){let e=new yt(new le,t);this._renderer.compile(e,gr)}_sceneToCubeUV(t,e,i,n,r){let l=new Ue(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,m=d.toneMapping;d.getClearColor(iu),d.toneMapping=di,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(n),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new yt(new Fe,new ui({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,p=S.material,f=!1,v=t.background;v?v.isColor&&(p.color.copy(v),t.background=null,f=!0):(p.color.copy(iu),f=!0);for(let T=0;T<6;T++){let y=T%3;y===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[T],r.y,r.z)):y===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[T]));let A=this._cubeSize;ds(n,y*A,T>2?A:0,A,A),d.setRenderTarget(n),f&&d.render(S,l),d.render(t,l)}d.toneMapping=m,d.autoClear=h,t.background=v}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===cn||t.mapping===Rn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=su());let r=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;ds(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,gr)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let n=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,m=d*h,{_lodMax:x}=this,S=this._sizeLods[i],p=3*S*(i>x-fn?i-x+fn:0),f=4*(this._cubeSize-S);l.envMap.value=t.texture,l.roughness.value=m,l.mipInt.value=x-e,ds(r,p,f,3*S,2*S),n.setRenderTarget(r),n.render(o,gr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-i,ds(t,p,f,3*S,2*S),n.setRenderTarget(t),n.render(o,gr)}_blur(t,e,i,n,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",r),this._halfBlur(a,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&At("blur direction must be either latitudinal or longitudinal!");let u=3,d=this._lodMeshes[n];d.material=c;let h=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Pn-1),S=r/x,p=isFinite(r)?1+Math.floor(u*S):Pn;p>Pn&&Ct(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Pn}`);let f=[],v=0;for(let I=0;I<Pn;++I){let g=I/S,w=Math.exp(-g*g/2);f.push(w),I===0?v+=w:I<p&&(v+=2*w)}for(let I=0;I<f.length;I++)f[I]=f[I]/v;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:T}=this;h.dTheta.value=x,h.mipInt.value=T-i;let y=this._sizeLods[n],A=3*y*(n>T-fn?n-T+fn:0),b=4*(this._cubeSize-y);ds(e,A,b,3*y,2*y),l.setRenderTarget(e),l.render(d,gr)}};function Pm(s){let t=[],e=[],i=[],n=s,r=s-fn+1+eu.length;for(let a=0;a<r;a++){let o=Math.pow(2,n);t.push(o);let l=1/o;a>s-fn?l=eu[a-s+fn-1]:a===0&&(l=0),e.push(l);let c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,x=6,S=3,p=2,f=1,v=new Float32Array(S*x*m),T=new Float32Array(p*x*m),y=new Float32Array(f*x*m);for(let b=0;b<m;b++){let I=b%3*2/3-1,g=b>2?0:-1,w=[I,g,0,I+2/3,g,0,I+2/3,g+1,0,I,g,0,I+2/3,g+1,0,I,g+1,0];v.set(w,S*x*b),T.set(h,p*x*b);let R=[b,b,b,b,b,b];y.set(R,f*x*b)}let A=new le;A.setAttribute("position",new Ee(v,S)),A.setAttribute("uv",new Ee(T,p)),A.setAttribute("faceIndex",new Ee(y,f)),i.push(new yt(A,null)),n>fn&&n--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function nu(s,t,e){let i=new Ae(s,t,e);return i.texture.mapping=lr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ds(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Lm(s,t,e){return new me({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Rm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Do(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Dm(s,t,e){let i=new Float32Array(Pn),n=new U(0,1,0);return new me({name:"SphericalGaussianBlur",defines:{n:Pn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Do(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function su(){return new me({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Do(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function ru(){return new me({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Do(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Do(){return`

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
	`}var Po=class extends Ae{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Ws(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Fe(5,5,5),r=new me({name:"CubemapFromEquirect",uniforms:In(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Oe,blending:ni});r.uniforms.tEquirect.value=e;let a=new yt(n,r),o=e.minFilter;return e.minFilter===hn&&(e.minFilter=Ne),new Ua(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}};function Um(s){let t=new WeakMap,e=new WeakMap,i=null;function n(h,m=!1){return h==null?null:m?a(h):r(h)}function r(h){if(h&&h.isTexture){let m=h.mapping;if(m===Ba||m===za)if(t.has(h)){let x=t.get(h).texture;return o(x,h.mapping)}else{let x=h.image;if(x&&x.height>0){let S=new Po(x.height);return S.fromEquirectangularTexture(s,h),t.set(h,S),h.addEventListener("dispose",c),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let m=h.mapping,x=m===Ba||m===za,S=m===cn||m===Rn;if(x||S){let p=e.get(h),f=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new Io(s)),p=x?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{let v=h.image;return x&&v&&v.height>0||S&&v&&l(v)?(i===null&&(i=new Io(s)),p=x?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,m){return m===Ba?h.mapping=cn:m===za&&(h.mapping=Rn),h}function l(h){let m=0,x=6;for(let S=0;S<x;S++)h[S]!==void 0&&m++;return m===x}function c(h){let m=h.target;m.removeEventListener("dispose",c);let x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function u(h){let m=h.target;m.removeEventListener("dispose",u);let x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function Nm(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&da("WebGLRenderer: "+i+" extension not supported."),n}}}function Fm(s,t,e,i){let n={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let x in h.attributes)t.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete n[h.id];let m=r.get(h);m&&(t.remove(m),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return n[h.id]===!0||(h.addEventListener("dispose",a),n[h.id]=!0,e.memory.geometries++),h}function l(d){let h=d.attributes;for(let m in h)t.update(h[m],s.ARRAY_BUFFER)}function c(d){let h=[],m=d.index,x=d.attributes.position,S=0;if(x===void 0)return;if(m!==null){let v=m.array;S=m.version;for(let T=0,y=v.length;T<y;T+=3){let A=v[T+0],b=v[T+1],I=v[T+2];h.push(A,b,b,I,I,A)}}else{let v=x.array;S=x.version;for(let T=0,y=v.length/3-1;T<y;T+=3){let A=T+0,b=T+1,I=T+2;h.push(A,b,b,I,I,A)}}let p=new(x.count>=65535?Bs:Os)(h,1);p.version=S;let f=r.get(d);f&&t.remove(f),r.set(d,p)}function u(d){let h=r.get(d);if(h){let m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Om(s,t,e){let i;function n(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){s.drawElements(i,h,r,d*a),e.update(h,i,1)}function c(d,h,m){m!==0&&(s.drawElementsInstanced(i,h,r,d*a,m),e.update(h,i,m))}function u(d,h,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,m);let S=0;for(let p=0;p<m;p++)S+=h[p];e.update(S,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Bm(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:At("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function zm(s,t,e){let i=new WeakMap,n=new pe;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==d){let w=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();let m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],T=0;m===!0&&(T=1),x===!0&&(T=2),S===!0&&(T=3);let y=o.attributes.position.count*T,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let b=new Float32Array(y*A*4*d),I=new Ds(b,y,A,d);I.type=si,I.needsUpdate=!0;let g=T*4;for(let R=0;R<d;R++){let C=p[R],P=f[R],z=v[R],G=y*A*4*R;for(let L=0;L<C.count;L++){let B=L*g;m===!0&&(n.fromBufferAttribute(C,L),b[G+B+0]=n.x,b[G+B+1]=n.y,b[G+B+2]=n.z,b[G+B+3]=0),x===!0&&(n.fromBufferAttribute(P,L),b[G+B+4]=n.x,b[G+B+5]=n.y,b[G+B+6]=n.z,b[G+B+7]=0),S===!0&&(n.fromBufferAttribute(z,L),b[G+B+8]=n.x,b[G+B+9]=n.y,b[G+B+10]=n.z,b[G+B+11]=z.itemSize===4?n.w:1)}}h={count:d,texture:I,size:new bt(y,A)},i.set(o,h),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let m=0;for(let S=0;S<c.length;S++)m+=c[S];let x=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function km(s,t,e,i,n){let r=new WeakMap;function a(c){let u=n.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var Gm={[ir]:"LINEAR_TONE_MAPPING",[nr]:"REINHARD_TONE_MAPPING",[sr]:"CINEON_TONE_MAPPING",[Cn]:"ACES_FILMIC_TONE_MAPPING",[ar]:"AGX_TONE_MAPPING",[or]:"NEUTRAL_TONE_MAPPING",[rr]:"CUSTOM_TONE_MAPPING"};function Vm(s,t,e,i,n){let r=new Ae(t,e,{type:s,depthBuffer:i,stencilBuffer:n,depthTexture:i?new Vi(t,e):void 0}),a=new Ae(t,e,{type:Ge,depthBuffer:!1,stencilBuffer:!1}),o=new le;o.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new kt([0,2,0,0,2,0],2));let l=new os({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new yt(o,l),u=new ln(-1,1,1,-1,0,1),d=null,h=null,m=!1,x,S=null,p=[],f=!1;this.setSize=function(v,T){r.setSize(v,T),a.setSize(v,T);for(let y=0;y<p.length;y++){let A=p[y];A.setSize&&A.setSize(v,T)}},this.setEffects=function(v){p=v,f=p.length>0&&p[0].isRenderPass===!0;let T=r.width,y=r.height;for(let A=0;A<p.length;A++){let b=p[A];b.setSize&&b.setSize(T,y)}},this.begin=function(v,T){if(m||v.toneMapping===di&&p.length===0)return!1;if(S=T,T!==null){let y=T.width,A=T.height;(r.width!==y||r.height!==A)&&this.setSize(y,A)}return f===!1&&v.setRenderTarget(r),x=v.toneMapping,v.toneMapping=di,!0},this.hasRenderPass=function(){return f},this.end=function(v,T){v.toneMapping=x,m=!0;let y=r,A=a;for(let b=0;b<p.length;b++){let I=p[b];if(I.enabled!==!1&&(I.render(v,A,y,T),I.needsSwap!==!1)){let g=y;y=A,A=g}}if(d!==v.outputColorSpace||h!==v.toneMapping){d=v.outputColorSpace,h=v.toneMapping,l.defines={},Ht.getTransfer(d)===jt&&(l.defines.SRGB_TRANSFER="");let b=Gm[h];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,v.setRenderTarget(S),v.render(c,u),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),a.dispose(),o.dispose(),l.dispose()}}var wu=new We,gc=new Vi(1,1),Eu=new Ds,Au=new ga,Cu=new Ws,au=[],ou=[],lu=new Float32Array(16),cu=new Float32Array(9),hu=new Float32Array(4);function ps(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=au[n];if(r===void 0&&(r=new Float32Array(n),au[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Re(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Ie(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Uo(s,t){let e=ou[t];e===void 0&&(e=new Int32Array(t),ou[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Hm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Wm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2fv(this.addr,t),Ie(e,t)}}function Xm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;s.uniform3fv(this.addr,t),Ie(e,t)}}function qm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4fv(this.addr,t),Ie(e,t)}}function Ym(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Re(e,i))return;hu.set(i),s.uniformMatrix2fv(this.addr,!1,hu),Ie(e,i)}}function Zm(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Re(e,i))return;cu.set(i),s.uniformMatrix3fv(this.addr,!1,cu),Ie(e,i)}}function $m(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Re(e,i))return;lu.set(i),s.uniformMatrix4fv(this.addr,!1,lu),Ie(e,i)}}function Jm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Km(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2iv(this.addr,t),Ie(e,t)}}function jm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3iv(this.addr,t),Ie(e,t)}}function Qm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4iv(this.addr,t),Ie(e,t)}}function t0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function e0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2uiv(this.addr,t),Ie(e,t)}}function i0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3uiv(this.addr,t),Ie(e,t)}}function n0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4uiv(this.addr,t),Ie(e,t)}}function s0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(gc.compareFunction=e.isReversedDepthBuffer()?Ao:Eo,r=gc):r=wu,e.setTexture2D(t||r,n)}function r0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Au,n)}function a0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Cu,n)}function o0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Eu,n)}function l0(s){switch(s){case 5126:return Hm;case 35664:return Wm;case 35665:return Xm;case 35666:return qm;case 35674:return Ym;case 35675:return Zm;case 35676:return $m;case 5124:case 35670:return Jm;case 35667:case 35671:return Km;case 35668:case 35672:return jm;case 35669:case 35673:return Qm;case 5125:return t0;case 36294:return e0;case 36295:return i0;case 36296:return n0;case 35678:case 36198:case 36298:case 36306:case 35682:return s0;case 35679:case 36299:case 36307:return r0;case 35680:case 36300:case 36308:case 36293:return a0;case 36289:case 36303:case 36311:case 36292:return o0}}function c0(s,t){s.uniform1fv(this.addr,t)}function h0(s,t){let e=ps(t,this.size,2);s.uniform2fv(this.addr,e)}function u0(s,t){let e=ps(t,this.size,3);s.uniform3fv(this.addr,e)}function d0(s,t){let e=ps(t,this.size,4);s.uniform4fv(this.addr,e)}function f0(s,t){let e=ps(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function p0(s,t){let e=ps(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function m0(s,t){let e=ps(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function g0(s,t){s.uniform1iv(this.addr,t)}function x0(s,t){s.uniform2iv(this.addr,t)}function _0(s,t){s.uniform3iv(this.addr,t)}function v0(s,t){s.uniform4iv(this.addr,t)}function y0(s,t){s.uniform1uiv(this.addr,t)}function M0(s,t){s.uniform2uiv(this.addr,t)}function S0(s,t){s.uniform3uiv(this.addr,t)}function b0(s,t){s.uniform4uiv(this.addr,t)}function T0(s,t,e){let i=this.cache,n=t.length,r=Uo(e,n);Re(i,r)||(s.uniform1iv(this.addr,r),Ie(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=gc:a=wu;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,r[o])}function w0(s,t,e){let i=this.cache,n=t.length,r=Uo(e,n);Re(i,r)||(s.uniform1iv(this.addr,r),Ie(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Au,r[a])}function E0(s,t,e){let i=this.cache,n=t.length,r=Uo(e,n);Re(i,r)||(s.uniform1iv(this.addr,r),Ie(i,r));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||Cu,r[a])}function A0(s,t,e){let i=this.cache,n=t.length,r=Uo(e,n);Re(i,r)||(s.uniform1iv(this.addr,r),Ie(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Eu,r[a])}function C0(s){switch(s){case 5126:return c0;case 35664:return h0;case 35665:return u0;case 35666:return d0;case 35674:return f0;case 35675:return p0;case 35676:return m0;case 5124:case 35670:return g0;case 35667:case 35671:return x0;case 35668:case 35672:return _0;case 35669:case 35673:return v0;case 5125:return y0;case 36294:return M0;case 36295:return S0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return w0;case 35680:case 36300:case 36308:case 36293:return E0;case 36289:case 36303:case 36311:case 36292:return A0}}var xc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=l0(e.type)}},_c=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=C0(e.type)}},vc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(t,e[o.id],i)}}},pc=/(\w+)(\])?(\[|\.)?/g;function uu(s,t){s.seq.push(t),s.map[t.id]=t}function R0(s,t,e){let i=s.name,n=i.length;for(pc.lastIndex=0;;){let r=pc.exec(i),a=pc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){uu(e,c===void 0?new xc(o,s,t):new _c(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new vc(o),uu(e,d)),e=d}}}var fs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);R0(o,l,this)}let n=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function du(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var I0=37297,P0=0;function L0(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var fu=new Nt;function D0(s){Ht._getMatrix(fu,Ht.workingColorSpace,s);let t=`mat3( ${fu.elements.map(e=>e.toFixed(4))} )`;switch(Ht.getTransfer(s)){case Is:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return Ct("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function pu(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+L0(s.getShaderSource(t),o)}else return r}function U0(s,t){let e=D0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var N0={[ir]:"Linear",[nr]:"Reinhard",[sr]:"Cineon",[Cn]:"ACESFilmic",[ar]:"AgX",[or]:"Neutral",[rr]:"Custom"};function F0(s,t){let e=N0[t];return e===void 0?(Ct("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ro=new U;function O0(){Ht.getLuminanceCoefficients(Ro);let s=Ro.x.toFixed(4),t=Ro.y.toFixed(4),e=Ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_r).join(`
`)}function z0(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function k0(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function _r(s){return s!==""}function mu(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var G0=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(s){return s.replace(G0,H0)}var V0=new Map;function H0(s,t){let e=Gt[t];if(e===void 0){let i=V0.get(t);if(i!==void 0)e=Gt[i],Ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return yc(e)}var W0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xu(s){return s.replace(W0,X0)}function X0(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function _u(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var q0={[er]:"SHADOWMAP_TYPE_PCF",[cs]:"SHADOWMAP_TYPE_VSM"};function Y0(s){return q0[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Z0={[cn]:"ENVMAP_TYPE_CUBE",[Rn]:"ENVMAP_TYPE_CUBE",[lr]:"ENVMAP_TYPE_CUBE_UV"};function $0(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Z0[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var J0={[Rn]:"ENVMAP_MODE_REFRACTION"};function K0(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":J0[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var j0={[ql]:"ENVMAP_BLENDING_MULTIPLY",[Oh]:"ENVMAP_BLENDING_MIX",[Bh]:"ENVMAP_BLENDING_ADD"};function Q0(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":j0[s.combine]||"ENVMAP_BLENDING_NONE"}function tg(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function eg(s,t,e,i){let n=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Y0(e),c=$0(e),u=K0(e),d=Q0(e),h=tg(e),m=B0(e),x=z0(r),S=n.createProgram(),p,f,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(_r).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(_r).join(`
`),f.length>0&&(f+=`
`)):(p=[_u(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),f=[_u(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?Gt.tonemapping_pars_fragment:"",e.toneMapping!==di?F0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,U0("linearToOutputTexel",e.outputColorSpace),O0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_r).join(`
`)),a=yc(a),a=mu(a,e),a=gu(a,e),o=yc(o),o=mu(o,e),o=gu(o,e),a=xu(a),o=xu(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let T=v+p+a,y=v+f+o,A=du(n,n.VERTEX_SHADER,T),b=du(n,n.FRAGMENT_SHADER,y);n.attachShader(S,A),n.attachShader(S,b),e.index0AttributeName!==void 0?n.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(S,0,"position"),n.linkProgram(S);function I(C){if(s.debug.checkShaderErrors){let P=n.getProgramInfoLog(S)||"",z=n.getShaderInfoLog(A)||"",G=n.getShaderInfoLog(b)||"",L=P.trim(),B=z.trim(),F=G.trim(),q=!0,Z=!0;if(n.getProgramParameter(S,n.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,S,A,b);else{let tt=pu(n,A,"vertex"),st=pu(n,b,"fragment");At("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(S,n.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+tt+`
`+st)}else L!==""?Ct("WebGLProgram: Program Info Log:",L):(B===""||F==="")&&(Z=!1);Z&&(C.diagnostics={runnable:q,programLog:L,vertexShader:{log:B,prefix:p},fragmentShader:{log:F,prefix:f}})}n.deleteShader(A),n.deleteShader(b),g=new fs(n,S),w=k0(n,S)}let g;this.getUniforms=function(){return g===void 0&&I(this),g};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=n.getProgramParameter(S,I0)),R},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=P0++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=A,this.fragmentShader=b,this}var ig=0,Mc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Sc(t),e.set(t,i)),i}},Sc=class{constructor(t){this.id=ig++,this.code=t,this.usedTimes=0}};function ng(s){return s===dn||s===pr||s===mr}function sg(s,t,e,i,n,r){let a=new Us,o=new Mc,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(g){return l.add(g),g===0?"uv":`uv${g}`}function S(g,w,R,C,P,z){let G=C.fog,L=P.geometry,B=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?C.environment:null,F=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,q=t.get(g.envMap||B,F),Z=q&&q.mapping===lr?q.image.height:null,tt=m[g.type];g.precision!==null&&(h=i.getMaxPrecision(g.precision),h!==g.precision&&Ct("WebGLProgram.getParameters:",g.precision,"not supported, using",h,"instead."));let st=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ct=st!==void 0?st.length:0,Et=0;L.morphAttributes.position!==void 0&&(Et=1),L.morphAttributes.normal!==void 0&&(Et=2),L.morphAttributes.color!==void 0&&(Et=3);let Wt,Dt,K,dt;if(tt){let Ot=Ci[tt];Wt=Ot.vertexShader,Dt=Ot.fragmentShader}else Wt=g.vertexShader,Dt=g.fragmentShader,o.update(g),K=o.getVertexShaderID(g),dt=o.getFragmentShaderID(g);let rt=s.getRenderTarget(),Pt=s.state.buffers.depth.getReversed(),Ft=P.isInstancedMesh===!0,Lt=P.isBatchedMesh===!0,de=!!g.map,qt=!!g.matcap,te=!!q,ce=!!g.aoMap,Xt=!!g.lightMap,Te=!!g.bumpMap,fe=!!g.normalMap,Ye=!!g.displacementMap,N=!!g.emissiveMap,we=!!g.metalnessMap,Yt=!!g.roughnessMap,ae=g.anisotropy>0,ht=g.clearcoat>0,ge=g.dispersion>0,E=g.iridescence>0,_=g.sheen>0,k=g.transmission>0,$=ae&&!!g.anisotropyMap,Q=ht&&!!g.clearcoatMap,et=ht&&!!g.clearcoatNormalMap,lt=ht&&!!g.clearcoatRoughnessMap,X=E&&!!g.iridescenceMap,J=E&&!!g.iridescenceThicknessMap,mt=_&&!!g.sheenColorMap,_t=_&&!!g.sheenRoughnessMap,at=!!g.specularMap,it=!!g.specularColorMap,Ut=!!g.specularIntensityMap,zt=k&&!!g.transmissionMap,Kt=k&&!!g.thicknessMap,D=!!g.gradientMap,nt=!!g.alphaMap,Y=g.alphaTest>0,gt=!!g.alphaHash,ot=!!g.extensions,j=di;g.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(j=s.toneMapping);let St={shaderID:tt,shaderType:g.type,shaderName:g.name,vertexShader:Wt,fragmentShader:Dt,defines:g.defines,customVertexShaderID:K,customFragmentShaderID:dt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:h,batching:Lt,batchingColor:Lt&&P._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&P.instanceColor!==null,instancingMorph:Ft&&P.morphTexture!==null,outputColorSpace:rt===null?s.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Ht.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:de,matcap:qt,envMap:te,envMapMode:te&&q.mapping,envMapCubeUVHeight:Z,aoMap:ce,lightMap:Xt,bumpMap:Te,normalMap:fe,displacementMap:Ye,emissiveMap:N,normalMapObjectSpace:fe&&g.normalMapType===Gh,normalMapTangentSpace:fe&&g.normalMapType===wo,packedNormalMap:fe&&g.normalMapType===wo&&ng(g.normalMap.format),metalnessMap:we,roughnessMap:Yt,anisotropy:ae,anisotropyMap:$,clearcoat:ht,clearcoatMap:Q,clearcoatNormalMap:et,clearcoatRoughnessMap:lt,dispersion:ge,iridescence:E,iridescenceMap:X,iridescenceThicknessMap:J,sheen:_,sheenColorMap:mt,sheenRoughnessMap:_t,specularMap:at,specularColorMap:it,specularIntensityMap:Ut,transmission:k,transmissionMap:zt,thicknessMap:Kt,gradientMap:D,opaque:g.transparent===!1&&g.blending===bn&&g.alphaToCoverage===!1,alphaMap:nt,alphaTest:Y,alphaHash:gt,combine:g.combine,mapUv:de&&x(g.map.channel),aoMapUv:ce&&x(g.aoMap.channel),lightMapUv:Xt&&x(g.lightMap.channel),bumpMapUv:Te&&x(g.bumpMap.channel),normalMapUv:fe&&x(g.normalMap.channel),displacementMapUv:Ye&&x(g.displacementMap.channel),emissiveMapUv:N&&x(g.emissiveMap.channel),metalnessMapUv:we&&x(g.metalnessMap.channel),roughnessMapUv:Yt&&x(g.roughnessMap.channel),anisotropyMapUv:$&&x(g.anisotropyMap.channel),clearcoatMapUv:Q&&x(g.clearcoatMap.channel),clearcoatNormalMapUv:et&&x(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&x(g.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&x(g.iridescenceMap.channel),iridescenceThicknessMapUv:J&&x(g.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&x(g.sheenColorMap.channel),sheenRoughnessMapUv:_t&&x(g.sheenRoughnessMap.channel),specularMapUv:at&&x(g.specularMap.channel),specularColorMapUv:it&&x(g.specularColorMap.channel),specularIntensityMapUv:Ut&&x(g.specularIntensityMap.channel),transmissionMapUv:zt&&x(g.transmissionMap.channel),thicknessMapUv:Kt&&x(g.thicknessMap.channel),alphaMapUv:nt&&x(g.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(fe||ae),vertexNormals:!!L.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!L.attributes.uv&&(de||nt),fog:!!G,useFog:g.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||L.attributes.normal===void 0&&fe===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Pt,skinning:P.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:Et,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:j,decodeVideoTexture:de&&g.map.isVideoTexture===!0&&Ht.getTransfer(g.map.colorSpace)===jt,decodeVideoTextureEmissive:N&&g.emissiveMap.isVideoTexture===!0&&Ht.getTransfer(g.emissiveMap.colorSpace)===jt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===ii,flipSided:g.side===Oe,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ot&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&g.extensions.multiDraw===!0||Lt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return St.vertexUv1s=l.has(1),St.vertexUv2s=l.has(2),St.vertexUv3s=l.has(3),l.clear(),St}function p(g){let w=[];if(g.shaderID?w.push(g.shaderID):(w.push(g.customVertexShaderID),w.push(g.customFragmentShaderID)),g.defines!==void 0)for(let R in g.defines)w.push(R),w.push(g.defines[R]);return g.isRawShaderMaterial===!1&&(f(w,g),v(w,g),w.push(s.outputColorSpace)),w.push(g.customProgramCacheKey),w.join()}function f(g,w){g.push(w.precision),g.push(w.outputColorSpace),g.push(w.envMapMode),g.push(w.envMapCubeUVHeight),g.push(w.mapUv),g.push(w.alphaMapUv),g.push(w.lightMapUv),g.push(w.aoMapUv),g.push(w.bumpMapUv),g.push(w.normalMapUv),g.push(w.displacementMapUv),g.push(w.emissiveMapUv),g.push(w.metalnessMapUv),g.push(w.roughnessMapUv),g.push(w.anisotropyMapUv),g.push(w.clearcoatMapUv),g.push(w.clearcoatNormalMapUv),g.push(w.clearcoatRoughnessMapUv),g.push(w.iridescenceMapUv),g.push(w.iridescenceThicknessMapUv),g.push(w.sheenColorMapUv),g.push(w.sheenRoughnessMapUv),g.push(w.specularMapUv),g.push(w.specularColorMapUv),g.push(w.specularIntensityMapUv),g.push(w.transmissionMapUv),g.push(w.thicknessMapUv),g.push(w.combine),g.push(w.fogExp2),g.push(w.sizeAttenuation),g.push(w.morphTargetsCount),g.push(w.morphAttributeCount),g.push(w.numDirLights),g.push(w.numPointLights),g.push(w.numSpotLights),g.push(w.numSpotLightMaps),g.push(w.numHemiLights),g.push(w.numRectAreaLights),g.push(w.numDirLightShadows),g.push(w.numPointLightShadows),g.push(w.numSpotLightShadows),g.push(w.numSpotLightShadowsWithMaps),g.push(w.numLightProbes),g.push(w.shadowMapType),g.push(w.toneMapping),g.push(w.numClippingPlanes),g.push(w.numClipIntersection),g.push(w.depthPacking)}function v(g,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),g.push(a.mask)}function T(g){let w=m[g.type],R;if(w){let C=Ci[w];R=Wi.clone(C.uniforms)}else R=g.uniforms;return R}function y(g,w){let R=u.get(w);return R!==void 0?++R.usedTimes:(R=new eg(s,w,g,n),c.push(R),u.set(w,R)),R}function A(g){if(--g.usedTimes===0){let w=c.indexOf(g);c[w]=c[c.length-1],c.pop(),u.delete(g.cacheKey),g.destroy()}}function b(g){o.remove(g)}function I(){o.dispose()}return{getParameters:S,getProgramCacheKey:p,getUniforms:T,acquireProgram:y,releaseProgram:A,releaseShaderCache:b,programs:c,dispose:I}}function rg(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function ag(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function vu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function yu(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function o(h,m,x,S,p,f){let v=s[t];return v===void 0?(v={id:h.id,object:h,geometry:m,material:x,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:p,group:f},s[t]=v):(v.id=h.id,v.object=h,v.geometry=m,v.material=x,v.materialVariant=a(h),v.groupOrder=S,v.renderOrder=h.renderOrder,v.z=p,v.group=f),t++,v}function l(h,m,x,S,p,f){let v=o(h,m,x,S,p,f);x.transmission>0?i.push(v):x.transparent===!0?n.push(v):e.push(v)}function c(h,m,x,S,p,f){let v=o(h,m,x,S,p,f);x.transmission>0?i.unshift(v):x.transparent===!0?n.unshift(v):e.unshift(v)}function u(h,m){e.length>1&&e.sort(h||ag),i.length>1&&i.sort(m||vu),n.length>1&&n.sort(m||vu)}function d(){for(let h=t,m=s.length;h<m;h++){let x=s[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:d,sort:u}}function og(){let s=new WeakMap;function t(i,n){let r=s.get(i),a;return r===void 0?(a=new yu,s.set(i,[a])):n>=r.length?(a=new yu,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function lg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Rt};break;case"SpotLight":e={position:new U,direction:new U,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new U,halfWidth:new U,halfHeight:new U};break}return s[t.id]=e,e}}}function cg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var hg=0;function ug(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function dg(s){let t=new lg,e=cg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);let n=new U,r=new Qt,a=new Qt;function o(c){let u=0,d=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let m=0,x=0,S=0,p=0,f=0,v=0,T=0,y=0,A=0,b=0,I=0;c.sort(ug);for(let w=0,R=c.length;w<R;w++){let C=c[w],P=C.color,z=C.intensity,G=C.distance,L=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===dn?L=C.shadow.map.texture:L=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=P.r*z,d+=P.g*z,h+=P.b*z;else if(C.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(C.sh.coefficients[B],z);I++}else if(C.isDirectionalLight){let B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let F=C.shadow,q=e.get(C);q.shadowIntensity=F.intensity,q.shadowBias=F.bias,q.shadowNormalBias=F.normalBias,q.shadowRadius=F.radius,q.shadowMapSize=F.mapSize,i.directionalShadow[m]=q,i.directionalShadowMap[m]=L,i.directionalShadowMatrix[m]=C.shadow.matrix,v++}i.directional[m]=B,m++}else if(C.isSpotLight){let B=t.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(P).multiplyScalar(z),B.distance=G,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,i.spot[S]=B;let F=C.shadow;if(C.map&&(i.spotLightMap[A]=C.map,A++,F.updateMatrices(C),C.castShadow&&b++),i.spotLightMatrix[S]=F.matrix,C.castShadow){let q=e.get(C);q.shadowIntensity=F.intensity,q.shadowBias=F.bias,q.shadowNormalBias=F.normalBias,q.shadowRadius=F.radius,q.shadowMapSize=F.mapSize,i.spotShadow[S]=q,i.spotShadowMap[S]=L,y++}S++}else if(C.isRectAreaLight){let B=t.get(C);B.color.copy(P).multiplyScalar(z),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),i.rectArea[p]=B,p++}else if(C.isPointLight){let B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){let F=C.shadow,q=e.get(C);q.shadowIntensity=F.intensity,q.shadowBias=F.bias,q.shadowNormalBias=F.normalBias,q.shadowRadius=F.radius,q.shadowMapSize=F.mapSize,q.shadowCameraNear=F.camera.near,q.shadowCameraFar=F.camera.far,i.pointShadow[x]=q,i.pointShadowMap[x]=L,i.pointShadowMatrix[x]=C.shadow.matrix,T++}i.point[x]=B,x++}else if(C.isHemisphereLight){let B=t.get(C);B.skyColor.copy(C.color).multiplyScalar(z),B.groundColor.copy(C.groundColor).multiplyScalar(z),i.hemi[f]=B,f++}}p>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let g=i.hash;(g.directionalLength!==m||g.pointLength!==x||g.spotLength!==S||g.rectAreaLength!==p||g.hemiLength!==f||g.numDirectionalShadows!==v||g.numPointShadows!==T||g.numSpotShadows!==y||g.numSpotMaps!==A||g.numLightProbes!==I)&&(i.directional.length=m,i.spot.length=S,i.rectArea.length=p,i.point.length=x,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=y+A-b,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=I,g.directionalLength=m,g.pointLength=x,g.spotLength=S,g.rectAreaLength=p,g.hemiLength=f,g.numDirectionalShadows=v,g.numPointShadows=T,g.numSpotShadows=y,g.numSpotMaps=A,g.numLightProbes=I,i.version=hg++)}function l(c,u){let d=0,h=0,m=0,x=0,S=0,p=u.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){let T=c[f];if(T.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(T.matrixWorld),n.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(p),d++}else if(T.isSpotLight){let y=i.spot[m];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(T.matrixWorld),n.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(p),m++}else if(T.isRectAreaLight){let y=i.rectArea[x];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(p),a.identity(),r.copy(T.matrixWorld),r.premultiply(p),a.extractRotation(r),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),x++}else if(T.isPointLight){let y=i.point[h];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(p),h++}else if(T.isHemisphereLight){let y=i.hemi[S];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(p),S++}}}return{setup:o,setupView:l,state:i}}function Mu(s){let t=new dg(s),e=[],i=[],n=[];function r(h){d.camera=h,e.length=0,i.length=0,n.length=0}function a(h){e.push(h)}function o(h){i.push(h)}function l(h){n.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function fg(s){let t=new WeakMap;function e(n,r=0){let a=t.get(n),o;return a===void 0?(o=new Mu(s),t.set(n,[o])):r>=a.length?(o=new Mu(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var pg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mg=`uniform sampler2D shadow_pass;
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
}`,gg=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],xg=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Su=new Qt,xr=new U,mc=new U;function _g(s,t,e){let i=new as,n=new bt,r=new bt,a=new pe,o=new Ma,l=new Sa,c={},u=e.maxTextureSize,d={[zi]:Oe,[Oe]:zi,[ii]:ii},h=new me({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:pg,fragmentShader:mg}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let x=new le;x.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new yt(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=er;let f=this.type;this.render=function(b,I,g){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===Oa&&(Ct("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=er);let w=s.getRenderTarget(),R=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),P=s.state;P.setBlending(ni),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let z=f!==this.type;z&&I.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(L=>L.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,L=b.length;G<L;G++){let B=b[G],F=B.shadow;if(F===void 0){Ct("WebGLShadowMap:",B,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;n.copy(F.mapSize);let q=F.getFrameExtents();n.multiply(q),r.copy(F.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(r.x=Math.floor(u/q.x),n.x=r.x*q.x,F.mapSize.x=r.x),n.y>u&&(r.y=Math.floor(u/q.y),n.y=r.y*q.y,F.mapSize.y=r.y));let Z=s.state.buffers.depth.getReversed();if(F.camera._reversedDepth=Z,F.map===null||z===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===cs){if(B.isPointLight){Ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Ae(n.x,n.y,{format:dn,type:Ge,minFilter:Ne,magFilter:Ne,generateMipmaps:!1}),F.map.texture.name=B.name+".shadowMap",F.map.depthTexture=new Vi(n.x,n.y,si),F.map.depthTexture.name=B.name+".shadowMapDepth",F.map.depthTexture.format=yi,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Le,F.map.depthTexture.magFilter=Le}else B.isPointLight?(F.map=new Po(n.x),F.map.depthTexture=new va(n.x,fi)):(F.map=new Ae(n.x,n.y),F.map.depthTexture=new Vi(n.x,n.y,fi)),F.map.depthTexture.name=B.name+".shadowMap",F.map.depthTexture.format=yi,this.type===er?(F.map.depthTexture.compareFunction=Z?Ao:Eo,F.map.depthTexture.minFilter=Ne,F.map.depthTexture.magFilter=Ne):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Le,F.map.depthTexture.magFilter=Le);F.camera.updateProjectionMatrix()}let tt=F.map.isWebGLCubeRenderTarget?6:1;for(let st=0;st<tt;st++){if(F.map.isWebGLCubeRenderTarget)s.setRenderTarget(F.map,st),s.clear();else{st===0&&(s.setRenderTarget(F.map),s.clear());let ct=F.getViewport(st);a.set(r.x*ct.x,r.y*ct.y,r.x*ct.z,r.y*ct.w),P.viewport(a)}if(B.isPointLight){let ct=F.camera,Et=F.matrix,Wt=B.distance||ct.far;Wt!==ct.far&&(ct.far=Wt,ct.updateProjectionMatrix()),xr.setFromMatrixPosition(B.matrixWorld),ct.position.copy(xr),mc.copy(ct.position),mc.add(gg[st]),ct.up.copy(xg[st]),ct.lookAt(mc),ct.updateMatrixWorld(),Et.makeTranslation(-xr.x,-xr.y,-xr.z),Su.multiplyMatrices(ct.projectionMatrix,ct.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Su,ct.coordinateSystem,ct.reversedDepth)}else F.updateMatrices(B);i=F.getFrustum(),y(I,g,F.camera,B,this.type)}F.isPointLightShadow!==!0&&this.type===cs&&v(F,g),F.needsUpdate=!1}f=this.type,p.needsUpdate=!1,s.setRenderTarget(w,R,C)};function v(b,I){let g=t.update(S);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ae(n.x,n.y,{format:dn,type:Ge})),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(I,null,g,h,S,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(I,null,g,m,S,null)}function T(b,I,g,w){let R=null,C=g.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)R=C;else if(R=g.isPointLight===!0?l:o,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let P=R.uuid,z=I.uuid,G=c[P];G===void 0&&(G={},c[P]=G);let L=G[z];L===void 0&&(L=R.clone(),G[z]=L,I.addEventListener("dispose",A)),R=L}if(R.visible=I.visible,R.wireframe=I.wireframe,w===cs?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:d[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,g.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let P=s.properties.get(R);P.light=g}return R}function y(b,I,g,w,R){if(b.visible===!1)return;if(b.layers.test(I.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===cs)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,b.matrixWorld);let z=t.update(b),G=b.material;if(Array.isArray(G)){let L=z.groups;for(let B=0,F=L.length;B<F;B++){let q=L[B],Z=G[q.materialIndex];if(Z&&Z.visible){let tt=T(b,Z,w,R);b.onBeforeShadow(s,b,I,g,z,tt,q),s.renderBufferDirect(g,null,z,tt,b,q),b.onAfterShadow(s,b,I,g,z,tt,q)}}}else if(G.visible){let L=T(b,G,w,R);b.onBeforeShadow(s,b,I,g,z,L,null),s.renderBufferDirect(g,null,z,L,b,null),b.onAfterShadow(s,b,I,g,z,L,null)}}let P=b.children;for(let z=0,G=P.length;z<G;z++)y(P[z],I,g,w,R)}function A(b){b.target.removeEventListener("dispose",A);for(let g in c){let w=c[g],R=b.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function vg(s,t){function e(){let D=!1,nt=new pe,Y=null,gt=new pe(0,0,0,0);return{setMask:function(ot){Y!==ot&&!D&&(s.colorMask(ot,ot,ot,ot),Y=ot)},setLocked:function(ot){D=ot},setClear:function(ot,j,St,Ot,_e){_e===!0&&(ot*=Ot,j*=Ot,St*=Ot),nt.set(ot,j,St,Ot),gt.equals(nt)===!1&&(s.clearColor(ot,j,St,Ot),gt.copy(nt))},reset:function(){D=!1,Y=null,gt.set(-1,0,0,0)}}}function i(){let D=!1,nt=!1,Y=null,gt=null,ot=null;return{setReversed:function(j){if(nt!==j){let St=t.get("EXT_clip_control");j?St.clipControlEXT(St.LOWER_LEFT_EXT,St.ZERO_TO_ONE_EXT):St.clipControlEXT(St.LOWER_LEFT_EXT,St.NEGATIVE_ONE_TO_ONE_EXT),nt=j;let Ot=ot;ot=null,this.setClear(Ot)}},getReversed:function(){return nt},setTest:function(j){j?rt(s.DEPTH_TEST):Pt(s.DEPTH_TEST)},setMask:function(j){Y!==j&&!D&&(s.depthMask(j),Y=j)},setFunc:function(j){if(nt&&(j=Kh[j]),gt!==j){switch(j){case ia:s.depthFunc(s.NEVER);break;case na:s.depthFunc(s.ALWAYS);break;case sa:s.depthFunc(s.LESS);break;case Tn:s.depthFunc(s.LEQUAL);break;case ra:s.depthFunc(s.EQUAL);break;case aa:s.depthFunc(s.GEQUAL);break;case oa:s.depthFunc(s.GREATER);break;case la:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}gt=j}},setLocked:function(j){D=j},setClear:function(j){ot!==j&&(ot=j,nt&&(j=1-j),s.clearDepth(j))},reset:function(){D=!1,Y=null,gt=null,ot=null,nt=!1}}}function n(){let D=!1,nt=null,Y=null,gt=null,ot=null,j=null,St=null,Ot=null,_e=null;return{setTest:function(ee){D||(ee?rt(s.STENCIL_TEST):Pt(s.STENCIL_TEST))},setMask:function(ee){nt!==ee&&!D&&(s.stencilMask(ee),nt=ee)},setFunc:function(ee,Pi,pi){(Y!==ee||gt!==Pi||ot!==pi)&&(s.stencilFunc(ee,Pi,pi),Y=ee,gt=Pi,ot=pi)},setOp:function(ee,Pi,pi){(j!==ee||St!==Pi||Ot!==pi)&&(s.stencilOp(ee,Pi,pi),j=ee,St=Pi,Ot=pi)},setLocked:function(ee){D=ee},setClear:function(ee){_e!==ee&&(s.clearStencil(ee),_e=ee)},reset:function(){D=!1,nt=null,Y=null,gt=null,ot=null,j=null,St=null,Ot=null,_e=null}}}let r=new e,a=new i,o=new n,l=new WeakMap,c=new WeakMap,u={},d={},h={},m=new WeakMap,x=[],S=null,p=!1,f=null,v=null,T=null,y=null,A=null,b=null,I=null,g=new Rt(0,0,0),w=0,R=!1,C=null,P=null,z=null,G=null,L=null,B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,q=0,Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Z)[1]),F=q>=1):Z.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),F=q>=2);let tt=null,st={},ct=s.getParameter(s.SCISSOR_BOX),Et=s.getParameter(s.VIEWPORT),Wt=new pe().fromArray(ct),Dt=new pe().fromArray(Et);function K(D,nt,Y,gt){let ot=new Uint8Array(4),j=s.createTexture();s.bindTexture(D,j),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let St=0;St<Y;St++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(nt,0,s.RGBA,1,1,gt,0,s.RGBA,s.UNSIGNED_BYTE,ot):s.texImage2D(nt+St,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ot);return j}let dt={};dt[s.TEXTURE_2D]=K(s.TEXTURE_2D,s.TEXTURE_2D,1),dt[s.TEXTURE_CUBE_MAP]=K(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[s.TEXTURE_2D_ARRAY]=K(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),dt[s.TEXTURE_3D]=K(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(s.DEPTH_TEST),a.setFunc(Tn),Te(!1),fe(Hl),rt(s.CULL_FACE),ce(ni);function rt(D){u[D]!==!0&&(s.enable(D),u[D]=!0)}function Pt(D){u[D]!==!1&&(s.disable(D),u[D]=!1)}function Ft(D,nt){return h[D]!==nt?(s.bindFramebuffer(D,nt),h[D]=nt,D===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=nt),D===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=nt),!0):!1}function Lt(D,nt){let Y=x,gt=!1;if(D){Y=m.get(nt),Y===void 0&&(Y=[],m.set(nt,Y));let ot=D.textures;if(Y.length!==ot.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let j=0,St=ot.length;j<St;j++)Y[j]=s.COLOR_ATTACHMENT0+j;Y.length=ot.length,gt=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,gt=!0);gt&&s.drawBuffers(Y)}function de(D){return S!==D?(s.useProgram(D),S=D,!0):!1}let qt={[nn]:s.FUNC_ADD,[yh]:s.FUNC_SUBTRACT,[Mh]:s.FUNC_REVERSE_SUBTRACT};qt[Sh]=s.MIN,qt[bh]=s.MAX;let te={[Th]:s.ZERO,[wh]:s.ONE,[Eh]:s.SRC_COLOR,[ta]:s.SRC_ALPHA,[Lh]:s.SRC_ALPHA_SATURATE,[Ih]:s.DST_COLOR,[Ch]:s.DST_ALPHA,[Ah]:s.ONE_MINUS_SRC_COLOR,[ea]:s.ONE_MINUS_SRC_ALPHA,[Ph]:s.ONE_MINUS_DST_COLOR,[Rh]:s.ONE_MINUS_DST_ALPHA,[Dh]:s.CONSTANT_COLOR,[Uh]:s.ONE_MINUS_CONSTANT_COLOR,[Nh]:s.CONSTANT_ALPHA,[Fh]:s.ONE_MINUS_CONSTANT_ALPHA};function ce(D,nt,Y,gt,ot,j,St,Ot,_e,ee){if(D===ni){p===!0&&(Pt(s.BLEND),p=!1);return}if(p===!1&&(rt(s.BLEND),p=!0),D!==vh){if(D!==f||ee!==R){if((v!==nn||A!==nn)&&(s.blendEquation(s.FUNC_ADD),v=nn,A=nn),ee)switch(D){case bn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case An:s.blendFunc(s.ONE,s.ONE);break;case Wl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:At("WebGLState: Invalid blending: ",D);break}else switch(D){case bn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case An:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Wl:At("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xl:At("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:At("WebGLState: Invalid blending: ",D);break}T=null,y=null,b=null,I=null,g.set(0,0,0),w=0,f=D,R=ee}return}ot=ot||nt,j=j||Y,St=St||gt,(nt!==v||ot!==A)&&(s.blendEquationSeparate(qt[nt],qt[ot]),v=nt,A=ot),(Y!==T||gt!==y||j!==b||St!==I)&&(s.blendFuncSeparate(te[Y],te[gt],te[j],te[St]),T=Y,y=gt,b=j,I=St),(Ot.equals(g)===!1||_e!==w)&&(s.blendColor(Ot.r,Ot.g,Ot.b,_e),g.copy(Ot),w=_e),f=D,R=!1}function Xt(D,nt){D.side===ii?Pt(s.CULL_FACE):rt(s.CULL_FACE);let Y=D.side===Oe;nt&&(Y=!Y),Te(Y),D.blending===bn&&D.transparent===!1?ce(ni):ce(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let gt=D.stencilWrite;o.setTest(gt),gt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),N(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?rt(s.SAMPLE_ALPHA_TO_COVERAGE):Pt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Te(D){C!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),C=D)}function fe(D){D!==xh?(rt(s.CULL_FACE),D!==P&&(D===Hl?s.cullFace(s.BACK):D===_h?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pt(s.CULL_FACE),P=D}function Ye(D){D!==z&&(F&&s.lineWidth(D),z=D)}function N(D,nt,Y){D?(rt(s.POLYGON_OFFSET_FILL),(G!==nt||L!==Y)&&(G=nt,L=Y,a.getReversed()&&(nt=-nt),s.polygonOffset(nt,Y))):Pt(s.POLYGON_OFFSET_FILL)}function we(D){D?rt(s.SCISSOR_TEST):Pt(s.SCISSOR_TEST)}function Yt(D){D===void 0&&(D=s.TEXTURE0+B-1),tt!==D&&(s.activeTexture(D),tt=D)}function ae(D,nt,Y){Y===void 0&&(tt===null?Y=s.TEXTURE0+B-1:Y=tt);let gt=st[Y];gt===void 0&&(gt={type:void 0,texture:void 0},st[Y]=gt),(gt.type!==D||gt.texture!==nt)&&(tt!==Y&&(s.activeTexture(Y),tt=Y),s.bindTexture(D,nt||dt[D]),gt.type=D,gt.texture=nt)}function ht(){let D=st[tt];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ge(){try{s.compressedTexImage2D(...arguments)}catch(D){At("WebGLState:",D)}}function E(){try{s.compressedTexImage3D(...arguments)}catch(D){At("WebGLState:",D)}}function _(){try{s.texSubImage2D(...arguments)}catch(D){At("WebGLState:",D)}}function k(){try{s.texSubImage3D(...arguments)}catch(D){At("WebGLState:",D)}}function $(){try{s.compressedTexSubImage2D(...arguments)}catch(D){At("WebGLState:",D)}}function Q(){try{s.compressedTexSubImage3D(...arguments)}catch(D){At("WebGLState:",D)}}function et(){try{s.texStorage2D(...arguments)}catch(D){At("WebGLState:",D)}}function lt(){try{s.texStorage3D(...arguments)}catch(D){At("WebGLState:",D)}}function X(){try{s.texImage2D(...arguments)}catch(D){At("WebGLState:",D)}}function J(){try{s.texImage3D(...arguments)}catch(D){At("WebGLState:",D)}}function mt(D){return d[D]!==void 0?d[D]:s.getParameter(D)}function _t(D,nt){d[D]!==nt&&(s.pixelStorei(D,nt),d[D]=nt)}function at(D){Wt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Wt.copy(D))}function it(D){Dt.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Dt.copy(D))}function Ut(D,nt){let Y=c.get(nt);Y===void 0&&(Y=new WeakMap,c.set(nt,Y));let gt=Y.get(D);gt===void 0&&(gt=s.getUniformBlockIndex(nt,D.name),Y.set(D,gt))}function zt(D,nt){let gt=c.get(nt).get(D);l.get(nt)!==gt&&(s.uniformBlockBinding(nt,gt,D.__bindingPointIndex),l.set(nt,gt))}function Kt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},d={},tt=null,st={},h={},m=new WeakMap,x=[],S=null,p=!1,f=null,v=null,T=null,y=null,A=null,b=null,I=null,g=new Rt(0,0,0),w=0,R=!1,C=null,P=null,z=null,G=null,L=null,Wt.set(0,0,s.canvas.width,s.canvas.height),Dt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:Pt,bindFramebuffer:Ft,drawBuffers:Lt,useProgram:de,setBlending:ce,setMaterial:Xt,setFlipSided:Te,setCullFace:fe,setLineWidth:Ye,setPolygonOffset:N,setScissorTest:we,activeTexture:Yt,bindTexture:ae,unbindTexture:ht,compressedTexImage2D:ge,compressedTexImage3D:E,texImage2D:X,texImage3D:J,pixelStorei:_t,getParameter:mt,updateUBOMapping:Ut,uniformBlockBinding:zt,texStorage2D:et,texStorage3D:lt,texSubImage2D:_,texSubImage3D:k,compressedTexSubImage2D:$,compressedTexSubImage3D:Q,scissor:at,viewport:it,reset:Kt}}function yg(s,t,e,i,n,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new bt,u=new WeakMap,d=new Set,h,m=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(E,_){return x?new OffscreenCanvas(E,_):Ps("canvas")}function p(E,_,k){let $=1,Q=ge(E);if((Q.width>k||Q.height>k)&&($=k/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let et=Math.floor($*Q.width),lt=Math.floor($*Q.height);h===void 0&&(h=S(et,lt));let X=_?S(et,lt):h;return X.width=et,X.height=lt,X.getContext("2d").drawImage(E,0,0,et,lt),Ct("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+et+"x"+lt+")."),X}else return"data"in E&&Ct("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function f(E){return E.generateMipmaps}function v(E){s.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(E,_,k,$,Q,et=!1){if(E!==null){if(s[E]!==void 0)return s[E];Ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let lt;$&&(lt=t.get("EXT_texture_norm16"),lt||Ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=_;if(_===s.RED&&(k===s.FLOAT&&(X=s.R32F),k===s.HALF_FLOAT&&(X=s.R16F),k===s.UNSIGNED_BYTE&&(X=s.R8),k===s.UNSIGNED_SHORT&&lt&&(X=lt.R16_EXT),k===s.SHORT&&lt&&(X=lt.R16_SNORM_EXT)),_===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(X=s.R8UI),k===s.UNSIGNED_SHORT&&(X=s.R16UI),k===s.UNSIGNED_INT&&(X=s.R32UI),k===s.BYTE&&(X=s.R8I),k===s.SHORT&&(X=s.R16I),k===s.INT&&(X=s.R32I)),_===s.RG&&(k===s.FLOAT&&(X=s.RG32F),k===s.HALF_FLOAT&&(X=s.RG16F),k===s.UNSIGNED_BYTE&&(X=s.RG8),k===s.UNSIGNED_SHORT&&lt&&(X=lt.RG16_EXT),k===s.SHORT&&lt&&(X=lt.RG16_SNORM_EXT)),_===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(X=s.RG8UI),k===s.UNSIGNED_SHORT&&(X=s.RG16UI),k===s.UNSIGNED_INT&&(X=s.RG32UI),k===s.BYTE&&(X=s.RG8I),k===s.SHORT&&(X=s.RG16I),k===s.INT&&(X=s.RG32I)),_===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(X=s.RGB8UI),k===s.UNSIGNED_SHORT&&(X=s.RGB16UI),k===s.UNSIGNED_INT&&(X=s.RGB32UI),k===s.BYTE&&(X=s.RGB8I),k===s.SHORT&&(X=s.RGB16I),k===s.INT&&(X=s.RGB32I)),_===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),k===s.UNSIGNED_INT&&(X=s.RGBA32UI),k===s.BYTE&&(X=s.RGBA8I),k===s.SHORT&&(X=s.RGBA16I),k===s.INT&&(X=s.RGBA32I)),_===s.RGB&&(k===s.UNSIGNED_SHORT&&lt&&(X=lt.RGB16_EXT),k===s.SHORT&&lt&&(X=lt.RGB16_SNORM_EXT),k===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(X=s.R11F_G11F_B10F)),_===s.RGBA){let J=et?Is:Ht.getTransfer(Q);k===s.FLOAT&&(X=s.RGBA32F),k===s.HALF_FLOAT&&(X=s.RGBA16F),k===s.UNSIGNED_BYTE&&(X=J===jt?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT&&lt&&(X=lt.RGBA16_EXT),k===s.SHORT&&lt&&(X=lt.RGBA16_SNORM_EXT),k===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function A(E,_){let k;return E?_===null||_===fi||_===us?k=s.DEPTH24_STENCIL8:_===si?k=s.DEPTH32F_STENCIL8:_===hs&&(k=s.DEPTH24_STENCIL8,Ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===fi||_===us?k=s.DEPTH_COMPONENT24:_===si?k=s.DEPTH_COMPONENT32F:_===hs&&(k=s.DEPTH_COMPONENT16),k}function b(E,_){return f(E)===!0||E.isFramebufferTexture&&E.minFilter!==Le&&E.minFilter!==Ne?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function I(E){let _=E.target;_.removeEventListener("dispose",I),w(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&d.delete(_)}function g(E){let _=E.target;_.removeEventListener("dispose",g),C(_)}function w(E){let _=i.get(E);if(_.__webglInit===void 0)return;let k=E.source,$=m.get(k);if($){let Q=$[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&R(E),Object.keys($).length===0&&m.delete(k)}i.remove(E)}function R(E){let _=i.get(E);s.deleteTexture(_.__webglTexture);let k=E.source,$=m.get(k);delete $[_.__cacheKey],a.memory.textures--}function C(E){let _=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let Q=0;Q<_.__webglFramebuffer[$].length;Q++)s.deleteFramebuffer(_.__webglFramebuffer[$][Q]);else s.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)s.deleteFramebuffer(_.__webglFramebuffer[$]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let k=E.textures;for(let $=0,Q=k.length;$<Q;$++){let et=i.get(k[$]);et.__webglTexture&&(s.deleteTexture(et.__webglTexture),a.memory.textures--),i.remove(k[$])}i.remove(E)}let P=0;function z(){P=0}function G(){return P}function L(E){P=E}function B(){let E=P;return E>=n.maxTextures&&Ct("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+n.maxTextures),P+=1,E}function F(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function q(E,_){let k=i.get(E);if(E.isVideoTexture&&ae(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&k.__version!==E.version){let $=E.image;if($===null)Ct("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Ct("WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(k,E,_);return}}else E.isExternalTexture&&(k.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+_)}function Z(E,_){let k=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){Pt(k,E,_);return}else E.isExternalTexture&&(k.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+_)}function tt(E,_){let k=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){Pt(k,E,_);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+_)}function st(E,_){let k=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&k.__version!==E.version){Ft(k,E,_);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+_)}let ct={[wn]:s.REPEAT,[vi]:s.CLAMP_TO_EDGE,[ca]:s.MIRRORED_REPEAT},Et={[Le]:s.NEAREST,[zh]:s.NEAREST_MIPMAP_NEAREST,[cr]:s.NEAREST_MIPMAP_LINEAR,[Ne]:s.LINEAR,[ka]:s.LINEAR_MIPMAP_NEAREST,[hn]:s.LINEAR_MIPMAP_LINEAR},Wt={[Vh]:s.NEVER,[Yh]:s.ALWAYS,[Hh]:s.LESS,[Eo]:s.LEQUAL,[Wh]:s.EQUAL,[Ao]:s.GEQUAL,[Xh]:s.GREATER,[qh]:s.NOTEQUAL};function Dt(E,_){if(_.type===si&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ne||_.magFilter===ka||_.magFilter===cr||_.magFilter===hn||_.minFilter===Ne||_.minFilter===ka||_.minFilter===cr||_.minFilter===hn)&&Ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,ct[_.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,ct[_.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,ct[_.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,Et[_.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,Et[_.minFilter]),_.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,Wt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Le||_.minFilter!==cr&&_.minFilter!==hn||_.type===si&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(E,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,n.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function K(E,_){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",I));let $=_.source,Q=m.get($);Q===void 0&&(Q={},m.set($,Q));let et=F(_);if(et!==E.__cacheKey){Q[et]===void 0&&(Q[et]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Q[et].usedTimes++;let lt=Q[E.__cacheKey];lt!==void 0&&(Q[E.__cacheKey].usedTimes--,lt.usedTimes===0&&R(_)),E.__cacheKey=et,E.__webglTexture=Q[et].texture}return k}function dt(E,_,k){return Math.floor(Math.floor(E/k)/_)}function rt(E,_,k,$){let et=E.updateRanges;if(et.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,_.width,_.height,k,$,_.data);else{et.sort((_t,at)=>_t.start-at.start);let lt=0;for(let _t=1;_t<et.length;_t++){let at=et[lt],it=et[_t],Ut=at.start+at.count,zt=dt(it.start,_.width,4),Kt=dt(at.start,_.width,4);it.start<=Ut+1&&zt===Kt&&dt(it.start+it.count-1,_.width,4)===zt?at.count=Math.max(at.count,it.start+it.count-at.start):(++lt,et[lt]=it)}et.length=lt+1;let X=e.getParameter(s.UNPACK_ROW_LENGTH),J=e.getParameter(s.UNPACK_SKIP_PIXELS),mt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,_.width);for(let _t=0,at=et.length;_t<at;_t++){let it=et[_t],Ut=Math.floor(it.start/4),zt=Math.ceil(it.count/4),Kt=Ut%_.width,D=Math.floor(Ut/_.width),nt=zt,Y=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Kt),e.pixelStorei(s.UNPACK_SKIP_ROWS,D),e.texSubImage2D(s.TEXTURE_2D,0,Kt,D,nt,Y,k,$,_.data)}E.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,X),e.pixelStorei(s.UNPACK_SKIP_PIXELS,J),e.pixelStorei(s.UNPACK_SKIP_ROWS,mt)}}function Pt(E,_,k){let $=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=s.TEXTURE_3D);let Q=K(E,_),et=_.source;e.bindTexture($,E.__webglTexture,s.TEXTURE0+k);let lt=i.get(et);if(et.version!==lt.__version||Q===!0){if(e.activeTexture(s.TEXTURE0+k),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let Y=Ht.getPrimaries(Ht.workingColorSpace),gt=_.colorSpace===Hi?null:Ht.getPrimaries(_.colorSpace),ot=_.colorSpace===Hi||Y===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot)}e.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment);let J=p(_.image,!1,n.maxTextureSize);J=ht(_,J);let mt=r.convert(_.format,_.colorSpace),_t=r.convert(_.type),at=y(_.internalFormat,mt,_t,_.normalized,_.colorSpace,_.isVideoTexture);Dt($,_);let it,Ut=_.mipmaps,zt=_.isVideoTexture!==!0,Kt=lt.__version===void 0||Q===!0,D=et.dataReady,nt=b(_,J);if(_.isDepthTexture)at=A(_.format===un,_.type),Kt&&(zt?e.texStorage2D(s.TEXTURE_2D,1,at,J.width,J.height):e.texImage2D(s.TEXTURE_2D,0,at,J.width,J.height,0,mt,_t,null));else if(_.isDataTexture)if(Ut.length>0){zt&&Kt&&e.texStorage2D(s.TEXTURE_2D,nt,at,Ut[0].width,Ut[0].height);for(let Y=0,gt=Ut.length;Y<gt;Y++)it=Ut[Y],zt?D&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,it.width,it.height,mt,_t,it.data):e.texImage2D(s.TEXTURE_2D,Y,at,it.width,it.height,0,mt,_t,it.data);_.generateMipmaps=!1}else zt?(Kt&&e.texStorage2D(s.TEXTURE_2D,nt,at,J.width,J.height),D&&rt(_,J,mt,_t)):e.texImage2D(s.TEXTURE_2D,0,at,J.width,J.height,0,mt,_t,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){zt&&Kt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,nt,at,Ut[0].width,Ut[0].height,J.depth);for(let Y=0,gt=Ut.length;Y<gt;Y++)if(it=Ut[Y],_.format!==ri)if(mt!==null)if(zt){if(D)if(_.layerUpdates.size>0){let ot=sc(it.width,it.height,_.format,_.type);for(let j of _.layerUpdates){let St=it.data.subarray(j*ot/it.data.BYTES_PER_ELEMENT,(j+1)*ot/it.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,j,it.width,it.height,1,mt,St)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,it.width,it.height,J.depth,mt,it.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,at,it.width,it.height,J.depth,0,it.data,0,0);else Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,it.width,it.height,J.depth,mt,_t,it.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Y,at,it.width,it.height,J.depth,0,mt,_t,it.data)}else{zt&&Kt&&e.texStorage2D(s.TEXTURE_2D,nt,at,Ut[0].width,Ut[0].height);for(let Y=0,gt=Ut.length;Y<gt;Y++)it=Ut[Y],_.format!==ri?mt!==null?zt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,it.width,it.height,mt,it.data):e.compressedTexImage2D(s.TEXTURE_2D,Y,at,it.width,it.height,0,it.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?D&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,it.width,it.height,mt,_t,it.data):e.texImage2D(s.TEXTURE_2D,Y,at,it.width,it.height,0,mt,_t,it.data)}else if(_.isDataArrayTexture)if(zt){if(Kt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,nt,at,J.width,J.height,J.depth),D)if(_.layerUpdates.size>0){let Y=sc(J.width,J.height,_.format,_.type);for(let gt of _.layerUpdates){let ot=J.data.subarray(gt*Y/J.data.BYTES_PER_ELEMENT,(gt+1)*Y/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,gt,J.width,J.height,1,mt,_t,ot)}_.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,mt,_t,J.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,at,J.width,J.height,J.depth,0,mt,_t,J.data);else if(_.isData3DTexture)zt?(Kt&&e.texStorage3D(s.TEXTURE_3D,nt,at,J.width,J.height,J.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,mt,_t,J.data)):e.texImage3D(s.TEXTURE_3D,0,at,J.width,J.height,J.depth,0,mt,_t,J.data);else if(_.isFramebufferTexture){if(Kt)if(zt)e.texStorage2D(s.TEXTURE_2D,nt,at,J.width,J.height);else{let Y=J.width,gt=J.height;for(let ot=0;ot<nt;ot++)e.texImage2D(s.TEXTURE_2D,ot,at,Y,gt,0,mt,_t,null),Y>>=1,gt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in s){let Y=s.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),J.parentNode!==Y){Y.appendChild(J),d.add(_),Y.onpaint=Ot=>{let _e=Ot.changedElements;for(let ee of d)_e.includes(ee.image)&&(ee.needsUpdate=!0)},Y.requestPaint();return}let gt=0,ot=s.RGBA,j=s.RGBA,St=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,gt,ot,j,St,J),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ut.length>0){if(zt&&Kt){let Y=ge(Ut[0]);e.texStorage2D(s.TEXTURE_2D,nt,at,Y.width,Y.height)}for(let Y=0,gt=Ut.length;Y<gt;Y++)it=Ut[Y],zt?D&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,mt,_t,it):e.texImage2D(s.TEXTURE_2D,Y,at,mt,_t,it);_.generateMipmaps=!1}else if(zt){if(Kt){let Y=ge(J);e.texStorage2D(s.TEXTURE_2D,nt,at,Y.width,Y.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,mt,_t,J)}else e.texImage2D(s.TEXTURE_2D,0,at,mt,_t,J);f(_)&&v($),lt.__version=et.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Ft(E,_,k){if(_.image.length!==6)return;let $=K(E,_),Q=_.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+k);let et=i.get(Q);if(Q.version!==et.__version||$===!0){e.activeTexture(s.TEXTURE0+k);let lt=Ht.getPrimaries(Ht.workingColorSpace),X=_.colorSpace===Hi?null:Ht.getPrimaries(_.colorSpace),J=_.colorSpace===Hi||lt===X?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let mt=_.isCompressedTexture||_.image[0].isCompressedTexture,_t=_.image[0]&&_.image[0].isDataTexture,at=[];for(let j=0;j<6;j++)!mt&&!_t?at[j]=p(_.image[j],!0,n.maxCubemapSize):at[j]=_t?_.image[j].image:_.image[j],at[j]=ht(_,at[j]);let it=at[0],Ut=r.convert(_.format,_.colorSpace),zt=r.convert(_.type),Kt=y(_.internalFormat,Ut,zt,_.normalized,_.colorSpace),D=_.isVideoTexture!==!0,nt=et.__version===void 0||$===!0,Y=Q.dataReady,gt=b(_,it);Dt(s.TEXTURE_CUBE_MAP,_);let ot;if(mt){D&&nt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Kt,it.width,it.height);for(let j=0;j<6;j++){ot=at[j].mipmaps;for(let St=0;St<ot.length;St++){let Ot=ot[St];_.format!==ri?Ut!==null?D?Y&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,St,0,0,Ot.width,Ot.height,Ut,Ot.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,St,Kt,Ot.width,Ot.height,0,Ot.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Y&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,St,0,0,Ot.width,Ot.height,Ut,zt,Ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,St,Kt,Ot.width,Ot.height,0,Ut,zt,Ot.data)}}}else{if(ot=_.mipmaps,D&&nt){ot.length>0&&gt++;let j=ge(at[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Kt,j.width,j.height)}for(let j=0;j<6;j++)if(_t){D?Y&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,at[j].width,at[j].height,Ut,zt,at[j].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Kt,at[j].width,at[j].height,0,Ut,zt,at[j].data);for(let St=0;St<ot.length;St++){let _e=ot[St].image[j].image;D?Y&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,St+1,0,0,_e.width,_e.height,Ut,zt,_e.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,St+1,Kt,_e.width,_e.height,0,Ut,zt,_e.data)}}else{D?Y&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ut,zt,at[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Kt,Ut,zt,at[j]);for(let St=0;St<ot.length;St++){let Ot=ot[St];D?Y&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,St+1,0,0,Ut,zt,Ot.image[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,St+1,Kt,Ut,zt,Ot.image[j])}}}f(_)&&v(s.TEXTURE_CUBE_MAP),et.__version=Q.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Lt(E,_,k,$,Q,et){let lt=r.convert(k.format,k.colorSpace),X=r.convert(k.type),J=y(k.internalFormat,lt,X,k.normalized,k.colorSpace),mt=i.get(_),_t=i.get(k);if(_t.__renderTarget=_,!mt.__hasExternalTextures){let at=Math.max(1,_.width>>et),it=Math.max(1,_.height>>et);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,et,J,at,it,_.depth,0,lt,X,null):e.texImage2D(Q,et,J,at,it,0,lt,X,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),Yt(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,Q,_t.__webglTexture,0,we(_)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,Q,_t.__webglTexture,et),e.bindFramebuffer(s.FRAMEBUFFER,null)}function de(E,_,k){if(s.bindRenderbuffer(s.RENDERBUFFER,E),_.depthBuffer){let $=_.depthTexture,Q=$&&$.isDepthTexture?$.type:null,et=A(_.stencilBuffer,Q),lt=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Yt(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we(_),et,_.width,_.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,we(_),et,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,et,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,lt,s.RENDERBUFFER,E)}else{let $=_.textures;for(let Q=0;Q<$.length;Q++){let et=$[Q],lt=r.convert(et.format,et.colorSpace),X=r.convert(et.type),J=y(et.internalFormat,lt,X,et.normalized,et.colorSpace);Yt(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we(_),J,_.width,_.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,we(_),J,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,J,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function qt(E,_,k){let $=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=i.get(_.depthTexture);if(Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),$){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,_.depthTexture.addEventListener("dispose",I)),Q.__webglTexture===void 0){Q.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),Dt(s.TEXTURE_CUBE_MAP,_.depthTexture);let mt=r.convert(_.depthTexture.format),_t=r.convert(_.depthTexture.type),at;_.depthTexture.format===yi?at=s.DEPTH_COMPONENT24:_.depthTexture.format===un&&(at=s.DEPTH24_STENCIL8);for(let it=0;it<6;it++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,at,_.width,_.height,0,mt,_t,null)}}else q(_.depthTexture,0);let et=Q.__webglTexture,lt=we(_),X=$?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,J=_.depthTexture.format===un?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(_.depthTexture.format===yi)Yt(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,X,et,0,lt):s.framebufferTexture2D(s.FRAMEBUFFER,J,X,et,0);else if(_.depthTexture.format===un)Yt(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,X,et,0,lt):s.framebufferTexture2D(s.FRAMEBUFFER,J,X,et,0);else throw new Error("Unknown depthTexture format")}function te(E){let _=i.get(E),k=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){let $=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),$){let Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=$}if(E.depthTexture&&!_.__autoAllocateDepthBuffer)if(k)for(let $=0;$<6;$++)qt(_.__webglFramebuffer[$],E,$);else{let $=E.texture.mipmaps;$&&$.length>0?qt(_.__webglFramebuffer[0],E,0):qt(_.__webglFramebuffer,E,0)}else if(k){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]===void 0)_.__webglDepthbuffer[$]=s.createRenderbuffer(),de(_.__webglDepthbuffer[$],E,!1);else{let Q=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=_.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,et)}}else{let $=E.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),de(_.__webglDepthbuffer,E,!1);else{let Q=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,et)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ce(E,_,k){let $=i.get(E);_!==void 0&&Lt($.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&te(E)}function Xt(E){let _=E.texture,k=i.get(E),$=i.get(_);E.addEventListener("dispose",g);let Q=E.textures,et=E.isWebGLCubeRenderTarget===!0,lt=Q.length>1;if(lt||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=_.version,a.memory.textures++),et){k.__webglFramebuffer=[];for(let X=0;X<6;X++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[X]=[];for(let J=0;J<_.mipmaps.length;J++)k.__webglFramebuffer[X][J]=s.createFramebuffer()}else k.__webglFramebuffer[X]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let X=0;X<_.mipmaps.length;X++)k.__webglFramebuffer[X]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(lt)for(let X=0,J=Q.length;X<J;X++){let mt=i.get(Q[X]);mt.__webglTexture===void 0&&(mt.__webglTexture=s.createTexture(),a.memory.textures++)}if(E.samples>0&&Yt(E)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let X=0;X<Q.length;X++){let J=Q[X];k.__webglColorRenderbuffer[X]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[X]);let mt=r.convert(J.format,J.colorSpace),_t=r.convert(J.type),at=y(J.internalFormat,mt,_t,J.normalized,J.colorSpace,E.isXRRenderTarget===!0),it=we(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,it,at,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+X,s.RENDERBUFFER,k.__webglColorRenderbuffer[X])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),de(k.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(et){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Dt(s.TEXTURE_CUBE_MAP,_);for(let X=0;X<6;X++)if(_.mipmaps&&_.mipmaps.length>0)for(let J=0;J<_.mipmaps.length;J++)Lt(k.__webglFramebuffer[X][J],E,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+X,J);else Lt(k.__webglFramebuffer[X],E,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);f(_)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){for(let X=0,J=Q.length;X<J;X++){let mt=Q[X],_t=i.get(mt),at=s.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(at=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(at,_t.__webglTexture),Dt(at,mt),Lt(k.__webglFramebuffer,E,mt,s.COLOR_ATTACHMENT0+X,at,0),f(mt)&&v(at)}e.unbindTexture()}else{let X=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(X=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(X,$.__webglTexture),Dt(X,_),_.mipmaps&&_.mipmaps.length>0)for(let J=0;J<_.mipmaps.length;J++)Lt(k.__webglFramebuffer[J],E,_,s.COLOR_ATTACHMENT0,X,J);else Lt(k.__webglFramebuffer,E,_,s.COLOR_ATTACHMENT0,X,0);f(_)&&v(X),e.unbindTexture()}E.depthBuffer&&te(E)}function Te(E){let _=E.textures;for(let k=0,$=_.length;k<$;k++){let Q=_[k];if(f(Q)){let et=T(E),lt=i.get(Q).__webglTexture;e.bindTexture(et,lt),v(et),e.unbindTexture()}}}let fe=[],Ye=[];function N(E){if(E.samples>0){if(Yt(E)===!1){let _=E.textures,k=E.width,$=E.height,Q=s.COLOR_BUFFER_BIT,et=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=i.get(E),X=_.length>1;if(X)for(let mt=0;mt<_.length;mt++)e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer);let J=E.texture.mipmaps;J&&J.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let mt=0;mt<_.length;mt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),X){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,lt.__webglColorRenderbuffer[mt]);let _t=i.get(_[mt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,_t,0)}s.blitFramebuffer(0,0,k,$,0,0,k,$,Q,s.NEAREST),l===!0&&(fe.length=0,Ye.length=0,fe.push(s.COLOR_ATTACHMENT0+mt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(fe.push(et),Ye.push(et),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ye)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),X)for(let mt=0;mt<_.length;mt++){e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,lt.__webglColorRenderbuffer[mt]);let _t=i.get(_[mt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,_t,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let _=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function we(E){return Math.min(n.maxSamples,E.samples)}function Yt(E){let _=i.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ae(E){let _=a.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function ht(E,_){let k=E.colorSpace,$=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||k!==Rs&&k!==Hi&&(Ht.getTransfer(k)===jt?($!==ri||Q!==Xe)&&Ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):At("WebGLTextures: Unsupported texture color space:",k)),_}function ge(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=z,this.getTextureUnits=G,this.setTextureUnits=L,this.setTexture2D=q,this.setTexture2DArray=Z,this.setTexture3D=tt,this.setTextureCube=st,this.rebindTextures=ce,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=Yt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Mg(s,t){function e(i,n=Hi){let r,a=Ht.getTransfer(n);if(i===Xe)return s.UNSIGNED_BYTE;if(i===Va)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Ha)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Jl)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Kl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Zl)return s.BYTE;if(i===$l)return s.SHORT;if(i===hs)return s.UNSIGNED_SHORT;if(i===Ga)return s.INT;if(i===fi)return s.UNSIGNED_INT;if(i===si)return s.FLOAT;if(i===Ge)return s.HALF_FLOAT;if(i===jl)return s.ALPHA;if(i===Ql)return s.RGB;if(i===ri)return s.RGBA;if(i===yi)return s.DEPTH_COMPONENT;if(i===un)return s.DEPTH_STENCIL;if(i===Wa)return s.RED;if(i===Xa)return s.RED_INTEGER;if(i===dn)return s.RG;if(i===qa)return s.RG_INTEGER;if(i===Ya)return s.RGBA_INTEGER;if(i===hr||i===ur||i===dr||i===fr)if(a===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Za||i===$a||i===Ja||i===Ka)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$a)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ja||i===Qa||i===to||i===eo||i===io||i===pr||i===no)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ja||i===Qa)return a===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===to)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===eo)return r.COMPRESSED_R11_EAC;if(i===io)return r.COMPRESSED_SIGNED_R11_EAC;if(i===pr)return r.COMPRESSED_RG11_EAC;if(i===no)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===so||i===ro||i===ao||i===oo||i===lo||i===co||i===ho||i===uo||i===fo||i===po||i===mo||i===go||i===xo||i===_o)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===so)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ro)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ao)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===oo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===co)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ho)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===po)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===go)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_o)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vo||i===yo||i===Mo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===vo)return a===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===So||i===bo||i===mr||i===To)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===So)return r.COMPRESSED_RED_RGTC1_EXT;if(i===bo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===mr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===To)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===us?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var Sg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bg=`
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

}`,bc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Xs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new me({vertexShader:Sg,fragmentShader:bg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new yt(new wi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Tc=class extends Mi{constructor(t,e){super();let i=this,n=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,m=null,x=null,S=typeof XRWebGLBinding<"u",p=new bc,f={},v=e.getContextAttributes(),T=null,y=null,A=[],b=[],I=new bt,g=null,w=new Ue;w.viewport=new pe;let R=new Ue;R.viewport=new pe;let C=[w,R],P=new Na,z=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let dt=A[K];return dt===void 0&&(dt=new ns,A[K]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(K){let dt=A[K];return dt===void 0&&(dt=new ns,A[K]=dt),dt.getGripSpace()},this.getHand=function(K){let dt=A[K];return dt===void 0&&(dt=new ns,A[K]=dt),dt.getHandSpace()};function L(K){let dt=b.indexOf(K.inputSource);if(dt===-1)return;let rt=A[dt];rt!==void 0&&(rt.update(K.inputSource,K.frame,c||a),rt.dispatchEvent({type:K.type,data:K.inputSource}))}function B(){n.removeEventListener("select",L),n.removeEventListener("selectstart",L),n.removeEventListener("selectend",L),n.removeEventListener("squeeze",L),n.removeEventListener("squeezestart",L),n.removeEventListener("squeezeend",L),n.removeEventListener("end",B),n.removeEventListener("inputsourceschange",F);for(let K=0;K<A.length;K++){let dt=b[K];dt!==null&&(b[K]=null,A[K].disconnect(dt))}z=null,G=null,p.reset();for(let K in f)delete f[K];t.setRenderTarget(T),m=null,h=null,d=null,n=null,y=null,Dt.stop(),i.isPresenting=!1,t.setPixelRatio(g),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&Ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(n,e)),d},this.getFrame=function(){return x},this.getSession=function(){return n},this.setSession=async function(K){if(n=K,n!==null){if(T=t.getRenderTarget(),n.addEventListener("select",L),n.addEventListener("selectstart",L),n.addEventListener("selectend",L),n.addEventListener("squeeze",L),n.addEventListener("squeezestart",L),n.addEventListener("squeezeend",L),n.addEventListener("end",B),n.addEventListener("inputsourceschange",F),v.xrCompatible!==!0&&await e.makeXRCompatible(),g=t.getPixelRatio(),t.getSize(I),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,Pt=null,Ft=null;v.depth&&(Ft=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=v.stencil?un:yi,Pt=v.stencil?us:fi);let Lt={colorFormat:e.RGBA8,depthFormat:Ft,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Lt),n.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new Ae(h.textureWidth,h.textureHeight,{format:ri,type:Xe,depthTexture:new Vi(h.textureWidth,h.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let rt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(n,e,rt),n.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Ae(m.framebufferWidth,m.framebufferHeight,{format:ri,type:Xe,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Dt.setContext(n),Dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function F(K){for(let dt=0;dt<K.removed.length;dt++){let rt=K.removed[dt],Pt=b.indexOf(rt);Pt>=0&&(b[Pt]=null,A[Pt].disconnect(rt))}for(let dt=0;dt<K.added.length;dt++){let rt=K.added[dt],Pt=b.indexOf(rt);if(Pt===-1){for(let Lt=0;Lt<A.length;Lt++)if(Lt>=b.length){b.push(rt),Pt=Lt;break}else if(b[Lt]===null){b[Lt]=rt,Pt=Lt;break}if(Pt===-1)break}let Ft=A[Pt];Ft&&Ft.connect(rt)}}let q=new U,Z=new U;function tt(K,dt,rt){q.setFromMatrixPosition(dt.matrixWorld),Z.setFromMatrixPosition(rt.matrixWorld);let Pt=q.distanceTo(Z),Ft=dt.projectionMatrix.elements,Lt=rt.projectionMatrix.elements,de=Ft[14]/(Ft[10]-1),qt=Ft[14]/(Ft[10]+1),te=(Ft[9]+1)/Ft[5],ce=(Ft[9]-1)/Ft[5],Xt=(Ft[8]-1)/Ft[0],Te=(Lt[8]+1)/Lt[0],fe=de*Xt,Ye=de*Te,N=Pt/(-Xt+Te),we=N*-Xt;if(dt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(we),K.translateZ(N),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ft[10]===-1)K.projectionMatrix.copy(dt.projectionMatrix),K.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{let Yt=de+N,ae=qt+N,ht=fe-we,ge=Ye+(Pt-we),E=te*qt/ae*Yt,_=ce*qt/ae*Yt;K.projectionMatrix.makePerspective(ht,ge,E,_,Yt,ae),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function st(K,dt){dt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(dt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(n===null)return;let dt=K.near,rt=K.far;p.texture!==null&&(p.depthNear>0&&(dt=p.depthNear),p.depthFar>0&&(rt=p.depthFar)),P.near=R.near=w.near=dt,P.far=R.far=w.far=rt,(z!==P.near||G!==P.far)&&(n.updateRenderState({depthNear:P.near,depthFar:P.far}),z=P.near,G=P.far),P.layers.mask=K.layers.mask|6,w.layers.mask=P.layers.mask&-5,R.layers.mask=P.layers.mask&-3;let Pt=K.parent,Ft=P.cameras;st(P,Pt);for(let Lt=0;Lt<Ft.length;Lt++)st(Ft[Lt],Pt);Ft.length===2?tt(P,w,R):P.projectionMatrix.copy(w.projectionMatrix),ct(K,P,Pt)};function ct(K,dt,rt){rt===null?K.matrix.copy(dt.matrixWorld):(K.matrix.copy(rt.matrixWorld),K.matrix.invert(),K.matrix.multiply(dt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(dt.projectionMatrix),K.projectionMatrixInverse.copy(dt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=fa*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(P)},this.getCameraTexture=function(K){return f[K]};let Et=null;function Wt(K,dt){if(u=dt.getViewerPose(c||a),x=dt,u!==null){let rt=u.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let Pt=!1;rt.length!==P.cameras.length&&(P.cameras.length=0,Pt=!0);for(let qt=0;qt<rt.length;qt++){let te=rt[qt],ce=null;if(m!==null)ce=m.getViewport(te);else{let Te=d.getViewSubImage(h,te);ce=Te.viewport,qt===0&&(t.setRenderTargetTextures(y,Te.colorTexture,Te.depthStencilTexture),t.setRenderTarget(y))}let Xt=C[qt];Xt===void 0&&(Xt=new Ue,Xt.layers.enable(qt),Xt.viewport=new pe,C[qt]=Xt),Xt.matrix.fromArray(te.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(te.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(ce.x,ce.y,ce.width,ce.height),qt===0&&(P.matrix.copy(Xt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Pt===!0&&P.cameras.push(Xt)}let Ft=n.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&S){d=i.getBinding();let qt=d.getDepthInformation(rt[0]);qt&&qt.isValid&&qt.texture&&p.init(qt,n.renderState)}if(Ft&&Ft.includes("camera-access")&&S){t.state.unbindTexture(),d=i.getBinding();for(let qt=0;qt<rt.length;qt++){let te=rt[qt].camera;if(te){let ce=f[te];ce||(ce=new Xs,f[te]=ce);let Xt=d.getCameraImage(te);ce.sourceTexture=Xt}}}}for(let rt=0;rt<A.length;rt++){let Pt=b[rt],Ft=A[rt];Pt!==null&&Ft!==void 0&&Ft.update(Pt,dt,c||a)}Et&&Et(K,dt),dt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:dt}),x=null}let Dt=new bu;Dt.setAnimationLoop(Wt),this.setAnimationLoop=function(K){Et=K},this.dispose=function(){}}},Tg=new Qt,Ru=new Nt;Ru.set(-1,0,0,0,1,0,0,0,1);function wg(s,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,ec(s)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,v,T,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(p,f):f.isMeshLambertMaterial?(r(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(p,f),d(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,y)):f.isMeshMatcapMaterial?(r(p,f),x(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),S(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,v,T):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Oe&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Oe&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let v=t.get(f),T=v.envMap,y=v.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(Tg.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Ru),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,v,T){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*v,p.scale.value=T*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,v){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Oe&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,f){f.matcap&&(p.matcap.value=f.matcap)}function S(p,f){let v=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Eg(s,t,e,i){let n={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,T){let y=T.program;i.uniformBlockBinding(v,y)}function c(v,T){let y=n[v.id];y===void 0&&(x(v),y=u(v),n[v.id]=y,v.addEventListener("dispose",p));let A=T.program;i.updateUBOMapping(v,A);let b=t.render.frame;r[v.id]!==b&&(h(v),r[v.id]=b)}function u(v){let T=d();v.__bindingPointIndex=T;let y=s.createBuffer(),A=v.__size,b=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,A,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,y),y}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return At("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let T=n[v.id],y=v.uniforms,A=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let b=0,I=y.length;b<I;b++){let g=Array.isArray(y[b])?y[b]:[y[b]];for(let w=0,R=g.length;w<R;w++){let C=g[w];if(m(C,b,w,A)===!0){let P=C.__offset,z=Array.isArray(C.value)?C.value:[C.value],G=0;for(let L=0;L<z.length;L++){let B=z[L],F=S(B);typeof B=="number"||typeof B=="boolean"?(C.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,P+G,C.__data)):B.isMatrix3?(C.__data[0]=B.elements[0],C.__data[1]=B.elements[1],C.__data[2]=B.elements[2],C.__data[3]=0,C.__data[4]=B.elements[3],C.__data[5]=B.elements[4],C.__data[6]=B.elements[5],C.__data[7]=0,C.__data[8]=B.elements[6],C.__data[9]=B.elements[7],C.__data[10]=B.elements[8],C.__data[11]=0):ArrayBuffer.isView(B)?C.__data.set(new B.constructor(B.buffer,B.byteOffset,C.__data.length)):(B.toArray(C.__data,G),G+=F.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,P,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(v,T,y,A){let b=v.value,I=T+"_"+y;if(A[I]===void 0)return typeof b=="number"||typeof b=="boolean"?A[I]=b:ArrayBuffer.isView(b)?A[I]=b.slice():A[I]=b.clone(),!0;{let g=A[I];if(typeof b=="number"||typeof b=="boolean"){if(g!==b)return A[I]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(g.equals(b)===!1)return g.copy(b),!0}}return!1}function x(v){let T=v.uniforms,y=0,A=16;for(let I=0,g=T.length;I<g;I++){let w=Array.isArray(T[I])?T[I]:[T[I]];for(let R=0,C=w.length;R<C;R++){let P=w[R],z=Array.isArray(P.value)?P.value:[P.value];for(let G=0,L=z.length;G<L;G++){let B=z[G],F=S(B),q=y%A,Z=q%F.boundary,tt=q+Z;y+=Z,tt!==0&&A-tt<F.storage&&(y+=A-tt),P.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=y,y+=F.storage}}}let b=y%A;return b>0&&(y+=A-b),v.__size=y,v.__cache={},this}function S(v){let T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?Ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):Ct("WebGLRenderer: Unsupported uniform value type.",v),T}function p(v){let T=v.target;T.removeEventListener("dispose",p);let y=a.indexOf(T.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(n[T.id]),delete n[T.id],delete r[T.id]}function f(){for(let v in n)s.deleteBuffer(n[v]);a=[],n={},r={}}return{bind:l,update:c,dispose:f}}var Ag=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ai=null;function Cg(){return Ai===null&&(Ai=new Gs(Ag,16,16,dn,Ge),Ai.name="DFG_LUT",Ai.minFilter=Ne,Ai.magFilter=Ne,Ai.wrapS=vi,Ai.wrapT=vi,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}var Lo=class{constructor(t={}){let{canvas:e=Zh(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:m=Xe}=t;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;let S=m,p=new Set([Ya,qa,Xa]),f=new Set([Xe,fi,hs,us,Va,Ha]),v=new Uint32Array(4),T=new Int32Array(4),y=new U,A=null,b=null,I=[],g=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,C=!1,P=null;this._outputColorSpace=Se;let z=0,G=0,L=null,B=-1,F=null,q=new pe,Z=new pe,tt=null,st=new Rt(0),ct=0,Et=e.width,Wt=e.height,Dt=1,K=null,dt=null,rt=new pe(0,0,Et,Wt),Pt=new pe(0,0,Et,Wt),Ft=!1,Lt=new as,de=!1,qt=!1,te=new Qt,ce=new U,Xt=new pe,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},fe=!1;function Ye(){return L===null?Dt:1}let N=i;function we(M,O){return e.getContext(M,O)}try{let M={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"184"}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",Ot,!1),N===null){let O="webgl2";if(N=we(O,M),N===null)throw we(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw At("WebGLRenderer: "+M.message),M}let Yt,ae,ht,ge,E,_,k,$,Q,et,lt,X,J,mt,_t,at,it,Ut,zt,Kt,D,nt,Y;function gt(){Yt=new Nm(N),Yt.init(),D=new Mg(N,Yt),ae=new Am(N,Yt,t,D),ht=new vg(N,Yt),ae.reversedDepthBuffer&&h&&ht.buffers.depth.setReversed(!0),ge=new Bm(N),E=new rg,_=new yg(N,Yt,ht,E,ae,D,ge),k=new Um(R),$=new Gd(N),nt=new wm(N,$),Q=new Fm(N,$,ge,nt),et=new km(N,Q,$,nt,ge),Ut=new zm(N,ae,_),_t=new Cm(E),lt=new sg(R,k,Yt,ae,nt,_t),X=new wg(R,E),J=new og,mt=new fg(Yt),it=new Tm(R,k,ht,et,x,l),at=new _g(R,et,ae),Y=new Eg(N,ge,ae,ht),zt=new Em(N,Yt,ge),Kt=new Om(N,Yt,ge),ge.programs=lt.programs,R.capabilities=ae,R.extensions=Yt,R.properties=E,R.renderLists=J,R.shadowMap=at,R.state=ht,R.info=ge}gt(),S!==Xe&&(w=new Vm(S,e.width,e.height,n,r));let ot=new Tc(R,N);this.xr=ot,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let M=Yt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Yt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Dt},this.setPixelRatio=function(M){M!==void 0&&(Dt=M,this.setSize(Et,Wt,!1))},this.getSize=function(M){return M.set(Et,Wt)},this.setSize=function(M,O,W=!0){if(ot.isPresenting){Ct("WebGLRenderer: Can't change size while VR device is presenting.");return}Et=M,Wt=O,e.width=Math.floor(M*Dt),e.height=Math.floor(O*Dt),W===!0&&(e.style.width=M+"px",e.style.height=O+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(Et*Dt,Wt*Dt).floor()},this.setDrawingBufferSize=function(M,O,W){Et=M,Wt=O,Dt=W,e.width=Math.floor(M*W),e.height=Math.floor(O*W),this.setViewport(0,0,M,O)},this.setEffects=function(M){if(S===Xe){At("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let O=0;O<M.length;O++)if(M[O].isOutputPass===!0){Ct("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(q)},this.getViewport=function(M){return M.copy(rt)},this.setViewport=function(M,O,W,V){M.isVector4?rt.set(M.x,M.y,M.z,M.w):rt.set(M,O,W,V),ht.viewport(q.copy(rt).multiplyScalar(Dt).round())},this.getScissor=function(M){return M.copy(Pt)},this.setScissor=function(M,O,W,V){M.isVector4?Pt.set(M.x,M.y,M.z,M.w):Pt.set(M,O,W,V),ht.scissor(Z.copy(Pt).multiplyScalar(Dt).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(M){ht.setScissorTest(Ft=M)},this.setOpaqueSort=function(M){K=M},this.setTransparentSort=function(M){dt=M},this.getClearColor=function(M){return M.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,W=!0){let V=0;if(M){let H=!1;if(L!==null){let pt=L.texture.format;H=p.has(pt)}if(H){let pt=L.texture.type,vt=f.has(pt),ft=it.getClearColor(),Mt=it.getClearAlpha(),Tt=ft.r,Bt=ft.g,Vt=ft.b;vt?(v[0]=Tt,v[1]=Bt,v[2]=Vt,v[3]=Mt,N.clearBufferuiv(N.COLOR,0,v)):(T[0]=Tt,T[1]=Bt,T[2]=Vt,T[3]=Mt,N.clearBufferiv(N.COLOR,0,T))}else V|=N.COLOR_BUFFER_BIT}O&&(V|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(V|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&N.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),P=M},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",Ot,!1),it.dispose(),J.dispose(),mt.dispose(),E.dispose(),k.dispose(),et.dispose(),nt.dispose(),Y.dispose(),lt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Oc),ot.removeEventListener("sessionend",Bc),xn.stop()};function j(M){M.preventDefault(),Ls("WebGLRenderer: Context Lost."),C=!0}function St(){Ls("WebGLRenderer: Context Restored."),C=!1;let M=ge.autoReset,O=at.enabled,W=at.autoUpdate,V=at.needsUpdate,H=at.type;gt(),ge.autoReset=M,at.enabled=O,at.autoUpdate=W,at.needsUpdate=V,at.type=H}function Ot(M){At("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function _e(M){let O=M.target;O.removeEventListener("dispose",_e),ee(O)}function ee(M){Pi(M),E.remove(M)}function Pi(M){let O=E.get(M).programs;O!==void 0&&(O.forEach(function(W){lt.releaseProgram(W)}),M.isShaderMaterial&&lt.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,W,V,H,pt){O===null&&(O=Te);let vt=H.isMesh&&H.matrixWorld.determinant()<0,ft=Qu(M,O,W,V,H);ht.setMaterial(V,vt);let Mt=W.index,Tt=1;if(V.wireframe===!0){if(Mt=Q.getWireframeAttribute(W),Mt===void 0)return;Tt=2}let Bt=W.drawRange,Vt=W.attributes.position,wt=Bt.start*Tt,ie=(Bt.start+Bt.count)*Tt;pt!==null&&(wt=Math.max(wt,pt.start*Tt),ie=Math.min(ie,(pt.start+pt.count)*Tt)),Mt!==null?(wt=Math.max(wt,0),ie=Math.min(ie,Mt.count)):Vt!=null&&(wt=Math.max(wt,0),ie=Math.min(ie,Vt.count));let ve=ie-wt;if(ve<0||ve===1/0)return;nt.setup(H,V,ft,W,Mt);let xe,se=zt;if(Mt!==null&&(xe=$.get(Mt),se=Kt,se.setIndex(xe)),H.isMesh)V.wireframe===!0?(ht.setLineWidth(V.wireframeLinewidth*Ye()),se.setMode(N.LINES)):se.setMode(N.TRIANGLES);else if(H.isLine){let Be=V.linewidth;Be===void 0&&(Be=1),ht.setLineWidth(Be*Ye()),H.isLineSegments?se.setMode(N.LINES):H.isLineLoop?se.setMode(N.LINE_LOOP):se.setMode(N.LINE_STRIP)}else H.isPoints?se.setMode(N.POINTS):H.isSprite&&se.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(Yt.get("WEBGL_multi_draw"))se.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Be=H._multiDrawStarts,xt=H._multiDrawCounts,Ze=H._multiDrawCount,Jt=Mt?$.get(Mt).bytesPerElement:1,Qe=E.get(V).currentProgram.getUniforms();for(let mi=0;mi<Ze;mi++)Qe.setValue(N,"_gl_DrawID",mi),se.render(Be[mi]/Jt,xt[mi])}else if(H.isInstancedMesh)se.renderInstances(wt,ve,H.count);else if(W.isInstancedBufferGeometry){let Be=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,xt=Math.min(W.instanceCount,Be);se.renderInstances(wt,ve,xt)}else se.render(wt,ve)};function pi(M,O,W){M.transparent===!0&&M.side===ii&&M.forceSinglePass===!1?(M.side=Oe,M.needsUpdate=!0,Er(M,O,W),M.side=zi,M.needsUpdate=!0,Er(M,O,W),M.side=ii):Er(M,O,W)}this.compile=function(M,O,W=null){W===null&&(W=M),b=mt.get(W),b.init(O),g.push(b),W.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),M!==W&&M.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),b.setupLights();let V=new Set;return M.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let pt=H.material;if(pt)if(Array.isArray(pt))for(let vt=0;vt<pt.length;vt++){let ft=pt[vt];pi(ft,W,H),V.add(ft)}else pi(pt,W,H),V.add(pt)}),b=g.pop(),V},this.compileAsync=function(M,O,W=null){let V=this.compile(M,O,W);return new Promise(H=>{function pt(){if(V.forEach(function(vt){E.get(vt).currentProgram.isReady()&&V.delete(vt)}),V.size===0){H(M);return}setTimeout(pt,10)}Yt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let al=null;function Ku(M){al&&al(M)}function Oc(){xn.stop()}function Bc(){xn.start()}let xn=new bu;xn.setAnimationLoop(Ku),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(M){al=M,ot.setAnimationLoop(M),M===null?xn.stop():xn.start()},ot.addEventListener("sessionstart",Oc),ot.addEventListener("sessionend",Bc),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){At("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;P!==null&&P.renderStart(M,O);let W=ot.enabled===!0&&ot.isPresenting===!0,V=w!==null&&(L===null||W)&&w.begin(R,L);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(O),O=ot.getCamera()),M.isScene===!0&&M.onBeforeRender(R,M,O,L),b=mt.get(M,g.length),b.init(O),b.state.textureUnits=_.getTextureUnits(),g.push(b),te.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Lt.setFromProjectionMatrix(te,hi,O.reversedDepth),qt=this.localClippingEnabled,de=_t.init(this.clippingPlanes,qt),A=J.get(M,I.length),A.init(),I.push(A),ot.enabled===!0&&ot.isPresenting===!0){let vt=R.xr.getDepthSensingMesh();vt!==null&&ol(vt,O,-1/0,R.sortObjects)}ol(M,O,0,R.sortObjects),A.finish(),R.sortObjects===!0&&A.sort(K,dt),fe=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,fe&&it.addToRenderList(A,M),this.info.render.frame++,de===!0&&_t.beginShadows();let H=b.state.shadowsArray;if(at.render(H,M,O),de===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&w.hasRenderPass())===!1){let vt=A.opaque,ft=A.transmissive;if(b.setupLights(),O.isArrayCamera){let Mt=O.cameras;if(ft.length>0)for(let Tt=0,Bt=Mt.length;Tt<Bt;Tt++){let Vt=Mt[Tt];kc(vt,ft,M,Vt)}fe&&it.render(M);for(let Tt=0,Bt=Mt.length;Tt<Bt;Tt++){let Vt=Mt[Tt];zc(A,M,Vt,Vt.viewport)}}else ft.length>0&&kc(vt,ft,M,O),fe&&it.render(M),zc(A,M,O)}L!==null&&G===0&&(_.updateMultisampleRenderTarget(L),_.updateRenderTargetMipmap(L)),V&&w.end(R),M.isScene===!0&&M.onAfterRender(R,M,O),nt.resetDefaultState(),B=-1,F=null,g.pop(),g.length>0?(b=g[g.length-1],_.setTextureUnits(b.state.textureUnits),de===!0&&_t.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,I.pop(),I.length>0?A=I[I.length-1]:A=null,P!==null&&P.renderEnd()};function ol(M,O,W,V){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLightProbeGrid)b.pushLightProbeGrid(M);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Lt.intersectsSprite(M)){V&&Xt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(te);let vt=et.update(M),ft=M.material;ft.visible&&A.push(M,vt,ft,W,Xt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Lt.intersectsObject(M))){let vt=et.update(M),ft=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Xt.copy(M.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Xt.copy(vt.boundingSphere.center)),Xt.applyMatrix4(M.matrixWorld).applyMatrix4(te)),Array.isArray(ft)){let Mt=vt.groups;for(let Tt=0,Bt=Mt.length;Tt<Bt;Tt++){let Vt=Mt[Tt],wt=ft[Vt.materialIndex];wt&&wt.visible&&A.push(M,vt,wt,W,Xt.z,Vt)}}else ft.visible&&A.push(M,vt,ft,W,Xt.z,null)}}let pt=M.children;for(let vt=0,ft=pt.length;vt<ft;vt++)ol(pt[vt],O,W,V)}function zc(M,O,W,V){let{opaque:H,transmissive:pt,transparent:vt}=M;b.setupLightsView(W),de===!0&&_t.setGlobalState(R.clippingPlanes,W),V&&ht.viewport(q.copy(V)),H.length>0&&wr(H,O,W),pt.length>0&&wr(pt,O,W),vt.length>0&&wr(vt,O,W),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function kc(M,O,W,V){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[V.id]===void 0){let wt=Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[V.id]=new Ae(1,1,{generateMipmaps:!0,type:wt?Ge:Xe,minFilter:hn,samples:Math.max(4,ae.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ht.workingColorSpace})}let pt=b.state.transmissionRenderTarget[V.id],vt=V.viewport||q;pt.setSize(vt.z*R.transmissionResolutionScale,vt.w*R.transmissionResolutionScale);let ft=R.getRenderTarget(),Mt=R.getActiveCubeFace(),Tt=R.getActiveMipmapLevel();R.setRenderTarget(pt),R.getClearColor(st),ct=R.getClearAlpha(),ct<1&&R.setClearColor(16777215,.5),R.clear(),fe&&it.render(W);let Bt=R.toneMapping;R.toneMapping=di;let Vt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),b.setupLightsView(V),de===!0&&_t.setGlobalState(R.clippingPlanes,V),wr(M,W,V),_.updateMultisampleRenderTarget(pt),_.updateRenderTargetMipmap(pt),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let ie=0,ve=O.length;ie<ve;ie++){let xe=O[ie],{object:se,geometry:Be,material:xt,group:Ze}=xe;if(xt.side===ii&&se.layers.test(V.layers)){let Jt=xt.side;xt.side=Oe,xt.needsUpdate=!0,Gc(se,W,V,Be,xt,Ze),xt.side=Jt,xt.needsUpdate=!0,wt=!0}}wt===!0&&(_.updateMultisampleRenderTarget(pt),_.updateRenderTargetMipmap(pt))}R.setRenderTarget(ft,Mt,Tt),R.setClearColor(st,ct),Vt!==void 0&&(V.viewport=Vt),R.toneMapping=Bt}function wr(M,O,W){let V=O.isScene===!0?O.overrideMaterial:null;for(let H=0,pt=M.length;H<pt;H++){let vt=M[H],{object:ft,geometry:Mt,group:Tt}=vt,Bt=vt.material;Bt.allowOverride===!0&&V!==null&&(Bt=V),ft.layers.test(W.layers)&&Gc(ft,O,W,Mt,Bt,Tt)}}function Gc(M,O,W,V,H,pt){M.onBeforeRender(R,O,W,V,H,pt),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(R,O,W,V,M,pt),H.transparent===!0&&H.side===ii&&H.forceSinglePass===!1?(H.side=Oe,H.needsUpdate=!0,R.renderBufferDirect(W,O,V,H,M,pt),H.side=zi,H.needsUpdate=!0,R.renderBufferDirect(W,O,V,H,M,pt),H.side=ii):R.renderBufferDirect(W,O,V,H,M,pt),M.onAfterRender(R,O,W,V,H,pt)}function Er(M,O,W){O.isScene!==!0&&(O=Te);let V=E.get(M),H=b.state.lights,pt=b.state.shadowsArray,vt=H.state.version,ft=lt.getParameters(M,H.state,pt,O,W,b.state.lightProbeGridArray),Mt=lt.getProgramCacheKey(ft),Tt=V.programs;V.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?O.environment:null,V.fog=O.fog;let Bt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;V.envMap=k.get(M.envMap||V.environment,Bt),V.envMapRotation=V.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,Tt===void 0&&(M.addEventListener("dispose",_e),Tt=new Map,V.programs=Tt);let Vt=Tt.get(Mt);if(Vt!==void 0){if(V.currentProgram===Vt&&V.lightsStateVersion===vt)return Hc(M,ft),Vt}else ft.uniforms=lt.getUniforms(M),P!==null&&M.isNodeMaterial&&P.build(M,W,ft),M.onBeforeCompile(ft,R),Vt=lt.acquireProgram(ft,Mt),Tt.set(Mt,Vt),V.uniforms=ft.uniforms;let wt=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(wt.clippingPlanes=_t.uniform),Hc(M,ft),V.needsLights=ed(M),V.lightsStateVersion=vt,V.needsLights&&(wt.ambientLightColor.value=H.state.ambient,wt.lightProbe.value=H.state.probe,wt.directionalLights.value=H.state.directional,wt.directionalLightShadows.value=H.state.directionalShadow,wt.spotLights.value=H.state.spot,wt.spotLightShadows.value=H.state.spotShadow,wt.rectAreaLights.value=H.state.rectArea,wt.ltc_1.value=H.state.rectAreaLTC1,wt.ltc_2.value=H.state.rectAreaLTC2,wt.pointLights.value=H.state.point,wt.pointLightShadows.value=H.state.pointShadow,wt.hemisphereLights.value=H.state.hemi,wt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,wt.spotLightMatrix.value=H.state.spotLightMatrix,wt.spotLightMap.value=H.state.spotLightMap,wt.pointShadowMatrix.value=H.state.pointShadowMatrix),V.lightProbeGrid=b.state.lightProbeGridArray.length>0,V.currentProgram=Vt,V.uniformsList=null,Vt}function Vc(M){if(M.uniformsList===null){let O=M.currentProgram.getUniforms();M.uniformsList=fs.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function Hc(M,O){let W=E.get(M);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function ju(M,O){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(O.matrixWorld);for(let W=0,V=M.length;W<V;W++){let H=M[W];if(H.texture!==null&&H.boundingBox.containsPoint(y))return H}return null}function Qu(M,O,W,V,H){O.isScene!==!0&&(O=Te),_.resetTextureUnits();let pt=O.fog,vt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?O.environment:null,ft=L===null?R.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ht.workingColorSpace,Mt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Tt=k.get(V.envMap||vt,Mt),Bt=V.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Vt=!!W.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),wt=!!W.morphAttributes.position,ie=!!W.morphAttributes.normal,ve=!!W.morphAttributes.color,xe=di;V.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(xe=R.toneMapping);let se=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Be=se!==void 0?se.length:0,xt=E.get(V),Ze=b.state.lights;if(de===!0&&(qt===!0||M!==F)){let oe=M===F&&V.id===B;_t.setState(V,M,oe)}let Jt=!1;V.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==Ze.state.version||xt.outputColorSpace!==ft||H.isBatchedMesh&&xt.batching===!1||!H.isBatchedMesh&&xt.batching===!0||H.isBatchedMesh&&xt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&xt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&xt.instancing===!1||!H.isInstancedMesh&&xt.instancing===!0||H.isSkinnedMesh&&xt.skinning===!1||!H.isSkinnedMesh&&xt.skinning===!0||H.isInstancedMesh&&xt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&xt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&xt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&xt.instancingMorph===!1&&H.morphTexture!==null||xt.envMap!==Tt||V.fog===!0&&xt.fog!==pt||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==_t.numPlanes||xt.numIntersection!==_t.numIntersection)||xt.vertexAlphas!==Bt||xt.vertexTangents!==Vt||xt.morphTargets!==wt||xt.morphNormals!==ie||xt.morphColors!==ve||xt.toneMapping!==xe||xt.morphTargetsCount!==Be||!!xt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Jt=!0):(Jt=!0,xt.__version=V.version);let Qe=xt.currentProgram;Jt===!0&&(Qe=Er(V,O,H),P&&V.isNodeMaterial&&P.onUpdateProgram(V,Qe,xt));let mi=!1,qi=!1,Un=!1,re=Qe.getUniforms(),ye=xt.uniforms;if(ht.useProgram(Qe.program)&&(mi=!0,qi=!0,Un=!0),V.id!==B&&(B=V.id,qi=!0),xt.needsLights){let oe=ju(b.state.lightProbeGridArray,H);xt.lightProbeGrid!==oe&&(xt.lightProbeGrid=oe,qi=!0)}if(mi||F!==M){ht.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),re.setValue(N,"projectionMatrix",M.projectionMatrix),re.setValue(N,"viewMatrix",M.matrixWorldInverse);let Zi=re.map.cameraPosition;Zi!==void 0&&Zi.setValue(N,ce.setFromMatrixPosition(M.matrixWorld)),ae.logarithmicDepthBuffer&&re.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&re.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),F!==M&&(F=M,qi=!0,Un=!0)}if(xt.needsLights&&(Ze.state.directionalShadowMap.length>0&&re.setValue(N,"directionalShadowMap",Ze.state.directionalShadowMap,_),Ze.state.spotShadowMap.length>0&&re.setValue(N,"spotShadowMap",Ze.state.spotShadowMap,_),Ze.state.pointShadowMap.length>0&&re.setValue(N,"pointShadowMap",Ze.state.pointShadowMap,_)),H.isSkinnedMesh){re.setOptional(N,H,"bindMatrix"),re.setOptional(N,H,"bindMatrixInverse");let oe=H.skeleton;oe&&(oe.boneTexture===null&&oe.computeBoneTexture(),re.setValue(N,"boneTexture",oe.boneTexture,_))}H.isBatchedMesh&&(re.setOptional(N,H,"batchingTexture"),re.setValue(N,"batchingTexture",H._matricesTexture,_),re.setOptional(N,H,"batchingIdTexture"),re.setValue(N,"batchingIdTexture",H._indirectTexture,_),re.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&re.setValue(N,"batchingColorTexture",H._colorsTexture,_));let Yi=W.morphAttributes;if((Yi.position!==void 0||Yi.normal!==void 0||Yi.color!==void 0)&&Ut.update(H,W,Qe),(qi||xt.receiveShadow!==H.receiveShadow)&&(xt.receiveShadow=H.receiveShadow,re.setValue(N,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&O.environment!==null&&(ye.envMapIntensity.value=O.environmentIntensity),ye.dfgLUT!==void 0&&(ye.dfgLUT.value=Cg()),qi){if(re.setValue(N,"toneMappingExposure",R.toneMappingExposure),xt.needsLights&&td(ye,Un),pt&&V.fog===!0&&X.refreshFogUniforms(ye,pt),X.refreshMaterialUniforms(ye,V,Dt,Wt,b.state.transmissionRenderTarget[M.id]),xt.needsLights&&xt.lightProbeGrid){let oe=xt.lightProbeGrid;ye.probesSH.value=oe.texture,ye.probesMin.value.copy(oe.boundingBox.min),ye.probesMax.value.copy(oe.boundingBox.max),ye.probesResolution.value.copy(oe.resolution)}fs.upload(N,Vc(xt),ye,_)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(fs.upload(N,Vc(xt),ye,_),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&re.setValue(N,"center",H.center),re.setValue(N,"modelViewMatrix",H.modelViewMatrix),re.setValue(N,"normalMatrix",H.normalMatrix),re.setValue(N,"modelMatrix",H.matrixWorld),V.uniformsGroups!==void 0){let oe=V.uniformsGroups;for(let Zi=0,Nn=oe.length;Zi<Nn;Zi++){let Wc=oe[Zi];Y.update(Wc,Qe),Y.bind(Wc,Qe)}}return Qe}function td(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function ed(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(M,O,W){let V=E.get(M);V.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),E.get(M.texture).__webglTexture=O,E.get(M.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:W,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){let W=E.get(M);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0};let id=N.createFramebuffer();this.setRenderTarget=function(M,O=0,W=0){L=M,z=O,G=W;let V=null,H=!1,pt=!1;if(M){let ft=E.get(M);if(ft.__useDefaultFramebuffer!==void 0){ht.bindFramebuffer(N.FRAMEBUFFER,ft.__webglFramebuffer),q.copy(M.viewport),Z.copy(M.scissor),tt=M.scissorTest,ht.viewport(q),ht.scissor(Z),ht.setScissorTest(tt),B=-1;return}else if(ft.__webglFramebuffer===void 0)_.setupRenderTarget(M);else if(ft.__hasExternalTextures)_.rebindTextures(M,E.get(M.texture).__webglTexture,E.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Bt=M.depthTexture;if(ft.__boundDepthTexture!==Bt){if(Bt!==null&&E.has(Bt)&&(M.width!==Bt.image.width||M.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(M)}}let Mt=M.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(pt=!0);let Tt=E.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Tt[O])?V=Tt[O][W]:V=Tt[O],H=!0):M.samples>0&&_.useMultisampledRTT(M)===!1?V=E.get(M).__webglMultisampledFramebuffer:Array.isArray(Tt)?V=Tt[W]:V=Tt,q.copy(M.viewport),Z.copy(M.scissor),tt=M.scissorTest}else q.copy(rt).multiplyScalar(Dt).floor(),Z.copy(Pt).multiplyScalar(Dt).floor(),tt=Ft;if(W!==0&&(V=id),ht.bindFramebuffer(N.FRAMEBUFFER,V)&&ht.drawBuffers(M,V),ht.viewport(q),ht.scissor(Z),ht.setScissorTest(tt),H){let ft=E.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,ft.__webglTexture,W)}else if(pt){let ft=O;for(let Mt=0;Mt<M.textures.length;Mt++){let Tt=E.get(M.textures[Mt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Mt,Tt.__webglTexture,W,ft)}}else if(M!==null&&W!==0){let ft=E.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ft.__webglTexture,W)}B=-1},this.readRenderTargetPixels=function(M,O,W,V,H,pt,vt,ft=0){if(!(M&&M.isWebGLRenderTarget)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=E.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&vt!==void 0&&(Mt=Mt[vt]),Mt){ht.bindFramebuffer(N.FRAMEBUFFER,Mt);try{let Tt=M.textures[ft],Bt=Tt.format,Vt=Tt.type;if(M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ft),!ae.textureFormatReadable(Bt)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(Vt)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-V&&W>=0&&W<=M.height-H&&N.readPixels(O,W,V,H,D.convert(Bt),D.convert(Vt),pt)}finally{let Tt=L!==null?E.get(L).__webglFramebuffer:null;ht.bindFramebuffer(N.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(M,O,W,V,H,pt,vt,ft=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=E.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&vt!==void 0&&(Mt=Mt[vt]),Mt)if(O>=0&&O<=M.width-V&&W>=0&&W<=M.height-H){ht.bindFramebuffer(N.FRAMEBUFFER,Mt);let Tt=M.textures[ft],Bt=Tt.format,Vt=Tt.type;if(M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ft),!ae.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let wt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,wt),N.bufferData(N.PIXEL_PACK_BUFFER,pt.byteLength,N.STREAM_READ),N.readPixels(O,W,V,H,D.convert(Bt),D.convert(Vt),0);let ie=L!==null?E.get(L).__webglFramebuffer:null;ht.bindFramebuffer(N.FRAMEBUFFER,ie);let ve=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Jh(N,ve,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,wt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,pt),N.deleteBuffer(wt),N.deleteSync(ve),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,W=0){let V=Math.pow(2,-W),H=Math.floor(M.image.width*V),pt=Math.floor(M.image.height*V),vt=O!==null?O.x:0,ft=O!==null?O.y:0;_.setTexture2D(M,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,vt,ft,H,pt),ht.unbindTexture()};let nd=N.createFramebuffer(),sd=N.createFramebuffer();this.copyTextureToTexture=function(M,O,W=null,V=null,H=0,pt=0){let vt,ft,Mt,Tt,Bt,Vt,wt,ie,ve,xe=M.isCompressedTexture?M.mipmaps[pt]:M.image;if(W!==null)vt=W.max.x-W.min.x,ft=W.max.y-W.min.y,Mt=W.isBox3?W.max.z-W.min.z:1,Tt=W.min.x,Bt=W.min.y,Vt=W.isBox3?W.min.z:0;else{let ye=Math.pow(2,-H);vt=Math.floor(xe.width*ye),ft=Math.floor(xe.height*ye),M.isDataArrayTexture?Mt=xe.depth:M.isData3DTexture?Mt=Math.floor(xe.depth*ye):Mt=1,Tt=0,Bt=0,Vt=0}V!==null?(wt=V.x,ie=V.y,ve=V.z):(wt=0,ie=0,ve=0);let se=D.convert(O.format),Be=D.convert(O.type),xt;O.isData3DTexture?(_.setTexture3D(O,0),xt=N.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(_.setTexture2DArray(O,0),xt=N.TEXTURE_2D_ARRAY):(_.setTexture2D(O,0),xt=N.TEXTURE_2D),ht.activeTexture(N.TEXTURE0),ht.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),ht.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),ht.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);let Ze=ht.getParameter(N.UNPACK_ROW_LENGTH),Jt=ht.getParameter(N.UNPACK_IMAGE_HEIGHT),Qe=ht.getParameter(N.UNPACK_SKIP_PIXELS),mi=ht.getParameter(N.UNPACK_SKIP_ROWS),qi=ht.getParameter(N.UNPACK_SKIP_IMAGES);ht.pixelStorei(N.UNPACK_ROW_LENGTH,xe.width),ht.pixelStorei(N.UNPACK_IMAGE_HEIGHT,xe.height),ht.pixelStorei(N.UNPACK_SKIP_PIXELS,Tt),ht.pixelStorei(N.UNPACK_SKIP_ROWS,Bt),ht.pixelStorei(N.UNPACK_SKIP_IMAGES,Vt);let Un=M.isDataArrayTexture||M.isData3DTexture,re=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){let ye=E.get(M),Yi=E.get(O),oe=E.get(ye.__renderTarget),Zi=E.get(Yi.__renderTarget);ht.bindFramebuffer(N.READ_FRAMEBUFFER,oe.__webglFramebuffer),ht.bindFramebuffer(N.DRAW_FRAMEBUFFER,Zi.__webglFramebuffer);for(let Nn=0;Nn<Mt;Nn++)Un&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,E.get(M).__webglTexture,H,Vt+Nn),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,E.get(O).__webglTexture,pt,ve+Nn)),N.blitFramebuffer(Tt,Bt,vt,ft,wt,ie,vt,ft,N.DEPTH_BUFFER_BIT,N.NEAREST);ht.bindFramebuffer(N.READ_FRAMEBUFFER,null),ht.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(H!==0||M.isRenderTargetTexture||E.has(M)){let ye=E.get(M),Yi=E.get(O);ht.bindFramebuffer(N.READ_FRAMEBUFFER,nd),ht.bindFramebuffer(N.DRAW_FRAMEBUFFER,sd);for(let oe=0;oe<Mt;oe++)Un?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ye.__webglTexture,H,Vt+oe):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ye.__webglTexture,H),re?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Yi.__webglTexture,pt,ve+oe):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Yi.__webglTexture,pt),H!==0?N.blitFramebuffer(Tt,Bt,vt,ft,wt,ie,vt,ft,N.COLOR_BUFFER_BIT,N.NEAREST):re?N.copyTexSubImage3D(xt,pt,wt,ie,ve+oe,Tt,Bt,vt,ft):N.copyTexSubImage2D(xt,pt,wt,ie,Tt,Bt,vt,ft);ht.bindFramebuffer(N.READ_FRAMEBUFFER,null),ht.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else re?M.isDataTexture||M.isData3DTexture?N.texSubImage3D(xt,pt,wt,ie,ve,vt,ft,Mt,se,Be,xe.data):O.isCompressedArrayTexture?N.compressedTexSubImage3D(xt,pt,wt,ie,ve,vt,ft,Mt,se,xe.data):N.texSubImage3D(xt,pt,wt,ie,ve,vt,ft,Mt,se,Be,xe):M.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,pt,wt,ie,vt,ft,se,Be,xe.data):M.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,pt,wt,ie,xe.width,xe.height,se,xe.data):N.texSubImage2D(N.TEXTURE_2D,pt,wt,ie,vt,ft,se,Be,xe);ht.pixelStorei(N.UNPACK_ROW_LENGTH,Ze),ht.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Jt),ht.pixelStorei(N.UNPACK_SKIP_PIXELS,Qe),ht.pixelStorei(N.UNPACK_SKIP_ROWS,mi),ht.pixelStorei(N.UNPACK_SKIP_IMAGES,qi),pt===0&&O.generateMipmaps&&N.generateMipmap(xt),ht.unbindTexture()},this.initRenderTarget=function(M){E.get(M).__webglFramebuffer===void 0&&_.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?_.setTextureCube(M,0):M.isData3DTexture?_.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?_.setTexture2DArray(M,0):_.setTexture2D(M,0),ht.unbindTexture()},this.resetState=function(){z=0,G=0,L=null,ht.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ht._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ht._getUnpackColorSpace()}};var Ln=Math.PI*2;function ue(s,t,e){return s<t?t:s>e?e:s}function vr(s,t,e){return s+(t-s)*e}function mn(s,t,e,i){return vr(s,t,1-Math.exp(-e*i))}function ms(s,t){let e=(t-s)%Ln;return e>Math.PI&&(e-=Ln),e<-Math.PI&&(e+=Ln),e}function $t(s,t){return s%=t,s<0?s+t:s}function yr(s,t,e,i){let n=e-s,r=i-t;return Math.sqrt(n*n+r*r)}function Iu(s){let t=s>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var No=class{constructor(t,e=4096){this.pts=t,this.n=t.length,this.samples=e,this._buildLUT()}pointAtU(t){t=$t(t,1);let e=this.n,i=t*e,n=Math.floor(i),r=i-n,a=this.pts[(n-1+e)%e],o=this.pts[n%e],l=this.pts[(n+1)%e],c=this.pts[(n+2)%e],u=r*r,d=u*r,h=(m,x,S,p)=>.5*(2*x+(-m+S)*r+(2*m-5*x+4*S-p)*u+(-m+3*x-3*S+p)*d);return[h(a[0],o[0],l[0],c[0]),h(a[1],o[1],l[1],c[1])]}_buildLUT(){let t=this.samples;this.lutX=new Float64Array(t),this.lutZ=new Float64Array(t),this.lutS=new Float64Array(t);let e=this.pointAtU(0),i=0;for(let a=0;a<t;a++){let o=this.pointAtU(a/t);if(a>0){let l=o[0]-e[0],c=o[1]-e[1];i+=Math.sqrt(l*l+c*c)}this.lutX[a]=o[0],this.lutZ[a]=o[1],this.lutS[a]=i,e=o}let n=this.lutX[0]-e[0],r=this.lutZ[0]-e[1];this.totalLength=i+Math.sqrt(n*n+r*r)}_sToIndex(t){t=$t(t,this.totalLength);let e=this.lutS,i=0,n=this.samples-1;for(;i<n;){let c=i+n+1>>1;e[c]<=t?i=c:n=c-1}let r=i,a=e[r],o=r+1<this.samples?e[r+1]:this.totalLength,l=o>a?(t-a)/(o-a):0;return r+l}posAt(t){let e=this._sToIndex(t),i=this.samples,n=Math.floor(e)%i,r=(n+1)%i,a=e-Math.floor(e);return[this.lutX[n]+(this.lutX[r]-this.lutX[n])*a,this.lutZ[n]+(this.lutZ[r]-this.lutZ[n])*a]}tangentAt(t){let e=this.totalLength/this.samples,i=this.posAt(t-e),n=this.posAt(t+e),r=n[0]-i[0],a=n[1]-i[1],o=Math.sqrt(r*r+a*a)||1;return[r/o,a/o]}headingAt(t){let e=this.tangentAt(t);return Math.atan2(e[0],e[1])}curvatureAt(t){let i=this.headingAt(t-4),r=(this.headingAt(t+4)-i)%Ln;return r>Math.PI&&(r-=Ln),r<-Math.PI&&(r+=Ln),r/8}offsetAt(t,e){let i=this.posAt(t),n=this.tangentAt(t);return[i[0]+n[1]*e,i[1]-n[0]*e]}};var wc={name:"スターサーキット",laps:3,controlPoints:[[0,-120],[0,-50],[0,30],[-18,85],[-62,108],[-112,96],[-132,52],[-106,14],[-66,4],[-58,-42],[-94,-74],[-148,-82],[-188,-48],[-202,8],[-186,66],[-148,116],[-92,156],[-24,172],[44,152],[84,108],[98,58],[72,18],[92,-32],[70,-92],[28,-132]],halfWidth:7,curbWidth:1.2,grassWidth:9,wallRanges:[[.385,.565],[.945,1],[0,.075]],caveRange:[.395,.555],dashPads:[{f:.03,d:-2.5},{f:.03,d:2.5},{f:.575,d:0},{f:.86,d:0}],jumpPads:[{f:.655,vy:11}],waterfallF:.668,itemRows:[{f:.105,count:4},{f:.345,count:4},{f:.61,count:4},{f:.84,count:4}],coinGroups:[{f0:.155,n:5,d:-3},{f0:.29,n:5,d:3},{f0:.475,n:5,d:0},{f0:.72,n:5,d:-3},{f0:.9,n:5,d:0}],crowdRanges:[[.955,1],[0,.06]],racingLine:[[0,0],[.05,0],[.1,-2],[.14,-4],[.18,2],[.21,4.2],[.245,0],[.27,-4.2],[.3,2],[.33,4],[.36,-2],[.4,0],[.46,1.5],[.52,-1.5],[.58,0],[.63,0],[.66,0],[.7,-2],[.75,3],[.79,-3.5],[.83,3],[.87,-2],[.91,3.5],[.95,-1],[1,0]]};var qe={ROAD:"road",CURB:"curb",GRASS:"grass",OUT:"out"},Fo=class{constructor(t,e){this.spline=t,this.data=e,this.L=t.totalLength,this.M=t.samples;let i=this.L;this.dashPads=e.dashPads.map(r=>({s:r.f*i,d:r.d,halfLen:3,halfW:2})),this.jumpPads=e.jumpPads.map(r=>({s:r.f*i,vy:r.vy,halfLen:2.5})),this.wallRanges=e.wallRanges.map(([r,a])=>[r*i,a*i]),this.caveRange=[e.caveRange[0]*i,e.caveRange[1]*i];let n=Math.ceil(i/8);this.curvLUT=new Float32Array(n);for(let r=0;r<n;r++)this.curvLUT[r]=t.curvatureAt(r/n*i);this.curvN=n}locate(t,e,i=null){let n=this.M,r=this.spline,a=-1,o=1/0;if(i!==null){let x=Math.round(r._sToIndex(i)),S=Math.max(8,Math.ceil(20/this.L*n));for(let p=-S;p<=S;p++){let f=((x+p)%n+n)%n,v=r.lutX[f]-t,T=r.lutZ[f]-e,y=v*v+T*T;y<o&&(o=y,a=f)}o>1600&&(a=-1)}if(a<0){o=1/0;for(let x=0;x<n;x+=4){let S=r.lutX[x]-t,p=r.lutZ[x]-e,f=S*S+p*p;f<o&&(o=f,a=x)}for(let x=-4;x<=4;x++){let S=((a+x)%n+n)%n,p=r.lutX[S]-t,f=r.lutZ[S]-e,v=p*p+f*f;v<o&&(o=v,a=S)}}let l=this.spline.lutS[a],c=r.tangentAt(l),u=t-r.lutX[a],d=e-r.lutZ[a],h=u*c[0]+d*c[1],m=u*c[1]-d*c[0];return{s:$t(l+h,this.L),d:m}}posAt(t,e){return this.spline.offsetAt(t,e)}headingAt(t){return this.spline.headingAt(t)}curvatureAt(t){let e=Math.floor($t(t,this.L)/this.L*this.curvN)%this.curvN;return this.curvLUT[e]}maxCurvatureAhead(t,e){let n=0;for(let r=0;r<=e;r+=8){let a=Math.abs(this.curvatureAt(t+r));a>n&&(n=a)}return n}inRange(t,e){t=$t(t,this.L);for(let[i,n]of e)if(t>=i&&t<=n)return!0;return!1}hasWallAt(t){return this.inRange(t,this.wallRanges)}inCave(t){return t>=this.caveRange[0]&&t<=this.caveRange[1]}limitAt(t){let e=this.data;return this.hasWallAt(t)?e.halfWidth+.2:e.halfWidth+e.grassWidth}surfaceAt(t,e){let i=this.data,n=Math.abs(e);return n<=i.halfWidth-i.curbWidth?qe.ROAD:n<=i.halfWidth?qe.CURB:n<=this.limitAt(t)?qe.GRASS:qe.OUT}onDashPad(t,e){for(let i of this.dashPads){let n=$t(t-i.s,this.L);if(n>this.L/2&&(n-=this.L),Math.abs(n)<=i.halfLen&&Math.abs(e-i.d)<=i.halfW)return!0}return!1}onJumpPad(t){for(let e of this.jumpPads){let i=$t(t-e.s,this.L);if(i>this.L/2&&(i-=this.L),Math.abs(i)<=e.halfLen)return e.vy}return 0}racingLineD(t){let e=this.data.racingLine,i=$t(t,this.L)/this.L;for(let n=0;n<e.length-1;n++){let[r,a]=e[n],[o,l]=e[n+1];if(i>=r&&i<=o)return vr(a,l,o>r?(i-r)/(o-r):0)}return 0}racingLineAt(t,e=0){let i=ue(this.racingLineD(t)+e,-this.data.halfWidth+1,this.data.halfWidth-1);return this.posAt(t,i)}};function Ri(s,t){let e=document.createElement("canvas");return e.width=s,e.height=t,e}function Ii(s,t=!0){let e=new sn(s);return e.colorSpace=Se,t&&(e.wrapS=e.wrapT=wn),e.anisotropy=4,e}function Pu(){let e=Ri(256,256),i=e.getContext("2d");i.fillStyle="#4a4d55",i.fillRect(0,0,256,256);for(let r=0;r<2600;r++){let a=60+Math.random()*50;i.fillStyle=`rgba(${a},${a},${a+8},${.25+Math.random()*.3})`,i.fillRect(Math.random()*256,Math.random()*256,1+Math.random()*2,1+Math.random()*2)}let n=i.createLinearGradient(0,0,256,0);return n.addColorStop(0,"rgba(0,0,0,0.16)"),n.addColorStop(.22,"rgba(0,0,0,0)"),n.addColorStop(.38,"rgba(0,0,0,0.13)"),n.addColorStop(.62,"rgba(0,0,0,0.13)"),n.addColorStop(.78,"rgba(0,0,0,0)"),n.addColorStop(1,"rgba(0,0,0,0.16)"),i.fillStyle=n,i.fillRect(0,0,256,256),Ii(e)}function Oo(){let e=Ri(256,256),i=e.getContext("2d");i.fillStyle="#3e9a3e",i.fillRect(0,0,256,256);for(let n=0;n<3600;n++){let r=120+Math.random()*90;i.fillStyle=`rgba(${r*.32},${r},${r*.3},${.3+Math.random()*.4})`;let a=Math.random()*256,o=Math.random()*256;i.fillRect(a,o,1+Math.random(),2+Math.random()*3)}for(let n=0;n<26;n++){let r=12+Math.random()*28,a=i.createRadialGradient(0,0,0,0,0,r);a.addColorStop(0,"rgba(150,220,110,0.12)"),a.addColorStop(1,"rgba(150,220,110,0)"),i.save(),i.translate(Math.random()*256,Math.random()*256),i.fillStyle=a,i.fillRect(-r,-r,r*2,r*2),i.restore()}return Ii(e)}function Lu(){let e=Ri(64,128),i=e.getContext("2d");i.fillStyle="#e8e8e8",i.fillRect(0,0,64,128),i.fillStyle="#e03b30",i.fillRect(0,0,64,128/2);let n=i.createLinearGradient(0,0,64,0);return n.addColorStop(0,"rgba(0,0,0,0.18)"),n.addColorStop(.5,"rgba(255,255,255,0.08)"),n.addColorStop(1,"rgba(0,0,0,0.1)"),i.fillStyle=n,i.fillRect(0,0,64,128),Ii(e)}function Du(){let e=Ri(128,128),i=e.getContext("2d");for(let n=0;n<8;n++)for(let r=0;r<8;r++)i.fillStyle=(r+n)%2?"#16181d":"#f4f4f4",i.fillRect(r*16,n*16,16,16);return Ii(e)}function Uu(){let e=Ri(256,256),i=e.getContext("2d");i.fillStyle="#4d4458",i.fillRect(0,0,256,256);for(let n=0;n<2e3;n++){let r=50+Math.random()*60;i.fillStyle=`rgba(${r},${r*.9},${r*1.15},${.3+Math.random()*.3})`,i.beginPath(),i.arc(Math.random()*256,Math.random()*256,1+Math.random()*4,0,7),i.fill()}i.strokeStyle="rgba(20,15,30,0.5)";for(let n=0;n<30;n++){i.beginPath();let r=Math.random()*256,a=Math.random()*256;i.moveTo(r,a);for(let o=0;o<5;o++)r+=(Math.random()-.5)*40,a+=Math.random()*20,i.lineTo(r,a);i.stroke()}return Ii(e)}function Nu(){let e=Ri(64,512),i=e.getContext("2d"),n=i.createLinearGradient(0,0,0,512);n.addColorStop(0,"#2b3a8f"),n.addColorStop(.35,"#5a6fd4"),n.addColorStop(.58,"#a98fe0"),n.addColorStop(.74,"#ffb37a"),n.addColorStop(.85,"#ffd9a0"),n.addColorStop(1,"#ffe9c4"),i.fillStyle=n,i.fillRect(0,0,64,512);let r=Ii(e,!1);return r.wrapS=wn,r}function Fu(){let e=Ri(256,64),i=e.getContext("2d");i.fillStyle="#2a2f3c",i.fillRect(0,0,256,64);let n=["#ff6b6b","#ffd93d","#6bcb77","#4d96ff","#ff8fab","#c79fff","#fff"];for(let r=8;r<64;r+=12)for(let a=4;a<256;a+=8)i.fillStyle=n[Math.random()*n.length|0],i.beginPath(),i.arc(a+Math.random()*3,r+Math.random()*3,2.6,0,7),i.fill(),i.fillRect(a-1.5+Math.random()*3,r+3,5,7);return Ii(e)}function Ou(){let e=Ri(512,64),i=e.getContext("2d");i.fillStyle="#103060",i.fillRect(0,0,512,64),i.font="bold 34px sans-serif",i.textBaseline="middle";let n=["STAR CIRCUIT","★","GP","☆"],r=10,a=0;for(;r<512;){let o=n[a++%n.length];i.fillStyle=a%2?"#ffd84d":"#7ad7ff",i.fillText(o,r,64/2+2),r+=i.measureText(o).width+30}return Ii(e)}function Ac(){let e=Ri(1024,128),i=e.getContext("2d"),n=i.createLinearGradient(0,0,0,128);return n.addColorStop(0,"#d8262e"),n.addColorStop(1,"#a01020"),i.fillStyle=n,i.fillRect(0,0,1024,128),i.strokeStyle="#ffd84d",i.lineWidth=8,i.strokeRect(6,6,1012,116),i.fillStyle="#fff",i.font="bold 72px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("★ スターサーキット GP ★",1024/2,128/2+4),Ii(e,!1)}function Bu(s,t){let n=Ri(64,64),r=n.getContext("2d");return r.fillStyle=`#${s.toString(16).padStart(6,"0")}`,r.fillRect(0,0,64,64),r.fillStyle="#fff",r.beginPath(),r.ellipse(24,28,6,8,0,0,7),r.fill(),r.beginPath(),r.ellipse(40,28,6,8,0,0,7),r.fill(),r.fillStyle="#1a1a24",r.beginPath(),r.arc(25,30,3,0,7),r.fill(),r.beginPath(),r.arc(39,30,3,0,7),r.fill(),r.strokeStyle="#1a1a24",r.lineWidth=2,r.beginPath(),r.arc(32,38,6,.3,Math.PI-.3),r.stroke(),r.fillStyle="rgba(255,120,120,0.45)",r.beginPath(),r.arc(16,36,4,0,7),r.fill(),r.beginPath(),r.arc(48,36,4,0,7),r.fill(),Ii(n,!1)}function zu(s,t,e,i,n){let r=n,a=e+r/2,o=i+r/2;switch(s.save(),s.translate(a,o),s.lineWidth=Math.max(2,r*.06),t){case"rocket":{s.fillStyle="#56c356",s.strokeStyle="#2c7a2c",s.beginPath(),s.moveTo(0,-r*.36),s.lineTo(r*.2,0),s.lineTo(r*.2,r*.28),s.lineTo(-r*.2,r*.28),s.lineTo(-r*.2,0),s.closePath(),s.fill(),s.stroke(),s.fillStyle="#ffd84d",s.beginPath(),s.moveTo(-r*.12,r*.28),s.lineTo(0,r*.42),s.lineTo(r*.12,r*.28),s.closePath(),s.fill();break}case"homing":{Ec(s,0,0,r*.4,r*.18,"#ff5252","#a31515"),s.fillStyle="#fff",s.beginPath(),s.arc(-r*.08,-r*.04,r*.05,0,7),s.fill(),s.beginPath(),s.arc(r*.08,-r*.04,r*.05,0,7),s.fill();break}case"oil":{s.fillStyle="#3a3a46",s.strokeStyle="#15151c",s.beginPath(),s.ellipse(0,r*.1,r*.36,r*.22,0,0,7),s.fill(),s.stroke(),s.fillStyle="#6f6f86",s.beginPath(),s.ellipse(-r*.1,r*.04,r*.1,r*.05,-.4,0,7),s.fill(),s.fillStyle="#3a3a46",s.beginPath(),s.moveTo(-r*.06,r*.05),s.lineTo(0,-r*.38),s.lineTo(r*.1,r*.02),s.closePath(),s.fill();break}case"boost":case"boost3":{let l=t==="boost3"?3:1;for(let c=0;c<l;c++){let u=(c-(l-1)/2)*r*.22,d=c===1?-r*.12:0;s.fillStyle="#ff9f43",s.strokeStyle="#c0571a",s.beginPath(),s.moveTo(u,d-r*.3),s.lineTo(u+r*.16,d+r*.1),s.lineTo(u+r*.04,d+r*.08),s.lineTo(u+r*.1,d+r*.32),s.lineTo(u-r*.12,d-r*.02),s.lineTo(u,d),s.closePath(),s.fill(),s.stroke()}break}case"shield":{s.fillStyle="#4dc3ff",s.strokeStyle="#1565a0",s.beginPath(),s.moveTo(0,-r*.36),s.quadraticCurveTo(r*.34,-r*.3,r*.3,r*.05),s.quadraticCurveTo(r*.26,r*.3,0,r*.4),s.quadraticCurveTo(-r*.26,r*.3,-r*.3,r*.05),s.quadraticCurveTo(-r*.34,-r*.3,0,-r*.36),s.closePath(),s.fill(),s.stroke(),Ec(s,0,0,r*.16,r*.07,"#fff",null);break}case"aura":{let l=s.createLinearGradient(-r*.4,0,r*.4,0);l.addColorStop(0,"#ff6b6b"),l.addColorStop(.25,"#ffd93d"),l.addColorStop(.5,"#6bcb77"),l.addColorStop(.75,"#4d96ff"),l.addColorStop(1,"#c79fff"),Ec(s,0,0,r*.42,r*.19,l,"rgba(255,255,255,0.9)");break}}s.restore()}function Ec(s,t,e,i,n,r,a){s.beginPath();for(let o=0;o<10;o++){let l=o%2?n:i,c=o/10*Math.PI*2-Math.PI/2,u=t+Math.cos(c)*l,d=e+Math.sin(c)*l;o?s.lineTo(u,d):s.moveTo(u,d)}s.closePath(),r&&(s.fillStyle=r,s.fill()),a&&(s.strokeStyle=a,s.stroke())}var Cc=2;function gs(s,t,e,i={}){let{y:n=.01,vScale:r=1/8,colorFn:a=null,uRepeat:o=1}=i,[l,c]=t,u=[],d=[],h=[],m=[],x=Math.ceil((c-l)/Cc);for(let p=0;p<=x;p++){let f=l+(c-l)*p/x,v=$t(f,s.L),[T,y]=e(v),A=s.posAt(v,T),b=s.posAt(v,y);u.push(A[0],n,A[1],b[0],n,b[1]);let I=(f-l)*r;if(d.push(0,I,o,I),a){let g=a(v);h.push(g,g,g,g,g,g)}if(p>0){let g=(p-1)*2;m.push(g,g+2,g+1,g+1,g+2,g+3)}}let S=new le;return S.setAttribute("position",new kt(u,3)),S.setAttribute("uv",new kt(d,2)),a&&S.setAttribute("color",new kt(h,3)),S.setIndex(m),S.computeVertexNormals(),S}function Rg(s){let[t,e]=s.caveRange,i=14;return n=>{if(n>t-i&&n<e+i){let r=Math.min(1,Math.max(0,(n-(t-i))/i)),a=Math.min(1,Math.max(0,(e+i-n)/i));return 1-Math.min(r,a)*.62}return 1}}function Gu(s){let t=new be,e=s.data,i=s.L,n=e.halfWidth,r=Rg(s),a=Pu(),o=new It({map:a,roughness:.92,metalness:.02,vertexColors:!0}),l=gs(s,[0,i],()=>[-n+e.curbWidth,n-e.curbWidth],{y:.02,vScale:1/9,colorFn:r}),c=new yt(l,o);c.receiveShadow=!0,t.add(c);let u=Lu();u.repeat.set(1,1);let d=new It({map:u,roughness:.7,vertexColors:!0});for(let y of[-1,1]){let A=gs(s,[0,i],()=>y===-1?[-n,-n+e.curbWidth]:[n-e.curbWidth,n],{y:.05,vScale:.4166666666666667,colorFn:r}),b=new yt(A,d);b.receiveShadow=!0,t.add(b)}let h=Oo(),m=new It({map:h,roughness:1,vertexColors:!0});for(let y of[-1,1]){let A=gs(s,[0,i],()=>y===-1?[-(n+e.grassWidth+6),-n]:[n,n+e.grassWidth+6],{y:0,vScale:.08333333333333333,uRepeat:2,colorFn:r}),b=new yt(A,m);b.receiveShadow=!0,t.add(b)}let x=Ou();x.repeat.set(8,1);let S=new It({map:x,roughness:.6}),p=new It({color:13421780,roughness:.8});for(let[y,A]of s.wallRanges)if(!s.inCave((y+A)/2))for(let b of[-1,1]){let I=[],g=[],w=[],R=Math.ceil((A-y)/Cc);for(let z=0;z<=R;z++){let G=$t(y+(A-y)*z/R,i),L=s.posAt(G,b*(n+.3));I.push(L[0],0,L[1],L[0],1.4,L[1]);let B=(y+(A-y)*z/R)/12;if(g.push(B,0,B,1),z>0){let F=(z-1)*2;b===1?w.push(F,F+2,F+1,F+1,F+2,F+3):w.push(F,F+1,F+2,F+1,F+3,F+2)}}let C=new le;C.setAttribute("position",new kt(I,3)),C.setAttribute("uv",new kt(g,2)),C.setIndex(w),C.computeVertexNormals();let P=new yt(C,S);P.castShadow=!0,P.receiveShadow=!0,t.add(P)}let f=Uu();f.repeat.set(4,1);let v=new It({map:f,roughness:1,side:ii});{let[y,A]=s.caveRange,b=10,I=[],g=[],w=[],R=Math.ceil((A-y)/(Cc*2));for(let L=0;L<=R;L++){let B=$t(y+(A-y)*L/R,i),F=s.posAt(B,0),q=s.spline.tangentAt(B),Z=q[1],tt=-q[0];for(let st=0;st<=b;st++){let ct=st/b*Math.PI,Et=Math.cos(ct)*(n+4),Wt=Math.sin(ct)*7.5;I.push(F[0]+Z*Et,Wt,F[1]+tt*Et),g.push(L/R*14,st/b)}if(L>0)for(let st=0;st<b;st++){let ct=(L-1)*(b+1)+st,Et=L*(b+1)+st;w.push(ct,Et,ct+1,ct+1,Et,Et+1)}}let C=new le;C.setAttribute("position",new kt(I,3)),C.setAttribute("uv",new kt(g,2)),C.setIndex(w),C.computeVertexNormals();let P=new yt(C,v);t.add(P);let z=[6742271,11567103,8388552],G=new Ys(1,0);for(let L=0;L<14;L++){let B=$t(y+(A-y)*(L+.5)/14,i),F=L%2?1:-1,q=s.posAt(B,F*(n+2.5)),Z=z[L%3],tt=new It({color:Z,emissive:Z,emissiveIntensity:1.6,roughness:.3}),st=new yt(G,tt),ct=.5+L%3*.3;if(st.scale.set(ct*.6,ct*1.4,ct*.6),st.position.set(q[0],.8+L%4*1.2,q[1]),st.rotation.y=L*1.3,t.add(st),L%5===0){let Et=new js(Z,30,26,1.8);Et.position.set(q[0],3,q[1]),t.add(Et)}}}{let y=Du();y.repeat.set(3,1);let A=gs(s,[i-2.2,i+2.2],()=>[-n+e.curbWidth,n-e.curbWidth],{y:.04,vScale:1/4.4,uRepeat:3}),b=new It({map:y,roughness:.85}),I=new yt(A,b);I.receiveShadow=!0,t.add(I)}let T=[];for(let y of s.dashPads){let A=gs(s,[y.s-y.halfLen,y.s+y.halfLen],()=>[y.d-y.halfW,y.d+y.halfW],{y:.06,vScale:.3333333333333333}),b=new It({color:16747008,emissive:16741120,emissiveIntensity:1.4,roughness:.4}),I=new yt(A,b);t.add(I),T.push(b);let g=gs(s,[y.s-y.halfLen*.6,y.s+y.halfLen*.6],R=>{let C=(R-(y.s-y.halfLen*.6))/(y.halfLen*1.2),P=(1-Math.abs(C-.5)*2)*y.halfW*.7+.2;return[y.d-P,y.d+P]},{y:.085,vScale:1/3}),w=new yt(g,new It({color:16773560,emissive:16769674,emissiveIntensity:2.2}));t.add(w)}for(let y of s.jumpPads){let A=y.halfLen*2+2,b=[],I=[],g=[],w=8;for(let z=0;z<=w;z++){let G=z/w,L=$t(y.s-y.halfLen-1+G*A,i),B=Math.sin(G*Math.PI*.5)*1.1,F=s.posAt(L,-n+e.curbWidth),q=s.posAt(L,n-e.curbWidth);if(b.push(F[0],B+.03,F[1],q[0],B+.03,q[1]),g.push(0,G*3,1,G*3),z>0){let Z=(z-1)*2;I.push(Z,Z+2,Z+1,Z+1,Z+2,Z+3)}}let R=new le;R.setAttribute("position",new kt(b,3)),R.setAttribute("uv",new kt(g,2)),R.setIndex(I),R.computeVertexNormals();let C=new It({color:5096447,emissive:2134237,emissiveIntensity:.9,roughness:.45}),P=new yt(R,C);P.castShadow=!0,t.add(P)}{let A=s.posAt(0,-(n+1.5)),b=s.posAt(0,n+1.5),I=new Ce(.5,.6,8,10),g=new It({color:15263984,roughness:.5});for(let P of[A,b]){let z=new yt(I,g);z.position.set(P[0],4,P[1]),z.castShadow=!0,t.add(z)}let w=Math.hypot(b[0]-A[0],b[1]-A[1]),R=new Fe(w+1.4,1.8,.5),C=new yt(R,[new It({color:10489888}),new It({color:10489888}),new It({color:10489888}),new It({color:10489888}),new It({map:Ac()}),new It({map:Ac()})]);C.position.set((A[0]+b[0])/2,7,(A[1]+b[1])/2),C.rotation.y=s.headingAt(0),C.castShadow=!0,t.add(C)}return{group:t,dashMats:T}}function Vu(s,t){let e=new be,i=s.data,n=s.L,r=i.halfWidth,a=[],o=new Ei(700,24,16),l=new ui({map:Nu(),side:Oe,fog:!1,depthWrite:!1}),c=new yt(o,l);c.renderOrder=-10,e.add(c);let u=new ui({color:16771248,fog:!1}),d=new yt(new Ei(26,16,16),u);d.position.set(-380,90,-480),e.add(d);let h=new En({map:Ig(),color:16767392,transparent:!0,opacity:.85,fog:!1,depthWrite:!1}),m=new ss(h);m.scale.set(220,220,1),m.position.copy(d.position),e.add(m);let x=Pg(),S=[];for(let w=0;w<18;w++){let R=new En({map:x,transparent:!0,opacity:.5+Math.random()*.35,fog:!1,depthWrite:!1}),C=new ss(R),P=Math.random()*Math.PI*2,z=320+Math.random()*280;C.position.set(Math.cos(P)*z,90+Math.random()*130,Math.sin(P)*z);let G=70+Math.random()*90;C.scale.set(G,G*.42,1),e.add(C),S.push({sprite:C,speed:1.2+Math.random()*2})}a.push(w=>{for(let R of S)R.sprite.position.x+=R.speed*w,R.sprite.position.x>650&&(R.sprite.position.x=-650)});let p=Oo();p.repeat.set(60,60);let f=new yt(new qs(650,48),new It({map:p,roughness:1,color:12114088}));f.rotation.x=-Math.PI/2,f.position.y=-.12,f.receiveShadow=!0,e.add(f);let v=new It({color:2846622,roughness:.25,metalness:.3,emissive:664888,emissiveIntensity:.4}),T=new yt(new wi(900,320,40,12),v);T.rotation.x=-Math.PI/2,T.position.set(120,-.04,-330),e.add(T);let y=T.geometry.attributes.position,A=y.array.slice(),b=0;a.push(w=>{b+=w;for(let R=0;R<y.count;R++){let C=A[R*3],P=A[R*3+1];y.array[R*3+2]=Math.sin(C*.05+b*1.4)*.5+Math.cos(P*.08+b)*.4}y.needsUpdate=!0});let I=new It({color:8029880,roughness:1,flatShading:!0}),g=new It({color:16054015,roughness:.9,flatShading:!0});for(let w=0;w<14;w++){let R=w/14*Math.PI*2+.3;if(R>Math.PI*1.15&&R<Math.PI*1.85)continue;let C=480+Math.sin(w*7)*60,P=90+w*37%70,z=new yt(new ei(70+w%3*30,P,7),I);z.position.set(Math.cos(R)*C,P/2-6,Math.sin(R)*C),z.rotation.y=w,e.add(z);let G=new yt(new ei((70+w%3*30)*.32,P*.3,7),g);G.position.set(z.position.x,P-P*.15-6,z.position.z),G.rotation.y=w,e.add(G)}{let w=new Ce(.25,.35,2,6),R=new ei(1.8,3.6,7),C=new It({color:8016432,roughness:1}),P=new It({color:3046735,roughness:1}),z=[];for(let F=0;F<n;F+=16)if(!(s.inCave(F)||s.hasWallAt(F)))for(let q of[-1,1]){if((F*7919|0)%3===0)continue;let Z=q*(r+i.grassWidth+5+F*13%9),tt=s.posAt(F,Z);z.push(tt)}let G=new rs(w,C,z.length),L=new rs(R,P,z.length),B=new Qt;z.forEach((F,q)=>{let Z=.8+q*31%10/14;B.makeScale(Z,Z,Z).setPosition(F[0],Z,F[1]),G.setMatrixAt(q,B),B.makeScale(Z,Z,Z).setPosition(F[0],Z*3.6,F[1]),L.setMatrixAt(q,B)}),G.castShadow=L.castShadow=!0,e.add(G,L)}{let w=new It({color:6055544,roughness:.9}),R=Fu();for(let[C,P]of i.crowdRanges){let z=C*n,G=P*n,L=Math.ceil((G-z)/10);for(let B=0;B<L;B++){let F=$t(z+(B+.5)*10,n);for(let q of[-1,1]){let Z=q*(r+4.5),tt=s.posAt(F,Z),st=s.headingAt(F),ct=new yt(new Fe(10,3.2,5),w);ct.position.set(tt[0]+Math.cos(st)*q*2.5,1.6,tt[1]-Math.sin(st)*q*2.5),ct.rotation.y=st,ct.castShadow=!0,e.add(ct);let Et=new yt(new wi(9.6,2.6),new ui({map:R}));Et.position.set(ct.position.x,3.5,ct.position.z),Et.rotation.y=st+(q===1?-1:1)*Math.PI/2,e.add(Et),a.push(((Wt,Dt)=>(K,dt)=>{Wt.position.y=3.5+Math.abs(Math.sin(dt*4+Dt))*.18})(Et,B*1.7+q))}}}}{let w=i.waterfallF*n,R=s.posAt(w,0),C=s.headingAt(w),P=new It({color:4037600,roughness:.15,metalness:.2,transparent:!0,opacity:.85,emissive:1722992,emissiveIntensity:.5}),z=new yt(new wi(120,14,30,4),P);z.rotation.x=-Math.PI/2,z.rotation.z=-C,z.position.set(R[0],-.03,R[1]),e.add(z);let G=z.geometry.attributes.position,L=G.array.slice();a.push((ct,Et)=>{for(let Wt=0;Wt<G.count;Wt++){let Dt=L[Wt*3];G.array[Wt*3+2]=Math.sin(Dt*.3+Et*3)*.18}G.needsUpdate=!0,P.emissiveIntensity=.5+Math.sin(Et*2.5)*.15});let B=new It({color:10476799,roughness:.1,transparent:!0,opacity:.8,emissive:7323903,emissiveIntensity:.8}),F=s.spline.tangentAt(w),q=F[1],Z=-F[0],tt=new yt(new wi(14,16),B);tt.position.set(R[0]+q*45,7.5,R[1]+Z*45),tt.rotation.y=C+Math.PI/2,e.add(tt);let st=new yt(new ei(26,24,8),new It({color:7044241,roughness:1,flatShading:!0}));st.position.set(R[0]+q*58,11,R[1]+Z*58),e.add(st),a.push((ct,Et)=>{B.map&&(B.map.offset.y-=ct*.8),tt.material.opacity=.72+Math.sin(Et*6)*.08})}return t.add(e),{group:e,update:(w,R)=>{for(let C of a)C(w,R)}}}function Ig(){let s=document.createElement("canvas");s.width=s.height=128;let t=s.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,235,200,0.5)"),e.addColorStop(1,"rgba(255,220,170,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);let i=new sn(s);return i.colorSpace=Se,i}function Pg(){let s=document.createElement("canvas");s.width=256,s.height=128;let t=s.getContext("2d");for(let i=0;i<26;i++){let n=30+Math.random()*196,r=50+Math.random()*40,a=14+Math.random()*26,o=t.createRadialGradient(n,r,0,n,r,a);o.addColorStop(0,"rgba(255,250,245,0.55)"),o.addColorStop(1,"rgba(255,250,245,0)"),t.fillStyle=o,t.fillRect(n-a,r-a,a*2,a*2)}let e=new sn(s);return e.colorSpace=Se,e}var Lg=22,Dg=1.1,Rc=[[.9,1.12,.7],[1.8,1.2,1.05],[2.7,1.28,1.45]],Bo=class{constructor(t,e,i){this.index=t,this.stats=e,this.tq=i,this.isPlayer=!1,this.x=0,this.z=0,this.y=0,this.heading=0,this.vx=0,this.vz=0,this.vy=0,this.s=0,this.d=0,this.surface=qe.ROAD,this.airborne=!1,this.hopping=!1,this.drifting=!1,this.driftDir=0,this.driftCharge=0,this.driftTier=-1,this.boostTime=0,this.boostMul=1,this.spinTime=0,this.auraTime=0,this.shieldOn=!1,this.stunTime=0,this.oilTime=0,this.item=null,this.itemStock=0,this.coins=0,this.lap=0,this.nextCp=0,this.progress=0,this.rank=t+1,this.finished=!1,this.finishTime=0,this.lapTimes=[],this.aiSpeedMul=1,this.events=null,this.visualYaw=0,this.wallHitCooldown=0,this.dashPadCooldown=0,this.jumpPadCooldown=0,this.prevSurface=qe.ROAD}emit(t,e={}){this.events&&this.events.push({type:t,kart:this,...e})}get maxSpeed(){let t=1+Math.min(this.coins,10)*.004;return this.stats.maxSpeed*t*this.aiSpeedMul}get currentSpeed(){return Math.sqrt(this.vx*this.vx+this.vz*this.vz)}get invincible(){return this.auraTime>0}placeOnGrid(t,e){let i=this.tq.posAt(t,e);this.x=i[0],this.z=i[1],this.y=0,this.heading=this.tq.headingAt(t),this.vx=this.vz=this.vy=0,this.s=t,this.d=e}step(t,e){this.spinTime>0&&(this.spinTime-=t,e={accel:0,brake:0,steer:0,drift:!1,hopPressed:!1}),this.stunTime>0&&(this.stunTime-=t,e={accel:0,brake:.5,steer:0,drift:!1,hopPressed:!1}),this.auraTime>0&&(this.auraTime-=t),this.wallHitCooldown>0&&(this.wallHitCooldown-=t),this.dashPadCooldown>0&&(this.dashPadCooldown-=t),this.jumpPadCooldown>0&&(this.jumpPadCooldown-=t);let i=this.y<=.001;if(this.airborne=!i,i&&e.hopPressed&&!this.drifting&&this.spinTime<=0&&(this.vy=4.6,this.hopping=!0,this.emit("hop")),this.hopping&&i&&this.vy<=0&&(e.drift&&Math.abs(e.steer)>.25&&(this.drifting=!0,this.driftDir=Math.sign(e.steer),this.driftCharge=0,this.driftTier=-1,this.emit("driftStart")),this.hopping=!1),this.drifting)if(!e.drift||this.currentSpeed<6||this.spinTime>0){if(this.driftTier>=0){let[,v,T]=Rc[this.driftTier];this.boost(v,T),this.emit("turboRelease",{tier:this.driftTier})}this.drifting=!1,this.driftCharge=0,this.driftTier=-1}else{let v=ue(e.steer*this.driftDir,0,1);this.driftCharge+=t*(.55+.75*v);let T=this.driftTier;for(let y=Rc.length-1;y>=0;y--)if(this.driftCharge>=Rc[y][0]){this.driftTier=y;break}this.driftTier>T&&this.emit("turboTier",{tier:this.driftTier})}let n=this.currentSpeed,r=ue(n/8,0,1)*(1-.35*ue(n/this.maxSpeed,0,1)),a=this.stats.steer*r;if(this.drifting){let v=(e.steer*this.driftDir+1)/2;this.heading+=this.driftDir*vr(.35,1.7,v)*this.stats.steer*r*t}else!this.airborne||this.hopping?this.heading+=e.steer*a*t:this.heading+=e.steer*a*.25*t;let o=Math.sin(this.heading),l=Math.cos(this.heading),c=this.vx*o+this.vz*l,u=this.vx-o*c,d=this.vz-l*c;this.boostTime>0&&(this.boostTime-=t,this.boostTime<=0&&(this.boostMul=1));let h=1;this.surface===qe.GRASS&&this.boostTime<=0&&!this.invincible?h=.55:this.surface===qe.CURB&&(h=.985);let m=this.invincible?1.15:1,x=this.maxSpeed*h*this.boostMul*m;if(!this.airborne){if(e.brake>0&&c>.5)c-=28*e.brake*t;else if(e.brake>0&&e.accel<=0)c=Math.max(c-10*t,-8);else{let y=x*ue(e.accel,0,1),A=c>y?1.8:this.stats.accel;c+=(y-c)*A*t}let v=7.5;this.drifting&&(v=2),this.surface===qe.GRASS&&(v*=.7),this.oilTime>0&&(v=.6,this.oilTime-=t);let T=Math.exp(-v*t);if(u*=T,d*=T,this.drifting){let y=l,A=-o,b=-this.driftDir*6.5*t;u+=y*b,d+=A*b}}this.vx=o*c+u,this.vz=l*c+d,this.vy-=Lg*t,this.y+=this.vy*t,this.y<=0&&(this.airborne&&this.vy<-6&&this.emit("land"),this.y=0,this.vy=Math.max(this.vy,0)),this.x+=this.vx*t,this.z+=this.vz*t;let S=this.tq.locate(this.x,this.z,this.s);this.s=S.s,this.d=S.d;let p=this.tq.limitAt(this.s);if(Math.abs(this.d)>p){let v=Math.sign(this.d)*p,T=this.tq.posAt(this.s,v);this.x=T[0],this.z=T[1];let y=this.tq.spline.tangentAt(this.s),A=Math.sign(this.d)*y[1],b=-Math.sign(this.d)*y[0],I=this.vx*A+this.vz*b;if(I>0&&(this.vx-=A*I*1.4,this.vz-=b*I*1.4,I>6&&this.wallHitCooldown<=0)){this.wallHitCooldown=.4;let g=this.tq.hasWallAt(this.s);this.vx*=g?.55:.75,this.vz*=g?.55:.75,this.emit("wallHit",{hard:g,vn:I})}this.d=v}if(this.surface=this.tq.surfaceAt(this.s,this.d),this.surface===qe.GRASS&&this.prevSurface!==qe.GRASS&&this.currentSpeed>8&&this.emit("grassEnter"),this.prevSurface=this.surface,!this.airborne){this.dashPadCooldown<=0&&this.tq.onDashPad(this.s,this.d)&&(this.boost(1.32,1.1),this.dashPadCooldown=1.2,this.emit("dashPad"));let v=this.jumpPadCooldown<=0?this.tq.onJumpPad(this.s):0;v>0&&this.currentSpeed>5&&(this.vy=v,this.y=.01,this.jumpPadCooldown=1.5,this.emit("jumpPad"))}let f=this.drifting?this.driftDir*.42:0;this.visualYaw+=(f-this.visualYaw)*Math.min(1,8*t),this.lastSteer=e.steer}boost(t,e){(t>=this.boostMul||this.boostTime<=0)&&(this.boostMul=Math.max(t,this.boostMul),this.boostTime=Math.max(this.boostTime,e)),this.emit("boost")}hit(t=1){return this.invincible?!1:this.shieldOn?(this.shieldOn=!1,this.emit("shieldBreak"),!1):(this.spinTime=1.1*t,this.vx*=.25,this.vz*=.25,this.drifting=!1,this.driftCharge=0,this.driftTier=-1,this.coins=Math.max(0,this.coins-3),this.emit("spin"),!0)}slip(){this.invincible||(this.oilTime=1.4,this.spinTime=Math.max(this.spinTime,.9),this.emit("slip"))}};function Hu(s,t){for(let e=0;e<s.length;e++)for(let i=e+1;i<s.length;i++){let n=s[e],r=s[i];if(Math.abs(n.y-r.y)>1.2)continue;let a=r.x-n.x,o=r.z-n.z,l=a*a+o*o,c=Dg*2;if(l>=c*c||l<1e-6)continue;let u=Math.sqrt(l),d=a/u,h=o/u,m=c-u,x=n.stats.weight,S=r.stats.weight,p=x+S;n.x-=d*m*(S/p),n.z-=h*m*(S/p),r.x+=d*m*(x/p),r.z+=h*m*(x/p);let f=(r.vx-n.vx)*d+(r.vz-n.vz)*h;if(f<0){let v=-f*.5;n.vx-=d*v*(S/p)*2,n.vz-=h*v*(S/p)*2,r.vx+=d*v*(x/p)*2,r.vz+=h*v*(x/p)*2,-f>4&&t&&t.push({type:"bump",kart:n,other:r})}n.invincible&&!r.invincible&&r.hit(.9),r.invincible&&!n.invincible&&n.hit(.9)}}var zo=class{constructor(t){this.char=t,this.root=new be,this.body=new be,this.root.add(this.body);let e=t.color,i=t.accent,n=new It({color:e,roughness:.35,metalness:.25}),r=new It({color:2303278,roughness:.8}),a=new It({color:14212584,roughness:.25,metalness:.8}),o=new yt(new Fe(1.3,.34,2.1),n);o.position.y=.42,o.castShadow=!0,this.body.add(o);let l=new yt(new Ce(.32,.62,.7,4),n);l.rotation.x=Math.PI/2,l.rotation.y=Math.PI/4,l.position.set(0,.42,1.25),l.castShadow=!0,this.body.add(l);for(let A of[-1,1]){let b=new yt(new Fe(.3,.3,1.1),r);b.position.set(A*.78,.4,-.1),this.body.add(b)}let c=new yt(new Fe(1.5,.08,.4),n);c.position.set(0,.95,-1.05),c.castShadow=!0,this.body.add(c);for(let A of[-1,1]){let b=new yt(new Fe(.08,.45,.12),r);b.position.set(A*.55,.72,-1.05),this.body.add(b)}this.exhaustPos=[];for(let A of[-1,1]){let b=new yt(new Ce(.09,.12,.4,8),a);b.rotation.x=Math.PI/2,b.position.set(A*.3,.45,-1.25),this.body.add(b),this.exhaustPos.push(new U(A*.3,.45,-1.45))}let u=new yt(new Ce(.04,.04,.5,6),r);u.position.set(0,.78,.55),u.rotation.x=.5,this.body.add(u),this.wheelRing=new yt(new Zs(.2,.04,8,16),r),this.wheelRing.position.set(0,.99,.43),this.wheelRing.rotation.x=1.1,this.body.add(this.wheelRing);let d=new Ce(.34,.34,.3,14),h=new It({color:1447452,roughness:.9}),m=new Ce(.16,.16,.32,8),x=new It({color:16767053,roughness:.4,metalness:.5});this.wheels=[],this.frontPivots=[];let S=[[-.74,.34,.78,!0],[.74,.34,.78,!0],[-.78,.36,-.85,!1],[.78,.36,-.85,!1]];for(let[A,b,I,g]of S){let w=new be;w.position.set(A,b,I);let R=new be,C=new yt(d,h);C.rotation.z=Math.PI/2,C.castShadow=!0;let P=new yt(m,x);P.rotation.z=Math.PI/2,R.add(C,P),w.add(R),this.body.add(w),this.wheels.push(R),g&&this.frontPivots.push(w)}let p=new It({color:e,roughness:.6}),f=new It({color:i,roughness:.6}),v=new be,T=new yt(new Ce(.26,.34,.55,10),f);T.position.y=.85,T.castShadow=!0,v.add(T);let y=new yt(new Ei(.34,16,12),new It({map:Bu(e,i),roughness:.55}));y.position.y=1.32,y.rotation.y=Math.PI,y.castShadow=!0,v.add(y),this.head=y;for(let A of[-1,1]){let b=new yt(new ei(.1,.24,6),p);b.position.set(A*.18,1.6,0),v.add(b)}for(let A of[-1,1]){let b=new yt(new Ce(.07,.07,.42,6),f);b.position.set(A*.3,.95,.2),b.rotation.x=-.9,b.rotation.z=A*-.4,v.add(b)}v.position.z=-.25,this.body.add(v),this.driver=v,this.shieldMesh=new yt(new Ei(1.6,20,14),new It({color:6737151,transparent:!0,opacity:.22,emissive:4500223,emissiveIntensity:.9,depthWrite:!1})),this.shieldMesh.position.y=.8,this.shieldMesh.visible=!1,this.body.add(this.shieldMesh),this.auraMesh=new yt(new Ei(1.7,20,14),new It({color:16777215,transparent:!0,opacity:.3,emissive:16738047,emissiveIntensity:1.8,depthWrite:!1})),this.auraMesh.position.y=.8,this.auraMesh.visible=!1,this.body.add(this.auraMesh),this._spinAngle=0,this._wheelAngle=0}sync(t,e,i){this.root.position.set(t.x,t.y,t.z),t.spinTime>0?this._spinAngle+=e*13:this._spinAngle*=Math.max(0,1-e*10),this.root.rotation.y=t.heading+t.visualYaw+this._spinAngle;let n=t.visualYaw*.35;this.body.rotation.z+=(n-this.body.rotation.z)*Math.min(1,10*e),this.body.rotation.x=t.airborne?-.12:0,this._wheelAngle+=t.currentSpeed*e/.34;for(let a of this.wheels)a.rotation.x=this._wheelAngle;let r=(t.lastSteer||0)*.35+t.visualYaw*.8;for(let a of this.frontPivots)a.rotation.y+=(r-a.rotation.y)*Math.min(1,12*e);if(this.driver.rotation.z=-this.body.rotation.z*1.8,this.shieldMesh.visible=t.shieldOn,t.shieldOn&&(this.shieldMesh.rotation.y=i*2),this.auraMesh.visible=t.invincible,t.invincible){let a=i*1.4%1;this.auraMesh.material.emissive.setHSL(a,1,.6),this.auraMesh.scale.setScalar(1+Math.sin(i*10)*.06)}}};var Xi=Object.freeze({driving:Object.freeze({minLookAhead:10,maxLookAhead:24,lookAheadPerSpeed:.8,maxLaneOffset:3,laneChangeSpeed:5,laneReturnSpeed:2,steerGain:2.4,minForwardSpeed:.75,stalledSeconds:2.5,wrongWayAngle:Math.PI*2/3,wrongWaySeconds:1.5,recoverySpeed:7}),opponent:Object.freeze({frontGap:12,oilGap:-7,laneAlignRange:30,gapResponseRange:40,minSpeedMul:.7,maxSpeedMul:1.2,oilFollowSeconds:5})});function Vo(s,t,e){let i=$t(s-t,e);return i>e/2&&(i-=e),i}function Ug(s,t,e){return s<t?Math.min(s+e,t):s>t?Math.max(s-e,t):s}var ko=class{constructor(t){this.tq=t,this.laneOffset=0,this.lastS=null,this.stalledTime=0,this.wrongWayTime=0,this.recoveryCount=0}update(t,e,i,n){let r={...i};if(n!=="racing"||e.finished)return this._resetDetection(e.s),r;let a=Xi.driving;r.accel=r.brake>0?0:1,Math.abs(i.steer)>.01?this.laneOffset=ue(this.laneOffset+i.steer*a.laneChangeSpeed*t,-a.maxLaneOffset,a.maxLaneOffset):this.laneOffset=Ug(this.laneOffset,0,a.laneReturnSpeed*t);let o=ue(e.currentSpeed*a.lookAheadPerSpeed,a.minLookAhead,a.maxLookAhead),l=e.s+o,c=this.tq.data.halfWidth-1,u=ue(this.tq.racingLineD(l)+this.laneOffset,-c,c),d=this.tq.posAt(l,u),h=Math.atan2(d[0]-e.x,d[1]-e.z);return r.steer=ue(ms(e.heading,h)*a.steerGain,-1,1),this._updateRecovery(t,e,i.brake<=0),r}_updateRecovery(t,e,i){let n=Xi.driving;this.lastS===null&&(this.lastS=e.s);let a=Vo(e.s,this.lastS,this.tq.L)/Math.max(t,1e-6);if(this.lastS=e.s,!i){this.stalledTime=0,this.wrongWayTime=0;return}a<n.minForwardSpeed?this.stalledTime+=t:this.stalledTime=Math.max(0,this.stalledTime-t*2);let o=this.tq.headingAt(e.s);Math.abs(ms(e.heading,o))>n.wrongWayAngle?this.wrongWayTime+=t:this.wrongWayTime=0,!e.airborne&&(this.stalledTime>=n.stalledSeconds||this.wrongWayTime>=n.wrongWaySeconds)&&this._recover(e)}_recover(t){let e=Xi.driving,i=t.s,n=this.tq.data.halfWidth-1,r=ue(this.tq.racingLineD(i)+this.laneOffset,-n,n);t.placeOnGrid(i,r),t.vx=Math.sin(t.heading)*e.recoverySpeed,t.vz=Math.cos(t.heading)*e.recoverySpeed,t.prevS=i,t.spinTime=0,t.stunTime=0,t.oilTime=0,t.hopping=!1,t.drifting=!1,t.driftCharge=0,t.driftTier=-1,this.recoveryCount++,this._resetDetection(i)}_resetDetection(t){this.lastS=t,this.stalledTime=0,this.wrongWayTime=0}},Go=class{constructor(t,e,i){this.tq=t,this.karts=e,this.playerIndex=i,this.target=null,this.activeItem=null,this.lastHeldItem=null,this.activeOilTrap=null,this.oilFollowTime=0}update(t,e,i){let n=this.karts[this.playerIndex];if(e!=="racing"||!n||n.finished)return this._clear(),null;let r=n.item;if(r&&r!==this.lastHeldItem&&(this.activeItem=r,this.target=null,this.activeOilTrap=null,this.oilFollowTime=0),!r&&this.lastHeldItem&&this._beginFollowThrough(this.lastHeldItem,n,i),r?this.activeItem=r:this._updateFollowThrough(t,n,i),this.lastHeldItem=r,!this.activeItem)return this.target=null,null;if(this._isValidTarget(this.target)||(this.target=this._nearestCpu(n)),!this.target)return null;let o=this.activeItem==="oil"?Xi.opponent.oilGap:Xi.opponent.frontGap;return{targetIndex:this.target.index,item:this.activeItem,playerKart:n,desiredGap:o,ignorePlayerOil:this.activeItem==="oil"}}_beginFollowThrough(t,e,i){if(t==="rocket"||t==="homing"){let n=i.projectiles.some(r=>r.owner===e&&r.type===t);this.activeItem=n?t:null}else t==="oil"?(this.activeOilTrap=[...i.traps].reverse().find(n=>n.owner===e)||null,this.oilFollowTime=this.activeOilTrap?Xi.opponent.oilFollowSeconds:0,this.activeItem=this.activeOilTrap?t:null):this.activeItem=null}_updateFollowThrough(t,e,i){this.activeItem==="rocket"||this.activeItem==="homing"?i.projectiles.some(r=>r.owner===e&&r.type===this.activeItem)||(this.activeItem=null):this.activeItem==="oil"&&(this.oilFollowTime=Math.max(0,this.oilFollowTime-t),(!(this.activeOilTrap&&i.traps.includes(this.activeOilTrap))||this.oilFollowTime<=0)&&(this.activeItem=null))}_nearestCpu(t){let e=null,i=1/0;for(let n=0;n<this.karts.length;n++){if(n===this.playerIndex)continue;let r=this.karts[n];if(r.finished)continue;let a=Math.abs(Vo(r.s,t.s,this.tq.L));a<i&&(e=r,i=a)}return e}_isValidTarget(t){return!!t&&t!==this.karts[this.playerIndex]&&!t.finished}_clear(){this.target=null,this.activeItem=null,this.lastHeldItem=null,this.activeOilTrap=null,this.oilFollowTime=0}};var Mr=class{constructor(t,e,i,n){this.kart=t,this.tq=e,this.p=i,this.rng=n,this.laneOffset=(n()-.5)*3.5,this.laneTimer=0,this.itemDelay=1+n()*3,this.driftIntent=0,this.input={accel:1,brake:0,steer:0,drift:!1,hopPressed:!1}}update(t,e,i){let n=this.kart,r=this.tq,a=this.input;if(a.hopPressed=!1,e.phase!=="racing"&&!n.finished)return a.accel=0,a.steer=0,a.drift=!1,a;if(this.laneTimer-=t,this.laneTimer<=0&&(this.laneTimer=4+this.rng()*5,this.laneOffset=(this.rng()-.5)*3.5),!n.finished&&e.playerProgress!==null){let y=e.playerProgress-n.progress;n.aiSpeedMul=1+ue(y/150,-.12,.12)*this.p.skill}else n.aiSpeedMul=1;let o=e.itemAssist,l=!!o&&o.targetIndex===n.index,c=null;if(l){let y=Xi.opponent;c=Vo(n.s,o.playerKart.s,r.L);let A=o.desiredGap-c;n.aiSpeedMul=ue(1+A/y.gapResponseRange,y.minSpeedMul,y.maxSpeedMul)}let u=ue(n.currentSpeed*.85,8,26),d=n.s+u,h=this.laneOffset*(1-this.p.skill*.5);if(l&&Math.abs(c)<=Xi.opponent.laneAlignRange&&(h=o.playerKart.d-r.racingLineD(d)),i){let y=i.findHazardAhead(n,16),A=y&&l&&o.ignorePlayerOil&&y.owner===o.playerKart;y&&!A&&(h+=y.d>n.d?-2.2:2.2)}let m=r.racingLineAt(d,h),x=Math.atan2(m[0]-n.x,m[1]-n.z),S=ms(n.heading,x);a.steer=ue(S*2.4,-1,1);let p=r.maxCurvatureAhead(n.s,n.currentSpeed*1.1),f=p>.001?Math.sqrt(9.5/p):999;a.accel=1,a.brake=0,n.currentSpeed>f*(1.15+this.p.skill*.25)&&(a.accel=0,a.brake=.7);let v=r.curvatureAt(n.s+10);return Math.abs(v)>.022&&n.currentSpeed>16&&this.p.skill>.86&&!n.drifting&&!n.airborne&&this.driftIntent<=0?(a.hopPressed=!0,a.drift=!0,a.steer=Math.sign(v),this.driftIntent=.4+this.rng()*.4):n.drifting?(a.drift=Math.abs(v)>.008||n.driftCharge<1,a.steer=ue(a.steer+Math.sign(n.driftDir)*.3,-1,1),a.drift||(this.driftIntent=1.5)):(a.drift=!1,this.driftIntent-=t),i&&n.item&&(this.itemDelay-=t,this.itemDelay<=0&&this.rng()<this.p.itemIQ?this._shouldUseItem(e,i)&&(i.useItem(n),this.itemDelay=1.5+this.rng()*3):this.itemDelay<=-4&&(i.useItem(n),this.itemDelay=2+this.rng()*4)),a}_shouldUseItem(t,e){let i=this.kart,n=i.item;if(n==="boost"||n==="boost3")return this.tq.maxCurvatureAhead(i.s,40)<.015;if(n==="shield"||n==="aura")return!0;if(n==="oil")return!!e.nearestRival(i,-14,0)||this.rng()<.1;if(n==="rocket"){let r=e.nearestRival(i,0,30);if(!r)return!1;let a=Math.atan2(r.x-i.x,r.z-i.z);return Math.abs(ms(i.heading,a))<.18}return n==="homing"?i.rank>1:!0}};var Sr=[{id:"mike",name:"ミケ",desc:"バランスがた",color:16740419,accent:16777215,maxSpeed:30,accel:1.25,steer:1.9,weight:1},{id:"momo",name:"モモ",desc:"かそくがた",color:16748487,accent:16773365,maxSpeed:29.2,accel:1.65,steer:2.1,weight:.85},{id:"goro",name:"ゴロー",desc:"さいこうそく",color:9268835,accent:14142664,maxSpeed:31.4,accel:.95,steer:1.6,weight:1.35},{id:"kero",name:"ケロ",desc:"まがりやすい",color:6732650,accent:15267305,maxSpeed:29.5,accel:1.4,steer:2.3,weight:.9},{id:"pen",name:"ペン",desc:"バランスがた",color:4367861,accent:1058880,maxSpeed:30.2,accel:1.2,steer:1.85,weight:1.05},{id:"kon",name:"コン",desc:"スピードがた",color:16754470,accent:16774112,maxSpeed:30.9,accel:1.05,steer:1.75,weight:1.1},{id:"rin",name:"リンリン",desc:"パワーがた",color:15527921,accent:2503224,maxSpeed:30.6,accel:1,steer:1.7,weight:1.3},{id:"piyo",name:"ピヨ",desc:"かそくがた",color:16772696,accent:16748288,maxSpeed:29,accel:1.7,steer:2.2,weight:.8}],Ic=[{skill:.92,aggression:.5,itemIQ:.8},{skill:.88,aggression:.3,itemIQ:.7},{skill:.95,aggression:.8,itemIQ:.85},{skill:.85,aggression:.4,itemIQ:.6},{skill:.9,aggression:.5,itemIQ:.75},{skill:.97,aggression:.7,itemIQ:.9},{skill:.93,aggression:.9,itemIQ:.8},{skill:.83,aggression:.2,itemIQ:.55}];var Wu=4,Xu=3.6,qu=3.2,Ho=class{constructor(t,e,i,n){this.tq=t,this.karts=e,this.playerIndex=i,this.events=n,this.laps=t.data.laps,this.L=t.L,this.phase="intro",this.introTime=0,this.countdown=Xu,this.countdownStep=-1,this.raceTime=0,this.finishedCount=0;for(let r=0;r<e.length;r++){let a=e[r],o=Math.floor(r/2),l=r%2===0?-1:1,c=$t(this.L-8-o*qu,this.L);a.placeOnGrid(c,l*2.6),a.lap=0,a.nextCp=0,a.progress=-(8+o*qu),a.lapStartTime=0,a.wrongWayTime=0,a.prevS=a.s,a.events=n,a.startBoostWindow=!1}}emit(t,e={}){this.events.push({type:t,...e})}startIntro(){this.phase="intro"}skipToCountdown(){this.phase==="intro"&&(this.phase="countdown",this.emit("countdownStart"))}update(t,e=null){if(this.phase==="intro"){this.introTime+=t;return}if(this.phase==="countdown"){let n=this.countdown;this.countdown-=t;let r=Math.floor(Xu-this.countdown);if(r!==this.countdownStep&&r<=2&&(this.countdownStep=r,this.emit("signal",{count:3-r})),this.countdown<=0){this.phase="racing",this.raceTime=0,this.emit("go");for(let a of this.karts)a.startBoostCharge&&a.startBoostCharge<.5?(a.boost(1.3,1),this.emit("rocketStart",{kart:a})):a.startBoostCharge&&a.startBoostCharge>1.2&&(a.spinTime=.8,this.emit("burnout",{kart:a}))}else for(let a=0;a<this.karts.length;a++){let o=this.karts[a],l=.1+a*53%50/100;(a===this.playerIndex?e?e.accel:0:this.countdown<l?1:0)>.5?o.startBoostCharge=(o.startBoostCharge||0)+t:o.startBoostCharge=0}return}this.raceTime+=t;for(let n of this.karts)n.finished||this._updateLap(n,t);[...this.karts].sort((n,r)=>n.finished&&r.finished?n.finishTime-r.finishTime:n.finished?-1:r.finished?1:r.progress-n.progress).forEach((n,r)=>{n.rank=r+1})}_updateLap(t,e){let i=this.L,n=t.prevS,r=t.s,a=t.nextCp*i/Wu,o;if(t.nextCp===0?o=n>i*.75&&r<i*.25:o=n<a&&r>=a&&r-n<i/2,o){if(t.nextCp===0)if(t.lap===0)t.lap=1,t.lapStartTime=this.raceTime;else{let u=this.raceTime-t.lapStartTime;t.lapTimes.push(u),t.lapStartTime=this.raceTime,t.lap++,t.lap>this.laps?(t.finished=!0,t.finishTime=this.raceTime,this.finishedCount++,this.emit("kartFinish",{kart:t}),this.karts.indexOf(t)===this.playerIndex&&(this.phase="finished",this.emit("playerFinish",{kart:t}))):this.emit("lap",{kart:t,lap:t.lap,lapTime:u,final:t.lap===this.laps})}t.nextCp=(t.nextCp+1)%Wu}let l;t.lap===0?l=r>i*.75?r-i:r:l=(t.lap-1)*i+r,t.progress=l;let c=r-n;c>i/2&&(c-=i),c<-i/2&&(c+=i),c/e<-4&&t.currentSpeed>4?(t.wrongWayTime+=e,t.wrongWayTime>1.2&&this.karts.indexOf(t)===this.playerIndex&&(this.emit("wrongWay",{kart:t}),t.wrongWayTime=0)):c/e>1&&(t.wrongWayTime=0),t.prevS=r}get player(){return this.playerIndex>=0?this.karts[this.playerIndex]:null}get playerProgress(){return this.player?this.player.progress:null}displayLap(t){return ue(t.lap,1,this.laps)}allFinished(){return this.finishedCount>=this.karts.length}standings(){return[...this.karts].sort((t,e)=>t.rank-e.rank)}};var Ng=6,Wo=class{constructor(t,e){this.camera=t,this.tq=e,this.pos=new U,this.look=new U,this.baseFov=70,this.mode="intro",this.introT=0,this._initialized=!1}startIntro(){this.mode="intro",this.introT=0}startChase(){this.mode="chase"}update(t,e){if(this.mode==="intro"){this.introT+=t;let x=Math.min(this.introT/Ng,1),S=this.tq.L,p=$t(S*.92+x*S*.16,S),f=this.tq.posAt(p,-14+x*10),v=this.tq.posAt($t(p+25,S),0),T=10-x*6;return this.pos.set(f[0],T,f[1]),this.look.set(v[0],1.5,v[1]),this.camera.position.copy(this.pos),this.camera.lookAt(this.look),this.camera.fov=62,this.camera.updateProjectionMatrix(),x>=1?(this.mode="chase",this._initialized=!1,!0):!1}let i=7.6,n=3.3,r=Math.sin(e.heading),a=Math.cos(e.heading),o=e.x-r*i,l=e.z-a*i,c=e.y+n;this._initialized?(this.pos.x=mn(this.pos.x,o,5.5,t),this.pos.y=mn(this.pos.y,c,6.5,t),this.pos.z=mn(this.pos.z,l,5.5,t)):(this.pos.set(o,c,l),this._initialized=!0);let u=e.x+r*6,d=e.z+a*6,h=e.y+1.2;this.look.x=mn(this.look.x,u,9,t),this.look.y=mn(this.look.y,h,9,t),this.look.z=mn(this.look.z,d,9,t),this.camera.position.copy(this.pos),this.camera.lookAt(this.look);let m=this.baseFov+(e.boostTime>0?13:0)+Math.min(e.currentSpeed/8,4);return this.camera.fov=mn(this.camera.fov,m,5,t),this.camera.updateProjectionMatrix(),!1}};var Fg=["rocket","homing","oil","boost","boost3","shield","aura"],Pc={rocket:{name:"ロケットだん"},homing:{name:"ホーミングスター"},oil:{name:"スリックオイル"},boost:{name:"ブースター"},boost3:{name:"トリプルブースター"},shield:{name:"シールド"},aura:{name:"レインボーオーラ"}},Og=[[30,5,35,10,0,20,0],[28,12,25,15,5,15,0],[22,18,15,20,10,12,3],[18,20,10,22,15,10,5],[12,20,8,22,20,8,10],[8,18,5,20,28,6,15],[5,15,3,18,32,4,23],[3,10,2,15,35,3,32]],Bg=5,zg=1.3,Xo=class{constructor(t,e,i,n){this.tq=t,this.karts=e,this.rng=i,this.events=n,this.boxes=[];let r=t.L;for(let a of t.data.itemRows){let o=a.f*r;for(let l=0;l<a.count;l++){let c=(l-(a.count-1)/2)*(t.data.halfWidth*2-3)/a.count,u=t.posAt(o,c);this.boxes.push({x:u[0],z:u[1],s:o,d:c,timer:0})}}this.coins=[];for(let a of t.data.coinGroups)for(let o=0;o<a.n;o++){let l=$t((a.f0+o*.008)*r,r),c=t.posAt(l,a.d);this.coins.push({x:c[0],z:c[1],timer:0})}this.projectiles=[],this.traps=[],this.roulettes=new Map}emit(t,e={}){this.events.push({type:t,...e})}update(t){for(let e of this.boxes)e.timer>0&&(e.timer-=t);for(let e of this.coins)e.timer>0&&(e.timer-=t);for(let[e,i]of[...this.roulettes]){let n=i-t;n<=0?(e.item=this._draw(e.rank),e.item==="boost3"&&(e.itemStock=3),this.roulettes.delete(e),this.emit("rouletteStop",{kart:e})):this.roulettes.set(e,n)}for(let e of this.karts)if(!e.finished){if(!e.item&&!this.roulettes.has(e)){for(let i of this.boxes)if(!(i.timer>0)&&yr(e.x,e.z,i.x,i.z)<1.8&&e.y<1.5){i.timer=Bg,this.roulettes.set(e,zg),this.emit("itemBoxGet",{kart:e,x:i.x,z:i.z});break}}for(let i of this.coins)i.timer>0||yr(e.x,e.z,i.x,i.z)<1.4&&e.y<1.5&&(i.timer=12,e.coins++,this.emit("coinGet",{kart:e,x:i.x,z:i.z}))}for(let e=this.projectiles.length-1;e>=0;e--){let i=this.projectiles[e];if(i.life-=t,i.life<=0){this._removeProjectile(e);continue}if(i.type==="rocket"){i.x+=Math.sin(i.heading)*i.speed*t,i.z+=Math.cos(i.heading)*i.speed*t;let n=this.tq.locate(i.x,i.z,i.s);i.s=n.s,i.d=n.d;let r=this.tq.limitAt(i.s);if(Math.abs(i.d)>r){if(i.bounces<=0){this._explode(e);continue}i.bounces--;let a=this.tq.spline.tangentAt(i.s),o=Math.sign(i.d)*a[1],l=-Math.sign(i.d)*a[0],c=Math.sin(i.heading),u=Math.cos(i.heading),d=c*o+u*l;i.heading=Math.atan2(c-2*d*o,u-2*d*l);let h=this.tq.posAt(i.s,Math.sign(i.d)*(r-.3));i.x=h[0],i.z=h[1],this.emit("rocketBounce",{x:i.x,z:i.z})}}else if(i.type==="homing"){let n=this.karts[i.targetIndex];if(!n||n.finished){this._explode(e);continue}i.s=$t(i.s+i.speed*t,this.tq.L);let r=$t(n.s-i.s,this.tq.L);r>this.tq.L/2&&(r-=this.tq.L),Math.abs(r)<18&&(i.d+=ue(n.d-i.d,-8*t,8*t));let a=this.tq.posAt(i.s,i.d);i.x=a[0],i.z=a[1],i.heading=this.tq.headingAt(i.s)}for(let n of this.karts)if(!(n===i.owner&&i.age<.5)&&!(n.y>1.5||n.finished)&&yr(n.x,n.z,i.x,i.z)<1.5){n.hit(1),this.emit("projectileHit",{kart:n,x:i.x,z:i.z}),this._removeProjectile(e);break}this.projectiles[e]===i&&(i.age=(i.age||0)+t)}for(let e=this.traps.length-1;e>=0;e--){let i=this.traps[e];for(let n of this.karts)if(!(n.y>1||n.finished)&&!(n===i.owner&&i.age<1)&&yr(n.x,n.z,i.x,i.z)<1.4){n.slip(),this.emit("trapHit",{kart:n,x:i.x,z:i.z}),this.traps.splice(e,1);break}this.traps[e]===i&&(i.age=(i.age||0)+t)}}_removeProjectile(t){this.projectiles.splice(t,1)}_explode(t){let e=this.projectiles[t];this.emit("projectileEnd",{x:e.x,z:e.z}),this._removeProjectile(t)}_draw(t){let e=Og[ue(t-1,0,7)],i=0;for(let r of e)i+=r;let n=this.rng()*i;for(let r=0;r<e.length;r++)if(n-=e[r],n<=0)return Fg[r];return"boost"}useItem(t){let e=t.item;if(!e)return!1;if(e==="rocket")this.projectiles.push({type:"rocket",x:t.x+Math.sin(t.heading)*2,z:t.z+Math.cos(t.heading)*2,heading:t.heading,speed:46,life:6,bounces:2,owner:t,s:t.s,d:t.d,age:0}),this.emit("shoot",{kart:t,item:e});else if(e==="homing"){let i=null;for(let n of this.karts)n.rank===t.rank-1&&(i=n);if(i||(i=this.karts.find(n=>n!==t&&!n.finished)||null),!i)return t.item=null,!1;this.projectiles.push({type:"homing",x:t.x,z:t.z,heading:t.heading,speed:52,life:9,owner:t,targetIndex:this.karts.indexOf(i),s:t.s,d:t.d,age:0}),this.emit("shoot",{kart:t,item:e})}else if(e==="oil"){let i=t.x-Math.sin(t.heading)*2.2,n=t.z-Math.cos(t.heading)*2.2;this.traps.push({x:i,z:n,owner:t,age:0}),this.emit("dropTrap",{kart:t,x:i,z:n})}else if(e==="boost")t.boost(1.35,1.25),this.emit("useBoost",{kart:t});else if(e==="boost3"){if(t.boost(1.35,1.25),t.itemStock--,this.emit("useBoost",{kart:t}),t.itemStock>0)return!0}else e==="shield"?(t.shieldOn=!0,this.emit("useShield",{kart:t})):e==="aura"&&(t.auraTime=8,this.emit("useAura",{kart:t}));return t.item=null,t.itemStock=0,!0}findHazardAhead(t,e){let i=this.tq.L;for(let n of this.traps){let r=this.tq.locate(n.x,n.z,t.s);if($t(r.s-t.s,i)<e&&Math.abs(r.d-t.d)<2.5)return{d:r.d,owner:n.owner}}return null}nearestRival(t,e,i){let n=this.tq.L,r=null,a=1/0;for(let o of this.karts){if(o===t||o.finished)continue;let l=$t(o.s-t.s,n);if(l>n/2&&(l-=n),l>=Math.min(e,i)&&l<=Math.max(e,i)){let c=Math.abs(l);c<a&&(a=c,r=o)}}return r}};var ai=2200,kg=`
  attribute float size;
  attribute vec4 pcolor;   // rgb + alpha
  varying vec4 vColor;
  void main() {
    vColor = pcolor;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * (180.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`,Gg=`
  varying vec4 vColor;
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    float a = smoothstep(0.5, 0.12, d) * vColor.a;
    if (a < 0.01) discard;
    gl_FragColor = vec4(vColor.rgb, a);
  }
`,qo=class{constructor(t){this.positions=new Float32Array(ai*3),this.colors=new Float32Array(ai*4),this.sizes=new Float32Array(ai),this.vel=new Float32Array(ai*3),this.life=new Float32Array(ai),this.maxLife=new Float32Array(ai),this.gravity=new Float32Array(ai),this.drag=new Float32Array(ai),this.baseSize=new Float32Array(ai),this.baseAlpha=new Float32Array(ai),this.cursor=0;let e=new le;e.setAttribute("position",new Ee(this.positions,3)),e.setAttribute("pcolor",new Ee(this.colors,4)),e.setAttribute("size",new Ee(this.sizes,1));let i=new me({vertexShader:kg,fragmentShader:Gg,transparent:!0,depthWrite:!1,blending:An});this.points=new Hs(e,i),this.points.frustumCulled=!1,t.add(this.points),this._tmpColor=new Rt}spawn(t){let e=this.cursor;this.cursor=(this.cursor+1)%ai;let i=e*3,n=e*4;this.positions[i]=t.x,this.positions[i+1]=t.y,this.positions[i+2]=t.z,this.vel[i]=t.vx||0,this.vel[i+1]=t.vy||0,this.vel[i+2]=t.vz||0,this.life[e]=this.maxLife[e]=t.life||.6,this.gravity[e]=t.gravity??0,this.drag[e]=t.drag??1,this.baseSize[e]=t.size||.5,this.baseAlpha[e]=t.alpha??1,this._tmpColor.set(t.color??16777215),this.colors[n]=this._tmpColor.r,this.colors[n+1]=this._tmpColor.g,this.colors[n+2]=this._tmpColor.b,this.colors[n+3]=this.baseAlpha[e]}update(t){let{positions:e,vel:i,life:n,maxLife:r,colors:a,sizes:o}=this;for(let l=0;l<ai;l++){if(n[l]<=0){o[l]=0,a[l*4+3]=0;continue}n[l]-=t;let c=l*3;i[c+1]-=this.gravity[l]*t;let u=Math.pow(this.drag[l],t*60);i[c]*=u,i[c+1]*=u,i[c+2]*=u,e[c]+=i[c]*t,e[c+1]+=i[c+1]*t,e[c+2]+=i[c+2]*t,e[c+1]<.02&&this.gravity[l]>0&&(e[c+1]=.02,i[c+1]*=-.3);let d=Math.max(0,n[l]/r[l]);o[l]=this.baseSize[l]*(.4+.6*d),a[l*4+3]=this.baseAlpha[l]*d}this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.pcolor.needsUpdate=!0,this.points.geometry.attributes.size.needsUpdate=!0}driftSparks(t,e,i){let n=[5614335,16752688,14509823],r=e>=0?n[e]:13621480,a=Math.ceil(i*(e>=0?160:70)),o=-1;for(let l=0;l<a;l++){let c=Math.random()<.5?-.8:.8,u=Math.sin(t.heading),d=Math.cos(t.heading),h=d,m=-u;this.spawn({x:t.x+u*o+h*c,y:.15,z:t.z+d*o+m*c,vx:-u*3+h*c*(2+Math.random()*3)+(Math.random()-.5),vy:1.5+Math.random()*2.5,vz:-d*3+m*c*(2+Math.random()*3)+(Math.random()-.5),gravity:9,drag:.96,life:.3+Math.random()*.25,size:e>=0?.5:.32,color:r})}}boostFlame(t,e){let i=Math.ceil(e*220),n=Math.sin(t.heading),r=Math.cos(t.heading),a=r,o=-n;for(let l=0;l<i;l++){let c=Math.random()<.5?-.3:.3;this.spawn({x:t.x-n*1.4+a*c,y:t.y+.45,z:t.z-r*1.4+o*c,vx:-n*(8+Math.random()*4)+(Math.random()-.5)*2,vy:(Math.random()-.2)*1.5,vz:-r*(8+Math.random()*4)+(Math.random()-.5)*2,drag:.9,life:.18+Math.random()*.15,size:.7+Math.random()*.4,color:Math.random()<.5?16748592:16765024})}}dirt(t,e){let i=Math.ceil(e*60*Math.min(1,t.currentSpeed/15)),n=Math.sin(t.heading),r=Math.cos(t.heading);for(let a=0;a<i;a++)this.spawn({x:t.x-n+(Math.random()-.5),y:.1,z:t.z-r+(Math.random()-.5),vx:-n*4+(Math.random()-.5)*3,vy:2+Math.random()*2.5,vz:-r*4+(Math.random()-.5)*3,gravity:10,drag:.97,life:.4+Math.random()*.3,size:.45,color:7049038,alpha:.8})}wallSparks(t,e,i){for(let n=0;n<14;n++)this.spawn({x:t,y:e+.4,z:i,vx:(Math.random()-.5)*8,vy:1+Math.random()*4,vz:(Math.random()-.5)*8,gravity:12,drag:.95,life:.3+Math.random()*.3,size:.35,color:16767072})}explosion(t,e,i){for(let n=0;n<40;n++){let r=Math.random()*Math.PI*2,a=3+Math.random()*8;this.spawn({x:t,y:e+.5,z:i,vx:Math.cos(r)*a,vy:2+Math.random()*6,vz:Math.sin(r)*a,gravity:9,drag:.94,life:.5+Math.random()*.4,size:.7+Math.random()*.5,color:[16740400,16760896,16728160][n%3]})}}coinSparkle(t,e,i){for(let n=0;n<10;n++)this.spawn({x:t+(Math.random()-.5),y:e+.6+Math.random()*.6,z:i+(Math.random()-.5),vx:(Math.random()-.5)*2,vy:1.5+Math.random()*2,vz:(Math.random()-.5)*2,gravity:2,drag:.96,life:.45,size:.4,color:16769120})}itemBoxBurst(t,e,i){for(let n=0;n<16;n++){let r=Math.random(),a=new Rt().setHSL(r,.9,.65);this.spawn({x:t,y:e+.8,z:i,vx:(Math.random()-.5)*5,vy:1+Math.random()*4,vz:(Math.random()-.5)*5,gravity:5,drag:.95,life:.5,size:.5,color:a.getHex()})}}auraTrail(t,e,i){let n=Math.ceil(e*90);for(let r=0;r<n;r++){let a=(i*1.5+Math.random()*.3)%1,o=new Rt().setHSL(a,1,.62);this.spawn({x:t.x+(Math.random()-.5)*1.4,y:t.y+.3+Math.random()*1.2,z:t.z+(Math.random()-.5)*1.4,vx:Math.random()-.5,vy:.8+Math.random(),vz:Math.random()-.5,drag:.96,life:.5,size:.55,color:o.getHex()})}}confetti(t,e,i,n=80){for(let r=0;r<n;r++){let a=Math.random(),o=new Rt().setHSL(a,.95,.6);this.spawn({x:t+(Math.random()-.5)*10,y:e+6+Math.random()*4,z:i+(Math.random()-.5)*10,vx:(Math.random()-.5)*4,vy:-1-Math.random()*2,vz:(Math.random()-.5)*4,gravity:1.2,drag:.99,life:2.5+Math.random()*1.5,size:.5,color:o.getHex()})}}splash(t,e){for(let i=0;i<24;i++)this.spawn({x:t+(Math.random()-.5)*3,y:.2,z:e+(Math.random()-.5)*3,vx:(Math.random()-.5)*3,vy:3+Math.random()*4,vz:(Math.random()-.5)*3,gravity:10,drag:.97,life:.6,size:.5,color:10476799,alpha:.8})}};var xs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var je=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Vg=new ln(-1,1,1,-1,0,1),Lc=class extends le{constructor(){super(),this.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new kt([0,2,0,0,2,0],2))}},Hg=new Lc,gn=class{constructor(t){this._mesh=new yt(Hg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Vg)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Yo=class extends je{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof me?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Wi.clone(t.uniforms),this.material=new me({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new gn(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var br=class extends je{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}},Zo=class extends je{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var $o=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new bt);this._width=i.width,this._height=i.height,e=new Ae(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ge}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Yo(xs),this.copyPass.material.blending=ni,this.timer=new tr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}br!==void 0&&(a instanceof br?i=!0:a instanceof Zo&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new bt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Jo=class extends je{constructor(t,e,i=null,n=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Rt}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=n}};var Yu={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Rt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var _s=class s extends je{constructor(t,e=1,i,n){super(),this.strength=e,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new bt(t.x,t.y):new bt(256,256),this.clearColor=new Rt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ae(r,a,{type:Ge}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Ae(r,a,{type:Ge});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let h=new Ae(r,a,{type:Ge});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),a=Math.round(a/2)}let o=Yu;this.highPassUniforms=Wi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new me({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new bt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Wi.clone(xs.uniforms),this.blendMaterial=new me({uniforms:this.copyUniforms,vertexShader:xs.vertexShader,fragmentShader:xs.fragmentShader,premultipliedAlpha:!0,blending:An,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Rt,this._oldClearAlpha=1,this._basic=new ui,this._fsQuad=new gn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new bt(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],i=t/3;for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(i*i))/i);return new me({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new bt(.5,.5)},direction:{value:new bt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new me({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};_s.BlurDirectionX=new bt(1,0);_s.BlurDirectionY=new bt(0,1);var Tr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ko=class extends je{constructor(){super(),this.isOutputPass=!0,this.uniforms=Wi.clone(Tr.uniforms),this.material=new os({name:Tr.name,uniforms:this.uniforms,vertexShader:Tr.vertexShader,fragmentShader:Tr.fragmentShader}),this._fsQuad=new gn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ht.getTransfer(this._outputColorSpace)===jt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ir?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===nr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===sr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Cn?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ar?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===or?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===rr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var jo=class{constructor(t){this.renderer=new Lo({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.toneMapping=Cn,this.renderer.toneMappingExposure=1.05,this.renderer.outputColorSpace=Se,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Oa,this.scene=new Fs,this.scene.fog=new Ns(13150432,90,420),this.camera=new Ue(70,1,.1,1500),this.hemi=new Js(10466559,6983514,.75),this.scene.add(this.hemi),this.sunLight=new Qs(16767400,2.2),this.sunLight.position.set(-60,80,-90),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(2048,2048),this.sunLight.shadow.camera.near=10,this.sunLight.shadow.camera.far=320;let e=55;this.sunLight.shadow.camera.left=-e,this.sunLight.shadow.camera.right=e,this.sunLight.shadow.camera.top=e,this.sunLight.shadow.camera.bottom=-e,this.sunLight.shadow.bias=-8e-4,this.scene.add(this.sunLight),this.scene.add(this.sunLight.target),this.composer=new $o(this.renderer),this.composer.addPass(new Jo(this.scene,this.camera)),this.bloom=new _s(new bt(256,256),.55,.5,.85),this.composer.addPass(this.bloom),this.composer.addPass(new Ko),this.qualityLevel=0,this._slowFrames=0,this.maxPixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),window.addEventListener("resize",()=>this.resize())}resize(){let t=window.innerWidth,e=window.innerHeight,i=this.qualityLevel===0?this.maxPixelRatio:this.qualityLevel===1?Math.min(this.maxPixelRatio,1.4):1;this.renderer.setPixelRatio(i),this.renderer.setSize(t,e),this.composer.setPixelRatio(i),this.composer.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}followShadow(t,e){this.sunLight.position.set(t-60,80,e-90),this.sunLight.target.position.set(t,0,e)}watchPerformance(t){t>40?this._slowFrames++:this._slowFrames=Math.max(0,this._slowFrames-2),this._slowFrames>90&&this.qualityLevel<2&&(this.qualityLevel++,this._slowFrames=0,this.qualityLevel===1?(this.sunLight.shadow.mapSize.set(1024,1024),this.sunLight.shadow.map?.dispose(),this.sunLight.shadow.map=null):this.qualityLevel===2&&(this.bloom.enabled=!1,this.renderer.shadowMap.enabled=!1),this.resize())}render(){this.composer.render()}};var Qo=class{constructor(){this.keys=new Set,this.touch={left:!1,right:!1,drift:!1,item:!1,brake:!1,accel:!0,active:!1},this._prevDrift=!1,this._prevItem=!1,this._anyKeyHandlers=[],window.addEventListener("keydown",t=>{if(!t.repeat){this.keys.add(t.code);for(let e of this._anyKeyHandlers)e(t.code);["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(t.code)&&t.preventDefault()}}),window.addEventListener("keyup",t=>this.keys.delete(t.code)),window.addEventListener("blur",()=>this.keys.clear())}onAnyKey(t){this._anyKeyHandlers.push(t)}key(...t){return t.some(e=>this.keys.has(e))}getState(){let t=this.touch,e=this.key("ArrowUp","KeyW")||t.active&&t.accel?1:0,i=this.key("ArrowDown","KeyS")||t.brake?1:0,n=0;(this.key("ArrowLeft","KeyA")||t.left)&&(n-=1),(this.key("ArrowRight","KeyD")||t.right)&&(n+=1);let r=this.key("Space","ShiftLeft","ShiftRight")||t.drift,a=this.key("ControlLeft","ControlRight","KeyZ")||t.item,o={accel:e,brake:i,steer:n,drift:r,hopPressed:r&&!this._prevDrift,useItem:a&&!this._prevItem,pause:this.key("Escape","KeyP")};return this._prevDrift=r,this._prevItem=a,o}};var Zu="kartracer_save_v1";function $u(){try{return JSON.parse(localStorage.getItem(Zu))||{}}catch{return{}}}function Dc(s){try{localStorage.setItem(Zu,JSON.stringify(s))}catch{}}function Ju(s,{bestLap:t,totalTime:e,won:i}){let n={bestLapImproved:!1,bestTotalImproved:!1};return t!=null&&(s.bestLap==null||t<s.bestLap)&&(s.bestLap=t,n.bestLapImproved=!0),e!=null&&(s.bestTotal==null||e<s.bestTotal)&&(s.bestTotal=e,n.bestTotalImproved=!0),s.races=(s.races||0)+1,i&&(s.wins=(s.wins||0)+1),Dc(s),n}function Dn(s){if(s==null||!isFinite(s))return`--'--"--`;let t=Math.floor(s/60),e=Math.floor(s%60),i=Math.floor(s*100%100);return`${t}'${String(e).padStart(2,"0")}"${String(i).padStart(2,"0")}`}var tl=class{constructor(){this.ctx=null,this.master=null,this.sfxBus=null,this.musicBus=null,this.muted=!1}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.85,this.master.connect(this.ctx.destination),this.sfxBus=this.ctx.createGain(),this.sfxBus.gain.value=.9,this.sfxBus.connect(this.master),this.musicBus=this.ctx.createGain(),this.musicBus.gain.value=.5,this.musicBus.connect(this.master))}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.85,this.ctx.currentTime,.05)}get now(){return this.ctx?this.ctx.currentTime:0}tone(t,e,{type:i="square",vol:n=.2,freqEnd:r=null,when:a=0,bus:o=null}={}){if(!this.ctx)return;let l=this.now+a,c=this.ctx.createOscillator(),u=this.ctx.createGain();c.type=i,c.frequency.setValueAtTime(t,l),r&&c.frequency.exponentialRampToValueAtTime(Math.max(r,1),l+e),u.gain.setValueAtTime(0,l),u.gain.linearRampToValueAtTime(n,l+.008),u.gain.exponentialRampToValueAtTime(.001,l+e),c.connect(u),u.connect(o||this.sfxBus),c.start(l),c.stop(l+e+.05)}noise(t,{vol:e=.25,when:i=0,filterFreq:n=2e3,filterType:r="lowpass",slideTo:a=null}={}){if(!this.ctx)return;let o=this.now+i,l=Math.ceil(this.ctx.sampleRate*t),c=this.ctx.createBuffer(1,l,this.ctx.sampleRate),u=c.getChannelData(0);for(let x=0;x<l;x++)u[x]=Math.random()*2-1;let d=this.ctx.createBufferSource();d.buffer=c;let h=this.ctx.createBiquadFilter();h.type=r,h.frequency.setValueAtTime(n,o),a&&h.frequency.exponentialRampToValueAtTime(a,o+t);let m=this.ctx.createGain();m.gain.setValueAtTime(e,o),m.gain.exponentialRampToValueAtTime(.001,o+t),d.connect(h),h.connect(m),m.connect(this.sfxBus),d.start(o)}countdownBeep(){this.tone(440,.22,{type:"square",vol:.25})}goBeep(){this.tone(880,.5,{type:"square",vol:.3}),this.tone(1108.7,.5,{type:"square",vol:.2,when:.02})}hop(){this.tone(300,.12,{type:"sine",vol:.22,freqEnd:520})}land(){this.noise(.1,{vol:.15,filterFreq:600})}driftStart(){this.noise(.18,{vol:.12,filterFreq:3200,filterType:"bandpass"})}turboTier(t){let e=[600,800,1050][t]||600;this.tone(e,.12,{type:"square",vol:.18,freqEnd:e*1.5})}turboRelease(t){this.tone(220,.4,{type:"sawtooth",vol:.26,freqEnd:660+t*160}),this.noise(.3,{vol:.18,filterFreq:1500,slideTo:4500})}dashPad(){this.tone(330,.35,{type:"sawtooth",vol:.25,freqEnd:990})}jumpPad(){this.tone(260,.45,{type:"triangle",vol:.3,freqEnd:1040})}itemBox(){this.tone(660,.1,{type:"triangle",vol:.22}),this.tone(880,.12,{type:"triangle",vol:.22,when:.07})}rouletteTick(){this.tone(740,.04,{type:"square",vol:.07})}rouletteStop(){this.tone(587,.1,{type:"square",vol:.2}),this.tone(880,.18,{type:"square",vol:.2,when:.08})}shoot(){this.noise(.2,{vol:.25,filterFreq:1200,slideTo:300}),this.tone(200,.18,{type:"square",vol:.2,freqEnd:90})}explosion(){this.noise(.55,{vol:.4,filterFreq:900,slideTo:120}),this.tone(90,.5,{type:"sine",vol:.4,freqEnd:35})}spin(){this.tone(500,.5,{type:"sawtooth",vol:.2,freqEnd:120})}slip(){this.noise(.4,{vol:.2,filterFreq:2e3,slideTo:500})}coin(){this.tone(987.8,.07,{type:"square",vol:.16}),this.tone(1318.5,.25,{type:"square",vol:.16,when:.07})}wallHit(){this.noise(.15,{vol:.3,filterFreq:700}),this.tone(120,.15,{type:"square",vol:.2,freqEnd:60})}bump(){this.tone(160,.1,{type:"square",vol:.15,freqEnd:90})}shieldUp(){this.tone(440,.3,{type:"sine",vol:.2,freqEnd:880})}shieldBreak(){this.noise(.25,{vol:.25,filterFreq:3e3,slideTo:800})}auraStart(){for(let t=0;t<6;t++)this.tone(523*Math.pow(1.122,t),.12,{type:"square",vol:.14,when:t*.05})}wrongWay(){this.tone(330,.18,{type:"square",vol:.22}),this.tone(247,.25,{type:"square",vol:.22,when:.18})}lapJingle(){[659.3,784,987.8].forEach((e,i)=>this.tone(e,.14,{type:"square",vol:.2,when:i*.09}))}finalLapJingle(){[659.3,659.3,784,880,1046.5].forEach((e,i)=>this.tone(e,.13,{type:"square",vol:.22,when:i*.1}))}fanfare(t){let e=t?[[523,0],[659,.12],[784,.24],[1046,.4],[784,.6],[1046,.72]]:[[392,0],[330,.2],[294,.4],[262,.62]];for(let[i,n]of e)this.tone(i,.3,{type:"square",vol:.22,when:n}),this.tone(i/2,.3,{type:"triangle",vol:.18,when:n})}uiSelect(){this.tone(720,.07,{type:"square",vol:.12})}uiConfirm(){this.tone(587,.09,{type:"square",vol:.16}),this.tone(880,.16,{type:"square",vol:.16,when:.07})}};var el=class{constructor(t){this.audio=t,this.started=!1}start(){let t=this.audio;if(!t.ctx||this.started)return;this.started=!0;let e=t.ctx;this.gain=e.createGain(),this.gain.gain.value=0,this.filter=e.createBiquadFilter(),this.filter.type="lowpass",this.filter.frequency.value=900,this.filter.connect(this.gain),this.gain.connect(t.sfxBus),this.osc1=e.createOscillator(),this.osc1.type="sawtooth",this.osc2=e.createOscillator(),this.osc2.type="square",this.osc2.detune.value=14;let i=e.createGain();i.gain.value=.5,this.osc1.connect(this.filter),this.osc2.connect(i),i.connect(this.filter),this.lfo=e.createOscillator(),this.lfo.frequency.value=13,this.lfoGain=e.createGain(),this.lfoGain.gain.value=5,this.lfo.connect(this.lfoGain),this.lfoGain.connect(this.osc1.frequency),this.lfoGain.connect(this.osc2.frequency),this.boostOsc=e.createOscillator(),this.boostOsc.type="triangle",this.boostGain=e.createGain(),this.boostGain.gain.value=0,this.boostOsc.connect(this.boostGain),this.boostGain.connect(this.gain);let n=Math.ceil(e.sampleRate*1),r=e.createBuffer(1,n,e.sampleRate),a=r.getChannelData(0);for(let o=0;o<n;o++)a[o]=Math.random()*2-1;this.skidSrc=e.createBufferSource(),this.skidSrc.buffer=r,this.skidSrc.loop=!0,this.skidFilter=e.createBiquadFilter(),this.skidFilter.type="bandpass",this.skidFilter.frequency.value=2400,this.skidFilter.Q.value=1.2,this.skidGain=e.createGain(),this.skidGain.gain.value=0,this.skidSrc.connect(this.skidFilter),this.skidFilter.connect(this.skidGain),this.skidGain.connect(t.sfxBus),this.osc1.start(),this.osc2.start(),this.lfo.start(),this.boostOsc.start(),this.skidSrc.start()}update(t,e,i,n){if(!this.started)return;let r=this.audio.now,a=52+170*t+(e?40:0);this.osc1.frequency.setTargetAtTime(a,r,.06),this.osc2.frequency.setTargetAtTime(a*.995,r,.06),this.filter.frequency.setTargetAtTime(500+2400*t,r,.08);let o=.05+.13*Math.min(1,t*1.3+n*.25);this.gain.gain.setTargetAtTime(o,r,.08),this.boostOsc.frequency.setTargetAtTime(a*2,r,.05),this.boostGain.gain.setTargetAtTime(e?.07:0,r,.05),this.skidGain.gain.setTargetAtTime(i&&t>.25?.085:0,r,.05)}stop(){if(!this.started)return;let t=this.audio.now;this.gain.gain.setTargetAtTime(0,t,.05),this.skidGain.gain.setTargetAtTime(0,t,.05);for(let e of[this.osc1,this.osc2,this.lfo,this.boostOsc,this.skidSrc])try{e.stop(t+.3)}catch{}this.started=!1}};var Uc=s=>440*Math.pow(2,(s-69)/12),Wg={bpm:150,lead:[76,0,76,0,0,76,0,72,76,0,79,0,0,0,67,0,72,0,0,67,0,0,64,0,0,69,0,71,0,70,69,0,67,76,79,81,0,77,79,0,76,0,72,74,71,0,0,0,72,0,0,67,0,0,64,0,0,69,0,71,0,70,69,0],bass:[48,48,55,48,50,50,57,50,52,52,59,52,48,48,55,48,45,45,52,45,41,41,48,41,43,43,50,43,48,48,55,48],drums:"k.h.s.h.k.h.s.hh".repeat(4).split("")},Xg={bpm:96,lead:[72,0,76,0,79,0,84,0,83,0,79,0,76,0,74,0,72,0,76,0,79,0,83,0,84,0,0,0,0,0,0,0],bass:[48,0,52,0,53,0,55,0,48,0,52,0,43,0,48,0],drums:"h...h...h...h...".repeat(2).split("")},qg={bpm:120,lead:[79,0,79,0,81,0,83,0,84,0,0,0,83,81,79,0,77,0,77,0,79,0,81,0,79,0,0,0,0,0,0,0],bass:[48,48,55,55,53,53,55,55,41,41,48,48,43,43,48,48],drums:"k.h.s.h.".repeat(4).split("")},Yg={race:Wg,title:Xg,result:qg},il=class{constructor(t){this.audio=t,this.song=null,this.step=0,this.nextTime=0,this.tempoMul=1,this.timer=null}play(t,e=1){this.stop(),this.audio.ctx&&(this.song=Yg[t],this.songName=t,this.tempoMul=e,this.step=0,this.nextTime=this.audio.now+.1,this.timer=setInterval(()=>this._schedule(),80))}setTempo(t){this.tempoMul=t}stop(){this.timer&&(clearInterval(this.timer),this.timer=null),this.song=null}_schedule(){if(!this.song||!this.audio.ctx)return;let t=this.audio,e=60/(this.song.bpm*this.tempoMul)/4;for(;this.nextTime<t.now+.25;){let i=this.step%this.song.lead.length,n=this.nextTime-t.now,r=this.song.lead[i];if(r&&(t.tone(Uc(r),e*1.8,{type:"square",vol:.085,when:n,bus:t.musicBus}),t.tone(Uc(r)*2.01,e*1.2,{type:"square",vol:.02,when:n,bus:t.musicBus})),i%2===0){let o=this.song.bass[i/2%this.song.bass.length];o&&t.tone(Uc(o),e*2.4,{type:"triangle",vol:.14,when:n,bus:t.musicBus})}let a=this.song.drums[i%this.song.drums.length];a==="k"&&t.tone(150,.12,{type:"sine",vol:.3,freqEnd:40,when:n,bus:t.musicBus}),a==="s"&&t.noise(.09,{vol:.1,filterFreq:4e3,filterType:"highpass",when:n}),a==="h"&&t.noise(.03,{vol:.045,filterFreq:8e3,filterType:"highpass",when:n}),this.nextTime+=e,this.step++}}};var Zg=["1st","2nd","3rd","4th","5th","6th","7th","8th"],nl=class{constructor(t){this.audio=t,this.el={hud:document.getElementById("hud"),rank:document.getElementById("hud-rank"),lap:document.getElementById("hud-lap"),time:document.getElementById("hud-time"),lapTime:document.getElementById("hud-laptime"),coins:document.getElementById("hud-coins"),speed:document.getElementById("hud-speed"),item:document.getElementById("hud-item"),announce:document.getElementById("hud-announce"),countdown:document.getElementById("hud-countdown"),title:document.getElementById("title-screen"),result:document.getElementById("result-screen"),pause:document.getElementById("pause-overlay"),rotate:document.getElementById("rotate-hint")},this.itemCanvas=this.el.item.querySelector("canvas"),this.itemCtx=this.itemCanvas.getContext("2d"),this.roulette=null,this._announceTimer=null,this._lastShownItem=void 0}showRace(){this.el.hud.style.display="block",this.el.title.style.display="none",this.el.result.style.display="none"}update(t,e,i){let n=this.el;n.rank.textContent=Zg[e.rank-1]||"",n.rank.className="rank r"+e.rank,n.lap.textContent=`LAP ${t.displayLap(e)}/${t.laps}`,n.time.textContent=Dn(t.raceTime);let r=t.phase==="racing"||t.phase==="finished"?t.raceTime-e.lapStartTime:0;n.lapTime.textContent=Dn(e.finished?e.lapTimes.at(-1)??0:r),n.coins.textContent=`×${e.coins}`,n.speed.textContent=Math.round(e.currentSpeed*3.4),this.roulette?(this.roulette.t-=i,this.roulette.tick-=i,this.roulette.tick<=0&&(this.roulette.tick=.07,this.roulette.current=(this.roulette.current+1)%this.roulette.items.length,this._drawItem(this.roulette.items[this.roulette.current]),this.audio.rouletteTick())):e.item!==this._lastShownItem&&(this._drawItem(e.item),this._lastShownItem=e.item),e.item==="boost3"&&e.itemStock>0&&!this.roulette&&(this._drawItem("boost3",e.itemStock),this._lastShownItem=e.item)}startRoulette(){let t=Object.keys(Pc);this.roulette={t:1.3,tick:0,current:0,items:t},this.el.item.classList.add("rolling")}stopRoulette(t){this.roulette=null,this.el.item.classList.remove("rolling"),this._drawItem(t),this._lastShownItem=t,this.audio.rouletteStop(),t&&this.announce(Pc[t].name,1.2)}_drawItem(t,e=0){let i=this.itemCanvas,n=this.itemCtx;n.clearRect(0,0,i.width,i.height),t&&(zu(n,t,4,4,i.width-8),t==="boost3"&&e>0&&(n.fillStyle="#fff",n.font="bold 18px sans-serif",n.textAlign="right",n.fillText(`×${e}`,i.width-4,i.height-6)))}showSignal(t){let e=this.el.countdown;e.style.display="flex",e.innerHTML="";for(let i=0;i<3;i++){let n=document.createElement("div");n.className="signal"+(i>=t-1?" lit":""),e.appendChild(n)}t===0&&(e.innerHTML='<div class="go">GO!</div>',setTimeout(()=>{e.style.display="none"},900))}announce(t,e=1.6,i=""){let n=this.el.announce;n.textContent=t,n.className="show "+i,clearTimeout(this._announceTimer),this._announceTimer=setTimeout(()=>{n.className=""},e*1e3)}showTitle(t,e){let i=this.el;i.hud.style.display="none",i.result.style.display="none",i.title.style.display="flex";let n=t.lastChar??0,r=t.bestLap!=null?`ベストラップ ${Dn(t.bestLap)} / ベストタイム ${Dn(t.bestTotal)}`:"きろくはまだないよ";i.title.innerHTML=`
      <div class="title-logo">
        <div class="title-star">★</div>
        <h1>スターサーキット<span>GP</span></h1>
        <p class="subtitle">3Dカートレース</p>
      </div>
      <div class="char-select">
        <p class="cs-label">キャラクターをえらんでね</p>
        <div class="char-grid">
          ${Sr.map((l,c)=>`
            <button class="char-btn" data-i="${c}" style="--c:#${l.color.toString(16).padStart(6,"0")}">
              <span class="char-face"></span>
              <span class="char-name">${l.name}</span>
              <span class="char-desc">${l.desc}</span>
            </button>`).join("")}
        </div>
      </div>
      <button id="start-btn">スタート!</button>
      <p class="best-record">${r}</p>
      <p class="controls-hint">じどうですすむよ / ←→ハンドル / スペース=ドリフト / Z=アイテム<br>スマホ: がめんのボタンでそうさ</p>
      <button id="mute-btn" class="mute">${t.muted?"🔇":"🔊"}</button>
    `;let a=[...i.title.querySelectorAll(".char-btn")],o=()=>a.forEach((l,c)=>l.classList.toggle("selected",c===n));o(),a.forEach(l=>l.addEventListener("click",()=>{n=+l.dataset.i,o(),this.audio.unlock(),this.audio.uiSelect()})),i.title.querySelector("#start-btn").addEventListener("click",()=>{this.audio.unlock(),this.audio.uiConfirm(),e(n)}),i.title.querySelector("#mute-btn").addEventListener("click",l=>{this.audio.unlock(),t.muted=!t.muted,this.audio.setMuted(t.muted),l.target.textContent=t.muted?"🔇":"🔊"})}showResult(t,e,i,n,r){let a=this.el;a.result.style.display="flex";let l=t.standings().map(h=>`
      <tr class="${h===e?"me":""}">
        <td class="pos">${h.rank}</td>
        <td><span class="dot" style="background:#${h.stats.color.toString(16).padStart(6,"0")}"></span>${h.stats.name}</td>
        <td class="t">${h.finished?Dn(h.finishTime):"---"}</td>
      </tr>`).join(""),c=e.lapTimes.length?Math.min(...e.lapTimes):null,u=e.lapTimes.map((h,m)=>`
      <div class="lap-row${h===c?" best":""}">LAP${m+1}  ${Dn(h)}</div>`).join(""),d=e.rank===1?"🏆 ゆうしょう!!":e.rank<=3?`${e.rank}い! すごい!`:`${e.rank}い… つぎはがんばろう!`;a.result.innerHTML=`
      <h2>${d}</h2>
      <div class="result-cols">
        <table class="standings"><tbody>${l}</tbody></table>
        <div class="laps">
          <h3>ラップタイム</h3>
          ${u}
          ${i.bestLapImproved?'<div class="new-record">★ベストラップこうしん!</div>':""}
          ${i.bestTotalImproved?'<div class="new-record">★ベストタイムこうしん!</div>':""}
        </div>
      </div>
      <div class="result-btns">
        <button id="retry-btn">もういちど</button>
        <button id="totitle-btn">タイトルへ</button>
      </div>
    `,a.result.querySelector("#retry-btn").addEventListener("click",()=>{this.audio.uiConfirm(),n()}),a.result.querySelector("#totitle-btn").addEventListener("click",()=>{this.audio.uiConfirm(),r()})}hideResult(){this.el.result.style.display="none"}setPause(t){this.el.pause.style.display=t?"flex":"none"}};var sl=class{constructor(t,e,i){this.tq=t,this.karts=e,this.playerIndex=i,this.canvas=document.getElementById("minimap"),this.ctx=this.canvas.getContext("2d");let n=t.spline,r=1/0,a=-1/0,o=1/0,l=-1/0;for(let p=0;p<n.samples;p+=8)r=Math.min(r,n.lutX[p]),a=Math.max(a,n.lutX[p]),o=Math.min(o,n.lutZ[p]),l=Math.max(l,n.lutZ[p]);let c=14,u=this.canvas.width,d=this.canvas.height,h=Math.min((u-c*2)/(a-r),(d-c*2)/(l-o));this.toMap=(p,f)=>[c+(p-r)*h+(u-c*2-(a-r)*h)/2,d-(c+(f-o)*h+(d-c*2-(l-o)*h)/2)],this.bg=document.createElement("canvas"),this.bg.width=u,this.bg.height=d;let m=this.bg.getContext("2d");m.lineCap=m.lineJoin="round",m.beginPath();for(let p=0;p<=n.samples;p+=8){let f=p%n.samples,[v,T]=this.toMap(n.lutX[f],n.lutZ[f]);p===0?m.moveTo(v,T):m.lineTo(v,T)}m.closePath(),m.strokeStyle="rgba(0,0,0,0.55)",m.lineWidth=9,m.stroke(),m.strokeStyle="rgba(255,255,255,0.85)",m.lineWidth=5.5,m.stroke();let[x,S]=this.toMap(n.lutX[0],n.lutZ[0]);m.fillStyle="#ffd84d",m.beginPath(),m.arc(x,S,4,0,7),m.fill()}draw(){let t=this.ctx;t.clearRect(0,0,this.canvas.width,this.canvas.height),t.drawImage(this.bg,0,0);for(let e=0;e<this.karts.length;e++)e!==this.playerIndex&&this._dot(this.karts[e],4,!1);this.playerIndex>=0&&this._dot(this.karts[this.playerIndex],6,!0)}_dot(t,e,i){let[n,r]=this.toMap(t.x,t.z),a=this.ctx;a.beginPath(),a.arc(n,r,e,0,7),a.fillStyle=`#${t.stats.color.toString(16).padStart(6,"0")}`,a.fill(),a.lineWidth=i?2.5:1.2,a.strokeStyle=i?"#fff":"rgba(0,0,0,0.6)",a.stroke()}};var rl=class{constructor(t){this.input=t,this.root=document.getElementById("touch-ui"),this.visible=!1;let e=()=>this.show();window.addEventListener("touchstart",e,{once:!0,passive:!0}),navigator.maxTouchPoints>0&&/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)&&this.show()}show(){if(this.visible)return;this.visible=!0,this.input.touch.active=!0;let t=this.root;t.innerHTML=`
      <div class="tbtn steer" id="tbtn-left">◀</div>
      <div class="tbtn steer" id="tbtn-right">▶</div>
      <div class="tbtn action drift" id="tbtn-drift">ドリフト</div>
      <div class="tbtn action item" id="tbtn-item">アイテム</div>
      <div class="tbtn small brake" id="tbtn-brake">ブレーキ</div>
    `,t.style.display="block";let e=(i,n)=>{let r=document.getElementById(i),a=l=>{l.preventDefault(),this.input.touch[n]=!0,r.classList.add("on")},o=l=>{l.preventDefault(),this.input.touch[n]=!1,r.classList.remove("on")};r.addEventListener("pointerdown",a),r.addEventListener("pointerup",o),r.addEventListener("pointercancel",o),r.addEventListener("pointerleave",o),r.addEventListener("contextmenu",l=>l.preventDefault())};e("tbtn-left","left"),e("tbtn-right","right"),e("tbtn-drift","drift"),e("tbtn-item","item"),e("tbtn-brake","brake")}};var Nc=1/120,$g={accel:0,brake:0,steer:0,drift:!1,hopPressed:!1,useItem:!1,pause:!1},Fc=class{constructor(){this.save=$u(),this.audio=new tl,this.audio.muted=!!this.save.muted,this.bgm=new il(this.audio),this.input=new Qo,this.touchUI=new rl(this.input),this.hud=new nl(this.audio),this.gfx=new jo(document.getElementById("game-canvas")),this.spline=new No(wc.controlPoints),this.tq=new Fo(this.spline,wc);let{group:t,dashMats:e}=Gu(this.tq);this.gfx.scene.add(t),this.dashMats=e,this.scenery=Vu(this.tq,this.gfx.scene),this.particles=new qo(this.gfx.scene),this.chaseCam=new Wo(this.gfx.camera,this.tq),this.raceGroup=null,this.state="title",this.time=0,this.accumulator=0,this.lastFrame=performance.now(),this._prevPause=!1,this.paused=!1;let i=()=>this.audio.unlock();window.addEventListener("pointerdown",i,{once:!0}),this.input.onAnyKey(i),this.showTitle(),requestAnimationFrame(n=>this.frame(n))}showTitle(){this.state="title",this.disposeRace(),this.bgm.stop(),this.hud.showTitle(this.save,t=>{this.save.lastChar=t,Dc(this.save),this.startRace(t)}),this.titleCamAngle=0,setTimeout(()=>{this.state==="title"&&this.bgm.play("title")},300)}startRace(t){this.disposeRace(),this.state="race",this.events=[],this.rng=Iu(Date.now()%1e5|1);let e=[t];for(let a=0;a<Sr.length;a++)a!==t&&e.push(a);this.karts=e.map((a,o)=>{let l=new Bo(o,Sr[a],this.tq);return l.charIndex=a,l}),this.playerIndex=0,this.karts[0].isPlayer=!0,this.race=new Ho(this.tq,this.karts,this.playerIndex,this.events),this.items=new Xo(this.tq,this.karts,this.rng,this.events),this.cpus=this.karts.map((a,o)=>o===this.playerIndex?null:new Mr(a,this.tq,Ic[a.charIndex],this.rng)),this.drivingAssist=new ko(this.tq),this.itemProximityAssist=new Go(this.tq,this.karts,this.playerIndex),this.playerAutoCpu=null,this.raceGroup=new be,this.gfx.scene.add(this.raceGroup),this.models=this.karts.map(a=>{let o=new zo(a.stats);return this.raceGroup.add(o.root),o});let i=new Fe(1.5,1.5,1.5);this.boxMeshes=this.items.boxes.map(a=>{let o=new It({color:16777215,transparent:!0,opacity:.55,emissive:8930559,emissiveIntensity:1,roughness:.1,metalness:.3}),l=new yt(i,o);return l.position.set(a.x,1.1,a.z),this.raceGroup.add(l),l});let n=new Ce(.5,.5,.12,18),r=new It({color:16767053,emissive:13408512,emissiveIntensity:.7,roughness:.25,metalness:.85});this.coinMeshes=this.items.coins.map(a=>{let o=new yt(n,r);return o.position.set(a.x,.9,a.z),o.rotation.z=Math.PI/2,this.raceGroup.add(o),o}),this.projMeshes=new Map,this.trapMeshes=new Map,this.rocketGeo=new ei(.45,1.3,10),this.rocketMat=new It({color:5686102,emissive:2914860,emissiveIntensity:.8}),this.homingMat=new It({color:16732754,emissive:11145489,emissiveIntensity:1.2}),this.oilGeo=new Ce(1.1,1.3,.1,14),this.oilMat=new It({color:2236972,roughness:.2,metalness:.4}),this.minimap=new sl(this.tq,this.karts,this.playerIndex),this.engineSound=new el(this.audio),this.hud.showRace(),this.chaseCam.startIntro(),this.race.startIntro(),this.resultShown=!1,this.bgm.stop(),this.audio.unlock()}disposeRace(){this.raceGroup&&(this.gfx.scene.remove(this.raceGroup),this.raceGroup.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(e=>e.dispose())}),this.raceGroup=null),this.engineSound&&this.engineSound.stop(),this.karts=null,this.race=null,this.drivingAssist=null,this.itemProximityAssist=null}frame(t){requestAnimationFrame(a=>this.frame(a));let e=t-this.lastFrame,i=Math.min(e/1e3,.1);if(this.lastFrame=t,this.gfx.watchPerformance(e),this.time+=i,this.state==="title"){this.updateTitleCamera(i),this.scenery.update(i,this.time),this.gfx.render();return}if(this.state!=="race")return;let n=this.input.getState();if(n.pause&&!this._prevPause&&this.race.phase==="racing"&&(this.paused=!this.paused,this.hud.setPause(this.paused),this.paused&&this.engineSound.stop()),this._prevPause=n.pause,this.paused){this.gfx.render();return}if(this.race.phase==="intro"){(this.chaseCam.update(i,this.karts[this.playerIndex])||n.useItem||n.hopPressed)&&(this.race.skipToCountdown(),this.chaseCam.startChase(),this.bgm.play("race")),this.syncVisuals(i),this.scenery.update(i,this.time),this.consumeEvents(),this.gfx.render();return}for(this.accumulator=Math.min(this.accumulator+i,.12);this.accumulator>=Nc;)this.stepPhysics(Nc,n),this.accumulator-=Nc;this.chaseCam.update(i,this.karts[this.playerIndex]),this.syncVisuals(i),this.scenery.update(i,this.time),this.particles.update(i),this.consumeEvents();let r=this.karts[this.playerIndex];this.hud.update(this.race,r,i),this.minimap.draw(),this.audio.ctx&&!this.engineSound.started&&this.engineSound.start(),this.engineSound.update(r.currentSpeed/r.stats.maxSpeed,r.boostTime>0,r.drifting,n.brake>0?0:1),this.gfx.followShadow(r.x,r.z),this.gfx.render()}stepPhysics(t,e){let i=this.itemProximityAssist.update(t,this.race.phase,this.items),n={phase:this.race.phase==="finished"?"racing":this.race.phase,playerProgress:this.race.playerProgress,itemAssist:i};for(let r=0;r<this.karts.length;r++){let a=this.karts[r],o;r===this.playerIndex&&!a.finished?(o=this.race.phase==="racing"?this.drivingAssist.update(t,a,e,this.race.phase):$g,this.race.phase==="racing"&&o.useItem&&a.item&&(this.items.useItem(a),e.useItem=!1,o.useItem=!1)):r===this.playerIndex?(this.playerAutoCpu||(this.playerAutoCpu=new Mr(a,this.tq,Ic[a.charIndex],this.rng)),o=this.playerAutoCpu.update(t,n,null)):o=this.cpus[r].update(t,n,this.items),a.step(t,o)}Hu(this.karts,this.events),this.items.update(t),this.race.update(t,e)}syncVisuals(t){for(let n=0;n<this.karts.length;n++)this.models[n].sync(this.karts[n],t,this.time);for(let n of this.karts)n.drifting&&!n.airborne&&this.particles.driftSparks(n,n.driftTier,t),n.boostTime>0&&this.particles.boostFlame(n,t),n.surface===qe.GRASS&&n.currentSpeed>6&&!n.airborne&&this.particles.dirt(n,t),n.invincible&&this.particles.auraTrail(n,t,this.time);for(let n=0;n<this.boxMeshes.length;n++){let r=this.items.boxes[n],a=this.boxMeshes[n];r.timer>0?(a.visible=r.timer<1.2,a.scale.setScalar(Math.max(.01,1-r.timer/1.2))):(a.visible=!0,a.scale.setScalar(1)),a.rotation.y+=t*1.6,a.rotation.x+=t*1.1,a.position.y=1.1+Math.sin(this.time*2+n)*.12,a.material.emissive.setHSL((this.time*.25+n*.13)%1,.85,.5)}for(let n=0;n<this.coinMeshes.length;n++){let r=this.items.coins[n],a=this.coinMeshes[n];a.visible=r.timer<=0,a.rotation.y+=t*3}let e=new Set;for(let n of this.items.projectiles){e.add(n);let r=this.projMeshes.get(n);if(!r){r=new be;let a=new yt(this.rocketGeo,n.type==="rocket"?this.rocketMat:this.homingMat);a.rotation.x=Math.PI/2,r.add(a),this.raceGroup.add(r),this.projMeshes.set(n,r)}r.position.set(n.x,.7,n.z),r.rotation.y=n.heading,n.type==="homing"&&(r.children[0].rotation.z=this.time*10)}for(let[n,r]of[...this.projMeshes])e.has(n)||(this.raceGroup.remove(r),this.projMeshes.delete(n));let i=new Set;for(let n of this.items.traps){i.add(n);let r=this.trapMeshes.get(n);r||(r=new yt(this.oilGeo,this.oilMat),r.position.set(n.x,.06,n.z),this.raceGroup.add(r),this.trapMeshes.set(n,r))}for(let[n,r]of[...this.trapMeshes])i.has(n)||(this.raceGroup.remove(r),this.trapMeshes.delete(n));for(let n=0;n<this.dashMats.length;n++)this.dashMats[n].emissiveIntensity=1.2+Math.sin(this.time*6+n)*.5}consumeEvents(){let t=this.karts[this.playerIndex];for(let e of this.events){let i=e.kart,n=i===t;switch(e.type){case"signal":this.hud.showSignal(e.count),this.audio.countdownBeep();break;case"go":this.hud.showSignal(0),this.audio.goBeep();break;case"rocketStart":n&&this.hud.announce("ロケットスタート!",1.2,"good");break;case"burnout":n&&this.hud.announce("ふかしすぎ!",1.2,"bad");break;case"hop":n&&this.audio.hop();break;case"land":n&&this.audio.land();break;case"driftStart":n&&this.audio.driftStart();break;case"turboTier":n&&this.audio.turboTier(e.tier);break;case"turboRelease":n&&this.audio.turboRelease(e.tier);break;case"dashPad":n&&this.audio.dashPad();break;case"jumpPad":n&&this.audio.jumpPad();break;case"boost":break;case"wallHit":this.particles.wallSparks(i.x,i.y,i.z),n&&this.audio.wallHit();break;case"grassEnter":break;case"bump":(e.kart===t||e.other===t)&&this.audio.bump();break;case"spin":this.particles.explosion(i.x,i.y,i.z),n&&this.audio.spin();break;case"slip":n&&this.audio.slip();break;case"shieldBreak":n&&this.audio.shieldBreak();break;case"itemBoxGet":this.particles.itemBoxBurst(e.x,0,e.z),n&&(this.audio.itemBox(),this.hud.startRoulette());break;case"rouletteStop":n&&this.hud.stopRoulette(i.item);break;case"coinGet":this.particles.coinSparkle(e.x,0,e.z),n&&this.audio.coin();break;case"shoot":n&&this.audio.shoot();break;case"dropTrap":n&&this.audio.shoot();break;case"useBoost":n&&this.audio.turboRelease(2);break;case"useShield":n&&this.audio.shieldUp();break;case"useAura":n&&this.audio.auraStart();break;case"projectileHit":this.particles.explosion(e.x,0,e.z),this.audio.explosion();break;case"projectileEnd":this.particles.explosion(e.x,0,e.z);break;case"trapHit":e.kart===t&&this.audio.slip();break;case"wrongWay":this.hud.announce("ぎゃくそう!",1.4,"bad"),this.audio.wrongWay();break;case"lap":n&&(e.final?(this.hud.announce("ファイナルラップ!",2,"final"),this.audio.finalLapJingle(),this.bgm.setTempo(1.12)):(this.hud.announce(`LAP ${e.lap}`,1.2),this.audio.lapJingle()));break;case"kartFinish":this.particles.confetti(i.x,0,i.z,i===t?140:30);break;case"playerFinish":this.onPlayerFinish(i);break}}this.events.length=0}onPlayerFinish(t){this.bgm.stop(),this.audio.fanfare(t.rank<=3),this.hud.announce(t.rank===1?"ゴール! 1い!!":`ゴール! ${t.rank}い!`,2.5,t.rank<=3?"good":"");let e=t.lapTimes.length?Math.min(...t.lapTimes):null,i=Ju(this.save,{bestLap:e,totalTime:t.finishTime,won:t.rank===1});setTimeout(()=>{this.state==="race"&&(this.bgm.play("result"),this.hud.showResult(this.race,t,i,()=>{this.hud.hideResult(),this.startRace(this.save.lastChar??0)},()=>this.showTitle()))},3e3)}updateTitleCamera(t){this.titleCamAngle+=t*.06;let e=$t(this.titleCamAngle*60,this.tq.L),i=this.tq.posAt(e,-16),n=this.tq.posAt($t(e+30,this.tq.L),0);this.gfx.camera.position.set(i[0],9,i[1]),this.gfx.camera.lookAt(n[0],1,n[1]),this.gfx.camera.fov=60,this.gfx.camera.updateProjectionMatrix()}};window.addEventListener("DOMContentLoaded",()=>{window.__game=new Fc});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
