(this["webpackJsonpmi-proyecto-noticias"]=this["webpackJsonpmi-proyecto-noticias"]||[]).push([[0],{1551:function(t,e,a){"use strict";a.r(e);var n=a(4),r=a.n(n),c=a(30),i=a.n(c),s=(a(39),a(40),a(7)),o=a(2),l=a.n(o),u=a(5),d=a(31),j=a(32),b=a(34),h=a(33),p=(a(42),a(0));var f=function(t){var e=t.noticia,a=t.marcarLeida,n=t.borrar,r=t.index;return Object(p.jsx)("div",{className:"Noticia",style:{opacity:e.vista?"0.5":"1"},children:Object(p.jsxs)("div",{className:"media alert alert-primary my-4",children:[Object(p.jsx)("img",{src:e.imagen,style:{width:"350px",borderRadius:"15px"},alt:e.title}),Object(p.jsxs)("div",{className:"media-body ml-4",children:[Object(p.jsx)("button",{className:"btn btn-warning float-right",onClick:function(){return a(e._id)},children:Object(p.jsx)("i",{className:"fab fa-readme",children:" Leida"})}),Object(p.jsx)("button",{className:"btn btn-danger float-left",onClick:function(){return n(e._id)},children:Object(p.jsx)("i",{className:"far fa-trash-alt",children:" Borrar"})}),Object(p.jsx)("h3",{className:"text-center font-italic text-uppercase",children:Object(p.jsxs)("u",{children:["Noticia Nro. ",r+1]})}),Object(p.jsx)("br",{}),Object(p.jsx)("h3",{children:e.titulo}),Object(p.jsx)("p",{children:Object(p.jsx)("i",{children:e.cuerpo})}),Object(p.jsx)("p",{children:Object(p.jsx)("b",{children:e.autor})}),Object(p.jsx)("p",{children:Object(p.jsx)("b",{children:Object(p.jsx)("i",{children:e.email})})}),Object(p.jsxs)("p",{children:[Object(p.jsx)("b",{children:"ID: "}),Object(p.jsx)("i",{children:e._id})]})]})]})})},x=a(6),m=a.n(x),O=(a(62),a(3)),v=a.n(O);v.a.locale="es";var N=function(){return{titulo:v.a.hacker.phrase(),cuerpo:v.a.lorem.paragraph(),autor:v.a.name.findName(),imagen:v.a.image.avatar(),email:v.a.internet.email(),vista:!1}},y="/noticias/",k=function(t){Object(b.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={noticias:[],idObtenerNoticia:"",pedidas:!1},t}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var t=Object(u.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"obtenerNoticias",value:function(){var t=Object(u.a)(l.a.mark((function t(e){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m()(y+(e||""));case 3:a=t.sent,n=a.data,this.setState({noticias:n||[]}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0),this.setState({noticias:[]});case 12:this.setState({pedidas:!0,idObtenerNoticia:""});case 13:case"end":return t.stop()}}),t,this,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},{key:"incorporarNoticia",value:function(){var t=Object(u.a)(l.a.mark((function t(){var e,a,n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=N(),t.next=4,m.a.post(y,e);case 4:a=t.sent,n=a.data,console.log(n),(r=Object(s.a)(this.state.noticias)).push(n),this.setState({noticias:r}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.error("incorporarNoticia",t.t0);case 15:case"end":return t.stop()}}),t,this,[[0,12]])})));return function(){return t.apply(this,arguments)}}()},{key:"actualizarComoLeida",value:function(){var t=Object(u.a)(l.a.mark((function t(e){var a,n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.put(y+e,{vista:!0});case 3:a=t.sent,n=a.data,console.log(n),(r=Object(s.a)(this.state.noticias)).find((function(t){return t._id===e})).vista=!0,this.setState({noticias:r}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.error(t.t0);case 14:case"end":return t.stop()}}),t,this,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},{key:"borrarNoticia",value:function(){var t=Object(u.a)(l.a.mark((function t(e){var a,n,r,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.delete(y+e);case 3:a=t.sent,n=a.data,console.log(n),r=Object(s.a)(this.state.noticias),c=r.findIndex((function(t){return t._id===e})),r.splice(c,1),this.setState({noticias:r}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.error("borrarNoticia",t.t0);case 15:case"end":return t.stop()}}),t,this,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.state,a=e.noticias,n=e.idObtenerNoticia,r=e.pedidas;return Object(p.jsx)("div",{className:"Noticias",children:Object(p.jsx)("div",{className:"container mt-3",children:Object(p.jsxs)("div",{className:"jumbotron",children:[Object(p.jsx)("h1",{children:"Mis Noticias - API REST Full"}),Object(p.jsx)("hr",{}),Object(p.jsx)("button",{className:"btn btn-info my-3 float-left",onClick:function(){return t.obtenerNoticias(n)},children:Object(p.jsx)("i",{className:"fas fa-file-alt",children:" Obtener"})}),Object(p.jsx)("input",{value:n,className:"mt-3 ml-1 form-control w-25 float-left",onChange:function(e){return t.setState({idObtenerNoticia:e.target.value})},placeholder:"todas \xf3 ingrese ID",type:"text"}),Object(p.jsx)("button",{className:"btn btn-success my-3 float-right",onClick:function(){return t.incorporarNoticia()},children:Object(p.jsx)("i",{className:"fas fa-envelope-open-text",children:" Generar"})}),Object(p.jsx)("div",{className:"clearfix"}),!a.length&&r&&Object(p.jsx)("h3",{className:"alert alert-danger",children:"No hay noticias para mostrar"}),a.map((function(e,a){return Object(p.jsx)(f,{noticia:e,index:a,marcarLeida:function(e){return t.actualizarComoLeida(e)},borrar:function(e){return t.borrarNoticia(e)}},e._id)}))]})})})}}]),a}(r.a.Component);var g=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(k,{})})};i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(g,{})}),document.getElementById("root"))},39:function(t,e,a){},40:function(t,e,a){},42:function(t,e,a){},62:function(t,e,a){}},[[1551,1,2]]]);
//# sourceMappingURL=main.56daaa08.chunk.js.map