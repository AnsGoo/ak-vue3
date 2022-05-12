var f=Object.defineProperty,j=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var p=(t,s,e)=>s in t?f(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,i=(t,s)=>{for(var e in s||(s={}))b.call(s,e)&&p(t,e,s[e]);if(d)for(var e of d(s))w.call(s,e)&&p(t,e,s[e]);return t},h=(t,s)=>j(t,C(s));import{d as v,f as _,g as u,o as g,j as y,w as A,e as P,i as m,_ as H,r as I,t as V,c as $,b as n,h as x,n as E,a as l}from"./index.23b91f68.js";const S=v({setup(t){const s=_("#479ba6");return(e,a)=>{const r=u("ak-color-picker");return g(),y(r,{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=o=>s.value=o)},{default:A(()=>[P("\u9009\u62E9\u989C\u8272"+m(s.value),1)]),_:1},8,["modelValue"])}}}),k=v({components:{vdpv_0:S},setup(t){const s=_(),e=[s],a=I({vdpv_0Height:0});return h(i({toggleCode:o=>{const c="vdpv_"+o;a[c+"Height"]===0?a[c+"Height"]=(e[o].value?e[o].value.offsetHeight:0)||0:a[c+"Height"]=0}},V(a)),{vdpv_0Ref:s})}});k.$vd={matter:{},toc:[{content:"ColorPicker \u989C\u8272\u9009\u62E9\u5668",anchor:"colorpicker-\u989C\u8272\u9009\u62E9\u5668",level:1},{content:"\u57FA\u7840\u7528\u6CD5",anchor:"\u57FA\u7840\u7528\u6CD5",level:3},{content:"API",anchor:"api",level:2},{content:"ColorPicker",anchor:"colorpicker",level:3},{content:"ColorPicker Event",anchor:"colorpicker-event",level:3}]};const q=k,B={class:"vuedoc"},N=l('<h1 id="colorpicker-\u989C\u8272\u9009\u62E9\u5668" data-source-line="3"><a class="markdownIt-Anchor" href="#colorpicker-\u989C\u8272\u9009\u62E9\u5668">#</a> ColorPicker \u989C\u8272\u9009\u62E9\u5668</h1><h3 id="\u57FA\u7840\u7528\u6CD5" data-source-line="5"><a class="markdownIt-Anchor" href="#\u57FA\u7840\u7528\u6CD5">#</a> \u57FA\u7840\u7528\u6CD5</h3><pre style="display:none;"></pre>',3),R={class:"vuedoc-demo"},D={class:"vuedoc-demo__inner"},z={class:"vuedoc-demo__preview"},F={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},M=l(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-color-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;color&quot;</span>&gt;</span>\u9009\u62E9\u989C\u8272{{ color }}<span class="hljs-tag">&lt;/<span class="hljs-name">ak-color-picker</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> color = ref(<span class="hljs-string">&#39;#479ba6&#39;</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),T=[M],U=l('<h2 id="api" data-source-line="18"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="colorpicker" data-source-line="20"><a class="markdownIt-Anchor" href="#colorpicker">#</a> ColorPicker</h3><table data-source-line="22"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model</td><td>String</td><td>\u9009\u62E9\u7684\u989C\u8272</td></tr><tr><td>format</td><td>String/hex</td><td>\u683C\u5F0F\u5316\u7C7B\u578B\uFF0Chex\u548Crgb\u4E24\u79CD</td></tr><tr><td>change</td><td>Function</td><td>\u786E\u8BA4\u70B9\u51FB\u4E8B\u4EF6</td></tr><tr><td>text</td><td>String</td><td>\u786E\u8BA4\u6587\u672C</td></tr></tbody></table><h3 id="colorpicker-event" data-source-line="29"><a class="markdownIt-Anchor" href="#colorpicker-event">#</a> ColorPicker Event</h3><table data-source-line="31"><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>change</td><td>\u786E\u8BA4\u70B9\u51FB\u4E8B\u4EF6</td></tr></tbody></table>',5);function G(t,s,e,a,r,o){const c=u("vdpv_0");return g(),$("div",B,[N,n("div",R,[n("div",D,[n("div",z,[x(c)]),n("div",{style:E({height:t.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[n("div",F,T,512)],4),n("div",{class:"vuedoc-demo__footer",onClick:s[0]||(s[0]=J=>t.toggleCode(0))},m(t.vdpv_0Height>0?"hidden":"show"),1)])]),U])}var O=H(q,[["render",G]]);export{O as default};
