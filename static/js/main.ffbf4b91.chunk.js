(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports={app:"App_app__3BT4Y",title:"App_title__2C-7r"}},11:function(e,t,n){e.exports={container:"CanvasContainer_container__1Ndyq",message:"CanvasContainer_message__M_lFT"}},19:function(e,t,n){e.exports=n(32)},24:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(18),o=n.n(i);n(24),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(10),s=n.n(c),l=function(e){var t=e.className;return r.a.createElement("canvas",{className:t,width:window.innerWidth,height:window.innerHeight})},u=n(11),d=n.n(u),m=n(9),v=n(2),p=n.n(v),y=p.a.TAU,f="kirby-face-canvas",b=function(e,t){var n=new p.a.Group({addTo:e,translate:{x:2.4*t,y:-2},rotate:{x:.1}});new p.a.Ellipse({width:1.4,height:5.5,addTo:n,stroke:1,color:"#333",fill:!0}),new p.a.Ellipse({width:1,height:2,addTo:n,translate:{y:-1.5,z:.5},stroke:.5,color:"#FFF",fill:!0})},w=function(e,t){new p.a.Ellipse({width:2.5,height:1,translate:{x:5.7*t,y:1.5,z:-1},rotate:{y:-10*t},addTo:e,color:"#F5A",stroke:1})},h=function(){var e=new p.a.Illustration({element:".".concat(f),zoom:3}),t=function(e){return new p.a.Anchor({translate:{z:10.5},addTo:e})}(function(e){return new p.a.Shape({stroke:22,addTo:e,color:"#F8B"})}(e));return b(t,1),b(t,-1),w(t,1),w(t,-1),function(e){new p.a.Shape({path:[{x:0,y:0},{bezier:[{x:1.1,y:0},{x:1.1,y:.2},{x:1.1,y:.5}]},{bezier:[{x:1.1,y:1.1},{x:.2,y:1.8},{x:0,y:1.8}]},{bezier:[{x:-.2,y:1.8},{x:-1.1,y:1.1},{x:-1.1,y:.5}]},{bezier:[{x:-1.1,y:.2},{x:-1.1,y:0},{x:0,y:0}]}],addTo:e,translate:{y:2,z:-.5},stroke:1,color:"#D03",fill:!0})}(t),e},E=function(e){var t=Object(a.useRef)(null),n=Object(a.useState)(1),r=Object(m.a)(n,2),i=r[0],o=r[1];return Object(a.useEffect)(function(){e&&(f=e);var n=h();n.updateRenderGraph(),t.current=n},[e]),{moveKirby:Object(a.useCallback)(function(e,n){var a=t.current;a.rotate.x+=y/360*-1*n*i,a.rotate.y+=y/360*-1*e*i,a.translate.x+=.1*e*i,a.translate.y+=.1*n*i,a.updateRenderGraph()},[t,i]),sensitivity:i,setSensitivity:o}},_=n(6),x=n.n(_),k=function(e){var t=e.sensitivity,n=e.setSensitivity;return r.a.createElement("div",{className:x.a.container},r.a.createElement("button",{className:x.a.button,onClick:function(){return n(t+1)}},"+"),r.a.createElement("span",{className:x.a.number},t),r.a.createElement("button",{className:x.a.button,onClick:function(){0!==t&&n(t-1)}},"-"))},g=function(){return r.a.createElement("section",{className:d.a.message},r.a.createElement("h1",null,"Not supported!"),r.a.createElement("p",null,"Your browser does not support device orientation...."),r.a.createElement("p",null,"Please try with mobile device!"))},N=function(){var e=function(){var e=Object(a.useState)(null),t=Object(m.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)(function(){var e=function(e){var t=e.alpha,n=e.beta,a=e.gamma;r({alpha:t,beta:n,gamma:a})};return window.addEventListener("deviceorientation",e),function(){window.removeEventListener("deviceorientation",e)}},[n]),{deviceOrientation:n}}().deviceOrientation,t=E("kirby-canvas"),n=t.moveKirby,i=t.sensitivity,o=t.setSensitivity;return Object(a.useEffect)(function(){if(e){var t=e.beta,a=e.gamma;n(a,t/2)}},[e,n]),r.a.createElement("div",{className:d.a.container},!e&&r.a.createElement(g,null),r.a.createElement(k,{sensitivity:i,setSensitivity:o}),r.a.createElement(l,{className:"kirby-canvas"}))};var O=function(){return r.a.createElement("div",{className:s.a.app},r.a.createElement("h1",{className:s.a.title},"korokoro kirby"),r.a.createElement(N,null))};o.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,t,n){e.exports={container:"SensitivityUpdate_container__3FVR0",button:"SensitivityUpdate_button__ekUUh",number:"SensitivityUpdate_number__2vV_U"}}},[[19,1,2]]]);
//# sourceMappingURL=main.ffbf4b91.chunk.js.map