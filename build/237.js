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
"use strict";(self.webpackChunkaxolotis_player=self.webpackChunkaxolotis_player||[]).push([[237],{237:function(e,r,t){t.r(r),t.d(r,{Factory:function(){return a},PortalsService:function(){return n}});var o=t(988);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}class a{constructor(){}async createService(e){const r=await e.getService("@aptero/axolotis-player/modules/core/WorldService"),t=await r.getActiveWorld().getFirstComponentByType(o.ServiceEntity.name),s=(await t.getService("@aptero/axolotis-player/modules/core/loader/CodeLoaderService"),await e.getService("@aptero/axolotis-player/modules/FrameLoop")),a=await e.getService("@aptero/axolotis-core-plugins/modules/three/ThreeLib");let i="initial";try{i=window.location.href}catch(e){}return new n(r,s,a,i)}}const i={};class n{constructor(e,r,t,o){this.services=e,this.three=t,s(this,"i",0),s(this,"portalsLoops",[]),s(this,"portalsRenderLoops",[]),this.notifylWorld(o,e.getActiveWorld()),r.addLoop(n.name,(e=>{for(const r of this.portalsLoops)r(e)})),this.three.preRenderPass.push((()=>{this.render()}))}render(){const e=this.three.renderer.getContext();this.three.renderer.clear(!0,!0,!0),this.three.renderer.autoClear=!1;for(const e of this.portalsRenderLoops)e();e.colorMask(!0,!0,!0,!0),e.depthMask(!0)}getType(){return n.name}cleanUpRoomUrl(e){return e.replace("./",""),e.startsWith("http")||(e=window.location.origin+"/"+e),new URL(e).toString()}notifylWorld(e,r){e=this.cleanUpRoomUrl(e),i[e]||(i[e]=r)}getWorld(e){return e=this.cleanUpRoomUrl(e),i[e]}worldExist(e){return!!this.getWorld(e)}addPortalLoop(e){this.portalsLoops.push(e)}addPortalRenderLoop(e){this.portalsRenderLoops.push(e)}}}}]);
//# sourceMappingURL=237.js.map