(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-736645a4"],{"21a1":function(e,a,t){},2880:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"submit-form"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"nome"}},[e._v("Nome")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.paciente.nome,expression:"paciente.nome"}],staticClass:"form-control",attrs:{type:"text",id:"nome",required:"",name:"nome",autocomplete:"off",autofocus:""},domProps:{value:e.paciente.nome},on:{input:function(a){a.target.composing||e.$set(e.paciente,"nome",a.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"email"}},[e._v("E-mail")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.paciente.email,expression:"paciente.email"}],staticClass:"form-control",attrs:{type:"email",id:"email",required:"",name:"email",autocomplete:"off"},domProps:{value:e.paciente.email},on:{input:function(a){a.target.composing||e.$set(e.paciente,"email",a.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"data"}},[e._v("Data de Internação")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.paciente.data_internacao,expression:"paciente.data_internacao"}],staticClass:"form-control",attrs:{type:"date",name:"data_internacao",id:"data_internacao",required:""},domProps:{value:e.paciente.data_internacao},on:{input:function(a){a.target.composing||e.$set(e.paciente,"data_internacao",a.target.value)}}})]),t("button",{staticClass:"btn btn-success",on:{click:e.inserirPaciente}},[e._v("Inserir paciente")])])},i=[],o=t("63d1"),c={name:"adicionarPaciente",data:function(){return{paciente:{id:"",nome:"",email:"",data_internacao:new Date}}},methods:{inserirPaciente:function(){var e=this,a={nome:this.paciente.nome,email:this.paciente.email,data_internacao:this.paciente.data_internacao};o["a"].criarPaciente(a).then((function(a){e.paciente.id=a.data.id,console.log(e.paciente),console.log("Paciente Incluso Com sucesso!")})).catch((function(e){console.log(e.messege)}))}}},s=c,r=(t("3818"),t("2877")),l=Object(r["a"])(s,n,i,!1,null,null,null);a["default"]=l.exports},3818:function(e,a,t){"use strict";var n=t("21a1"),i=t.n(n);i.a}}]);
//# sourceMappingURL=chunk-736645a4.a1c060f9.js.map