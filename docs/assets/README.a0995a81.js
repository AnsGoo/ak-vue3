var w=Object.defineProperty,H=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var $=(t,a,n)=>a in t?w(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,b=(t,a)=>{for(var n in a||(a={}))A.call(a,n)&&$(t,n,a[n]);if(y)for(var n of y(a))I.call(a,n)&&$(t,n,a[n]);return t},q=(t,a)=>H(t,C(a));import{_ as r,g as l,o as h,c as _,h as e,e as p,b as s,w as R,d as D,f as j,r as x,t as N,n as u,i as m,a as i}from"./index.23b91f68.js";const P={},V=p(" \u8FD9\u662F\u6587\u672C\u5185\u5BB9 "),B=s("p",null,'\u4E5F\u53EF\u4EE5\u662F\u865A\u7EBF borderStyle="dashed"',-1),E=s("p",null,'\u8FD9\u662F\u6587\u672C\u5185\u5BB9 borderStyle="dotted"',-1),z=s("p",null,"\u8FD9\u662F\u6587\u672C\u5185\u5BB9",-1);function M(t,a){const n=l("ak-divider");return h(),_("div",null,[V,e(n),B,e(n,{borderStyle:"dashed",padding:"10px"}),E,e(n,{borderStyle:"dotted"}),z,e(n,{borderStyle:"double"})])}var T=r(P,[["render",M]]);const F={},G=p(" \u8FD9\u662F\u6587\u672C\u5185\u5BB9 "),J=p("\u6807\u9898"),K=s("p",null,"\u8FD9\u662F\u6587\u672C\u5185\u5BB9",-1);function L(t,a){const n=l("ak-divider");return h(),_("div",null,[G,e(n,{contentPosition:"left"},{default:R(()=>[J]),_:1}),K])}var O=r(F,[["render",L]]);const Q={},U=s("span",null,"\u7F16\u8F91",-1),W=s("span",null,"\u67E5\u770B",-1),X=s("span",null,"\u5220\u9664",-1);function Y(t,a){const n=l("ak-divider");return h(),_("div",null,[U,e(n,{direction:"vertical",borderStyle:"dashed"}),W,e(n,{direction:"vertical"}),X])}var Z=r(Q,[["render",Y]]);const S=D({components:{vdpv_0:T,vdpv_1:O,vdpv_2:Z},setup(t){const a=j(),n=j(),v=j(),g=[a,n,v],d=x({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0});return q(b({toggleCode:o=>{const c="vdpv_"+o;d[c+"Height"]===0?d[c+"Height"]=(g[o].value?g[o].value.offsetHeight:0)||0:d[c+"Height"]=0}},N(d)),{vdpv_0Ref:a,vdpv_1Ref:n,vdpv_2Ref:v})}});S.$vd={matter:{},toc:[{content:"Divider \u5206\u5272\u7EBF",anchor:"divider-\u5206\u5272\u7EBF",level:1},{content:"\u57FA\u7840\u7528\u6CD5",anchor:"\u57FA\u7840\u7528\u6CD5",level:3},{content:"\u8BBE\u7F6E\u6587\u6848\u63D0\u793A",anchor:"\u8BBE\u7F6E\u6587\u6848\u63D0\u793A",level:3},{content:"\u5782\u76F4\u5206\u9694\u7EBF",anchor:"\u5782\u76F4\u5206\u9694\u7EBF",level:3},{content:"API",anchor:"api",level:2},{content:"Divider",anchor:"divider",level:3}]};const ss=S,as={class:"vuedoc"},ns=i('<h1 id="divider-\u5206\u5272\u7EBF" data-source-line="1"><a class="markdownIt-Anchor" href="#divider-\u5206\u5272\u7EBF">#</a> Divider \u5206\u5272\u7EBF</h1><h3 id="\u57FA\u7840\u7528\u6CD5" data-source-line="3"><a class="markdownIt-Anchor" href="#\u57FA\u7840\u7528\u6CD5">#</a> \u57FA\u7840\u7528\u6CD5</h3><p data-source-line="5">\u5BF9\u6BB5\u843D\u95F4\u7684\u6587\u672C\u8FDB\u884C\u5206\u5272</p><pre style="display:none;"></pre>',4),ts={class:"vuedoc-demo"},es={class:"vuedoc-demo__inner"},ls={class:"vuedoc-demo__preview"},ds={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},os=i(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    \u8FD9\u662F\u6587\u672C\u5185\u5BB9
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-divider</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u4E5F\u53EF\u4EE5\u662F\u865A\u7EBF borderStyle=&quot;dashed&quot;<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-divider</span> <span class="hljs-attr">borderStyle</span>=<span class="hljs-string">&quot;dashed&quot;</span> <span class="hljs-attr">padding</span>=<span class="hljs-string">&quot;10px&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u8FD9\u662F\u6587\u672C\u5185\u5BB9 borderStyle=&quot;dotted&quot;<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-divider</span> <span class="hljs-attr">borderStyle</span>=<span class="hljs-string">&quot;dotted&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u8FD9\u662F\u6587\u672C\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-divider</span> <span class="hljs-attr">borderStyle</span>=<span class="hljs-string">&quot;double&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</span></code></pre></div>`,1),cs=[os],ps=s("h3",{id:"\u8BBE\u7F6E\u6587\u6848\u63D0\u793A","data-source-line":"22"},[s("a",{class:"markdownIt-Anchor",href:"#\u8BBE\u7F6E\u6587\u6848\u63D0\u793A"},"#"),p(" \u8BBE\u7F6E\u6587\u6848\u63D0\u793A")],-1),is=s("p",{"data-source-line":"24"},"\u5BF9\u6BB5\u843D\u95F4\u7684\u6587\u672C\u8FDB\u884C\u5206\u5272",-1),rs=s("pre",{style:{display:"none"}},null,-1),hs={class:"vuedoc-demo"},_s={class:"vuedoc-demo__inner"},vs={class:"vuedoc-demo__preview"},gs={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},js=i(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    \u8FD9\u662F\u6587\u672C\u5185\u5BB9
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-divider</span> <span class="hljs-attr">contentPosition</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>\u6807\u9898<span class="hljs-tag">&lt;/<span class="hljs-name">ak-divider</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u8FD9\u662F\u6587\u672C\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</span></code></pre></div>`,1),us=[js],ms=s("h3",{id:"\u5782\u76F4\u5206\u9694\u7EBF","data-source-line":"36"},[s("a",{class:"markdownIt-Anchor",href:"#\u5782\u76F4\u5206\u9694\u7EBF"},"#"),p(" \u5782\u76F4\u5206\u9694\u7EBF")],-1),fs=s("p",{"data-source-line":"38"},"\u5BF9\u6BB5\u843D\u95F4\u7684\u6587\u672C\u8FDB\u884C\u5206\u5272",-1),ks=s("pre",{style:{display:"none"}},null,-1),ys={class:"vuedoc-demo"},$s={class:"vuedoc-demo__inner"},bs={class:"vuedoc-demo__preview"},qs={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},Ss=i(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u7F16\u8F91<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-divider</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;vertical&quot;</span> <span class="hljs-attr">borderStyle</span>=<span class="hljs-string">&quot;dashed&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-divider</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u67E5\u770B<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-divider</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;vertical&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-divider</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u5220\u9664<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</span></code></pre></div>`,1),ws=[Ss],Hs=i('<h2 id="api" data-source-line="52"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="divider" data-source-line="54"><a class="markdownIt-Anchor" href="#divider">#</a> Divider</h3><table data-source-line="56"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>direction</td><td>string</td><td>\u8BBE\u7F6E\u5206\u5272\u7EBF\u65B9\u5411\uFF0C\u53EF\u9009 horizontal / vertical</td></tr><tr><td>border-style</td><td>string</td><td>\u7EBF\u6761\u7C7B\u578B\uFF0C\u53EF\u9009<code>dashed</code>\u3001<code>dotted</code>\u3001<code>soild</code></td></tr><tr><td>content-position</td><td>string</td><td>\u8BBE\u7F6E\u5206\u5272\u7EBF\u6587\u6848\u7684\u4F4D\u7F6E\uFF0C\u53EF\u9009<code>left</code>\u3001<code>right</code>\u3001<code>center</code></td></tr><tr><td>padding</td><td>string</td><td>\u4E0A\u4E0B/\u5DE6\u53F3\u8FB9\u8DDD</td></tr></tbody></table>',3);function Cs(t,a,n,v,g,d){const f=l("vdpv_0"),o=l("vdpv_1"),c=l("vdpv_2");return h(),_("div",as,[ns,s("div",ts,[s("div",es,[s("div",ls,[e(f)]),s("div",{style:u({height:t.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",ds,cs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=k=>t.toggleCode(0))},m(t.vdpv_0Height>0?"hidden":"show"),1)])]),ps,is,rs,s("div",hs,[s("div",_s,[s("div",vs,[e(o)]),s("div",{style:u({height:t.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",gs,us,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=k=>t.toggleCode(1))},m(t.vdpv_1Height>0?"hidden":"show"),1)])]),ms,fs,ks,s("div",ys,[s("div",$s,[s("div",bs,[e(c)]),s("div",{style:u({height:t.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",qs,ws,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=k=>t.toggleCode(2))},m(t.vdpv_2Height>0?"hidden":"show"),1)])]),Hs])}var Rs=r(ss,[["render",Cs]]);export{Rs as default};
