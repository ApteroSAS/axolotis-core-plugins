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
!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define("axolotis-core-plugins",[],o):"object"==typeof exports?exports["axolotis-core-plugins"]=o():e["axolotis-core-plugins"]=o()}(self,(function(){return function(){var e,o,t,n={919:function(e){
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
self,e.exports=function(){"use strict";var e={630:function(e,o,t){function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}t.r(o),t.d(o,{Factory:function(){return r},FrameLoop:function(){return i}});class r{async createService(e){let o=await e.getService("@aptero/axolotis-player/modules/core/loader/CodeLoaderService"),t=new i;return o.awaitInitialLoading().then((()=>{t.startAnimationFrameLoop()})),t}}class i{constructor(){n(this,"loops",{}),n(this,"prevTime",0),n(this,"monitoringStart",(()=>{})),n(this,"monitoringEnd",(()=>{}))}startAnimationFrameLoop(){const e=o=>{this.monitoringStart(i.name);const t=o-this.prevTime;this.prevTime=o,requestAnimationFrame(e);for(const e in this.loops)this.monitoringStart(e),this.loops[e](t),this.monitoringEnd(e);this.monitoringEnd(i.name)};requestAnimationFrame(e)}setMonitoringCallback(e,o){this.monitoringStart=e,this.monitoringEnd=o}removeLoop(e){delete this.loops[e],this.monitoringStart(e),this.monitoringEnd(e)}addLoop(e,o){if(this.loops[e])throw new Error;this.loops[e]=o}getType(){return i.name}}},905:function(e,o,t){t.r(o),t.d(o,{Factory:function(){return r},WorldService:function(){return u},registerNewWorld:function(){return c}});var n=t(454);class r{constructor(){}async createService(e){return new u(e)}}let i=-1,a=[],s=[],l=[];function c(e){a.push(e),i<0&&(i=0,window.axolotis.world=a[i],window.axolotis.activeWorld=i)}window&&(window.axolotis||(window.axolotis={}),window.axolotis.worlds=a,window.axolotis.activeWorld=i);class u{constructor(e){var o,t,r;r=void 0,(t="world")in(o=this)?Object.defineProperty(o,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[t]=r,console.log("info");let a=null;for(const o of this.getWorlds())o.getFirstComponentByType(n.e.name)==e&&(a=o);if(!a)throw new Error;this.world=a,e.getService("@aptero/axolotis-player/modules/core/loader/CodeLoaderService").then((async e=>{e.awaitInitialLoading();for(const e of l)e()})),i>=0&&this.setActiveWorldByNumber(i)}getType(){return u.name}getWorlds(){return a}getActiveWorld(){return a[i]}isActiveWorld(){return this.world==this.getActiveWorld()}addOnWorldChangeCallback(e){let o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];s.push(e),o&&e()}addOnWorldAdded(e){let o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];l.push(e),o&&e()}setActiveWorld(e){for(let o=0;o<this.getWorlds().length;o++)if(e==this.getWorlds()[o])return void this.setActiveWorldByNumber(o);throw new Error}setActiveWorldByNumber(e){if(i!=e){i=e,window&&window.axolotis&&(window.axolotis.activeWorld=i,window.axolotis.world=a[i]);for(const e of s)e()}}}},82:function(e,o,t){t.d(o,{Vf:function(){return a},Ag:function(){return r},dK:function(){return i}}),window&&(window.axolotis||(window.axolotis={}),window.axolotis.localModule||(window.axolotis.localModule={}));let n=window.axolotis.localModule||{};function r(e,o){if(n[e])throw new Error("Module already defined");n[e]=o}function i(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&console.log("imported module :",e),Object.assign(n,e)}async function a(e){let o=null;if(!n[e])throw console.log("local module installed:",n),new Error("unknown module - please register it - "+e);return o=await async function(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const t=await o[e](),n=t.module;for(const e in n){const o=n[e];if(o.prototype&&o.prototype.constructor.name===t.classname)return new o}throw new Error("invalid factory "+e+" - "+t.classname)}(e,n),o}i({"@aptero/axolotis-player/modules/core/WorldService":async()=>{const e=await Promise.resolve().then(t.bind(t,905));return{module:e,classname:e.Factory.name}},"@aptero/axolotis-player/modules/FrameLoop":async()=>{const e=await Promise.resolve().then(t.bind(t,630));return{module:e,classname:e.Factory.name}}})},240:function(e,o,t){t.d(o,{i:function(){return r}});var n=t(82);class r{constructor(){var e,o,t;t={},(o="service")in(e=this)?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t}setService(e,o){this.service[e]=Promise.resolve(o)}async getService(e){if(this.service[e]){const o=await this.service[e];if(!o)throw new Error("error");return o}if(!this.service[e]){let o=(0,n.Vf)(e);this.service[e]=new Promise((async e=>{e(await(await o).createService(this))}))}return await this.service[e]}}},454:function(e,o,t){t.d(o,{e:function(){return r}});var n=t(240);class r extends n.i{getType(){return r.name}}},147:function(e){e.exports={i8:"1.0.0"}}},o={};function t(n){var r=o[n];if(void 0!==r)return r.exports;var i=o[n]={exports:{}};return e[n](i,i.exports,t),i.exports}t.d=function(e,o){for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return function(){t.r(n),t.d(n,{CodeLoaderComponent:function(){return i},FrameLoop:function(){return h.FrameLoop},LazyServices:function(){return g.i},ServiceEntity:function(){return e.e},WorldEntity:function(){return c},WorldService:function(){return l.WorldService},initHtml:function(){return m},initHtmlFromUrl:function(){return p},registerLocalModule:function(){return o.Ag},registerLocalModuleList:function(){return o.dK}});var e=t(454),o=t(82);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}class i{constructor(){r(this,"initialLoading",void 0),r(this,"initialLoadingResolver",void 0),this.initialLoading=new Promise((e=>{this.initialLoadingResolver=e}))}getType(){return i.name}async awaitInitialLoading(){await this.initialLoading}async startLoadingJson(t,n,r){let i=[];for(const e of n.entities)for(const n of e.components){let e=n.config;i.push((()=>new Promise((async(r,i)=>{const a=await(0,o.Vf)(n.module);let s=await a.createComponent(t,e||{});if(!s.getType)throw new Error("Not a component : "+n.module+" "+s.constructor.name);t.addComponent(s),r(a)}))))}for(const o of n.services)i.push((()=>new Promise((async(n,r)=>{let i=await t.getFirstComponentByType(e.e.name);await i.getService(o.module),n(i)}))));let a=function(e,o){let t=[],n=0;for(const r of e){const i=r();t.push(i),i.then((()=>{n++,o(n,e.length)}))}return Promise.all(t)}(i,r);return a.then((e=>{void 0!==this.initialLoadingResolver&&this.initialLoadingResolver(e)})),a.catch((e=>{console.error(e)})),a}}function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}var s=class{constructor(e){this.name=e,a(this,"components",[]),a(this,"waitingForComponent",{})}addComponent(e){if(this.components.push(e),this.waitingForComponent[e.getType()]){for(const o of this.waitingForComponent[e.getType()])o(e);delete this.waitingForComponent[e.getType()]}return e}removeAllComponents(){this.components.forEach((e=>{this.removeComponent(e)}))}removeComponent(e){return"destroy"in e&&e.destroy(),this.components=this.components.filter((o=>o!=e)),e}addComponents(e){e.forEach((e=>{this.addComponent(e)}))}getComponents(){return this.components}getComponentByType(e){let o=[];return this.components.forEach((t=>{t.getType()===e&&o.push(t)})),o}getComponentByTypeStartsWith(e){let o=[];return this.components.forEach((t=>{t.getType().startsWith(e)&&o.push(t)})),o}getFirstComponentByTypeStartsWith(e){return this.getComponentByTypeStartsWith(e)[0]}getFirstComponentByType(e){return this.getComponentByType(e)[0]}async getFirstComponentByTypeAsync(e){return this.getComponentByType(e)[0]?this.getComponentByType(e)[0]:(this.waitingForComponent[e]||(this.waitingForComponent[e]=[]),new Promise(((o,t)=>{this.waitingForComponent[e].push(o)})))}getType(){return this.name}},l=t(905);class c extends s{constructor(){super("world"),(0,l.registerNewWorld)(this)}}const u=t(147).i8;console.log(u);const d=e=>{"complete"===document.readyState&&document.body?e():window.addEventListener("DOMContentLoaded",e)};async function p(o){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.onProgress||(t.onProgress=(e,t)=>{console.log("["+o+"] : ["+e+"/"+t+"]")}),t.onLoaded||(t.onLoaded=()=>{console.log("["+o+"] : loading complete")});let n=new e.e,r=new c;r.addComponent(n);let a=new i;n.setService("@aptero/axolotis-player/modules/core/loader/CodeLoaderService",a);const s=await fetch(o),l=await s.text();let u=(new DOMParser).parseFromString(l,"text/html").body.getElementsByTagName("ax-scene");return!u||u&&0==u.length?(console.warn("Axolotis scene not found (no tag ax-scene)"),void t.onLoaded()):(console.log(u),await a.startLoadingJson(r,f(u),t.onProgress),t.onLoaded(),r)}function m(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o.onProgress||(o.onProgress=(e,o)=>{console.log("["+e+"/"+o+"]")}),o.onLoaded||(o.onLoaded=()=>{console.log("loading complete")});let t=new e.e,n=new c;n.addComponent(t);let r=new i;return t.setService("@aptero/axolotis-player/modules/core/loader/CodeLoaderService",r),d((()=>{let e=window.document.body.getElementsByTagName("ax-scene");if(!e||e&&0==e.length)return console.warn("Axolotis scene not found (no tag ax-scene)"),void o.onLoaded();console.log(e),r.startLoadingJson(n,f(e),o.onProgress).then(o.onLoaded)})),n}function f(e){let o=e[0];const t={version:"2.0",entities:[],services:[]};for(const e of o.getElementsByTagName("ax-entity")){let o={components:[]};for(const t of e.getElementsByTagName("ax-component")){let e=t.getAttribute("config").replace(/(['"])?([a-z0-9A-Z_]+)(['"])?:/g,'"$2": '),n={module:t.getAttribute("module"),config:JSON.parse(e)};o.components.push(n)}t.entities.push(o)}for(const e of o.getElementsByTagName("ax-service"))t.services.push({module:e.getAttribute("module")});return t}var g=t(240),h=t(630)}(),n}()}},r={};function i(e){var o=r[e];if(void 0!==o)return o.exports;var t=r[e]={exports:{}};return n[e](t,t.exports,i),t.exports}i.m=n,e=[],i.O=function(o,t,n,r){if(!t){var a=1/0;for(u=0;u<e.length;u++){t=e[u][0],n=e[u][1],r=e[u][2];for(var s=!0,l=0;l<t.length;l++)(!1&r||a>=r)&&Object.keys(i.O).every((function(e){return i.O[e](t[l])}))?t.splice(l--,1):(s=!1,r<a&&(a=r));if(s){e.splice(u--,1);var c=n();void 0!==c&&(o=c)}}return o}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[t,n,r]},i.F={},i.E=function(e){Object.keys(i.F).map((function(o){i.F[o](e)}))},i.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(o,{a:o}),o},i.d=function(e,o){for(var t in o)i.o(o,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(o,t){return i.f[t](e,o),o}),[]))},i.u=function(e){return({133:"@aptero/axolotis-core-plugins/modules/debug/PerformanceStats",324:"@aptero/axolotis-core-plugins/modules/portals/PortalsService",408:"@aptero/axolotis-core-plugins/modules/controller/pathFindingPlayer/Input",422:"@aptero/axolotis-core-plugins/modules/three/ThreeLib",487:"@aptero/axolotis-core-plugins/modules/controller/cameraController/OrbitController",614:"@aptero/axolotis-core-plugins/modules/Sky",625:"@aptero/axolotis-core-plugins/modules/controller/pathFindingPlayer/NavMeshPlayer",826:"@aptero/axolotis-core-plugins/modules/spoke/SpokeRoomLoader",877:"@aptero/axolotis-core-plugins/modules/controller/PlayerService",966:"@aptero/axolotis-core-plugins/modules/debug/DebugBtn",968:"@aptero/axolotis-core-plugins/modules/portals/PortalLink"}[e]||e)+".js"},i.miniCssF=function(e){},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},o={},t="axolotis-core-plugins:",i.l=function(e,n,r,a){if(o[e])o[e].push(n);else{var s,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==t+r){s=d;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",t+r),s.src=e),o[e]=[n];var p=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var r=o[e];if(delete o[e],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;i.g.importScripts&&(e=i.g.location+"");var o=i.g.document;if(!e&&o&&(o.currentScript&&(e=o.currentScript.src),!e)){var t=o.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e}(),function(){var e={249:0};i.f.j=function(o,t){var n=i.o(e,o)?e[o]:void 0;if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=e[o]=[t,r]}));t.push(n[2]=r);var a=i.p+i.u(o),s=new Error;i.l(a,(function(t){if(i.o(e,o)&&(0!==(n=e[o])&&(e[o]=void 0),n)){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+o+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}}),"chunk-"+o,o)}},i.F.j=function(o){if(!i.o(e,o)||void 0===e[o]){e[o]=null;var t=document.createElement("link");i.nc&&t.setAttribute("nonce",i.nc),t.rel="prefetch",t.as="script",t.href=i.p+i.u(o),document.head.appendChild(t)}},i.O.j=function(o){return 0===e[o]};var o=function(o,t){var n,r,a=t[0],s=t[1],l=t[2],c=0;if(a.some((function(o){return 0!==e[o]}))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(l)var u=l(i)}for(o&&o(t);c<a.length;c++)r=a[c],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(u)},t=self.webpackChunkaxolotis_core_plugins=self.webpackChunkaxolotis_core_plugins||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))}(),i.O(0,[249],(function(){[212,487,408,625,877,966,133,422,324,968,614,826].map(i.E)}),5);var a={};return function(){"use strict";i.r(a),i.d(a,{load:function(){return o}});var e=i(919);function o(){const o={"@aptero/axolotis-core-plugins/modules/controller/cameraController/OrbitController":async()=>{const e=await Promise.all([i.e(212),i.e(487)]).then(i.bind(i,681));return{module:e,classname:e.Factory.name}},"@aptero/axolotis-core-plugins/modules/controller/pathFindingPlayer/Input":async()=>{const e=await i.e(408).then(i.bind(i,823));return{module:e,classname:e.Factory.name}},"@aptero/axolotis-core-plugins/modules/controller/pathFindingPlayer/NavMeshPlayer":async()=>{const e=await Promise.all([i.e(212),i.e(625)]).then(i.bind(i,7));return{module:e,classname:e.Factory.name}},"@aptero/axolotis-core-plugins/modules/controller/PlayerService":async()=>{const e=await i.e(877).then(i.bind(i,912));return{module:e,classname:e.Factory.name}},"@aptero/axolotis-core-plugins/modules/debug/DebugBtn":async()=>{const e=await i.e(966).then(i.bind(i,551));return{module:e,classname:e.Factory.name}},"@aptero/axolotis-core-plugins/modules/debug/PerformanceStats":async()=>{const e=await Promise.all([i.e(212),i.e(625),i.e(133)]).then(i.bind(i,997));return{module:e,classname:e.Factory.name}},"@aptero/axolotis-core-plugins/modules/three/ThreeLib":async()=>{const e=await Promise.all([i.e(212),i.e(422)]).then(i.bind(i,950));return{module:e,classname:e.Factory.name}},"@aptero/axolotis-core-plugins/modules/portals/PortalsService":async()=>{const e=await i.e(324).then(i.bind(i,237));return{module:e,classname:e.Factory.name}},"@aptero/axolotis-core-plugins/modules/portals/PortalLink":async()=>{const e=await Promise.all([i.e(212),i.e(968)]).then(i.bind(i,481));return{module:e,classname:e.Factory.name}},"@aptero/axolotis-core-plugins/modules/Sky":async()=>{const e=await Promise.all([i.e(212),i.e(614)]).then(i.bind(i,259));return{module:e,classname:e.Factory.name}},"@aptero/axolotis-core-plugins/modules/spoke/SpokeRoomLoader":async()=>{const e=await i.e(826).then(i.bind(i,342));return{module:e,classname:e.Factory.name}}};(0,e.registerLocalModuleList)(o)}o()}(),a=i.O(a)}()}));
//# sourceMappingURL=index.js.map