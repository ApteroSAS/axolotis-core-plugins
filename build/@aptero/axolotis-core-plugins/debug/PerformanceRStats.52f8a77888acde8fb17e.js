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
(self.webpackChunkaxolotis_core_plugins=self.webpackChunkaxolotis_core_plugins||[]).push([[315,741,496,452],{551:function(e,n,t){"use strict";t.r(n),t.d(n,{DebugBtn:function(){return a},Factory:function(){return o}});var r=t(919);class o{async createComponent(e,n){let t=e.getFirstComponentByType(r.Services.name),o=await t.getService("@aptero/axolotis-core-plugins/frame/FrameLoop");return new a(o,t)}}class a{constructor(e,n){window.document.body.insertAdjacentHTML("beforeend",'<div id="debug-btn" style="display: block;\n    font-family: monospace;\n    cursor: pointer;\n    position: absolute;\n    bottom: 0;\n    right: 2px;\n    padding: 4px 8px;\n    color: #fff;\n    text-shadow: 1px 1px 1px rgba(0,0,0,.5);\n    font-size: 10px;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    user-select: none" >60 FPS</div>');let t=window.document.getElementById("debug-btn");t&&(t.onclick=e=>{e.stopPropagation(),e.preventDefault(),n.getService("@aptero/axolotis-core-plugins/debug/PerformanceStats")},e.addLoop(a.name,(e=>{t.innerText=Math.round(1/e*1e3)+" FPS"})),window.location.host.startsWith("localhost")&&n.getService("@aptero/axolotis-core-plugins/debug/PerformanceStats"))}getType(){return a.name}}},94:function(e,n,t){"use strict";t.r(n),t.d(n,{Factory:function(){return d},PerformanceRStats:function(){return u}});var r=t(79),o=t(950),a=t(7),i=t(551),s=t(919),l=t(377);const c=t(351);t(760);class d{async createService(e){let n=await e.getService("@aptero/axolotis-core-plugins/three/ThreeLib"),t=await e.getService("@aptero/axolotis-core-plugins/frame/FrameLoop"),r=await e.getService("@aptero/axolotis-core-plugins/worlds/WorldService");return new u(n,t,r)}}class u{constructor(e,n,t){var o,a,i;if(this.threeLib=e,this.worldService=t,i=void 0,(a="rS")in(o=this)?Object.defineProperty(o,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[a]=i,window.perfStatSingletonPresent)return;window.perfStatSingletonPresent=!0,console.warn("MB MBytes of allocated memory. (Run Chrome with --enable-precise-memory-info) to have precise perf info");const s=(0,r.Z)();if(s.showPanel(2),document.body.appendChild(s.dom),this.updateRstats(),window.document.body.insertAdjacentHTML("beforeend","<style>\n    .alarm{\n        color: #b70000;!important;\n    }\n\n    .rs-base h1{\n        margin: 0;\n        padding: 0;\n        font-size: 1.4em;\n        color: #fff;\n        margin-bottom: 5px;\n        cursor: pointer;\n    }\n\n    .rs-base div.rs-group{\n        margin-bottom: 10px;\n    }\n\n    .rs-base div.rs-group.hidden{\n        display: none;\n    }\n\n    .rs-base div.rs-fraction{\n        position: relative;\n        margin-bottom: 5px;\n    }\n\n    .rs-base div.rs-fraction p{\n        width: 120px;\n        text-align: right;\n        margin: 0;\n        padding: 0;\n    }\n\n    .rs-base div.rs-legend{\n        position: absolute;\n        line-height: 1em;\n    }\n\n    .rs-base div.rs-counter-base{\n        position: relative;\n        margin: 2px 0;\n        height: 1em;\n    }\n\n    .rs-base span.rs-counter-id{\n        color: white;\n        position: absolute;\n        left: 0;\n        top: 0;\n    }\n\n    .rs-base div.rs-counter-value{\n        color: white;\n        position: absolute;\n        left: 90px;\n        width: 30px;\n        height: 1em;\n        top: 0;\n        text-align: right;\n    }\n\n    .rs-base canvas.rs-canvas{\n        position: absolute;\n        right: 0;\n    }\n</style>\n<style>\n\n    .rs-header {\n        display: flex;\n        justify-content: space-between;\n        border-bottom: 1px rgba(255,255,255,0.1) solid;\n        margin-bottom: 8px;\n    }\n\n    .rs-collapse-btn {\n        cursor: pointer;\n        font-size: 12px;\n    }\n\n    .rs-fps-counter {\n        font-family: monospace;\n        cursor: pointer;\n        position: absolute;\n        bottom: 96px;\n        right: 2px;\n        padding: 4px 8px;\n        color: #ffffff;\n        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);\n        font-size: 10px;\n        -moz-user-select: none;\n        -webkit-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n    }\n\n    .rs-base {\n        right: 10px;\n        left: auto;\n        top: 10px;\n        -moz-user-select: none;\n        -webkit-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n\n        position: absolute;\n        z-index: 10000;\n        padding: 10px;\n        background-color: #222;\n        font-size: 10px;\n        line-height: 1.2em;\n        width: 350px;\n        font-family: 'Roboto Condensed', tahoma, sans-serif;\n        overflow: hidden;\n    }\n</style>\n"),t.isActiveWorld()){const e=n=>{requestAnimationFrame(e),s.update(),this.rS().update(),this.rS("framerate").end(),this.rS("framerate").start()};requestAnimationFrame(e)}t.addOnWorldAdded((()=>{this.updateWorldCallback()}),!0)}updateRstats(){let e=document.body.getElementsByClassName("rs-base");0!=e.length&&e[0].remove();let n={css:[],values:{framerate:{caption:"Frame (ms)",over:19}},groups:[],plugins:[new window.threeStats(this.threeLib.renderer)]};for(let e=0;e<this.worldService.getWorlds().length;e++)n.values[l.FrameLoop.name.toLowerCase()+"-"+e]={caption:l.FrameLoop.name+" (ms)",over:10},n.values[o.ThreeLib.name.toLowerCase()+"-"+e]={caption:o.ThreeLib.name+" (ms)"},n.values[a.default.name.toLowerCase()+"-"+e]={caption:a.default.name+" (ms)"},n.values[i.DebugBtn.name.toLowerCase()+"-"+e]={caption:i.DebugBtn.name+" (ms)"},n.values[u.name.toLowerCase()+"-"+e]={caption:u.name+" (ms)"},n.groups.push({caption:"World - "+e,values:[l.FrameLoop.name.toLowerCase()+"-"+e,o.ThreeLib.name.toLowerCase()+"-"+e,a.default.name.toLowerCase()+"-"+e]});this.rS=new c(n)}updateWorldCallback(){console.log("new world :",this.worldService.getWorlds()),this.updateRstats(),this.worldService.getWorlds().forEach((async(e,n)=>{let t=e.getFirstComponentByType(s.Services.name);(await t.getService("@aptero/axolotis-core-plugins/frame/FrameLoop")).setMonitoringCallback((e=>{this.rS(e.toLowerCase()+"-"+n).start()}),(e=>{this.rS(e.toLowerCase()+"-"+n).end()}))}))}getType(){return u.name}}},760:function(e){window.glStats=function(){var e=null,n=0,t=0,r=0,o=0,a=0,i=0,s=0;function l(e,n){return function(){n.apply(this,arguments),e.apply(this,arguments)}}WebGLRenderingContext.prototype.drawArrays=l(WebGLRenderingContext.prototype.drawArrays,(function(){n++,arguments[0]==this.POINTS?i+=arguments[2]:a+=arguments[2]})),WebGLRenderingContext.prototype.drawElements=l(WebGLRenderingContext.prototype.drawElements,(function(){t++,o+=arguments[1]/3,a+=arguments[1]})),WebGLRenderingContext.prototype.useProgram=l(WebGLRenderingContext.prototype.useProgram,(function(){r++})),WebGLRenderingContext.prototype.bindTexture=l(WebGLRenderingContext.prototype.bindTexture,(function(){s++}));return{update:function(){e("allcalls").set(n+t),e("drawElements").set(t),e("drawArrays").set(n),e("bindTexture").set(s),e("useProgram").set(r),e("glfaces").set(o),e("glvertices").set(a),e("glpoints").set(i)},start:function(){n=0,t=0,r=0,o=0,a=0,i=0,s=0},end:function(){},attach:function(n){e=n},values:{allcalls:{over:3e3,caption:"Calls (hook)"},drawelements:{caption:"drawElements (hook)"},drawarrays:{caption:"drawArrays (hook)"}},groups:[{caption:"WebGL",values:["allcalls","drawelements","drawarrays","useprogram","bindtexture","glfaces","glvertices","glpoints"]}],fractions:[{base:"allcalls",steps:["drawelements","drawarrays"]}]}},window.threeStats=function(e){var n=null;return{update:function(){n("renderer.info.memory.geometries").set(e.info.memory.geometries),n("renderer.info.programs").set(e.info.programs.length),n("renderer.info.memory.textures").set(e.info.memory.textures),n("renderer.info.render.calls").set(e.info.render.calls),n("renderer.info.render.triangles").set(e.info.render.triangles),n("renderer.info.render.points").set(e.info.render.points)},start:function(){},end:function(){},attach:function(e){n=e},values:{"renderer.info.memory.geometries":{caption:"Geometries"},"renderer.info.memory.textures":{caption:"Textures"},"renderer.info.programs":{caption:"Programs"},"renderer.info.render.calls":{caption:"Calls"},"renderer.info.render.triangles":{caption:"Triangles",over:3e5},"renderer.info.render.points":{caption:"Points"}},groups:[{caption:"Three.js - Memory",values:["renderer.info.memory.geometries","renderer.info.programs","renderer.info.memory.textures"]},{caption:"Three.js - Render",values:["renderer.info.render.calls","renderer.info.render.triangles","renderer.info.render.points"]}],fractions:[]}},window.BrowserStats=function(){var e=null,n=0,t=0;window.performance&&!performance.memory&&(performance.memory={usedJSHeapSize:0,totalJSHeapSize:0}),0===performance.memory.totalJSHeapSize&&console.warn("totalJSHeapSize === 0... performance.memory is only available in Chrome .");var r=Math.log(1024);function o(e){var n=Math.floor(Math.log(e)/r);return Math.round(100*e/Math.pow(1024,n))/100}return{update:function(){n=o(performance.memory.usedJSHeapSize),t=o(performance.memory.totalJSHeapSize),e("memory").set(n),e("total").set(t)},start:function(){n=0},end:function(){},attach:function(n){e=n},values:{memory:{caption:"Used Memory",average:!0,avgMs:1e3,over:22},total:{caption:"Total Memory"}},groups:[{caption:"Browser",values:["memory","total"]}],fractions:[{base:"total",steps:["memory"]}]}},e.exports={glStats:window.glStats,threeStats:window.threeStats,BrowserStats:window.BrowserStats}},351:function(e){"use strict";!function(){"performance"in window==0&&(window.performance={});var e=window.performance;if("now"in e==0){var n=Date.now();e.timing&&e.timing.navigationStart&&(n=e.timing.navigationStart),e.now=function(){return Date.now()-n}}e.mark||(e.mark=function(){}),e.measure||(e.measure=function(){})}(),window.rStats=function(e){function n(e,n){for(var t=Object.keys(e),r=0,o=t.length;r<o;r++)n(t[r])}var t=e||{},r=t.colours||["#850700","#c74900","#fcb300","#284280","#4c7c0c"],o=(t.CSSPath?t.CSSPath:"")+"rStats.css";(t.css||["https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700,300",o]).forEach((function(e){var n,t;n=e,(t=document.createElement("link")).href=n,t.rel="stylesheet",t.type="text/css",document.getElementsByTagName("head")[0].appendChild(t)})),t.values||(t.values={});var a,i,s=10,l={};function c(e,n,t){var r=t||{},o=document.createElement("canvas"),a=o.getContext("2d"),i=0,l=0,c=r.color?r.color:"#666666",d=document.createElement("canvas"),u=d.getContext("2d");d.width=1,d.height=20,u.fillStyle="#444444",u.fillRect(0,0,1,20),u.fillStyle=c,u.fillRect(0,s,1,s),u.fillStyle="#ffffff",u.globalAlpha=.5,u.fillRect(0,s,1,1),u.globalAlpha=1;var p=document.createElement("canvas"),m=p.getContext("2d");return p.width=1,p.height=20,m.fillStyle="#444444",m.fillRect(0,0,1,20),m.fillStyle="#b70000",m.fillRect(0,s,1,s),m.globalAlpha=.5,m.fillStyle="#ffffff",m.fillRect(0,s,1,1),m.globalAlpha=1,o.width=200,o.height=s,o.style.width=o.width+"px",o.style.height=o.height+"px",o.className="rs-canvas",e.appendChild(o),a.fillStyle="#444444",a.fillRect(0,0,o.width,o.height),{draw:function(e,n){(l+=.1*(e-l))>(i*=.99)&&(i=l),a.drawImage(o,1,0,o.width-1,o.height,0,0,o.width-1,o.height),n?a.drawImage(p,o.width-1,o.height-l*o.height/i-s):a.drawImage(d,o.width-1,o.height-l*o.height/i-s)}}}function d(e,t){var o=document.createElement("canvas"),a=o.getContext("2d");return o.width=200,o.height=s*t,o.style.width=o.width+"px",o.style.height=o.height+"px",o.className="rs-canvas",e.appendChild(o),a.fillStyle="#444444",a.fillRect(0,0,o.width,o.height),{draw:function(e){a.drawImage(o,1,0,o.width-1,o.height,0,0,o.width-1,o.height);var t=0;n(e,(function(n){var i=e[n]*o.height;a.fillStyle=r[n],a.fillRect(o.width-1,t,1,i),t+=i}))}}}function u(e,n){var r,o=e,a=0,s=0,l=0,d=0,u=performance.now(),p=0,m=document.createElement("div"),f=document.createElement("span"),h=document.createElement("div"),g=document.createTextNode(""),w=t?t.values[o.toLowerCase()]:null,v=new c(m,o,w),b=!1;function y(e){if(w&&w.average){d+=e,p++;var n=performance.now();n-u>=(w.avgMs||1e3)&&(l=d/p,d=0,u=n,p=0)}}function x(){r=performance.now(),t.userTimingAPI&&performance.mark(o+"-start"),b=!0}function S(){a=performance.now()-r,t.userTimingAPI&&(performance.mark(o+"-end"),b&&performance.measure(o,o+"-start",o+"-end")),y(a)}return f.className="rs-counter-id",f.textContent=w&&w.caption?w.caption:o,h.className="rs-counter-value",h.appendChild(g),m.appendChild(f),m.appendChild(h),n?n.div.appendChild(m):i.appendChild(m),r=performance.now(),{set:function(e){y(a=e)},start:x,tick:function(){S(),x()},end:S,frame:function(){var e=performance.now(),n=e-r;s++,n>1e3&&(a=w&&!1===w.interpolate?s:1e3*s/n,s=0,r=e,y(a))},value:function(){return a},draw:function(){var e=w&&w.average?l:a;g.nodeValue=Math.round(100*e)/100;var n=w&&(w.below&&a<w.below||w.over&&a>w.over);v.draw(a,n),m.className=n?"rs-counter-base alarm":"rs-counter-base"}}}function p(e){var r=e.toLowerCase();if(void 0===r&&(r="default"),l[r])return l[r];var o=null;t&&t.groups&&n(t.groups,(function(e){var n=t.groups[parseInt(e,10)];o||-1===n.values.indexOf(r.toLowerCase())||(o=n)}));var a=new u(r,o);return l[r]=a,a}function m(){n(t.plugins,(function(e){t.plugins[e].update()})),n(l,(function(e){l[e].draw()})),t&&t.fractions&&n(t.fractions,(function(e){var r=t.fractions[parseInt(e,10)],o=[],a=l[r.base.toLowerCase()];a&&(a=a.value(),n(t.fractions[e].steps,(function(n){var r=t.fractions[e].steps[parseInt(n,10)].toLowerCase(),i=l[r];i&&o.push(i.value()/a)}))),r.graph.draw(o)}))}return function(){if(t.plugins){t.values||(t.values={}),t.groups||(t.groups=[]),t.fractions||(t.fractions=[]);for(var e=0;e<t.plugins.length;e++)t.plugins[e].attach(p),n(t.plugins[e].values,(function(n){t.values[n]=t.plugins[e].values[n]})),t.groups=t.groups.concat(t.plugins[e].groups),t.fractions=t.fractions.concat(t.plugins[e].fractions)}else t.plugins={};(a=document.createElement("div")).className="rs-base",(i=document.createElement("div")).className="rs-container",i.style.height="auto",a.appendChild(i),document.body.appendChild(a),t&&(t.groups&&n(t.groups,(function(e){var n=t.groups[parseInt(e,10)],r=document.createElement("div");r.className="rs-group",n.div=r;var o=document.createElement("h1");o.textContent=n.caption,o.addEventListener("click",function(e){this.classList.toggle("hidden"),e.preventDefault()}.bind(r)),i.appendChild(o),i.appendChild(r)})),t.fractions&&n(t.fractions,(function(e){var o=t.fractions[parseInt(e,10)],a=document.createElement("div");a.className="rs-fraction";var l=document.createElement("div");l.className="rs-legend";var c=0;n(t.fractions[e].steps,(function(n){var o=document.createElement("p");o.textContent=t.fractions[e].steps[n],o.style.color=r[c],l.appendChild(o),c++})),a.appendChild(l),a.style.height=c*s+"px",o.div=a;var u=new d(a,c);o.graph=u,i.appendChild(a)})))}(),function(e){return e?p(e):{element:a,update:m}}},e.exports=window.rStats},377:function(e,n,t){"use strict";t.r(n),t.d(n,{Factory:function(){return a},FrameLoop:function(){return i}});var r=t(919);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}class a{async createService(e){let n=await e.getService(r.CODE_LOADER_MODULE_NAME),t=new i;return n.awaitInitialLoading().then((()=>{t.startAnimationFrameLoop()})),t}}class i{constructor(){o(this,"loops",{}),o(this,"prevTime",0),o(this,"monitoringStart",(()=>{})),o(this,"monitoringEnd",(()=>{}))}startAnimationFrameLoop(){const e=n=>{this.monitoringStart(i.name);const t=n-this.prevTime;this.prevTime=n,requestAnimationFrame(e);for(const e in this.loops)this.monitoringStart(e),this.loops[e](t),this.monitoringEnd(e);this.monitoringEnd(i.name)};requestAnimationFrame(e)}setMonitoringCallback(e,n){this.monitoringStart=e,this.monitoringEnd=n}removeLoop(e){delete this.loops[e],this.monitoringStart(e),this.monitoringEnd(e)}addLoop(e,n){if(this.loops[e])throw new Error("loop already exist : "+e);this.loops[e]=n}getType(){return i.name}}},950:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.r(n),t.d(n,{Factory:function(){return c},ThreeLib:function(){return l},asyncLoadThree:function(){return i},getGlobalRenderer:function(){return s}});const o=new class{constructor(){r(this,"loaderCache",{}),r(this,"assets",{})}async getLoader(e,n){return this.loaderCache[e]||(this.loaderCache[e]=await n()),this.loaderCache[e]}};function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}async function i(){return await t.e(796).then(t.bind(t,212))}async function s(){var e;if(null===(e=window.axolotis)||void 0===e||!e.renderer){const e=await i();let n=new e.WebGLRenderer({antialias:!0});n.setSize(window.innerWidth,window.innerHeight),n.toneMapping=e.ACESFilmicToneMapping,n.toneMappingExposure=1,n.outputEncoding=e.sRGBEncoding,n.setPixelRatio(window.devicePixelRatio),document.body.appendChild(n.domElement),window.axolotis||(window.axolotis={}),window.axolotis.renderer=n}return window.axolotis.renderer}class l{constructor(e,n){this.frameLoop=e,this.THREE=n,a(this,"renderer",void 0),a(this,"scene",void 0),a(this,"camera",void 0),a(this,"preRenderPass",[]),a(this,"render",void 0),a(this,"onWindowResize",void 0)}async init(){this.scene=new this.THREE.Scene,this.renderer=await s(),this.camera=new this.THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.001,1e5),this.camera.position.z=2,this.render=()=>{for(const e of this.preRenderPass)e();this.renderer.render(this.scene,this.camera),this.renderer.autoClear=!0},this.onWindowResize=()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.render()},window.addEventListener("resize",this.onWindowResize,!1),this.frameLoop.addLoop(l.name,this.render)}async loadAssets(e){if(o.assets[e])return o.assets[e];if(e.endsWith(".glb")){const n=await o.getLoader("GLTFLoader",(async()=>new((await Promise.all([t.e(796),t.e(404)]).then(t.bind(t,217))).GLTFLoader))),r=await n.loadAsync(e);o.assets[e]=r}if(e.endsWith(".jpg")){const n=await o.getLoader("TextureLoader",(async()=>new this.THREE.TextureLoader)),t=await n.loadAsync(e);o.assets[e]=t}return o.assets[e]}getType(){return l.name}}class c{constructor(){}async createService(e){let n=await e.getService("@aptero/axolotis-core-plugins/frame/FrameLoop");const t=new l(n,await i());return await t.init(),t}}},79:function(e,n){"use strict";var t=function(){var e=0,n=document.createElement("div");function r(e){return n.appendChild(e.dom),e}function o(t){for(var r=0;r<n.children.length;r++)n.children[r].style.display=r===t?"block":"none";e=t}n.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",n.addEventListener("click",(function(t){t.preventDefault(),o(++e%n.children.length)}),!1);var a=(performance||Date).now(),i=a,s=0,l=r(new t.Panel("FPS","#0ff","#002")),c=r(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=r(new t.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:n,addPanel:r,showPanel:o,begin:function(){a=(performance||Date).now()},end:function(){s++;var e=(performance||Date).now();if(c.update(e-a,200),e>=i+1e3&&(l.update(1e3*s/(e-i),100),i=e,s=0,d)){var n=performance.memory;d.update(n.usedJSHeapSize/1048576,n.jsHeapSizeLimit/1048576)}return e},update:function(){a=this.end()},domElement:n,setMode:o}};t.Panel=function(e,n,t){var r=1/0,o=0,a=Math.round,i=a(window.devicePixelRatio||1),s=80*i,l=48*i,c=3*i,d=2*i,u=3*i,p=15*i,m=74*i,f=30*i,h=document.createElement("canvas");h.width=s,h.height=l,h.style.cssText="width:80px;height:48px";var g=h.getContext("2d");return g.font="bold "+9*i+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=t,g.fillRect(0,0,s,l),g.fillStyle=n,g.fillText(e,c,d),g.fillRect(u,p,m,f),g.fillStyle=t,g.globalAlpha=.9,g.fillRect(u,p,m,f),{dom:h,update:function(l,w){r=Math.min(r,l),o=Math.max(o,l),g.fillStyle=t,g.globalAlpha=1,g.fillRect(0,0,s,p),g.fillStyle=n,g.fillText(a(l)+" "+e+" ("+a(r)+"-"+a(o)+")",c,d),g.drawImage(h,u+i,p,m-i,f,u,p,m-i,f),g.fillRect(u+m-i,p,i,f),g.fillStyle=t,g.globalAlpha=.9,g.fillRect(u+m-i,p,i,a((1-l/w)*f))}}},n.Z=t}}]);
//# sourceMappingURL=PerformanceRStats.52f8a77888acde8fb17e.js.map