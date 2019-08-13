/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export ERR_CORDOVA_NOT_AVAILABLE */
/* unused harmony export ERR_PLUGIN_NOT_INSTALLED */
/* unused harmony export getPromise */
/* unused harmony export wrapPromise */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkAvailability; });
/* unused harmony export instanceAvailability */
/* unused harmony export setIndex */
/* unused harmony export callCordovaPlugin */
/* unused harmony export callInstance */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPlugin; });
/* unused harmony export get */
/* unused harmony export pluginWarn */
/* unused harmony export cordovaWarn */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return wrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return wrapInstance; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);

var ERR_CORDOVA_NOT_AVAILABLE = { error: 'cordova_not_available' };
var ERR_PLUGIN_NOT_INSTALLED = { error: 'plugin_not_installed' };
function getPromise(callback) {
    var tryNativePromise = function () {
        if (Promise) {
            return new Promise(function (resolve, reject) {
                callback(resolve, reject);
            });
        }
        else {
            console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
        }
    };
    if (typeof window !== 'undefined' && window.angular) {
        var doc = window.document;
        var injector = window.angular
            .element(doc.querySelector('[ng-app]') || doc.body)
            .injector();
        if (injector) {
            var $q = injector.get('$q');
            return $q(function (resolve, reject) {
                callback(resolve, reject);
            });
        }
        console.warn("Angular 1 was detected but $q couldn't be retrieved. This is usually when the app is not bootstrapped on the html or body tag. Falling back to native promises which won't trigger an automatic digest when promises resolve.");
    }
    return tryNativePromise();
}
function wrapPromise(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    var pluginResult, rej;
    var p = getPromise(function (resolve, reject) {
        if (opts.destruct) {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return resolve(args);
            }, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return reject(args);
            });
        }
        else {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject);
        }
        rej = reject;
    });
    // Angular throws an error on unhandled rejection, but in this case we have already printed
    // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
    // to error
    if (pluginResult && pluginResult.error) {
        p.catch(function () { });
        typeof rej === 'function' && rej(pluginResult.error);
    }
    return p;
}
function wrapOtherPromise(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    return getPromise(function (resolve, reject) {
        var pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts);
        if (pluginResult) {
            if (pluginResult.error) {
                reject(pluginResult.error);
            }
            else if (pluginResult.then) {
                pluginResult.then(resolve).catch(reject);
            }
        }
        else {
            reject({ error: 'unexpected_error' });
        }
    });
}
function wrapObservable(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__[/* Observable */ "a"](function (observer) {
        var pluginResult;
        if (opts.destruct) {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return observer.next(args);
            }, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return observer.error(args);
            });
        }
        else {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
        }
        if (pluginResult && pluginResult.error) {
            observer.error(pluginResult.error);
            observer.complete();
        }
        return function () {
            try {
                if (opts.clearFunction) {
                    if (opts.clearWithArgs) {
                        return callCordovaPlugin(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                    }
                    return callCordovaPlugin(pluginObj, opts.clearFunction, []);
                }
            }
            catch (e) {
                console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
                console.warn(e);
            }
        };
    });
}
/**
 * Wrap the event with an observable
 * @private
 * @param event event name
 * @param element The element to attach the event listener to
 * @returns {Observable}
 */
function wrapEventObservable(event, element) {
    element = (typeof window !== 'undefined' && element) ? get(window, element) : element || typeof window !== 'undefined' || {};
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__[/* fromEvent */ "a"])(element, event);
}
function checkAvailability(plugin, methodName, pluginName) {
    var pluginRef, pluginInstance, pluginPackage;
    if (typeof plugin === 'string') {
        pluginRef = plugin;
    }
    else {
        pluginRef = plugin.constructor.getPluginRef();
        pluginName = plugin.constructor.getPluginName();
        pluginPackage = plugin.constructor.getPluginInstallName();
    }
    pluginInstance = getPlugin(pluginRef);
    if (!pluginInstance || (!!methodName && typeof pluginInstance[methodName] === 'undefined')) {
        if (typeof window === 'undefined' || !window.cordova) {
            cordovaWarn(pluginName, methodName);
            return ERR_CORDOVA_NOT_AVAILABLE;
        }
        pluginWarn(pluginName, pluginPackage, methodName);
        return ERR_PLUGIN_NOT_INSTALLED;
    }
    return true;
}
/**
 * Checks if _objectInstance exists and has the method/property
 * @private
 */
