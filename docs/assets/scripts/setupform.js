(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ 63:
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
var InputManager_1 = __webpack_require__(64);
var SetupForm = (function (_super) {
    __extends(SetupForm, _super);
    function SetupForm(view, uuid) {
        var _this = _super.call(this, view, uuid) || this;
        _this.nextStep = function () {
            var inputs = Array.from(_this._steps[_this._currentStepIndex].querySelectorAll('.js-input'));
            var hasBlankInput = false;
            inputs.forEach(function (input) {
                if (input.value === '') {
                    var errorEl = input.parentElement.querySelector('.js-error');
                    InputManager_1.InputManager.validateInput(input, errorEl);
                    hasBlankInput = true;
                }
            });
            if (hasBlankInput) {
                _this.updateViewHeight(32);
                return;
            }
            _this._steps[_this._currentStepIndex].classList.remove('is-visible');
            _this._currentStepIndex++;
            _this._steps[_this._currentStepIndex].classList.add('is-visible');
            _this.updateViewHeight();
        };
        if (Env_1.Env.isDebug) {
            console.log('%c[Module Manager] ' + ("%ccreated new %c" + SetupForm.index + " %cmodule with an ID of %c" + uuid), 'color:#4882fd', 'color:#eee', 'color:#48eefd', 'color:#eee', 'color:#48eefd');
        }
        _this._steps = Array.from(_this.view.querySelectorAll('form-step'));
        _this._currentStepIndex = 0;
        _this._nextButtons = Array.from(_this.view.querySelectorAll('.js-next'));
        return _this;
    }
    SetupForm.prototype.updateViewHeight = function (extraHeight) {
        if (extraHeight === void 0) { extraHeight = 0; }
        var newHeight = this._steps[this._currentStepIndex].scrollHeight;
        this.view.style.height = newHeight + extraHeight + "px";
    };
    SetupForm.prototype.afterMount = function () {
        this._steps[this._currentStepIndex].classList.add('is-visible');
        this.updateViewHeight();
        for (var i = 0; i < this._nextButtons.length; i++) {
            this._nextButtons[i].addEventListener('click', this.nextStep);
        }
    };
    SetupForm.prototype.beforeDestroy = function () {
    };
    SetupForm.index = 'SetupForm';
    return SetupForm;
}(Module_1.Module));
exports.SetupForm = SetupForm;
modules[SetupForm.index] = SetupForm;
if (Env_1.Env.isDebug) {
    console.log('%c[Module Manager] ' + ("%cmodule %c" + SetupForm.index + " %chas finished loading"), 'color:#4882fd', 'color:#eee', 'color:#48eefd', 'color:#eee');
}
Application_1.Application.mountModules();


/***/ })

},[[63,3,9,10,7]]]);