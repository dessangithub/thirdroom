import{r}from"./index-f2bd0723.js";import{r as S}from"./index-0a26bc51.js";import{_ as v}from"./extends-98964cd2.js";function g(e,n){typeof e=="function"?e(n):e!=null&&(e.current=n)}function x(...e){return n=>e.forEach(t=>g(t,n))}function P(...e){return r.useCallback(x(...e),e)}function V(e,n=[]){let t=[];function o(s,i){const u=r.createContext(i),f=t.length;t=[...t,i];function a(l){const{scope:d,children:$,...p}=l,y=(d==null?void 0:d[e][f])||u,A=r.useMemo(()=>p,Object.values(p));return r.createElement(y.Provider,{value:A},$)}function m(l,d){const $=(d==null?void 0:d[e][f])||u,p=r.useContext($);if(p)return p;if(i!==void 0)return i;throw new Error(`\`${l}\` must be used within \`${s}\``)}return a.displayName=s+"Provider",[a,m]}const c=()=>{const s=t.map(i=>r.createContext(i));return function(u){const f=(u==null?void 0:u[e])||s;return r.useMemo(()=>({[`__scope${e}`]:{...u,[e]:f}}),[u,f])}};return c.scopeName=e,[o,T(c,...n)]}function T(...e){const n=e[0];if(e.length===1)return n;const t=()=>{const o=e.map(c=>({useScope:c(),scopeName:c.scopeName}));return function(s){const i=o.reduce((u,{useScope:f,scopeName:a})=>{const l=f(s)[`__scope${a}`];return{...u,...l}},{});return r.useMemo(()=>({[`__scope${n.scopeName}`]:i}),[i])}};return t.scopeName=n.scopeName,t}function j(e,n,{checkForDefaultPrevented:t=!0}={}){return function(c){if(e==null||e(c),t===!1||!c.defaultPrevented)return n==null?void 0:n(c)}}function E(e){const n=r.useRef(e);return r.useEffect(()=>{n.current=e}),r.useMemo(()=>(...t)=>{var o;return(o=n.current)===null||o===void 0?void 0:o.call(n,...t)},[])}function F({prop:e,defaultProp:n,onChange:t=()=>{}}){const[o,c]=M({defaultProp:n,onChange:t}),s=e!==void 0,i=s?e:o,u=E(t),f=r.useCallback(a=>{if(s){const l=typeof a=="function"?a(e):a;l!==e&&u(l)}else c(a)},[s,e,c,u]);return[i,f]}function M({defaultProp:e,onChange:n}){const t=r.useState(e),[o]=t,c=r.useRef(o),s=E(n);return r.useEffect(()=>{c.current!==o&&(s(o),c.current=o)},[o,c,s]),t}const O=globalThis!=null&&globalThis.document?r.useLayoutEffect:()=>{};function W(e){const[n,t]=r.useState(void 0);return O(()=>{if(e){t({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(c=>{if(!Array.isArray(c)||!c.length)return;const s=c[0];let i,u;if("borderBoxSize"in s){const f=s.borderBoxSize,a=Array.isArray(f)?f[0]:f;i=a.inlineSize,u=a.blockSize}else i=e.offsetWidth,u=e.offsetHeight;t({width:i,height:u})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else t(void 0)},[e]),n}const N=globalThis!=null&&globalThis.document?r.useLayoutEffect:()=>{};function R(e,n){return r.useReducer((t,o)=>{const c=n[t][o];return c??t},e)}const w=e=>{const{present:n,children:t}=e,o=_(n),c=typeof t=="function"?t({present:o.isPresent}):r.Children.only(t),s=P(o.ref,c.ref);return typeof t=="function"||o.isPresent?r.cloneElement(c,{ref:s}):null};w.displayName="Presence";function _(e){const[n,t]=r.useState(),o=r.useRef({}),c=r.useRef(e),s=r.useRef("none"),i=e?"mounted":"unmounted",[u,f]=R(i,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return r.useEffect(()=>{const a=h(o.current);s.current=u==="mounted"?a:"none"},[u]),N(()=>{const a=o.current,m=c.current;if(m!==e){const d=s.current,$=h(a);e?f("MOUNT"):$==="none"||(a==null?void 0:a.display)==="none"?f("UNMOUNT"):f(m&&d!==$?"ANIMATION_OUT":"UNMOUNT"),c.current=e}},[e,f]),N(()=>{if(n){const a=l=>{const $=h(o.current).includes(l.animationName);l.target===n&&$&&S.flushSync(()=>f("ANIMATION_END"))},m=l=>{l.target===n&&(s.current=h(o.current))};return n.addEventListener("animationstart",m),n.addEventListener("animationcancel",a),n.addEventListener("animationend",a),()=>{n.removeEventListener("animationstart",m),n.removeEventListener("animationcancel",a),n.removeEventListener("animationend",a)}}else f("ANIMATION_END")},[n,f]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:r.useCallback(a=>{a&&(o.current=getComputedStyle(a)),t(a)},[])}}function h(e){return(e==null?void 0:e.animationName)||"none"}const C=r.forwardRef((e,n)=>{const{children:t,...o}=e,c=r.Children.toArray(t),s=c.find(z);if(s){const i=s.props.children,u=c.map(f=>f===s?r.Children.count(i)>1?r.Children.only(null):r.isValidElement(i)?i.props.children:null:f);return r.createElement(b,v({},o,{ref:n}),r.isValidElement(i)?r.cloneElement(i,void 0,u):null)}return r.createElement(b,v({},o,{ref:n}),t)});C.displayName="Slot";const b=r.forwardRef((e,n)=>{const{children:t,...o}=e;return r.isValidElement(t)?r.cloneElement(t,{...I(o,t.props),ref:x(n,t.ref)}):r.Children.count(t)>1?r.Children.only(null):null});b.displayName="SlotClone";const U=({children:e})=>r.createElement(r.Fragment,null,e);function z(e){return r.isValidElement(e)&&e.type===U}function I(e,n){const t={...n};for(const o in n){const c=e[o],s=n[o];/^on[A-Z]/.test(o)?c&&s?t[o]=(...u)=>{s(...u),c(...u)}:c&&(t[o]=c):o==="style"?t[o]={...c,...s}:o==="className"&&(t[o]=[c,s].filter(Boolean).join(" "))}return{...e,...t}}const L=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"],H=L.reduce((e,n)=>{const t=r.forwardRef((o,c)=>{const{asChild:s,...i}=o,u=s?C:n;return r.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),r.createElement(u,v({},i,{ref:c}))});return t.displayName=`Primitive.${n}`,{...e,[n]:t}},{});function Z(e,n){e&&S.flushSync(()=>e.dispatchEvent(n))}export{V as $,P as a,F as b,H as c,j as d,w as e,W as f,Z as g,x as h};
//# sourceMappingURL=index.module-4c22cd19.js.map
