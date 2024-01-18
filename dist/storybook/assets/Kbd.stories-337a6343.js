import{a as e,j as c}from"./jsx-runtime-06a742f9.js";import{c as m}from"./index-f9f0573c.js";import{T as p}from"./Text-9cbc10ca.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";function r({variant:a="surface",size:d="md",children:n}){let i="b1";return d==="sm"&&(i="b2"),d==="xs"&&(i="b3"),e("kbd",{className:m("Kbd",`Kbd--${a} Kbd--${d}`),children:typeof n=="string"?e(p,{weight:"medium",variant:i,color:a,type:"span",children:n}):n})}try{r.displayName="Kbd",r.__docgenInfo={description:"",displayName:"Kbd",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"surface"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"surface"'},{value:'"world"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}}}catch{}const v={title:"Kbd",component:r};function s(){return c("div",{className:"flex items-center gap-md",children:[e(r,{size:"xs",children:"S"}),e(r,{size:"xs",children:"Shift + S"}),e(r,{size:"sm",children:"Q"}),e(r,{size:"sm",children:"CMD + Q"}),e(r,{children:"M"}),e(r,{children:"Fn + M"}),e(r,{size:"lg",children:"H"}),e(r,{size:"lg",children:"Space + H"}),e("span",{style:{padding:"8px",backgroundColor:"gray"},children:e(r,{variant:"world",children:"Shift + 1"})})]})}var t,l,o;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`function KbdStories() {
  return <div className="flex items-center gap-md">\r
      <Kbd size="xs">S</Kbd>\r
      <Kbd size="xs">Shift + S</Kbd>\r
      <Kbd size="sm">Q</Kbd>\r
      <Kbd size="sm">CMD + Q</Kbd>\r
      <Kbd>M</Kbd>\r
      <Kbd>Fn + M</Kbd>\r
      <Kbd size="lg">H</Kbd>\r
      <Kbd size="lg">Space + H</Kbd>\r
      <span style={{
      padding: "8px",
      backgroundColor: "gray"
    }}>\r
        <Kbd variant="world">Shift + 1</Kbd>\r
      </span>\r
    </div>;
}`,...(o=(l=s.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const h=["KbdStories"];export{s as KbdStories,h as __namedExportsOrder,v as default};
//# sourceMappingURL=Kbd.stories-337a6343.js.map
