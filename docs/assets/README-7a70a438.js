import{C as A}from"./codePreview-683280a5.js";import{r as p,o,c as E,b as l,w as t,e as s,u as d,f as a,g as i}from"./index-4b83c618.js";/* empty css                                                                    */const j={class:"popover-demo"},m={__name:"README.md.Virtuala175c0d0",setup(r){const n=()=>{alert("点击了确定")};return(h,v)=>{const c=p("ak-button"),e=p("ak-popover");return o(),E("div",j,[l(e,{content:"这是一段内容这是一段内容确定删除吗？",confirm:"确定",cancel:"取消",callback:n},{default:t(()=>[l(c,null,{default:t(()=>[s("删除确认")]),_:1})]),_:1}),l(e,{confirm:"确定",cancel:"取消",callback:n},{content:t(()=>[s(" 这是一段内容这是一段内容确定删除吗？ ")]),default:t(()=>[l(c,null,{default:t(()=>[s("删除确认")]),_:1})]),_:1})])}}},_={class:"marked-body"},k=a("h1",{id:"popover（tooltip）-弹出框"},"popover（Tooltip） 弹出框",-1),u=a("h3",{id:"基本用法"},"基本用法",-1),g=a("p",null,[s("基于"),a("code",null,"tooltip"),s("提示")],-1),b=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"popover-demo"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-popover"),s(`
        `),a("span",{class:"hljs-attr"},"content"),s("="),a("span",{class:"hljs-string"},'"这是一段内容这是一段内容确定删除吗？"'),s(`
        `),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"确定"'),s(`
        `),a("span",{class:"hljs-attr"},"cancel"),s("="),a("span",{class:"hljs-string"},'"取消"'),s(`
        `),a("span",{class:"hljs-attr"},":callback"),s("="),a("span",{class:"hljs-string"},'"callback"'),s(`
      >`)]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s("删除确认"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-popover"),s(">")]),s(`
     
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-popover"),s(),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"确定"'),s(),a("span",{class:"hljs-attr"},"cancel"),s("="),a("span",{class:"hljs-string"},'"取消"'),s(),a("span",{class:"hljs-attr"},":callback"),s("="),a("span",{class:"hljs-string"},'"callback"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s("删除确认"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"content"),s(">")]),s(" 这是一段内容这是一段内容确定删除吗？ "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-popover"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"callback"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
    `),a("span",{class:"hljs-title function_"},"alert"),s("("),a("span",{class:"hljs-string"},"'点击了确定'"),s(`)
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),B=i('<h2 id="api">API</h2><h3 id="popover-props">Popover Props</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>confirm</td><td>string</td><td>确认按钮文案</td></tr><tr><td>cancel</td><td>string</td><td>取消按钮文案</td></tr><tr><td>callback</td><td>function</td><td>确认按钮事件</td></tr><tr><td>-</td><td>-</td><td>其他同<a href="/#/tooltip">Tooltip</a></td></tr></tbody></table>',3),D={__name:"README",setup(r){return(n,h)=>(o(),E("div",_,[k,u,g,l(d(A),{code:"%3Ctemplate%3E%0A%20%20%20%20%3Cdiv%20class%3D%22popover-demo%22%3E%0A%20%20%20%20%20%20%3Cak-popover%0A%20%20%20%20%20%20%20%20content%3D%22%E8%BF%99%E6%98%AF%E4%B8%80%E6%AE%B5%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E4%B8%80%E6%AE%B5%E5%86%85%E5%AE%B9%E7%A1%AE%E5%AE%9A%E5%88%A0%E9%99%A4%E5%90%97%EF%BC%9F%22%0A%20%20%20%20%20%20%20%20confirm%3D%22%E7%A1%AE%E5%AE%9A%22%0A%20%20%20%20%20%20%20%20cancel%3D%22%E5%8F%96%E6%B6%88%22%0A%20%20%20%20%20%20%20%20%3Acallback%3D%22callback%22%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3Cak-button%3E%E5%88%A0%E9%99%A4%E7%A1%AE%E8%AE%A4%3C%2Fak-button%3E%0A%20%20%20%20%20%20%3C%2Fak-popover%3E%0A%20%20%20%20%20%0A%20%20%20%20%20%20%3Cak-popover%20confirm%3D%22%E7%A1%AE%E5%AE%9A%22%20cancel%3D%22%E5%8F%96%E6%B6%88%22%20%3Acallback%3D%22callback%22%3E%0A%20%20%20%20%20%20%20%20%3Cak-button%3E%E5%88%A0%E9%99%A4%E7%A1%AE%E8%AE%A4%3C%2Fak-button%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23content%3E%20%E8%BF%99%E6%98%AF%E4%B8%80%E6%AE%B5%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E4%B8%80%E6%AE%B5%E5%86%85%E5%AE%B9%E7%A1%AE%E5%AE%9A%E5%88%A0%E9%99%A4%E5%90%97%EF%BC%9F%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3C%2Fak-popover%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20const%20callback%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20alert('%E7%82%B9%E5%87%BB%E4%BA%86%E7%A1%AE%E5%AE%9A')%0A%20%20%7D%0A%3C%2Fscript%3E%0A%0A"},{code:t(()=>[b]),default:t(()=>[l(m)]),_:1}),B]))}};export{D as default};
