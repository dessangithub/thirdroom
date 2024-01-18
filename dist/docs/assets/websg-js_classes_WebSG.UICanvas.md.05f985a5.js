import{_ as e,o as t,c as a,O as r}from"./chunks/framework.c0965656.js";const f=JSON.parse('{"title":"Class: UICanvas","description":"","frontmatter":{},"headers":[],"relativePath":"websg-js/classes/WebSG.UICanvas.md","filePath":"websg-js/classes/WebSG.UICanvas.md"}'),s={name:"websg-js/classes/WebSG.UICanvas.md"},o=r('<h1 id="class-uicanvas" tabindex="-1">Class: UICanvas <a class="header-anchor" href="#class-uicanvas" aria-label="Permalink to &quot;Class: UICanvas&quot;">​</a></h1><p><a href="./../modules/WebSG.html">WebSG</a>.UICanvas</p><p>A UICanvas is used to render UI elements to a flat plane in the world.</p><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h3><ul><li><a href="./WebSG.UICanvas.html#constructor">constructor</a></li></ul><h3 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h3><ul><li><a href="./WebSG.UICanvas.html#size">size</a></li></ul><h3 id="accessors" tabindex="-1">Accessors <a class="header-anchor" href="#accessors" aria-label="Permalink to &quot;Accessors&quot;">​</a></h3><ul><li><a href="./WebSG.UICanvas.html#height">height</a></li><li><a href="./WebSG.UICanvas.html#root">root</a></li><li><a href="./WebSG.UICanvas.html#width">width</a></li></ul><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h3><ul><li><a href="./WebSG.UICanvas.html#redraw">redraw</a></li></ul><h2 id="constructors-1" tabindex="-1">Constructors <a class="header-anchor" href="#constructors-1" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor&quot;">​</a></h3><p>• <strong>new UICanvas</strong>()</p><h2 id="properties-1" tabindex="-1">Properties <a class="header-anchor" href="#properties-1" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="size" tabindex="-1">size <a class="header-anchor" href="#size" aria-label="Permalink to &quot;size&quot;">​</a></h3><p>• <code>Readonly</code> <strong>size</strong>: <a href="./WebSG.Vector2.html"><code>Vector2</code></a></p><p>Gets the canvas size as a Vector2 in meters.</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L1259" target="_blank" rel="noreferrer">websg.d.ts:1259</a></p><h2 id="accessors-1" tabindex="-1">Accessors <a class="header-anchor" href="#accessors-1" aria-label="Permalink to &quot;Accessors&quot;">​</a></h2><h3 id="height" tabindex="-1">height <a class="header-anchor" href="#height" aria-label="Permalink to &quot;height&quot;">​</a></h3><p>• <code>get</code> <strong>height</strong>(): <code>number</code></p><p>Gets the canvas height in pixels.</p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>number</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L1242" target="_blank" rel="noreferrer">websg.d.ts:1242</a></p><p>• <code>set</code> <strong>height</strong>(<code>value</code>): <code>void</code></p><p>Sets the canvas height in pixels.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">The canvas height in pixels.</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L1248" target="_blank" rel="noreferrer">websg.d.ts:1248</a></p><hr><h3 id="root" tabindex="-1">root <a class="header-anchor" href="#root" aria-label="Permalink to &quot;root&quot;">​</a></h3><p>• <code>get</code> <strong>root</strong>(): <code>undefined</code> | <a href="./WebSG.UIElement.html"><code>UIElement</code></a></p><p>Gets the root UIElement of the canvas.</p><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>undefined</code> | <a href="./WebSG.UIElement.html"><code>UIElement</code></a></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L1220" target="_blank" rel="noreferrer">websg.d.ts:1220</a></p><p>• <code>set</code> <strong>root</strong>(<code>element</code>): <code>void</code></p><p>Sets the root UIElement of the canvas.</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>element</code></td><td style="text-align:left;"><code>undefined</code> | <a href="./WebSG.UIElement.html"><code>UIElement</code></a></td><td style="text-align:left;">The root UIElement of the canvas.</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L1226" target="_blank" rel="noreferrer">websg.d.ts:1226</a></p><hr><h3 id="width" tabindex="-1">width <a class="header-anchor" href="#width" aria-label="Permalink to &quot;width&quot;">​</a></h3><p>• <code>get</code> <strong>width</strong>(): <code>number</code></p><p>Gets the canvas width in pixels.</p><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>number</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L1231" target="_blank" rel="noreferrer">websg.d.ts:1231</a></p><p>• <code>set</code> <strong>width</strong>(<code>value</code>): <code>void</code></p><p>Sets the canvas width in pixels.</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">The canvas width in pixels.</td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L1237" target="_blank" rel="noreferrer">websg.d.ts:1237</a></p><h2 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="redraw" tabindex="-1">redraw <a class="header-anchor" href="#redraw" aria-label="Permalink to &quot;redraw&quot;">​</a></h3><p>▸ <strong>redraw</strong>(): <code>undefined</code></p><p>Redraws the canvas. This should be called any time the UI elements are changed.</p><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>undefined</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L1254" target="_blank" rel="noreferrer">websg.d.ts:1254</a></p>',77),n=[o];function d(i,h,l,c,b,u){return t(),a("div",null,n)}const g=e(s,[["render",d]]);export{f as __pageData,g as default};
