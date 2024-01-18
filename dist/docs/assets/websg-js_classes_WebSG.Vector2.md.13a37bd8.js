import{_ as e,o as t,c as a,O as r}from"./chunks/framework.c0965656.js";const p=JSON.parse('{"title":"Class: Vector2","description":"","frontmatter":{},"headers":[],"relativePath":"websg-js/classes/WebSG.Vector2.md","filePath":"websg-js/classes/WebSG.Vector2.md"}'),o={name:"websg-js/classes/WebSG.Vector2.md"},d=r('<h1 id="class-vector2" tabindex="-1">Class: Vector2 <a class="header-anchor" href="#class-vector2" aria-label="Permalink to &quot;Class: Vector2&quot;">​</a></h1><p><a href="./../modules/WebSG.html">WebSG</a>.Vector2</p><p>A 2-dimensional vector.</p><h2 id="indexable" tabindex="-1">Indexable <a class="header-anchor" href="#indexable" aria-label="Permalink to &quot;Indexable&quot;">​</a></h2><p>▪ [index: <code>number</code>]: <code>number</code></p><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h3><ul><li><a href="./WebSG.Vector2.html#constructor">constructor</a></li></ul><h3 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h3><ul><li><a href="./WebSG.Vector2.html#length">length</a></li><li><a href="./WebSG.Vector2.html#x">x</a></li><li><a href="./WebSG.Vector2.html#y">y</a></li></ul><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h3><ul><li><a href="./WebSG.Vector2.html#add">add</a></li><li><a href="./WebSG.Vector2.html#addscaledvector">addScaledVector</a></li><li><a href="./WebSG.Vector2.html#addvectors">addVectors</a></li><li><a href="./WebSG.Vector2.html#divide">divide</a></li><li><a href="./WebSG.Vector2.html#dividescalar">divideScalar</a></li><li><a href="./WebSG.Vector2.html#dividevectors">divideVectors</a></li><li><a href="./WebSG.Vector2.html#multiply">multiply</a></li><li><a href="./WebSG.Vector2.html#multiplyscalar">multiplyScalar</a></li><li><a href="./WebSG.Vector2.html#multiplyvectors">multiplyVectors</a></li><li><a href="./WebSG.Vector2.html#set">set</a></li><li><a href="./WebSG.Vector2.html#setscalar">setScalar</a></li><li><a href="./WebSG.Vector2.html#subtract">subtract</a></li><li><a href="./WebSG.Vector2.html#subtractscaledvector">subtractScaledVector</a></li><li><a href="./WebSG.Vector2.html#subtractvectors">subtractVectors</a></li></ul><h2 id="constructors-1" tabindex="-1">Constructors <a class="header-anchor" href="#constructors-1" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor&quot;">​</a></h3><p>• <strong>new Vector2</strong>()</p><p>Constructs a new vector.</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L1856" target="_blank" rel="noreferrer">websg.d.ts:1856</a></p><p>• <strong>new Vector2</strong>(<code>x</code>, <code>y</code>)</p><p>Constructs a new vector with the given components.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>x</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">The x component.</td></tr><tr><td style="text-align:left;"><code>y</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">The y component.</td></tr></tbody></table><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L1862" target="_blank" rel="noreferrer">websg.d.ts:1862</a></p><p>• <strong>new Vector2</strong>(<code>array</code>)</p><p>Constructs and sets the initial components of the vector from a numeric array-like object.</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>array</code></td><td style="text-align:left;"><code>ArrayLike</code>&lt;<code>number</code>&gt;</td></tr></tbody></table><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L1866" target="_blank" rel="noreferrer">websg.d.ts:1866</a></p><h2 id="properties-1" tabindex="-1">Properties <a class="header-anchor" href="#properties-1" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="length" tabindex="-1">length <a class="header-anchor" href="#length" aria-label="Permalink to &quot;length&quot;">​</a></h3><p>• <code>Readonly</code> <strong>length</strong>: <code>number</code></p><p>Returns the number of components in this vector.</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L1943" target="_blank" rel="noreferrer">websg.d.ts:1943</a></p><hr><h3 id="x" tabindex="-1">x <a class="header-anchor" href="#x" aria-label="Permalink to &quot;x&quot;">​</a></h3><p>• <strong>x</strong>: <code>number</code></p><p>The x component of the vector.</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L1848" target="_blank" rel="noreferrer">websg.d.ts:1848</a></p><hr><h3 id="y" tabindex="-1">y <a class="header-anchor" href="#y" aria-label="Permalink to &quot;y&quot;">​</a></h3><p>• <strong>y</strong>: <code>number</code></p><p>The y component of the vector.</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L1852" target="_blank" rel="noreferrer">websg.d.ts:1852</a></p><h2 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="add" tabindex="-1">add <a class="header-anchor" href="#add" aria-label="Permalink to &quot;add&quot;">​</a></h3><p>▸ <strong>add</strong>(<code>vector</code>): <a href="./WebSG.Vector2.html"><code>Vector2</code></a></p><p>Adds the given vector to this vector.</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>vector</code></td><td style="text-align:left;"><code>ArrayLike</code>&lt;<code>number</code>&gt;</td><td style="text-align:left;">The vector to add.</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./WebSG.Vector2.html"><code>Vector2</code></a></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L1880" target="_blank" rel="noreferrer">websg.d.ts:1880</a></p><hr><h3 id="addscaledvector" tabindex="-1">addScaledVector <a class="header-anchor" href="#addscaledvector" aria-label="Permalink to &quot;addScaledVector&quot;">​</a></h3><p>▸ <strong>addScaledVector</strong>(<code>vector</code>, <code>scale</code>): <a href="./WebSG.Vector2.html"><code>Vector2</code></a></p><p>Adds the given vector scaled by the given scalar to this vector.</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>vector</code></td><td style="text-align:left;"><code>ArrayLike</code>&lt;<code>number</code>&gt;</td></tr><tr><td style="text-align:left;"><code>scale</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./WebSG.Vector2.html"><code>Vector2</code></a></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L1890" target="_blank" rel="noreferrer">websg.d.ts:1890</a></p><hr><h3 id="addvectors" tabindex="-1">addVectors <a class="header-anchor" href="#addvectors" aria-label="Permalink to &quot;addVectors&quot;">​</a></h3><p>▸ <strong>addVectors</strong>(<code>a</code>, <code>b</code>): <a href="./WebSG.Vector2.html"><code>Vector2</code></a></p><p>Adds the given vectors together and stores the result in this vector.</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>a</code></td><td style="text-align:left;"><code>ArrayLike</code>&lt;<code>number</code>&gt;</td><td style="text-align:left;">The first vector.</td></tr><tr><td style="text-align:left;"><code>b</code></td><td style="text-align:left;"><code>ArrayLike</code>&lt;<code>number</code>&gt;</td><td style="text-align:left;">The second vector.</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./WebSG.Vector2.html"><code>Vector2</code></a></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L1886" target="_blank" rel="noreferrer">websg.d.ts:1886</a></p><hr><h3 id="divide" tabindex="-1">divide <a class="header-anchor" href="#divide" aria-label="Permalink to &quot;divide&quot;">​</a></h3><p>▸ <strong>divide</strong>(<code>vector</code>): <a href="./WebSG.Vector2.html"><code>Vector2</code></a></p><p>Divides this vector by the given vector.</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>vector</code></td><td style="text-align:left;"><code>ArrayLike</code>&lt;<code>number</code>&gt;</td><td style="text-align:left;">The vector to divide by.</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./WebSG.Vector2.html"><code>Vector2</code></a></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L1928" target="_blank" rel="noreferrer">websg.d.ts:1928</a></p><hr><h3 id="dividescalar" tabindex="-1">divideScalar <a class="header-anchor" href="#dividescalar" aria-label="Permalink to &quot;divideScalar&quot;">​</a></h3><p>▸ <strong>divideScalar</strong>(<code>scalar</code>): <a href="./WebSG.Vector2.html"><code>Vector2</code></a></p><p>Divides this vector by the given scalar.</p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>scalar</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">The scalar to divide by.</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./WebSG.Vector2.html"><code>Vector2</code></a></p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L1939" target="_blank" rel="noreferrer">websg.d.ts:1939</a></p><hr><h3 id="dividevectors" tabindex="-1">divideVectors <a class="header-anchor" href="#dividevectors" aria-label="Permalink to &quot;divideVectors&quot;">​</a></h3><p>▸ <strong>divideVectors</strong>(<code>a</code>, <code>b</code>): <a href="./WebSG.Vector2.html"><code>Vector2</code></a></p><p>Divides the given vectors and stores the result in this vector.</p><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>a</code></td><td style="text-align:left;"><code>ArrayLike</code>&lt;<code>number</code>&gt;</td><td style="text-align:left;">The first vector.</td></tr><tr><td style="text-align:left;"><code>b</code></td><td style="text-align:left;"><code>ArrayLike</code>&lt;<code>number</code>&gt;</td><td style="text-align:left;">The second vector.</td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./WebSG.Vector2.html"><code>Vector2</code></a></p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L1934" target="_blank" rel="noreferrer">websg.d.ts:1934</a></p><hr><h3 id="multiply" tabindex="-1">multiply <a class="header-anchor" href="#multiply" aria-label="Permalink to &quot;multiply&quot;">​</a></h3><p>▸ <strong>multiply</strong>(<code>vector</code>): <a href="./WebSG.Vector2.html"><code>Vector2</code></a></p><p>Multiplies this vector by the given vector.</p><h4 id="parameters-8" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-8" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>vector</code></td><td style="text-align:left;"><code>ArrayLike</code>&lt;<code>number</code>&gt;</td><td style="text-align:left;">The vector to multiply by.</td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./WebSG.Vector2.html"><code>Vector2</code></a></p><h4 id="defined-in-12" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-12" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L1912" target="_blank" rel="noreferrer">websg.d.ts:1912</a></p><hr><h3 id="multiplyscalar" tabindex="-1">multiplyScalar <a class="header-anchor" href="#multiplyscalar" aria-label="Permalink to &quot;multiplyScalar&quot;">​</a></h3><p>▸ <strong>multiplyScalar</strong>(<code>scalar</code>): <a href="./WebSG.Vector2.html"><code>Vector2</code></a></p><p>Multiplies this vector by the given scalar.</p><h4 id="parameters-9" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-9" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>scalar</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">The scalar to multiply by.</td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./WebSG.Vector2.html"><code>Vector2</code></a></p><h4 id="defined-in-13" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-13" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L1923" target="_blank" rel="noreferrer">websg.d.ts:1923</a></p><hr><h3 id="multiplyvectors" tabindex="-1">multiplyVectors <a class="header-anchor" href="#multiplyvectors" aria-label="Permalink to &quot;multiplyVectors&quot;">​</a></h3><p>▸ <strong>multiplyVectors</strong>(<code>a</code>, <code>b</code>): <a href="./WebSG.Vector2.html"><code>Vector2</code></a></p><p>Multiplies the given vectors together and stores the result in this vector.</p><h4 id="parameters-10" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-10" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>a</code></td><td style="text-align:left;"><code>ArrayLike</code>&lt;<code>number</code>&gt;</td><td style="text-align:left;">The first vector.</td></tr><tr><td style="text-align:left;"><code>b</code></td><td style="text-align:left;"><code>ArrayLike</code>&lt;<code>number</code>&gt;</td><td style="text-align:left;">The second vector.</td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./WebSG.Vector2.html"><code>Vector2</code></a></p><h4 id="defined-in-14" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-14" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L1918" target="_blank" rel="noreferrer">websg.d.ts:1918</a></p><hr><h3 id="set" tabindex="-1">set <a class="header-anchor" href="#set" aria-label="Permalink to &quot;set&quot;">​</a></h3><p>▸ <strong>set</strong>(<code>value</code>): <a href="./WebSG.Vector2.html"><code>Vector2</code></a></p><p>Sets the components of the vector.</p><h4 id="parameters-11" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-11" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value</code></td><td style="text-align:left;"><code>ArrayLike</code>&lt;<code>number</code>&gt;</td><td style="text-align:left;">The x,y components of the vector.</td></tr></tbody></table><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./WebSG.Vector2.html"><code>Vector2</code></a></p><h4 id="defined-in-15" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-15" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L1871" target="_blank" rel="noreferrer">websg.d.ts:1871</a></p><hr><h3 id="setscalar" tabindex="-1">setScalar <a class="header-anchor" href="#setscalar" aria-label="Permalink to &quot;setScalar&quot;">​</a></h3><p>▸ <strong>setScalar</strong>(<code>value</code>): <a href="./WebSG.Vector2.html"><code>Vector2</code></a></p><p>Sets the components of the vector to a scalar value.</p><h4 id="parameters-12" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-12" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="returns-10" tabindex="-1">Returns <a class="header-anchor" href="#returns-10" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./WebSG.Vector2.html"><code>Vector2</code></a></p><h4 id="defined-in-16" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-16" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L1875" target="_blank" rel="noreferrer">websg.d.ts:1875</a></p><hr><h3 id="subtract" tabindex="-1">subtract <a class="header-anchor" href="#subtract" aria-label="Permalink to &quot;subtract&quot;">​</a></h3><p>▸ <strong>subtract</strong>(<code>vector</code>): <a href="./WebSG.Vector2.html"><code>Vector2</code></a></p><p>Subtracts the given vector from this vector.</p><h4 id="parameters-13" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-13" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>vector</code></td><td style="text-align:left;"><code>ArrayLike</code>&lt;<code>number</code>&gt;</td><td style="text-align:left;">The vector to subtract.</td></tr></tbody></table><h4 id="returns-11" tabindex="-1">Returns <a class="header-anchor" href="#returns-11" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./WebSG.Vector2.html"><code>Vector2</code></a></p><h4 id="defined-in-17" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-17" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L1895" target="_blank" rel="noreferrer">websg.d.ts:1895</a></p><hr><h3 id="subtractscaledvector" tabindex="-1">subtractScaledVector <a class="header-anchor" href="#subtractscaledvector" aria-label="Permalink to &quot;subtractScaledVector&quot;">​</a></h3><p>▸ <strong>subtractScaledVector</strong>(<code>vector</code>, <code>scale</code>): <a href="./WebSG.Vector2.html"><code>Vector2</code></a></p><p>Subtracts the given vector scaled by the given scalar from this vector.</p><h4 id="parameters-14" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-14" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>vector</code></td><td style="text-align:left;"><code>ArrayLike</code>&lt;<code>number</code>&gt;</td><td style="text-align:left;">The vector to subtract.</td></tr><tr><td style="text-align:left;"><code>scale</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">The scalar to scale the vector by.</td></tr></tbody></table><h4 id="returns-12" tabindex="-1">Returns <a class="header-anchor" href="#returns-12" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./WebSG.Vector2.html"><code>Vector2</code></a></p><h4 id="defined-in-18" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-18" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L1907" target="_blank" rel="noreferrer">websg.d.ts:1907</a></p><hr><h3 id="subtractvectors" tabindex="-1">subtractVectors <a class="header-anchor" href="#subtractvectors" aria-label="Permalink to &quot;subtractVectors&quot;">​</a></h3><p>▸ <strong>subtractVectors</strong>(<code>a</code>, <code>b</code>): <a href="./WebSG.Vector2.html"><code>Vector2</code></a></p><p>Subtracts the second vector from the first and stores the result in this vector.</p><h4 id="parameters-15" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-15" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>a</code></td><td style="text-align:left;"><code>ArrayLike</code>&lt;<code>number</code>&gt;</td><td style="text-align:left;">The first vector.</td></tr><tr><td style="text-align:left;"><code>b</code></td><td style="text-align:left;"><code>ArrayLike</code>&lt;<code>number</code>&gt;</td><td style="text-align:left;">The second vector.</td></tr></tbody></table><h4 id="returns-13" tabindex="-1">Returns <a class="header-anchor" href="#returns-13" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./WebSG.Vector2.html"><code>Vector2</code></a></p><h4 id="defined-in-19" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-19" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/dessangithub/thirdroom/blob/ef458977/packages/websg-types/types/websg.d.ts#L1901" target="_blank" rel="noreferrer">websg.d.ts:1901</a></p>',188),l=[d];function s(i,n,h,c,b,f){return t(),a("div",null,l)}const g=e(o,[["render",s]]);export{p as __pageData,g as default};
