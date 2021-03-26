(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{119:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){},143:function(e,t,n){},144:function(e,t,n){"use strict";n.r(t);var s,c=n(0),a=n(67),r=n.n(a),i=n(17),o=n(2),j=n(14),l=(n(77),n(1)),u=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),r=Object(j.a)(a,2),o=r[0],u=r[1];return Object(l.jsx)("div",{className:"joinOuterContainer",children:Object(l.jsxs)("div",{className:"joinInnerContainer",children:[Object(l.jsx)("h1",{className:"heading",children:"React Chat"}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"text",placeholder:"Name",value:n,onChange:function(e){return s(e.target.value)},className:"joinInput"})}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"text",placeholder:"Room",value:o,onChange:function(e){return u(e.target.value)},className:"joinInput mt-20"})}),Object(l.jsx)(i.b,{onClick:function(e){return n.trim()&&o.trim()?null:e.preventDefault()},to:"/chat?name=".concat(n,"&room=").concat(o),children:Object(l.jsx)("button",{type:"submit",className:"button mt-20",children:"Sign in"})})]})})},m=n(72),A=(n(83),n(69)),b=n.n(A),O=n(70),d=n.n(O),h=(n(119),function(e){var t=e.room;return Object(l.jsxs)("div",{className:"infoBar",children:[Object(l.jsxs)("div",{className:"leftInnerContainer",children:[Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII=",alt:"onlineIcon",className:"onlineIcon"}),Object(l.jsx)("h3",{children:t})]}),Object(l.jsx)("div",{className:"rightInnerContainer",children:Object(l.jsx)(i.b,{to:"/",children:Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII=",alt:"closeIcon",className:"closeIcon"})})})]})}),x=(n(120),function(e){var t=e.setMessage,n=e.sendMessage,s=e.message;return Object(l.jsxs)("form",{className:"form",children:[Object(l.jsx)("input",{className:"input",type:"text",placeholder:"Type a message...",value:s,onChange:function(e){var n=e.target.value;return t(n)},onKeyPress:function(e){return"Enter"===e.key?n(e):null}}),Object(l.jsx)("button",{className:"sendButton",onClick:function(e){return n(e)},children:"Send"})]})}),f=(n(121),n(71)),g=n.n(f),p=(n(143),n(39)),N=n.n(p),v=function(e){var t=e.message,n=t.text,s=t.user,c=!1,a=e.name.trim().toLowerCase();return s===a&&(c=!0),c?Object(l.jsxs)("div",{className:"messageContainer justifyEnd",children:[Object(l.jsx)("p",{className:"sentText pr-10",children:a}),Object(l.jsx)("div",{className:"messageBox backgroundBlue",children:Object(l.jsx)("p",{className:"messageText colorWhite",children:N.a.emojify(n)})})]}):Object(l.jsxs)("div",{className:"messageContainer justifyStart",children:[Object(l.jsx)("div",{className:"messageBox backgroundLight",children:Object(l.jsx)("p",{className:"messageText colorDark",children:N.a.emojify(n)})}),Object(l.jsx)("p",{className:"sentText pl-10 ",children:s})]})},C=function(e){var t=e.messages,n=e.name;return Object(l.jsx)(g.a,{className:"messages",children:t.map((function(e,t){return Object(l.jsx)("div",{children:Object(l.jsx)(v,{message:e,name:n})},t)}))})},I=function(e){var t=e.location,n=Object(c.useState)(""),a=Object(j.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)(""),u=Object(j.a)(o,2),A=u[0],O=u[1],f=Object(c.useState)(""),g=Object(j.a)(f,2),p=g[0],N=g[1],v=Object(c.useState)([]),I=Object(j.a)(v,2),S=I[0],y=I[1],R=Object(c.useRef)("https://afternoon-forest-95178.herokuapp.com/");return Object(c.useEffect)((function(){var e=b.a.parse(t.search),n=e.name,c=e.room;return i(n),O(c),(s=d()(R.current)).emit("join",{name:n,room:c},(function(){})),function(){s.emit("disconnectFromChat"),s.off()}}),[R,t.search]),Object(c.useEffect)((function(){s.on("message",(function(e){y((function(t){return[].concat(Object(m.a)(t),[e])}))}))}),[]),Object(l.jsx)("div",{className:"outerContainer",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(h,{room:A}),Object(l.jsx)(C,{messages:S,name:r}),Object(l.jsx)(x,{message:p,setMessage:N,sendMessage:function(e){e.preventDefault(),p&&s.emit("sendMessage",p,(function(){return N("")}))}})]})})},S=function(){return Object(l.jsxs)(i.a,{children:[Object(l.jsx)(o.a,{path:"/",exact:!0,component:u}),Object(l.jsx)(o.a,{path:"/chat",exact:!0,component:I})]})};r.a.render(Object(l.jsx)(S,{}),document.querySelector("#root"))},77:function(e,t,n){},83:function(e,t,n){}},[[144,1,2]]]);
//# sourceMappingURL=main.c6d6130f.chunk.js.map