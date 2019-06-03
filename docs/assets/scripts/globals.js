(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Env_1 = __webpack_require__(1);
var uuid = __webpack_require__(2);
var device_manager_1 = __webpack_require__(5);
var Application = (function () {
    function Application() {
        new device_manager_1.default(Env_1.Env.isDebug, true);
        document.documentElement.classList.remove('dom-is-loading');
    }
    Application.mountModules = function () {
        var pendingModules = Array.from(document.body.querySelectorAll('[data-module]:not([data-uuid])'));
        pendingModules.forEach(function (requestedModule) {
            var moduleIndex = requestedModule.dataset.module;
            Application.createModule(moduleIndex, requestedModule);
        });
        Application.manageLazyParents();
    };
    Application.manageLazyParents = function () {
        Application.modules.forEach(function (module) {
            if (module.futureParent) {
                module.parent = Application.getModuleByUUID(module.futureParent.getAttribute('data-uuid'));
                if (module.parent) {
                    module.futureParent = null;
                    module.parent.register(module);
                }
            }
        });
    };
    Application.createModule = function (index, view) {
        var newModule = null;
        try {
            var id = uuid();
            newModule = new modules[index].prototype.constructor(view, id);
            newModule.mount();
        }
        catch (e) {
            if (modules[index] !== undefined) {
                console.error('Failed to create module', e);
            }
        }
        if (newModule) {
            Application.modules.push(newModule);
            newModule.afterMount();
        }
        return newModule;
    };
    Application.destroyModule = function (uuid) {
        var _this = this;
        if (uuid) {
            this.modules.forEach(function (module) {
                if (module.uuid === uuid) {
                    var index = _this.modules.indexOf(module);
                    module.beforeDestroy();
                    module.destroy();
                    _this.modules.splice(index, 1);
                }
            });
        }
        else {
            console.warn('No UUID provided');
        }
    };
    Application.getModuleByUUID = function (uuid) {
        if (!uuid) {
            console.warn('No UUID provided');
            return null;
        }
        var returnModule = null;
        this.modules.forEach(function (module) {
            if (module.uuid === uuid) {
                returnModule = module;
            }
        });
        return returnModule;
    };
    Application.modules = [];
    return Application;
}());
exports.Application = Application;
new Application();
Application.mountModules();


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Env = (function () {
    function Env() {
        if (window.location.hostname.match(/.local/)) {
            Env.setDebug(true);
        }
        else if (document.documentElement.getAttribute('debug') !== null) {
            Env.setDebug(true);
        }
    }
    Env.setDebug = function (status) {
        Env.isDebug = status;
    };
    Env.startLoading = function () {
        document.documentElement.classList.add('dom-is-loading');
    };
    Env.stopLoading = function () {
        document.documentElement.classList.remove('dom-is-loading');
    };
    Env.isDebug = true;
    return Env;
}());
exports.Env = Env;
new Env();


/***/ }),

/***/ 55:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Client = (function () {
    function Client(roomToken) {
        Client.room = roomToken;
    }
    Client.room = null;
    return Client;
}());
exports.Client = Client;


/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Application_1 = __webpack_require__(0);
var Module = (function () {
    function Module(view, uuid) {
        this.view = view;
        this.uuid = uuid;
        this.parent = null;
        this.submodules = [];
        this.futureParent = null;
    }
    Module.prototype.register = function (submodule) {
        this.submodules.push(submodule);
    };
    Module.prototype.mount = function () {
        this.view.dataset.uuid = this.uuid;
        var parent = this.view.closest("[data-module]:not([data-uuid=\"" + this.uuid + "\"])");
        if (parent) {
            this.parent = Application_1.Application.getModuleByUUID(parent.getAttribute('data-uuid'));
            if (this.parent) {
                this.parent.register(this);
            }
            else {
                this.futureParent = parent;
            }
        }
    };
    Module.prototype.afterMount = function () { };
    Module.prototype.seppuku = function () {
        Application_1.Application.destroyModule(this.uuid);
    };
    Module.prototype.beforeDestroy = function () { };
    Module.prototype.destroy = function () {
        if (this.submodules.length) {
            for (var i = this.submodules.length - 1; i >= 0; i--) {
                Application_1.Application.destroyModule(this.submodules[i].uuid);
            }
        }
        this.view.remove();
    };
    return Module;
}());
exports.Module = Module;


/***/ }),

/***/ 9:
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
var Module_1 = __webpack_require__(8);
var Application_1 = __webpack_require__(0);
var Env_1 = __webpack_require__(1);
var io = __webpack_require__(10);
var SocketManager = (function (_super) {
    __extends(SocketManager, _super);
    function SocketManager(view, uuid) {
        var _this = _super.call(this, view, uuid) || this;
        if (Env_1.Env.isDebug) {
            console.log('%c[Module Manager] ' + ("%ccreated new %c" + SocketManager.index + " %cmodule with an ID of %c" + uuid), 'color:#4882fd', 'color:#eee', 'color:#48eefd', 'color:#eee', 'color:#48eefd');
        }
        return _this;
    }
    SocketManager.recieve = function (eventName, callback, scope) {
        if (this._socket.connected) {
            this._socket.on(eventName, function (data) { callback(data, scope); });
            return true;
        }
        if (Env_1.Env.isDebug) {
            console.warn('Event failed to be emitted, the socket is not currently connect to the server.');
        }
        return false;
    };
    SocketManager.emit = function (eventName, eventObject) {
        if (this._socket.connected) {
            this._socket.emit(eventName, eventObject);
            return true;
        }
        if (Env_1.Env.isDebug) {
            console.warn('Event failed to be emitted, the socket is not currently connect to the server.');
        }
        return false;
    };
    SocketManager.connectionFailed = function () {
        if (Env_1.Env.isDebug) {
            console.log("Server connection could not be establised with the server at " + SocketManager.SERVER + ":" + SocketManager.PORT);
        }
        this._socketErrorMessage.classList.add('is-visible');
    };
    SocketManager.handleConnection = function () {
        if (Env_1.Env.isDebug) {
            console.log("Server connection establised with " + SocketManager.SERVER + ":" + SocketManager.PORT);
        }
    };
    SocketManager.connect = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._socket = io.connect(SocketManager.SERVER + ":" + SocketManager.PORT);
            _this._socket.once('connect', function (socket) {
                resolve(socket);
            });
            _this._socket.once('connect_error', function () {
                reject(new Error('connect_error'));
            });
            _this._socket.once('connect_timeout', function () {
                reject(new Error('connect_timeout'));
            });
        });
    };
    SocketManager.prototype.afterMount = function () {
        SocketManager.connect()
            .then(function () {
            SocketManager.handleConnection();
        })
            .catch(function () {
            SocketManager.connectionFailed();
        });
    };
    SocketManager.prototype.beforeDestroy = function () {
    };
    SocketManager.index = 'SocketManager';
    SocketManager.SERVER = (window.location.hostname.match(/.local/)) ? '127.0.0.1' : '206.189.238.176';
    SocketManager.PORT = '3000';
    SocketManager._socketErrorMessage = document.body.querySelector('.js-socket-error-message');
    return SocketManager;
}(Module_1.Module));
exports.SocketManager = SocketManager;
modules[SocketManager.index] = SocketManager;
if (Env_1.Env.isDebug) {
    console.log('%c[Module Manager] ' + ("%cmodule %c" + SocketManager.index + " %chas finished loading"), 'color:#4882fd', 'color:#eee', 'color:#48eefd', 'color:#eee');
}
Application_1.Application.mountModules();


/***/ })

}]);