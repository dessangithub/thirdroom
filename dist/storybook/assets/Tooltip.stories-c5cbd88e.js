import{a as v,j as M}from"./jsx-runtime-06a742f9.js";import{c as z}from"./index-f9f0573c.js";import{a as G,u as J,P as Q}from"./index.module-97271be0.js";import{S as q,a as X}from"./index.module-3f7deb99.js";import{r as e}from"./index-f2bd0723.js";import{_ as b}from"./extends-98964cd2.js";import{l as B,C as Y,u as Z,R as ee,A as oe,a as ne}from"./index.module-2bb560d0.js";import{u as x}from"./index.module-b8f4923b.js";import{u as A}from"./index.module-a2f32e93.js";import{T as te}from"./Text-9cbc10ca.js";import{I as N}from"./IconButton-5b313af7.js";import{H as k}from"./home-c9d62890.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-0a26bc51.js";import"./Icon-341303e8.js";const re=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"].reduce((o,t)=>({...o,[t]:e.forwardRef((l,r)=>{const{asChild:n,...i}=l,a=n?q:t;return e.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),e.createElement(a,b({},i,{ref:r}))})}),{}),le=e.forwardRef((o,t)=>e.createElement(re.span,b({},o,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...o.style}}))),ce=le,ie=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"].reduce((o,t)=>({...o,[t]:e.forwardRef((l,r)=>{const{asChild:n,...i}=l,a=n?q:t;return e.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),e.createElement(a,b({},i,{ref:r}))})}),{});function ae(...o){return t=>o.forEach(l=>function(r,n){typeof r=="function"?r(n):r!=null&&(r.current=n)}(l,t))}function j(...o){return e.useCallback(ae(...o),o)}const F=o=>{const{present:t,children:l}=o,r=function(a){const[c,s]=e.useState(),d=e.useRef({}),u=e.useRef(a),f=e.useRef("none"),m=a?"mounted":"unmounted",[h,T]=function(p,E){return e.useReducer((C,g)=>{const _=E[C][g];return _??C},p)}(m,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return e.useEffect(()=>{const p=S(d.current);f.current=h==="mounted"?p:"none"},[h]),x(()=>{const p=d.current,E=u.current;if(E!==a){const C=f.current,g=S(p);a?T("MOUNT"):g==="none"||(p==null?void 0:p.display)==="none"?T("UNMOUNT"):T(E&&C!==g?"ANIMATION_OUT":"UNMOUNT"),u.current=a}},[a,T]),x(()=>{if(c){const p=C=>{const g=S(d.current).includes(C.animationName);C.target===c&&g&&T("ANIMATION_END")},E=C=>{C.target===c&&(f.current=S(d.current))};return c.addEventListener("animationstart",E),c.addEventListener("animationcancel",p),c.addEventListener("animationend",p),()=>{c.removeEventListener("animationstart",E),c.removeEventListener("animationcancel",p),c.removeEventListener("animationend",p)}}T("ANIMATION_END")},[c,T]),{isPresent:["mounted","unmountSuspended"].includes(h),ref:e.useCallback(p=>{p&&(d.current=getComputedStyle(p)),s(p)},[])}}(t),n=typeof l=="function"?l({present:r.isPresent}):e.Children.only(l),i=j(r.ref,n.ref);return typeof l=="function"||r.isPresent?e.cloneElement(n,{ref:i}):null};function S(o){return(o==null?void 0:o.animationName)||"none"}F.displayName="Presence";function L(o){const t=e.useRef({value:o,previous:o});return e.useMemo(()=>(t.current.value!==o&&(t.current.previous=t.current.value,t.current.value=o),t.current.previous),[o])}function se({prop:o,defaultProp:t,onChange:l=()=>{}}){const[r,n]=function({defaultProp:s,onChange:d}){const u=e.useState(s),[f]=u,m=e.useRef(f),h=A(d);return e.useEffect(()=>{m.current!==f&&(h(f),m.current=f)},[f,m,h]),u}({defaultProp:t,onChange:l}),i=o!==void 0,a=i?o:r,c=A(l);return[a,e.useCallback(s=>{if(i){const d=s,u=typeof s=="function"?d(o):s;u!==o&&c(u)}else n(s)},[i,o,n,c])]}function ue(o,t=[]){let l=[];const r=()=>{const n=l.map(i=>e.createContext(i));return function(i){const a=(i==null?void 0:i[o])||n;return e.useMemo(()=>({[`__scope${o}`]:{...i,[o]:a}}),[i,a])}};return r.scopeName=o,[function(n,i){const a=e.createContext(i),c=l.length;function s(d){const{scope:u,children:f,...m}=d,h=(u==null?void 0:u[o][c])||a,T=e.useMemo(()=>m,Object.values(m));return e.createElement(h.Provider,{value:T},f)}return l=[...l,i],s.displayName=n+"Provider",[s,function(d,u){const f=(u==null?void 0:u[o][c])||a,m=e.useContext(f);if(m)return m;if(i!==void 0)return i;throw new Error(`\`${d}\` must be used within \`${n}\``)}]},de(r,...t)]}function de(...o){const t=o[0];if(o.length===1)return t;const l=()=>{const r=o.map(n=>({useScope:n(),scopeName:n.scopeName}));return function(n){const i=r.reduce((a,{useScope:c,scopeName:s})=>({...a,...c(n)[`__scope${s}`]}),{});return e.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return l.scopeName=t.scopeName,l}function y(o,t,{checkForDefaultPrevented:l=!0}={}){return function(r){if(o==null||o(r),l===!1||!r.defaultPrevented)return t==null?void 0:t(r)}}const[K,qe]=ue("Tooltip",[B]),I=B(),W=700,[pe,me]=K("TooltipProvider",{isOpenDelayed:!0,delayDuration:W,onOpen:()=>{},onClose:()=>{}}),fe=o=>{const{__scopeTooltip:t,delayDuration:l=W,skipDelayDuration:r=300,children:n}=o,[i,a]=e.useState(!0),c=e.useRef(0);return e.useEffect(()=>{const s=c.current;return()=>window.clearTimeout(s)},[]),e.createElement(pe,{scope:t,isOpenDelayed:i,delayDuration:l,onOpen:e.useCallback(()=>{window.clearTimeout(c.current),a(!1)},[]),onClose:e.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>a(!0),r)},[r])},n)},[ve,R]=K("Tooltip"),Te=o=>{const{__scopeTooltip:t,children:l,open:r,defaultOpen:n=!1,onOpenChange:i,delayDuration:a}=o,c=me("Tooltip",t),s=I(t),[d,u]=e.useState(null),f=J(),m=e.useRef(0),h=a??c.delayDuration,T=e.useRef(!1),{onOpen:p,onClose:E}=c,[C=!1,g]=se({prop:r,defaultProp:n,onChange:P=>{P&&(document.dispatchEvent(new CustomEvent("tooltip.open")),p()),i==null||i(P)}}),_=e.useMemo(()=>C?T.current?"delayed-open":"instant-open":"closed",[C]),O=e.useCallback(()=>{window.clearTimeout(m.current),T.current=!1,g(!0)},[g]),D=e.useCallback(()=>{window.clearTimeout(m.current),m.current=window.setTimeout(()=>{T.current=!0,g(!0)},h)},[h,g]);return e.useEffect(()=>()=>window.clearTimeout(m.current),[]),e.createElement(ee,s,e.createElement(ve,{scope:t,contentId:f,open:C,stateAttribute:_,trigger:d,onTriggerChange:u,onTriggerEnter:e.useCallback(()=>{c.isOpenDelayed?D():O()},[c.isOpenDelayed,D,O]),onOpen:e.useCallback(O,[O]),onClose:e.useCallback(()=>{window.clearTimeout(m.current),g(!1),E()},[g,E])},l))},Ce=e.forwardRef((o,t)=>{const{__scopeTooltip:l,...r}=o,n=R("TooltipTrigger",l),i=I(l),a=j(t,n.onTriggerChange),c=e.useRef(!1),s=e.useCallback(()=>c.current=!1,[]);return e.useEffect(()=>()=>document.removeEventListener("mouseup",s),[s]),e.createElement(oe,b({asChild:!0},i),e.createElement(ie.button,b({"aria-describedby":n.open?n.contentId:void 0,"data-state":n.stateAttribute},r,{ref:a,onMouseEnter:y(o.onMouseEnter,n.onTriggerEnter),onMouseLeave:y(o.onMouseLeave,n.onClose),onMouseDown:y(o.onMouseDown,()=>{n.onClose(),c.current=!0,document.addEventListener("mouseup",s,{once:!0})}),onFocus:y(o.onFocus,()=>{c.current||n.onOpen()}),onBlur:y(o.onBlur,n.onClose),onClick:y(o.onClick,d=>{d.detail===0&&n.onClose()})})))}),ge=e.forwardRef((o,t)=>{const{forceMount:l,...r}=o,n=R("TooltipContent",o.__scopeTooltip);return e.createElement(F,{present:l||n.open},e.createElement(he,b({ref:t},r)))}),he=e.forwardRef((o,t)=>{const{__scopeTooltip:l,children:r,"aria-label":n,portalled:i=!0,...a}=o,c=R("TooltipContent",l),s=I(l),d=i?Q:e.Fragment,{onClose:u}=c;return G(()=>u()),e.useEffect(()=>(document.addEventListener("tooltip.open",u),()=>document.removeEventListener("tooltip.open",u)),[u]),e.createElement(d,null,e.createElement(we,{__scopeTooltip:l}),e.createElement(Y,b({"data-state":c.stateAttribute},s,a,{ref:t,style:{...a.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)"}}),e.createElement(X,null,r),e.createElement(ce,{id:c.contentId,role:"tooltip"},n||r)))}),Ee=e.forwardRef((o,t)=>{const{__scopeTooltip:l,...r}=o,n=I(l);return e.createElement(ne,b({},n,r,{ref:t}))});function we(o){const{__scopeTooltip:t}=o,l=R("CheckTriggerMoved",t),r=Z(l.trigger),n=r==null?void 0:r.left,i=L(n),a=r==null?void 0:r.top,c=L(a),s=l.onClose;return e.useEffect(()=>{(i!==void 0&&i!==n||c!==void 0&&c!==a)&&s()},[s,i,c,n,a]),null}const be=fe,ye=Te,_e=Ce,Ne=Ee;function w({className:o,content:t,side:l="bottom",align:r="center",delayDuration:n=400,defaultOpen:i,open:a,onOpenChange:c,portalled:s=!0,children:d}){const u=z("Tooltip",o);return v(be,{delayDuration:400,children:M(ye,{delayDuration:n,defaultOpen:i,open:a,onOpenChange:c,children:[v(_e,{className:"Tooltip__trigger",asChild:!0,children:v("span",{children:d})}),M(ge,{className:u,sideOffset:8,side:l,align:r,portalled:s,children:[typeof t=="string"?v(te,{variant:"b2",color:"tooltip",weight:"medium",children:t}):t,v(Ne,{className:"Tooltip__arrow",height:5,width:10,offset:8})]})]})})}try{w.displayName="Tooltip",w.__docgenInfo={description:"",displayName:"Tooltip",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},side:{defaultValue:{value:"bottom"},description:"",name:"side",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'}]}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'}]}},delayDuration:{defaultValue:{value:"400"},description:"",name:"delayDuration",required:!1,type:{name:"number"}},defaultOpen:{defaultValue:null,description:"",name:"defaultOpen",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}},portalled:{defaultValue:{value:"true"},description:"",name:"portalled",required:!1,type:{name:"boolean"}}}}}catch{}const Be={title:"Tooltip",component:w};function H(){return M("div",{className:"flex",children:[v(w,{content:"Home",side:"left",children:v(N,{label:"Home",iconSrc:k,onClick:()=>console.log("clicked")})}),v(w,{content:"Home",side:"top",children:v(N,{label:"Home",iconSrc:k,onClick:()=>console.log("clicked")})}),v(w,{content:"Home",children:v(N,{label:"Home",iconSrc:k,onClick:()=>console.log("clicked")})}),v(w,{content:"Home",side:"left",children:v(N,{label:"Home",iconSrc:k,onClick:()=>console.log("clicked")})}),v(w,{content:"Home",side:"right",open:!0,children:v(N,{label:"Home",iconSrc:k,onClick:()=>console.log("clicked")})})]})}var U,$,V;H.parameters={...H.parameters,docs:{...(U=H.parameters)==null?void 0:U.docs,source:{originalSource:`function TooltipStories() {
  return <div className="flex">\r
      <Tooltip content="Home" side="left">\r
        <IconButton label="Home" iconSrc={HomeIC} onClick={() => console.log("clicked")} />\r
      </Tooltip>\r
      <Tooltip content="Home" side="top">\r
        <IconButton label="Home" iconSrc={HomeIC} onClick={() => console.log("clicked")} />\r
      </Tooltip>\r
      <Tooltip content="Home">\r
        <IconButton label="Home" iconSrc={HomeIC} onClick={() => console.log("clicked")} />\r
      </Tooltip>\r
      <Tooltip content="Home" side="left">\r
        <IconButton label="Home" iconSrc={HomeIC} onClick={() => console.log("clicked")} />\r
      </Tooltip>\r
      <Tooltip content="Home" side="right" open={true}>\r
        <IconButton label="Home" iconSrc={HomeIC} onClick={() => console.log("clicked")} />\r
      </Tooltip>\r
    </div>;
}`,...(V=($=H.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};const je=["TooltipStories"];export{H as TooltipStories,je as __namedExportsOrder,Be as default};
//# sourceMappingURL=Tooltip.stories-c5cbd88e.js.map