function instanceAvailability(pluginObj, methodName) {
    return (pluginObj._objectInstance &&
        (!methodName || typeof pluginObj._objectInstance[methodName] !== 'undefined'));
}
function setIndex(args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    // ignore resolve and reject in case sync
    if (opts.sync) {
        return args;
    }
    // If the plugin method expects myMethod(success, err, options)
    if (opts.callbackOrder === 'reverse') {
        // Get those arguments in the order [resolve, reject, ...restOfArgs]
        args.unshift(reject);
        args.unshift(resolve);
    }
    else if (opts.callbackStyle === 'node') {
        args.push(function (err, result) {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    }
    else if (opts.callbackStyle === 'object' && opts.successName && opts.errorName) {
        var obj = {};
        obj[opts.successName] = resolve;
        obj[opts.errorName] = reject;
        args.push(obj);
    }
    else if (typeof opts.successIndex !== 'undefined' || typeof opts.errorIndex !== 'undefined') {
        var setSuccessIndex = function () {
            // If we've specified a success/error index
            if (opts.successIndex > args.length) {
                args[opts.successIndex] = resolve;
            }
            else {
                args.splice(opts.successIndex, 0, resolve);
            }
        };
        var setErrorIndex = function () {
            // We don't want that the reject cb gets spliced into the position of an optional argument that has not been
            // defined and thus causing non expected behavior.
            if (opts.errorIndex > args.length) {
                args[opts.errorIndex] = reject; // insert the reject fn at the correct specific index
            }
            else {
                args.splice(opts.errorIndex, 0, reject); // otherwise just splice it into the array
            }
        };
        if (opts.successIndex > opts.errorIndex) {
            setErrorIndex();
            setSuccessIndex();
        }
        else {
            setSuccessIndex();
            setErrorIndex();
        }
    }
    else {
        // Otherwise, let's tack them on to the end of the argument list
        // which is 90% of cases
        args.push(resolve);
        args.push(reject);
    }
    return args;
}
function callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    // Try to figure out where the success/error callbacks need to be bound
    // to our promise resolve/reject handlers.
    args = setIndex(args, opts, resolve, reject);
    var availabilityCheck = checkAvailability(pluginObj, methodName);
    if (availabilityCheck === true) {
        var pluginInstance = getPlugin(pluginObj.constructor.getPluginRef());
        return pluginInstance[methodName].apply(pluginInstance, args);
    }
    else {
        return availabilityCheck;
    }
}
function callInstance(pluginObj, methodName, args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    args = setIndex(args, opts, resolve, reject);
    if (instanceAvailability(pluginObj, methodName)) {
        return pluginObj._objectInstance[methodName].apply(pluginObj._objectInstance, args);
    }
}
function getPlugin(pluginRef) {
    if (typeof window !== 'undefined') {
        return get(window, pluginRef);
    }
    return null;
}
function get(element, path) {
    var paths = path.split('.');
    var obj = element;
    for (var i = 0; i < paths.length; i++) {
        if (!obj) {
            return null;
        }
        obj = obj[paths[i]];
    }
    return obj;
}
function pluginWarn(pluginName, plugin, method) {
    if (method) {
        console.warn('Native: tried calling ' +
            pluginName +
            '.' +
            method +
            ', but the ' +
            pluginName +
            ' plugin is not installed.');
    }
    else {
        console.warn("Native: tried accessing the " + pluginName + " plugin but it's not installed.");
    }
    if (plugin) {
        console.warn("Install the " + pluginName + " plugin: 'ionic cordova plugin add " + plugin + "'");
    }
}
/**
 * @private
 * @param pluginName
 * @param method
 */
function cordovaWarn(pluginName, method) {
    if (typeof process === 'undefined') {
        if (method) {
            console.warn('Native: tried calling ' +
                pluginName +
                '.' +
                method +
                ', but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
        }
        else {
            console.warn('Native: tried accessing the ' +
                pluginName +
                ' plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
        }
    }
}
/**
 * @private
 */
var wrap = function (pluginObj, methodName, opts) {
    if (opts === void 0) { opts = {}; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (opts.sync) {
            // Sync doesn't wrap the plugin with a promise or observable, it returns the result as-is
            return callCordovaPlugin(pluginObj, methodName, args, opts);
        }
        else if (opts.observable) {
            return wrapObservable(pluginObj, methodName, args, opts);
        }
        else if (opts.eventObservable && opts.event) {
            return wrapEventObservable(opts.event, opts.element);
        }
        else if (opts.otherPromise) {
            return wrapOtherPromise(pluginObj, methodName, args, opts);
        }
        else {
            return wrapPromise(pluginObj, methodName, args, opts);
        }
    };
};
/**
 * @private
 */
function wrapInstance(pluginObj, methodName, opts) {
    if (opts === void 0) { opts = {}; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (opts.sync) {
            return callInstance(pluginObj, methodName, args, opts);
        }
        else if (opts.observable) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_0__[/* Observable */ "a"](function (observer) {
                var pluginResult;
                if (opts.destruct) {
                    pluginResult = callInstance(pluginObj, methodName, args, opts, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return observer.next(args);
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return observer.error(args);
                    });
                }
                else {
                    pluginResult = callInstance(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                }
                if (pluginResult && pluginResult.error) {
                    observer.error(pluginResult.error);
                }
                return function () {
                    try {
                        if (opts.clearWithArgs) {
                            return callInstance(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                        }
                        return callInstance(pluginObj, opts.clearFunction, []);
                    }
                    catch (e) {
                        console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
                        console.warn(e);
                    }
                };
            });
        }
        else if (opts.otherPromise) {
            return getPromise(function (resolve, reject) {
                var result;
                if (opts.destruct) {
                    result = callInstance(pluginObj, methodName, args, opts, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return resolve(args);
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return reject(args);
                    });
                }
                else {
                    result = callInstance(pluginObj, methodName, args, opts, resolve, reject);
                }
                if (result && result.then) {
                    result.then(resolve, reject);
                }
                else {
                    reject();
                }
            });
        }
        else {
            var pluginResult_1, rej_1;
            var p = getPromise(function (resolve, reject) {
                if (opts.destruct) {
                    pluginResult_1 = callInstance(pluginObj, methodName, args, opts, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return resolve(args);
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return reject(args);
                    });
                }
                else {
                    pluginResult_1 = callInstance(pluginObj, methodName, args, opts, resolve, reject);
                }
                rej_1 = reject;
            });
            // Angular throws an error on unhandled rejection, but in this case we have already printed
            // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
            // to error
            if (pluginResult_1 && pluginResult_1.error) {
                p.catch(function () { });
                typeof rej_1 === 'function' && rej_1(pluginResult_1.error);
            }
            return p;
        }
    };
}
//# sourceMappingURL=common.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)))

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _ionic_native_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicNativePlugin", function() { return _ionic_native_plugin__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _decorators_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cordova", function() { return _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony import */ var _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16);
/* harmony import */ var _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17);
/* harmony import */ var _decorators_interfaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18);
/* harmony import */ var _decorators_interfaces__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_decorators_interfaces__WEBPACK_IMPORTED_MODULE_8__);


// Decorators







Object(_bootstrap__WEBPACK_IMPORTED_MODULE_0__["checkReady"])();
//# sourceMappingURL=index.js.map

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var _enable_super_gross_mode_that_will_cause_bad_things = false;
var config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = /*@__PURE__*/ new Error();
            /*@__PURE__*/ console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            /*@__PURE__*/ console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/util/isFunction.js
