"use strict";(self.webpackChunknetwork=self.webpackChunknetwork||[]).push([[460],{6460:function(t,s,e){e.r(s),e.d(s,{default:function(){return T}});var n=e(1413),r=e(5671),u=e(3144),i=e(136),o=e(2882),a=e(2791),p="ProfileInfo_descriptionBlock__9dlNL",c=e(981),f=e(885),l=e(184),d=function(t){var s=(0,a.useState)(!1),e=(0,f.Z)(s,2),n=(e[0],e[1]),r=(0,a.useState)(t.status),u=(0,f.Z)(r,2),i=(u[0],u[1]);(0,a.useEffect)((function(){i(t.status)}),[t.status]);return(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{children:(0,l.jsx)("span",{onDoubleClick:function(){n(!0)},children:t.status})}),!1]})},h=function(t){var s=t.profile,e=t.status,n=t.updateStatus;return s?(0,l.jsxs)("div",{className:p,children:[(0,l.jsx)("img",{src:s.photos.large,alt:""}),(0,l.jsx)(d,{status:e,updateStatus:n})]}):(0,l.jsx)(c.Z,{})},x=e(382),j=e(2982),m="MyPosts_postsBlock__j79JW",v="MyPosts_posts__S-3D9",P="Post_item__BfhkL",S=function(t){return(0,l.jsxs)("div",{className:P,children:[(0,l.jsx)("img",{src:"https://bipbap.ru/wp-content/uploads/2021/07/9-1.jpeg"}),t.posts]})},g=e(6139),k=e(704),_=e(5304),Z=e(8007),b=(0,_.D)(300),w=function(t){return(0,l.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,l.jsx)("div",{children:(0,l.jsx)(g.Z,{component:Z.gx,name:"newPostText",validate:[_.C,b]})}),(0,l.jsx)("div",{children:(0,l.jsx)("button",{children:"Add post"})})]})};w=(0,k.Z)({form:"ProfileAddNewPostsForm"})(w);var y=a.memo((function(t){var s=(0,j.Z)(t.posts).reverse().map((function(t){return(0,l.jsx)(S,{id:t.id,message:t.message,likesCount:t.likesCount},t.id)}));return(0,l.jsxs)("div",{className:m,children:[(0,l.jsx)("h3",{children:"My posts"}),(0,l.jsx)(w,{onSubmit:function(s){t.addPost(s.newPostText)}}),(0,l.jsx)("div",{className:v,children:s})]})})),C=e(8687),D=(0,C.$j)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(s){t((0,x.Wl)(s))}}}))(y),N=function(t){return(0,l.jsxs)("div",{children:[(0,l.jsx)(h,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),(0,l.jsx)(D,{})]})},A=e(6070),E=e(5784),M=e(7781),I=function(t){(0,i.Z)(e,t);var s=(0,o.Z)(e);function e(){return(0,r.Z)(this,e),s.apply(this,arguments)}return(0,u.Z)(e,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.autorizerUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return(0,l.jsx)(N,(0,n.Z)((0,n.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),e}(a.Component),T=(0,M.qC)((0,C.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,autorizerUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:A.et,getStatus:A.lR,updateStatus:A.Nf}),E.E)(I)},382:function(t,s,e){e.d(s,{Wl:function(){return n},XE:function(){return r}});e(6070),e(2807);var n=function(){return{type:"ADD-POST"}},r=function(){return{type:"SEND_MESSAGE"}}},5304:function(t,s,e){e.d(s,{C:function(){return n},D:function(){return r}});var n=function(t){if(!t)return"Field is required"},r=function(t){return function(s){if(s.length>t)return"Max length is ".concat(t," symbols")}}}}]);
//# sourceMappingURL=460.241b804a.chunk.js.map