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
"use strict";(self.webpackChunkaxolotis_core_plugins=self.webpackChunkaxolotis_core_plugins||[]).push([[701],{724:function(e,t,i){i.r(t),i.d(t,{Factory:function(){return a},default:function(){return o}});var n=i(212),s=i(919);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class a{async createComponent(e,t){let i=e.getFirstComponentByType(s.Services.name),n=await i.getService("@aptero/axolotis-core-plugins/three/ThreeLib"),r=new o;return await r.initialize(n,t.skymap),r}}class o{constructor(){r(this,"scene",void 0),r(this,"texture",void 0)}getType(){return"Sky"}async initialize(e,t){this.scene=e.scene,this.texture=await e.loadAssets(t);const i=new n.HemisphereLight(16777215,268435455,1);i.color.setHSL(.6,1,.6),i.groundColor.setHSL(.095,1,.75),this.scene.add(i);const s=new n.SphereGeometry(1e3,25,25),r=new n.MeshBasicMaterial({map:this.texture,side:n.BackSide,depthWrite:!1,toneMapped:!1}),a=new n.Mesh(s,r);a.rotateY(n.MathUtils.degToRad(-60)),this.scene.add(a)}}}}]);
//# sourceMappingURL=Sky.41196393cfaa0f915f0f.js.map