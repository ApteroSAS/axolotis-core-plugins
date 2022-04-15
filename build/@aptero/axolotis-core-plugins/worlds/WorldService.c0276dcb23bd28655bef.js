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
"use strict";(self.webpackChunkaxolotis_core_plugins=self.webpackChunkaxolotis_core_plugins||[]).push([[320],{787:function(o,e,r){r.r(e),r.d(e,{Factory:function(){return l},WorldService:function(){return i},registerNewWorld:function(){return d}});var t=r(919);class l{constructor(){}async createService(o){return new i(o)}}let a=[],s=[];function d(o){(0,t.getGlobalStorage)("worlds").worlds.push(o),(0,t.getGlobalStorage)("worlds").activeWorld<0&&((0,t.getGlobalStorage)("worlds").activeWorld=0,(0,t.getGlobalStorage)("worlds").world=(0,t.getGlobalStorage)("worlds").worlds[(0,t.getGlobalStorage)("worlds").activeWorld])}(0,t.getGlobalStorage)("worlds").activeWorld||((0,t.getGlobalStorage)("worlds").worlds=[],(0,t.getGlobalStorage)("worlds").activeWorld=-1);class i{constructor(o){var e,r,l;l=void 0,(r="world")in(e=this)?Object.defineProperty(e,r,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[r]=l,console.log("info");let a=null;for(const e of this.getWorlds()){e.getFirstComponentByType(t.Services.name)==o&&(a=e)}if(!a)throw new Error;this.world=a,o.getService(t.CODE_LOADER_MODULE_NAME).then((async o=>{o.awaitInitialLoading();for(const o of s)o()})),(0,t.getGlobalStorage)("worlds").activeWorld>=0&&this.setActiveWorldByNumber((0,t.getGlobalStorage)("worlds").activeWorld)}getType(){return i.name}getWorlds(){return(0,t.getGlobalStorage)("worlds").worlds}getActiveWorld(){return this.getWorlds()[(0,t.getGlobalStorage)("worlds").activeWorld]}isActiveWorld(){return this.world==this.getActiveWorld()}addOnWorldChangeCallback(o){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];a.push(o),e&&o()}addOnWorldAdded(o){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];s.push(o),e&&o()}setActiveWorld(o){for(let e=0;e<this.getWorlds().length;e++)if(o==this.getWorlds()[e])return void this.setActiveWorldByNumber(e);throw new Error}setActiveWorldByNumber(o){if((0,t.getGlobalStorage)("worlds").activeWorld!=o){(0,t.getGlobalStorage)("worlds").activeWorld=o,(0,t.getGlobalStorage)("worlds").world=this.getWorlds()[o];for(const o of a)o()}}}}}]);
//# sourceMappingURL=WorldService.c0276dcb23bd28655bef.js.map