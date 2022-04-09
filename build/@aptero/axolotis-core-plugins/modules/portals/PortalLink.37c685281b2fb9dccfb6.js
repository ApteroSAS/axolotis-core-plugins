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
"use strict";(self.webpackChunkaxolotis_core_plugins=self.webpackChunkaxolotis_core_plugins||[]).push([[968],{481:function(t,e,i){i.r(e),i.d(e,{Factory:function(){return s},PortalLink:function(){return n}});var r=i(919),o=i(212);function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}class s{async createComponent(t,e){var i,a,s,l,h,c;let p=t.getFirstComponentByType(r.ServiceEntity.name),d=await p.getService("@aptero/axolotis-player/modules/core/loader/CodeLoaderService"),u=await p.getService("@aptero/axolotis-core-plugins/modules/three/ThreeLib"),m=await p.getService("@aptero/axolotis-core-plugins/modules/portals/PortalsService"),g=await p.getService("@aptero/axolotis-core-plugins/modules/controller/PlayerService"),P=await p.getService("@aptero/axolotis-player/modules/core/WorldService"),y=new n(m,u,g,P,{position:new o.Vector3(null===(i=e.in)||void 0===i?void 0:i.x,null===(a=e.in)||void 0===a?void 0:a.y,null===(s=e.in)||void 0===s?void 0:s.z)},{position:new o.Vector3(null===(l=e.out)||void 0===l?void 0:l.x,null===(h=e.out)||void 0===h?void 0:h.y,null===(c=e.out)||void 0===c?void 0:c.z)});return d.awaitInitialLoading().then((async t=>{let i;m.worldExist(e.url)?i=m.getWorld(e.url):(i=await(0,r.initHtmlFromUrl)(e.url),m.notifylWorld(e.url,i)),y.setTargetWorld(i)})),y}}class n{async setTargetWorld(t){this.targetWorld=t;let e=await this.targetWorld.getFirstComponentByType(r.ServiceEntity.name);this.targetThreeLib=await e.getService("@aptero/axolotis-core-plugins/modules/three/ThreeLib"),this.targetPlayerService=await e.getService("@aptero/axolotis-core-plugins/modules/controller/PlayerService");let i=await t.getComponentByType(n.name);0===i.length&&console.error("no destination portal present");for(const t of i)t.inPosition.position.equals(this.outPosition.position)&&(this.targetLink=t);if(!this.targetLink)throw new Error("invalid portal init: target portal in wrong state");this.portals.addPortalRenderLoop((()=>{this.renderPortal()})),this.portals.addPortalLoop((t=>{this.computerPortalEnter()}))}constructor(t,e,i,r,s,n){this.portals=t,this.three=e,this.playerService=i,this.worldService=r,this.inPosition=s,this.outPosition=n,a(this,"otherCamera",void 0),a(this,"portalA",void 0),a(this,"portalB",void 0),a(this,"targetWorld",null),a(this,"targetThreeLib",null),a(this,"boundingBox",void 0),a(this,"targetLink",null),a(this,"portalPlane",void 0),a(this,"targetPlayerService",null),a(this,"tmpPos",new o.Vector3),a(this,"tmpDir",new o.Vector3),a(this,"tmpBox",new o.Box3),a(this,"tmpPlane",new o.Plane),a(this,"collidingLastFrame",!1),a(this,"lastDistance",0),a(this,"gracePeriode",0),this.otherCamera=new o.PerspectiveCamera(e.camera.fov,window.innerWidth/window.innerHeight,this.three.camera.near,this.three.camera.far),e.scene.add(this.otherCamera);let l=new o.MeshBasicMaterial({color:16711680,side:o.DoubleSide,transparent:!0});this.portalA=new o.Mesh(new o.CircleGeometry(1,64),l.clone()),this.portalA.material.opacity=0,this.portalA.position.copy(s.position),s.rotation&&this.portalA.setRotationFromEuler(s.rotation),this.portalA.layers.set(31),e.scene.add(this.portalA),this.portalA.geometry.computeBoundingBox(),this.portalPlane=new o.Plane(new o.Vector3(0,0,1)),this.boundingBox=new o.Box3,this.boundingBox.copy(this.portalA.geometry.boundingBox||new o.Box3);let h=new o.Box3(new o.Vector3(-.2,-.2,-.2),new o.Vector3(.2,.2,.2));this.boundingBox=this.boundingBox.union(h);let c=new o.MeshBasicMaterial({color:16777215,side:o.DoubleSide,transparent:!0});this.portalB=new o.Mesh(new o.CircleGeometry(1,64),c.clone()),this.portalB.material.opacity=0,this.portalB.position.copy(n.position),n.rotation&&this.portalB.setRotationFromEuler(n.rotation),e.scene.add(this.portalB)}computerPortalEnter(){if(!this.worldService.isActiveWorld())return;this.gracePeriode>0&&this.gracePeriode--,this.tmpBox.copy(this.boundingBox),this.tmpPlane.copy(this.portalPlane),this.tmpBox.applyMatrix4(this.portalA.matrixWorld),this.tmpPlane.applyMatrix4(this.portalA.matrixWorld),this.playerService.getCurrentPlayer().getHeadPosition(this.tmpPos),this.three.camera.getWorldDirection(this.tmpDir);const t=this.tmpBox.containsPoint(this.tmpPos);t?(0!==this.lastDistance&&this.tmpPlane.distanceToPoint(this.tmpPos)*this.lastDistance<0&&(console.log("enter"),this.targetWorld&&this.targetLink&&this.targetPlayerService&&0==this.gracePeriode&&(this.targetLink.gracePeriode=5,this.targetLink.collidingLastFrame=!0,this.targetLink.lastDistance=this.lastDistance,this.playerService.getCurrentPlayer().getHeadPosition(this.tmpPos),this.targetPlayerService.getCurrentPlayer().teleportToLocation(this.tmpPos.x,this.tmpPos.y,this.tmpPos.z),console.log("teleport"),this.worldService.setActiveWorld(this.targetWorld),this.targetPlayerService.getCurrentPlayer().teleportToLocation(this.tmpPos.x,this.tmpPos.y,this.tmpPos.z))),this.lastDistance=this.tmpPlane.distanceToPoint(this.tmpPos)):t||0===this.lastDistance||(this.lastDistance=0,console.log("leave")),this.collidingLastFrame=t}renderPortal(){if(!this.targetThreeLib)return;this.portalA.layers.set(30);let t=this.portalA.worldToLocal(this.three.camera.position.clone());this.otherCamera.position.copy(this.portalB.localToWorld(t));let e=this.three.camera.quaternion.clone().multiply(this.portalA.quaternion.clone().invert());this.otherCamera.quaternion.copy(e.multiply(this.portalB.quaternion)),this.otherCamera.rotation.x=this.three.camera.rotation.x;let i=this.three.renderer.getContext();i.enable(i.STENCIL_TEST),this.three.camera.layers.set(30),i.stencilFunc(i.ALWAYS,1,255),i.stencilOp(i.KEEP,i.KEEP,i.REPLACE),i.stencilMask(255),i.colorMask(!1,!1,!1,!1),i.depthMask(!1),this.three.renderer.render(this.three.scene,this.three.camera);let r=(new o.Vector3).subVectors(this.three.camera.position.clone(),this.portalA.position.clone()),a=new o.Vector3(0,0,1).applyQuaternion(this.portalA.quaternion),s=-Math.sign(r.dot(a)),n=new o.Vector3(0,0,s).applyQuaternion(this.portalB.quaternion),l=this.portalB.position,h=(new o.Plane).setFromNormalAndCoplanarPoint(n,l);this.three.renderer.clippingPlanes=[h],i.colorMask(!0,!0,!0,!0),i.depthMask(!0),i.stencilFunc(i.EQUAL,1,255),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),this.otherCamera.layers.set(0),this.three.renderer.render(this.targetThreeLib.scene,this.otherCamera),this.three.renderer.clippingPlanes=[],i.disable(i.STENCIL_TEST),i.colorMask(!1,!1,!1,!1),i.depthMask(!0),this.three.renderer.render(this.three.scene,this.three.camera),this.three.camera.layers.set(0),this.portalA.layers.set(31)}getType(){return n.name}}}}]);
//# sourceMappingURL=PortalLink.37c685281b2fb9dccfb6.js.map