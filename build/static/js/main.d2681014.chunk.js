(this.webpackJsonpskybox=this.webpackJsonpskybox||[]).push([[0],{64:function(e,t,n){},65:function(e,t,n){},92:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(54),o=n.n(r),s=(n(64),n.p,n(65),n(1)),i=n(4),u=n(6),l=n(7),b=n(36),d=n(13),j=n(15),p=n.n(j),f=n(22),O=n(12),x=n(99),h=n(29),m=n.n(h);function g(){return(g=Object(f.a)(p.a.mark((function e(t,n,c){var a,r,o,s,i,u,l,b;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),t.preventDefault(),a=document.getElementById("text"),r=document.getElementById("front"),o=document.getElementById("right"),s=document.getElementById("back"),i=document.getElementById("left"),u=document.getElementById("top"),l=document.getElementById("bottom"),(b=new FormData).append("text",a.value),b.append("front",r.files[0]),b.append("right",o.files[0]),b.append("back",s.files[0]),b.append("left",i.files[0]),b.append("top",u.files[0]),b.append("bottom",l.files[0]),e.next=19,m.a.post("/upload",b,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(e){e.loaded/e.total*100>99&&c(!1),n(e.loaded/e.total*100)}});case 19:e.sent;case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return y.apply(this,arguments)}function y(){return(y=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/api/scenes");case 2:n=e.sent,t(n.data.scenes);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=n(100),k=n(8);var E=function(){var e=Object(c.useState)([]),t=Object(O.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(0),o=Object(O.a)(r,2),s=o[0],i=o[1],u=Object(c.useState)(!1),l=Object(O.a)(u,2),d=l[0],j=l[1];return Object(c.useEffect)(Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v(a);case 1:case"end":return e.stop()}}),e)}))),[]),Object(k.jsxs)("div",{children:[Object(k.jsx)("h1",{children:"Upload 6 images"}),Object(k.jsxs)(x.a,{onSubmit:function(e){!function(e,t,n){g.apply(this,arguments)}(e,i,j)},children:[Object(k.jsxs)(x.a.Group,{children:[Object(k.jsx)(x.a.Control,{type:"text",id:"text",placeholder:"Enter name of the project"}),Object(k.jsx)(x.a.File,{id:"front",label:"Frente"}),Object(k.jsx)(x.a.File,{id:"right",label:"Derecha"}),Object(k.jsx)(x.a.File,{id:"back",label:"atras"}),Object(k.jsx)(x.a.File,{id:"left",label:"izquierda"}),Object(k.jsx)(x.a.File,{id:"top",label:"arriba"}),Object(k.jsx)(x.a.File,{id:"bottom",label:"abajo"})]}),Object(k.jsx)("div",{class:"form-group",children:Object(k.jsxs)(w.a,{max:"100",color:"success",value:s,children:[Math.round(s,2),"%"]})}),Object(k.jsx)("button",{disabled:d,children:"Send"})]}),Object(k.jsx)("div",{children:Object(k.jsx)("ul",{children:n?n.map((function(e){return Object(k.jsx)("li",{children:Object(k.jsx)(b.b,{to:"/scene/".concat(e),children:e})})})):null})})]})},F=n(23),B=n(2),C=n(56),I=n(57);n(92);Object(F.b)({OrbitControls:C.a}),Object(F.b)({DeviceOrientationControls:I.a});var S=function(){var e=Object(F.d)(),t=e.camera,n=e.gl.domElement,a=Object(c.useRef)();return Object(F.c)((function(){return a.current.update()})),Object(k.jsx)("orbitControls",{ref:a,args:[t,n],autoRotate:!1,enableZoom:!1})},P=function(){var e=Object(F.d)(),t=e.camera,n=(e.gl.domElement,Object(c.useRef)());return Object(F.c)((function(){return n.current.update()})),Object(k.jsx)("deviceOrientationControls",{ref:n,args:[t],autoRotate:!1,enableZoom:!1})};function D(){var e=Object(c.useState)({}),t=Object(O.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){function e(){return(e=Object(f.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.location.href.split("/").pop(),e.next=3,m.a.get("/api/scenes/getimages/".concat(t));case 3:n=e.sent,a(n.data.scenes);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var r=Object(F.d)().scene,o=(new B.CubeTextureLoader).load(["".concat(n.right),"".concat(n.left),"".concat(n.top),"".concat(n.bottom),"".concat(n.front),"".concat(n.back)]);return r.background=o,null}var T=function(){return Object(k.jsxs)(F.a,{className:"canvas",children:[/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?Object(k.jsx)(P,{}):Object(k.jsx)(S,{}),Object(k.jsx)(D,{})]})},M=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(e){return Object(k.jsx)(c.Fragment,{children:Object(k.jsx)(b.a,{onUpdate:function(){return window.scrollTo(0,0)},children:Object(k.jsxs)(d.c,{children:[Object(k.jsx)(d.a,{exact:!0,path:"/",component:E}),Object(k.jsx)(d.a,{exact:!0,path:"/scene/:id",component:T})]})})})}}]),n}(c.Component);var R=function(){return Object(k.jsx)(M,{})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,101)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(R,{})}),document.getElementById("root")),L()}},[[96,1,2]]]);
//# sourceMappingURL=main.d2681014.chunk.js.map