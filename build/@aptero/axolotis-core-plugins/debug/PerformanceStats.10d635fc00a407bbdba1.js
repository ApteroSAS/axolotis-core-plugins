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
"use strict";(self.webpackChunkaxolotis_core_plugins=self.webpackChunkaxolotis_core_plugins||[]).push([[925],{490:function(e,t,n){n.r(t),n.d(t,{Factory:function(){return a},PerformanceStats:function(){return i}});var l=n(79);class a{async createService(e){return new i}}class i{constructor(){if(window.perfStatSingletonPresent)return;window.perfStatSingletonPresent=!0,console.warn("MB MBytes of allocated memory. (Run Chrome with --enable-precise-memory-info) to have precise perf info");const e=(0,l.Z)();e.showPanel(2),document.body.appendChild(e.dom);const t=n=>{requestAnimationFrame(t),e.update()};requestAnimationFrame(t)}getType(){return i.name}}},79:function(e,t){var n=function(){var e=0,t=document.createElement("div");function l(e){return t.appendChild(e.dom),e}function a(n){for(var l=0;l<t.children.length;l++)t.children[l].style.display=l===n?"block":"none";e=n}t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",(function(n){n.preventDefault(),a(++e%t.children.length)}),!1);var i=(performance||Date).now(),o=i,r=0,c=l(new n.Panel("FPS","#0ff","#002")),f=l(new n.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var s=l(new n.Panel("MB","#f08","#201"));return a(0),{REVISION:16,dom:t,addPanel:l,showPanel:a,begin:function(){i=(performance||Date).now()},end:function(){r++;var e=(performance||Date).now();if(f.update(e-i,200),e>=o+1e3&&(c.update(1e3*r/(e-o),100),o=e,r=0,s)){var t=performance.memory;s.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){i=this.end()},domElement:t,setMode:a}};n.Panel=function(e,t,n){var l=1/0,a=0,i=Math.round,o=i(window.devicePixelRatio||1),r=80*o,c=48*o,f=3*o,s=2*o,d=3*o,u=15*o,p=74*o,m=30*o,h=document.createElement("canvas");h.width=r,h.height=c,h.style.cssText="width:80px;height:48px";var w=h.getContext("2d");return w.font="bold "+9*o+"px Helvetica,Arial,sans-serif",w.textBaseline="top",w.fillStyle=n,w.fillRect(0,0,r,c),w.fillStyle=t,w.fillText(e,f,s),w.fillRect(d,u,p,m),w.fillStyle=n,w.globalAlpha=.9,w.fillRect(d,u,p,m),{dom:h,update:function(c,y){l=Math.min(l,c),a=Math.max(a,c),w.fillStyle=n,w.globalAlpha=1,w.fillRect(0,0,r,u),w.fillStyle=t,w.fillText(i(c)+" "+e+" ("+i(l)+"-"+i(a)+")",f,s),w.drawImage(h,d+o,u,p-o,m,d,u,p-o,m),w.fillRect(d+p-o,u,o,m),w.fillStyle=n,w.globalAlpha=.9,w.fillRect(d+p-o,u,o,i((1-c/y)*m))}}},t.Z=n}}]);
//# sourceMappingURL=PerformanceStats.10d635fc00a407bbdba1.js.map