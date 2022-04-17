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
"use strict";(self.webpackChunkaxolotis_core_plugins=self.webpackChunkaxolotis_core_plugins||[]).push([[887],{681:function(e,t,n){n.r(t),n.d(t,{Factory:function(){return s},OrbitController:function(){return l}});var o=n(212);const a={type:"change"},i={type:"start"},r={type:"end"};class c extends o.EventDispatcher{constructor(e,t){super(),void 0===t&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new o.Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:o.MOUSE.ROTATE,MIDDLE:o.MOUSE.DOLLY,RIGHT:o.MOUSE.PAN},this.touches={ONE:o.TOUCH.ROTATE,TWO:o.TOUCH.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return p.phi},this.getAzimuthalAngle=function(){return p.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(e){e.addEventListener("keydown",G),this._domElementKeyEvents=e},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(a),n.update(),s=c.NONE},this.update=function(){const t=new o.Vector3,i=(new o.Quaternion).setFromUnitVectors(e.up,new o.Vector3(0,1,0)),r=i.clone().invert(),b=new o.Vector3,E=new o.Quaternion,f=2*Math.PI;return function(){const e=n.object.position;t.copy(e).sub(n.target),t.applyQuaternion(i),p.setFromVector3(t),n.autoRotate&&s===c.NONE&&N(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(p.theta+=m.theta*n.dampingFactor,p.phi+=m.phi*n.dampingFactor):(p.theta+=m.theta,p.phi+=m.phi);let o=n.minAzimuthAngle,g=n.maxAzimuthAngle;return isFinite(o)&&isFinite(g)&&(o<-Math.PI?o+=f:o>Math.PI&&(o-=f),g<-Math.PI?g+=f:g>Math.PI&&(g-=f),p.theta=o<=g?Math.max(o,Math.min(g,p.theta)):p.theta>(o+g)/2?Math.max(o,p.theta):Math.min(g,p.theta)),p.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,p.phi)),p.makeSafe(),p.radius*=u,p.radius=Math.max(n.minDistance,Math.min(n.maxDistance,p.radius)),!0===n.enableDamping?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),t.setFromSpherical(p),t.applyQuaternion(r),e.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(m.theta*=1-n.dampingFactor,m.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(m.set(0,0,0),d.set(0,0,0)),u=1,!!(h||b.distanceToSquared(n.object.position)>l||8*(1-E.dot(n.object.quaternion))>l)&&(n.dispatchEvent(a),b.copy(n.object.position),E.copy(n.object.quaternion),h=!1,!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",B),n.domElement.removeEventListener("pointerdown",z),n.domElement.removeEventListener("pointercancel",Z),n.domElement.removeEventListener("wheel",K),n.domElement.removeEventListener("pointermove",F),n.domElement.removeEventListener("pointerup",X),null!==n._domElementKeyEvents&&n._domElementKeyEvents.removeEventListener("keydown",G)};const n=this,c={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=c.NONE;const l=1e-6,p=new o.Spherical,m=new o.Spherical;let u=1;const d=new o.Vector3;let h=!1;const b=new o.Vector2,E=new o.Vector2,f=new o.Vector2,g=new o.Vector2,O=new o.Vector2,y=new o.Vector2,T=new o.Vector2,P=new o.Vector2,v=new o.Vector2,w=[],A={};function L(){return Math.pow(.95,n.zoomSpeed)}function N(e){m.theta-=e}function j(e){m.phi-=e}const M=function(){const e=new o.Vector3;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),d.add(e)}}(),k=function(){const e=new o.Vector3;return function(t,o){!0===n.screenSpacePanning?e.setFromMatrixColumn(o,1):(e.setFromMatrixColumn(o,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),d.add(e)}}(),S=function(){const e=new o.Vector3;return function(t,o){const a=n.domElement;if(n.object.isPerspectiveCamera){const i=n.object.position;e.copy(i).sub(n.target);let r=e.length();r*=Math.tan(n.object.fov/2*Math.PI/180),M(2*t*r/a.clientHeight,n.object.matrix),k(2*o*r/a.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(M(t*(n.object.right-n.object.left)/n.object.zoom/a.clientWidth,n.object.matrix),k(o*(n.object.top-n.object.bottom)/n.object.zoom/a.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function x(e){n.object.isPerspectiveCamera?u/=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function R(e){n.object.isPerspectiveCamera?u*=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function C(e){b.set(e.clientX,e.clientY)}function Y(e){g.set(e.clientX,e.clientY)}function D(){if(1===w.length)b.set(w[0].pageX,w[0].pageY);else{const e=.5*(w[0].pageX+w[1].pageX),t=.5*(w[0].pageY+w[1].pageY);b.set(e,t)}}function H(){if(1===w.length)g.set(w[0].pageX,w[0].pageY);else{const e=.5*(w[0].pageX+w[1].pageX),t=.5*(w[0].pageY+w[1].pageY);g.set(e,t)}}function I(){const e=w[0].pageX-w[1].pageX,t=w[0].pageY-w[1].pageY,n=Math.sqrt(e*e+t*t);T.set(0,n)}function _(e){if(1==w.length)E.set(e.pageX,e.pageY);else{const t=Q(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);E.set(n,o)}f.subVectors(E,b).multiplyScalar(n.rotateSpeed);const t=n.domElement;N(2*Math.PI*f.x/t.clientHeight),j(2*Math.PI*f.y/t.clientHeight),b.copy(E)}function U(e){if(1===w.length)O.set(e.pageX,e.pageY);else{const t=Q(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);O.set(n,o)}y.subVectors(O,g).multiplyScalar(n.panSpeed),S(y.x,y.y),g.copy(O)}function V(e){const t=Q(e),o=e.pageX-t.x,a=e.pageY-t.y,i=Math.sqrt(o*o+a*a);P.set(0,i),v.set(0,Math.pow(P.y/T.y,n.zoomSpeed)),x(v.y),T.copy(P)}function z(e){!1!==n.enabled&&(0===w.length&&(n.domElement.setPointerCapture(e.pointerId),n.domElement.addEventListener("pointermove",F),n.domElement.addEventListener("pointerup",X)),function(e){w.push(e)}(e),"touch"===e.pointerType?function(e){switch(q(e),w.length){case 1:switch(n.touches.ONE){case o.TOUCH.ROTATE:if(!1===n.enableRotate)return;D(),s=c.TOUCH_ROTATE;break;case o.TOUCH.PAN:if(!1===n.enablePan)return;H(),s=c.TOUCH_PAN;break;default:s=c.NONE}break;case 2:switch(n.touches.TWO){case o.TOUCH.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&I(),n.enablePan&&H(),s=c.TOUCH_DOLLY_PAN;break;case o.TOUCH.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&I(),n.enableRotate&&D(),s=c.TOUCH_DOLLY_ROTATE;break;default:s=c.NONE}break;default:s=c.NONE}s!==c.NONE&&n.dispatchEvent(i)}(e):function(e){let t;switch(e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case o.MOUSE.DOLLY:if(!1===n.enableZoom)return;!function(e){T.set(e.clientX,e.clientY)}(e),s=c.DOLLY;break;case o.MOUSE.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;Y(e),s=c.PAN}else{if(!1===n.enableRotate)return;C(e),s=c.ROTATE}break;case o.MOUSE.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;C(e),s=c.ROTATE}else{if(!1===n.enablePan)return;Y(e),s=c.PAN}break;default:s=c.NONE}s!==c.NONE&&n.dispatchEvent(i)}(e))}function F(e){!1!==n.enabled&&("touch"===e.pointerType?function(e){switch(q(e),s){case c.TOUCH_ROTATE:if(!1===n.enableRotate)return;_(e),n.update();break;case c.TOUCH_PAN:if(!1===n.enablePan)return;U(e),n.update();break;case c.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){n.enableZoom&&V(e),n.enablePan&&U(e)}(e),n.update();break;case c.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(e){n.enableZoom&&V(e),n.enableRotate&&_(e)}(e),n.update();break;default:s=c.NONE}}(e):function(e){if(!1===n.enabled)return;switch(s){case c.ROTATE:if(!1===n.enableRotate)return;!function(e){E.set(e.clientX,e.clientY),f.subVectors(E,b).multiplyScalar(n.rotateSpeed);const t=n.domElement;N(2*Math.PI*f.x/t.clientHeight),j(2*Math.PI*f.y/t.clientHeight),b.copy(E),n.update()}(e);break;case c.DOLLY:if(!1===n.enableZoom)return;!function(e){P.set(e.clientX,e.clientY),v.subVectors(P,T),v.y>0?x(L()):v.y<0&&R(L()),T.copy(P),n.update()}(e);break;case c.PAN:if(!1===n.enablePan)return;!function(e){O.set(e.clientX,e.clientY),y.subVectors(O,g).multiplyScalar(n.panSpeed),S(y.x,y.y),g.copy(O),n.update()}(e)}}(e))}function X(e){W(e),0===w.length&&(n.domElement.releasePointerCapture(e.pointerId),n.domElement.removeEventListener("pointermove",F),n.domElement.removeEventListener("pointerup",X)),n.dispatchEvent(r),s=c.NONE}function Z(e){W(e)}function K(e){!1!==n.enabled&&!1!==n.enableZoom&&s===c.NONE&&(e.preventDefault(),n.dispatchEvent(i),function(e){e.deltaY<0?R(L()):e.deltaY>0&&x(L()),n.update()}(e),n.dispatchEvent(r))}function G(e){!1!==n.enabled&&!1!==n.enablePan&&function(e){let t=!1;switch(e.code){case n.keys.UP:S(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:S(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:S(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:S(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}(e)}function B(e){!1!==n.enabled&&e.preventDefault()}function W(e){delete A[e.pointerId];for(let t=0;t<w.length;t++)if(w[t].pointerId==e.pointerId)return void w.splice(t,1)}function q(e){let t=A[e.pointerId];void 0===t&&(t=new o.Vector2,A[e.pointerId]=t),t.set(e.pageX,e.pageY)}function Q(e){const t=e.pointerId===w[0].pointerId?w[1]:w[0];return A[t.pointerId]}n.domElement.addEventListener("contextmenu",B),n.domElement.addEventListener("pointerdown",z),n.domElement.addEventListener("pointercancel",Z),n.domElement.addEventListener("wheel",K,{passive:!1}),this.update()}}class s{async createService(e){let t=await e.getService("@aptero/axolotis-core-plugins/frame/FrameLoop"),n=await e.getService("@aptero/axolotis-core-plugins/three/ThreeLib");return new l(n,t)}}class l{constructor(e,t){const n=new c(e.camera,e.renderer.domElement);t.addLoop(l.name,(()=>{n.update()}))}getType(){return l.name}}}}]);
//# sourceMappingURL=OrbitController.92f37c0fde754e05b9b8.js.map