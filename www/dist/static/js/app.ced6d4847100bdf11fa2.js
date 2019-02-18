webpackJsonp([1],{"1qhj":function(t,r){},"5TgX":function(t,r){},"7cCB":function(t,r){},"9M+g":function(t,r){},GZyb:function(t,r){},Jmt5:function(t,r){},NHnr:function(t,r,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var e=i("7+uW"),o={name:"Criterio",props:{criteriStart:{type:Array,required:!0}},data:function(){return{nameCriterio:null,pesoCriterio:null,tipoCriterio:null,valoreCriterio:null,error:null}},mounted:function(){},watch:{nameCriterio:function(t,r){console.log("criteriStart",t,this.criteriStart),this.pesoCriterio=this.criteriStart.find(function(r){return r.nameCriterio===t}).pesoCriterio,this.tipoCriterio=this.criteriStart.find(function(r){return r.nameCriterio===t}).tipoCriterio}},methods:{submitCriterio:function(){this.nameCriterio&&this.valoreCriterio?(this.$emit("add-criterio",{nameCriterio:this.nameCriterio,valoreCriterio:this.valoreCriterio,pesoCriterio:this.pesoCriterio,tipoCriterio:this.tipoCriterio}),this.nameCriterio=null,this.valoreCriterio=null,this.pesoCriterio=null,this.tipoCriterio=null,this.error&&(this.error=null)):this.error="Compilare tutti i campi per l'inserimento del criterio!"}}},s={render:function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("div",[i("form",{on:{submit:function(r){return r.preventDefault(),t.submitCriterio(r)}}},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-4 col-sm-6 col-6 mt-4"},[t._m(0),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.nameCriterio,expression:"nameCriterio"}],staticClass:"form-control",attrs:{id:"nameCriterio"},on:{change:function(r){var i=Array.prototype.filter.call(r.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.nameCriterio=r.target.multiple?i:i[0]}}},t._l(t.criteriStart,function(r,e){return i("option",{key:e},[t._v(t._s(r.nameCriterio))])}),0)]),t._v(" "),i("div",{staticClass:"col-lg-2 col-sm-6 col-6 mt-4"},[t._m(1),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.valoreCriterio,expression:"valoreCriterio"}],staticClass:"form-control",attrs:{id:"valoreCriterio",type:"number",step:"0.01"},domProps:{value:t.valoreCriterio},on:{input:function(r){r.target.composing||(t.valoreCriterio=r.target.value)}}})]),t._v(" "),i("div",{staticClass:"col-lg-2 col-sm-6 col-4 mt-4"},[t._m(2),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.pesoCriterio,expression:"pesoCriterio"}],staticClass:"form-control",attrs:{id:"pesoCriterio",type:"number",step:"0.01",min:"0",max:"1"},domProps:{value:t.pesoCriterio},on:{input:function(r){r.target.composing||(t.pesoCriterio=r.target.value)}}})]),t._v(" "),i("div",{staticClass:"col-lg-2 col-sm-6 col-4 mt-4"},[t._m(3),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.tipoCriterio,expression:"tipoCriterio"}],staticClass:"form-control",attrs:{id:"tipoCriterioProject"},on:{change:function(r){var i=Array.prototype.filter.call(r.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.tipoCriterio=r.target.multiple?i:i[0]}}},[i("option",[t._v("min")]),t._v(" "),i("option",[t._v("max")])])]),t._v(" "),t._m(4)])])]),t._v(" "),i("br"),t._v(" "),i("strong",[i("p",{staticClass:"mt-2"},[t._v(t._s(t.error))])])])},staticRenderFns:[function(){var t=this.$createElement,r=this._self._c||t;return r("label",{attrs:{for:"nameCriterio"}},[r("strong",[this._v("Criterio")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("label",{staticClass:"text-success",attrs:{for:"valoreCriterio"}},[r("strong",[this._v("Valore")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("label",{staticClass:"text-primary",attrs:{for:"pesoCriterio"}},[r("strong",[this._v("Peso")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("label",{staticClass:"text-danger",attrs:{for:"tipoCriterioProject"}},[r("strong",[this._v("Tipologia")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"col-lg-2 col-4 mt-4"},[r("label",{attrs:{for:"tipoCriterioProject"}},[r("strong",[this._v("Inserisci")])]),this._v(" "),r("br"),this._v(" "),r("button",{staticClass:"btn btn-sm btn-success",attrs:{type:"submit"}},[this._v("+")])])}]};var n={name:"Project",components:{Criterio:i("VU/8")(o,s,!1,function(t){i("5TgX")},null,null).exports},props:{projects:{type:Array,required:!0},criteriStart:{type:Array,required:!0}},data:function(){return{nome:null,error:null,criteri:[]}},methods:{submitProject:function(){this.nome&&this.criteri.length>0?(this.$emit("add-project",{nome:this.nome,criteri:this.criteri}),this.nome=null,this.criteri=[],this.error&&(this.error=null)):this.error="Inserire il nome del progetto e almeno un criterio!"},addNewCriterio:function(t){return console.log(t),this.criteri.push(t)},removeCriterio:function(t){return this.criteri.splice(this.criteri.indexOf(t),1)}}},a={render:function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("div",[t.error?i("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[i("span",[t._v(t._s(t.error))])]):t._e(),t._v(" "),i("form",{staticClass:"mt-2 mb-2",on:{submit:function(r){return r.preventDefault(),t.submitProject(r)}}},[i("div",{staticClass:"col-12"},[t._m(0),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.nome,expression:"nome"}],staticClass:"form-control",attrs:{id:"nameProject",type:"text"},domProps:{value:t.nome},on:{input:function(r){r.target.composing||(t.nome=r.target.value)}}})]),t._v(" "),i("criterio",{attrs:{criteriStart:t.criteriStart},on:{"add-criterio":t.addNewCriterio}}),t._v(" "),i("ul",{staticClass:"list-group list-group-flush"},t._l(t.criteri,function(r,e){return i("li",{key:e,staticClass:"list-group-item",attrs:{criterio:r}},[t._v("\n        "+t._s(r.nameCriterio)+"\n         \n        "),i("span",{staticClass:"badge badge-pill badge-success"},[t._v(t._s(r.valoreCriterio))]),t._v(" \n        "),i("span",{staticClass:"badge badge-pill badge-primary"},[t._v(t._s(r.pesoCriterio))]),t._v(" \n        "),i("span",{staticClass:"badge badge-pill badge-danger"},[t._v(t._s(r.tipoCriterio))]),t._v(" \n\n        "),i("button",{staticClass:"close no-outline",attrs:{type:"button"},on:{click:function(i){return t.removeCriterio(r)}}},[i("span",[t._v("×")])])])}),0),t._v(" "),i("button",{staticClass:"btn btn-sm btn-danger mt-4",attrs:{type:"submit"}},[t._v("Inserisci Progetto")])],1)])},staticRenderFns:[function(){var t=this.$createElement,r=this._self._c||t;return r("label",{attrs:{for:"nameProject"}},[r("strong",[this._v("Nome Progetto")])])}]};var l=i("VU/8")(n,a,!1,function(t){i("XBtn")},null,null).exports,c={name:"ProjectCard",props:{projects:{type:Array,required:!0}},methods:{removeProject:function(t){this.$emit("remove-project",t)}}},u={render:function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("div",{staticClass:"row justify-content-center"},t._l(t.projects,function(r,e){return i("div",{key:e,staticClass:"mx-2 my-2",staticStyle:{float:"left"},attrs:{project:r}},[i("div",{staticClass:"card bg-danger",staticStyle:{width:"18rem",border:"1px solid black"}},[i("div",{staticClass:"card-header text-white"},[i("strong",[t._v(t._s(r.nome))]),t._v(" "),i("button",{staticClass:"close no-outline",attrs:{type:"button"},on:{click:function(i){return t.removeProject(r)}}},[i("span",[t._v("×")])])]),t._v(" "),i("ul",{staticClass:"list-group list-group-flush"},t._l(r.criteri,function(r,e){return i("li",{key:e,staticClass:"list-group-item",staticStyle:{border:"1px solid black"},attrs:{criterio:r}},[t._v("\n          "+t._s(r.nameCriterio)+"\n           \n          "),i("span",{staticClass:"badge badge-pill badge-success"},[t._v(t._s(r.valoreCriterio))]),t._v(" \n          "),i("span",{staticClass:"badge badge-pill badge-primary"},[t._v(t._s(r.pesoCriterio))]),t._v(" \n          "),i("span",{staticClass:"badge badge-pill badge-danger"},[t._v(t._s(r.tipoCriterio))])])}),0)])])}),0)},staticRenderFns:[]};var m=i("VU/8")(c,u,!1,function(t){i("at9L")},null,null).exports,v={name:"Ranking",props:{ranking:{type:Array,required:!0}},data:function(){return{sort:"valore",direction:!0,fields:[{key:"index",label:"#",tdClass:"font-weight-bold"},{key:"progetto",sortable:!1},{key:"valore",sortable:!1}]}},methods:{svuotaRanking:function(){this.$emit("svuota-ranking")}}},C={render:function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("div",[t.ranking.length>0?i("b-table",{staticClass:"myTable",attrs:{items:t.ranking,fields:t.fields,"sort-by":t.sort,"sort-desc":t.direction},scopedSlots:t._u([{key:"index",fn:function(r){return[t._v(t._s(r.index+1))]}}])}):t._e(),t._v(" "),t.ranking.length>0?i("button",{staticClass:"btn btn-sm btn-outline-danger mt-2 mb-2",attrs:{type:"submit"},on:{click:t.svuotaRanking}},[i("span",{attrs:{role:"status","aria-hidden":"true"}}),t._v(" Pulisci\n  ")]):t._e()],1)},staticRenderFns:[]};var p=i("VU/8")(v,C,!1,function(t){i("GZyb")},null,null).exports,d={render:function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("div",[i("form",{on:{submit:function(r){return r.preventDefault(),t.submitCriterio(r)}}},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-6 col-sm-6 col-6 mt-4"},[t._m(0),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.nameCriterio,expression:"nameCriterio"}],staticClass:"form-control",attrs:{id:"nameCriterio",type:"text"},domProps:{value:t.nameCriterio},on:{input:function(r){r.target.composing||(t.nameCriterio=r.target.value)}}})]),t._v(" "),i("div",{staticClass:"col-lg-2 col-sm-12 col-6 mt-4"},[t._m(1),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.pesoCriterio,expression:"pesoCriterio"}],staticClass:"form-control",attrs:{id:"pesoCriterio",type:"number",step:"0.01",min:"0",max:"1"},domProps:{value:t.pesoCriterio},on:{input:function(r){r.target.composing||(t.pesoCriterio=r.target.value)}}})]),t._v(" "),i("div",{staticClass:"col-lg-2 col-sm-6 col-6 mt-4"},[t._m(2),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.tipoCriterio,expression:"tipoCriterio"}],staticClass:"form-control",attrs:{id:"tipoCriterioProject"},on:{change:function(r){var i=Array.prototype.filter.call(r.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.tipoCriterio=r.target.multiple?i:i[0]}}},[i("option",[t._v("min")]),t._v(" "),i("option",[t._v("max")])])]),t._v(" "),t._m(3)])])]),t._v(" "),i("br"),t._v(" "),i("strong",[i("p",{staticClass:"mt-2"},[t._v(t._s(t.error))])])])},staticRenderFns:[function(){var t=this.$createElement,r=this._self._c||t;return r("label",{attrs:{for:"nameCriterio"}},[r("strong",[this._v("Criterio")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("label",{staticClass:"text-primary",attrs:{for:"pesoCriterio"}},[r("strong",[this._v("Peso")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("label",{staticClass:"text-danger",attrs:{for:"tipoCriterioProject"}},[r("strong",[this._v("Tipologia")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"col-lg-2 col-6 mt-4"},[r("label",{attrs:{for:"tipoCriterioProject"}},[r("strong",[this._v("Inserisci")])]),this._v(" "),r("br"),this._v(" "),r("button",{staticClass:"btn btn-sm btn-success",attrs:{type:"submit"}},[this._v("+")])])}]};var _=i("VU/8")({name:"Criterio",data:function(){return{nameCriterio:null,pesoCriterio:null,tipoCriterio:null,error:null}},methods:{submitCriterio:function(){this.nameCriterio&&this.tipoCriterio&&this.pesoCriterio?(this.$emit("add-criterio-vector",{nameCriterio:this.nameCriterio,pesoCriterio:this.pesoCriterio,tipoCriterio:this.tipoCriterio}),this.nameCriterio=null,this.pesoCriterio=null,this.tipoCriterio=null,this.error&&(this.error=null)):this.error="Compilare tutti i campi per proseguire!!"}}},d,!1,function(t){i("1qhj")},null,null).exports,h=i("QttI"),f=i.n(h);var g={name:"app",data:function(){return{criteriStart:[],mostra:!1,mostraCLassifica:!1,mostraInserimentoCriteri:!1,mostraInserimentoProgetti:!1,ranking:[],projects:[{nome:"Progetto 1",criteri:[{nameCriterio:"Criterio 1",valoreCriterio:6,pesoCriterio:.3,tipoCriterio:"min"},{nameCriterio:"Criterio 2",valoreCriterio:5,pesoCriterio:.3,tipoCriterio:"min"},{nameCriterio:"Criterio 3",valoreCriterio:6,pesoCriterio:.4,tipoCriterio:"max"}]},{nome:"Progetto 2",criteri:[{nameCriterio:"Criterio 1",valoreCriterio:7,pesoCriterio:.3,tipoCriterio:"min"},{nameCriterio:"Criterio 2",valoreCriterio:5,pesoCriterio:.3,tipoCriterio:"min"},{nameCriterio:"Criterio 3",valoreCriterio:4,pesoCriterio:.4,tipoCriterio:"max"}]},{nome:"Progetto 3",criteri:[{nameCriterio:"Criterio 1",valoreCriterio:6,pesoCriterio:.3,tipoCriterio:"min"},{nameCriterio:"Criterio 2",valoreCriterio:5,pesoCriterio:.3,tipoCriterio:"min"},{nameCriterio:"Criterio 3",valoreCriterio:4,pesoCriterio:.4,tipoCriterio:"max"}]},{nome:"Progetto 4",criteri:[{nameCriterio:"Criterio 1",valoreCriterio:4,pesoCriterio:.3,tipoCriterio:"min"},{nameCriterio:"Criterio 2",valoreCriterio:6,pesoCriterio:.3,tipoCriterio:"min"},{nameCriterio:"Criterio 3",valoreCriterio:4,pesoCriterio:.4,tipoCriterio:"max"}]},{nome:"Progetto 5",criteri:[{nameCriterio:"Criterio 1",valoreCriterio:7,pesoCriterio:.3,tipoCriterio:"min"},{nameCriterio:"Criterio 2",valoreCriterio:8,pesoCriterio:.3,tipoCriterio:"min"},{nameCriterio:"Criterio 3",valoreCriterio:7,pesoCriterio:.4,tipoCriterio:"max"}]}]}},mounted:function(){console.log(f.a)},methods:{changemostraInserimentoProgetti:function(){return this.mostraInserimentoProgetti=!this.mostraInserimentoProgetti},changemostraInserimentoCriteri:function(){return this.mostraInserimentoCriteri=!this.mostraInserimentoCriteri},changemostraCLassifica:function(){return this.mostraCLassifica=!this.mostraCLassifica},changeMostra:function(){return this.mostra=!this.mostra},svuotaRanking:function(){this.ranking=[]},addNewProject:function(t){return this.projects.push(t)},removeProject:function(t){return this.projects.splice(this.projects.indexOf(t),1)},getCriteri:function(){for(var t=function(t){for(var r=function(t){var r=[];for(var i in t)for(var e in t[i])if("criteri"==e)for(var o in t[i][e])r.push(t[i][e][o].valoreCriterio);return r}(t),i=[],e=0,o=0;o<t.length;o++){i[o]=[];for(var s=0;s<t[0].criteri.length;s++)i[o][s]=parseFloat(r[e]),e+=1}return i}(this.projects),r=function(t){for(var r=function(t){var r=[];for(var i in t)for(var e in t[i])if("criteri"==e)for(var o in t[i][e])r.push(t[i][e][o].pesoCriterio);return r}(t),i=[],e=0,o=0;o<t.length;o++){i[o]=[];for(var s=0;s<t[0].criteri.length;s++)i[o][s]=parseFloat(r[e]),e+=1}return i}(this.projects),i=function(t){for(var r=function(t){var r=[];for(var i in t)for(var e in t[i])if("criteri"==e)for(var o in t[i][e])r.push(t[i][e][o].tipoCriterio);return r}(t),i=[],e=0,o=0;o<t.length;o++){i[o]=[];for(var s=0;s<t[0].criteri.length;s++)i[o][s]=r[e],e+=1}return i}(this.projects),e=h.transpose(i),o=h.transpose(r),s=h.transpose(t),n=h.square(t),a=h.transpose(n),l=[],c=0;c<a.length;c++){l[c]=[];for(var u=0;u<a[0].length;u++){var m=h.sum(a[c]);l[c][u]=s[c][u]/Math.pow(m,.5)*o[c][u]}}console.log(t);var v=[],C=[];for(c=0;c<l.length;c++)for(u=0;u<l[0].length;u++){if("min"==e[c][u]){var p=h.min(l[c]),d=h.max(l[c]);v.push(p),C.push(d);break}var _=h.max(l[c]),f=h.min(l[c]);v.push(_),C.push(f);break}var g=h.transpose(l),b=[],y=[];for(c=0;c<g.length;c++){b[c]=[],y[c]=[];for(u=0;u<g[0].length;u++)b[c][u]=Math.pow(g[c][u]-v[u],2),y[c][u]=Math.pow(g[c][u]-C[u],2)}var x=[],j=[],P=[];for(c=0;c<b.length;c++)x[c]=Math.pow(h.sum(b[c]),.5),j[c]=Math.pow(h.sum(y[c]),.5),P[c]=j[c]/(j[c]+x[c]);this.ranking=[];for(c=0;c<b.length;c++){var k={progetto:this.projects[c].nome,valore:Math.round(100*P[c])/100};this.ranking.push(k)}return this.mostraCLassifica=!0},addCriterioVector:function(t){return this.criteriStart.push(t)},removeCriterioStart:function(t){return this.criteriStart.splice(this.criteriStart.indexOf(t),1)}},components:{Project:l,ProjectCard:m,Ranking:p,CriterioInsert:_}},b={render:function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-header bg-success"},[i("button",{staticClass:"btn no-outline",attrs:{type:"button"},on:{click:t.changemostraInserimentoCriteri}},[1==t.mostraInserimentoCriteri?i("strong",{staticClass:"text-white"},[t._v("Chiudi")]):t.criteriStart.length>0?i("strong",{staticClass:"text-white"},[t._v("Elenco Criteri")]):i("strong",{staticClass:"text-white"},[t._v("Inserisci Criteri")])])]),t._v(" "),t.mostraInserimentoCriteri?i("div",{staticClass:"card-body"},[i("criterio-insert",{on:{"add-criterio-vector":t.addCriterioVector}})],1):t._e(),t._v(" "),i("ul",{staticClass:"list-group list-group-flush"},t._l(t.criteriStart,function(r,e){return i("li",{key:e,staticClass:"list-group-item",attrs:{criterio:r}},[t._v("\n          "+t._s(r.nameCriterio)+"\n           \n          "),i("span",{staticClass:"badge badge-pill badge-success"},[t._v(t._s(r.valoreCriterio))]),t._v(" \n          "),i("span",{staticClass:"badge badge-pill badge-primary"},[t._v(t._s(r.pesoCriterio))]),t._v(" \n          "),i("span",{staticClass:"badge badge-pill badge-danger"},[t._v(t._s(r.tipoCriterio))]),t._v("\n           \n          "),i("button",{staticClass:"close no-outline",attrs:{type:"button"},on:{click:function(i){return t.removeCriterioStart(r)}}},[i("span",[t._v("×")])])])}),0)])]),t._v(" "),i("br"),t._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-header bg-danger"},[i("button",{staticClass:"btn no-outline",attrs:{type:"button"},on:{click:t.changemostraInserimentoProgetti}},[1==t.mostraInserimentoProgetti?i("strong",{staticClass:"text-white"},[t._v("Chiudi")]):i("strong",{staticClass:"text-white"},[t._v("Inserisci Progetti")])])]),t._v(" "),t.mostraInserimentoProgetti?i("div",{staticClass:"card-body"},[i("project",{attrs:{projects:t.projects,criteriStart:t.criteriStart},on:{"add-project":t.addNewProject}})],1):t._e()])]),t._v(" "),i("div",{staticClass:"container pt-2 pb-2 mt-2 mb-2"},[i("button",{staticClass:"btn btn-sm btn-danger",attrs:{type:"submit"},on:{click:t.changeMostra}},[t._v("\n      Progetti\n      "),0==t.mostra?i("strong",[t._v("+")]):i("strong",[t._v("-")])]),t._v(" "),i("button",{staticClass:"btn btn-sm btn-info ml-2",attrs:{type:"submit"},on:{click:t.getCriteri}},[i("span",{staticClass:"spinner-grow spinner-grow-sm",attrs:{role:"status","aria-hidden":"true"}}),t._v(" Calcola Classifica\n    ")]),t._v(" "),i("button",{staticClass:"btn btn-sm btn-warning ml-2",attrs:{type:"submit"},on:{click:t.changemostraCLassifica}},[t._v("\n      Classifica\n      "),0==t.mostraCLassifica?i("strong",[t._v("+")]):i("strong",[t._v("-")])])]),t._v(" "),i("hr"),t._v(" "),t.mostra?i("div",{staticClass:"container"},[i("project-card",{attrs:{projects:t.projects},on:{"remove-project":t.removeProject}})],1):t._e(),t._v(" "),t.mostra?i("hr"):t._e(),t._v(" "),t.mostraCLassifica?i("div",{staticClass:"container"},[i("ranking",{attrs:{ranking:t.ranking},on:{"svuota-ranking":t.svuotaRanking}})],1):t._e(),t._v(" "),t.mostraCLassifica&&t.ranking.length>0?i("hr"):t._e(),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[this._v("TOPSIS (Demo)")]),this._v(" "),r("p",[this._v("Inserisci i tuoi criteri e le alternative da valutare! L'algoritmo seleziona per te la migliore alternativa!")]),this._v(" "),r("p",[this._v("(Vi sono già 5 alternative di partenza, puoi usarle per testare l'algoritmo o cancellarle ed inserire le tue)")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"container col-12"},[r("p",[this._v("Sviluppata da Luca Marino")]),this._v(" "),r("p",[r("strong",[this._v("Copyright © 2019 Luca Marino | 3885863788")])])])}]};var y=i("VU/8")(g,b,!1,function(t){i("7cCB")},null,null).exports,x=i("e6fC"),j=i.n(x);i("9M+g"),i("Jmt5");e.a.use(j.a),e.a.config.productionTip=!1,new e.a({render:function(t){return t(y)}}).$mount("#app")},XBtn:function(t,r){},at9L:function(t,r){}},["NHnr"]);