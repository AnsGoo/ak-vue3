import{C as A}from"./codePreview-683280a5.js";import{d as g,n as m,o as j,c as i,f as a,e as s,p as d,_ as C,b as p,w as r,u as E,g as u}from"./index-4b83c618.js";/* empty css                                                                    */const F=g({__name:"README.md.Virtual3e6766af",setup(h){const n=m("Message"),e=c=>{n.alert("这是alert的内容",{icon:c})};return(c,l)=>(j(),i("div",null,[a("p",null,[s("模拟Alert 成功 "),a("span",{class:"green",onClick:l[0]||(l[0]=t=>e(1))},"试一试")]),a("p",null,[s("模拟Alert 失败 "),a("span",{class:"green",onClick:l[1]||(l[1]=t=>e(2))},"试一试")]),a("p",null,[s("模拟Alert 警告 "),a("span",{class:"green",onClick:l[2]||(l[2]=t=>e(3))},"试一试")])]))}}),_={__name:"README.md.Virtualdaa7ede8",setup(h){const n=d(),e=()=>{n.proxy.$confirm("这是alert的内容",{icon:2,callback:c=>{alert("确认回调事件"),c()}})};return(c,l)=>(j(),i("div",null,[a("p",null,[s("模拟Confirm "),a("span",{class:"green",onClick:e},"试一试")])]))}},B={data(){return{}},methods:{alertOpen(h){this.$msg("删除成功",{icon:h})}}};function D(h,n,e,c,l,t){return j(),i("div",null,[a("p",null,[s("消息提示 成功 "),a("span",{class:"green",onClick:n[0]||(n[0]=o=>t.alertOpen(1))},"试一试")]),a("p",null,[s("消息提示 失败 "),a("span",{class:"green",onClick:n[1]||(n[1]=o=>t.alertOpen(2))},"试一试")]),a("p",null,[s("消息提示 提示 "),a("span",{class:"green",onClick:n[2]||(n[2]=o=>t.alertOpen(3))},"试一试")]),a("p",null,[s("消息提示 警告 "),a("span",{class:"green",onClick:n[3]||(n[3]=o=>t.alertOpen(4))},"试一试")])])}const f=C(B,[["render",D]]),k={class:"marked-body"},v=u('<h1 id="message-信息弹窗">Message 信息弹窗</h1><p>为方便使用，定义了<code>Dialog</code>,<code>Alert</code>,<code>Confirm</code>,<code>Msg</code>三种以适应不同场景，如果需要弹出较为复杂的内容，请使用 <code>Dialog</code>。可使用<code>inject</code>,<code>getCurrentInstance</code>和<code>Vue2</code>选项卡的方式，使用<code>this.$msg()</code>方式调用。同时定义了<code>clear</code>用于移除所有<code>message</code>提示</p><h3 id="alert">Alert</h3><p>使用<code>inject</code>注入方式调用</p>',4),O=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(`
      >`)]),s("模拟Alert 成功 "),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"green"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"alertOpen(1)"'),s(">")]),s("试一试"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`</p
    >
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(`
      >`)]),s("模拟Alert 失败 "),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"green"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"alertOpen(2)"'),s(">")]),s("试一试"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`</p
    >
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(`
      >`)]),s("模拟Alert 警告 "),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"green"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"alertOpen(3)"'),s(">")]),s("试一试"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`</p
    >
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { inject } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-attr"},"message"),s(": any = "),a("span",{class:"hljs-title function_"},"inject"),s("("),a("span",{class:"hljs-string"},"'Message'"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"alertOpen"),s(" = ("),a("span",{class:"hljs-params"},"type: string"),s(`) => {
    message.`),a("span",{class:"hljs-title function_"},"alert"),s("("),a("span",{class:"hljs-string"},"'这是alert的内容'"),s(", { "),a("span",{class:"hljs-attr"},"icon"),s(`: type })
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),y=a("h3",{id:"confirm"},"Confirm",-1),x=a("p",null,[s("使用"),a("code",null,"getCurrentInstance"),s("方式打开")],-1),$=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("模拟Confirm "),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"green"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"alertOpen"'),s(">")]),s("试一试"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { getCurrentInstance } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" instance = "),a("span",{class:"hljs-title function_"},"getCurrentInstance"),s(`()
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"alertOpen"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
    instance.`),a("span",{class:"hljs-property"},"proxy"),s(".$confirm("),a("span",{class:"hljs-string"},"'这是alert的内容'"),s(`, {
      `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
      `),a("span",{class:"hljs-attr"},"callback"),s(": "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"close"),s(") =>")]),s(` {
        `),a("span",{class:"hljs-title function_"},"alert"),s("("),a("span",{class:"hljs-string"},"'确认回调事件'"),s(`)
        `),a("span",{class:"hljs-title function_"},"close"),s(`()
      }
    })
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),w=a("h3",{id:"msg"},"Msg",-1),M=a("p",null,[a("code",null,"Vue2"),s("选项卡的方式，使用"),a("code",null,"this.$msg()"),s("打开")],-1),V=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("消息提示 成功 "),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"green"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"alertOpen(1)"'),s(">")]),s("试一试"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("消息提示 失败 "),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"green"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"alertOpen(2)"'),s(">")]),s("试一试"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("消息提示 提示 "),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"green"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"alertOpen(3)"'),s(">")]),s("试一试"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("消息提示 警告 "),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"green"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"alertOpen(4)"'),s(">")]),s("试一试"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"data"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"return"),s(` {}
    },
    `),a("span",{class:"hljs-attr"},"methods"),s(`: {
      `),a("span",{class:"hljs-title function_"},"alertOpen"),s("("),a("span",{class:"hljs-params"},"type"),s(`) {
        `),a("span",{class:"hljs-variable language_"},"this"),s(".$msg("),a("span",{class:"hljs-string"},"'删除成功'"),s(`, {
          `),a("span",{class:"hljs-attr"},"icon"),s(`: type
        })
      }
    }
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),b=a("h2",{id:"api"},"API",-1),I=a("p",null,[s("所有参数详见"),a("a",{href:"/#/dialog"},"Dialog")],-1),S={__name:"README",setup(h){return(n,e)=>(j(),i("div",k,[v,p(E(A),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cp%0A%20%20%20%20%20%20%3E%E6%A8%A1%E6%8B%9FAlert%20%E6%88%90%E5%8A%9F%20%3Cspan%20class%3D%22green%22%20%40click%3D%22alertOpen(1)%22%3E%E8%AF%95%E4%B8%80%E8%AF%95%3C%2Fspan%3E%3C%2Fp%0A%20%20%20%20%3E%0A%20%20%20%20%3Cp%0A%20%20%20%20%20%20%3E%E6%A8%A1%E6%8B%9FAlert%20%E5%A4%B1%E8%B4%A5%20%3Cspan%20class%3D%22green%22%20%40click%3D%22alertOpen(2)%22%3E%E8%AF%95%E4%B8%80%E8%AF%95%3C%2Fspan%3E%3C%2Fp%0A%20%20%20%20%3E%0A%20%20%20%20%3Cp%0A%20%20%20%20%20%20%3E%E6%A8%A1%E6%8B%9FAlert%20%E8%AD%A6%E5%91%8A%20%3Cspan%20class%3D%22green%22%20%40click%3D%22alertOpen(3)%22%3E%E8%AF%95%E4%B8%80%E8%AF%95%3C%2Fspan%3E%3C%2Fp%0A%20%20%20%20%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%20%20import%20%7B%20inject%20%7D%20from%20'vue'%0A%0A%20%20const%20message%3A%20any%20%3D%20inject('Message')%0A%20%20const%20alertOpen%20%3D%20(type%3A%20string)%20%3D%3E%20%7B%0A%20%20%20%20message.alert('%E8%BF%99%E6%98%AFalert%E7%9A%84%E5%86%85%E5%AE%B9'%2C%20%7B%20icon%3A%20type%20%7D)%0A%20%20%7D%0A%3C%2Fscript%3E%0A"},{code:r(()=>[O]),default:r(()=>[p(F)]),_:1}),y,x,p(E(A),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cp%3E%E6%A8%A1%E6%8B%9FConfirm%20%3Cspan%20class%3D%22green%22%20%40click%3D%22alertOpen%22%3E%E8%AF%95%E4%B8%80%E8%AF%95%3C%2Fspan%3E%3C%2Fp%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20getCurrentInstance%20%7D%20from%20'vue'%0A%0A%20%20const%20instance%20%3D%20getCurrentInstance()%0A%20%20const%20alertOpen%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20instance.proxy.%24confirm('%E8%BF%99%E6%98%AFalert%E7%9A%84%E5%86%85%E5%AE%B9'%2C%20%7B%0A%20%20%20%20%20%20icon%3A%202%2C%0A%20%20%20%20%20%20callback%3A%20(close)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20alert('%E7%A1%AE%E8%AE%A4%E5%9B%9E%E8%B0%83%E4%BA%8B%E4%BB%B6')%0A%20%20%20%20%20%20%20%20close()%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%0A%20%20%7D%0A%3C%2Fscript%3E%0A%0A"},{code:r(()=>[$]),default:r(()=>[p(_)]),_:1}),w,M,p(E(A),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cp%3E%E6%B6%88%E6%81%AF%E6%8F%90%E7%A4%BA%20%E6%88%90%E5%8A%9F%20%3Cspan%20class%3D%22green%22%20%40click%3D%22alertOpen(1)%22%3E%E8%AF%95%E4%B8%80%E8%AF%95%3C%2Fspan%3E%3C%2Fp%3E%0A%20%20%20%20%3Cp%3E%E6%B6%88%E6%81%AF%E6%8F%90%E7%A4%BA%20%E5%A4%B1%E8%B4%A5%20%3Cspan%20class%3D%22green%22%20%40click%3D%22alertOpen(2)%22%3E%E8%AF%95%E4%B8%80%E8%AF%95%3C%2Fspan%3E%3C%2Fp%3E%0A%20%20%20%20%3Cp%3E%E6%B6%88%E6%81%AF%E6%8F%90%E7%A4%BA%20%E6%8F%90%E7%A4%BA%20%3Cspan%20class%3D%22green%22%20%40click%3D%22alertOpen(3)%22%3E%E8%AF%95%E4%B8%80%E8%AF%95%3C%2Fspan%3E%3C%2Fp%3E%0A%20%20%20%20%3Cp%3E%E6%B6%88%E6%81%AF%E6%8F%90%E7%A4%BA%20%E8%AD%A6%E5%91%8A%20%3Cspan%20class%3D%22green%22%20%40click%3D%22alertOpen(4)%22%3E%E8%AF%95%E4%B8%80%E8%AF%95%3C%2Fspan%3E%3C%2Fp%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%3E%0A%20%20export%20default%20%7B%0A%20%20%20%20data()%20%7B%0A%20%20%20%20%20%20return%20%7B%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20methods%3A%20%7B%0A%20%20%20%20%20%20alertOpen(type)%20%7B%0A%20%20%20%20%20%20%20%20this.%24msg('%E5%88%A0%E9%99%A4%E6%88%90%E5%8A%9F'%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20icon%3A%20type%0A%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%3C%2Fscript%3E%0A%0A"},{code:r(()=>[V]),default:r(()=>[p(f)]),_:1}),b,I]))}};export{S as default};
