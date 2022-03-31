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
"use strict";(self.webpackChunkaxolotis_player=self.webpackChunkaxolotis_player||[]).push([[551],{551:function(e,t,n){n.r(t),n.d(t,{DebugBtn:function(){return r},Factory:function(){return o}});class o{async createService(e){let t=await e.getService("@aptero/axolotis-player/modules/FrameLoop");return new r(t,e)}}class r{constructor(e,t){window.document.body.insertAdjacentHTML("beforeend",'<div id="debug-btn" style="display: block;\n    font-family: monospace;\n    cursor: pointer;\n    position: absolute;\n    bottom: 0;\n    right: 2px;\n    padding: 4px 8px;\n    color: #fff;\n    text-shadow: 1px 1px 1px rgba(0,0,0,.5);\n    font-size: 10px;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    user-select: none" >60 FPS</div>');let n=window.document.getElementById("debug-btn");n&&(n.onclick=e=>{e.stopPropagation(),e.preventDefault(),t.getService("@aptero/axolotis-core-plugins/modules/debug/PerformanceStats")},e.addLoop(r.name,(e=>{n.innerText=Math.round(1/e*1e3)+" FPS"}))),window.location.host.startsWith("localhost")&&t.getService("@aptero/axolotis-core-plugins/modules/debug/PerformanceStats")}getType(){return r.name}}}}]);
//# sourceMappingURL=551.js.map