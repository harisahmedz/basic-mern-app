"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[418],{7212:function(e,n,a){a.d(n,{Z:function(){return l}});var t=a(885),s=a(2791),r=a(3999),i=a(184),l=function(e){var n=(0,s.useRef)(),a=(0,s.useState)(),l=(0,t.Z)(a,2),o=l[0],u=l[1],c=(0,s.useState)(),d=(0,t.Z)(c,2),p=d[0],m=d[1],v=(0,s.useState)(!1),x=(0,t.Z)(v,2),f=x[0],g=x[1];(0,s.useEffect)((function(){if(o){var e=new FileReader;e.onload=function(e){var n=e.target.result;n&&m(n)},e.readAsDataURL(o)}}),[o]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"form-control",children:(0,i.jsx)("input",{id:e.id,ref:n,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:function(n){var a,t=f;n.target.files&&1===n.target.files.length?(console.log(n.target.files[0]),a=n.target.files[0],u(a),g(!0),t=!0):(g(!1),t=!1),e.onInput(e.id,a,t)}})}),(0,i.jsxs)("div",{className:"image-upload ".concat(e.center&&"center"),children:[(0,i.jsxs)("div",{className:"image-upload__preview",children:[p&&(0,i.jsx)("img",{src:p,alt:"Preview"}),!p&&(0,i.jsx)("p",{children:"Please pick an Image"})]}),(0,i.jsx)(r.Z,{type:"button",onClick:function(){n.current.click()},children:"PICK Image"}),!f&&(0,i.jsx)("p",{children:e.errorText}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{})]})]})}},3373:function(e,n,a){a.d(n,{Z:function(){return s}});a(2791);var t=a(184),s=function(e){return(0,t.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})}},4191:function(e,n,a){a.r(n),a.d(n,{default:function(){return j}});var t=a(4165),s=a(5861),r=a(1413),i=a(885),l=a(2791),o=a(3373),u=a(2810),c=a(3999),d=a(5434),p=a(9895),m=a(291),v=a(5094),x=a(9508),f=a(3108),g=a(7212),h=a(184),j=function(){var e=(0,l.useContext)(f.V),n=(0,l.useState)(!0),a=(0,i.Z)(n,2),j=a[0],Z=a[1],w=(0,x.x)(),b=w.isLoading,I=w.error,k=w.sendRequest,y=w.clearError,P=(0,v.c)({email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),N=(0,i.Z)(P,3),C=N[0],S=N[1],T=N[2],O=function(){var n=(0,s.Z)((0,t.Z)().mark((function n(a){var s,r,i;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.preventDefault(),!j){n.next=14;break}return n.prev=2,n.next=5,k("http://localhost:5000/api/users/login","POST",JSON.stringify({email:C.inputs.email.value,password:C.inputs.password.value}),{"Content-Type":"application/json"});case 5:s=n.sent,console.log(s),e.login(s.userId,s.token),n.next=12;break;case 10:n.prev=10,n.t0=n.catch(2);case 12:n.next=29;break;case 14:return n.prev=14,(r=new FormData).append("email",C.inputs.email.value),r.append("name",C.inputs.name.value),r.append("password",C.inputs.password.value),r.append("image",C.inputs.image.value),n.next=22,k("".concat("http://localhost:5000","/api/users/signup"),"POST",r);case 22:i=n.sent,console.log(i),e.login(i.userId,i.token),n.next=29;break;case 27:n.prev=27,n.t1=n.catch(14);case 29:case"end":return n.stop()}}),n,null,[[2,10],[14,27]])})));return function(e){return n.apply(this,arguments)}}();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d.Z,{error:I,onClear:y}),(0,h.jsxs)(o.Z,{className:"authentication",children:[b&&(0,h.jsx)(p.Z,{asOverlay:!0}),(0,h.jsx)("h2",{children:"Login Required"}),(0,h.jsx)("hr",{}),(0,h.jsxs)("form",{onSubmit:O,children:[!j&&(0,h.jsx)(u.Z,{element:"input",id:"name",type:"text",label:"Your Name",validators:[(0,m.hg)()],errorText:"Please enter a name.",onInput:S}),!j&&(0,h.jsx)(g.Z,{id:"image",center:!0,onInput:S,errorText:"Please Provide an Image"}),(0,h.jsx)(u.Z,{element:"input",id:"email",type:"email",label:"E-Mail",validators:[(0,m.Ox)()],errorText:"Please enter a valid email address.",onInput:S}),(0,h.jsx)(u.Z,{element:"input",id:"password",type:"password",label:"Password",validators:[(0,m.CP)(6)],errorText:"Please enter a valid password, at least 6 characters.",onInput:S}),(0,h.jsx)(c.Z,{type:"submit",disabled:!C.isValid,children:j?"LOGIN":"SIGNUP"})]}),(0,h.jsxs)(c.Z,{inverse:!0,onClick:function(){j?T((0,r.Z)((0,r.Z)({},C.inputs),{},{name:{value:"",isValid:!1},image:{value:null,isValid:!1}}),!1):T((0,r.Z)((0,r.Z)({},C.inputs),{},{name:void 0,image:void 0}),C.inputs.email.isValid&&C.inputs.password.isValid),Z((function(e){return!e}))},children:["SWITCH TO ",j?"SIGNUP":"LOGIN"]})]})]})}}}]);
//# sourceMappingURL=418.638fb8c0.chunk.js.map