var isFunction = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/Observer.js
var Observer = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/util/isArray.js
var isArray = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/isObject.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isObject(x) {
    return x !== null && typeof x === 'object';
}
//# sourceMappingURL=isObject.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function UnsubscriptionErrorImpl(errors) {
    Error.call(this);
    this.message = errors ?
        errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
    this.name = 'UnsubscriptionError';
    this.errors = errors;
    return this;
}
UnsubscriptionErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
var UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/Subscription.js
/** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_UnsubscriptionError PURE_IMPORTS_END */




var Subscription_Subscription = /*@__PURE__*/ (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
                var parent_1 = _parentOrParents[index];
                parent_1.remove(this);
            }
        }
        if (Object(isFunction["a" /* isFunction */])(_unsubscribe)) {
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (Object(isArray["a" /* isArray */])(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());

function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js
var rxSubscriber = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/config.js
var config = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/util/hostReportError.js
var hostReportError = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/Subscriber.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subscriber_Subscriber; });
/* unused harmony export SafeSubscriber */
/** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */







var Subscriber_Subscriber = /*@__PURE__*/ (function (_super) {
    tslib_es6["__extends"](Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = Observer["a" /* empty */];
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = Observer["a" /* empty */];
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new Subscriber_SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new Subscriber_SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber["a" /* rxSubscriber */]] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    };
    return Subscriber;
}(Subscription_Subscription));

var Subscriber_SafeSubscriber = /*@__PURE__*/ (function (_super) {
    tslib_es6["__extends"](SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (Object(isFunction["a" /* isFunction */])(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer["a" /* empty */]) {
                context = Object.create(observerOrNext);
                if (Object(isFunction["a" /* isFunction */])(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config["a" /* config */].useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config["a" /* config */].useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                Object(hostReportError["a" /* hostReportError */])(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    Object(hostReportError["a" /* hostReportError */])(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config["a" /* config */].useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config["a" /* config */].useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                Object(hostReportError["a" /* hostReportError */])(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config["a" /* config */].useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config["a" /* config */].useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                Object(hostReportError["a" /* hostReportError */])(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber_Subscriber));

//# sourceMappingURL=Subscriber.js.map


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isFunction; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isFunction(x) {
    return typeof x === 'function';
}
//# sourceMappingURL=isFunction.js.map


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hostReportError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function hostReportError(err) {
    setTimeout(function () { throw err; }, 0);
}
//# sourceMappingURL=hostReportError.js.map


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return empty; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _util_hostReportError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */


var empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (_config__WEBPACK_IMPORTED_MODULE_0__[/* config */ "a"].useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_1__[/* hostReportError */ "a"])(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rxSubscriber; });
/* unused harmony export $$rxSubscriber */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var rxSubscriber = typeof Symbol === 'function'
    ? /*@__PURE__*/ Symbol('rxSubscriber')
    : '@@rxSubscriber_' + /*@__PURE__*/ Math.random();
var $$rxSubscriber = rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/Subscriber.js + 3 modules
var Subscriber = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/canReportError.js
/** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */

function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof Subscriber["a" /* Subscriber */]) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
//# sourceMappingURL=canReportError.js.map

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js
var rxSubscriber = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/Observer.js
var Observer = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/toSubscriber.js
/** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */



function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber["a" /* Subscriber */]) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber["a" /* rxSubscriber */]]) {
            return nextOrObserver[rxSubscriber["a" /* rxSubscriber */]]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber["a" /* Subscriber */](Observer["a" /* empty */]);
    }
    return new Subscriber["a" /* Subscriber */](nextOrObserver, error, complete);
}
//# sourceMappingURL=toSubscriber.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/symbol/observable.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var observable = typeof Symbol === 'function' && Symbol.observable || '@@observable';
//# sourceMappingURL=observable.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/noop.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function noop() { }
//# sourceMappingURL=noop.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/pipe.js
/** PURE_IMPORTS_START _noop PURE_IMPORTS_END */

function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (!fns) {
        return noop;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
//# sourceMappingURL=pipe.js.map

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/config.js
var config = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/Observable.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Observable_Observable; });
/** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */





var Observable_Observable = /*@__PURE__*/ (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (config["a" /* config */].useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config["a" /* config */].useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config["a" /* config */].useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (canReportError(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());

function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = config["a" /* config */].Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isArray; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
//# sourceMappingURL=isArray.js.map


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkReady", function() { return checkReady; });
function checkReady() {
    if (typeof process === 'undefined') {
        var win_1 = typeof window !== 'undefined' ? window : {};
        var DEVICE_READY_TIMEOUT_1 = 5000;
        // To help developers using cordova, we listen for the device ready event and
        // log an error if it didn't fire in a reasonable amount of time. Generally,
        // when this happens, developers should remove and reinstall plugins, since
        // an inconsistent plugin is often the culprit.
        var before_1 = Date.now();
        var didFireReady_1 = false;
        win_1.document.addEventListener('deviceready', function () {
            console.log("Ionic Native: deviceready event fired after " + (Date.now() - before_1) + " ms");
            didFireReady_1 = true;
        });
        setTimeout(function () {
            if (!didFireReady_1 && win_1.cordova) {
                console.warn("Ionic Native: deviceready did not fire within " + DEVICE_READY_TIMEOUT_1 + "ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.");
            }
        }, DEVICE_READY_TIMEOUT_1);
    }
}
//# sourceMappingURL=bootstrap.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cordova; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

function cordova(pluginObj, methodName, config, args) {
    return Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* wrap */ "c"])(pluginObj, methodName, config).apply(this, args);
}
//# sourceMappingURL=cordova.js.map

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export cordovaFunctionOverride */
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


function overrideFunction(pluginObj, methodName) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__[/* Observable */ "a"](function (observer) {
        var availabilityCheck = Object(_common__WEBPACK_IMPORTED_MODULE_1__[/* checkAvailability */ "a"])(pluginObj, methodName);
        if (availabilityCheck === true) {
            var pluginInstance_1 = Object(_common__WEBPACK_IMPORTED_MODULE_1__[/* getPlugin */ "b"])(pluginObj.constructor.getPluginRef());
            pluginInstance_1[methodName] = observer.next.bind(observer);
            return function () { return (pluginInstance_1[methodName] = function () { }); };
        }
        else {
            observer.error(availabilityCheck);
            observer.complete();
        }
    });
}
function cordovaFunctionOverride(pluginObj, methodName, args) {
    if (args === void 0) { args = []; }
    return overrideFunction(pluginObj, methodName);
}
//# sourceMappingURL=cordova-function-override.js.map

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export cordovaInstance */
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

function cordovaInstance(pluginObj, methodName, config, args) {
    args = Array.from(args);
    return Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* wrapInstance */ "d"])(pluginObj, methodName, config).apply(this, args);
}
//# sourceMappingURL=cordova-instance.js.map

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export cordovaPropertyGet */
/* unused harmony export cordovaPropertySet */
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

