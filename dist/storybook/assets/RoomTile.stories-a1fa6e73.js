import{j as a,a as e,F as l}from"./jsx-runtime-06a742f9.js";import{c as C}from"./index-f9f0573c.js";import{T as h}from"./Text-9cbc10ca.js";import{A as i}from"./Avatar-fda7e3e3.js";import{A as x,a as u}from"./AvatarBadgeWrapper-b83650ab.js";import{A as N}from"./AvatarOutline-344d8344.js";import{S as v}from"./StatusBadge-b288c8f9.js";import{I as r}from"./IconButton-5b313af7.js";import{M as t}from"./more-horizontal-784170b4.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./Icon-341303e8.js";function n({avatar:o,content:c,options:f,isActive:k=!1,isFocused:z=!1,onClick:_}){const y=C("RoomTile",{"RoomTile--active":k},{"RoomTile--focused":z},"flex items-center");return a("div",{className:y,children:[a("button",{onClick:_,className:"grow flex items-center gap-sm",children:[e("div",{className:"RoomTile__avatar shrink-0 flex",children:o}),e("div",{className:"RoomTile__content grow",children:c})]}),f&&e("div",{className:"RoomTile__options shrink-0",children:f})]})}try{n.displayName="RoomTile",n.__docgenInfo={description:"",displayName:"RoomTile",props:{avatar:{defaultValue:null,description:"",name:"avatar",required:!0,type:{name:"ReactNode"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"ReactNode"}},isActive:{defaultValue:{value:"false"},description:"",name:"isActive",required:!1,type:{name:"boolean"}},isFocused:{defaultValue:{value:"false"},description:"",name:"isFocused",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"}}}}}catch{}function g({avatar:o,children:c}){return a("div",{className:"RoomTilePlaying flex items-center",children:[e("div",{className:"shrink-0",children:o}),e("div",{className:"grow",children:e(h,{className:"truncate",variant:"b3",children:c})})]})}try{g.displayName="RoomTilePlaying",g.__docgenInfo={description:"",displayName:"RoomTilePlaying",props:{avatar:{defaultValue:null,description:"",name:"avatar",required:!0,type:{name:"ReactNode"}}}}}catch{}function s({className:o,children:c}){return e(h,{className:C("truncate",o),weight:"medium",children:c})}try{s.displayName="RoomTileTitle",s.__docgenInfo={description:"",displayName:"RoomTileTitle",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}function p({children:o}){return e(h,{className:"truncate",color:"surface-low",variant:"b3",children:o})}try{p.displayName="RoomTileDesc",p.__docgenInfo={description:"",displayName:"RoomTileDesc",props:{}}}catch{}const m="/storybook/assets/notification-75b7b67d.svg",D={title:"RoomTile",component:n};function d(){return a("div",{style:{backgroundColor:"white",maxWidth:"380px"},children:[e(n,{onClick:()=>!1,avatar:e(N,{children:e(i,{size:"xl",shape:"circle",name:"Ram's House",bgColor:"gray"})}),content:a(l,{children:[e(s,{children:"Ram's House"}),a(x,{children:[e(i,{shape:"circle",size:"xxs",name:"Ram",bgColor:"#2a38e7"}),e(i,{shape:"circle",size:"xxs",name:"Sam",bgColor:"blue"}),e(i,{shape:"circle",size:"xxs",name:"Lucky",bgColor:"red"}),e(i,{shape:"circle",size:"xxs",name:"Man",bgColor:"green"})]})]}),options:a(l,{children:[e(r,{size:"sm",label:"Options",iconSrc:t,onClick:o=>console.log("clicked")}),e(r,{size:"sm",label:"Notifications",iconSrc:m,onClick:o=>console.log("clicked")})]})}),e(n,{onClick:()=>!1,avatar:e(u,{badge:e(i,{size:"xxs",name:"Sam",bgColor:"green"}),children:e(i,{size:"lg",name:"The Gaming Bunch",bgColor:"blue"})}),content:a(l,{children:[e(s,{children:"The Gaming Bunch"}),e(p,{children:"Here's a message with media."})]}),options:a(l,{children:[e(r,{size:"sm",label:"Options",iconSrc:t,onClick:o=>console.log("clicked")}),e(r,{size:"sm",label:"Notifications",iconSrc:m,onClick:o=>console.log("clicked")})]})}),e(n,{isActive:!0,onClick:()=>!1,avatar:e(u,{badge:e(v,{status:"online"}),children:e(i,{shape:"circle",size:"lg",name:"Ram",bgColor:"black"})}),content:a(l,{children:[e(s,{children:"Ram"}),e(p,{children:"Here's a message with media and few other items"})]}),options:a(l,{children:[e(r,{size:"sm",label:"Options",iconSrc:t,onClick:o=>console.log("clicked")}),e(r,{size:"sm",label:"Notifications",iconSrc:m,onClick:o=>console.log("clicked")})]})}),e(n,{onClick:()=>!1,avatar:e(u,{badge:e(v,{status:"online"}),children:e(i,{shape:"circle",size:"lg",name:"Sam",bgColor:"blue"})}),content:a(l,{children:[e(s,{children:"Sam"}),e(g,{avatar:e(i,{size:"xxs",shape:"circle",name:"Ram's House",bgColor:"gray"}),children:"In Ram's House"})]}),options:a(l,{children:[e(r,{size:"sm",label:"Options",iconSrc:t,onClick:o=>console.log("clicked")}),e(r,{size:"sm",label:"Notifications",iconSrc:m,onClick:o=>console.log("clicked")})]})})]})}var T,R,b;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`function RoomTileStories() {
  return <div style={{
    backgroundColor: "white",
    maxWidth: "380px"
  }}>\r
      <RoomTile onClick={() => false} avatar={<AvatarOutline>\r
            <Avatar size="xl" shape="circle" name="Ram's House" bgColor="gray" />\r
          </AvatarOutline>} content={<>\r
            <RoomTileTitle>Ram's House</RoomTileTitle>\r
            <AvatarPile>\r
              <Avatar shape="circle" size="xxs" name="Ram" bgColor="#2a38e7" />\r
              <Avatar shape="circle" size="xxs" name="Sam" bgColor="blue" />\r
              <Avatar shape="circle" size="xxs" name="Lucky" bgColor="red" />\r
              <Avatar shape="circle" size="xxs" name="Man" bgColor="green" />\r
            </AvatarPile>\r
          </>} options={<>\r
            <IconButton size="sm" label="Options" iconSrc={MoreHorizontalIC} onClick={a => console.log("clicked")} />\r
            <IconButton size="sm" label="Notifications" iconSrc={NotificationIC} onClick={a => console.log("clicked")} />\r
          </>} />\r
\r
      <RoomTile onClick={() => false} avatar={<AvatarBadgeWrapper badge={<Avatar size="xxs" name="Sam" bgColor="green" />}>\r
            <Avatar size="lg" name="The Gaming Bunch" bgColor="blue" />\r
          </AvatarBadgeWrapper>} content={<>\r
            <RoomTileTitle>The Gaming Bunch</RoomTileTitle>\r
            <RoomTileDesc>Here's a message with media.</RoomTileDesc>\r
          </>} options={<>\r
            <IconButton size="sm" label="Options" iconSrc={MoreHorizontalIC} onClick={a => console.log("clicked")} />\r
            <IconButton size="sm" label="Notifications" iconSrc={NotificationIC} onClick={a => console.log("clicked")} />\r
          </>} />\r
\r
      <RoomTile isActive onClick={() => false} avatar={<AvatarBadgeWrapper badge={<StatusBadge status="online" />}>\r
            <Avatar shape="circle" size="lg" name="Ram" bgColor="black" />\r
          </AvatarBadgeWrapper>} content={<>\r
            <RoomTileTitle>Ram</RoomTileTitle>\r
            <RoomTileDesc>Here's a message with media and few other items</RoomTileDesc>\r
          </>} options={<>\r
            <IconButton size="sm" label="Options" iconSrc={MoreHorizontalIC} onClick={a => console.log("clicked")} />\r
            <IconButton size="sm" label="Notifications" iconSrc={NotificationIC} onClick={a => console.log("clicked")} />\r
          </>} />\r
\r
      <RoomTile onClick={() => false} avatar={<AvatarBadgeWrapper badge={<StatusBadge status="online" />}>\r
            <Avatar shape="circle" size="lg" name="Sam" bgColor="blue" />\r
          </AvatarBadgeWrapper>} content={<>\r
            <RoomTileTitle>Sam</RoomTileTitle>\r
            <RoomTilePlaying avatar={<Avatar size="xxs" shape="circle" name="Ram's House" bgColor="gray" />}>\r
              In Ram's House\r
            </RoomTilePlaying>\r
          </>} options={<>\r
            <IconButton size="sm" label="Options" iconSrc={MoreHorizontalIC} onClick={a => console.log("clicked")} />\r
            <IconButton size="sm" label="Notifications" iconSrc={NotificationIC} onClick={a => console.log("clicked")} />\r
          </>} />\r
    </div>;
}`,...(b=(R=d.parameters)==null?void 0:R.docs)==null?void 0:b.source}}};const E=["RoomTileStories"];export{d as RoomTileStories,E as __namedExportsOrder,D as default};
//# sourceMappingURL=RoomTile.stories-a1fa6e73.js.map
