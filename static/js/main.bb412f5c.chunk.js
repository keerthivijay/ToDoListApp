(this.webpackJsonppurpleslate=this.webpackJsonppurpleslate||[]).push([[0],{25:function(t,e,s){},26:function(t,e,s){},31:function(t,e,s){"use strict";s.r(e);var a=s(3),i=s(7),n=s.n(i),o=s(18),c=s.n(o),l=(s(25),s.p,s(26),s(14)),r=s(9),d=s(10),u=s(11),m=s(13),j=s(12),h=function(t){Object(m.a)(s,t);var e=Object(j.a)(s);function s(){var t;Object(d.a)(this,s);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(t=e.call.apply(e,[this].concat(i))).openToDo=function(t){var e=document.getElementById(t).getElementsByClassName("list-item-task")[0];-1===e.className.indexOf("show")?e.className+=" show":e.className=e.className.replace(" show","")},t.doneToDo=function(t){var e=document.getElementById(t).getElementsByClassName("task-item-title")[0];-1===e.className.indexOf("done")?e.className+=" done":e.className=e.className.replace(" done","")},t}return Object(u.a)(s,[{key:"render",value:function(){var t=this;return console.log(this.props),Object(a.jsxs)("div",{className:"list-item",id:this.props.id,children:[Object(a.jsxs)("div",{className:"list-main",children:[Object(a.jsx)("div",{className:"task-item-title",onClick:function(){return t.openToDo(t.props.id)},children:this.props.title}),Object(a.jsxs)("div",{className:"actions",children:[Object(a.jsx)("div",{className:"list-edit-button",onClick:this.props.editToDo,children:Object(a.jsx)("i",{className:"fas fa-pencil-alt",title:"Edit"})}),Object(a.jsx)("div",{className:"list-edit-button",onClick:function(){return t.doneToDo(t.props.id)},children:Object(a.jsx)("i",{className:"fas fa-check",title:"Done"})}),Object(a.jsx)("div",{className:"list-edit-button",onClick:this.props.deleteToDo,children:Object(a.jsx)("i",{className:"fas fa-minus-circle",title:"Remove"})})]})]}),Object(a.jsx)("div",{className:"list-item-task",children:this.props.task})]})}}]),s}(i.Component),f=function(t){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("header",{children:[Object(a.jsx)("i",{className:"fas fa-list-ul"})," To-Do List"]}),Object(a.jsx)("main",{children:t.children}),Object(a.jsx)("footer",{children:"@ Copyrights: keerthivijay89@gmail.com"})]})},b=s(19).a.initializeApp({apiKey:"AIzaSyCroOlhXHWE_4moYl1OOSDMsYX2DkwaLhM",authDomain:"todo-list-53f5c.firebaseapp.com",databaseURL:"https://todo-list-53f5c.firebaseio.com",projectId:"todo-list-53f5c",storageBucket:"todo-list-53f5c.appspot.com",messagingSenderId:"1057003931463",appId:"1:1057003931463:web:ad9a72050e9587132f6e62"}).database().ref(),p=function(t){Object(m.a)(s,t);var e=Object(j.a)(s);function s(t){var a;return Object(d.a)(this,s),(a=e.call(this,t)).state={title:"",task:"",todolist:{},editItem:"",firebaseEditId:"",editAction:!1,loading:!0,hasError:!1},a.componentDidMount=function(){a.titleRef.current.focus(),console.log(a.titleRef),b.on("value",(function(t){null!=t.val()&&a.setState(Object(r.a)(Object(r.a)({},a.state),{},{todolist:t.val(),loading:!1}))}))},a.handleFormChange=function(t){a.setState(Object(r.a)(Object(r.a)({},a.state),{},Object(l.a)({},t.target.name,t.target.value)))},a.submitHandler=function(t){if(t.preventDefault(),a.titleRef.current.focus(),""===a.state.title)return!1;a.state.editAction?a.updateToDo():(b.push({title:a.state.title,task:a.state.task},(function(t){console.log(t)})),a.setState({title:"",task:""}))},a.editToDo=function(t){a.setState({title:a.state.todolist[t].title,task:a.state.todolist[t].task,editItem:t,editAction:!0})},a.updateToDo=function(){b.child("/"+a.state.editItem).update({title:a.state.title,task:a.state.task},(function(t){console.log(t)}));var t=Object(r.a)({},a.state);t.todolist[a.state.editItem]={title:a.state.title,task:a.state.task},t.editAction=!1,t.title="",t.task="",t.editItem="",a.setState(t)},a.deleteToDo=function(t){b.child("/"+t).remove((function(t){console.log(t)}));var e=Object(r.a)({},a.state);delete e.todolist[t],a.setState(e)},a.titleRef=n.a.createRef(),a}return Object(u.a)(s,[{key:"render",value:function(){var t=this,e=Object.keys(this.state.todolist).map((function(e){return Object(a.jsx)(h,{id:e,editToDo:function(){return t.editToDo(e)},ref:e,title:t.state.todolist[e].title,task:t.state.todolist[e].task,editbutton:t.editToDo,deleteToDo:function(){return t.deleteToDo(e)}},e)}));return this.state.loading&&(e=Object(a.jsx)("i",{className:"fas fa-spinner"})),Object(a.jsxs)(f,{children:[Object(a.jsxs)("form",{onSubmit:this.submitHandler,method:"POST",className:"to-do-form",children:[Object(a.jsx)("div",{className:"form-element",children:Object(a.jsx)("input",{type:"text",name:"title",ref:this.titleRef,value:this.state.title,onChange:this.handleFormChange,placeholder:"Title"})}),Object(a.jsx)("div",{className:"form-element",children:Object(a.jsx)("input",{type:"text",name:"task",value:this.state.task,onChange:this.handleFormChange,placeholder:"Task"})}),Object(a.jsx)("div",{className:"form-element",children:Object(a.jsx)("button",{type:"submit",name:"submit",value:"Submit",children:Object(a.jsxs)("i",{class:"fas fa-plus-circle",children:[" ",""===this.state.editItem?"ADD":"EDIT"," "]})})})]}),Object(a.jsx)("div",{className:"list-items",children:e})]})}}]),s}(i.Component),O=function(t){Object(m.a)(s,t);var e=Object(j.a)(s);function s(){var t;Object(d.a)(this,s);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(t=e.call.apply(e,[this].concat(i))).state={hasError:!1},t.getLogService=console.log,t}return Object(u.a)(s,[{key:"componentDidCatch",value:function(t,e){console.log(t),console.log(e),this.getLogService(t.toString(),e.componenetstack)}},{key:"render",value:function(){var t="";return t=this.state.hasError?Object(a.jsx)("div",{className:"error-message",children:"'Something went wrong! Please wait...'"}):this.props.children,Object(a.jsx)("div",{children:t})}}],[{key:"getDerivedStateFromError",value:function(t){return{hasError:!0}}}]),s}(s(7).Component);var v=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(O,{children:Object(a.jsx)(p,{})})})},g=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,32)).then((function(e){var s=e.getCLS,a=e.getFID,i=e.getFCP,n=e.getLCP,o=e.getTTFB;s(t),a(t),i(t),n(t),o(t)}))};c.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root")),g()}},[[31,1,2]]]);
//# sourceMappingURL=main.bb412f5c.chunk.js.map