import{a as e,j as u}from"./jsx-runtime-06a742f9.js";import{c as b}from"./index-f9f0573c.js";import{A as _}from"./Avatar-fda7e3e3.js";import{I as y}from"./IconButton-5b313af7.js";import{T as v}from"./Text-9cbc10ca.js";import{L as i}from"./logo-aa2c0ae4.js";import{A as N}from"./add-2f33ab96.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./Icon-341303e8.js";function n({className:a,bgColor:r,size:t="md",outlined:g,wide:T,children:f}){const d={};return r&&(d.backgroundColor=r),e("div",{className:b("Thumbnail",`Thumbnail--${t}`,{"Thumbnail--outlined":g},{"Thumbnail--wide":T},a),style:d,children:f})}try{n.displayName="Thumbnail",n.__docgenInfo={description:"",displayName:"Thumbnail",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},outlined:{defaultValue:null,description:"",name:"outlined",required:!1,type:{name:"boolean"}},wide:{defaultValue:null,description:"",name:"wide",required:!1,type:{name:"boolean"}}}}}catch{}function s({className:a,content:r,children:t}){return u("div",{className:b("ThumbnailHover",a),children:[t,r&&e("div",{className:"ThumbnailHover__content",children:r})]})}try{s.displayName="ThumbnailHover",s.__docgenInfo={description:"",displayName:"ThumbnailHover",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"ReactNode"}}}}}catch{}function l({src:a,alt:r}){return e("img",{className:"ThumbnailImg",draggable:"false",src:a,alt:r})}try{l.displayName="ThumbnailImg",l.__docgenInfo={description:"",displayName:"ThumbnailImg",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}}}}}catch{}function o({badge:a,children:r}){return u("div",{className:"ThumbnailBadgeWrapper",children:[r,a&&e("div",{className:"ThumbnailBadgeWrapper__item",children:a})]})}try{o.displayName="ThumbnailBadgeWrapper",o.__docgenInfo={description:"",displayName:"ThumbnailBadgeWrapper",props:{badge:{defaultValue:null,description:"",name:"badge",required:!1,type:{name:"ReactNode"}}}}}catch{}const W={title:"Thumbnail",component:n};function m(){return u("div",{className:"flex items-start",children:[e(n,{children:e(l,{src:i,alt:"My thumbnail"})}),e(n,{size:"sm",children:e(l,{src:i,alt:"My thumbnail"})}),e(n,{size:"sm",children:e(y,{size:"xl",iconSrc:N,label:"Add"})}),e(s,{content:e(v,{className:"uppercase",color:"world",weight:"bold",children:"Upload"}),children:e(n,{size:"sm",children:e(l,{src:i,alt:"My thumbnail"})})}),e(o,{badge:e(_,{size:"xs",imageSrc:i,name:"ThirdRoom",bgColor:"red"}),children:e(n,{size:"sm",children:e(l,{src:i,alt:"My thumbnail"})})})]})}var c,p,h;m.parameters={...m.parameters,docs:{...(c=m.parameters)==null?void 0:c.docs,source:{originalSource:`function ThumbnailStories() {
  return <div className="flex items-start">\r
      <Thumbnail>\r
        <ThumbnailImg src={LogoSvg} alt="My thumbnail" />\r
      </Thumbnail>\r
      <Thumbnail size="sm">\r
        <ThumbnailImg src={LogoSvg} alt="My thumbnail" />\r
      </Thumbnail>\r
      <Thumbnail size="sm">\r
        <IconButton size="xl" iconSrc={AddIC} label="Add" />\r
      </Thumbnail>\r
      <ThumbnailHover content={<Text className="uppercase" color="world" weight="bold">\r
            Upload\r
          </Text>}>\r
        <Thumbnail size="sm">\r
          <ThumbnailImg src={LogoSvg} alt="My thumbnail" />\r
        </Thumbnail>\r
      </ThumbnailHover>\r
      <ThumbnailBadgeWrapper badge={<Avatar size="xs" imageSrc={LogoSvg} name="ThirdRoom" bgColor="red" />}>\r
        <Thumbnail size="sm">\r
          <ThumbnailImg src={LogoSvg} alt="My thumbnail" />\r
        </Thumbnail>\r
      </ThumbnailBadgeWrapper>\r
    </div>;
}`,...(h=(p=m.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const w=["ThumbnailStories"];export{m as ThumbnailStories,w as __namedExportsOrder,W as default};
//# sourceMappingURL=Thumbnail.stories-4713adcb.js.map
