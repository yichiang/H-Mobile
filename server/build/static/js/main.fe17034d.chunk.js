(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/logo.1c92b8a7.svg"},27:function(e,t,a){},44:function(e,t,a){e.exports=a(85)},49:function(e,t,a){},78:function(e,t){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(24),o=a.n(c);a(49),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=a(87),s=a(88),l=a(43),u=a(3),d=a(4),h=a(7),m=a(6),f=a(8),p=a(2),v=(a(26),a(27),a(40)),g=a.n(v),b=window.location.origin.replace(/^http/,"ws");b.indexOf("localhost")>-1&&(b="localhost:4200");var j=g()(b);var O,y=function(e){function t(e){var a;Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).addMessage=function(e){console.log(e),a.setState({messages:Object(l.a)(a.state.messages).concat([e])}),console.log(a.state.messages)},a.state={timestamp:"no timestamp yet",message:"here",messages:[]},a.onMessageChange=a.onMessageChange.bind(Object(p.a)(Object(p.a)(a))),a.addMessage=a.addMessage.bind(Object(p.a)(Object(p.a)(a))),a.onSubmit=a.onSubmit.bind(Object(p.a)(Object(p.a)(a))),a.loadCamera=a.loadCamera.bind(Object(p.a)(Object(p.a)(a))),a.videoRef=i.a.createRef(),a.canvasRef=i.a.createRef();var n=Object(p.a)(Object(p.a)(a));return j.on("RECEIVE_MESSAGE",function(e){console.log("RECEIVE_MESSAGE",e),n.addMessage(e)}),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;if(e=function(e,a){return t.setState({timestamp:a})},j.on("timer",function(t){return e(null,t)}),j.emit("subscribeToTimer",1e3),navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msgGetUserMedia,navigator.getUserMedia&&navigator.getUserMedia({video:!0,audio:!1},this.loadCamera,this.loadFail),navigator.mediaDevices){navigator.mediaDevices.getUserMedia({video:{facingMode:"user",height:{min:360,ideal:720,max:1080}},audio:!0}).then(function(e){console.log("getUserMedia",e),t.stream=e,t.emit("stream",e)}).catch(function(e){return console.log(e)})}if(console.log(this.canvasRef.current),this.canvasRef.current){var a=this.canvasRef.current.getContext("2d");console.log("context",a),this.canvasRef.current.width=900,this.canvasRef.current.height=700,a.width=this.canvasRef.current.width,a.height=this.canvasRef.current.height}}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}},{key:"onSubmit",value:function(){j.emit("SEND_MESSAGE",{message:this.state.message})}},{key:"loadCamera",value:function(e){this.videoRef.current&&(this.videoRef.current.src=window.URL.createObjectURL(e),console.log("Camera connected"))}},{key:"loadFail",value:function(){console.log("Camera not connected")}},{key:"viewVideo",value:function(e,t){t.drawImage(e,0,0,t.width,t.height),j.emit("stream",this.canvasRef.current.toDataURL("image/webp"))}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",null,"This is the timer value: ",this.state.timestamp),i.a.createElement("video",{ref:this.videoRef,src:"",id:"video",style:{width:"700px",height:"350px"},autoplay:"true"}),i.a.createElement("canvas",{id:"preview",ref:this.canvasRef}),this.state.messages.map(function(e){return console.log(e),i.a.createElement("p",null,e.message)}),i.a.createElement("input",{value:this.state.message,onChange:this.onMessageChange}),i.a.createElement("button",{onClick:this.onSubmit},"Send"))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={},a.playRef=i.a.createRef(),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.on("stream",function(t){console.log(t),e.playRef.current.src=t})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},"Preview",i.a.createElement("img",{id:"play",ref:this.playRef,width:"500"}))}}]),t}(n.Component),E=a(11),k=a.n(E),w=function(){function e(){Object(u.a)(this,e),this.events={}}return Object(d.a)(e,[{key:"emit",value:function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return this.events[e]&&this.events[e].forEach(function(e){return e.apply(void 0,a)}),this}},{key:"on",value:function(e,t){return this.events[e]?this.events[e].push(t):this.events[e]=[t],this}},{key:"off",value:function(e,t){if(e&&k.a.isFunction(t)){var a=this.events[e],n=a.findIndex(function(e){return e===t});a.splice(n,1)}else this.events[e]=[];return this}}]),e}(),S=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"start",value:function(){var e=this;return navigator.mediaDevices.getUserMedia({video:{facingMode:"user",height:{min:360,ideal:720,max:1080}},audio:!0}).then(function(t){e.stream=t,e.emit("stream",t)}).catch(function(e){return console.log(e)}),this}},{key:"toggle",value:function(e,t){var a=arguments.length;return this.stream&&this.stream["get".concat(e,"Tracks")]().forEach(function(e){var n=2===a?t:!e.enabled;k.a.set(e,"enabled",n)}),this}},{key:"stop",value:function(){return this.stream&&this.stream.getTracks().forEach(function(e){return e.stop()}),this}}]),t}(w),M={iceServers:[{urls:["stun:stun.l.google.com:19302"]}]},D=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this))).pc=new RTCPeerConnection(M),a.pc.onicecandidate=function(e){return j.emit("call",{to:a.friendID,candidate:e.candidate})},a.pc.onaddstream=function(e){return a.emit("peerStream",e.stream)},a.mediaDevice=new S,a.friendID=e,a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"start",value:function(e,t){var a=this;return this.mediaDevice.on("stream",function(t){a.pc.addStream(t),a.emit("localStream",t),e?j.emit("request",{to:a.friendID}):a.createOffer()}).start(t),this}},{key:"stop",value:function(e){return e&&j.emit("end",{to:this.friendID}),this.mediaDevice.stop(),this.pc.close(),this.pc=null,this.off(),this}},{key:"createOffer",value:function(){return this.pc.createOffer().then(this.getDescription.bind(this)).catch(function(e){return console.log(e)}),this}},{key:"createAnswer",value:function(){return this.pc.createAnswer().then(this.getDescription.bind(this)).catch(function(e){return console.log(e)}),this}},{key:"getDescription",value:function(e){return this.pc.setLocalDescription(e),j.emit("call",{to:this.friendID,sdp:e}),this}},{key:"setRemoteDescription",value:function(e){var t=new RTCSessionDescription(e);return this.pc.setRemoteDescription(t),this}},{key:"addIceCandidate",value:function(e){if(e){var t=new RTCIceCandidate(e);this.pc.addIceCandidate(t)}return this}}]),t}(w),R=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"callWithVideo",value:function(e){var t=this,a={audio:!0};return a.video=e,function(){return t.props.startCall(!0,O,a)}}},{key:"render",value:function(){var e=this.props.clientId;return document.title="".concat(e," - VideoCall"),i.a.createElement("div",{className:"container main-window"},i.a.createElement("div",null,i.a.createElement("h3",null,"Hi, your ID is",i.a.createElement("input",{type:"text",className:"txt-clientId",value:e})),i.a.createElement("h4",null,"Get started by calling a friend below")),i.a.createElement("div",null,i.a.createElement("input",{type:"text",className:"txt-clientId",spellCheck:!1,placeholder:"Your friend ID",onChange:function(e){return O=e.target.value}}),i.a.createElement("div",null,i.a.createElement("button",{className:"btn-action fa fa-video-camera",onClick:this.callWithVideo(!0)}),i.a.createElement("button",{className:"btn-action fa fa-phone",onClick:this.callWithVideo(!1)}))))}}]),t}(n.Component),I=a(41),V=a(15),N=a.n(V),x=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={Video:!0,Audio:!0},a.btns=[{type:"Video",icon:"fa-video-camera"},{type:"Audio",icon:"fa-microphone"}],a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.setMediaStream()}},{key:"componentWillReceiveProps",value:function(e){if(!this.props.config&&e.config){var t=e.config,a=e.mediaDevice;k.a.forEach(t,function(e,t){return a.toggle(k.a.capitalize(t),e)}),this.setState({Video:t.video,Audio:t.audio})}}},{key:"componentDidUpdate",value:function(){this.setMediaStream()}},{key:"setMediaStream",value:function(){var e=this.props,t=e.peerSrc,a=e.localSrc;this.peerVideo&&t&&(this.peerVideo.srcObject=t),this.localVideo&&a&&(this.localVideo.srcObject=a)}},{key:"toggleMediaDevice",value:function(e){this.setState(Object(I.a)({},e,!this.state[e])),this.props.mediaDevice.toggle(e)}},{key:"renderControlButtons",value:function(){var e=this;return this.btns.map(function(t){return i.a.createElement("button",{key:"btn".concat(t.type),className:(a=t.icon,n=t.type,N()("btn-action fa ".concat(a),{disable:!e.state[n]})),onClick:function(){return e.toggleMediaDevice(t.type)}});var a,n})}},{key:"render",value:function(){var e=this,t=this.props.status;return i.a.createElement("div",{className:N()("call-window",t)},i.a.createElement("video",{id:"peerVideo",ref:function(t){return e.peerVideo=t},autoPlay:!0}),i.a.createElement("video",{id:"localVideo",ref:function(t){return e.localVideo=t},autoPlay:!0,muted:!0}),i.a.createElement("div",{className:"video-control"},this.renderControlButtons(),i.a.createElement("button",{className:"btn-action hangup fa fa-phone",onClick:function(){return e.props.endCall(!0)}})))}}]),t}(n.Component),U=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"acceptWithVideo",value:function(e){var t=this,a={audio:!0,video:e};return function(){return t.props.startCall(!1,t.props.callFrom,a)}}},{key:"render",value:function(){return i.a.createElement("div",{className:N()("call-modal",this.props.status)},i.a.createElement("p",null,i.a.createElement("span",{className:"caller"},this.props.callFrom)," is calling ..."),i.a.createElement("button",{className:"btn-action fa fa-video-camera",onClick:this.acceptWithVideo(!0)}),i.a.createElement("button",{className:"btn-action fa fa-phone",onClick:this.acceptWithVideo(!1)}),i.a.createElement("button",{className:"btn-action hangup fa fa-phone",onClick:this.props.rejectCall}))}}]),t}(n.Component),W=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={clientId:"",callWindow:"",callModal:"",callFrom:"",localSrc:null,peerSrc:null},a.pc={},a.config=null,a.startCallHandler=a.startCall.bind(Object(p.a)(Object(p.a)(a))),a.endCallHandler=a.endCall.bind(Object(p.a)(Object(p.a)(a))),a.rejectCallHandler=a.rejectCall.bind(Object(p.a)(Object(p.a)(a))),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.on("init",function(t){return e.setState({clientId:t.id})}).on("request",function(t){return e.setState({callModal:"active",callFrom:t.from})}).on("call",function(t){t.sdp?(e.pc.setRemoteDescription(t.sdp),"offer"===t.sdp.type&&e.pc.createAnswer()):e.pc.addIceCandidate(t.candidate)}).on("end",this.endCall.bind(this,!1)).emit("init")}},{key:"startCall",value:function(e,t,a){var n=this;this.config=a,this.pc=new D(t).on("localStream",function(t){var a={callWindow:"active",localSrc:t};e||(a.callModal=""),n.setState(a)}).on("peerStream",function(e){return n.setState({peerSrc:e})}).start(e,a)}},{key:"rejectCall",value:function(){j.emit("end",{to:this.state.callFrom}),this.setState({callModal:""})}},{key:"endCall",value:function(e){k.a.isFunction(this.pc.stop)&&this.pc.stop(e),this.pc={},this.config=null,this.setState({callWindow:"",localSrc:null,peerSrc:null})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(R,{clientId:this.state.clientId,startCall:this.startCallHandler}),i.a.createElement(x,{status:this.state.callWindow,localSrc:this.state.localSrc,peerSrc:this.state.peerSrc,config:this.config,mediaDevice:this.pc.mediaDevice,endCall:this.endCallHandler}),i.a.createElement(U,{status:this.state.callModal,startCall:this.startCallHandler,rejectCall:this.rejectCallHandler,callFrom:this.state.callFrom}))}}]),t}(n.Component),A=i.a.createElement(r.a,null,i.a.createElement("div",null,i.a.createElement(s.a,{exact:!0,path:"/",component:y}),i.a.createElement(s.a,{path:"/preview",component:C}),i.a.createElement(s.a,{path:"/test",component:W})));o.a.render(A,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[44,2,1]]]);
//# sourceMappingURL=main.fe17034d.chunk.js.map