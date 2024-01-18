import{j as t,a as e}from"./jsx-runtime-06a742f9.js";import{c as g}from"./index-f9f0573c.js";import{L as n}from"./Label-74323ee1.js";import{I as o}from"./IconButton-5b313af7.js";import{I as r}from"./Input-5f757d12.js";import{I as s}from"./info-0821f2a7.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./Text-9cbc10ca.js";import"./Icon-341303e8.js";function l({className:a,label:m,options:p,children:f}){return t("div",{className:g("SettingTile",a),children:[t("div",{className:"SettingTile__header flex items-center",children:[m,p]}),e("div",{className:"SettingTile__content",children:f})]})}try{l.displayName="SettingTile",l.__docgenInfo={description:"",displayName:"SettingTile",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"ReactNode"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"ReactNode"}}}}}catch{}const k={title:"SettingTile",component:l};function i(){return t("div",{style:{backgroundColor:"white",width:"380px",padding:"8px"},children:[e(l,{label:e(n,{htmlFor:"defaultDisplayName",children:"Default Display Name"}),options:e(o,{variant:"surface-low",size:"sm",label:"Info",iconSrc:s,onClick:a=>console.log("clicked")}),children:e(r,{id:"defaultDisplayName",defaultValue:"Kalu"})}),t("div",{className:"flex gap-lg",children:[e(l,{label:e(n,{htmlFor:"defaultDisplayName",children:"Default Display Name"}),options:e(o,{variant:"surface-low",size:"sm",label:"Info",iconSrc:s,onClick:a=>console.log("clicked")}),children:e(r,{id:"defaultDisplayName",defaultValue:"Kalu"})}),e(l,{label:e(n,{htmlFor:"defaultDisplayName",children:"Default Display Name"}),options:e(o,{variant:"surface-low",size:"sm",label:"Info",iconSrc:s,onClick:a=>console.log("clicked")}),children:e(r,{id:"defaultDisplayName",defaultValue:"Kalu"})})]})]})}var c,d,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`function SettingTileStories() {
  return <div style={{
    backgroundColor: "white",
    width: "380px",
    padding: "8px"
  }}>\r
      <SettingTile label={<Label htmlFor="defaultDisplayName">Default Display Name</Label>} options={<IconButton variant="surface-low" size="sm" label="Info" iconSrc={InfoIC} onClick={a => console.log("clicked")} />}>\r
        <Input id="defaultDisplayName" defaultValue="Kalu" />\r
      </SettingTile>\r
      <div className="flex gap-lg">\r
        <SettingTile label={<Label htmlFor="defaultDisplayName">Default Display Name</Label>} options={<IconButton variant="surface-low" size="sm" label="Info" iconSrc={InfoIC} onClick={a => console.log("clicked")} />}>\r
          <Input id="defaultDisplayName" defaultValue="Kalu" />\r
        </SettingTile>\r
        <SettingTile label={<Label htmlFor="defaultDisplayName">Default Display Name</Label>} options={<IconButton variant="surface-low" size="sm" label="Info" iconSrc={InfoIC} onClick={a => console.log("clicked")} />}>\r
          <Input id="defaultDisplayName" defaultValue="Kalu" />\r
        </SettingTile>\r
      </div>\r
    </div>;
}`,...(u=(d=i.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const C=["SettingTileStories"];export{i as SettingTileStories,C as __namedExportsOrder,k as default};
//# sourceMappingURL=SettingTile.stories-e5e61735.js.map
