import{j as l,a as e}from"./jsx-runtime-06a742f9.js";import{I as a}from"./Icon-341303e8.js";import{c as d}from"./index-f9f0573c.js";import{r as N}from"./index-f2bd0723.js";import{T as g}from"./Text-9cbc10ca.js";import{E as n}from"./explore-09c5cef2.js";import{C as h}from"./chevron-bottom-5b966e07.js";import"./_commonjsHelpers-042e6b4d.js";const o=N.forwardRef(({className:r,active:t,outlined:m,before:i,after:f,children:p,..._},I)=>l("button",{className:d("ToolbarButton",{"ToolbarButton--ui-before":i,"ToolbarButton--ui-after":f,"ToolbarButton--outlined":m},r),type:"button","aria-pressed":t,..._,ref:I,children:[i,typeof p=="string"?e(g,{className:"truncate",variant:"b3",weight:"semi-bold",children:p}):p,f]}));function b({className:r,children:t}){return e("div",{className:d("ToolbarButtonGroup",r),children:t})}function v(){return e("div",{className:"ToolbarButtonDivider"})}try{b.displayName="ToolbarButtonGroup",b.__docgenInfo={description:"",displayName:"ToolbarButtonGroup",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{o.displayName="ToolbarButton",o.__docgenInfo={description:"",displayName:"ToolbarButton",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},outlined:{defaultValue:null,description:"",name:"outlined",required:!1,type:{name:"boolean"}},before:{defaultValue:null,description:"",name:"before",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"",name:"after",required:!1,type:{name:"ReactNode"}}}}}catch{}const G="/storybook/assets/menu-d941e4c3.svg";function c({className:r,center:t,left:m,right:i}){return l("div",{className:d("Toolbar",r),children:[e("div",{className:"grow basis-0 flex items-center",children:m}),e("div",{className:"shrink-0 basis-0 flex items-center justify-center",children:t}),e("div",{className:"grow basis-0 flex items-center justify-end",children:i})]})}function s({className:r,children:t}){return e("div",{className:d("ToolbarItemGroup",r),children:t})}try{c.displayName="Toolbar",c.__docgenInfo={description:"",displayName:"Toolbar",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"ReactNode"}},center:{defaultValue:null,description:"",name:"center",required:!1,type:{name:"ReactNode"}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"ReactNode"}}}}}catch{}try{s.displayName="ToolbarItemGroup",s.__docgenInfo={description:"",displayName:"ToolbarItemGroup",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const k={title:"Toolbar",component:c};function u(){return e("div",{style:{padding:"var(--sp-md)",backgroundColor:"var(--bg-surface)"},children:e(c,{left:l(s,{children:[e(o,{children:e(a,{size:"sm",src:G})}),e(o,{outlined:!0,children:"Toolbar Button"}),e(o,{before:e(a,{size:"sm",src:n}),outlined:!0,children:"Toolbar Button"})]}),center:l(s,{children:[e(o,{outlined:!0,children:e(a,{size:"sm",src:n})}),l(b,{children:[e(o,{active:!0,children:e(a,{color:"primary",size:"sm",src:n})}),e(v,{}),e(o,{children:e(a,{size:"sm",src:h})})]})]}),right:e(s,{children:e(o,{before:e(a,{size:"sm",src:n}),after:e(a,{size:"sm",src:n}),outlined:!0,children:"Toolbar Button"})})})})}var T,B,y;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`function ToolbarStories() {
  return <div style={{
    padding: "var(--sp-md)",
    backgroundColor: "var(--bg-surface)"
  }}>\r
      <Toolbar left={<ToolbarItemGroup>\r
            <ToolbarButton>\r
              <Icon size="sm" src={MenuIC} />\r
            </ToolbarButton>\r
\r
            <ToolbarButton outlined>Toolbar Button</ToolbarButton>\r
\r
            <ToolbarButton before={<Icon size="sm" src={ExploreIC} />} outlined>\r
              Toolbar Button\r
            </ToolbarButton>\r
          </ToolbarItemGroup>} center={<ToolbarItemGroup>\r
            <ToolbarButton outlined>\r
              <Icon size="sm" src={ExploreIC} />\r
            </ToolbarButton>\r
\r
            <ToolbarButtonGroup>\r
              <ToolbarButton active={true}>\r
                <Icon color="primary" size="sm" src={ExploreIC} />\r
              </ToolbarButton>\r
              <ToolbarButtonDivider />\r
              <ToolbarButton>\r
                <Icon size="sm" src={ChevronBottomIC} />\r
              </ToolbarButton>\r
            </ToolbarButtonGroup>\r
          </ToolbarItemGroup>} right={<ToolbarItemGroup>\r
            <ToolbarButton before={<Icon size="sm" src={ExploreIC} />} after={<Icon size="sm" src={ExploreIC} />} outlined>\r
              Toolbar Button\r
            </ToolbarButton>\r
          </ToolbarItemGroup>} />\r
    </div>;
}`,...(y=(B=u.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};const w=["ToolbarStories"];export{u as ToolbarStories,w as __namedExportsOrder,k as default};
//# sourceMappingURL=Toolbar.stories-cbaf08f7.js.map
