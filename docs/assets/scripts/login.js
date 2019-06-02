(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],[
/* 0 */
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
var Module_1 = __webpack_require__(1);
var Application_1 = __webpack_require__(2);
var Env_1 = __webpack_require__(3);
var SocketManager_1 = __webpack_require__(8);
var Login = (function (_super) {
    __extends(Login, _super);
    function Login(view, uuid) {
        var _this = _super.call(this, view, uuid) || this;
        _this.handleSubmit = function (e) {
            e.preventDefault();
            if (_this._tokenInput.value !== '') {
                Env_1.Env.startLoading();
                SocketManager_1.SocketManager.emit('joinRoom', { token: _this._tokenInput.value });
            }
            else {
                _this.handleError();
            }
        };
        _this.handleInput = function () {
            if (_this._tokenInput.value !== '') {
                _this._loginButton.classList.add('is-visible');
            }
            else {
                _this._loginButton.classList.remove('is-visible');
            }
        };
        _this.createNewRoom = function (e) {
            e.preventDefault();
            if (SocketManager_1.SocketManager.emit('createRoom')) {
                SocketManager_1.SocketManager.recieve('roomCreated', _this.roomResponse);
            }
        };
        if (Env_1.Env.isDebug) {
            console.log('%c[Module Manager] ' + ("%ccreated new %c" + Login.index + " %cmodule with an ID of %c" + uuid), 'color:#4882fd', 'color:#eee', 'color:#48eefd', 'color:#eee', 'color:#48eefd');
        }
        _this._loginForm = _this.view;
        _this._loginButton = _this.view.querySelector('.js-submit-button');
        _this._tokenInput = _this._loginForm.querySelector('input#token');
        _this._createRoomButton = _this.view.querySelector('.js-create-room-button');
        return _this;
    }
    Login.prototype.handleError = function () {
        Env_1.Env.stopLoading();
        var errorEl = this._tokenInput.parentElement.querySelector('.js-error');
        errorEl.innerHTML = 'Invalid token';
        this._tokenInput.classList.add('is-invalid');
        this._loginButton.classList.remove('is-visible');
    };
    Login.prototype.roomResponse = function (data) {
        console.log("Server responded with the room token " + data.token);
    };
    Login.prototype.afterMount = function () {
        this._loginForm.addEventListener('submit', this.handleSubmit);
        this._tokenInput.addEventListener('blur', this.handleInput);
        this._tokenInput.addEventListener('keyup', this.handleInput);
        this._createRoomButton.addEventListener('click', this.createNewRoom);
    };
    Login.prototype.beforeDestroy = function () {
    };
    Login.index = 'Login';
    return Login;
}(Module_1.Module));
exports.Login = Login;
modules[Login.index] = Login;
if (Env_1.Env.isDebug) {
    console.log('%c[Module Manager] ' + ("%cmodule %c" + Login.index + " %chas finished loading"), 'color:#4882fd', 'color:#eee', 'color:#48eefd', 'color:#eee');
}
Application_1.Application.mountModules();


/***/ })
],[[0,1,7,8,19,9,13,21,22,24,23,33,25,16,26,14,32,28,20,17,30,18,12,27,10,11,31,15,29,6]]]);