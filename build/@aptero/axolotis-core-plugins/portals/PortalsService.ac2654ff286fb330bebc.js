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
"use strict";(self.webpackChunkaxolotis_core_plugins=self.webpackChunkaxolotis_core_plugins||[]).push([[660],{237:function(e,t,r){r.r(t),r.d(t,{Factory:function(){return i},PortalsService:function(){return a}});var o=r(919);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class i{constructor(){}async createService(e){const t=await e.getService("@aptero/axolotis-core-plugins/worlds/WorldService"),r=await t.getActiveWorld().getFirstComponentByType(o.Services.name),s=(await r.getService(o.CODE_LOADER_MODULE_NAME),await e.getService("@aptero/axolotis-core-plugins/frame/FrameLoop")),i=await e.getService("@aptero/axolotis-core-plugins/three/ThreeLib");let n="initial";try{n=window.location.href}catch(e){}return new a(t,s,i,n)}}const n={};class a{constructor(e,t,r,o){this.services=e,this.three=r,s(this,"i",0),s(this,"portalsLoops",[]),s(this,"portalsRenderLoops",[]),this.notifylWorld(o,e.getActiveWorld()),t.addLoop(a.name,(e=>{for(const t of this.portalsLoops)t(e)})),this.three.preRenderPass.push((()=>{this.render()}))}render(){const e=this.three.renderer.getContext();this.three.renderer.clear(!0,!0,!0),this.three.renderer.autoClear=!1;for(const e of this.portalsRenderLoops)e();e.colorMask(!0,!0,!0,!0),e.depthMask(!0)}getType(){return a.name}cleanUpRoomUrl(e){return e.replace("./",""),e.startsWith("http")||(e=window.location.origin+"/"+e),new URL(e).toString()}notifylWorld(e,t){e=this.cleanUpRoomUrl(e),n[e]||(n[e]=t)}getWorld(e){return e=this.cleanUpRoomUrl(e),n[e]}worldExist(e){return!!this.getWorld(e)}addPortalLoop(e){this.portalsLoops.push(e)}addPortalRenderLoop(e){this.portalsRenderLoops.push(e)}}}}]);
//# sourceMappingURL=PortalsService.ac2654ff286fb330bebc.js.map