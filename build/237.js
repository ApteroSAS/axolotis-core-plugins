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
"use strict";(self.webpackChunkaxolotis_player=self.webpackChunkaxolotis_player||[]).push([[237],{237:function(e,r,t){t.r(r),t.d(r,{Factory:function(){return i},PortalsService:function(){return n}});var o=t(919);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}class i{constructor(){}async createService(e){const r=await e.getService("@root/modules/core/WorldService"),t=await r.getActiveWorld().getFirstComponentByType(o.ServiceEntity.name),s=await t.getService("@root/modules/core/loader/CodeLoaderService"),i=await e.getService("@root/modules/FrameLoop"),a=await e.getService("@root/modules/three/ThreeLib");return new n(r,i,a,s.roomUrl)}}const a={};class n{constructor(e,r,t,o){this.services=e,this.three=t,s(this,"i",0),s(this,"portalsLoops",[]),s(this,"portalsRenderLoops",[]),this.notifyInitialWorld(o,e.getActiveWorld()),r.addLoop(n.name,(e=>{for(const r of this.portalsLoops)r(e)})),this.three.preRenderPass.push((()=>{this.render()}))}render(){const e=this.three.renderer.getContext();this.three.renderer.clear(!0,!0,!0),this.three.renderer.autoClear=!1;for(const e of this.portalsRenderLoops)e();e.colorMask(!0,!0,!0,!0),e.depthMask(!0)}getType(){return n.name}notifyInitialWorld(e,r){a[e]||(a[e]=r)}addPortalLoop(e){this.portalsLoops.push(e)}addPortalRenderLoop(e){this.portalsRenderLoops.push(e)}}}}]);
//# sourceMappingURL=237.js.map