webpackJsonp([1],{"/IIo":function(t,e){},"1uuo":function(t,e){},"9M+g":function(t,e){},F5eQ:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=o("VU/8")({name:"App"},r,!1,function(t){o("F5eQ")},null,null).exports,s=o("/ocq"),n={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hello"},[o("h1",[t._v(t._s(t.msg))]),t._v(" "),o("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),o("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",[o("li",[o("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),o("br"),t._v(" "),o("li",[o("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var l=o("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},n,!1,function(t){o("1uuo")},"data-v-d8ec41bc",null).exports,c=o("mtWM"),d=o.n(c),u={data:function(){return{fields:[{key:"title",label:"Titulo"},{key:"description",label:"Descripcion"},{key:"action",label:"Accion"}],books:[]}},methods:{getBooks:function(){var t=this;d.a.get("/api/v1.0/books/").then(function(e){t.books=e.data}).catch(function(t){console.log(t)})}},created:function(){this.getBooks()}},v={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col text-left"},[o("h2",[t._v("Listado Libros")]),t._v(" "),o("div",{staticClass:"col-md-12"},[o("b-button",{attrs:{size:"sm",variant:"primary",to:{name:"NewBook"}}},[t._v("Nuevo Libro")])],1),t._v(" "),o("div",{staticClass:"col-md-12"},[o("b-table",{attrs:{striped:"",hover:"",items:t.books,fields:t.fields},scopedSlots:t._u([{key:"action",fn:function(e){return[o("b-button",{attrs:{size:"sm",variant:"primary",to:{name:"EditBook",params:{bookId:e.item.id}}}},[t._v("Editar")]),t._v(" "),o("b-button",{attrs:{size:"sm",variant:"danger",to:{name:"DeleteBook",params:{bookId:e.item.id}}}},[t._v("Eliminar")])]}}])})],1)])])])},staticRenderFns:[]};var m=o("VU/8")(u,v,!1,function(t){o("/IIo")},null,null).exports,p=o("thjQ"),f=o.n(p),b={data:function(){return{form:{title:"",description:""}}},methods:{onSubmit:function(t){var e=this;t.preventDefault();d.a.post("/api/v1.0/books/",this.form).then(function(t){e.form.title=t.data.title,e.form.description=t.data.description,f()("Nuevo Libro Ingresado exitosamente","","success")}).catch(function(t){f()("Error  en el Ingresado de libro =>: "+t,"","error")})}},created:function(){}},_={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-12"},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-body"},[o("h3",{staticClass:"card-title"},[t._v("Nuevo Libro")]),t._v(" "),o("p",{staticClass:"card-text"},[t._v("los datos del libro.")]),t._v(" "),o("form",{on:{submit:t.onSubmit}},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"title"}},[t._v("Titulo del libro")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.title,expression:"form.title",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",name:"title",id:"",placeholder:"titulo del libro","aria-describedby":"helpId"},domProps:{value:t.form.title},on:{input:function(e){e.target.composing||t.$set(t.form,"title",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),o("small",{staticClass:"text-muted",attrs:{id:"helpId"}},[t._v("nombre del titulo")])]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"description"}},[t._v("Descripcion")]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.description,expression:"form.description",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{name:"descripcion",id:"descripcion",placeholder:"descripcion del libro",rows:"4"},domProps:{value:t.form.description},on:{input:function(e){e.target.composing||t.$set(t.form,"description",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),o("small",{staticClass:"text-muted",attrs:{id:"helpId"}},[t._v("breve descripcion del libro")])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-12 text-left"},[o("b-button",{attrs:{type:"submit",variant:"outline-primary"}},[t._v("Guardar Nuevo")]),t._v(" "),o("b-button",{attrs:{type:"submit",variant:"success",to:{name:"ListBook"}}},[t._v("Cancelar")])],1)])])])])])])])},staticRenderFns:[]};var h=o("VU/8")(b,_,!1,function(t){o("TjF0")},"data-v-2583858d",null).exports,k={data:function(){return{bookId:this.$route.params.bookId,form:{title:"",description:""}}},methods:{onSubmit:function(t){var e=this;t.preventDefault();var o="/api/v1.0/books/"+this.bookId+"/";d.a.put(o,this.form).then(function(t){e.form.title=t.data.title,e.form.description=t.data.description,f()("Libro actualizado exitosamente","","success")}).catch(function(t){console.log(t)})},getBook:function(){var t=this,e="/api/v1.0/books/"+this.bookId+"/";d.a.get(e).then(function(e){t.form.title=e.data.title,t.form.description=e.data.description}).catch(function(t){console.log(t)})}},created:function(){this.getBook()}},g={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-12"},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-body"},[o("h3",{staticClass:"card-title"},[t._v("Editar")]),t._v(" "),o("p",{staticClass:"card-text"},[t._v("los datos del libro.")]),t._v(" "),o("form",{on:{submit:t.onSubmit}},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"title"}},[t._v("Titulo del libro")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.title,expression:"form.title",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",name:"title",id:"",placeholder:"titulo","aria-describedby":"helpId"},domProps:{value:t.form.title},on:{input:function(e){e.target.composing||t.$set(t.form,"title",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),o("small",{staticClass:"text-muted",attrs:{id:"helpId"}},[t._v("nombre del titlo")])]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"description"}},[t._v("Descripcion")]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.description,expression:"form.description",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{name:"descripcion",id:"descripcion",rows:"4"},domProps:{value:t.form.description},on:{input:function(e){e.target.composing||t.$set(t.form,"description",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),o("small",{staticClass:"text-muted",attrs:{id:"helpId"}},[t._v("breve descripcion del libro")])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-12 text-left"},[o("b-button",{attrs:{type:"submit",variant:"outline-primary"}},[t._v("Guardar")]),t._v(" "),o("b-button",{attrs:{type:"submit",variant:"success",to:{name:"ListBook"}}},[t._v("Cancelar")])],1)])])])])])])])},staticRenderFns:[]};var C=o("VU/8")(k,g,!1,function(t){o("QcpZ")},"data-v-79e6d614",null).exports,x={data:function(){return{bookId:this.$route.params.bookId,element:{title:"",description:""}}},methods:{getBook:function(){var t=this,e="/api/v1.0/books/"+this.bookId+"/";d.a.get(e).then(function(e){t.element.title=e.data.title,t.element.description=e.data.description}).catch(function(t){console.log(t)})},deleteBook:function(){var t="/api/v1.0/books/"+this.bookId+"/";d.a.delete(t).then(function(t){location.href="/books",f()("Libro eliminado exitosamente","","success")}).catch(function(t){f()("No es posible eliminar el libro.","","Error")})}},created:function(){this.getBook()}},I={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-12"},[o("h3",[t._v("Estas seguro de eliminar este Libro")]),t._v(" "),o("p",[t._v("\n                Titulo : "+t._s(this.element.title)+"\n            ")]),t._v(" "),o("p",[t._v("\n                Titulo : "+t._s(this.element.description)+"\n            ")])]),t._v(" "),o("div",{staticClass:"col-md-12"},[o("b-button",{attrs:{variant:"danger"},on:{click:t.deleteBook}},[t._v("Eliminar")]),t._v(" "),o("b-button",{attrs:{type:"submit",variant:"primary",to:{name:"ListBook"}}},[t._v("Cancelar")])],1)])])},staticRenderFns:[]};var w=o("VU/8")(x,I,!1,function(t){o("pWrI")},"data-v-11c66476",null).exports;i.a.use(s.a);var y=new s.a({routes:[{path:"/",name:"HelloWorld",component:l},{path:"/books",name:"ListBook",component:m},{path:"/books/new",name:"NewBook",component:h},{path:"/books/:bookId/edit",name:"EditBook",component:C},{path:"/books/:bookId/delete",name:"DeleteBook",component:w}],mode:"history"}),E=o("e6fC"),B=o.n(E);o("Jmt5"),o("9M+g");i.a.config.productionTip=!1,i.a.use(B.a),new i.a({el:"#app",router:y,components:{App:a},template:"<App/>"})},QcpZ:function(t,e){},TjF0:function(t,e){},pWrI:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d13a0bd6973849f3551f.js.map