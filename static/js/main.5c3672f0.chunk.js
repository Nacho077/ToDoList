(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{18:function(e,t,n){e.exports=n(31)},23:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(2),l=n.n(r),c=(n(23),n(8)),u=n(9),i=n(13),s=n(16),p=n(1);function m(e){return{type:"ADD_TODO",payload:e}}var d=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var o;return Object(c.a)(this,n),(o=t.call(this,e)).HandleChange=function(e){o.setState({value:e.target.value})},o.handleSubmit=function(e){e.preventDefault();var t=o.state.value;o.props.addToDo(t),o.setState({value:""})},o.state={value:""},o}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement("form",null,a.a.createElement("input",{className:"input",value:this.state.value,type:"text",placeholder:"To Do",onChange:this.HandleChange},this.value),a.a.createElement("button",{className:"buton btn btn-primary",type:"submit",onClick:this.handleSubmit},"Agregar"))}}]),n}(o.Component);var f=Object(p.b)((function(e){return{todo:e.ToDo}}),(function(e){return{addToDo:function(t){return e(m(t))}}}))(d),v=n(11),D=n(12),E=n(17),h=n(14),T=function(e){Object(E.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(v.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).complete=function(t){t.preventDefault();var n=t.target.value;e.props.completeToDo(n)},e.trash=function(t){t.preventDefault();var n=t.target.value;e.props.removeToDo(n)},e}return Object(D.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("ul",{className:"list-group"},this.props.todo.map((function(t){return a.a.createElement("li",{key:t,className:"incomplete list-group-item"},t,a.a.createElement("button",{value:t,onClick:e.complete,className:"incomplete btn btn-outline-success fas fa-check-square"}))})),this.props.todoComplete.map((function(t){return a.a.createElement("li",{key:t,className:"complete list-group-item"},t,a.a.createElement("button",{value:t,onClick:e.trash,className:"incomplete btn btn-outline-secondary fas fa-trash-alt"}))})))}}]),n}(o.Component);var O=Object(p.b)((function(e){return{todo:e.ToDo,todoComplete:e.ToDoComplete}}),(function(e){return{completeToDo:function(t){return e({type:"COMPLETE_TODO",payload:t})},addToDo:function(t){return e(m(t))},removeToDo:function(t){return e({type:"REMOVE_TODO",payload:t})}}}))(T);function b(){return a.a.createElement("div",{className:"contenedor"},a.a.createElement(f,null),a.a.createElement(O,null))}function y(){return a.a.createElement("div",{className:"header"},a.a.createElement("h1",null,"Hello World!"),a.a.createElement("h3",null,"App created by: Ignacio Gimenez"))}n(30);var C=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(y,null),a.a.createElement(b,null))},g=n(3),_=n(15),N={ToDo:[],ToDoComplete:[]};var w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;return"ADD_TODO"===t.type?{ToDoComplete:e.ToDoComplete.filter((function(e){return e!==t.payload})),ToDo:e.ToDo.concat(t.payload)}:"COMPLETE_TODO"===t.type?{ToDo:e.ToDo.filter((function(e){return e!==t.payload})),ToDoComplete:e.ToDoComplete.concat(t.payload)}:"REMOVE_TODO"===t.type?Object(_.a)({},e,{ToDoComplete:e.ToDoComplete.filter((function(e){return e!==t.payload}))}):e},j=Object(g.b)(w,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(p.a,{store:j},a.a.createElement(C,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.5c3672f0.chunk.js.map