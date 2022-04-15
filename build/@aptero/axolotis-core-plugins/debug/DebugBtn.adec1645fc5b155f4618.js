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
"use strict";(self.webpackChunkaxolotis_core_plugins=self.webpackChunkaxolotis_core_plugins||[]).push([[741],{551:function(e,n,t){t.r(n),t.d(n,{DebugBtn:function(){return r},Factory:function(){return o}});class o{async createService(e){let n=await e.getService("@aptero/axolotis-core-plugins/frame/FrameLoop");return new r(n,e)}}class r{constructor(e,n){window.document.body.insertAdjacentHTML("beforeend",'<div id="debug-btn" style="display: block;\n    font-family: monospace;\n    cursor: pointer;\n    position: absolute;\n    bottom: 0;\n    right: 2px;\n    padding: 4px 8px;\n    color: #fff;\n    text-shadow: 1px 1px 1px rgba(0,0,0,.5);\n    font-size: 10px;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    user-select: none" >60 FPS</div>');let t=window.document.getElementById("debug-btn");t&&(t.onclick=e=>{e.stopPropagation(),e.preventDefault(),n.getService("@aptero/axolotis-core-plugins/debug/PerformanceStats")},e.addLoop(r.name,(e=>{t.innerText=Math.round(1/e*1e3)+" FPS"}))),window.location.host.startsWith("localhost")&&n.getService("@aptero/axolotis-core-plugins/debug/PerformanceStats")}getType(){return r.name}}}}]);
//# sourceMappingURL=DebugBtn.adec1645fc5b155f4618.js.map