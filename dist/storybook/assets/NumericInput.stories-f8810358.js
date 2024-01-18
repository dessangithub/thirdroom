import{j as l,a as e}from"./jsx-runtime-06a742f9.js";import{r as n}from"./index-f2bd0723.js";import{N as r}from"./NumericInput-07715796.js";import{T as o}from"./Text-9cbc10ca.js";import"./_commonjsHelpers-042e6b4d.js";import"./Input-5f757d12.js";import"./index-f9f0573c.js";const v={title:"NumericInput",component:r};function t(){const[u,m]=n.useState(10.32),[p,c]=n.useState(10);return l("div",{className:"flex flex-column gap-xs",style:{backgroundColor:"white",padding:"8px",maxWidth:"380px"},children:[e(r,{before:e(o,{variant:"b3",color:"surface-low",children:"f32"}),inputSize:"sm",type:"f32",floatPrecision:2,smStep:.5,mdStep:1,lgStep:2.5,max:20,min:0,outlined:!0,value:u,onChange:m}),e(r,{before:e(o,{variant:"b3",color:"surface-low",children:"u32"}),inputSize:"sm",type:"u32",floatPrecision:2,smStep:.5,mdStep:1,lgStep:2.5,max:20,min:0,outlined:!0,value:p,onChange:c})]})}var s,i,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`function NumericInputStories() {
  const [f32, setF32] = useState<number>(10.32);
  const [u32, setU32] = useState<number>(10);
  return <div className="flex flex-column gap-xs" style={{
    backgroundColor: "white",
    padding: "8px",
    maxWidth: "380px"
  }}>\r
      <NumericInput before={<Text variant="b3" color="surface-low">\r
            f32\r
          </Text>} inputSize="sm" type="f32" floatPrecision={2} smStep={0.5} mdStep={1} lgStep={2.5} max={20} min={0} outlined value={f32} onChange={setF32} />\r
      <NumericInput before={<Text variant="b3" color="surface-low">\r
            u32\r
          </Text>} inputSize="sm" type="u32" floatPrecision={2} smStep={0.5} mdStep={1} lgStep={2.5} max={20} min={0} outlined value={u32} onChange={setU32} />\r
    </div>;
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const N=["NumericInputStories"];export{t as NumericInputStories,N as __namedExportsOrder,v as default};
//# sourceMappingURL=NumericInput.stories-f8810358.js.map
