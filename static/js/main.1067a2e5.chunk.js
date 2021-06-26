(this["webpackJsonpmoja-aplikacja"]=this["webpackJsonpmoja-aplikacja"]||[]).push([[0],{21:function(n,e,t){},22:function(n,e,t){},26:function(n,e,t){"use strict";t.r(e);var c,r,a,i,o,s,l,d,j,b,u,f,m,O,x,h,g,p,k,v,y,w=t(1),C=t.n(w),S=t(12),D=t.n(S),L=(t(21),t(16)),A=t(10),N=t(4),z=t(2),E=t(3),T=(t(22),t(0)),F=E.a.div(c||(c=Object(z.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 1rem;\n  align-self: flex-end;\n"]))),M=E.a.button(r||(r=Object(z.a)(["\n  border: none;\n  border-radius: 8px;\n  background-color: #000000;\n  color: white;\n  padding: 0.6rem;\n  margin-right: 1rem;\n  cursor: pointer;\n"]))),P=E.a.button(a||(a=Object(z.a)(["\n  border: none;\n  background: none;\n  font-size: 2rem;\n  cursor: pointer;\n"]))),B=function(n){return Object(T.jsxs)(F,{children:[Object(T.jsx)(M,{onClick:function(){n.onDeleteAllListElements()},children:"Clear All"}),Object(T.jsx)(P,{children:Object(T.jsx)("i",{className:"fas fa-info-circle"})})]})},I=E.a.form(i||(i=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 60%;\n  padding: 1rem;\n  border-radius: 0.5rem;\n  background-color: #00d9ff47;\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);\n"]))),J=E.a.div(o||(o=Object(z.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"]))),K=E.a.input(s||(s=Object(z.a)(["\n  width: 80%;\n  height: 1.5rem;\n  background-color: #a0420311;\n  border: 1px solid #e75c0030;\n  border-radius: 0.3rem;\n  margin: 0 0 0.6rem 1.5rem;\n"]))),R=E.a.button(l||(l=Object(z.a)(["\n  border: none;\n  background: none;\n  color: #0000ff92;\n  cursor: pointer;\n  transition: color 0.5s, font-size 0.5s;\n  &:hover {\n    color: red;\n    font-size: 1.5rem;\n  }\n"]))),Y=E.a.label(d||(d=Object(z.a)(["\n  font-size: 0.8rem;\n  color: #0000ff94;\n  margin-bottom: 0.3rem;\n"]))),q=E.a.button(j||(j=Object(z.a)(["\n  background-color: #0000ff76;\n  color: white;\n  width: 5rem;\n  padding: 0.4rem;\n  border: none;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: background-color 0.5s;\n  margin-top: 0.3rem;\n  margin-left: 5px;\n\n  &:hover {\n    background-color: #0000ffa4;\n  }\n"]))),G=Object(E.a)(q)(b||(b=Object(z.a)(["\n  width: 80%;\n"]))),H=E.a.div(u||(u=Object(z.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-self: flex-end;\n"]))),Q=function(n){var e=Object(w.useState)(""),t=Object(N.a)(e,2),c=t[0],r=t[1],a=Object(w.useState)(""),i=Object(N.a)(a,2),o=i[0],s=i[1],l=Object(w.useState)(""),d=Object(N.a)(l,2),j=d[0],b=d[1],u=Object(w.useState)(""),f=Object(N.a)(u,2),m=f[0],O=f[1],x=Object(w.useState)(!1),h=Object(N.a)(x,2),g=h[0],p=h[1];return!1===g?Object(T.jsx)(I,{children:Object(T.jsx)(G,{type:"button",onClick:function(){p(!0)},children:"Add new task"})}):Object(T.jsxs)(I,{onSubmit:function(e){if(e.preventDefault(),""!==c.trim()&&""!==o.trim()&&""!==j.trim()&&""!==m.trim()){var t={name:c,surrname:o,content:j,date:new Date(m)};p(!1),n.onClickAdd(t)}r(""),s(""),b("")},children:[Object(T.jsx)(Y,{children:"Name: "}),Object(T.jsxs)(J,{children:[Object(T.jsx)(K,{type:"text",value:c,onChange:function(n){r(n.target.value)}}),Object(T.jsx)(R,{type:"button",onClick:function(){r("")},children:Object(T.jsx)("i",{className:"fas fa-times"})})]}),Object(T.jsx)(Y,{children:"Surname: "}),Object(T.jsxs)(J,{children:[Object(T.jsx)(K,{type:"text",value:o,onChange:function(n){s(n.target.value)}}),Object(T.jsx)(R,{type:"button",onClick:function(){s("")},children:Object(T.jsx)("i",{className:"fas fa-times"})})]}),Object(T.jsx)(Y,{children:"Content: "}),Object(T.jsxs)(J,{children:[Object(T.jsx)(K,{type:"text",value:j,onChange:function(n){b(n.target.value)}}),Object(T.jsx)(R,{type:"button",onClick:function(){b("")},children:Object(T.jsx)("i",{className:"fas fa-times"})})]}),Object(T.jsx)(Y,{children:"Date: "}),Object(T.jsx)(J,{children:Object(T.jsx)(K,{type:"date",onChange:function(n){O(n.target.value)}})}),Object(T.jsxs)(H,{children:[Object(T.jsx)(q,{onClick:n.clickAdd,children:"Add"}),Object(T.jsx)(q,{onClick:function(){p(!1)},children:"Collapse"})]})]})},U=E.a.div(f||(f=Object(z.a)(["\n  padding: 0.38rem;\n"]))),V=function(n){var e=n.date.toLocaleString("pl-PL",{month:"long"}),t=n.date.toLocaleString("pl-PL",{day:"2-digit"}),c=n.date.getFullYear();return Object(T.jsxs)(U,{children:[Object(T.jsx)("div",{children:t}),Object(T.jsx)("div",{children:e}),Object(T.jsx)("div",{children:c})]})},W=E.a.li(m||(m=Object(z.a)(["\n  list-style: none;\n  width: 80%;\n  padding: 0.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 0.5rem;\n  margin-bottom: 0.5rem;\n  background-color: #00eeff58;\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);\n"]))),X=E.a.div(O||(O=Object(z.a)(["\n  border: 1px solid #0000ff13;\n  border-radius: 0.5rem;\n  background-color: #0000ff13;\n  width: 30%;\n"]))),Z=E.a.h4(x||(x=Object(z.a)(["\n  margin: 0.2rem;\n  padding: 0.3rem;\n"]))),$=Object(E.a)(X)(h||(h=Object(z.a)(["\n  width: 80%;\n  margin: 0.2rem 0.5rem;\n  padding: 0.45rem;\n"]))),_=E.a.button(g||(g=Object(z.a)(["\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-size: 0.7rem;\n  color: green;\n"]))),nn=Object(E.a)(_)(p||(p=Object(z.a)(["\n  color: #0000ff92;\n  font-size: 0.8rem;\n  transition: color 0.5s;\n  &:hover {\n    color: red;\n  }\n"]))),en=function(n){return Object(T.jsxs)(W,{children:[Object(T.jsxs)(X,{children:[Object(T.jsx)(Z,{children:n.name}),Object(T.jsx)(Z,{children:n.surrname})]}),Object(T.jsx)($,{children:Object(T.jsxs)("p",{children:[n.content,Object(T.jsxs)(_,{children:["More ",Object(T.jsx)("i",{className:"fas fa-angle-double-right"})]})]})}),Object(T.jsx)(X,{children:Object(T.jsx)(V,{date:n.date})}),Object(T.jsx)(nn,{onClick:function(){n.onDeleteTask(n.id)},children:Object(T.jsx)("i",{className:"far fa-times-circle"})})]})},tn=E.a.ul(k||(k=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 90%;\n  padding: 0.5rem;\n"]))),cn=function(n){return Object(T.jsx)(tn,{children:n.listElements.map((function(e){return Object(T.jsx)(en,{id:e.id,name:e.name,surrname:e.surrname,content:e.content,date:e.date,label:e.label,onDeleteTask:n.onDeleteListElem},e.id)}))})},rn=E.a.div(v||(v=Object(z.a)(['\n  font-family: "Times New Roman", Times, serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n']))),an=E.a.h1(y||(y=Object(z.a)(["\n  padding: 0.5em;\n"])));var on=function(){var n=[{id:"1",name:"Marcin",surrname:"Kowalczyk",content:"zrobi\u0107 pranie",date:new Date(2021,4,17),label:1}],e=Object(w.useState)(n),t=Object(N.a)(e,2),c=t[0],r=t[1],a=Object(T.jsx)(cn,{onDeleteListElem:function(n){r((function(e){return e.filter((function(e){return e.id!==n}))}))},listElements:c});return Object(T.jsxs)(rn,{className:"App",children:[Object(T.jsx)(B,{onDeleteAllListElements:function(){r(n)}}),Object(T.jsx)(an,{children:"To Do Manager"}),Object(T.jsx)(Q,{onClickAdd:function(n){var e=Object(A.a)(Object(A.a)({},n),{},{id:Math.random().toString()});r((function(n){return[e].concat(Object(L.a)(n))}))}}),a]})},sn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,27)).then((function(e){var t=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;t(n),c(n),r(n),a(n),i(n)}))};D.a.render(Object(T.jsx)(C.a.StrictMode,{children:Object(T.jsx)(on,{})}),document.getElementById("root")),sn()}},[[26,1,2]]]);
//# sourceMappingURL=main.1067a2e5.chunk.js.map