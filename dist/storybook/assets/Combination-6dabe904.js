import{r as i}from"./index-f2bd0723.js";var ee=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},R=new WeakMap,M=new WeakMap,W={},N=0,Ne=function(e,t,r){t===void 0&&(t=ee(e)),r===void 0&&(r="data-aria-hidden");var n=Array.isArray(e)?e:[e];W[r]||(W[r]=new WeakMap);var a=W[r],o=[],l=new Set,u=function(f){!f||l.has(f)||(l.add(f),u(f.parentNode))};n.forEach(u);var v=function(f){!f||n.indexOf(f)>=0||Array.prototype.forEach.call(f.children,function(s){if(l.has(s))v(s);else{var h=s.getAttribute("aria-hidden"),p=h!==null&&h!=="false",b=(R.get(s)||0)+1,S=(a.get(s)||0)+1;R.set(s,b),a.set(s,S),o.push(s),b===1&&p&&M.set(s,!0),S===1&&s.setAttribute(r,"true"),p||s.setAttribute("aria-hidden","true")}})};return v(t),l.clear(),N++,function(){o.forEach(function(f){var s=R.get(f)-1,h=a.get(f)-1;R.set(f,s),a.set(f,h),s||(M.has(f)||f.removeAttribute("aria-hidden"),M.delete(f)),h||f.removeAttribute(r)}),N--,N||(R=new WeakMap,R=new WeakMap,M=new WeakMap,W={})}},E=function(){return E=Object.assign||function(t){for(var r,n=1,a=arguments.length;n<a;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},E.apply(this,arguments)};function te(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r}function re(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,o;n<a;n++)(o||!(n in t))&&(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}var L="right-scroll-bar-position",T="width-before-scroll-bar",ne="with-scroll-bars-hidden",ae="--removed-body-scroll-bar-size";function oe(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function ce(e,t){var r=i.useState(function(){return{value:e,callback:t,facade:{get current(){return r.value},set current(n){var a=r.value;a!==n&&(r.value=n,r.callback(n,a))}}}})[0];return r.callback=t,r.facade}function ie(e,t){return ce(t||null,function(r){return e.forEach(function(n){return oe(n,r)})})}var j=function(){return j=Object.assign||function(t){for(var r,n=1,a=arguments.length;n<a;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},j.apply(this,arguments)};function le(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r}function ue(e){return e}function fe(e,t){t===void 0&&(t=ue);var r=[],n=!1,a={read:function(){if(n)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:e},useMedium:function(o){var l=t(o,n);return r.push(l),function(){r=r.filter(function(u){return u!==l})}},assignSyncMedium:function(o){for(n=!0;r.length;){var l=r;r=[],l.forEach(o)}r={push:function(u){return o(u)},filter:function(){return r}}},assignMedium:function(o){n=!0;var l=[];if(r.length){var u=r;r=[],u.forEach(o),l=r}var v=function(){var s=l;l=[],s.forEach(o)},f=function(){return Promise.resolve().then(v)};f(),r={push:function(s){l.push(s),f()},filter:function(s){return l=l.filter(s),r}}}};return a}function se(e){e===void 0&&(e={});var t=fe(null);return t.options=j({async:!0,ssr:!1},e),t}var F=function(e){var t=e.sideCar,r=le(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var n=t.read();if(!n)throw new Error("Sidecar medium not found");return i.createElement(n,j({},r))};F.isSideCarExport=!0;function de(e,t){return e.useMedium(t),F}var Q=se(),X=function(){},I=i.forwardRef(function(e,t){var r=i.useRef(null),n=i.useState({onScrollCapture:X,onWheelCapture:X,onTouchMoveCapture:X}),a=n[0],o=n[1],l=e.forwardProps,u=e.children,v=e.className,f=e.removeScrollBar,s=e.enabled,h=e.shards,p=e.sideCar,b=e.noIsolation,S=e.inert,c=e.allowPinchZoom,d=e.as,m=d===void 0?"div":d,w=te(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),y=p,C=ie([r,t]),g=E(E({},w),a);return i.createElement(i.Fragment,null,s&&i.createElement(y,{sideCar:Q,removeScrollBar:f,shards:h,noIsolation:b,inert:S,setCallbacks:o,allowPinchZoom:!!c,lockRef:r}),l?i.cloneElement(i.Children.only(u),E(E({},g),{ref:C})):i.createElement(m,E({},g,{className:v,ref:C}),u))});I.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};I.classNames={fullWidth:T,zeroRight:L};var V,ve=function(){if(V)return V;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function he(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=ve();return t&&e.setAttribute("nonce",t),e}function ge(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function me(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var ye=function(){var e=0,t=null;return{add:function(r){e==0&&(t=he())&&(ge(t,r),me(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},pe=function(){var e=ye();return function(t,r){i.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&r])}},G=function(){var e=pe(),t=function(r){var n=r.styles,a=r.dynamic;return e(n,a),null};return t},be={left:0,top:0,right:0,gap:0},Y=function(e){return parseInt(e||"",10)||0},Se=function(e){var t=window.getComputedStyle(document.body),r=t[e==="padding"?"paddingLeft":"marginLeft"],n=t[e==="padding"?"paddingTop":"marginTop"],a=t[e==="padding"?"paddingRight":"marginRight"];return[Y(r),Y(n),Y(a)]},we=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return be;var t=Se(e),r=document.documentElement.clientWidth,n=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,n-r+t[2]-t[0])}},Ce=G(),Ee=function(e,t,r,n){var a=e.left,o=e.top,l=e.right,u=e.gap;return r===void 0&&(r="margin"),`
  .`.concat(ne,` {
   overflow: hidden `).concat(n,`;
   padding-right: `).concat(u,"px ").concat(n,`;
  }
  body {
    overflow: hidden `).concat(n,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(n,";"),r==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(o,`px;
    padding-right: `).concat(l,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(u,"px ").concat(n,`;
    `),r==="padding"&&"padding-right: ".concat(u,"px ").concat(n,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(L,` {
    right: `).concat(u,"px ").concat(n,`;
  }
  
  .`).concat(T,` {
    margin-right: `).concat(u,"px ").concat(n,`;
  }
  
  .`).concat(L," .").concat(L,` {
    right: 0 `).concat(n,`;
  }
  
  .`).concat(T," .").concat(T,` {
    margin-right: 0 `).concat(n,`;
  }
  
  body {
    `).concat(ae,": ").concat(u,`px;
  }
`)},Re=function(e){var t=e.noRelative,r=e.noImportant,n=e.gapMode,a=n===void 0?"margin":n,o=i.useMemo(function(){return we(a)},[a]);return i.createElement(Ce,{styles:Ee(o,!t,a,r?"":"!important")})},D=!1;if(typeof window<"u")try{var A=Object.defineProperty({},"passive",{get:function(){return D=!0,!0}});window.addEventListener("test",A,A),window.removeEventListener("test",A,A)}catch{D=!1}var k=D?{passive:!1}:!1,ke=function(e){return e.tagName==="TEXTAREA"},K=function(e,t){var r=window.getComputedStyle(e);return r[t]!=="hidden"&&!(r.overflowY===r.overflowX&&!ke(e)&&r[t]==="visible")},Pe=function(e){return K(e,"overflowY")},Oe=function(e){return K(e,"overflowX")},$=function(e,t){var r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var n=q(e,r);if(n){var a=J(e,r),o=a[1],l=a[2];if(o>l)return!0}r=r.parentNode}while(r&&r!==document.body);return!1},xe=function(e){var t=e.scrollTop,r=e.scrollHeight,n=e.clientHeight;return[t,r,n]},Me=function(e){var t=e.scrollLeft,r=e.scrollWidth,n=e.clientWidth;return[t,r,n]},q=function(e,t){return e==="v"?Pe(t):Oe(t)},J=function(e,t){return e==="v"?xe(t):Me(t)},We=function(e,t){return e==="h"&&t==="rtl"?-1:1},Ae=function(e,t,r,n,a){var o=We(e,window.getComputedStyle(t).direction),l=o*n,u=r.target,v=t.contains(u),f=!1,s=l>0,h=0,p=0;do{var b=J(e,u),S=b[0],c=b[1],d=b[2],m=c-d-o*S;(S||m)&&q(e,u)&&(h+=m,p+=S),u=u.parentNode}while(!v&&u!==document.body||v&&(t.contains(u)||t===u));return(s&&(a&&h===0||!a&&l>h)||!s&&(a&&p===0||!a&&-l>p))&&(f=!0),f},B=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},z=function(e){return[e.deltaX,e.deltaY]},Z=function(e){return e&&"current"in e?e.current:e},Be=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Le=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Te=0,P=[];function je(e){var t=i.useRef([]),r=i.useRef([0,0]),n=i.useRef(),a=i.useState(Te++)[0],o=i.useState(function(){return G()})[0],l=i.useRef(e);i.useEffect(function(){l.current=e},[e]),i.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var c=re([e.lockRef.current],(e.shards||[]).map(Z),!0).filter(Boolean);return c.forEach(function(d){return d.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),c.forEach(function(d){return d.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var u=i.useCallback(function(c,d){if("touches"in c&&c.touches.length===2)return!l.current.allowPinchZoom;var m=B(c),w=r.current,y="deltaX"in c?c.deltaX:w[0]-m[0],C="deltaY"in c?c.deltaY:w[1]-m[1],g,_=c.target,O=Math.abs(y)>Math.abs(C)?"h":"v";if("touches"in c&&O==="h"&&_.type==="range")return!1;var x=$(O,_);if(!x)return!0;if(x?g=O:(g=O==="v"?"h":"v",x=$(O,_)),!x)return!1;if(!n.current&&"changedTouches"in c&&(y||C)&&(n.current=g),!g)return!0;var H=n.current||g;return Ae(H,d,c,H==="h"?y:C,!0)},[]),v=i.useCallback(function(c){var d=c;if(!(!P.length||P[P.length-1]!==o)){var m="deltaY"in d?z(d):B(d),w=t.current.filter(function(g){return g.name===d.type&&g.target===d.target&&Be(g.delta,m)})[0];if(w&&w.should){d.cancelable&&d.preventDefault();return}if(!w){var y=(l.current.shards||[]).map(Z).filter(Boolean).filter(function(g){return g.contains(d.target)}),C=y.length>0?u(d,y[0]):!l.current.noIsolation;C&&d.cancelable&&d.preventDefault()}}},[]),f=i.useCallback(function(c,d,m,w){var y={name:c,delta:d,target:m,should:w};t.current.push(y),setTimeout(function(){t.current=t.current.filter(function(C){return C!==y})},1)},[]),s=i.useCallback(function(c){r.current=B(c),n.current=void 0},[]),h=i.useCallback(function(c){f(c.type,z(c),c.target,u(c,e.lockRef.current))},[]),p=i.useCallback(function(c){f(c.type,B(c),c.target,u(c,e.lockRef.current))},[]);i.useEffect(function(){return P.push(o),e.setCallbacks({onScrollCapture:h,onWheelCapture:h,onTouchMoveCapture:p}),document.addEventListener("wheel",v,k),document.addEventListener("touchmove",v,k),document.addEventListener("touchstart",s,k),function(){P=P.filter(function(c){return c!==o}),document.removeEventListener("wheel",v,k),document.removeEventListener("touchmove",v,k),document.removeEventListener("touchstart",s,k)}},[]);var b=e.removeScrollBar,S=e.inert;return i.createElement(i.Fragment,null,S?i.createElement(o,{styles:Le(a)}):null,b?i.createElement(Re,{gapMode:"margin"}):null)}const Ie=de(Q,je);var U=i.forwardRef(function(e,t){return i.createElement(I,E({},e,{ref:t,sideCar:Ie}))});U.classNames=I.classNames;const Xe=U;export{Xe as $,Ne as h};
//# sourceMappingURL=Combination-6dabe904.js.map