function cordovaPropertyGet(pluginObj, key) {
    if (Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* checkAvailability */ "a"])(pluginObj, key) === true) {
        return Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* getPlugin */ "b"])(pluginObj.constructor.getPluginRef())[key];
    }
    return null;
}
function cordovaPropertySet(pluginObj, key, value) {
    if (Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* checkAvailability */ "a"])(pluginObj, key) === true) {
        Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* getPlugin */ "b"])(pluginObj.constructor.getPluginRef())[key] = value;
    }
}
//# sourceMappingURL=cordova-property.js.map

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export instancePropertyGet */
/* unused harmony export instancePropertySet */
function instancePropertyGet(pluginObj, key) {
    if (pluginObj._objectInstance && pluginObj._objectInstance[key]) {
        return pluginObj._objectInstance[key];
    }
    return null;
}
function instancePropertySet(pluginObj, key, value) {
    if (pluginObj._objectInstance) {
        pluginObj._objectInstance[key] = value;
    }
}
//# sourceMappingURL=instance-property.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports) {

//# sourceMappingURL=interfaces.js.map

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./dist/@youme-ionic/core/decorators/common.js
var common = __webpack_require__(0);

// CONCATENATED MODULE: ./dist/@youme-ionic/core/util.js
/**
 * @private
 */
function get(element, path) {
    var paths = path.split('.');
    var obj = element;
    for (var i = 0; i < paths.length; i++) {
        if (!obj) {
            return null;
        }
        obj = obj[paths[i]];
    }
    return obj;
}
/**
 * @private
 */
function getPromise(callback) {
    if (callback === void 0) { callback = function () { }; }
    var tryNativePromise = function () {
        if (typeof Promise === 'function' || (typeof window !== 'undefined' && window.Promise)) {
            return new Promise(function (resolve, reject) {
                callback(resolve, reject);
            });
        }
        else {
            console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
        }
    };
    return tryNativePromise();
}
//# sourceMappingURL=util.js.map
// CONCATENATED MODULE: ./dist/@youme-ionic/core/ionic-native-plugin.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ionic_native_plugin_IonicNativePlugin; });


var ionic_native_plugin_IonicNativePlugin = /** @class */ (function () {
    function IonicNativePlugin() {
    }
    /**
     * Returns a boolean that indicates whether the plugin is installed
     * @return {boolean}
     */
    IonicNativePlugin.installed = function () {
        return Object(common["a" /* checkAvailability */])(this.pluginRef) === true;
    };
    /**
     * Returns the original plugin object
     */
    IonicNativePlugin.getPlugin = function () {
        if (typeof window !== 'undefined') {
            return get(window, this.pluginRef);
        }
        return null;
    };
    /**
     * Returns the plugin's name
     */
    IonicNativePlugin.getPluginName = function () {
        return this.pluginName;
    };
    /**
     * Returns the plugin's reference
     */
    IonicNativePlugin.getPluginRef = function () {
        return this.pluginRef;
    };
    /**
     * Returns the plugin's install name
     */
    IonicNativePlugin.getPluginInstallName = function () {
        return this.plugin;
    };
    /**
     * Returns the plugin's supported platforms
     */
    IonicNativePlugin.getSupportedPlatforms = function () {
        return this.platforms || [];
    };
    return IonicNativePlugin;
}());

//# sourceMappingURL=ionic-native-plugin.js.map

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__extends) {/* unused harmony export ChatType */
/* unused harmony export FileType */
/* unused harmony export ServerZone */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoumeIM; });
/* harmony import */ var _youme_ionic_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


/**
 * chat type
 *
 * @export
 * @enum {number}
 */
var ChatType;
(function (ChatType) {
    ChatType[ChatType["Unknow"] = 0] = "Unknow";
    ChatType[ChatType["PrivateChat"] = 1] = "PrivateChat";
    ChatType[ChatType["RoomChat"] = 2] = "RoomChat";
})(ChatType || (ChatType = {}));
;
/**
 * file type
 *
 * @export
 * @enum {number}
 */
var FileType;
(function (FileType) {
    FileType[FileType["Other"] = 0] = "Other";
    FileType[FileType["Audio"] = 1] = "Audio";
    FileType[FileType["Image"] = 2] = "Image";
    FileType[FileType["Video"] = 3] = "Video";
})(FileType || (FileType = {}));
/**
 * server's location
 *
 * @export
 * @enum {number}
 */
