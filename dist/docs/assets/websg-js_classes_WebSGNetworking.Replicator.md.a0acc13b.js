import{_ as e,o as t,c as a,O as r}from"./chunks/framework.c0965656.js";const u=JSON.parse('{"title":"Class: Replicator","description":"","frontmatter":{},"headers":[],"relativePath":"websg-js/classes/WebSGNetworking.Replicator.md","filePath":"websg-js/classes/WebSGNetworking.Replicator.md"}'),o={name:"websg-js/classes/WebSGNetworking.Replicator.md"},n=r('<h1 id="class-replicator" tabindex="-1">Class: Replicator <a class="header-anchor" href="#class-replicator" aria-label="Permalink to &quot;Class: Replicator&quot;">​</a></h1><p><a href="./../modules/WebSGNetworking.html">WebSGNetworking</a>.Replicator</p><p>A replicator for spawning and despawning nodes.</p><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h3><ul><li><a href="./WebSGNetworking.Replicator.html#constructor">constructor</a></li></ul><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h3><ul><li><a href="./WebSGNetworking.Replicator.html#despawn">despawn</a></li><li><a href="./WebSGNetworking.Replicator.html#despawned">despawned</a></li><li><a href="./WebSGNetworking.Replicator.html#spawn">spawn</a></li><li><a href="./WebSGNetworking.Replicator.html#spawned">spawned</a></li></ul><h2 id="constructors-1" tabindex="-1">Constructors <a class="header-anchor" href="#constructors-1" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor&quot;">​</a></h3><p>• <strong>new Replicator</strong>()</p><h2 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="despawn" tabindex="-1">despawn <a class="header-anchor" href="#despawn" aria-label="Permalink to &quot;despawn&quot;">​</a></h3><p>▸ <strong>despawn</strong>(<code>node</code>, <code>data?</code>): <code>void</code></p><p>Despawns a node with the given optional data.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>node</code></td><td style="text-align:left;"><a href="./WebSG.Node.html"><code>Node</code></a></td><td style="text-align:left;">The node to despawn.</td></tr><tr><td style="text-align:left;"><code>data?</code></td><td style="text-align:left;"><code>ArrayBuffer</code></td><td style="text-align:left;">Optional data to send with the despawn message.</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L2584" target="_blank" rel="noreferrer">websg.d.ts:2584</a></p><hr><h3 id="despawned" tabindex="-1">despawned <a class="header-anchor" href="#despawned" aria-label="Permalink to &quot;despawned&quot;">​</a></h3><p>▸ <strong>despawned</strong>(): <a href="./WebSGNetworking.ReplicationIterator.html"><code>ReplicationIterator</code></a></p><p>Returns an iterator for despawned nodes.</p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./WebSGNetworking.ReplicationIterator.html"><code>ReplicationIterator</code></a></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L2592" target="_blank" rel="noreferrer">websg.d.ts:2592</a></p><hr><h3 id="spawn" tabindex="-1">spawn <a class="header-anchor" href="#spawn" aria-label="Permalink to &quot;spawn&quot;">​</a></h3><p>▸ <strong>spawn</strong>(<code>data?</code>): <a href="./WebSG.Node.html"><code>Node</code></a></p><p>Spawns a node with the given optional data.</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>data?</code></td><td style="text-align:left;"><code>ArrayBuffer</code></td><td style="text-align:left;">Optional data to send with the spawn message.</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./WebSG.Node.html"><code>Node</code></a></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L2578" target="_blank" rel="noreferrer">websg.d.ts:2578</a></p><hr><h3 id="spawned" tabindex="-1">spawned <a class="header-anchor" href="#spawned" aria-label="Permalink to &quot;spawned&quot;">​</a></h3><p>▸ <strong>spawned</strong>(): <a href="./WebSGNetworking.ReplicationIterator.html"><code>ReplicationIterator</code></a></p><p>Returns an iterator for spawned nodes.</p><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./WebSGNetworking.ReplicationIterator.html"><code>ReplicationIterator</code></a></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L2588" target="_blank" rel="noreferrer">websg.d.ts:2588</a></p>',47),s=[n];function d(i,l,h,c,p,b){return t(),a("div",null,s)}const g=e(o,[["render",d]]);export{u as __pageData,g as default};
