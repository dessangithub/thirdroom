import{a as e,j as p}from"./jsx-runtime-06a742f9.js";import{c}from"./index-f9f0573c.js";import{T as S}from"./Text-9cbc10ca.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";function r({className:t,children:l}){return e("div",{className:c("SegmentControl",t),children:l})}try{r.displayName="SegmentControl",r.__docgenInfo={description:"",displayName:"SegmentControl",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}function o({className:t,value:l,isSelected:a=!1,onSelect:d,children:u}){return e("button",{className:c("SegmentControlItem",{"SegmentControlItem--selected":a},t),onClick:()=>d(l),children:e(S,{variant:"b2",color:a?"primary":"surface",weight:a?"bold":"medium",children:u})})}try{o.displayName="SegmentControlItem",o.__docgenInfo={description:"",displayName:"SegmentControlItem",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"T"}},isSelected:{defaultValue:{value:"false"},description:"",name:"isSelected",required:!1,type:{name:"boolean"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(value: T) => void"}}}}}catch{}const y={title:"SegmentControl",component:r};function n(){return e("div",{children:p(r,{children:[e(o,{value:"Overview",isSelected:!0,onSelect:()=>!1,children:"Overview"}),e(o,{value:"Inventory",onSelect:()=>!1,children:"Inventory"})]})})}var s,m,i;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`function SegmentControlStories() {
  return <div>\r
      <SegmentControl>\r
        <SegmentControlItem value="Overview" isSelected={true} onSelect={() => false}>\r
          Overview\r
        </SegmentControlItem>\r
        <SegmentControlItem value="Inventory" onSelect={() => false}>\r
          Inventory\r
        </SegmentControlItem>\r
      </SegmentControl>\r
    </div>;
}`,...(i=(m=n.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const I=["SegmentControlStories"];export{n as SegmentControlStories,I as __namedExportsOrder,y as default};
//# sourceMappingURL=SegmentControl.stories-fbe10e4f.js.map