var ServerZone;
(function (ServerZone) {
    ServerZone[ServerZone["China"] = 0] = "China";
    ServerZone[ServerZone["Singapore"] = 1] = "Singapore";
    ServerZone[ServerZone["America"] = 2] = "America";
    ServerZone[ServerZone["HongKong"] = 3] = "HongKong";
    ServerZone[ServerZone["Korea"] = 4] = "Korea";
    ServerZone[ServerZone["Australia"] = 5] = "Australia";
    ServerZone[ServerZone["Deutschland"] = 6] = "Deutschland";
    ServerZone[ServerZone["Brazil"] = 7] = "Brazil";
    ServerZone[ServerZone["India"] = 8] = "India";
    ServerZone[ServerZone["Japan"] = 9] = "Japan";
    ServerZone[ServerZone["Ireland"] = 10] = "Ireland";
})(ServerZone || (ServerZone = {}));
;
var YoumeIMOriginal = /** @class */ (function (_super) {
    __extends(YoumeIMOriginal, _super);
    function YoumeIMOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YoumeIMOriginal.prototype.init = function (appKey, secretKey, regionId) { return Object(_youme_ionic_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "init", {}, arguments); };
    YoumeIMOriginal.prototype.login = function (userid, password, token) { return Object(_youme_ionic_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "login", {}, arguments); };
    YoumeIMOriginal.prototype.logout = function () { return Object(_youme_ionic_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "logout", {}, arguments); };
    YoumeIMOriginal.prototype.sendTextMessage = function (strRecvId, iChatType, strMsgContent, strAttachParam) { return Object(_youme_ionic_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "sendTextMessage", {}, arguments); };
    YoumeIMOriginal.prototype.registerReconnectCallback = function (success, error) { return Object(_youme_ionic_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "registerReconnectCallback", { "sync": true }, arguments); };
    YoumeIMOriginal.prototype.registerKickOffCallback = function (success, error) { return Object(_youme_ionic_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "registerKickOffCallback", { "sync": true }, arguments); };
    YoumeIMOriginal.prototype.startRecordAudioMessage = function (recvID, chatType, extraText, needRecognize) { return Object(_youme_ionic_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "startRecordAudioMessage", {}, arguments); };
    YoumeIMOriginal.prototype.cancelAudioMessage = function () { return Object(_youme_ionic_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "cancelAudioMessage", {}, arguments); };
    YoumeIMOriginal.prototype.stopAndSendAudioMessage = function () { return Object(_youme_ionic_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "stopAndSendAudioMessage", {}, arguments); };
    YoumeIMOriginal.prototype.joinChatRoom = function (roomID) { return Object(_youme_ionic_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "joinChatRoom", {}, arguments); };
    YoumeIMOriginal.prototype.leaveChatRoom = function (roomID) { return Object(_youme_ionic_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "leaveChatRoom", {}, arguments); };
    YoumeIMOriginal.prototype.startPlayAudio = function (audioPath) { return Object(_youme_ionic_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "startPlayAudio", {}, arguments); };
    YoumeIMOriginal.prototype.stopPlayAudio = function () { return Object(_youme_ionic_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "stopPlayAudio", {}, arguments); };
    YoumeIMOriginal.prototype.sendFileMessage = function (strRecvId, iChatType, filePath, strAttachParam, fileType) { return Object(_youme_ionic_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "sendFileMessage", {}, arguments); };
    YoumeIMOriginal.prototype.switchTransType = function (transType) { return Object(_youme_ionic_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "switchTransType", {}, arguments); };
    YoumeIMOriginal.pluginName = "YoumeIM";
    YoumeIMOriginal.plugin = "cordova-plugin-youme-im";
    YoumeIMOriginal.pluginRef = "cordova.plugins.YoumeIMCordovaPlugin";
    YoumeIMOriginal.repo = "https://github.com/youmesdk/YoumeIMCordovaPlugin";
    YoumeIMOriginal.install = "cordova plugin add cordova-plugin-youme-im";
    YoumeIMOriginal.installVariables = [];
    YoumeIMOriginal.platforms = ["Android"];
    return YoumeIMOriginal;
}(_youme_ionic_core__WEBPACK_IMPORTED_MODULE_0__["IonicNativePlugin"]));
var YoumeIM = new YoumeIMOriginal();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQHlvdW1lLWlvbmljL3BsdWdpbnMveW91bWUtaW0vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sbUJBQW1CLENBQUM7QUFFdkU7Ozs7O0dBS0c7QUFDSCxNQUFNLENBQU4sSUFBWSxRQUlYO0FBSkQsV0FBWSxRQUFRO0lBQ2xCLDJDQUFVLENBQUE7SUFDVixxREFBZSxDQUFBO0lBQ2YsK0NBQVksQ0FBQTtBQUNkLENBQUMsRUFKVyxRQUFRLEtBQVIsUUFBUSxRQUluQjtBQUFBLENBQUM7QUFFRjs7Ozs7R0FLRztBQUNILE1BQU0sQ0FBTixJQUFZLFFBS1g7QUFMRCxXQUFZLFFBQVE7SUFDbEIseUNBQVMsQ0FBQTtJQUNULHlDQUFTLENBQUE7SUFDVCx5Q0FBUyxDQUFBO0lBQ1QseUNBQVMsQ0FBQTtBQUNYLENBQUMsRUFMVyxRQUFRLEtBQVIsUUFBUSxRQUtuQjtBQUVEOzs7OztHQUtHO0FBQ0gsTUFBTSxDQUFOLElBQVksVUFZWDtBQVpELFdBQVksVUFBVTtJQUNwQiw2Q0FBUyxDQUFBO0lBQ1QscURBQWEsQ0FBQTtJQUNiLGlEQUFXLENBQUE7SUFDWCxtREFBWSxDQUFBO0lBQ1osNkNBQVMsQ0FBQTtJQUNULHFEQUFhLENBQUE7SUFDYix5REFBZSxDQUFBO0lBQ2YsK0NBQVUsQ0FBQTtJQUNWLDZDQUFTLENBQUE7SUFDVCw2Q0FBUyxDQUFBO0lBQ1Qsa0RBQVksQ0FBQTtBQUNkLENBQUMsRUFaVyxVQUFVLEtBQVYsVUFBVSxRQVlyQjtBQUFBLENBQUM7O0lBaUMyQiwyQkFBaUI7Ozs7SUFVNUMsc0JBQUksYUFBQyxNQUFjLEVBQUUsU0FBaUIsRUFBRSxRQUFvQjtJQWM1RCx1QkFBSyxhQUFDLE1BQWMsRUFBRSxRQUFnQixFQUFFLEtBQWE7SUFPckQsd0JBQU07SUFXTixpQ0FBZSxhQUFDLFNBQWlCLEVBQUUsU0FBbUIsRUFBRSxhQUFxQixFQUFFLGNBQXNCO0lBU3JHLDJDQUF5QixhQUFDLE9BQWlCLEVBQUUsS0FBZTtJQVM1RCx5Q0FBdUIsYUFBQyxPQUFpQixFQUFFLEtBQWU7SUFXMUQseUNBQXVCLGFBQUMsTUFBYyxFQUFFLFFBQWtCLEVBQUUsU0FBaUIsRUFBRSxhQUFzQjtJQU9yRyxvQ0FBa0I7SUFPbEIseUNBQXVCO0lBUXZCLDhCQUFZLGFBQUMsTUFBYztJQVEzQiwrQkFBYSxhQUFDLE1BQWM7SUFRNUIsZ0NBQWMsYUFBQyxTQUFpQjtJQU9oQywrQkFBYTtJQWFiLGlDQUFlLGFBQUMsU0FBaUIsRUFBRSxTQUFtQixFQUFJLFFBQWdCLEVBQUUsY0FBc0IsRUFBRSxRQUFrQjtJQVV0SCxpQ0FBZSxhQUFDLFNBQTBCOzs7Ozs7OztrQkExTjVDO0VBK0U2QixpQkFBaUI7U0FBakMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAeW91bWUtaW9uaWMvY29yZSc7XG5cbi8qKlxuICogY2hhdCB0eXBlXG4gKlxuICogQGV4cG9ydFxuICogQGVudW0ge251bWJlcn1cbiAqL1xuZXhwb3J0IGVudW0gQ2hhdFR5cGUge1xuICBVbmtub3cgPSAwLFxuICBQcml2YXRlQ2hhdCA9IDEsXG4gIFJvb21DaGF0ID0gMixcbn07XG5cbi8qKlxuICogZmlsZSB0eXBlXG4gKlxuICogQGV4cG9ydFxuICogQGVudW0ge251bWJlcn1cbiAqL1xuZXhwb3J0IGVudW0gRmlsZVR5cGUge1xuICBPdGhlciA9IDAsXG4gIEF1ZGlvID0gMSxcbiAgSW1hZ2UgPSAyLFxuICBWaWRlbyA9IDMsXG59XG5cbi8qKlxuICogc2VydmVyJ3MgbG9jYXRpb25cbiAqXG4gKiBAZXhwb3J0XG4gKiBAZW51bSB7bnVtYmVyfVxuICovXG5leHBvcnQgZW51bSBTZXJ2ZXJab25lIHtcbiAgQ2hpbmEgPSAwOyAgICAgICAvLyBDaGluYSAtIGRlZmF1bHRcbiAgU2luZ2Fwb3JlID0gMTsgICAvLyBTaW5nYXBvcmVcbiAgQW1lcmljYSA9IDI7ICAgICAvLyBBbWVyaWNhXG4gIEhvbmdLb25nID0gMzsgICAgLy8gSG9uZ0tvbmdcbiAgS29yZWEgPSA0OyAgICAgICAvLyBLb3JlYVxuICBBdXN0cmFsaWEgPSA1OyAgIC8vIEF1c3RyYWxpYVxuICBEZXV0c2NobGFuZCA9IDY7IC8vIERldXRzY2hsYW5kXG4gIEJyYXppbCA9IDc7ICAgICAgLy8gQnJhemlsXG4gIEluZGlhID0gODsgICAgICAgLy8gSW5kaWFcbiAgSmFwYW4gPSA5OyAgICAgICAvLyBKYXBhblxuICBJcmVsYW5kID0gMTA7ICAgIC8vIElyZWxhbmRcbn07XG5cbi8qKlxuICogQG5hbWUgWW91bWVJTVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBmYWNpbGl0YXRlcyB0aGUgdXNhZ2Ugb2YgWW91bWUgSU0gaW4gYW4gSW9uaWMgYXBwcyB3aXRoIHRoZSBpbnRlZ3JhdGVkIFlvdW1lSU1TREtcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFlvdW1lSU0gfSBmcm9tICdAeW91bWUtaW9uaWMveW91bWUtaW0nO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHlvdW1lSU06IFlvdW1lSU0pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLnlvdW1lSU0uaW5pdCgneHh4eHgnLCAneHh4eHgnLCAwKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1lvdW1lSU0nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi15b3VtZS1pbScsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5Zb3VtZUlNQ29yZG92YVBsdWdpbicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20veW91bWVzZGsvWW91bWVJTUNvcmRvdmFQbHVnaW4nLFxuICBpbnN0YWxsOiAnY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLXlvdW1lLWltJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogW10sXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgWW91bWVJTSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogaW5pdCBzZGtcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFwcEtleSAtIGlhcHAgZGVudGlmaWVyLCBvYnRhaW5lZCBhZnRlciByZWdpc3RlcmluZyBhdCB3d3cueW91bWUuaW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlY3JldEtleSAtIGFwcCBzZWN1cml0eSBrZXksIG9idGFpbmVkIGFmdGVyIHJlZ2lzdGVyaW5nIGF0IHd3dy55b3VtZS5pbVxuICAgKiBAcGFyYW0ge1NlcnZlclpvbmV9IHJlZ2lvbklkIC0gc2VydmVyIHpvbmVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpbml0KGFwcEtleTogc3RyaW5nLCBzZWNyZXRLZXk6IHN0cmluZywgcmVnaW9uSWQ6IFNlcnZlclpvbmUpOiBQcm9taXNlPGFueT4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogbG9naW5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJpZCAtIFVzZXIgSUQsIGFzc2lnbmVkIGJ5IHRoZSBjYWxsZXIsIGNhbm5vdCBiZSBhbiBlbXB0eSBzdHJpbmcuIFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgSXQgY2FuIG9ubHkgYmUgY29tcG9zZWQgb2YgbGV0dGVycyBvciBudW1iZXJzIG9yIHVuZGVyc2NvcmVzLiBcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBsZW5ndGggaXMgbGltaXRlZCB0byAyNTUgYnl0ZXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXNzd29yZCAtIExvZ2luIHBhc3N3b3JkLCBjYW4gbm90IGJlIGFuIGVtcHR5IHN0cmluZywgXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbiBiZSBzZXQgdG8gYSBmaXhlZCBzdHJpbmcgd2l0aG91dCBzcGVjaWFsIHJlcXVpcmVtZW50c1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdG9rZW4gLSBVc2VyIHRva2VuLCB1c2VkIHdoZW4gdXNpbmcgc2VydmVyIHRva2VuIGF1dGhlbnRpY2F0aW9uIG1vZGUuIFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICBJZiBub3QgdXNlZCwgdG9rZW4gaXMgcGFzc2VkIGluOiBcIlwiLCB0aGUgdG9rZW4gdmFsdWUgaXMgb2J0YWluZWQgYnkgcmVzdEFQSS5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2dpbih1c2VyaWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgdG9rZW46IHN0cmluZyk6IFByb21pc2U8YW55PiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBsb2dvdXRcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2dvdXQoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIHNlbmQgdGV4dCBtZXNzYWdlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJSZWN2SWQgLSByZWNpdmVyIGlkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpQ2hhdFR5cGUgLSBjaGF0IHR5cGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0ck1zZ0NvbnRlbnQgLSBtZXNzYWdlIGNvbnRlbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0ckF0dGFjaFBhcmFtIC0gYXR0YWNoIG1lc3NhZ2VcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZW5kVGV4dE1lc3NhZ2Uoc3RyUmVjdklkOiBzdHJpbmcsIGlDaGF0VHlwZTogQ2hhdFR5cGUsIHN0ck1zZ0NvbnRlbnQ6IHN0cmluZywgc3RyQXR0YWNoUGFyYW06IHN0cmluZyk6IFByb21pc2U8YW55PiB7IHJldHVybjsgfVxuICBcbiAgLyoqXG4gICAqIHJlZ2lzdCBjYWxsYmFjayBmdW5jdGlvbiBmb3IgcmVjb25uZWN0IGV2ZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHN1Y2Nlc3MgLSBjYWxsYmFjayBmdW5jdGlvbiBmb3Igc3VjY2Vzc1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcnJvciAtIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciBlcnJvclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgcmVnaXN0ZXJSZWNvbm5lY3RDYWxsYmFjayhzdWNjZXNzOiBGdW5jdGlvbiwgZXJyb3I6IEZ1bmN0aW9uKTogdm9pZCB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiByZWdpc3QgY2FsbGJhY2sgZnVuY3Rpb24gZm9yIGtpY2sgb3V0IGV2ZW50XG4gICAqIEBwYXJhbSB7RnVudGlvbn0gc3VjY2VzcyAtIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciBzdWNjZXNzXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGVycm9yIC0gY2FsbGJhY2sgZnVuY3Rpb24gZm9yIGVycm9yXG4gICAqIEByZXR1cm5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICByZWdpc3RlcktpY2tPZmZDYWxsYmFjayhzdWNjZXNzOiBGdW5jdGlvbiwgZXJyb3I6IEZ1bmN0aW9uKTogdm9pZCB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBzdGFydCByZWNvcmQgYXVkaW8gbWVzc2FnZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVjdklEIC0gcmVjaXZlcidzIGlkOyBwcml2YXRlIGNoYXQ6IHVzZXJpZO+8jHJvb20gY2hhdDogcm9vbWlkXG4gICAqIEBwYXJhbSB7Q2hhdFR5cGV9IGNoYXRUeXBlIC0gY2hhdFR5cGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4dHJhVGV4dCAtIGV4dHJhIHRleHQgbWVzc2FnZSBmb3Igdm9pY2UgbWVzc2FnZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG5lZWRSZWNvZ25pemUgLSBXaGV0aGVyIHRvIGVuYWJsZSBvbmx5IHJlY29nbml6ZSB2b2ljZSB0ZXh0LCBub3Qgc2VuZCB2b2ljZSBtZXNzYWdlc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdGFydFJlY29yZEF1ZGlvTWVzc2FnZShyZWN2SUQ6IHN0cmluZywgY2hhdFR5cGU6IENoYXRUeXBlLCBleHRyYVRleHQ6IHN0cmluZywgbmVlZFJlY29nbml6ZTogYm9vbGVhbik6IFByb21pc2U8YW55PiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBjYW5jZWwgcmVjb3JkIGF1ZGlvIG1lc3NhZ2UsIG5vdCBzZW5kXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNhbmNlbEF1ZGlvTWVzc2FnZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogc3RvcCByZWNvcmQgYXVkaW8gbWVzc2FnZSwgYW5kIHNlbmQgaXRcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RvcEFuZFNlbmRBdWRpb01lc3NhZ2UoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIGpvaW4gc2luZ2xlIGNoYXJ0IHJvb20gYnkgcm9vbSBpZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcm9vbUlEIC0gcm9vbSBpZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBqb2luQ2hhdFJvb20ocm9vbUlEOiBzdHJpbmcpOiBQcm9taXNlPGFueT4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogbGVhdmUgY2hhdCByb29tIGJ5IGlkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByb29tSUQgLSByb29tIGlkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxlYXZlQ2hhdFJvb20ocm9vbUlEOiBzdHJpbmcpOiBQcm9taXNlPGFueT4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogc3RhcnQgcGxheSBhdWRpb1xuICAgKiBAcGFyYW0ge3N0cmluZ30gYXVkaW9QYXRoIC0gYXVkaW8gZmlsZSBwYXRoXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0YXJ0UGxheUF1ZGlvKGF1ZGlvUGF0aDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIHN0b3AgcGxheSBhdWRpb1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0b3BQbGF5QXVkaW8oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIHNlbmQgZmlsZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyUmVjdklkIC0gcmVjaXZlcidzIGlkLCBwcml2YXRlIGNoYXQ6IHVzZXJpZO+8jHJvb20gY2hhdDogcm9vbWlkXG4gICAqIEBwYXJhbSB7Q2hhdFR5cGV9IGlDaGF0VHlwZSAtIENoYXRUeXBlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlUGF0aCAtIGZpbGUgcGF0aFxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyQXR0YWNoUGFyYW0gLSBhdHRhY2ggc3RyaW5nIG1lc3NhZ2VcbiAgICogQHBhcmFtIHtGaWxlVHlwZX0gZmlsZVR5cGUgLSBGaWxlVHlwZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZW5kRmlsZU1lc3NhZ2Uoc3RyUmVjdklkOiBzdHJpbmcsIGlDaGF0VHlwZTogQ2hhdFR5cGU6ICwgZmlsZVBhdGg6IHN0cmluZywgc3RyQXR0YWNoUGFyYW06IHN0cmluZywgZmlsZVR5cGU6IEZpbGVUeXBlKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIHN3aXRjaCB0cmFuc2ZlciBmaWxlIHR5cGVcbiAgICpcbiAgICogQHBhcmFtIHsoc3RyaW5nIHwgbnVtYmVyKX0gdHJhbnNUeXBlIC0gMCBtZXNzYWdlIHdpbGwgZGVsaXZlcnkgZGlyZWN0bHk7XG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEgbWVhbnMganVzdCBjYyB0byBhcHAgc2VydmVyLCBub3QgZGVsaXZlcnkgZGlyZWN0bHlcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3dpdGNoVHJhbnNUeXBlKHRyYW5zVHlwZTogc3RyaW5nIHwgbnVtYmVyKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuOyB9XG59Il19
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)["__extends"]))

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _youme_ionic_plugins_youme_im__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);

