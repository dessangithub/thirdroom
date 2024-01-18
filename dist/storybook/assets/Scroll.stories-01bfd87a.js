import{j as o,a as e}from"./jsx-runtime-06a742f9.js";import{S as n}from"./Scroll-5a2f8583.js";import{T as t}from"./Text-9cbc10ca.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./index.module-b8f4923b.js";import"./index.module-00d29c03.js";import"./index.module-a2f32e93.js";import"./index.module-3f7deb99.js";import"./extends-98964cd2.js";import"./index-f9f0573c.js";const S={title:"Scroll",component:n};function i(){return o("div",{className:"flex",style:{border:"1px solid red"},children:[e("div",{style:{height:"300px",width:"300px",background:"white"},children:e(n,{type:"scroll",children:Object.keys([...Array(40)]).map((a,r)=>e(t,{variant:"h2",children:`Text ${r}`},r))})}),e("div",{style:{height:"300px",width:"300px",background:"white"},children:e(n,{type:"hover",orientation:"horizontal",children:e("div",{className:"flex",children:Object.keys([...Array(40)]).map((a,r)=>e(t,{variant:"h2",children:`Text ${r}`},r))})})}),e("div",{style:{height:"300px",width:"300px",background:"white"},children:o(n,{orientation:"both",children:[e("div",{className:"flex",children:Object.keys([...Array(40)]).map((a,r)=>e(t,{variant:"h2",children:`Text ${r}`},r))}),e("div",{children:Object.keys([...Array(40)]).map((a,r)=>e(t,{variant:"h2",children:`Text ${r}`},r))})]})})]})}var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`function ScrollStories() {
  return <div className="flex" style={{
    border: "1px solid red"
  }}>\r
      <div style={{
      height: "300px",
      width: "300px",
      background: "white"
    }}>\r
        <Scroll type="scroll">\r
          {Object.keys([...Array(40)]).map((item, key: number) => <Text variant="h2" key={key}>{\`Text \${key}\`}</Text>)}\r
        </Scroll>\r
      </div>\r
\r
      <div style={{
      height: "300px",
      width: "300px",
      background: "white"
    }}>\r
        <Scroll type="hover" orientation="horizontal">\r
          <div className="flex">\r
            {Object.keys([...Array(40)]).map((item, key: number) => <Text variant="h2" key={key}>{\`Text \${key}\`}</Text>)}\r
          </div>\r
        </Scroll>\r
      </div>\r
\r
      <div style={{
      height: "300px",
      width: "300px",
      background: "white"
    }}>\r
        <Scroll orientation="both">\r
          <div className="flex">\r
            {Object.keys([...Array(40)]).map((item, key: number) => <Text variant="h2" key={key}>{\`Text \${key}\`}</Text>)}\r
          </div>\r
          <div>\r
            {Object.keys([...Array(40)]).map((item, key: number) => <Text variant="h2" key={key}>{\`Text \${key}\`}</Text>)}\r
          </div>\r
        </Scroll>\r
      </div>\r
    </div>;
}`,...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const g=["ScrollStories"];export{i as ScrollStories,g as __namedExportsOrder,S as default};
//# sourceMappingURL=Scroll.stories-01bfd87a.js.map
