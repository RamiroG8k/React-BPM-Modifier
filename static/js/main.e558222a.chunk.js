(this["webpackJsonptt-web"]=this["webpackJsonptt-web"]||[]).push([[0],{46:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(6),r=n.n(a),l=(n(46),n(16)),i=n(12),o=n.n(i),u=n(15),d=n(10),j=n(3),x=n(36),b=n.n(x),f=n(37),h=n.n(f).a.create({baseURL:"https://api.spotify.com/v1",headers:{Accept:"application/json","Content-Type":"application/json"}});h.interceptors.request.use(function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,sessionStorage.getItem("token");case 2:return(n=e.sent)&&(t.headers.Authorization=n),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return Promise.reject(e)}));var m=n(41),p=n(21),O=(n(67),n(1)),v=["value","dragging","index"],g=function(e){var t=e.onChange,n=e.disabled,c=p.b.Handle;return Object(O.jsx)(p.b,{disabled:n,min:50,max:150,defaultValue:100,handle:function(e){var t=e.value,n=e.dragging,s=e.index,a=Object(m.a)(e,v);return Object(O.jsx)(p.a,{prefixCls:"rc-slider-tooltip",overlay:"".concat(t," %"),visible:n,placement:"top",children:Object(O.jsx)(c,Object(l.a)({value:t},a))},s)},onChange:t,handleStyle:{height:20,width:20,marginTop:-8,backgroundColor:"#F87171",border:0},railStyle:{height:4,borderRadius:50},trackStyle:{background:"none"}})},w=function(e,t){var n=new FileReader,c=new(window.OfflineAudioContext||window.webkitOfflineAudioContext)(2,1323e3,44100);n.onload=function(){c.decodeAudioData(n.result,(function(e){var t=c.createBufferSource();t.buffer=e;var n=c.createBiquadFilter();n.type="lowpass",n.frequency.value=150,n.Q.value=1,t.connect(n);var s=c.createBiquadFilter();s.type="highpass",s.frequency.value=100,s.Q.value=1,n.connect(s),s.connect(c.destination),t.start(0),c.startRendering()})),c.oncomplete=function(e){var n=e.renderedBuffer,c=function(e){var t=[];return e.forEach((function(n,c){for(var s=function(s){for(var a={tempo:2646e3/(e[c+s].position-n.position),count:1};a.tempo<90;)a.tempo*=2;for(;a.tempo>180;)a.tempo/=2;a.tempo=Math.round(a.tempo),t.some((function(e){return e.tempo===a.tempo?e.count++:0}))||t.push(a)},a=1;c+a<e.length&&a<10;a++)s(a)})),t}(function(e){for(var t=22050,n=e[0].length/t,c=[],s=0;s<n;s++){for(var a=0,r=s*t;r<(s+1)*t;r++){var l=Math.max(Math.abs(e[0][r]),Math.abs(e[1][r]));(!a||l>a.volume)&&(a={position:r,volume:l})}c.push(a)}return c.sort((function(e,t){return t.volume-e.volume})),(c=c.splice(0,.5*c.length)).sort((function(e,t){return e.position-t.position})),c}([n.getChannelData(0),n.getChannelData(1)])).sort((function(e,t){return t.count-e.count})).splice(0,5);t(c)}},n.readAsArrayBuffer(e)};var y=function(e){return(e-(e%=60))/60+(9<e?":":":0")+~~e},N=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")},k=n(13),C=function(){var e,t,n,s=Object(j.g)().search,a=b.a.parse(s),r=a.token,i=a.id,x=Object(c.useState)({}),f=Object(d.a)(x,2),m=f[0],p=f[1],v=Object(c.useState)(!1),C=Object(d.a)(v,2),S=C[0],A=C[1],M=Object(c.useState)(100),B=Object(d.a)(M,2),R=B[0],_=B[1],q=Object(c.useState)(0),T=Object(d.a)(q,2),F=T[0],L=T[1],P=Object(c.useState)(0),U=Object(d.a)(P,2),z=U[0],D=U[1],E=Object(c.useState)(0),I=Object(d.a)(E,2),J=I[0],Q=I[1],H=Object(c.useState)(!1),V=Object(d.a)(H,2),G=V[0],K=V[1],W=Object(c.useState)(!0),X=Object(d.a)(W,2),Y=X[0],Z=X[1],$=Object(c.useState)(!1),ee=Object(d.a)($,2),te=ee[0],ne=ee[1],ce=Object(c.useRef)();Object(c.useEffect)((function(){r&&i&&(sessionStorage.setItem("token",r),se())}),[r,i]);var se=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/tracks/".concat(i)).then((function(e){var t=e.data;console.log(t),ae(t)})).catch(console.log);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/audio-features/".concat(i)).then((function(e){var n,c,s=e.data,a=Object(l.a)(Object(l.a)({},t),s),r=null!==(n=null===(c=t.artists)||void 0===c?void 0:c.map((function(e){return e.name})).join(", "))&&void 0!==n?n:"",i=Math.round(a.tempo);p({name:a.name,tempo:i,artists:r,src:a.preview_url,img:a.album.images[1].url}),L(i)})).catch(console.log);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("main",{className:"flex flex-col h-screen items-center bg-gray-100 p-5",children:[Object(O.jsxs)("div",{className:"flex flex-col w-full items-center",children:[Object(O.jsxs)("section",{className:"flex w-full sm:w-1/2 justify-between",children:[Object(O.jsxs)("div",{className:"left",children:[Object(O.jsx)("p",{className:"text-2xl font-bold text-gray-700",children:"BPM"}),Object(O.jsx)("p",{className:"text-xl font-semibold text-gray-400",children:"".concat(R,"%")})]}),Object(O.jsxs)("div",{className:"right flex",children:[Object(O.jsx)("button",{onClick:function(){return p({}),A(!1),_(100),L(0),D(0),Q(0),K(!1),Z(!0),void ne(!1)},children:Object(O.jsx)("p",{className:"text-3xl p-2",children:Object(O.jsx)(k.e,{})})}),Object(O.jsx)("p",{className:"font-bold text-6xl text-red-400",children:F})]})]}),Object(O.jsx)("section",{className:"w-full sm:w-1/2 py-5 px-2",children:Object(O.jsxs)("div",{className:"relative w-4/5",children:[Object(O.jsx)("div",{className:"z-10 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden",children:Object(O.jsx)("img",{src:null!==(e=null===m||void 0===m?void 0:m.img)&&void 0!==e?e:"https://static.4shared.com/images/4sh_music_embed_player_default_cover.png?ver=-790556520",alt:"Cover"})}),Object(O.jsx)("div",{className:"z-0 absolute top-0 -right-16 sm:-right-32 bg-gray-700 rounded-full w-full h-full"})]})})]}),Object.keys(m).length>0&&Object(O.jsxs)("div",{className:"flex flex-col h-1/2 w-full justify-between dark:text-gray-100",children:[Object(O.jsxs)("section",{className:"flex w-full",children:[Object(O.jsxs)("div",{className:"flex flex-col p-1 w-1/5 justify-between gap-2",children:[Object(O.jsxs)("button",{onClick:function(){return K(!G),void(ce.current.loop=G)},className:N(G?"bg-red-300 text-white":"bg-white text-gray-700","flex flex-col h-full rounded-xl justify-center items-center transition delay-100"),children:[Object(O.jsx)("p",{className:"text-3xl",children:Object(O.jsx)(k.a,{})}),Object(O.jsx)("p",{className:"text-sm",children:"Loop"})]}),Object(O.jsxs)("button",{onClick:function(){return Z(!Y),void(ce.current.preservesPitch=Y)},className:N(Y?"bg-white text-gray-700":"bg-red-300 text-white","flex flex-col h-full rounded-xl justify-center items-center transition delay-100"),children:[Object(O.jsx)("p",{className:"text-2xl",children:Object(O.jsx)(k.b,{})}),Object(O.jsx)("p",{className:"text-xs leading-3",children:"Master tempo"})]})]}),Object(O.jsxs)("div",{className:"flex flex-col h-full w-4/5 p-2",children:[Object(O.jsx)("div",{className:"h-1/2",children:Object(O.jsx)("h2",{className:"".concat(m.name.length>25?"text-xs":"text-xl"," font-bold"),children:null!==(t=null===m||void 0===m?void 0:m.name)&&void 0!==t?t:"Name placeholder etc..."})}),Object(O.jsxs)("div",{className:"flex h-1/2 items-center",children:[Object(O.jsx)("div",{className:"w-4/5 h-full py-2",children:Object(O.jsx)("h3",{className:"".concat(m.artists.length>25?"text-xs":"text-sm"," font-semibold text-gray-600"),children:null!==(n=null===m||void 0===m?void 0:m.artists)&&void 0!==n?n:"Artist 1, Artist 2... etc."})}),Object(O.jsx)("div",{className:"w-1/5",children:Object(O.jsx)("button",{onClick:function(){return ne(!te),void L(te?2*F:F/2)},className:N(te?"bg-red-300 text-white":"bg-white text-gray-700","flex w-full h-auto rounded-xl p-2 justify-center items-center"),children:Object(O.jsx)("p",{className:"text-3xl font-semibold",children:"\xbd"})})})]})]})]}),Object(O.jsxs)("section",{className:"w-full py-5 px-2",children:[Object(O.jsx)(g,{onChange:function(e){_(e),L(Math.round(e/100*(te?m.tempo/2:m.tempo))),ce.current.playbackRate=e/100}}),Object(O.jsxs)("div",{className:"flex justify-between",children:[Object(O.jsx)("p",{className:"text-sm font-thin",children:"- 50%"}),Object(O.jsx)("p",{className:"text-sm font-thin",children:"+ 50%"})]})]}),Object(O.jsxs)("section",{className:"flex w-full h-1/3 justify-between items-center",children:[Object(O.jsxs)("div",{className:"w-9/12",children:[Object(O.jsx)("input",{onChange:function(e){var t=ce.current,n=e.target.value*z/100;Q(n),t.currentTime=n},type:"range",value:z?100*J/z:0,className:"w-full"}),Object(O.jsxs)("div",{className:"flex justify-between",children:[Object(O.jsx)("span",{className:"text-xs",children:y(J)}),Object(O.jsx)("span",{className:"text-xs",children:y(z)})]})]}),Object(O.jsx)("div",{className:"flex w-1/5 justify-center",children:Object(O.jsx)("button",{onClick:function(){var e=ce.current;e.loop=G,S?(A(!1),e.pause()):(A(!0),e.play())},className:"flex justify-center items-center",children:Object(O.jsxs)("p",{className:"text-4xl",children:[!S&&Object(O.jsx)(k.c,{}),S&&Object(O.jsx)(k.d,{})]})})})]})]}),Object(O.jsx)("audio",{onTimeUpdate:function(e){return Q(e.target.currentTime)},onCanPlay:function(e){return D(e.target.duration)},preload:"true",ref:ce,src:m.src}),0===Object.keys(m).length&&Object(O.jsx)("div",{className:"flex items-center justify-center",children:Object(O.jsxs)("label",{className:"flex flex-col items-center p-4 bg-gray-200 rounded-2xl tracking-wide uppercase cursor-pointer",children:[Object(O.jsx)("span",{className:"text-base leading-normal",children:"Archivo"}),Object(O.jsx)("input",{type:"file",className:"hidden",accept:"audio/*",onChange:function(e){var t=e.target.files[0];w(t,(function(e){p({name:t.name,tempo:e[0].tempo,artists:"No artists",src:URL.createObjectURL(t)}),L(e[0].tempo)}))}})]})})]})},S=n(19);r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(S.a,{children:Object(O.jsxs)(j.d,{children:[Object(O.jsx)(j.b,{path:"/",component:C}),Object(O.jsx)(j.a,{path:"/**",to:"/"})]})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.e558222a.chunk.js.map