window.YoumeNative = {
YoumeIM: _youme_ionic_plugins_youme_im__WEBPACK_IMPORTED_MODULE_0__[/* YoumeIM */ "a"]
};
__webpack_require__(11).checkReady();
__webpack_require__(23).initAngular1(window.YoumeNative);

/***/ }),
/* 22 */,
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initAngular1", function() { return initAngular1; });
/**
 * Initialize the ionic.native Angular module if we're running in ng1.
 * This iterates through the list of registered plugins and dynamically
 * creates Angular 1 services of the form $cordovaSERVICE, ex: $cordovaStatusBar.
 */
function initAngular1(plugins) {
    if (typeof window !== 'undefined' && window.angular) {
        var ngModule_1 = window.angular.module('ionic.native', []);
        for (var name_1 in plugins) {
            var serviceName = '$cordova' + name_1;
            var cls = plugins[name_1];
            (function (serviceName, cls, name) {
                ngModule_1.service(serviceName, [
                    function () {
                        var funcs = window.angular.copy(cls);
                        funcs.__proto__['name'] = name;
                        return funcs;
                    }
                ]);
            })(serviceName, cls, name_1);
        }
    }
}
//# sourceMappingURL=ng1.js.map

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/Observable.js + 5 modules
var Observable = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/util/isArray.js
var isArray = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/util/isFunction.js
var isFunction = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/Subscriber.js + 3 modules
var Subscriber = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/map.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
var MapOperator = /*@__PURE__*/ (function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new map_MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}());

