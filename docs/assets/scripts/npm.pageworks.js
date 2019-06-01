(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{33:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var DeviceManager=function(){function DeviceManager(debug,setStatusClasses){var _this=this;this.userTouchedElement=function(e){e.currentTarget.classList.add("is-touching")},this.userReleasedTouchedElement=function(e){e.currentTarget.classList.remove("is-touching")},this.handleConnectionChange=function(e){_this._navigator=window.navigator,DeviceManager.connection=_this._navigator.connection||_this._navigator.mozConnection||_this._navigator.webkitConnection},this.handleMouseEvent=function(e){_this._body.removeEventListener("mouseover",_this.handleMouseEvent),_this._html.classList.add("is-pointer-device"),_this._html.classList.remove("is-not-pointer-device"),_this._isDebug&&console.log("%c[Device Manager] %cUser is using a pointer device","color:#35ffb8","color:#eee")},this.handleTouchEvent=function(e){_this._body.removeEventListener("touchstart",_this.handleTouchEvent),_this._html.classList.add("has-touched"),_this._isDebug&&console.log("%c[Device Manager] %cUser has touched their device","color:#35ffb8","color:#eee")},this._isDebug=debug||!1,this._html=document.documentElement,this._body=document.body,this._navigator=window.navigator,DeviceManager.connection=this._navigator.connection||this._navigator.mozConnection||this._navigator.webkitConnection,DeviceManager.connection.addEventListener("change",this.handleConnectionChange),setStatusClasses&&this.setStatusClasses(),this._trackedElements=[],this.getTouchElements()}var isChrome,isEdge,isIE,isFirefox,isSafari,isOpera,isBlink,isTouchSupported;return DeviceManager.prototype.reinit=function(){this.purgeTouchElements(),this.getTouchElements()},DeviceManager.prototype.getTouchElements=function(){var _this=this;DeviceManager.supportsTouch&&Array.from(document.body.querySelectorAll('.js-touch:not([data-touch-tracked="true"])')).forEach(function(el){el.setAttribute("data-touch-tracked","true"),el.addEventListener("touchstart",_this.userTouchedElement),el.addEventListener("touchend",_this.userReleasedTouchedElement),el.addEventListener("touchleave",_this.userReleasedTouchedElement),el.addEventListener("touchcancel",_this.userReleasedTouchedElement),_this._trackedElements.push(el)})},DeviceManager.prototype.purgeTouchElements=function(){if(DeviceManager.supportsTouch&&0!==this._trackedElements.length){for(var currentElements=Array.from(document.body.querySelectorAll(".js-touch")),deadElements=[],i=0;i<this._trackedElements.length;i++){for(var survived=!1,k=0;k<currentElements.length;k++)this._trackedElements[i]===currentElements[k]&&(survived=!0);survived||deadElements.push(this._trackedElements[i])}if(0!==deadElements.length)for(k=0;k<deadElements.length;k++)for(i=0;i<this._trackedElements.length;i++)if(this._trackedElements[i]===deadElements[i]){deadElements[i].removeEventListener("touchstart",this.userTouchedElement),deadElements[i].removeEventListener("touchend",this.userReleasedTouchedElement),deadElements[i].removeEventListener("touchleave",this.userReleasedTouchedElement),deadElements[i].removeEventListener("touchcancel",this.userReleasedTouchedElement);var index=this._trackedElements.indexOf(this._trackedElements[i]);this._trackedElements.splice(index,1)}}},DeviceManager.prototype.setStatusClasses=function(){this._html.classList.add("has-js"),this._html.classList.remove("has-no-js"),this._isDebug&&console.log("%c[Device Manager] %cSetting status classes","color:#35ffb8","color:#eee"),this._body.addEventListener("mouseover",this.handleMouseEvent),this._body.addEventListener("touchstart",this.handleTouchEvent),DeviceManager.supportsTouch&&(this._html.classList.add("is-touch-device"),this._html.classList.remove("is-not-touch-device"),this._isDebug&&console.log("%c[Device Manager] %cSupports Touch: %c"+DeviceManager.supportsTouch,"color:#35ffb8","color:#eee","color:#68e5ff")),DeviceManager.isBlinkEngine&&(this._html.classList.add("is-blink"),this._isDebug&&console.log("%c[Device Manager] %cUsing Blink Engine: %c"+DeviceManager.isBlinkEngine,"color:#35ffb8","color:#eee","color:#68e5ff")),DeviceManager.isChrome&&(this._html.classList.add("is-chrome"),this._isDebug&&console.log("%c[Device Manager] %cChrome: %c"+DeviceManager.isChrome,"color:#35ffb8","color:#eee","color:#68e5ff")),DeviceManager.isIE&&(this._html.classList.add("is-ie"),this._isDebug&&console.log("%c[Device Manager] %cInternet Explorer: %c"+DeviceManager.isIE,"color:#35ffb8","color:#eee","color:#68e5ff")),DeviceManager.isEdge&&(this._html.classList.add("is-edge"),this._isDebug&&console.log("%c[Device Manager] %cEdge: %c"+DeviceManager.isEdge,"color:#35ffb8","color:#eee","color:#68e5ff")),DeviceManager.isFirefox&&(this._html.classList.add("is-firefox"),this._isDebug&&console.log("%c[Device Manager] %cFirefox: %c"+DeviceManager.isFirefox,"color:#35ffb8","color:#eee","color:#68e5ff")),DeviceManager.isSafari&&(this._html.classList.add("is-safari"),this._isDebug&&console.log("%c[Device Manager] %cSafari: %c"+DeviceManager.isSafari,"color:#35ffb8","color:#eee","color:#68e5ff")),DeviceManager.isOpera&&(this._html.classList.add("is-opera"),this._isDebug&&console.log("%c[Device Manager] %cOpera: %c"+DeviceManager.isOpera,"color:#35ffb8","color:#eee","color:#68e5ff")),void 0!==DeviceManager.connection&&(this._html.classList.add("is-"+DeviceManager.connection.effectiveType),this._isDebug&&console.log("%c[Device Manager] %cConnection Type: %c"+DeviceManager.connection.effectiveType,"color:#35ffb8","color:#eee","color:#68e5ff"))},DeviceManager.connection=void 0,DeviceManager.isChrome=(isChrome=!1,window.chrome&&void 0===window.StyleMedia&&(isChrome=!0),isChrome),DeviceManager.isEdge=(isEdge=!1,window.StyleMedia&&window.chrome&&(isEdge=!0),isEdge),DeviceManager.isIE=(isIE=!1,window.MSInputMethodContext&&document.documentMode&&void 0===window.chrome&&(isIE=!0),isIE),DeviceManager.isFirefox=(isFirefox=!1,"undefined"!=typeof InstallTrigger&&(isFirefox=!0),isFirefox),DeviceManager.isSafari=(isSafari=!1,(/constructor/i.test(window.HTMLElement)||"[object SafariRemoteNotification]"===(!window.safari||"undefined"!=typeof safari&&safari.pushNotification).toString())&&(isSafari=!0),isSafari),DeviceManager.isOpera=(isOpera=!1,(window.opr&&opr.addons||window.opera||navigator.userAgent.indexOf(" OPR/")>=0)&&(isOpera=!0),isOpera),DeviceManager.isBlinkEngine=(isBlink=!1,(DeviceManager.isChrome||DeviceManager.isOpera)&&window.CSS&&(isBlink=!0),isBlink),DeviceManager.supportsTouch=(isTouchSupported=!1,("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)&&(isTouchSupported=!0),isTouchSupported),DeviceManager}();exports.default=DeviceManager}}]);