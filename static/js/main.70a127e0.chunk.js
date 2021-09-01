(this["webpackJsonptt-web"]=this["webpackJsonptt-web"]||[]).push([[0],{46:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(6),s=n.n(r),i=(n(46),n(12)),l=n.n(i),o=n(15),u=n(10),d=n(25),j=n(3),f=n(36),x=n.n(f),m=n(37),h=n.n(m).a.create({baseURL:"https://api.spotify.com/v1",headers:{Accept:"application/json","Content-Type":"application/json"}});h.interceptors.request.use(function(){var e=Object(o.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,sessionStorage.getItem("token");case 2:return(n=e.sent)&&(t.headers.Authorization=n),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return Promise.reject(e)}));var b=n(41),p=n(19),v=(n(67),n(1)),O=["value","dragging","index"],g=function(e){var t=e.onChange,n=e.disabled,a=p.b.Handle;return Object(v.jsx)(p.b,{disabled:n,min:50,max:150,defaultValue:100,handle:function(e){var t=e.value,n=e.dragging,c=e.index,r=Object(b.a)(e,O);return Object(v.jsx)(p.a,{prefixCls:"rc-slider-tooltip",overlay:"".concat(t," %"),visible:n,placement:"top",children:Object(v.jsx)(a,Object(u.a)({value:t},r))},c)},onChange:t,handleStyle:{height:20,width:20,marginTop:-8,backgroundColor:"#F87171",border:0},railStyle:{height:4,borderRadius:50},trackStyle:{background:"none"}})},y=function(e,t){var n=new FileReader,a=new(window.OfflineAudioContext||window.webkitOfflineAudioContext)(2,1323e3,44100);n.onload=function(){a.decodeAudioData(n.result,(function(e){var t=a.createBufferSource();t.buffer=e;var n=a.createBiquadFilter();n.type="lowpass",n.frequency.value=150,n.Q.value=1,t.connect(n);var c=a.createBiquadFilter();c.type="highpass",c.frequency.value=100,c.Q.value=1,n.connect(c),c.connect(a.destination),t.start(0),a.startRendering()})),a.oncomplete=function(e){var n=e.renderedBuffer,a=function(e){var t=[];return e.forEach((function(n,a){for(var c=function(c){for(var r={tempo:2646e3/(e[a+c].position-n.position),count:1};r.tempo<90;)r.tempo*=2;for(;r.tempo>180;)r.tempo/=2;r.tempo=Math.round(r.tempo),t.some((function(e){return e.tempo===r.tempo?e.count++:0}))||t.push(r)},r=1;a+r<e.length&&r<10;r++)c(r)})),t}(function(e){for(var t=22050,n=e[0].length/t,a=[],c=0;c<n;c++){for(var r=0,s=c*t;s<(c+1)*t;s++){var i=Math.max(Math.abs(e[0][s]),Math.abs(e[1][s]));(!r||i>r.volume)&&(r={position:s,volume:i})}a.push(r)}return a.sort((function(e,t){return t.volume-e.volume})),(a=a.splice(0,.5*a.length)).sort((function(e,t){return e.position-t.position})),a}([n.getChannelData(0),n.getChannelData(1)])).sort((function(e,t){return t.count-e.count})).splice(0,5);t(a)}},n.readAsArrayBuffer(e)};var w=function(e){return(e-(e%=60))/60+(9<e?":":":0")+~~e},N=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")},k=n(13),C={bpm:void 0,currentTime:0,duration:0,half:!1,isPlaying:!1,loop:!1,pitch:!1,rate:100},A=function(){var e,t,n,c=Object(j.g)().search,r=x.a.parse(c),s=r.token,i=r.id,f=Object(a.useState)({}),m=Object(d.a)(f,2),b=m[0],p=m[1],O=Object(a.useState)(Object(u.a)(Object(u.a)({},C),{},{bpm:null===b||void 0===b?void 0:b.tempo})),A=Object(d.a)(O,2),P=A[0],T=A[1],B=Object(a.useRef)(),M=document.getElementsByTagName("html")[0];Object(a.useEffect)((function(){s&&i&&(sessionStorage.setItem("token",s),S()),window.matchMedia("(prefers-color-scheme: dark)").matches?M.classList.add("scheme-dark"):M.classList.remove("scheme-dark")}),[s,i]);var S=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/tracks/".concat(i)).then((function(e){var t=e.data;R(t)})).catch(console.log);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/audio-features/".concat(i)).then((function(e){var n=e.data;p({name:t.name,artists:t.artists.map((function(e){return e.name})).join(", "),duration:t.duration_ms/1e3,link:t.external_urls.spotify,popularity:t.popularity,preview:t.preview_url,album:t.album.name,img:t.album.images[1].url,tempo:n.tempo})})).catch(console.log);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(e){B.current.currentTime=e,L({currentTime:e})},L=function(e){var t=Object(u.a)(Object(u.a)({},P),e);B.current.playbackRate=P.rate/100,B.current.preservesPitch=P.pitch,T(t)};return Object(v.jsxs)("main",{className:"flex flex-col h-screen items-center bg-gray-100 dark:bg-gray-900 p-5",children:[Object(v.jsxs)("div",{className:"flex flex-col w-full items-center",children:[Object(v.jsxs)("section",{className:"flex w-full sm:w-1/2 justify-between",children:[Object(v.jsxs)("div",{className:"left",children:[Object(v.jsx)("p",{className:"text-2xl font-bold text-gray-600",children:"BPM"}),Object(v.jsx)("p",{className:"text-xl font-semibold text-gray-400",children:"".concat(P.rate-100,"%")})]}),Object(v.jsxs)("div",{className:"right flex",children:[Object(v.jsx)("button",{onClick:function(){return p({}),T(Object(u.a)(Object(u.a)({},C),{},{bpm:0})),void B.current.pause()},children:Object(v.jsx)("p",{className:"text-3xl p-2 dark:text-gray-100",children:Object(v.jsx)(k.e,{})})}),Object(v.jsx)("p",{className:"font-bold text-6xl text-red-400",children:function(){var e=b.tempo*(P.rate/100),t=P.half?e/2:e;return Math.round(t)}()||0})]})]}),Object(v.jsx)("section",{className:"w-full sm:w-1/2 py-5 px-2",children:Object(v.jsxs)("div",{className:"relative w-4/5",children:[Object(v.jsx)("div",{className:"z-10 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden",children:Object(v.jsx)("img",{src:null!==(e=null===b||void 0===b?void 0:b.img)&&void 0!==e?e:"https://static.4shared.com/images/4sh_music_embed_player_default_cover.png?ver=-790556520",alt:"Cover"})}),Object(v.jsx)("div",{className:"z-0 absolute top-0 -right-16 sm:-right-32 bg-gray-700 rounded-full w-full h-full"})]})})]}),Object.keys(b).length>0&&Object(v.jsxs)("div",{className:"flex flex-col h-1/2 w-full justify-between dark:text-gray-100",children:[Object(v.jsxs)("section",{className:"flex w-full",children:[Object(v.jsxs)("div",{className:"flex flex-col p-1 w-1/5 justify-between gap-2",children:[Object(v.jsxs)("button",{onClick:function(){return L({loop:!P.loop})},className:N(P.loop?"bg-red-300 text-white":"bg-white text-gray-700","flex flex-col h-full rounded-xl justify-center items-center transition delay-100"),children:[Object(v.jsx)("p",{className:"text-3xl",children:Object(v.jsx)(k.a,{})}),Object(v.jsx)("p",{className:"text-sm",children:"Loop"})]}),Object(v.jsxs)("button",{onClick:function(){return L({pitch:!P.pitch})},className:N(P.pitch?"bg-red-300 text-white":"bg-white text-gray-700","flex flex-col h-full rounded-xl justify-center items-center transition delay-100"),children:[Object(v.jsx)("p",{className:"text-2xl",children:Object(v.jsx)(k.b,{})}),Object(v.jsx)("p",{className:"text-xs leading-3",children:"Master tempo"})]})]}),Object(v.jsxs)("div",{className:"flex flex-col h-full w-4/5 p-2",children:[Object(v.jsx)("div",{className:"h-1/2",children:Object(v.jsx)("h2",{className:"".concat(b.name.length>20?"text-xs":"text-xl"," font-bold"),children:null!==(t=null===b||void 0===b?void 0:b.name)&&void 0!==t?t:"Name placeholder etc..."})}),Object(v.jsxs)("div",{className:"flex h-1/2 items-center",children:[Object(v.jsx)("div",{className:"w-4/5 h-full py-2",children:Object(v.jsx)("h3",{className:"".concat(b.artists.length>20?"text-xs":"text-sm"," font-semibold text-gray-600"),children:null!==(n=null===b||void 0===b?void 0:b.artists)&&void 0!==n?n:"Artist 1, Artist 2... etc."})}),Object(v.jsx)("div",{className:"w-1/5",children:Object(v.jsx)("button",{onClick:function(){return L({half:!P.half})},className:N(P.half?"bg-red-300 text-white":"bg-white text-gray-700","flex w-full h-auto rounded-xl p-2 justify-center items-center"),children:Object(v.jsx)("p",{className:"text-3xl font-semibold",children:"\xbd"})})})]})]})]}),Object(v.jsxs)("section",{className:"w-full py-5 px-2",children:[Object(v.jsx)(g,{onChange:function(e){return L({rate:e})}}),Object(v.jsxs)("div",{className:"flex justify-between",children:[Object(v.jsx)("p",{className:"text-sm font-thin",children:"- 50%"}),Object(v.jsx)("p",{className:"text-sm font-thin",children:"+ 50%"})]})]}),Object(v.jsxs)("section",{className:"flex w-full h-1/3 justify-between items-center",children:[Object(v.jsxs)("div",{className:"w-9/12",children:[Object(v.jsx)("input",{onChange:function(e){var t=e.target.value*P.duration/100;_(t)},type:"range",value:P.duration?100*P.currentTime/P.duration:0,className:"w-full"}),Object(v.jsxs)("div",{className:"flex justify-between",children:[Object(v.jsx)("span",{className:"text-xs",children:w(P.currentTime)}),Object(v.jsx)("span",{className:"text-xs",children:w(P.duration)})]})]}),Object(v.jsx)("div",{className:"flex w-1/5 justify-center",children:Object(v.jsx)("button",{onClick:function(){P.isPlaying?B.current.pause():B.current.play(),L({isPlaying:!P.isPlaying})},className:"flex justify-center items-center",children:Object(v.jsxs)("p",{className:"text-4xl",children:[!P.isPlaying&&Object(v.jsx)(k.c,{}),P.isPlaying&&Object(v.jsx)(k.d,{})]})})})]})]}),Object(v.jsx)("audio",{preload:"true",ref:B,src:b.preview,onTimeUpdate:function(e){var t=e.target.currentTime;return L({currentTime:t})},onCanPlay:function(e){var t=e.target.duration;return L({duration:t})},onEnded:function(){return L({isPlaying:!1})}}),0===Object.keys(b).length&&Object(v.jsx)("div",{className:"flex items-center justify-center",children:Object(v.jsxs)("label",{className:"flex flex-col items-center p-4 bg-gray-200 rounded-2xl tracking-wide uppercase cursor-pointer",children:[Object(v.jsx)("span",{className:"text-base leading-normal",children:"Archivo"}),Object(v.jsx)("input",{type:"file",className:"hidden",accept:"audio/*",onChange:function(e){var t=e.target.files[0];y(t,(function(e){p({name:t.name,tempo:e[0].tempo,artists:"No artists",preview:URL.createObjectURL(t)}),T(Object(u.a)(Object(u.a)({},P),{},{bpm:e[0].tempo}))}))}})]})})]})},P=n(21);s.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(P.a,{children:Object(v.jsxs)(j.d,{children:[Object(v.jsx)(j.b,{path:"/",component:A}),Object(v.jsx)(j.a,{path:"/**",to:"/"})]})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.70a127e0.chunk.js.map