import{_ as e,o as t,c as o,O as n}from"./chunks/framework.c0965656.js";const m=JSON.parse('{"title":"MOZ_hubs_components","description":"","frontmatter":{},"headers":[],"relativePath":"gltf/MOZ_hubs_components/README.md","filePath":"gltf/MOZ_hubs_components/README.md"}'),s={name:"gltf/MOZ_hubs_components/README.md"},r=n('<h1 id="moz-hubs-components" tabindex="-1">MOZ_hubs_components <a class="header-anchor" href="#moz-hubs-components" aria-label="Permalink to &quot;MOZ_hubs_components&quot;">​</a></h1><p>This extension is maintained by the Mozilla Hubs team, but is currently undocumented.</p><p>Assets using the MOZ_hubs_components extension can be exported from:</p><ul><li><a href="https://hubs.mozilla.com/spoke" target="_blank" rel="noreferrer">Mozilla Spoke</a></li><li><a href="https://github.com/MozillaReality/hubs-blender-exporter" target="_blank" rel="noreferrer">hubs-blender-exporter</a></li></ul><p>Third Room currently has partial support for MOZ_hubs_components including the following components:</p><ul><li>spawn-point</li><li>waypoint</li><li>trimesh</li><li>nav-mesh</li><li>scene-preview-camera</li></ul><p>Due to the way certain assets are referenced in MOZ_hubs_components, we can&#39;t support the full MOZ_hubs_components API. Unlike Matrix, Hubs&#39; servers do not serve assets with proper CORS headers that allow for using assets across different domains. The extension is also very large and undocumented making it hard for us to implement everything. However, we do want to add support for more of the components in the future.</p><p>If you&#39;d like to get an idea of what other components exist you can read through the component definitions in the hubs-blender-exporter source code <a href="https://github.com/MozillaReality/hubs-blender-exporter/tree/master/addons/io_hubs_addon/components/definitions" target="_blank" rel="noreferrer">here</a>.</p>',8),a=[r];function i(l,h,p,c,u,_){return t(),o("div",null,a)}const b=e(s,[["render",i]]);export{m as __pageData,b as default};
