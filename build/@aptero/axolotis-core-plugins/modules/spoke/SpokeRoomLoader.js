/*!
 * 
 *   @aptero/axolotis-core-plugins v1.0.0
 *   https://github.com/ApteroSAS/axolotis-player
 *
 *   Copyright (c) Aptero (https://github.com/ApteroSAS/axolotis-player) and project contributors.
 *
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */
"use strict";(self.webpackChunkaxolotis_core_plugins=self.webpackChunkaxolotis_core_plugins||[]).push([[826],{342:function(e,t,s){s.r(t),s.d(t,{Factory:function(){return q},SpokeRoomLoader:function(){return J}});var i=s(919);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class o{constructor(){n(this,"scene",void 0),n(this,"mesh",void 0),n(this,"navMesh",void 0)}async loadScene(e,t){this.scene=t.scene,this.mesh=await t.loadAssets(e),this.mesh=this.mesh.scene,this.mesh.traverse((e=>{e.isMesh&&"navMesh"===e.name&&(this.navMesh=e)})),this.scene.add(this.mesh)}}var r=e=>{if("function"==typeof e)return e;return function(){return e}},h="undefined"!=typeof self?self:null,a="undefined"!=typeof window?window:null,c=h||a||void 0,l=0,u=1,d=2,p=3,f="closed",g="errored",m="joined",b="joining",v="leaving",y="phx_close",C="phx_error",k="phx_join",T="phx_reply",R="phx_leave",w="longpoll",E="websocket",j=4,L=class{constructor(e,t,s,i){this.channel=e,this.event=t,this.payload=s||function(){return{}},this.receivedResp=null,this.timeout=i,this.timeoutTimer=null,this.recHooks=[],this.sent=!1}resend(e){this.timeout=e,this.reset(),this.send()}send(){this.hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(e,t){return this.hasReceived(e)&&t(this.receivedResp.response),this.recHooks.push({status:e,callback:t}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}matchReceive({status:e,response:t,_ref:s}){this.recHooks.filter((t=>t.status===e)).forEach((e=>e.callback(t)))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,(e=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=e,this.matchReceive(e)})),this.timeoutTimer=setTimeout((()=>{this.trigger("timeout",{})}),this.timeout)}hasReceived(e){return this.receivedResp&&this.receivedResp.status===e}trigger(e,t){this.channel.trigger(this.refEvent,{status:e,response:t})}},S=class{constructor(e,t){this.callback=e,this.timerCalc=t,this.timer=null,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout((()=>{this.tries=this.tries+1,this.callback()}),this.timerCalc(this.tries+1))}},P=class{static request(e,t,s,i,n,o,r){if(c.XDomainRequest){let s=new c.XDomainRequest;this.xdomainRequest(s,e,t,i,n,o,r)}else{let h=new c.XMLHttpRequest;this.xhrRequest(h,e,t,s,i,n,o,r)}}static xdomainRequest(e,t,s,i,n,o,r){e.timeout=n,e.open(t,s),e.onload=()=>{let t=this.parseJSON(e.responseText);r&&r(t)},o&&(e.ontimeout=o),e.onprogress=()=>{},e.send(i)}static xhrRequest(e,t,s,i,n,o,r,h){e.open(t,s,!0),e.timeout=o,e.setRequestHeader("Content-Type",i),e.onerror=()=>{h&&h(null)},e.onreadystatechange=()=>{if(e.readyState===j&&h){let t=this.parseJSON(e.responseText);h(t)}},r&&(e.ontimeout=r),e.send(n)}static parseJSON(e){if(!e||""===e)return null;try{return JSON.parse(e)}catch(t){return console&&console.log("failed to parse JSON response",e),null}}static serialize(e,t){let s=[];for(var i in e){if(!Object.prototype.hasOwnProperty.call(e,i))continue;let n=t?`${t}[${i}]`:i,o=e[i];"object"==typeof o?s.push(this.serialize(o,n)):s.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}return s.join("&")}static appendParams(e,t){if(0===Object.keys(t).length)return e;let s=e.match(/\?/)?"&":"?";return`${e}${s}${this.serialize(t)}`}},_=class{constructor(e){this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(e),this.readyState=l,this.poll()}normalizeEndpoint(e){return e.replace("ws://","http://").replace("wss://","https://").replace(new RegExp("(.*)/"+E),"$1/"+w)}endpointURL(){return P.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(){this.close(),this.readyState=l}ontimeout(){this.onerror("timeout"),this.closeAndRetry()}poll(){this.readyState!==u&&this.readyState!==l||P.request("GET",this.endpointURL(),"application/json",null,this.timeout,this.ontimeout.bind(this),(e=>{if(e){var{status:t,token:s,messages:i}=e;this.token=s}else t=0;switch(t){case 200:i.forEach((e=>{setTimeout((()=>{this.onmessage({data:e})}),0)})),this.poll();break;case 204:this.poll();break;case 410:this.readyState=u,this.onopen(),this.poll();break;case 403:this.onerror(),this.close();break;case 0:case 500:this.onerror(),this.closeAndRetry();break;default:throw new Error(`unhandled poll status ${t}`)}}))}send(e){P.request("POST",this.endpointURL(),"application/json",e,this.timeout,this.onerror.bind(this,"timeout"),(e=>{e&&200===e.status||(this.onerror(e&&e.status),this.closeAndRetry())}))}close(e,t){this.readyState=p,this.onclose()}},A={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(e,t){if(e.payload.constructor===ArrayBuffer)return t(this.binaryEncode(e));{let s=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(s))}},decode(e,t){if(e.constructor===ArrayBuffer)return t(this.binaryDecode(e));{let[s,i,n,o,r]=JSON.parse(e);return t({join_ref:s,ref:i,topic:n,event:o,payload:r})}},binaryEncode(e){let{join_ref:t,ref:s,event:i,topic:n,payload:o}=e,r=this.META_LENGTH+t.length+s.length+n.length+i.length,h=new ArrayBuffer(this.HEADER_LENGTH+r),a=new DataView(h),c=0;a.setUint8(c++,this.KINDS.push),a.setUint8(c++,t.length),a.setUint8(c++,s.length),a.setUint8(c++,n.length),a.setUint8(c++,i.length),Array.from(t,(e=>a.setUint8(c++,e.charCodeAt(0)))),Array.from(s,(e=>a.setUint8(c++,e.charCodeAt(0)))),Array.from(n,(e=>a.setUint8(c++,e.charCodeAt(0)))),Array.from(i,(e=>a.setUint8(c++,e.charCodeAt(0))));var l=new Uint8Array(h.byteLength+o.byteLength);return l.set(new Uint8Array(h),0),l.set(new Uint8Array(o),h.byteLength),l.buffer},binaryDecode(e){let t=new DataView(e),s=t.getUint8(0),i=new TextDecoder;switch(s){case this.KINDS.push:return this.decodePush(e,t,i);case this.KINDS.reply:return this.decodeReply(e,t,i);case this.KINDS.broadcast:return this.decodeBroadcast(e,t,i)}},decodePush(e,t,s){let i=t.getUint8(1),n=t.getUint8(2),o=t.getUint8(3),r=this.HEADER_LENGTH+this.META_LENGTH-1,h=s.decode(e.slice(r,r+i));r+=i;let a=s.decode(e.slice(r,r+n));r+=n;let c=s.decode(e.slice(r,r+o));return r+=o,{join_ref:h,ref:null,topic:a,event:c,payload:e.slice(r,e.byteLength)}},decodeReply(e,t,s){let i=t.getUint8(1),n=t.getUint8(2),o=t.getUint8(3),r=t.getUint8(4),h=this.HEADER_LENGTH+this.META_LENGTH,a=s.decode(e.slice(h,h+i));h+=i;let c=s.decode(e.slice(h,h+n));h+=n;let l=s.decode(e.slice(h,h+o));h+=o;let u=s.decode(e.slice(h,h+r));h+=r;let d=e.slice(h,e.byteLength);return{join_ref:a,ref:c,topic:l,event:T,payload:{status:u,response:d}}},decodeBroadcast(e,t,s){let i=t.getUint8(1),n=t.getUint8(2),o=this.HEADER_LENGTH+2,r=s.decode(e.slice(o,o+i));o+=i;let h=s.decode(e.slice(o,o+n));return o+=n,{join_ref:null,ref:null,topic:r,event:h,payload:e.slice(o,e.byteLength)}}},H=class{constructor(e,t={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.timeout=t.timeout||1e4,this.transport=t.transport||c.WebSocket||_,this.establishedConnections=0,this.defaultEncoder=A.encode.bind(A),this.defaultDecoder=A.decode.bind(A),this.closeWasClean=!1,this.binaryType=t.binaryType||"arraybuffer",this.connectClock=1,this.transport!==_?(this.encode=t.encode||this.defaultEncoder,this.decode=t.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder);let s=null;a&&a.addEventListener&&(a.addEventListener("pagehide",(e=>{this.conn&&(this.disconnect(),s=this.connectClock)})),a.addEventListener("pageshow",(e=>{s===this.connectClock&&(s=null,this.connect())}))),this.heartbeatIntervalMs=t.heartbeatIntervalMs||3e4,this.rejoinAfterMs=e=>t.rejoinAfterMs?t.rejoinAfterMs(e):[1e3,2e3,5e3][e-1]||1e4,this.reconnectAfterMs=e=>t.reconnectAfterMs?t.reconnectAfterMs(e):[10,50,100,150,200,250,500,1e3,2e3][e-1]||5e3,this.logger=t.logger||null,this.longpollerTimeout=t.longpollerTimeout||2e4,this.params=r(t.params||{}),this.endPoint=`${e}/${E}`,this.vsn=t.vsn||"2.0.0",this.heartbeatTimer=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new S((()=>{this.teardown((()=>this.connect()))}),this.reconnectAfterMs)}replaceTransport(e){this.disconnect(),this.transport=e}protocol(){return location.protocol.match(/^https/)?"wss":"ws"}endPointURL(){let e=P.appendParams(P.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return"/"!==e.charAt(0)?e:"/"===e.charAt(1)?`${this.protocol()}:${e}`:`${this.protocol()}://${location.host}${e}`}disconnect(e,t,s){this.connectClock++,this.closeWasClean=!0,this.reconnectTimer.reset(),this.teardown(e,t,s)}connect(e){this.connectClock++,e&&(console&&console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),this.params=r(e)),this.conn||(this.closeWasClean=!1,this.conn=new this.transport(this.endPointURL()),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=e=>this.onConnError(e),this.conn.onmessage=e=>this.onConnMessage(e),this.conn.onclose=e=>this.onConnClose(e))}log(e,t,s){this.logger(e,t,s)}hasLogger(){return null!==this.logger}onOpen(e){let t=this.makeRef();return this.stateChangeCallbacks.open.push([t,e]),t}onClose(e){let t=this.makeRef();return this.stateChangeCallbacks.close.push([t,e]),t}onError(e){let t=this.makeRef();return this.stateChangeCallbacks.error.push([t,e]),t}onMessage(e){let t=this.makeRef();return this.stateChangeCallbacks.message.push([t,e]),t}onConnOpen(){this.hasLogger()&&this.log("transport",`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.resetHeartbeat(),this.stateChangeCallbacks.open.forEach((([,e])=>e()))}heartbeatTimeout(){this.pendingHeartbeatRef&&(this.pendingHeartbeatRef=null,this.hasLogger()&&this.log("transport","heartbeat timeout. Attempting to re-establish connection"),this.abnormalClose("heartbeat timeout"))}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,clearTimeout(this.heartbeatTimer),setTimeout((()=>this.sendHeartbeat()),this.heartbeatIntervalMs))}teardown(e,t,s){if(!this.conn)return e&&e();this.waitForBufferDone((()=>{this.conn&&(t?this.conn.close(t,s||""):this.conn.close()),this.waitForSocketClosed((()=>{this.conn&&(this.conn.onclose=function(){},this.conn=null),e&&e()}))}))}waitForBufferDone(e,t=1){5!==t&&this.conn&&this.conn.bufferedAmount?setTimeout((()=>{this.waitForBufferDone(e,t+1)}),150*t):e()}waitForSocketClosed(e,t=1){5!==t&&this.conn&&this.conn.readyState!==p?setTimeout((()=>{this.waitForSocketClosed(e,t+1)}),150*t):e()}onConnClose(e){let t=e&&e.code;this.hasLogger()&&this.log("transport","close",e),this.triggerChanError(),clearTimeout(this.heartbeatTimer),this.closeWasClean||1e3===t||this.reconnectTimer.scheduleTimeout(),this.stateChangeCallbacks.close.forEach((([,t])=>t(e)))}onConnError(e){this.hasLogger()&&this.log("transport",e);let t=this.transport,s=this.establishedConnections;this.stateChangeCallbacks.error.forEach((([,i])=>{i(e,t,s)})),(t===this.transport||s>0)&&this.triggerChanError()}triggerChanError(){this.channels.forEach((e=>{e.isErrored()||e.isLeaving()||e.isClosed()||e.trigger(C)}))}connectionState(){switch(this.conn&&this.conn.readyState){case l:return"connecting";case u:return"open";case d:return"closing";default:return"closed"}}isConnected(){return"open"===this.connectionState()}remove(e){this.off(e.stateChangeRefs),this.channels=this.channels.filter((t=>t.joinRef()!==e.joinRef()))}off(e){for(let t in this.stateChangeCallbacks)this.stateChangeCallbacks[t]=this.stateChangeCallbacks[t].filter((([t])=>-1===e.indexOf(t)))}channel(e,t={}){let s=new class{constructor(e,t,s){this.state=f,this.topic=e,this.params=r(t||{}),this.socket=s,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new L(this,k,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new S((()=>{this.socket.isConnected()&&this.rejoin()}),this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError((()=>this.rejoinTimer.reset()))),this.stateChangeRefs.push(this.socket.onOpen((()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()}))),this.joinPush.receive("ok",(()=>{this.state=m,this.rejoinTimer.reset(),this.pushBuffer.forEach((e=>e.send())),this.pushBuffer=[]})),this.joinPush.receive("error",(()=>{this.state=g,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()})),this.onClose((()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log("channel",`close ${this.topic} ${this.joinRef()}`),this.state=f,this.socket.remove(this)})),this.onError((e=>{this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,e),this.isJoining()&&this.joinPush.reset(),this.state=g,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()})),this.joinPush.receive("timeout",(()=>{this.socket.hasLogger()&&this.socket.log("channel",`timeout ${this.topic} (${this.joinRef()})`,this.joinPush.timeout),new L(this,R,r({}),this.timeout).send(),this.state=g,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()})),this.on(T,((e,t)=>{this.trigger(this.replyEventName(t),e)}))}join(e=this.timeout){if(this.joinedOnce)throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");return this.timeout=e,this.joinedOnce=!0,this.rejoin(),this.joinPush}onClose(e){this.on(y,e)}onError(e){return this.on(C,(t=>e(t)))}on(e,t){let s=this.bindingRef++;return this.bindings.push({event:e,ref:s,callback:t}),s}off(e,t){this.bindings=this.bindings.filter((s=>!(s.event===e&&(void 0===t||t===s.ref))))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(e,t,s=this.timeout){if(t=t||{},!this.joinedOnce)throw new Error(`tried to push '${e}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let i=new L(this,e,(function(){return t}),s);return this.canPush()?i.send():(i.startTimeout(),this.pushBuffer.push(i)),i}leave(e=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=v;let t=()=>{this.socket.hasLogger()&&this.socket.log("channel",`leave ${this.topic}`),this.trigger(y,"leave")},s=new L(this,R,r({}),e);return s.receive("ok",(()=>t())).receive("timeout",(()=>t())),s.send(),this.canPush()||s.trigger("ok",{}),s}onMessage(e,t,s){return t}isMember(e,t,s,i){return!(this.topic!==e||i&&i!==this.joinRef()&&(this.socket.hasLogger()&&this.socket.log("channel","dropping outdated message",{topic:e,event:t,payload:s,joinRef:i}),1))}joinRef(){return this.joinPush.ref}rejoin(e=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=b,this.joinPush.resend(e))}trigger(e,t,s,i){let n=this.onMessage(e,t,s,i);if(t&&!n)throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");let o=this.bindings.filter((t=>t.event===e));for(let e=0;e<o.length;e++)o[e].callback(n,s,i||this.joinRef())}replyEventName(e){return`chan_reply_${e}`}isClosed(){return this.state===f}isErrored(){return this.state===g}isJoined(){return this.state===m}isJoining(){return this.state===b}isLeaving(){return this.state===v}}(e,t,this);return this.channels.push(s),s}push(e){if(this.hasLogger()){let{topic:t,event:s,payload:i,ref:n,join_ref:o}=e;this.log("push",`${t} ${s} (${o}, ${n})`,i)}this.isConnected()?this.encode(e,(e=>this.conn.send(e))):this.sendBuffer.push((()=>this.encode(e,(e=>this.conn.send(e)))))}makeRef(){let e=this.ref+1;return e===this.ref?this.ref=0:this.ref=e,this.ref.toString()}sendHeartbeat(){this.pendingHeartbeatRef&&!this.isConnected()||(this.pendingHeartbeatRef=this.makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef}),this.heartbeatTimer=setTimeout((()=>this.heartbeatTimeout()),this.heartbeatIntervalMs))}abnormalClose(e){this.closeWasClean=!1,this.isConnected()&&this.conn.close(1e3,e)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach((e=>e())),this.sendBuffer=[])}onConnMessage(e){this.decode(e.data,(e=>{let{topic:t,event:s,payload:i,ref:n,join_ref:o}=e;n&&n===this.pendingHeartbeatRef&&(clearTimeout(this.heartbeatTimer),this.pendingHeartbeatRef=null,setTimeout((()=>this.sendHeartbeat()),this.heartbeatIntervalMs)),this.hasLogger()&&this.log("receive",`${i.status||""} ${t} ${s} ${n&&"("+n+")"||""}`,i);for(let e=0;e<this.channels.length;e++){const r=this.channels[e];r.isMember(t,s,i,o)&&r.trigger(s,i,n,o)}for(let t=0;t<this.stateChangeCallbacks.message.length;t++){let[,s]=this.stateChangeCallbacks.message[t];s(e)}}))}leaveOpenTopic(e){let t=this.channels.find((t=>t.topic===e&&(t.isJoined()||t.isJoining())));t&&(this.hasLogger()&&this.log("transport",`leaving duplicate topic "${e}"`),t.leave())}};let U="443",$="alphahub.aptero.co",M="wss:";async function x(e){const t=await async function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:H;const i=new URLSearchParams(location.search),n=async()=>{await B();const{host:e,port:t}=N,s=i.get("phx_protocol")||M||("https:"===document.location.protocol?"wss:":"ws:");return"".concat(s,"//").concat(e).concat(t?":".concat(t):"")},o=await n();console.log("Phoenix Socket URL: ".concat(o));const r={};e&&(r.logger=(e,t,s)=>{console.log("".concat(e,": ").concat(t),s)});t&&(r.params=t);const h=new s("".concat(o,"/socket"),r);return h.connect(),h.onError((async()=>{I();const e=new URL(h.endPoint).pathname,t=await n(),s="".concat(t).concat(e);console.log("Socket error, changed endpoint to ".concat(s)),h.endPoint=s})),h}();t.onClose((e=>{console.error(e)}));const{data:s,hubPhxChannel:i,vapiddata:n}=await new Promise(((s,i)=>{t.channel("ret",{hub_id:e}).join().receive("ok",(n=>{const o=t.channel("hub:"+e,{profile:{avatarId:"",displayName:""},push_subscription_endpoint:null,auth_token:null,perms_token:null,bot_access_key:null,context:{mobile:!1,embed:!0},hub_invite_id:null});o.join().receive("ok",(async e=>{s({data:e,hubPhxChannel:o,vapiddata:n})})).receive("error",(e=>{i(e)}))})).receive("error",(e=>{i(e)}))}));return{data:s,hubPhxChannel:i,vapiddata:n}}let N,O=null,D=!1;async function B(){let e=new URLSearchParams(location.search).get("phx_host");e=e||$;N={host:e,port:U}}async function I(){D=!0,O=null}class J{constructor(e){var t,s,i;this.threeLib=e,i=null,(s="sceneLoader")in(t=this)?Object.defineProperty(t,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[s]=i}async loadRoom(e){const{data:t,hubPhxChannel:s,vapiddata:i}=await x(e),n=t.hubs[0].scene.model_url.replace(".bin",".glb");this.sceneLoader=new o,await this.sceneLoader.loadScene(n,this.threeLib)}getType(){return J.name}}class q{async createComponent(e,t){let s=e.getFirstComponentByType(i.ServiceEntity.name),n=await s.getService("@aptero/axolotis-core-plugins/modules/three/ThreeLib"),o=await s.getService("@aptero/axolotis-core-plugins/modules/controller/PlayerService"),r=new J(n);return await r.loadRoom(t.room),r.sceneLoader&&o.getCurrentPlayer().declareNavMesh(r.sceneLoader.navMesh),r}}}}]);
//# sourceMappingURL=SpokeRoomLoader.js.map