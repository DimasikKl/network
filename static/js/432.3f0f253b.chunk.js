(self.webpackChunknetwork=self.webpackChunknetwork||[]).push([[432],{8432:function(n,e,i){"use strict";i.r(e),i.d(e,{default:function(){return E}});var s=i(382),t=i(2791),r="Dialogs_dialogs__nOkwQ",o="Dialogs_dialogsItem__9tHgB",u="Dialogs_active__2jnjF",a="Dialogs_dialog__7DTJS",c="Dialogs_messages__+AHQw",d=i(3504),l=i(184),f=function(n){var e="/dialogs/"+n.id;return(0,l.jsx)("div",{className:a+" "+u,children:(0,l.jsx)(d.OL,{to:e,children:n.name})})},g=i(7824),m=i.n(g),h=i(6871),j=i(6139),x=i(704),v=i(5304),p=i(8007),_=(0,v.D)(100),D=(0,x.Z)({form:"dialog-add-message-form"})((function(n){return(0,l.jsxs)("form",{onSubmit:n.handleSubmit,children:[(0,l.jsx)("div",{children:(0,l.jsx)(j.Z,{component:p.gx,name:"newMessageBody",placeholder:"Enter your message",validate:[v.C,_]})}),(0,l.jsx)("div",{children:(0,l.jsx)("button",{children:"Send"})})]})})),S=function(n){var e=n.dialogsPage,i=e.dialogs.map((function(n){return(0,l.jsx)(f,{id:n.id,name:n.name},n.id)})),s=e.messages.map((function(n){return(0,l.jsx)(m(),{message:n.message},n.id)}));return n.isAuth?(0,l.jsxs)("div",{className:r,children:[(0,l.jsx)("div",{className:o,children:i}),(0,l.jsxs)("div",{className:c,children:[(0,l.jsx)("div",{children:s}),(0,l.jsx)(D,{onSubmit:function(e){n.sendMessage(e.newMessageBody)}})]})]}):(0,l.jsx)(h.Fg,{to:"/login"})},k=i(8687),w=i(1413),y=i(5671),b=i(3144),Z=i(136),C=i(2882),E=(0,i(7781).qC)((0,k.$j)((function(n){return{dialogsPage:n.dialogsPage}}),(function(n){return{sendMessage:function(e){n((0,s.XE)(e))}}})),(function(n){var e=function(e){(0,Z.Z)(s,e);var i=(0,C.Z)(s);function s(){return(0,y.Z)(this,s),i.apply(this,arguments)}return(0,b.Z)(s,[{key:"render",value:function(){return this.props.isAuth?(0,l.jsx)(n,(0,w.Z)({},this.props)):(0,l.jsx)(h.Fg,{to:"/login"})}}]),s}(t.Component);return e}))(S)},7824:function(){},382:function(n,e,i){"use strict";i.d(e,{Wl:function(){return s},XE:function(){return t}});i(6070),i(2807);var s=function(){return{type:"ADD-POST"}},t=function(){return{type:"SEND_MESSAGE"}}},5304:function(n,e,i){"use strict";i.d(e,{C:function(){return s},D:function(){return t}});var s=function(n){if(!n)return"Field is required"},t=function(n){return function(e){if(e.length>n)return"Max length is ".concat(n," symbols")}}}}]);
//# sourceMappingURL=432.3f0f253b.chunk.js.map