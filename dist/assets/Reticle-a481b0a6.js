import{f as Jo,r as c,m as an,k as nt,o as Le,_ as G,a as u,c as te,j as $,T as U,F as H,S as Mt,U as F,$ as Zo,V as ei,b as ti,B as mt,D as Wr,x as ni,W as ri,P as oi}from"./main.cc7980d7.js";import{b as Me,i as Vn,E as ii,k as Br,l as sn,m as at,n as Bt,s as qn,o as An,H as ie,p as De,q as ai,t as si,v as ci,w as li,x as ui,y as di,z as fi,A as hi,B as pi,C as mi,D as Kn,F as gi,G as vi,J as bi,K as yi,N as Xn,O as Rn,Q as ve,S as wi,I as J,c as Ti,r as Yn,T as xi}from"./editor-9e67c00a.js";import{i as we,c as Si,_ as Qn,L as jr,S as Pn,$ as Gr,d as Se,e as qe,f as Ce,g as Ci,C as Ii,M as Ei,P,b as cn,A as Ai,T as st,l as Ri,h as Ke}from"./mouse-left-107cf13e.js";import{a as Re,I as B,h as Pi,$ as Mi,C as ct,S as Hr,D as Vr}from"./DropdownMenu-c9ddf01c.js";import{L as ee}from"./Label-b8166eab.js";import{I as $t,D as $i}from"./index.module-9a456540.js";import{e as Oi,f as Qe,u as ln,h as qr,j as Jn,k as Kr,m as Xr,n as ki}from"./common-1b4c5772.js";import{s as _i,a as Di}from"./math-0381bedb.js";import{C as Ni,A as Li}from"./cross-0b515b96.js";import{S as jt}from"./SettingTile-abd8ecde.js";var zi=function e(t,n){if(t===n)return!0;if(t&&n&&typeof t=="object"&&typeof n=="object"){if(t.constructor!==n.constructor)return!1;var r,o,i;if(Array.isArray(t)){if(r=t.length,r!=n.length)return!1;for(o=r;o--!==0;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if(i=Object.keys(t),r=i.length,r!==Object.keys(n).length)return!1;for(o=r;o--!==0;)if(!Object.prototype.hasOwnProperty.call(n,i[o]))return!1;for(o=r;o--!==0;){var s=i[o];if(!e(t[s],n[s]))return!1}return!0}return t!==t&&n!==n};const Ui=Jo(zi),Pe=typeof window<"u"?c.useLayoutEffect:c.useEffect;function Fi(e,t,n){const[r,o]=c.useState(()=>t(e)),i=c.useCallback(()=>{const s=t(e);Ui(r,s)||(o(s),n&&n())},[r,e,n]);return Pe(i),[r,i]}function Wi(e,t,n){const[r,o]=Fi(e,t,n);return Pe(function(){const s=e.getHandlerId();if(s!=null)return e.subscribeToStateChange(o,{handlerIds:[s]})},[e,o]),r}function Yr(e,t,n){return Wi(t,e||(()=>({})),()=>n.reconnect())}function Qr(e,t){const n=[...t||[]];return t==null&&typeof e!="function"&&n.push(e),c.useMemo(()=>typeof e=="function"?e():e,n)}function Bi(e){return c.useMemo(()=>e.hooks.dragSource(),[e])}function ji(e){return c.useMemo(()=>e.hooks.dragPreview(),[e])}let Gt=!1,Ht=!1;class Gi{receiveHandlerId(t){this.sourceId=t}getHandlerId(){return this.sourceId}canDrag(){we(!Gt,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return Gt=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{Gt=!1}}isDragging(){if(!this.sourceId)return!1;we(!Ht,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return Ht=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{Ht=!1}}subscribeToStateChange(t,n){return this.internalMonitor.subscribeToStateChange(t,n)}isDraggingSource(t){return this.internalMonitor.isDraggingSource(t)}isOverTarget(t,n){return this.internalMonitor.isOverTarget(t,n)}getTargetIds(){return this.internalMonitor.getTargetIds()}isSourcePublic(){return this.internalMonitor.isSourcePublic()}getSourceId(){return this.internalMonitor.getSourceId()}subscribeToOffsetChange(t){return this.internalMonitor.subscribeToOffsetChange(t)}canDragSource(t){return this.internalMonitor.canDragSource(t)}canDropOnTarget(t){return this.internalMonitor.canDropOnTarget(t)}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(t){this.sourceId=null,this.internalMonitor=t.getMonitor()}}let Vt=!1;class Hi{receiveHandlerId(t){this.targetId=t}getHandlerId(){return this.targetId}subscribeToStateChange(t,n){return this.internalMonitor.subscribeToStateChange(t,n)}canDrop(){if(!this.targetId)return!1;we(!Vt,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");try{return Vt=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{Vt=!1}}isOver(t){return this.targetId?this.internalMonitor.isOverTarget(this.targetId,t):!1}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(t){this.targetId=null,this.internalMonitor=t.getMonitor()}}function Vi(e,t,n){const r=n.getRegistry(),o=r.addTarget(e,t);return[o,()=>r.removeTarget(o)]}function qi(e,t,n){const r=n.getRegistry(),o=r.addSource(e,t);return[o,()=>r.removeSource(o)]}function un(e,t,n,r){let o=n?n.call(r,e,t):void 0;if(o!==void 0)return!!o;if(e===t)return!0;if(typeof e!="object"||!e||typeof t!="object"||!t)return!1;const i=Object.keys(e),s=Object.keys(t);if(i.length!==s.length)return!1;const a=Object.prototype.hasOwnProperty.bind(t);for(let l=0;l<i.length;l++){const d=i[l];if(!a(d))return!1;const p=e[d],h=t[d];if(o=n?n.call(r,p,h,d):void 0,o===!1||o===void 0&&p!==h)return!1}return!0}function dn(e){return e!==null&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Ki(e){if(typeof e.type=="string")return;const t=e.type.displayName||e.type.name||"the component";throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${t} into a <div>, or turn it into a drag source or a drop target itself.`)}function Xi(e){return(t=null,n=null)=>{if(!c.isValidElement(t)){const i=t;return e(i,n),i}const r=t;return Ki(r),Yi(r,n?i=>e(i,n):e)}}function Jr(e){const t={};return Object.keys(e).forEach(n=>{const r=e[n];if(n.endsWith("Ref"))t[n]=e[n];else{const o=Xi(r);t[n]=()=>o}}),t}function Zn(e,t){typeof e=="function"?e(t):e.current=t}function Yi(e,t){const n=e.ref;return we(typeof n!="string","Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"),n?c.cloneElement(e,{ref:r=>{Zn(n,r),Zn(t,r)}}):c.cloneElement(e,{ref:t})}class Qi{receiveHandlerId(t){this.handlerId!==t&&(this.handlerId=t,this.reconnect())}get connectTarget(){return this.dragSource}get dragSourceOptions(){return this.dragSourceOptionsInternal}set dragSourceOptions(t){this.dragSourceOptionsInternal=t}get dragPreviewOptions(){return this.dragPreviewOptionsInternal}set dragPreviewOptions(t){this.dragPreviewOptionsInternal=t}reconnect(){const t=this.reconnectDragSource();this.reconnectDragPreview(t)}reconnectDragSource(){const t=this.dragSource,n=this.didHandlerIdChange()||this.didConnectedDragSourceChange()||this.didDragSourceOptionsChange();return n&&this.disconnectDragSource(),this.handlerId?t?(n&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragSource=t,this.lastConnectedDragSourceOptions=this.dragSourceOptions,this.dragSourceUnsubscribe=this.backend.connectDragSource(this.handlerId,t,this.dragSourceOptions)),n):(this.lastConnectedDragSource=t,n):n}reconnectDragPreview(t=!1){const n=this.dragPreview,r=t||this.didHandlerIdChange()||this.didConnectedDragPreviewChange()||this.didDragPreviewOptionsChange();if(r&&this.disconnectDragPreview(),!!this.handlerId){if(!n){this.lastConnectedDragPreview=n;return}r&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragPreview=n,this.lastConnectedDragPreviewOptions=this.dragPreviewOptions,this.dragPreviewUnsubscribe=this.backend.connectDragPreview(this.handlerId,n,this.dragPreviewOptions))}}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didConnectedDragSourceChange(){return this.lastConnectedDragSource!==this.dragSource}didConnectedDragPreviewChange(){return this.lastConnectedDragPreview!==this.dragPreview}didDragSourceOptionsChange(){return!un(this.lastConnectedDragSourceOptions,this.dragSourceOptions)}didDragPreviewOptionsChange(){return!un(this.lastConnectedDragPreviewOptions,this.dragPreviewOptions)}disconnectDragSource(){this.dragSourceUnsubscribe&&(this.dragSourceUnsubscribe(),this.dragSourceUnsubscribe=void 0)}disconnectDragPreview(){this.dragPreviewUnsubscribe&&(this.dragPreviewUnsubscribe(),this.dragPreviewUnsubscribe=void 0,this.dragPreviewNode=null,this.dragPreviewRef=null)}get dragSource(){return this.dragSourceNode||this.dragSourceRef&&this.dragSourceRef.current}get dragPreview(){return this.dragPreviewNode||this.dragPreviewRef&&this.dragPreviewRef.current}clearDragSource(){this.dragSourceNode=null,this.dragSourceRef=null}clearDragPreview(){this.dragPreviewNode=null,this.dragPreviewRef=null}constructor(t){this.hooks=Jr({dragSource:(n,r)=>{this.clearDragSource(),this.dragSourceOptions=r||null,dn(n)?this.dragSourceRef=n:this.dragSourceNode=n,this.reconnectDragSource()},dragPreview:(n,r)=>{this.clearDragPreview(),this.dragPreviewOptions=r||null,dn(n)?this.dragPreviewRef=n:this.dragPreviewNode=n,this.reconnectDragPreview()}}),this.handlerId=null,this.dragSourceRef=null,this.dragSourceOptionsInternal=null,this.dragPreviewRef=null,this.dragPreviewOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDragSource=null,this.lastConnectedDragSourceOptions=null,this.lastConnectedDragPreview=null,this.lastConnectedDragPreviewOptions=null,this.backend=t}}class Ji{get connectTarget(){return this.dropTarget}reconnect(){const t=this.didHandlerIdChange()||this.didDropTargetChange()||this.didOptionsChange();t&&this.disconnectDropTarget();const n=this.dropTarget;if(this.handlerId){if(!n){this.lastConnectedDropTarget=n;return}t&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDropTarget=n,this.lastConnectedDropTargetOptions=this.dropTargetOptions,this.unsubscribeDropTarget=this.backend.connectDropTarget(this.handlerId,n,this.dropTargetOptions))}}receiveHandlerId(t){t!==this.handlerId&&(this.handlerId=t,this.reconnect())}get dropTargetOptions(){return this.dropTargetOptionsInternal}set dropTargetOptions(t){this.dropTargetOptionsInternal=t}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didDropTargetChange(){return this.lastConnectedDropTarget!==this.dropTarget}didOptionsChange(){return!un(this.lastConnectedDropTargetOptions,this.dropTargetOptions)}disconnectDropTarget(){this.unsubscribeDropTarget&&(this.unsubscribeDropTarget(),this.unsubscribeDropTarget=void 0)}get dropTarget(){return this.dropTargetNode||this.dropTargetRef&&this.dropTargetRef.current}clearDropTarget(){this.dropTargetRef=null,this.dropTargetNode=null}constructor(t){this.hooks=Jr({dropTarget:(n,r)=>{this.clearDropTarget(),this.dropTargetOptions=r,dn(n)?this.dropTargetRef=n:this.dropTargetNode=n,this.reconnect()}}),this.handlerId=null,this.dropTargetRef=null,this.dropTargetOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDropTarget=null,this.lastConnectedDropTargetOptions=null,this.backend=t}}function Fe(){const{dragDropManager:e}=c.useContext(Si);return we(e!=null,"Expected drag drop context"),e}function Zi(e,t){const n=Fe(),r=c.useMemo(()=>new Qi(n.getBackend()),[n]);return Pe(()=>(r.dragSourceOptions=e||null,r.reconnect(),()=>r.disconnectDragSource()),[r,e]),Pe(()=>(r.dragPreviewOptions=t||null,r.reconnect(),()=>r.disconnectDragPreview()),[r,t]),r}function ea(){const e=Fe();return c.useMemo(()=>new Gi(e),[e])}class ta{beginDrag(){const t=this.spec,n=this.monitor;let r=null;return typeof t.item=="object"?r=t.item:typeof t.item=="function"?r=t.item(n):r={},r??null}canDrag(){const t=this.spec,n=this.monitor;return typeof t.canDrag=="boolean"?t.canDrag:typeof t.canDrag=="function"?t.canDrag(n):!0}isDragging(t,n){const r=this.spec,o=this.monitor,{isDragging:i}=r;return i?i(o):n===t.getSourceId()}endDrag(){const t=this.spec,n=this.monitor,r=this.connector,{end:o}=t;o&&o(n.getItem(),n),r.reconnect()}constructor(t,n,r){this.spec=t,this.monitor=n,this.connector=r}}function na(e,t,n){const r=c.useMemo(()=>new ta(e,t,n),[t,n]);return c.useEffect(()=>{r.spec=e},[e]),r}function ra(e){return c.useMemo(()=>{const t=e.type;return we(t!=null,"spec.type must be defined"),t},[e])}function oa(e,t,n){const r=Fe(),o=na(e,t,n),i=ra(e);Pe(function(){if(i!=null){const[a,l]=qi(i,o,r);return t.receiveHandlerId(a),n.receiveHandlerId(a),l}},[r,t,n,o,i])}function ia(e,t){const n=Qr(e,t);we(!n.begin,"useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");const r=ea(),o=Zi(n.options,n.previewOptions);return oa(n,r,o),[Yr(n.collect,r,o),Bi(o),ji(o)]}function aa(e){return c.useMemo(()=>e.hooks.dropTarget(),[e])}function sa(e){const t=Fe(),n=c.useMemo(()=>new Ji(t.getBackend()),[t]);return Pe(()=>(n.dropTargetOptions=e||null,n.reconnect(),()=>n.disconnectDropTarget()),[e]),n}function ca(){const e=Fe();return c.useMemo(()=>new Hi(e),[e])}function la(e){const{accept:t}=e;return c.useMemo(()=>(we(e.accept!=null,"accept must be defined"),Array.isArray(t)?t:[t]),[t])}class ua{canDrop(){const t=this.spec,n=this.monitor;return t.canDrop?t.canDrop(n.getItem(),n):!0}hover(){const t=this.spec,n=this.monitor;t.hover&&t.hover(n.getItem(),n)}drop(){const t=this.spec,n=this.monitor;if(t.drop)return t.drop(n.getItem(),n)}constructor(t,n){this.spec=t,this.monitor=n}}function da(e,t){const n=c.useMemo(()=>new ua(e,t),[t]);return c.useEffect(()=>{n.spec=e},[e]),n}function fa(e,t,n){const r=Fe(),o=da(e,t),i=la(e);Pe(function(){const[a,l]=Vi(i,o,r);return t.receiveHandlerId(a),n.receiveHandlerId(a),l},[r,t,o,n,i.map(s=>s.toString()).join("|")])}function Zr(e,t){const n=Qr(e,t),r=ca(),o=sa(n.options);return fa(n,r,o),[Yr(n.collect,r,o),aa(o)]}function ha(e){const t=Me(),n=Vn(t,ii),[r,o]=c.useState({loading:!1,scene:void 0,resources:void 0}),i=an(Br),s=an(sn),a=nt(sn).selected,[l,d]=Le(at);return c.useEffect(()=>{const p=Bt(t,a);o(h=>({...h,resources:p}))},[a,t]),c.useEffect(()=>{const p=l.activeEntity;if(l.activeEntityHistorySize===0&&p)qn(t,p);else if(p){const h=l.activeEntity,v=An(t,h);if(!v)return;const m=v.constructor;qn(t,h),i(ie.Resources),s({selected:m}),o(T=>({...T,resources:Bt(t,m)})),e&&setTimeout(()=>{var T;(T=e.current)==null||T.scrollToNode(v.eid,"center")})}},[t,l.activeEntity,l.activeEntityHistorySize,e,s,i]),c.useEffect(()=>{function p({activeEntity:m,selectedEntities:T}){var y;const g=Vn(t,ci).resourceConstructors.map(x=>({value:x,label:li(x.resourceDef.name)})),b=((y=g[0])==null?void 0:y.value)??ui;s({selected:b,options:g}),o(x=>({...x,loading:!1,resources:Bt(t,b)}))}function h({activeEntity:m,selectedEntities:T,scene:f}){o(g=>({...g,scene:f}))}function v({activeEntity:m,selectedEntities:T}){d({type:"SELECT",resourceId:m})}return n.eventEmitter.addListener(De.EditorLoaded,p),n.eventEmitter.addListener(De.HierarchyChanged,h),n.eventEmitter.addListener(De.SelectionChanged,v),ai(t),()=>{si(t),n.eventEmitter.removeListener(De.EditorLoaded,p),n.eventEmitter.removeListener(De.HierarchyChanged,h),n.eventEmitter.removeListener(De.SelectionChanged,v)}},[n,t,s,d]),{...r}}function er(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function fn(e,t){return fn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},fn(e,t)}function pa(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,fn(e,t)}var tr=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function ma(e,t){return!!(e===t||tr(e)&&tr(t))}function ga(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!ma(e[n],t[n]))return!1;return!0}function qt(e,t){t===void 0&&(t=ga);var n,r=[],o,i=!1;function s(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return i&&n===this&&t(a,r)||(o=e.apply(this,a),i=!0,n=this,r=a),o}return s}var va=typeof performance=="object"&&typeof performance.now=="function",nr=va?function(){return performance.now()}:function(){return Date.now()};function rr(e){cancelAnimationFrame(e.id)}function ba(e,t){var n=nr();function r(){nr()-n>=t?e.call(null):o.id=requestAnimationFrame(r)}var o={id:requestAnimationFrame(r)};return o}var Ne=null;function or(e){if(e===void 0&&(e=!1),Ne===null||e){var t=document.createElement("div"),n=t.style;n.width="50px",n.height="50px",n.overflow="scroll",n.direction="rtl";var r=document.createElement("div"),o=r.style;return o.width="100px",o.height="100px",t.appendChild(r),document.body.appendChild(t),t.scrollLeft>0?Ne="positive-descending":(t.scrollLeft=1,t.scrollLeft===0?Ne="negative":Ne="positive-ascending"),document.body.removeChild(t),Ne}return Ne}var ya=150,wa=function(t,n){return t};function Ta(e){var t,n=e.getItemOffset,r=e.getEstimatedTotalSize,o=e.getItemSize,i=e.getOffsetForIndexAndAlignment,s=e.getStartIndexForOffset,a=e.getStopIndexForStartIndex,l=e.initInstanceProps,d=e.shouldResetStyleCacheOnItemSizeChange,p=e.validateProps;return t=function(h){pa(v,h);function v(T){var f;return f=h.call(this,T)||this,f._instanceProps=l(f.props,er(f)),f._outerRef=void 0,f._resetIsScrollingTimeoutId=null,f.state={instance:er(f),isScrolling:!1,scrollDirection:"forward",scrollOffset:typeof f.props.initialScrollOffset=="number"?f.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},f._callOnItemsRendered=void 0,f._callOnItemsRendered=qt(function(g,b,y,x){return f.props.onItemsRendered({overscanStartIndex:g,overscanStopIndex:b,visibleStartIndex:y,visibleStopIndex:x})}),f._callOnScroll=void 0,f._callOnScroll=qt(function(g,b,y){return f.props.onScroll({scrollDirection:g,scrollOffset:b,scrollUpdateWasRequested:y})}),f._getItemStyle=void 0,f._getItemStyle=function(g){var b=f.props,y=b.direction,x=b.itemSize,w=b.layout,C=f._getItemStyleCache(d&&x,d&&w,d&&y),S;if(C.hasOwnProperty(g))S=C[g];else{var I=n(f.props,g,f._instanceProps),E=o(f.props,g,f._instanceProps),A=y==="horizontal"||w==="horizontal",M=y==="rtl",N=A?I:0;C[g]=S={position:"absolute",left:M?void 0:N,right:M?N:void 0,top:A?0:I,height:A?"100%":E,width:A?E:"100%"}}return S},f._getItemStyleCache=void 0,f._getItemStyleCache=qt(function(g,b,y){return{}}),f._onScrollHorizontal=function(g){var b=g.currentTarget,y=b.clientWidth,x=b.scrollLeft,w=b.scrollWidth;f.setState(function(C){if(C.scrollOffset===x)return null;var S=f.props.direction,I=x;if(S==="rtl")switch(or()){case"negative":I=-x;break;case"positive-descending":I=w-y-x;break}return I=Math.max(0,Math.min(I,w-y)),{isScrolling:!0,scrollDirection:C.scrollOffset<x?"forward":"backward",scrollOffset:I,scrollUpdateWasRequested:!1}},f._resetIsScrollingDebounced)},f._onScrollVertical=function(g){var b=g.currentTarget,y=b.clientHeight,x=b.scrollHeight,w=b.scrollTop;f.setState(function(C){if(C.scrollOffset===w)return null;var S=Math.max(0,Math.min(w,x-y));return{isScrolling:!0,scrollDirection:C.scrollOffset<S?"forward":"backward",scrollOffset:S,scrollUpdateWasRequested:!1}},f._resetIsScrollingDebounced)},f._outerRefSetter=function(g){var b=f.props.outerRef;f._outerRef=g,typeof b=="function"?b(g):b!=null&&typeof b=="object"&&b.hasOwnProperty("current")&&(b.current=g)},f._resetIsScrollingDebounced=function(){f._resetIsScrollingTimeoutId!==null&&rr(f._resetIsScrollingTimeoutId),f._resetIsScrollingTimeoutId=ba(f._resetIsScrolling,ya)},f._resetIsScrolling=function(){f._resetIsScrollingTimeoutId=null,f.setState({isScrolling:!1},function(){f._getItemStyleCache(-1,null)})},f}v.getDerivedStateFromProps=function(f,g){return xa(f,g),p(f),null};var m=v.prototype;return m.scrollTo=function(f){f=Math.max(0,f),this.setState(function(g){return g.scrollOffset===f?null:{scrollDirection:g.scrollOffset<f?"forward":"backward",scrollOffset:f,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},m.scrollToItem=function(f,g){g===void 0&&(g="auto");var b=this.props.itemCount,y=this.state.scrollOffset;f=Math.max(0,Math.min(f,b-1)),this.scrollTo(i(this.props,f,g,y,this._instanceProps))},m.componentDidMount=function(){var f=this.props,g=f.direction,b=f.initialScrollOffset,y=f.layout;if(typeof b=="number"&&this._outerRef!=null){var x=this._outerRef;g==="horizontal"||y==="horizontal"?x.scrollLeft=b:x.scrollTop=b}this._callPropsCallbacks()},m.componentDidUpdate=function(){var f=this.props,g=f.direction,b=f.layout,y=this.state,x=y.scrollOffset,w=y.scrollUpdateWasRequested;if(w&&this._outerRef!=null){var C=this._outerRef;if(g==="horizontal"||b==="horizontal")if(g==="rtl")switch(or()){case"negative":C.scrollLeft=-x;break;case"positive-ascending":C.scrollLeft=x;break;default:var S=C.clientWidth,I=C.scrollWidth;C.scrollLeft=I-S-x;break}else C.scrollLeft=x;else C.scrollTop=x}this._callPropsCallbacks()},m.componentWillUnmount=function(){this._resetIsScrollingTimeoutId!==null&&rr(this._resetIsScrollingTimeoutId)},m.render=function(){var f=this.props,g=f.children,b=f.className,y=f.direction,x=f.height,w=f.innerRef,C=f.innerElementType,S=f.innerTagName,I=f.itemCount,E=f.itemData,A=f.itemKey,M=A===void 0?wa:A,N=f.layout,_=f.outerElementType,L=f.outerTagName,R=f.style,k=f.useIsScrolling,W=f.width,q=this.state.isScrolling,K=y==="horizontal"||N==="horizontal",ne=K?this._onScrollHorizontal:this._onScrollVertical,O=this._getRangeToRender(),D=O[0],j=O[1],V=[];if(I>0)for(var Q=D;Q<=j;Q++)V.push(c.createElement(g,{data:E,key:M(Q,E),index:Q,isScrolling:k?q:void 0,style:this._getItemStyle(Q)}));var oe=r(this.props,this._instanceProps);return c.createElement(_||L||"div",{className:b,onScroll:ne,ref:this._outerRefSetter,style:G({position:"relative",height:x,width:W,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:y},R)},c.createElement(C||S||"div",{children:V,ref:w,style:{height:K?"100%":oe,pointerEvents:q?"none":void 0,width:K?oe:"100%"}}))},m._callPropsCallbacks=function(){if(typeof this.props.onItemsRendered=="function"){var f=this.props.itemCount;if(f>0){var g=this._getRangeToRender(),b=g[0],y=g[1],x=g[2],w=g[3];this._callOnItemsRendered(b,y,x,w)}}if(typeof this.props.onScroll=="function"){var C=this.state,S=C.scrollDirection,I=C.scrollOffset,E=C.scrollUpdateWasRequested;this._callOnScroll(S,I,E)}},m._getRangeToRender=function(){var f=this.props,g=f.itemCount,b=f.overscanCount,y=this.state,x=y.isScrolling,w=y.scrollDirection,C=y.scrollOffset;if(g===0)return[0,0,0,0];var S=s(this.props,C,this._instanceProps),I=a(this.props,S,C,this._instanceProps),E=!x||w==="backward"?Math.max(1,b):1,A=!x||w==="forward"?Math.max(1,b):1;return[Math.max(0,S-E),Math.max(0,Math.min(g-1,I+A)),S,I]},v}(c.PureComponent),t.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},t}var xa=function(t,n){t.children,t.direction,t.height,t.layout,t.innerTagName,t.outerTagName,t.width,n.instance},Sa=Ta({getItemOffset:function(t,n){var r=t.itemSize;return n*r},getItemSize:function(t,n){var r=t.itemSize;return r},getEstimatedTotalSize:function(t){var n=t.itemCount,r=t.itemSize;return r*n},getOffsetForIndexAndAlignment:function(t,n,r,o){var i=t.direction,s=t.height,a=t.itemCount,l=t.itemSize,d=t.layout,p=t.width,h=i==="horizontal"||d==="horizontal",v=h?p:s,m=Math.max(0,a*l-v),T=Math.min(m,n*l),f=Math.max(0,n*l-v+l);switch(r==="smart"&&(o>=f-v&&o<=T+v?r="auto":r="center"),r){case"start":return T;case"end":return f;case"center":{var g=Math.round(f+(T-f)/2);return g<Math.ceil(v/2)?0:g>m+Math.floor(v/2)?m:g}case"auto":default:return o>=f&&o<=T?o:o<f?f:T}},getStartIndexForOffset:function(t,n){var r=t.itemCount,o=t.itemSize;return Math.max(0,Math.min(r-1,Math.floor(n/o)))},getStopIndexForStartIndex:function(t,n,r){var o=t.direction,i=t.height,s=t.itemCount,a=t.itemSize,l=t.layout,d=t.width,p=o==="horizontal"||l==="horizontal",h=n*a,v=p?d:i,m=Math.ceil((v+r-h)/a);return Math.max(0,Math.min(s-1,n+m-1))},initInstanceProps:function(t){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(t){t.itemSize}});function ir(e,t){for(var n in e)if(!(n in t))return!0;for(var r in t)if(e[r]!==t[r])return!0;return!1}var Ca=["style"],Ia=["style"];function Ea(e,t){var n=e.style,r=Qn(e,Ca),o=t.style,i=Qn(t,Ia);return!ir(n,o)&&!ir(r,i)}var Aa=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Ra=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Pa=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ma=function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},ar=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e},$a=function(){function e(t,n){var r=[],o=!0,i=!1,s=void 0;try{for(var a=t[Symbol.iterator](),l;!(o=(l=a.next()).done)&&(r.push(l.value),!(n&&r.length===n));o=!0);}catch(d){i=!0,s=d}finally{try{!o&&a.return&&a.return()}finally{if(i)throw s}}return r}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),re=void 0;typeof window<"u"?re=window:typeof self<"u"?re=self:re=global;var hn=null,pn=null,sr=20,Kt=re.clearTimeout,cr=re.setTimeout,Xt=re.cancelAnimationFrame||re.mozCancelAnimationFrame||re.webkitCancelAnimationFrame,lr=re.requestAnimationFrame||re.mozRequestAnimationFrame||re.webkitRequestAnimationFrame;Xt==null||lr==null?(hn=Kt,pn=function(t){return cr(t,sr)}):(hn=function(t){var n=$a(t,2),r=n[0],o=n[1];Xt(r),Kt(o)},pn=function(t){var n=lr(function(){Kt(r),t()}),r=cr(function(){Xt(n),t()},sr);return[n,r]});function Oa(e){var t=void 0,n=void 0,r=void 0,o=void 0,i=void 0,s=void 0,a=void 0,l=typeof document<"u"&&document.attachEvent;if(!l){s=function(w){var C=w.__resizeTriggers__,S=C.firstElementChild,I=C.lastElementChild,E=S.firstElementChild;I.scrollLeft=I.scrollWidth,I.scrollTop=I.scrollHeight,E.style.width=S.offsetWidth+1+"px",E.style.height=S.offsetHeight+1+"px",S.scrollLeft=S.scrollWidth,S.scrollTop=S.scrollHeight},i=function(w){return w.offsetWidth!==w.__resizeLast__.width||w.offsetHeight!==w.__resizeLast__.height},a=function(w){if(!(w.target.className&&typeof w.target.className.indexOf=="function"&&w.target.className.indexOf("contract-trigger")<0&&w.target.className.indexOf("expand-trigger")<0)){var C=this;s(this),this.__resizeRAF__&&hn(this.__resizeRAF__),this.__resizeRAF__=pn(function(){i(C)&&(C.__resizeLast__.width=C.offsetWidth,C.__resizeLast__.height=C.offsetHeight,C.__resizeListeners__.forEach(function(E){E.call(C,w)}))})}};var d=!1,p="";r="animationstart";var h="Webkit Moz O ms".split(" "),v="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),m="";{var T=document.createElement("fakeelement");if(T.style.animationName!==void 0&&(d=!0),d===!1){for(var f=0;f<h.length;f++)if(T.style[h[f]+"AnimationName"]!==void 0){m=h[f],p="-"+m.toLowerCase()+"-",r=v[f],d=!0;break}}}n="resizeanim",t="@"+p+"keyframes "+n+" { from { opacity: 0; } to { opacity: 0; } } ",o=p+"animation: 1ms "+n+"; "}var g=function(w){if(!w.getElementById("detectElementResize")){var C=(t||"")+".resize-triggers { "+(o||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',S=w.head||w.getElementsByTagName("head")[0],I=w.createElement("style");I.id="detectElementResize",I.type="text/css",e!=null&&I.setAttribute("nonce",e),I.styleSheet?I.styleSheet.cssText=C:I.appendChild(w.createTextNode(C)),S.appendChild(I)}},b=function(w,C){if(l)w.attachEvent("onresize",C);else{if(!w.__resizeTriggers__){var S=w.ownerDocument,I=re.getComputedStyle(w);I&&I.position==="static"&&(w.style.position="relative"),g(S),w.__resizeLast__={},w.__resizeListeners__=[],(w.__resizeTriggers__=S.createElement("div")).className="resize-triggers";var E=S.createElement("div");E.className="expand-trigger",E.appendChild(S.createElement("div"));var A=S.createElement("div");A.className="contract-trigger",w.__resizeTriggers__.appendChild(E),w.__resizeTriggers__.appendChild(A),w.appendChild(w.__resizeTriggers__),s(w),w.addEventListener("scroll",a,!0),r&&(w.__resizeTriggers__.__animationListener__=function(N){N.animationName===n&&s(w)},w.__resizeTriggers__.addEventListener(r,w.__resizeTriggers__.__animationListener__))}w.__resizeListeners__.push(C)}},y=function(w,C){if(l)w.detachEvent("onresize",C);else if(w.__resizeListeners__.splice(w.__resizeListeners__.indexOf(C),1),!w.__resizeListeners__.length){w.removeEventListener("scroll",a,!0),w.__resizeTriggers__.__animationListener__&&(w.__resizeTriggers__.removeEventListener(r,w.__resizeTriggers__.__animationListener__),w.__resizeTriggers__.__animationListener__=null);try{w.__resizeTriggers__=!w.removeChild(w.__resizeTriggers__)}catch{}}};return{addResizeListener:b,removeResizeListener:y}}var eo=function(e){Ma(t,e);function t(){var n,r,o,i;Aa(this,t);for(var s=arguments.length,a=Array(s),l=0;l<s;l++)a[l]=arguments[l];return i=(r=(o=ar(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(a))),o),o.state={height:o.props.defaultHeight||0,width:o.props.defaultWidth||0},o._onResize=function(){var d=o.props,p=d.disableHeight,h=d.disableWidth,v=d.onResize;if(o._parentNode){var m=o._parentNode.offsetHeight||0,T=o._parentNode.offsetWidth||0,f=window.getComputedStyle(o._parentNode)||{},g=parseInt(f.paddingLeft,10)||0,b=parseInt(f.paddingRight,10)||0,y=parseInt(f.paddingTop,10)||0,x=parseInt(f.paddingBottom,10)||0,w=m-y-x,C=T-g-b;(!p&&o.state.height!==w||!h&&o.state.width!==C)&&(o.setState({height:m-y-x,width:T-g-b}),v({height:m,width:T}))}},o._setRef=function(d){o._autoSizer=d},r),ar(o,i)}return Ra(t,[{key:"componentDidMount",value:function(){var r=this.props.nonce;this._autoSizer&&this._autoSizer.parentNode&&this._autoSizer.parentNode.ownerDocument&&this._autoSizer.parentNode.ownerDocument.defaultView&&this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement&&(this._parentNode=this._autoSizer.parentNode,this._detectElementResize=Oa(r),this._detectElementResize.addResizeListener(this._parentNode,this._onResize),this._onResize())}},{key:"componentWillUnmount",value:function(){this._detectElementResize&&this._parentNode&&this._detectElementResize.removeResizeListener(this._parentNode,this._onResize)}},{key:"render",value:function(){var r=this.props,o=r.children,i=r.className,s=r.disableHeight,a=r.disableWidth,l=r.style,d=this.state,p=d.height,h=d.width,v={overflow:"visible"},m={},T=!1;return s||(p===0&&(T=!0),v.height=0,m.height=p),a||(h===0&&(T=!0),v.width=0,m.width=h),c.createElement("div",{className:i,ref:this._setRef,style:Pa({},v,l)},!T&&o(m))}}]),t}(c.PureComponent);eo.defaultProps={onResize:function(){},disableHeight:!1,disableWidth:!1,style:{}};var wt=(e=>(e.Root="root",e.Before="before",e.After="after",e.On="on",e))(wt||{});function Tt({nodeId:e,position:t,isRoot:n,shallow:r,accept:o,onDrop:i,canDrop:s}){return Zr({accept:o,drop(a,l){r&&l.didDrop()||i(a,e,t)},canDrop(a,l){return!l.isOver({shallow:r})||n&&t==="before"?!1:s(a,e,t)},collect:a=>({canDrop:a.canDrop(),isOver:a.isOver()})})}function ka({index:e,data:{nodes:t,renamingNode:n,setRenamingNode:r,onExpandNode:o,onCollapseNode:i,onExpandChildren:s,onCollapseChildren:a,onToggleSelectedNode:l,onAddSelectedNode:d,onSetSelectedNode:p,onSetFocusedNode:h,onDoubleClickNode:v,onRenameNode:m,dragItemType:T,dropAccept:f,onDrop:g,canDrop:b,canDrag:y,getDragItem:x,renderNode:w},style:C}){const{id:S,name:I,depth:E,isSelected:A,isExpanded:M,isLeaf:N,isActive:_,isFocused:L}=t[e],R=c.useCallback(z=>{z.detail===1?z.shiftKey?l(S):A||p(S):z.detail===2&&v(S)},[S,A,l,p,v]),k=c.useCallback(z=>{z.stopPropagation(),M?i(S):o(S)},[S,M,i,o]),W=c.useCallback(z=>{if(z.stopPropagation(),z.key==="ArrowDown"){z.preventDefault();const me=t[e+1];me&&(z.shiftKey&&d(S),h(me.id))}else if(z.key==="ArrowUp"){z.preventDefault();const me=t[e-1];me&&(z.shiftKey&&d(me.id),h(me.id))}else z.key==="ArrowLeft"&&!N?z.shiftKey?a(S):i(S):z.key==="ArrowRight"&&!N?z.shiftKey?s(S):N||o(S):z.key==="Enter"&&(z.shiftKey?l(S):p(S))},[d,h,d,a,i,s,o,l,p,S,N,t]),q=n===S,[K,ne]=c.useState(I),O=c.useCallback(z=>{z.key==="Escape"?r(void 0):z.key==="Enter"&&m(S,z.currentTarget.value)},[S,r,m]),D=c.useCallback(z=>{ne(z.currentTarget.value)},[S,ne]),j=c.useCallback(z=>{z.currentTarget&&m(S,z.currentTarget.value)},[m,S]),V=c.useRef(),[,Q,oe]=ia({type:T,item(){return x(S)},canDrag(){return y(S)}});c.useEffect(()=>{L&&V.current&&V.current.focus()},[L]);const ht=c.useCallback(z=>{Q(z),V.current=z},[Q,V]),he=c.useMemo(()=>({style:C}),[C]),He=c.useMemo(()=>({ref:ht,onMouseDown:R,onKeyDown:W,tabIndex:0}),[ht,R,W]),pe=c.useMemo(()=>({onClick:k}),[k]),pt=c.useMemo(()=>({type:"text",onChange:D,onKeyDown:O,onBlur:j,value:K,autoFocus:!0}),[D,O,j,K]),[Lt,Oe]=Tt({nodeId:S,position:"before",isRoot:e===0,accept:f,onDrop:g,canDrop:b}),[zt,Ut]=Tt({nodeId:S,position:"after",isRoot:e===0,accept:f,onDrop:g,canDrop:b}),[Ft,Wt]=Tt({nodeId:S,position:"on",isRoot:e===0,accept:f,onDrop:g,canDrop:b});return w({id:S,isActive:_,isExpanded:M,isLeaf:N,isSelected:A,isRenaming:q,name:I,depth:E,listItemProps:he,dragContainerProps:He,dragPreviewRef:oe,beforeDropTargetState:Lt,beforeDropTargetRef:Oe,afterDropTargetState:zt,afterDropTargetRef:Ut,onDropTargetState:Ft,onDropTargetRef:Wt,toggleProps:pe,nameInputProps:pt})}const _a=c.memo(ka,Ea);function Da(e,t){return t.nodes[e].id}function Na(e,t,n,r,o){const i=[],s=[];for(s.push({node:e,depth:0});s.length!==0;){const{node:a,depth:l}=s.pop(),d=l===0||t.includes(a.id);if(i.push({id:a.id,name:a.name,depth:l,isExpanded:d,isSelected:n.includes(a.id),isActive:a.id===r,isFocused:a.id===o,isLeaf:a.children===void 0||a.children.length===0}),d&&a.children&&a.children.length>0)for(let p=a.children.length-1;p>=0;p--){const h=a.children[p];s.push({depth:l+1,node:h})}}return i}function La(e,t){const n=[];for(n.push(e);n.length!==0;){const r=n.pop();if(r.id===t)return r;r.children&&n.push(...r.children)}}function ur(e,t){const n=La(e,t);if(!n)return[];const r=[],o=[];for(o.push(e);o.length!==0;){const i=o.pop();i!==n&&r.push(i.id),i.children&&o.push(...i.children)}return r}const za=c.forwardRef(({className:e,defaultHeight:t,defaultWidth:n,itemSize:r,overscanCount:o,tree:i,selected:s,active:a,onToggleSelectedNode:l,onAddSelectedNode:d,onSetSelectedNode:p,onRenameNode:h,onDoubleClickNode:v,dropAccept:m,onDrop:T,canDrop:f,canDrag:g,dragItemType:b,getDragItem:y,children:x},w)=>{const C=c.useRef(null),[S,I]=c.useState(),[E,A]=c.useState([]),M=Na(i,E,s,a,S),[N,_]=c.useState(),[,L]=Tt({position:"root",shallow:!0,accept:m,onDrop:T,canDrop:f}),R=c.useCallback(O=>{A(D=>D.includes(O)?D:[...D,O])},[]),k=c.useCallback(O=>{A(D=>D.filter(j=>j!==O))},[]),W=c.useCallback(O=>{A(D=>{const j=ur(i,O);return Array.from(new Set([...D,...j]))})},[i]),q=c.useCallback(O=>{A(D=>{const j=ur(i,O);return D.filter(V=>!j.includes(V))})},[i]),K=c.useCallback(()=>{A(M.filter(O=>!O.isLeaf).map(O=>O.id))},[M]),ne=c.useCallback(()=>{A([])},[]);return c.useImperativeHandle(w,()=>({scrollToNode:(O,D)=>{var j;const V=M.findIndex(Q=>Q.id===O);V!==-1&&((j=C.current)==null||j.scrollToItem(V,D))}}),[M]),u(eo,{className:e,defaultHeight:t,defaultWidth:n,children:({height:O,width:D})=>u(Sa,{ref:C,height:O,width:D,itemSize:r,itemCount:M.length,itemData:{nodes:M,renamingNode:N,dropAccept:m,dragItemType:b,setRenamingNode:_,onExpandNode:R,onCollapseNode:k,onExpandChildren:W,onCollapseChildren:q,onExpandAllNodes:K,onCollapseAllNodes:ne,onToggleSelectedNode:l,onAddSelectedNode:d,onSetSelectedNode:p,onSetFocusedNode:I,onDoubleClickNode:v,onRenameNode:h,onDrop:T,canDrop:f,canDrag:g,getDragItem:y,renderNode:x},itemKey:Da,outerRef:L,overscanCount:o,children:_a})})});function Ua({depth:e,selected:t,active:n,nodeRef:r,onMouseDown:o,onKeyDown:i,tabIndex:s,children:a}){return u("div",{ref:r,onMouseDown:o,onKeyDown:i,tabIndex:s,className:te("HierarchyNode",{"HierarchyNode--root":e===0,"HierarchyNode--selected":t,"HierarchyNode--active":n}),style:{paddingLeft:e*15},children:a})}function dr({placement:e,dropTargetRef:t,canDrop:n,isOver:r}){return u("div",{ref:t,className:te("HierarchyNodeDropTarget",{"HierarchyNodeDropTarget--acceptDrop":n&&r},`HierarchyNodeDropTarget--${e}`)})}function Fa({className:e,dropTargetRef:t,canDrop:n,isOver:r,children:o}){return u("div",{className:te("HierarchyNodeContent",{"HierarchyNodeContent--acceptDrop":r&&n},e),ref:t,children:o})}function Wa(){return u("span",{className:"shrink-0",style:{width:"var(--sp-sm)"}})}const Ba="/assets/triangle-right-fa3de1e2.svg",ja="/assets/triangle-bottom-7e6839ee.svg",Mn="/assets/circle-24884080.svg",Ga="/assets/tree-cc9a5e47.svg",Ha="/assets/formatted-list-f5d3210d.svg";function $n({className:e,style:t,children:n}){return u("div",{className:te("EditorHeader",e),style:t,children:n})}function mn({active:e=!1,onClick:t,children:n}){return u("button",{onClick:t,className:te("EditorHeaderTab",{"EditorHeaderTab--active":e}),children:n})}var to=(e=>(e.Node="node",e))(to||{});const Va="node",qa=["node"];function Ka(e,t){const n=[],r=o=>{if(t.includes(o.id)){n.push(o);return}for(const i of o.children)r(i)};return r(e),n}function no(e,t){if(e.eid===t)return e;for(let n=0;n<e.children.length;n++){const r=e.children[n],o=no(r,t);if(o)return o}}const Xa=(e,t)=>{const n=Object.keys(e);return n.length===Object.keys(t).length&&n.every(r=>e[r]===t[r])},Yt=(e,t)=>e.canDrop===t.canDrop&&e.isOver===t.isOver,Ya=c.memo(({id:e,name:t,depth:n,isExpanded:r,isSelected:o,isActive:i,isLeaf:s,listItemProps:a,dragContainerProps:l,beforeDropTargetState:d,beforeDropTargetRef:p,afterDropTargetState:h,afterDropTargetRef:v,onDropTargetState:m,onDropTargetRef:T,toggleProps:f})=>u("li",{...a,children:$(Ua,{depth:n,selected:o,active:i,nodeRef:l.ref,onMouseDown:l.onMouseDown,onKeyDown:l.onKeyDown,tabIndex:l.tabIndex,children:[u(dr,{placement:"before",dropTargetRef:p,canDrop:d.canDrop,isOver:d.isOver}),$(Fa,{className:"grow flex items-center",dropTargetRef:T,isOver:m.isOver,canDrop:m.canDrop,children:[s||n===0?u(Wa,{}):u(Re,{size:"sm",variant:i?"primary":"surface",label:r?"Collapse":"Expand",iconSrc:r?ja:Ba,...f}),$("div",{className:"flex items-center gap-xs grow",children:[u(B,{className:"shrink-0",color:i?"primary":"surface",size:"sm",src:n>0?Mn:jr}),u(U,{className:"truncate",color:i?"primary":"surface",variant:"b2",weight:"medium",children:t})]})]}),u(dr,{placement:"after",dropTargetRef:v,canDrop:h.canDrop,isOver:h.isOver})]})}),(e,t)=>e.id===t.id&&e.name===t.name&&e.depth===t.depth&&e.isExpanded===t.isExpanded&&e.isSelected===t.isSelected&&e.isActive===t.isActive&&e.isLeaf===t.isLeaf&&Xa(e.listItemProps.style,t.listItemProps.style)&&Yt(e.beforeDropTargetState,t.beforeDropTargetState)&&Yt(e.afterDropTargetState,t.afterDropTargetState)&&Yt(e.onDropTargetState,t.onDropTargetState));function fr({activeEntity:e,selectedEntities:t,scene:n,treeViewRef:r}){const o=Me(),i=an(at),s=c.useCallback((f,g,b)=>{if(!f.nodeIds)return!1;if(g===void 0)return b===wt.Root;if(g===n.eid&&(b===wt.Before||b===wt.After))return!1;const y=Ka(n,f.nodeIds);for(const x of y)if(no(x,g)!==void 0)return!1;return!0},[n]),a=c.useCallback(f=>!t.includes(n.id),[n,t]),l=c.useCallback(f=>({type:"node",activeNodeId:f,selectedNodeIds:t}),[t]),d=c.useCallback(f=>{di(o,f)},[o]),p=c.useCallback(f=>{fi(o,f)},[o]),h=c.useCallback(f=>{f<0||i({type:"SELECT",resourceId:f})},[i]),v=c.useCallback(f=>{hi(o,f)},[o]),m=c.useCallback((f,g)=>{pi(o,f,g)},[o]),T=c.useCallback((f,g,b)=>{f.type==="node"&&f.nodeIds&&mi(o,f.nodeIds,g,b)},[o]);return u(za,{ref:r,tree:n,selected:t,active:e,itemSize:32,onToggleSelectedNode:d,onAddSelectedNode:p,onSetSelectedNode:h,onDoubleClickNode:v,onRenameNode:m,dropAccept:qa,onDrop:T,canDrop:s,dragItemType:Va,canDrag:a,getDragItem:l,children:f=>u(Ya,{...f})})}function Qa({scene:e,resources:t,treeViewRef:n}){const[r,o]=Le(Br),[i,s]=Le(sn),{activeEntity:a,selectedEntities:l}=nt(at);return $("div",{className:"HierarchyPanel flex flex-column",children:[$($n,{className:"shrink-0",children:[$(mn,{active:r===ie.Scenes,onClick:()=>o(ie.Scenes),children:[u(B,{color:r===ie.Scenes?"primary":"surface",size:"sm",src:Ga}),u(U,{color:r===ie.Scenes?"primary":"surface",variant:"b2",weight:"semi-bold",children:"Scenes"})]}),$(mn,{active:r===ie.Resources,onClick:()=>o(ie.Resources),children:[u(B,{color:r===ie.Resources?"primary":"surface",size:"sm",src:Ha}),u(U,{color:r===ie.Resources?"primary":"surface",variant:"b2",weight:"semi-bold",children:"Resources"})]})]}),r===ie.Resources&&$(H,{children:[u("div",{className:"shrink-0",style:{padding:"var(--sp-xxs) var(--sp-xxs) 0"},children:u(Pn,{value:i.selected,options:i.options,onChange:d=>s({selected:d})})}),u("div",{className:"grow",children:t&&u(fr,{activeEntity:a,selectedEntities:l,scene:t,treeViewRef:n})})]}),r===ie.Scenes&&u("div",{className:"grow",children:u(fr,{activeEntity:a,selectedEntities:l,scene:e,treeViewRef:n})})]})}function Ja(e,t){if(typeof t!="number"||t<0)return e;const n=e.indexOf(".");return n<0?e:n===e.length-1||t===0?e.slice(0,n):e.slice(0,n+1+t)}function Za(e,t,n,r,o){return{getCurrentValue:()=>{if(e.current){const a=e.current.value.replace(/\s/g,""),l=a.includes(".")?parseFloat(a):parseInt(a);return isNaN(l)?void 0:l}},constrainValue:a=>{if(typeof a!="number")return;let l=a;return t!=="f32"&&(l=Math.round(l)),t==="u32"&&l<0&&(l=0),t=="f32"&&typeof n=="number"&&(l=parseFloat(l.toFixed(n))),typeof r=="number"&&l<r?r:typeof o=="number"&&l>o?o:l}}}function es(e,t,n){return{getStep:(i,s)=>{let a=t??1;return i==="sm"&&e&&(a=e),i==="lg"&&n&&(a=n),s?-1*a:a},getStepType:i=>{let s="md";return i.shiftKey?s="lg":i.ctrlKey&&(s="sm"),s}}}function Z({type:e="u32",smStep:t,mdStep:n,lgStep:r,floatPrecision:o,displayPrecision:i,min:s,max:a,value:l,onChange:d,onKeyDown:p,onBlur:h,onFocus:v,forwardRef:m,...T}){const[f,g]=c.useState(l.toString()),b=c.useRef(null),[y,x]=c.useState(!1),{getCurrentValue:w,constrainValue:C}=Za(b,e,o,s,a),{getStep:S,getStepType:I}=es(t,n,r);c.useEffect(()=>{g(l.toString())},[l]);const E=R=>{g(R.currentTarget.value)},A=R=>{const k=C(R);g((k==null?void 0:k.toString())??l.toString()),typeof k=="number"&&d(k)},M=()=>{g(l.toString())},N=R=>{if(p==null||p(R),R.key==="Escape"){M(),setTimeout(()=>{var k;(k=b.current)==null||k.blur()},100);return}if(R.key==="Enter"){A(w());return}if(R.key==="ArrowUp"||R.key==="ArrowDown"){const k=S(I(R),R.key==="ArrowDown");A((w()??0)+k),R.preventDefault();return}},_=R=>{h==null||h(R),x(!1),A(w())},L=R=>{v==null||v(R),x(!0)};return u($t,{ref:R=>{m=R,b.current=R},type:"text",min:s,max:a,value:y===!1&&typeof i=="number"?Ja(f,i):f,onChange:E,onKeyDown:N,onBlur:_,onFocus:L,...T})}function ts({children:e,container:t}){return Mt.createPortal(e,t??document.body)}const ns="/assets/horizontal-resize-76acb105.svg";function ge({value:e,onChange:t,min:n,max:r,children:o}){const i=c.useRef(null),[s,a]=c.useState(),l=c.useRef(e);function d(v){var m;l.current=e,v.preventDefault(),a({x:v.clientX,y:v.clientY}),(m=i.current)==null||m.requestPointerLock(),document.addEventListener("mousemove",p),document.addEventListener("mouseup",h)}function p(v){v.preventDefault(),v.stopPropagation();const m=Oi(l.current+v.movementX,n,r);t(m),l.current=m,a(T=>{const{x:f,y:g}=T??{x:0,y:0};let b=f+v.movementX,y=g+v.movementY;return b>window.innerWidth?b-=window.innerWidth:b<0&&(b+=window.innerWidth),y>window.innerHeight?y-=window.innerHeight:y<0&&(y+=window.innerHeight),{x:b,y}})}function h(v){v.preventDefault(),a(void 0),document.exitPointerLock(),document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",h)}return $("span",{className:"Scrubber",ref:i,onMouseDown:d,children:[o,s&&u(ts,{children:u("span",{className:"Scrubber__cursor",style:{transform:`translate(calc(${s.x}px - 50%), calc(${s.y}px - 38%))`},children:u(B,{color:"surface",src:ns})})})]})}function Ot({value:e,type:t,onChange:n,disabled:r}){const[o=0,i=0,s=0,a=0]=e,l=(d,p,h,v)=>{const m=[d,p];(t=="vec3"||t==="vec4")&&m.push(h),t==="vec4"&&m.push(v),n(new Float32Array(m))};return $("div",{className:"flex items-center grow gap-xs",children:[u(Z,{before:u(ge,{value:o,onChange:d=>l(d,i,s,a),children:u(ee,{color:"surface-low",className:"shrink-0",children:"X"})}),className:"flex grow basis-0",type:"f32",value:o,displayPrecision:3,inputSize:"sm",onChange:d=>l(d,i,s,a),outlined:!0,disabled:r}),u(Z,{before:u(ge,{value:i,onChange:d=>l(o,d,s,a),children:u(ee,{color:"surface-low",className:"shrink-0",children:"Y"})}),className:"flex grow basis-0",type:"f32",value:i,displayPrecision:3,inputSize:"sm",onChange:d=>l(o,d,s,a),outlined:!0,disabled:r}),(t==="vec3"||t==="vec4")&&u(H,{children:u(Z,{before:u(ge,{value:s,onChange:d=>l(o,i,d,a),children:u(ee,{color:"surface-low",className:"shrink-0",children:"Z"})}),className:"flex grow basis-0",type:"f32",value:s,displayPrecision:3,inputSize:"sm",onChange:d=>l(o,i,d,a),outlined:!0,disabled:r})}),t==="vec4"&&u(H,{children:u(Z,{before:u(ge,{value:a,onChange:d=>l(o,i,s,d),children:u(ee,{color:"surface-low",className:"shrink-0",children:"W"})}),className:"flex grow basis-0",type:"f32",value:a,displayPrecision:3,inputSize:"sm",onChange:d=>l(o,i,s,d),outlined:!0,disabled:r})})]})}function We(){return(We=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function On(e,t){if(e==null)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(o[n]=e[n]);return o}function gn(e){var t=c.useRef(e),n=c.useRef(function(r){t.current&&t.current(r)});return t.current=e,n.current}var ze=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),e>n?n:e<t?t:e},Je=function(e){return"touches"in e},vn=function(e){return e&&e.ownerDocument.defaultView||self},hr=function(e,t,n){var r=e.getBoundingClientRect(),o=Je(t)?function(i,s){for(var a=0;a<i.length;a++)if(i[a].identifier===s)return i[a];return i[0]}(t.touches,n):t;return{left:ze((o.pageX-(r.left+vn(e).pageXOffset))/r.width),top:ze((o.pageY-(r.top+vn(e).pageYOffset))/r.height)}},pr=function(e){!Je(e)&&e.preventDefault()},kn=F.memo(function(e){var t=e.onMove,n=e.onKey,r=On(e,["onMove","onKey"]),o=c.useRef(null),i=gn(t),s=gn(n),a=c.useRef(null),l=c.useRef(!1),d=c.useMemo(function(){var m=function(g){pr(g),(Je(g)?g.touches.length>0:g.buttons>0)&&o.current?i(hr(o.current,g,a.current)):f(!1)},T=function(){return f(!1)};function f(g){var b=l.current,y=vn(o.current),x=g?y.addEventListener:y.removeEventListener;x(b?"touchmove":"mousemove",m),x(b?"touchend":"mouseup",T)}return[function(g){var b=g.nativeEvent,y=o.current;if(y&&(pr(b),!function(w,C){return C&&!Je(w)}(b,l.current)&&y)){if(Je(b)){l.current=!0;var x=b.changedTouches||[];x.length&&(a.current=x[0].identifier)}y.focus(),i(hr(y,b,a.current)),f(!0)}},function(g){var b=g.which||g.keyCode;b<37||b>40||(g.preventDefault(),s({left:b===39?.05:b===37?-.05:0,top:b===40?.05:b===38?-.05:0}))},f]},[s,i]),p=d[0],h=d[1],v=d[2];return c.useEffect(function(){return v},[v]),F.createElement("div",We({},r,{onTouchStart:p,onMouseDown:p,className:"react-colorful__interactive",ref:o,onKeyDown:h,tabIndex:0,role:"slider"}))}),lt=function(e){return e.filter(Boolean).join(" ")},_n=function(e){var t=e.color,n=e.left,r=e.top,o=r===void 0?.5:r,i=lt(["react-colorful__pointer",e.className]);return F.createElement("div",{className:i,style:{top:100*o+"%",left:100*n+"%"}},F.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},X=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=Math.pow(10,t)),Math.round(n*e)/n},ro=function(e){var t=e.s,n=e.v,r=e.a,o=(200-t)*n/100;return{h:X(e.h),s:X(o>0&&o<200?t*n/100/(o<=100?o:200-o)*100:0),l:X(o/2),a:X(r,2)}},bn=function(e){var t=ro(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},Qt=function(e){var t=ro(e);return"hsla("+t.h+", "+t.s+"%, "+t.l+"%, "+t.a+")"},oo=function(e){var t=e.h,n=e.s,r=e.v,o=e.a;t=t/360*6,n/=100,r/=100;var i=Math.floor(t),s=r*(1-n),a=r*(1-(t-i)*n),l=r*(1-(1-t+i)*n),d=i%6;return{r:X(255*[r,a,s,s,l,r][d]),g:X(255*[l,r,r,a,s,s][d]),b:X(255*[s,s,l,r,r,a][d]),a:X(o,2)}},io=function(e){var t=e.r,n=e.g,r=e.b,o=e.a,i=Math.max(t,n,r),s=i-Math.min(t,n,r),a=s?i===t?(n-r)/s:i===n?2+(r-t)/s:4+(t-n)/s:0;return{h:X(60*(a<0?a+6:a)),s:X(i?s/i*100:0),v:X(i/255*100),a:o}},ao=F.memo(function(e){var t=e.hue,n=e.onChange,r=lt(["react-colorful__hue",e.className]);return F.createElement("div",{className:r},F.createElement(kn,{onMove:function(o){n({h:360*o.left})},onKey:function(o){n({h:ze(t+360*o.left,0,360)})},"aria-label":"Hue","aria-valuenow":X(t),"aria-valuemax":"360","aria-valuemin":"0"},F.createElement(_n,{className:"react-colorful__hue-pointer",left:t/360,color:bn({h:t,s:100,v:100,a:1})})))}),so=F.memo(function(e){var t=e.hsva,n=e.onChange,r={backgroundColor:bn({h:t.h,s:100,v:100,a:1})};return F.createElement("div",{className:"react-colorful__saturation",style:r},F.createElement(kn,{onMove:function(o){n({s:100*o.left,v:100-100*o.top})},onKey:function(o){n({s:ze(t.s+100*o.left,0,100),v:ze(t.v-100*o.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+X(t.s)+"%, Brightness "+X(t.v)+"%"},F.createElement(_n,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:bn(t)})))}),Dn=function(e,t){if(e===t)return!0;for(var n in e)if(e[n]!==t[n])return!1;return!0};function co(e,t,n){var r=gn(n),o=c.useState(function(){return e.toHsva(t)}),i=o[0],s=o[1],a=c.useRef({color:t,hsva:i});c.useEffect(function(){if(!e.equal(t,a.current.color)){var d=e.toHsva(t);a.current={hsva:d,color:t},s(d)}},[t,e]),c.useEffect(function(){var d;Dn(i,a.current.hsva)||e.equal(d=e.fromHsva(i),a.current.color)||(a.current={hsva:i,color:d},r(d))},[i,e,r]);var l=c.useCallback(function(d){s(function(p){return Object.assign({},p,d)})},[]);return[i,l]}var rs=typeof window<"u"?c.useLayoutEffect:c.useEffect,os=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},mr=new Map,lo=function(e){rs(function(){var t=e.current?e.current.ownerDocument:document;if(t!==void 0&&!mr.has(t)){var n=t.createElement("style");n.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,mr.set(t,n);var r=os();r&&n.setAttribute("nonce",r),t.head.appendChild(n)}},[])},is=function(e){var t=e.className,n=e.colorModel,r=e.color,o=r===void 0?n.defaultColor:r,i=e.onChange,s=On(e,["className","colorModel","color","onChange"]),a=c.useRef(null);lo(a);var l=co(n,o,i),d=l[0],p=l[1],h=lt(["react-colorful",t]);return F.createElement("div",We({},s,{ref:a,className:h}),F.createElement(so,{hsva:d,onChange:p}),F.createElement(ao,{hue:d.h,onChange:p,className:"react-colorful__last-control"}))},as=function(e){var t=e.className,n=e.hsva,r=e.onChange,o={backgroundImage:"linear-gradient(90deg, "+Qt(Object.assign({},n,{a:0}))+", "+Qt(Object.assign({},n,{a:1}))+")"},i=lt(["react-colorful__alpha",t]),s=X(100*n.a);return F.createElement("div",{className:i},F.createElement("div",{className:"react-colorful__alpha-gradient",style:o}),F.createElement(kn,{onMove:function(a){r({a:a.left})},onKey:function(a){r({a:ze(n.a+a.left)})},"aria-label":"Alpha","aria-valuetext":s+"%","aria-valuenow":s,"aria-valuemin":"0","aria-valuemax":"100"},F.createElement(_n,{className:"react-colorful__alpha-pointer",left:n.a,color:Qt(n)})))},ss=function(e){var t=e.className,n=e.colorModel,r=e.color,o=r===void 0?n.defaultColor:r,i=e.onChange,s=On(e,["className","colorModel","color","onChange"]),a=c.useRef(null);lo(a);var l=co(n,o,i),d=l[0],p=l[1],h=lt(["react-colorful",t]);return F.createElement("div",We({},s,{ref:a,className:h}),F.createElement(so,{hsva:d,onChange:p}),F.createElement(ao,{hue:d.h,onChange:p}),F.createElement(as,{hsva:d,onChange:p,className:"react-colorful__last-control"}))},cs={defaultColor:{r:0,g:0,b:0,a:1},toHsva:io,fromHsva:oo,equal:Dn},ls=function(e){return F.createElement(ss,We({},e,{colorModel:cs}))},us={defaultColor:{r:0,g:0,b:0},toHsva:function(e){return io({r:e.r,g:e.g,b:e.b,a:1})},fromHsva:function(e){return{r:(t=oo(e)).r,g:t.g,b:t.b};var t},equal:Dn},ds=function(e){return F.createElement(is,We({},e,{colorModel:us}))};function ce(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function Nn(e,t=[]){let n=[];function r(i,s){const a=c.createContext(s),l=n.length;n=[...n,s];function d(h){const{scope:v,children:m,...T}=h,f=(v==null?void 0:v[e][l])||a,g=c.useMemo(()=>T,Object.values(T));return c.createElement(f.Provider,{value:g},m)}function p(h,v){const m=(v==null?void 0:v[e][l])||a,T=c.useContext(m);if(T)return T;if(s!==void 0)return s;throw new Error(`\`${h}\` must be used within \`${i}\``)}return d.displayName=i+"Provider",[d,p]}const o=()=>{const i=n.map(s=>c.createContext(s));return function(a){const l=(a==null?void 0:a[e])||i;return c.useMemo(()=>({[`__scope${e}`]:{...a,[e]:l}}),[a,l])}};return o.scopeName=e,[r,fs(o,...t)]}function fs(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const s=r.reduce((a,{useScope:l,scopeName:d})=>{const h=l(i)[`__scope${d}`];return{...a,...h}},{});return c.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}const uo=c.forwardRef((e,t)=>{const{children:n,...r}=e,o=c.Children.toArray(n),i=o.find(ps);if(i){const s=i.props.children,a=o.map(l=>l===i?c.Children.count(s)>1?c.Children.only(null):c.isValidElement(s)?s.props.children:null:l);return c.createElement(yn,G({},r,{ref:t}),c.isValidElement(s)?c.cloneElement(s,void 0,a):null)}return c.createElement(yn,G({},r,{ref:t}),n)});uo.displayName="Slot";const yn=c.forwardRef((e,t)=>{const{children:n,...r}=e;return c.isValidElement(n)?c.cloneElement(n,{...ms(r,n.props),ref:Gr(t,n.ref)}):c.Children.count(n)>1?c.Children.only(null):null});yn.displayName="SlotClone";const hs=({children:e})=>c.createElement(c.Fragment,null,e);function ps(e){return c.isValidElement(e)&&e.type===hs}function ms(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...a)=>{i(...a),o(...a)}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}const gs=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"],de=gs.reduce((e,t)=>{const n=c.forwardRef((r,o)=>{const{asChild:i,...s}=r,a=i?uo:t;return c.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),c.createElement(a,G({},s,{ref:o}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function vs(e,t){e&&Mt.flushSync(()=>e.dispatchEvent(t))}function Ue(e){const t=c.useRef(e);return c.useEffect(()=>{t.current=e}),c.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function bs(e,t=globalThis==null?void 0:globalThis.document){const n=Ue(e);c.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r),()=>t.removeEventListener("keydown",r)},[n,t])}const wn="dismissableLayer.update",ys="dismissableLayer.pointerDownOutside",ws="dismissableLayer.focusOutside";let gr;const Ts=c.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),xs=c.forwardRef((e,t)=>{var n;const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:o,onPointerDownOutside:i,onFocusOutside:s,onInteractOutside:a,onDismiss:l,...d}=e,p=c.useContext(Ts),[h,v]=c.useState(null),m=(n=h==null?void 0:h.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,[,T]=c.useState({}),f=Se(t,E=>v(E)),g=Array.from(p.layers),[b]=[...p.layersWithOutsidePointerEventsDisabled].slice(-1),y=g.indexOf(b),x=h?g.indexOf(h):-1,w=p.layersWithOutsidePointerEventsDisabled.size>0,C=x>=y,S=Ss(E=>{const A=E.target,M=[...p.branches].some(N=>N.contains(A));!C||M||(i==null||i(E),a==null||a(E),E.defaultPrevented||l==null||l())},m),I=Cs(E=>{const A=E.target;[...p.branches].some(N=>N.contains(A))||(s==null||s(E),a==null||a(E),E.defaultPrevented||l==null||l())},m);return bs(E=>{x===p.layers.size-1&&(o==null||o(E),!E.defaultPrevented&&l&&(E.preventDefault(),l()))},m),c.useEffect(()=>{if(h)return r&&(p.layersWithOutsidePointerEventsDisabled.size===0&&(gr=m.body.style.pointerEvents,m.body.style.pointerEvents="none"),p.layersWithOutsidePointerEventsDisabled.add(h)),p.layers.add(h),vr(),()=>{r&&p.layersWithOutsidePointerEventsDisabled.size===1&&(m.body.style.pointerEvents=gr)}},[h,m,r,p]),c.useEffect(()=>()=>{h&&(p.layers.delete(h),p.layersWithOutsidePointerEventsDisabled.delete(h),vr())},[h,p]),c.useEffect(()=>{const E=()=>T({});return document.addEventListener(wn,E),()=>document.removeEventListener(wn,E)},[]),c.createElement(de.div,G({},d,{ref:f,style:{pointerEvents:w?C?"auto":"none":void 0,...e.style},onFocusCapture:ce(e.onFocusCapture,I.onFocusCapture),onBlurCapture:ce(e.onBlurCapture,I.onBlurCapture),onPointerDownCapture:ce(e.onPointerDownCapture,S.onPointerDownCapture)}))});function Ss(e,t=globalThis==null?void 0:globalThis.document){const n=Ue(e),r=c.useRef(!1),o=c.useRef(()=>{});return c.useEffect(()=>{const i=a=>{if(a.target&&!r.current){let d=function(){fo(ys,n,l,{discrete:!0})};const l={originalEvent:a};a.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=d,t.addEventListener("click",o.current,{once:!0})):d()}r.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",i),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function Cs(e,t=globalThis==null?void 0:globalThis.document){const n=Ue(e),r=c.useRef(!1);return c.useEffect(()=>{const o=i=>{i.target&&!r.current&&fo(ws,n,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function vr(){const e=new CustomEvent(wn);document.dispatchEvent(e)}function fo(e,t,n,{discrete:r}){const o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?vs(o,i):o.dispatchEvent(i)}let Jt=0;function Is(){c.useEffect(()=>{var e,t;const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=n[0])!==null&&e!==void 0?e:br()),document.body.insertAdjacentElement("beforeend",(t=n[1])!==null&&t!==void 0?t:br()),Jt++,()=>{Jt===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(r=>r.remove()),Jt--}},[])}function br(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}const Zt="focusScope.autoFocusOnMount",en="focusScope.autoFocusOnUnmount",yr={bubbles:!1,cancelable:!0},Es=c.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:i,...s}=e,[a,l]=c.useState(null),d=Ue(o),p=Ue(i),h=c.useRef(null),v=Se(t,f=>l(f)),m=c.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;c.useEffect(()=>{if(r){let f=function(b){if(m.paused||!a)return;const y=b.target;a.contains(y)?h.current=y:Ie(h.current,{select:!0})},g=function(b){m.paused||!a||a.contains(b.relatedTarget)||Ie(h.current,{select:!0})};return document.addEventListener("focusin",f),document.addEventListener("focusout",g),()=>{document.removeEventListener("focusin",f),document.removeEventListener("focusout",g)}}},[r,a,m.paused]),c.useEffect(()=>{if(a){Tr.add(m);const f=document.activeElement;if(!a.contains(f)){const b=new CustomEvent(Zt,yr);a.addEventListener(Zt,d),a.dispatchEvent(b),b.defaultPrevented||(As(Os(ho(a)),{select:!0}),document.activeElement===f&&Ie(a))}return()=>{a.removeEventListener(Zt,d),setTimeout(()=>{const b=new CustomEvent(en,yr);a.addEventListener(en,p),a.dispatchEvent(b),b.defaultPrevented||Ie(f??document.body,{select:!0}),a.removeEventListener(en,p),Tr.remove(m)},0)}}},[a,d,p,m]);const T=c.useCallback(f=>{if(!n&&!r||m.paused)return;const g=f.key==="Tab"&&!f.altKey&&!f.ctrlKey&&!f.metaKey,b=document.activeElement;if(g&&b){const y=f.currentTarget,[x,w]=Rs(y);x&&w?!f.shiftKey&&b===w?(f.preventDefault(),n&&Ie(x,{select:!0})):f.shiftKey&&b===x&&(f.preventDefault(),n&&Ie(w,{select:!0})):b===y&&f.preventDefault()}},[n,r,m.paused]);return c.createElement(de.div,G({tabIndex:-1},s,{ref:v,onKeyDown:T}))});function As(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(Ie(r,{select:t}),document.activeElement!==n)return}function Rs(e){const t=ho(e),n=wr(t,e),r=wr(t.reverse(),e);return[n,r]}function ho(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function wr(e,t){for(const n of e)if(!Ps(n,{upTo:t}))return n}function Ps(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Ms(e){return e instanceof HTMLInputElement&&"select"in e}function Ie(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&Ms(e)&&t&&e.select()}}const Tr=$s();function $s(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=xr(e,t),e.unshift(t)},remove(t){var n;e=xr(e,t),(n=e[0])===null||n===void 0||n.resume()}}}function xr(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function Os(e){return e.filter(t=>t.tagName!=="A")}const Xe=globalThis!=null&&globalThis.document?c.useLayoutEffect:()=>{},ks=Zo["useId".toString()]||(()=>{});let _s=0;function Ds(e){const[t,n]=c.useState(ks());return Xe(()=>{e||n(r=>r??String(_s++))},[e]),e||(t?`radix-${t}`:"")}function $e(e){return e.split("-")[0]}function ut(e){return e.split("-")[1]}function Be(e){return["top","bottom"].includes($e(e))?"x":"y"}function Ln(e){return e==="y"?"height":"width"}function Sr(e,t,n){let{reference:r,floating:o}=e;const i=r.x+r.width/2-o.width/2,s=r.y+r.height/2-o.height/2,a=Be(t),l=Ln(a),d=r[l]/2-o[l]/2,p=a==="x";let h;switch($e(t)){case"top":h={x:i,y:r.y-o.height};break;case"bottom":h={x:i,y:r.y+r.height};break;case"right":h={x:r.x+r.width,y:s};break;case"left":h={x:r.x-o.width,y:s};break;default:h={x:r.x,y:r.y}}switch(ut(t)){case"start":h[a]-=d*(n&&p?-1:1);break;case"end":h[a]+=d*(n&&p?-1:1)}return h}const Ns=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:s}=n,a=await(s.isRTL==null?void 0:s.isRTL(t));let l=await s.getElementRects({reference:e,floating:t,strategy:o}),{x:d,y:p}=Sr(l,r,a),h=r,v={},m=0;for(let T=0;T<i.length;T++){const{name:f,fn:g}=i[T],{x:b,y,data:x,reset:w}=await g({x:d,y:p,initialPlacement:r,placement:h,strategy:o,middlewareData:v,rects:l,platform:s,elements:{reference:e,floating:t}});d=b??d,p=y??p,v={...v,[f]:{...v[f],...x}},w&&m<=50&&(m++,typeof w=="object"&&(w.placement&&(h=w.placement),w.rects&&(l=w.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:o}):w.rects),{x:d,y:p}=Sr(l,h,a)),T=-1)}return{x:d,y:p,placement:h,strategy:o,middlewareData:v}};function po(e){return typeof e!="number"?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(e):{top:e,right:e,bottom:e,left:e}}function xt(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function rt(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:i,rects:s,elements:a,strategy:l}=e,{boundary:d="clippingAncestors",rootBoundary:p="viewport",elementContext:h="floating",altBoundary:v=!1,padding:m=0}=t,T=po(m),f=a[v?h==="floating"?"reference":"floating":h],g=xt(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(f)))==null||n?f:f.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(a.floating)),boundary:d,rootBoundary:p,strategy:l})),b=xt(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:h==="floating"?{...s.floating,x:r,y:o}:s.reference,offsetParent:await(i.getOffsetParent==null?void 0:i.getOffsetParent(a.floating)),strategy:l}):s[h]);return{top:g.top-b.top+T.top,bottom:b.bottom-g.bottom+T.bottom,left:g.left-b.left+T.left,right:b.right-g.right+T.right}}const Ls=Math.min,Ee=Math.max;function Tn(e,t,n){return Ee(e,Ls(t,n))}const Cr=e=>({name:"arrow",options:e,async fn(t){const{element:n,padding:r=0}=e??{},{x:o,y:i,placement:s,rects:a,platform:l}=t;if(n==null)return{};const d=po(r),p={x:o,y:i},h=Be(s),v=ut(s),m=Ln(h),T=await l.getDimensions(n),f=h==="y"?"top":"left",g=h==="y"?"bottom":"right",b=a.reference[m]+a.reference[h]-p[h]-a.floating[m],y=p[h]-a.reference[h],x=await(l.getOffsetParent==null?void 0:l.getOffsetParent(n));let w=x?h==="y"?x.clientHeight||0:x.clientWidth||0:0;w===0&&(w=a.floating[m]);const C=b/2-y/2,S=d[f],I=w-T[m]-d[g],E=w/2-T[m]/2+C,A=Tn(S,E,I),M=(v==="start"?d[f]:d[g])>0&&E!==A&&a.reference[m]<=a.floating[m];return{[h]:p[h]-(M?E<S?S-E:I-E:0),data:{[h]:A,centerOffset:E-A}}}}),zs={left:"right",right:"left",bottom:"top",top:"bottom"};function St(e){return e.replace(/left|right|bottom|top/g,t=>zs[t])}function Us(e,t,n){n===void 0&&(n=!1);const r=ut(e),o=Be(e),i=Ln(o);let s=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(s=St(s)),{main:s,cross:St(s)}}const Fs={start:"end",end:"start"};function Ir(e){return e.replace(/start|end/g,t=>Fs[t])}const mo=["top","right","bottom","left"];mo.reduce((e,t)=>e.concat(t,t+"-start",t+"-end"),[]);const Ws=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n;const{placement:r,middlewareData:o,rects:i,initialPlacement:s,platform:a,elements:l}=t,{mainAxis:d=!0,crossAxis:p=!0,fallbackPlacements:h,fallbackStrategy:v="bestFit",flipAlignment:m=!0,...T}=e,f=$e(r),g=h||(f===s||!m?[St(s)]:function(E){const A=St(E);return[Ir(E),A,Ir(A)]}(s)),b=[s,...g],y=await rt(t,T),x=[];let w=((n=o.flip)==null?void 0:n.overflows)||[];if(d&&x.push(y[f]),p){const{main:E,cross:A}=Us(r,i,await(a.isRTL==null?void 0:a.isRTL(l.floating)));x.push(y[E],y[A])}if(w=[...w,{placement:r,overflows:x}],!x.every(E=>E<=0)){var C,S;const E=((C=(S=o.flip)==null?void 0:S.index)!=null?C:0)+1,A=b[E];if(A)return{data:{index:E,overflows:w},reset:{placement:A}};let M="bottom";switch(v){case"bestFit":{var I;const N=(I=w.map(_=>[_,_.overflows.filter(L=>L>0).reduce((L,R)=>L+R,0)]).sort((_,L)=>_[1]-L[1])[0])==null?void 0:I[0].placement;N&&(M=N);break}case"initialPlacement":M=s}if(r!==M)return{reset:{placement:M}}}return{}}}};function Er(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Ar(e){return mo.some(t=>e[t]>=0)}const Bs=function(e){let{strategy:t="referenceHidden",...n}=e===void 0?{}:e;return{name:"hide",async fn(r){const{rects:o}=r;switch(t){case"referenceHidden":{const i=Er(await rt(r,{...n,elementContext:"reference"}),o.reference);return{data:{referenceHiddenOffsets:i,referenceHidden:Ar(i)}}}case"escaped":{const i=Er(await rt(r,{...n,altBoundary:!0}),o.floating);return{data:{escapedOffsets:i,escaped:Ar(i)}}}default:return{}}}}},js=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:r}=t,o=await async function(i,s){const{placement:a,platform:l,elements:d}=i,p=await(l.isRTL==null?void 0:l.isRTL(d.floating)),h=$e(a),v=ut(a),m=Be(a)==="x",T=["left","top"].includes(h)?-1:1,f=p&&m?-1:1,g=typeof s=="function"?s(i):s;let{mainAxis:b,crossAxis:y,alignmentAxis:x}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...g};return v&&typeof x=="number"&&(y=v==="end"?-1*x:x),m?{x:y*f,y:b*T}:{x:b*T,y:y*f}}(t,e);return{x:n+o.x,y:r+o.y,data:o}}}};function go(e){return e==="x"?"y":"x"}const Gs=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:s=!1,limiter:a={fn:g=>{let{x:b,y}=g;return{x:b,y}}},...l}=e,d={x:n,y:r},p=await rt(t,l),h=Be($e(o)),v=go(h);let m=d[h],T=d[v];if(i){const g=h==="y"?"bottom":"right";m=Tn(m+p[h==="y"?"top":"left"],m,m-p[g])}if(s){const g=v==="y"?"bottom":"right";T=Tn(T+p[v==="y"?"top":"left"],T,T-p[g])}const f=a.fn({...t,[h]:m,[v]:T});return{...f,data:{x:f.x-n,y:f.y-r}}}}},Hs=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:i,middlewareData:s}=t,{offset:a=0,mainAxis:l=!0,crossAxis:d=!0}=e,p={x:n,y:r},h=Be(o),v=go(h);let m=p[h],T=p[v];const f=typeof a=="function"?a({...i,placement:o}):a,g=typeof f=="number"?{mainAxis:f,crossAxis:0}:{mainAxis:0,crossAxis:0,...f};if(l){const C=h==="y"?"height":"width",S=i.reference[h]-i.floating[C]+g.mainAxis,I=i.reference[h]+i.reference[C]-g.mainAxis;m<S?m=S:m>I&&(m=I)}if(d){var b,y,x,w;const C=h==="y"?"width":"height",S=["top","left"].includes($e(o)),I=i.reference[v]-i.floating[C]+(S&&(b=(y=s.offset)==null?void 0:y[v])!=null?b:0)+(S?0:g.crossAxis),E=i.reference[v]+i.reference[C]+(S?0:(x=(w=s.offset)==null?void 0:w[v])!=null?x:0)-(S?g.crossAxis:0);T<I?T=I:T>E&&(T=E)}return{[h]:m,[v]:T}}}},Vs=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:i}=t,{apply:s,...a}=e,l=await rt(t,a),d=$e(n),p=ut(n);let h,v;d==="top"||d==="bottom"?(h=d,v=p===(await(o.isRTL==null?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(v=d,h=p==="end"?"top":"bottom");const m=Ee(l.left,0),T=Ee(l.right,0),f=Ee(l.top,0),g=Ee(l.bottom,0),b={availableHeight:r.floating.height-(["left","right"].includes(n)?2*(f!==0||g!==0?f+g:Ee(l.top,l.bottom)):l[h]),availableWidth:r.floating.width-(["top","bottom"].includes(n)?2*(m!==0||T!==0?m+T:Ee(l.left,l.right)):l[v])},y=await o.getDimensions(i.floating);s==null||s({...t,...b});const x=await o.getDimensions(i.floating);return y.width!==x.width||y.height!==x.height?{reset:{rects:!0}}:{}}}};function vo(e){return e&&e.document&&e.location&&e.alert&&e.setInterval}function fe(e){if(e==null)return window;if(!vo(e)){const t=e.ownerDocument;return t&&t.defaultView||window}return e}function dt(e){return fe(e).getComputedStyle(e)}function le(e){return vo(e)?"":e?(e.nodeName||"").toLowerCase():""}function bo(){const e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(t=>t.brand+"/"+t.version).join(" "):navigator.userAgent}function se(e){return e instanceof fe(e).HTMLElement}function Te(e){return e instanceof fe(e).Element}function zn(e){return typeof ShadowRoot>"u"?!1:e instanceof fe(e).ShadowRoot||e instanceof ShadowRoot}function kt(e){const{overflow:t,overflowX:n,overflowY:r}=dt(e);return/auto|scroll|overlay|hidden/.test(t+r+n)}function qs(e){return["table","td","th"].includes(le(e))}function Rr(e){const t=/firefox/i.test(bo()),n=dt(e);return n.transform!=="none"||n.perspective!=="none"||n.contain==="paint"||["transform","perspective"].includes(n.willChange)||t&&n.willChange==="filter"||t&&!!n.filter&&n.filter!=="none"}function yo(){return!/^((?!chrome|android).)*safari/i.test(bo())}const Pr=Math.min,Ze=Math.max,Ct=Math.round;function ue(e,t,n){var r,o,i,s;t===void 0&&(t=!1),n===void 0&&(n=!1);const a=e.getBoundingClientRect();let l=1,d=1;t&&se(e)&&(l=e.offsetWidth>0&&Ct(a.width)/e.offsetWidth||1,d=e.offsetHeight>0&&Ct(a.height)/e.offsetHeight||1);const p=Te(e)?fe(e):window,h=!yo()&&n,v=(a.left+(h&&(r=(o=p.visualViewport)==null?void 0:o.offsetLeft)!=null?r:0))/l,m=(a.top+(h&&(i=(s=p.visualViewport)==null?void 0:s.offsetTop)!=null?i:0))/d,T=a.width/l,f=a.height/d;return{width:T,height:f,top:m,right:v+T,bottom:m+f,left:v,x:v,y:m}}function be(e){return(t=e,(t instanceof fe(t).Node?e.ownerDocument:e.document)||window.document).documentElement;var t}function _t(e){return Te(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function wo(e){return ue(be(e)).left+_t(e).scrollLeft}function Ks(e,t,n){const r=se(t),o=be(t),i=ue(e,r&&function(l){const d=ue(l);return Ct(d.width)!==l.offsetWidth||Ct(d.height)!==l.offsetHeight}(t),n==="fixed");let s={scrollLeft:0,scrollTop:0};const a={x:0,y:0};if(r||!r&&n!=="fixed")if((le(t)!=="body"||kt(o))&&(s=_t(t)),se(t)){const l=ue(t,!0);a.x=l.x+t.clientLeft,a.y=l.y+t.clientTop}else o&&(a.x=wo(o));return{x:i.left+s.scrollLeft-a.x,y:i.top+s.scrollTop-a.y,width:i.width,height:i.height}}function To(e){return le(e)==="html"?e:e.assignedSlot||e.parentNode||(zn(e)?e.host:null)||be(e)}function Mr(e){return se(e)&&getComputedStyle(e).position!=="fixed"?e.offsetParent:null}function xn(e){const t=fe(e);let n=Mr(e);for(;n&&qs(n)&&getComputedStyle(n).position==="static";)n=Mr(n);return n&&(le(n)==="html"||le(n)==="body"&&getComputedStyle(n).position==="static"&&!Rr(n))?t:n||function(r){let o=To(r);for(zn(o)&&(o=o.host);se(o)&&!["html","body"].includes(le(o));){if(Rr(o))return o;o=o.parentNode}return null}(e)||t}function $r(e){if(se(e))return{width:e.offsetWidth,height:e.offsetHeight};const t=ue(e);return{width:t.width,height:t.height}}function xo(e){const t=To(e);return["html","body","#document"].includes(le(t))?e.ownerDocument.body:se(t)&&kt(t)?t:xo(t)}function It(e,t){var n;t===void 0&&(t=[]);const r=xo(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),i=fe(r),s=o?[i].concat(i.visualViewport||[],kt(r)?r:[]):r,a=t.concat(s);return o?a:a.concat(It(s))}function Or(e,t,n){return t==="viewport"?xt(function(r,o){const i=fe(r),s=be(r),a=i.visualViewport;let l=s.clientWidth,d=s.clientHeight,p=0,h=0;if(a){l=a.width,d=a.height;const v=yo();(v||!v&&o==="fixed")&&(p=a.offsetLeft,h=a.offsetTop)}return{width:l,height:d,x:p,y:h}}(e,n)):Te(t)?function(r,o){const i=ue(r,!1,o==="fixed"),s=i.top+r.clientTop,a=i.left+r.clientLeft;return{top:s,left:a,x:a,y:s,right:a+r.clientWidth,bottom:s+r.clientHeight,width:r.clientWidth,height:r.clientHeight}}(t,n):xt(function(r){var o;const i=be(r),s=_t(r),a=(o=r.ownerDocument)==null?void 0:o.body,l=Ze(i.scrollWidth,i.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),d=Ze(i.scrollHeight,i.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0);let p=-s.scrollLeft+wo(r);const h=-s.scrollTop;return dt(a||i).direction==="rtl"&&(p+=Ze(i.clientWidth,a?a.clientWidth:0)-l),{width:l,height:d,x:p,y:h}}(be(e)))}function Xs(e){const t=It(e),n=["absolute","fixed"].includes(dt(e).position)&&se(e)?xn(e):e;return Te(n)?t.filter(r=>Te(r)&&function(o,i){const s=i.getRootNode==null?void 0:i.getRootNode();if(o.contains(i))return!0;if(s&&zn(s)){let a=i;do{if(a&&o===a)return!0;a=a.parentNode||a.host}while(a)}return!1}(r,n)&&le(r)!=="body"):[]}const Ys={getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const i=[...n==="clippingAncestors"?Xs(t):[].concat(n),r],s=i[0],a=i.reduce((l,d)=>{const p=Or(t,d,o);return l.top=Ze(p.top,l.top),l.right=Pr(p.right,l.right),l.bottom=Pr(p.bottom,l.bottom),l.left=Ze(p.left,l.left),l},Or(t,s,o));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:r}=e;const o=se(n),i=be(n);if(n===i)return t;let s={scrollLeft:0,scrollTop:0};const a={x:0,y:0};if((o||!o&&r!=="fixed")&&((le(n)!=="body"||kt(i))&&(s=_t(n)),se(n))){const l=ue(n,!0);a.x=l.x+n.clientLeft,a.y=l.y+n.clientTop}return{...t,x:t.x-s.scrollLeft+a.x,y:t.y-s.scrollTop+a.y}},isElement:Te,getDimensions:$r,getOffsetParent:xn,getDocumentElement:be,getElementRects:e=>{let{reference:t,floating:n,strategy:r}=e;return{reference:Ks(t,xn(n),r),floating:{...$r(n),x:0,y:0}}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>dt(e).direction==="rtl"};function Qs(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:s=!0,animationFrame:a=!1}=r,l=o&&!a,d=i&&!a,p=l||d?[...Te(e)?It(e):[],...It(t)]:[];p.forEach(T=>{l&&T.addEventListener("scroll",n,{passive:!0}),d&&T.addEventListener("resize",n)});let h,v=null;if(s){let T=!0;v=new ResizeObserver(()=>{T||n(),T=!1}),Te(e)&&!a&&v.observe(e),v.observe(t)}let m=a?ue(e):null;return a&&function T(){const f=ue(e);!m||f.x===m.x&&f.y===m.y&&f.width===m.width&&f.height===m.height||n(),m=f,h=requestAnimationFrame(T)}(),n(),()=>{var T;p.forEach(f=>{l&&f.removeEventListener("scroll",n),d&&f.removeEventListener("resize",n)}),(T=v)==null||T.disconnect(),v=null,a&&cancelAnimationFrame(h)}}const Js=(e,t,n)=>Ns(e,t,{platform:Ys,...n});var Sn=typeof document<"u"?c.useLayoutEffect:c.useEffect;function Cn(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!Cn(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!==0;){const i=o[r];if(!(i==="_owner"&&e.$$typeof)&&!Cn(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function Zs(e){const t=c.useRef(e);return Sn(()=>{t.current=e}),t}function ec(e){let{middleware:t,placement:n="bottom",strategy:r="absolute",whileElementsMounted:o}=e===void 0?{}:e;const i=c.useRef(null),s=c.useRef(null),a=Zs(o),l=c.useRef(null),[d,p]=c.useState({x:null,y:null,strategy:r,placement:n,middlewareData:{}}),[h,v]=c.useState(t);Cn(h==null?void 0:h.map(x=>{let{options:w}=x;return w}),t==null?void 0:t.map(x=>{let{options:w}=x;return w}))||v(t);const m=c.useCallback(()=>{!i.current||!s.current||Js(i.current,s.current,{middleware:h,placement:n,strategy:r}).then(x=>{T.current&&Mt.flushSync(()=>{p(x)})})},[h,n,r]);Sn(()=>{T.current&&m()},[m]);const T=c.useRef(!1);Sn(()=>(T.current=!0,()=>{T.current=!1}),[]);const f=c.useCallback(()=>{if(typeof l.current=="function"&&(l.current(),l.current=null),i.current&&s.current)if(a.current){const x=a.current(i.current,s.current,m);l.current=x}else m()},[m,a]),g=c.useCallback(x=>{i.current=x,f()},[f]),b=c.useCallback(x=>{s.current=x,f()},[f]),y=c.useMemo(()=>({reference:i,floating:s}),[]);return c.useMemo(()=>({...d,update:m,refs:y,reference:g,floating:b}),[d,m,y,g,b])}const tc=e=>{const{element:t,padding:n}=e;function r(o){return Object.prototype.hasOwnProperty.call(o,"current")}return{name:"arrow",options:e,fn(o){return r(t)?t.current!=null?Cr({element:t.current,padding:n}).fn(o):{}:t?Cr({element:t,padding:n}).fn(o):{}}}},nc=globalThis!=null&&globalThis.document?c.useLayoutEffect:()=>{};function So(e){const[t,n]=c.useState(void 0);return nc(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let s,a;if("borderBoxSize"in i){const l=i.borderBoxSize,d=Array.isArray(l)?l[0]:l;s=d.inlineSize,a=d.blockSize}else s=e.offsetWidth,a=e.offsetHeight;n({width:s,height:a})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}const Co="Popper",[Un,Io]=Nn(Co),[rc,Eo]=Un(Co),oc=e=>{const{__scopePopper:t,children:n}=e,[r,o]=c.useState(null);return c.createElement(rc,{scope:t,anchor:r,onAnchorChange:o},n)},ic="PopperAnchor",ac=c.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...o}=e,i=Eo(ic,n),s=c.useRef(null),a=Se(t,s);return c.useEffect(()=>{i.onAnchorChange((r==null?void 0:r.current)||s.current)}),r?null:c.createElement(de.div,G({},o,{ref:a}))}),Et="PopperContent",[sc,ad]=Un(Et),[cc,lc]=Un(Et,{hasParent:!1,positionUpdateFns:new Set}),uc=c.forwardRef((e,t)=>{var n,r,o,i,s,a,l,d;const{__scopePopper:p,side:h="bottom",sideOffset:v=0,align:m="center",alignOffset:T=0,arrowPadding:f=0,collisionBoundary:g=[],collisionPadding:b=0,sticky:y="partial",hideWhenDetached:x=!1,avoidCollisions:w=!0,onPlaced:C,...S}=e,I=Eo(Et,p),[E,A]=c.useState(null),M=Se(t,_e=>A(_e)),[N,_]=c.useState(null),L=So(N),R=(n=L==null?void 0:L.width)!==null&&n!==void 0?n:0,k=(r=L==null?void 0:L.height)!==null&&r!==void 0?r:0,W=h+(m!=="center"?"-"+m:""),q=typeof b=="number"?b:{top:0,right:0,bottom:0,left:0,...b},K=Array.isArray(g)?g:[g],ne=K.length>0,O={padding:q,boundary:K.filter(fc),altBoundary:ne},{reference:D,floating:j,strategy:V,x:Q,y:oe,placement:ht,middlewareData:he,update:He}=ec({strategy:"fixed",placement:W,whileElementsMounted:Qs,middleware:[hc(),js({mainAxis:v+k,alignmentAxis:T}),w?Gs({mainAxis:!0,crossAxis:!1,limiter:y==="partial"?Hs():void 0,...O}):void 0,N?tc({element:N,padding:f}):void 0,w?Ws({...O}):void 0,Vs({...O,apply:({elements:_e,availableWidth:Yo,availableHeight:Qo})=>{_e.floating.style.setProperty("--radix-popper-available-width",`${Yo}px`),_e.floating.style.setProperty("--radix-popper-available-height",`${Qo}px`)}}),pc({arrowWidth:R,arrowHeight:k}),x?Bs({strategy:"referenceHidden"}):void 0].filter(dc)});Xe(()=>{D(I.anchor)},[D,I.anchor]);const pe=Q!==null&&oe!==null,[pt,Lt]=Ao(ht),Oe=Ue(C);Xe(()=>{pe&&(Oe==null||Oe())},[pe,Oe]);const zt=(o=he.arrow)===null||o===void 0?void 0:o.x,Ut=(i=he.arrow)===null||i===void 0?void 0:i.y,Ft=((s=he.arrow)===null||s===void 0?void 0:s.centerOffset)!==0,[Wt,z]=c.useState();Xe(()=>{E&&z(window.getComputedStyle(E).zIndex)},[E]);const{hasParent:me,positionUpdateFns:ke}=lc(Et,p),Ve=!me;c.useLayoutEffect(()=>{if(!Ve)return ke.add(He),()=>{ke.delete(He)}},[Ve,ke,He]),Xe(()=>{Ve&&pe&&Array.from(ke).reverse().forEach(_e=>requestAnimationFrame(_e))},[Ve,pe,ke]);const Hn={"data-side":pt,"data-align":Lt,...S,ref:M,style:{...S.style,animation:pe?void 0:"none",opacity:(a=he.hide)!==null&&a!==void 0&&a.referenceHidden?0:void 0}};return c.createElement("div",{ref:j,"data-radix-popper-content-wrapper":"",style:{position:V,left:0,top:0,transform:pe?`translate3d(${Math.round(Q)}px, ${Math.round(oe)}px, 0)`:"translate3d(0, -200%, 0)",minWidth:"max-content",zIndex:Wt,["--radix-popper-transform-origin"]:[(l=he.transformOrigin)===null||l===void 0?void 0:l.x,(d=he.transformOrigin)===null||d===void 0?void 0:d.y].join(" ")},dir:e.dir},c.createElement(sc,{scope:p,placedSide:pt,onArrowChange:_,arrowX:zt,arrowY:Ut,shouldHideArrow:Ft},Ve?c.createElement(cc,{scope:p,hasParent:!0,positionUpdateFns:ke},c.createElement(de.div,Hn)):c.createElement(de.div,Hn)))});function dc(e){return e!==void 0}function fc(e){return e!==null}const hc=()=>({name:"anchorCssProperties",fn(e){const{rects:t,elements:n}=e,{width:r,height:o}=t.reference;return n.floating.style.setProperty("--radix-popper-anchor-width",`${r}px`),n.floating.style.setProperty("--radix-popper-anchor-height",`${o}px`),{}}}),pc=e=>({name:"transformOrigin",options:e,fn(t){var n,r,o,i,s;const{placement:a,rects:l,middlewareData:d}=t,h=((n=d.arrow)===null||n===void 0?void 0:n.centerOffset)!==0,v=h?0:e.arrowWidth,m=h?0:e.arrowHeight,[T,f]=Ao(a),g={start:"0%",center:"50%",end:"100%"}[f],b=((r=(o=d.arrow)===null||o===void 0?void 0:o.x)!==null&&r!==void 0?r:0)+v/2,y=((i=(s=d.arrow)===null||s===void 0?void 0:s.y)!==null&&i!==void 0?i:0)+m/2;let x="",w="";return T==="bottom"?(x=h?g:`${b}px`,w=`${-m}px`):T==="top"?(x=h?g:`${b}px`,w=`${l.floating.height+m}px`):T==="right"?(x=`${-m}px`,w=h?g:`${y}px`):T==="left"&&(x=`${l.floating.width+m}px`,w=h?g:`${y}px`),{data:{x,y:w}}}});function Ao(e){const[t,n="center"]=e.split("-");return[t,n]}const mc=oc,gc=ac,vc=uc,bc=c.forwardRef((e,t)=>{var n;const{container:r=globalThis==null||(n=globalThis.document)===null||n===void 0?void 0:n.body,...o}=e;return r?ei.createPortal(c.createElement(de.div,G({},o,{ref:t})),r):null}),kr=globalThis!=null&&globalThis.document?c.useLayoutEffect:()=>{};function yc(e,t){return c.useReducer((n,r)=>{const o=t[n][r];return o??n},e)}const Dt=e=>{const{present:t,children:n}=e,r=wc(t),o=typeof n=="function"?n({present:r.isPresent}):c.Children.only(n),i=Se(r.ref,o.ref);return typeof n=="function"||r.isPresent?c.cloneElement(o,{ref:i}):null};Dt.displayName="Presence";function wc(e){const[t,n]=c.useState(),r=c.useRef({}),o=c.useRef(e),i=c.useRef("none"),s=e?"mounted":"unmounted",[a,l]=yc(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return c.useEffect(()=>{const d=gt(r.current);i.current=a==="mounted"?d:"none"},[a]),kr(()=>{const d=r.current,p=o.current;if(p!==e){const v=i.current,m=gt(d);e?l("MOUNT"):m==="none"||(d==null?void 0:d.display)==="none"?l("UNMOUNT"):l(p&&v!==m?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,l]),kr(()=>{if(t){const d=h=>{const m=gt(r.current).includes(h.animationName);h.target===t&&m&&Mt.flushSync(()=>l("ANIMATION_END"))},p=h=>{h.target===t&&(i.current=gt(r.current))};return t.addEventListener("animationstart",p),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{t.removeEventListener("animationstart",p),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:c.useCallback(d=>{d&&(r.current=getComputedStyle(d)),n(d)},[])}}function gt(e){return(e==null?void 0:e.animationName)||"none"}const Ro=c.forwardRef((e,t)=>{const{children:n,...r}=e,o=c.Children.toArray(n),i=o.find(xc);if(i){const s=i.props.children,a=o.map(l=>l===i?c.Children.count(s)>1?c.Children.only(null):c.isValidElement(s)?s.props.children:null:l);return c.createElement(In,G({},r,{ref:t}),c.isValidElement(s)?c.cloneElement(s,void 0,a):null)}return c.createElement(In,G({},r,{ref:t}),n)});Ro.displayName="Slot";const In=c.forwardRef((e,t)=>{const{children:n,...r}=e;return c.isValidElement(n)?c.cloneElement(n,{...Sc(r,n.props),ref:Gr(t,n.ref)}):c.Children.count(n)>1?c.Children.only(null):null});In.displayName="SlotClone";const Tc=({children:e})=>c.createElement(c.Fragment,null,e);function xc(e){return c.isValidElement(e)&&e.type===Tc}function Sc(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...a)=>{i(...a),o(...a)}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}function Po(e){const t=c.useRef(e);return c.useEffect(()=>{t.current=e}),c.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function Mo({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,o]=Cc({defaultProp:t,onChange:n}),i=e!==void 0,s=i?e:r,a=Po(n),l=c.useCallback(d=>{if(i){const h=typeof d=="function"?d(e):d;h!==e&&a(h)}else o(d)},[i,e,o,a]);return[s,l]}function Cc({defaultProp:e,onChange:t}){const n=c.useState(e),[r]=n,o=c.useRef(r),i=Po(t);return c.useEffect(()=>{o.current!==r&&(i(r),o.current=r)},[r,o,i]),n}const $o="Popover",[Oo,sd]=Nn($o,[Io]),Fn=Io(),[Ic,je]=Oo($o),Ec=e=>{const{__scopePopover:t,children:n,open:r,defaultOpen:o,onOpenChange:i,modal:s=!1}=e,a=Fn(t),l=c.useRef(null),[d,p]=c.useState(!1),[h=!1,v]=Mo({prop:r,defaultProp:o,onChange:i});return c.createElement(mc,a,c.createElement(Ic,{scope:t,contentId:Ds(),triggerRef:l,open:h,onOpenChange:v,onOpenToggle:c.useCallback(()=>v(m=>!m),[v]),hasCustomAnchor:d,onCustomAnchorAdd:c.useCallback(()=>p(!0),[]),onCustomAnchorRemove:c.useCallback(()=>p(!1),[]),modal:s},n))},Ac="PopoverTrigger",Rc=c.forwardRef((e,t)=>{const{__scopePopover:n,...r}=e,o=je(Ac,n),i=Fn(n),s=Se(t,o.triggerRef),a=c.createElement(de.button,G({type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":Do(o.open)},r,{ref:s,onClick:ce(e.onClick,o.onOpenToggle)}));return o.hasCustomAnchor?a:c.createElement(gc,G({asChild:!0},i),a)}),ko="PopoverPortal",[Pc,Mc]=Oo(ko,{forceMount:void 0}),$c=e=>{const{__scopePopover:t,forceMount:n,children:r,container:o}=e,i=je(ko,t);return c.createElement(Pc,{scope:t,forceMount:n},c.createElement(Dt,{present:n||i.open},c.createElement(bc,{asChild:!0,container:o},r)))},ot="PopoverContent",Oc=c.forwardRef((e,t)=>{const n=Mc(ot,e.__scopePopover),{forceMount:r=n.forceMount,...o}=e,i=je(ot,e.__scopePopover);return c.createElement(Dt,{present:r||i.open},i.modal?c.createElement(kc,G({},o,{ref:t})):c.createElement(_c,G({},o,{ref:t})))}),kc=c.forwardRef((e,t)=>{const n=je(ot,e.__scopePopover),r=c.useRef(null),o=Se(t,r),i=c.useRef(!1);return c.useEffect(()=>{const s=r.current;if(s)return Pi(s)},[]),c.createElement(Mi,{as:Ro,allowPinchZoom:!0},c.createElement(_o,G({},e,{ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:ce(e.onCloseAutoFocus,s=>{var a;s.preventDefault(),i.current||(a=n.triggerRef.current)===null||a===void 0||a.focus()}),onPointerDownOutside:ce(e.onPointerDownOutside,s=>{const a=s.detail.originalEvent,l=a.button===0&&a.ctrlKey===!0,d=a.button===2||l;i.current=d},{checkForDefaultPrevented:!1}),onFocusOutside:ce(e.onFocusOutside,s=>s.preventDefault(),{checkForDefaultPrevented:!1})})))}),_c=c.forwardRef((e,t)=>{const n=je(ot,e.__scopePopover),r=c.useRef(!1);return c.createElement(_o,G({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:o=>{var i;if((i=e.onCloseAutoFocus)===null||i===void 0||i.call(e,o),!o.defaultPrevented){var s;r.current||(s=n.triggerRef.current)===null||s===void 0||s.focus(),o.preventDefault()}r.current=!1},onInteractOutside:o=>{var i,s;(i=e.onInteractOutside)===null||i===void 0||i.call(e,o),o.defaultPrevented||(r.current=!0);const a=o.target;((s=n.triggerRef.current)===null||s===void 0?void 0:s.contains(a))&&o.preventDefault()}}))}),_o=c.forwardRef((e,t)=>{const{__scopePopover:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:i,disableOutsidePointerEvents:s,onEscapeKeyDown:a,onPointerDownOutside:l,onFocusOutside:d,onInteractOutside:p,...h}=e,v=je(ot,n),m=Fn(n);return Is(),c.createElement(Es,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:i},c.createElement(xs,{asChild:!0,disableOutsidePointerEvents:s,onInteractOutside:p,onEscapeKeyDown:a,onPointerDownOutside:l,onFocusOutside:d,onDismiss:()=>v.onOpenChange(!1)},c.createElement(vc,G({"data-state":Do(v.open),role:"dialog",id:v.contentId},m,h,{ref:t,style:{...h.style,["--radix-popover-content-transform-origin"]:"var(--radix-popper-transform-origin)"}}))))});function Do(e){return e?"open":"closed"}const Dc=Ec,Nc=Rc,Lc=$c,zc=Oc;const Uc=c.forwardRef(({label:e,color:t,onClick:n,disabled:r},o)=>u("button",{"aria-label":e,className:"ColorPreview",onClick:n,ref:o,disabled:r,children:u("span",{style:{backgroundColor:`rgba(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]??1})`}})}));function Fc({type:e,value:t,onChange:n,children:r}){const o=c.useMemo(()=>({r:t[0],g:t[1],b:t[2],a:t[3]}),[t]),i=c.useCallback(s=>{if(e==="rgb"){const a=s;n(new Float32Array([a.r,a.g,a.b]))}else{const a=s;n(new Float32Array([a.r,a.g,a.b,a.a]))}},[e,n]);return $(Dc,{children:[u(Nc,{asChild:!0,children:r}),u(Lc,{children:u(zc,{sideOffset:5,children:u("div",{className:"ColorPicker",children:e==="rgb"?u(ds,{color:o,onChange:i}):u(ls,{color:o,onChange:i})})})})]})}function No({value:e,type:t,onChange:n,disabled:r}){const o=c.useCallback((i,s,a)=>{const l=[...a];l[i]=s,n(new Float32Array(l))},[n]);return $("div",{className:" ColorInput flex items-center grow",children:[u(Fc,{type:t,value:t==="rgb"?e:Qe(e,void 0,ln),onChange:i=>n(t==="rgb"?i:Qe(i,void 0,qr)),children:u(Uc,{label:"Pick Color",color:t==="rgb"?e:Qe(e,void 0,ln),disabled:r})}),u(Z,{before:u(ge,{value:e[0],onChange:i=>o(0,i,e),min:0,max:255,children:u(ee,{color:"surface-low",className:"shrink-0",children:"R"})}),className:"flex grow basis-0",type:"u32",min:0,max:255,value:e[0],inputSize:"sm",onChange:i=>o(0,i,e),outlined:!0,disabled:r}),u(Z,{before:u(ge,{value:e[1],onChange:i=>o(1,i,e),min:0,max:255,children:u(ee,{color:"surface-low",className:"shrink-0",children:"G"})}),className:"flex grow basis-0",type:"u32",min:0,max:255,value:e[1],inputSize:"sm",onChange:i=>o(1,i,e),outlined:!0,disabled:r}),u(Z,{before:u(ge,{value:e[2],onChange:i=>o(2,i,e),min:0,max:255,children:u(ee,{color:"surface-low",className:"shrink-0",children:"B"})}),className:"flex grow basis-0",type:"u32",min:0,max:255,value:e[2],inputSize:"sm",onChange:i=>o(2,i,e),outlined:!0,disabled:r}),t==="rgba"&&u(H,{children:u(Z,{before:u(ge,{value:e[3],onChange:i=>o(3,i,e),min:0,max:100,children:u(ee,{color:"surface-low",className:"shrink-0",children:"A"})}),className:"flex grow basis-0",type:"u32",min:0,max:100,value:e[3],inputSize:"sm",onChange:i=>o(3,i,e),outlined:!0,disabled:r})})]})}function Wc(e){const t=c.useRef({value:e,previous:e});return c.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}const Lo="Checkbox",[Bc,cd]=Nn(Lo),[jc,Gc]=Bc(Lo),Hc=c.forwardRef((e,t)=>{const{__scopeCheckbox:n,name:r,checked:o,defaultChecked:i,required:s,disabled:a,value:l="on",onCheckedChange:d,...p}=e,[h,v]=c.useState(null),m=Se(t,y=>v(y)),T=c.useRef(!1),f=h?!!h.closest("form"):!0,[g=!1,b]=Mo({prop:o,defaultProp:i,onChange:d});return c.createElement(jc,{scope:n,state:g,disabled:a},c.createElement(de.button,G({type:"button",role:"checkbox","aria-checked":Ae(g)?"mixed":g,"aria-required":s,"data-state":zo(g),"data-disabled":a?"":void 0,disabled:a,value:l},p,{ref:m,onKeyDown:ce(e.onKeyDown,y=>{y.key==="Enter"&&y.preventDefault()}),onClick:ce(e.onClick,y=>{b(x=>Ae(x)?!0:!x),f&&(T.current=y.isPropagationStopped(),T.current||y.stopPropagation())})})),f&&c.createElement(Kc,{control:h,bubbles:!T.current,name:r,value:l,checked:g,required:s,disabled:a,style:{transform:"translateX(-100%)"}}))}),Vc="CheckboxIndicator",qc=c.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:r,...o}=e,i=Gc(Vc,n);return c.createElement(Dt,{present:r||Ae(i.state)||i.state===!0},c.createElement(de.span,G({"data-state":zo(i.state),"data-disabled":i.disabled?"":void 0},o,{ref:t,style:{pointerEvents:"none",...e.style}})))}),Kc=e=>{const{control:t,checked:n,bubbles:r=!0,...o}=e,i=c.useRef(null),s=Wc(n),a=So(t);return c.useEffect(()=>{const l=i.current,d=window.HTMLInputElement.prototype,h=Object.getOwnPropertyDescriptor(d,"checked").set;if(s!==n&&h){const v=new Event("click",{bubbles:r});l.indeterminate=Ae(n),h.call(l,Ae(n)?!1:n),l.dispatchEvent(v)}},[s,n,r]),c.createElement("input",G({type:"checkbox","aria-hidden":!0,defaultChecked:Ae(n)?!1:n},o,{tabIndex:-1,ref:i,style:{...e.style,...a,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function Ae(e){return e==="indeterminate"}function zo(e){return Ae(e)?"indeterminate":e?"checked":"unchecked"}const Xc=Hc,Yc=qc;function Qc({className:e,...t}){return u(Xc,{className:te("Checkbox",e),...t,children:u(Yc,{})})}const Jc="/assets/arrow-back-422c84c9.svg";function Zc(e,t,n){return e.filter(r=>!t.find(o=>o.value===r.value)&&r.label.toLowerCase().startsWith(n.toLowerCase()))}function el({options:e,disabled:t,selected:n,onSelectedChange:r,onSelectedOptionClick:o}){const[i,s]=c.useState(""),[a,l]=c.useState(n),d=c.useMemo(()=>Zc(e,a,i),[e,a,i]),{getDropdownProps:p,removeSelectedItem:h}=qe({selectedItems:a,onStateChange({selectedItems:y,type:x}){switch(x){case qe.stateChangeTypes.SelectedItemKeyDownBackspace:case qe.stateChangeTypes.SelectedItemKeyDownDelete:case qe.stateChangeTypes.DropdownKeyDownBackspace:case qe.stateChangeTypes.FunctionRemoveSelectedItem:l(y??[]),r(y??[]);break}}}),{isOpen:v,getToggleButtonProps:m,getMenuProps:T,getInputProps:f,highlightedIndex:g,getItemProps:b}=Ce({items:d,itemToString:y=>(y==null?void 0:y.label)??"",defaultHighlightedIndex:0,selectedItem:null,stateReducer(y,x){const{changes:w,type:C}=x;switch(C){case Ce.stateChangeTypes.InputKeyDownEnter:case Ce.stateChangeTypes.ItemClick:case Ce.stateChangeTypes.InputBlur:return{...w,...w.selectedItem&&{isOpen:!0,highlightedIndex:0}};default:return w}},onStateChange({inputValue:y,type:x,selectedItem:w}){switch(x){case Ce.stateChangeTypes.InputKeyDownEnter:case Ce.stateChangeTypes.ItemClick:w&&(l([...a,w]),r([...a,w]));break;case Ce.stateChangeTypes.InputChange:s(y??"");break}}});return $("div",{className:"ComboInput",children:[u($t,{className:"flex-wrap",before:a.length>0&&u("div",{className:"flex gap-xs flex-wrap",style:{width:"100%",marginTop:"var(--sp-xs)"},children:a.map((y,x)=>$(Ci,{size:"sm",children:[u("button",{onClick:o?()=>o(y):void 0,style:{cursor:"pointer"},children:u(U,{className:"truncate",variant:"b3",weight:"medium",children:y.label})}),u(Re,{onClick:()=>h(y),size:"sm",iconSrc:Ni,label:"Remove"})]},y.label+x))}),disabled:t,inputSize:"sm",outlined:!0,after:u(Re,{disabled:t,size:"sm",iconSrc:v?Ii:ct,...m()}),...f(p({preventKeyAction:v}))}),u("div",{className:"ComboInput__menu",...T(),children:v&&u(Hr,{className:"ComboInput__menu-scroll",children:d.map((y,x)=>u(Ei,{variant:x===g?"primary":"surface",...b({index:x,item:y}),children:y.label},y.label+x))})})]})}function tl(e){const t=new Float32Array(3);return e&&_i(t,e),t}function nl(e){const t=new Float32Array(4);return Di(t,e),t}const tn=e=>({value:e,label:"name"in e?e.name:"Unnamed"}),rl=1e-5,ol=(e,t)=>Math.abs(e-t)<rl,Ge=(e,t)=>e.length===t.length&&e.every((n,r)=>ol(n,t[r])),Wn=(e,t)=>e.length===t.length&&e.every((n,r)=>n.value===t[r].value);function Y({className:e,name:t,children:n}){return $("div",{className:te("PropertyContainer flex flex-column gap-xxs",e),children:[u("div",{className:"PropertyContainer__title grow flex items-center",children:u(ee,{className:"truncate",children:t})}),u("div",{className:"PropertyContainer__children shrink-0 flex items-center flex-wrap",children:n})]})}const il=c.memo(({propName:e,value:t,setProp:n,propDef:r})=>u(Y,{name:e,children:u(Qc,{checked:t??r.default,onCheckedChange:o=>n(e,o),disabled:!r.mutable})}),(e,t)=>e.value===t.value),al=c.memo(({propName:e,value:t,setProp:n,propDef:r})=>u(Y,{name:e,children:u(Z,{inputSize:"sm",type:"u32",value:t,onChange:o=>n(e,o),disabled:!r.mutable,outlined:!0})}),(e,t)=>e.value===t.value),sl=c.memo(({propName:e,value:t,setProp:n,propDef:r})=>u(Y,{name:e,children:u(Z,{inputSize:"sm",type:"f32",value:t,onChange:o=>n(e,o),disabled:!r.mutable,outlined:!0})}),(e,t)=>e.value===t.value),cl=c.memo(({propName:e,value:t,propDef:n,setProp:r})=>u(Y,{name:e,children:u(Ot,{value:t??n.default,type:"vec2",onChange:o=>r(e,o),disabled:!n.mutable})}),(e,t)=>Ge(e.value,t.value)),ll=c.memo(({propName:e,value:t,propDef:n,setProp:r})=>u(Y,{name:e,children:u(Ot,{value:t??n.default,type:"vec3",onChange:o=>r(e,o),disabled:!n.mutable})}),(e,t)=>Ge(e.value,t.value)),ul=c.memo(({propName:e,value:t,propDef:n,setProp:r})=>u(Y,{name:e,children:u(Ot,{value:t??n.default,type:"vec4",onChange:o=>r(e,o),disabled:!n.mutable})}),(e,t)=>Ge(e.value,t.value)),dl=c.memo(({propName:e,value:t,propDef:n,setProp:r})=>u(Y,{name:e==="quaternion"?"Rotation":e,children:u(Ot,{value:tl(t),type:"vec3",onChange:o=>{r(e,nl(o))},disabled:!n.mutable})}),(e,t)=>Ge(e.value,t.value)),fl=c.memo(({propName:e,value:t,propDef:n,setProp:r})=>u(Y,{name:e,children:u(No,{type:"rgb",value:Jn(t??n.default,Kr),onChange:o=>r(e,Jn(o,Xr)),disabled:!n.mutable})}),(e,t)=>Ge(e.value,t.value)),hl=c.memo(({propName:e,value:t,propDef:n,setProp:r})=>u(Y,{name:e,children:u(No,{type:"rgba",value:Qe(t??n.default,Kr,qr),onChange:o=>r(e,Qe(o,Xr,ln)),disabled:!n.mutable})}),(e,t)=>Ge(e.value,t.value)),pl=c.memo(({propName:e,value:t,setProp:n,propDef:r})=>u(Y,{name:e,children:u(Z,{type:"u32",inputSize:"sm",min:0,value:t,onChange:o=>n(e,o),disabled:!r.mutable,outlined:!0})}),(e,t)=>e.value===t.value),ml=c.memo(({propName:e,value:t,setProp:n,propDef:r,options:o})=>u(Y,{name:e,children:u(Pn,{value:t,options:o,onChange:i=>n(e,i),disabled:!r.mutable})}),(e,t)=>e.value===t.value&&Wn(e.options,t.options)),gl=c.memo(({propName:e,value:t,setProp:n,propDef:r})=>{const o=c.useRef(null);return o.current&&o.current.value!==t&&(o.current.value=t),u(Y,{name:e,children:u($t,{ref:o,onBlur:a=>{const l=a.currentTarget.value.trim();l!==""&&t!==l&&n(e,l)},onKeyDown:a=>{const l=a.currentTarget.value.trim();l!==""&&t!==l&&(a.key==="Enter"&&n(e,l),a.key==="Escape"&&(a.currentTarget.value=t))},inputSize:"sm",defaultValue:t,disabled:!r.mutable,outlined:!0})})},(e,t)=>e.value===t.value),vl=c.memo(({propName:e,propDef:t})=>u(Y,{name:e,children:u($t,{inputSize:"sm",value:`size: ${t.size}`,disabled:!0,outlined:!0,readOnly:!0})}),(e,t)=>e.propDef===t.propDef),bl=c.memo(({propName:e,value:t,setProp:n,propDef:r,options:o,goToRef:i})=>u(Y,{name:e,children:u(Pn,{before:$(H,{children:[u(Re,{size:"sm",iconSrc:Mn,label:"Select Resource",onClick:()=>i(t.eid)}),u("div",{className:"PropertiesPanel__input-divider"})]}),value:t,onChange:s=>n(e,s),options:o,disabled:!r.mutable})}),(e,t)=>e.value===t.value&&Wn(e.options,t.options)),yl=c.memo(({propName:e,value:t,setProp:n,propDef:r,options:o,goToRef:i})=>u(Y,{name:e,children:u(el,{options:o,selected:t,onSelectedChange:s=>n(e,s),onSelectedOptionClick:s=>i(s.value.eid),disabled:!r.mutable})}),(e,t)=>e.value===t.value&&Wn(e.options,t.options));function wl(e,t){function n(o,i){bi(e,t.eid,o,i)}return t.resourceDef.schema,{bool:(o,i)=>{const s=t[o];return typeof s!="boolean"?null:u(il,{propName:o,value:s,setProp:n,propDef:i},o)},u32:(o,i)=>{const s=t[o];return typeof s!="number"?null:u(al,{propName:o,value:s,setProp:n,propDef:i},o)},f32:(o,i)=>{const s=t[o];return typeof s!="number"?null:u(sl,{propName:o,value:s,setProp:n,propDef:i},o)},vec2:(o,i)=>{const s=t[o];return ArrayBuffer.isView(s)?u(cl,{value:s,propName:o,setProp:n,propDef:i},o):null},vec3:(o,i)=>{const s=t[o];return ArrayBuffer.isView(s)?u(ll,{value:s,propName:o,setProp:n,propDef:i},o):null},vec4:(o,i)=>{const s=t[o];return ArrayBuffer.isView(s)?u(ul,{value:s,propName:o,setProp:n,propDef:i},o):null},quat:(o,i)=>{const s=t[o];return ArrayBuffer.isView(s)?u(dl,{value:s,propName:o,setProp:n,propDef:i},o):null},rgb:(o,i)=>{const s=t[o];return ArrayBuffer.isView(s)?u(fl,{value:s,propName:o,setProp:n,propDef:i},o):null},rgba:(o,i)=>{const s=t[o];return ArrayBuffer.isView(s)?u(hl,{value:s,propName:o,setProp:n,propDef:i},o):null},bitmask:(o,i)=>{const s=t[o];return typeof s!="number"?null:u(pl,{value:s,propName:o,setProp:n,propDef:i},o)},enum:(o,i)=>{const s=t[o];if(typeof s!="number")return null;const a=i.enumType,l=Object.keys(a).filter(d=>!isNaN(parseInt(d))).map(d=>({label:a[d],value:parseInt(d)}));return u(ml,{value:s,propName:o,setProp:n,propDef:i,options:l},o)},string:(o,i)=>{const s=t[o];return typeof s!="string"?null:u(gl,{value:s,propName:o,setProp:n,propDef:i},o)},arrayBuffer:(o,i)=>u(vl,{propName:o,propDef:i},o),ref:(o,i,s)=>{const a=t[o];if(Array.isArray(a)||ArrayBuffer.isView(a)||typeof a!="object")return null;const l=Kn(e,a.resourceDef).map(tn);return u(bl,{value:a,propName:o,setProp:(d,p)=>gi(e,t.eid,d,p.eid),goToRef:s,propDef:i,options:l},o)},refArray:(o,i,s)=>{const a=t[o];if(typeof i.resourceDef!="object"||!Array.isArray(a))return null;const l=a.map(tn),d=Kn(e,i.resourceDef).map(tn);return u(yl,{value:l,propName:o,setProp:(p,h)=>vi(e,t.eid,p,h.map(v=>v.value.eid)),goToRef:s,propDef:i,options:d},o)}}}function Tl({className:e,resource:t}){const n=Me(),[r,o]=Le(at),s=t.resourceDef.schema,a=c.useCallback(p=>{o({type:"SELECT",resourceId:p,isRef:!0})},[o]),l=c.useMemo(()=>wl(n,t),[n,t]),d=Object.entries(s).map(([p,h])=>{var v;return h.editor?(v=l[h.type])==null?void 0:v.call(l,p,h,a):null});return $("div",{className:te("PropertiesPanel flex flex-column",e),children:[$($n,{className:"shrink-0 flex items-center gap-xxs",style:{padding:"0 var(--sp-xs)"},children:[u(B,{color:"surface",size:"sm",src:Mn}),u(U,{className:"grow truncate",variant:"b2",weight:"semi-bold",children:t.name??"Unnamed"}),r.activeEntityHistorySize>0&&$(H,{children:[u(Re,{color:"surface",size:"sm",label:"Go Back",iconSrc:Jc,onClick:()=>o({type:"SELECT_BACKWARD"}),disabled:r.activeEntityHistoryIndex===0}),u(Re,{color:"surface",size:"sm",label:"Go Forward",iconSrc:Li,onClick:()=>o({type:"SELECT_FORWARD"}),disabled:r.activeEntityHistoryIndex>=r.activeEntityHistorySize-1})]})]}),u("div",{className:"grow",children:u(Hr,{type:"scroll",children:d})})]})}function xl(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Dr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_r(Object(n),!0).forEach(function(r){xl(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_r(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Sl(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Cl(e,t){if(e==null)return{};var n=Sl(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Il(e,t){return El(e)||Al(e,t)||Rl(e,t)||Pl()}function El(e){if(Array.isArray(e))return e}function Al(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var n=[],r=!0,o=!1,i=void 0;try{for(var s=e[Symbol.iterator](),a;!(r=(a=s.next()).done)&&(n.push(a.value),!(t&&n.length===t));r=!0);}catch(l){o=!0,i=l}finally{try{!r&&s.return!=null&&s.return()}finally{if(o)throw i}}return n}}function Rl(e,t){if(e){if(typeof e=="string")return Nr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Nr(e,t)}}function Nr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Pl(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ml(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Lr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function zr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Lr(Object(n),!0).forEach(function(r){Ml(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lr(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $l(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(o,i){return i(o)},r)}}function Ye(e){return function t(){for(var n=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var s=arguments.length,a=new Array(s),l=0;l<s;l++)a[l]=arguments[l];return t.apply(n,[].concat(o,a))}}}function At(e){return{}.toString.call(e).includes("Object")}function Ol(e){return!Object.keys(e).length}function it(e){return typeof e=="function"}function kl(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function _l(e,t){return At(t)||ye("changeType"),Object.keys(t).some(function(n){return!kl(e,n)})&&ye("changeField"),t}function Dl(e){it(e)||ye("selectorType")}function Nl(e){it(e)||At(e)||ye("handlerType"),At(e)&&Object.values(e).some(function(t){return!it(t)})&&ye("handlersType")}function Ll(e){e||ye("initialIsRequired"),At(e)||ye("initialType"),Ol(e)&&ye("initialContent")}function zl(e,t){throw new Error(e[t]||e.default)}var Ul={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},ye=Ye(zl)(Ul),vt={changes:_l,selector:Dl,handler:Nl,initial:Ll};function Fl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};vt.initial(e),vt.handler(t);var n={current:e},r=Ye(jl)(n,t),o=Ye(Bl)(n),i=Ye(vt.changes)(e),s=Ye(Wl)(n);function a(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(p){return p};return vt.selector(d),d(n.current)}function l(d){$l(r,o,i,s)(d)}return[a,l]}function Wl(e,t){return it(t)?t(e.current):t}function Bl(e,t){return e.current=zr(zr({},e.current),t),t}function jl(e,t,n){return it(t)?t(e.current):Object.keys(n).forEach(function(r){var o;return(o=t[r])===null||o===void 0?void 0:o.call(t,e.current[r])}),n}var Gl={create:Fl},Hl={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs"}};function Vl(e){return function t(){for(var n=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var s=arguments.length,a=new Array(s),l=0;l<s;l++)a[l]=arguments[l];return t.apply(n,[].concat(o,a))}}}function ql(e){return{}.toString.call(e).includes("Object")}function Kl(e){return e||Ur("configIsRequired"),ql(e)||Ur("configType"),e.urls?(Xl(),{paths:{vs:e.urls.monacoBase}}):e}function Xl(){console.warn(Uo.deprecation)}function Yl(e,t){throw new Error(e[t]||e.default)}var Uo={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Ur=Vl(Yl)(Uo),Ql={config:Kl},Jl=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(o){return n.reduceRight(function(i,s){return s(i)},o)}};function Fo(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],Fo(e[n],t[n]))}),Dr(Dr({},e),t)}var Zl={type:"cancelation",msg:"operation is manually canceled"};function nn(e){var t=!1,n=new Promise(function(r,o){e.then(function(i){return t?o(Zl):r(i)}),e.catch(o)});return n.cancel=function(){return t=!0},n}var eu=Gl.create({config:Hl,isInitialized:!1,resolve:null,reject:null,monaco:null}),Wo=Il(eu,2),ft=Wo[0],Nt=Wo[1];function tu(e){var t=Ql.config(e),n=t.monaco,r=Cl(t,["monaco"]);Nt(function(o){return{config:Fo(o.config,r),monaco:n}})}function nu(){var e=ft(function(t){var n=t.monaco,r=t.isInitialized,o=t.resolve;return{monaco:n,isInitialized:r,resolve:o}});if(!e.isInitialized){if(Nt({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),nn(rn);if(window.monaco&&window.monaco.editor)return Bo(window.monaco),e.resolve(window.monaco),nn(rn);Jl(ru,iu)(au)}return nn(rn)}function ru(e){return document.body.appendChild(e)}function ou(e){var t=document.createElement("script");return e&&(t.src=e),t}function iu(e){var t=ft(function(r){var o=r.config,i=r.reject;return{config:o,reject:i}}),n=ou("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function au(){var e=ft(function(n){var r=n.config,o=n.resolve,i=n.reject;return{config:r,resolve:o,reject:i}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){Bo(n),e.resolve(n)},function(n){e.reject(n)})}function Bo(e){ft().monaco||Nt({monaco:e})}function su(){return ft(function(e){var t=e.monaco;return t})}var rn=new Promise(function(e,t){return Nt({resolve:e,reject:t})}),Rt={config:tu,init:nu,__getMonacoInstance:su};function En(){return En=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},En.apply(this,arguments)}const cu={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"};function lu({content:e}){return F.createElement("div",{style:cu},e)}const on={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}};function jo({width:e,height:t,isEditorReady:n,loading:r,_ref:o,className:i,wrapperProps:s}){return F.createElement("section",En({style:{...on.wrapper,width:e,height:t}},s),!n&&F.createElement(lu,{content:r}),F.createElement("div",{ref:o,style:{...on.fullWidth,...!n&&on.hide},className:i}))}jo.propTypes={width:P.oneOfType([P.number,P.string]).isRequired,height:P.oneOfType([P.number,P.string]).isRequired,loading:P.oneOfType([P.element,P.string]).isRequired,isEditorReady:P.bool.isRequired,className:P.string,wrapperProps:P.object};var Go=c.memo(jo);function Bn(e){c.useEffect(e,[])}function ae(e,t,n=!0){const r=c.useRef(!0);c.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}function et(){}function Pt(e,t,n,r){return uu(e,r)||du(e,t,n,r)}function uu(e,t){return e.editor.getModel(Ho(e,t))}function du(e,t,n,r){return e.editor.createModel(t,n,r&&Ho(e,r))}function Ho(e,t){return e.Uri.parse(t)}function fu(e){return e===void 0}function Vo({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:o,originalModelPath:i,modifiedModelPath:s,keepCurrentOriginalModel:a,keepCurrentModifiedModel:l,theme:d,loading:p,options:h,height:v,width:m,className:T,wrapperProps:f,beforeMount:g,onMount:b}){const[y,x]=c.useState(!1),[w,C]=c.useState(!0),S=c.useRef(null),I=c.useRef(null),E=c.useRef(null),A=c.useRef(b),M=c.useRef(g);Bn(()=>{const R=Rt.init();return R.then(k=>(I.current=k)&&C(!1)).catch(k=>(k==null?void 0:k.type)!=="cancelation"&&console.error("Monaco initialization: error:",k)),()=>S.current?L():R.cancel()}),ae(()=>{const R=S.current.getModifiedEditor();R.getOption(I.current.editor.EditorOption.readOnly)?R.setValue(t):t!==R.getValue()&&(R.executeEdits("",[{range:R.getModel().getFullModelRange(),text:t,forceMoveMarkers:!0}]),R.pushUndoStop())},[t],y),ae(()=>{S.current.getModel().original.setValue(e)},[e],y),ae(()=>{const{original:R,modified:k}=S.current.getModel();I.current.editor.setModelLanguage(R,r||n),I.current.editor.setModelLanguage(k,o||n)},[n,r,o],y),ae(()=>{I.current.editor.setTheme(d)},[d],y),ae(()=>{S.current.updateOptions(h)},[h],y);const N=c.useCallback(()=>{M.current(I.current);const R=Pt(I.current,e,r||n,i),k=Pt(I.current,t,o||n,s);S.current.setModel({original:R,modified:k})},[n,t,o,e,r,i,s]),_=c.useCallback(()=>{S.current=I.current.editor.createDiffEditor(E.current,{automaticLayout:!0,...h}),N(),I.current.editor.setTheme(d),x(!0)},[h,d,N]);c.useEffect(()=>{y&&A.current(S.current,I.current)},[y]),c.useEffect(()=>{!w&&!y&&_()},[w,y,_]);function L(){const R=S.current.getModel();if(!a){var k;(k=R.original)===null||k===void 0||k.dispose()}if(!l){var W;(W=R.modified)===null||W===void 0||W.dispose()}S.current.dispose()}return F.createElement(Go,{width:m,height:v,isEditorReady:y,loading:p,_ref:E,className:T,wrapperProps:f})}Vo.propTypes={original:P.string,modified:P.string,language:P.string,originalLanguage:P.string,modifiedLanguage:P.string,originalModelPath:P.string,modifiedModelPath:P.string,keepCurrentOriginalModel:P.bool,keepCurrentModifiedModel:P.bool,theme:P.string,loading:P.oneOfType([P.element,P.string]),options:P.object,width:P.oneOfType([P.number,P.string]),height:P.oneOfType([P.number,P.string]),className:P.string,wrapperProps:P.object,beforeMount:P.func,onMount:P.func};Vo.defaultProps={theme:"light",loading:"Loading...",options:{},keepCurrentOriginalModel:!1,keepCurrentModifiedModel:!1,width:"100%",height:"100%",wrapperProps:{},beforeMount:et,onMount:et};function hu(){const[e,t]=c.useState(Rt.__getMonacoInstance());return Bn(()=>{let n;return e||(n=Rt.init(),n.then(r=>{t(r)})),()=>{var r;return(r=n)===null||r===void 0?void 0:r.cancel()}}),e}function pu(e){const t=c.useRef();return c.useEffect(()=>{t.current=e},[e]),t.current}const bt=new Map;function jn({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:o,path:i,theme:s,line:a,loading:l,options:d,overrideServices:p,saveViewState:h,keepCurrentModel:v,width:m,height:T,className:f,wrapperProps:g,beforeMount:b,onMount:y,onChange:x,onValidate:w}){const[C,S]=c.useState(!1),[I,E]=c.useState(!0),A=c.useRef(null),M=c.useRef(null),N=c.useRef(null),_=c.useRef(y),L=c.useRef(b),R=c.useRef(null),k=c.useRef(r),W=pu(i),q=c.useRef(!1);Bn(()=>{const O=Rt.init();return O.then(D=>(A.current=D)&&E(!1)).catch(D=>(D==null?void 0:D.type)!=="cancelation"&&console.error("Monaco initialization: error:",D)),()=>M.current?ne():O.cancel()}),ae(()=>{const O=Pt(A.current,e||r,t||o,i);O!==M.current.getModel()&&(h&&bt.set(W,M.current.saveViewState()),M.current.setModel(O),h&&M.current.restoreViewState(bt.get(i)))},[i],C),ae(()=>{M.current.updateOptions(d)},[d],C),ae(()=>{M.current.getOption(A.current.editor.EditorOption.readOnly)?M.current.setValue(r):r!==M.current.getValue()&&(M.current.executeEdits("",[{range:M.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),M.current.pushUndoStop())},[r],C),ae(()=>{A.current.editor.setModelLanguage(M.current.getModel(),o)},[o],C),ae(()=>{fu(a)||M.current.revealLine(a)},[a],C),ae(()=>{A.current.editor.setTheme(s)},[s],C);const K=c.useCallback(()=>{if(!q.current){L.current(A.current);const O=i||n,D=Pt(A.current,r||e,t||o,O);M.current=A.current.editor.create(N.current,{model:D,automaticLayout:!0,...d},p),h&&M.current.restoreViewState(bt.get(O)),A.current.editor.setTheme(s),S(!0),q.current=!0}},[e,t,n,r,o,i,d,p,h,s]);c.useEffect(()=>{C&&_.current(M.current,A.current)},[C]),c.useEffect(()=>{!I&&!C&&K()},[I,C,K]),k.current=r,c.useEffect(()=>{if(C&&x){var O,D;(O=R.current)===null||O===void 0||O.dispose(),R.current=(D=M.current)===null||D===void 0?void 0:D.onDidChangeModelContent(j=>{x(M.current.getValue(),j)})}},[C,x]),c.useEffect(()=>{if(C){const O=A.current.editor.onDidChangeMarkers(D=>{var j;const V=(j=M.current.getModel())===null||j===void 0?void 0:j.uri;if(V&&D.find(oe=>oe.path===V.path)){const oe=A.current.editor.getModelMarkers({resource:V});w==null||w(oe)}});return()=>{O==null||O.dispose()}}},[C,w]);function ne(){var O;if((O=R.current)===null||O===void 0||O.dispose(),v)h&&bt.set(i,M.current.saveViewState());else{var D;(D=M.current.getModel())===null||D===void 0||D.dispose()}M.current.dispose()}return F.createElement(Go,{width:m,height:T,isEditorReady:C,loading:l,_ref:N,className:f,wrapperProps:g})}jn.propTypes={defaultValue:P.string,defaultPath:P.string,defaultLanguage:P.string,value:P.string,language:P.string,path:P.string,theme:P.string,line:P.number,loading:P.oneOfType([P.element,P.string]),options:P.object,overrideServices:P.object,saveViewState:P.bool,keepCurrentModel:P.bool,width:P.oneOfType([P.number,P.string]),height:P.oneOfType([P.number,P.string]),className:P.string,wrapperProps:P.object,beforeMount:P.func,onMount:P.func,onChange:P.func,onValidate:P.func};jn.defaultProps={theme:"light",loading:"Loading...",options:{},overrideServices:{},saveViewState:!0,keepCurrentModel:!1,width:"100%",height:"100%",wrapperProps:{},beforeMount:et,onMount:et,onValidate:et};var mu=c.memo(jn);const gu="/assets/dark-light-491db098.svg",vu=`declare namespace WebSG {
  /**
   * @typedef AccessorType
   * @type {("SCALAR"|"VEC2"|"VEC3"|"VEC4"|"MAT2"|"MAT3"|"MAT4")}
   * @description The type of an accessor, describing the shape of the data it represents.
   */
  type AccessorType = "SCALAR" | "VEC2" | "VEC3" | "VEC4" | "MAT2" | "MAT3" | "MAT4";
  const AccessorType: { [Type in AccessorType]: Type };

  /**
   * @typedef AccessorComponentType
   * @type {(5120|5121|5122|5123|5125|5126)}
   * @description The component type of an accessor, describing the data type of individual components in the data.
   */
  type AccessorComponentType = 5120 | 5121 | 5122 | 5123 | 5125 | 5126;

  /**
   * @constant AccessorComponentType
   * @type {{
   *   Int8: 5120;
   *   Uint8: 5121;
   *   Int16: 5122;
   *   Uint16: 5123;
   *   Uint32: 5125;
   *   Float32: 5126;
   * }}
   * @description A mapping of AccessorComponentType values to their respective numeric codes.
   */
  const AccessorComponentType: {
    Int8: 5120;
    Uint8: 5121;
    Int16: 5122;
    Uint16: 5123;
    Uint32: 5125;
    Float32: 5126;
  };

  /**
   * Interface describing the properties of an Accessor created from an ArrayBuffer.
   */
  interface AccessorFromProps {
    /**
     * The shape of the data the accessor represents.
     */
    type: AccessorType;
    /**
     * The data type of individual components in the data.
     */
    componentType: AccessorComponentType;
    /**
     * The number of elements in the accessor.
     */
    count: number;
    /**
     * Whether the data should be normalized when accessed (default is \`false\`).
     */
    normalized?: boolean;
    /**
     * Whether the accessor's data is dynamic and can change over time (default is \`false\`).
     */
    dynamic?: boolean;
    /**
     * The minimum values of the accessor's components (optional).
     */
    min?: number[];
    /**
     * The maximum values of the accessor's components (optional).
     */
    max?: number[];
  }

  /**
   * The Accessor class provides a way to update a given ArrayBuffer
   * with new data.
   */
  class Accessor {
    /**
     * Updates the existing ArrayBuffer with new data.
     *
     * @param data The new data to update the ArrayBuffer.
     *
     * @example
     * // Create an instance of Accessor
     * const accessor = world.createAccessorFrom(buffer, {
     *  componentType: WebSG.AccessorComponentType.Uint16,
     *  count: indicesCount,
     *  type: WebSG.AccessorType.SCALAR,
     * });
     *
     * // Update the ArrayBuffer with new data
     * accessor.updateWith(newData);
     */
    updateWith(data: ArrayBuffer): this;
  }

  /**
   * A type representing the possible collider types in the physics system.
   * @typedef {("box" | "sphere" | "capsule" | "cylinder" | "hull" | "trimesh")} ColliderType
   */
  type ColliderType = "box" | "sphere" | "capsule" | "cylinder" | "hull" | "trimesh";

  /**
   * A constant object containing the possible collider types as keys and their corresponding string values.
   * @type {{Box: "box", Sphere: "sphere", Capsule: "capsule", Cylinder: "cylinder", Hull: "hull", Trimesh: "trimesh"}}
   */
  const ColliderType: {
    Box: "box";
    Sphere: "sphere";
    Capsule: "capsule";
    Cylinder: "cylinder";
    Hull: "hull";
    Trimesh: "trimesh";
  };

  /**
   * Collider properties interface.
   */
  interface ColliderProps {
    /**
     * The type of the Collider.
     */
    type: ColliderType;
    /**
     * Determines if the Collider acts as a trigger.
     */
    isTrigger?: boolean;
    /**
     * The size of the Collider (required for box type).
     */
    size?: ArrayLike<number>;
    /**
     * The radius of the Collider (required for sphere, capsule, and cylinder types).
     */
    radius?: number;
    /**
     * The height of the Collider (required for capsule and cylinder types).
     */
    height?: number;
    /**
     * The mesh representing the shape of the Collider (required for hull and trimesh types).
     */
    mesh?: Mesh;
  }

  /**
   * The Collider class represents a shape that can be used for
   * collision detection in a physics simulation.
   */
  class Collider {
    /**
     * Creates a new Collider instance with the specified properties.
     *
     * @param props The properties of the Collider.
     *
     * @example
     * // Create a new box Collider
     * const collider = world.createCollider({
     *   type: ColliderType.Box,
     *   size: [1, 1, 1],
     * });
     */
    constructor(props: ColliderProps);
  }

  type InteractableType = 1 | 2;
  const InteractableType: {
    Interactable: 1;
    Grabbable: 2;
  };

  type InteractableProps = {
    type: InteractableType;
  };

  /**
   * The Interactable class represents an object that can be interacted
   * with, providing information about its current interaction state.
   */
  class Interactable {
    /**
     * Returns the pressed state of the Interactable object.
     *
     * @example
     * node.addInteractable();
     * console.log(node.interactable.pressed); // false
     */
    get pressed(): boolean;

    /**
     * Returns the held state of the Interactable object.
     *
     * @example
     * node.addInteractable();
     * console.log(node.interactable.held); // false
     */
    get held(): boolean;

    /**
     * Returns the released state of the Interactable object.
     *
     * @example
     * node.addInteractable();
     * console.log(node.interactable.released); // false
     */
    get released(): boolean;
  }

  /**
   * LightType is a union type representing the available types of lights.
   * @typedef {"directional" | "point" | "spot"} LightType
   */

  /**
   * LightType is an object containing the string constants for the available types of lights.
   * @type {Object} LightType
   * @property {string} Directional - Represents a directional light.
   * @property {string} Point - Represents a point light.
   * @property {string} Spot - Represents a spot light.
   */
  type LightType = {
    Directional: "directional";
    Point: "point";
    Spot: "spot";
  };

  /**
   * LightProps is an interface that defines the properties for creating a Light instance.
   */
  interface LightProps {
    /**
     * The type of the light.
     */
    type: LightType;
    /**
     * The optional name of the light.
     */
    name?: string;
    /**
     * The optional intensity of the light. Default is 1.
     */
    intensity?: number;
    /**
     * The optional RGB color of the light. Default is white.
     */
    color?: ArrayLike<number>;
    /**
     * The optional range of the light, for point and spot lights.
     */
    range?: number;
    /**
     * The optional inner cone angle of the light, for spot lights.
     */
    innerConeAngle?: number;
    /**
     * The optional outer cone angle of the light, for spot lights.
     */
    outerConeAngle?: number;
  }

  /**
   * The Light class represents a light source in a scene.
   */
  class Light {
    /**
     * Creates a new Light instance.
     * @param props The properties to create the light with.
     */
    constructor(props: LightProps);

    /**
     * Returns the intensity of the Light object.
     *
     * @example
     * const light = world.createLight({ type: LightType.Point });
     * console.log(light.intensity); // 1
     */
    get intensity(): number;

    /**
     * Sets the intensity of the Light object.
     * @param value - The new intensity value for the Light object.
     *
     * @example
     * const light = world.createLight({ type: LightType.Point });
     * light.intensity = 2;
     * console.log(light.intensity); // 2
     */
    set intensity(value: number);

    /**
     * Returns the color of the Light object as an RGB instance.
     *
     * @example
     * const light = world.createLight({ type: LightType.Point, color: [1, 0, 0] });
     * console.log(light.color); // RGB { r: 1, g: 0, b: 0 }
     */
    get color(): RGB;
  }

  /**
   * AlphaMode is a union type representing the available alpha modes.
   */
  type AlphaMode = "OPAQUE" | "BLEND" | "MASK";

  /**
   * AlphaMode is an object containing the string constants for the available alpha modes.
   */
  const AlphaMode: { [Mode in AlphaMode]: Mode };

  /**
   * UnlitMaterialProps is an interface that defines the properties for creating an unlit Material instance.
   */
  interface UnlitMaterialProps {
    /**
     * The name of the material.
     */
    name?: string;
    /**
     * The RGBA base color factor.
     */
    baseColorFactor?: ArrayLike<number>;
    /**
     * The base color texture.
     */
    baseColorTexture?: Texture;
    /**
     * Whether the material is visible from both sides. Default is false.
     */
    doubleSided?: boolean;
    /**
     * The alpha cutoff value for the material. Default is 0.5.
     */
    alphaCutoff?: number;
    /**
     * The alpha mode for the material. Default is 'OPAQUE'.
     */
    alphaMode?: AlphaMode;
  }

  /**
   * MaterialProps is an interface that defines the properties for creating a Material instance.
   */
  interface MaterialProps {
    /**
     * The name of the material.
     */
    name?: string;
    /**
     * Whether the material is visible from both sides. Default is false.
     */
    doubleSided?: boolean;
    /**
     * The alpha cutoff value for the material. Default is 0.5.
     */
    alphaCutoff?: number;
    /**
     * The alpha mode for the material. Default is 'OPAQUE'.
     */
    alphaMode?: AlphaMode;
    /**
     * The RGBA base color factor.
     */
    baseColorFactor?: ArrayLike<number>;
    /**
     * The base color texture.
     */
    baseColorTexture?: Texture;
    /**
     * The metallic factor. Default is 1.
     */
    metallicFactor?: number;
    /**
     * The roughness factor. Default is 1.
     */
    roughnessFactor?: number;
    /**
     * The metallic-roughness texture.
     */
    metallicRoughnessTexture?: Texture;
    /**
     * The normal texture.
     */
    normalTexture?: Texture;
    /**
     * The scale for the normal texture. Default is 1.
     */
    normalScale?: number;
    /**
     * The occlusion texture.
     */
    occlusionTexture?: Texture;
    /**
     * The occlusion strength. Default is 1.
     */
    occlusionStrength?: number;
    /**
     * The RGB emissive factor.
     */
    emissiveFactor?: ArrayLike<number>;
    /**
     * The emissive texture.
     */
    emissiveTexture?: Texture;
  }

  /**
   * The Material class represents a material in a scene.
   */
  class Material {
    /**
     * Creates a new Material instance.
     * @param props The properties to create the material with.
     */
    constructor(props: MaterialProps);

    /**
     * Returns the base color factor of the Material object as an RGBA instance.
     */
    get baseColorFactor(): RGBA;

    /**
     * Gets the base color texture of the Material object.
     */
    get baseColorTexture(): Texture | undefined;

    /**
     * Sets the base color texture of the Material object.
     * @param texture The new base color texture.
     */
    set baseColorTexture(texture: Texture | undefined);

    /**
     * Gets the metallic factor of the Material object.
     */
    get metallicFactor(): number;

    /**
     * Sets the metallic factor of the Material object.
     * @param value The new metallic factor value.
     */
    set metallicFactor(value: number);

    /**
     * Gets the roughness factor of the Material object.
     */
    get roughnessFactor(): number;

    /**
     * Sets the roughness factor of the Material object.
     * @param value The new roughness factor value.
     */
    set roughnessFactor(value: number);

    /**
     * Returns the emissive factor of the Material object as an RGB instance.
     */
    get emissiveFactor(): RGB;
  }

  /**
   * The Matrix4 class represents a 4x4 matrix of numbers.
   */
  class Matrix4 {
    [n: number]: number;

    /**
     * Sets the elements of the Matrix.
     * @param {ArrayLike<number>} value - The new values for the Matrix4 instance.
     */
    set(value: ArrayLike<number>): this;

    /**
     * Returns the number of elements of the Matrix.
     */
    readonly length: number;
  }

  /**
   * The ReadonlyMatrix4 class represents a readonly 4x4 matrix of numbers.
   */
  class ReadonlyMatrix4 {
    /**
     * Gets the readonly value at a specific index.
     */
    readonly [n: number]: number;

    /**
     * Returns the length of the ReadonlyMatrix4 instance.
     */
    readonly length: number;
  }

  /**
   * Enumeration of possible mesh primitive attributes.
   */
  type MeshPrimitiveAttribute =
    | "POSITION"
    | "NORMAL"
    | "TANGENT"
    | "TEXCOORD_0"
    | "TEXCOORD_1"
    | "COLOR_0"
    | "JOINTS_0"
    | "WEIGHTS_0";
  const MeshPrimitiveAttribute: { [Attribute in MeshPrimitiveAttribute]: Attribute };

  /**
   * Enumeration of possible mesh primitive rendering modes.
   */
  type MeshPrimitiveMode = 0 | 1 | 2 | 3 | 4 | 5 | 6;
  const MeshPrimitiveMode: {
    POINTS: 0;
    LINES: 1;
    LINE_LOOP: 2;
    LINE_STRIP: 3;
    TRIANGLES: 4;
    TRIANGLE_STRIP: 5;
    TRIANGLE_FAN: 6;
  };

  /**
   * MeshPrimitiveProps is an interface for defining properties of a mesh primitive.
   */
  interface MeshPrimitiveProps {
    mode?: MeshPrimitiveMode;
    indices?: Accessor;
    material?: Material;
    attributes: { [name in MeshPrimitiveAttribute]?: Accessor };
  }

  /**
   * The MeshPrimitive class represents a single primitive of a mesh.
   */
  class MeshPrimitive {
    /**
     * Returns the current rendering mode of the mesh primitive.
     */
    get mode(): MeshPrimitiveMode;

    /**
     * Returns the Accessor for the indices of the mesh primitive.
     */
    get indices(): Accessor | undefined;

    /**
     * Returns the Accessor for the specified attribute name.
     * @param name The attribute name.
     * @returns The Accessor for the attribute or undefined if not found.
     */
    getAttribute(name: MeshPrimitiveAttribute): Accessor | undefined;

    /**
     * Returns the Material of the mesh primitive.
     */
    get material(): Material | undefined;

    /**
     * Sets the Material for the mesh primitive.
     * @param material The Material to set.
     */
    set material(material: Material | undefined);

    /**
     * Sets the draw range for the mesh primitive.
     * @param start The starting index for the draw range.
     * @param count The number of indices in the draw range.
     */
    setDrawRange(start: number, count: number): this;

    /**
     * Enables or disables the hologram material for the mesh primitive.
     * @param enabled Whether to enable or disable the hologram material.
     * @experimental This API is experimental and may change or be removed in future releases.
     */
    thirdroomSetHologramMaterialEnabled(enabled: boolean): this;
  }

  /**
   * MeshProps is an interface for defining properties of a mesh.
   */
  interface MeshProps {
    /**
     * The name of the mesh.
     */
    name?: string;
    /**
     * An array of MeshPrimitiveProps that define the geometry and materials of the mesh.
     */
    primitives: MeshPrimitiveProps[];
  }

  /**
   * BoxMeshProps is an interface for defining properties of a box mesh.
   */
  interface BoxMeshProps {
    /**
     * The size of the mesh in meters in the x,y,z directions.
     */
    size?: ArrayLike<number>;
    /**
     * The number of segments to use in the x,y,z directions.
     */
    segments?: ArrayLike<number>;
    /**
     * The material to use for the mesh.
     */
    material?: Material;
  }

  /**
   * The Mesh class represents a 3D object with one or more mesh primitives.
   */
  class Mesh {
    /**
     * An array of MeshPrimitive instances that define the geometry of the mesh.
     */
    readonly primitives: MeshPrimitive[];
  }

  /**
   * An iterator for node objects.
   */
  class NodeIterator {
    /**
     * Returns the next node in the iterator.
     */
    next(): { value: Node; done: boolean };
    [Symbol.iterator](): NodeIterator;
  }

  /**
   * Interface representing the properties you can create a Node object with.
   */
  interface NodeProps {
    /**
     * The initial name of the node.
     */
    name?: string;

    /**
     * The initial mesh associated with the node.
     */
    mesh?: Mesh;

    /**
     * The initial UI canvas associated with the node.
     */
    uiCanvas?: UICanvas;

    /**
     * The initial translation of the node.
     */
    translation?: Vector3;

    /**
     * The initial rotation of the node.
     */
    rotation?: Quaternion;

    /**
     * The initial scale of the node.
     */
    scale?: Vector3;
  }

  /**
   * Interface representing the options for configuring an orbiting camera control mode.
   */
  interface OrbitOptions {
    /**
     * The pitch angle in degrees, which is the rotation around the X-axis.
     * Positive values tilt the camera upwards, while negative values tilt it downwards.
     */
    pitch?: number;

    /**
     * The yaw angle in degrees, which is the rotation around the Y-axis.
     * Positive values rotate the camera to the right, while negative values rotate it to the left.
     */
    yaw?: number;

    /**
     * The zoom value, which is a scalar factor for the distance from the object.
     * Positive values move the camera closer to the object, while negative values move it further away.
     */
    zoom?: number;
  }

  /**
   * Class representing a node in a scene graph.
   */
  class Node {
    /**
     * The node's translation as a Vector3.
     */
    readonly translation: Vector3;

    /**
     * The node's rotation as a Quaternion.
     */
    readonly rotation: Quaternion;

    /**
     * The node's scale as a Vector3.
     */
    readonly scale: Vector3;

    /**
     * The node's local transformation matrix as a Matrix4.
     */
    readonly matrix: Matrix4;

    /**
     * The node's world transformation matrix as a ReadonlyMatrix4.
     */
    readonly worldMatrix: ReadonlyMatrix4;

    /**
     * Adds a child node to this node.
     * @param node The node to add as a child.
     */
    addChild(node: Node): this;

    /**
     * Removes a child node from this node.
     * @param node The node to remove.
     */
    removeChild(node: Node): this;

    /**
     * Gets the child node at the specified index or undefined if the index is out of range.
     * @param index The index of the child node.
     */
    getChild(index: number): Node | undefined;

    /**
     * Returns an iterator for the children of this node.
     */
    children(): NodeIterator;

    /**
     * Gets the parent node of this node or undefined if this node has no parent.
     */
    get parent(): Node | undefined;

    /**
     * Gets or sets whether this node is static.
     */
    get isStatic(): boolean;

    /**
     * Sets whether this node is static and can be optimized by the engine.
     * Optimizations include world matrix calculations. When a node is static,
     * you may not modify its transform properties (translation, rotation, scale).
     * @param value Whether this node is static.
     */
    set isStatic(value: boolean);

    /**
     * Returns whether or not this node is visible
     */
    get visible(): boolean;

    /**
     * Sets whether or not this node is visible
     * @param value Whether or not this node is visible
     */
    set visible(value: boolean);

    /**
     * Get the mesh associated with this node.
     */
    get mesh(): Mesh | undefined;

    /**
     * Set the mesh associated with this node.
     * @param mesh The mesh to associate with this node or undefined to unset.
     */
    set mesh(mesh: Mesh | undefined);

    /**
     * Get the light associated with this node.
     */
    get light(): Light | undefined;

    /**
     * Set the light associated with this node.
     * @param light The light to associate with this node or undefined to unset.
     */
    set light(light: Light | undefined);

    /**
     * Get the collider associated with this node.
     */
    get collider(): Collider | undefined;

    /**
     * Set the collider associated with this node.
     * @param collider The collider to associate with this node or undefined to unset.
     */
    set collider(collider: Collider | undefined);

    /**
     * Get the UI canvas associated with this node.
     */
    get uiCanvas(): UICanvas | undefined;

    /**
     * Set the UI canvas associated with this node.
     * @param uiCanvas The UI canvas to associate with this node or undefined to unset.
     */
    set uiCanvas(uiCanvas: UICanvas | undefined);

    /**
     * Gets the interactable behavior associated with this node.
     */
    get interactable(): Interactable | undefined;

    /**
     * Adds an interactable behavior to this node.
     * @param {InteractableProps | undefined} props Optional interactable properties.
     */
    addInteractable(props?: InteractableProps): Interactable;

    /**
     * Removes the interactable property from this node.
     */
    removeInteractable(): undefined;

    /**
     * Gets the physics body behavior associated with this node.
     */
    get physicsBody(): PhysicsBody | undefined;

    /**
     * Adds a physics body behavior to this node.
     * @param {PhysicsBodyProps | undefined} props Optional physics body properties.
     */
    addPhysicsBody(props?: PhysicsBodyProps): PhysicsBody;

    /**
     * Removes the physics body behavior from this node.
     */
    removePhysicsBody(): undefined;

    /**
     * Enables orbit camera control mode for this node.
     * @param options Optional orbit options.
     */
    startOrbit(options?: OrbitOptions): undefined;
    /**
     * Adds a component to this node.
     * @param component the component type to add.
     */
    addComponent(component: ComponentStore): undefined;
    /**
     * Removes a component from this node.
     * @param component the component type to remove.
     */
    removeComponent(component: ComponentStore): undefined;
    /**
     * Checks if this node has a component.
     * @param component the component type to check for.
     */
    hasComponent(component: ComponentStore): boolean;
    /**
     * Gets an instance of a component of the specified type on this node.
     * If the component does not exist on this node, it will return undefined.
     * @param component the component type to get.
     */
    getComponent(component: ComponentStore): Component | undefined;
  }

  /**
   * Type representing the various physics body types.
   */
  type PhysicsBodyType = "kinematic" | "rigid" | "static";

  /**
   * Physics body type constants.
   */
  const PhysicsBodyType: {
    Kinematic: "kinematic";
    Rigid: "rigid";
    Static: "static";
  };

  /**
   * Interface representing the properties for creating a PhysicsBody.
   */
  interface PhysicsBodyProps {
    /**
     * The type of the physics body.
     */
    type: PhysicsBodyType;

    /**
     * The mass of the physics body in kilograms.
     */
    mass?: number;

    /**
     * The linear velocity of the physics body as an array of three numbers [x, y, z].
     */
    linearVelocity?: ArrayLike<number>;

    /**
     * The angular velocity of the physics body as an array of three numbers [x, y, z].
     */
    angularVelocity?: ArrayLike<number>;

    /**
     * The inertia tensor of the physics body as an array of nine numbers representing a 3x3 matrix.
     * @experimental This property is experimental and may be changed in a future release.
     */
    inertiaTensor?: ArrayLike<number>;
  }

  /**
   * A PhysicsBody is a behavior that can be added to a node to give it a
   * physical presence in the world and interact with other physics bodies.
   */
  class PhysicsBody {
    /**
     * Applies an impulse at the center of mass of this physics body.
     * @param impulse The impulse to apply.
     */
    applyImpulse(impulse: ArrayLike<number>): undefined;
  }

  class Collision {
    /**
     * The first node involved in the collision.
     */
    nodeA: Node;
    /**
     * The second node involved in the collision.
     */
    nodeB: Node;
    /**
     * Whether the collision started or ended this frame.
     */
    started: boolean;
  }

  /**
   * An iterator for collisions.
   */
  class CollisionIterator {
    /**
     * Returns the next collision in the iterator.
     */
    next(): { value: Collision; done: boolean };
    [Symbol.iterator](): CollisionIterator;
  }

  /**
   * A Collision Listener provides an interface for listening to collisions events between nodes with colliders.
   * Collision events are recorded for both the start and end of a collision.
   * {@link WebSG.CollisionListener.collisions | .collisions()} should be called each frame to iterate through
   * the collisions that occurred since the last call to .collisions(). Failing to regularly call .collisions()
   * will result in a memory leak. If you are done listening to collisions, you should call .dispose() to free
   * up the memory used by the collision listener and stop listening to collisions.
   */
  class CollisionListener {
    /**
     * Returns an iterator for the collisions that occurred since the last call to .collisions().
     */
    collisions(): CollisionIterator;
    /**
     * Disposes of the collision listener and stops listening to collisions.
     */
    dispose(): void;
  }

  /**
   * A Quaternion class with x, y, z, and w components. The class provides methods to set the components of the quaternion using an array-like syntax.
   */
  class Quaternion {
    /**
     * The quaternion components.
     */
    [n: number]: number;

    /**
     * The x-component of the quaternion.
     */
    x: number;

    /**
     * The y-component of the quaternion.
     */
    y: number;

    /**
     * The z-component of the quaternion.
     */
    z: number;

    /**
     * The w-component of the quaternion.
     */
    w: number;

    /**
     * Sets the quaternion components to the given values.
     * @param {ArrayLike<number>} value - An array-like object containing the quaternion components.
     */
    set(value: ArrayLike<number>): this;

    /**
     * The number of components in the quaternion.
     */
    readonly length: number;
  }

  /**
   * Class representing an RGB color.
   */
  class RGB {
    /**
     * The RGB color components.
     */
    [n: number]: number;

    /**
     * The red component of the color.
     */
    r: number;

    /**
     * The green component of the color.
     */
    g: number;

    /**
     * The blue component of the color.
     */
    b: number;

    /**
     * Sets the RGB color components to the given values.
     * @param value An array-like object containing the RGB color components.
     */
    set(value: ArrayLike<number>): this;

    /**
     * The number of components in the RGB color.
     */
    readonly length: number;
  }

  /**
   * Class representing an RGBA color.
   */
  class RGBA {
    /**
     * The RGBA color components.
     */
    [n: number]: number;

    /**
     * The red component of the color.
     */
    r: number;

    /**
     * The green component of the color.
     */
    g: number;

    /**
     * The blue component of the color.
     */
    b: number;

    /**
     * The alpha component of the color.
     */
    a: number;

    /**
     * Sets the RGBA color components to the given values.
     * @param value An array-like object containing the RGBA color components.
     */
    set(value: ArrayLike<number>): this;

    /**
     * The number of components in the RGBA color.
     */
    readonly length: number;
  }

  /**
   * Interface representing the properties for a scene.
   */
  interface SceneProps {
    /**
     * Optional name of the scene.
     */
    name?: string;
  }

  /**
   * Class representing the root of a scene graph.
   */
  class Scene {
    /**
     * Adds a node to the scene.
     * @param {Node} node The node to be added to the scene.
     * @returns {Scene} The instance of the Scene class (for method chaining).
     */
    addNode(node: Node): this;

    /**
     * Removes a node from the scene.
     * @param {Node} node The node to be removed from the scene.
     * @returns {Scene} The instance of the Scene class (for method chaining).
     */
    removeNode(node: Node): this;

    /**
     * Gets a node from the scene by its index.
     * @param {number} index The index of the node to be retrieved.
     * @returns {Node | undefined} The node at the given index, or undefined if no node exists at the index.
     */
    getNode(index: number): Node | undefined;

    /**
     * Returns an iterator for the nodes in the scene.
     * @returns {NodeIterator} An iterator for the nodes in the scene.
     */
    nodes(): NodeIterator;
  }

  /**
   * A class representing a texture resource.
   */
  class Texture {}

  /**
   * A class representing an image data resource.
   */
  class Image {}

  /**
   * Interface for UIButton properties.
   */
  interface UIButtonProps extends UITextProps {
    /**
     * The button label text.
     * @type {string}
     */
    label?: string;
  }

  /**
   * Class representing a UIButton element.
   */
  class UIButton extends UIText {
    /**
     * Gets the button label text.
     */
    get label(): string;

    /**
     * Sets the button label text.
     * @param value The button label text.
     */
    set label(value: string);

    /**
     * Returns true if the button was pressed during this frame, otherwise false.
     */
    get pressed(): boolean;

    /**
     * Returns true if the button is held during this frame, otherwise false.
     */
    get held(): boolean;

    /**
     * Returns true if the button was released during this frame, otherwise false.
     */
    get released(): boolean;
  }

  /**
   * Interface for UICanvas properties.
   */
  interface UICanvasProps {
    /**
     * The root UI element of the canvas.
     */
    root?: UIElement;

    /**
     * The canvas width in pixels.
     */
    width?: number;

    /**
     * The canvas height in pixels.
     */
    height?: number;

    /**
     * The canvas size as an array-like object in meters.
     */
    size?: ArrayLike<number>;
  }

  /**
   * A UICanvas is used to render UI elements to a flat plane in the world.
   */
  class UICanvas {
    /**
     * Gets the root UIElement of the canvas.
     */
    get root(): UIElement | undefined;

    /**
     * Sets the root UIElement of the canvas.
     * @param element The root UIElement of the canvas.
     */
    set root(element: UIElement | undefined);

    /**
     * Gets the canvas width in pixels.
     */
    get width(): number;

    /**
     * Sets the canvas width in pixels.
     * @param value The canvas width in pixels.
     */
    set width(value: number);

    /**
     * Gets the canvas height in pixels.
     */
    get height(): number;

    /**
     * Sets the canvas height in pixels.
     * @param value The canvas height in pixels.
     */
    set height(value: number);

    /**
     * Redraws the canvas.
     * This should be called any time the UI elements are changed.
     */
    redraw(): undefined;

    /**
     * Gets the canvas size as a Vector2 in meters.
     */
    readonly size: Vector2;
  }

  /**
   * Enum representing the type of a UIElement.
   * @typedef ElementType
   * @type {"flex" | "text" | "button"}
   */
  type ElementType = "flex" | "text" | "button";

  /**
   * Enum representing the flex direction for a UIElement.
   * @typedef FlexDirection
   * @type {"column" | "column-reverse" | "row" | "row-reverse"}
   */
  type FlexDirection = "column" | "column-reverse" | "row" | "row-reverse";

  /**
   * A type representing the possible values for the position property of a UIElement.
   * - "relative": The element is positioned relative to its normal position, without affecting the position of other elements.
   * - "absolute": The element is positioned relative to its nearest positioned ancestor (or the container if no positioned ancestor exists), and other elements are positioned as if the absolute element doesn't exist.
   * @typedef {("relative" | "absolute")} ElementPositionType
   */
  type ElementPositionType = "relative" | "absolute";

  /**
   * A type representing the possible values for the alignItems, alignContent, and alignSelf properties of a UIElement.
   * - "auto": The element's alignment is determined by its parent's alignItems property or by the default value if there is no parent.
   * - "flex-start": Items are aligned to the start of the container along the cross axis.
   * - "center": Items are centered within the container along the cross axis.
   * - "flex-end": Items are aligned to the end of the container along the cross axis.
   * - "stretch": Items are stretched to fill the container along the cross axis.
   * - "baseline": Items are aligned such that their baselines align along the cross axis.
   * - "space-between": Items are distributed evenly within the container with equal spacing between them along the cross axis.
   * - "space-around": Items are distributed evenly within the container with equal spacing around them along the cross axis.
   * @typedef {("auto" | "flex-start" | "center" | "flex-end" | "stretch" | "baseline" | "space-between" | "space-around")} FlexAlign
   */
  type FlexAlign =
    | "auto"
    | "flex-start"
    | "center"
    | "flex-end"
    | "stretch"
    | "baseline"
    | "space-between"
    | "space-around";

  /**
   * A type representing the possible values for the justifyContent property of a UIElement.
   * - "flex-start": Items are aligned to the start of the container.
   * - "center": Items are centered within the container.
   * - "flex-end": Items are aligned to the end of the container.
   * - "space-between": Items are distributed evenly within the container with equal spacing between them.
   * - "space-around": Items are distributed evenly within the container with equal spacing around them.
   * - "space-evenly": Items are distributed evenly within the container with equal spacing between and around them.
   * @typedef {("flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly")} FlexJustify
   */
  type FlexJustify = "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly";

  /**
   * A type representing the possible values for the flexWrap property of a UIElement.
   * - "nowrap": Items are laid out in a single line (row or column) and may shrink or overflow the container.
   * - "wrap": Items are wrapped onto multiple lines (rows or columns) if they do not fit within the container.
   * - "wrap-reverse": Items are wrapped onto multiple lines (rows or columns) in reverse order if they do not fit within the container.
   * @typedef {("nowrap" | "wrap" | "wrap-reverse")} FlexWrap
   */
  type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";

  interface UIElementProps {
    /**
     * The distance from the top edge of the parent element.
     */
    top?: number;
    /**
     * The distance from the right edge of the parent element.
     */
    right?: number;
    /**
     * The distance from the bottom edge of the parent element.
     */
    bottom?: number;
    /**
     * The distance from the left edge of the parent element.
     */
    left?: number;
    /**
     * The position type of the element (ex. "relative" or "absolute").
     */
    position?: ElementPositionType;
    /**
     * The alignment of the element's content.
     */
    alignContent?: FlexAlign;
    /**
     * The alignment of the element's items.
     */
    alignItems?: FlexAlign;
    /**
     * The alignment of the element itself.
     */
    alignSelf?: FlexAlign;
    /**
     * The direction of the flex layout.
     */
    flexDirection?: FlexDirection;
    /**
     * The wrapping behavior of the flex layout.
     */
    flexWrap?: FlexWrap;
    /**
     * The initial size of the element along the main axis.
     */
    flexBasis?: number;
    /**
     * The factor by which the element should grow if there is extra space.
     */
    flexGrow?: number;
    /**
     * The factor by which the element should shrink if there is not enough space.
     */
    flexShrink?: number;
    /**
     * The justification of the element's content.
     */
    justifyContent?: FlexJustify;
    /**
     * The width of the element in pixels.
     */
    width?: number;
    /**
     * The height of the element in pixels.
     */
    height?: number;
    /**
     * The minimum width of the element in pixels.
     */
    minWidth?: number;
    /**
     * The minimum height of the element in pixels.
     */
    minHeight?: number;
    /**
     * The maximum width of the element in pixels.
     */
    maxWidth?: number;
    /**
     * The maximum height of the element in pixels.
     */
    maxHeight?: number;
    /**
     * The background color of the element.
     */
    backgroundColor?: ArrayLike<number>;
    /**
     * The border color of the element.
     */
    borderColor?: ArrayLike<number>;
    /**
     * The padding of the element in pixels.
     */
    padding?: ArrayLike<number>;
    /**
     * The margin of the element in pixels.
     */
    margin?: ArrayLike<number>;
    /**
     * The border width of the element in pixels.
     */
    borderWidth?: ArrayLike<number>;
    /**
     * The border radius of the element in pixels.
     */
    borderRadius?: ArrayLike<number>;
  }

  /**
   * An iterator for UIElement objects.
   */
  class UIElementIterator {
    /**
     * Gets the next UI element in the iterator.
     */
    next(): { value: UIElement; done: boolean };
    [Symbol.iterator](): UIElementIterator;
  }

  /**
   * Class representing a user interface element.
   *
   * Implements the CSS Flexbox layout model.
   * https://css-tricks.com/snippets/css/a-guide-to-flexbox/
   */
  class UIElement {
    /**
     * Gets the position of the UI element.
     */
    get position(): ElementPositionType;

    /**
     * Sets the position of the UI element.
     * @param value The new position type for the UI element.
     */
    set position(value: ElementPositionType);

    /**
     * Gets the top position of the UI element in pixels.
     */
    get top(): number;

    /**
     * Sets the top position of the UI element in pixels.
     * @param value The new top position value for the UI element in pixels.
     */
    set top(value: number);

    /**
     * Gets the right position of the UI element in pixels.
     */
    get right(): number;

    /**
     * Sets the right position of the UI element in pixels.
     * @param value The new right position value for the UI element in pixels.
     */
    set right(value: number);

    /**
     * Gets the bottom position of the UI element in pixels.
     */
    get bottom(): number;

    /**
     * Sets the bottom position of the UI element in pixels.
     * @param value The new bottom position value for the UI element in pixels.
     */
    set bottom(value: number);

    /**
     * Gets the left position of the UI element in pixels.
     */
    get left(): number;

    /**
     * Sets the left position of the UI element in pixels.
     * @param value The new left position value for the UI element in pixels.
     */
    set left(value: number);

    /**
     * Gets the align-content property of the UI element.
     */
    get alignContent(): FlexAlign;

    /**
     * Sets the align-content property of the UI element.
     * @param value The new align-content value for the UI element.
     */
    set alignContent(value: FlexAlign);

    /**
     * Gets the align-items property of the UI element.
     */
    get alignItems(): FlexAlign;

    /**
     * Sets the align-items property of the UI element.
     * @param value The new align-items value for the UI element.
     */
    set alignItems(value: FlexAlign);

    /**
     * Gets the align-self property of the UI element.
     */
    get alignSelf(): FlexAlign;

    /**
     * Sets the align-self property of the UI element.
     * @param value The new align-self value for the UI element.
     */
    set alignSelf(value: FlexAlign);

    /**
     * Gets the flex-direction property of the UI element.
     */
    get flexDirection(): FlexDirection;

    /**
     * Sets the flex-direction property of the UI element.
     * @param value The new flex-direction value for the UI element.
     */
    set flexDirection(value: FlexDirection);

    /**
     * Gets the flex wrap property of the UI element.
     */
    get flexWrap(): FlexWrap;

    /**
     * Sets the flex wrap property of the UI element.
     * @param value The new flex wrap property value.
     */
    set flexWrap(value: FlexWrap);

    /**
     * Gets the flex basis property of the UI element in pixels.
     */
    get flexBasis(): number;

    /**
     * Sets the flex basis property of the UI element in pixels.
     * @param value The new flex basis property value in pixels.
     */
    set flexBasis(value: number);

    /**
     * Gets the flex grow property of the UI element.
     */
    get flexGrow(): number;

    /**
     * Sets the flex grow property of the UI element.
     * @param value The new flex grow property value.
     */
    set flexGrow(value: number);

    /**
     * Gets the flex shrink property of the UI element.
     */
    get flexShrink(): number;

    /**
     * Sets the flex shrink property of the UI element.
     * @param value The new flex shrink property value.
     */
    set flexShrink(value: number);

    /**
     * Gets the justify content property of the UI element.
     */
    get justifyContent(): FlexJustify;

    /**
     * Sets the justify content property of the UI element.
     * @param value The new justify content property value.
     */
    set justifyContent(value: FlexJustify);

    /**
     * Gets the width of the UI element in pixels.
     */
    get width(): number;

    /**
     * Sets the width of the UI element in pixels.
     * @param value The new width of the UI element in pixels.
     */
    set width(value: number);

    /**
     * Gets the height of the UI element in pixels.
     */
    get height(): number;

    /**
     * Sets the height of the UI element in pixels.
     * @param value The new height of the UI element in pixels.
     */
    set height(value: number);

    /**
     * Gets the minimum width of the UI element in pixels.
     */
    get minWidth(): number;

    /**
     * Sets the minimum width of the UI element in pixels.
     * @param value The new minimum width of the UI element in pixels.
     */
    set minWidth(value: number);

    /**
     * Gets the minimum height of the UI element in pixels.
     */
    get minHeight(): number;

    /**
     * Sets the minimum height of the UI element.
     * @param value The new minimum height of the UI element.
     */
    set minHeight(value: number);

    /**
     * Gets the maximum width of the UI element.
     */
    get maxWidth(): number;

    /**
     * Sets the maximum width of the UI element in pixels.
     * @param value The new maximum width of the UI element in pixels.
     */
    set maxWidth(value: number);

    /**
     * Gets the maximum height of the UI element in pixels.
     */
    get maxHeight(): number;

    /**
     * Sets the maximum height of the UI element in pixels.
     * @param value The new maximum height of the UI element.
     */
    set maxHeight(value: number);

    /**
     * Adds a child UI element to the current element.
     * @param element The child UI element to add.
     */
    addChild(element: UIElement): this;

    /**
     * Removes a child UI element from the current element.
     * @param element The child UI element to remove.
     */
    removeChild(element: UIElement): this;

    /**
     * Gets the child UI element at the specified index or undefined if the index is out of bounds.
     * @param index The index of the child UI element.
     */
    getChild(index: number): UIElement | undefined;

    /**
     * Returns an iterator for the children of the current UI element.
     */
    children(): UIElementIterator;

    /**
     * Gets the parent UI element of the current element or undefined if the element has no parent.
     */
    get parent(): UIElement | undefined;

    /**
     * Gets the {@link WebSG.ElementType | type} of the UI element.
     */
    get type(): ElementType;

    /**
     * Readonly RGBA object representing the background color of the UI element.
     */
    readonly backgroundColor: RGBA;

    /**
     * Readonly RGBA object representing the border color of the UI element.
     */
    readonly borderColor: RGBA;

    /**
     * Readonly Vector4 object representing the padding of the UI element.
     */
    readonly padding: Vector4;

    /**
     * Readonly Vector4 object representing the margin of the UI element.
     */
    readonly margin: Vector4;

    /**
     * Readonly Vector4 object representing the border width of the UI element.
     */
    readonly borderWidth: Vector4;

    /**
     * Readonly Vector4 object representing the border radius of the UI element.
     */
    readonly borderRadius: Vector4;
  }

  /**
   * Interface for the properties of a UIText element.
   * @extends UIElementProps
   */
  interface UITextProps extends UIElementProps {
    /**
     * The text content of the UIText element.
     */
    value?: string;

    /**
     * The font family used for the text.
     * Any valid css font-family property value is allowed.
     */
    fontFamily?: string;

    /**
     * The font style used for the text, e.g. 'normal' or 'italic'.
     * Any valid css font-style property value is allowed.
     */
    fontStyle?: string;

    /**
     * The font weight used for the text, e.g. 'normal', 'bold', or a numeric value.
     * Any valid css font-weight property value is allowed.
     */
    fontWeight?: string;

    /**
     * The color of the text as an array-like structure of [r, g, b, a] values, where each value is in the range [0, 1].
     */
    color?: ArrayLike<number>;

    /**
     * The font size of the text in pixels.
     */
    fontSize?: number;
  }

  /**
   * Class representing a text element within a user interface.
   */
  class UIText extends UIElement {
    /**
     * Gets the text content of the UIText element.
     */
    get value(): string;

    /**
     * Sets the text content of the UIText element.
     * @param value The new text content.
     */
    set value(value: string);

    /**
     * Gets the font family used for the text.
     */
    get fontFamily(): string;

    /**
     * Sets the font family used for the text.
     * @param value The new font family. Accepts any valid CSS font-family value.
     */
    set fontFamily(value: string);

    /**
     * Gets the font weight used for the text.
     */
    get fontWeight(): string;

    /**
     * Sets the font weight used for the text.
     * @param value The new font weight. Accepts any valid CSS font-weight value.
     */
    set fontWeight(value: string);

    /**
     * Gets the font size of the text in pixels.
     */
    get fontSize(): number;

    /**
     * Sets the font size of the text in pixels.
     * @param value The new font size. Accepts any valid CSS font-size value.
     */
    set fontSize(value: number);

    /**
     * Gets the font style used for the text.
     */
    get fontStyle(): string;

    /**
     * Sets the font style used for the text.
     * @param value The new font style.  Accepts any valid CSS font-style value.
     */
    set fontStyle(value: string);

    /**
     * Readonly property representing the color of the text as an RGBA object.
     */
    readonly color: RGBA;
  }

  /**
   * A 2-dimensional vector.
   */
  class Vector2 {
    [index: number]: number;
    /**
     * The x component of the vector.
     */
    x: number;
    /**
     * The y component of the vector.
     */
    y: number;
    /**
     * Constructs a new vector.
     */
    constructor();
    /**
     * Constructs a new vector with the given components.
     * @param x The x component.
     * @param y The y component.
     */
    constructor(x: number, y: number);
    /**
     * Constructs and sets the initial components of the vector from a numeric array-like object.
     */
    constructor(array: ArrayLike<number>);
    /**
     * Sets the components of the vector.
     * @param value The x,y components of the vector.
     */
    set(value: ArrayLike<number>): this;
    /**
     * Sets the components of the vector to a scalar value.
     */
    setScalar(value: number): this;
    /**
     * Adds the given vector to this vector.
     * @param vector The vector to add.
     */
    add(vector: ArrayLike<number>): this;
    /**
     * Adds the given vectors together and stores the result in this vector.
     * @param a The first vector.
     * @param b The second vector.
     */
    addVectors(a: ArrayLike<number>, b: ArrayLike<number>): this;
    /**
     * Adds the given vector scaled by the given scalar to this vector.
     */
    addScaledVector(vector: ArrayLike<number>, scale: number): this;
    /**
     * Subtracts the given vector from this vector.
     * @param vector The vector to subtract.
     */
    subtract(vector: ArrayLike<number>): this;
    /**
     * Subtracts the second vector from the first and stores the result in this vector.
     * @param a The first vector.
     * @param b The second vector.
     */
    subtractVectors(a: ArrayLike<number>, b: ArrayLike<number>): this;
    /**
     * Subtracts the given vector scaled by the given scalar from this vector.
     * @param vector The vector to subtract.
     * @param scale The scalar to scale the vector by.
     */
    subtractScaledVector(vector: ArrayLike<number>, scale: number): this;
    /**
     * Multiplies this vector by the given vector.
     * @param vector The vector to multiply by.
     */
    multiply(vector: ArrayLike<number>): this;
    /**
     * Multiplies the given vectors together and stores the result in this vector.
     * @param a The first vector.
     * @param b The second vector.
     */
    multiplyVectors(a: ArrayLike<number>, b: ArrayLike<number>): this;
    /**
     * Multiplies this vector by the given scalar.
     * @param scalar The scalar to multiply by.
     */
    multiplyScalar(scalar: number): this;
    /**
     * Divides this vector by the given vector.
     * @param vector The vector to divide by.
     */
    divide(vector: ArrayLike<number>): this;
    /**
     * Divides the given vectors and stores the result in this vector.
     * @param a The first vector.
     * @param b The second vector.
     */
    divideVectors(a: ArrayLike<number>, b: ArrayLike<number>): this;
    /**
     * Divides this vector by the given scalar.
     * @param scalar The scalar to divide by.
     */
    divideScalar(scalar: number): this;
    /**
     * Returns the number of components in this vector.
     */
    readonly length: number;
  }

  /**
   * A 3-dimensional vector.
   */
  class Vector3 {
    [index: number]: number;
    /**
     * The x component of the vector.
     */
    x: number;
    /**
     * The y component of the vector.
     */
    y: number;
    /**
     * The z component of the vector.
     */
    z: number;
    constructor();
    /**
     * Constructs and sets the initial components of the vector.
     * @param x The x component of the vector.
     * @param y The y component of the vector.
     * @param z The z component of the vector.
     */
    constructor(x: number, y: number, z: number);
    /**
     * Constructs and sets the initial components of the vector from a numeric array-like object.
     */
    constructor(array: ArrayLike<number>);
    /**
     * Sets the components of the vector.
     * @param value The x,y,z components of the vector.
     */
    set(value: ArrayLike<number>): this;
    /**
     * Sets the components of the vector to the given scalar value.
     * @param value The scalar value to set.
     */
    setScalar(value: number): this;
    /**
     * Adds the given vector to this vector.
     * @param vector The vector to add.
     */
    add(vector: ArrayLike<number>): this;
    /**
     * Adds two vectors together and stores the result in this vector.
     * @param a The first vector.
     * @param b The second vector.
     */
    addVectors(a: ArrayLike<number>, b: ArrayLike<number>): this;
    /**
     * Adds the given vector scaled by the given scalar to this vector.
     */
    addScaledVector(vector: ArrayLike<number>, scale: number): this;
    /**
     * Subtracts the given vector from this vector.
     * @param vector The vector to subtract.
     */
    subtract(vector: ArrayLike<number>): this;
    /**
     * Subtracts the second vector from the first and stores the result in this vector.
     * @param a The first vector.
     * @param b The second vector.
     */
    subtractVectors(a: ArrayLike<number>, b: ArrayLike<number>): this;
    /**
     * Subtracts the given vector scaled by the given scalar from this vector.
     * @param vector The vector to subtract.
     * @param scale The scalar to scale the vector by before subtracting.
     */
    subtractScaledVector(vector: ArrayLike<number>, scale: number): this;
    /**
     * Multiplies this vector by the given vector.
     * @param vector The vector to multiply by.
     */
    multiply(vector: ArrayLike<number>): this;
    /**
     * Multiplies two vectors together and stores the result in this vector.
     * @param a The first vector.
     * @param b The second vector.
     */
    multiplyVectors(a: ArrayLike<number>, b: ArrayLike<number>): this;
    /**
     * Multiplies this vector by the given scalar.
     * @param scalar The scalar to multiply by.
     */
    multiplyScalar(scalar: number): this;
    /**
     * Divides this vector by the given vector.
     * @param vector The vector to divide by.
     */
    divide(vector: ArrayLike<number>): this;
    /**
     * Divides the first vector by the second and stores the result in this vector.
     * @param a The first vector.
     * @param b The second vector.
     */
    divideVectors(a: ArrayLike<number>, b: ArrayLike<number>): this;
    /**
     * Divides this vector by the given scalar.
     * @param scalar The scalar to divide by.
     */
    divideScalar(scalar: number): this;
    /**
     * Returns the number of components in this vector.
     */
    readonly length: number;
  }

  /**
   * A 4-dimensional vector.
   */
  class Vector4 {
    [index: number]: number;
    /**
     * The x component of the vector.
     */
    x: number;
    /**
     * The y component of the vector.
     */
    y: number;
    /**
     * The z component of the vector.
     */
    z: number;
    /**
     * The w component of the vector.
     */
    w: number;
    /**
     * Alias for {@link WebSG.Vector4.x}
     */
    top: number;
    /**
     * Alias for {@link WebSG.Vector4.y}
     */
    right: number;
    /**
     * Alias for {@link WebSG.Vector4.z}
     */
    bottom: number;
    /**
     * Alias for {@link WebSG.Vector4.w}
     */
    left: number;
    /**
     * Constructs a new vector.
     */
    constructor();
    /**
     * Constructs a new vector with the given components.
     * @param x The x component of the vector.
     * @param y The y component of the vector.
     * @param z The z component of the vector.
     * @param w The w component of the vector.
     */
    constructor(x: number, y: number, z: number, w: number);
    /**
     * Constructs and sets the initial components of the vector from a numeric array-like object.
     */
    constructor(array: ArrayLike<number>);
    /**
     * Sets the components of the vector.
     * @param value The x,y,z,w components of the vector.
     */
    set(value: ArrayLike<number>): this;
    /**
     * Sets the components of the vector to a scalar value.
     * @param value The value to set the components to.
     */
    setScalar(value: number): this;
    /**
     * Adds a vector to this vector.
     * @param vector The vector to add.
     */
    add(vector: ArrayLike<number>): this;
    /**
     * Adds two vectors together and stores the result in this vector.
     * @param a The first vector.
     * @param b The second vector.
     */
    addVectors(a: ArrayLike<number>, b: ArrayLike<number>): this;
    /**
     * Adds a scaled vector to this vector.
     * @param vector The vector to add.
     * @param scale The scale to apply to the vector.
     */
    addScaledVector(vector: ArrayLike<number>, scale: number): this;
    /**
     * Subtracts a vector from this vector.
     * @param vector The vector to subtract.
     */
    subtract(vector: ArrayLike<number>): this;
    /**
     * Subtracts two vectors and stores the result in this vector.
     * @param a The first vector.
     * @param b The second vector.
     */
    subtractVectors(a: ArrayLike<number>, b: ArrayLike<number>): this;
    /**
     * Subtracts a scaled vector from this vector.
     * @param vector The vector to subtract.
     * @param scale The scale to apply to the vector.
     */
    subtractScaledVector(vector: ArrayLike<number>, scale: number): this;
    /**
     * Multiplies this vector by another vector.
     * @param vector The vector to multiply.
     */
    multiply(vector: ArrayLike<number>): this;
    /**
     * Multiplies two vectors together and stores the result in this vector.
     * @param a The first vector.
     * @param b The second vector.
     */
    multiplyVectors(a: ArrayLike<number>, b: ArrayLike<number>): this;
    /**
     * Multiplies this vector by a scalar value.
     * @param scalar The scalar to multiply by.
     */
    multiplyScalar(scalar: number): this;
    /**
     * Divides this vector by another vector.
     * @param vector The vector to divide by.
     */
    divide(vector: ArrayLike<number>): this;
    /**
     * Divides two vectors and stores the result in this vector.
     * @param a The first vector.
     * @param b The second vector.
     */
    divideVectors(a: ArrayLike<number>, b: ArrayLike<number>): this;
    /**
     * Divides this vector by a scalar value.
     * @param scalar The scalar to divide by.
     */
    divideScalar(scalar: number): this;
    /**
     * Returns the number of components in this vector.
     */
    readonly length: number;
  }

  class ComponentStore {}

  class Component {
    [propName: string]: unknown;
  }

  /**
   * Class representing a 3D world composed of {@link WebSG.Scene | scenes}, {@link WebSG.Node | nodes},
   * {@link WebSG.Mesh | meshes}, {@link WebSG.Material | materials}, and other properties defined by
   * the [glTF 2.0 specification](https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html).
   *
   * Currently a World contains resources loaded for the environment's glTF document. This means you do not have direct
   * access to user's avatars in the world's scene graph. On script initialization, the world will be empty. It is not
   * until {@link WebSG.World.onload | world.onload} is called that {@link WebSG.World.environment | world.environment}
   * will be set to the default {@link WebSG.Scene | scene} in the world's initial glTF document. All other resources
   * such as textures, materials, and meshes referenced by the document will be loaded at this time and can be accessed
   * via methods such as {@link WebSG.World.findNodeByName | world.findNodeByName }.
   *
   * @example
   * In the following example {@link WebSG.World.findNodeByName | world.findNodeByName } is used to
   * find a {@link WebSG.Node | node } by its name and log the reference to the console.
   * \`\`\`js
   * // World not yet loaded
   *
   * world.onload = () => {
   *   // World loaded
   *   const lightNode = world.findNodeByName("Light");
   *   console.log(lightNode);
   * };
   * \`\`\`
   *
   * Once a world is loaded you can modify the scene graph by adding, removing, or modifying nodes.
   *
   * @example
   * \`\`\`js
   * world.onload = () => {
   *   const newNode = world.createNode();
   *   world.environment.addNode(newNode); // Nodes must be added to a scene to be rendered
   *
   *   newNode.mesh = world.findMeshByName("Teapot");
   *
   *   world.environment.removeNode(newNode);
   * };
   * \`\`\`
   *
   * If you want to modify the scene graph each frame you can use the
   * {@link WebSG.World.onupdate | world.onupdate} callback.
   *
   * @example
   * \`\`\`js
   * world.onload = () => {
   *   const newNode = world.createNode();
   *   world.environment.addNode(newNode);
   *
   *   newNode.mesh = world.findMeshByName("Teapot");
   *
   *   world.onupdate = (dt, time) => {
   *     newNode.translation.y = Math.sin(time) * 5;
   *   };
   * };
   * \`\`\`
   *
   * Once the local user has entered the world, the networking interface will be fully initialized. You access
   * the local user's {@link WebSGNetworking.Peer | peer} via the global
   * {@link WebSGNetworking.Network | network.local} variable. This can be used to get the local user's transform.
   *
   * @example
   * \`\`\`js
   * world.onenter = () => {
   *   const localUser = network.local;
   *   console.log(localUser.transform);
   *   console.log(localUser.rotation);
   * };
   * \`\`\`
   *
   * Overall, world is the main interface for creating new resources. See the individual factory functions
   * for more details.
   */
  class World {
    /**
     * Gets the environment of the world.
     * Note this is not set until \`world.onload\` is called.
     */
    get environment(): Scene;

    /**
     * Sets the environment of the world.
     * @param {Scene} scene The new environment scene for the world.
     */
    set environment(scene: Scene);

    /**
     * Creates an {@link WebSG.Accessor | Accessor } from the given ArrayBuffer and properties.
     * @param {ArrayBuffer} buffer The ArrayBuffer to create the Accessor from.
     * @param {AccessorFromProps} props The properties for the new Accessor.
     */
    createAccessorFrom(buffer: ArrayBuffer, props: AccessorFromProps): Accessor;

    /**
     * Finds an {@link WebSG.Accessor | Accessor } by its name. Returns undefined if not found.
     * @param name - The name of the Accessor to find.
     */
    findAccessorByName(name: string): Accessor | undefined;

    /**
     * Creates a {@link WebSG.Collider | Collider } with the given properties.
     * @param {ColliderProps} props The properties for the new Collider.
     */
    createCollider(props: ColliderProps): Collider;

    /**
     * Finds a {@link WebSG.Collider | Collider } by its name. Returns undefined if not found.
     * @param name The name of the Collider to find.
     */
    findColliderByName(name: string): Collider | undefined;

    /**
     * Creates a {@link WebSG.Light | Light } with the given properties.
     * @param props The properties for the new Light.
     */
    createLight(props: LightProps): Light;

    /**
     * Finds a {@link WebSG.Light | Light } by its name. Returns undefined if not found.
     * @param name The name of the Light to find.
     */
    findLightByName(name: string): Light | undefined;

    /**
     * Creates an unlit {@link WebSG.Material | Material } with the given properties.
     * @param props The properties for the new unlit Material.
     */
    createUnlitMaterial(props: UnlitMaterialProps): Material;

    /**
     * Creates a {@link WebSG.Material | Material } with the given properties.
     * @param props The properties for the new Material.
     */
    createMaterial(props: MaterialProps): Material;

    /**
     * Finds a {@link WebSG.Material | Material } by its name. Returns undefined if not found.
     * @param name The name of the Material to find.
     */
    findMaterialByName(name: string): Material | undefined;

    /**
     * Creates a {@link WebSG.Mesh | Mesh } with the given properties.
     * @param props The properties for the new Mesh.
     */
    createMesh(props: MeshProps): Mesh;

    /**
     * Creates a Box {@link WebSG.Mesh | Mesh } with the given properties.
     * @param props The properties for the new Box Mesh.
     */
    createBoxMesh(props: BoxMeshProps): Mesh;

    /**
     * Finds a {@link WebSG.Mesh | Mesh } by its name. Returns undefined if not found.
     * @param name The name of the mesh to find.
     */
    findMeshByName(name: string): Mesh | undefined;

    /**
     * Creates a new {@link WebSG.Node | Node } with the given properties.
     * @param props Optional properties to set on the new node.
     */
    createNode(props?: NodeProps): Node;

    /**
     * Finds a {@link WebSG.Node | node } by its name. Returns undefined if not found.
     * @param name The name of the node to find.
     */
    findNodeByName(name: string): Node | undefined;

    /**
     * Creates a new {@link WebSG.Scene | Scene } with the given properties.
     * @param props Optional properties to set on the new scene.
     */
    createScene(props?: SceneProps): Scene;

    /**
     * Finds a {@link WebSG.Scene | scene } by its name. Returns undefined if not found.
     * @param name The name of the scene to find.
     */
    findSceneByName(name: string): Scene | undefined;

    /**
     * Finds a {@link WebSG.Texture | texture } by its name. Returns undefined if not found.
     * @param name The name of the texture to find.
     */
    findTextureByName(name: string): Texture | undefined;

    /**
     * Finds an {@link WebSG.Image | image } by its name. Returns undefined if not found.
     * @param name The name of the image to find.
     */
    findImageByName(name: string): Image | undefined;

    /**
     * Creates a new {@link WebSG.UICanvas | UICanvas } with the given properties.
     * @param props Optional properties to set on the new UICanvas.
     */
    createUICanvas(props?: UICanvasProps): UICanvas;

    /**
     * Finds a UICanvas by its name. Returns undefined if not found.
     * @param name The name of the UICanvas to find.
     */
    findUICanvasByName(name: string): UICanvas | undefined;

    /**
     * Creates a new UIElement with the given properties.
     * @param props Optional properties to set on the new UIElement.
     */
    createUIElement(props?: UIElementProps): UIElement;

    /**
     * Creates a new UIText with the given properties.
     * @method createUIText
     * @param props Optional properties to set on the new UIText.
     */
    createUIText(props?: UITextProps): UIText;

    /**
     * Creates a new UIButton with the given properties.
     * @param props Optional properties to set on the new UIButton.
     */
    createUIButton(props?: UIButtonProps): UIButton;

    /**
     * Finds a UIElement by its name. Returns undefined if not found.
     * @param name The name of the UIElement to find.
     */
    findUIElementByName(name: string): UIElement | undefined;

    /**
     * Creates a new {@link WebSG.CollisionListener | CollisionListener } for listening to
     * collisions between nodes with colliders set on them.
     */
    createCollisionListener(): CollisionListener;

    /**
     * Returns the maximum number of components per type that can be stored in the world.
     * Defaults to 10000.
     */
    get componentStoreSize(): number;

    /**
     * Sets the maximum number of components per type that can be stored in the world.
     * Defaults to 10000.
     */
    set componentStoreSize(value: number);

    /**
     * Find the {@link WebSG.ComponentStore | ComponentStore } for the given component type.
     * Returns undefined if not found.
     * @param name The name of the component store to find.
     */
    findComponentStoreByName(name: string): ComponentStore | undefined;

    /**
     * Stops any ongoing orbiting operation.
     */
    stopOrbit(): undefined;

    /**
     * Get the primary input source's origin in world space.
     * The primary input source in XR is the user's primary controller otherwise it's the camera.
     * @experimental This API is experimental and may change or be removed in a future release.
     */
    get primaryInputSourceOrigin(): Vector3;

    /**
     * Get the primary input source's direction in world space.
     * The primary input source in XR is the user's primary controller otherwise it's the camera.
     * @experimental This API is experimental and may change or be removed in a future release.
     */
    get primaryInputSourceDirection(): Vector3;

    /**
     * Called when the world is loaded.
     * The glTF document has been loaded and all resources are available.
     */
    onload: (() => any) | null;

    /**
     * Called when the user enters the world.
     * The network.local peer has been set and the user has been spawned into the world.
     */
    onenter: (() => any) | null;

    /**
     * Called once per frame when the world is updated.
     * @param dt - The time since the last update in seconds.
     * @param time - The total time since the start of the world in seconds.
     */
    onupdate: ((dt: number, time: number) => any) | null;
  }
}

declare namespace WebSGNetworking {
  class Peer {
    get id(): string;
    get isHost(): boolean;
    get isLocal(): boolean;
    get translation(): WebSG.Vector3;
    get rotation(): WebSG.Quaternion;
    send(message: string | ArrayBuffer, reliable: boolean): undefined;
  }

  class NetworkMessage {
    peer: Peer;
    data: ArrayBuffer | string;
    bytesWritten: number;
    isBinary: boolean;
  }

  /**
   * An iterator for {@link WebSGNetworking.NetworkMessage | NetworkMessage }s.
   */
  class NetworkMessageIterator {
    /**
     * Returns the next {@link WebSGNetworking.NetworkMessage} in the iterator.
     */
    next(): { value: NetworkMessage; done: boolean };
    [Symbol.iterator](): NetworkMessageIterator;
  }

  /**
   * A listener for receiving network messages. The {@link WebSGNetworking.NetworkListener.receive | receive }
   * method should be called once per frame to drain the listener's internal message queue. When done with the
   * listener, the {@link WebSGNetworking.NetworkListener.close | close } method should be called to free
   * the listener's resources.
   */
  class NetworkListener {
    /**
     * This method returns an iterator that can be used to iterate over inbound network messages.
     * @param buffer - An optional buffer to use when reading network messages.
     * This should be at least the size of the largest network message you intend to receive.
     * If not provided, the buffer will be created internally.
     */
    receive(buffer?: ArrayBuffer): NetworkMessageIterator;

    /**
     * Closes the listener and frees its resources.
     */
    close(): undefined;
  }

  /**
   * An object representing a node that was spawned or despawned.
   */
  interface Replication {
    /**
     * The node that was spawned or despawned.
     */
    node: WebSG.Node;
    /**
     * The peer that spawned or despawned the node.
     */
    peer: WebSGNetworking.Peer;
    /**
     * The data that was sent with the spawn or despawn message.
     */
    data: ArrayBuffer;
  }

  /**
   * An iterator for {@link WebSGNetworking.Replication | Replication }s.
   */
  class ReplicationIterator {
    /**
     * Returns the next {@link WebSGNetworking.Replication} in the iterator.
     */
    next(): { value: Replication; done: boolean };
    [Symbol.iterator](): ReplicationIterator;
  }

  /**
   * A replicator for spawning and despawning nodes.
   */
  class Replicator {
    /**
     * Spawns a node with the given optional data.
     * @param data - Optional data to send with the spawn message.
     */
    spawn(data?: ArrayBuffer): WebSG.Node;
    /**
     * Despawns a node with the given optional data.
     * @param node The node to despawn.
     * @param data - Optional data to send with the despawn message.
     */
    despawn(node: WebSG.Node, data?: ArrayBuffer): void;
    /**
     * Returns an iterator for spawned nodes.
     */
    spawned(): ReplicationIterator;
    /**
     * Returns an iterator for despawned nodes.
     */
    despawned(): ReplicationIterator;
  }

  /**
   * Represents the networking methods available
   * for sending and receiving data in a WebSG script.
   */
  class Network {
    /**
     * The current host {@link WebSGNetworking.Peer} in the world. This may change
     * as peers enter and exit the world.
     */
    get host(): Peer | undefined;

    /**
     * The local user's {@link WebSGNetworking.Peer} in the world. This will not be set
     * until the user has entered the world and {@link WebSG.World.onenter | world.onenter} is called
     */
    get local(): Peer | undefined;

    /**
     * Creates a new \${@link WebSGNetworking.NetworkListener} that can be used to listen for
     * incoming messages from other peers.
     */
    listen(): NetworkListener;

    /**
     * Broadcasts data to all connected clients.
     * @param data - The data to be broadcasted.
     * @param reliable - Whether or not the data should be sent reliably or unreliably.
     * Defaults to true.
     */
    broadcast(message: string | ArrayBuffer, reliable?: boolean): undefined;

    /**
     * Callback for when a peer enters the world.
     * @param peer - The peer that entered the world.
     */
    onpeerentered: ((peer: Peer) => any) | null;

    /**
     * Callback for when a peer exits the world.
     * @param peer - The peer that exited the world.
     */
    onpeerexited: ((peer: Peer) => any) | null;

    /**
     * Defines a new replicator that can be used to spawn and despawn nodes
     * @param factory - A function called whenever a new node is spawned.
     */
    defineReplicator(factory: () => WebSG.Node): Replicator;
  }
}

declare namespace ThirdRoom {
  /**
   * An ActionBarListener is used to listen for actions triggered in the action bar.
   * The {@link ThirdRoom.ActionBarListener.actions | .actions()} method should be called
   * each frame to drain the action bar's action queue. If you are done with the action queue,
   * call {@link ThirdRoom.ActionBarListener.dispose | .dispose()} to dispose the listener.
   */
  class ActionBarListener {
    /**
     * Returns an iterator over the actions triggered in the action bar since the last call to this method.
     */
    actions(): ActionBarIterator;

    /**
     * Disposes the action bar listener.
     */
    dispose(): undefined;
  }

  /**
   * Represents an iterator over the actions triggered in the action bar.
   */
  class ActionBarIterator {
    next(): { value: string; done: boolean };
    [Symbol.iterator](): ActionBarIterator;
  }

  /**
   * Represents an item in the action bar.
   */
  interface ActionBarItem {
    /**
     * Used to identify the action when it is triggered.
     */
    id: string;
    /**
     * Used to display what the action does when hovering over an action.
     */
    label: string;
    /**
     * Used to display an icon in the action bar.
     * Note that the thumbnail must be a square uncompressed image (e.g. .png or .jpg)
     * Basis Universal compressed images (e.g. .ktx2) are not supported.
     */
    thumbnail: WebSG.Image;
  }

  /**
   * Represents the action bar at the bottom of the screen.
   * Items can be set via the {@link ThirdRoom.ActionBar.setItems} method.
   * You can listen for triggered actions by creating a new listener via the
   * {@link ThirdRoom.ActionBar.createListener} method.
   */
  class ActionBar {
    /**
     * Replaces the items in the action bar with the given items.
     * @param items The {@link ThirdRoom.ActionBarItem}s to set.
     */
    setItems(items: ActionBarItem[]): undefined;
    /**
     * Creates a new {@link ThirdRoom.ActionBarListener} for the action bar.
     */
    createListener(): ActionBarListener;
  }

  class ThirdRoom {
    /**
     * Enables or disables the use of the custom Matrix-style material on the world.
     *
     * @experimental Note that this is not a standard function and could be removed or disabled in the future.
     * @param {boolean} enabled - Whether to enable or disable Matrix materials.
     * @returns {undefined}
     */
    enableMatrixMaterial(enabled: boolean): undefined;

    /**
     * Gets the size of the local audio input source's audio data buffer.
     * Similar to the WebAudio [AnalyserNode.frequencyBinCount](https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/frequencyBinCount)
     * @returns {number} - The size of the audio data buffer.
     */
    getAudioDataSize(): number;

    /**
     * Gets the local audio input source's time data and fills the provided Uint8Array.
     * The data array must be at least the size returned by getAudioDataSize.
     * Similar to the WebAudio [AnalyserNode.getByteTimeDomainData](https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/getByteTimeDomainData)
     * @param {Uint8Array} data - The array to store the audio time data.
     * @returns {number} - The number of elements filled in the data array.
     */
    getAudioTimeData(data: Float32Array): number;

    /**
     * Gets the local audio input source's frequency data and fills the provided Uint8Array.
     * The data array must be at least the size returned by getAudioDataSize.
     * Similar to the WebAudio [AnalyserNode.getByteFrequencyData](https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/getByteFrequencyData)
     * @param {Uint8Array} data - The array to store the audio frequency data.
     * @returns {number} - The number of elements filled in the data array.
     */
    getAudioFrequencyData(data: Float32Array): number;

    /**
     * Determines if the local user is currently in an Augmented Reality (AR) environment.
     * Checks to see if the local user is in immersive AR mode and if the world supports AR.
     * @returns {boolean} - True if the script is running in an AR environment, false otherwise.
     */
    inAR(): boolean;

    /**
     * Returns the {@link ThirdRoom.ActionBar | ActionBar} object.
     */
    get actionBar(): ThirdRoom.ActionBar;
  }
}

declare namespace Matrix {
  /**
   * MatrixWidgetAPIRequest interface represents a request sent to or from a Matrix widget.
   */
  interface MatrixWidgetAPIRequest {
    api: "fromWidget" | "toWidget";
    requestId: string;
    action: string;
    widgetId: string;
    data: unknown;
  }

  /**
   * MatrixWidgetAPIResponse interface represents a response to a Matrix widget API request.
   */
  interface MatrixWidgetAPIResponse extends MatrixWidgetAPIRequest {
    response: unknown;
  }

  /**
   * MatrixWidgetAPIErrorResponse interface represents an error response to a Matrix widget API request.
   */
  interface MatrixWidgetAPIErrorResponse extends MatrixWidgetAPIResponse {
    response: {
      error: {
        message: string;
      };
    };
  }

  type MatrixAPIMessage = MatrixWidgetAPIRequest | MatrixWidgetAPIResponse | MatrixWidgetAPIErrorResponse;

  /**
   * MatrixWidgetAPI interface represents the Matrix widget API methods for sending and receiving messages.
   */
  interface MatrixWidgetAPI {
    /**
     * Starts listening for Matrix API messages.
     * @returns {undefined}
     */
    listen(): undefined;

    /**
     * Closes the Matrix API message listener.
     * @returns {undefined}
     */
    close(): undefined;

    /**
     * Receives a Matrix API message. Returns the received message or undefined if no message is available.
     * @returns {MatrixAPIMessage | undefined} - The received Matrix API message or undefined if no message is available.
     */
    receive(): MatrixAPIMessage | undefined;

    /**
     * Sends a Matrix API message.
     * @param {MatrixAPIMessage} event - The Matrix API message to send.
     * @returns {undefined}
     */
    send(event: MatrixAPIMessage): undefined;
  }
}

/**
 * The global world instance.
 */
declare const world: WebSG.World;

/**
 * The global network instance.
 */
declare const network: WebSGNetworking.Network;

/**
 * The global Matrix widget API instance.
 * @global {MatrixWidgetAPI} matrix
 */
declare const matrix: Matrix.MatrixWidgetAPI;

/**
 * The global ThirdRoom instance.
 * @global {ThirdRoom} thirdroom
 */
declare const thirdroom: ThirdRoom.ThirdRoom;
`,bu="monaco_theme";function yu({room:e}){const{session:t,platform:n}=ti(!0),r=Me(),[o,i]=Le(yi),[s,a]=c.useState(void 0),[l,d]=cn("feature_localCodeEditorState_worldId_"+(e==null?void 0:e.id)||"gltfViewer",void 0),[p,h]=cn(bu,"light"),[v,m]=c.useState(!1),[T,f]=c.useState(!0),[g,b]=c.useState(!1),y=hu(),x=c.useRef(null);c.useEffect(()=>{f(o===s)},[o,s]),c.useEffect(()=>{i(l||Xn)},[l,i]),c.useEffect(()=>{e&&(async()=>{const _=await e.getStateEvent("org.matrix.msc3815.world"),L=_==null?void 0:_.event.content;if(!L)return!1;let R=L.script_url;if(!R)return;R.startsWith("mxc:")&&(R=t.mediaRepository.mxcUrl(R));const k=await fetch(R);if(k.headers.get("content-type")==="application/wasm")return;const q=await k.text();l||i(q),a(q)})()},[t,e,i,l]);const[{canDrop:w},C]=Zr(()=>({accept:to.Node,drop(_){const{activeNodeId:L}=_;if(!_)return;const R=An(r,L),k=x.current;if(!y||!k)return;const W=k.getPosition();if(!W)return;const q=new y.Range(W.lineNumber,W.column,W.lineNumber,W.column),K={major:1,minor:1},ne=`const ${ki(R.name)} = world.findNodeByName("${R.name}");
`,O={identifier:K,range:q,text:ne,forceMoveMarkers:!0};k.executeEdits("my-source",[O])},collect:_=>({canDrop:_.canDrop()})}),[y]);async function S(){var W;if(!e)return;const _=await e.getStateEvent("org.matrix.msc3815.world"),L=(W=_==null?void 0:_.event)==null?void 0:W.content;if(!L)return!1;m(!0);const R=n.createBlob(new ArrayBuffer(0),"text/javascript");R._blob=new File([o],"script.js",{type:"text/javascript"});const k=await ni(t.hsApi,R);t.hsApi.sendState(e.id,"org.matrix.msc3815.world","",{...L,script_url:k})}const I=_=>{_&&(i(_),d(()=>_),f(_===s))};function E(){b(!0)}function A(){s&&i(s),b(!1)}function M(){h(p==="light"?"vs-dark":"light")}function N(_){const L=_.languages.typescript.javascriptDefaults.getCompilerOptions();_.languages.typescript.javascriptDefaults.setCompilerOptions({...L,target:_.languages.typescript.ScriptTarget.ES2020,checkJs:!0,strictNullChecks:!1,lib:["esnext"]}),_.languages.typescript.javascriptDefaults.addExtraLib(vu,"websg.d.ts")}return $(H,{children:[u(Ai,{open:g,requestClose:()=>b(!1),title:"Reset Script",content:u(U,{variant:"b2",children:"Are you sure you want to reset the script? Any unsaved changes will be lost!"}),buttons:$("div",{className:"flex gap-xs",children:[u(mt,{className:"basis-0 grow",variant:"danger",fill:"outline",onClick:()=>b(!1),children:"Cancel"}),u(mt,{className:"basis-0 grow",variant:"danger",onClick:A,children:"Reset"})]})}),$("div",{ref:C,className:"ScriptEditor flex flex-column",children:[$($n,{className:"ScriptEditor__header shrink-0 gap-sm",children:[u("div",{className:"grow flex",children:u(mn,{active:!1,children:u(U,{variant:"b2",weight:"semi-bold",children:"Script Editor"})})}),$("div",{className:"ScriptEditor__headerToolbar shrink-0 flex items-center",children:[u(mt,{size:"xs",variant:"danger",onClick:E,disabled:T,children:"Reset"}),u(mt,{size:"xs",variant:"primary",onClick:S,disabled:T,children:v?u(Wr,{size:"sm",color:"on-primary"}):"Save & Run"})]})]}),$("div",{className:"ScriptEditor__code grow",children:[u(mu,{defaultLanguage:"javascript",defaultValue:Xn,value:o,onChange:I,beforeMount:N,onMount:_=>x.current=_,theme:p}),u("div",{className:"ScriptEditor__themeBtn",children:u(st,{side:"left",content:"Toggle Editor Theme",children:u(Re,{iconSrc:gu,label:"Toggle Editor Theme",onClick:M})})}),w&&u("div",{className:"ScriptEditor__dropOverlay flex flex-column items-center justify-center",children:$("div",{className:"ScriptEditor__dropContainer flex flex-column items-center gap-xs",children:[u(U,{variant:"s1",color:"world",weight:"bold",className:"text-center",children:"Drop Node"}),u(U,{color:"world",weight:"medium",className:"text-center",children:"Insert code at your cursor to access node in script"})]})})]})]})]})}function wu({className:e,center:t,left:n,right:r}){return $("div",{className:te("Toolbar",e),children:[u("div",{className:"grow basis-0 flex items-center",children:n}),u("div",{className:"shrink-0 basis-0 flex items-center justify-center",children:t}),u("div",{className:"grow basis-0 flex items-center justify-end",children:r})]})}function yt({className:e,children:t}){return u("div",{className:te("ToolbarItemGroup",e),children:t})}const xe=c.forwardRef(({className:e,active:t,outlined:n,before:r,after:o,children:i,...s},a)=>$("button",{className:te("ToolbarButton",{"ToolbarButton--ui-before":r,"ToolbarButton--ui-after":o,"ToolbarButton--outlined":n},e),type:"button","aria-pressed":t,...s,ref:a,children:[r,typeof i=="string"?u(U,{className:"truncate",variant:"b3",weight:"semi-bold",children:i}):i,o]}));function qo({className:e,children:t}){return u("div",{className:te("ToolbarButtonGroup",e),children:t})}function Ko(){return u("div",{className:"ToolbarButtonDivider"})}const Tu="/assets/search-2fc31747.svg",xu="/assets/curly-bracket-f21cdfa3.svg",Fr="/assets/box-3d-5162c40e.svg",Su="/assets/back-hand-93aa648b.svg",Cu="/assets/open-with-17d6def5.svg",Iu="/assets/auto-renew-68d5d64b.svg",Eu="/assets/resize-446ee9f1.svg",Au="/assets/activity-zone-d829ef64.svg",Ru="/assets/my-location-f9215ab5.svg",Pu="/assets/filter-center-focus-f7370c56.svg",Mu="/assets/border-bottom-cf6d17ae.svg",$u="/assets/magnet-8db7c324.svg",Ou="/assets/grid4x4-07e82cdf.svg",ku=()=>{const[e]=cn("feature_sceneEditor",!1);return c.useMemo(()=>[{id:ve.SceneInspector,title:"Scene Inspector",icon:Fr},{id:ve.SceneEditor,title:"Scene Editor",icon:Fr,disabled:!e,disableReason:"Coming soon!"},{id:ve.ScriptEditor,title:"Script Editor",icon:xu}],[e])},_u=()=>c.useMemo(()=>[{id:"grab",title:"Grab",icon:Su},{id:"translate",title:"Translate",icon:Cu},{id:"rotate",title:"Rotate",icon:Iu},{id:"scale",title:"Scale",icon:Eu}],[]),Du=()=>c.useMemo(()=>[{id:"global",title:"Global",icon:jr},{id:"selection",title:"Selection",icon:Au}],[]),Nu=()=>c.useMemo(()=>[{id:"active-selection",title:"Active Selection",icon:Ru},{id:"selection-center",title:"Selection Center",icon:Pu},{id:"selection-bottom",title:"Selection Bottom",icon:Mu}],[]);function Gn({label:e,selected:t,onSelect:n,menu:r,children:o}){return u(Vr,{align:"start",style:{padding:"var(--sp-xxs) 0"},content:$(H,{children:[u(ee,{style:{padding:"var(--sp-xxs) var(--sp-sm)"},children:e}),r.map(i=>{const s=u($i,{className:"gap-xs",variant:i.id===t?"primary":"surface",onSelect:()=>n(i.id),before:u(B,{color:i.id===t?"primary":"surface",src:i.icon}),disabled:i.disabled,children:i.title},i.id);return i.disabled&&i.disableReason?u(st,{side:"right",content:i.disableReason,children:s},i.id):s})]}),children:o})}function Lu(){const[e,t]=Le(Rn),n=ku(),r=n.find(o=>o.id===e);return u(H,{children:r&&u(Gn,{label:"Editor Mode",selected:e,onSelect:t,menu:n,children:u(xe,{before:u(B,{size:"sm",src:r.icon}),after:u(B,{size:"sm",src:ct}),outlined:!0,children:r.title})})})}function zu(){const[e,t]=c.useState("grab"),n=_u();return u(qo,{children:n.map((r,o)=>$("div",{className:"inline-flex",children:[o!==0&&u(Ko,{}),u(st,{side:"bottom",content:r.title,children:u(xe,{active:e===r.id,onClick:()=>t(r.id),children:u(B,{size:"sm",src:r.icon,color:e===r.id?"primary":"surface"})})})]},r.id))})}function Uu(){const[e,t]=c.useState("global"),n=Du(),r=n.find(o=>o.id===e);return u(H,{children:r&&u(Gn,{label:"Transform Orientation",selected:e,onSelect:t,menu:n,children:u(xe,{before:u(B,{size:"sm",src:r.icon}),after:u(B,{size:"sm",src:ct}),outlined:!0,children:r.title})})})}function Fu(){const[e,t]=c.useState("active-selection"),n=Nu(),r=n.find(o=>o.id===e);return u(H,{children:r&&u(Gn,{label:"Transform Pivot",selected:e,onSelect:t,menu:n,children:u(xe,{before:u(B,{size:"sm",src:r.icon}),after:u(B,{size:"sm",src:ct}),outlined:!0,children:r.title})})})}function Wu(){const[e,t]=c.useState(!1),[n,r]=c.useState(1),[o,i]=c.useState(1),[s,a]=c.useState(1);return $(qo,{children:[u(st,{side:"bottom",content:"Toggle Snapping",children:u(xe,{active:e,onClick:()=>t(!e),children:u(B,{size:"sm",src:$u,color:e?"primary":"surface"})})}),u(Ko,{}),u(Vr,{align:"start",style:{padding:"var(--sp-xxs) 0"},content:$("div",{className:"flex flex-column gap-sm",style:{padding:"var(--sp-xs) var(--sp-sm)",width:"200px"},children:[u(jt,{label:u(ee,{children:"Translate Snapping"}),children:u(Z,{type:"f32",inputSize:"sm",value:n,onChange:r,min:0,smStep:5,lgStep:25,after:u(U,{variant:"b3",color:"surface-low",children:"m"})})}),u(jt,{label:u(ee,{children:"Rotate Snapping"}),children:u(Z,{inputSize:"sm",value:o,onChange:i,min:0,max:360,smStep:5,lgStep:25,after:u(U,{variant:"b3",color:"surface-low",children:"deg"})})}),u(jt,{label:u(ee,{children:"Scale Snapping"}),children:u(Z,{type:"f32",inputSize:"sm",value:s,onChange:a,min:0,smStep:5,lgStep:25,after:u(U,{variant:"b3",color:"surface-low",children:"m"})})})]}),children:u(xe,{children:u(B,{size:"sm",src:ct})})})]})}function Bu(){const[e,t]=c.useState(!1);return u(st,{side:"bottom",content:"Toggle Grid",children:u(xe,{active:e,onClick:()=>t(!e),outlined:!0,children:u(B,{size:"sm",src:Ou,color:e?"primary":"surface"})})})}function ju(){const e=Ri.useKBar();return u(xe,{before:u(B,{size:"sm",color:"surface-low",src:Tu}),outlined:!0,onClick:()=>e.query.toggle(),children:u(U,{variant:"b3",weight:"semi-bold",color:"surface-low",children:"⌘ + K"})})}function Gu(){const e=nt(Rn);return u(wu,{left:$(H,{children:[u(yt,{children:u(Lu,{})}),e===ve.SceneEditor&&u(yt,{children:u(zu,{})}),e===ve.SceneEditor&&$(yt,{children:[u(Uu,{}),u(Fu,{}),u(Wu,{}),u(Bu,{})]})]}),right:u(yt,{children:u(ju,{})})})}function tt(e,t,n,r){const o=c.useCallback(t,r);c.useEffect(()=>(n==null||n.addEventListener(e,o),()=>{n==null||n.removeEventListener(e,o)}),[n,e,o])}function ld({room:e}){const t=c.useRef(null),{loading:n,scene:r,resources:o}=ha(t),i=nt(at).activeEntity,s=Me(),a=An(s,i),l=nt(Rn);return c.useEffect(()=>(document.exitPointerLock(),()=>{var d;(d=s.canvas)==null||d.requestPointerLock()}),[s]),tt("mousedown",d=>{var h;const p=d;p.button===2&&(p.preventDefault(),p.stopPropagation(),(h=s.canvas)==null||h.requestPointerLock())},s.canvas,[]),tt("mouseup",d=>{const p=d;p.button===2&&(p.preventDefault(),p.stopPropagation(),document.exitPointerLock())},s.canvas,[]),tt("contextmenu",d=>{d.preventDefault()},s.canvas,[]),u("div",{className:"EditorView flex flex-column gap-xs",children:!n&&r&&$(H,{children:[u("div",{className:"EditorView__toolbar shrink-0",children:u(Gu,{})}),$("div",{className:"grow flex gap-xs",children:[u("div",{className:"EditorView__centerPanel grow flex justify-center items-start",children:l===ve.ScriptEditor&&e&&u(yu,{room:e})}),$("div",{className:"EditorView__rightPanel grow flex flex-column gap-xs",children:[u(Qa,{scene:r,resources:o,treeViewRef:t}),(l===ve.SceneEditor||l===ve.SceneInspector)&&typeof a=="object"&&u(Tl,{resource:a})]})]})]})})}function ud({statsEnabled:e}){const t=Me(),[,n]=c.useState(0),r=c.useRef();return c.useEffect(()=>{let o;const i=()=>{const s=wi(t);r.current=s,s&&n(s.frame),o=window.setTimeout(i,100)};return e&&i(),()=>{clearTimeout(o)}},[t,e]),e?u("div",{className:"Stats",children:r.current&&Object.entries(r.current).map(([o,i])=>$(U,{variant:"b1",color:"world",children:[$("b",{children:[o,":"]})," "+i]},o))}):null}function dd({activeEntity:e,portalProcess:t}){return $("div",{className:"EntityTooltip",children:[e.interactableType===J.Player&&$(H,{children:[u(U,{weight:"bold",color:"world",children:e.name}),$("div",{className:"flex flex-column gap-xxs",children:[u(U,{variant:"b3",color:"world",children:e.peerId}),$(U,{variant:"b3",color:"world",children:[u("span",{className:"EntityTooltip__boxedKey",children:"E"}),u("span",{children:" More Info"})]})]})]}),e.interactableType===J.Interactable&&$(H,{children:[u(U,{weight:"bold",color:"world",children:e.name}),u("div",{className:"flex flex-column gap-xxs",children:$(U,{variant:"b3",color:"world",children:[u("span",{className:"EntityTooltip__boxedKey",children:"E"})," /",u(B,{src:Ke,size:"sm",className:"EntityTooltip__mouseIcon",color:"world"}),u("span",{children:" Interact"})]})})]}),e.interactableType===J.UI&&$(H,{children:[u(U,{weight:"bold",color:"world",children:e.name}),u("div",{className:"flex flex-column gap-xxs",children:$(U,{variant:"b3",color:"world",children:[u("span",{className:"EntityTooltip__boxedKey",children:"E"})," /",u(B,{src:Ke,size:"sm",className:"EntityTooltip__mouseIcon",color:"world"}),u("span",{children:" Interact"})]})})]}),e.interactableType===J.Grabbable&&$(H,{children:[u(U,{weight:"bold",color:"world",children:e.name}),$("div",{className:"flex flex-column gap-xxs",children:[u(U,{variant:"b3",color:"world",children:e.ownerId}),e.held?$(H,{children:[$(U,{variant:"b3",color:"world",children:[u("span",{className:"EntityTooltip__boxedKey",children:"E"}),u("span",{children:" Drop"})]}),$(U,{variant:"b3",color:"world",children:[u(B,{src:Ke,size:"sm",className:"EntityTooltip__mouseIcon",color:"world"}),u("span",{children:" Throw"})]})]}):$(U,{variant:"b3",color:"world",children:[u("span",{className:"EntityTooltip__boxedKey",children:"E"})," /",u(B,{src:Ke,size:"sm",className:"EntityTooltip__mouseIcon",color:"world"}),u("span",{children:" Grab"})]}),e.ownerId===e.peerId&&$(U,{variant:"b3",color:"world",children:[u("span",{className:"EntityTooltip__boxedKey",children:"X"}),u("span",{children:" Delete"})]})]})]}),e.interactableType===J.Portal&&$(H,{children:[t.joining&&u(Wr,{color:"world",size:"sm"}),u(U,{weight:"bold",color:"world",children:t.joining?"Joining portal":"Portal"}),$("div",{className:"flex flex-column gap-xxs",children:[u(U,{variant:"b3",color:"world",children:e.name}),t.error&&u(U,{variant:"b3",color:"world",children:t.error.message??"Unknown error joining portal."}),!t.joining&&$(U,{variant:"b3",color:"world",children:[u("span",{className:"EntityTooltip__boxedKey",children:"E"})," /",u(B,{src:Ke,size:"sm",className:"EntityTooltip__mouseIcon",color:"world"}),u("span",{children:" Enter World"})]})]})]})]})}const Hu="interaction";var Xo=(e=>(e.Focus="focus",e.Unfocus="unfocus",e.Interact="interact",e.Grab="grab",e.Release="release",e))(Xo||{});function Vu(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(let o=0;o<n.length;o++)if(!(n[o]in t))return!1;for(let o=0;o<n.length;o++)if(e[n[o]]!==t[n[o]])return!1;return!0}function qu(e){const[t,n]=c.useState(e),r=c.useCallback(o=>{n(i=>!o||!i?o:Vu(i,o)?i:o)},[n]);return[t,r]}function Ku(e){const[t,n]=c.useState(!1);return tt("mousedown",()=>{n(!0)},e,[]),tt("mouseup",()=>{n(!1)},e,[]),t}function Xu(e,t){c.useEffect(()=>{const n=async(i,s)=>{const{interactableType:a,action:l}=s;if(!a||l===Xo.Unfocus){t(void 0);return}if([J.Grabbable,J.Interactable,J.UI].includes(a)){t({interactableType:a,action:l,name:s.name||"Object",held:s.held||!1,ownerId:s.ownerId});return}if(a===J.Player){const{peerId:d}=s;t({interactableType:a,action:l,name:"Player",peerId:d,held:!1});return}if(a===J.Portal){t({interactableType:a,action:l,name:s.uri&&ri(oi(s.uri))||"Portal",held:!1,uri:s.uri});return}},r=(i,s)=>{t(void 0)};return Ti([Yn(e,Hu,n),Yn(e,xi.ExitedWorld,r)])},[e,t])}function fd(){const e=Me(),t=Ku(e.canvas),[n,r]=qu();return Xu(e,r),u("div",{className:te("Reticle",{"Reticle--focused":n,"Reticle--mousedown":t,Reticle__object:n&&(n.interactableType===J.Grabbable||n.interactableType===J.Interactable),Reticle__player:n&&n.interactableType===J.Player,Reticle__portal:n&&n.interactableType===J.Portal})})}export{ld as E,Xo as I,fd as R,ud as S,dd as a,qu as b,tt as c,Xu as u};
//# sourceMappingURL=Reticle-a481b0a6.js.map
