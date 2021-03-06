(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],[
/* 0 */,
/* 1 */
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
var Module_1 = __webpack_require__(2);
var Application_1 = __webpack_require__(3);
var Env_1 = __webpack_require__(4);
var SocketManager_1 = __webpack_require__(9);
var Client_1 = __webpack_require__(0);
var Login = (function (_super) {
    __extends(Login, _super);
    function Login(view, uuid) {
        var _this = _super.call(this, view, uuid) || this;
        _this.handleSubmit = function (e) {
            e.preventDefault();
            if (_this._tokenInput.value !== '') {
                Env_1.Env.startLoading();
                SocketManager_1.SocketManager.emit('joinRoom', { token: _this._tokenInput.value });
                SocketManager_1.SocketManager.receive('roomResponse', _this.roomJoinResponse, _this);
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
            Env_1.Env.startLoading();
            if (SocketManager_1.SocketManager.emit('createRoom')) {
                SocketManager_1.SocketManager.receive('roomCreated', _this.roomCreationResponse, _this);
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
    Login.prototype.GetStartupForm = function (firstUser) {
        Env_1.Env.startLoading();
        var formSlug = (firstUser) ? 'creation-form' : 'startup-form';
        fetch(window.location.origin + "/" + formSlug + ".html")
            .then(function (request) { return request.text(); })
            .then(function (response) {
            Env_1.Env.stopLoading();
            var setupForm = document.createElement('div');
            setupForm.classList.add('o-setup-form');
            setupForm.innerHTML = response;
            var main = document.body.querySelector('.js-main-view');
            main.appendChild(setupForm);
            setupForm.classList.add('is-visible');
            Application_1.Application.createModule('SetupForm', setupForm);
        })
            .catch(function (e) { console.error('Something went wrong:', e); });
    };
    Login.prototype.roomCreationResponse = function (data, scope) {
        Env_1.Env.stopLoading();
        if (Env_1.Env.isDebug) {
            console.log("Server responded with the room token " + data.token);
        }
        new Client_1.Client(data.token);
        scope.view.classList.add('is-hidden');
        scope.GetStartupForm(true);
    };
    Login.prototype.roomJoinResponse = function (data, scope) {
        Env_1.Env.stopLoading();
        if (data.success && data.token) {
            new Client_1.Client(data.token);
            scope.view.classList.add('is-hidden');
            scope.GetStartupForm(false);
        }
        else {
            if (data.error) {
                if (Env_1.Env.isDebug) {
                    console.error('Server responded with:', data.error);
                }
            }
        }
    };
    Login.prototype.afterMount = function () {
        this._loginForm.addEventListener('submit', this.handleSubmit);
        this._tokenInput.addEventListener('blur', this.handleInput);
        this._tokenInput.addEventListener('keyup', this.handleInput);
        this._createRoomButton.addEventListener('click', this.createNewRoom);
        var firstInput = this.view.querySelector('input');
        firstInput.focus();
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
],[[1,3,9,10,21,11,15,23,24,26,25,35,27,18,28,16,34,30,22,19,32,20,14,29,12,13,33,17,31,7]]]);