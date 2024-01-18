import{R as l,r as f}from"./index-f2bd0723.js";function m(){return(m=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function z(e,r){if(e==null)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r.indexOf(t=a[n])>=0||(o[t]=e[t]);return o}function I(e){var r=f.useRef(e),t=f.useRef(function(n){r.current&&r.current(n)});return r.current=e,t.current}var b=function(e,r,t){return r===void 0&&(r=0),t===void 0&&(t=1),e>t?t:e<r?r:e},E=function(e){return"touches"in e},R=function(e){return e&&e.ownerDocument.defaultView||self},S=function(e,r,t){var n=e.getBoundingClientRect(),o=E(r)?function(a,c){for(var u=0;u<a.length;u++)if(a[u].identifier===c)return a[u];return a[0]}(r.touches,t):r;return{left:b((o.pageX-(n.left+R(e).pageXOffset))/n.width),top:b((o.pageY-(n.top+R(e).pageYOffset))/n.height)}},T=function(e){!E(e)&&e.preventDefault()},j=l.memo(function(e){var r=e.onMove,t=e.onKey,n=z(e,["onMove","onKey"]),o=f.useRef(null),a=I(r),c=I(t),u=f.useRef(null),v=f.useRef(!1),i=f.useMemo(function(){var Q=function(h){T(h),(E(h)?h.touches.length>0:h.buttons>0)&&o.current?a(S(o.current,h,u.current)):N(!1)},U=function(){return N(!1)};function N(h){var d=v.current,p=R(o.current),x=h?p.addEventListener:p.removeEventListener;x(d?"touchmove":"mousemove",Q),x(d?"touchend":"mouseup",U)}return[function(h){var d=h.nativeEvent,p=o.current;if(p&&(T(d),!function(W,Z){return Z&&!E(W)}(d,v.current)&&p)){if(E(d)){v.current=!0;var x=d.changedTouches||[];x.length&&(u.current=x[0].identifier)}p.focus(),a(S(p,d,u.current)),N(!0)}},function(h){var d=h.which||h.keyCode;d<37||d>40||(h.preventDefault(),c({left:d===39?.05:d===37?-.05:0,top:d===40?.05:d===38?-.05:0}))},N]},[c,a]),g=i[0],_=i[1],L=i[2];return f.useEffect(function(){return L},[L]),l.createElement("div",m({},n,{onTouchStart:g,onMouseDown:g,className:"react-colorful__interactive",ref:o,onKeyDown:_,tabIndex:0,role:"slider"}))}),C=function(e){return e.filter(Boolean).join(" ")},D=function(e){var r=e.color,t=e.left,n=e.top,o=n===void 0?.5:n,a=C(["react-colorful__pointer",e.className]);return l.createElement("div",{className:a,style:{top:100*o+"%",left:100*t+"%"}},l.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:r}}))},s=function(e,r,t){return r===void 0&&(r=0),t===void 0&&(t=Math.pow(10,r)),Math.round(t*e)/t},$={grad:.9,turn:360,rad:360/(2*Math.PI)},G=function(e){return H(O(e))},O=function(e){return e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?s(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?s(parseInt(e.substring(6,8),16)/255,2):1}},ee=function(e,r){return r===void 0&&(r="deg"),Number(e)*($[r]||1)},re=function(e){var r=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?te({h:ee(r[1],r[2]),s:Number(r[3]),l:Number(r[4]),a:r[5]===void 0?1:Number(r[5])/(r[6]?100:1)}):{h:0,s:0,v:0,a:1}},te=function(e){var r=e.s,t=e.l;return{h:e.h,s:(r*=(t<50?t:100-t)/100)>0?2*r/(t+r)*100:0,v:t+r,a:e.a}},ne=function(e){return ae(y(e))},P=function(e){var r=e.s,t=e.v,n=e.a,o=(200-r)*t/100;return{h:s(e.h),s:s(o>0&&o<200?r*t/100/(o<=100?o:200-o)*100:0),l:s(o/2),a:s(n,2)}},q=function(e){var r=P(e);return"hsl("+r.h+", "+r.s+"%, "+r.l+"%)"},M=function(e){var r=P(e);return"hsla("+r.h+", "+r.s+"%, "+r.l+"%, "+r.a+")"},y=function(e){var r=e.h,t=e.s,n=e.v,o=e.a;r=r/360*6,t/=100,n/=100;var a=Math.floor(r),c=n*(1-t),u=n*(1-(r-a)*t),v=n*(1-(1-r+a)*t),i=a%6;return{r:s(255*[n,u,c,c,v,n][i]),g:s(255*[v,n,n,u,c,c][i]),b:s(255*[c,c,v,n,n,u][i]),a:s(o,2)}},oe=function(e){var r=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?H({r:Number(r[1])/(r[2]?100/255:1),g:Number(r[3])/(r[4]?100/255:1),b:Number(r[5])/(r[6]?100/255:1),a:r[7]===void 0?1:Number(r[7])/(r[8]?100:1)}):{h:0,s:0,v:0,a:1}},w=function(e){var r=e.toString(16);return r.length<2?"0"+r:r},ae=function(e){var r=e.r,t=e.g,n=e.b,o=e.a,a=o<1?w(s(255*o)):"";return"#"+w(r)+w(t)+w(n)+a},H=function(e){var r=e.r,t=e.g,n=e.b,o=e.a,a=Math.max(r,t,n),c=a-Math.min(r,t,n),u=c?a===r?(t-n)/c:a===t?2+(n-r)/c:4+(r-t)/c:0;return{h:s(60*(u<0?u+6:u)),s:s(a?c/a*100:0),v:s(a/255*100),a:o}},X=l.memo(function(e){var r=e.hue,t=e.onChange,n=C(["react-colorful__hue",e.className]);return l.createElement("div",{className:n},l.createElement(j,{onMove:function(o){t({h:360*o.left})},onKey:function(o){t({h:b(r+360*o.left,0,360)})},"aria-label":"Hue","aria-valuenow":s(r),"aria-valuemax":"360","aria-valuemin":"0"},l.createElement(D,{className:"react-colorful__hue-pointer",left:r/360,color:q({h:r,s:100,v:100,a:1})})))}),Y=l.memo(function(e){var r=e.hsva,t=e.onChange,n={backgroundColor:q({h:r.h,s:100,v:100,a:1})};return l.createElement("div",{className:"react-colorful__saturation",style:n},l.createElement(j,{onMove:function(o){t({s:100*o.left,v:100-100*o.top})},onKey:function(o){t({s:b(r.s+100*o.left,0,100),v:b(r.v-100*o.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+s(r.s)+"%, Brightness "+s(r.v)+"%"},l.createElement(D,{className:"react-colorful__saturation-pointer",top:1-r.v/100,left:r.s/100,color:q(r)})))}),k=function(e,r){if(e===r)return!0;for(var t in e)if(e[t]!==r[t])return!1;return!0},A=function(e,r){return e.replace(/\s/g,"")===r.replace(/\s/g,"")},ue=function(e,r){return e.toLowerCase()===r.toLowerCase()||k(O(e),O(r))};function V(e,r,t){var n=I(t),o=f.useState(function(){return e.toHsva(r)}),a=o[0],c=o[1],u=f.useRef({color:r,hsva:a});f.useEffect(function(){if(!e.equal(r,u.current.color)){var i=e.toHsva(r);u.current={hsva:i,color:r},c(i)}},[r,e]),f.useEffect(function(){var i;k(a,u.current.hsva)||e.equal(i=e.fromHsva(a),u.current.color)||(u.current={hsva:a,color:i},n(i))},[a,e,n]);var v=f.useCallback(function(i){c(function(g){return Object.assign({},g,i)})},[]);return[a,v]}var le=typeof window<"u"?f.useLayoutEffect:f.useEffect,ce=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},B=new Map,F=function(e){le(function(){var r=e.current?e.current.ownerDocument:document;if(r!==void 0&&!B.has(r)){var t=r.createElement("style");t.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,B.set(r,t);var n=ce();n&&t.setAttribute("nonce",n),r.head.appendChild(t)}},[])},J=function(e){var r=e.className,t=e.colorModel,n=e.color,o=n===void 0?t.defaultColor:n,a=e.onChange,c=z(e,["className","colorModel","color","onChange"]),u=f.useRef(null);F(u);var v=V(t,o,a),i=v[0],g=v[1],_=C(["react-colorful",r]);return l.createElement("div",m({},c,{ref:u,className:_}),l.createElement(Y,{hsva:i,onChange:g}),l.createElement(X,{hue:i.h,onChange:g,className:"react-colorful__last-control"}))},ie={defaultColor:"000",toHsva:G,fromHsva:function(e){return ne({h:e.h,s:e.s,v:e.v,a:1})},equal:ue},me=function(e){return l.createElement(J,m({},e,{colorModel:ie}))},se=function(e){var r=e.className,t=e.hsva,n=e.onChange,o={backgroundImage:"linear-gradient(90deg, "+M(Object.assign({},t,{a:0}))+", "+M(Object.assign({},t,{a:1}))+")"},a=C(["react-colorful__alpha",r]),c=s(100*t.a);return l.createElement("div",{className:a},l.createElement("div",{className:"react-colorful__alpha-gradient",style:o}),l.createElement(j,{onMove:function(u){n({a:u.left})},onKey:function(u){n({a:b(t.a+u.left)})},"aria-label":"Alpha","aria-valuetext":c+"%","aria-valuenow":c,"aria-valuemin":"0","aria-valuemax":"100"},l.createElement(D,{className:"react-colorful__alpha-pointer",left:t.a,color:M(t)})))},K=function(e){var r=e.className,t=e.colorModel,n=e.color,o=n===void 0?t.defaultColor:n,a=e.onChange,c=z(e,["className","colorModel","color","onChange"]),u=f.useRef(null);F(u);var v=V(t,o,a),i=v[0],g=v[1],_=C(["react-colorful",r]);return l.createElement("div",m({},c,{ref:u,className:_}),l.createElement(Y,{hsva:i,onChange:g}),l.createElement(X,{hue:i.h,onChange:g}),l.createElement(se,{hsva:i,onChange:g,className:"react-colorful__last-control"}))},fe={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:re,fromHsva:M,equal:A},pe=function(e){return l.createElement(K,m({},e,{colorModel:fe}))},ve={defaultColor:{r:0,g:0,b:0,a:1},toHsva:H,fromHsva:y,equal:k},be=function(e){return l.createElement(K,m({},e,{colorModel:ve}))},de={defaultColor:"rgba(0, 0, 0, 1)",toHsva:oe,fromHsva:function(e){var r=y(e);return"rgba("+r.r+", "+r.g+", "+r.b+", "+r.a+")"},equal:A},_e=function(e){return l.createElement(K,m({},e,{colorModel:de}))},he={defaultColor:{r:0,g:0,b:0},toHsva:function(e){return H({r:e.r,g:e.g,b:e.b,a:1})},fromHsva:function(e){return{r:(r=y(e)).r,g:r.g,b:r.b};var r},equal:k},xe=function(e){return l.createElement(J,m({},e,{colorModel:he}))};export{be as C,_e as H,xe as N,me as Z,pe as u};
//# sourceMappingURL=index-c35eba52.js.map
