(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InputManager = (function () {
    function InputManager() {
        InputManager.init();
    }
    InputManager.validateSelect = function (select, error) {
        if (select === null || error === null) {
            return true;
        }
        if (select.value !== '') {
            select.classList.add('has-value');
        }
        else {
            select.classList.remove('has-value');
        }
        if (!select.validity.valid) {
            select.classList.add('is-invalid');
            var errorMessage = select.validationMessage;
            error.innerHTML = errorMessage;
            return false;
        }
        select.classList.remove('is-invalid');
        error.innerHTML = '';
        return true;
    };
    InputManager.validateInput = function (input, error) {
        if (input === null || error === null) {
            return true;
        }
        if (input.value !== '') {
            input.classList.add('has-value');
        }
        else {
            input.classList.remove('has-value');
        }
        if (!input.validity.valid) {
            input.classList.add('is-invalid');
            var errorMessage = input.validationMessage;
            if (input.type === 'password') {
                errorMessage = 'Please provide a valid password';
                if (input.value.length < input.minLength) {
                    errorMessage = 'Password is too short';
                }
                else if (input.value.length > input.maxLength) {
                    errorMessage = 'Password is too long';
                }
            }
            else if (input.type === 'email') {
                errorMessage = 'Please provide a valid email';
            }
            error.innerHTML = errorMessage;
            return false;
        }
        input.classList.remove('is-invalid');
        error.innerHTML = '';
        return true;
    };
    InputManager.init = function () {
        InputManager._inputs.forEach(function (input) {
            input.addEventListener('blur', InputManager.handleInputBlur);
            input.addEventListener('focus', InputManager.handleInputFocus);
        });
        InputManager._selects.forEach(function (select) {
            select.addEventListener('change', InputManager.handleSelectChange);
            select.addEventListener('blur', InputManager.handleInputBlur);
        });
        InputManager._textareas.forEach(function (textarea) {
            textarea.addEventListener('focus', InputManager.handleInputFocus);
            textarea.addEventListener('blur', InputManager.handleInputBlur);
        });
    };
    InputManager.reload = function () {
        InputManager._inputs.forEach(function (input) {
            input.removeEventListener('blur', InputManager.handleInputBlur);
            input.removeEventListener('focus', InputManager.handleInputFocus);
        });
        InputManager._selects.forEach(function (select) {
            select.removeEventListener('change', InputManager.handleSelectChange);
        });
        InputManager._textareas.forEach(function (textarea) {
            textarea.removeEventListener('focus', InputManager.handleInputFocus);
            textarea.removeEventListener('blur', InputManager.handleInputBlur);
        });
        InputManager._inputs = Array.from(document.body.querySelectorAll('.js-input'));
        InputManager._selects = Array.from(document.body.querySelectorAll('.js-select'));
        InputManager._textareas = Array.from(document.body.querySelectorAll('.js-textarea'));
        InputManager.init();
    };
    InputManager.validateForm = function (form) {
        var inputs = Array.from(form.querySelectorAll('.js-input'));
        var selects = Array.from(form.querySelectorAll('.js-select'));
        var isValid = true;
        for (var i = 0; i < inputs.length; i++) {
            var errorEl = inputs[i].parentElement.querySelector('.js-error');
            if (errorEl) {
                if (!this.validateInput(inputs[i], errorEl)) {
                    isValid = false;
                }
            }
        }
        for (var i = 0; i < selects.length; i++) {
            var errorEl = selects[i].parentElement.querySelector('.js-error');
            if (errorEl) {
                if (!this.validateSelect(selects[i], errorEl)) {
                    isValid = false;
                }
            }
        }
        return isValid;
    };
    InputManager._inputs = Array.from(document.body.querySelectorAll('.js-input'));
    InputManager._selects = Array.from(document.body.querySelectorAll('.js-select'));
    InputManager._textareas = Array.from(document.body.querySelectorAll('.js-textarea'));
    InputManager.handleInputBlur = function (e) {
        var input = e.currentTarget;
        var wrapper = input.parentElement;
        var error = wrapper.querySelector('.js-error');
        InputManager.validateInput(input, error);
        input.classList.add('has-touched');
    };
    InputManager.handleKeyup = function (e) {
        var input = e.currentTarget;
        var wrapper = input.parentElement;
        var error = wrapper.querySelector('.js-error');
        if (input.classList.contains('has-touched')) {
            InputManager.validateInput(input, error);
        }
    };
    InputManager.handleInputFocus = function (e) {
        var input = e.currentTarget;
        input.addEventListener('keyup', InputManager.handleKeyup);
    };
    InputManager.handleSelectChange = function (e) {
        var select = e.currentTarget;
        var wrapper = select.parentElement;
        var error = wrapper.querySelector('.js-error');
        InputManager.validateSelect(select, error);
    };
    return InputManager;
}());
exports.InputManager = InputManager;
new InputManager();


/***/ })

},[[65,1]]]);