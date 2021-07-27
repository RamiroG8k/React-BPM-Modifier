(this["webpackJsonptt-web"]=this["webpackJsonptt-web"]||[]).push([[0],{44:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(6),s=n.n(r),o=(n(44),n(15)),i=n(11),u=n.n(i),l=n(14),d=n(12),j=n(3),f=n(35),p=n.n(f),b=n(36),h=n.n(b).a.create({baseURL:"https://api.spotify.com/v1",headers:{Accept:"application/json","Content-Type":"application/json"}});h.interceptors.request.use(function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,sessionStorage.getItem("token");case 2:return(n=e.sent)&&(t.headers.Authorization=n),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return Promise.reject(e)}));var m=n(39),x=n(19),O=(n(65),n(2)),v=function(e){var t=e.onChange,n=x.b.Handle;return Object(O.jsx)(x.b,{min:50,max:150,defaultValue:100,handle:function(e){var t=e.value,a=e.dragging,c=e.index,r=Object(m.a)(e,["value","dragging","index"]);return Object(O.jsx)(x.a,{prefixCls:"rc-slider-tooltip",overlay:"".concat(t," %"),visible:a,placement:"top",children:Object(O.jsx)(n,Object(o.a)({value:t},r))},c)},onChange:t})},g=function(e,t){var n=new FileReader,a=new(window.OfflineAudioContext||window.webkitOfflineAudioContext)(2,1323e3,44100);n.onload=function(){a.decodeAudioData(n.result,(function(e){var t=a.createBufferSource();t.buffer=e;var n=a.createBiquadFilter();n.type="lowpass",n.frequency.value=150,n.Q.value=1,t.connect(n);var c=a.createBiquadFilter();c.type="highpass",c.frequency.value=100,c.Q.value=1,n.connect(c),c.connect(a.destination),t.start(0),a.startRendering()})),a.oncomplete=function(e){var n=e.renderedBuffer,a=function(e){var t=[];return e.forEach((function(n,a){for(var c=function(c){for(var r={tempo:2646e3/(e[a+c].position-n.position),count:1};r.tempo<90;)r.tempo*=2;for(;r.tempo>180;)r.tempo/=2;r.tempo=Math.round(r.tempo),t.some((function(e){return e.tempo===r.tempo?e.count++:0}))||t.push(r)},r=1;a+r<e.length&&r<10;r++)c(r)})),t}(function(e){for(var t=22050,n=e[0].length/t,a=[],c=0;c<n;c++){for(var r=0,s=c*t;s<(c+1)*t;s++){var o=Math.max(Math.abs(e[0][s]),Math.abs(e[1][s]));(!r||o>r.volume)&&(r={position:s,volume:o})}a.push(r)}return a.sort((function(e,t){return t.volume-e.volume})),(a=a.splice(0,.5*a.length)).sort((function(e,t){return e.position-t.position})),a}([n.getChannelData(0),n.getChannelData(1)])).sort((function(e,t){return t.count-e.count})).splice(0,5);t(a)}},n.readAsArrayBuffer(e)};var w=function(e){return(e-(e%=60))/60+(9<e?":":":0")+~~e},y=function(){var e=Object(j.g)().search,t=p.a.parse(e),n=t.token,c=t.id,r=Object(a.useState)({}),s=Object(d.a)(r,2),i=s[0],f=s[1],b=Object(a.useState)(!1),m=Object(d.a)(b,2),x=m[0],y=m[1],N=Object(a.useState)(100),k=Object(d.a)(N,2),C=k[0],A=k[1],S=Object(a.useState)(0),M=Object(d.a)(S,2),B=M[0],R=M[1],q=Object(a.useState)(0),P=Object(d.a)(q,2),U=P[0],E=P[1],L=Object(a.useState)(0),T=Object(d.a)(L,2),D=T[0],F=T[1],I=Object(a.useRef)();Object(a.useEffect)((function(){n&&c&&(sessionStorage.setItem("token",n),J())}),[n,c]);var J=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/tracks/".concat(c)).then((function(e){var t=e.data;Q(t)})).catch(console.log);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/audio-features/".concat(c)).then((function(e){var n,a,c=e.data,r=Object(o.a)(Object(o.a)({},t),c),s=null!==(n=null===(a=t.artists)||void 0===a?void 0:a.map((function(e){return e.name})).join(", "))&&void 0!==n?n:"",i=Math.round(r.tempo);f({name:r.name,tempo:i,artists:s,src:r.preview_url}),R(i)})).catch(console.log);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("main",{className:"h-screen w-screen bg-gray-200",children:[Object(O.jsx)("div",{className:"flex",children:Object(O.jsxs)("section",{className:"flex flex-col w-full sm:w-1/4 h-1/4 m-5 sm:mx-auto bg-white rounded-4xl",children:[Object(O.jsxs)("div",{className:"text-center leading-5 mt-4 text-xl",children:[Object(O.jsx)("h2",{className:"font-medium",children:"Ahora reproduciendo"}),Object(O.jsxs)("h3",{className:"font-bold text-lg",children:[null===i||void 0===i?void 0:i.name," - ",i.artists]})]}),Object(O.jsxs)("div",{className:"flex h-full justify-center items-center text-center",children:[Object(O.jsx)("div",{className:"w-auto",children:Object(O.jsx)("p",{className:"font-bold text-8xl text-red-400",children:B})}),Object(O.jsxs)("div",{className:"text-left",children:[Object(O.jsx)("p",{className:"text-2xl font-bold text-gray-700",children:"BPM"}),Object(O.jsx)("p",{className:"text-xl font-semibold text-gray-400",children:"".concat(C,"%")})]})]})]})}),0===Object.keys(i).length&&Object(O.jsx)("div",{className:"flex items-center justify-center",children:Object(O.jsxs)("label",{className:"flex flex-col items-center p-4 bg-white text-blue rounded-3xl shadow-lg tracking-wide uppercase border border-blue cursor-pointer",children:[Object(O.jsx)("span",{className:"text-base leading-normal",children:"Archivo"}),Object(O.jsx)("input",{type:"file",className:"hidden",accept:"audio/*",onChange:function(e){var t=e.target.files[0];g(t,(function(e){f({name:t.name,tempo:e[0].tempo,artists:"",src:URL.createObjectURL(t)}),R(e[0].tempo)}))}})]})}),Object(O.jsx)("audio",{onTimeUpdate:function(e){return F(e.target.currentTime)},onCanPlay:function(e){return E(e.target.duration)},preload:"true",ref:I,src:i.src}),Object(O.jsxs)("section",{className:"flex flex-col justify-center items-center space-y-4 p-4",children:[Object(O.jsx)("button",{disabled:0===Object.keys(i).length,onClick:function(){var e=I.current;x?(y(!1),e.pause()):(y(!0),e.play())},className:"p-2 bg-red-300 disabled:opacity-50 rounded-xl",children:Object(O.jsx)("p",{className:"text-white font-bold",children:x?"PAUSE":"PLAY"})}),0!==Object.keys(i).length&&Object(O.jsxs)("section",{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{children:w(D)}),Object(O.jsx)("input",{onChange:function(e){var t=I.current,n=e.target.value*U/100;F(n),t.currentTime=n},type:"range",value:U?100*D/U:0}),Object(O.jsx)("span",{children:w(U)})]}),Object(O.jsx)(v,{onChange:function(e){A(e),R(Math.round(e/100*i.tempo)),I.current.playbackRate=e/100}})]})]})]})},N=n(21);s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(N.a,{children:Object(O.jsxs)(j.d,{children:[Object(O.jsx)(j.b,{path:"/",component:y}),Object(O.jsx)(j.a,{path:"/**",to:"/"})]})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.1ef53891.chunk.js.map