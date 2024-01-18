import{_ as e,o as t,c as a,O as r}from"./chunks/framework.c0965656.js";const u=JSON.parse('{"title":"Class: Node","description":"","frontmatter":{},"headers":[],"relativePath":"websg-js/classes/WebSG.Node.md","filePath":"websg-js/classes/WebSG.Node.md"}'),o={name:"websg-js/classes/WebSG.Node.md"},d=r('<h1 id="class-node" tabindex="-1">Class: Node <a class="header-anchor" href="#class-node" aria-label="Permalink to &quot;Class: Node&quot;">​</a></h1><p><a href="./../modules/WebSG.html">WebSG</a>.Node</p><p>Class representing a node in a scene graph.</p><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h3><ul><li><a href="./WebSG.Node.html#constructor">constructor</a></li></ul><h3 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h3><ul><li><a href="./WebSG.Node.html#matrix">matrix</a></li><li><a href="./WebSG.Node.html#rotation">rotation</a></li><li><a href="./WebSG.Node.html#scale">scale</a></li><li><a href="./WebSG.Node.html#translation">translation</a></li><li><a href="./WebSG.Node.html#worldmatrix">worldMatrix</a></li></ul><h3 id="accessors" tabindex="-1">Accessors <a class="header-anchor" href="#accessors" aria-label="Permalink to &quot;Accessors&quot;">​</a></h3><ul><li><a href="./WebSG.Node.html#collider">collider</a></li><li><a href="./WebSG.Node.html#interactable">interactable</a></li><li><a href="./WebSG.Node.html#isstatic">isStatic</a></li><li><a href="./WebSG.Node.html#light">light</a></li><li><a href="./WebSG.Node.html#mesh">mesh</a></li><li><a href="./WebSG.Node.html#parent">parent</a></li><li><a href="./WebSG.Node.html#physicsbody">physicsBody</a></li><li><a href="./WebSG.Node.html#uicanvas">uiCanvas</a></li><li><a href="./WebSG.Node.html#visible">visible</a></li></ul><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h3><ul><li><a href="./WebSG.Node.html#addchild">addChild</a></li><li><a href="./WebSG.Node.html#addcomponent">addComponent</a></li><li><a href="./WebSG.Node.html#addinteractable">addInteractable</a></li><li><a href="./WebSG.Node.html#addphysicsbody">addPhysicsBody</a></li><li><a href="./WebSG.Node.html#children">children</a></li><li><a href="./WebSG.Node.html#getchild">getChild</a></li><li><a href="./WebSG.Node.html#getcomponent">getComponent</a></li><li><a href="./WebSG.Node.html#hascomponent">hasComponent</a></li><li><a href="./WebSG.Node.html#removechild">removeChild</a></li><li><a href="./WebSG.Node.html#removecomponent">removeComponent</a></li><li><a href="./WebSG.Node.html#removeinteractable">removeInteractable</a></li><li><a href="./WebSG.Node.html#removephysicsbody">removePhysicsBody</a></li><li><a href="./WebSG.Node.html#startorbit">startOrbit</a></li></ul><h2 id="constructors-1" tabindex="-1">Constructors <a class="header-anchor" href="#constructors-1" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor&quot;">​</a></h3><p>• <strong>new Node</strong>()</p><h2 id="properties-1" tabindex="-1">Properties <a class="header-anchor" href="#properties-1" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="matrix" tabindex="-1">matrix <a class="header-anchor" href="#matrix" aria-label="Permalink to &quot;matrix&quot;">​</a></h3><p>• <code>Readonly</code> <strong>matrix</strong>: <a href="./WebSG.Matrix4.html"><code>Matrix4</code></a></p><p>The node&#39;s local transformation matrix as a Matrix4.</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L711" target="_blank" rel="noreferrer">websg.d.ts:711</a></p><hr><h3 id="rotation" tabindex="-1">rotation <a class="header-anchor" href="#rotation" aria-label="Permalink to &quot;rotation&quot;">​</a></h3><p>• <code>Readonly</code> <strong>rotation</strong>: <a href="./WebSG.Quaternion.html"><code>Quaternion</code></a></p><p>The node&#39;s rotation as a Quaternion.</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L701" target="_blank" rel="noreferrer">websg.d.ts:701</a></p><hr><h3 id="scale" tabindex="-1">scale <a class="header-anchor" href="#scale" aria-label="Permalink to &quot;scale&quot;">​</a></h3><p>• <code>Readonly</code> <strong>scale</strong>: <a href="./WebSG.Vector3.html"><code>Vector3</code></a></p><p>The node&#39;s scale as a Vector3.</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L706" target="_blank" rel="noreferrer">websg.d.ts:706</a></p><hr><h3 id="translation" tabindex="-1">translation <a class="header-anchor" href="#translation" aria-label="Permalink to &quot;translation&quot;">​</a></h3><p>• <code>Readonly</code> <strong>translation</strong>: <a href="./WebSG.Vector3.html"><code>Vector3</code></a></p><p>The node&#39;s translation as a Vector3.</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L696" target="_blank" rel="noreferrer">websg.d.ts:696</a></p><hr><h3 id="worldmatrix" tabindex="-1">worldMatrix <a class="header-anchor" href="#worldmatrix" aria-label="Permalink to &quot;worldMatrix&quot;">​</a></h3><p>• <code>Readonly</code> <strong>worldMatrix</strong>: <a href="./WebSG.ReadonlyMatrix4.html"><code>ReadonlyMatrix4</code></a></p><p>The node&#39;s world transformation matrix as a ReadonlyMatrix4.</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L716" target="_blank" rel="noreferrer">websg.d.ts:716</a></p><h2 id="accessors-1" tabindex="-1">Accessors <a class="header-anchor" href="#accessors-1" aria-label="Permalink to &quot;Accessors&quot;">​</a></h2><h3 id="collider" tabindex="-1">collider <a class="header-anchor" href="#collider" aria-label="Permalink to &quot;collider&quot;">​</a></h3><p>• <code>get</code> <strong>collider</strong>(): <code>undefined</code> | <a href="./WebSG.Collider.html"><code>Collider</code></a></p><p>Get the collider associated with this node.</p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>undefined</code> | <a href="./WebSG.Collider.html"><code>Collider</code></a></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L795" target="_blank" rel="noreferrer">websg.d.ts:795</a></p><p>• <code>set</code> <strong>collider</strong>(<code>collider</code>): <code>void</code></p><p>Set the collider associated with this node.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>collider</code></td><td style="text-align:left;"><code>undefined</code> | <a href="./WebSG.Collider.html"><code>Collider</code></a></td><td style="text-align:left;">The collider to associate with this node or undefined to unset.</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L801" target="_blank" rel="noreferrer">websg.d.ts:801</a></p><hr><h3 id="interactable" tabindex="-1">interactable <a class="header-anchor" href="#interactable" aria-label="Permalink to &quot;interactable&quot;">​</a></h3><p>• <code>get</code> <strong>interactable</strong>(): <code>undefined</code> | <a href="./WebSG.Interactable.html"><code>Interactable</code></a></p><p>Gets the interactable behavior associated with this node.</p><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>undefined</code> | <a href="./WebSG.Interactable.html"><code>Interactable</code></a></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L817" target="_blank" rel="noreferrer">websg.d.ts:817</a></p><hr><h3 id="isstatic" tabindex="-1">isStatic <a class="header-anchor" href="#isstatic" aria-label="Permalink to &quot;isStatic&quot;">​</a></h3><p>• <code>get</code> <strong>isStatic</strong>(): <code>boolean</code></p><p>Gets or sets whether this node is static.</p><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L749" target="_blank" rel="noreferrer">websg.d.ts:749</a></p><p>• <code>set</code> <strong>isStatic</strong>(<code>value</code>): <code>void</code></p><p>Sets whether this node is static and can be optimized by the engine. Optimizations include world matrix calculations. When a node is static, you may not modify its transform properties (translation, rotation, scale).</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Whether this node is static.</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L757" target="_blank" rel="noreferrer">websg.d.ts:757</a></p><hr><h3 id="light" tabindex="-1">light <a class="header-anchor" href="#light" aria-label="Permalink to &quot;light&quot;">​</a></h3><p>• <code>get</code> <strong>light</strong>(): <code>undefined</code> | <a href="./WebSG.Light.html"><code>Light</code></a></p><p>Get the light associated with this node.</p><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>undefined</code> | <a href="./WebSG.Light.html"><code>Light</code></a></p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L784" target="_blank" rel="noreferrer">websg.d.ts:784</a></p><p>• <code>set</code> <strong>light</strong>(<code>light</code>): <code>void</code></p><p>Set the light associated with this node.</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>light</code></td><td style="text-align:left;"><code>undefined</code> | <a href="./WebSG.Light.html"><code>Light</code></a></td><td style="text-align:left;">The light to associate with this node or undefined to unset.</td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L790" target="_blank" rel="noreferrer">websg.d.ts:790</a></p><hr><h3 id="mesh" tabindex="-1">mesh <a class="header-anchor" href="#mesh" aria-label="Permalink to &quot;mesh&quot;">​</a></h3><p>• <code>get</code> <strong>mesh</strong>(): <code>undefined</code> | <a href="./WebSG.Mesh.html"><code>Mesh</code></a></p><p>Get the mesh associated with this node.</p><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>undefined</code> | <a href="./WebSG.Mesh.html"><code>Mesh</code></a></p><h4 id="defined-in-12" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-12" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L773" target="_blank" rel="noreferrer">websg.d.ts:773</a></p><p>• <code>set</code> <strong>mesh</strong>(<code>mesh</code>): <code>void</code></p><p>Set the mesh associated with this node.</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>mesh</code></td><td style="text-align:left;"><code>undefined</code> | <a href="./WebSG.Mesh.html"><code>Mesh</code></a></td><td style="text-align:left;">The mesh to associate with this node or undefined to unset.</td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-13" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-13" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L779" target="_blank" rel="noreferrer">websg.d.ts:779</a></p><hr><h3 id="parent" tabindex="-1">parent <a class="header-anchor" href="#parent" aria-label="Permalink to &quot;parent&quot;">​</a></h3><p>• <code>get</code> <strong>parent</strong>(): <code>undefined</code> | <a href="./WebSG.Node.html"><code>Node</code></a></p><p>Gets the parent node of this node or undefined if this node has no parent.</p><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>undefined</code> | <a href="./WebSG.Node.html"><code>Node</code></a></p><h4 id="defined-in-14" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-14" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L744" target="_blank" rel="noreferrer">websg.d.ts:744</a></p><hr><h3 id="physicsbody" tabindex="-1">physicsBody <a class="header-anchor" href="#physicsbody" aria-label="Permalink to &quot;physicsBody&quot;">​</a></h3><p>• <code>get</code> <strong>physicsBody</strong>(): <code>undefined</code> | <a href="./WebSG.PhysicsBody.html"><code>PhysicsBody</code></a></p><p>Gets the physics body behavior associated with this node.</p><h4 id="returns-10" tabindex="-1">Returns <a class="header-anchor" href="#returns-10" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>undefined</code> | <a href="./WebSG.PhysicsBody.html"><code>PhysicsBody</code></a></p><h4 id="defined-in-15" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-15" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L833" target="_blank" rel="noreferrer">websg.d.ts:833</a></p><hr><h3 id="uicanvas" tabindex="-1">uiCanvas <a class="header-anchor" href="#uicanvas" aria-label="Permalink to &quot;uiCanvas&quot;">​</a></h3><p>• <code>get</code> <strong>uiCanvas</strong>(): <code>undefined</code> | <a href="./WebSG.UICanvas.html"><code>UICanvas</code></a></p><p>Get the UI canvas associated with this node.</p><h4 id="returns-11" tabindex="-1">Returns <a class="header-anchor" href="#returns-11" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>undefined</code> | <a href="./WebSG.UICanvas.html"><code>UICanvas</code></a></p><h4 id="defined-in-16" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-16" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L806" target="_blank" rel="noreferrer">websg.d.ts:806</a></p><p>• <code>set</code> <strong>uiCanvas</strong>(<code>uiCanvas</code>): <code>void</code></p><p>Set the UI canvas associated with this node.</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>uiCanvas</code></td><td style="text-align:left;"><code>undefined</code> | <a href="./WebSG.UICanvas.html"><code>UICanvas</code></a></td><td style="text-align:left;">The UI canvas to associate with this node or undefined to unset.</td></tr></tbody></table><h4 id="returns-12" tabindex="-1">Returns <a class="header-anchor" href="#returns-12" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-17" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-17" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L812" target="_blank" rel="noreferrer">websg.d.ts:812</a></p><hr><h3 id="visible" tabindex="-1">visible <a class="header-anchor" href="#visible" aria-label="Permalink to &quot;visible&quot;">​</a></h3><p>• <code>get</code> <strong>visible</strong>(): <code>boolean</code></p><p>Returns whether or not this node is visible</p><h4 id="returns-13" tabindex="-1">Returns <a class="header-anchor" href="#returns-13" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-18" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-18" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L762" target="_blank" rel="noreferrer">websg.d.ts:762</a></p><p>• <code>set</code> <strong>visible</strong>(<code>value</code>): <code>void</code></p><p>Sets whether or not this node is visible</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Whether or not this node is visible</td></tr></tbody></table><h4 id="returns-14" tabindex="-1">Returns <a class="header-anchor" href="#returns-14" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-19" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-19" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L768" target="_blank" rel="noreferrer">websg.d.ts:768</a></p><h2 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="addchild" tabindex="-1">addChild <a class="header-anchor" href="#addchild" aria-label="Permalink to &quot;addChild&quot;">​</a></h3><p>▸ <strong>addChild</strong>(<code>node</code>): <a href="./WebSG.Node.html"><code>Node</code></a></p><p>Adds a child node to this node.</p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>node</code></td><td style="text-align:left;"><a href="./WebSG.Node.html"><code>Node</code></a></td><td style="text-align:left;">The node to add as a child.</td></tr></tbody></table><h4 id="returns-15" tabindex="-1">Returns <a class="header-anchor" href="#returns-15" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./WebSG.Node.html"><code>Node</code></a></p><h4 id="defined-in-20" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-20" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L722" target="_blank" rel="noreferrer">websg.d.ts:722</a></p><hr><h3 id="addcomponent" tabindex="-1">addComponent <a class="header-anchor" href="#addcomponent" aria-label="Permalink to &quot;addComponent&quot;">​</a></h3><p>▸ <strong>addComponent</strong>(<code>component</code>): <code>undefined</code></p><p>Adds a component to this node.</p><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>component</code></td><td style="text-align:left;"><a href="./WebSG.ComponentStore.html"><code>ComponentStore</code></a></td><td style="text-align:left;">the component type to add.</td></tr></tbody></table><h4 id="returns-16" tabindex="-1">Returns <a class="header-anchor" href="#returns-16" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>undefined</code></p><h4 id="defined-in-21" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-21" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L855" target="_blank" rel="noreferrer">websg.d.ts:855</a></p><hr><h3 id="addinteractable" tabindex="-1">addInteractable <a class="header-anchor" href="#addinteractable" aria-label="Permalink to &quot;addInteractable&quot;">​</a></h3><p>▸ <strong>addInteractable</strong>(<code>props?</code>): <a href="./WebSG.Interactable.html"><code>Interactable</code></a></p><p>Adds an interactable behavior to this node.</p><h4 id="parameters-8" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-8" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>props?</code></td><td style="text-align:left;"><a href="./../modules/WebSG.html#interactableprops"><code>InteractableProps</code></a></td><td style="text-align:left;">Optional interactable properties.</td></tr></tbody></table><h4 id="returns-17" tabindex="-1">Returns <a class="header-anchor" href="#returns-17" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./WebSG.Interactable.html"><code>Interactable</code></a></p><h4 id="defined-in-22" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-22" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L823" target="_blank" rel="noreferrer">websg.d.ts:823</a></p><hr><h3 id="addphysicsbody" tabindex="-1">addPhysicsBody <a class="header-anchor" href="#addphysicsbody" aria-label="Permalink to &quot;addPhysicsBody&quot;">​</a></h3><p>▸ <strong>addPhysicsBody</strong>(<code>props?</code>): <a href="./WebSG.PhysicsBody.html"><code>PhysicsBody</code></a></p><p>Adds a physics body behavior to this node.</p><h4 id="parameters-9" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-9" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>props?</code></td><td style="text-align:left;"><a href="./../interfaces/WebSG.PhysicsBodyProps.html"><code>PhysicsBodyProps</code></a></td><td style="text-align:left;">Optional physics body properties.</td></tr></tbody></table><h4 id="returns-18" tabindex="-1">Returns <a class="header-anchor" href="#returns-18" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./WebSG.PhysicsBody.html"><code>PhysicsBody</code></a></p><h4 id="defined-in-23" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-23" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L839" target="_blank" rel="noreferrer">websg.d.ts:839</a></p><hr><h3 id="children" tabindex="-1">children <a class="header-anchor" href="#children" aria-label="Permalink to &quot;children&quot;">​</a></h3><p>▸ <strong>children</strong>(): <a href="./WebSG.NodeIterator.html"><code>NodeIterator</code></a></p><p>Returns an iterator for the children of this node.</p><h4 id="returns-19" tabindex="-1">Returns <a class="header-anchor" href="#returns-19" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./WebSG.NodeIterator.html"><code>NodeIterator</code></a></p><h4 id="defined-in-24" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-24" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L739" target="_blank" rel="noreferrer">websg.d.ts:739</a></p><hr><h3 id="getchild" tabindex="-1">getChild <a class="header-anchor" href="#getchild" aria-label="Permalink to &quot;getChild&quot;">​</a></h3><p>▸ <strong>getChild</strong>(<code>index</code>): <code>undefined</code> | <a href="./WebSG.Node.html"><code>Node</code></a></p><p>Gets the child node at the specified index or undefined if the index is out of range.</p><h4 id="parameters-10" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-10" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>index</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">The index of the child node.</td></tr></tbody></table><h4 id="returns-20" tabindex="-1">Returns <a class="header-anchor" href="#returns-20" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>undefined</code> | <a href="./WebSG.Node.html"><code>Node</code></a></p><h4 id="defined-in-25" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-25" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L734" target="_blank" rel="noreferrer">websg.d.ts:734</a></p><hr><h3 id="getcomponent" tabindex="-1">getComponent <a class="header-anchor" href="#getcomponent" aria-label="Permalink to &quot;getComponent&quot;">​</a></h3><p>▸ <strong>getComponent</strong>(<code>component</code>): <code>undefined</code> | <a href="./WebSG.Component.html"><code>Component</code></a></p><p>Gets an instance of a component of the specified type on this node. If the component does not exist on this node, it will return undefined.</p><h4 id="parameters-11" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-11" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>component</code></td><td style="text-align:left;"><a href="./WebSG.ComponentStore.html"><code>ComponentStore</code></a></td><td style="text-align:left;">the component type to get.</td></tr></tbody></table><h4 id="returns-21" tabindex="-1">Returns <a class="header-anchor" href="#returns-21" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>undefined</code> | <a href="./WebSG.Component.html"><code>Component</code></a></p><h4 id="defined-in-26" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-26" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L871" target="_blank" rel="noreferrer">websg.d.ts:871</a></p><hr><h3 id="hascomponent" tabindex="-1">hasComponent <a class="header-anchor" href="#hascomponent" aria-label="Permalink to &quot;hasComponent&quot;">​</a></h3><p>▸ <strong>hasComponent</strong>(<code>component</code>): <code>boolean</code></p><p>Checks if this node has a component.</p><h4 id="parameters-12" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-12" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>component</code></td><td style="text-align:left;"><a href="./WebSG.ComponentStore.html"><code>ComponentStore</code></a></td><td style="text-align:left;">the component type to check for.</td></tr></tbody></table><h4 id="returns-22" tabindex="-1">Returns <a class="header-anchor" href="#returns-22" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-27" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-27" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L865" target="_blank" rel="noreferrer">websg.d.ts:865</a></p><hr><h3 id="removechild" tabindex="-1">removeChild <a class="header-anchor" href="#removechild" aria-label="Permalink to &quot;removeChild&quot;">​</a></h3><p>▸ <strong>removeChild</strong>(<code>node</code>): <a href="./WebSG.Node.html"><code>Node</code></a></p><p>Removes a child node from this node.</p><h4 id="parameters-13" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-13" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>node</code></td><td style="text-align:left;"><a href="./WebSG.Node.html"><code>Node</code></a></td><td style="text-align:left;">The node to remove.</td></tr></tbody></table><h4 id="returns-23" tabindex="-1">Returns <a class="header-anchor" href="#returns-23" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./WebSG.Node.html"><code>Node</code></a></p><h4 id="defined-in-28" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-28" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L728" target="_blank" rel="noreferrer">websg.d.ts:728</a></p><hr><h3 id="removecomponent" tabindex="-1">removeComponent <a class="header-anchor" href="#removecomponent" aria-label="Permalink to &quot;removeComponent&quot;">​</a></h3><p>▸ <strong>removeComponent</strong>(<code>component</code>): <code>undefined</code></p><p>Removes a component from this node.</p><h4 id="parameters-14" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-14" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>component</code></td><td style="text-align:left;"><a href="./WebSG.ComponentStore.html"><code>ComponentStore</code></a></td><td style="text-align:left;">the component type to remove.</td></tr></tbody></table><h4 id="returns-24" tabindex="-1">Returns <a class="header-anchor" href="#returns-24" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>undefined</code></p><h4 id="defined-in-29" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-29" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L860" target="_blank" rel="noreferrer">websg.d.ts:860</a></p><hr><h3 id="removeinteractable" tabindex="-1">removeInteractable <a class="header-anchor" href="#removeinteractable" aria-label="Permalink to &quot;removeInteractable&quot;">​</a></h3><p>▸ <strong>removeInteractable</strong>(): <code>undefined</code></p><p>Removes the interactable property from this node.</p><h4 id="returns-25" tabindex="-1">Returns <a class="header-anchor" href="#returns-25" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>undefined</code></p><h4 id="defined-in-30" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-30" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L828" target="_blank" rel="noreferrer">websg.d.ts:828</a></p><hr><h3 id="removephysicsbody" tabindex="-1">removePhysicsBody <a class="header-anchor" href="#removephysicsbody" aria-label="Permalink to &quot;removePhysicsBody&quot;">​</a></h3><p>▸ <strong>removePhysicsBody</strong>(): <code>undefined</code></p><p>Removes the physics body behavior from this node.</p><h4 id="returns-26" tabindex="-1">Returns <a class="header-anchor" href="#returns-26" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>undefined</code></p><h4 id="defined-in-31" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-31" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L844" target="_blank" rel="noreferrer">websg.d.ts:844</a></p><hr><h3 id="startorbit" tabindex="-1">startOrbit <a class="header-anchor" href="#startorbit" aria-label="Permalink to &quot;startOrbit&quot;">​</a></h3><p>▸ <strong>startOrbit</strong>(<code>options?</code>): <code>undefined</code></p><p>Enables orbit camera control mode for this node.</p><h4 id="parameters-15" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-15" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>options?</code></td><td style="text-align:left;"><a href="./../interfaces/WebSG.OrbitOptions.html"><code>OrbitOptions</code></a></td><td style="text-align:left;">Optional orbit options.</td></tr></tbody></table><h4 id="returns-27" tabindex="-1">Returns <a class="header-anchor" href="#returns-27" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>undefined</code></p><h4 id="defined-in-32" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-32" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L850" target="_blank" rel="noreferrer">websg.d.ts:850</a></p>',289),n=[d];function i(s,h,l,c,b,p){return t(),a("div",null,n)}const m=e(o,[["render",i]]);export{u as __pageData,m as default};
