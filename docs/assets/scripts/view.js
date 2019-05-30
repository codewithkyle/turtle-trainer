(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Module_1 = __webpack_require__(7);
var Application_1 = __webpack_require__(0);
var Env_1 = __webpack_require__(1);
var THREE = __webpack_require__(8);
var View = (function (_super) {
    __extends(View, _super);
    function View(view, uuid) {
        var _this = _super.call(this, view, uuid) || this;
        if (Env_1.Env.isDebug) {
            console.log('%c[Module Manager] ' + ("%ccreated new %c" + View.index + " %cmodule with an ID of %c" + uuid), 'color:#4882fd', 'color:#eee', 'color:#48eefd', 'color:#eee', 'color:#48eefd');
        }
        _this._scene = new THREE.Scene();
        _this._camera = new THREE.PerspectiveCamera(75, 2, 0.1, 1000);
        _this._renderer = new THREE.WebGLRenderer({ canvas: _this.view.querySelector('.js-canvas') });
        _this._canvasWrapper = _this.view.querySelector('.js-canvas-wrapper');
        _this._editorWrapper = _this.view.querySelector('.js-gui-wrapper');
        return _this;
    }
    View.prototype.resizeCanvas = function () {
        var canvas = this._renderer.domElement;
        var width = canvas.clientWidth;
        var height = canvas.clientHeight;
        if (canvas.width !== width || canvas.height !== height) {
            this._renderer.setSize(width, height, false);
            this._camera.aspect = width / height;
            this._camera.updateProjectionMatrix();
        }
    };
    View.prototype.animate = function () {
        var _this = this;
        this.resizeCanvas();
        this._cube.rotation.x += 0.01;
        this._cube.rotation.y += 0.01;
        this._renderer.render(this._scene, this._camera);
        requestAnimationFrame(function () { _this.animate(); });
    };
    View.prototype.makeBox = function () {
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        this._cube = new THREE.Mesh(geometry, material);
        this._scene.add(this._cube);
        this._camera.position.z = 5;
    };
    View.prototype.afterMount = function () {
        this.makeBox();
        this.animate();
    };
    View.prototype.beforeDestroy = function () {
    };
    View.index = 'View';
    return View;
}(Module_1.Module));
exports.View = View;
modules[View.index] = View;
if (Env_1.Env.isDebug) {
    console.log('%c[Module Manager] ' + ("%cmodule %c" + View.index + " %chas finished loading"), 'color:#4882fd', 'color:#eee', 'color:#48eefd', 'color:#eee');
}
Application_1.Application.mountModules();


/***/ })

},[[6,2,5,6,8,4]]]);