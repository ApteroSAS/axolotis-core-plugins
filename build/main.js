/*!
 * 
 *   @aptero/axolotis-core-plugin v1.0.0
 *   https://github.com/ApteroSAS/axolotis-player
 *
 *   Copyright (c) Aptero (https://github.com/ApteroSAS/axolotis-player) and project contributors.
 *
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("axolotis-player",[],t):"object"==typeof exports?exports["axolotis-player"]=t():e["axolotis-player"]=t()}(self,(function(){return function(){var e,t,o={988:function(e){
/*!
 * 
 *   @aptero/axolotis-player v1.0.0
 *   https://github.com/ApteroSAS/axolotis-player
 *
 *   Copyright (c) Aptero (https://github.com/ApteroSAS/axolotis-player) and project contributors.
 *
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */
self,e.exports=function(){"use strict";var e={630:function(e,t,o){function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}o.r(t),o.d(t,{Factory:function(){return r},FrameLoop:function(){return i}});class r{async createService(e){let t=await e.getService("@aptero/axolotis-player/modules/core/loader/CodeLoaderService"),o=new i;return t.awaitInitialLoading().then((()=>{o.startAnimationFrameLoop()})),o}}class i{constructor(){n(this,"loops",{}),n(this,"prevTime",0),n(this,"monitoringStart",(()=>{})),n(this,"monitoringEnd",(()=>{}))}startAnimationFrameLoop(){const e=t=>{this.monitoringStart(i.name);const o=t-this.prevTime;this.prevTime=t,requestAnimationFrame(e);for(const e in this.loops)this.monitoringStart(e),this.loops[e](o),this.monitoringEnd(e);this.monitoringEnd(i.name)};requestAnimationFrame(e)}setMonitoringCallback(e,t){this.monitoringStart=e,this.monitoringEnd=t}removeLoop(e){delete this.loops[e],this.monitoringStart(e),this.monitoringEnd(e)}addLoop(e,t){if(this.loops[e])throw new Error;this.loops[e]=t}getType(){return i.name}}},905:function(e,t,o){o.r(t),o.d(t,{Factory:function(){return r},WorldService:function(){return u},registerNewWorld:function(){return c}});var n=o(454);class r{constructor(){}async createService(e){return new u(e)}}let i=-1,a=[],s=[],l=[];function c(e){a.push(e),i<0&&(i=0,window.axolotis.world=a[i],window.axolotis.activeWorld=i)}window&&(window.axolotis||(window.axolotis={}),window.axolotis.worlds=a,window.axolotis.activeWorld=i);class u{constructor(e){var t,o,r;r=void 0,(o="world")in(t=this)?Object.defineProperty(t,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[o]=r,console.log("info");let a=null;for(const t of this.getWorlds())t.getFirstComponentByType(n.e.name)==e&&(a=t);if(!a)throw new Error;this.world=a,e.getService("@aptero/axolotis-player/modules/core/loader/CodeLoaderService").then((async e=>{e.awaitInitialLoading();for(const e of l)e()})),i>=0&&this.setActiveWorldByNumber(i)}getType(){return u.name}getWorlds(){return a}getActiveWorld(){return a[i]}isActiveWorld(){return this.world==this.getActiveWorld()}addOnWorldChangeCallback(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];s.push(e),t&&e()}addOnWorldAdded(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];l.push(e),t&&e()}setActiveWorld(e){for(let t=0;t<this.getWorlds().length;t++)if(e==this.getWorlds()[t])return void this.setActiveWorldByNumber(t);throw new Error}setActiveWorldByNumber(e){if(i!=e){i=e,window&&window.axolotis&&(window.axolotis.activeWorld=i,window.axolotis.world=a[i]);for(const e of s)e()}}}},82:function(e,t,o){o.d(t,{Vf:function(){return a},Ag:function(){return r},dK:function(){return i}});let n={};function r(e,t){if(n[e])throw new Error("Module already defined");n[e]=t}function i(e){n={...n,...e}}async function a(e){let t=null;if(!n[e])throw new Error("unknown module - please register it - "+e);return t=await async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const o=await t[e](),n=o.module;for(const e in n){const t=n[e];if(t.prototype&&t.prototype.constructor.name===o.classname)return new t}throw new Error("invalid factory "+e+" - "+o.classname)}(e,n),t}i({"@aptero/axolotis-player/modules/core/WorldService":async()=>{const e=await Promise.resolve().then(o.bind(o,905));return{module:e,classname:e.Factory.name}},"@aptero/axolotis-player/modules/FrameLoop":async()=>{const e=await Promise.resolve().then(o.bind(o,630));return{module:e,classname:e.Factory.name}}})},240:function(e,t,o){o.d(t,{i:function(){return r}});var n=o(82);class r{constructor(){var e,t,o;o={},(t="service")in(e=this)?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}setService(e,t){this.service[e]=Promise.resolve(t)}async getService(e){if(this.service[e]){const t=await this.service[e];if(!t)throw new Error("error");return t}if(!this.service[e]){let t=(0,n.Vf)(e);this.service[e]=new Promise((async e=>{e(await(await t).createService(this))}))}return await this.service[e]}}},454:function(e,t,o){o.d(t,{e:function(){return r}});var n=o(240);class r extends n.i{getType(){return r.name}}},147:function(e){e.exports={i8:"1.0.0"}}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return function(){o.r(n),o.d(n,{CodeLoaderComponent:function(){return i},Entity:function(){return s},FrameLoop:function(){return h.FrameLoop},LazyServices:function(){return g.i},ServiceEntity:function(){return e.e},WorldEntity:function(){return c},WorldService:function(){return l.WorldService},initHtml:function(){return p},initHtmlFromUrl:function(){return m},registerLocalModule:function(){return t.Ag},registerLocalModuleList:function(){return t.dK}});var e=o(454),t=o(82);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}class i{constructor(){r(this,"initialLoading",void 0),r(this,"initialLoadingResolver",void 0),this.initialLoading=new Promise((e=>{this.initialLoadingResolver=e}))}getType(){return i.name}async awaitInitialLoading(){await this.initialLoading}async startLoadingJson(o,n,r){let i=[];for(const e of n.entities)for(const n of e.components){let e=n.config;i.push((()=>new Promise((async(r,i)=>{const a=await(0,t.Vf)(n.module);let s=await a.createComponent(o,e||{});if(!s.getType)throw new Error("Not a component : "+n.module+" "+s.constructor.name);o.addComponent(s),r(a)}))))}for(const t of n.services)i.push((()=>new Promise((async(n,r)=>{let i=await o.getFirstComponentByType(e.e.name);await i.getService(t.module),n(i)}))));let a=function(e,t){let o=[],n=0;for(const r of e){const i=r();o.push(i),i.then((()=>{n++,t(n,e.length)}))}return Promise.all(o)}(i,r);return a.then((e=>{void 0!==this.initialLoadingResolver&&this.initialLoadingResolver(e)})),a.catch((e=>{console.error(e)})),a}}function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var s=class{constructor(e){this.name=e,a(this,"components",[]),a(this,"waitingForComponent",{})}addComponent(e){if(this.components.push(e),this.waitingForComponent[e.getType()]){for(const t of this.waitingForComponent[e.getType()])t(e);delete this.waitingForComponent[e.getType()]}return e}removeAllComponents(){this.components.forEach((e=>{this.removeComponent(e)}))}removeComponent(e){return"destroy"in e&&e.destroy(),this.components=this.components.filter((t=>t!=e)),e}addComponents(e){e.forEach((e=>{this.addComponent(e)}))}getComponents(){return this.components}getComponentByType(e){let t=[];return this.components.forEach((o=>{o.getType()===e&&t.push(o)})),t}getComponentByTypeStartsWith(e){let t=[];return this.components.forEach((o=>{o.getType().startsWith(e)&&t.push(o)})),t}getFirstComponentByTypeStartsWith(e){return this.getComponentByTypeStartsWith(e)[0]}getFirstComponentByType(e){return this.getComponentByType(e)[0]}async getFirstComponentByTypeAsync(e){return this.getComponentByType(e)[0]?this.getComponentByType(e)[0]:(this.waitingForComponent[e]||(this.waitingForComponent[e]=[]),new Promise(((t,o)=>{this.waitingForComponent[e].push(t)})))}getType(){return this.name}},l=o(905);class c extends s{constructor(){super("world"),(0,l.registerNewWorld)(this)}}const u=o(147).i8;console.log(u);const d=e=>{"complete"===document.readyState&&document.body?e():window.addEventListener("DOMContentLoaded",e)};async function m(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o.onProgress||(o.onProgress=(e,o)=>{console.log("["+t+"] : ["+e+"/"+o+"]")}),o.onLoaded||(o.onLoaded=()=>{console.log("["+t+"] : loading complete")});let n=new e.e,r=new c;r.addComponent(n);let a=new i;n.setService("@aptero/axolotis-player/modules/core/loader/CodeLoaderService",a);const s=await fetch(t),l=await s.text();let u=(new DOMParser).parseFromString(l,"text/html").body.getElementsByTagName("ax-scene");return!u||u&&0==u.length?(console.warn("Axolotis scene not found (no tag ax-scene)"),void o.onLoaded()):(console.log(u),await a.startLoadingJson(r,f(u),o.onProgress),o.onLoaded(),r)}function p(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.onProgress||(t.onProgress=(e,t)=>{console.log("["+e+"/"+t+"]")}),t.onLoaded||(t.onLoaded=()=>{console.log("loading complete")});let o=new e.e,n=new c;n.addComponent(o);let r=new i;return o.setService("@aptero/axolotis-player/modules/core/loader/CodeLoaderService",r),d((()=>{let e=window.document.body.getElementsByTagName("ax-scene");if(!e||e&&0==e.length)return console.warn("Axolotis scene not found (no tag ax-scene)"),void t.onLoaded();console.log(e),r.startLoadingJson(n,f(e),t.onProgress).then(t.onLoaded)})),n}function f(e){let t=e[0];const o={version:"2.0",entities:[],services:[]};for(const e of t.getElementsByTagName("ax-entity")){let t={components:[]};for(const o of e.getElementsByTagName("ax-component")){let e=o.getAttribute("config").replace(/(['"])?([a-z0-9A-Z_]+)(['"])?:/g,'"$2": '),n={module:o.getAttribute("module"),config:JSON.parse(e)};t.components.push(n)}o.entities.push(t)}for(const e of t.getElementsByTagName("ax-service"))o.services.push({module:e.getAttribute("module")});return o}var g=o(240),h=o(630)}(),n}()}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={exports:{}};return o[e](i,i.exports,r),i.exports}r.m=o,r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,o){return r.f[o](e,t),t}),[]))},r.u=function(e){return e+".js"},r.miniCssF=function(e){},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},t="axolotis-player:",r.l=function(o,n,i,a){if(e[o])e[o].push(n);else{var s,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+i),s.src=o),e[o]=[n];var m=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),l&&document.head.appendChild(s)}},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e}(),function(){var e={179:0};r.f.j=function(t,o){var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var i=new Promise((function(o,r){n=e[t]=[o,r]}));o.push(n[2]=i);var a=r.p+r.u(t),s=new Error;r.l(a,(function(o){if(r.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,n[1](s)}}),"chunk-"+t,t)}};var t=function(t,o){var n,i,a=o[0],s=o[1],l=o[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(l)l(r)}for(t&&t(o);c<a.length;c++)i=a[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0},o=self.webpackChunkaxolotis_player=self.webpackChunkaxolotis_player||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var i={};return function(){"use strict";r.r(i),r.d(i,{load:function(){return t}});var e=r(988);function t(){console.log("axolotis core plugins loaded"),(0,e.registerLocalModuleList)({"@aptero/axolotis-core-plugins/modules/controller/cameraController/OrbitController":async()=>{const e=await Promise.all([r.e(212),r.e(681)]).then(r.bind(r,681));return{module:e,classname:e.Factory.name}},"@aptero/axolotis-core-plugins/modules/controller/pathFindingPlayer/Input":async()=>{const e=await r.e(823).then(r.bind(r,823));return{module:e,classname:e.Factory.name}},"@aptero/axolotis-core-plugins/modules/controller/pathFindingPlayer/NavMeshPlayer":async()=>{const e=await Promise.all([r.e(212),r.e(7)]).then(r.bind(r,7));return{module:e,classname:e.Factory.name}},"@aptero/axolotis-core-plugins/modules/controller/PlayerService":async()=>{const e=await r.e(912).then(r.bind(r,912));return{module:e,classname:e.Factory.name}},"@aptero/axolotis-core-plugins/modules/debug/DebugBtn":async()=>{const e=await r.e(551).then(r.bind(r,551));return{module:e,classname:e.Factory.name}},"@aptero/axolotis-core-plugins/modules/debug/PerformanceStats":async()=>{const e=await Promise.all([r.e(212),r.e(7),r.e(997)]).then(r.bind(r,997));return{module:e,classname:e.Factory.name}},"@aptero/axolotis-core-plugins/modules/three/ThreeLib":async()=>{const e=await Promise.all([r.e(212),r.e(950)]).then(r.bind(r,950));return{module:e,classname:e.Factory.name}},"@aptero/axolotis-core-plugins/modules/portals/PortalsService":async()=>{const e=await r.e(237).then(r.bind(r,237));return{module:e,classname:e.Factory.name}},"@aptero/axolotis-core-plugins/modules/portals/PortalLink":async()=>{const e=await Promise.all([r.e(212),r.e(481)]).then(r.bind(r,481));return{module:e,classname:e.Factory.name}},"@aptero/axolotis-core-plugins/modules/Sky":async()=>{const e=await Promise.all([r.e(212),r.e(259)]).then(r.bind(r,259));return{module:e,classname:e.Factory.name}},"@aptero/axolotis-core-plugins/modules/spoke/SpokeRoomLoader":async()=>{const e=await r.e(342).then(r.bind(r,342));return{module:e,classname:e.Factory.name}}})}t()}(),i}()}));
//# sourceMappingURL=main.js.map