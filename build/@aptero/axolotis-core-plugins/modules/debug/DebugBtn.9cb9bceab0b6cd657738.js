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
"use strict";(self.webpackChunkaxolotis_core_plugins=self.webpackChunkaxolotis_core_plugins||[]).push([[966],{551:function(e,n,o){o.r(n),o.d(n,{DebugBtn:function(){return r},Factory:function(){return t}});class t{async createService(e){let n=await e.getService("@aptero/axolotis-player/modules/FrameLoop");return new r(n,e)}}class r{constructor(e,n){window.document.body.insertAdjacentHTML("beforeend",'<div id="debug-btn" style="display: block;\n    font-family: monospace;\n    cursor: pointer;\n    position: absolute;\n    bottom: 0;\n    right: 2px;\n    padding: 4px 8px;\n    color: #fff;\n    text-shadow: 1px 1px 1px rgba(0,0,0,.5);\n    font-size: 10px;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    user-select: none" >60 FPS</div>');let o=window.document.getElementById("debug-btn");o&&(o.onclick=e=>{e.stopPropagation(),e.preventDefault(),n.getService("@aptero/axolotis-core-plugins/modules/debug/PerformanceStats")},e.addLoop(r.name,(e=>{o.innerText=Math.round(1/e*1e3)+" FPS"}))),window.location.host.startsWith("localhost")&&n.getService("@aptero/axolotis-core-plugins/modules/debug/PerformanceStats")}getType(){return r.name}}}}]);
//# sourceMappingURL=DebugBtn.9cb9bceab0b6cd657738.js.map