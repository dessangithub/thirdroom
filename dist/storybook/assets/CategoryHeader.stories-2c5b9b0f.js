import{j as n,a as e,F as s}from"./jsx-runtime-06a742f9.js";import{T as h}from"./Text-9cbc10ca.js";import{I as i}from"./IconButton-5b313af7.js";import{I as p}from"./Icon-341303e8.js";import{A as u}from"./add-2f33ab96.js";import{M as g}from"./more-horizontal-784170b4.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f9f0573c.js";function o({before:r,title:c,after:t,options:l,onClick:d}){const m=n(s,{children:[r,e(h,{className:"truncate",variant:"b3",weight:"bold",children:c}),t]});return n("div",{className:"CategoryHeader flex items-center",children:[typeof d=="function"?e("button",{className:"CategoryHeader__content grow flex items-center gap-xxs",onClick:d,children:m}):e("div",{className:"CategoryHeader__content grow flex items-center gap-xxs",children:m}),l&&e("div",{className:"CategoryHeader__options shrink-0",children:l})]})}try{o.displayName="CategoryHeader",o.__docgenInfo={description:"",displayName:"CategoryHeader",props:{before:{defaultValue:null,description:"",name:"before",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},after:{defaultValue:null,description:"",name:"after",required:!1,type:{name:"ReactNode"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}}}catch{}const k="/storybook/assets/star-ea55da56.svg",b="/storybook/assets/chevron-right-763e5b35.svg",R={title:"CategoryHeader",component:o};function a(){const r=e(p,{src:k,size:"sm",color:"surface"});return n("div",{style:{backgroundColor:"white",maxWidth:"380px"},children:[e(o,{before:r,title:"Favorite Worlds"}),e(o,{title:"All Messages",options:n(s,{children:[e(i,{size:"sm",label:"Options",iconSrc:g,onClick:t=>console.log("clicked")}),e(i,{size:"sm",label:"Notifications",iconSrc:u,onClick:t=>console.log("clicked")})]})}),e(o,{before:r,title:"Favorite Rooms",after:e(p,{src:b,size:"sm",color:"surface"}),onClick:()=>console.log("hello"),options:n(s,{children:[e(i,{size:"sm",label:"Options",iconSrc:g,onClick:t=>console.log("clicked")}),e(i,{size:"sm",label:"Notifications",iconSrc:u,onClick:t=>console.log("clicked")})]})})]})}var f,C,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`function CategoryHeaderStories() {
  const icon = <Icon src={StarIC} size="sm" color="surface" />;
  const icon1 = <Icon src={ChevronRightIC} size="sm" color="surface" />;
  return <div style={{
    backgroundColor: "white",
    maxWidth: "380px"
  }}>\r
      <CategoryHeader before={icon} title="Favorite Worlds" />\r
\r
      <CategoryHeader title="All Messages" options={<>\r
            <IconButton size="sm" label="Options" iconSrc={MoreHorizontalIC} onClick={a => console.log("clicked")} />\r
            <IconButton size="sm" label="Notifications" iconSrc={AddIC} onClick={a => console.log("clicked")} />\r
          </>} />\r
\r
      <CategoryHeader before={icon} title="Favorite Rooms" after={icon1} onClick={() => console.log("hello")} options={<>\r
            <IconButton size="sm" label="Options" iconSrc={MoreHorizontalIC} onClick={a => console.log("clicked")} />\r
            <IconButton size="sm" label="Notifications" iconSrc={AddIC} onClick={a => console.log("clicked")} />\r
          </>} />\r
    </div>;
}`,...(y=(C=a.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};const A=["CategoryHeaderStories"];export{a as CategoryHeaderStories,A as __namedExportsOrder,R as default};
//# sourceMappingURL=CategoryHeader.stories-2c5b9b0f.js.map
