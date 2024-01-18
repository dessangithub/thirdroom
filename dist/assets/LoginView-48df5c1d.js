import{u as X,a as r,j as g,T as d,B as E,F as D,b as j,r as u,d as K,D as R,O as Y}from"./main.cc7980d7.js";import{I,D as J}from"./index.module-9a456540.js";import{L as B}from"./Label-b8166eab.js";import{S as x}from"./SettingTile-abd8ecde.js";import{S as Q,I as Z,D as ee,a as re,C as te}from"./DropdownMenu-c9ddf01c.js";import{P as ne}from"./planet-c905bcdd.js";import{M as oe,C as ie,F as se,u as ae}from"./Footer-aa726a7f.js";import"./modulepreload-polyfill-3cfb730f.js";var _=(e=>(e.SHARED_ARRAY_BUFFER="SHARED_ARRAY_BUFFER",e.MIN_FIREFOX_VERSION="MIN_FIREFOX_VERSION",e.WEB_GL2="WEB_GL2",e.WEB_GL_HARDWARE_ACC="WEB_GL_HARDWARE_ACC",e.WEB_RTC="WEB_RTC",e.INDEXED_DB="INDEXED_DB",e))(_||{});const H=104;function ce(){return typeof window.SharedArrayBuffer=="function"}function le(){return navigator.userAgent.toLowerCase().indexOf("firefox")>-1}function de(){const e=navigator.userAgent.toLocaleLowerCase().match(/firefox\/([0-9]+\.*[0-9]*)/);if(e){const t=parseInt(e[1]);if(typeof t=="number")return t}}function O(){const e=document.createElement("canvas");return e.width=1,e.height=1,e.style.position="fixed",e.style.opacity="0",e.style.visibility="hidden",e}function ue(){const e=O();document.body.append(e);const t=!!e.getContext("webgl2");return document.body.removeChild(e),t}function fe(){const e=O();document.body.append(e);const t=!!e.getContext("webgl2",{failIfMajorPerformanceCaveat:!0});return document.body.removeChild(e),t}function me(){return["RTCPeerConnection","webkitRTCPeerConnection","mozRTCPeerConnection","RTCIceGatherer"].some(e=>e in window)}async function he(){const e=`featureCheck-${Math.random()}`;return new Promise(t=>{let i;try{i=indexedDB.open(e)}catch{t(!1);return}i.onsuccess=()=>{t(!0),indexedDB.deleteDatabase(e)},i.onerror=()=>{t(!1),indexedDB.deleteDatabase(e)}})}async function pe(){const e=[];if(ce()===!1&&e.push("SHARED_ARRAY_BUFFER"),le()){const t=de();t&&t<H&&e.push("MIN_FIREFOX_VERSION")}return ue()===!1&&e.push("WEB_GL2"),fe()===!1&&e.push("WEB_GL_HARDWARE_ACC"),me()===!1&&e.push("WEB_RTC"),await he()===!1&&e.push("INDEXED_DB"),e}function ge(e){switch(e){case _.SHARED_ARRAY_BUFFER:return g(D,{children:["No"," ",r("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer",target:"_blank",children:"SharedArrayBuffer"})," ","found."]});case _.MIN_FIREFOX_VERSION:return`Firefox version ${H} or below is not supported. Please update your browser.`;case _.WEB_GL2:return"No webGL2 support found.";case _.WEB_GL_HARDWARE_ACC:return"WebGL2 Hardware acceleration is disabled.";case _.WEB_RTC:return"WebRTC is not supported.";case _.INDEXED_DB:return"Access to IndexedDB is disabled."}}function ve({missingFeatures:e}){const t=X();return r(oe,{className:"MissingFeature",overlayClassName:"MissingFeature__overlay",size:"sm",open:!0,children:r(ie,{children:r(Q,{children:g("div",{className:"MissingFeature__content",children:[r(d,{variant:"h2",weight:"semi-bold",children:"Incompatible Browser"}),r(d,{children:"This may be happening because of following reason(s):"}),r("ul",{children:e.map((i,m)=>r("li",{children:r(d,{variant:"b2",type:"span",children:ge(i)})},m))}),r(E,{size:"sm",fill:"outline",onClick:()=>t("/"),children:"Go Back"})]})}),bottom:r(se,{center:r(d,{type:"div",variant:"b2",children:r("a",{href:"https://matrix.to/#/#thirdroom-dev:matrix.org",target:"_blank",children:"Get help in our Matrix room."})})})})})}function _e(e,t){const i=u.useRef(),[m,o]=u.useState({homeserver:t,result:void 0,error:void 0,loading:!1}),f=u.useCallback(async s=>{o({homeserver:s,result:void 0,loading:!0,error:void 0});const n=e.queryLogin(s);i.current=n;try{const p=await n.result;o({homeserver:s,result:p,loading:!1,error:void 0})}catch(p){o({homeserver:s,result:void 0,loading:!1,error:p.name==="AbortError"?void 0:"Unable to find homeserver."})}i.current===n&&(i.current=void 0)},[e]),v=ae(f,{wait:400});return u.useEffect(()=>{var s;(s=i.current)==null||s.abort(),i.current=void 0,f(t)},[t,f]),{...m,queryHomeserver:s=>{var n;(n=i.current)==null||n.abort(),i.current=void 0,s!==""&&v(s)}}}async function be(e,t,i,m,o,f){var C;const{openUrl:v,settingsStorage:c}=e,s=o.generateDeviceScope(),n=o.generateParams({scope:`openid urn:matrix:org.matrix.msc2967.client:api:* ${s}`,redirectUri:t.createOIDCRedirectURL()}),p=await o.clientId();await Promise.all([c.setInt(`oidc_${n.state}_started_at`,Date.now()),n.nonce?c.setString(`oidc_${n.state}_nonce`,n.nonce):Promise.resolve(),n.codeVerifier?c.setString(`oidc_${n.state}_code_verifier`,n.codeVerifier):Promise.resolve(),c.setString(`oidc_${n.state}_redirect_uri`,n.redirectUri),c.setString(`oidc_${n.state}_homeserver`,i),c.setString(`oidc_${n.state}_issuer`,m.issuer),c.setString(`oidc_${n.state}_client_id`,p),c.setString(`oidc_${n.state}_account_management_url`,m.account)]);let y=await o.authorizationEndpoint(n);f&&(y+=`&kc_idp_hint=${((C=T(e,m.issuer))==null?void 0:C.guestKeycloakIdpHint)??"guest"}`),v(y)}function T(e,t){const i=`${t}${t.endsWith("/")?"":"/"}`;return e.config.staticOidcClients[i]}function Be(){var F;const{platform:e,urlRouter:t,login:i,client:m}=j(),[o,f]=u.useState(!1),[v,c]=u.useState(),s=u.useRef(null),[n,p]=u.useState(!1),y=K(),[C,M]=u.useState([]);u.useEffect(()=>{(async()=>{const h=await pe();y()&&M(h)})()},[y]);const{homeserver:W,loading:G,error:A,result:l,queryHomeserver:L}=_e(m,e.config.defaultHomeServer);u.useEffect(()=>{if(!s.current)return;const a=s.current.elements;a.homeserver.value=e.config.defaultHomeServer},[e]);const P=a=>{if(!s.current)return;const h=s.current.elements;h.homeserver.value=a,c(void 0),L(a)},k=a=>{a.key==="ArrowDown"&&(a.preventDefault(),p(!0))},V=a=>{const h=a.target.value.trim();c(void 0),L(h)},$=async a=>{var N;if(a.preventDefault(),!l)return;const h=a.currentTarget.elements;if(h.homeserver.value!==W)return;let S;f(!0),c(void 0);const q=((N=a.nativeEvent.submitter)==null?void 0:N.id)==="guest";if(l.oidc){const{issuer:b}=l.oidc,w=new Y({issuer:b,staticClients:e.config.staticOidcClients,request:e.request,encoding:e.encoding,crypto:e.crypto,urlCreator:t});try{await w.registration(),await w.metadata(),await be(e,t,l.homeserver,l.oidc,w,q)}catch(z){console.error(z),c("This client is not registered by the homeserver.")}f(!1);return}else if(l.password){const b=h.username.value.trim(),w=h.password.value;if(!b||!w||!l)return;S=l.password(b,w)}if(!S){f(!1);return}try{await i(S)}catch(b){console.error(b)}f(!1)},U=()=>g(D,{children:[r(d,{variant:"s1",weight:"bold",children:"Login"}),r(x,{label:r(B,{color:"surface-low",htmlFor:"username",children:"Username"}),children:r(I,{name:"username",disabled:o,required:!0})}),r(x,{label:r(B,{color:"surface-low",htmlFor:"password",children:"Password"}),children:r(I,{name:"password",type:"password",disabled:o,required:!0})}),r(E,{size:"lg",variant:"primary",type:"submit",disabled:o,children:o?r(R,{color:"on-primary"}):"Login"})]});return C.length>0?r(ve,{missingFeatures:C}):r("div",{className:"LoginView flex justify-center items-start",children:g("div",{className:"LoginView__card grow flex flex-column gap-xl",children:[g("div",{className:"flex items-center gap-sm",children:[r(Z,{src:ne,size:"lg"}),r(d,{variant:"h2",weight:"bold",children:"Third Room"})]}),g("form",{ref:s,className:"LoginView__form flex flex-column gap-md",onSubmit:$,children:[r(x,{label:r(B,{color:"surface-low",htmlFor:"homeserver",children:"Homeserver"}),children:r(I,{defaultValue:e.config.defaultHomeServer,name:"homeserver",disabled:o,onChange:V,required:!0,onKeyDown:k,after:e.config.homeserverList.length>0&&r(ee,{open:n,onOpenChange:p,content:e.config.homeserverList.map(a=>r(J,{onSelect:()=>P(a),children:a},a)),children:r(re,{iconSrc:te,label:"More Homeserver",tabIndex:-1})})})}),v&&r(d,{color:"danger",variant:"b2",children:v}),G&&g("div",{className:"flex items-center gap-sm",children:[r(R,{}),r(d,{children:"Looking for homeserver"})]}),l&&(l.oidc||l.password?r(D,{children:l.oidc&&!v?(F=T(e,l.oidc.issuer))!=null&&F.guestKeycloakIdpHint?g(D,{children:[r(E,{size:"lg",variant:"primary",type:"submit",disabled:o,children:o?r(R,{color:"on-primary"}):"Continue as User"}),r(d,{className:"LoginView__orDivider flex items-center gap-sm",variant:"b3",color:"surface-low",weight:"bold",children:"OR"}),r(E,{id:"guest",size:"lg",variant:"primary",fill:"outline",type:"submit",disabled:o,children:o?r(R,{color:"primary"}):"Continue as Guest"})]}):r(E,{size:"lg",variant:"primary",type:"submit",disabled:o,children:o?r(R,{color:"on-primary"}):"Continue"}):l.password&&U()}):r(d,{color:"danger",variant:"b2",children:"This client is not supported by the homeserver."})),A&&r(d,{color:"danger",variant:"b2",children:A})]})]})})}export{Be as default};
//# sourceMappingURL=LoginView-48df5c1d.js.map
