(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{62:function(module,exports,__webpack_require__){"use strict";var extendStatics,__extends=this&&this.__extends||(extendStatics=function(d,b){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])})(d,b)},function(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)});Object.defineProperty(exports,"__esModule",{value:!0});var Module_1=__webpack_require__(7),Application_1=__webpack_require__(1),Env_1=__webpack_require__(2),THREE=__webpack_require__(63),View=function(_super){function View(view,uuid){var _this=_super.call(this,view,uuid)||this;return Env_1.Env.isDebug&&console.log("%c[Module Manager] %ccreated new %c"+View.index+" %cmodule with an ID of %c"+uuid,"color:#4882fd","color:#eee","color:#48eefd","color:#eee","color:#48eefd"),_this._scene=new THREE.Scene,_this._camera=new THREE.PerspectiveCamera(75,2,.1,1e3),_this._renderer=new THREE.WebGLRenderer({canvas:_this.view.querySelector(".js-canvas")}),_this._canvasWrapper=_this.view.querySelector(".js-canvas-wrapper"),_this._editorWrapper=_this.view.querySelector(".js-gui-wrapper"),_this}return __extends(View,_super),View.prototype.resizeCanvas=function(){var canvas=this._renderer.domElement,width=canvas.clientWidth,height=canvas.clientHeight;canvas.width===width&&canvas.height===height||(this._renderer.setSize(width,height,!1),this._camera.aspect=width/height,this._camera.updateProjectionMatrix())},View.prototype.animate=function(){var _this=this;this.resizeCanvas(),this._cube.rotation.x+=.01,this._cube.rotation.y+=.01,this._renderer.render(this._scene,this._camera),requestAnimationFrame(function(){_this.animate()})},View.prototype.makeBox=function(){var geometry=new THREE.BoxGeometry(1,1,1),material=new THREE.MeshBasicMaterial({color:65280});this._cube=new THREE.Mesh(geometry,material),this._scene.add(this._cube),this._camera.position.z=5},View.prototype.afterMount=function(){this.makeBox(),this.animate()},View.prototype.beforeDestroy=function(){},View.index="View",View}(Module_1.Module);exports.View=View,modules[View.index]=View,Env_1.Env.isDebug&&console.log("%c[Module Manager] %cmodule %c"+View.index+" %chas finished loading","color:#4882fd","color:#eee","color:#48eefd","color:#eee"),Application_1.Application.mountModules()}},[[62,0,3,2,32,1]]]);