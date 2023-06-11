import{C as A}from"./codePreview-683280a5.js";import{h as c,r as h,o as j,a as D,w as n,b as l,_ as k,c as E,F as f,e as s,f as a,u as g,g as B}from"./index-4b83c618.js";/* empty css                                                                    */const b={__name:"README.md.Virtuala37616e7",setup(m){const t=c("");return(p,r)=>{const u=h("ak-input"),e=h("ak-form-item");return j(),D(e,{label:"title"},{default:n(()=>[l(u,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=o=>t.value=o)},null,8,["modelValue"])]),_:1})}}},y={setup(){const m=c(""),t=c(""),p=c([{type:"tips",msg:"获取焦点提示信息"},{type:"required",msg:"必填项"},{type:"number",msg:"只能输入数字"}]);return{value:m,value2:t,rules:p}}};function C(m,t,p,r,u,e){const o=h("ak-input"),d=h("ak-form-item");return j(),E(f,null,[l(d,{label:"title",rules:r.rules},{default:n(()=>[l(o,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=i=>r.value=i),placeholder:"输入时触发"},null,8,["modelValue"])]),_:1},8,["rules"]),l(d,{label:"title",rules:r.rules,trigger:"blur"},{default:n(()=>[l(o,{modelValue:r.value2,"onUpdate:modelValue":t[1]||(t[1]=i=>r.value2=i),placeholder:"失去焦点触发"},null,8,["modelValue"])]),_:1},8,["rules"])],64)}const F=k(y,[["render",C]]),w={__name:"README.md.Virtual3b2ec681",setup(m){const t=c(""),p=c(""),r=c([{type:"tips",msg:"获取焦点提示信息"},{type:"required",msg:"必填项"},{type:"number",msg:"只能输入数字"}]);return(u,e)=>{const o=h("ak-input"),d=h("ak-form-item");return j(),E(f,null,[l(d,{label:"title",verify:"mobile"},{default:n(()=>[l(o,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=i=>t.value=i),placeholder:"手机号验证"},null,8,["modelValue"])]),_:1}),l(d,{label:"title",rules:r.value,verify:"mobile"},{default:n(()=>[l(o,{modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=i=>p.value=i),placeholder:"手机号和必填验证"},null,8,["modelValue"])]),_:1},8,["rules"])],64)}}},V={__name:"README.md.Virtual730e068c",setup(m){const t=c(),p=c(""),r=c([{type:"required",msg:"年龄不能为空"},{type:"rule",msg:"年龄必须大于1岁，且不能超过120岁",rule:"/^(?:[1-9][0-9]?|1[01][0-9]|120)$/"}]),u=()=>{t.value.validate().then(e=>{console.log(e)}).catch(e=>{console.log(e)})};return(e,o)=>{const d=h("ak-input"),i=h("ak-form-item"),_=h("ak-button");return j(),E(f,null,[l(i,{label:"age",rules:r.value,ref_key:"formItemEl",ref:t},{default:n(()=>[l(d,{modelValue:p.value,"onUpdate:modelValue":o[0]||(o[0]=v=>p.value=v),placeholder:"请输入年龄"},null,8,["modelValue"])]),_:1},8,["rules"]),l(_,{onClick:u},{default:n(()=>[s("submit")]),_:1})],64)}}},x={__name:"README.md.Virtual9ad72475",setup(m){const t=c(""),p=c(""),r=c([{type:"required",msg:"密码不能为空"},{type:"fn",msg:"两次输入的密码不一致",validator:u=>u===t.value}]);return(u,e)=>{const o=h("ak-input"),d=h("ak-form-item");return j(),E(f,null,[l(d,{label:"password",verify:"required"},{default:n(()=>[l(o,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=i=>t.value=i),placeholder:"请输入密码"},null,8,["modelValue"])]),_:1}),l(d,{label:"password",rules:r.value},{default:n(()=>[l(o,{modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=i=>p.value=i),placeholder:"请再次输入密码"},null,8,["modelValue"])]),_:1},8,["rules"])],64)}}},q={__name:"README.md.Virtualcb2d9f75",setup(m){const t=c({value:"abc"}),p=c({value:"112",options:[{label:"选项1"}],placeholder:"请选择"});return(r,u)=>{const e=h("ak-form-item");return j(),E("div",null,[l(e,{label:"input",type:"input",data:t.value},null,8,["data"]),l(e,{label:"select",type:"select",data:p.value},null,8,["data"])])}}},I=a("br",null,null,-1),P=a("br",null,null,-1),M={__name:"README.md.Virtual74e1eb99",setup(m){const t=c(),p=c({value:"abc"}),r=c({value:"112",options:[{label:"选项1"}],placeholder:"请选择"});return setTimeout(()=>{t.value="123"},1e3),(u,e)=>{const o=h("ak-field");return j(),E("div",null,[l(o,{type:"input",data:p.value,modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=d=>t.value=d)},null,8,["data","modelValue"]),I,P,l(o,{type:"select",data:r.value},null,8,["data"])])}}},U={class:"marked-body"},$=a("h1",{id:"formitem-表单集合"},"FormItem 表单集合",-1),R=a("p",null,"强大的校验功能，使用简单快捷",-1),T=a("h3",{id:"基本使用"},"基本使用",-1),N=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"title"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form-item"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),S=a("h3",{id:"校验"},"校验",-1),L=a("p",null,[s("使用"),a("code",null,"rules"),s("规则校验")],-1),O=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"title"'),s(),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},'"rules"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"输入时触发"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"title"'),s(),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},'"rules"'),s(),a("span",{class:"hljs-attr"},"trigger"),s("="),a("span",{class:"hljs-string"},'"blur"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value2"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"失去焦点触发"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form-item"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" {ref} "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
  `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
    `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
    `),a("span",{class:"hljs-keyword"},"const"),s(" value2 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
    `),a("span",{class:"hljs-keyword"},"const"),s(" rules = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
      {`),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'tips'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'获取焦点提示信息'"),s(`},
      {`),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'required'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'必填项'"),s(`},
      {`),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'number'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'只能输入数字'"),s(`}
    ])
    `),a("span",{class:"hljs-keyword"},"return"),s(` {
      value,
      value2,
      rules
    }
  }
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),z=a("h3",{id:"快速校验"},"快速校验",-1),W=a("p",null,[s("对于大量的表单验证不需要精确提示时，如验证为空时统一提示为必填字段，可通过设置"),a("code",null,"verify"),s("，多个用逗号隔开，也可同时和"),a("code",null,"rules"),s("规则校验一起使用")],-1),G=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"title"'),s(),a("span",{class:"hljs-attr"},"verify"),s("="),a("span",{class:"hljs-string"},'"mobile"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"手机号验证"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"title"'),s(),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},'"rules"'),s(),a("span",{class:"hljs-attr"},"verify"),s("="),a("span",{class:"hljs-string"},'"mobile"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value2"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"手机号和必填验证"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form-item"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" value2 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" rules = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
    { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'tips'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'获取焦点提示信息'"),s(` },
    { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'required'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'必填项'"),s(` },
    { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'number'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'只能输入数字'"),s(` }
  ])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`


`)])],-1),H=a("h3",{id:"自定义验证规则"},"自定义验证规则",-1),J=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"age"'),s(),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},'"rules"'),s(),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"formItemEl"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入年龄"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"submit"'),s(">")]),s("submit"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" formItemEl = "),a("span",{class:"hljs-title function_"},"ref"),s(`()
  `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" rules = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
    { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'required'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'年龄不能为空'"),s(` },
    {
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'rule'"),s(`,
      `),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'年龄必须大于1岁，且不能超过120岁'"),s(`,
      `),a("span",{class:"hljs-attr"},"rule"),s(": "),a("span",{class:"hljs-string"},"'/^(?:[1-9][0-9]?|1[01][0-9]|120)$/'"),s(`
    }
  ])
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"submit"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
    formItemEl.`),a("span",{class:"hljs-property"},"value"),s(`
      .`),a("span",{class:"hljs-title function_"},"validate"),s(`()
      .`),a("span",{class:"hljs-title function_"},"then"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"res"),s(") =>")]),s(` {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(res)
      })
      .`),a("span",{class:"hljs-title function_"},"catch"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"res"),s(") =>")]),s(` {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(res)
      })
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),K=a("h3",{id:"回调验证"},"回调验证",-1),Q=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"password"'),s(),a("span",{class:"hljs-attr"},"verify"),s("="),a("span",{class:"hljs-string"},'"required"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入密码"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"password"'),s(),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},'"rules"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value2"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请再次输入密码"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form-item"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" value2 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" rules = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
    { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'required'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'密码不能为空'"),s(` },
    {
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'fn'"),s(`,
      `),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'两次输入的密码不一致'"),s(`,
      `),a("span",{class:"hljs-attr"},"validator"),s(": "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"val"),s(") =>")]),s(` {
        `),a("span",{class:"hljs-keyword"},"return"),s(" val === value."),a("span",{class:"hljs-property"},"value"),s(`
      }
    }
  ])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),X=a("h3",{id:"快速输入常见组件类型"},"快速输入常见组件类型",-1),Y=a("p",null,[s("支持类型 "),a("code",null,"'input'、'radio'、'checkbox'、'datePicker'、'select'、'switch'、'textarea'、'timeSelect'、'timePicker'")],-1),Z=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"input"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"input"'),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"inputData"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"select"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"select"'),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"selectData"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" inputData = "),a("span",{class:"hljs-title function_"},"ref"),s("({ "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'abc'"),s(` })
  `),a("span",{class:"hljs-keyword"},"const"),s(" selectData = "),a("span",{class:"hljs-title function_"},"ref"),s("({ "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'112'"),s(", "),a("span",{class:"hljs-attr"},"options"),s(": [{ "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项1'"),s(" }], "),a("span",{class:"hljs-attr"},"placeholder"),s(":"),a("span",{class:"hljs-string"},"'请选择'"),s(` })
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),ss=a("h3",{id:"可单独使用field"},[s("可单独使用"),a("code",null,"Field")],-1),as=a("p",null,"可使用data.value对控件设置值，也可以是v-model(优先)",-1),ls=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-field"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"input"'),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"inputData"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value1"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-field"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"select"'),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"selectData"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" value1 = "),a("span",{class:"hljs-title function_"},"ref"),s(`()
  `),a("span",{class:"hljs-keyword"},"const"),s(" inputData = "),a("span",{class:"hljs-title function_"},"ref"),s("({ "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'abc'"),s(` })
  `),a("span",{class:"hljs-keyword"},"const"),s(" selectData = "),a("span",{class:"hljs-title function_"},"ref"),s(`({
    `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'112'"),s(`,
    `),a("span",{class:"hljs-attr"},"options"),s(": [{ "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项1'"),s(` }],
    `),a("span",{class:"hljs-attr"},"placeholder"),s(": "),a("span",{class:"hljs-string"},"'请选择'"),s(`
  })
  `),a("span",{class:"hljs-comment"},"// 模拟延时设值"),s(`
  `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
    value1.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-string"},"'123'"),s(`
  }, `),a("span",{class:"hljs-number"},"1000"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),ts=B('<h2 id="api">API</h2><h3 id="formitem-props">FormItem Props</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>label</td><td>string</td><td>显示的标签名</td></tr><tr><td>labelVisible</td><td>boolean/false</td><td>隐藏label</td></tr><tr><td>prop</td><td>string</td><td>表单校验时关联表单的校验规则</td></tr><tr><td>required</td><td>boolean/true</td><td>是否根据验证规则自动生成必填样式名</td></tr><tr><td>verify</td><td>string</td><td>快速验证，支持required, mobile, tel, mail, digits, number,phone 多个用逗号隔开</td></tr><tr><td>rules</td><td>array</td><td>校验规则</td></tr><tr><td>showMessage</td><td>boolean/true</td><td>显示错误提示，在form使用时，优先使用form的设置</td></tr><tr><td>trigger</td><td>string/change</td><td>change和blur两种，在form使用时，优先使用form的设置</td></tr><tr><td>labelWidth</td><td>string</td><td>label的宽度</td></tr><tr><td>size</td><td>string</td><td>用于控制该表单内组件的尺寸,支持 <code>large</code>、<code>normal</code>、<code>small</code>、<code>mini</code> 四种尺寸，默认为 <code>normal</code></td></tr><tr><td>error</td><td>string</td><td>表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息</td></tr><tr><td>type</td><td>string</td><td>可快速输出控件类型，可选<code>input、radio、checkbox、datePicker、select、switch、textarea、timeSelect、timePicker</code></td></tr><tr><td>data</td><td>Object</td><td>仅在type不为空时，对应当前组件的props所有参数</td></tr><tr><td>v-model</td><td>any</td><td>仅在type不为空时，当前控件的值</td></tr></tbody></table><h3 id="formitem-rules-验证规则">FormItem Rules 验证规则</h3><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>required</td><td>为空</td></tr><tr><td>maxLength</td><td>最大字符</td></tr><tr><td>minLength</td><td>最小字符</td></tr><tr><td>mobile</td><td>手机号格式</td></tr><tr><td>tel</td><td>固话</td></tr><tr><td>phone</td><td>固话或手机</td></tr><tr><td>mail</td><td>邮箱格式</td></tr><tr><td>digits</td><td>正整数</td></tr><tr><td>number</td><td>数字</td></tr><tr><td>tips</td><td>获得焦点且值为空时显示输入提示</td></tr><tr><td>rule</td><td>自定义验证规则</td></tr><tr><td>fn</td><td>回调验证</td></tr></tbody></table><h3 id="formitem-methods">FormItem Methods</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>validate</td><td></td><td>对单个表单项进行校验的方法，Promise返回验证结果</td></tr><tr><td>clearTips</td><td></td><td>用于清空验证提示信息，恢复初始状态</td></tr></tbody></table><h3 id="field-props">Field Props</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>type</td><td>string</td><td>可快速输出控件类型，可选<code>input、radio、checkbox、datePicker、select、switch、textarea、timeSelect、timePicker</code></td></tr><tr><td>data</td><td>Object</td><td>对应当前组件的props所有参数</td></tr><tr><td>v-model</td><td>any</td><td>当前控件的值</td></tr></tbody></table>',9),cs={__name:"README",setup(m){return(t,p)=>(j(),E("div",U,[$,R,T,l(g(A),{code:"%3Ctemplate%3E%0A%20%20%3Cak-form-item%20label%3D%22title%22%3E%0A%20%20%20%20%3Cak-input%20v-model%3D%22value%22%20%2F%3E%0A%20%20%3C%2Fak-form-item%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%0A%20%20const%20value%20%3D%20ref('')%0A%3C%2Fscript%3E%0A"},{code:n(()=>[N]),default:n(()=>[l(b)]),_:1}),S,L,l(g(A),{code:"%3Ctemplate%3E%0A%20%20%3Cak-form-item%20label%3D%22title%22%20%3Arules%3D%22rules%22%3E%0A%20%20%20%20%3Cak-input%20v-model%3D%22value%22%20placeholder%3D%22%E8%BE%93%E5%85%A5%E6%97%B6%E8%A7%A6%E5%8F%91%22%20%2F%3E%0A%20%20%3C%2Fak-form-item%3E%0A%20%20%3Cak-form-item%20label%3D%22title%22%20%3Arules%3D%22rules%22%20trigger%3D%22blur%22%3E%0A%20%20%20%20%3Cak-input%20v-model%3D%22value2%22%20placeholder%3D%22%E5%A4%B1%E5%8E%BB%E7%84%A6%E7%82%B9%E8%A7%A6%E5%8F%91%22%20%2F%3E%0A%20%20%3C%2Fak-form-item%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%3E%0Aimport%20%7Bref%7D%20from%20'vue'%0A%0Aexport%20default%20%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20value%20%3D%20ref('')%0A%20%20%20%20const%20value2%20%3D%20ref('')%0A%20%20%20%20const%20rules%20%3D%20ref(%5B%0A%20%20%20%20%20%20%7Btype%3A%20'tips'%2C%20msg%3A%20'%E8%8E%B7%E5%8F%96%E7%84%A6%E7%82%B9%E6%8F%90%E7%A4%BA%E4%BF%A1%E6%81%AF'%7D%2C%0A%20%20%20%20%20%20%7Btype%3A%20'required'%2C%20msg%3A%20'%E5%BF%85%E5%A1%AB%E9%A1%B9'%7D%2C%0A%20%20%20%20%20%20%7Btype%3A%20'number'%2C%20msg%3A%20'%E5%8F%AA%E8%83%BD%E8%BE%93%E5%85%A5%E6%95%B0%E5%AD%97'%7D%0A%20%20%20%20%5D)%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%2C%0A%20%20%20%20%20%20value2%2C%0A%20%20%20%20%20%20rules%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%3C%2Fscript%3E%0A"},{code:n(()=>[O]),default:n(()=>[l(F)]),_:1}),z,W,l(g(A),{code:"%3Ctemplate%3E%0A%20%20%3Cak-form-item%20label%3D%22title%22%20verify%3D%22mobile%22%3E%0A%20%20%20%20%3Cak-input%20v-model%3D%22value%22%20placeholder%3D%22%E6%89%8B%E6%9C%BA%E5%8F%B7%E9%AA%8C%E8%AF%81%22%20%2F%3E%0A%20%20%3C%2Fak-form-item%3E%0A%20%20%3Cak-form-item%20label%3D%22title%22%20%3Arules%3D%22rules%22%20verify%3D%22mobile%22%3E%0A%20%20%20%20%3Cak-input%20v-model%3D%22value2%22%20placeholder%3D%22%E6%89%8B%E6%9C%BA%E5%8F%B7%E5%92%8C%E5%BF%85%E5%A1%AB%E9%AA%8C%E8%AF%81%22%20%2F%3E%0A%20%20%3C%2Fak-form-item%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%0A%20%20const%20value%20%3D%20ref('')%0A%20%20const%20value2%20%3D%20ref('')%0A%20%20const%20rules%20%3D%20ref(%5B%0A%20%20%20%20%7B%20type%3A%20'tips'%2C%20msg%3A%20'%E8%8E%B7%E5%8F%96%E7%84%A6%E7%82%B9%E6%8F%90%E7%A4%BA%E4%BF%A1%E6%81%AF'%20%7D%2C%0A%20%20%20%20%7B%20type%3A%20'required'%2C%20msg%3A%20'%E5%BF%85%E5%A1%AB%E9%A1%B9'%20%7D%2C%0A%20%20%20%20%7B%20type%3A%20'number'%2C%20msg%3A%20'%E5%8F%AA%E8%83%BD%E8%BE%93%E5%85%A5%E6%95%B0%E5%AD%97'%20%7D%0A%20%20%5D)%0A%3C%2Fscript%3E%0A%0A%0A"},{code:n(()=>[G]),default:n(()=>[l(w)]),_:1}),H,l(g(A),{code:"%3Ctemplate%3E%0A%20%20%3Cak-form-item%20label%3D%22age%22%20%3Arules%3D%22rules%22%20ref%3D%22formItemEl%22%3E%0A%20%20%20%20%3Cak-input%20v-model%3D%22value%22%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%E5%B9%B4%E9%BE%84%22%20%2F%3E%0A%20%20%3C%2Fak-form-item%3E%0A%20%20%3Cak-button%20%40click%3D%22submit%22%3Esubmit%3C%2Fak-button%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%0A%20%20const%20formItemEl%20%3D%20ref()%0A%20%20const%20value%20%3D%20ref('')%0A%20%20const%20rules%20%3D%20ref(%5B%0A%20%20%20%20%7B%20type%3A%20'required'%2C%20msg%3A%20'%E5%B9%B4%E9%BE%84%E4%B8%8D%E8%83%BD%E4%B8%BA%E7%A9%BA'%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20type%3A%20'rule'%2C%0A%20%20%20%20%20%20msg%3A%20'%E5%B9%B4%E9%BE%84%E5%BF%85%E9%A1%BB%E5%A4%A7%E4%BA%8E1%E5%B2%81%EF%BC%8C%E4%B8%94%E4%B8%8D%E8%83%BD%E8%B6%85%E8%BF%87120%E5%B2%81'%2C%0A%20%20%20%20%20%20rule%3A%20'%2F%5E(%3F%3A%5B1-9%5D%5B0-9%5D%3F%7C1%5B01%5D%5B0-9%5D%7C120)%24%2F'%0A%20%20%20%20%7D%0A%20%20%5D)%0A%20%20const%20submit%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20formItemEl.value%0A%20%20%20%20%20%20.validate()%0A%20%20%20%20%20%20.then((res)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20console.log(res)%0A%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20.catch((res)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20console.log(res)%0A%20%20%20%20%20%20%7D)%0A%20%20%7D%0A%3C%2Fscript%3E%0A"},{code:n(()=>[J]),default:n(()=>[l(V)]),_:1}),K,l(g(A),{code:"%3Ctemplate%3E%0A%20%20%3Cak-form-item%20label%3D%22password%22%20verify%3D%22required%22%3E%0A%20%20%20%20%3Cak-input%20v-model%3D%22value%22%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%E5%AF%86%E7%A0%81%22%20%2F%3E%0A%20%20%3C%2Fak-form-item%3E%0A%20%20%3Cak-form-item%20label%3D%22password%22%20%3Arules%3D%22rules%22%3E%0A%20%20%20%20%3Cak-input%20v-model%3D%22value2%22%20placeholder%3D%22%E8%AF%B7%E5%86%8D%E6%AC%A1%E8%BE%93%E5%85%A5%E5%AF%86%E7%A0%81%22%20%2F%3E%0A%20%20%3C%2Fak-form-item%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%0A%20%20const%20value%20%3D%20ref('')%0A%20%20const%20value2%20%3D%20ref('')%0A%20%20const%20rules%20%3D%20ref(%5B%0A%20%20%20%20%7B%20type%3A%20'required'%2C%20msg%3A%20'%E5%AF%86%E7%A0%81%E4%B8%8D%E8%83%BD%E4%B8%BA%E7%A9%BA'%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20type%3A%20'fn'%2C%0A%20%20%20%20%20%20msg%3A%20'%E4%B8%A4%E6%AC%A1%E8%BE%93%E5%85%A5%E7%9A%84%E5%AF%86%E7%A0%81%E4%B8%8D%E4%B8%80%E8%87%B4'%2C%0A%20%20%20%20%20%20validator%3A%20(val)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20return%20val%20%3D%3D%3D%20value.value%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%5D)%0A%3C%2Fscript%3E%0A"},{code:n(()=>[Q]),default:n(()=>[l(x)]),_:1}),X,Y,l(g(A),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cak-form-item%20label%3D%22input%22%20type%3D%22input%22%20%3Adata%3D%22inputData%22%20%2F%3E%0A%20%20%20%20%3Cak-form-item%20label%3D%22select%22%20type%3D%22select%22%20%3Adata%3D%22selectData%22%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%20%20const%20inputData%20%3D%20ref(%7B%20value%3A%20'abc'%20%7D)%0A%20%20const%20selectData%20%3D%20ref(%7B%20value%3A%20'112'%2C%20options%3A%20%5B%7B%20label%3A%20'%E9%80%89%E9%A1%B91'%20%7D%5D%2C%20placeholder%3A'%E8%AF%B7%E9%80%89%E6%8B%A9'%20%7D)%0A%3C%2Fscript%3E%0A"},{code:n(()=>[Z]),default:n(()=>[l(q)]),_:1}),ss,as,l(g(A),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cak-field%20type%3D%22input%22%20%3Adata%3D%22inputData%22%20v-model%3D%22value1%22%20%2F%3E%0A%20%20%20%20%3Cbr%3E%3Cbr%3E%0A%20%20%20%20%3Cak-field%20type%3D%22select%22%20%3Adata%3D%22selectData%22%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%0A%20%20const%20value1%20%3D%20ref()%0A%20%20const%20inputData%20%3D%20ref(%7B%20value%3A%20'abc'%20%7D)%0A%20%20const%20selectData%20%3D%20ref(%7B%0A%20%20%20%20value%3A%20'112'%2C%0A%20%20%20%20options%3A%20%5B%7B%20label%3A%20'%E9%80%89%E9%A1%B91'%20%7D%5D%2C%0A%20%20%20%20placeholder%3A%20'%E8%AF%B7%E9%80%89%E6%8B%A9'%0A%20%20%7D)%0A%20%20%2F%2F%20%E6%A8%A1%E6%8B%9F%E5%BB%B6%E6%97%B6%E8%AE%BE%E5%80%BC%0A%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20value1.value%20%3D%20'123'%0A%20%20%7D%2C%201000)%0A%3C%2Fscript%3E%0A"},{code:n(()=>[ls]),default:n(()=>[l(M)]),_:1}),ts]))}};export{cs as default};
