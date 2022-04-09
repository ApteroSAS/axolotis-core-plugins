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
"use strict";(self.webpackChunkaxolotis_core_plugins=self.webpackChunkaxolotis_core_plugins||[]).push([[614],{259:function(e,t,n){n.r(t),n.d(t,{Factory:function(){return o},default:function(){return a}});var i=n(212),s=n(919);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class o{async createComponent(e,t){let n=e.getFirstComponentByType(s.ServiceEntity.name),i=await n.getService("@aptero/axolotis-core-plugins/modules/three/ThreeLib"),r=new a;return await r.initialize(i,t.skymap),r}}class a{constructor(){r(this,"scene",void 0),r(this,"texture",void 0)}getType(){return"Sky"}async initialize(e,t){this.scene=e.scene,this.texture=await e.loadAssets(t);const n=new i.vmT(16777215,268435455,1);n.color.setHSL(.6,1,.6),n.groundColor.setHSL(.095,1,.75),this.scene.add(n);const s=new i.xo$(1e3,25,25),r=new i.vBJ({map:this.texture,side:i._Li,depthWrite:!1,toneMapped:!1}),o=new i.Kj0(s,r);o.rotateY(i.M8C.degToRad(-60)),this.scene.add(o)}}}}]);
//# sourceMappingURL=Sky.js.map