var map_MapSubscriber = /*@__PURE__*/ (function (_super) {
    tslib_es6["__extends"](MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(Subscriber["a" /* Subscriber */]));
//# sourceMappingURL=map.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/fromEvent.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fromEvent; });
/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */




var fromEvent_toString = Object.prototype.toString;
function fromEvent(target, eventName, options, resultSelector) {
    if (Object(isFunction["a" /* isFunction */])(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(map(function (args) { return Object(isArray["a" /* isArray */])(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
    }
    return new Observable["a" /* Observable */](function (subscriber) {
        function handler(e) {
            if (arguments.length > 1) {
                subscriber.next(Array.prototype.slice.call(arguments));
            }
            else {
                subscriber.next(e);
            }
        }
        setupSubscription(target, eventName, handler, subscriber, options);
    });
}
function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
    var unsubscribe;
    if (isEventTarget(sourceObj)) {
        var source_1 = sourceObj;
        sourceObj.addEventListener(eventName, handler, options);
        unsubscribe = function () { return source_1.removeEventListener(eventName, handler, options); };
    }
    else if (isJQueryStyleEventEmitter(sourceObj)) {
        var source_2 = sourceObj;
        sourceObj.on(eventName, handler);
        unsubscribe = function () { return source_2.off(eventName, handler); };
    }
    else if (isNodeStyleEventEmitter(sourceObj)) {
        var source_3 = sourceObj;
        sourceObj.addListener(eventName, handler);
        unsubscribe = function () { return source_3.removeListener(eventName, handler); };
    }
    else if (sourceObj && sourceObj.length) {
        for (var i = 0, len = sourceObj.length; i < len; i++) {
            setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
        }
    }
    else {
        throw new TypeError('Invalid event target');
    }
    subscriber.add(unsubscribe);
}
function isNodeStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}
function isJQueryStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}
function isEventTarget(sourceObj) {
    return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}
//# sourceMappingURL=fromEvent.js.map


/***/ })
/******/ ]);