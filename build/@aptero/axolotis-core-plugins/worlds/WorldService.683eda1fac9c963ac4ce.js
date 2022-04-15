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
"use strict";(self.webpackChunkaxolotis_core_plugins=self.webpackChunkaxolotis_core_plugins||[]).push([[320],{787:function(e,r,t){t.r(r),t.d(r,{Factory:function(){return l},WorldService:function(){return a},registerNewWorld:function(){return i}});var o=t(919);class l{constructor(){}async createService(e){return new a(e)}}let d=[],s=[];function i(e){const r=(0,o.getGlobalStorage)("worlds");r.worlds.add(e),r.activeWorld<0&&(r.activeWorld=0,r.world=r.worlds[r.activeWorld])}(0,o.getGlobalStorage)("worlds").activeWorld||((0,o.getGlobalStorage)("worlds").worlds=new Set,(0,o.getGlobalStorage)("worlds").activeWorld=-1);class a{constructor(e){var r,t,l;l=void 0,(t="world")in(r=this)?Object.defineProperty(r,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):r[t]=l,i(e.getWorld()),console.log("info");let d=null;for(const r of this.getWorlds()){r.getFirstComponentByType(o.Services.name)==e&&(d=r)}if(!d)throw new Error;this.world=d,e.getService(o.CODE_LOADER_MODULE_NAME).then((async e=>{e.awaitInitialLoading();for(const e of s)e()})),(0,o.getGlobalStorage)("worlds").activeWorld>=0&&this.setActiveWorldByNumber((0,o.getGlobalStorage)("worlds").activeWorld)}getType(){return a.name}getWorlds(){return(0,o.getGlobalStorage)("worlds").worlds}getActiveWorld(){let e=(0,o.getGlobalStorage)("worlds");return this.getWorlds()[e.activeWorld]}isActiveWorld(){return this.world==this.getActiveWorld()}addOnWorldChangeCallback(e){let r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];d.push(e),r&&e()}addOnWorldAdded(e){let r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];s.push(e),r&&e()}setActiveWorld(e){for(let r=0;r<this.getWorlds().length;r++)if(e==this.getWorlds()[r])return void this.setActiveWorldByNumber(r);throw new Error}setActiveWorldByNumber(e){if((0,o.getGlobalStorage)("worlds").activeWorld!=e){(0,o.getGlobalStorage)("worlds").activeWorld=e,(0,o.getGlobalStorage)("worlds").world=this.getWorlds()[e];for(const e of d)e()}}}}}]);
//# sourceMappingURL=WorldService.683eda1fac9c963ac4ce.js.map