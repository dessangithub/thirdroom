var ud=Object.defineProperty;var hd=(r,e,t)=>e in r?ud(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var ue=(r,e,t)=>(hd(r,typeof e!="symbol"?e+"":e,t),t);import{a9 as wi,aa as oi,ab as Qt,ac as He,i as De,ad as Pe,ae as dd,af as fd,ag as Ad,ah as pd,ai as gd,aj as md,ak as _d,al as xd,am as tt,an as Ed,ao as Cd,ap as vd,aq as Ki,ar as _l,as as Id,at as yd,au as Md,av as Sd,aw as bd,ax as wd,ay as Bd,az as Td,aA as Rd,aB as Dd,aC as Ld,aD as Pd,aE as Qd,aF as Fd,aG as Ud,aH as Nd,aI as Od,aJ as Gd,aK as kd,aL as Vd,aM as zd,aN as Hd,aO as Wd,aP as qd,aQ as Xd,aR as jd,aS as nt,aT as Yd,aU as _t,aV as Jd,aW as Kd,a as Ct,h as at,aX as Zd,aY as fo,aZ as $d,a_ as ef,c as tf,r as on,a$ as nf,b0 as Iu,b1 as sf,b2 as rf,b3 as af,b4 as of,b5 as lf,b6 as Ao,b7 as cf,b8 as Bi,b9 as xl,ba as ca,bb as Ti,bc as uf,bd as hf,be as ua,bf as _n,bg as Kt,bh as wt,bi as Bt,bj as El,bk as df,bl as ha,bm as ff,bn as Af,bo as pf,bp as gf,bq as mf}from"./editor-9e67c00a.js";import{f as yu,p as _f,m as xf,a as Ef,q as Cf}from"./Deferred-af9e678f.js";import{c as Fr,d as vf,b as If,v as yf,q as Mf,g as Sf}from"./math-0381bedb.js";import{V as bf}from"./ktx-parse.modern-6c6da609.js";import"./main.cc7980d7.js";import"./modulepreload-polyfill-3cfb730f.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oo="148dev-thirdroom",wf=0,Cl=1,Bf=2,Mu=1,Su=2,ws=3,nn=0,qt=1,fn=2,Bs=3,In=0,Zi=1,kr=2,vl=3,Il=4,Tf=5,Xi=100,Rf=101,Df=102,yl=103,Ml=104,Lf=200,po=201,Pf=202,Qf=203,bu=204,wu=205,Ff=206,Uf=207,Nf=208,Of=209,Gf=210,kf=0,Vf=1,zf=2,go=3,Hf=4,Wf=5,qf=6,Xf=7,Bu=0,jf=1,Yf=2,yn=0,Jf=1,Kf=2,Zf=3,$f=4,eA=5,Go=300,vi=301,Ii=302,Ns=303,Os=304,Js=306,Wt=1e3,vt=1001,Gs=1002,ot=1003,Vr=1004,Ls=1005,Ge=1006,ko=1007,jt=1008,Ot=1009,tA=1010,nA=1011,Tu=1012,iA=1013,mi=1014,Ze=1015,Gt=1016,sA=1017,rA=1018,_i=1020,aA=1021,oA=1022,gt=1023,lA=1024,cA=1025,ii=1026,xi=1027,Ts=1028,uA=1029,Rs=1030,hA=1031,dA=1033,Ur=33776,da=33777,fa=33778,Nr=33779,mo=35840,Sl=35841,_o=35842,bl=35843,Ru=36196,xo=37492,Eo=37496,Co=37808,wl=37809,Bl=37810,Tl=37811,Rl=37812,Dl=37813,Ll=37814,Pl=37815,Ql=37816,Fl=37817,Ul=37818,Nl=37819,Ol=37820,Gl=37821,Or=36492,fA=36283,kl=36284,Vl=36285,zl=36286,ks=2300,ns=2301,Aa=2302,Hl=2400,Wl=2401,ql=2402,AA=2500,pA=1,Du=2,sn=3e3,Le=3001,gA=3200,Lu=3201,Pu=0,mA=1,xn="srgb",Vs="srgb-linear",pa=7680,_A=519,vo=35044,Io=35048,Xl="300 es",yo=1035;class ls{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jl=1234567;const Ps=Math.PI/180,zs=180/Math.PI;function An(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xt[r&255]+xt[r>>8&255]+xt[r>>16&255]+xt[r>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]).toLowerCase()}function Et(r,e,t){return Math.max(e,Math.min(t,r))}function Vo(r,e){return(r%e+e)%e}function xA(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function EA(r,e,t){return r!==e?(t-r)/(e-r):0}function Qs(r,e,t){return(1-t)*r+t*e}function CA(r,e,t,n){return Qs(r,e,1-Math.exp(-t*n))}function vA(r,e=1){return e-Math.abs(Vo(r,e*2)-e)}function IA(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function yA(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function MA(r,e){return r+Math.floor(Math.random()*(e-r+1))}function SA(r,e){return r+Math.random()*(e-r)}function bA(r){return r*(.5-Math.random())}function wA(r){r!==void 0&&(jl=r);let e=jl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function BA(r){return r*Ps}function TA(r){return r*zs}function Mo(r){return(r&r-1)===0&&r!==0}function Qu(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function zr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function RA(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*h,l*d,o*c);break;case"YZY":r.set(l*d,o*u,l*h,o*c);break;case"ZXZ":r.set(l*h,l*d,o*u,o*c);break;case"XZX":r.set(o*u,l*g,l*p,o*c);break;case"YXY":r.set(l*p,o*u,l*g,o*c);break;case"ZYZ":r.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Hn(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function je(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Fu=Object.freeze({__proto__:null,DEG2RAD:Ps,RAD2DEG:zs,ceilPowerOfTwo:Qu,clamp:Et,damp:CA,degToRad:BA,denormalize:Hn,euclideanModulo:Vo,floorPowerOfTwo:zr,generateUUID:An,inverseLerp:EA,isPowerOfTwo:Mo,lerp:Qs,mapLinear:xA,normalize:je,pingpong:vA,radToDeg:TA,randFloat:SA,randFloatSpread:bA,randInt:MA,seededRandom:wA,setQuaternionFromProperEuler:RA,smootherstep:yA,smoothstep:IA});class ce{constructor(e=0,t=0){ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],f=i[0],A=i[3],m=i[6],C=i[1],_=i[4],E=i[7],I=i[2],S=i[5],w=i[8];return s[0]=a*f+o*C+l*I,s[3]=a*A+o*_+l*S,s[6]=a*m+o*E+l*w,s[1]=c*f+u*C+h*I,s[4]=c*A+u*_+h*S,s[7]=c*m+u*E+h*w,s[2]=d*f+p*C+g*I,s[5]=d*A+p*_+g*S,s[8]=d*m+p*E+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,p=c*s-a*l,g=t*h+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/g;return e[0]=h*f,e[1]=(i*c-u*n)*f,e[2]=(o*n-i*a)*f,e[3]=d*f,e[4]=(u*t-i*l)*f,e[5]=(i*s-o*t)*f,e[6]=p*f,e[7]=(n*l-c*t)*f,e[8]=(a*t-n*s)*f,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ga.makeScale(e,t)),this}rotate(e){return this.premultiply(ga.makeRotation(-e)),this}translate(e,t){return this.premultiply(ga.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ga=new It;function Uu(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Hs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ei(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Gr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const ma={[xn]:{[Vs]:Ei},[Vs]:{[xn]:Gr}},Tt={legacyMode:!0,get workingColorSpace(){return Vs},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(ma[e]&&ma[e][t]!==void 0){const n=ma[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Nu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ut={r:0,g:0,b:0},ln={h:0,s:0,l:0},ir={h:0,s:0,l:0};function _a(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function sr(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Tt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Tt.workingColorSpace){if(e=Vo(e,1),t=Et(t,0,1),n=Et(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=_a(a,s,e+1/3),this.g=_a(a,s,e),this.b=_a(a,s,e-1/3)}return Tt.toWorkingColorSpace(this,i),this}setStyle(e,t=xn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Tt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Tt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Tt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Tt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=xn){const n=Nu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return Tt.fromWorkingColorSpace(sr(this,ut),e),Et(ut.r*255,0,255)<<16^Et(ut.g*255,0,255)<<8^Et(ut.b*255,0,255)<<0}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.fromWorkingColorSpace(sr(this,ut),t);const n=ut.r,i=ut.g,s=ut.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(sr(this,ut),t),e.r=ut.r,e.g=ut.g,e.b=ut.b,e}getStyle(e=xn){return Tt.fromWorkingColorSpace(sr(this,ut),e),e!==xn?`color(${e} ${ut.r} ${ut.g} ${ut.b})`:`rgb(${ut.r*255|0},${ut.g*255|0},${ut.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(ln),ln.h+=e,ln.s+=t,ln.l+=n,this.setHSL(ln.h,ln.s,ln.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ln),e.getHSL(ir);const n=Qs(ln.h,ir.h,t),i=Qs(ln.s,ir.s,t),s=Qs(ln.l,ir.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}xe.NAMES=Nu;let Ri;class Ou{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ri===void 0&&(Ri=Hs("canvas")),Ri.width=e.width,Ri.height=e.height;const n=Ri.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ri}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Ei(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ei(t[n]/255)*255):t[n]=Ei(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Gu{constructor(e=null){this.isSource=!0,this.uuid=An(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(xa(i[a].image)):s.push(xa(i[a]))}else s=xa(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function xa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ou.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let DA=0;class Ke extends ls{constructor(e=Ke.DEFAULT_IMAGE,t=Ke.DEFAULT_MAPPING,n=vt,i=vt,s=Ge,a=jt,o=gt,l=Ot,c=Ke.DEFAULT_ANISOTROPY,u=sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:DA++}),this.uuid=An(),this.name="",this.source=new Gu(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Go)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wt:e.x=e.x-Math.floor(e.x);break;case vt:e.x=e.x<0?0:1;break;case Gs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wt:e.y=e.y-Math.floor(e.y);break;case vt:e.y=e.y<0?0:1;break;case Gs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=Go;Ke.DEFAULT_ANISOTROPY=1;class Ye{constructor(e=0,t=0,n=0,i=1){Ye.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],f=l[2],A=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-f)<.01&&Math.abs(g-A)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+f)<.1&&Math.abs(g+A)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,E=(p+1)/2,I=(m+1)/2,S=(u+d)/4,w=(h+f)/4,D=(g+A)/4;return _>E&&_>I?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=S/n,s=w/n):E>I?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=S/i,s=D/i):I<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(I),n=w/s,i=D/s),this.set(n,i,s,t),this}let C=Math.sqrt((A-g)*(A-g)+(h-f)*(h-f)+(d-u)*(d-u));return Math.abs(C)<.001&&(C=1),this.x=(A-g)/C,this.y=(h-f)/C,this.z=(d-u)/C,this.w=Math.acos((c+p+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class et extends ls{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ye(0,0,e,t),this.scissorTest=!1,this.viewport=new Ye(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Ke(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ge,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Gu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zo extends Ke{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ot,this.minFilter=ot,this.wrapR=vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class LA extends et{constructor(e=1,t=1,n=1){super(e,t),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new zo(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Ho extends Ke{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ot,this.minFilter=ot,this.wrapR=vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[a+0],p=s[a+1],g=s[a+2],f=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=f;return}if(h!==f||l!==d||c!==p||u!==g){let A=1-o;const m=l*d+c*p+u*g+h*f,C=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const I=Math.sqrt(_),S=Math.atan2(I,m*C);A=Math.sin(A*S)/I,o=Math.sin(o*S)/I}const E=o*C;if(l=l*A+d*E,c=c*A+p*E,u=u*A+g*E,h=h*A+f*E,A===1-o){const I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-o*p,e[t+2]=c*g+u*p+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),d=l(n/2),p=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(e=0,t=0,n=0){T.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-s*i,h=l*i+s*n-a*t,d=-s*t-a*n-o*i;return this.x=c*l+d*-s+u*-o-h*-a,this.y=u*l+d*-a+h*-s-c*-o,this.z=h*l+d*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ea.copy(this).projectOnVector(e),this.sub(Ea)}reflect(e){return this.sub(Ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ea=new T,Yl=new pn;class Sn{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],d=e[l+2];u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>a&&(a=h),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),d=e.getZ(l);u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>a&&(a=h),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)li.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(li)}else n.boundingBox===null&&n.computeBoundingBox(),Ca.copy(n.boundingBox),Ca.applyMatrix4(e.matrixWorld),this.union(Ca);const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gs),rr.subVectors(this.max,gs),Di.subVectors(e.a,gs),Li.subVectors(e.b,gs),Pi.subVectors(e.c,gs),jn.subVectors(Li,Di),Yn.subVectors(Pi,Li),ci.subVectors(Di,Pi);let t=[0,-jn.z,jn.y,0,-Yn.z,Yn.y,0,-ci.z,ci.y,jn.z,0,-jn.x,Yn.z,0,-Yn.x,ci.z,0,-ci.x,-jn.y,jn.x,0,-Yn.y,Yn.x,0,-ci.y,ci.x,0];return!va(t,Di,Li,Pi,rr)||(t=[1,0,0,0,1,0,0,0,1],!va(t,Di,Li,Pi,rr))?!1:(ar.crossVectors(jn,Yn),t=[ar.x,ar.y,ar.z],va(t,Di,Li,Pi,rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return li.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(li).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Rn=[new T,new T,new T,new T,new T,new T,new T,new T],li=new T,Ca=new Sn,Di=new T,Li=new T,Pi=new T,jn=new T,Yn=new T,ci=new T,gs=new T,rr=new T,ar=new T,ui=new T;function va(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ui.fromArray(r,s);const o=i.x*Math.abs(ui.x)+i.y*Math.abs(ui.y)+i.z*Math.abs(ui.z),l=e.dot(ui),c=t.dot(ui),u=n.dot(ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const PA=new Sn,ms=new T,Ia=new T;class si{constructor(e=new T,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):PA.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ms.subVectors(e,this.center);const t=ms.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ms,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ia.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ms.copy(e.center).add(Ia)),this.expandByPoint(ms.copy(e.center).sub(Ia))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new T,ya=new T,or=new T,Jn=new T,Ma=new T,lr=new T,Sa=new T;class Jr{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.direction).multiplyScalar(t).add(this.origin),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ya.copy(e).add(t).multiplyScalar(.5),or.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(ya);const s=e.distanceTo(t)*.5,a=-this.direction.dot(or),o=Jn.dot(this.direction),l=-Jn.dot(or),c=Jn.lengthSq(),u=Math.abs(1-a*a);let h,d,p,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const f=1/u;h*=f,d*=f,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(or).multiplyScalar(d).add(ya),p}intersectSphere(e,t){Dn.subVectors(e.center,this.origin);const n=Dn.dot(this.direction),i=Dn.dot(Dn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,n,i,s){Ma.subVectors(t,e),lr.subVectors(n,e),Sa.crossVectors(Ma,lr);let a=this.direction.dot(Sa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Jn.subVectors(this.origin,e);const l=o*this.direction.dot(lr.crossVectors(Jn,lr));if(l<0)return null;const c=o*this.direction.dot(Ma.cross(Jn));if(c<0||l+c>a)return null;const u=-o*Jn.dot(Sa);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ge{constructor(){ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,a,o,l,c,u,h,d,p,g,f,A){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=p,m[7]=g,m[11]=f,m[15]=A,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ge().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Qi.setFromMatrixColumn(e,0).length(),s=1/Qi.setFromMatrixColumn(e,1).length(),a=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*h,g=o*u,f=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-f*c,t[9]=-o*l,t[2]=f-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,f=c*h;t[0]=d+f*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=f+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,f=c*h;t[0]=d-f*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=f-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*h,g=o*u,f=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+f,t[1]=l*h,t[5]=f*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,f=o*c;t[0]=l*u,t[4]=f-d*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-f*h}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,f=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+f,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=f*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(QA,e,FA)}lookAt(e,t,n){const i=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Kn.crossVectors(n,zt),Kn.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Kn.crossVectors(n,zt)),Kn.normalize(),cr.crossVectors(zt,Kn),i[0]=Kn.x,i[4]=cr.x,i[8]=zt.x,i[1]=Kn.y,i[5]=cr.y,i[9]=zt.y,i[2]=Kn.z,i[6]=cr.z,i[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],f=n[6],A=n[10],m=n[14],C=n[3],_=n[7],E=n[11],I=n[15],S=i[0],w=i[4],D=i[8],Q=i[12],x=i[1],M=i[5],k=i[9],L=i[13],R=i[2],U=i[6],V=i[10],z=i[14],N=i[3],J=i[7],j=i[11],Ae=i[15];return s[0]=a*S+o*x+l*R+c*N,s[4]=a*w+o*M+l*U+c*J,s[8]=a*D+o*k+l*V+c*j,s[12]=a*Q+o*L+l*z+c*Ae,s[1]=u*S+h*x+d*R+p*N,s[5]=u*w+h*M+d*U+p*J,s[9]=u*D+h*k+d*V+p*j,s[13]=u*Q+h*L+d*z+p*Ae,s[2]=g*S+f*x+A*R+m*N,s[6]=g*w+f*M+A*U+m*J,s[10]=g*D+f*k+A*V+m*j,s[14]=g*Q+f*L+A*z+m*Ae,s[3]=C*S+_*x+E*R+I*N,s[7]=C*w+_*M+E*U+I*J,s[11]=C*D+_*k+E*V+I*j,s[15]=C*Q+_*L+E*z+I*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],f=e[7],A=e[11],m=e[15];return g*(+s*l*h-i*c*h-s*o*d+n*c*d+i*o*p-n*l*p)+f*(+t*l*p-t*c*d+s*a*d-i*a*p+i*c*u-s*l*u)+A*(+t*c*h-t*o*p-s*a*h+n*a*p+s*o*u-n*c*u)+m*(-i*o*u-t*l*h+t*o*d+i*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],f=e[13],A=e[14],m=e[15],C=h*A*c-f*d*c+f*l*p-o*A*p-h*l*m+o*d*m,_=g*d*c-u*A*c-g*l*p+a*A*p+u*l*m-a*d*m,E=u*f*c-g*h*c+g*o*p-a*f*p-u*o*m+a*h*m,I=g*h*l-u*f*l-g*o*d+a*f*d+u*o*A-a*h*A,S=t*C+n*_+i*E+s*I;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/S;return e[0]=C*w,e[1]=(f*d*s-h*A*s-f*i*p+n*A*p+h*i*m-n*d*m)*w,e[2]=(o*A*s-f*l*s+f*i*c-n*A*c-o*i*m+n*l*m)*w,e[3]=(h*l*s-o*d*s-h*i*c+n*d*c+o*i*p-n*l*p)*w,e[4]=_*w,e[5]=(u*A*s-g*d*s+g*i*p-t*A*p-u*i*m+t*d*m)*w,e[6]=(g*l*s-a*A*s-g*i*c+t*A*c+a*i*m-t*l*m)*w,e[7]=(a*d*s-u*l*s+u*i*c-t*d*c-a*i*p+t*l*p)*w,e[8]=E*w,e[9]=(g*h*s-u*f*s-g*n*p+t*f*p+u*n*m-t*h*m)*w,e[10]=(a*f*s-g*o*s+g*n*c-t*f*c-a*n*m+t*o*m)*w,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*p-t*o*p)*w,e[12]=I*w,e[13]=(u*f*i-g*h*i+g*n*d-t*f*d-u*n*A+t*h*A)*w,e[14]=(g*o*i-a*f*i-g*n*l+t*f*l+a*n*A-t*o*A)*w,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*d+t*o*d)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,p=s*u,g=s*h,f=a*u,A=a*h,m=o*h,C=l*c,_=l*u,E=l*h,I=n.x,S=n.y,w=n.z;return i[0]=(1-(f+m))*I,i[1]=(p+E)*I,i[2]=(g-_)*I,i[3]=0,i[4]=(p-E)*S,i[5]=(1-(d+m))*S,i[6]=(A+C)*S,i[7]=0,i[8]=(g+_)*w,i[9]=(A-C)*w,i[10]=(1-(d+f))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Qi.set(i[0],i[1],i[2]).length();const a=Qi.set(i[4],i[5],i[6]).length(),o=Qi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],cn.copy(this);const c=1/s,u=1/a,h=1/o;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=h,cn.elements[9]*=h,cn.elements[10]*=h,t.setFromRotationMatrix(cn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(a+s)/(a-s),p=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-s),h=(t+e)*l,d=(n+i)*c,p=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Qi=new T,cn=new ge,QA=new T(0,0,0),FA=new T(1,1,1),Kn=new T,cr=new T,zt=new T,Jl=new ge,Kl=new pn;class Kr{constructor(e=0,t=0,n=0,i=Kr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kl.setFromEuler(this),this.setFromQuaternion(Kl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Kr.DEFAULT_ORDER="XYZ";class Wo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let UA=0;const Zl=new T,Fi=new pn,Ln=new ge,ur=new T,_s=new T,NA=new T,OA=new pn,$l=new T(1,0,0),ec=new T(0,1,0),tc=new T(0,0,1),GA={type:"added"},nc={type:"removed"};class Je extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:UA++}),this.uuid=An(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Je.DEFAULT_UP.clone();const e=new T,t=new Kr,n=new pn,i=new T(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ge},normalMatrix:{value:new It}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=Je.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis($l,e)}rotateY(e){return this.rotateOnAxis(ec,e)}rotateZ(e){return this.rotateOnAxis(tc,e)}translateOnAxis(e,t){return Zl.copy(e).applyQuaternion(this.quaternion),this.position.add(Zl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($l,e)}translateY(e){return this.translateOnAxis(ec,e)}translateZ(e){return this.translateOnAxis(tc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ur.copy(e):ur.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(_s,ur,this.up):Ln.lookAt(ur,_s,this.up),this.quaternion.setFromRotationMatrix(Ln),i&&(Ln.extractRotation(i.matrixWorld),Fi.setFromRotationMatrix(Ln),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(GA)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(nc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,e,NA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,OA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Je.DEFAULT_UP=new T(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new T,Pn=new T,ba=new T,Qn=new T,Ui=new T,Ni=new T,ic=new T,wa=new T,Ba=new T,Ta=new T;class kn{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),un.subVectors(e,t),i.cross(un);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){un.subVectors(i,t),Pn.subVectors(n,t),ba.subVectors(e,t);const a=un.dot(un),o=un.dot(Pn),l=un.dot(ba),c=Pn.dot(Pn),u=Pn.dot(ba),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const d=1/h,p=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Qn),Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getUV(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Qn),l.set(0,0),l.addScaledVector(s,Qn.x),l.addScaledVector(a,Qn.y),l.addScaledVector(o,Qn.z),l}static isFrontFacing(e,t,n,i){return un.subVectors(n,t),Pn.subVectors(e,t),un.cross(Pn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),un.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return kn.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Ui.subVectors(i,n),Ni.subVectors(s,n),wa.subVectors(e,n);const l=Ui.dot(wa),c=Ni.dot(wa);if(l<=0&&c<=0)return t.copy(n);Ba.subVectors(e,i);const u=Ui.dot(Ba),h=Ni.dot(Ba);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ui,a);Ta.subVectors(e,s);const p=Ui.dot(Ta),g=Ni.dot(Ta);if(g>=0&&p<=g)return t.copy(s);const f=p*c-l*g;if(f<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ni,o);const A=u*g-p*h;if(A<=0&&h-u>=0&&p-g>=0)return ic.subVectors(s,i),o=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector(ic,o);const m=1/(A+f+d);return a=f*m,o=d*m,t.copy(n).addScaledVector(Ui,a).addScaledVector(Ni,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let kA=0;class Mn extends ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kA++}),this.uuid=An(),this.name="",this.type="Material",this.blending=Zi,this.side=nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=bu,this.blendDst=wu,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_A,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pa,this.stencilZFail=pa,this.stencilZPass=pa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this.uniformsNeedUpdate=!1,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(n.blending=this.blending),this.side!==nn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Cn extends Mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new T,hr=new ce;class ht{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix3(e),this.setXY(t,hr.x,hr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array),s=je(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ku extends ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vu extends ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Xt extends ht{constructor(e,t,n){super(new Float32Array(e),t,n)}}let VA=0;const Zt=new ge,Ra=new Je,Oi=new T,Ht=new Sn,xs=new Sn,pt=new T;class yt extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:VA++}),this.uuid=An(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uu(e)?Vu:ku)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new It().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return Ra.lookAt(e),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Xt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Ht.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new T,1/0);return}if(e){const n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];xs.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(Ht.min,xs.min),Ht.expandByPoint(pt),pt.addVectors(Ht.max,xs.max),Ht.expandByPoint(pt)):(Ht.expandByPoint(xs.min),Ht.expandByPoint(xs.max))}Ht.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)pt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(pt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)pt.fromBufferAttribute(o,c),l&&(Oi.fromBufferAttribute(e,c),pt.add(Oi)),i=Math.max(i,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ht(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let x=0;x<o;x++)c[x]=new T,u[x]=new T;const h=new T,d=new T,p=new T,g=new ce,f=new ce,A=new ce,m=new T,C=new T;function _(x,M,k){h.fromArray(i,x*3),d.fromArray(i,M*3),p.fromArray(i,k*3),g.fromArray(a,x*2),f.fromArray(a,M*2),A.fromArray(a,k*2),d.sub(h),p.sub(h),f.sub(g),A.sub(g);const L=1/(f.x*A.y-A.x*f.y);isFinite(L)&&(m.copy(d).multiplyScalar(A.y).addScaledVector(p,-f.y).multiplyScalar(L),C.copy(p).multiplyScalar(f.x).addScaledVector(d,-A.x).multiplyScalar(L),c[x].add(m),c[M].add(m),c[k].add(m),u[x].add(C),u[M].add(C),u[k].add(C))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let x=0,M=E.length;x<M;++x){const k=E[x],L=k.start,R=k.count;for(let U=L,V=L+R;U<V;U+=3)_(n[U+0],n[U+1],n[U+2])}const I=new T,S=new T,w=new T,D=new T;function Q(x){w.fromArray(s,x*3),D.copy(w);const M=c[x];I.copy(M),I.sub(w.multiplyScalar(w.dot(M))).normalize(),S.crossVectors(D,M);const L=S.dot(u[x])<0?-1:1;l[x*4]=I.x,l[x*4+1]=I.y,l[x*4+2]=I.z,l[x*4+3]=L}for(let x=0,M=E.length;x<M;++x){const k=E[x],L=k.start,R=k.count;for(let U=L,V=L+R;U<V;U+=3)Q(n[U+0]),Q(n[U+1]),Q(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new T,s=new T,a=new T,o=new T,l=new T,c=new T,u=new T,h=new T;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),f=e.getX(d+1),A=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,f),a.fromBufferAttribute(t,A),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,f),c.fromBufferAttribute(n,A),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(f,l.x,l.y,l.z),n.setXYZ(A,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let f=0,A=l.length;f<A;f++){o.isInterleavedBufferAttribute?p=l[f]*o.data.stride+o.offset:p=l[f]*u;for(let m=0;m<u;m++)d[g++]=c[p++]}return new ht(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const sc=new ge,Gi=new Jr,Da=new si,Es=new T,Cs=new T,vs=new T,La=new T,dr=new T,fr=new ce,Ar=new ce,pr=new ce,Pa=new T,gr=new T;class Ut extends Je{constructor(e=new yt,t=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){dr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(La.fromBufferAttribute(h,e),a?dr.addScaledVector(La,u):dr.addScaledVector(La.sub(t),u))}t.add(dr)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(s),e.ray.intersectsSphere(Da)===!1)||(sc.copy(s).invert(),Gi.copy(e.ray).applyMatrix4(sc),n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.groups,d=n.drawRange;if(o!==null)if(Array.isArray(i))for(let p=0,g=h.length;p<g;p++){const f=h[p],A=i[f.materialIndex],m=Math.max(f.start,d.start),C=Math.min(o.count,Math.min(f.start+f.count,d.start+d.count));for(let _=m,E=C;_<E;_+=3){const I=o.getX(_),S=o.getX(_+1),w=o.getX(_+2);a=mr(this,A,e,Gi,c,u,I,S,w),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=f.materialIndex,t.push(a))}}else{const p=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let f=p,A=g;f<A;f+=3){const m=o.getX(f),C=o.getX(f+1),_=o.getX(f+2);a=mr(this,i,e,Gi,c,u,m,C,_),a&&(a.faceIndex=Math.floor(f/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,g=h.length;p<g;p++){const f=h[p],A=i[f.materialIndex],m=Math.max(f.start,d.start),C=Math.min(l.count,Math.min(f.start+f.count,d.start+d.count));for(let _=m,E=C;_<E;_+=3){const I=_,S=_+1,w=_+2;a=mr(this,A,e,Gi,c,u,I,S,w),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=f.materialIndex,t.push(a))}}else{const p=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let f=p,A=g;f<A;f+=3){const m=f,C=f+1,_=f+2;a=mr(this,i,e,Gi,c,u,m,C,_),a&&(a.faceIndex=Math.floor(f/3),t.push(a))}}}}function zA(r,e,t,n,i,s,a,o){let l;if(e.side===qt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===nn,o),l===null)return null;gr.copy(o),gr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(gr);return c<t.near||c>t.far?null:{distance:c,point:gr.clone(),object:r}}function mr(r,e,t,n,i,s,a,o,l){r.getVertexPosition(a,Es),r.getVertexPosition(o,Cs),r.getVertexPosition(l,vs);const c=zA(r,e,t,n,Es,Cs,vs,Pa);if(c){i&&(fr.fromBufferAttribute(i,a),Ar.fromBufferAttribute(i,o),pr.fromBufferAttribute(i,l),c.uv=kn.getUV(Pa,Es,Cs,vs,fr,Ar,pr,new ce)),s&&(fr.fromBufferAttribute(s,a),Ar.fromBufferAttribute(s,o),pr.fromBufferAttribute(s,l),c.uv2=kn.getUV(Pa,Es,Cs,vs,fr,Ar,pr,new ce));const u={a,b:o,c:l,normal:new T,materialIndex:0};kn.getNormal(Es,Cs,vs,u.normal),c.face=u}return c}class Ks extends yt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(h,2));function g(f,A,m,C,_,E,I,S,w,D,Q){const x=E/w,M=I/D,k=E/2,L=I/2,R=S/2,U=w+1,V=D+1;let z=0,N=0;const J=new T;for(let j=0;j<V;j++){const Ae=j*M-L;for(let se=0;se<U;se++){const X=se*x-k;J[f]=X*C,J[A]=Ae*_,J[m]=R,c.push(J.x,J.y,J.z),J[f]=0,J[A]=0,J[m]=S>0?1:-1,u.push(J.x,J.y,J.z),h.push(se/w),h.push(1-j/D),z+=1}}for(let j=0;j<D;j++)for(let Ae=0;Ae<w;Ae++){const se=d+Ae+U*j,X=d+Ae+U*(j+1),Z=d+(Ae+1)+U*(j+1),re=d+(Ae+1)+U*j;l.push(se,X,re),l.push(X,Z,re),N+=6}o.addGroup(p,N,Q),p+=N,d+=z}}static fromJSON(e){return new Ks(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function is(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Pt(r){const e={};for(let t=0;t<r.length;t++){const n=is(r[t]);for(const i in n)e[i]=n[i]}return e}function HA(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function zu(r){return r.getRenderTarget()===null&&r.outputEncoding===Le?xn:Vs}const Ws={clone:is,merge:Pt};var WA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class lt extends Mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WA,this.fragmentShader=qA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=HA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class qo extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ft extends qo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ps*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ki=-90,Vi=1;class XA extends Je{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ft(ki,Vi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Ft(ki,Vi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new Ft(ki,Vi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Ft(ki,Vi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new Ft(ki,Vi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Ft(ki,Vi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=yn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Hu extends Ke{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:vi,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jA extends et{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Hu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ge}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ks(5,5,5),s=new lt({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:In});s.uniforms.tEquirect.value=t;const a=new Ut(i,s),o=t.minFilter;return t.minFilter===jt&&(t.minFilter=Ge),new XA(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Qa=new T,YA=new T,JA=new It;class Ai{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Qa.subVectors(n,t).cross(YA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Qa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||JA.getNormalMatrix(e),i=this.coplanarPoint(Qa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new si,_r=new T;class Zr{constructor(e=new Ai,t=new Ai,n=new Ai,i=new Ai,s=new Ai,a=new Ai){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],p=n[9],g=n[10],f=n[11],A=n[12],m=n[13],C=n[14],_=n[15];return t[0].setComponents(o-i,h-l,f-d,_-A).normalize(),t[1].setComponents(o+i,h+l,f+d,_+A).normalize(),t[2].setComponents(o+s,h+c,f+p,_+m).normalize(),t[3].setComponents(o-s,h-c,f-p,_-m).normalize(),t[4].setComponents(o-a,h-u,f-g,_-C).normalize(),t[5].setComponents(o+a,h+u,f+g,_+C).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSprite(e){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(_r.x=i.normal.x>0?e.max.x:e.min.x,_r.y=i.normal.y>0?e.max.y:e.min.y,_r.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(_r)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wu(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function KA(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,p=r.createBuffer();r.bindBuffer(u,p),r.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const d=u.array,p=u.updateRange;r.bindBuffer(h,c),p.count===-1?r.bufferSubData(h,0,d):(t?r.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):r.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class $r extends yt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,p=[],g=[],f=[],A=[];for(let m=0;m<u;m++){const C=m*d-a;for(let _=0;_<c;_++){const E=_*h-s;g.push(E,-C,0),f.push(0,0,1),A.push(_/o),A.push(1-m/l)}}for(let m=0;m<l;m++)for(let C=0;C<o;C++){const _=C+c*m,E=C+c*(m+1),I=C+1+c*(m+1),S=C+1+c*m;p.push(_,E,S),p.push(E,I,S)}this.setIndex(p),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(f,3)),this.setAttribute("uv",new Xt(A,2))}static fromJSON(e){return new $r(e.width,e.height,e.widthSegments,e.heightSegments)}}var ZA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,$A=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ep=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,tp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,np=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sp="vec3 transformed = vec3( position );",rp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ap=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,op=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,lp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,mp=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
}`,_p=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
	#if defined( CUBEUV_2D_SAMPLER_ARRAY )
		vec3 bilinearCubeUVArray( mediump sampler2DArray envMapArr, float envMapIdx, vec3 sampleParams, vec3 direction, float mipInt ) {
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
			uv.y += 4.0 * ( exp2( sampleParams.x ) - faceSize );
			uv.x *= sampleParams.y;
			uv.y *= sampleParams.z;
			return texture2D( envMapArr, vec3(uv, envMapIdx) ).rgb;
		}
		vec4 textureCubeUVArray( mediump sampler2DArray envMapArr, float envMapIdx, vec3 sampleParams, vec3 sampleDir, float roughness ) {
			float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, sampleParams.x );
			float mipF = fract( mip );
			float mipInt = floor( mip );
			vec3 color0 = bilinearCubeUVArray( envMapArr, envMapIdx, sampleParams, sampleDir, mipInt );
			if ( mipF == 0.0 ) {
				return vec4( color0, 1.0 );
			} else {
				vec3 color1 = bilinearCubeUVArray( envMapArr, envMapIdx, sampleParams, sampleDir, mipInt + 1.0 );
				return vec4( mix( color0, color1, mipF ), 1.0 );
			}
		}
	#else
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
	#endif
#endif`,xp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ep=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ip=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sp=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,bp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wp=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qp=`#ifdef USE_GRADIENTMAP
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
}`,Fp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Up=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Np=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Op=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,kp=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Xp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,jp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Kp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$p=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,eg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,tg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ng=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ig=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ag=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,og=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,cg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ug=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,hg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,dg=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,mg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,_g=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,xg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Eg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Ig=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rg=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Dg=`float getShadowMask() {
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
}`,Lg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Qg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fg=`#ifdef USE_SKINNING
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
#endif`,Ug=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ng=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Og=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Vg=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,zg=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Hg=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Wg=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,qg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Xg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,jg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Yg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kg=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$g=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,nm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,im=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,sm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,rm=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,om=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,lm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,um=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,hm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,fm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,pm=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_m=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,xm=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Cm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Im=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Mm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sm=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,wm=`uniform float rotation;
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
}`,Bm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,le={alphamap_fragment:ZA,alphamap_pars_fragment:$A,alphatest_fragment:ep,alphatest_pars_fragment:tp,aomap_fragment:np,aomap_pars_fragment:ip,begin_vertex:sp,beginnormal_vertex:rp,bsdfs:ap,iridescence_fragment:op,bumpmap_pars_fragment:lp,clipping_planes_fragment:cp,clipping_planes_pars_fragment:up,clipping_planes_pars_vertex:hp,clipping_planes_vertex:dp,color_fragment:fp,color_pars_fragment:Ap,color_pars_vertex:pp,color_vertex:gp,common:mp,cube_uv_reflection_fragment:_p,defaultnormal_vertex:xp,displacementmap_pars_vertex:Ep,displacementmap_vertex:Cp,emissivemap_fragment:vp,emissivemap_pars_fragment:Ip,encodings_fragment:yp,encodings_pars_fragment:Mp,envmap_fragment:Sp,envmap_common_pars_fragment:bp,envmap_pars_fragment:wp,envmap_pars_vertex:Bp,envmap_physical_pars_fragment:kp,envmap_vertex:Tp,fog_vertex:Rp,fog_pars_vertex:Dp,fog_fragment:Lp,fog_pars_fragment:Pp,gradientmap_pars_fragment:Qp,lightmap_fragment:Fp,lightmap_pars_fragment:Up,lights_lambert_fragment:Np,lights_lambert_pars_fragment:Op,lights_pars_begin:Gp,lights_toon_fragment:Vp,lights_toon_pars_fragment:zp,lights_phong_fragment:Hp,lights_phong_pars_fragment:Wp,lights_physical_fragment:qp,lights_physical_pars_fragment:Xp,lights_fragment_begin:jp,lights_fragment_maps:Yp,lights_fragment_end:Jp,logdepthbuf_fragment:Kp,logdepthbuf_pars_fragment:Zp,logdepthbuf_pars_vertex:$p,logdepthbuf_vertex:eg,map_fragment:tg,map_pars_fragment:ng,map_particle_fragment:ig,map_particle_pars_fragment:sg,metalnessmap_fragment:rg,metalnessmap_pars_fragment:ag,morphcolor_vertex:og,morphnormal_vertex:lg,morphtarget_pars_vertex:cg,morphtarget_vertex:ug,normal_fragment_begin:hg,normal_fragment_maps:dg,normal_pars_fragment:fg,normal_pars_vertex:Ag,normal_vertex:pg,normalmap_pars_fragment:gg,clearcoat_normal_fragment_begin:mg,clearcoat_normal_fragment_maps:_g,clearcoat_pars_fragment:xg,iridescence_pars_fragment:Eg,output_fragment:Cg,packing:vg,premultiplied_alpha_fragment:Ig,project_vertex:yg,dithering_fragment:Mg,dithering_pars_fragment:Sg,roughnessmap_fragment:bg,roughnessmap_pars_fragment:wg,shadowmap_pars_fragment:Bg,shadowmap_pars_vertex:Tg,shadowmap_vertex:Rg,shadowmask_pars_fragment:Dg,skinbase_vertex:Lg,skinning_pars_vertex:Pg,skinning_vertex:Qg,skinnormal_vertex:Fg,specularmap_fragment:Ug,specularmap_pars_fragment:Ng,tonemapping_fragment:Og,tonemapping_pars_fragment:Gg,transmission_fragment:kg,transmission_pars_fragment:Vg,uv_pars_fragment:zg,uv_pars_vertex:Hg,uv_vertex:Wg,uv2_pars_fragment:qg,uv2_pars_vertex:Xg,uv2_vertex:jg,worldpos_vertex:Yg,background_vert:Jg,background_frag:Kg,backgroundCube_vert:Zg,backgroundCube_frag:$g,cube_vert:em,cube_frag:tm,depth_vert:nm,depth_frag:im,distanceRGBA_vert:sm,distanceRGBA_frag:rm,equirect_vert:am,equirect_frag:om,linedashed_vert:lm,linedashed_frag:cm,meshbasic_vert:um,meshbasic_frag:hm,meshlambert_vert:dm,meshlambert_frag:fm,meshmatcap_vert:Am,meshmatcap_frag:pm,meshnormal_vert:gm,meshnormal_frag:mm,meshphong_vert:_m,meshphong_frag:xm,meshphysical_vert:Em,meshphysical_frag:Cm,meshtoon_vert:vm,meshtoon_frag:Im,points_vert:ym,points_frag:Mm,shadow_vert:Sm,shadow_frag:bm,sprite_vert:wm,sprite_frag:Bm},ie={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new It},uv2Transform:{value:new It},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new It}}},En={basic:{uniforms:Pt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Pt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new xe(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Pt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Pt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Pt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new xe(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Pt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Pt([ie.points,ie.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Pt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Pt([ie.common,ie.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Pt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Pt([ie.sprite,ie.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:Pt([ie.common,ie.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:Pt([ie.lights,ie.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};En.physical={uniforms:Pt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ce(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const xr={r:0,b:0,g:0};function Tm(r,e,t,n,i,s,a){const o=new xe(0);let l=s===!0?0:1,c,u,h=null,d=0,p=null;function g(A,m){let C=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?t:e).get(_));const E=r.xr,I=E.getSession&&E.getSession();I&&I.environmentBlendMode==="additive"&&(_=null),_===null?f(o,l):_&&_.isColor&&(f(_,1),C=!0),(r.autoClear||C)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Js)?(u===void 0&&(u=new Ut(new Ks(1e4,1e4,1e4),new lt({name:"BackgroundCubeMaterial",uniforms:is(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,w,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=_.encoding!==Le,(h!==_||d!==_.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,h=_,d=_.version,p=r.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Ut(new $r(2,2),new lt({name:"BackgroundMaterial",uniforms:is(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=_.encoding!==Le,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,p=r.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function f(A,m){A.getRGB(xr,zu(r)),n.buffers.color.setClear(xr.r,xr.g,xr.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(A,m=1){o.set(A),l=m,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,f(o,l)},render:g}}function Rm(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=A(null);let c=l,u=!1;function h(R,U,V,z,N){let J=!1;if(a){const j=f(z,V,U);c!==j&&(c=j,p(c.object)),J=m(R,z,V,N),J&&C(R,z,V,N)}else{const j=U.wireframe===!0;(c.geometry!==z.id||c.program!==V.id||c.wireframe!==j)&&(c.geometry=z.id,c.program=V.id,c.wireframe=j,J=!0)}N!==null&&t.update(N,34963),(J||u)&&(u=!1,D(R,U,V,z),N!==null&&r.bindBuffer(34963,t.get(N).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(R){return n.isWebGL2?r.bindVertexArray(R):s.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?r.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function f(R,U,V){const z=V.wireframe===!0;let N=o[R.id];N===void 0&&(N={},o[R.id]=N);let J=N[U.id];J===void 0&&(J={},N[U.id]=J);let j=J[z];return j===void 0&&(j=A(d()),J[z]=j),j}function A(R){const U=[],V=[],z=[];for(let N=0;N<i;N++)U[N]=0,V[N]=0,z[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:z,object:R,attributes:{},index:null}}function m(R,U,V,z){const N=c.attributes,J=U.attributes;let j=0;const Ae=V.getAttributes();for(const se in Ae)if(Ae[se].location>=0){const Z=N[se];let re=J[se];if(re===void 0&&(se==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),se==="instanceColor"&&R.instanceColor&&(re=R.instanceColor)),Z===void 0||Z.attribute!==re||re&&Z.data!==re.data)return!0;j++}return c.attributesNum!==j||c.index!==z}function C(R,U,V,z){const N={},J=U.attributes;let j=0;const Ae=V.getAttributes();for(const se in Ae)if(Ae[se].location>=0){let Z=J[se];Z===void 0&&(se==="instanceMatrix"&&R.instanceMatrix&&(Z=R.instanceMatrix),se==="instanceColor"&&R.instanceColor&&(Z=R.instanceColor));const re={};re.attribute=Z,Z&&Z.data&&(re.data=Z.data),N[se]=re,j++}c.attributes=N,c.attributesNum=j,c.index=z}function _(){const R=c.newAttributes;for(let U=0,V=R.length;U<V;U++)R[U]=0}function E(R){I(R,0)}function I(R,U){const V=c.newAttributes,z=c.enabledAttributes,N=c.attributeDivisors;V[R]=1,z[R]===0&&(r.enableVertexAttribArray(R),z[R]=1),N[R]!==U&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,U),N[R]=U)}function S(){const R=c.newAttributes,U=c.enabledAttributes;for(let V=0,z=U.length;V<z;V++)U[V]!==R[V]&&(r.disableVertexAttribArray(V),U[V]=0)}function w(R,U,V,z,N,J){n.isWebGL2===!0&&(V===5124||V===5125)?r.vertexAttribIPointer(R,U,V,N,J):r.vertexAttribPointer(R,U,V,z,N,J)}function D(R,U,V,z){if(n.isWebGL2===!1&&(R.isInstancedMesh||z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const N=z.attributes,J=V.getAttributes(),j=U.defaultAttributeValues;for(const Ae in J){const se=J[Ae];if(se.location>=0){let X=N[Ae];if(X===void 0&&(Ae==="instanceMatrix"&&R.instanceMatrix&&(X=R.instanceMatrix),Ae==="instanceColor"&&R.instanceColor&&(X=R.instanceColor)),X!==void 0){const Z=X.normalized,re=X.itemSize,fe=t.get(X);if(fe===void 0)continue;const G=fe.buffer,Ce=fe.type,ve=fe.bytesPerElement;if(X.isInterleavedBufferAttribute){const ae=X.data,Ie=ae.stride,ke=X.offset;if(ae.isInstancedInterleavedBuffer){for(let me=0;me<se.locationSize;me++)I(se.location+me,ae.meshPerAttribute);R.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let me=0;me<se.locationSize;me++)E(se.location+me);r.bindBuffer(34962,G);for(let me=0;me<se.locationSize;me++)w(se.location+me,re/se.locationSize,Ce,Z,Ie*ve,(ke+re/se.locationSize*me)*ve)}else{if(X.isInstancedBufferAttribute){for(let ae=0;ae<se.locationSize;ae++)I(se.location+ae,X.meshPerAttribute);R.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ae=0;ae<se.locationSize;ae++)E(se.location+ae);r.bindBuffer(34962,G);for(let ae=0;ae<se.locationSize;ae++)w(se.location+ae,re/se.locationSize,Ce,Z,re*ve,re/se.locationSize*ae*ve)}}else if(j!==void 0){const Z=j[Ae];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(se.location,Z);break;case 3:r.vertexAttrib3fv(se.location,Z);break;case 4:r.vertexAttrib4fv(se.location,Z);break;default:r.vertexAttrib1fv(se.location,Z)}}}}S()}function Q(){k();for(const R in o){const U=o[R];for(const V in U){const z=U[V];for(const N in z)g(z[N].object),delete z[N];delete U[V]}delete o[R]}}function x(R){if(o[R.id]===void 0)return;const U=o[R.id];for(const V in U){const z=U[V];for(const N in z)g(z[N].object),delete z[N];delete U[V]}delete o[R.id]}function M(R){for(const U in o){const V=o[U];if(V[R.id]===void 0)continue;const z=V[R.id];for(const N in z)g(z[N].object),delete z[N];delete V[R.id]}}function k(){L(),u=!0,c!==l&&(c=l,p(c.object))}function L(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:k,resetDefaultState:L,dispose:Q,releaseStatesOfGeometry:x,releaseStatesOfProgram:M,initAttributes:_,enableAttribute:E,disableUnusedAttributes:S}}function Dm(r,e,t,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let d,p;if(i)d=r,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,c,u,h),t.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function Lm(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),d=r.getParameter(35660),p=r.getParameter(3379),g=r.getParameter(34076),f=r.getParameter(34921),A=r.getParameter(36347),m=r.getParameter(36348),C=r.getParameter(36349),_=d>0,E=a||e.has("OES_texture_float"),I=_&&E,S=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:A,maxVaryings:m,maxFragmentUniforms:C,vertexTextures:_,floatFragmentTextures:E,floatVertexTextures:I,maxSamples:S}}function Pm(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Ai,o=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,p){const g=h.length!==0||d||n!==0||i;return i=d,t=u(h,p,0),n=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,d,p){const g=h.clippingPlanes,f=h.clipIntersection,A=h.clipShadows,m=r.get(h);if(!i||g===null||g.length===0||s&&!A)s?u(null):c();else{const C=s?0:n,_=C*4;let E=m.clippingState||null;l.value=E,E=u(g,d,_,p);for(let I=0;I!==_;++I)E[I]=t[I];m.clippingState=E,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const f=h!==null?h.length:0;let A=null;if(f!==0){if(A=l.value,g!==!0||A===null){const m=p+f*4,C=d.matrixWorldInverse;o.getNormalMatrix(C),(A===null||A.length<m)&&(A=new Float32Array(m));for(let _=0,E=p;_!==f;++_,E+=4)a.copy(h[_]).applyMatrix4(C,o),a.normal.toArray(A,E),A[E+3]=a.constant}l.value=A,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,A}}function Qm(r){let e=new WeakMap;function t(a,o){return o===Ns?a.mapping=vi:o===Os&&(a.mapping=Ii),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ns||o===Os)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new jA(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Zs extends qo{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ji=4,rc=[.125,.215,.35,.446,.526,.582],gi=20,Fa=new Zs,ac=new xe;let Er=null;const pi=(1+Math.sqrt(5))/2,Hi=1/pi,oc=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,pi,Hi),new T(0,pi,-Hi),new T(Hi,0,pi),new T(-Hi,0,pi),new T(pi,Hi,0),new T(-pi,Hi,0)];class So{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null}fromScene(e,t=0,n=.1,i=100){Er=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,void 0,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null,n=null){return this._fromTexture(e,t,n)}fromEquirectangularArray(e,t=null){return this._fromTextures(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Er),e.scissorTest=!1,Cr(e,0,0,e.width,e.height)}_fromTexture(e,t,n){e.mapping===vi||e.mapping===Ii?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Er=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i,void 0,n),this._applyPMREM(i),this._cleanup(i),i}_fromTextures(e,t){this._setSize(e[0].image.width/4),Er=this._renderer.getRenderTarget();const n=this._allocateTargets(e.length);for(let i=0;i<e.length;i++){const s=e[i];s.mapping===Ns||s.mapping===Os||console.warn("THREE.PMREMGenerator texture array must be created from equirectangular cubemaps"),this._textureToCubeUV(s,n,i,t),this._applyPMREM(n,i)}return this._cleanup(n),n}_allocateTargets(e=0){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i=lc(t,n,e);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lc(t,n,e);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fm(s)),this._blurMaterial=Um(s,t,n,e)}return i}_compileMaterial(e){const t=new Ut(this._lodPlanes[0],e);this._renderer.compile(t,Fa)}_sceneToCubeUV(e,t,n,i){const o=new Ft(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(ac),u.toneMapping=yn,u.autoClear=!1;const p=new Cn({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),g=new Ut(new Ks,p);let f=!1;const A=e.background;A?A.isColor&&(p.color.copy(A),e.background=null,f=!0):(p.color.copy(ac),f=!0);for(let m=0;m<6;m++){const C=m%3;C===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):C===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const _=this._cubeSize;Cr(i,C*_,m>2?_:0,_,_),u.setRenderTarget(i),f&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=A}_textureToCubeUV(e,t,n,i){const s=this._renderer,a=e.mapping===vi||e.mapping===Ii;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cc());const o=a?this._cubemapMaterial:this._equirectMaterial,l=new Ut(this._lodPlanes[0],o),c=o.uniforms;c.envMap.value=e,a||(i?c.hdrDecodeParams.value.copy(i):c.hdrDecodeParams.value.set(1,1));const u=this._cubeSize;Cr(t,0,0,3*u,2*u),s.setRenderTarget(t,n),s.render(l,Fa)}_applyPMREM(e,t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=oc[(s-1)%oc.length];this._blur(e,t,s-1,s,a,o)}n.autoClear=i}_blur(e,t,n,i,s,a){const o=this._pingPongRenderTarget;this._halfBlur(e,t,o,t,n,i,s,"latitudinal",a),this._halfBlur(o,t,e,t,i,i,s,"longitudinal",a)}_halfBlur(e,t,n,i,s,a,o,l,c){const u=this._renderer,h=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new Ut(this._lodPlanes[a],h),g=h.uniforms,f=this._sizeLods[s]-1,A=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*gi-1),m=o/A,C=isFinite(o)?1+Math.floor(d*m):gi;C>gi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${C} samples when the maximum is set to ${gi}`);const _=[];let E=0;for(let Q=0;Q<gi;++Q){const x=Q/m,M=Math.exp(-x*x/2);_.push(M),Q===0?E+=M:Q<C&&(E+=2*M)}for(let Q=0;Q<_.length;Q++)_[Q]=_[Q]/E;g.envMap.value=e.texture,g.envMapIndex.value=t,g.samples.value=C,g.weights.value=_,g.latitudinal.value=l==="latitudinal",c&&(g.poleAxis.value=c);const{_lodMax:I}=this;g.dTheta.value=A,g.mipInt.value=I-s;const S=this._sizeLods[a],w=3*S*(a>I-ji?a-I+ji:0),D=4*(this._cubeSize-S);Cr(n,w,D,3*S,2*S),u.setRenderTarget(n,i),u.render(p,Fa)}}function Fm(r){const e=[],t=[],n=[];let i=r;const s=r-ji+1+rc.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-ji?l=rc[a-r+ji-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,f=3,A=2,m=1,C=new Float32Array(f*g*p),_=new Float32Array(A*g*p),E=new Float32Array(m*g*p);for(let S=0;S<p;S++){const w=S%3*2/3-1,D=S>2?0:-1,Q=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];C.set(Q,f*g*S),_.set(d,A*g*S);const x=[S,S,S,S,S,S];E.set(x,m*g*S)}const I=new yt;I.setAttribute("position",new ht(C,f)),I.setAttribute("uv",new ht(_,A)),I.setAttribute("faceIndex",new ht(E,m)),e.push(I),i>ji&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function lc(r,e,t){let n;return t?n=new LA(r,e,t):n=new et(r,e),n.texture.mapping=Js,n.texture.name="PMREM.cubeUv",n.texture.magFilter=Ge,n.texture.minFilter=Ge,n.texture.generateMipmaps=!1,n.texture.type=Gt,n.texture.format=gt,n.texture.encoding=sn,n.scissorTest=!0,n.depthBuffer=!1,n}function Cr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Um(r,e,t,n){const i=new Float32Array(gi),s=new T(0,1,0);return new lt({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`,CUBEUV_2D_SAMPLER_ARRAY:n?"":void 0},uniforms:{envMap:{value:null},envMapIndex:{value:0},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			#ifdef CUBEUV_2D_SAMPLER_ARRAY
			uniform mediump sampler2DArray envMap;
			#else
			uniform sampler2D envMap;
			#endif

			uniform float envMapIndex;
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

				#ifdef CUBEUV_2D_SAMPLER_ARRAY
					vec3 sampleParams = vec3( CUBEUV_MAX_MIP, CUBEUV_TEXEL_WIDTH, CUBEUV_TEXEL_HEIGHT );
					return bilinearCubeUVArray( envMap, envMapIndex, sampleParams, sampleDirection, mipInt );
				#else
					return bilinearCubeUV( envMap, sampleDirection, mipInt );
				#endif

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function cc(){return new lt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},hdrDecodeParams:{value:new ce(1,1)}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 hdrDecodeParams;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec4 color = texture2D ( envMap, uv );
				color.rgb = hdrDecodeParams.x * pow(color.a, hdrDecodeParams.y) * color.rgb;
				gl_FragColor = vec4( color.rgb, 1.0 );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function uc(){return new lt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Xo(){return`

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
	`}function Nm(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ns||l===Os,u=l===vi||l===Ii;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new So(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new So(r));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Om(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Gm(r,e,t,n){const i={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],34962);const p=h.morphAttributes;for(const g in p){const f=p[g];for(let A=0,m=f.length;A<m;A++)e.update(f[A],34962)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let f=0;if(p!==null){const C=p.array;f=p.version;for(let _=0,E=C.length;_<E;_+=3){const I=C[_+0],S=C[_+1],w=C[_+2];d.push(I,S,S,w,w,I)}}else{const C=g.array;f=g.version;for(let _=0,E=C.length/3-1;_<E;_+=3){const I=_+0,S=_+1,w=_+2;d.push(I,S,S,w,w,I)}}const A=new(Uu(d)?Vu:ku)(d,1);A.version=f;const m=s.get(h);m&&e.remove(m),s.set(h,A)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function km(r,e,t,n){const i=n.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,p){r.drawElements(s,p,o,d*l),t.update(p,s,1)}function h(d,p,g){if(g===0)return;let f,A;if(i)f=r,A="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),A="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[A](s,p,o,d*l,g),t.update(p,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function Vm(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function zm(r,e){return r[0]-e[0]}function Hm(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Wm(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new Ye,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h,d){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,f=g!==void 0?g.length:0;let A=s.get(u);if(A===void 0||A.count!==f){let U=function(){L.dispose(),s.delete(u),u.removeEventListener("dispose",U)};A!==void 0&&A.texture.dispose();const _=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,I=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let Q=0;_===!0&&(Q=1),E===!0&&(Q=2),I===!0&&(Q=3);let x=u.attributes.position.count*Q,M=1;x>e.maxTextureSize&&(M=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const k=new Float32Array(x*M*4*f),L=new zo(k,x,M,f);L.type=Ze,L.needsUpdate=!0;const R=Q*4;for(let V=0;V<f;V++){const z=S[V],N=w[V],J=D[V],j=x*M*4*V;for(let Ae=0;Ae<z.count;Ae++){const se=Ae*R;_===!0&&(a.fromBufferAttribute(z,Ae),k[j+se+0]=a.x,k[j+se+1]=a.y,k[j+se+2]=a.z,k[j+se+3]=0),E===!0&&(a.fromBufferAttribute(N,Ae),k[j+se+4]=a.x,k[j+se+5]=a.y,k[j+se+6]=a.z,k[j+se+7]=0),I===!0&&(a.fromBufferAttribute(J,Ae),k[j+se+8]=a.x,k[j+se+9]=a.y,k[j+se+10]=a.z,k[j+se+11]=J.itemSize===4?a.w:1)}}A={count:f,texture:L,size:new ce(x,M)},s.set(u,A),u.addEventListener("dispose",U)}let m=0;for(let _=0;_<p.length;_++)m+=p[_];const C=u.morphTargetsRelative?1:1-m;d.getUniforms().setValue(r,"morphTargetBaseInfluence",C),d.getUniforms().setValue(r,"morphTargetInfluences",p),d.getUniforms().setValue(r,"morphTargetsTexture",A.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",A.size)}else{const g=p===void 0?0:p.length;let f=n[u.id];if(f===void 0||f.length!==g){f=[];for(let E=0;E<g;E++)f[E]=[E,0];n[u.id]=f}for(let E=0;E<g;E++){const I=f[E];I[0]=E,I[1]=p[E]}f.sort(Hm);for(let E=0;E<8;E++)E<g&&f[E][1]?(o[E][0]=f[E][0],o[E][1]=f[E][1]):(o[E][0]=Number.MAX_SAFE_INTEGER,o[E][1]=0);o.sort(zm);const A=u.morphAttributes.position,m=u.morphAttributes.normal;let C=0;for(let E=0;E<8;E++){const I=o[E],S=I[0],w=I[1];S!==Number.MAX_SAFE_INTEGER&&w?(A&&u.getAttribute("morphTarget"+E)!==A[S]&&u.setAttribute("morphTarget"+E,A[S]),m&&u.getAttribute("morphNormal"+E)!==m[S]&&u.setAttribute("morphNormal"+E,m[S]),i[E]=w,C+=w):(A&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),m&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),i[E]=0)}const _=u.morphTargetsRelative?1:1-C;d.getUniforms().setValue(r,"morphTargetBaseInfluence",_),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function qm(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const qu=new Ke,Xu=new zo,ju=new Ho,Yu=new Hu,hc=[],dc=[],fc=new Float32Array(16),Ac=new Float32Array(9),pc=new Float32Array(4);function cs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=hc[i];if(s===void 0&&(s=new Float32Array(i),hc[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function dt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ft(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ea(r,e){let t=dc[e];t===void 0&&(t=new Int32Array(e),dc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Xm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function jm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;r.uniform2fv(this.addr,e),ft(t,e)}}function Ym(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;r.uniform3fv(this.addr,e),ft(t,e)}}function Jm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;r.uniform4fv(this.addr,e),ft(t,e)}}function Km(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;pc.set(n),r.uniformMatrix2fv(this.addr,!1,pc),ft(t,n)}}function Zm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Ac.set(n),r.uniformMatrix3fv(this.addr,!1,Ac),ft(t,n)}}function $m(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;fc.set(n),r.uniformMatrix4fv(this.addr,!1,fc),ft(t,n)}}function e_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function t_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;r.uniform2iv(this.addr,e),ft(t,e)}}function n_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;r.uniform3iv(this.addr,e),ft(t,e)}}function i_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;r.uniform4iv(this.addr,e),ft(t,e)}}function s_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function r_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;r.uniform2uiv(this.addr,e),ft(t,e)}}function a_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;r.uniform3uiv(this.addr,e),ft(t,e)}}function o_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;r.uniform4uiv(this.addr,e),ft(t,e)}}function l_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||qu,i)}function c_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ju,i)}function u_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Yu,i)}function h_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Xu,i)}function d_(r){switch(r){case 5126:return Xm;case 35664:return jm;case 35665:return Ym;case 35666:return Jm;case 35674:return Km;case 35675:return Zm;case 35676:return $m;case 5124:case 35670:return e_;case 35667:case 35671:return t_;case 35668:case 35672:return n_;case 35669:case 35673:return i_;case 5125:return s_;case 36294:return r_;case 36295:return a_;case 36296:return o_;case 35678:case 36198:case 36298:case 36306:case 35682:return l_;case 35679:case 36299:case 36307:return c_;case 35680:case 36300:case 36308:case 36293:return u_;case 36289:case 36303:case 36311:case 36292:return h_}}function f_(r,e){r.uniform1fv(this.addr,e)}function A_(r,e){const t=cs(e,this.size,2);r.uniform2fv(this.addr,t)}function p_(r,e){const t=cs(e,this.size,3);r.uniform3fv(this.addr,t)}function g_(r,e){const t=cs(e,this.size,4);r.uniform4fv(this.addr,t)}function m_(r,e){const t=cs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function __(r,e){const t=cs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function x_(r,e){const t=cs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function E_(r,e){r.uniform1iv(this.addr,e)}function C_(r,e){r.uniform2iv(this.addr,e)}function v_(r,e){r.uniform3iv(this.addr,e)}function I_(r,e){r.uniform4iv(this.addr,e)}function y_(r,e){r.uniform1uiv(this.addr,e)}function M_(r,e){r.uniform2uiv(this.addr,e)}function S_(r,e){r.uniform3uiv(this.addr,e)}function b_(r,e){r.uniform4uiv(this.addr,e)}function w_(r,e,t){const n=this.cache,i=e.length,s=ea(t,i);dt(n,s)||(r.uniform1iv(this.addr,s),ft(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||qu,s[a])}function B_(r,e,t){const n=this.cache,i=e.length,s=ea(t,i);dt(n,s)||(r.uniform1iv(this.addr,s),ft(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||ju,s[a])}function T_(r,e,t){const n=this.cache,i=e.length,s=ea(t,i);dt(n,s)||(r.uniform1iv(this.addr,s),ft(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Yu,s[a])}function R_(r,e,t){const n=this.cache,i=e.length,s=ea(t,i);dt(n,s)||(r.uniform1iv(this.addr,s),ft(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Xu,s[a])}function D_(r){switch(r){case 5126:return f_;case 35664:return A_;case 35665:return p_;case 35666:return g_;case 35674:return m_;case 35675:return __;case 35676:return x_;case 5124:case 35670:return E_;case 35667:case 35671:return C_;case 35668:case 35672:return v_;case 35669:case 35673:return I_;case 5125:return y_;case 36294:return M_;case 36295:return S_;case 36296:return b_;case 35678:case 36198:case 36298:case 36306:case 35682:return w_;case 35679:case 36299:case 36307:return B_;case 35680:case 36300:case 36308:case 36293:return T_;case 36289:case 36303:case 36311:case 36292:return R_}}class L_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=d_(t.type)}}class P_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=D_(t.type)}}class Q_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Ua=/(\w+)(\])?(\[|\.)?/g;function gc(r,e){r.seq.push(e),r.map[e.id]=e}function F_(r,e,t){const n=r.name,i=n.length;for(Ua.lastIndex=0;;){const s=Ua.exec(n),a=Ua.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){gc(t,c===void 0?new L_(o,r,e):new P_(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new Q_(o),gc(t,h)),t=h}}}class bo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);F_(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t,n){n.length=0;for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function mc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let U_=0;function N_(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function O_(r){switch(r){case sn:return["Linear","( value )"];case Le:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function _c(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+N_(r.getShaderSource(e),a)}else return i}function G_(r,e){const t=O_(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function k_(r,e){let t;switch(e){case Jf:t="Linear";break;case Kf:t="Reinhard";break;case Zf:t="OptimizedCineon";break;case $f:t="ACESFilmic";break;case eA:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function V_(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ds).join(`
`)}function z_(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function H_(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Ds(r){return r!==""}function xc(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ec(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const W_=/^[ \t]*#include +<([\w\d./]+)>/gm;function wo(r){return r.replace(W_,q_)}function q_(r,e){const t=le[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return wo(t)}const X_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cc(r){return r.replace(X_,j_)}function j_(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function vc(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Y_(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Mu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Su?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ws&&(e="SHADOWMAP_TYPE_VSM"),e}function J_(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case vi:case Ii:e="ENVMAP_TYPE_CUBE";break;case Js:e="ENVMAP_TYPE_CUBE_UV";break}return e}function K_(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ii:e="ENVMAP_MODE_REFRACTION";break}return e}function Z_(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Bu:e="ENVMAP_BLENDING_MULTIPLY";break;case jf:e="ENVMAP_BLENDING_MIX";break;case Yf:e="ENVMAP_BLENDING_ADD";break}return e}function $_(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function e0(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Y_(t),c=J_(t),u=K_(t),h=Z_(t),d=$_(t),p=t.isWebGL2?"":V_(t),g=z_(s),f=i.createProgram();let A,m,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";var _=t.numMultiviewViews;t.isRawShaderMaterial?(A=[g].filter(Ds).join(`
`),A.length>0&&(A+=`
`),m=[p,g].filter(Ds).join(`
`),m.length>0&&(m+=`
`)):(A=[vc(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),m=[p,vc(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yn?"#define TONE_MAPPING":"",t.toneMapping!==yn?le.tonemapping_pars_fragment:"",t.toneMapping!==yn?k_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",le.encodings_pars_fragment,G_("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ds).join(`
`)),a=wo(a),a=xc(a,t),a=Ec(a,t),o=wo(o),o=xc(o,t),o=Ec(o,t),a=Cc(a),o=Cc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,A=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,m=["#define varying in",t.glslVersion===Xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m,_>0&&(A=["#extension GL_OVR_multiview : require","layout(num_views = "+_+") in;","#define VIEW_ID gl_ViewID_OVR"].join(`
`)+`
`+A,A=A.replace(["uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;"].join(`
`),["uniform mat4 modelViewMatrices["+_+"];","uniform mat4 projectionMatrices["+_+"];","uniform mat4 viewMatrices["+_+"];","uniform mat3 normalMatrices["+_+"];","#define modelViewMatrix modelViewMatrices[VIEW_ID]","#define projectionMatrix projectionMatrices[VIEW_ID]","#define viewMatrix viewMatrices[VIEW_ID]","#define normalMatrix normalMatrices[VIEW_ID]"].join(`
`)),m=["#extension GL_OVR_multiview : require","#define VIEW_ID gl_ViewID_OVR"].join(`
`)+`
`+m,m=m.replace("uniform mat4 viewMatrix;",["uniform mat4 viewMatrices["+_+"];","#define viewMatrix viewMatrices[VIEW_ID]"].join(`
`))));const E=C+A+a,I=C+m+o,S=mc(i,35633,E),w=mc(i,35632,I);if(i.attachShader(f,S),i.attachShader(f,w),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),r.debug.checkShaderErrors){const x=i.getProgramInfoLog(f).trim(),M=i.getShaderInfoLog(S).trim(),k=i.getShaderInfoLog(w).trim();let L=!0,R=!0;if(i.getProgramParameter(f,35714)===!1){L=!1;const U=_c(i,S,"vertex"),V=_c(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,35715)+`

Program Info Log: `+x+`
`+U+`
`+V)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(M===""||k==="")&&(R=!1);R&&(this.diagnostics={runnable:L,programLog:x,vertexShader:{log:M,prefix:A},fragmentShader:{log:k,prefix:m}})}i.deleteShader(S),i.deleteShader(w);let D;this.getUniforms=function(){return D===void 0&&(D=new bo(i,f)),D};let Q;return this.getAttributes=function(){return Q===void 0&&(Q=H_(i,f)),Q},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.name=t.shaderName,this.id=U_++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=S,this.fragmentShader=w,this.numMultiviewViews=_,this}let t0=0;class n0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new i0(e),t.set(e,n)),n}}class i0{constructor(e){this.id=t0++,this.code=e,this.usedTimes=0}}function s0(r,e,t,n,i,s,a){const o=new Wo,l=new n0,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};let f;function A(x,M,k,L,R){const U=L.fog,V=R.geometry,z=x.isMeshStandardMaterial?L.environment:null,N=(x.isMeshStandardMaterial?t:e).get(x.envMap||z),J=N&&N.mapping===Js?N.image.height:null,j=g[x.type];x.precision!==null&&(p=i.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const Ae=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,se=Ae!==void 0?Ae.length:0;let X=0;V.morphAttributes.position!==void 0&&(X=1),V.morphAttributes.normal!==void 0&&(X=2),V.morphAttributes.color!==void 0&&(X=3);let Z,re,fe,G;if(j){const me=En[j];Z=me.vertexShader,re=me.fragmentShader}else Z=x.vertexShader,re=x.fragmentShader,l.update(x),fe=l.getVertexShaderID(x),G=l.getFragmentShaderID(x);const Ce=r.getRenderTarget(),ve=Ce&&Ce.isWebGLMultiviewRenderTarget?Ce.numViews:0,ae=x.alphaTest>0,Ie=x.clearcoat>0,ke=x.iridescence>0;return f||(f={}),f.isWebGL2=u,f.shaderID=j,f.shaderName=x.type,f.vertexShader=Z,f.fragmentShader=re,f.defines=x.defines,f.customVertexShaderID=fe,f.customFragmentShaderID=G,f.isRawShaderMaterial=x.isRawShaderMaterial===!0,f.glslVersion=x.glslVersion,f.precision=p,f.instancing=R.isInstancedMesh===!0,f.instancingColor=R.isInstancedMesh===!0&&R.instanceColor!==null,f.supportsVertexTextures=d,f.numMultiviewViews=ve,f.outputEncoding=Ce===null?r.outputEncoding:Ce.isXRRenderTarget===!0?Ce.texture.encoding:sn,f.map=!!x.map,f.matcap=!!x.matcap,f.envMap=!!N,f.envMapMode=N&&N.mapping,f.envMapCubeUVHeight=J,f.lightMap=!!x.lightMap,f.aoMap=!!x.aoMap,f.emissiveMap=!!x.emissiveMap,f.bumpMap=!!x.bumpMap,f.normalMap=!!x.normalMap,f.objectSpaceNormalMap=x.normalMapType===mA,f.tangentSpaceNormalMap=x.normalMapType===Pu,f.decodeVideoTexture=!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Le,f.clearcoat=Ie,f.clearcoatMap=Ie&&!!x.clearcoatMap,f.clearcoatRoughnessMap=Ie&&!!x.clearcoatRoughnessMap,f.clearcoatNormalMap=Ie&&!!x.clearcoatNormalMap,f.iridescence=ke,f.iridescenceMap=ke&&!!x.iridescenceMap,f.iridescenceThicknessMap=ke&&!!x.iridescenceThicknessMap,f.displacementMap=!!x.displacementMap,f.roughnessMap=!!x.roughnessMap,f.metalnessMap=!!x.metalnessMap,f.specularMap=!!x.specularMap,f.specularIntensityMap=!!x.specularIntensityMap,f.specularColorMap=!!x.specularColorMap,f.opaque=x.transparent===!1&&x.blending===Zi,f.alphaMap=!!x.alphaMap,f.alphaTest=ae,f.gradientMap=!!x.gradientMap,f.sheen=x.sheen>0,f.sheenColorMap=!!x.sheenColorMap,f.sheenRoughnessMap=!!x.sheenRoughnessMap,f.transmission=x.transmission>0,f.transmissionMap=!!x.transmissionMap,f.thicknessMap=!!x.thicknessMap,f.combine=x.combine,f.vertexTangents=!!x.normalMap&&!!V.attributes.tangent,f.vertexColors=x.vertexColors,f.vertexAlphas=x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,f.vertexUvs=!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,f.uvsVertexOnly=!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,f.fog=!!U,f.useFog=x.fog===!0,f.fogExp2=U&&U.isFogExp2,f.flatShading=!!x.flatShading,f.sizeAttenuation=x.sizeAttenuation,f.logarithmicDepthBuffer=h,f.skinning=R.isSkinnedMesh===!0,f.morphTargets=V.morphAttributes.position!==void 0,f.morphNormals=V.morphAttributes.normal!==void 0,f.morphColors=V.morphAttributes.color!==void 0,f.morphTargetsCount=se,f.morphTextureStride=X,f.numDirLights=M.directional.length,f.numPointLights=M.point.length,f.numSpotLights=M.spot.length,f.numSpotLightMaps=M.spotLightMap.length,f.numRectAreaLights=M.rectArea.length,f.numHemiLights=M.hemi.length,f.numDirLightShadows=M.directionalShadowMap.length,f.numPointLightShadows=M.pointShadowMap.length,f.numSpotLightShadows=M.spotShadowMap.length,f.numSpotLightShadowsWithMaps=M.numSpotLightShadowsWithMaps,f.numClippingPlanes=a.numPlanes,f.numClipIntersection=a.numIntersection,f.dithering=x.dithering,f.shadowMapEnabled=r.shadowMap.enabled&&k.length>0,f.shadowMapType=r.shadowMap.type,f.toneMapping=x.toneMapped?r.toneMapping:yn,f.physicallyCorrectLights=r.physicallyCorrectLights,f.premultipliedAlpha=x.premultipliedAlpha,f.doubleSided=x.side===fn,f.flipSided=x.side===qt,f.useDepthPacking=!!x.depthPacking,f.depthPacking=x.depthPacking||0,f.index0AttributeName=x.index0AttributeName,f.extensionDerivatives=x.extensions&&x.extensions.derivatives,f.extensionFragDepth=x.extensions&&x.extensions.fragDepth,f.extensionDrawBuffers=x.extensions&&x.extensions.drawBuffers,f.extensionShaderTextureLOD=x.extensions&&x.extensions.shaderTextureLOD,f.rendererExtensionFragDepth=u||n.has("EXT_frag_depth"),f.rendererExtensionDrawBuffers=u||n.has("WEBGL_draw_buffers"),f.rendererExtensionShaderTextureLod=u||n.has("EXT_shader_texture_lod"),f.customProgramCacheKey=x.customProgramCacheKey(),f}const m=[];function C(x){if(m.length=0,x.shaderID?m.push(x.shaderID):(m.push(x.customVertexShaderID),m.push(x.customFragmentShaderID)),x.defines!==void 0)for(const M in x.defines)m.push(M),m.push(x.defines[M]);return x.isRawShaderMaterial===!1&&(_(m,x),E(m,x),m.push(r.outputEncoding)),m.push(x.customProgramCacheKey),m.join()}function _(x,M){x.push(M.precision),x.push(M.outputEncoding),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.combine),x.push(M.vertexUvs),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function E(x,M){o.disableAll(),M.isWebGL2&&o.enable(0),M.supportsVertexTextures&&o.enable(1),M.instancing&&o.enable(2),M.instancingColor&&o.enable(3),M.map&&o.enable(4),M.matcap&&o.enable(5),M.envMap&&o.enable(6),M.lightMap&&o.enable(7),M.aoMap&&o.enable(8),M.emissiveMap&&o.enable(9),M.bumpMap&&o.enable(10),M.normalMap&&o.enable(11),M.objectSpaceNormalMap&&o.enable(12),M.tangentSpaceNormalMap&&o.enable(13),M.clearcoat&&o.enable(14),M.clearcoatMap&&o.enable(15),M.clearcoatRoughnessMap&&o.enable(16),M.clearcoatNormalMap&&o.enable(17),M.iridescence&&o.enable(18),M.iridescenceMap&&o.enable(19),M.iridescenceThicknessMap&&o.enable(20),M.displacementMap&&o.enable(21),M.specularMap&&o.enable(22),M.roughnessMap&&o.enable(23),M.metalnessMap&&o.enable(24),M.gradientMap&&o.enable(25),M.alphaMap&&o.enable(26),M.alphaTest&&o.enable(27),M.vertexColors&&o.enable(28),M.vertexAlphas&&o.enable(29),M.vertexUvs&&o.enable(30),M.vertexTangents&&o.enable(31),M.uvsVertexOnly&&o.enable(32),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.physicallyCorrectLights&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.specularIntensityMap&&o.enable(15),M.specularColorMap&&o.enable(16),M.transmission&&o.enable(17),M.transmissionMap&&o.enable(18),M.thicknessMap&&o.enable(19),M.sheen&&o.enable(20),M.sheenColorMap&&o.enable(21),M.sheenRoughnessMap&&o.enable(22),M.decodeVideoTexture&&o.enable(23),M.opaque&&o.enable(24),M.numMultiviewViews&&o.enable(25),x.push(o.mask)}function I(x){const M=g[x.type];let k;if(M){const L=En[M];k=Ws.clone(L.uniforms)}else k=x.uniforms;return k}function S(x,M){let k;for(let L=0,R=c.length;L<R;L++){const U=c[L];if(U.cacheKey===M){k=U,++k.usedTimes;break}}return k===void 0&&(k=new e0(r,M,x,s),c.push(k)),k}function w(x){if(--x.usedTimes===0){const M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),x.destroy()}}function D(x){l.remove(x)}function Q(){l.dispose()}return{getParameters:A,getProgramCacheKey:C,getUniforms:I,acquireProgram:S,releaseProgram:w,releaseShaderCache:D,programs:c,dispose:Q}}function r0(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function a0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ic(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function yc(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,p,g,f,A){let m=r[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:f,group:A},r[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=p,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=f,m.group=A),e++,m}function o(h,d,p,g,f,A){const m=a(h,d,p,g,f,A);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):t.push(m)}function l(h,d,p,g,f,A){const m=a(h,d,p,g,f,A);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||a0),n.length>1&&n.sort(d||Ic),i.length>1&&i.sort(d||Ic)}function u(){for(let h=e,d=r.length;h<d;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function o0(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new yc,r.set(n,[a])):i>=s.length?(a=new yc,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function l0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new xe};break;case"SpotLight":t={position:new T,direction:new T,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new T,halfWidth:new T,halfHeight:new T};break}return r[e.id]=t,t}}}function c0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let u0=0;function h0(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function d0(r,e){const t=new l0,n=c0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new T);const s=new T,a=new ge,o=new ge;function l(u,h){let d=0,p=0,g=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let f=0,A=0,m=0,C=0,_=0,E=0,I=0,S=0,w=0,D=0;u.sort(h0);const Q=h!==!0?Math.PI:1;for(let M=0,k=u.length;M<k;M++){const L=u[M],R=L.color,U=L.intensity,V=L.distance,z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=R.r*U*Q,p+=R.g*U*Q,g+=R.b*U*Q;else if(L.isLightProbe)for(let N=0;N<9;N++)i.probe[N].addScaledVector(L.sh.coefficients[N],U);else if(L.isDirectionalLight){const N=t.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity*Q),L.castShadow){const J=L.shadow,j=n.get(L);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,i.directionalShadow[f]=j,i.directionalShadowMap[f]=z,i.directionalShadowMatrix[f]=L.shadow.matrix,E++}i.directional[f]=N,f++}else if(L.isSpotLight){const N=t.get(L);N.position.setFromMatrixPosition(L.matrixWorld),N.color.copy(R).multiplyScalar(U*Q),N.distance=V,N.coneCos=Math.cos(L.angle),N.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),N.decay=L.decay,i.spot[m]=N;const J=L.shadow;if(L.map&&(i.spotLightMap[w]=L.map,w++,J.updateMatrices(L),L.castShadow&&D++),i.spotLightMatrix[m]=J.matrix,L.castShadow){const j=n.get(L);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,i.spotShadow[m]=j,i.spotShadowMap[m]=z,S++}m++}else if(L.isRectAreaLight){const N=t.get(L);N.color.copy(R).multiplyScalar(U),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),i.rectArea[C]=N,C++}else if(L.isPointLight){const N=t.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity*Q),N.distance=L.distance,N.decay=L.decay,L.castShadow){const J=L.shadow,j=n.get(L);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,j.shadowCameraNear=J.camera.near,j.shadowCameraFar=J.camera.far,i.pointShadow[A]=j,i.pointShadowMap[A]=z,i.pointShadowMatrix[A]=L.shadow.matrix,I++}i.point[A]=N,A++}else if(L.isHemisphereLight){const N=t.get(L);N.skyColor.copy(L.color).multiplyScalar(U*Q),N.groundColor.copy(L.groundColor).multiplyScalar(U*Q),i.hemi[_]=N,_++}}C>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const x=i.hash;(x.directionalLength!==f||x.pointLength!==A||x.spotLength!==m||x.rectAreaLength!==C||x.hemiLength!==_||x.numDirectionalShadows!==E||x.numPointShadows!==I||x.numSpotShadows!==S||x.numSpotMaps!==w)&&(i.directional.length=f,i.spot.length=m,i.rectArea.length=C,i.point.length=A,i.hemi.length=_,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=I,i.pointShadowMap.length=I,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=I,i.spotLightMatrix.length=S+w-D,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=D,x.directionalLength=f,x.pointLength=A,x.spotLength=m,x.rectAreaLength=C,x.hemiLength=_,x.numDirectionalShadows=E,x.numPointShadows=I,x.numSpotShadows=S,x.numSpotMaps=w,i.version=u0++)}function c(u,h){let d=0,p=0,g=0,f=0,A=0;const m=h.matrixWorldInverse;for(let C=0,_=u.length;C<_;C++){const E=u[C];if(E.isDirectionalLight){const I=i.directional[d];I.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(m),d++}else if(E.isSpotLight){const I=i.spot[g];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(m),I.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(m),g++}else if(E.isRectAreaLight){const I=i.rectArea[f];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(m),o.identity(),a.copy(E.matrixWorld),a.premultiply(m),o.extractRotation(a),I.halfWidth.set(E.width*.5,0,0),I.halfHeight.set(0,E.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),f++}else if(E.isPointLight){const I=i.point[p];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(m),p++}else if(E.isHemisphereLight){const I=i.hemi[A];I.direction.setFromMatrixPosition(E.matrixWorld),I.direction.transformDirection(m),A++}}}return{setup:l,setupView:c,state:i}}function Mc(r,e){const t=new d0(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function f0(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Mc(r,e),t.set(s,[l])):a>=o.length?(l=new Mc(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Ju extends Mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class A0 extends Mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new T,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const p0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g0=`uniform sampler2D shadow_pass;
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
}`;function m0(r,e,t){let n=new Zr;const i=new ce,s=new ce,a=new Ye,o=new Ju({depthPacking:Lu}),l=new A0,c={},u=t.maxTextureSize,h={[nn]:qt,[qt]:nn,[fn]:fn,[Bs]:fn},d=new lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:p0,fragmentShader:g0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new yt;g.setAttribute("position",new ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new Ut(g,d),A=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mu,this.render=function(E,I,S){if(A.enabled===!1||A.autoUpdate===!1&&A.needsUpdate===!1||E.length===0)return;const w=r.getRenderTarget(),D=r.getActiveCubeFace(),Q=r.getActiveMipmapLevel(),x=r.state;x.setBlending(In),x.buffers.color.setClear(1,1,1,1),x.buffers.depth.setTest(!0),x.setScissorTest(!1);for(let M=0,k=E.length;M<k;M++){const L=E[M],R=L.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",L,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const U=R.getFrameExtents();if(i.multiply(U),s.copy(R.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/U.x),i.x=s.x*U.x,R.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/U.y),i.y=s.y*U.y,R.mapSize.y=s.y)),R.map===null){const z=this.type!==ws?{minFilter:ot,magFilter:ot}:{};R.map=new et(i.x,i.y,z),R.map.texture.name=L.name+".shadowMap",R.camera.updateProjectionMatrix()}r.setRenderTarget(R.map),r.clear();const V=R.getViewportCount();for(let z=0;z<V;z++){const N=R.getViewport(z);a.set(s.x*N.x,s.y*N.y,s.x*N.z,s.y*N.w),x.viewport(a),R.updateMatrices(L,z),n=R.getFrustum(),_(I,S,R.camera,L,this.type)}R.isPointLightShadow!==!0&&this.type===ws&&m(R,S),R.needsUpdate=!1}A.needsUpdate=!1,r.setRenderTarget(w,D,Q)};function m(E,I){const S=e.update(f);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new et(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(I,null,S,d,f,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(I,null,S,p,f,null)}function C(E,I,S,w,D,Q){let x=null;const M=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(M!==void 0)x=M;else if(x=S.isPointLight===!0?l:o,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const k=x.uuid,L=I.uuid;let R=c[k];R===void 0&&(R={},c[k]=R);let U=R[L];U===void 0&&(U=x.clone(),R[L]=U),x=U}return x.visible=I.visible,x.wireframe=I.wireframe,Q===ws?x.side=I.shadowSide!==null?I.shadowSide:I.side:x.side=I.shadowSide!==null?I.shadowSide:h[I.side],x.alphaMap=I.alphaMap,x.alphaTest=I.alphaTest,x.map=I.map,x.clipShadows=I.clipShadows,x.clippingPlanes=I.clippingPlanes,x.clipIntersection=I.clipIntersection,x.displacementMap=I.displacementMap,x.displacementScale=I.displacementScale,x.displacementBias=I.displacementBias,x.wireframeLinewidth=I.wireframeLinewidth,x.linewidth=I.linewidth,S.isPointLight===!0&&x.isMeshDistanceMaterial===!0&&(x.referencePosition.setFromMatrixPosition(S.matrixWorld),x.nearDistance=w,x.farDistance=D),x}function _(E,I,S,w,D){if(E.visible===!1)return;if(E.layers.test(I.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===ws)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);const M=e.update(E),k=E.material;if(Array.isArray(k)){const L=M.groups;for(let R=0,U=L.length;R<U;R++){const V=L[R],z=k[V.materialIndex];if(z&&z.visible){const N=C(E,z,w,S.near,S.far,D);r.renderBufferDirect(S,null,M,N,E,V)}}}else if(k.visible){const L=C(E,k,w,S.near,S.far,D);r.renderBufferDirect(S,null,M,L,E,null)}}const x=E.children;for(let M=0,k=x.length;M<k;M++)_(x[M],I,S,w,D)}}function _0(r,e,t){const n=t.isWebGL2;function i(){let B=!1;const Y=new Ye;let te=null;const oe=new Ye(0,0,0,0);return{setMask:function(de){te!==de&&!B&&(r.colorMask(de,de,de,de),te=de)},setLocked:function(de){B=de},setClear:function(de,ye,ee,_e,We){We===!0&&(de*=_e,ye*=_e,ee*=_e),Y.set(de,ye,ee,_e),oe.equals(Y)===!1&&(r.clearColor(de,ye,ee,_e),oe.copy(Y))},reset:function(){B=!1,te=null,oe.set(-1,0,0,0)}}}function s(){let B=!1,Y=null,te=null,oe=null;return{setTest:function(de){de?G(2929):Ce(2929)},setMask:function(de){Y!==de&&!B&&(r.depthMask(de),Y=de)},setFunc:function(de){if(te!==de){switch(de){case kf:r.depthFunc(512);break;case Vf:r.depthFunc(519);break;case zf:r.depthFunc(513);break;case go:r.depthFunc(515);break;case Hf:r.depthFunc(514);break;case Wf:r.depthFunc(518);break;case qf:r.depthFunc(516);break;case Xf:r.depthFunc(517);break;default:r.depthFunc(515)}te=de}},setLocked:function(de){B=de},setClear:function(de){oe!==de&&(r.clearDepth(de),oe=de)},reset:function(){B=!1,Y=null,te=null,oe=null}}}function a(){let B=!1,Y=null,te=null,oe=null,de=null,ye=null,ee=null,_e=null,We=null;return{setTest:function(Ve){B||(Ve?G(2960):Ce(2960))},setMask:function(Ve){Y!==Ve&&!B&&(r.stencilMask(Ve),Y=Ve)},setFunc:function(Ve,Bn,Jt){(te!==Ve||oe!==Bn||de!==Jt)&&(r.stencilFunc(Ve,Bn,Jt),te=Ve,oe=Bn,de=Jt)},setOp:function(Ve,Bn,Jt){(ye!==Ve||ee!==Bn||_e!==Jt)&&(r.stencilOp(Ve,Bn,Jt),ye=Ve,ee=Bn,_e=Jt)},setLocked:function(Ve){B=Ve},setClear:function(Ve){We!==Ve&&(r.clearStencil(Ve),We=Ve)},reset:function(){B=!1,Y=null,te=null,oe=null,de=null,ye=null,ee=null,_e=null,We=null}}}const o=new i,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let d={},p={},g=new WeakMap,f=[],A=null,m=!1,C=null,_=null,E=null,I=null,S=null,w=null,D=null,Q=!1,x=null,M=null,k=null,L=null,R=null;const U=r.getParameter(35661);let V=!1,z=0;const N=r.getParameter(7938);N.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(N)[1]),V=z>=1):N.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),V=z>=2);let J=null,j={};const Ae=r.getParameter(3088),se=r.getParameter(2978),X=new Ye().fromArray(Ae),Z=new Ye().fromArray(se);function re(B,Y,te){const oe=new Uint8Array(4),de=r.createTexture();r.bindTexture(B,de),r.texParameteri(B,10241,9728),r.texParameteri(B,10240,9728);for(let ye=0;ye<te;ye++)r.texImage2D(Y+ye,0,6408,1,1,0,6408,5121,oe);return de}const fe={};fe[3553]=re(3553,3553,1),fe[34067]=re(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),G(2929),l.setFunc(go),Nt(!1),Mt(Cl),G(2884),Qe(In);function G(B){d[B]!==!0&&(r.enable(B),d[B]=!0)}function Ce(B){d[B]!==!1&&(r.disable(B),d[B]=!1)}function ve(B,Y){return p[B]!==Y?(r.bindFramebuffer(B,Y),p[B]=Y,n&&(B===36009&&(p[36160]=Y),B===36160&&(p[36009]=Y)),!0):!1}function ae(B,Y){let te=f,oe=!1;if(B)if(te=g.get(Y),te===void 0&&(te=[],g.set(Y,te)),B.isWebGLMultipleRenderTargets){const de=B.texture;if(te.length!==de.length||te[0]!==36064){for(let ye=0,ee=de.length;ye<ee;ye++)te[ye]=36064+ye;te.length=de.length,oe=!0}}else te[0]!==36064&&(te[0]=36064,oe=!0);else te[0]!==1029&&(te[0]=1029,oe=!0);oe&&(t.isWebGL2?r.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function Ie(B){return A!==B?(r.useProgram(B),A=B,!0):!1}const ke={[Xi]:32774,[Rf]:32778,[Df]:32779};if(n)ke[yl]=32775,ke[Ml]=32776;else{const B=e.get("EXT_blend_minmax");B!==null&&(ke[yl]=B.MIN_EXT,ke[Ml]=B.MAX_EXT)}const me={[Lf]:0,[po]:1,[Pf]:768,[bu]:770,[Gf]:776,[Nf]:774,[Ff]:772,[Qf]:769,[wu]:771,[Of]:775,[Uf]:773};function Qe(B,Y,te,oe,de,ye,ee,_e){if(B===In){m===!0&&(Ce(3042),m=!1);return}if(m===!1&&(G(3042),m=!0),B!==Tf){if(B!==C||_e!==Q){if((_!==Xi||S!==Xi)&&(r.blendEquation(32774),_=Xi,S=Xi),_e)switch(B){case Zi:r.blendFuncSeparate(1,771,1,771);break;case kr:r.blendFunc(1,1);break;case vl:r.blendFuncSeparate(0,769,0,1);break;case Il:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Zi:r.blendFuncSeparate(770,771,1,771);break;case kr:r.blendFunc(770,1);break;case vl:r.blendFuncSeparate(0,769,0,1);break;case Il:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}E=null,I=null,w=null,D=null,C=B,Q=_e}return}de=de||Y,ye=ye||te,ee=ee||oe,(Y!==_||de!==S)&&(r.blendEquationSeparate(ke[Y],ke[de]),_=Y,S=de),(te!==E||oe!==I||ye!==w||ee!==D)&&(r.blendFuncSeparate(me[te],me[oe],me[ye],me[ee]),E=te,I=oe,w=ye,D=ee),C=B,Q=!1}function Yt(B,Y){B.side===fn?Ce(2884):G(2884);let te=B.side===qt;Y&&(te=!te),Nt(te),B.blending===Zi&&B.transparent===!1?Qe(In):Qe(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.premultipliedAlpha),l.setFunc(B.depthFunc),l.setTest(B.depthTest),l.setMask(B.depthWrite),o.setMask(B.colorWrite);const oe=B.stencilWrite;c.setTest(oe),oe&&(c.setMask(B.stencilWriteMask),c.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),c.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),St(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?G(32926):Ce(32926)}function Nt(B){x!==B&&(B?r.frontFace(2304):r.frontFace(2305),x=B)}function Mt(B){B!==wf?(G(2884),B!==M&&(B===Cl?r.cullFace(1029):B===Bf?r.cullFace(1028):r.cullFace(1032))):Ce(2884),M=B}function rn(B){B!==k&&(V&&r.lineWidth(B),k=B)}function St(B,Y,te){B?(G(32823),(L!==Y||R!==te)&&(r.polygonOffset(Y,te),L=Y,R=te)):Ce(32823)}function it(B){B?G(3089):Ce(3089)}function an(B){B===void 0&&(B=33984+U-1),J!==B&&(r.activeTexture(B),J=B)}function gn(B,Y,te){te===void 0&&(J===null?te=33984+U-1:te=J);let oe=j[te];oe===void 0&&(oe={type:void 0,texture:void 0},j[te]=oe),(oe.type!==B||oe.texture!==Y)&&(J!==te&&(r.activeTexture(te),J=te),r.bindTexture(B,Y||fe[B]),oe.type=B,oe.texture=Y)}function mt(){const B=j[J];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Xe(){try{r.compressedTexImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function bt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function wn(){try{r.texSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function b(){try{r.texSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function v(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function H(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $(){try{r.texStorage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function K(){try{r.texStorage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ne(){try{r.texImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{r.texImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(B){X.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),X.copy(B))}function O(B){Z.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),Z.copy(B))}function Te(B,Y){let te=h.get(Y);te===void 0&&(te=new WeakMap,h.set(Y,te));let oe=te.get(B);oe===void 0&&(oe=r.getUniformBlockIndex(Y,B.name),te.set(B,oe))}function Me(B,Y){const oe=h.get(Y).get(B);u.get(Y)!==oe&&(r.uniformBlockBinding(Y,oe,B.__bindingPointIndex),u.set(Y,oe))}function Se(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},J=null,j={},p={},g=new WeakMap,f=[],A=null,m=!1,C=null,_=null,E=null,I=null,S=null,w=null,D=null,Q=!1,x=null,M=null,k=null,L=null,R=null,X.set(0,0,r.canvas.width,r.canvas.height),Z.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:G,disable:Ce,bindFramebuffer:ve,drawBuffers:ae,useProgram:Ie,setBlending:Qe,setMaterial:Yt,setFlipSided:Nt,setCullFace:Mt,setLineWidth:rn,setPolygonOffset:St,setScissorTest:it,activeTexture:an,bindTexture:gn,unbindTexture:mt,compressedTexImage2D:Xe,compressedTexImage3D:bt,texImage2D:ne,texImage3D:he,updateUBOMapping:Te,uniformBlockBinding:Me,texStorage2D:$,texStorage3D:K,texSubImage2D:wn,texSubImage3D:b,compressedTexSubImage2D:v,compressedTexSubImage3D:H,scissor:pe,viewport:O,reset:Se}}function x0(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=e.has("OCULUS_multiview")?e.get("OCULUS_multiview"):null,f=new WeakMap;let A;const m=new WeakMap,C=[];let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(b,v){return _?new OffscreenCanvas(b,v):Hs("canvas")}function I(b,v,H,$){let K=1;if((b.width>$||b.height>$)&&(K=$/Math.max(b.width,b.height)),K<1||v===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ne=v?zr:Math.floor,he=ne(K*b.width),pe=ne(K*b.height);A===void 0&&(A=E(he,pe));const O=H?E(he,pe):A;return O.width=he,O.height=pe,O.getContext("2d").drawImage(b,0,0,he,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+he+"x"+pe+")."),O}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function S(b){return Mo(b.width)&&Mo(b.height)}function w(b){return o?!1:b.wrapS!==vt||b.wrapT!==vt||b.minFilter!==ot&&b.minFilter!==Ge}function D(b,v){return b.generateMipmaps&&v&&b.minFilter!==ot&&b.minFilter!==Ge}function Q(b){r.generateMipmap(b)}function x(b,v,H,$,K=!1){if(o===!1)return v;if(b!==null){if(r[b]!==void 0)return r[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ne=v;return v===6403&&(H===5126&&(ne=33326),H===5131&&(ne=33325),H===5121&&(ne=33321)),v===33319&&(H===5126&&(ne=33328),H===5131&&(ne=33327),H===5121&&(ne=33323)),v===6408&&(H===5126&&(ne=34836),H===5131&&(ne=34842),H===5121&&(ne=$===Le&&K===!1?35907:32856),H===32819&&(ne=32854),H===32820&&(ne=32855)),(ne===33325||ne===33326||ne===33327||ne===33328||ne===34842||ne===34836)&&e.get("EXT_color_buffer_float"),ne}function M(b,v,H){return D(b,H)===!0||b.isFramebufferTexture&&b.minFilter!==ot&&b.minFilter!==Ge?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function k(b){return b===ot||b===Vr||b===Ls?9728:9729}function L(b){const v=b.target;v.removeEventListener("dispose",L),U(v),v.isVideoTexture&&f.delete(v)}function R(b){const v=b.target;v.removeEventListener("dispose",R),z(v)}function U(b){const v=n.get(b);if(v.__webglInit===void 0)return;const H=b.source,$=m.get(H);if($){const K=$[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&V(b),Object.keys($).length===0&&m.delete(H)}n.remove(b)}function V(b){const v=n.get(b);r.deleteTexture(v.__webglTexture);const H=b.source,$=m.get(H);delete $[v.__cacheKey],a.memory.textures--}function z(b){const v=b.texture,H=n.get(b),$=n.get(v);if($.__webglTexture!==void 0&&(r.deleteTexture($.__webglTexture),a.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++)r.deleteFramebuffer(H.__webglFramebuffer[K]),H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer[K]);else{if(r.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&r.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let K=0;K<H.__webglColorRenderbuffer.length;K++)H.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(H.__webglColorRenderbuffer[K]);H.__webglDepthRenderbuffer&&r.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let K=0,ne=v.length;K<ne;K++){const he=n.get(v[K]);he.__webglTexture&&(r.deleteTexture(he.__webglTexture),a.memory.textures--),n.remove(v[K])}n.remove(v),n.remove(b)}let N=0;function J(){N=0}function j(){const b=N;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),N+=1,b}function Ae(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.encoding),v.join()}function se(b,v){const H=n.get(b);if(b.isVideoTexture&&bt(b),b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){const $=b.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else if(this.uploadTexture(H,b,v))return}t.bindTexture(3553,H.__webglTexture,33984+v)}function X(b,v){const H=n.get(b);if(b.version>0&&H.__version!==b.version){this.uploadTexture(H,b,v);return}t.bindTexture(35866,H.__webglTexture,33984+v)}function Z(b,v){const H=n.get(b);if(b.version>0&&H.__version!==b.version){this.uploadTexture(H,b,v);return}t.bindTexture(32879,H.__webglTexture,33984+v)}function re(b,v){const H=n.get(b);if(b.version>0&&H.__version!==b.version){ke(H,b,v);return}t.bindTexture(34067,H.__webglTexture,33984+v)}const fe={[Wt]:10497,[vt]:33071,[Gs]:33648},G={[ot]:9728,[Vr]:9984,[Ls]:9986,[Ge]:9729,[ko]:9985,[jt]:9987};function Ce(b,v,H){if(H?(r.texParameteri(b,10242,fe[v.wrapS]),r.texParameteri(b,10243,fe[v.wrapT]),(b===32879||b===35866)&&v.wrapR!==void 0&&r.texParameteri(b,32882,fe[v.wrapR]),r.texParameteri(b,10240,G[v.magFilter]),r.texParameteri(b,10241,G[v.minFilter])):(r.texParameteri(b,10242,33071),r.texParameteri(b,10243,33071),(b===32879||b===35866)&&r.texParameteri(b,32882,33071),(v.wrapS!==vt||v.wrapT!==vt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(b,10240,k(v.magFilter)),r.texParameteri(b,10241,k(v.minFilter)),v.minFilter!==ot&&v.minFilter!==Ge&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===ot||v.minFilter!==Ls&&v.minFilter!==jt||v.type===Ze&&e.has("OES_texture_float_linear")===!1||o===!1&&v.type===Gt&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(r.texParameterf(b,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function ve(b,v){let H=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",L));const $=v.source;let K=m.get($);K===void 0&&(K={},m.set($,K));const ne=Ae(v);if(ne!==b.__cacheKey){K[ne]===void 0&&(K[ne]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,H=!0),K[ne].usedTimes++;const he=K[b.__cacheKey];he!==void 0&&(K[b.__cacheKey].usedTimes--,he.usedTimes===0&&V(v)),b.__cacheKey=ne,b.__webglTexture=K[ne].texture}return H}function ae(){const b=this.deferTextureUploads;this.deferTextureUploads=!1;for(let v=0;v<C.length;v++){const H=C[v];this.uploadTexture(H.textureProperties,H.texture,H.slot),H.texture.isPendingDeferredUpload=!1}C.length=0,this.deferTextureUploads=b}function Ie(b,v,H){if(this.deferTextureUploads)return v.isPendingDeferredUpload||(v.isPendingDeferredUpload=!0,C.push({textureProperties:b,texture:v,slot:H})),!1;let $=3553;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=35866),v.isData3DTexture&&($=32879);const K=ve(b,v),ne=v.source;t.bindTexture($,b.__webglTexture,33984+H);const he=n.get(ne);if(ne.version!==he.__version||K===!0){t.activeTexture(33984+H),r.pixelStorei(37440,v.flipY),r.pixelStorei(37441,v.premultiplyAlpha),r.pixelStorei(3317,v.unpackAlignment),r.pixelStorei(37443,0);const pe=w(v)&&S(v.image)===!1;let O=I(v.image,pe,!1,u);O=wn(v,O);const Te=S(O)||o,Me=s.convert(v.format,v.encoding);let Se=s.convert(v.type),B=x(v.internalFormat,Me,Se,v.encoding,v.isVideoTexture);Ce($,v,Te);let Y;const te=v.mipmaps,oe=o&&v.isVideoTexture!==!0,de=he.__version===void 0||K===!0,ye=M(v,O,Te);if(v.isDepthTexture)B=6402,o?v.type===Ze?B=36012:v.type===mi?B=33190:v.type===_i?B=35056:B=33189:v.type===Ze&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===ii&&B===6402&&v.type!==Tu&&v.type!==mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=mi,Se=s.convert(v.type)),v.format===xi&&B===6402&&(B=34041,v.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=_i,Se=s.convert(v.type))),de&&(oe?t.texStorage2D(3553,1,B,O.width,O.height):t.texImage2D(3553,0,B,O.width,O.height,0,Me,Se,null));else if(v.isDataTexture)if(te.length>0&&Te){oe&&de&&t.texStorage2D(3553,ye,B,te[0].width,te[0].height);for(let ee=0,_e=te.length;ee<_e;ee++)Y=te[ee],oe?t.texSubImage2D(3553,ee,0,0,Y.width,Y.height,Me,Se,Y.data):t.texImage2D(3553,ee,B,Y.width,Y.height,0,Me,Se,Y.data);v.generateMipmaps=!1}else oe?(de&&t.texStorage2D(3553,ye,B,O.width,O.height),t.texSubImage2D(3553,0,0,0,O.width,O.height,Me,Se,O.data)):t.texImage2D(3553,0,B,O.width,O.height,0,Me,Se,O.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){oe&&de&&t.texStorage3D(35866,ye,B,te[0].width,te[0].height,O.depth);for(let ee=0,_e=te.length;ee<_e;ee++)Y=te[ee],v.format!==gt?Me!==null?oe?t.compressedTexSubImage3D(35866,ee,0,0,0,Y.width,Y.height,O.depth,Me,Y.data,0,0):t.compressedTexImage3D(35866,ee,B,Y.width,Y.height,O.depth,0,Y.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?t.texSubImage3D(35866,ee,0,0,0,Y.width,Y.height,O.depth,Me,Se,Y.data):t.texImage3D(35866,ee,B,Y.width,Y.height,O.depth,0,Me,Se,Y.data)}else{oe&&de&&t.texStorage2D(3553,ye,B,te[0].width,te[0].height);for(let ee=0,_e=te.length;ee<_e;ee++)Y=te[ee],v.format!==gt?Me!==null?oe?t.compressedTexSubImage2D(3553,ee,0,0,Y.width,Y.height,Me,Y.data):t.compressedTexImage2D(3553,ee,B,Y.width,Y.height,0,Y.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?t.texSubImage2D(3553,ee,0,0,Y.width,Y.height,Me,Se,Y.data):t.texImage2D(3553,ee,B,Y.width,Y.height,0,Me,Se,Y.data)}else if(v.isDataArrayTexture)oe?(de&&t.texStorage3D(35866,ye,B,O.width,O.height,O.depth),t.texSubImage3D(35866,0,0,0,0,O.width,O.height,O.depth,Me,Se,O.data)):t.texImage3D(35866,0,B,O.width,O.height,O.depth,0,Me,Se,O.data);else if(v.isData3DTexture)oe?(de&&t.texStorage3D(32879,ye,B,O.width,O.height,O.depth),t.texSubImage3D(32879,0,0,0,0,O.width,O.height,O.depth,Me,Se,O.data)):t.texImage3D(32879,0,B,O.width,O.height,O.depth,0,Me,Se,O.data);else if(v.isFramebufferTexture){if(de)if(oe)t.texStorage2D(3553,ye,B,O.width,O.height);else{let ee=O.width,_e=O.height;for(let We=0;We<ye;We++)t.texImage2D(3553,We,B,ee,_e,0,Me,Se,null),ee>>=1,_e>>=1}}else if(te.length>0&&Te){oe&&de&&t.texStorage2D(3553,ye,B,te[0].width,te[0].height);for(let ee=0,_e=te.length;ee<_e;ee++)Y=te[ee],oe?t.texSubImage2D(3553,ee,0,0,Me,Se,Y):t.texImage2D(3553,ee,B,Me,Se,Y);v.generateMipmaps=!1}else oe?(de&&t.texStorage2D(3553,ye,B,O.width,O.height),t.texSubImage2D(3553,0,0,0,Me,Se,O)):t.texImage2D(3553,0,B,Me,Se,O);D(v,Te)&&Q($),he.__version=ne.version,v.onUpdate&&v.onUpdate(v)}return b.__version=v.version,!0}function ke(b,v,H){if(v.image.length!==6)return;const $=ve(b,v),K=v.source;t.bindTexture(34067,b.__webglTexture,33984+H);const ne=n.get(K);if(K.version!==ne.__version||$===!0){t.activeTexture(33984+H),r.pixelStorei(37440,v.flipY),r.pixelStorei(37441,v.premultiplyAlpha),r.pixelStorei(3317,v.unpackAlignment),r.pixelStorei(37443,0);const he=v.isCompressedTexture||v.image[0].isCompressedTexture,pe=v.image[0]&&v.image[0].isDataTexture,O=[];for(let ee=0;ee<6;ee++)!he&&!pe?O[ee]=I(v.image[ee],!1,!0,c):O[ee]=pe?v.image[ee].image:v.image[ee],O[ee]=wn(v,O[ee]);const Te=O[0],Me=S(Te)||o,Se=s.convert(v.format,v.encoding),B=s.convert(v.type),Y=x(v.internalFormat,Se,B,v.encoding),te=o&&v.isVideoTexture!==!0,oe=ne.__version===void 0||$===!0;let de=M(v,Te,Me);Ce(34067,v,Me);let ye;if(he){te&&oe&&t.texStorage2D(34067,de,Y,Te.width,Te.height);for(let ee=0;ee<6;ee++){ye=O[ee].mipmaps;for(let _e=0;_e<ye.length;_e++){const We=ye[_e];v.format!==gt?Se!==null?te?t.compressedTexSubImage2D(34069+ee,_e,0,0,We.width,We.height,Se,We.data):t.compressedTexImage2D(34069+ee,_e,Y,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?t.texSubImage2D(34069+ee,_e,0,0,We.width,We.height,Se,B,We.data):t.texImage2D(34069+ee,_e,Y,We.width,We.height,0,Se,B,We.data)}}}else{ye=v.mipmaps,te&&oe&&(ye.length>0&&de++,t.texStorage2D(34067,de,Y,O[0].width,O[0].height));for(let ee=0;ee<6;ee++)if(pe){te?t.texSubImage2D(34069+ee,0,0,0,O[ee].width,O[ee].height,Se,B,O[ee].data):t.texImage2D(34069+ee,0,Y,O[ee].width,O[ee].height,0,Se,B,O[ee].data);for(let _e=0;_e<ye.length;_e++){const Ve=ye[_e].image[ee].image;te?t.texSubImage2D(34069+ee,_e+1,0,0,Ve.width,Ve.height,Se,B,Ve.data):t.texImage2D(34069+ee,_e+1,Y,Ve.width,Ve.height,0,Se,B,Ve.data)}}else{te?t.texSubImage2D(34069+ee,0,0,0,Se,B,O[ee]):t.texImage2D(34069+ee,0,Y,Se,B,O[ee]);for(let _e=0;_e<ye.length;_e++){const We=ye[_e];te?t.texSubImage2D(34069+ee,_e+1,0,0,Se,B,We.image[ee]):t.texImage2D(34069+ee,_e+1,Y,Se,B,We.image[ee])}}}D(v,Me)&&Q(34067),ne.__version=K.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function me(b,v,H,$,K){const ne=s.convert(H.format,H.encoding),he=s.convert(H.type),pe=x(H.internalFormat,ne,he,H.encoding);n.get(v).__hasExternalTextures||(v.isWebGLMultiviewRenderTarget===!0?t.texStorage3D(35866,0,pe,v.width,v.height,v.numViews):K===32879||K===35866?t.texImage3D(K,0,pe,v.width,v.height,v.depth,0,ne,he,null):t.texImage2D(K,0,pe,v.width,v.height,0,ne,he,null)),t.bindFramebuffer(36160,b);const Te=Xe(v);v.isWebGLMultiviewRenderTarget===!0?Te?g.framebufferTextureMultisampleMultiviewOVR(36160,36064,n.get(H).__webglTexture,0,mt(v),0,v.numViews):g.framebufferTextureMultiviewOVR(36160,36064,n.get(H).__webglTexture,0,0,v.numViews):(K===3553||K>=34069&&K<=34074)&&(Te?d.framebufferTexture2DMultisampleEXT(36160,$,K,n.get(H).__webglTexture,0,mt(v)):r.framebufferTexture2D(36160,$,K,n.get(H).__webglTexture,0)),t.bindFramebuffer(36160,null)}function Qe(b,v,H){if(r.bindRenderbuffer(36161,b),v.isWebGLMultiviewRenderTarget===!0){const $=Xe(v),K=v.numViews,ne=v.depthTexture;let he=33190,pe=36096;ne&&ne.isDepthTexture&&(ne.type===Ze?he=36012:ne.type===_i&&(he=35056,pe=33306));let O=n.get(v.depthTexture).__webglTexture;O===void 0&&(O=r.createTexture(),r.bindTexture(35866,O),r.texStorage3D(35866,1,he,v.width,v.height,K)),$?g.framebufferTextureMultisampleMultiviewOVR(36160,pe,O,0,mt(v),0,K):g.framebufferTextureMultiviewOVR(36160,pe,O,0,0,K)}else if(v.depthBuffer&&!v.stencilBuffer){let $=33189;if(H||Xe(v)){const K=v.depthTexture;K&&K.isDepthTexture&&(K.type===Ze?$=36012:K.type===mi&&($=33190));const ne=mt(v);Xe(v)?d.renderbufferStorageMultisampleEXT(36161,ne,$,v.width,v.height):r.renderbufferStorageMultisample(36161,ne,$,v.width,v.height)}else r.renderbufferStorage(36161,$,v.width,v.height);r.framebufferRenderbuffer(36160,36096,36161,b)}else if(v.depthBuffer&&v.stencilBuffer){const $=mt(v);H&&Xe(v)===!1?r.renderbufferStorageMultisample(36161,$,35056,v.width,v.height):Xe(v)?d.renderbufferStorageMultisampleEXT(36161,$,35056,v.width,v.height):r.renderbufferStorage(36161,34041,v.width,v.height),r.framebufferRenderbuffer(36160,33306,36161,b)}else{const $=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let K=0;K<$.length;K++){const ne=$[K],he=s.convert(ne.format,ne.encoding),pe=s.convert(ne.type),O=x(ne.internalFormat,he,pe,ne.encoding),Te=mt(v);H&&Xe(v)===!1?r.renderbufferStorageMultisample(36161,Te,O,v.width,v.height):Xe(v)?d.renderbufferStorageMultisampleEXT(36161,Te,O,v.width,v.height):r.renderbufferStorage(36161,O,v.width,v.height)}}r.bindRenderbuffer(36161,null)}function Yt(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),v.depthTexture.image.depth!=1?this.setTexture2DArray(v.depthTexture,0):this.setTexture2D(v.depthTexture,0);const $=n.get(v.depthTexture).__webglTexture,K=mt(v);if(v.isWebGLMultiviewRenderTarget===!0){const ne=Xe(v),he=v.numViews;if(v.depthTexture.format===ii)ne?g.framebufferTextureMultisampleMultiviewOVR(36160,36096,$,0,K,0,he):g.framebufferTextureMultiviewOVR(36160,36096,$,0,0,he);else if(v.depthTexture.format===xi)ne?g.framebufferTextureMultisampleMultiviewOVR(36160,33306,$,0,K,0,he):g.framebufferTextureMultiviewOVR(36160,33306,$,0,0,he);else throw new Error("Unknown depthTexture format")}else if(v.depthTexture.format===ii)Xe(v)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,K):r.framebufferTexture2D(36160,36096,3553,$,0);else if(v.depthTexture.format===xi)Xe(v)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,K):r.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function Nt(b){const v=n.get(b),H=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");this.setupDepthTexture(v.__webglFramebuffer,b)}else if(H){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(36160,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]=r.createRenderbuffer(),Qe(v.__webglDepthbuffer[$],b,!1)}else t.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=r.createRenderbuffer(),Qe(v.__webglDepthbuffer,b,!1);t.bindFramebuffer(36160,null)}function Mt(b,v,H){const $=n.get(b);v!==void 0&&this.setupFrameBufferTexture($.__webglFramebuffer,b,b.texture,36064,3553),H!==void 0&&this.setupDepthRenderbuffer(b)}function rn(b){const v=b.texture,H=n.get(b),$=n.get(v);b.addEventListener("dispose",R),b.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=v.version,a.memory.textures++);const K=b.isWebGLCubeRenderTarget===!0,ne=b.isWebGLMultipleRenderTargets===!0,he=S(b)||o;if(K){H.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)H.__webglFramebuffer[pe]=r.createFramebuffer()}else{if(H.__webglFramebuffer=r.createFramebuffer(),ne)if(i.drawBuffers){const pe=b.texture;for(let O=0,Te=pe.length;O<Te;O++){const Me=n.get(pe[O]);Me.__webglTexture===void 0&&(Me.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&Xe(b)===!1){const pe=ne?v:[v];H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let O=0;O<pe.length;O++){const Te=pe[O];H.__webglColorRenderbuffer[O]=r.createRenderbuffer(),r.bindRenderbuffer(36161,H.__webglColorRenderbuffer[O]);const Me=s.convert(Te.format,Te.encoding),Se=s.convert(Te.type),B=x(Te.internalFormat,Me,Se,Te.encoding,b.isXRRenderTarget===!0),Y=mt(b);r.renderbufferStorageMultisample(36161,Y,B,b.width,b.height),r.framebufferRenderbuffer(36160,36064+O,36161,H.__webglColorRenderbuffer[O])}r.bindRenderbuffer(36161,null),b.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),Qe(H.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(36160,null)}}if(K){t.bindTexture(34067,$.__webglTexture),Ce(34067,v,he);for(let pe=0;pe<6;pe++)me(H.__webglFramebuffer[pe],b,v,36064,34069+pe);D(v,he)&&Q(34067),t.unbindTexture()}else if(ne){const pe=b.texture;for(let O=0,Te=pe.length;O<Te;O++){const Me=pe[O],Se=n.get(Me);t.bindTexture(3553,Se.__webglTexture),Ce(3553,Me,he),me(H.__webglFramebuffer,b,Me,36064+O,3553),D(Me,he)&&Q(3553)}t.unbindTexture()}else{let pe=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?pe=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),b.isWebGLMultiviewRenderTarget===!0&&(pe=35866),t.bindTexture(pe,$.__webglTexture),Ce(pe,v,he),me(H.__webglFramebuffer,b,v,36064,pe),D(v,he)&&Q(pe),t.unbindTexture()}(b.depthBuffer||b.isWebGLMultiviewRenderTarget===!0)&&this.setupDepthRenderbuffer(b)}function St(b){const v=S(b)||o;if(b.isWebGLMultipleRenderTargets===!0){const H=b.texture;for(let $=0,K=H.length;$<K;$++){const ne=H[$];if(D(ne,v)){const he=b.isWebGLCubeRenderTarget?34067:3553,pe=n.get(ne).__webglTexture;t.bindTexture(he,pe),Q(he),t.unbindTexture()}}}else{const H=b.texture;if(D(H,v)){const $=b.isWebGLCubeRenderTarget?34067:3553,K=n.get(H).__webglTexture;t.bindTexture($,K),Q($),t.unbindTexture()}}}const it=[],an=[];function gn(b){if(o&&b.samples>0&&Xe(b)===!1){let v;b.isWebGLMultipleRenderTargets?v=b.texture:(an.length=0,an.push(b.texture),v=an);const H=b.width,$=b.height;let K=16384;it.length=0;const ne=b.stencilBuffer?33306:36096,he=n.get(b),pe=b.isWebGLMultipleRenderTargets===!0;if(pe)for(let O=0;O<v.length;O++)t.bindFramebuffer(36160,he.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+O,36161,null),t.bindFramebuffer(36160,he.__webglFramebuffer),r.framebufferTexture2D(36009,36064+O,3553,null,0);t.bindFramebuffer(36008,he.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,he.__webglFramebuffer);for(let O=0;O<v.length;O++){it.push(36064+O),b.depthBuffer&&it.push(ne);const Te=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Te===!1&&(b.depthBuffer&&(K|=256),b.stencilBuffer&&(K|=1024)),pe&&r.framebufferRenderbuffer(36008,36064,36161,he.__webglColorRenderbuffer[O]),Te===!0&&(r.invalidateFramebuffer(36008,[ne]),r.invalidateFramebuffer(36009,[ne])),pe){const Me=n.get(v[O]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,Me,0)}r.blitFramebuffer(0,0,H,$,0,0,H,$,K,9728),p&&r.invalidateFramebuffer(36008,it)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),pe)for(let O=0;O<v.length;O++){t.bindFramebuffer(36160,he.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+O,36161,he.__webglColorRenderbuffer[O]);const Te=n.get(v[O]).__webglTexture;t.bindFramebuffer(36160,he.__webglFramebuffer),r.framebufferTexture2D(36009,36064+O,3553,Te,0)}t.bindFramebuffer(36009,he.__webglMultisampledFramebuffer)}}function mt(b){return Math.min(h,b.samples)}function Xe(b){const v=n.get(b);return o&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function bt(b){const v=a.render.frame;f.get(b)!==v&&(f.set(b,v),b.update())}function wn(b,v){const H=b.encoding,$=b.format,K=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===yo||H!==sn&&(H===Le?o===!1?e.has("EXT_sRGB")===!0&&$===gt?(b.format=yo,b.minFilter=Ge,b.generateMipmaps=!1):v=Ou.sRGBToLinear(v):($!==gt||K!==Ot)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),v}this.allocateTextureUnit=j,this.resetTextureUnits=J,this.setTexture2D=se,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=re,this.rebindTextures=Mt,this.uploadTexture=Ie,this.setupRenderTarget=rn,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=gn,this.setupDepthTexture=Yt,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Xe,this.runDeferredUploads=ae}function E0(r,e,t){const n=t.isWebGL2;function i(s,a=null){let o;if(s===Ot)return 5121;if(s===sA)return 32819;if(s===rA)return 32820;if(s===tA)return 5120;if(s===nA)return 5122;if(s===Tu)return 5123;if(s===iA)return 5124;if(s===mi)return 5125;if(s===Ze)return 5126;if(s===Gt)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===aA)return 6406;if(s===gt)return 6408;if(s===lA)return 6409;if(s===cA)return 6410;if(s===ii)return 6402;if(s===xi)return 34041;if(s===oA)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===yo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Ts)return 6403;if(s===uA)return 36244;if(s===Rs)return 33319;if(s===hA)return 33320;if(s===dA)return 36249;if(s===Ur||s===da||s===fa||s===Nr)if(a===Le)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ur)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===da)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Nr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ur)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===da)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Nr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===mo||s===Sl||s===_o||s===bl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===mo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Sl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===_o)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===bl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ru)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===xo||s===Eo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===xo)return a===Le?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Eo)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Co||s===wl||s===Bl||s===Tl||s===Rl||s===Dl||s===Ll||s===Pl||s===Ql||s===Fl||s===Ul||s===Nl||s===Ol||s===Gl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Co)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===wl)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Bl)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Tl)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Rl)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Dl)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ll)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Pl)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ql)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Fl)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ul)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Nl)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ol)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Gl)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Or)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Or)return a===Le?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===fA||s===kl||s===Vl||s===zl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Or)return o.COMPRESSED_RED_RGTC1_EXT;if(s===kl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Vl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===zl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===_i?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class C0{constructor(e,t,n){if(this.renderer=e,this.DEFAULT_NUMVIEWS=2,this.maxNumViews=0,this.gl=n,this.extensions=t,this.available=this.extensions.has("OCULUS_multiview"),this.available){const s=this.extensions.get("OCULUS_multiview");this.maxNumViews=this.gl.getParameter(s.MAX_VIEWS_OVR),this.mat4=[],this.mat3=[],this.cameraArray=[];for(var i=0;i<this.maxNumViews;i++)this.mat4[i]=new ge,this.mat3[i]=new It}}getCameraArray(e){return e.isArrayCamera?e.cameras:(this.cameraArray[0]=e,this.cameraArray)}updateCameraProjectionMatricesUniform(e,t){for(var n=this.getCameraArray(e),i=0;i<n.length;i++)this.mat4[i].copy(n[i].projectionMatrix);t.setValue(this.gl,"projectionMatrices",this.mat4)}updateCameraViewMatricesUniform(e,t){for(var n=this.getCameraArray(e),i=0;i<n.length;i++)this.mat4[i].copy(n[i].matrixWorldInverse);t.setValue(this.gl,"viewMatrices",this.mat4)}updateObjectMatricesUniforms(e,t,n){for(var i=this.getCameraArray(t),s=0;s<i.length;s++)this.mat4[s].multiplyMatrices(i[s].matrixWorldInverse,e.matrixWorld),this.mat3[s].getNormalMatrix(this.mat4[s]);n.setValue(this.gl,"modelViewMatrices",this.mat4),n.setValue(this.gl,"normalMatrices",this.mat3)}}class v0 extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ku extends et{constructor(e,t,n,i={}){super(e,t,i),this.depthBuffer=!1,this.stencilBuffer=!1,this.numViews=n}copy(e){return super.copy(e),this.numViews=e.numViews,this}}Ku.prototype.isWebGLMultiviewRenderTarget=!0;class Wn extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const I0={type:"move"};class Na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const f of e.hand.values()){const A=t.getJointPose(f,n),m=this._getHandJoint(c,f);A!==null&&(m.matrix.fromArray(A.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=A.radius),m.visible=A!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(I0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Wn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class y0 extends Ke{constructor(e,t,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:ii,u!==ii&&u!==xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ii&&(n=mi),n===void 0&&u===xi&&(n=_i),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ot,this.minFilter=l!==void 0?l:ot,this.flipY=!1,this.generateMipmaps=!1}}class M0 extends ls{constructor(e,t,n,i){super();const s=this;let a=null,o=1,l=null,c="local-floor",u=null,h=null,d=null,p=null,g=null,f=null;const A=t.getContextAttributes();let m=null,C=null;const _=[],E=[],I=new Set,S=new Map,w=new Ft;w.layers.enable(1),w.viewport=new Ye;const D=new Ft;D.layers.enable(2),D.viewport=new Ye;const Q=[w,D],x=new v0;x.layers.enable(1),x.layers.enable(2);let M=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.isMultiview=!1,this.getController=function(X){let Z=_[X];return Z===void 0&&(Z=new Na,_[X]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(X){let Z=_[X];return Z===void 0&&(Z=new Na,_[X]=Z),Z.getGripSpace()},this.getHand=function(X){let Z=_[X];return Z===void 0&&(Z=new Na,_[X]=Z),Z.getHandSpace()};function L(X){const Z=E.indexOf(X.inputSource);if(Z===-1)return;const re=_[Z];re!==void 0&&re.dispatchEvent({type:X.type,data:X.inputSource})}function R(){a.removeEventListener("select",L),a.removeEventListener("selectstart",L),a.removeEventListener("selectend",L),a.removeEventListener("squeeze",L),a.removeEventListener("squeezestart",L),a.removeEventListener("squeezeend",L),a.removeEventListener("end",R),a.removeEventListener("inputsourceschange",U);for(let X=0;X<_.length;X++){const Z=E[X];Z!==null&&(E[X]=null,_[X].disconnect(Z))}M=null,k=null,e.setRenderTarget(m),g=null,p=null,d=null,a=null,C=null,se.stop(),s.isPresenting=!1,s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){o=X,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){c=X,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||l},this.setReferenceSpace=function(X){u=X},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return d},this.getFrame=function(){return f},this.getSession=function(){return a},this.setSession=async function(X){if(a=X,a!==null){if(m=e.getRenderTarget(),a.addEventListener("select",L),a.addEventListener("selectstart",L),a.addEventListener("selectend",L),a.addEventListener("squeeze",L),a.addEventListener("squeezestart",L),a.addEventListener("squeezeend",L),a.addEventListener("end",R),a.addEventListener("inputsourceschange",U),A.xrCompatible!==!0&&await t.makeXRCompatible(),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:a.renderState.layers===void 0?A.antialias:!0,alpha:A.alpha,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:o};g=new XRWebGLLayer(a,t,Z),a.updateRenderState({baseLayer:g}),C=new et(g.framebufferWidth,g.framebufferHeight,{format:gt,type:Ot,encoding:e.outputEncoding,stencilBuffer:A.stencil})}else{let Z=null,re=null,fe=null;A.depth&&(fe=A.stencil?35056:33190,Z=A.stencil?xi:ii,re=A.stencil?_i:mi),s.isMultiview=i&&n.has("OCULUS_multiview");const G={colorFormat:32856,depthFormat:fe,scaleFactor:o};s.isMultiview&&(G.textureType="texture-array"),d=new XRWebGLBinding(a,t),p=d.createProjectionLayer(G),a.updateRenderState({layers:[p]});const Ce={format:gt,type:Ot,depthTexture:new y0(p.textureWidth,p.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:A.stencil,encoding:e.outputEncoding,samples:A.antialias?4:0};if(s.isMultiview){const ae=n.get("OCULUS_multiview");this.maxNumViews=t.getParameter(ae.MAX_VIEWS_OVR),C=new Ku(p.textureWidth,p.textureHeight,2,Ce)}else C=new et(p.textureWidth,p.textureHeight,Ce);const ve=e.properties.get(C);ve.__ignoreDepthValues=p.ignoreDepthValues}C.isXRRenderTarget=!0,this.setFoveation(1),u=null,l=await a.requestReferenceSpace(c),se.setContext(a),se.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}};function U(X){for(let Z=0;Z<X.removed.length;Z++){const re=X.removed[Z],fe=E.indexOf(re);fe>=0&&(E[fe]=null,_[fe].disconnect(re))}for(let Z=0;Z<X.added.length;Z++){const re=X.added[Z];let fe=E.indexOf(re);if(fe===-1){for(let Ce=0;Ce<_.length;Ce++)if(Ce>=E.length){E.push(re),fe=Ce;break}else if(E[Ce]===null){E[Ce]=re,fe=Ce;break}if(fe===-1)break}const G=_[fe];G&&G.connect(re)}}const V=new T,z=new T;function N(X,Z,re){V.setFromMatrixPosition(Z.matrixWorld),z.setFromMatrixPosition(re.matrixWorld);const fe=V.distanceTo(z),G=Z.projectionMatrix.elements,Ce=re.projectionMatrix.elements,ve=G[14]/(G[10]-1),ae=G[14]/(G[10]+1),Ie=(G[9]+1)/G[5],ke=(G[9]-1)/G[5],me=(G[8]-1)/G[0],Qe=(Ce[8]+1)/Ce[0],Yt=ve*me,Nt=ve*Qe,Mt=fe/(-me+Qe),rn=Mt*-me;Z.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(rn),X.translateZ(Mt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const St=ve+Mt,it=ae+Mt,an=Yt-rn,gn=Nt+(fe-rn),mt=Ie*ae/it*St,Xe=ke*ae/it*St;X.projectionMatrix.makePerspective(an,gn,mt,Xe,St,it)}function J(X,Z){Z===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Z.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(a===null)return;x.near=D.near=w.near=X.near,x.far=D.far=w.far=X.far,(M!==x.near||k!==x.far)&&(a.updateRenderState({depthNear:x.near,depthFar:x.far}),M=x.near,k=x.far);const Z=X.parent,re=x.cameras;J(x,Z);for(let G=0;G<re.length;G++)J(re[G],Z);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),X.matrix.copy(x.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale);const fe=X.children;for(let G=0,Ce=fe.length;G<Ce;G++)fe[G].updateMatrixWorld(!0);re.length===2?N(x,w,D):x.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(p!==null)return p.fixedFoveation;if(g!==null)return g.fixedFoveation},this.setFoveation=function(X){p!==null&&(p.fixedFoveation=X),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=X)},this.getPlanes=function(){return I};let j=null;function Ae(X,Z){if(h=Z.getViewerPose(u||l),f=Z,h!==null){const re=h.views;g!==null&&(e.setRenderTargetFramebuffer(C,g.framebuffer),e.setRenderTarget(C));let fe=!1;re.length!==x.cameras.length&&(x.cameras.length=0,fe=!0);for(let G=0;G<re.length;G++){const Ce=re[G];let ve=null;if(g!==null)ve=g.getViewport(Ce);else{const Ie=d.getViewSubImage(p,Ce);ve=Ie.viewport,G===0&&(e.setRenderTargetTextures(C,Ie.colorTexture,p.ignoreDepthValues?void 0:Ie.depthStencilTexture),e.setRenderTarget(C))}let ae=Q[G];ae===void 0&&(ae=new Ft,ae.layers.enable(G),ae.viewport=new Ye,Q[G]=ae),ae.matrix.fromArray(Ce.transform.matrix),ae.projectionMatrix.fromArray(Ce.projectionMatrix),ae.viewport.set(ve.x,ve.y,ve.width,ve.height),G===0&&x.matrix.copy(ae.matrix),fe===!0&&x.cameras.push(ae)}}for(let re=0;re<_.length;re++){const fe=E[re],G=_[re];fe!==null&&G!==void 0&&G.update(fe,Z,u||l)}if(j&&j(X,Z),Z.detectedPlanes){s.dispatchEvent({type:"planesdetected",data:Z.detectedPlanes});let re=null;for(const fe of I)Z.detectedPlanes.has(fe)||(re===null&&(re=[]),re.push(fe));if(re!==null)for(const fe of re)I.delete(fe),S.delete(fe),s.dispatchEvent({type:"planeremoved",data:fe});for(const fe of Z.detectedPlanes)if(!I.has(fe))I.add(fe),S.set(fe,Z.lastChangedTime),s.dispatchEvent({type:"planeadded",data:fe});else{const G=S.get(fe);fe.lastChangedTime>G&&(S.set(fe,fe.lastChangedTime),s.dispatchEvent({type:"planechanged",data:fe}))}}f=null}const se=new Wu;se.setAnimationLoop(Ae),this.setAnimationLoop=function(X){j=X},this.dispose=function(){}}}function S0(r,e){function t(f,A){A.color.getRGB(f.fogColor.value,zu(r)),A.isFog?(f.fogNear.value=A.near,f.fogFar.value=A.far):A.isFogExp2&&(f.fogDensity.value=A.density)}function n(f,A,m,C,_){A.isMeshBasicMaterial||A.isMeshLambertMaterial?i(f,A):A.isMeshToonMaterial?(i(f,A),u(f,A)):A.isMeshPhongMaterial?(i(f,A),c(f,A)):A.isMeshStandardMaterial?(i(f,A),h(f,A),A.isMeshPhysicalMaterial&&d(f,A,_)):A.isMeshMatcapMaterial?(i(f,A),p(f,A)):A.isMeshDepthMaterial?i(f,A):A.isMeshDistanceMaterial?(i(f,A),g(f,A)):A.isMeshNormalMaterial?i(f,A):A.isLineBasicMaterial?(s(f,A),A.isLineDashedMaterial&&a(f,A)):A.isPointsMaterial?o(f,A,m,C):A.isSpriteMaterial?l(f,A):A.isShadowMaterial&&(f.color.value.copy(A.color),f.opacity.value=A.opacity),A.uniformsNeedUpdate=!1}function i(f,A){f.opacity.value=A.opacity,A.color&&f.diffuse.value.copy(A.color),A.emissive&&f.emissive.value.copy(A.emissive).multiplyScalar(A.emissiveIntensity),A.map&&(f.map.value=A.map),A.alphaMap&&(f.alphaMap.value=A.alphaMap),A.bumpMap&&(f.bumpMap.value=A.bumpMap,f.bumpScale.value=A.bumpScale,A.side===qt&&(f.bumpScale.value*=-1)),A.displacementMap&&(f.displacementMap.value=A.displacementMap,f.displacementScale.value=A.displacementScale,f.displacementBias.value=A.displacementBias),A.emissiveMap&&(f.emissiveMap.value=A.emissiveMap),A.normalMap&&(f.normalMap.value=A.normalMap,f.normalScale.value.copy(A.normalScale),A.side===qt&&f.normalScale.value.negate()),A.specularMap&&(f.specularMap.value=A.specularMap),A.alphaTest>0&&(f.alphaTest.value=A.alphaTest);const m=e.get(A).envMap;if(m&&(f.envMap.value=m,f.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=A.reflectivity,f.ior.value=A.ior,f.refractionRatio.value=A.refractionRatio),A.lightMap){f.lightMap.value=A.lightMap;const E=r.physicallyCorrectLights!==!0?Math.PI:1;f.lightMapIntensity.value=A.lightMapIntensity*E}A.aoMap&&(f.aoMap.value=A.aoMap,f.aoMapIntensity.value=A.aoMapIntensity);let C;A.map?C=A.map:A.specularMap?C=A.specularMap:A.displacementMap?C=A.displacementMap:A.normalMap?C=A.normalMap:A.bumpMap?C=A.bumpMap:A.roughnessMap?C=A.roughnessMap:A.metalnessMap?C=A.metalnessMap:A.alphaMap?C=A.alphaMap:A.emissiveMap?C=A.emissiveMap:A.clearcoatMap?C=A.clearcoatMap:A.clearcoatNormalMap?C=A.clearcoatNormalMap:A.clearcoatRoughnessMap?C=A.clearcoatRoughnessMap:A.iridescenceMap?C=A.iridescenceMap:A.iridescenceThicknessMap?C=A.iridescenceThicknessMap:A.specularIntensityMap?C=A.specularIntensityMap:A.specularColorMap?C=A.specularColorMap:A.transmissionMap?C=A.transmissionMap:A.thicknessMap?C=A.thicknessMap:A.sheenColorMap?C=A.sheenColorMap:A.sheenRoughnessMap&&(C=A.sheenRoughnessMap),C!==void 0&&(C.isWebGLRenderTarget&&(C=C.texture),C.matrixAutoUpdate===!0&&C.updateMatrix(),f.uvTransform.value.copy(C.matrix));let _;A.aoMap?_=A.aoMap:A.lightMap&&(_=A.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),f.uv2Transform.value.copy(_.matrix))}function s(f,A){f.diffuse.value.copy(A.color),f.opacity.value=A.opacity}function a(f,A){f.dashSize.value=A.dashSize,f.totalSize.value=A.dashSize+A.gapSize,f.scale.value=A.scale}function o(f,A,m,C){f.diffuse.value.copy(A.color),f.opacity.value=A.opacity,f.size.value=A.size*m,f.scale.value=C*.5,A.map&&(f.map.value=A.map),A.alphaMap&&(f.alphaMap.value=A.alphaMap),A.alphaTest>0&&(f.alphaTest.value=A.alphaTest);let _;A.map?_=A.map:A.alphaMap&&(_=A.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),f.uvTransform.value.copy(_.matrix))}function l(f,A){f.diffuse.value.copy(A.color),f.opacity.value=A.opacity,f.rotation.value=A.rotation,A.map&&(f.map.value=A.map),A.alphaMap&&(f.alphaMap.value=A.alphaMap),A.alphaTest>0&&(f.alphaTest.value=A.alphaTest);let m;A.map?m=A.map:A.alphaMap&&(m=A.alphaMap),m!==void 0&&(m.matrixAutoUpdate===!0&&m.updateMatrix(),f.uvTransform.value.copy(m.matrix))}function c(f,A){f.specular.value.copy(A.specular),f.shininess.value=Math.max(A.shininess,1e-4)}function u(f,A){A.gradientMap&&(f.gradientMap.value=A.gradientMap)}function h(f,A){f.roughness.value=A.roughness,f.metalness.value=A.metalness,A.roughnessMap&&(f.roughnessMap.value=A.roughnessMap),A.metalnessMap&&(f.metalnessMap.value=A.metalnessMap),e.get(A).envMap&&(f.envMapIntensity.value=A.envMapIntensity)}function d(f,A,m){f.ior.value=A.ior,A.sheen>0&&(f.sheenColor.value.copy(A.sheenColor).multiplyScalar(A.sheen),f.sheenRoughness.value=A.sheenRoughness,A.sheenColorMap&&(f.sheenColorMap.value=A.sheenColorMap),A.sheenRoughnessMap&&(f.sheenRoughnessMap.value=A.sheenRoughnessMap)),A.clearcoat>0&&(f.clearcoat.value=A.clearcoat,f.clearcoatRoughness.value=A.clearcoatRoughness,A.clearcoatMap&&(f.clearcoatMap.value=A.clearcoatMap),A.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=A.clearcoatRoughnessMap),A.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(A.clearcoatNormalScale),f.clearcoatNormalMap.value=A.clearcoatNormalMap,A.side===qt&&f.clearcoatNormalScale.value.negate())),A.iridescence>0&&(f.iridescence.value=A.iridescence,f.iridescenceIOR.value=A.iridescenceIOR,f.iridescenceThicknessMinimum.value=A.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=A.iridescenceThicknessRange[1],A.iridescenceMap&&(f.iridescenceMap.value=A.iridescenceMap),A.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=A.iridescenceThicknessMap)),A.transmission>0&&(f.transmission.value=A.transmission,f.transmissionSamplerMap.value=m.texture,f.transmissionSamplerSize.value.set(m.width,m.height),A.transmissionMap&&(f.transmissionMap.value=A.transmissionMap),f.thickness.value=A.thickness,A.thicknessMap&&(f.thicknessMap.value=A.thicknessMap),f.attenuationDistance.value=A.attenuationDistance,f.attenuationColor.value.copy(A.attenuationColor)),f.specularIntensity.value=A.specularIntensity,f.specularColor.value.copy(A.specularColor),A.specularIntensityMap&&(f.specularIntensityMap.value=A.specularIntensityMap),A.specularColorMap&&(f.specularColorMap.value=A.specularColorMap)}function p(f,A){A.matcap&&(f.matcap.value=A.matcap)}function g(f,A){f.referencePosition.value.copy(A.referencePosition),f.nearDistance.value=A.nearDistance,f.farDistance.value=A.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function b0(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(35375):0;function l(C,_){const E=_.program;n.uniformBlockBinding(C,E)}function c(C,_){let E=i[C.id];E===void 0&&(g(C),E=u(C),i[C.id]=E,C.addEventListener("dispose",A));const I=_.program;n.updateUBOMapping(C,I);const S=e.render.frame;s[C.id]!==S&&(d(C),s[C.id]=S)}function u(C){const _=h();C.__bindingPointIndex=_;const E=r.createBuffer(),I=C.__size,S=C.usage;return r.bindBuffer(35345,E),r.bufferData(35345,I,S),r.bindBuffer(35345,null),r.bindBufferBase(35345,_,E),E}function h(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(C){const _=i[C.id],E=C.uniforms,I=C.__cache;r.bindBuffer(35345,_);for(let S=0,w=E.length;S<w;S++){const D=E[S];if(p(D,S,I)===!0){const Q=D.__offset,x=Array.isArray(D.value)?D.value:[D.value];let M=0;for(let k=0;k<x.length;k++){const L=x[k],R=f(L);typeof L=="number"?(D.__data[0]=L,r.bufferSubData(35345,Q+M,D.__data)):L.isMatrix3?(D.__data[0]=L.elements[0],D.__data[1]=L.elements[1],D.__data[2]=L.elements[2],D.__data[3]=L.elements[0],D.__data[4]=L.elements[3],D.__data[5]=L.elements[4],D.__data[6]=L.elements[5],D.__data[7]=L.elements[0],D.__data[8]=L.elements[6],D.__data[9]=L.elements[7],D.__data[10]=L.elements[8],D.__data[11]=L.elements[0]):(L.toArray(D.__data,M),M+=R.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,Q,D.__data)}}r.bindBuffer(35345,null)}function p(C,_,E){const I=C.value;if(E[_]===void 0){if(typeof I=="number")E[_]=I;else{const S=Array.isArray(I)?I:[I],w=[];for(let D=0;D<S.length;D++)w.push(S[D].clone());E[_]=w}return!0}else if(typeof I=="number"){if(E[_]!==I)return E[_]=I,!0}else{const S=Array.isArray(E[_])?E[_]:[E[_]],w=Array.isArray(I)?I:[I];for(let D=0;D<S.length;D++){const Q=S[D];if(Q.equals(w[D])===!1)return Q.copy(w[D]),!0}}return!1}function g(C){const _=C.uniforms;let E=0;const I=16;let S=0;for(let w=0,D=_.length;w<D;w++){const Q=_[w],x={boundary:0,storage:0},M=Array.isArray(Q.value)?Q.value:[Q.value];for(let k=0,L=M.length;k<L;k++){const R=M[k],U=f(R);x.boundary+=U.boundary,x.storage+=U.storage}if(Q.__data=new Float32Array(x.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=E,w>0){S=E%I;const k=I-S;S!==0&&k-x.boundary<0&&(E+=I-S,Q.__offset=E)}E+=x.storage}return S=E%I,S>0&&(E+=I-S),C.__size=E,C.__cache={},this}function f(C){const _={boundary:0,storage:0};return typeof C=="number"?(_.boundary=4,_.storage=4):C.isVector2?(_.boundary=8,_.storage=8):C.isVector3||C.isColor?(_.boundary=16,_.storage=12):C.isVector4?(_.boundary=16,_.storage=16):C.isMatrix3?(_.boundary=48,_.storage=48):C.isMatrix4?(_.boundary=64,_.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),_}function A(C){const _=C.target;_.removeEventListener("dispose",A);const E=a.indexOf(_.__bindingPointIndex);a.splice(E,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function m(){for(const C in i)r.deleteBuffer(i[C]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}function w0(){const r=Hs("canvas");return r.style.display="block",r}function Zu(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:w0(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,a=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,o=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1,u=r.multiviewStereo!==void 0?r.multiviewStereo:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=r.alpha!==void 0?r.alpha:!1;let d=null,p=null;const g=[],f=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=sn,this.physicallyCorrectLights=!1,this.toneMapping=yn,this.toneMappingExposure=1;const A=this;let m=!1,C=0,_=0,E=null,I=-1,S=null;const w=new Ye,D=new Ye;let Q=null,x=e.width,M=e.height,k=1,L=null,R=null;const U=new Ye(0,0,x,M),V=new Ye(0,0,x,M);let z=!1;const N=new Zr;let J=!1,j=!1,Ae=null;const se=new ge,X=new ce,Z=new T,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function fe(){return E===null?k:1}let G=t;function Ce(y,F){for(let W=0;W<y.length;W++){const P=y[W],q=e.getContext(P,F);if(q!==null)return q}return null}try{const y={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Oo}`),e.addEventListener("webglcontextlost",Te,!1),e.addEventListener("webglcontextrestored",Me,!1),e.addEventListener("webglcontextcreationerror",Se,!1),G===null){const F=["webgl2","webgl","experimental-webgl"];if(A.isWebGL1Renderer===!0&&F.shift(),G=Ce(F,y),G===null)throw Ce(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ve,ae,Ie,ke,me,Qe,Yt,Nt,Mt,rn,St,it,an,gn,mt,Xe,bt,wn,b,v,H,$,K,ne,he;function pe(){ve=new Om(G),ae=new Lm(G,ve,r),ve.init(ae),K=new E0(G,ve,ae),Ie=new _0(G,ve,ae),ke=new Vm,me=new r0,Qe=new x0(G,ve,Ie,me,ae,K,ke),Yt=new Qm(A),Nt=new Nm(A),Mt=new KA(G,ae),ne=new Rm(G,ve,Mt,ae),rn=new Gm(G,Mt,ke,ne),St=new qm(G,rn,Mt,ke),v=new Wm(G,ae,Qe),Xe=new Pm(me),it=new s0(A,Yt,Nt,ve,ae,ne,Xe),an=new S0(A,me),gn=new o0,mt=new f0(ve,ae),b=new Tm(A,Yt,Nt,Ie,St,h,a),wn=new C0(A,ve,G),bt=new m0(A,St,ae),he=new b0(G,ke,ae,Ie),H=new Dm(G,ve,ke,ae),$=new km(G,ve,ke,ae),ke.programs=it.programs,A.capabilities=ae,A.extensions=ve,A.properties=me,A.renderLists=gn,A.shadowMap=bt,A.state=Ie,A.info=ke}pe();const O=new M0(A,G,ve,u);this.xr=O,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const y=ve.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ve.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(y){y!==void 0&&(k=y,this.setSize(x,M,!1))},this.getSize=function(y){return y.set(x,M)},this.setSize=function(y,F,W){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}x=y,M=F,e.width=Math.floor(y*k),e.height=Math.floor(F*k),W!==!1&&(e.style.width=y+"px",e.style.height=F+"px"),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(x*k,M*k).floor()},this.setDrawingBufferSize=function(y,F,W){x=y,M=F,k=W,e.width=Math.floor(y*W),e.height=Math.floor(F*W),this.setViewport(0,0,y,F)},this.getCurrentViewport=function(y){return y.copy(w)},this.getViewport=function(y){return y.copy(U)},this.setViewport=function(y,F,W,P){y.isVector4?U.set(y.x,y.y,y.z,y.w):U.set(y,F,W,P),Ie.viewport(w.copy(U).multiplyScalar(k).floor())},this.getScissor=function(y){return y.copy(V)},this.setScissor=function(y,F,W,P){y.isVector4?V.set(y.x,y.y,y.z,y.w):V.set(y,F,W,P),Ie.scissor(D.copy(V).multiplyScalar(k).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(y){Ie.setScissorTest(z=y)},this.setOpaqueSort=function(y){L=y},this.setTransparentSort=function(y){R=y},this.getClearColor=function(y){return y.copy(b.getClearColor())},this.setClearColor=function(y,F){b.setClearColor(y,F)},this.getClearAlpha=function(){return b.getClearAlpha()},this.setClearAlpha=function(y){b.setClearAlpha(y)},this.clear=function(y=!0,F=!0,W=!0){let P=0;y&&(P|=16384),F&&(P|=256),W&&(P|=1024),G.clear(P)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",Se,!1),gn.dispose(),mt.dispose(),me.dispose(),Yt.dispose(),Nt.dispose(),St.dispose(),ne.dispose(),he.dispose(),it.dispose(),O.dispose(),O.removeEventListener("sessionstart",ye),O.removeEventListener("sessionend",ee),Ae&&(Ae.dispose(),Ae=null),_e.stop()};function Te(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const y=ke.autoReset,F=bt.enabled,W=bt.autoUpdate,P=bt.needsUpdate,q=bt.type;pe(),ke.autoReset=y,bt.enabled=F,bt.autoUpdate=W,bt.needsUpdate=P,bt.type=q}function Se(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function B(y){const F=y.target;F.removeEventListener("dispose",B),Y(F)}function Y(y){te(y),me.remove(y)}function te(y){const F=me.get(y).programs;F!==void 0&&(F.forEach(function(W){it.releaseProgram(W)}),y.isShaderMaterial&&it.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,W,P,q,Ee){F===null&&(F=re);const be=q.isMesh&&q.matrixWorld.determinant()<0,we=rd(y,F,W,P,q);Ie.setMaterial(P,be);let Re=W.index,Oe=1;P.wireframe===!0&&(Re=rn.getWireframeAttribute(W),Oe=2);const Fe=W.drawRange,Ue=W.attributes.position;let st=Fe.start*Oe,kt=(Fe.start+Fe.count)*Oe;Ee!==null&&(st=Math.max(st,Ee.start*Oe),kt=Math.min(kt,(Ee.start+Ee.count)*Oe)),Re!==null?(st=Math.max(st,0),kt=Math.min(kt,Re.count)):Ue!=null&&(st=Math.max(st,0),kt=Math.min(kt,Ue.count));const Tn=kt-st;if(Tn<0||Tn===1/0)return;ne.setup(q,P,we,W,Re);let Si,$e=H;if(Re!==null&&(Si=Mt.get(Re),$e=$,$e.setIndex(Si)),q.isMesh)P.wireframe===!0?(Ie.setLineWidth(P.wireframeLinewidth*fe()),$e.setMode(1)):$e.setMode(4);else if(q.isLine){let ai=P.linewidth;ai===void 0&&(ai=1),Ie.setLineWidth(ai*fe()),q.isLineSegments?$e.setMode(1):q.isLineLoop?$e.setMode(2):$e.setMode(3)}else q.isPoints?$e.setMode(0):q.isSprite&&$e.setMode(4);if(q.isInstancedMesh)$e.renderInstances(st,Tn,q.count);else if(W.isInstancedBufferGeometry){const ai=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ze=Math.min(W.instanceCount,ai);$e.renderInstances(st,Tn,ze)}else $e.render(st,Tn)},this.compile=function(y,F){function W(P,q,Ee){P.transparent===!0&&P.side===Bs?(P.side=qt,P.needsUpdate=!0,nr(P,q,Ee),P.side=nn,P.needsUpdate=!0,nr(P,q,Ee),P.side=Bs):nr(P,q,Ee)}p=mt.get(y),p.init(),f.push(p),y.traverseVisible(function(P){P.isLight&&P.layers.test(F.layers)&&(p.pushLight(P),P.castShadow&&p.pushShadow(P))}),p.setupLights(A.physicallyCorrectLights),y.traverse(function(P){const q=P.material;if(q)if(Array.isArray(q))for(let Ee=0;Ee<q.length;Ee++){const be=q[Ee];W(be,y,P)}else W(q,y,P)}),f.pop(),p=null};let oe=null;function de(y){oe&&oe(y)}function ye(){_e.stop()}function ee(){_e.start()}const _e=new Wu;_e.setAnimationLoop(de),typeof self<"u"&&_e.setContext(self),this.setAnimationLoop=function(y){oe=y,O.setAnimationLoop(y),y===null?_e.stop():_e.start()},O.addEventListener("sessionstart",ye),O.addEventListener("sessionend",ee),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(F),F=O.getCamera()),y.isScene===!0&&y.onBeforeRender(A,y,F,E),p=mt.get(y,f.length),p.init(),f.push(p),se.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),N.setFromProjectionMatrix(se),j=this.localClippingEnabled,J=Xe.init(this.clippingPlanes,j,F),d=gn.get(y,g.length),d.init(),g.push(d),We(y,F,0,A.sortObjects),d.finish(),A.sortObjects===!0&&d.sort(L,R),J===!0&&Xe.beginShadows();const W=p.state.shadowsArray;if(bt.render(W,y,F),J===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),b.render(d,y),p.setupLights(A.physicallyCorrectLights),F.isArrayCamera)if(O.enabled&&O.isMultiview)Qe.deferTextureUploads=!0,Ve(d,y,F,F.cameras[0].viewport);else{const P=F.cameras;for(let q=0,Ee=P.length;q<Ee;q++){const be=P[q];Ve(d,y,be,be.viewport)}}else Ve(d,y,F);E!==null&&(Qe.updateMultisampleRenderTarget(E),Qe.updateRenderTargetMipmap(E)),y.isScene===!0&&y.onAfterRender(A,y,F),Qe.runDeferredUploads(),ne.resetDefaultState(),I=-1,S=null,f.pop(),f.length>0?p=f[f.length-1]:p=null,g.pop(),g.length>0?d=g[g.length-1]:d=null};function We(y,F,W,P){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||N.intersectsSprite(y)){P&&Z.setFromMatrixPosition(y.matrixWorld).applyMatrix4(se);const be=St.update(y),we=y.material;we.visible&&d.push(y,be,we,W,Z.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(y.isSkinnedMesh&&y.skeleton.frame!==ke.render.frame&&(y.skeleton.update(),y.skeleton.frame=ke.render.frame),!y.frustumCulled||N.intersectsObject(y))){P&&Z.setFromMatrixPosition(y.matrixWorld).applyMatrix4(se);const be=St.update(y),we=y.material;if(Array.isArray(we)){const Re=be.groups;for(let Oe=0,Fe=Re.length;Oe<Fe;Oe++){const Ue=Re[Oe],st=we[Ue.materialIndex];st&&st.visible&&d.push(y,be,st,W,Z.z,Ue)}}else we.visible&&d.push(y,be,we,W,Z.z,null)}}const Ee=y.children;for(let be=0,we=Ee.length;be<we;be++)We(Ee[be],F,W,P)}function Ve(y,F,W,P){const q=y.opaque,Ee=y.transmissive,be=y.transparent;p.setupLightsView(W),Ee.length>0&&Bn(q,F,W),P&&Ie.viewport(w.copy(P)),q.length>0&&Jt(q,F,W),Ee.length>0&&Jt(Ee,F,W),be.length>0&&Jt(be,F,W),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Bn(y,F,W){const P=ae.isWebGL2;Ae===null&&(Ae=new et(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?Gt:Ot,minFilter:jt,samples:P&&s===!0?4:0})),A.getDrawingBufferSize(X),P?Ae.setSize(X.x,X.y):Ae.setSize(zr(X.x),zr(X.y));const q=A.getRenderTarget();A.setRenderTarget(Ae),A.clear();const Ee=A.toneMapping;A.toneMapping=yn,Jt(y,F,W),A.toneMapping=Ee,Qe.updateMultisampleRenderTarget(Ae),Qe.updateRenderTargetMipmap(Ae),A.setRenderTarget(q)}function Jt(y,F,W){const P=F.isScene===!0?F.overrideMaterial:null;for(let q=0,Ee=y.length;q<Ee;q++){const be=y[q],we=be.object,Re=be.geometry,Oe=P===null?be.material:P,Fe=be.group;we.layers.test(W.layers)&&sd(we,F,W,Re,Oe,Fe)}}function sd(y,F,W,P,q,Ee){y.onBeforeRender(A,F,W,P,q,Ee),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),q.onBeforeRender(A,F,W,P,y,Ee),q.transparent===!0&&q.side===Bs?(q.side=qt,q.needsUpdate=!0,A.renderBufferDirect(W,F,P,q,y,Ee),q.side=nn,q.needsUpdate=!0,A.renderBufferDirect(W,F,P,q,y,Ee),q.side=Bs):A.renderBufferDirect(W,F,P,q,y,Ee),y.onAfterRender(A,F,W,P,q,Ee)}function nr(y,F,W){F.isScene!==!0&&(F=re);const P=me.get(y),q=p.state.lights,Ee=p.state.shadowsArray,be=q.state.version,we=it.getParameters(y,q.state,Ee,F,W),Re=it.getProgramCacheKey(we);let Oe=P.programs;P.environment=y.isMeshStandardMaterial?F.environment:null,P.fog=F.fog,P.envMap=(y.isMeshStandardMaterial?Nt:Yt).get(y.envMap||P.environment),Oe===void 0&&(y.addEventListener("dispose",B),Oe=new Map,P.programs=Oe);let Fe=Oe.get(Re);if(Fe!==void 0){if(P.currentProgram===Fe&&P.lightsStateVersion===be)return pl(y,we),Fe}else we.uniforms=it.getUniforms(y),y.onBuild(W,we,A),y.onBeforeCompile(we,A),Fe=it.acquireProgram(we,Re),Oe.set(Re,Fe),P.uniforms=we.uniforms;const Ue=P.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ue.clippingPlanes=Xe.uniform),pl(y,we),P.needsLights=od(y),P.lightsStateVersion=be,P.needsLights&&(Ue.ambientLightColor.value=q.state.ambient,Ue.lightProbe.value=q.state.probe,Ue.directionalLights.value=q.state.directional,Ue.directionalLightShadows.value=q.state.directionalShadow,Ue.spotLights.value=q.state.spot,Ue.spotLightShadows.value=q.state.spotShadow,Ue.rectAreaLights.value=q.state.rectArea,Ue.ltc_1.value=q.state.rectAreaLTC1,Ue.ltc_2.value=q.state.rectAreaLTC2,Ue.pointLights.value=q.state.point,Ue.pointLightShadows.value=q.state.pointShadow,Ue.hemisphereLights.value=q.state.hemi,Ue.directionalShadowMap.value=q.state.directionalShadowMap,Ue.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ue.spotShadowMap.value=q.state.spotShadowMap,Ue.spotLightMatrix.value=q.state.spotLightMatrix,Ue.spotLightMap.value=q.state.spotLightMap,Ue.pointShadowMap.value=q.state.pointShadowMap,Ue.pointShadowMatrix.value=q.state.pointShadowMatrix);const st=Fe.getUniforms(),kt=bo.seqWithValue(st.seq,Ue,P.uniformsList||[]);return P.currentProgram=Fe,P.uniformsList=kt,Fe}function pl(y,F){const W=me.get(y);W.outputEncoding=F.outputEncoding,W.instancing=F.instancing,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping,W.numMultiviewViews=F.numMultiviewViews}function rd(y,F,W,P,q){F.isScene!==!0&&(F=re),Qe.resetTextureUnits();const Ee=F.fog,be=P.isMeshStandardMaterial?F.environment:null,we=E===null?A.outputEncoding:E.isXRRenderTarget===!0?E.texture.encoding:sn,Re=(P.isMeshStandardMaterial?Nt:Yt).get(P.envMap||be),Oe=P.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Fe=!!P.normalMap&&!!W.attributes.tangent,Ue=!!W.morphAttributes.position,st=!!W.morphAttributes.normal,kt=!!W.morphAttributes.color,Tn=P.toneMapped?A.toneMapping:yn,Si=E&&E.isWebGLMultiviewRenderTarget?E.numViews:0,$e=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ai=$e!==void 0?$e.length:0,ze=me.get(P),ld=p.state.lights;if(J===!0&&(j===!0||y!==S)){const Vt=y===S&&P.id===I;Xe.setState(P,y,Vt)}let ct=!1;P.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==ld.state.version||ze.outputEncoding!==we||q.isInstancedMesh&&ze.instancing===!1||!q.isInstancedMesh&&ze.instancing===!0||q.isSkinnedMesh&&ze.skinning===!1||!q.isSkinnedMesh&&ze.skinning===!0||ze.envMap!==Re||P.fog===!0&&ze.fog!==Ee||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Xe.numPlanes||ze.numIntersection!==Xe.numIntersection)||ze.vertexAlphas!==Oe||ze.vertexTangents!==Fe||ze.morphTargets!==Ue||ze.morphNormals!==st||ze.morphColors!==kt||ze.toneMapping!==Tn||ae.isWebGL2===!0&&ze.morphTargetsCount!==ai||ze.numMultiviewViews!==Si)&&(ct=!0):(ct=!0,ze.__version=P.version);let mn=ze.currentProgram;ct===!0&&(mn=nr(P,F,q));let gl=!1,ps=!1,aa=!1;const At=mn.getUniforms(),bi=ze.uniforms;if(Ie.useProgram(mn.program)&&(gl=!0,ps=!0,aa=!0),P.id!==I&&(I=P.id,ps=!0),gl||S!==y){if(mn.numMultiviewViews>0?wn.updateCameraProjectionMatricesUniform(y,At):At.setValue(G,"projectionMatrix",y.projectionMatrix),ae.logarithmicDepthBuffer&&At.setValue(G,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),S!==y&&(S=y,ps=!0,aa=!0),P.isShaderMaterial||P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshStandardMaterial||P.envMap){const Vt=At.map.cameraPosition;Vt!==void 0&&Vt.setValue(G,Z.setFromMatrixPosition(y.matrixWorld))}(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&At.setValue(G,"isOrthographic",y.isOrthographicCamera===!0),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial||P.isShadowMaterial||q.isSkinnedMesh)&&(mn.numMultiviewViews>0?wn.updateCameraViewMatricesUniform(y,At):At.setValue(G,"viewMatrix",y.matrixWorldInverse))}if(q.isSkinnedMesh){At.setOptional(G,q,"bindMatrix"),At.setOptional(G,q,"bindMatrixInverse");const Vt=q.skeleton;Vt&&(ae.floatVertexTextures?(Vt.boneTexture===null&&Vt.computeBoneTexture(),At.setValue(G,"boneTexture",Vt.boneTexture,Qe),At.setValue(G,"boneTextureSize",Vt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const oa=W.morphAttributes;if((oa.position!==void 0||oa.normal!==void 0||oa.color!==void 0&&ae.isWebGL2===!0)&&v.update(q,W,P,mn),(ps||ze.receiveShadow!==q.receiveShadow)&&(ze.receiveShadow=q.receiveShadow,At.setValue(G,"receiveShadow",q.receiveShadow)),P.isMeshGouraudMaterial&&P.envMap!==null&&(bi.envMap.value=Re,bi.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),(ps||P.uniformsNeedUpdate)&&(At.setValue(G,"toneMappingExposure",A.toneMappingExposure),ze.needsLights&&ad(bi,aa),Ee&&P.fog===!0&&an.refreshFogUniforms(bi,Ee),an.refreshMaterialUniforms(bi,P,k,M,Ae),bo.upload(G,ze.uniformsList,bi,Qe)),P.isSpriteMaterial&&At.setValue(G,"center",q.center),mn.numMultiviewViews>0?wn.updateObjectMatricesUniforms(q,y,At):(At.setValue(G,"modelViewMatrix",q.modelViewMatrix),At.setValue(G,"normalMatrix",q.normalMatrix)),At.setValue(G,"modelMatrix",q.matrixWorld),P.isShaderMaterial||P.isRawShaderMaterial){const Vt=P.uniformsGroups;for(let la=0,cd=Vt.length;la<cd;la++)if(ae.isWebGL2){const ml=Vt[la];he.update(ml,mn),he.bind(ml,mn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mn}function ad(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function od(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(y,F,W){me.get(y.texture).__webglTexture=F,me.get(y.depthTexture).__webglTexture=W;const P=me.get(y);P.__hasExternalTextures=!0,P.__autoAllocateDepthBuffer=W===void 0,!P.__autoAllocateDepthBuffer&&!E.isWebGLMultiviewRenderTarget&&ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),P.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,F){const W=me.get(y);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(y,F=0,W=0){E=y,C=F,_=W;let P=!0,q=null,Ee=!1,be=!1;if(y){const Re=me.get(y);Re.__useDefaultFramebuffer!==void 0?(Ie.bindFramebuffer(36160,null),P=!1):Re.__webglFramebuffer===void 0?Qe.setupRenderTarget(y):Re.__hasExternalTextures&&Qe.rebindTextures(y,me.get(y.texture).__webglTexture,me.get(y.depthTexture).__webglTexture);const Oe=y.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(be=!0);const Fe=me.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(q=Fe[F],Ee=!0):ae.isWebGL2&&y.samples>0&&Qe.useMultisampledRTT(y)===!1?q=me.get(y).__webglMultisampledFramebuffer:q=Fe,w.copy(y.viewport),D.copy(y.scissor),Q=y.scissorTest}else w.copy(U).multiplyScalar(k).floor(),D.copy(V).multiplyScalar(k).floor(),Q=z;if(Ie.bindFramebuffer(36160,q)&&ae.drawBuffers&&P&&Ie.drawBuffers(y,q),Ie.viewport(w),Ie.scissor(D),Ie.setScissorTest(Q),Ee){const Re=me.get(y.texture);G.framebufferTexture2D(36160,36064,34069+F,Re.__webglTexture,W)}else if(be){const Re=me.get(y.texture),Oe=F||0;G.framebufferTextureLayer(36160,36064,Re.__webglTexture,W||0,Oe)}I=-1},this.readRenderTargetPixels=function(y,F,W,P,q,Ee,be){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=me.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&be!==void 0&&(we=we[be]),we){Ie.bindFramebuffer(36160,we);try{const Re=y.texture,Oe=Re.format,Fe=Re.type;if(Oe!==gt&&K.convert(Oe)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=Fe===Gt&&(ve.has("EXT_color_buffer_half_float")||ae.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Fe!==Ot&&K.convert(Fe)!==G.getParameter(35738)&&!(Fe===Ze&&(ae.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-P&&W>=0&&W<=y.height-q&&G.readPixels(F,W,P,q,K.convert(Oe),K.convert(Fe),Ee)}finally{const Re=E!==null?me.get(E).__webglFramebuffer:null;Ie.bindFramebuffer(36160,Re)}}},this.copyFramebufferToTexture=function(y,F,W=0){const P=Math.pow(2,-W),q=Math.floor(F.image.width*P),Ee=Math.floor(F.image.height*P);Qe.setTexture2D(F,0),G.copyTexSubImage2D(3553,W,0,0,y.x,y.y,q,Ee),Ie.unbindTexture()},this.copyTextureToTexture=function(y,F,W,P=0){const q=F.image.width,Ee=F.image.height,be=K.convert(W.format),we=K.convert(W.type);Qe.setTexture2D(W,0),G.pixelStorei(37440,W.flipY),G.pixelStorei(37441,W.premultiplyAlpha),G.pixelStorei(3317,W.unpackAlignment),F.isDataTexture?G.texSubImage2D(3553,P,y.x,y.y,q,Ee,be,we,F.image.data):F.isCompressedTexture?G.compressedTexSubImage2D(3553,P,y.x,y.y,F.mipmaps[0].width,F.mipmaps[0].height,be,F.mipmaps[0].data):G.texSubImage2D(3553,P,y.x,y.y,be,we,F.image),P===0&&W.generateMipmaps&&G.generateMipmap(3553),Ie.unbindTexture()},this.copyTextureToTexture3D=function(y,F,W,P,q=0){if(A.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=y.max.x-y.min.x+1,be=y.max.y-y.min.y+1,we=y.max.z-y.min.z+1,Re=K.convert(P.format),Oe=K.convert(P.type);let Fe;if(P.isData3DTexture)Qe.setTexture3D(P,0),Fe=32879;else if(P.isDataArrayTexture)Qe.setTexture2DArray(P,0),Fe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,P.flipY),G.pixelStorei(37441,P.premultiplyAlpha),G.pixelStorei(3317,P.unpackAlignment);const Ue=G.getParameter(3314),st=G.getParameter(32878),kt=G.getParameter(3316),Tn=G.getParameter(3315),Si=G.getParameter(32877),$e=W.isCompressedTexture?W.mipmaps[0]:W.image;G.pixelStorei(3314,$e.width),G.pixelStorei(32878,$e.height),G.pixelStorei(3316,y.min.x),G.pixelStorei(3315,y.min.y),G.pixelStorei(32877,y.min.z),W.isDataTexture||W.isData3DTexture?G.texSubImage3D(Fe,q,F.x,F.y,F.z,Ee,be,we,Re,Oe,$e.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Fe,q,F.x,F.y,F.z,Ee,be,we,Re,$e.data)):G.texSubImage3D(Fe,q,F.x,F.y,F.z,Ee,be,we,Re,Oe,$e),G.pixelStorei(3314,Ue),G.pixelStorei(32878,st),G.pixelStorei(3316,kt),G.pixelStorei(3315,Tn),G.pixelStorei(32877,Si),q===0&&P.generateMipmaps&&G.generateMipmap(Fe),Ie.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?Qe.setTextureCube(y,0):y.isData3DTexture?Qe.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Qe.setTexture2DArray(y,0):Qe.setTexture2D(y,0),Ie.unbindTexture()},this.resetState=function(){C=0,_=0,E=null,Ie.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class B0 extends Zu{}B0.prototype.isWebGL1Renderer=!0;class $u extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class eh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=vo,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=An()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Rt=new T;class ta{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Hn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array),s=je(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ta(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Sc=new T,bc=new Ye,wc=new Ye,T0=new T,Bc=new ge;class jo extends Ut{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ge,this.bindMatrixInverse=new ge}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ye,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;bc.fromBufferAttribute(i.attributes.skinIndex,e),wc.fromBufferAttribute(i.attributes.skinWeight,e),Sc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=wc.getComponent(s);if(a!==0){const o=bc.getComponent(s);Bc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(T0.copy(Sc).applyMatrix4(Bc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Yo extends Je{constructor(){super(),this.isBone=!0,this.type="Bone"}}class qs extends Ke{constructor(e=null,t=1,n=1,i,s,a,o,l,c=ot,u=ot,h,d){super(null,a,o,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tc=new ge,R0=new ge;class na{constructor(e=[],t=[]){this.uuid=An(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:R0;Tc.multiplyMatrices(o,t[s]),Tc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new na(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Qu(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new qs(t,e,e,gt,Ze);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Yo),this.bones.push(a),this.boneInverses.push(new ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Fs extends ht{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Rc=new ge,Dc=new ge,vr=[],D0=new ge,Is=new Ut;class ia extends Ut{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fs(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,D0)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Is.geometry=this.geometry,Is.material=this.material,Is.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,Rc),Dc.multiplyMatrices(n,Rc),Is.matrixWorld=Dc,Is.raycast(e,vr);for(let a=0,o=vr.length;a<o;a++){const l=vr[a];l.instanceId=s,l.object=this,t.push(l)}vr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Fs(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends Mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lc=new T,Pc=new T,Qc=new ge,Oa=new Jr,Ir=new si;class sa extends Je{constructor(e=new yt,t=new ss){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Lc.fromBufferAttribute(t,i-1),Pc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Lc.distanceTo(Pc);e.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(i),Ir.radius+=s,e.ray.intersectsSphere(Ir)===!1)return;Qc.copy(i).invert(),Oa.copy(e.ray).applyMatrix4(Qc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new T,u=new T,h=new T,d=new T,p=this.isLineSegments?2:1,g=n.index,A=n.attributes.position;if(g!==null){const m=Math.max(0,a.start),C=Math.min(g.count,a.start+a.count);for(let _=m,E=C-1;_<E;_+=p){const I=g.getX(_),S=g.getX(_+1);if(c.fromBufferAttribute(A,I),u.fromBufferAttribute(A,S),Oa.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,a.start),C=Math.min(A.count,a.start+a.count);for(let _=m,E=C-1;_<E;_+=p){if(c.fromBufferAttribute(A,_),u.fromBufferAttribute(A,_+1),Oa.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(d);S<e.near||S>e.far||t.push({distance:S,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Fc=new T,Uc=new T;class Jo extends sa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Fc.fromBufferAttribute(t,i),Uc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Fc.distanceTo(Uc);e.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class th extends sa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class rs extends Mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Nc=new ge,Bo=new Jr,yr=new si,Mr=new T;class Ko extends Je{constructor(e=new yt,t=new rs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(i),yr.radius+=s,e.ray.intersectsSphere(yr)===!1)return;Nc.copy(i).invert(),Bo.copy(e.ray).applyMatrix4(Nc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,f=p;g<f;g++){const A=c.getX(g);Mr.fromBufferAttribute(h,A),Oc(Mr,A,l,i,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,f=p;g<f;g++)Mr.fromBufferAttribute(h,g),Oc(Mr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Oc(r,e,t,n,i,s,a){const o=Bo.distanceSqToPoint(r);if(o<t){const l=new T;Bo.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Zo extends Ke{constructor(e,t,n,i,s,a,o,l,c,u,h,d){super(null,a,o,l,c,u,i,s,h,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class L0 extends Zo{constructor(e,t,n,i,s,a){super(e,t,n,s,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=vt}}class P0 extends Ke{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class us extends Mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pu,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ri extends us{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Zn(r,e,t){return nh(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function Sr(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function nh(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Q0(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Gc(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function ih(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class $s{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class F0 extends $s{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hl,endingEnd:Hl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Wl:s=e,o=2*t-n;break;case ql:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Wl:a=e,l=2*n-t;break;case ql:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),f=g*g,A=f*g,m=-d*A+2*d*f-d*g,C=(1+d)*A+(-1.5-2*d)*f+(-.5+d)*g+1,_=(-1-p)*A+(1.5+p)*f+.5*g,E=p*A-p*f;for(let I=0;I!==o;++I)s[I]=m*a[u+I]+C*a[c+I]+_*a[l+I]+E*a[h+I];return s}}class U0 extends $s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)s[d]=a[c+d]*h+a[l+d]*u;return s}}class N0 extends $s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class bn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sr(t,this.TimeBufferType),this.values=Sr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Sr(e.times,Array),values:Sr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new N0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new U0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new F0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ks:t=this.InterpolantFactoryMethodDiscrete;break;case ns:t=this.InterpolantFactoryMethodLinear;break;case Aa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ks;case this.InterpolantFactoryMethodLinear:return ns;case this.InterpolantFactoryMethodSmooth:return Aa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=Zn(n,s,a),this.values=Zn(this.values,s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&nh(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=Zn(this.times),t=Zn(this.values),n=this.getValueSize(),i=this.getInterpolation()===Aa,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){const f=t[h+g];if(f!==t[d+g]||f!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=Zn(e,0,a),this.values=Zn(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=Zn(this.times,0),t=Zn(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=ns;class hs extends bn{}hs.prototype.ValueTypeName="bool";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=ks;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;class sh extends bn{}sh.prototype.ValueTypeName="color";class Xs extends bn{}Xs.prototype.ValueTypeName="number";class O0 extends $s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)pn.slerpFlat(s,0,a,c-o,a,c,l);return s}}class yi extends bn{InterpolantFactoryMethodLinear(e){return new O0(this.times,this.values,this.getValueSize(),e)}}yi.prototype.ValueTypeName="quaternion";yi.prototype.DefaultInterpolation=ns;yi.prototype.InterpolantFactoryMethodSmooth=void 0;class ds extends bn{}ds.prototype.ValueTypeName="string";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=ks;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;class js extends bn{}js.prototype.ValueTypeName="vector";class G0{constructor(e,t=-1,n,i=AA){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=An(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(V0(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(bn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=Q0(l);l=Gc(l,1,u),c=Gc(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Xs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,p,g,f){if(p.length!==0){const A=[],m=[];ih(p,A,m,g),A.length!==0&&f.push(new h(d,A,m))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let f=0;f<d[g].morphTargets.length;f++)p[d[g].morphTargets[f]]=-1;for(const f in p){const A=[],m=[];for(let C=0;C!==d[g].morphTargets.length;++C){const _=d[g];A.push(_.time),m.push(_.morphTarget===f?1:0)}i.push(new Xs(".morphTargetInfluence["+f+"]",A,m))}l=p.length*a}else{const p=".bones["+t[h].name+"]";n(js,p+".position",d,"pos",i),n(yi,p+".quaternion",d,"rot",i),n(js,p+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function k0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xs;case"vector":case"vector2":case"vector3":case"vector4":return js;case"color":return sh;case"quaternion":return yi;case"bool":case"boolean":return hs;case"string":return ds}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function V0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=k0(r.type);if(r.times===void 0){const t=[],n=[];ih(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const as={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class rh{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const fs=new rh;class Mi{constructor(e){this.manager=e!==void 0?e:fs,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Fn={};class z0 extends Error{constructor(e,t){super(e),this.response=t}}class $i extends Mi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=as.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Fn[e]!==void 0){Fn[e].push({onLoad:t,onProgress:n,onError:i});return}Fn[e]=[],Fn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Fn[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,g=p!==0;let f=0;const A=new ReadableStream({start(m){C();function C(){h.read().then(({done:_,value:E})=>{if(_)m.close();else{f+=E.byteLength;const I=new ProgressEvent("progress",{lengthComputable:g,loaded:f,total:p});for(let S=0,w=u.length;S<w;S++){const D=u[S];D.onProgress&&D.onProgress(I)}m.enqueue(E),C()}})}}});return new Response(A)}else throw new z0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{as.add(e,c);const u=Fn[e];delete Fn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Fn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Fn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class H0 extends Mi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=as.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Hs("img");function l(){u(),as.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class W0 extends Mi{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new qs,o=new $i(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){const c=s.parse(l);c&&(c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:vt,a.wrapT=c.wrapT!==void 0?c.wrapT:vt,a.magFilter=c.magFilter!==void 0?c.magFilter:Ge,a.minFilter=c.minFilter!==void 0?c.minFilter:Ge,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=jt),c.mipmapCount===1&&(a.minFilter=Ge),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c))},n,i),a}}class q0 extends Mi{constructor(e){super(e)}load(e,t,n,i){const s=new Ke,a=new H0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class $o extends Je{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ga=new ge,kc=new T,Vc=new T;class el{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zr,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;kc.setFromMatrixPosition(e.matrixWorld),t.position.copy(kc),Vc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vc),t.updateMatrixWorld(),Ga.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ga),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class X0 extends el{constructor(){super(new Ft(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=zs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ah extends $o{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new X0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const zc=new ge,ys=new T,ka=new T;class j0 extends el{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new Ye(2,1,1,1),new Ye(0,1,1,1),new Ye(3,1,1,1),new Ye(1,1,1,1),new Ye(3,0,1,1),new Ye(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ys.setFromMatrixPosition(e.matrixWorld),n.position.copy(ys),ka.copy(n.position),ka.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ka),n.updateMatrixWorld(),i.makeTranslation(-ys.x,-ys.y,-ys.z),zc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zc)}}class oh extends $o{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new j0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Y0 extends el{constructor(){super(new Zs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lh extends $o{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new Y0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class To{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class J0 extends yt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class ch extends Mi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=as.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){as.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class K0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Hc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Hc(){return(typeof performance>"u"?Date:performance).now()}const tl="\\[\\]\\.:\\/",Z0=new RegExp("["+tl+"]","g"),nl="[^"+tl+"]",$0="[^"+tl.replace("\\.","")+"]",ex=/((?:WC+[\/:])*)/.source.replace("WC",nl),tx=/(WCOD+)?/.source.replace("WCOD",$0),nx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nl),ix=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nl),sx=new RegExp("^"+ex+tx+nx+ix+"$"),rx=["material","materials","bones","map"];class ax{constructor(e,t,n){const i=n||qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class qe{constructor(e,t,n){this.path=t,this.parsedPath=n||qe.parseTrackName(t),this.node=qe.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new qe.Composite(e,t,n):new qe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Z0,"")}static parseTrackName(e){const t=sx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);rx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=qe.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}qe.Composite=ax;qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qe.prototype.GetterByBindingType=[qe.prototype._getValue_direct,qe.prototype._getValue_array,qe.prototype._getValue_arrayElement,qe.prototype._getValue_toArray];qe.prototype.SetterByBindingTypeAndVersioning=[[qe.prototype._setValue_direct,qe.prototype._setValue_direct_setNeedsUpdate,qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_array,qe.prototype._setValue_array_setNeedsUpdate,qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_arrayElement,qe.prototype._setValue_arrayElement_setNeedsUpdate,qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_fromArray,qe.prototype._setValue_fromArray_setNeedsUpdate,qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Yi{constructor(e){this.value=e}clone(){return new Yi(this.value.clone===void 0?this.value:this.value.clone())}}const Vn=ox();function ox(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function lx(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Et(r,-65504,65504),Vn.floatView[0]=r;const e=Vn.uint32View[0],t=e>>23&511;return Vn.baseTable[t]+((e&8388607)>>Vn.shiftTable[t])}function cx(r){const e=r>>10;return Vn.uint32View[0]=Vn.mantissaTable[Vn.offsetTable[e]+(r&1023)]+Vn.exponentTable[e],Vn.floatView[0]}var br=Object.freeze({__proto__:null,fromHalfFloat:cx,toHalfFloat:lx});typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oo);class ux extends W0{constructor(e){super(e),this.type=Gt}parse(e){const o=function(_,E){switch(_){case 1:console.error("THREE.RGBELoader Read Error: "+(E||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(E||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(E||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(E||""))}return-1},h=`
`,d=function(_,E,I){E=E||1024;let w=_.pos,D=-1,Q=0,x="",M=String.fromCharCode.apply(null,new Uint16Array(_.subarray(w,w+128)));for(;0>(D=M.indexOf(h))&&Q<E&&w<_.byteLength;)x+=M,Q+=M.length,w+=128,M+=String.fromCharCode.apply(null,new Uint16Array(_.subarray(w,w+128)));return-1<D?(I!==!1&&(_.pos+=Q+D+1),x+M.slice(0,D)):!1},p=function(_){const E=/^#\?(\S+)/,I=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,S=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,w=/^\s*FORMAT=(\S+)\s*$/,D=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,Q={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let x,M;if(_.pos>=_.byteLength||!(x=d(_)))return o(1,"no header found");if(!(M=x.match(E)))return o(3,"bad initial token");for(Q.valid|=1,Q.programtype=M[1],Q.string+=x+`
`;x=d(_),x!==!1;){if(Q.string+=x+`
`,x.charAt(0)==="#"){Q.comments+=x+`
`;continue}if((M=x.match(I))&&(Q.gamma=parseFloat(M[1])),(M=x.match(S))&&(Q.exposure=parseFloat(M[1])),(M=x.match(w))&&(Q.valid|=2,Q.format=M[1]),(M=x.match(D))&&(Q.valid|=4,Q.height=parseInt(M[1],10),Q.width=parseInt(M[2],10)),Q.valid&2&&Q.valid&4)break}return Q.valid&2?Q.valid&4?Q:o(3,"missing image size specifier"):o(3,"missing format specifier")},g=function(_,E,I){const S=E;if(S<8||S>32767||_[0]!==2||_[1]!==2||_[2]&128)return new Uint8Array(_);if(S!==(_[2]<<8|_[3]))return o(3,"wrong scanline width");const w=new Uint8Array(4*E*I);if(!w.length)return o(4,"unable to allocate buffer space");let D=0,Q=0;const x=4*S,M=new Uint8Array(4),k=new Uint8Array(x);let L=I;for(;L>0&&Q<_.byteLength;){if(Q+4>_.byteLength)return o(1);if(M[0]=_[Q++],M[1]=_[Q++],M[2]=_[Q++],M[3]=_[Q++],M[0]!=2||M[1]!=2||(M[2]<<8|M[3])!=S)return o(3,"bad rgbe scanline format");let R=0,U;for(;R<x&&Q<_.byteLength;){U=_[Q++];const z=U>128;if(z&&(U-=128),U===0||R+U>x)return o(3,"bad scanline data");if(z){const N=_[Q++];for(let J=0;J<U;J++)k[R++]=N}else k.set(_.subarray(Q,Q+U),R),R+=U,Q+=U}const V=S;for(let z=0;z<V;z++){let N=0;w[D]=k[z+N],N+=S,w[D+1]=k[z+N],N+=S,w[D+2]=k[z+N],N+=S,w[D+3]=k[z+N],D+=4}L--}return w},f=function(_,E,I,S){const w=_[E+3],D=Math.pow(2,w-128)/255;I[S+0]=_[E+0]*D,I[S+1]=_[E+1]*D,I[S+2]=_[E+2]*D,I[S+3]=1},A=function(_,E,I,S){const w=_[E+3],D=Math.pow(2,w-128)/255;I[S+0]=br.toHalfFloat(Math.min(_[E+0]*D,65504)),I[S+1]=br.toHalfFloat(Math.min(_[E+1]*D,65504)),I[S+2]=br.toHalfFloat(Math.min(_[E+2]*D,65504)),I[S+3]=br.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const C=p(m);if(C!==-1){const _=C.width,E=C.height,I=g(m.subarray(m.pos),_,E);if(I!==-1){let S,w,D;switch(this.type){case Ze:D=I.length/4;const Q=new Float32Array(D*4);for(let M=0;M<D;M++)f(I,M*4,Q,M*4);S=Q,w=Ze;break;case Gt:D=I.length/4;const x=new Uint16Array(D*4);for(let M=0;M<D;M++)A(I,M*4,x,M*4);S=x,w=Gt;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:_,height:E,data:S,header:C.string,gamma:C.gamma,exposure:C.exposure,type:w}}}return null}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(a,o){switch(a.type){case Ze:case Gt:a.encoding=sn,a.minFilter=Ge,a.magFilter=Ge,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,s,n,i)}}class hx{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0}_initWorker(e){if(!this.workers[e]){const t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){const n=this.workersResolve[e];if(n&&n(t),this.queue.length){const{resolve:i,msg:s,transfer:a}=this.queue.shift();this.workersResolve[e]=i,this.workers[e].postMessage(s,a)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(n=>{const i=this._getIdleWorker();i!==-1?(this._initWorker(i),this.workerStatus|=1<<i,this.workersResolve[i]=n,this.workers[i].postMessage(e,t)):this.queue.push({resolve:n,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const dx=0,fx=2,Ax=1,px=2,gx=0,uh=9,il=15,hh=16,sl=22,dh=37,rl=43,fh=76,Ah=83,ph=97,gh=100,mh=103,_h=109;class mx{constructor(){this.vkFormat=0,this.typeSize=1,this.pixelWidth=0,this.pixelHeight=0,this.pixelDepth=0,this.layerCount=0,this.faceCount=1,this.supercompressionScheme=0,this.levels=[],this.dataFormatDescriptor=[{vendorId:0,descriptorType:0,descriptorBlockSize:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],this.keyValue={},this.globalData=null}}class Ms{constructor(e,t,n,i){this._dataView=new DataView(e.buffer,e.byteOffset+t,n),this._littleEndian=i,this._offset=0}_nextUint8(){const e=this._dataView.getUint8(this._offset);return this._offset+=1,e}_nextUint16(){const e=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,e}_nextUint32(){const e=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint64(){const e=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,e}_nextInt32(){const e=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,e}_skip(e){return this._offset+=e,this}_scan(e,t=0){const n=this._offset;let i=0;for(;this._dataView.getUint8(this._offset)!==t&&i<e;)i++,this._offset++;return i<e&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+n,i)}}const Dt=[171,75,84,88,32,50,48,187,13,10,26,10];function Wc(r){return typeof TextDecoder<"u"?new TextDecoder().decode(r):Buffer.from(r).toString("utf8")}function _x(r){const e=new Uint8Array(r.buffer,r.byteOffset,Dt.length);if(e[0]!==Dt[0]||e[1]!==Dt[1]||e[2]!==Dt[2]||e[3]!==Dt[3]||e[4]!==Dt[4]||e[5]!==Dt[5]||e[6]!==Dt[6]||e[7]!==Dt[7]||e[8]!==Dt[8]||e[9]!==Dt[9]||e[10]!==Dt[10]||e[11]!==Dt[11])throw new Error("Missing KTX 2.0 identifier.");const t=new mx,n=17*Uint32Array.BYTES_PER_ELEMENT,i=new Ms(r,Dt.length,n,!0);t.vkFormat=i._nextUint32(),t.typeSize=i._nextUint32(),t.pixelWidth=i._nextUint32(),t.pixelHeight=i._nextUint32(),t.pixelDepth=i._nextUint32(),t.layerCount=i._nextUint32(),t.faceCount=i._nextUint32();const s=i._nextUint32();t.supercompressionScheme=i._nextUint32();const a=i._nextUint32(),o=i._nextUint32(),l=i._nextUint32(),c=i._nextUint32(),u=i._nextUint64(),h=i._nextUint64(),d=new Ms(r,Dt.length+n,3*s*8,!0);for(let z=0;z<s;z++)t.levels.push({levelData:new Uint8Array(r.buffer,r.byteOffset+d._nextUint64(),d._nextUint64()),uncompressedByteLength:d._nextUint64()});const p=new Ms(r,a,o,!0),g={vendorId:p._skip(4)._nextUint16(),descriptorType:p._nextUint16(),versionNumber:p._nextUint16(),descriptorBlockSize:p._nextUint16(),colorModel:p._nextUint8(),colorPrimaries:p._nextUint8(),transferFunction:p._nextUint8(),flags:p._nextUint8(),texelBlockDimension:[p._nextUint8(),p._nextUint8(),p._nextUint8(),p._nextUint8()],bytesPlane:[p._nextUint8(),p._nextUint8(),p._nextUint8(),p._nextUint8(),p._nextUint8(),p._nextUint8(),p._nextUint8(),p._nextUint8()],samples:[]},f=(g.descriptorBlockSize/4-6)/4;for(let z=0;z<f;z++){const N={bitOffset:p._nextUint16(),bitLength:p._nextUint8(),channelType:p._nextUint8(),samplePosition:[p._nextUint8(),p._nextUint8(),p._nextUint8(),p._nextUint8()],sampleLower:-1/0,sampleUpper:1/0};64&N.channelType?(N.sampleLower=p._nextInt32(),N.sampleUpper=p._nextInt32()):(N.sampleLower=p._nextUint32(),N.sampleUpper=p._nextUint32()),g.samples[z]=N}t.dataFormatDescriptor.length=0,t.dataFormatDescriptor.push(g);const A=new Ms(r,l,c,!0);for(;A._offset<c;){const z=A._nextUint32(),N=A._scan(z),J=Wc(N),j=A._scan(z-N.byteLength);t.keyValue[J]=J.match(/^ktx/i)?Wc(j):j,A._offset%4&&A._skip(4-A._offset%4)}if(h<=0)return t;const m=new Ms(r,u,h,!0),C=m._nextUint16(),_=m._nextUint16(),E=m._nextUint32(),I=m._nextUint32(),S=m._nextUint32(),w=m._nextUint32(),D=[];for(let z=0;z<s;z++)D.push({imageFlags:m._nextUint32(),rgbSliceByteOffset:m._nextUint32(),rgbSliceByteLength:m._nextUint32(),alphaSliceByteOffset:m._nextUint32(),alphaSliceByteLength:m._nextUint32()});const Q=u+m._offset,x=Q+E,M=x+I,k=M+S,L=new Uint8Array(r.buffer,r.byteOffset+Q,E),R=new Uint8Array(r.buffer,r.byteOffset+x,I),U=new Uint8Array(r.buffer,r.byteOffset+M,S),V=new Uint8Array(r.buffer,r.byteOffset+k,w);return t.globalData={endpointCount:C,selectorCount:_,imageDescs:D,endpointsData:L,selectorsData:R,tablesData:U,extendedData:V},t}let Va,Gn,Ro;const za={env:{emscripten_notify_memory_growth:function(r){Ro=new Uint8Array(Gn.exports.memory.buffer)}}};class xx{init(){return Va||(Va=typeof fetch<"u"?fetch("data:application/wasm;base64,"+qc).then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,za)).then(this._init):WebAssembly.instantiate(Buffer.from(qc,"base64"),za).then(this._init),Va)}_init(e){Gn=e.instance,za.env.emscripten_notify_memory_growth(0)}decode(e,t=0){if(!Gn)throw new Error("ZSTDDecoder: Await .init() before decoding.");const n=e.byteLength,i=Gn.exports.malloc(n);Ro.set(e,i),t=t||Number(Gn.exports.ZSTD_findDecompressedSize(i,n));const s=Gn.exports.malloc(t),a=Gn.exports.ZSTD_decompress(s,t,i,n),o=Ro.slice(s,s+a);return Gn.exports.free(i),Gn.exports.free(s),o}}const qc="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IAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQh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ASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigC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C0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY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wOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEE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",Ha=new WeakMap;let Wa=0,qa;class vn extends Mi{constructor(e){super(e),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new hx,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(e){return this.transcoderPath=e,this}setWorkerLimit(e){return this.workerPool.setWorkerLimit(e),this}detectSupport(e){return this.workerConfig={astcSupported:e.extensions.has("WEBGL_compressed_texture_astc"),etc1Supported:e.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:e.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:e.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:e.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:e.extensions.has("WEBGL_compressed_texture_pvrtc")||e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},e.capabilities.isWebGL2&&(this.workerConfig.etc1Supported=!1),this}init(){if(!this.transcoderPending){const e=new $i(this.manager);e.setPath(this.transcoderPath),e.setWithCredentials(this.withCredentials);const t=e.loadAsync("basis_transcoder.js"),n=new $i(this.manager);n.setPath(this.transcoderPath),n.setResponseType("arraybuffer"),n.setWithCredentials(this.withCredentials);const i=n.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([t,i]).then(([s,a])=>{const o=vn.BasisWorker.toString(),l=["/* constants */","let _EngineFormat = "+JSON.stringify(vn.EngineFormat),"let _TranscoderFormat = "+JSON.stringify(vn.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(vn.BasisFormat),"/* basis_transcoder.js */",s,"/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([l])),this.transcoderBinary=a,this.workerPool.setWorkerCreator(()=>{const c=new Worker(this.workerSourceURL),u=this.transcoderBinary.slice(0);return c.postMessage({type:"init",config:this.workerConfig,transcoderBinary:u},[u]),c})}),Wa>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),Wa++}return this.transcoderPending}load(e,t,n,i){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const s=new $i(this.manager);s.setResponseType("arraybuffer"),s.setWithCredentials(this.withCredentials),s.load(e,a=>{if(Ha.has(a))return Ha.get(a).promise.then(t).catch(i);this._createTexture(a).then(o=>t?t(o):null).catch(i)},n,i)}_loadTextureFromTranscodeResult(e,t){const{mipmaps:n,width:i,height:s,layers:a,format:o,type:l,error:c,dfdTransferFn:u,dfdFlags:h}=e;if(l==="error")throw new Error(c);return t.mipmaps=n,t.image.width=i,t.image.height=s,t.format=o,t.type=Ot,a>1&&(t.depth=a),t.minFilter=n.length===1?Ge:jt,t.magFilter=Ge,t.generateMipmaps=!1,t.needsUpdate=!0,t.encoding=u===px?Le:sn,t.premultiplyAlpha=!!(h&Ax),t}_loadTextureFromKTX2Container(e,t){return Cx(e,t)}_readKTX2Container(e){return _x(new Uint8Array(e))}_transcodeTexture(e,t={}){return this.workerPool.postMessage({type:"transcode",buffer:e,taskConfig:t},[e])}async _createTexture(e,t={}){const n=this._readKTX2Container(e);if(n.vkFormat!==gx){const i=n.pixelDepth===0?new qs:new Ho;return this._loadTextureFromKTX2Container(n,i)}else{const i=n.layerCount>1?new L0:new Zo,s=t,a=this.init().then(()=>this._transcodeTexture(e,s)).then(o=>this._loadTextureFromTranscodeResult(o.data,i));return Ha.set(e,{promise:a}),a}}dispose(){return this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),Wa--,this}}vn.BasisFormat={ETC1S:0,UASTC_4x4:1};vn.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16};vn.EngineFormat={RGBAFormat:gt,RGBA_ASTC_4x4_Format:Co,RGBA_BPTC_Format:Or,RGBA_ETC2_EAC_Format:Eo,RGBA_PVRTC_4BPPV1_Format:_o,RGBA_S3TC_DXT5_Format:Nr,RGB_ETC1_Format:Ru,RGB_ETC2_Format:xo,RGB_PVRTC_4BPPV1_Format:mo,RGB_S3TC_DXT1_Format:Ur};vn.BasisWorker=function(){let r,e,t;const n=_EngineFormat,i=_TranscoderFormat,s=_BasisFormat;self.addEventListener("message",function(g){const f=g.data;switch(f.type){case"init":r=f.config,a(f.transcoderBinary);break;case"transcode":e.then(()=>{try{const{width:A,height:m,hasAlpha:C,mipmaps:_,format:E,dfdTransferFn:I,dfdFlags:S}=o(f.buffer),w=[];for(let D=0;D<_.length;++D)w.push(_[D].data.buffer);self.postMessage({type:"transcode",id:f.id,width:A,height:m,hasAlpha:C,mipmaps:_,format:E,dfdTransferFn:I,dfdFlags:S},w)}catch(A){console.error(A),self.postMessage({type:"error",id:f.id,error:A.message})}});break}});function a(g){e=new Promise(f=>{t={wasmBinary:g,onRuntimeInitialized:f},BASIS(t)}).then(()=>{t.initializeBasis(),t.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function o(g){const f=new t.KTX2File(new Uint8Array(g));function A(){f.close(),f.delete()}if(!f.isValid())throw A(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");const m=f.isUASTC()?s.UASTC_4x4:s.ETC1S,C=f.getWidth(),_=f.getHeight(),E=f.getLayers()||1,I=f.getLevels(),S=f.getHasAlpha(),w=f.getDFDTransferFunc(),D=f.getDFDFlags(),{transcoderFormat:Q,engineFormat:x}=h(m,C,_,S);if(!C||!_||!I)throw A(),new Error("THREE.KTX2Loader:	Invalid texture");if(!f.startTranscoding())throw A(),new Error("THREE.KTX2Loader: .startTranscoding failed");const M=[];for(let k=0;k<I;k++){const L=[];let R,U;for(let V=0;V<E;V++){const z=f.getImageLevelInfo(k,V,0);R=z.origWidth,U=z.origHeight;const N=new Uint8Array(f.getImageTranscodedSizeInBytes(k,V,0,Q));if(!f.transcodeImage(N,k,V,0,Q,0,-1,-1))throw A(),new Error("THREE.KTX2Loader: .transcodeImage failed.");L.push(N)}M.push({data:p(L),width:R,height:U})}return A(),{width:C,height:_,layers:E,hasAlpha:S,mipmaps:M,format:x,dfdTransferFn:w,dfdFlags:D}}const l=[{if:"astcSupported",basisFormat:[s.UASTC_4x4],transcoderFormat:[i.ASTC_4x4,i.ASTC_4x4],engineFormat:[n.RGBA_ASTC_4x4_Format,n.RGBA_ASTC_4x4_Format],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[i.BC7_M5,i.BC7_M5],engineFormat:[n.RGBA_BPTC_Format,n.RGBA_BPTC_Format],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[i.BC1,i.BC3],engineFormat:[n.RGB_S3TC_DXT1_Format,n.RGBA_S3TC_DXT5_Format],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[i.ETC1,i.ETC2],engineFormat:[n.RGB_ETC2_Format,n.RGBA_ETC2_EAC_Format],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[i.ETC1],engineFormat:[n.RGB_ETC1_Format],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[i.PVRTC1_4_RGB,i.PVRTC1_4_RGBA],engineFormat:[n.RGB_PVRTC_4BPPV1_Format,n.RGBA_PVRTC_4BPPV1_Format],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0}],c=l.sort(function(g,f){return g.priorityETC1S-f.priorityETC1S}),u=l.sort(function(g,f){return g.priorityUASTC-f.priorityUASTC});function h(g,f,A,m){let C,_;const E=g===s.ETC1S?c:u;for(let I=0;I<E.length;I++){const S=E[I];if(r[S.if]&&S.basisFormat.includes(g)&&!(m&&S.transcoderFormat.length<2)&&!(S.needsPowerOfTwo&&!(d(f)&&d(A))))return C=S.transcoderFormat[m?1:0],_=S.engineFormat[m?1:0],{transcoderFormat:C,engineFormat:_}}return console.warn("THREE.KTX2Loader: No suitable compressed texture format found. Decoding to RGBA32."),C=i.RGBA32,_=n.RGBAFormat,{transcoderFormat:C,engineFormat:_}}function d(g){return g<=2?!0:(g&g-1)===0&&g!==0}function p(g){let f=0;for(const C of g)f+=C.byteLength;const A=new Uint8Array(f);let m=0;for(const C of g)A.set(C,m),m+=C.byteLength;return A}};const Xc={[_h]:gt,[ph]:gt,[dh]:gt,[rl]:gt,[mh]:Rs,[Ah]:Rs,[hh]:Rs,[sl]:Rs,[gh]:Ts,[fh]:Ts,[il]:Ts,[uh]:Ts},Xa={[_h]:Ze,[ph]:Gt,[dh]:Ot,[rl]:Ot,[mh]:Ze,[Ah]:Gt,[hh]:Ot,[sl]:Ot,[gh]:Ze,[fh]:Gt,[il]:Ot,[uh]:Ot},Ex={[rl]:Le,[sl]:Le,[il]:Le};async function Cx(r,e){const{vkFormat:t,pixelWidth:n,pixelHeight:i,pixelDepth:s}=r;if(Xc[t]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");const a=r.levels[0];let o,l;if(r.supercompressionScheme===dx)o=a.levelData;else if(r.supercompressionScheme===fx)qa||(qa=new Promise(async c=>{const u=new xx;await u.init(),c(u)})),o=(await qa).decode(a.levelData,a.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");return Xa[t]===Ze?l=new Float32Array(o.buffer,o.byteOffset,o.byteLength/Float32Array.BYTES_PER_ELEMENT):Xa[t]===Gt?l=new Uint16Array(o.buffer,o.byteOffset,o.byteLength/Uint16Array.BYTES_PER_ELEMENT):l=o,e.image.width=n,e.image.height=i,e.image.data=l,s>0&&(e.image.depth=s),e.type=Xa[t],e.format=Xc[t],e.encoding=Ex[t]||sn,e.needsUpdate=!0,Promise.resolve(e)}const vx="/assets/yoga-47fb4f81.wasm",Do={[wi.Int8]:Int8Array,[wi.Uint8]:Uint8Array,[wi.Int16]:Int16Array,[wi.Uint16]:Uint16Array,[wi.Uint32]:Uint32Array,[wi.Float32]:Float32Array},xh={[oi.SCALAR]:1,[oi.VEC2]:2,[oi.VEC3]:3,[oi.VEC4]:4,[oi.MAT2]:4,[oi.MAT3]:9,[oi.MAT4]:16};function jc(r,e=!0){const t=r.count,n=xh[r.type],i=Do[r.componentType],s=i.BYTES_PER_ELEMENT,a=s*n;let o=n,l;if(r.bufferView!==void 0){const u=r.bufferView.buffer.data,h=r.byteOffset+r.bufferView.byteOffset,d=r.bufferView.byteStride;if(d&&d!==a){if(l=new i(u,h,t*d/s),e){const p=l,g=t*n;l=new i(g),o=d/s;for(let f=0;f<g;f++){const A=Math.floor(f/n)*o+f%n;l[f]=p[A]}}}else l=new i(u,h,t*n)}else l=new i(t*n);const c=r.sparse;if(c){l=l.slice();const{count:u,indicesBufferView:h,indicesByteOffset:d,indicesComponentType:p,valuesBufferView:g,valuesByteOffset:f}=c,A=h.buffer.data,m=Do[p],C=m.BYTES_PER_ELEMENT,_=h.byteStride?h.byteStride/C:1,E=new m(A,d+h.byteOffset,u*_),I=g.buffer.data,S=g.byteStride?g.byteStride/s:n,w=new i(I,f+g.byteOffset,u*S);for(let D=0;D<u*n;D++){const Q=Math.floor(D/n),x=D%n,M=Q*S+x,k=Q*_+x,L=Math.floor(E[M]/n)*o+E[M]%n;l[L]=w[k]}}return l}const Yc=[];function Eh(r,e,t,n,i){for(let s=0;s<r.length;s++){const a=r[s];if(e===a.mode&&t===a.vertexColors&&n===a.flatShading&&i===a.useDerivativeTangents)return a}}function Ch(r,e){const t=!!e.attributes[Qt.COLOR_0],n=!e.attributes[Qt.NORMAL],i=!e.attributes[Qt.TANGENT],s=Eh(Yc,e.mode,t,n,i);if(s)return e.materialObj!==s.material&&s.refCount++,s.material;let a;return e.mode===He.POINTS?a=new rs({color:16777215}):e.mode===He.LINES||e.mode===He.LINE_LOOP||e.mode===He.LINE_STRIP?a=new ss({color:16777215}):a=new us({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:nn,flatShading:n,vertexColors:t}),Yc.push({material:a,flatShading:n,vertexColors:t,mode:e.mode,useDerivativeTangents:i,refCount:1}),vh(r,a),a}function vh(r,e){const t=De(r,Be);if(e.defines||(e.defines={}),"isMeshBasicMaterial"in e||(e.defines.USE_ENVMAP="",e.defines.ENVMAP_MODE_REFLECTION="",e.defines.ENVMAP_TYPE_CUBE_UV="",e.defines.CUBEUV_2D_SAMPLER_ARRAY="",e.defines.ENVMAP_BLENDING_NONE="",e.defines.USE_REFLECTION_PROBES=""),!e.userData.beforeCompileHook){const n=new Yi(new It().setUvTransform(0,0,1,1,0,0,0)),i=new Yi(t.reflectionProbesMap),s=new Yi(new T),a=new Yi(new T);e.onBeforeCompile=o=>{o.uniforms.lightMapTransform=n,o.uniforms.reflectionProbesMap=i,o.uniforms.reflectionProbeParams=s,o.uniforms.reflectionProbeSampleParams=a},e.userData.beforeCompileHook=!0,e.userData.lightMapTransform=n,e.userData.reflectionProbesMap=i,e.userData.reflectionProbeParams=s,e.userData.reflectionProbeSampleParams=a,e.needsUpdate=!0}}const Ix=yu(1,1,1);function yx(r){return!!(r.transmissionTexture||r.thicknessTexture||r.ior!==1.5||r.transmissionFactor!==0||r.thicknessFactor!==0||r.attenuationDistance!==0||!_f(r.attenuationColor,Ix))}const Lo={[Qt.POSITION]:"position",[Qt.NORMAL]:"normal",[Qt.TANGENT]:"tangent",[Qt.TEXCOORD_0]:"uv",[Qt.TEXCOORD_1]:"uv2",[Qt.COLOR_0]:"color",[Qt.JOINTS_0]:"skinIndex",[Qt.WEIGHTS_0]:"skinWeight"};function hi(r){for(const e in r)r[e]===void 0&&delete r[e];return r}const Hr={HDR:"image/vnd.radiance",KTX2:"image/ktx2"},Wr={HDR:".hdr",KTX2:".ktx2"};var tn=(r=>(r[r.RGBE=0]="RGBE",r[r.ImageBitmap=1]="ImageBitmap",r[r.KTX2=2]="KTX2",r))(tn||{});function Jc(r,e){let t=r.getIndex();if(t===null){const n=[],i=r.getAttribute("position");if(i!==void 0){for(let s=0;s<i.count;s++)n.push(s);r.setIndex(n),t=r.getIndex()}else return console.error("toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}if(t!==null){const n=t.count-2,i=[];if(e===He.TRIANGLE_FAN)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s}else throw new Error("toTrianglesDrawMode(): Unable to generate index.")}class Mx extends Pe(dd){}class Sx extends Pe(fd){}class bx extends Pe(Ad){}class wx extends Pe(pd){}class Bx extends Pe(gd){}class Tx extends Pe(md){}class Rx extends Pe(_d){}class Ih extends Pe(xd){constructor(){super(...arguments);ue(this,"imageData");ue(this,"loadStatus",tt.Uninitialized);ue(this,"abortController")}dispose(){this.loadStatus=tt.Disposed,this.abortController&&this.abortController.abort(),this.imageData&&this.imageData.type===tn.ImageBitmap&&this.imageData.data.close()}}class yh extends Pe(Ed){constructor(){super(...arguments);ue(this,"texture");ue(this,"loadStatus",tt.Uninitialized);ue(this,"abortController")}dispose(){this.loadStatus=tt.Disposed,this.abortController&&this.abortController.abort(),this.texture&&this.texture.dispose()}}class Dx extends Pe(Cd){constructor(){super(...arguments);ue(this,"textureArrayIndex",0)}}class Mh extends Pe(vd){constructor(){super(...arguments);ue(this,"materialCache",[])}getMaterialForMeshPrimitive(t,n){var p,g,f,A,m,C,_,E,I,S,w,D,Q,x,M,k,L;const i=De(t,Be),s=n.mode,a=!!n.attributes[Qt.COLOR_0],o=!n.attributes[Qt.NORMAL],l=!n.attributes[Qt.TANGENT],c=Eh(this.materialCache,s,a,o,l);if(c)return n.materialObj!==c.material&&c.refCount++,c.material;let u;const h={opacity:this.baseColorFactor[3],side:this.doubleSided?fn:nn,transparent:this.alphaMode===Ki.BLEND,depthWrite:this.alphaMode!==Ki.BLEND,alphaTest:this.alphaMode===Ki.MASK?this.alphaCutoff!==void 0?this.alphaCutoff:.5:void 0,vertexColors:a},d=new xe().fromArray(this.baseColorFactor);if(this.type===_l.Unlit)if(s===He.TRIANGLES||s===He.TRIANGLE_FAN||s===He.TRIANGLE_STRIP){u=new Cn(hi({...h,color:d,map:(p=this.baseColorTexture)==null?void 0:p.texture,toneMapped:!1}));const R=u.map;R&&(R.offset.fromArray(this.baseColorTextureOffset),R.rotation=this.baseColorTextureRotation,R.repeat.fromArray(this.baseColorTextureScale),i.renderer.initTexture(R))}else if(s===He.LINES||s===He.LINE_STRIP||s===He.LINE_LOOP)u=new ss(hi({...h,color:d,toneMapped:!1}));else if(s===He.POINTS){u=new rs(hi({...h,map:(g=this.baseColorTexture)==null?void 0:g.texture,sizeAttenuation:!1,toneMapped:!1}));const R=u.map;R&&(R.offset.fromArray(this.baseColorTextureOffset),R.rotation=this.baseColorTextureRotation,R.repeat.fromArray(this.baseColorTextureScale),i.renderer.initTexture(R))}else throw new Error(`Unsupported mesh mode ${s}`);else if(this.type===_l.Standard)if(s===He.TRIANGLES||s===He.TRIANGLE_FAN||s===He.TRIANGLE_STRIP){if(yx(this)){const R=new ri(hi({...h,color:d,map:(f=this.baseColorTexture)==null?void 0:f.texture,metalnessMap:(A=this.metallicRoughnessTexture)==null?void 0:A.texture,roughnessMap:(m=this.metallicRoughnessTexture)==null?void 0:m.texture,aoMap:(C=this.occlusionTexture)==null?void 0:C.texture,emissiveMap:(_=this.emissiveTexture)==null?void 0:_.texture,normalMap:(E=this.normalTexture)==null?void 0:E.texture,metalness:this.metallicFactor,roughness:this.roughnessFactor,aoMapIntensity:this.occlusionTextureStrength,emissive:new xe().fromArray(this.emissiveFactor),emissiveIntensity:this.emissiveStrength,flatShading:o,ior:this.ior,thickness:this.thicknessFactor,thicknessMap:(I=this.thicknessTexture)==null?void 0:I.texture,attenuationDistance:this.attenuationDistance,attenuationColor:new xe().fromArray(this.attenuationColor),transmission:this.transmissionFactor,transmissionMap:(S=this.transmissionTexture)==null?void 0:S.texture})),U=R.map;U&&(U.offset.fromArray(this.baseColorTextureOffset),U.rotation=this.baseColorTextureRotation,U.repeat.fromArray(this.baseColorTextureScale),i.renderer.initTexture(U));const V=R.metalnessMap;V&&(V.offset.fromArray(this.metallicRoughnessTextureOffset),V.rotation=this.metallicRoughnessTextureRotation,V.repeat.fromArray(this.metallicRoughnessTextureScale),i.renderer.initTexture(V));const z=R.aoMap;z&&(z.offset.fromArray(this.occlusionTextureOffset),z.rotation=this.occlusionTextureRotation,z.repeat.fromArray(this.occlusionTextureScale),i.renderer.initTexture(z));const N=R.emissiveMap;N&&(N.offset.fromArray(this.emissiveTextureOffset),N.rotation=this.emissiveTextureRotation,N.repeat.fromArray(this.emissiveTextureScale),i.renderer.initTexture(N));const J=R.normalMap;J&&(J.offset.fromArray(this.normalTextureOffset),J.rotation=this.normalTextureRotation,J.repeat.fromArray(this.normalTextureScale),i.renderer.initTexture(J)),R.normalScale.set(this.normalScale,l?-this.normalScale:this.normalScale);const j=R.thicknessMap;j&&(j.offset.fromArray(this.thicknessTextureOffset),j.rotation=this.thicknessTextureRotation,j.repeat.fromArray(this.thicknessTextureScale),i.renderer.initTexture(j));const Ae=R.transmissionMap;Ae&&(Ae.offset.fromArray(this.transmissionTextureOffset),Ae.rotation=this.transmissionTextureRotation,Ae.repeat.fromArray(this.transmissionTextureScale),i.renderer.initTexture(Ae)),u=R}else{u=new us(hi({...h,color:d,map:(w=this.baseColorTexture)==null?void 0:w.texture,metalnessMap:(D=this.metallicRoughnessTexture)==null?void 0:D.texture,roughnessMap:(Q=this.metallicRoughnessTexture)==null?void 0:Q.texture,aoMap:(x=this.occlusionTexture)==null?void 0:x.texture,emissiveMap:(M=this.emissiveTexture)==null?void 0:M.texture,normalMap:(k=this.normalTexture)==null?void 0:k.texture,metalness:this.metallicFactor,roughness:this.roughnessFactor,aoMapIntensity:this.occlusionTextureStrength,emissive:new xe().fromArray(this.emissiveFactor),emissiveIntensity:this.emissiveStrength,flatShading:o}));const R=u.map;R&&(R.offset.fromArray(this.baseColorTextureOffset),R.rotation=this.baseColorTextureRotation,R.repeat.fromArray(this.baseColorTextureScale),i.renderer.initTexture(R));const U=u.metalnessMap;U&&(U.offset.fromArray(this.metallicRoughnessTextureOffset),U.rotation=this.metallicRoughnessTextureRotation,U.repeat.fromArray(this.metallicRoughnessTextureScale),i.renderer.initTexture(U));const V=u.aoMap;V&&(V.offset.fromArray(this.occlusionTextureOffset),V.rotation=this.occlusionTextureRotation,V.repeat.fromArray(this.occlusionTextureScale),i.renderer.initTexture(V));const z=u.emissiveMap;z&&(z.offset.fromArray(this.emissiveTextureOffset),z.rotation=this.emissiveTextureRotation,z.repeat.fromArray(this.emissiveTextureScale),i.renderer.initTexture(z));const N=u.normalMap;N&&(N.offset.fromArray(this.normalTextureOffset),N.rotation=this.normalTextureRotation,N.repeat.fromArray(this.normalTextureScale),i.renderer.initTexture(N)),u.normalScale.set(this.normalScale,l?-this.normalScale:this.normalScale)}vh(t,u)}else if(s===He.LINES||s===He.LINE_STRIP||s===He.LINE_LOOP)u=new ss(hi({...h,color:d}));else if(s===He.POINTS){u=new rs(hi({...h,color:d,map:(L=this.baseColorTexture)==null?void 0:L.texture,sizeAttenuation:!1}));const R=u.map;R&&(R.offset.fromArray(this.baseColorTextureOffset),R.rotation=this.baseColorTextureRotation,R.repeat.fromArray(this.baseColorTextureScale),i.renderer.initTexture(R))}else throw new Error(`Unsupported mesh mode ${s}`);else throw new Error(`Unsupported material type ${this.type}`);return u.name=this.name,this.materialCache.push({material:u,flatShading:o,vertexColors:a,mode:s,useDerivativeTangents:l,refCount:1}),u}disposeMeshPrimitiveMaterial(t){const n=this.materialCache.findIndex(s=>s.material===t);if(n===-1)return;const i=this.materialCache[n];i.refCount--,i.refCount<=0&&(t.dispose(),this.materialCache.splice(n,1))}dispose(t){for(const n of this.materialCache)n.material.dispose()}}class Lx extends Pe(Id){}class Px extends Pe(yd){}class Qx extends Pe(Md){}const Fx=new ht(new Float32Array(0),0);class Ux extends Pe(Sd){constructor(){super(...arguments);ue(this,"attribute",Fx);ue(this,"prevVersion",0)}load(t){const n=xh[this.type],a=Do[this.componentType].BYTES_PER_ELEMENT*n;if(this.bufferView&&this.bufferView.byteStride&&this.bufferView.byteStride!==a){const o=jc(this,!1),l=new eh(o,this.bufferView.byteStride/o.BYTES_PER_ELEMENT);this.attribute=new ta(l,n,0,this.normalized)}else this.attribute=new ht(jc(this),n,this.normalized),this.dynamic&&this.attribute.setUsage(Io);if(this.prevVersion=this.version,this.dynamic){const{dynamicAccessors:o}=De(t,Be);o.push(this)}}dispose(t){const{dynamicAccessors:n}=De(t,Be),i=n.indexOf(this);i!==-1&&n.splice(i,1)}}class Nx extends Pe(bd){}class Ox extends Pe(wd){}const Gx=new yt,kx=new us;class Sh extends Pe(Bd){constructor(){super(...arguments);ue(this,"geometryObj",Gx);ue(this,"materialObj",kx);ue(this,"autoUpdateNormals",!1)}load(t){var i;let n=new yt;if(this.indices){if("isInterleavedBufferAttribute"in this.indices.attribute)throw new Error("Interleaved attributes are not supported as mesh indices.");n.setIndex(this.indices.attribute)}for(let s=0;s<this.attributes.length;s++){const a=this.attributes[s];a&&n.setAttribute(Lo[s],a.attribute)}this.mode===He.TRIANGLE_STRIP?n=Jc(n,He.TRIANGLE_STRIP):this.mode===He.TRIANGLE_FAN&&(n=Jc(n,He.TRIANGLE_FAN)),this.geometryObj=n,this.material?this.materialObj=this.material.getMaterialForMeshPrimitive(t,this):this.materialObj=Ch(t,this),(i=this.attributes[Qt.POSITION])!=null&&i.dynamic&&(this.autoUpdateNormals=!0)}dispose(){this.geometryObj.dispose(),this.material&&this.material.disposeMeshPrimitiveMaterial(this.materialObj)}}class Vx extends Pe(Td){}class zx extends Pe(Rd){}class Hx extends Pe(Dd){constructor(){super(...arguments);ue(this,"skeleton")}}class Wx extends Pe(Ld){}class qx extends Pe(Pd){}class Xx extends Pe(Qd){}class jx extends Pe(Fd){constructor(){super(...arguments);ue(this,"domElement")}}class Yx extends Pe(Ud){constructor(){super(...arguments);ue(this,"layout",{x:0,y:0,width:0,height:0})}}class Jx extends Pe(Nd){constructor(){super(...arguments);ue(this,"canvasTexture");ue(this,"canvas");ue(this,"ctx2d");ue(this,"lastRedraw",0)}}class Kx extends Pe(Od){}class Zx extends Pe(Gd){}class er extends Pe(kd){constructor(){super(...arguments);ue(this,"currentMeshResourceId",0);ue(this,"bone");ue(this,"meshPrimitiveObjects");ue(this,"currentCameraResourceId",0);ue(this,"cameraObject");ue(this,"currentLightResourceId",0);ue(this,"lightObject");ue(this,"tilesRendererObject");ue(this,"tilesRendererCamera");ue(this,"currentTilesRendererResourceId",0);ue(this,"currentReflectionProbeResourceId",0);ue(this,"currentUICanvasResourceId",0);ue(this,"reflectionProbeObject");ue(this,"object3DVisible",!0);ue(this,"needsUpdate",!0);ue(this,"object3DWorldMatrix",new ge);ue(this,"uiCanvasMesh")}dispose(t){var n,i,s,a,o,l,c;if(this.meshPrimitiveObjects)for(let u=0;u<this.meshPrimitiveObjects.length;u++){const h=this.meshPrimitiveObjects[u];if((n=h.parent)==null||n.remove(h),h instanceof jo){for(let d=0;d<h.skeleton.bones.length;d++){const p=h.skeleton.bones[d];(i=p.parent)==null||i.remove(p)}h.skeleton.dispose()}h instanceof ia&&h.geometry.dispose()}if(this.cameraObject&&((s=this.cameraObject.parent)==null||s.remove(this.cameraObject)),this.lightObject&&((a=this.lightObject.parent)==null||a.remove(this.lightObject)),this.reflectionProbeObject&&((o=this.reflectionProbeObject.parent)==null||o.remove(this.reflectionProbeObject)),this.tilesRendererObject){const{tileRendererNodes:u}=De(t,Be),h=this.tilesRendererObject.group;(l=h.parent)==null||l.remove(h),this.tilesRendererObject.dispose();const d=u.indexOf(this);d!==-1&&u.splice(d,1)}this.uiCanvasMesh&&((c=this.uiCanvasMesh.parent)==null||c.remove(this.uiCanvasMesh),this.uiCanvasMesh.geometry.dispose(),this.uiCanvasMesh.material.map.dispose(),this.uiCanvasMesh.material.dispose(),this.uiCanvasMesh=void 0)}}class $x extends Pe(Vd){}class eE extends Pe(zd){}class tE extends Pe(Hd){}class nE extends Pe(Wd){constructor(){super(...arguments);ue(this,"currentBackgroundTextureResourceId",0);ue(this,"currentReflectionProbeResourceId",0);ue(this,"reflectionProbeNeedsUpdate",!1)}}class iE extends Pe(qd){}class bh extends Pe(Xd){}const{ResourceModule:sE,getLocalResource:al,getLocalResources:Xn,registerResource:Gv,registerResourceLoader:kv,ResourceLoaderSystem:wh,ReturnRecycledResourcesSystem:rE}=jd([er,Xx,Jx,Yx,jx,qx,Bx,Tx,Rx,Mx,Lx,Sx,Px,bx,wx,Ih,Mh,yh,Ox,nE,Sh,Wx,Kx,Zx,Ux,Qx,Hx,Nx,Vx,Dx,zx,tE,eE,$x,iE,bh]);class As{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const aE=new Zs(-1,1,1,-1,0,1),ol=new yt;ol.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3));ol.setAttribute("uv",new Xt([0,2,0,0,2,0],2));class ll{constructor(e){this._mesh=new Ut(ol,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,aE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class oE extends As{constructor(e,t,n,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new xe}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=i}}const cl={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class Bh extends As{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof lt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ws.clone(e.uniforms),this.material=new lt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ll(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Kc extends As{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class lE extends As{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class cE{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new ce);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new et(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Bh(cl),this.clock=new K0}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Kc!==void 0&&(a instanceof Kc?n=!0:a instanceof lE&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ni extends As{constructor(e,t,n,i){super(),this.renderScene=t,this.renderCamera=n,this.selectedObjects=i!==void 0?i:[],this.visibleEdgeColor=new xe(1,1,1),this.hiddenEdgeColor=new xe(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256);const s=Math.round(this.resolution.x/this.downSampleRatio),a=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new et(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new Ju,this.depthMaterial.side=fn,this.depthMaterial.depthPacking=Lu,this.depthMaterial.blending=In,this.prepareMaskMaterial=this.getPrepareMaskMaterial(),this.prepareMaskMaterial.side=fn,this.prepareMaskMaterial.fragmentShader=u(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new et(this.resolution.x,this.resolution.y),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new et(s,a),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new et(s,a),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new et(Math.round(s/2),Math.round(a/2)),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this.getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new et(s,a),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new et(Math.round(s/2),Math.round(a/2)),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const o=4,l=4;this.separableBlurMaterial1=this.getSeperableBlurMaterial(o),this.separableBlurMaterial1.uniforms.texSize.value.set(s,a),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this.getSeperableBlurMaterial(l),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(s/2),Math.round(a/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=l,this.overlayMaterial=this.getOverlayMaterial();const c=cl;this.copyUniforms=Ws.clone(c.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new lt({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:In,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new xe,this.oldClearAlpha=1,this.fsQuad=new ll(null),this.tempPulseColor1=new xe,this.tempPulseColor2=new xe,this.textureMatrix=new ge;function u(h,d){const p=d.isPerspectiveCamera?"perspective":"orthographic";return h.replace(/DEPTH_TO_VIEW_Z/g,p+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let n=Math.round(e/this.downSampleRatio),i=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(n,i),this.renderTargetBlurBuffer1.setSize(n,i),this.renderTargetEdgeBuffer1.setSize(n,i),this.separableBlurMaterial1.uniforms.texSize.value.set(n,i),n=Math.round(n/2),i=Math.round(i/2),this.renderTargetBlurBuffer2.setSize(n,i),this.renderTargetEdgeBuffer2.setSize(n,i),this.separableBlurMaterial2.uniforms.texSize.value.set(n,i)}changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;function n(i){i.isMesh&&(e===!0?i.visible=t.get(i):(t.set(i,i.visible),i.visible=e))}for(let i=0;i<this.selectedObjects.length;i++)this.selectedObjects[i].traverse(n)}changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,n=[];function i(a){a.isMesh&&n.push(a)}for(let a=0;a<this.selectedObjects.length;a++)this.selectedObjects[a].traverse(i);function s(a){if(a.isMesh||a.isSprite){let o=!1;for(let l=0;l<n.length;l++)if(n[l].id===a.id){o=!0;break}if(o===!1){const l=a.visible;(e===!1||t.get(a)===!0)&&(a.visible=e),t.set(a,l)}}else(a.isPoints||a.isLine)&&(e===!0?a.visible=t.get(a):(t.set(a,a.visible),a.visible=e))}this.renderScene.traverse(s)}updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}render(e,t,n,i,s){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,s&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this.changeVisibilityOfSelectedObjects(!1);const o=this.renderScene.background;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this.updateTextureMatrix(),this.changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.renderScene.overrideMaterial=null,this.changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this.renderScene.background=o,this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this.fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const l=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(l),this.tempPulseColor2.multiplyScalar(l)}this.fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=ni.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=ni.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=ni.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=ni.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,s&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(n),this.fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}this.renderToScreen&&(this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=n.texture,e.setRenderTarget(null),this.fsQuad.render(e))}getPrepareMaskMaterial(){return new lt({defines:{USE_ENVMAP:""},uniforms:{depthTexture:{value:null},cameraNearFar:{value:new ce(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>

				varying vec4 projTexCoord;
				varying vec4 vPosition;
				uniform mat4 textureMatrix;

				void main() {

					#include <skinbase_vertex>
					#include <begin_vertex>
					#include <morphtarget_vertex>
					#include <skinning_vertex>
					#include <project_vertex>

					vPosition = mvPosition;

					vec4 worldPosition = vec4( transformed, 1.0 );

					#ifdef USE_INSTANCING

						worldPosition = instanceMatrix * worldPosition;

					#endif
					
					worldPosition = modelMatrix * worldPosition;

					projTexCoord = textureMatrix * worldPosition;

				}`,fragmentShader:`#include <packing>
				varying vec4 vPosition;
				varying vec4 projTexCoord;
				uniform sampler2D depthTexture;
				uniform vec2 cameraNearFar;

				void main() {

					float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
					float viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );
					float depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;
					gl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);

				}`})}getEdgeDetectionMaterial(){return new lt({uniforms:{maskTexture:{value:null},texSize:{value:new ce(.5,.5)},visibleEdgeColor:{value:new T(1,1,1)},hiddenEdgeColor:{value:new T(1,1,1)}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform vec2 texSize;
				uniform vec3 visibleEdgeColor;
				uniform vec3 hiddenEdgeColor;

				void main() {
					vec2 invSize = 1.0 / texSize;
					vec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);
					vec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);
					vec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);
					vec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);
					vec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);
					float diff1 = (c1.r - c2.r)*0.5;
					float diff2 = (c3.r - c4.r)*0.5;
					float d = length( vec2(diff1, diff2) );
					float a1 = min(c1.g, c2.g);
					float a2 = min(c3.g, c4.g);
					float visibilityFactor = min(a1, a2);
					vec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;
					gl_FragColor = vec4(edgeColor, 1.0) * vec4(d);
				}`})}getSeperableBlurMaterial(e){return new lt({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;
				uniform float kernelRadius;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}

				void main() {
					vec2 invSize = 1.0 / texSize;
					float sigma = kernelRadius/2.0;
					float weightSum = gaussianPdf(0.0, sigma);
					vec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;
					vec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);
					vec2 uvOffset = delta;
					for( int i = 1; i <= MAX_RADIUS; i ++ ) {
						float x = kernelRadius * float(i) / float(MAX_RADIUS);
						float w = gaussianPdf(x, sigma);
						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);
						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);
						diffuseSum += ((sample1 + sample2) * w);
						weightSum += (2.0 * w);
						uvOffset += delta;
					}
					gl_FragColor = diffuseSum/weightSum;
				}`})}getOverlayMaterial(){return new lt({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform sampler2D edgeTexture1;
				uniform sampler2D edgeTexture2;
				uniform sampler2D patternTexture;
				uniform float edgeStrength;
				uniform float edgeGlow;
				uniform bool usePatternTexture;

				void main() {
					vec4 edgeValue1 = texture2D(edgeTexture1, vUv);
					vec4 edgeValue2 = texture2D(edgeTexture2, vUv);
					vec4 maskColor = texture2D(maskTexture, vUv);
					vec4 patternColor = texture2D(patternTexture, 6.0 * vUv);
					float visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;
					vec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;
					vec4 finalColor = edgeStrength * maskColor.r * edgeValue;
					if(usePatternTexture)
						finalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);
					gl_FragColor = finalColor;
				}`,blending:kr,depthTest:!1,depthWrite:!1,transparent:!0})}}ni.BlurDirectionX=new ce(1,0);ni.BlurDirectionY=new ce(0,1);const uE={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xe(0)},defaultOpacity:{value:0}},vertexShader:`

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

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class os extends As{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new xe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new et(s,a),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new et(s,a);d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new et(s,a);p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),a=Math.round(a/2)}const o=uE;this.highPassUniforms=Ws.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new lt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.texSize.value=new ce(s,a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=cl;this.copyUniforms=Ws.clone(u.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new lt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:kr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new xe,this.oldClearAlpha=1,this.basic=new Cn,this.fsQuad=new ll(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.texSize.value=new ce(n,i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=os.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=os.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){return new lt({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new lt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}os.BlurDirectionX=new ce(1,0);os.BlurDirectionY=new ce(0,1);const hE={uniforms:{tDiffuse:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 tex = texture2D( tDiffuse, vUv );

			gl_FragColor = LinearTosRGB( tex );

		}`};var Th=(r=>(r[r.Default=0]="Default",r[r.EditorSelection=1]="EditorSelection",r))(Th||{});const dE={[nt.Low]:1,[nt.Medium]:4,[nt.High]:8,[nt.Ultra]:16},fE={[nt.Low]:4,[nt.Medium]:4,[nt.High]:8,[nt.Ultra]:16},AE={[nt.Low]:void 0,[nt.Medium]:new ce(512,512),[nt.High]:new ce(1024,1024),[nt.Ultra]:new ce(2048,2048)},pE={[nt.Low]:void 0,[nt.Medium]:new ce(512,512),[nt.High]:new ce(512,512),[nt.Ultra]:new ce(1024,1024)};class gE{constructor(e,t){ue(this,"effectComposer");ue(this,"renderPass");ue(this,"outlinePass");ue(this,"bloomPass");ue(this,"gammaCorrectionPass");ue(this,"outlineLayers");ue(this,"directionalShadowMapSize");ue(this,"shadowMapSize");this.renderer=e,this.quality=t;const n=e.getSize(new ce),i=new et(n.width,n.height,{minFilter:Ge,magFilter:Ge,format:gt,encoding:Le,samples:dE[t],type:Ze});n.width/n.height;const s=new $u,a=new qo;this.effectComposer=new cE(e,i),this.renderPass=new oE(s,a),this.outlinePass=new ni(n,s,a),this.bloomPass=new os(n,.4,.4,.9),this.bloomPass.renderTargetBright.texture.type=Ze;for(const o of this.bloomPass.renderTargetsHorizontal)o.texture.type=Ze;for(const o of this.bloomPass.renderTargetsVertical)o.texture.type=Ze;this.gammaCorrectionPass=new Bh(hE),this.effectComposer.addPass(this.renderPass),this.effectComposer.addPass(this.outlinePass),this.quality>=nt.High&&this.effectComposer.addPass(this.bloomPass),this.effectComposer.addPass(this.gammaCorrectionPass),this.outlineLayers=new Wo,this.outlineLayers.set(Th.EditorSelection),this.quality===nt.Low?this.renderer.setPixelRatio(.75):this.quality>=nt.Medium&&this.renderer.setPixelRatio(1),Ke.DEFAULT_ANISOTROPY=Math.min(e.capabilities.getMaxAnisotropy(),fE[t]),this.renderer.shadowMap.enabled=t>=nt.Medium,this.directionalShadowMapSize=AE[t],this.shadowMapSize=pE[t]}setSize(e,t){this.renderer.setSize(e,t,!1),this.effectComposer.setSize(e,t)}render(e,t,n){this.renderer.xr.isPresenting||this.quality===nt.Low?this.renderer.render(e,t):(this.renderPass.scene=e,this.renderPass.camera=t,this.outlinePass.renderScene=e,this.outlinePass.renderCamera=t,this.outlinePass.selectedObjects.length=0,e.traverse(i=>{i.layers.test(this.outlineLayers)&&this.outlinePass.selectedObjects.push(i)}),this.effectComposer.render(n))}}function mE(){const r="#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )",e="#if defined( USE_LIGHTMAP )";le.uv2_pars_vertex=le.uv2_pars_vertex.replace(r,e),le.uv2_pars_fragment=le.uv2_pars_fragment.replace(r,e),le.uv2_vertex=le.uv2_vertex.replace(r,e),le.uv2_pars_vertex=le.uv2_pars_vertex.replace("uniform mat3 uv2Transform;",`
    #ifdef USE_INSTANCING
      attribute vec2 lightMapOffset;
      attribute vec2 lightMapScale;
    #else
      uniform mat3 lightMapTransform;
    #endif
    `),le.uv2_vertex=le.uv2_vertex.replace("vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;",`
    #ifdef USE_INSTANCING
      vUv2 = uv2 * lightMapScale + lightMapOffset;
    #else
      vUv2 = ( lightMapTransform * vec3( uv2, 1 ) ).xy;
    #endif
    `),le.aomap_fragment=le.aomap_fragment.replace("texture2D( aoMap, vUv2 )","texture2D( aoMap, vUv )"),le.lights_fragment_maps=le.lights_fragment_maps.replace("#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )","#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV ) && !defined(USE_LIGHTMAP)"),le.lights_fragment_maps=le.lights_fragment_maps.replace("vec4 lightMapTexel = texture2D( lightMap, vUv2 );",`
    vec4 lightMapTexel = texture2D( lightMap, vUv2 );
    lightMapTexel.rgb = 34.49 * pow(lightMapTexel.a, 2.2) * lightMapTexel.rgb;
    lightMapTexel.a = 1.0;
    `),le.uv2_pars_vertex=le.uv2_pars_vertex.replace("#if defined( USE_LIGHTMAP )",`
    #if defined( USE_ENVMAP ) && defined( USE_INSTANCING ) && defined( USE_REFLECTION_PROBES )
      attribute vec3 instanceReflectionProbeParams;
      varying vec3 vInstanceReflectionProbeParams;
    #endif

    #if defined( USE_LIGHTMAP )
    `),le.uv2_vertex=le.uv2_vertex.replace("#if defined( USE_LIGHTMAP )",`
    #if defined( USE_ENVMAP ) && defined( USE_INSTANCING ) && defined( USE_REFLECTION_PROBES )
      vInstanceReflectionProbeParams = instanceReflectionProbeParams;
    #endif

    #if defined( USE_LIGHTMAP )
    `),le.envmap_common_pars_fragment=le.envmap_common_pars_fragment.replace("uniform sampler2D envMap;",`uniform sampler2D envMap;

    #ifdef USE_REFLECTION_PROBES
      uniform mediump sampler2DArray reflectionProbesMap;
      uniform vec3 reflectionProbeSampleParams;

      #ifdef USE_INSTANCING
        varying vec3 vInstanceReflectionProbeParams;
      #else
        uniform vec3 reflectionProbeParams;
      #endif
    #endif
    `),le.envmap_physical_pars_fragment=le.envmap_physical_pars_fragment.replace("vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );",`
    #ifdef USE_REFLECTION_PROBES
      #ifdef USE_INSTANCING
        vec4 envMapColor = mix(
          textureCubeUVArray( reflectionProbesMap, vInstanceReflectionProbeParams.x, reflectionProbeSampleParams, worldNormal, 1.0 ),
          textureCubeUVArray( reflectionProbesMap, vInstanceReflectionProbeParams.y, reflectionProbeSampleParams, worldNormal, 1.0 ),
          vInstanceReflectionProbeParams.z
        );
      #else
        vec4 envMapColor = mix(
          textureCubeUVArray( reflectionProbesMap, reflectionProbeParams.x, reflectionProbeSampleParams, worldNormal, 1.0 ),
          textureCubeUVArray( reflectionProbesMap, reflectionProbeParams.y, reflectionProbeSampleParams, worldNormal, 1.0 ),
          reflectionProbeParams.z
        );
      #endif
    #else
      vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
    #endif
    `),le.envmap_physical_pars_fragment=le.envmap_physical_pars_fragment.replace("vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );",`
    #ifdef USE_REFLECTION_PROBES
      #ifdef USE_INSTANCING
        vec4 envMapColor = mix(
          textureCubeUVArray( reflectionProbesMap, vInstanceReflectionProbeParams.x, reflectionProbeSampleParams, reflectVec, roughness ),
          textureCubeUVArray( reflectionProbesMap, vInstanceReflectionProbeParams.y, reflectionProbeSampleParams, reflectVec, roughness ),
          vInstanceReflectionProbeParams.z
        );
      #else
        vec4 envMapColor = mix(
          textureCubeUVArray( reflectionProbesMap, reflectionProbeParams.x, reflectionProbeSampleParams, reflectVec, roughness ),
          textureCubeUVArray( reflectionProbesMap, reflectionProbeParams.y, reflectionProbeSampleParams, reflectVec, roughness ),
          reflectionProbeParams.z
        );
      #endif
    #else
      vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
    #endif

    envMapColor = max(envMapColor, 0.0);
    `)}const _E="/image/matrix-font.png",xE="/image/rgba-noise.png",EE=`

#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>

uniform mat3 normalWorldMatrix;

varying vec4 vWorldPos;
varying vec3 vNormal;

void main() {
  #include <beginnormal_vertex>

  #if defined ( USE_SKINNING )
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
	#endif

  vec3 transformedNormal = objectNormal;

  #ifdef USE_INSTANCING

    // this is in lieu of a per-instance normal-matrix
    // shear transforms in the instance matrix are not supported

    mat3 m = mat3( instanceMatrix );

    transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );

    transformedNormal = m * transformedNormal;

  #endif

  transformedNormal = normalWorldMatrix * transformedNormal;

  #ifdef FLIP_SIDED

    transformedNormal = - transformedNormal;

  #endif

  #ifdef USE_TANGENT

    vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;

    #ifdef FLIP_SIDED

      transformedTangent = - transformedTangent;

    #endif

  #endif

  #include <begin_vertex>
  #include <morphtarget_vertex>
	#include <skinning_vertex>
  #include <project_vertex>
	#include <clipping_planes_vertex>

  vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	vWorldPos = modelMatrix * worldPosition;

  vNormal = normalize(transformedNormal);
}

`,CE=`

uniform float time;
uniform sampler2D textAtlasTexture;
uniform sampler2D noiseTexture;

varying vec4 vWorldPos;
varying vec3 vNormal;

float text(vec2 fragCoord) {
  vec2 uv = mod(fragCoord, 16.0) * 0.0625;
  vec2 block = fragCoord * 0.0625 - uv;
  uv = uv * 0.8 + 0.1; // scale the letters up a bit
  vec2 noiseTextureResolution = vec2(256.0, 256.0);
  vec2 rand = texture2D(noiseTexture, block / noiseTextureResolution + time * 0.002).xy;
  rand = floor(rand * 16.0);
  uv += rand;
  uv *= 0.0625; // bring back into 0-1 range
  return texture2D(textAtlasTexture, uv).r;
}

vec3 rain(vec2 fragCoord) {
  fragCoord.x = floor(fragCoord.x / 16.0);
  float offset = sin(fragCoord.x * 15.0);
  float speed = cos(fragCoord.x * 3.0) * 0.15 + 0.35;
  float y = fract((fragCoord.y / DROP_LENGTH) + time * speed + offset);
  return vec3(0.1, 1.0, 0.35) / (y * 20.0);
}

vec3 matrixEffect(vec2 fragCoord) {
  return text(fragCoord * vec2(DROP_LENGTH) * SCALE) * rain(fragCoord * vec2(DROP_LENGTH) * SCALE);
}

void main() {
  vec3 colorFront = matrixEffect(vWorldPos.xy + sin(vWorldPos.zz));
  vec3 colorSide = matrixEffect(vWorldPos.zy + sin(vWorldPos.xx));
  vec3 colorTop = matrixEffect(vWorldPos.xz + sin(vWorldPos.yy));
  vec3 norm = normalize(abs(vNormal));
  vec3 blendWeight = vec3(pow(norm.x, SHARPNESS), pow(norm.y, SHARPNESS), pow(norm.z, SHARPNESS));
  blendWeight /= (blendWeight.x + blendWeight.y + blendWeight.z);
  // Clamp to avoid bloom artifacts
  gl_FragColor.rgb = clamp(
    colorFront * blendWeight.z +
    colorSide * blendWeight.x +
    colorTop * blendWeight.y,
    0.0,
    2.0
  );
  gl_FragColor.a = 0.5;
}
`;class ul extends lt{constructor(t,n){super({uniforms:{time:{value:0},normalWorldMatrix:{value:new It},textAtlasTexture:{value:t},noiseTexture:{value:n}},defines:{DROP_LENGTH:"512.0",SCALE:"0.3",SHARPNESS:"10.0"},vertexShader:EE,fragmentShader:CE,depthWrite:!1,transparent:!0,blendSrcAlpha:po,blendDstAlpha:po,opacity:.5});ue(this,"isMatrixMaterial",!0)}static async load(t){const[n,i]=await Promise.all([t.loadAsync(_E),t.loadAsync(xE)]),s=new Ke(n);s.magFilter=Ge,s.minFilter=jt,s.wrapS=Wt,s.wrapT=Wt,s.flipY=!1,s.anisotropy=16,s.needsUpdate=!0;const a=new Ke(i);return a.magFilter=Ge,a.minFilter=jt,a.wrapS=Wt,a.wrapT=Wt,a.flipY=!1,a.anisotropy=16,a.needsUpdate=!0,new ul(s,a)}update(t,n){this.uniforms.normalWorldMatrix.value.getNormalMatrix(n.matrixWorld),this.uniforms.time.value=t}}const vE=`
#include <common>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

uniform mat3 normalWorldMatrix;
uniform mat4 inverseViewMatrix;
uniform float time;
uniform float wiggleStrength;
uniform float wigglePeriod;
uniform float wiggleDuration;

varying vec4 vWorldPos;
varying vec3 vNormal;

void main() {
  #include <beginnormal_vertex>

  #if defined ( USE_SKINNING )
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
	#endif

  vec3 transformedNormal = objectNormal;

  #ifdef USE_INSTANCING

    // this is in lieu of a per-instance normal-matrix
    // shear transforms in the instance matrix are not supported

    mat3 m = mat3( instanceMatrix );

    transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );

    transformedNormal = m * transformedNormal;

  #endif

  transformedNormal = normalWorldMatrix * transformedNormal;

  #ifdef FLIP_SIDED

    transformedNormal = - transformedNormal;

  #endif

  #ifdef USE_TANGENT

    vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;

    #ifdef FLIP_SIDED

      transformedTangent = - transformedTangent;

    #endif

  #endif

  #include <begin_vertex>
  #include <morphtarget_vertex>
	#include <skinning_vertex>

  float viewSpaceY = (modelViewMatrix * vec4(position, 1.0)).y;
  float wiggleFactor = 0.0;
  if (fract(time / wigglePeriod) > 1.0 - wiggleDuration) {
    wiggleFactor = wiggleStrength;
  }
  float jitterScale = 25.0;
  float jitterSpeed = 80.0;
  float x = viewSpaceY * jitterScale + time * jitterSpeed;
  vec4 noiseShift = inverseViewMatrix * vec4(wiggleFactor * sin(x / 3.0) * sin(x / 13.0), 0.0, 0.0, 0.0);
  transformed = noiseShift.xyz / 7.0 + transformed;

  #include <project_vertex>
  #include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

  vNormal = normalize(transformedNormal);
}
`,IE=`

#define PI 3.141592653589793
uniform float scanLineScale;
uniform float scanLineIntensity;
uniform float filmGrainIntensity;
uniform float time;
uniform float exposure;
uniform vec3 color;
uniform float opacity;
uniform vec2 resolution;
uniform float lightingIntensity;
uniform bool smoothStepLighting;
uniform float opacityJitterStrength;
uniform float opacityJitterSpeed;

#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

varying vec3 vNormal;

// Psuedo-random generator from https://thebookofshaders.com/10/
float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}
float getVerticalNoise(float verticalNoiseFrameRate, float verticalNoiseSpeed, float verticalNoiseScale) {
  float v = gl_FragCoord.y / resolution.y * verticalNoiseScale;
  float theta = (v + floor(time * verticalNoiseFrameRate) * verticalNoiseSpeed);
  float verticalNoiseStrength = 1.5;
  return pow(100.0, sin(theta) * sin(theta / 3.0) * sin(theta / 13.0)) / 100.0 * verticalNoiseStrength;
}

void main() {
  #include <clipping_planes_fragment>
  #include <logdepthbuf_fragment>

  // Some basic Lambertian-ish reflectance.
  vec3 lightDirection = normalize(vec3(0.7, 0.5, 1.0));
  float diffuse = max(dot(vNormal, lightDirection), 0.0);
  if (smoothStepLighting)
    diffuse = smoothstep(0.0, 1.0, diffuse);
  diffuse *= lightingIntensity;
  // Use a "spikey" sine equation shifted by time for some moving glowing noise bars.
  float scanLineMultiplier = mix(1.0 - scanLineIntensity, 1.0, abs(sin(gl_FragCoord.y * scanLineScale * PI * 0.25)));
  float verticalNoise = getVerticalNoise(12.0, 2.0, 80.0) + getVerticalNoise(8.0, 1.0, 26.0);
  float brightness = diffuse + verticalNoise;
  
  float filmGrain = (2.0 * random(gl_FragCoord.xy / resolution + fract(time)) - 1.0) * filmGrainIntensity;
  vec3 fragColor = ((mix(color.xyz, vec3(0.1, 0.2, 1.0), brightness) * exposure) + filmGrain) * scanLineMultiplier;
  float theta = time * opacityJitterSpeed;
  float opacityJitter = (sin(theta) / 2.0 + 1.0) * opacityJitterStrength;
  gl_FragColor = vec4(fragColor, opacity - opacityJitter);
}
`;class yE extends lt{constructor(t){super({transparent:!0,uniforms:{time:{value:1},scanLineScale:{value:1},scanLineIntensity:{value:.75},color:{value:new T(.07,.07,.15)},lightingIntensity:{value:3.5},filmGrainIntensity:{value:.15},resolution:{value:new ce().copy(t)},opacity:{value:.8},opacityJitterStrength:{value:.05},opacityJitterSpeed:{value:40},smoothStepLighting:{value:!0},exposure:{value:2},wiggleStrength:{value:2},wigglePeriod:{value:3},wiggleDuration:{value:.1}},vertexShader:vE,fragmentShader:IE,wireframe:!0});ue(this,"isHologramMaterial",!0)}update(t,n){this.uniforms.time.value=t,n.getSize(this.uniforms.resolution.value)}}function Rh(r,e){const{size:t,width:n,height:i,root:s}=r,a=Math.ceil((e[0]+t[0]/2)/t[0]*n),o=Math.ceil((1-(e[1]+t[1]/2)/t[1])*i);let l;return Dh(s,c=>{if(!c.button)return!0;const u=c.layout;if(a>u.x&&a<u.x+u.width&&o>u.y&&o<u.y+u.height)return l=c.button,!1}),l}function Dh(r,e){let t=r.firstChild,n=0;for(;t;)if(e(t,n++)!==!1)Dh(t,e),t=t.nextSibling;else return}function ME(r,e){const{yoga:t,loadingImages:n,loadingText:i}=De(r,Be);if(e.redraw>e.lastRedraw){const s=e.ctx2d;return SE(s,t,e),BE(s,e,n,i),n.size===0&&i.size===0&&(e.lastRedraw=e.redraw),!0}return!1}function SE(r,e,t){const[n,i]=Lh(r,e,t.root);i.calculateLayout(t.root.width,t.root.height,Yd),n()}function Lh(r,e,t){const n=e.Node.create(),i=[];bE(r,n,t);let s=t.firstChild;for(;s;){const[o,l]=Lh(r,e,s),c=i.push(o);n.insertChild(l,c-1),s=s.nextSibling}function a(o=0,l=0){const{left:c,top:u,width:h,height:d}=n.getComputedLayout(),p=t.layout;p.x=o+c,p.y=l+u,p.width=h,p.height=d;for(let g=0;g<i.length;g++)i[g](p.x,p.y);n.free()}return[a,n]}function bE(r,e,t){e.setPositionType(t.positionType),e.setPosition(_t.TOP,t.position[0]),e.setPosition(_t.RIGHT,t.position[1]),e.setPosition(_t.BOTTOM,t.position[2]),e.setPosition(_t.LEFT,t.position[3]),e.setWidth(t.width>=0?t.width:"auto"),e.setHeight(t.height>=0?t.height:"auto"),e.setMinWidth(t.minWidth>=0?t.minWidth:0),e.setMinHeight(t.minHeight>=0?t.minHeight:0),e.setMaxWidth(t.maxWidth>=0?t.maxWidth:"100%"),e.setMaxHeight(t.maxHeight>=0?t.maxHeight:"100%"),e.setMargin(_t.TOP,t.margin[0]>=0?t.margin[0]:"auto"),e.setMargin(_t.RIGHT,t.margin[1]>=0?t.margin[1]:"auto"),e.setMargin(_t.BOTTOM,t.margin[2]>=0?t.margin[2]:"auto"),e.setMargin(_t.LEFT,t.margin[3]>=0?t.margin[3]:"auto"),e.setBorder(_t.TOP,t.borderWidth[0]),e.setBorder(_t.RIGHT,t.borderWidth[1]),e.setBorder(_t.BOTTOM,t.borderWidth[2]),e.setBorder(_t.LEFT,t.borderWidth[3]),e.setPadding(_t.TOP,t.padding[0]),e.setPadding(_t.RIGHT,t.padding[1]),e.setPadding(_t.BOTTOM,t.padding[2]),e.setPadding(_t.LEFT,t.padding[3]),e.setFlexDirection(t.flexDirection),t.flexBasis>=0&&e.setFlexBasis(t.flexBasis),e.setFlexWrap(t.flexWrap),e.setFlexGrow(t.flexGrow),e.setFlexShrink(t.flexShrink),e.setAlignItems(t.alignItems),e.setAlignSelf(t.alignSelf),e.setAlignContent(t.alignContent),e.setJustifyContent(t.justifyContent),t.text&&e.setMeasureFunc(()=>wE(r,t.text))}const ja=([r,e,t,n])=>`rgba(${r*255},${e*255},${t*255},${n})`,Ph=r=>`${r.fontStyle} ${r.fontWeight} ${r.fontSize||12}px ${r.fontFamily||"sans-serif"}`.trim();function wE(r,e){r.textBaseline="top",r.font=Ph(e);const t=r.measureText(e.value);return{width:Math.ceil(t.width),height:Math.ceil(t.actualBoundingBoxAscent+t.actualBoundingBoxDescent)}}function BE(r,e,t,n){r.clearRect(0,0,e.width,e.height),Qh(r,t,n,e.root)}function Qh(r,e,t,n){const i=n.layout;r.beginPath(),r.roundRect(i.x,i.y,i.width,i.height,n.borderRadius),r.fillStyle=ja(n.backgroundColor),r.fill(),r.strokeStyle=ja(n.borderColor),r.lineWidth=n.borderWidth[0],r.stroke(),n.image&&(!n.image.source.imageData||n.image.source.loadStatus!==tt.Loaded?e.add(n.image.source):n.image.source.imageData.type===tn.ImageBitmap&&(e.delete(n.image.source),r.drawImage(n.image.source.imageData.data,i.x,i.y,i.width,i.height))),n.text&&(n.text.value===void 0?t.add(n.text):(t.delete(n.text),r.textBaseline="top",r.font=Ph(n.text),r.fillStyle=ja(n.text.color),r.fillText(n.text.value,i.x+n.padding[3],i.y+n.padding[0])));let s=n.firstChild;for(;s;)Qh(r,e,t,s),s=s.nextSibling}class TE{constructor(e){ue(this,"profilesListPromise");ue(this,"profilePromises",new Map);this.basePath=e}async loadJSON(e){const t=this.resolveAssetPath(e),n=await fetch(t);if(!n.ok)throw new Error(n.statusText);return n.json()}async fetchProfilesList(){return this.profilesListPromise||(this.profilesListPromise=this.loadJSON("profilesList.json")),this.profilesListPromise}async fetchProfile(e){const t=await this.fetchProfilesList();let n;for(const s of e.profiles){const a=t[s];if(a){n=a.path;break}}if(!n)throw new Error(`Couldn't find any profiles for WebXR input source."`);let i=this.profilePromises.get(n);return i||(i=this.loadJSON(n),this.profilePromises.set(n,i)),i}resolveAssetPath(e){return`${this.basePath}/${e}`}}const RE=.05,Zc=.1;function DE({gamepadIndices:r},e,t){let n=0;if(r.button!==void 0&&e.buttons.length>r.button){const i=e.buttons[r.button],s=Fr(i.value,0,1);i.pressed||s===1?n=2:(i.touched||s>RE)&&(n=1),t.button=s}else t.button=0;if(r.xAxis!==void 0&&e.axes.length>r.xAxis){const i=e.axes[r.xAxis],s=Fr(i,-1,1);n===0&&Math.abs(s)>Zc&&(n=1),t.xAxis=s}else t.xAxis=0;if(r.yAxis!==void 0&&e.axes.length>r.yAxis){const i=-e.axes[r.yAxis],s=Fr(i,-1,1);n===0&&Math.abs(s)>Zc&&(n=1),t.yAxis=s}else t.yAxis=0;t.state=n}const Be=Jd({name:Kd,async create(r,{waitForMessage:e,sendMessage:t}){const{canvasTarget:n,initialCanvasHeight:i,initialCanvasWidth:s,supportedXRSessionModes:a,quality:o,statsBuffer:l,inputRingBuffer:c}=await e(Ct.Main,at.InitializeRenderer);mE();const h=(n||r.canvas).getContext("webgl2"),d=h.getExtension("WEBGL_debug_renderer_info"),p=h.getParameter(d.UNMASKED_RENDERER_WEBGL),g=typeof p=="string"&&p.includes("Apple M1")&&p.includes("ANGLE")&&!p.includes("ANGLE Metal Renderer");g&&console.log("Chrome OpenGL backend on M1 Mac detected, logarithmicDepthBuffer enabled");const f=a&&a.some(R=>R==="immersive-ar")&&localStorage.getItem("feature_immersiveAR")==="true",A=new Zu({powerPreference:"high-performance",canvas:n||r.canvas,context:h,logarithmicDepthBuffer:g,multiviewStereo:!0,alpha:f});A.debug.checkShaderErrors=!0,A.outputEncoding=Le,A.toneMapping=yn,A.toneMappingExposure=1,A.physicallyCorrectLights=!0,A.shadowMap.type=Su,A.info.autoReset=!1,A.setSize(s,i,!1),a&&(A.xr.enabled=!0);const m=()=>{NE(r)};A.xr.addEventListener("sessionend",m);const C=new Uint8Array(new SharedArrayBuffer(1));t(Ct.Game,at.InitializeGameRendererTripleBuffer,C);const _=new So(A);_.compileEquirectangularShader();const E=new ch,I=await ul.load(E),S=new vn().setTranscoderPath("/basis/").detectSupport(A);await S.init();const D=await(await fetch(vx)).arrayBuffer(),Q=await Zd(D),x=new $u,M=new Je;x.add(M);const k=new URL("/webxr-input-profiles",location.href),L=fo($d,r.renderToGameTripleBufferFlags);return{needsResize:!0,renderer:A,renderPipeline:new gE(A,o),canvasWidth:s,canvasHeight:i,scenes:[],rgbeLoader:new ux,ktx2Loader:S,reflectionProbesMap:null,tileRendererNodes:[],pmremGenerator:_,sceneRenderedRequests:[],matrixMaterial:I,enableMatrixMaterial:!1,hologramMaterial:new yE(new ce(s,i)),scene:x,xrAvatarRoot:M,dynamicAccessors:[],xrMode:C,quality:o,debugRender:!1,nodeOptimizationsEnabled:!0,yoga:Q,loadingImages:new Set,loadingText:new Set,statsBuffer:l,staleFrameCounter:0,staleTripleBufferCounter:0,inputProfileManager:new TE(k.href),inputSourceItems:[],inputRingBuffer:c,cameraPoseTripleBuffer:L}},init(r){const{renderer:e,inputSourceItems:t,inputProfileManager:n,cameraPoseTripleBuffer:i}=De(r,Be);let s=Object.keys(ef).length;async function a(u){try{const h=await Promise.all(Array.from(u.added).map(g=>$c(r,n,s++,g)));t.push(...h);const d=h.map(({id:g,inputSource:f,layout:A,controllerPoses:m,handPoses:C})=>({id:g,handedness:f.handedness,layout:A,cameraPose:i,controllerPoses:m,handPoses:C})),p=[];for(const g of u.removed){const f=t.findIndex(A=>A.inputSource===g);f!==-1&&(p.push(t[f].id),t.splice(f,1))}r.sendMessage(Ct.Game,{type:at.UpdateXRInputSources,added:d,removed:p})}catch(h){console.error(h)}}async function o(){try{const u=e.xr.getSession();if(u){const h=await Promise.all(Array.from(u.inputSources).map(p=>$c(r,n,s++,p)));t.push(...h);const d=h.map(({id:p,inputSource:g,layout:f,controllerPoses:A,handPoses:m})=>({id:p,handedness:g.handedness,layout:f,cameraPose:i,controllerPoses:A,handPoses:m}));r.sendMessage(Ct.Game,{type:at.UpdateXRInputSources,added:d,removed:[]}),u.addEventListener("inputsourceschange",a)}}catch(u){console.error(u)}}function l(){const u=De(r,Be),h=t.map(d=>d.id);r.sendMessage(Ct.Game,{type:at.UpdateXRInputSources,added:[],removed:h}),t.length=0,u.originalReferenceSpace=void 0}e.xr.addEventListener("sessionstart",o),e.xr.addEventListener("sessionend",l);const c=()=>{e.xr.removeEventListener("sessionstart",o),e.xr.removeEventListener("sessionend",l)};return tf([on(r,at.CanvasResize,QE),on(r,at.NotifySceneRendered,FE),on(r,at.EnableMatrixMaterial,OE),on(r,at.EnterXR,UE),on(r,at.PhysicsEnableDebugRender,GE),on(r,at.PhysicsDisableDebugRender,kE),on(r,at.SetNodeOptimizationsEnabled,VE),on(r,at.PrintRenderThreadState,zE),on(r,at.UICanvasPress,WE),on(r,at.UICanvasFocus,HE),on(r,at.SetXRReferenceSpace,qE),c])}});function LE(r){const{renderer:e}=De(r,Be);e.setAnimationLoop(()=>PE(r))}function PE(r){const e=performance.now();r.dt=(e-r.elapsed)/1e3,r.elapsed=e;for(let t=0;t<r.systems.length;t++)r.systems[t](r);r.singleConsumerThreadSharedState&&r.singleConsumerThreadSharedState.update()}function QE(r,{canvasWidth:e,canvasHeight:t}){const n=De(r,Be);n.needsResize=!0,n.canvasWidth=e,n.canvasHeight=t}function FE(r,{id:e,sceneResourceId:t,frames:n}){De(r,Be).sceneRenderedRequests.push({id:e,sceneResourceId:t,frames:n})}function UE(r,{session:e,mode:t}){const{renderer:n,xrMode:i}=De(r,Be);n.xr.setSession(e),Atomics.store(i,0,nf[t]||Iu.None)}function NE(r){const{xrMode:e}=De(r,Be);Atomics.store(e,0,Iu.None)}function OE(r,e){const t=De(r,Be);t.enableMatrixMaterial=e.enabled}function GE(r,{tripleBuffer:e}){const t=De(r,Be);t.debugRender=!0,t.debugRenderTripleBuffer=e}function kE(r){const e=De(r,Be);e.debugRender=!1,e.debugRenderTripleBuffer=void 0}function VE(r,{enabled:e}){const t=De(r,Be);t.nodeOptimizationsEnabled=e}function zE(r){console.log(Ct.Render,r)}function HE(r,e){const t=al(r,e.uiCanvasEid);if(!t){console.warn("Could not find UI canvas for eid",e.uiCanvasEid);return}const n=Rh(t,e.hitPoint);if(!n){r.sendMessage(Ct.Game,{type:at.UIButtonUnfocus});return}r.sendMessage(Ct.Game,{type:at.UIButtonFocus,buttonEid:n.eid})}function WE(r,e){const t=al(r,e.uiCanvasEid);if(!t){console.warn("Could not find UI canvas for eid",e.uiCanvasEid);return}const n=Rh(t,e.hitPoint);n&&r.sendMessage(Ct.Game,{type:at.UIButtonPress,buttonEid:n.eid})}function qE(r,e){const t=De(r,Be);t.updateReferenceSpaceHand=e.hand}async function $c(r,e,t,n){const i=await e.fetchProfile(n),s=i.layouts[n.handedness];if(!s)throw new Error(`No "${n.handedness}" layout found for WebXR controller ${i.profileId}`);const a=e.resolveAssetPath(`${i.profileId}/${s.assetPath}`),o={...s,assetPath:a};return{id:t,inputSource:n,layout:o,controllerPoses:fo(sf,r.renderToGameTripleBufferFlags),handPoses:n.hand&&fo(rf,r.renderToGameTripleBufferFlags)}}function $n(r,e,t,n,i,s){!!r[e]!=!!t&&(r.needsUpdate=!0);const a=r[e]=(t==null?void 0:t.texture)||null;a&&(a.offset.fromArray(n),a.rotation=i,a.repeat.fromArray(s))}function XE(r){const e=Xn(r,Mh);for(let t=0;t<e.length;t++){const n=e[t],i=n.materialCache;for(let s=0;s<i.length;s++){const{useDerivativeTangents:a,material:o}=i[s];if("isMatrixMaterial"in o||o.color.fromArray(n.baseColorFactor),o.opacity=n.baseColorFactor[3],o.side=n.doubleSided?fn:nn,o.transparent=n.alphaMode===Ki.BLEND,o.depthWrite=n.alphaMode!==Ki.BLEND,o.alphaTest=n.alphaMode===Ki.MASK?n.alphaCutoff:0,"map"in o&&$n(o,"map",n.baseColorTexture,n.baseColorTextureOffset,n.baseColorTextureRotation,n.baseColorTextureScale),"isMeshStandardMaterial"in o&&(o.metalness=n.metallicFactor,$n(o,"metalnessMap",n.metallicRoughnessTexture,n.metallicRoughnessTextureOffset,n.metallicRoughnessTextureRotation,n.metallicRoughnessTextureScale),o.roughness=n.roughnessFactor,$n(o,"roughnessMap",n.metallicRoughnessTexture,n.metallicRoughnessTextureOffset,n.metallicRoughnessTextureRotation,n.metallicRoughnessTextureScale),o.normalScale.set(n.normalScale,a?-n.normalScale:n.normalScale),$n(o,"normalMap",n.normalTexture,n.normalTextureOffset,n.normalTextureRotation,n.normalTextureScale),o.aoMapIntensity=n.occlusionTextureStrength,$n(o,"aoMap",n.occlusionTexture,n.occlusionTextureOffset,n.occlusionTextureRotation,n.occlusionTextureScale),o.emissive.fromArray(n.emissiveFactor),o.emissiveIntensity=n.emissiveStrength,$n(o,"emissiveMap",n.emissiveTexture,n.emissiveTextureOffset,n.emissiveTextureRotation,n.emissiveTextureScale)),"isMeshPhysicalMaterial"in o){const l=o;l.ior=n.ior,l.thickness=n.thicknessFactor,l.attenuationDistance=n.attenuationDistance,l.attenuationColor.fromArray(n.attenuationColor),l.transmission=n.transmissionFactor,$n(l,"transmissionMap",n.transmissionTexture,n.transmissionTextureOffset,n.transmissionTextureRotation,n.transmissionTextureScale),$n(l,"thicknessMap",n.thicknessTexture,n.thicknessTextureOffset,n.thicknessTextureRotation,n.thicknessTextureScale)}}}}function jE(r){var t;const e=Xn(r,Sh);for(let n=0;n<e.length;n++){const i=e[n],s=((t=i.material)==null?void 0:t.eid)||0,a=al(r,s),o=a?a.getMaterialForMeshPrimitive(r,i):Ch(r,i);o!==i.materialObj&&(i.material&&i.material.disposeMeshPrimitiveMaterial(i.materialObj),i.materialObj=o),i.materialObj.aoMap&&i.geometryObj.attributes.uv2===void 0&&i.geometryObj.attributes.uv!==void 0&&i.geometryObj.setAttribute("uv2",i.geometryObj.attributes.uv)}}function YE(r){const e=De(r,Be);if(e.debugRender&&e.debugRenderTripleBuffer){const{vertices:t,colors:n,size:i}=af(e.debugRenderTripleBuffer);let s,a,o;e.debugLines?(s=e.debugLines.geometry,a=e.debugLines.geometry.getAttribute("position"),o=e.debugLines.geometry.getAttribute("color")):(s=new yt,a=new Xt(t,3),a.usage=Io,s.setAttribute("position",a),o=new Xt(n,4),o.usage=Io,s.setAttribute("color",o),e.debugLines=new Jo(s,new ss({color:16777215,vertexColors:!0})),e.debugLines.frustumCulled=!1,e.scene.add(e.debugLines)),s.setDrawRange(0,i[0]),a.copyArray(t),a.needsUpdate=!0,o.copyArray(n),o.needsUpdate=!0}else e.debugLines&&(e.scene.remove(e.debugLines),e.debugLines.geometry.dispose(),e.debugLines=void 0)}function JE(r){var s;const e=De(r,Be),{renderPipeline:t}=e,n=(s=r.worldResource.environment)==null?void 0:s.publicScene,i=r.worldResource.activeCameraNode;n&&i&&i.cameraObject&&t.render(e.scene,i.cameraObject,r.dt);for(let a=e.sceneRenderedRequests.length-1;a>=0;a--){const o=e.sceneRenderedRequests[a];n&&n.eid===o.sceneResourceId&&--o.frames<=0&&(r.sendMessage(Ct.Game,{type:at.SceneRenderedNotification,id:o.id}),e.sceneRenderedRequests.splice(a,1))}}function KE(r){const e=of(r.gameToRenderTripleBufferFlags);r.isStaleFrame=!e}function ZE(r){lf(r.renderToGameTripleBufferFlags)}function $E(r){var l;const e=De(r,Be),{needsResize:t,canvasWidth:n,canvasHeight:i,renderPipeline:s}=e,a=(l=r.worldResource.environment)==null?void 0:l.publicScene,o=r.worldResource.activeCameraNode;(a==null?void 0:a.eid)!==e.prevSceneResource&&(e.enableMatrixMaterial=!1),o&&o.cameraObject&&o.camera&&(t||e.prevCameraResource!==o.eid)&&("isPerspectiveCamera"in o.cameraObject&&o.camera.type===Ao.Perspective&&o.camera.aspectRatio===0&&(o.cameraObject.aspect=n/i),o.cameraObject.updateProjectionMatrix(),s.setSize(n,i),e.needsResize=!1,e.prevCameraResource=o.eid,e.prevSceneResource=a==null?void 0:a.eid)}function eC(r){const e=De(r,Be),t=Xn(r,Ih);for(let n=0;n<t.length;n++){const i=t[n];if(i.loadStatus===tt.Uninitialized){const s=new AbortController;i.abortController=s,i.loadStatus=tt.Loading;const a=i;tC(e,a,s.signal).then(o=>{if(a.loadStatus===tt.Loaded)throw new Error("Attempted to load a resource that has already been loaded.");a.loadStatus!==tt.Disposed&&(a.imageData=o,a.loadStatus=tt.Loaded)}).catch(o=>{o.name!=="AbortError"&&(a.loadStatus=tt.Error,console.error("Error loading image",o))})}}}async function tC({rgbeLoader:r,ktx2Loader:e},t,n){if(t.bufferView){const i=t.bufferView,s=cf(i.buffer.data,i.byteOffset,i.byteLength);if(t.mimeType===Hr.HDR){const a=tu(r,s);return{type:tn.RGBE,data:a}}else if(t.mimeType===Hr.KTX2){const a=await nu(e,s);return{type:tn.KTX2,data:a}}else{const a=new Blob([s],{type:t.mimeType}),o=await eu(a,t.flipY);return{type:tn.ImageBitmap,data:o}}}else{const i=t.uri,s=await fetch(i,{signal:n});if(i.endsWith(Wr.HDR)){const a=await s.arrayBuffer(),o=tu(r,a);return{type:tn.RGBE,data:o}}else if(i.endsWith(Wr.KTX2)){const a=await s.arrayBuffer(),o=await nu(e,a);return{type:tn.KTX2,data:o}}else{const a=await s.blob(),o=await eu(a,t.flipY);return{type:tn.ImageBitmap,data:o}}}}function eu(r,e){return createImageBitmap(r,{premultiplyAlpha:"none",imageOrientation:e?"flipY":void 0,colorSpaceConversion:"none"})}function tu(r,e){const t=r.parse(e);if(!t)throw new Error("Error parsing RGBE texture.");if(!(t.type===Ze||t.type===Gt))throw new Error("Unsupported RGBE texture type");return t}async function nu(r,e){const t=r,n=await t._readKTX2Container(e);if(n.vkFormat!==bf)return n;const s=(await t._transcodeTexture(e)).data;if(s.type==="error")throw new Error(s.error);return s}function nC(r){const{ktx2Loader:e}=De(r,Be),t=Xn(r,yh);for(let n=0;n<t.length;n++){const i=t[n];if(i.texture===void 0&&(i.texture=iC(i)),i.loadStatus===tt.Uninitialized&&i.source.imageData){const s=new AbortController,a=i;a.abortController=s,a.loadStatus=tt.Loading,oC(e,a,a.source.imageData,a.texture).then(()=>{if(a.loadStatus===tt.Loaded)throw new Error("Attempted to load a resource that has already been loaded.");a.loadStatus!==tt.Disposed&&(a.loadStatus=tt.Loaded)}).catch(o=>{o.name!=="AbortError"&&(a.loadStatus=tt.Error,console.error("Error loading texture",o))})}}}function iC(r){var i,s;const e=r.source;let t,n=!1;return e.mimeType===Hr.HDR||(i=e.uri)!=null&&i.endsWith(Wr.HDR)?(n=!0,t=new qs):e.mimeType===Hr.KTX2||(s=e.uri)!=null&&s.endsWith(Wr.KTX2)?r.format===uf.Unknown?r.depth>1?t=new Ho:t=new qs:t=new Zo:(t=new Ke,t.flipY=!1),Fh(r,t,n),t}const sC={[Bi.NEAREST]:ot,[Bi.LINEAR]:Ge,[Bi.NEAREST_MIPMAP_NEAREST]:Vr,[Bi.LINEAR_MIPMAP_NEAREST]:ko,[Bi.NEAREST_MIPMAP_LINEAR]:Ls,[Bi.LINEAR_MIPMAP_LINEAR]:jt},rC={[xl.NEAREST]:ot,[xl.LINEAR]:Ge},iu={[ca.CLAMP_TO_EDGE]:vt,[ca.MIRRORED_REPEAT]:Gs,[ca.REPEAT]:Wt},aC={[Ti.UVMapping]:Go,[Ti.CubeReflectionMapping]:vi,[Ti.CubeRefractionMapping]:Ii,[Ti.EquirectangularReflectionMapping]:Ns,[Ti.EquirectangularRefractionMapping]:Os,[Ti.CubeUVReflectionMapping]:Js};function Fh(r,e,t){const n=r.sampler;n?(t||(e.magFilter=rC[n.magFilter],e.minFilter=sC[n.minFilter],e.wrapS=iu[n.wrapS],e.wrapT=iu[n.wrapT]),e.mapping=aC[n.mapping]):(e.magFilter=Ge,e.minFilter=jt,e.wrapS=Wt,e.wrapT=Wt),t||(e.encoding=r.encoding)}async function oC(r,e,t,n){let i=!1;if(t.type===tn.KTX2){const s=t.data;"type"in s?r._loadTextureFromTranscodeResult(s,n):await r._loadTextureFromKTX2Container(s,n)}else if(t.type===tn.ImageBitmap)n.image=t.data;else if(t.type===tn.RGBE)lC(t.data,n),i=!0;else throw new Error("Unknown image data type");return Fh(e,n,i),n.needsUpdate=!0,n}function lC(r,e){const t=e.image;return t.width=r.width,t.height=r.height,t.data=r.data,e.type=r.type,e.needsUpdate=!0,e.encoding=sn,e.minFilter=Ge,e.magFilter=Ge,e.generateMipmaps=!1,e.flipY=!0,e}function cC(r){const{dynamicAccessors:e}=De(r,Be);for(let t=0;t<e.length;t++){const n=e[t],i=n.version;i!==n.prevVersion&&(n.attribute.needsUpdate=!0,n.prevVersion=i)}}function uC(r){const e=Xn(r,er),{nodeOptimizationsEnabled:t}=De(r,Be),n=!t;for(let a=0;a<e.length;a++){const o=e[a];!o.isStatic&&!n&&(o.object3DVisible=!1)}const i=r.worldResource;i.environment&&(Ya(i.environment.privateScene,n),Ya(i.environment.publicScene,n));let s=i.firstNode;for(;s;)hl(s,!0,n),s=s.nextSibling;Ya(i.persistentScene,n)}function Ya(r,e){let t=r.firstNode;for(;t;)hl(t,!0,e),t=t.nextSibling}function hl(r,e,t){if(r.isStatic&&!t)return;r.object3DVisible=r.visible&&e;let n=r.firstChild;for(;n;)hl(n,r.object3DVisible,t),n=n.nextSibling}const hC=new xe(0);function dC(r){var n,i,s,a,o;const e=De(r,Be),t=(n=r.worldResource.environment)==null?void 0:n.publicScene;if(t){e.scene.visible=!0;const l=t.currentBackgroundTextureResourceId,c=((i=t.backgroundTexture)==null?void 0:i.eid)||0;if(c!==l&&((s=t.backgroundTexture)==null?void 0:s.loadStatus)===tt.Loaded&&(t.currentBackgroundTextureResourceId=c),e.renderPipeline.bloomPass.strength=t.bloomStrength,e.renderPipeline.bloomPass.threshold=t.bloomThreshold,e.renderPipeline.bloomPass.radius=t.bloomRadius,fC(r,t),e.enableMatrixMaterial)e.scene.overrideMaterial=e.matrixMaterial,e.scene.background=hC;else{e.scene.overrideMaterial=null;const u=e.renderer.xr.getSession();let h=!0;u&&t.supportsAR&&(h=u.environmentBlendMode==="opaque"),((a=t.backgroundTexture)==null?void 0:a.loadStatus)===tt.Loaded&&h?e.scene.background=((o=t.backgroundTexture)==null?void 0:o.texture)||null:e.scene.background=null}}else e.scene.visible=!1}function fC(r,e){var i;const t=e.currentReflectionProbeResourceId,n=((i=e.reflectionProbe)==null?void 0:i.eid)||0;n!==t&&(e.reflectionProbeNeedsUpdate=!0),e.currentReflectionProbeResourceId=n}function su(r){let e;try{e=new URL(r,"http://fakehost.com/")}catch{return null}const t=e.pathname.split("/").pop(),n=t.lastIndexOf(".");return n===-1||n===t.length-1?null:t.substring(n+1)}function AC(r){Promise.resolve().then(r)}class pC{constructor(){this.maxSize=800,this.minSize=600,this.unloadPercent=.05,this.itemSet=new Map,this.itemList=[],this.usedSet=new Set,this.callbacks=new Map,this.unloadPriorityCallback=null;const e=this.itemSet;this.defaultPriorityCallback=t=>e.get(t)}isFull(){return this.itemSet.size>=this.maxSize}add(e,t){const n=this.itemSet;if(n.has(e)||this.isFull())return!1;const i=this.usedSet,s=this.itemList,a=this.callbacks;return s.push(e),i.add(e),n.set(e,Date.now()),a.set(e,t),!0}remove(e){const t=this.usedSet,n=this.itemSet,i=this.itemList,s=this.callbacks;if(n.has(e)){s.get(e)(e);const a=i.indexOf(e);return i.splice(a,1),t.delete(e),n.delete(e),s.delete(e),!0}return!1}markUsed(e){const t=this.itemSet,n=this.usedSet;t.has(e)&&!n.has(e)&&(t.set(e,Date.now()),n.add(e))}markAllUnused(){this.usedSet.clear()}unloadUnusedContent(){const e=this.unloadPercent,t=this.minSize,n=this.itemList,i=this.itemSet,s=this.usedSet,a=this.callbacks,o=n.length-s.size,l=n.length-t,c=this.unloadPriorityCallback||this.defaultPriorityCallback;if(l>0&&o>0){n.sort((g,f)=>{const A=s.has(g),m=s.has(f);return A&&m?0:!A&&!m?c(f)-c(g):A?1:-1});const u=Math.min(l,o),h=Math.max(t*e,u*e);let d=Math.min(h,o);d=Math.ceil(d);const p=n.splice(0,d);for(let g=0,f=p.length;g<f;g++){const A=p[g];a.get(A)(A),i.delete(A),a.delete(A)}}}scheduleUnload(e=!0){this.scheduled||(this.scheduled=!0,AC(()=>{this.scheduled=!1,this.unloadUnusedContent(),e&&this.markAllUnused()}))}}class ru{constructor(){this.maxJobs=6,this.items=[],this.callbacks=new Map,this.currJobs=0,this.scheduled=!1,this.autoUpdate=!0,this.priorityCallback=()=>{throw new Error("PriorityQueue: PriorityCallback function not defined.")},this.schedulingCallback=e=>{requestAnimationFrame(e)},this._runjobs=()=>{this.tryRunJobs(),this.scheduled=!1}}sort(){const e=this.priorityCallback;this.items.sort(e)}add(e,t){return new Promise((n,i)=>{const s=(...l)=>t(...l).then(n).catch(i),a=this.items,o=this.callbacks;a.push(e),o.set(e,s),this.autoUpdate&&this.scheduleJobRun()})}remove(e){const t=this.items,n=this.callbacks,i=t.indexOf(e);i!==-1&&(t.splice(i,1),n.delete(e))}tryRunJobs(){this.sort();const e=this.items,t=this.callbacks,n=this.maxJobs;let i=this.currJobs;for(;n>i&&e.length>0;){i++;const s=e.pop(),a=t.get(s);t.delete(s),a(s).then(()=>{this.currJobs--,this.autoUpdate&&this.scheduleJobRun()}).catch(()=>{this.currJobs--,this.autoUpdate&&this.scheduleJobRun()})}this.currJobs=i}scheduleJobRun(){this.scheduled||(this.schedulingCallback(this._runjobs),this.scheduled=!0)}}const wr=0,Br=1,Ja=2,Ys=3,qr=4;function dl(r){return r===Ys||r===qr}function Ci(r,e){return r.__lastFrameVisited===e&&r.__used}function Uh(r,e){r.__lastFrameVisited!==e&&(r.__lastFrameVisited=e,r.__used=!1,r.__inFrustum=!1,r.__isLeaf=!1,r.__visible=!1,r.__active=!1,r.__error=1/0,r.__distanceFromCamera=1/0,r.__childrenWereVisible=!1,r.__allChildrenLoaded=!1)}function Nh(r,e,t){if(Uh(r,e),r.__used=!0,t.markUsed(r),r.__contentEmpty){const n=r.children;for(let i=0,s=n.length;i<s;i++)Nh(n[i],e,t)}}function Oh(r,e,t){if(r.__contentEmpty&&(!r.__externalTileSet||dl(r.__loadingState))){const i=r.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.__depthFromRenderedParent=e,Oh(o,e,t)}}else t.requestTileContents(r)}function Po(r,e=null,t=null,n=null,i=0){if(e&&e(r,n,i)){t&&t(r,n,i);return}const s=r.children;for(let a=0,o=s.length;a<o;a++)Po(s[a],e,t,r,i+1);t&&t(r,n,i)}function Gh(r,e){const t=e.stats,n=e.frameCount,i=e.errorTarget,s=e.maxDepth,a=e.loadSiblings,o=e.lruCache,l=e.stopAtEmptyTiles;if(Uh(r,n),e.tileInView(r)===!1)return!1;if(r.__used=!0,o.markUsed(r),r.__inFrustum=!0,t.inFrustum++,(l||!r.__contentEmpty)&&!r.__externalTileSet&&(e.calculateError(r),r.__error<=i||e.maxDepth>0&&r.__depth+1>=s))return!0;let u=!1;const h=r.children;for(let d=0,p=h.length;d<p;d++){const g=h[d],f=Gh(g,e);u=u||f}if(u&&a)for(let d=0,p=h.length;d<p;d++){const g=h[d];Nh(g,n,o)}return!0}function kh(r,e){const t=e.stats,n=e.frameCount;if(!Ci(r,n))return;t.used++;const i=r.children;let s=!1;for(let a=0,o=i.length;a<o;a++){const l=i[a];s=s||Ci(l,n)}if(!s)r.__isLeaf=!0;else{let a=!1,o=!0;for(let l=0,c=i.length;l<c;l++){const u=i[l];if(kh(u,e),a=a||u.__wasSetVisible||u.__childrenWereVisible,Ci(u,n)){const h=u.__allChildrenLoaded||!u.__contentEmpty&&dl(u.__loadingState)||u.__externalTileSet&&u.__loadingState===qr;o=o&&h}}r.__childrenWereVisible=a,r.__allChildrenLoaded=o}}function Vh(r,e){const t=e.stats,n=e.frameCount;if(!Ci(r,n))return;const i=r.parent,s=i?i.__depthFromRenderedParent:-1;r.__depthFromRenderedParent=s;const a=e.lruCache;if(r.__isLeaf){r.__depthFromRenderedParent++,r.__loadingState===Ys?(r.__inFrustum&&(r.__visible=!0,t.visible++),r.__active=!0,t.active++):!a.isFull()&&(!r.__contentEmpty||r.__externalTileSet)&&e.requestTileContents(r);return}const o=(e.errorTarget+1)*e.errorThreshold,l=r.__error<=o,c=l||r.refine==="ADD",u=!r.__contentEmpty,h=u||r.__externalTileSet,d=dl(r.__loadingState)&&h,p=r.__childrenWereVisible,g=r.children,f=r.__allChildrenLoaded;if(c&&u&&r.__depthFromRenderedParent++,c&&!d&&!a.isFull()&&h&&e.requestTileContents(r),(l&&!f&&!p&&d||r.refine==="ADD"&&d)&&(r.__inFrustum&&(r.__visible=!0,t.visible++),r.__active=!0,t.active++),r.refine!=="ADD"&&l&&!f&&d)for(let A=0,m=g.length;A<m;A++){const C=g[A];Ci(C,n)&&!a.isFull()&&(C.__depthFromRenderedParent=r.__depthFromRenderedParent+1,Oh(C,C.__depthFromRenderedParent,e))}else for(let A=0,m=g.length;A<m;A++){const C=g[A];Ci(C,n)&&Vh(C,e)}}function zh(r,e){const t=e.frameCount,n=Ci(r,t);if(n||r.__usedLastFrame){let i=!1,s=!1;n&&(i=r.__active,e.displayActiveTiles?s=r.__active||r.__visible:s=r.__visible),!r.__contentEmpty&&r.__loadingState===Ys&&(r.__wasSetActive!==i&&e.setTileActive(r,i),r.__wasSetVisible!==s&&e.setTileVisible(r,s)),r.__wasSetActive=i,r.__wasSetVisible=s,r.__usedLastFrame=n;const a=r.children;for(let o=0,l=a.length;o<l;o++){const c=a[o];zh(c,e)}}}const au=(r,e)=>r.__depth!==e.__depth?r.__depth>e.__depth?-1:1:r.__inFrustum!==e.__inFrustum?r.__inFrustum?1:-1:r.__used!==e.__used?r.__used?1:-1:r.__error!==e.__error?r.__error>e.__error?1:-1:r.__distanceFromCamera!==e.__distanceFromCamera?r.__distanceFromCamera>e.__distanceFromCamera?-1:1:0,gC=r=>1/(r.__depthFromRenderedParent+1);class mC{get rootTileSet(){const e=this.tileSets[this.rootURL];return!e||e instanceof Promise?null:e}get root(){const e=this.rootTileSet;return e?e.root:null}constructor(e){this.tileSets={},this.rootURL=e,this.fetchOptions={},this.preprocessURL=null;const t=new pC;t.unloadPriorityCallback=gC;const n=new ru;n.maxJobs=4,n.priorityCallback=au;const i=new ru;i.maxJobs=1,i.priorityCallback=au,this.lruCache=t,this.downloadQueue=n,this.parseQueue=i,this.stats={parsing:0,downloading:0,failed:0,inFrustum:0,used:0,active:0,visible:0},this.frameCount=0,this.errorTarget=6,this.errorThreshold=1/0,this.loadSiblings=!0,this.displayActiveTiles=!1,this.maxDepth=1/0,this.stopAtEmptyTiles=!0}traverse(e,t){const i=this.tileSets[this.rootURL];!i||!i.root||Po(i.root,e,t)}update(){const e=this.stats,t=this.lruCache,n=this.tileSets,i=n[this.rootURL];if(this.rootURL in n){if(!i||!i.root)return}else{this.loadRootTileSet(this.rootURL);return}const s=i.root;e.inFrustum=0,e.used=0,e.active=0,e.visible=0,this.frameCount++,Gh(s,this),kh(s,this),Vh(s,this),zh(s,this),t.scheduleUnload()}parseTile(e,t,n){return null}disposeTile(e){}preprocessNode(e,t,n){if(e.content&&(!("uri"in e.content)&&"url"in e.content&&(e.content.uri=e.content.url,delete e.content.url),e.content.uri&&(e.content.uri=new URL(e.content.uri,n+"/").toString()),e.content.boundingVolume&&!("box"in e.content.boundingVolume||"sphere"in e.content.boundingVolume||"region"in e.content.boundingVolume)&&delete e.content.boundingVolume),e.parent=t,e.children=e.children||[],e.content&&e.content.uri){const s=su(e.content.uri),a=!!(s&&s.toLowerCase()==="json");e.__externalTileSet=a,e.__contentEmpty=a}else e.__externalTileSet=!1,e.__contentEmpty=!0;e.__distanceFromCamera=1/0,e.__error=1/0,e.__inFrustum=!1,e.__isLeaf=!1,e.__usedLastFrame=!1,e.__used=!1,e.__wasSetVisible=!1,e.__visible=!1,e.__childrenWereVisible=!1,e.__allChildrenLoaded=!1,e.__wasSetActive=!1,e.__active=!1,e.__loadingState=wr,e.__loadIndex=0,e.__loadAbort=null,e.__depthFromRenderedParent=-1,t===null?(e.__depth=0,e.refine=e.refine||"REPLACE"):(e.__depth=t.__depth+1,e.refine=e.refine||t.refine)}setTileActive(e,t){}setTileVisible(e,t){}calculateError(e){return 0}tileInView(e){return!0}resetFailedTiles(){const e=this.stats;e.failed!==0&&(this.traverse(t=>{t.__loadingState===qr&&(t.__loadingState=wr)}),e.failed=0)}fetchTileSet(e,t,n=null){return fetch(e,t).then(i=>{if(i.ok)return i.json();throw new Error(`TilesRenderer: Failed to load tileset "${e}" with status ${i.status} : ${i.statusText}`)}).then(i=>{const s=i.asset.version;console.assert(s==="1.0"||s==="0.0",'asset.version is expected to be a string of "1.0" or "0.0"');const a=e.replace(/\/[^\/]*\/?$/,"");return Po(i.root,(o,l)=>this.preprocessNode(o,l,a),null,n,n?n.__depth:0),i})}loadRootTileSet(e){const t=this.tileSets;if(e in t)return t[e]instanceof Error?Promise.reject(t[e]):Promise.resolve(t[e]);{const n=this.fetchTileSet(this.preprocessURL?this.preprocessURL(e):e,this.fetchOptions).then(i=>{t[e]=i});return n.catch(i=>{console.error(i),t[e]=i}),t[e]=n,n}}requestTileContents(e){if(e.__loadingState!==wr)return;const t=this.stats,n=this.lruCache,i=this.downloadQueue,s=this.parseQueue,a=e.__externalTileSet;n.add(e,h=>{h.__loadingState===Br?(h.__loadAbort.abort(),h.__loadAbort=null):a?h.children.length=0:this.disposeTile(h),h.__loadingState===Br?t.downloading--:h.__loadingState===Ja&&t.parsing--,h.__loadingState=wr,h.__loadIndex++,s.remove(h),i.remove(h)}),e.__loadIndex++;const o=e.__loadIndex,l=new AbortController,c=l.signal;t.downloading++,e.__loadAbort=l,e.__loadingState=Br;const u=h=>{e.__loadIndex===o&&(h.name!=="AbortError"?(s.remove(e),i.remove(e),e.__loadingState===Ja?t.parsing--:e.__loadingState===Br&&t.downloading--,t.failed++,console.error(`TilesRenderer : Failed to load tile at url "${e.content.uri}".`),console.error(h),e.__loadingState=qr):n.remove(e))};a?i.add(e,h=>{if(h.__loadIndex!==o)return Promise.resolve();const d=this.preprocessURL?this.preprocessURL(h.content.uri):h.content.uri;return this.fetchTileSet(d,Object.assign({signal:c},this.fetchOptions),h)}).then(h=>{e.__loadIndex===o&&(t.downloading--,e.__loadAbort=null,e.__loadingState=Ys,e.children.push(h.root))}).catch(u):i.add(e,h=>{if(h.__loadIndex!==o)return Promise.resolve();const d=this.preprocessURL?this.preprocessURL(h.content.uri):h.content.uri;return fetch(d,Object.assign({signal:c},this.fetchOptions))}).then(h=>{if(e.__loadIndex===o){if(h.ok)return h.arrayBuffer();throw new Error(`Failed to load model with error code ${h.status}`)}}).then(h=>{if(e.__loadIndex===o)return t.downloading--,t.parsing++,e.__loadAbort=null,e.__loadingState=Ja,s.add(e,d=>{if(d.__loadIndex!==o)return Promise.resolve();const p=d.content.uri,g=su(p);return this.parseTile(h,d,g)})}).then(()=>{e.__loadIndex===o&&(t.parsing--,e.__loadingState=Ys,e.__wasSetVisible&&this.setTileVisible(e,!0),e.__wasSetActive&&this.setTileActive(e,!0))}).catch(u)}dispose(){const e=this.lruCache;this.traverse(t=>{e.remove(t)})}}function Hh(r){return new TextDecoder().decode(r)}class ra{constructor(e,t,n,i){this.buffer=e,this.binOffset=t+n,this.binLength=i;let s=null;if(n!==0){const a=new Uint8Array(e,t,n);s=JSON.parse(Hh(a))}else s={};this.header=s}getKeys(){return Object.keys(this.header)}getData(e,t,n=null,i=null){const s=this.header;if(!(e in s))return null;const a=s[e];if(a instanceof Object){if(Array.isArray(a))return a;{const{buffer:o,binOffset:l,binLength:c}=this,u=a.byteOffset||0,h=a.type||i,d=a.componentType||n;if("type"in a&&i&&a.type!==i)throw new Error("FeatureTable: Specified type does not match expected type.");let p;switch(h){case"SCALAR":p=1;break;case"VEC2":p=2;break;case"VEC3":p=3;break;case"VEC4":p=4;break;default:throw new Error(`FeatureTable : Feature type not provided for "${e}".`)}let g;const f=l+u,A=t*p;switch(d){case"BYTE":g=new Int8Array(o,f,A);break;case"UNSIGNED_BYTE":g=new Uint8Array(o,f,A);break;case"SHORT":g=new Int16Array(o,f,A);break;case"UNSIGNED_SHORT":g=new Uint16Array(o,f,A);break;case"INT":g=new Int32Array(o,f,A);break;case"UNSIGNED_INT":g=new Uint32Array(o,f,A);break;case"FLOAT":g=new Float32Array(o,f,A);break;case"DOUBLE":g=new Float64Array(o,f,A);break;default:throw new Error(`FeatureTable : Feature component type not provided for "${e}".`)}if(f+A*g.BYTES_PER_ELEMENT>l+c)throw new Error("FeatureTable: Feature data read outside binary body length.");return g}}else return a}}class fl extends ra{constructor(e,t,n,i,s){super(e,n,i,s),this.batchSize=t}getData(e,t=null,n=null){return super.getData(e,this.batchSize,t,n)}}class tr{constructor(){this.fetchOptions={},this.workingPath=""}load(e){return fetch(e,this.fetchOptions).then(t=>{if(!t.ok)throw new Error(`Failed to load file "${e}" with status ${t.status} : ${t.statusText}`);return t.arrayBuffer()}).then(t=>(this.workingPath===""&&(this.workingPath=this.workingPathForURL(e)),this.parse(t)))}resolveExternalURL(e){return/^[^\\/]/.test(e)?this.workingPath+"/"+e:e}workingPathForURL(e){const t=e.split(/[\\/]/g);return t.pop(),t.join("/")+"/"}parse(e){throw new Error("LoaderBase: Parse not implemented.")}}class _C extends tr{parse(e){const t=new DataView(e),n=String.fromCharCode(t.getUint8(0))+String.fromCharCode(t.getUint8(1))+String.fromCharCode(t.getUint8(2))+String.fromCharCode(t.getUint8(3));console.assert(n==="b3dm");const i=t.getUint32(4,!0);console.assert(i===1);const s=t.getUint32(8,!0);console.assert(s===e.byteLength);const a=t.getUint32(12,!0),o=t.getUint32(16,!0),l=t.getUint32(20,!0),c=t.getUint32(24,!0),u=28,h=e.slice(u,u+a+o),d=new ra(h,0,a,o),p=u+a+o,g=e.slice(p,p+l+c),f=new fl(g,d.getData("BATCH_LENGTH"),0,l,c),A=p+l+c,m=new Uint8Array(e,A,s-A);return{version:i,featureTable:d,batchTable:f,glbBytes:m}}}class Al extends Mi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new IC(t)}),this.register(function(t){return new TC(t)}),this.register(function(t){return new RC(t)}),this.register(function(t){return new MC(t)}),this.register(function(t){return new SC(t)}),this.register(function(t){return new bC(t)}),this.register(function(t){return new wC(t)}),this.register(function(t){return new vC(t)}),this.register(function(t){return new BC(t)}),this.register(function(t){return new yC(t)}),this.register(function(t){return new EC(t)}),this.register(function(t){return new DC(t)}),this.register(function(t){return new LC(t)})}load(e,t,n,i){const s=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=To.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new $i(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Wh){try{a[Ne.KHR_BINARY_GLTF]=new PC(e)}catch(h){i&&i(h);return}s=JSON.parse(a[Ne.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new XC(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case Ne.KHR_MATERIALS_UNLIT:a[h]=new CC;break;case Ne.KHR_DRACO_MESH_COMPRESSION:a[h]=new QC(s,this.dracoLoader);break;case Ne.KHR_TEXTURE_TRANSFORM:a[h]=new FC;break;case Ne.KHR_MESH_QUANTIZATION:a[h]=new UC;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function xC(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Ne={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class EC{constructor(e){this.parser=e,this.name=Ne.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new xe(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new lh(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new oh(u),c.distance=h;break;case"spot":c=new ah(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ti(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class CC{constructor(){this.name=Ne.KHR_MATERIALS_UNLIT}getMaterialType(){return Cn}extendParams(e,t,n){const i=[];e.color=new xe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Le))}return Promise.all(i)}}class vC{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class IC{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ce(o,o)}return Promise.all(s)}}class yC{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class MC{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new xe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Le)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class SC{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class bC{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new xe(o[0],o[1],o[2]),Promise.all(s)}}class wC{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class BC{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new xe(o[0],o[1],o[2]),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Le)),Promise.all(s)}}class TC{constructor(e){this.parser=e,this.name=Ne.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class RC{constructor(e){this.parser=e,this.name=Ne.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class DC{constructor(e){this.name=Ne.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(p),u,h,d,i.mode,i.filter),p})})}else return null}}class LC{constructor(e){this.name=Ne.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==en.TRIANGLES&&c.mode!==en.TRIANGLE_STRIP&&c.mode!==en.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,p=[];for(const g of h){const f=new ge,A=new T,m=new pn,C=new T(1,1,1),_=new ia(g.geometry,g.material,d);for(let E=0;E<d;E++)l.TRANSLATION&&A.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,E),l.SCALE&&C.fromBufferAttribute(l.SCALE,E),_.setMatrixAt(E,f.compose(A,m,C));for(const E in l)E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&g.geometry.setAttribute(E,l[E]);Je.prototype.copy.call(_,g),_.frustumCulled=!1,this.parser.assignFinalMaterial(_),p.push(_)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Wh="glTF",Ss=12,ou={JSON:1313821514,BIN:5130562};class PC{constructor(e){this.name=Ne.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ss),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Wh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ss,s=new DataView(e,Ss);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===ou.JSON){const c=new Uint8Array(e,Ss+a,o);this.content=n.decode(c)}else if(l===ou.BIN){const c=Ss+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class QC{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ne.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=Qo[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=Qo[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[e.attributes[u]],p=es[d.componentType];c[h]=p.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(d){for(const p in d.attributes){const g=d.attributes[p],f=l[p];f!==void 0&&(g.normalized=f)}h(d)},o,c)})})}}class FC{constructor(){this.name=Ne.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class UC{constructor(){this.name=Ne.KHR_MESH_QUANTIZATION}}class qh extends $s{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,d=h*h,p=d*h,g=e*c,f=g-c,A=-2*p+3*d,m=p-d,C=1-A,_=m-d+h;for(let E=0;E!==o;E++){const I=a[f+E+o],S=a[f+E+l]*u,w=a[g+E+o],D=a[g+E]*u;s[E]=C*I+_*S+A*w+m*D}return s}}const NC=new pn;class OC extends qh{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return NC.fromArray(s).normalize().toArray(s),s}}const en={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},es={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},lu={9728:ot,9729:Ge,9984:Vr,9985:ko,9986:Ls,9987:jt},cu={33071:vt,33648:Gs,10497:Wt},Ka={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Qo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ei={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},GC={CUBICSPLINE:void 0,LINEAR:ns,STEP:ks},Za={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function kC(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new us({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:nn})),r.DefaultMaterial}function bs(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ti(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function VC(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;a.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;o.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function zC(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function HC(r){const e=r.extensions&&r.extensions[Ne.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+uu(e.attributes):t=r.indices+":"+uu(r.attributes)+":"+r.mode,t}function uu(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Fo(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function WC(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const qC=new ge;class XC{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new xC,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new q0(this.options.manager):this.textureLoader=new ch(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new $i(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};bs(s,o,i),ti(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())s(u,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ne.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(To.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Ka[i.type],o=es[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new ht(c,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=Ka[i.type],c=es[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let f,A;if(p&&p!==h){const m=Math.floor(d/p),C="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let _=t.cache.get(C);_||(f=new c(o,m*p,i.count*p/u),_=new eh(f,p/u),t.cache.add(C,_)),A=new ta(_,l,d%p/u,g)}else o===null?f=new c(i.count*l):f=new c(o,d,i.count*l),A=new ht(f,l,g);if(i.sparse!==void 0){const m=Ka.SCALAR,C=es[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,E=i.sparse.values.byteOffset||0,I=new C(a[1],_,i.sparse.count*m),S=new c(a[2],E,i.sparse.count*l);o!==null&&(A=new ht(A.array.slice(),A.itemSize,A.normalized));for(let w=0,D=I.length;w<D;w++){const Q=I[w];if(A.setX(Q,S[w*l]),l>=2&&A.setY(Q,S[w*l+1]),l>=3&&A.setZ(Q,S[w*l+2]),l>=4&&A.setW(Q,S[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return A})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"";const d=(s.samplers||{})[a.sampler]||{};return u.magFilter=lu[d.magFilter]||Ge,u.minFilter=lu[d.minFilter]||jt,u.wrapS=cu[d.wrapS]||Wt,u.wrapT=cu[d.wrapT]||Wt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(f){const A=new Ke(f);A.needsUpdate=!0,d(A)}),t.load(To.resolveURL(h,s.path),g,void 0,p)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),h.userData.mimeType=a.mimeType||WC(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[Ne.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ne.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[Ne.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.encoding=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new rs,Mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new ss,Mn.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return us}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[Ne.KHR_MATERIALS_UNLIT]){const h=i[Ne.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,s,t))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new xe(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.fromArray(d),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Le)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=fn);const u=s.alphaMode||Za.OPAQUE;if(u===Za.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Za.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Cn&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new ce(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}return s.occlusionTexture!==void 0&&a!==Cn&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Cn&&(o.emissive=new xe().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&a!==Cn&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Le)),Promise.all(c).then(function(){const h=new a(o);return s.name&&(h.name=s.name),ti(h,s),t.associations.set(h,{materials:e}),s.extensions&&bs(i,h,s),h})}createUniqueName(e){const t=qe.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Ne.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return hu(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=HC(c),h=i[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[Ne.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=hu(new yt,c,t),i[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?kC(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){const f=u[p],A=a[p];let m;const C=c[p];if(A.mode===en.TRIANGLES||A.mode===en.TRIANGLE_STRIP||A.mode===en.TRIANGLE_FAN||A.mode===void 0)m=s.isSkinnedMesh===!0?new jo(f,C):new Ut(f,C),m.isSkinnedMesh===!0&&!m.geometry.attributes.skinWeight.normalized&&m.normalizeSkinWeights(),A.mode===en.TRIANGLE_STRIP?m.geometry=du(m.geometry,pA):A.mode===en.TRIANGLE_FAN&&(m.geometry=du(m.geometry,Du));else if(A.mode===en.LINES)m=new Jo(f,C);else if(A.mode===en.LINE_STRIP)m=new sa(f,C);else if(A.mode===en.LINE_LOOP)m=new th(f,C);else if(A.mode===en.POINTS)m=new Ko(f,C);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+A.mode);Object.keys(m.geometry.morphAttributes).length>0&&zC(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),ti(m,s),A.extensions&&bs(i,m,A),t.assignFinalMaterial(m),h.push(m)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return h[0];const d=new Wn;t.associations.set(d,{meshes:e});for(let p=0,g=h.length;p<g;p++)d.add(h[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ft(Fu.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Zs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ti(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this.getDependency("node",t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const d=new ge;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new na(o,l)})}loadAnimation(e){const n=this.json.animations[e],i=[],s=[],a=[],o=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const h=n.channels[c],d=n.samplers[h.sampler],p=h.target,g=p.node,f=n.parameters!==void 0?n.parameters[d.input]:d.input,A=n.parameters!==void 0?n.parameters[d.output]:d.output;i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",f)),a.push(this.getDependency("accessor",A)),o.push(d),l.push(p)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2],p=c[3],g=c[4],f=[];for(let m=0,C=u.length;m<C;m++){const _=u[m],E=h[m],I=d[m],S=p[m],w=g[m];if(_===void 0)continue;_.updateMatrix();let D;switch(ei[w.path]){case ei.weights:D=Xs;break;case ei.rotation:D=yi;break;case ei.position:case ei.scale:default:D=js;break}const Q=_.name?_.name:_.uuid,x=S.interpolation!==void 0?GC[S.interpolation]:ns,M=[];ei[w.path]===ei.weights?_.traverse(function(L){L.morphTargetInfluences&&M.push(L.name?L.name:L.uuid)}):M.push(Q);let k=I.array;if(I.normalized){const L=Fo(k.constructor),R=new Float32Array(k.length);for(let U=0,V=k.length;U<V;U++)R[U]=k[U]*L;k=R}for(let L=0,R=M.length;L<R;L++){const U=new D(M[L]+"."+ei[w.path],E.array,k,x);S.interpolation==="CUBICSPLINE"&&(U.createInterpolant=function(z){const N=this instanceof yi?OC:qh;return new N(this.times,this.values,this.getValueSize()/3,z)},U.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),f.push(U)}}const A=n.name?n.name:"animation_"+e;return new G0(A,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this.extensions,i=this,s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"";return function(){const o=[],l=i._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(d){return i._getNodeRef(i.cameraCache,s.camera,d)})),i._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){o.push(d)});const c=[],u=s.children||[];for(let d=0,p=u.length;d<p;d++)c.push(i.getDependency("node",u[d]));const h=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([Promise.all(o),Promise.all(c),h])}().then(function(o){const l=o[0],c=o[1],u=o[2];let h;if(s.isBone===!0?h=new Yo:l.length>1?h=new Wn:l.length===1?h=l[0]:h=new Je,h!==l[0])for(let d=0,p=l.length;d<p;d++)h.add(l[d]);if(s.name&&(h.userData.name=s.name,h.name=a),ti(h,s),s.extensions&&bs(n,h,s),s.matrix!==void 0){const d=new ge;d.fromArray(s.matrix),h.applyMatrix4(d)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,u!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(u,qC)});for(let d=0,p=c.length;d<p;d++)h.add(c[d]);return h})}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Wn;n.name&&(s.name=i.createUniqueName(n.name)),ti(s,n),n.extensions&&bs(t,s,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[d,p]of i.associations)(d instanceof Mn||d instanceof Ke)&&h.set(d,p);return u.traverse(d=>{const p=i.associations.get(d);p!=null&&h.set(d,p)}),h};return i.associations=c(s),s})}}function jC(r,e,t){const n=e.attributes,i=new Sn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new T(l[0],l[1],l[2]),new T(c[0],c[1],c[2])),o.normalized){const u=Fo(es[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new T,l=new T;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const f=Fo(es[d.componentType]);l.multiplyScalar(f)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new si;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function hu(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in n){const o=Qo[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return ti(r,e),jC(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?VC(r,e.targets,t):r})}function du(r,e){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Du)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s}class Xh extends _C{constructor(e=fs){super(),this.manager=e,this.adjustmentTransform=new ge}parse(e){const t=super.parse(e),n=t.glbBytes.slice().buffer;return new Promise((i,s)=>{const a=this.manager,o=this.fetchOptions,l=a.getHandler("path.gltf")||new Al(a);o.credentials==="include"&&o.mode==="cors"&&l.setCrossOrigin("use-credentials"),"credentials"in o&&l.setWithCredentials(o.credentials==="include"),o.headers&&l.setRequestHeader(o.headers);let c=this.workingPath;!/[\\/]$/.test(c)&&c.length&&(c+="/");const u=this.adjustmentTransform;l.parse(n,c,h=>{const{batchTable:d,featureTable:p}=t,{scene:g}=h,f=p.getData("RTC_CENTER");f&&(g.position.x+=f[0],g.position.y+=f[1],g.position.z+=f[2]),h.scene.matrix.multiply(u),h.scene.matrix.decompose(h.scene.position,h.scene.quaternion,h.scene.scale),h.batchTable=d,h.featureTable=p,g.batchTable=d,g.featureTable=p,i(h)},s)})}}class YC extends tr{parse(e){const t=new DataView(e),n=String.fromCharCode(t.getUint8(0))+String.fromCharCode(t.getUint8(1))+String.fromCharCode(t.getUint8(2))+String.fromCharCode(t.getUint8(3));console.assert(n==="pnts");const i=t.getUint32(4,!0);console.assert(i===1);const s=t.getUint32(8,!0);console.assert(s===e.byteLength);const a=t.getUint32(12,!0),o=t.getUint32(16,!0),l=t.getUint32(20,!0),c=t.getUint32(24,!0),u=28,h=e.slice(u,u+a+o),d=new ra(h,0,a,o),p=u+a+o,g=e.slice(p,p+l+c),f=new fl(g,d.getData("BATCH_LENGTH")||d.getData("POINTS_LENGTH"),0,l,c);return Promise.resolve({version:i,featureTable:d,batchTable:f})}}class jh extends YC{constructor(e=fs){super(),this.manager=e}parse(e){return super.parse(e).then(t=>{const{featureTable:n}=t,i=n.getData("POINTS_LENGTH"),s=n.getData("POSITION",i,"FLOAT","VEC3"),a=n.getData("RGB",i,"UNSIGNED_BYTE","VEC3");["QUANTIZED_VOLUME_OFFSET","QUANTIZED_VOLUME_SCALE","CONSTANT_RGBA","BATCH_LENGTH","POSITION_QUANTIZED","RGBA","RGB565","NORMAL","NORMAL_OCT16P"].forEach(h=>{h in n.header&&console.warn(`PNTSLoader: Unsupported FeatureTable feature "${h}" detected.`)});const o=new yt;o.setAttribute("position",new ht(s,3,!1));const l=new rs;l.size=2,l.sizeAttenuation=!1,a!==null&&(o.setAttribute("color",new ht(a,3,!0)),l.vertexColors=!0);const c=new Ko(o,l);t.scene=c,t.scene.featureTable=n;const u=n.getData("RTC_CENTER");return u&&(t.scene.position.x+=u[0],t.scene.position.y+=u[1],t.scene.position.z+=u[2]),t})}}class JC extends tr{parse(e){const t=new DataView(e),n=String.fromCharCode(t.getUint8(0))+String.fromCharCode(t.getUint8(1))+String.fromCharCode(t.getUint8(2))+String.fromCharCode(t.getUint8(3));console.assert(n==="i3dm");const i=t.getUint32(4,!0);console.assert(i===1);const s=t.getUint32(8,!0);console.assert(s===e.byteLength);const a=t.getUint32(12,!0),o=t.getUint32(16,!0),l=t.getUint32(20,!0),c=t.getUint32(24,!0),u=t.getUint32(28,!0),h=32,d=e.slice(h,h+a+o),p=new ra(d,0,a,o),g=h+a+o,f=e.slice(g,g+l+c),A=new fl(f,p.getData("INSTANCES_LENGTH"),0,l,c),m=g+l+c,C=new Uint8Array(e,m,s-m);let _=null,E=null;if(u)_=C,E=Promise.resolve();else{const I=this.resolveExternalURL(Hh(C));E=fetch(I,this.fetchOptions).then(S=>{if(!S.ok)throw new Error(`I3DMLoaderBase : Failed to load file "${I}" with status ${S.status} : ${S.statusText}`);return S.arrayBuffer()}).then(S=>{_=new Uint8Array(S)})}return E.then(()=>({version:i,featureTable:p,batchTable:A,glbBytes:_}))}}const fu=new T,$a=new T,eo=new T,Au=new T,to=new pn,Tr=new T,Rr=new ge;class Yh extends JC{constructor(e=fs){super(),this.manager=e,this.adjustmentTransform=new ge}resolveExternalURL(e){return this.manager.resolveURL(super.resolveExternalURL(e))}parse(e){return super.parse(e).then(t=>{const{featureTable:n,batchTable:i}=t,s=t.glbBytes.slice().buffer;return new Promise((a,o)=>{const l=this.fetchOptions,c=this.manager,u=c.getHandler("path.gltf")||new Al(c);l.credentials==="include"&&l.mode==="cors"&&u.setCrossOrigin("use-credentials"),"credentials"in l&&u.setWithCredentials(l.credentials==="include"),l.headers&&u.setRequestHeader(l.headers);let h=this.workingPath;/[\\/]$/.test(h)||(h+="/");const d=this.adjustmentTransform;u.parse(s,h,p=>{const g=n.getData("INSTANCES_LENGTH"),f=n.getData("POSITION",g,"FLOAT","VEC3"),A=n.getData("NORMAL_UP",g,"FLOAT","VEC3"),m=n.getData("NORMAL_RIGHT",g,"FLOAT","VEC3"),C=n.getData("SCALE_NON_UNIFORM",g,"FLOAT","VEC3"),_=n.getData("SCALE",g,"FLOAT","SCALAR");["RTC_CENTER","QUANTIZED_VOLUME_OFFSET","QUANTIZED_VOLUME_SCALE","EAST_NORTH_UP","POSITION_QUANTIZED","NORMAL_UP_OCT32P","NORMAL_RIGHT_OCT32P"].forEach(w=>{w in n.header&&console.warn(`I3DMLoader: Unsupported FeatureTable feature "${w}" detected.`)});const E=new Map,I=[];p.scene.traverse(w=>{if(w.isMesh){const{geometry:D,material:Q}=w,x=new ia(D,Q,g);x.position.copy(w.position),x.rotation.copy(w.rotation),x.scale.copy(w.scale),I.push(x),E.set(w,x)}});const S=new T;for(let w=0;w<g;w++)S.x+=f[w*3+0]/g,S.y+=f[w*3+1]/g,S.z+=f[w*3+2]/g;E.forEach((w,D)=>{const Q=D.parent;Q&&(Q.remove(D),Q.add(w),w.updateMatrixWorld(),w.position.copy(S).applyMatrix4(w.matrixWorld))});for(let w=0;w<g;w++){Au.set(f[w*3+0]-S.x,f[w*3+1]-S.y,f[w*3+2]-S.z),A?($a.set(A[w*3+0],A[w*3+1],A[w*3+2]),eo.set(m[w*3+0],m[w*3+1],m[w*3+2]),fu.crossVectors(eo,$a).normalize(),Rr.makeBasis(eo,$a,fu),to.setFromRotationMatrix(Rr)):to.set(0,0,0,1),_?Tr.setScalar(_[w]):C?Tr.set(C[w*3+0],C[w*3+1],C[w*3+2]):Tr.set(1,1,1),Rr.compose(Au,to,Tr).multiply(d);for(let D=0,Q=I.length;D<Q;D++)I[D].setMatrixAt(w,Rr)}p.batchTable=i,p.featureTable=n,p.scene.batchTable=i,p.scene.featureTable=n,a(p)},o)})})}}class KC extends tr{parse(e){const t=new DataView(e),n=String.fromCharCode(t.getUint8(0))+String.fromCharCode(t.getUint8(1))+String.fromCharCode(t.getUint8(2))+String.fromCharCode(t.getUint8(3));console.assert(n==="cmpt",'CMPTLoader: The magic bytes equal "cmpt".');const i=t.getUint32(4,!0);console.assert(i===1,'CMPTLoader: The version listed in the header is "1".');const s=t.getUint32(8,!0);console.assert(s===e.byteLength,"CMPTLoader: The contents buffer length listed in the header matches the file.");const a=t.getUint32(12,!0),o=[];let l=16;for(let c=0;c<a;c++){const u=new DataView(e,l,12),h=String.fromCharCode(u.getUint8(0))+String.fromCharCode(u.getUint8(1))+String.fromCharCode(u.getUint8(2))+String.fromCharCode(u.getUint8(3)),d=u.getUint32(4,!0),p=u.getUint32(8,!0),g=new Uint8Array(e,l,p);o.push({type:h,buffer:g,version:d}),l+=p}return{version:i,tiles:o}}}class ZC extends KC{constructor(e=fs){super(),this.manager=e,this.adjustmentTransform=new ge}parse(e){const t=super.parse(e),n=this.manager,i=this.adjustmentTransform,s=[];for(const a in t.tiles){const{type:o,buffer:l}=t.tiles[a];switch(o){case"b3dm":{const c=l.slice(),u=new Xh(n);u.workingPath=this.workingPath,u.fetchOptions=this.fetchOptions,u.adjustmentTransform.copy(i);const h=u.parse(c.buffer);s.push(h);break}case"pnts":{const c=l.slice(),u=new jh(n);u.workingPath=this.workingPath,u.fetchOptions=this.fetchOptions;const h=u.parse(c.buffer);s.push(h);break}case"i3dm":{const c=l.slice(),u=new Yh(n);u.workingPath=this.workingPath,u.fetchOptions=this.fetchOptions,u.adjustmentTransform.copy(i);const h=u.parse(c.buffer);s.push(h);break}}}return Promise.all(s).then(a=>{const o=new Wn;return a.forEach(l=>{o.add(l.scene)}),{tiles:a,scene:o}})}}class $C extends tr{constructor(e=fs){super(),this.manager=e}parse(e){return new Promise((t,n)=>{const i=this.manager,s=this.fetchOptions;let a=i.getHandler("path.gltf")||i.getHandler("path.glb");a||(a=new Al(i),s.credentials==="include"&&s.mode==="cors"&&a.setCrossOrigin("use-credentials"),"credentials"in s&&a.setWithCredentials(s.credentials==="include"),s.headers&&a.setRequestHeader(s.headers));let o=a.resourcePath||a.path||this.workingPath;!/[\\/]$/.test(o)&&o.length&&(o+="/"),a.parse(e,o,l=>{t(l)},n)})}}const Dr=new ge;class ev extends Wn{constructor(e){super(),this.name="TilesRenderer.TilesGroup",this.tilesRenderer=e}raycast(e,t){this.tilesRenderer.optimizeRaycast&&this.tilesRenderer.raycast(e,t)}updateMatrixWorld(e){if(this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldNeedsUpdate||e){this.parent===null?Dr.copy(this.matrix):Dr.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1;const t=Dr.elements,n=this.matrixWorld.elements;let i=!1;for(let s=0;s<16;s++){const a=t[s],o=n[s];if(Math.abs(a-o)>Number.EPSILON){i=!0;break}}if(i){this.matrixWorld.copy(Dr);const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateMatrixWorld()}}}}const ts=new si,zn=new ge,pu=new T,Wi=new T,Ji=new Jr,$t=[];function no(r,e){return r.distance-e.distance}function Uo(r,e,t){r.traverse(n=>{Object.getPrototypeOf(n).raycast.call(n,e,t)})}function Jh(r,e,t,n){if(t.has(r))if(Uo(r.cached.scene,n,$t),$t.length>0){$t.length>1&&$t.sort(no);const l=$t[0];return $t.length=0,l}else return null;const i=[],s=r.children;for(let l=0,c=s.length;l<c;l++){const u=s[l],h=u.cached,d=e.matrixWorld;zn.copy(d);const p=h.sphere;if(p&&(ts.copy(p),ts.applyMatrix4(zn),!n.ray.intersectsSphere(ts)))continue;const g=h.box,f=h.boxTransform;if(g)if(zn.multiply(f).invert(),Ji.copy(n.ray),Ji.applyMatrix4(zn),Ji.intersectBox(g,pu)){Wi.setFromMatrixScale(zn);const A=Wi.x;Math.abs(Math.max(Wi.x-Wi.y,Wi.x-Wi.z))>1e-6&&console.warn("ThreeTilesRenderer : Non uniform scale used for tile which may cause issues when raycasting.");const m={distance:1/0,tile:null};i.push(m),m.distance=pu.distanceToSquared(Ji.origin)*A*A,m.tile=u}else continue}i.sort(no);let a=1/0,o=null;for(let l=0,c=i.length;l<c;l++){const u=i[l];if(u.distance>a)break;{const d=u.tile,p=d.cached.scene;let g=null;if(t.has(d)?(Uo(p,n,$t),$t.length>0&&($t.length>1&&$t.sort(no),g=$t[0])):g=Jh(d,e,t,n),g){const f=g.distance*g.distance;f<a&&(a=f,o=g),$t.length=0}}}return o}function Kh(r,e,t,n,i){const s=r.cached,a=e.matrixWorld;zn.copy(a);const o=s.sphere;if(o&&(ts.copy(o),ts.applyMatrix4(zn),!n.ray.intersectsSphere(ts)))return;const l=s.box,c=s.boxTransform;if(l&&(zn.multiply(c).invert(),Ji.copy(n.ray).applyMatrix4(zn),!Ji.intersectsBox(l)))return;const u=s.scene;if(t.has(r)){Uo(u,n,i);return}const h=r.children;for(let d=0,p=h.length;d<p;d++)Kh(h[d],e,t,n,i)}const Zh=Symbol("INITIAL_FRUSTUM_CULLED"),hn=new ge,io=new ge,dn=new T,Un=new T,Nn=new T,On=new T,tv=new T(1,0,0),nv=new T(0,1,0);function gu(r,e){r.traverse(t=>{t.frustumCulled=t[Zh]&&e})}class iv extends mC{get autoDisableRendererCulling(){return this._autoDisableRendererCulling}set autoDisableRendererCulling(e){this._autoDisableRendererCulling!==e&&(super._autoDisableRendererCulling=e,this.forEachLoadedModel(t=>{gu(t,!e)}))}constructor(...e){super(...e),this.group=new ev(this),this.cameras=[],this.cameraMap=new Map,this.cameraInfo=[],this.activeTiles=new Set,this.visibleTiles=new Set,this._autoDisableRendererCulling=!0,this.optimizeRaycast=!0,this.onLoadTileSet=null,this.onLoadModel=null,this.onDisposeModel=null,this.onTileVisibilityChange=null;const t=new rh;t.setURLModifier(i=>this.preprocessURL?this.preprocessURL(i):i),this.manager=t;const n=this;this._overridenRaycast=function(i,s){n.optimizeRaycast||Object.getPrototypeOf(this).raycast.call(this,i,s)}}getBounds(e){if(!this.root)return!1;const t=this.root.cached,n=t.box,i=t.boxTransform;return n?(e.copy(n),e.applyMatrix4(i),!0):!1}getOrientedBounds(e,t){if(!this.root)return!1;const n=this.root.cached,i=n.box,s=n.boxTransform;return i?(e.copy(i),t.copy(s),!0):!1}getBoundingSphere(e){if(!this.root)return!1;const t=this.root.cached.sphere;return t?(e.copy(t),!0):!1}forEachLoadedModel(e){this.traverse(t=>{const n=t.cached.scene;n&&e(n,t)})}raycast(e,t){if(this.root)if(e.firstHitOnly){const n=Jh(this.root,this.group,this.activeTiles,e);n&&t.push(n)}else Kh(this.root,this.group,this.activeTiles,e,t)}hasCamera(e){return this.cameraMap.has(e)}setCamera(e){const t=this.cameras,n=this.cameraMap;return n.has(e)?!1:(n.set(e,new ce),t.push(e),!0)}setResolution(e,t,n){const i=this.cameraMap;return i.has(e)?(t instanceof ce?i.get(e).copy(t):i.get(e).set(t,n),!0):!1}setResolutionFromRenderer(e,t){const n=this.cameraMap;if(!n.has(e))return!1;const i=n.get(e);return t.getSize(i),i.multiplyScalar(t.getPixelRatio()),!0}deleteCamera(e){const t=this.cameras,n=this.cameraMap;if(n.has(e)){const i=t.indexOf(e);return t.splice(i,1),n.delete(e),!0}return!1}fetchTileSet(e,...t){const n=super.fetchTileSet(e,...t);return n.then(i=>{this.onLoadTileSet&&Promise.resolve().then(()=>{this.onLoadTileSet(i,e)})}),n}update(){const e=this.group,t=this.cameras,n=this.cameraMap,i=this.cameraInfo;if(t.length===0){console.warn("TilesRenderer: no cameras defined. Cannot update 3d tiles.");return}for(;i.length>t.length;)i.pop();for(;i.length<t.length;)i.push({frustum:new Zr,isOrthographic:!1,sseDenominator:-1,position:new T,invScale:-1,pixelSize:0});io.copy(e.matrixWorld).invert(),dn.setFromMatrixScale(io);const s=dn.x;Math.abs(Math.max(dn.x-dn.y,dn.x-dn.z))>1e-6&&console.warn("ThreeTilesRenderer : Non uniform scale used for tile which may cause issues when calculating screen space error.");for(let a=0,o=i.length;a<o;a++){const l=t[a],c=i[a],u=c.frustum,h=c.position,d=n.get(l);(d.width===0||d.height===0)&&console.warn("TilesRenderer: resolution for camera error calculation is not set.");const p=l.projectionMatrix.elements;if(c.isOrthographic=p[15]===1,c.isOrthographic){const g=2/p[0],f=2/p[5];c.pixelSize=Math.max(f/d.height,g/d.width)}else c.sseDenominator=2/p[5]/d.height;c.invScale=s,hn.copy(e.matrixWorld),hn.premultiply(l.matrixWorldInverse),hn.premultiply(l.projectionMatrix),u.setFromProjectionMatrix(hn),h.set(0,0,0),h.applyMatrix4(l.matrixWorld),h.applyMatrix4(io)}super.update()}preprocessNode(e,t,n){super.preprocessNode(e,t,n);const i=new ge;if(e.transform){const h=e.transform;for(let d=0;d<16;d++)i.elements[d]=h[d]}else i.identity();t&&i.premultiply(t.cached.transform);const s=new ge().copy(i).invert();let a=null,o=null,l=null;if("box"in e.boundingVolume){const h=e.boundingVolume.box;a=new Sn,o=new ge,l=new ge,Un.set(h[3],h[4],h[5]),Nn.set(h[6],h[7],h[8]),On.set(h[9],h[10],h[11]);const d=Un.length(),p=Nn.length(),g=On.length();Un.normalize(),Nn.normalize(),On.normalize(),d===0&&Un.crossVectors(Nn,On),p===0&&Nn.crossVectors(Un,On),g===0&&On.crossVectors(Un,Nn),o.set(Un.x,Nn.x,On.x,h[0],Un.y,Nn.y,On.y,h[1],Un.z,Nn.z,On.z,h[2],0,0,0,1),o.premultiply(i),l.copy(o).invert(),a.min.set(-d,-p,-g),a.max.set(d,p,g)}let c=null;if("sphere"in e.boundingVolume){const h=e.boundingVolume.sphere;c=new si,c.center.set(h[0],h[1],h[2]),c.radius=h[3],c.applyMatrix4(i)}const u=null;"region"in e.boundingVolume&&console.warn("ThreeTilesRenderer: region bounding volume not supported."),e.cached={loadIndex:0,transform:i,transformInverse:s,active:!1,inFrustum:[],box:a,boxTransform:o,boxTransformInverse:l,sphere:c,region:u,scene:null,geometry:null,material:null}}parseTile(e,t,n){t._loadIndex=t._loadIndex||0,t._loadIndex++;const s=t.content.uri.split(/[\\\/]/g);s.pop();const a=s.join("/"),o=this.fetchOptions,l=this.manager,c=t._loadIndex;let u=null;const h=this.rootTileSet.asset&&this.rootTileSet.asset.gltfUpAxis||"y",d=t.cached,p=d.transform;switch(h.toLowerCase()){case"x":hn.makeRotationAxis(nv,-Math.PI/2);break;case"y":hn.makeRotationAxis(tv,Math.PI/2);break;case"z":hn.identity();break}switch(n){case"b3dm":{const f=new Xh(l);f.workingPath=a,f.fetchOptions=o,f.adjustmentTransform.copy(hn),u=f.parse(e).then(A=>A.scene);break}case"pnts":{const f=new jh(l);f.workingPath=a,f.fetchOptions=o,u=f.parse(e).then(A=>A.scene);break}case"i3dm":{const f=new Yh(l);f.workingPath=a,f.fetchOptions=o,f.adjustmentTransform.copy(hn),u=f.parse(e).then(A=>A.scene);break}case"cmpt":{const f=new ZC(l);f.workingPath=a,f.fetchOptions=o,f.adjustmentTransform.copy(hn),u=f.parse(e).then(A=>A.scene);break}case"gltf":case"glb":const g=new $C(l);g.workingPath=a,g.fetchOptions=o,u=g.parse(e).then(f=>f.scene);break;default:console.warn(`TilesRenderer: Content type "${n}" not supported.`),u=Promise.resolve(null);break}return u.then(g=>{if(t._loadIndex!==c)return;g.updateMatrix(),(n==="glb"||n==="gltf")&&g.matrix.multiply(hn),g.matrix.premultiply(p),g.matrix.decompose(g.position,g.quaternion,g.scale),g.traverse(C=>{C[Zh]=C.frustumCulled}),gu(g,!this.autoDisableRendererCulling),d.scene=g,g.traverse(C=>{C.raycast=this._overridenRaycast});const f=[],A=[],m=[];g.traverse(C=>{if(C.geometry&&A.push(C.geometry),C.material){const _=C.material;f.push(C.material);for(const E in _){const I=_[E];I&&I.isTexture&&m.push(I)}}}),d.materials=f,d.geometry=A,d.textures=m,this.onLoadModel&&this.onLoadModel(g,t)})}disposeTile(e){const t=e.cached;if(t.scene){const n=t.materials,i=t.geometry,s=t.textures;for(let a=0,o=i.length;a<o;a++)i[a].dispose();for(let a=0,o=n.length;a<o;a++)n[a].dispose();for(let a=0,o=s.length;a<o;a++)s[a].dispose();this.onDisposeModel&&this.onDisposeModel(t.scene,e),t.scene=null,t.materials=null,t.textures=null,t.geometry=null}e._loadIndex++}setTileVisible(e,t){const n=e.cached.scene,i=this.visibleTiles,s=this.group;t?(s.add(n),i.add(e),n.updateMatrixWorld(!0)):(s.remove(n),i.delete(e)),this.onTileVisibilityChange&&this.onTileVisibilityChange(n,e,t)}setTileActive(e,t){const n=this.activeTiles;t?n.add(e):n.delete(e)}calculateError(e){const t=e.cached,n=t.inFrustum,i=this.cameras,s=this.cameraInfo,a=e.boundingVolume;if("box"in a||"sphere"in a){const o=t.sphere,l=t.box,c=t.boxTransformInverse,u=t.transformInverse,h=l&&c;let d=-1/0,p=1/0;for(let g=0,f=i.length;g<f;g++){if(!n[g])continue;const A=s[g],m=A.invScale;let C;if(A.isOrthographic){const _=A.pixelSize;C=e.geometricError/(_*m)}else{dn.copy(A.position);let _;h?(dn.applyMatrix4(c),_=l.distanceToPoint(dn)):(dn.applyMatrix4(u),_=Math.max(o.distanceToPoint(dn),0));const E=_*m,I=A.sseDenominator;C=e.geometricError/(E*I),p=Math.min(p,E)}d=Math.max(d,C)}e.__distanceFromCamera=p,e.__error=d}else"region"in a&&console.warn("ThreeTilesRenderer : Region bounds not supported.")}tileInView(e){const t=e.cached,n=t.sphere,i=t.box,s=t.inFrustum;if(n||i){const a=this.cameraInfo;let o=!1;for(let l=0,c=a.length;l<c;l++){const u=a[l].frustum,h=n&&u.intersectsSphere(n),d=i&&u.intersectsBox(i);h||d?(o=!0,s[l]=!0):s[l]=!1}return o}return!0}}const Us=new ge,Xr=new T,jr=new pn,Yr=new T;function qn(r,e,t){if(e.skipLerp){No(e,t);return}const n=1/r.dt,i=Fr(hf/n,0,1);Us.fromArray(e.worldMatrix),Us.decompose(Xr,jr,Yr),t.position.lerp(Xr,i),t.quaternion.slerp(jr,i),t.scale.lerp(Yr,i),t.visible=e.object3DVisible,t.layers.mask=e.layers}function No(r,e,t){Us.fromArray(r.worldMatrix),t&&Us.premultiply(t),Us.decompose(Xr,jr,Yr),e.position.copy(Xr),e.quaternion.copy(jr),e.scale.copy(Yr),e.visible=r.object3DVisible,e.layers.mask=r.layers}class sv extends Je{constructor(t){super();ue(this,"box");ue(this,"size");ue(this,"needsUpdate");this.resource=t,this.box=new Sn,this.size=new T,this.needsUpdate=!0}update(t,n){this.needsUpdate&&this.resource.size&&(qn(t,n,this),this.size.fromArray(this.resource.size),this.box.setFromCenterAndSize(this.position,this.size))}}const so=[];function $h(r){const e=Xn(r,er);so.length=0;for(let t=0;t<e.length;t++){const n=e[t];n.reflectionProbeObject&&so.push(n.reflectionProbeObject)}return so}function rv(r){const{scene:e,nodeOptimizationsEnabled:t}=De(r,Be),n=Xn(r,er),i=!t;for(let s=0;s<n.length;s++){const a=n[s];i&&(a.needsUpdate=!0);const o=a.needsUpdate||!a.isStatic;o&&(av(r,e,a),ov(r,e,a),lv(r,e,a),cv(r,a),fv(r,e,a),Av(r,e,a),a.needsUpdate=a.isStatic?!1:o)}}function av(r,e,t){var o;const n=t.currentCameraResourceId,i=((o=t.camera)==null?void 0:o.eid)||0;if(n!==i&&t.cameraObject&&(e.remove(t.cameraObject),t.cameraObject=void 0),t.currentCameraResourceId=i,!t.camera)return;const s=t.camera;let a;if(s.type===Ao.Perspective){let l=t.cameraObject;l||(l=new Ft,e.add(l)),l.layers.mask=s.layers,l.fov=s.yfov*Fu.RAD2DEG,l.near=s.znear,l.far=s.zfar,s.aspectRatio&&(l.aspect=s.aspectRatio),s.projectionMatrixNeedsUpdate&&l.updateProjectionMatrix(),a=l}else if(s.type===Ao.Orthographic){let l=t.cameraObject;l||(l=new Zs,e.add(l)),l.layers.mask=s.layers,l.left=-s.xmag,l.right=s.xmag,l.top=s.ymag,l.bottom=-s.ymag,l.near=s.znear,l.far=s.zfar,s.projectionMatrixNeedsUpdate&&l.updateProjectionMatrix(),a=l}a&&qn(r,t,a),t.cameraObject=a}function ov(r,e,t){var c;const{renderPipeline:n}=De(r,Be),i=t.currentLightResourceId,s=((c=t.light)==null?void 0:c.eid)||0;if(i!==s&&t.lightObject&&(e.remove(t.lightObject),t.lightObject=void 0),t.currentLightResourceId=s,!t.light)return;const a=t.light.type;let o;const l=t.light;if(a===ua.Directional){let u=t.lightObject;u||(u=new lh,u.target.position.set(0,0,-1),u.add(u.target),u.shadow.camera.top=10,u.shadow.camera.bottom=-10,u.shadow.camera.left=-10,u.shadow.camera.right=10,u.shadow.camera.near=10,u.shadow.camera.far=600,u.shadow.bias=1e-4,u.shadow.normalBias=.2,n.directionalShadowMapSize&&u.shadow.mapSize.copy(n.directionalShadowMapSize),e.add(u)),u.color.fromArray(l.color),u.intensity=l.intensity,u.castShadow=t.castShadow,o=u}else if(a===ua.Point){let u=t.lightObject;u||(u=new oh,e.add(u)),u.color.fromArray(l.color),u.intensity=l.intensity,u.castShadow=t.castShadow,u.distance=l.range,n.shadowMapSize&&u.shadow.mapSize.copy(n.shadowMapSize),o=u}else if(a===ua.Spot){let u=t.lightObject;u||(u=new ah,u.target.position.set(0,0,-1),u.add(u.target),e.add(u)),u.color.fromArray(l.color),u.intensity=l.intensity,u.castShadow=t.castShadow,u.distance=l.range,u.angle=l.outerConeAngle,u.penumbra=1-l.innerConeAngle/l.outerConeAngle,n.shadowMapSize&&u.shadow.mapSize.copy(n.shadowMapSize),o=u}o&&qn(r,t,o),t.lightObject=o}function lv(r,e,t){var s;const n=t.currentReflectionProbeResourceId,i=((s=t.reflectionProbe)==null?void 0:s.eid)||0;if(i!==n&&t.reflectionProbeObject&&(e.remove(t.reflectionProbeObject),t.reflectionProbeObject=void 0),t.currentReflectionProbeResourceId=i,!!t.reflectionProbe){if(!t.reflectionProbeObject){const a=new sv(t.reflectionProbe);t.reflectionProbeObject=a,e.add(a)}t.reflectionProbeObject.update(r,t)}}function cv(r,e){var s;const t=De(r,Be),n=e.currentMeshResourceId,i=((s=e.mesh)==null?void 0:s.eid)||0;if(n!==i&&e.meshPrimitiveObjects){for(let a=0;a<e.meshPrimitiveObjects.length;a++){const o=e.meshPrimitiveObjects[a];t.scene.remove(o)}e.meshPrimitiveObjects=void 0}if(e.currentMeshResourceId=i,!!e.mesh){if(!e.meshPrimitiveObjects){const a=e.mesh.primitives,o=[];for(let l=0;l<a.length;l++){const c=a[l],u=hv(r,e,e.mesh,c);o.push(u),t.scene.add(u)}e.meshPrimitiveObjects=o}if(e.meshPrimitiveObjects){const a=e.castShadow,o=e.receiveShadow;for(let l=0;l<e.meshPrimitiveObjects.length;l++){const c=e.meshPrimitiveObjects[l],u=e.mesh.primitives[l];if(u){const h=u.hologramMaterialEnabled;h&&c.material!==t.hologramMaterial?c.material=t.hologramMaterial:(!h&&c.material===t.hologramMaterial||!e.skin&&!h&&c.material!==u.materialObj)&&(c.material=u.materialObj)}if(u.autoUpdateNormals&&c.geometry.computeVertexNormals(),u.drawCount!==0&&u.geometryObj.setDrawRange(u.drawStart,u.drawCount),c.castShadow=a,c.receiveShadow=o,qn(r,e,c),e.skin){const h=e.skin.joints;for(let d=0;d<h.length;d++){const p=h[d];p.bone&&qn(r,p,p.bone)}}}}}}const ro=new T,ao=new pn,oo=new T,uv=new ge;function hv(r,e,t,n){var d;const i=De(r,Be);let s;const{instancedMesh:a,skin:o,lightMap:l}=e,{mode:c,geometryObj:u,materialObj:h}=n;if(c===He.TRIANGLES||c===He.TRIANGLE_FAN||c===He.TRIANGLE_STRIP){let p;if(o){if(!o.skeleton){const A=[],m=[];for(let C=0,_=o.joints.length;C<_;C++){const E=o.joints[C];if(E){let I=E.bone;I||(I=E.bone=new Yo,i.scene.add(I)),A.push(I),No(E,I);const S=new ge;o.inverseBindMatrices!==void 0&&S.fromArray(o.inverseBindMatrices.attribute.array,C*16),m.push(S)}else throw new Error(`Joint ${o.joints[C].name} not found`)}o.skeleton=new na(A,m)}const f=p=new jo(u,h);f.frustumCulled=!1,No(e,p),f.bind(o.skeleton,f.matrixWorld),f.geometry.attributes.skinWeight.normalized||f.normalizeSkinWeights(),Object.keys(f.geometry.morphAttributes).length>0&&dv(f)}else if(a){let f=0;for(let C=0;C<a.attributes.length;C++){const _=a.attributes[C];if(_){f=_.count;break}}const A=new J0;A.instanceCount=f,A.setIndex(u.getIndex());for(const C in Lo){const _=Lo[C];u.hasAttribute(_)&&A.setAttribute(_,u.getAttribute(_))}const m=new ia(A,h,f);m.frustumCulled=!1,ro.set(0,0,0),ao.set(0,0,0,1),oo.set(1,1,1);for(let C=0;C<f;C++)a.attributes[_n.TRANSLATION]&&ro.fromBufferAttribute(a.attributes[_n.TRANSLATION].attribute,C),a.attributes[_n.ROTATION]&&ao.fromBufferAttribute(a.attributes[_n.ROTATION].attribute,C),a.attributes[_n.SCALE]&&oo.fromBufferAttribute(a.attributes[_n.SCALE].attribute,C),m.setMatrixAt(C,uv.compose(ro,ao,oo));if(a.attributes[_n.LIGHTMAP_OFFSET]){const C=a.attributes[_n.LIGHTMAP_OFFSET].attribute;A.setAttribute("lightMapOffset",new Fs(C.array,C.itemSize,C.normalized,1))}if(a.attributes[_n.LIGHTMAP_SCALE]){const C=a.attributes[_n.LIGHTMAP_SCALE].attribute;A.setAttribute("lightMapScale",new Fs(C.array,C.itemSize,C.normalized,1))}A.setAttribute("instanceReflectionProbeParams",new Fs(new Float32Array(f*3),3,!1,1)),p=m}else p=new Ut(u,h);p.geometry.computeBoundingBox(),p.userData.reflectionProbeParams=new T;const g=(d=l==null?void 0:l.texture)==null?void 0:d.texture;g&&(g.name="Lightmap",g.encoding=sn,g.type=Ze,g.minFilter=Ge,g.generateMipmaps=!1,p.userData.lightMap=l),p.onBeforeRender=(f,A,m,C,_)=>{var R;const E=_,I=E;I.isMatrixMaterial&&I.update(r.elapsed/1e3,p);const S=E;if(S.isHologramMaterial&&S.update(r.elapsed/1e3,f),!E.isMeshStandardMaterial)return;const w=p.userData.lightMap;w&&(E.lightMapIntensity=w.intensity*Math.PI,E.lightMap===null&&w.texture.texture&&(E.needsUpdate=!0),E.lightMap=w.texture.texture||null,E.userData.lightMapTransform.value.setUvTransform(w.offset[0],w.offset[1],w.scale[0],w.scale[1],0,0,0)),E.userData.reflectionProbesMap.value=i.reflectionProbesMap,E.userData.reflectionProbeParams.value.copy(p.userData.reflectionProbeParams);const Q=E.userData.reflectionProbeSampleParams.value,x=((R=i.reflectionProbesMap)==null?void 0:R.image.height)||256,M=Math.log2(x)-2,k=1/(3*Math.max(Math.pow(2,M),7*16)),L=1/x;Q.set(M,k,L),E.uniformsNeedUpdate=!0},s=p}else if(c===He.LINES)s=new Jo(u,h),s.userData.reflectionsNeedUpdate=!1;else if(c===He.LINE_STRIP)s=new sa(u,h),s.userData.reflectionsNeedUpdate=!1;else if(c===He.LINE_LOOP)s=new th(u,h),s.userData.reflectionsNeedUpdate=!1;else if(c===He.POINTS)s=new Ko(u,h),s.userData.reflectionsNeedUpdate=!1;else throw new Error(`Primitive mode ${c} unsupported.`);return s.material.aoMap&&s.geometry.attributes.uv2===void 0&&s.geometry.attributes.uv!==void 0&&s.geometry.setAttribute("uv2",s.geometry.attributes.uv),s.userData.nodeId=e.eid,s}function dv(r,e){r.updateMorphTargets()}function fv(r,e,t){var a;const{tileRendererNodes:n}=De(r,Be),i=t.currentTilesRendererResourceId,s=((a=t.tilesRenderer)==null?void 0:a.eid)||0;if(i!==s&&t.tilesRendererObject){e.remove(t.tilesRendererObject.group),t.tilesRendererObject.dispose(),t.tilesRendererObject=void 0,t.currentTilesRendererResourceId=s;const o=n.indexOf(t);o!==-1&&n.splice(o,1)}t.tilesRenderer&&(t.tilesRendererObject||(t.tilesRendererObject=new iv(t.tilesRenderer.uri),e.add(t.tilesRendererObject.group),n.push(t)),qn(r,t,t.tilesRendererObject.group))}function Av(r,e,t){var a;const n=t.currentUICanvasResourceId,i=((a=t.uiCanvas)==null?void 0:a.eid)||0;if(n!==i&&t.uiCanvas&&t.uiCanvasMesh&&(e.remove(t.uiCanvasMesh),t.uiCanvasMesh.geometry.dispose(),t.uiCanvasMesh.material.map.dispose(),t.uiCanvasMesh.material.dispose(),t.uiCanvasMesh=void 0),t.currentUICanvasResourceId=i,!t.uiCanvas||!t.uiCanvas.root)return;const s=t.uiCanvas;(!t.uiCanvasMesh||!s.canvas)&&(s.canvas=new OffscreenCanvas(s.width,s.height),s.canvasTexture=new P0(s.canvas),s.ctx2d=s.canvas.getContext("2d"),t.uiCanvasMesh=new Ut(new $r(s.size[0],s.size[1]),new Cn({map:s.canvasTexture,transparent:!0,side:fn})),e.add(t.uiCanvasMesh)),ME(r,s)&&(t.uiCanvasMesh.material.map.needsUpdate=!0),qn(r,t,t.uiCanvasMesh)}function pv(r){const{needsResize:e,renderer:t,tileRendererNodes:n}=De(r,Be),i=r.worldResource.activeCameraNode;if(i!=null&&i.cameraObject)for(let s=0;s<n.length;s++){const a=n[s],o=a.tilesRendererObject;if(!o)continue;const l=i.cameraObject;a.tilesRendererCamera!==l&&(o.setCamera(l),o.setResolutionFromRenderer(l,t),a.tilesRendererCamera=l,qn(r,a,o.group)),e&&o.setResolutionFromRenderer(l,t),o.update()}}const lo=new WeakMap;function gv(r){var s,a,o;const e=(s=r.worldResource.environment)==null?void 0:s.publicScene;if(!e)return;const t=De(r,Be),n=$h(r);let i=e.reflectionProbeNeedsUpdate;if(!i){for(let l=0;l<n.length;l++)if(n[l].needsUpdate){i=!0;break}}if(i){let l=!1;const c=[];((o=(a=e.reflectionProbe)==null?void 0:a.reflectionProbeTexture)==null?void 0:o.loadStatus)===tt.Loaded&&e.reflectionProbe.reflectionProbeTexture.texture&&(e.reflectionProbe.reflectionProbeTexture.rgbm&&(l=!0),e.reflectionProbe.textureArrayIndex=c.length,e.reflectionProbeNeedsUpdate=!1,c.push(e.reflectionProbe.reflectionProbeTexture.texture));for(const u of n){const h=u.resource.reflectionProbeTexture;if(!h)throw new Error("Reflection probe texture not yet loaded");h.loadStatus===tt.Loaded&&h.texture&&(u.resource.textureArrayIndex=c.length,u.needsUpdate=!1,c.push(h.texture),h.rgbm&&(l=!0))}if(t.reflectionProbesMap&&t.reflectionProbesMap.dispose(),c.length>0){const u=l?new ce(34.49,2.2):null,h=t.pmremGenerator.fromEquirectangularArray(c,u);lo.set(h.texture,h),t.reflectionProbesMap=h.texture;const d=p=>{const g=p.target,f=lo.get(g);f&&(lo.delete(g),f.dispose()),g.removeEventListener("dispose",d)};h.texture.addEventListener("dispose",d),t.pmremGenerator.dispose()}else t.reflectionProbesMap=null}}const mv=(r,e)=>({create:r,dispose:e,free:[]}),_v=r=>r.free.length?r.free.shift():r.create(),xv=(r,e)=>{r.dispose&&r.dispose(e),r.free.push(e)},di=new Sn,Lr=new T,co=new ge,Pr=new T;function Ev(r){var i;const e=(i=r.worldResource.environment)==null?void 0:i.publicScene;if(!e)return;const t=Xn(r,er),n=$h(r);for(let s=0;s<t.length;s++){const a=t[s];if(a.meshPrimitiveObjects)for(let o=0;o<a.meshPrimitiveObjects.length;o++){const l=a.meshPrimitiveObjects[o];if(l.userData.reflectionsNeedUpdate!==!1)if(a.isStatic&&!a.needsUpdate&&(l.userData.reflectionsNeedUpdate=!1),"isInstancedMesh"in l){const c=l,u=c.geometry.getAttribute("instanceReflectionProbeParams");for(let h=0;h<c.count;h++)c.getMatrixAt(h,co),co.premultiply(c.matrixWorld),l.geometry.boundingBox||l.geometry.computeBoundingBox(),di.copy(l.geometry.boundingBox),di.expandByScalar(.01),di.applyMatrix4(co),_u(di,e,n,Pr),u.setXYZ(h,Pr.x,Pr.y,Pr.z);u.needsUpdate=!0}else{di.setFromObject(l),di.expandByScalar(.01);const c=l.userData.reflectionProbeParams;_u(di,e,n,c)}}}}const uo=new Sn,Qr=new T,Lt=[],mu=mv(()=>({textureArrayIndex:0,intersectionVolume:0})),Cv=(r,e)=>e.intersectionVolume-r.intersectionVolume;function _u(r,e,t,n){var s,a;n.set(0,0,0),Lt.length=0;for(let o=0;o<t.length;o++){const l=t[o];if(r.intersectsBox(l.box)){uo.copy(r),uo.intersect(l.box),uo.getSize(Qr);const c=Qr.x*Qr.y*Qr.z,u=_v(mu);u.textureArrayIndex=l.resource.textureArrayIndex,u.intersectionVolume=c,Lt.push(u)}}Lt.sort(Cv),r.getSize(Lr);const i=Lr.x*Lr.y*Lr.z;n.set((Lt.length>0?Lt[0].textureArrayIndex:(s=e.reflectionProbe)==null?void 0:s.textureArrayIndex)||0,(Lt.length>1?Lt[1].textureArrayIndex:(a=e.reflectionProbe)==null?void 0:a.textureArrayIndex)||0,Lt.length===0?0:Lt.length===1?1-Lt[0].intersectionVolume/i:1-Lt[0].intersectionVolume/(Lt[0].intersectionVolume+Lt[1].intersectionVolume)||0);for(let o=0;o<Lt.length;o++){const l=Lt[o];xv(mu,l)}}function vv(r){const{activeAvatarNode:e,activeCameraNode:t,activeLeftControllerNode:n,activeRightControllerNode:i}=r.worldResource,{renderer:s,xrAvatarRoot:a,scene:o}=De(r,Be),l=s.xr.isPresenting,{cameraPose:c,leftControllerPose:u,rightControllerPose:h}=De(r,Be);if(r.singleConsumerThreadSharedState&&(r.singleConsumerThreadSharedState.useXRViewerWorldMatrix=!1),l){if(!e)return;const d=e.worldMatrix;t&&(t.cameraObject&&t.cameraObject.parent!==a&&a.add(t.cameraObject),qn(r,e,a),c&&(ho(t,c,d),r.singleConsumerThreadSharedState&&(r.singleConsumerThreadSharedState.useXRViewerWorldMatrix=!0,xf(r.singleConsumerThreadSharedState.xrViewerWorldMatrix,d,c.transform.matrix)))),n&&u&&ho(n,u,d),i&&h&&ho(i,h,d)}else if(t){const d=t.cameraObject;d&&d.parent!==o&&o.add(d)}}const xu=new ge,Eu=new ge;function ho(r,e,t){xu.fromArray(t),Eu.fromArray(e.transform.matrix);const n=xu.multiply(Eu);td(r,n);let i=r.firstChild;for(;i;)ed(i,n),i=i.nextSibling}function ed(r,e){const t=r.object3DWorldMatrix.fromArray(r.localMatrix).premultiply(e);td(r,t);let n=r.firstChild;for(;n;)ed(n,t),n=n.nextSibling}function td(r,e){if(r.bone&&qi(r.bone,e),r.cameraObject&&qi(r.cameraObject,e),r.lightObject&&qi(r.lightObject,e),r.meshPrimitiveObjects)for(let t=0;t<r.meshPrimitiveObjects.length;t++){const n=r.meshPrimitiveObjects[t];qi(n,e)}r.reflectionProbeObject&&qi(r.reflectionProbeObject,e),r.tilesRendererObject&&qi(r.tilesRendererObject.group,e)}function qi(r,e){r.matrix.copy(e),r.matrix.decompose(r.position,r.quaternion,r.scale)}function Iv(r){const e=De(r,Be),{render:{frame:t,calls:n,triangles:i,points:s,lines:a},memory:{geometries:o,textures:l},programs:c}=e.renderer.info;r.isStaleFrame?e.staleTripleBufferCounter++:(e.staleTripleBufferCounter>1&&e.staleFrameCounter++,e.staleTripleBufferCounter=0);const h=(performance.now()-r.elapsed)/1e3,d=e.statsBuffer;d.f32[Kt.fps]=1/r.dt,d.f32[Kt.frameTime]=r.dt*1e3,d.f32[Kt.frameDuration]=h,d.u32[Kt.frame]=t,d.u32[Kt.staleFrames]=e.staleFrameCounter,d.u32[Kt.drawCalls]=n,d.u32[Kt.programs]=c?c.length:0,d.u32[Kt.geometries]=o,d.u32[Kt.textures]=l,d.u32[Kt.triangles]=i,d.u32[Kt.points]=s,d.u32[Kt.lines]=a,e.renderer.info.reset()}const yv=180/Math.PI,fi={inputSourceId:0,componentId:0,button:0,xAxis:0,yAxis:0,zAxis:0,wAxis:0,state:0},Mv={wrist:0,"thumb-metacarpal":1,"thumb-phalanx-proximal":2,"thumb-phalanx-distal":3,"thumb-tip":4,"index-finger-metacarpal":5,"index-finger-phalanx-proximal":6,"index-finger-phalanx-intermediate":7,"index-finger-phalanx-distal":8,"index-finger-tip":9,"middle-finger-metacarpal":10,"middle-finger-phalanx-proximal":11,"middle-finger-phalanx-intermediate":12,"middle-finger-phalanx-distal":13,"middle-finger-tip":14,"ring-finger-metacarpal":15,"ring-finger-phalanx-proximal":16,"ring-finger-phalanx-intermediate":17,"ring-finger-phalanx-distal":18,"ring-finger-tip":19,"pinky-finger-metacarpal":20,"pinky-finger-phalanx-proximal":21,"pinky-finger-phalanx-intermediate":22,"pinky-finger-phalanx-distal":23,"pinky-finger-tip":24},Sv={[wt.FaceButton]:Bt.XRFaceButton,[wt.XRStandardTrigger]:Bt.XRStandardTrigger,[wt.XRStandardSqueeze]:Bt.XRStandardSqueeze,[wt.XRStandardThumbstick]:Bt.XRStandardThumbstick,[wt.XRStandardTouchpad]:Bt.XRStandardTouchpad,[wt.Grasp]:Bt.XRHandGrasp,[wt.Touchpad]:Bt.XRTouchpad,[wt.Touchscreen]:Bt.XRTouchscreen,[wt.XButton]:Bt.XRXButton,[wt.YButton]:Bt.XRYButton,[wt.AButton]:Bt.XRAButton,[wt.BButton]:Bt.XRBButton,[wt.Bumper]:Bt.XRBumper,[wt.Thumbrest]:Bt.XRThumbrest,[wt.Menu]:Bt.XRMenu};function bv(r){const e=De(r,Be),{inputSourceItems:t,inputRingBuffer:n,renderer:i}=e;if(e.cameraPose=void 0,e.leftControllerPose=void 0,e.rightControllerPose=void 0,!i.xr.isPresenting)return;const s=i.xr.getFrame();let a=i.xr.getReferenceSpace();if(a){if(e.originalReferenceSpace||(e.originalReferenceSpace=a),e.updateReferenceSpaceHand){const o=wv(t,e.updateReferenceSpaceHand),l=o==null?void 0:o.inputSource.targetRaySpace;if(l){const c=s.getPose(l,e.originalReferenceSpace);if(c){const u=vf(Ef(),c.transform.position);Cf(u,u,yu(0,0,.05));const h=If(El(),c.transform.orientation),d=Sf(h),p=df(El(),0,d*yv,0),g=new XRRigidTransform(yf(u),Mf(p));a=e.originalReferenceSpace.getOffsetReferenceSpace(g),i.xr.setReferenceSpace(a)}}e.updateReferenceSpaceHand=void 0}e.cameraPose=s.getViewerPose(a),e.cameraPose&&ha(e.cameraPoseTripleBuffer).matrix.set(e.cameraPose.transform.matrix);for(const{id:o,inputSource:l,layout:c,controllerPoses:u,handPoses:h}of t){const d=c.components,{gamepad:p,hand:g}=l;if(p)for(const m in d){const C=m,_=d[C];if(_){const E=Sv[C];DE(_,p,fi),ff(n,o,E,fi.button,fi.xAxis,fi.yAxis,fi.zAxis,fi.wAxis,fi.state)||console.warn("input ring buffer full")}}const f=ha(u),A=s.getPose(l.targetRaySpace,a);if(A&&f.rayPose.set(A.transform.matrix),l.gripSpace){const m=s.getPose(l.gripSpace,a);m&&(f.gripPose.set(m.transform.matrix),l.handedness==="left"?e.leftControllerPose=m:l.handedness==="right"&&(e.rightControllerPose=m))}if(g&&s.getJointPose&&h){const m=ha(h);for(const[C,_]of g.entries()){const E=s.getJointPose(_,a);if(E){const I=Mv[C];m.matrices[I].set(E.transform.matrix),m.radii[I]=E.radius||0}}}}}}function wv(r,e){for(let t=0;t<r.length;t++){const n=r[t];if(r[t].inputSource.handedness===e)return n}}const Cu=Af({modules:[sE,Be],systems:[KE,bv,wh,XE,jE,YE,$E,eC,nC,cC,uC,dC,rv,pv,gv,Ev,vv,JE,Iv,ZE,rE]});class Bv extends MessageEvent{constructor(){super(...arguments);ue(this,"transferList")}}class vu{constructor(e,t){ue(this,"started",!1);ue(this,"closed",!1);ue(this,"eventHandlers",new Map);ue(this,"messageQueue",[]);this.messageChannel=e,this.target=t}addEventListener(e,t){let n=this.eventHandlers.get(e);n||(n=[],this.eventHandlers.set(e,n)),n.push(t)}removeEventListener(e,t){const n=this.eventHandlers.get(e);if(!n)return;const i=n.indexOf(t);i!==-1&&n.splice(i,1)}postMessage(e,t){if(this.closed)return;const n=new Bv("message",{data:e});n.transferList=t,this.started?this.messageChannel[this.target].dispatchEvent(n):this.messageQueue.push(n)}dispatchEvent(e){const t=this.eventHandlers.get(e.type);if(t)for(let n=0;n<t.length;n++)t[n](e)}start(){for(this.started=!0;this.messageQueue.length;){const e=this.messageQueue.pop();if(!e)break;this.messageChannel[this.target].dispatchEvent(e)}}close(){this.closed=!0,this.messageQueue.length=0}}class nd{constructor(){ue(this,"port1");ue(this,"port2");this.port1=new vu(this,"port2"),this.port2=new vu(this,"port1")}}class Tv extends nd{constructor(e){super(),e.addEventListener("message",t=>{this.port2.postMessage(t.data)}),this.port2.addEventListener("message",t=>{e.postMessage(t.data,t.transferList)}),this.port2.start()}}function Vv(r,e,t){const n=new Tv(e),i=new nd;return id(i.port1,r,n.port1,t),i.port1.start(),i.port2.start(),i.port2}const Rv=typeof window>"u";Rv&&id(self);function id(r,e,t,n){const i=s=>{if(typeof s.data!="object")return;const{message:a,dest:o}=s.data;o===Ct.Render&&a.type===pf.InitializeRenderWorker&&(r.removeEventListener("message",i),Dv(r,a,e,t,n).catch(console.error))};r.addEventListener("message",i)}async function Dv(r,{gameWorkerMessageTarget:e,gameToRenderTripleBufferFlags:t,renderToGameTripleBufferFlags:n},i,s,a){const o=e||s;function l(d,p,g){d===Ct.Game?o.postMessage({dest:d,message:p},g):d===Ct.Main&&r.postMessage({dest:d,message:p},g)}const c={thread:Ct.Render,canvas:i,gameToRenderTripleBufferFlags:t,renderToGameTripleBufferFlags:n,elapsed:performance.now(),dt:0,messageHandlers:new Map,systems:Cu.systems,modules:new Map,sendMessage:l,worldResource:void 0,isStaleFrame:!1,tick:0,singleConsumerThreadSharedState:a},u=({data:d})=>{if(typeof d!="object")return;const{message:p,dest:g}=d;if(g!==Ct.Render)return;const f=c.messageHandlers.get(p.type);if(f)for(const A of f)A(c,p)};r.addEventListener("message",u),o.addEventListener("message",u);const h=gf(Ct.Render,c,Cu.modules);o.start(),await h,c.worldResource=await mf(()=>(wh(c),Xn(c,bh)[0])),console.log("RenderWorker initialized"),LE(c)}export{Vv as default};
//# sourceMappingURL=RenderWorker-7d643d11.js.map
