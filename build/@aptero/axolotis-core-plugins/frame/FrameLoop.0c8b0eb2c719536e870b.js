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
"use strict";(self.webpackChunkaxolotis_core_plugins=self.webpackChunkaxolotis_core_plugins||[]).push([[496],{377:function(t,i,o){o.r(i),o.d(i,{Factory:function(){return r},FrameLoop:function(){return s}});var n=o(988);function e(t,i,o){return i in t?Object.defineProperty(t,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[i]=o,t}class r{async createService(t){let i=await t.getService(n.CODE_LOADER_MODULE_NAME),o=new s;return i.awaitInitialLoading().then((()=>{o.startAnimationFrameLoop()})),o}}class s{constructor(){e(this,"loops",{}),e(this,"prevTime",0),e(this,"monitoringStart",(()=>{})),e(this,"monitoringEnd",(()=>{}))}startAnimationFrameLoop(){const t=i=>{this.monitoringStart(s.name);const o=i-this.prevTime;this.prevTime=i,requestAnimationFrame(t);for(const t in this.loops)this.monitoringStart(t),this.loops[t](o),this.monitoringEnd(t);this.monitoringEnd(s.name)};requestAnimationFrame(t)}setMonitoringCallback(t,i){this.monitoringStart=t,this.monitoringEnd=i}removeLoop(t){delete this.loops[t],this.monitoringStart(t),this.monitoringEnd(t)}addLoop(t,i){if(this.loops[t])throw new Error("loop already exist : "+t);this.loops[t]=i}getType(){return s.name}}}}]);
//# sourceMappingURL=FrameLoop.0c8b0eb2c719536e870b.js.map