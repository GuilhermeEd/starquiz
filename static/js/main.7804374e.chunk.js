(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,n){e.exports=n(194)},192:function(e,t,n){},193:function(e,t,n){},194:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(56),i=n.n(o),c=n(100),l=n(10),s=n(101),u=n(62),m=n.n(u),f=n(102),h=m.a.mark(p),d=Object(l.c)({});function p(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)([]);case 2:case"end":return e.stop()}},h)}var b="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):l.d,O=Object(s.a)(),g=b(Object(l.a)(O)),v=Object(l.e)(d,{},g);O.run(p);var j=v;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=n(201),w=n(89),y=n.n(w)()({basename:"/starquiz"}),x=n(197),_=n(198),k=n(199),S=n(200),z=function(){return r.a.createElement("h1",null,"HomePage")},P=n(90),T=n(91),X=n(103),D=n(92),W=n(104),C=n(38),N=n(7);function I(){var e=Object(C.a)(["\n  0% {\n    top: 100vh;\n    transform: rotateX(20deg) translateZ(0);\n  }\n  100% { \n    top: -300rem;\n    transform: rotateX(25deg) translateZ(-125rem);\n  }\n"]);return I=function(){return e},e}var M={name:"1fvtdbe",styles:"display:flex;justify-content:center;height:100vh;perspective:60rem;overflow:hidden;color:#feda4a;font-family:'Pathway Gothic One',sans-serif;font-size:2rem;font-weight:600;letter-spacing:.25rem;line-height:150%;text-align:justify;"},B={name:"ejs4oy",styles:"z-index:1;position:fixed;top:-1.25rem;left:0;width:100%;min-height:75vh;background-image:linear-gradient(0deg,transparent,black 90%);"},F=Object(N.c)(I()),J={name:"c6s12a",styles:"font-size:90%;margin:0 0 5rem;text-align:center;text-transform:uppercase;"},L=function(e){return Object(N.b)("section",Object.assign({css:M},e))},Q=function(e){return Object(N.b)("div",Object.assign({css:B},e))},R=function(e){return Object(N.b)("div",Object.assign({css:(t=e.duration,Object(N.a)("position:relative;top:100vh;transform-origin:50% 100%;animation:",F," ",t/1e3,"s linear;"))},e));var t},U=function(e){return Object(N.b)("h2",Object.assign({css:J},e),e.children)},V=function(e){var t=e.title,n=e.duration,a=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,null),r.a.createElement(L,null,r.a.createElement(R,{duration:n},r.a.createElement(U,null,t),a)))};V.defaultProps={title:"",duration:6e4};var Y=V;function Z(){var e=Object(C.a)(["\n  0% {\n    top: 30vmin;\n    opacity: 1;\n    font-size: 30vmin;\n    letter-spacing: 1rem;\n  }\n  100% {\n    top: 15vmin;\n    opacity: 0;\n    font-size: 0;\n    letter-spacing: .1rem;\n  }\n"]);return Z=function(){return e},e}var q=Object(N.c)(Z()),A=function(e){return Object(N.b)("h1",Object.assign({css:(t=e.duration,Object(N.a)("transform:translate(-50%,-50%);position:absolute;left:50%;z-index:1;width:min-content;overflow:hidden;color:#feda4a;line-height:1;text-align:center;text-transform:lowercase;font-family:'Starjedi',sans-serif;animation:",q," ",t/1e3,"s linear forwards;"))},e),e.children);var t},G=function(e){var t=e.children,n=e.duration;return r.a.createElement(A,{duration:n},t)};G.defaultProps={children:"Star Wars",duration:7500};var H=G,$=(n(119),n(93)),K=n.n($),ee=n(196),te=Object(N.a)(""),ne=Object(N.a)(te,";position:fixed;bottom:1rem;right:1rem;"),ae=function(e){return Object(N.b)(ee.a,{to:e.to},Object(N.b)(K.a,Object.assign({css:ne},e)))},re=function(e){var t=e.children;return r.a.createElement(ae,Object.assign({type:"ghost"},e),t)};re.defaultProps={children:"Skip",to:"/home"};var oe=re,ie=n(98),ce=n.n(ie),le=[{path:"/",component:function(e){function t(){return Object(P.a)(this,t),Object(X.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(W.a)(t,e),Object(T.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){return y.push("/home")},3e4)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,{title:"Star Quiz"},r.a.createElement("p",null,"Can you name all the Star Wars characters?"),r.a.createElement("p",null,"You will have two minutes to name as many characters as you can."),r.a.createElement("p",null,"10 points if you can name the character without asking for aditional information."),r.a.createElement("p",null,"5 points if you name the character with the given information."),r.a.createElement("p",null,"Wrong answers won't affect your score."),r.a.createElement("p",null,"You can only try to guess a character's name once."),r.a.createElement("p",null,"Are you prepared? Then use the force!")),r.a.createElement("audio",{src:ce.a,autoPlay:!0}),r.a.createElement(H,null,"Star Quiz"),r.a.createElement(oe,null))}}]),t}(a.Component),default:!0},{path:"/home",component:z}],se=Object(S.a)(function(){var e=le.find(function(e){return e.default}),t=le.map(function(e){return r.a.createElement(x.a,Object.assign({key:e.path},e,{exact:!0}))});return r.a.createElement(k.a,null,t,r.a.createElement(x.a,{component:function(){return r.a.createElement(_.a,{to:e.path})}}))}),ue=(n(192),function(){return r.a.createElement(E.a,{history:y},r.a.createElement(se,null))});n(193);i.a.render(r.a.createElement(c.a,{store:j},r.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},98:function(e,t,n){e.exports=n.p+"static/media/star-wars-intro.3a4ae4f7.mp3"}},[[105,1,2]]]);
//# sourceMappingURL=main.7804374e.chunk.js.map