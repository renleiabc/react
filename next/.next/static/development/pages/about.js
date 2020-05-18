(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\about.js"],{

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fabout&absolutePagePath=F%3A%5Creact%5Cnext%5Cpages%5Cabout.js!./":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fabout&absolutePagePath=F%3A%5Creact%5Cnext%5Cpages%5Cabout.js ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/about",
      function () {
        return __webpack_require__(/*! ./pages/about.js */ "./pages/about.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/dynamic.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/dynamic.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var loadable_1 = __importDefault(__webpack_require__(/*! ./loadable */ "./node_modules/next/dist/next-server/lib/loadable.js"));

var isServerSide = false;

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is neccesary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  }

  var Loading = loadableOptions.loading; // This will only be rendered on the server side

  return function () {
    return react_1["default"].createElement(Loading, {
      error: null,
      isLoading: true,
      pastDelay: false,
      timedOut: false
    });
  };
}

exports.noSSR = noSSR; // function dynamic<P = {}, O extends DynamicOptions>(options: O):

function dynamic(dynamicOptions, options) {
  var loadableFn = loadable_1["default"];
  var loadableOptions = {
    // A loading component is not required, so we default it
    loading: function loading(_ref) {
      var error = _ref.error,
          isLoading = _ref.isLoading,
          pastDelay = _ref.pastDelay;
      if (!pastDelay) return null;

      if (true) {
        if (isLoading) {
          return null;
        }

        if (error) {
          return react_1["default"].createElement("p", null, error.message, react_1["default"].createElement("br", null), error.stack);
        }
      }

      return null;
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (dynamicOptions instanceof Promise) {
    loadableOptions.loader = function () {
      return dynamicOptions;
    }; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (typeof dynamicOptions === 'object') {
    loadableOptions = Object.assign(Object.assign({}, loadableOptions), dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = Object.assign(Object.assign({}, loadableOptions), options);

  if (typeof dynamicOptions === 'object' && !(dynamicOptions instanceof Promise)) {
    // show deprecation warning for `modules` key in development
    if (true) {
      if (dynamicOptions.modules) {
        console.warn('The modules option for next/dynamic has been deprecated. See here for more info https://err.sh/zeit/next.js/next-dynamic-modules');
      }
    } // Support for `render` when using a mapping, eg: `dynamic({ modules: () => {return {HelloWorld: import('../hello-world')}, render(props, loaded) {} } })


    if (dynamicOptions.render) {
      loadableOptions.render = function (loaded, props) {
        return dynamicOptions.render(props, loaded);
      };
    } // Support for `modules` when using a mapping, eg: `dynamic({ modules: () => {return {HelloWorld: import('../hello-world')}, render(props, loaded) {} } })


    if (dynamicOptions.modules) {
      loadableFn = loadable_1["default"].Map;
      var loadModules = {};
      var modules = dynamicOptions.modules();
      Object.keys(modules).forEach(function (key) {
        var value = modules[key];

        if (typeof value.then === 'function') {
          loadModules[key] = function () {
            return value.then(function (mod) {
              return mod["default"] || mod;
            });
          };

          return;
        }

        loadModules[key] = value;
      });
      loadableOptions.loader = loadModules;
    }
  } // coming from build/babel/plugins/react-loadable-plugin.js


  if (loadableOptions.loadableGenerated) {
    loadableOptions = Object.assign(Object.assign({}, loadableOptions), loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

exports["default"] = dynamic;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/loadable-context.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/loadable-context.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.LoadableContext = React.createContext(null);

if (true) {
  exports.LoadableContext.displayName = 'LoadableContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/loadable.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/loadable.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/
// https://github.com/jamiebuilds/react-loadable/blob/v5.5.0/src/index.js
// Modified to be compatible with webpack 4 / Next.js

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var use_subscription_1 = __webpack_require__(/*! use-subscription */ "./node_modules/use-subscription/index.js");

var loadable_context_1 = __webpack_require__(/*! ./loadable-context */ "./node_modules/next/dist/next-server/lib/loadable-context.js");

var ALL_INITIALIZERS = [];
var READY_INITIALIZERS = [];
var initialized = false;

function load(loader) {
  var promise = loader();
  var state = {
    loading: true,
    loaded: null,
    error: null
  };
  state.promise = promise.then(function (loaded) {
    state.loading = false;
    state.loaded = loaded;
    return loaded;
  })["catch"](function (err) {
    state.loading = false;
    state.error = err;
    throw err;
  });
  return state;
}

function loadMap(obj) {
  var state = {
    loading: false,
    loaded: {},
    error: null
  };
  var promises = [];

  try {
    Object.keys(obj).forEach(function (key) {
      var result = load(obj[key]);

      if (!result.loading) {
        state.loaded[key] = result.loaded;
        state.error = result.error;
      } else {
        state.loading = true;
      }

      promises.push(result.promise);
      result.promise.then(function (res) {
        state.loaded[key] = res;
      })["catch"](function (err) {
        state.error = err;
      });
    });
  } catch (err) {
    state.error = err;
  }

  state.promise = Promise.all(promises).then(function (res) {
    state.loading = false;
    return res;
  })["catch"](function (err) {
    state.loading = false;
    throw err;
  });
  return state;
}

function resolve(obj) {
  return obj && obj.__esModule ? obj["default"] : obj;
}

function render(loaded, props) {
  return react_1["default"].createElement(resolve(loaded), props);
}

function createLoadableComponent(loadFn, options) {
  var _s = $RefreshSig$();

  var opts = Object.assign({
    loader: null,
    loading: null,
    delay: 200,
    timeout: null,
    render: render,
    webpack: null,
    modules: null
  }, options);
  var subscription = null;

  function init() {
    if (!subscription) {
      var sub = new LoadableSubscription(loadFn, opts);
      subscription = {
        getCurrentValue: sub.getCurrentValue.bind(sub),
        subscribe: sub.subscribe.bind(sub),
        retry: sub.retry.bind(sub),
        promise: sub.promise.bind(sub)
      };
    }

    return subscription.promise();
  } // Server only


  if (false) {} // Client only


  if (!initialized && true && typeof opts.webpack === 'function') {
    var moduleIds = opts.webpack();
    READY_INITIALIZERS.push(function (ids) {
      var _iterator = _createForOfIteratorHelper(moduleIds),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var moduleId = _step.value;

          if (ids.indexOf(moduleId) !== -1) {
            return init();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
  }

  var LoadableComponent = function LoadableComponent(props, ref) {
    _s();

    init();
    var context = react_1["default"].useContext(loadable_context_1.LoadableContext);
    var state = use_subscription_1.useSubscription(subscription);
    react_1["default"].useImperativeHandle(ref, function () {
      return {
        retry: subscription.retry
      };
    }, []);

    if (context && Array.isArray(opts.modules)) {
      opts.modules.forEach(function (moduleName) {
        context(moduleName);
      });
    }

    return react_1["default"].useMemo(function () {
      if (state.loading || state.error) {
        return react_1["default"].createElement(opts.loading, {
          isLoading: state.loading,
          pastDelay: state.pastDelay,
          timedOut: state.timedOut,
          error: state.error,
          retry: subscription.retry
        });
      } else if (state.loaded) {
        return opts.render(state.loaded, props);
      } else {
        return null;
      }
    }, [props, state]);
  };

  _s(LoadableComponent, "JtITP7ezdiMOXETwxX2mQsR5YT8=", true, function () {
    return [use_subscription_1.useSubscription];
  });

  LoadableComponent.preload = function () {
    return init();
  };

  LoadableComponent.displayName = 'LoadableComponent';
  return react_1["default"].forwardRef(LoadableComponent);
}

var LoadableSubscription = /*#__PURE__*/function () {
  function LoadableSubscription(loadFn, opts) {
    _classCallCheck(this, LoadableSubscription);

    this._loadFn = loadFn;
    this._opts = opts;
    this._callbacks = new Set();
    this._delay = null;
    this._timeout = null;
    this.retry();
  }

  _createClass(LoadableSubscription, [{
    key: "promise",
    value: function promise() {
      return this._res.promise;
    }
  }, {
    key: "retry",
    value: function retry() {
      var _this = this;

      this._clearTimeouts();

      this._res = this._loadFn(this._opts.loader);
      this._state = {
        pastDelay: false,
        timedOut: false
      };
      var res = this._res,
          opts = this._opts;

      if (res.loading) {
        if (typeof opts.delay === 'number') {
          if (opts.delay === 0) {
            this._state.pastDelay = true;
          } else {
            this._delay = setTimeout(function () {
              _this._update({
                pastDelay: true
              });
            }, opts.delay);
          }
        }

        if (typeof opts.timeout === 'number') {
          this._timeout = setTimeout(function () {
            _this._update({
              timedOut: true
            });
          }, opts.timeout);
        }
      }

      this._res.promise.then(function () {
        _this._update({});

        _this._clearTimeouts();
      }) // eslint-disable-next-line handle-callback-err
      ["catch"](function (err) {
        _this._update({});

        _this._clearTimeouts();
      });

      this._update({});
    }
  }, {
    key: "_update",
    value: function _update(partial) {
      this._state = Object.assign(Object.assign(Object.assign({}, this._state), {
        error: this._res.error,
        loaded: this._res.loaded,
        loading: this._res.loading
      }), partial);

      this._callbacks.forEach(function (callback) {
        return callback();
      });
    }
  }, {
    key: "_clearTimeouts",
    value: function _clearTimeouts() {
      clearTimeout(this._delay);
      clearTimeout(this._timeout);
    }
  }, {
    key: "getCurrentValue",
    value: function getCurrentValue() {
      return this._state;
    }
  }, {
    key: "subscribe",
    value: function subscribe(callback) {
      var _this2 = this;

      this._callbacks.add(callback);

      return function () {
        _this2._callbacks["delete"](callback);
      };
    }
  }]);

  return LoadableSubscription;
}();

function Loadable(opts) {
  return createLoadableComponent(load, opts);
}

_c = Loadable;

function LoadableMap(opts) {
  if (typeof opts.render !== 'function') {
    throw new Error('LoadableMap requires a `render(loaded, props)` function');
  }

  return createLoadableComponent(loadMap, opts);
}

_c2 = LoadableMap;
Loadable.Map = LoadableMap;

function flushInitializers(initializers, ids) {
  var promises = [];

  while (initializers.length) {
    var init = initializers.pop();
    promises.push(init(ids));
  }

  return Promise.all(promises).then(function () {
    if (initializers.length) {
      return flushInitializers(initializers, ids);
    }
  });
}

Loadable.preloadAll = function () {
  return new Promise(function (resolve, reject) {
    flushInitializers(ALL_INITIALIZERS).then(resolve, reject);
  });
};

Loadable.preloadReady = function () {
  var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return new Promise(function (resolve) {
    var res = function res() {
      initialized = true;
      return resolve();
    }; // We always will resolve, errors should be handled within loading UIs.


    flushInitializers(READY_INITIALIZERS, ids).then(res, res);
  });
};

if (true) {
  window.__NEXT_PRELOADREADY = Loadable.preloadReady;
}

exports["default"] = Loadable;

var _c, _c2;

$RefreshReg$(_c, "Loadable");
$RefreshReg$(_c2, "LoadableMap");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/use-subscription/cjs/use-subscription.development.js":
/*!***************************************************************************!*\
  !*** ./node_modules/use-subscription/cjs/use-subscription.development.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v1.4.1
 * use-subscription.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

//
// In order to avoid removing and re-adding subscriptions each time this hook is called,
// the parameters passed to this hook should be memoized in some way–
// either by wrapping the entire params object with useMemo()
// or by wrapping the individual callbacks with useCallback().

function useSubscription(_ref) {
  var getCurrentValue = _ref.getCurrentValue,
      subscribe = _ref.subscribe;

  // Read the current value from our subscription.
  // When this value changes, we'll schedule an update with React.
  // It's important to also store the hook params so that we can check for staleness.
  // (See the comment in checkForUpdates() below for more info.)
  var _useState = react.useState(function () {
    return {
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: getCurrentValue()
    };
  }),
      state = _useState[0],
      setState = _useState[1];

  var valueToReturn = state.value; // If parameters have changed since our last render, schedule an update with its current value.

  if (state.getCurrentValue !== getCurrentValue || state.subscribe !== subscribe) {
    // If the subscription has been updated, we'll schedule another update with React.
    // React will process this update immediately, so the old subscription value won't be committed.
    // It is still nice to avoid returning a mismatched value though, so let's override the return value.
    valueToReturn = getCurrentValue();
    setState({
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: valueToReturn
    });
  } // Display the current value for this hook in React DevTools.


  react.useDebugValue(valueToReturn); // It is important not to subscribe while rendering because this can lead to memory leaks.
  // (Learn more at reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects)
  // Instead, we wait until the commit phase to attach our handler.
  //
  // We intentionally use a passive effect (useEffect) rather than a synchronous one (useLayoutEffect)
  // so that we don't stretch the commit phase.
  // This also has an added benefit when multiple components are subscribed to the same source:
  // It allows each of the event handlers to safely schedule work without potentially removing an another handler.
  // (Learn more at https://codesandbox.io/s/k0yvr5970o)

  react.useEffect(function () {
    var didUnsubscribe = false;

    var checkForUpdates = function () {
      // It's possible that this callback will be invoked even after being unsubscribed,
      // if it's removed as a result of a subscription event/update.
      // In this case, React will log a DEV warning about an update from an unmounted component.
      // We can avoid triggering that warning with this check.
      if (didUnsubscribe) {
        return;
      } // We use a state updater function to avoid scheduling work for a stale source.
      // However it's important to eagerly read the currently value,
      // so that all scheduled work shares the same value (in the event of multiple subscriptions).
      // This avoids visual "tearing" when a mutation happens during a (concurrent) render.


      var value = getCurrentValue();
      setState(function (prevState) {
        // Ignore values from stale sources!
        // Since we subscribe an unsubscribe in a passive effect,
        // it's possible that this callback will be invoked for a stale (previous) subscription.
        // This check avoids scheduling an update for that stale subscription.
        if (prevState.getCurrentValue !== getCurrentValue || prevState.subscribe !== subscribe) {
          return prevState;
        } // Some subscriptions will auto-invoke the handler, even if the value hasn't changed.
        // If the value hasn't changed, no update is needed.
        // Return state as-is so React can bail out and avoid an unnecessary render.


        if (prevState.value === value) {
          return prevState;
        }

        return _assign({}, prevState, {
          value: value
        });
      });
    };

    var unsubscribe = subscribe(checkForUpdates); // Because we're subscribing in a passive effect,
    // it's possible that an update has occurred between render and our effect handler.
    // Check for this and schedule an update if work has occurred.

    checkForUpdates();
    return function () {
      didUnsubscribe = true;
      unsubscribe();
    };
  }, [getCurrentValue, subscribe]); // Return the current value for our caller to use while rendering.

  return valueToReturn;
}

exports.useSubscription = useSubscription;
  })();
}


/***/ }),

/***/ "./node_modules/use-subscription/index.js":
/*!************************************************!*\
  !*** ./node_modules/use-subscription/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/use-subscription.development.js */ "./node_modules/use-subscription/cjs/use-subscription.development.js");
}


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "F:\\react\\next\\pages\\about.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/*
 * @Author: renlei
 * @Date: 2020-05-18 17:24:11
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-18 17:57:54
 * @Description:
 */

var DynamicComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/hello */ "./components/hello.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/hello */ "./components/hello.js")];
    },
    modules: ["../components/hello"]
  }
});
_c2 = DynamicComponent;
var DynamicComponentWithCustomLoading = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(_c3 = function _c3() {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../components/hello2 */ "./components/hello2.js"));
}, {
  loading: function loading() {
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 20
      }
    }, "...213312123132");
  },
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/hello2 */ "./components/hello2.js")];
    },
    modules: ["../components/hello2"]
  }
});
_c4 = DynamicComponentWithCustomLoading;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 3
    }
  }, __jsx(DynamicComponentWithCustomLoading, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }), __jsx(DynamicComponent, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }), " Welcome to About!");
});

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "DynamicComponent$dynamic");
$RefreshReg$(_c2, "DynamicComponent");
$RefreshReg$(_c3, "DynamicComponentWithCustomLoading$dynamic");
$RefreshReg$(_c4, "DynamicComponentWithCustomLoading");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 2:
/*!************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fabout&absolutePagePath=F%3A%5Creact%5Cnext%5Cpages%5Cabout.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fabout&absolutePagePath=F%3A%5Creact%5Cnext%5Cpages%5Cabout.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fabout&absolutePagePath=F%3A%5Creact%5Cnext%5Cpages%5Cabout.js!./");


/***/ }),

/***/ "dll-reference dll_c2e10d183b950a67d9e7":
/*!*******************************************!*\
  !*** external "dll_c2e10d183b950a67d9e7" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_c2e10d183b950a67d9e7;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC9wb2x5ZmlsbHMvb2JqZWN0LWFzc2lnbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgZGxsX2MyZTEwZDE4M2I5NTBhNjdkOWU3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtY2xpZW50LXBhZ2VzLWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9keW5hbWljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2xvYWRhYmxlLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbG9hZGFibGUuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgZGxsX2MyZTEwZDE4M2I5NTBhNjdkOWU3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91c2Utc3Vic2NyaXB0aW9uL2Nqcy91c2Utc3Vic2NyaXB0aW9uLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91c2Utc3Vic2NyaXB0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2Fib3V0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImRsbF9jMmUxMGQxODNiOTUwYTY3ZDllN1wiIl0sIm5hbWVzIjpbIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsIl9fZXNNb2R1bGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsInJlYWN0XzEiLCJyZXF1aXJlIiwibG9hZGFibGVfMSIsImlzU2VydmVyU2lkZSIsIm5vU1NSIiwiTG9hZGFibGVJbml0aWFsaXplciIsImxvYWRhYmxlT3B0aW9ucyIsIndlYnBhY2siLCJtb2R1bGVzIiwiTG9hZGluZyIsImxvYWRpbmciLCJjcmVhdGVFbGVtZW50IiwiZXJyb3IiLCJpc0xvYWRpbmciLCJwYXN0RGVsYXkiLCJ0aW1lZE91dCIsImR5bmFtaWMiLCJkeW5hbWljT3B0aW9ucyIsIm9wdGlvbnMiLCJsb2FkYWJsZUZuIiwibWVzc2FnZSIsInN0YWNrIiwiUHJvbWlzZSIsImxvYWRlciIsImFzc2lnbiIsImNvbnNvbGUiLCJ3YXJuIiwicmVuZGVyIiwibG9hZGVkIiwicHJvcHMiLCJNYXAiLCJsb2FkTW9kdWxlcyIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwidGhlbiIsImxvYWRhYmxlR2VuZXJhdGVkIiwic3NyIiwiX19pbXBvcnRTdGFyIiwicmVzdWx0IiwiayIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlJlYWN0IiwiTG9hZGFibGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImRpc3BsYXlOYW1lIiwidXNlX3N1YnNjcmlwdGlvbl8xIiwibG9hZGFibGVfY29udGV4dF8xIiwiQUxMX0lOSVRJQUxJWkVSUyIsIlJFQURZX0lOSVRJQUxJWkVSUyIsImluaXRpYWxpemVkIiwibG9hZCIsInByb21pc2UiLCJzdGF0ZSIsImVyciIsImxvYWRNYXAiLCJvYmoiLCJwcm9taXNlcyIsInB1c2giLCJyZXMiLCJhbGwiLCJyZXNvbHZlIiwiY3JlYXRlTG9hZGFibGVDb21wb25lbnQiLCJsb2FkRm4iLCJvcHRzIiwiZGVsYXkiLCJ0aW1lb3V0Iiwic3Vic2NyaXB0aW9uIiwiaW5pdCIsInN1YiIsIkxvYWRhYmxlU3Vic2NyaXB0aW9uIiwiZ2V0Q3VycmVudFZhbHVlIiwiYmluZCIsInN1YnNjcmliZSIsInJldHJ5IiwibW9kdWxlSWRzIiwiaWRzIiwibW9kdWxlSWQiLCJpbmRleE9mIiwiTG9hZGFibGVDb21wb25lbnQiLCJyZWYiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN1YnNjcmlwdGlvbiIsInVzZUltcGVyYXRpdmVIYW5kbGUiLCJBcnJheSIsImlzQXJyYXkiLCJtb2R1bGVOYW1lIiwidXNlTWVtbyIsInByZWxvYWQiLCJmb3J3YXJkUmVmIiwiX2xvYWRGbiIsIl9vcHRzIiwiX2NhbGxiYWNrcyIsIlNldCIsIl9kZWxheSIsIl90aW1lb3V0IiwiX3JlcyIsIl9jbGVhclRpbWVvdXRzIiwiX3N0YXRlIiwic2V0VGltZW91dCIsIl91cGRhdGUiLCJwYXJ0aWFsIiwiY2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJhZGQiLCJMb2FkYWJsZSIsIkxvYWRhYmxlTWFwIiwiRXJyb3IiLCJmbHVzaEluaXRpYWxpemVycyIsImluaXRpYWxpemVycyIsImxlbmd0aCIsInBvcCIsInByZWxvYWRBbGwiLCJyZWplY3QiLCJwcmVsb2FkUmVhZHkiLCJ3aW5kb3ciLCJfX05FWFRfUFJFTE9BRFJFQURZIiwiRHluYW1pY0NvbXBvbmVudCIsIkR5bmFtaWNDb21wb25lbnRXaXRoQ3VzdG9tTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Qjs7Ozs7Ozs7Ozs7QUNoQkEsNEw7Ozs7Ozs7Ozs7OztBQ0NBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJB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QUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBOzs7Ozs7O0FBT0E7QUFDQSxJQUFNWSxnQkFBZ0IsR0FBR3ZHLG1EQUFPO0FBQUEsU0FBQyxpSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUFRLGtEQUFSO0FBQUE7QUFBQSxjQUFRLHFCQUFSO0FBQUE7QUFBQSxFQUFoQztNQUFNdUcsZ0I7QUFDTixJQUFNQyxpQ0FBaUMsR0FBR3hHLG1EQUFPO0FBQUEsU0FDL0MsbUlBRCtDO0FBQUEsR0FFL0M7QUFDRU4sU0FBTyxFQUFFO0FBQUEsV0FBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFOO0FBQUEsR0FEWDtBQUFBO0FBQUE7QUFBQSxrQ0FETyxvREFDUDtBQUFBO0FBQUEsY0FETyxzQkFDUDtBQUFBO0FBQUEsQ0FGK0MsQ0FBakQ7TUFBTThHLGlDO0FBTVM7QUFBQSxTQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLHVCQURhO0FBQUEsQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkEsMEMiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIGRsbF9jMmUxMGQxODNiOTUwYTY3ZDllNyAqLyBcImRsbC1yZWZlcmVuY2UgZGxsX2MyZTEwZDE4M2I5NTBhNjdkOWU3XCIpKShcIi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC9wb2x5ZmlsbHMvb2JqZWN0LWFzc2lnbi5qc1wiKTsiLCJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL2Fib3V0XCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiRjpcXFxccmVhY3RcXFxcbmV4dFxcXFxwYWdlc1xcXFxhYm91dC5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5jb25zdCBsb2FkYWJsZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2xvYWRhYmxlXCIpKTtcbmNvbnN0IGlzU2VydmVyU2lkZSA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gbm9TU1IoTG9hZGFibGVJbml0aWFsaXplciwgbG9hZGFibGVPcHRpb25zKSB7XG4gICAgLy8gUmVtb3Zpbmcgd2VicGFjayBhbmQgbW9kdWxlcyBtZWFucyByZWFjdC1sb2FkYWJsZSB3b24ndCB0cnkgcHJlbG9hZGluZ1xuICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMud2VicGFjaztcbiAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLm1vZHVsZXM7XG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNjZXNhcnkgdG8gcHJldmVudCByZWFjdC1sb2FkYWJsZSBmcm9tIGluaXRpYWxpemluZyBvbiB0aGUgc2VydmVyXG4gICAgaWYgKCFpc1NlcnZlclNpZGUpIHtcbiAgICAgICAgcmV0dXJuIExvYWRhYmxlSW5pdGlhbGl6ZXIobG9hZGFibGVPcHRpb25zKTtcbiAgICB9XG4gICAgY29uc3QgTG9hZGluZyA9IGxvYWRhYmxlT3B0aW9ucy5sb2FkaW5nO1xuICAgIC8vIFRoaXMgd2lsbCBvbmx5IGJlIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXIgc2lkZVxuICAgIHJldHVybiAoKSA9PiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZywgeyBlcnJvcjogbnVsbCwgaXNMb2FkaW5nOiB0cnVlLCBwYXN0RGVsYXk6IGZhbHNlLCB0aW1lZE91dDogZmFsc2UgfSkpO1xufVxuZXhwb3J0cy5ub1NTUiA9IG5vU1NSO1xuLy8gZnVuY3Rpb24gZHluYW1pYzxQID0ge30sIE8gZXh0ZW5kcyBEeW5hbWljT3B0aW9ucz4ob3B0aW9uczogTyk6XG5mdW5jdGlvbiBkeW5hbWljKGR5bmFtaWNPcHRpb25zLCBvcHRpb25zKSB7XG4gICAgbGV0IGxvYWRhYmxlRm4gPSBsb2FkYWJsZV8xLmRlZmF1bHQ7XG4gICAgbGV0IGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgICAgLy8gQSBsb2FkaW5nIGNvbXBvbmVudCBpcyBub3QgcmVxdWlyZWQsIHNvIHdlIGRlZmF1bHQgaXRcbiAgICAgICAgbG9hZGluZzogKHsgZXJyb3IsIGlzTG9hZGluZywgcGFzdERlbGF5IH0pID0+IHtcbiAgICAgICAgICAgIGlmICghcGFzdERlbGF5KVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLnN0YWNrKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0sXG4gICAgfTtcbiAgICAvLyBTdXBwb3J0IGZvciBkaXJlY3QgaW1wb3J0KCksIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgICAvLyBOb3RlIHRoYXQgdGhpcyBpcyBvbmx5IGtlcHQgZm9yIHRoZSBlZGdlIGNhc2Ugd2hlcmUgc29tZW9uZSBpcyBwYXNzaW5nIGluIGEgcHJvbWlzZSBhcyBmaXJzdCBhcmd1bWVudFxuICAgIC8vIFRoZSByZWFjdC1sb2FkYWJsZSBiYWJlbCBwbHVnaW4gd2lsbCB0dXJuIGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKSBpbnRvIGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAgIC8vIFRvIG1ha2Ugc3VyZSB3ZSBkb24ndCBleGVjdXRlIHRoZSBpbXBvcnQgd2l0aG91dCByZW5kZXJpbmcgZmlyc3RcbiAgICBpZiAoZHluYW1pY09wdGlvbnMgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucy5sb2FkZXIgPSAoKSA9PiBkeW5hbWljT3B0aW9ucztcbiAgICAgICAgLy8gU3VwcG9ydCBmb3IgaGF2aW5nIGltcG9ydCBhcyBhIGZ1bmN0aW9uLCBlZzogZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBkeW5hbWljT3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMubG9hZGVyID0gZHluYW1pY09wdGlvbnM7XG4gICAgICAgIC8vIFN1cHBvcnQgZm9yIGhhdmluZyBmaXJzdCBhcmd1bWVudCBiZWluZyBvcHRpb25zLCBlZzogZHluYW1pYyh7bG9hZGVyOiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyl9KVxuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgZHluYW1pY09wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgbG9hZGFibGVPcHRpb25zKSwgZHluYW1pY09wdGlvbnMpO1xuICAgIH1cbiAgICAvLyBTdXBwb3J0IGZvciBwYXNzaW5nIG9wdGlvbnMsIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSwge2xvYWRpbmc6ICgpID0+IDxwPkxvYWRpbmcgc29tZXRoaW5nPC9wPn0pXG4gICAgbG9hZGFibGVPcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBsb2FkYWJsZU9wdGlvbnMpLCBvcHRpb25zKTtcbiAgICBpZiAodHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAhKGR5bmFtaWNPcHRpb25zIGluc3RhbmNlb2YgUHJvbWlzZSkpIHtcbiAgICAgICAgLy8gc2hvdyBkZXByZWNhdGlvbiB3YXJuaW5nIGZvciBgbW9kdWxlc2Aga2V5IGluIGRldmVsb3BtZW50XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAoZHluYW1pY09wdGlvbnMubW9kdWxlcykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignVGhlIG1vZHVsZXMgb3B0aW9uIGZvciBuZXh0L2R5bmFtaWMgaGFzIGJlZW4gZGVwcmVjYXRlZC4gU2VlIGhlcmUgZm9yIG1vcmUgaW5mbyBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvbmV4dC1keW5hbWljLW1vZHVsZXMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBTdXBwb3J0IGZvciBgcmVuZGVyYCB3aGVuIHVzaW5nIGEgbWFwcGluZywgZWc6IGBkeW5hbWljKHsgbW9kdWxlczogKCkgPT4ge3JldHVybiB7SGVsbG9Xb3JsZDogaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpfSwgcmVuZGVyKHByb3BzLCBsb2FkZWQpIHt9IH0gfSlcbiAgICAgICAgaWYgKGR5bmFtaWNPcHRpb25zLnJlbmRlcikge1xuICAgICAgICAgICAgbG9hZGFibGVPcHRpb25zLnJlbmRlciA9IChsb2FkZWQsIHByb3BzKSA9PiBkeW5hbWljT3B0aW9ucy5yZW5kZXIocHJvcHMsIGxvYWRlZCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3VwcG9ydCBmb3IgYG1vZHVsZXNgIHdoZW4gdXNpbmcgYSBtYXBwaW5nLCBlZzogYGR5bmFtaWMoeyBtb2R1bGVzOiAoKSA9PiB7cmV0dXJuIHtIZWxsb1dvcmxkOiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyl9LCByZW5kZXIocHJvcHMsIGxvYWRlZCkge30gfSB9KVxuICAgICAgICBpZiAoZHluYW1pY09wdGlvbnMubW9kdWxlcykge1xuICAgICAgICAgICAgbG9hZGFibGVGbiA9IGxvYWRhYmxlXzEuZGVmYXVsdC5NYXA7XG4gICAgICAgICAgICBjb25zdCBsb2FkTW9kdWxlcyA9IHt9O1xuICAgICAgICAgICAgY29uc3QgbW9kdWxlcyA9IGR5bmFtaWNPcHRpb25zLm1vZHVsZXMoKTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG1vZHVsZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG1vZHVsZXNba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZE1vZHVsZXNba2V5XSA9ICgpID0+IHZhbHVlLnRoZW4oKG1vZCkgPT4gbW9kLmRlZmF1bHQgfHwgbW9kKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsb2FkTW9kdWxlc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxvYWRhYmxlT3B0aW9ucy5sb2FkZXIgPSBsb2FkTW9kdWxlcztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBjb21pbmcgZnJvbSBidWlsZC9iYWJlbC9wbHVnaW5zL3JlYWN0LWxvYWRhYmxlLXBsdWdpbi5qc1xuICAgIGlmIChsb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWQpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBsb2FkYWJsZU9wdGlvbnMpLCBsb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWQpO1xuICAgICAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkO1xuICAgIH1cbiAgICAvLyBzdXBwb3J0IGZvciBkaXNhYmxpbmcgc2VydmVyIHNpZGUgcmVuZGVyaW5nLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyksIHtzc3I6IGZhbHNlfSlcbiAgICBpZiAodHlwZW9mIGxvYWRhYmxlT3B0aW9ucy5zc3IgPT09ICdib29sZWFuJykge1xuICAgICAgICBpZiAoIWxvYWRhYmxlT3B0aW9ucy5zc3IpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMuc3NyO1xuICAgICAgICAgICAgcmV0dXJuIG5vU1NSKGxvYWRhYmxlRm4sIGxvYWRhYmxlT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5zc3I7XG4gICAgfVxuICAgIHJldHVybiBsb2FkYWJsZUZuKGxvYWRhYmxlT3B0aW9ucyk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBkeW5hbWljO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZWFjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xuZXhwb3J0cy5Mb2FkYWJsZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBleHBvcnRzLkxvYWRhYmxlQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdMb2FkYWJsZUNvbnRleHQnO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbkBjb3B5cmlnaHQgKGMpIDIwMTctcHJlc2VudCBKYW1lcyBLeWxlIDxtZUB0aGVqYW1lc2t5bGUuY29tPlxuIE1JVCBMaWNlbnNlXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nXG5hIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcblwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xud2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvXG5wZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG9cbnRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbkVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbk5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkVcbkxJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT05cbk9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTlxuV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkVcbiovXG4vLyBodHRwczovL2dpdGh1Yi5jb20vamFtaWVidWlsZHMvcmVhY3QtbG9hZGFibGUvYmxvYi92NS41LjAvc3JjL2luZGV4LmpzXG4vLyBNb2RpZmllZCB0byBiZSBjb21wYXRpYmxlIHdpdGggd2VicGFjayA0IC8gTmV4dC5qc1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuY29uc3QgdXNlX3N1YnNjcmlwdGlvbl8xID0gcmVxdWlyZShcInVzZS1zdWJzY3JpcHRpb25cIik7XG5jb25zdCBsb2FkYWJsZV9jb250ZXh0XzEgPSByZXF1aXJlKFwiLi9sb2FkYWJsZS1jb250ZXh0XCIpO1xuY29uc3QgQUxMX0lOSVRJQUxJWkVSUyA9IFtdO1xuY29uc3QgUkVBRFlfSU5JVElBTElaRVJTID0gW107XG5sZXQgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbmZ1bmN0aW9uIGxvYWQobG9hZGVyKSB7XG4gICAgbGV0IHByb21pc2UgPSBsb2FkZXIoKTtcbiAgICBsZXQgc3RhdGUgPSB7XG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIGxvYWRlZDogbnVsbCxcbiAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgfTtcbiAgICBzdGF0ZS5wcm9taXNlID0gcHJvbWlzZVxuICAgICAgICAudGhlbihsb2FkZWQgPT4ge1xuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLmxvYWRlZCA9IGxvYWRlZDtcbiAgICAgICAgcmV0dXJuIGxvYWRlZDtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5lcnJvciA9IGVycjtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICAgIHJldHVybiBzdGF0ZTtcbn1cbmZ1bmN0aW9uIGxvYWRNYXAob2JqKSB7XG4gICAgbGV0IHN0YXRlID0ge1xuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgbG9hZGVkOiB7fSxcbiAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgfTtcbiAgICBsZXQgcHJvbWlzZXMgPSBbXTtcbiAgICB0cnkge1xuICAgICAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBsb2FkKG9ialtrZXldKTtcbiAgICAgICAgICAgIGlmICghcmVzdWx0LmxvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5sb2FkZWRba2V5XSA9IHJlc3VsdC5sb2FkZWQ7XG4gICAgICAgICAgICAgICAgc3RhdGUuZXJyb3IgPSByZXN1bHQuZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb21pc2VzLnB1c2gocmVzdWx0LnByb21pc2UpO1xuICAgICAgICAgICAgcmVzdWx0LnByb21pc2VcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLmxvYWRlZFtrZXldID0gcmVzO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5lcnJvciA9IGVycjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBzdGF0ZS5lcnJvciA9IGVycjtcbiAgICB9XG4gICAgc3RhdGUucHJvbWlzZSA9IFByb21pc2UuYWxsKHByb21pc2VzKVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICAgIHJldHVybiBzdGF0ZTtcbn1cbmZ1bmN0aW9uIHJlc29sdmUob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iai5kZWZhdWx0IDogb2JqO1xufVxuZnVuY3Rpb24gcmVuZGVyKGxvYWRlZCwgcHJvcHMpIHtcbiAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVzb2x2ZShsb2FkZWQpLCBwcm9wcyk7XG59XG5mdW5jdGlvbiBjcmVhdGVMb2FkYWJsZUNvbXBvbmVudChsb2FkRm4sIG9wdGlvbnMpIHtcbiAgICBsZXQgb3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBsb2FkZXI6IG51bGwsXG4gICAgICAgIGxvYWRpbmc6IG51bGwsXG4gICAgICAgIGRlbGF5OiAyMDAsXG4gICAgICAgIHRpbWVvdXQ6IG51bGwsXG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICB3ZWJwYWNrOiBudWxsLFxuICAgICAgICBtb2R1bGVzOiBudWxsLFxuICAgIH0sIG9wdGlvbnMpO1xuICAgIGxldCBzdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGlmICghc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBzdWIgPSBuZXcgTG9hZGFibGVTdWJzY3JpcHRpb24obG9hZEZuLCBvcHRzKTtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IHtcbiAgICAgICAgICAgICAgICBnZXRDdXJyZW50VmFsdWU6IHN1Yi5nZXRDdXJyZW50VmFsdWUuYmluZChzdWIpLFxuICAgICAgICAgICAgICAgIHN1YnNjcmliZTogc3ViLnN1YnNjcmliZS5iaW5kKHN1YiksXG4gICAgICAgICAgICAgICAgcmV0cnk6IHN1Yi5yZXRyeS5iaW5kKHN1YiksXG4gICAgICAgICAgICAgICAgcHJvbWlzZTogc3ViLnByb21pc2UuYmluZChzdWIpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uLnByb21pc2UoKTtcbiAgICB9XG4gICAgLy8gU2VydmVyIG9ubHlcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgQUxMX0lOSVRJQUxJWkVSUy5wdXNoKGluaXQpO1xuICAgIH1cbiAgICAvLyBDbGllbnQgb25seVxuICAgIGlmICghaW5pdGlhbGl6ZWQgJiZcbiAgICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgdHlwZW9mIG9wdHMud2VicGFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zdCBtb2R1bGVJZHMgPSBvcHRzLndlYnBhY2soKTtcbiAgICAgICAgUkVBRFlfSU5JVElBTElaRVJTLnB1c2goaWRzID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbW9kdWxlSWQgb2YgbW9kdWxlSWRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlkcy5pbmRleE9mKG1vZHVsZUlkKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluaXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBMb2FkYWJsZUNvbXBvbmVudCA9IChwcm9wcywgcmVmKSA9PiB7XG4gICAgICAgIGluaXQoKTtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHJlYWN0XzEuZGVmYXVsdC51c2VDb250ZXh0KGxvYWRhYmxlX2NvbnRleHRfMS5Mb2FkYWJsZUNvbnRleHQpO1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHVzZV9zdWJzY3JpcHRpb25fMS51c2VTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoe1xuICAgICAgICAgICAgcmV0cnk6IHN1YnNjcmlwdGlvbi5yZXRyeSxcbiAgICAgICAgfSksIFtdKTtcbiAgICAgICAgaWYgKGNvbnRleHQgJiYgQXJyYXkuaXNBcnJheShvcHRzLm1vZHVsZXMpKSB7XG4gICAgICAgICAgICBvcHRzLm1vZHVsZXMuZm9yRWFjaChtb2R1bGVOYW1lID0+IHtcbiAgICAgICAgICAgICAgICBjb250ZXh0KG1vZHVsZU5hbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5sb2FkaW5nIHx8IHN0YXRlLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG9wdHMubG9hZGluZywge1xuICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IHN0YXRlLmxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgIHBhc3REZWxheTogc3RhdGUucGFzdERlbGF5LFxuICAgICAgICAgICAgICAgICAgICB0aW1lZE91dDogc3RhdGUudGltZWRPdXQsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBzdGF0ZS5lcnJvcixcbiAgICAgICAgICAgICAgICAgICAgcmV0cnk6IHN1YnNjcmlwdGlvbi5yZXRyeSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXRlLmxvYWRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcHRzLnJlbmRlcihzdGF0ZS5sb2FkZWQsIHByb3BzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbcHJvcHMsIHN0YXRlXSk7XG4gICAgfTtcbiAgICBMb2FkYWJsZUNvbXBvbmVudC5wcmVsb2FkID0gKCkgPT4gaW5pdCgpO1xuICAgIExvYWRhYmxlQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gJ0xvYWRhYmxlQ29tcG9uZW50JztcbiAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmZvcndhcmRSZWYoTG9hZGFibGVDb21wb25lbnQpO1xufVxuY2xhc3MgTG9hZGFibGVTdWJzY3JpcHRpb24ge1xuICAgIGNvbnN0cnVjdG9yKGxvYWRGbiwgb3B0cykge1xuICAgICAgICB0aGlzLl9sb2FkRm4gPSBsb2FkRm47XG4gICAgICAgIHRoaXMuX29wdHMgPSBvcHRzO1xuICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuX2RlbGF5ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fdGltZW91dCA9IG51bGw7XG4gICAgICAgIHRoaXMucmV0cnkoKTtcbiAgICB9XG4gICAgcHJvbWlzZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlcy5wcm9taXNlO1xuICAgIH1cbiAgICByZXRyeSgpIHtcbiAgICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0cygpO1xuICAgICAgICB0aGlzLl9yZXMgPSB0aGlzLl9sb2FkRm4odGhpcy5fb3B0cy5sb2FkZXIpO1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBhc3REZWxheTogZmFsc2UsXG4gICAgICAgICAgICB0aW1lZE91dDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHsgX3JlczogcmVzLCBfb3B0czogb3B0cyB9ID0gdGhpcztcbiAgICAgICAgaWYgKHJlcy5sb2FkaW5nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdHMuZGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdHMuZGVsYXkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUucGFzdERlbGF5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RlbGF5ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3REZWxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LCBvcHRzLmRlbGF5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdHMudGltZW91dCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZSh7IHRpbWVkT3V0OiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIH0sIG9wdHMudGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcmVzLnByb21pc2VcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZSh7fSk7XG4gICAgICAgICAgICB0aGlzLl9jbGVhclRpbWVvdXRzKCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaGFuZGxlLWNhbGxiYWNrLWVyclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGUoe30pO1xuICAgICAgICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0cygpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fdXBkYXRlKHt9KTtcbiAgICB9XG4gICAgX3VwZGF0ZShwYXJ0aWFsKSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX3N0YXRlKSwgeyBlcnJvcjogdGhpcy5fcmVzLmVycm9yLCBsb2FkZWQ6IHRoaXMuX3Jlcy5sb2FkZWQsIGxvYWRpbmc6IHRoaXMuX3Jlcy5sb2FkaW5nIH0pLCBwYXJ0aWFsKTtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2soKSk7XG4gICAgfVxuICAgIF9jbGVhclRpbWVvdXRzKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGVsYXkpO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG4gICAgfVxuICAgIGdldEN1cnJlbnRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICAgIH1cbiAgICBzdWJzY3JpYmUoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFja3MuZGVsZXRlKGNhbGxiYWNrKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5mdW5jdGlvbiBMb2FkYWJsZShvcHRzKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUxvYWRhYmxlQ29tcG9uZW50KGxvYWQsIG9wdHMpO1xufVxuZnVuY3Rpb24gTG9hZGFibGVNYXAob3B0cykge1xuICAgIGlmICh0eXBlb2Ygb3B0cy5yZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMb2FkYWJsZU1hcCByZXF1aXJlcyBhIGByZW5kZXIobG9hZGVkLCBwcm9wcylgIGZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVMb2FkYWJsZUNvbXBvbmVudChsb2FkTWFwLCBvcHRzKTtcbn1cbkxvYWRhYmxlLk1hcCA9IExvYWRhYmxlTWFwO1xuZnVuY3Rpb24gZmx1c2hJbml0aWFsaXplcnMoaW5pdGlhbGl6ZXJzLCBpZHMpIHtcbiAgICBsZXQgcHJvbWlzZXMgPSBbXTtcbiAgICB3aGlsZSAoaW5pdGlhbGl6ZXJzLmxlbmd0aCkge1xuICAgICAgICBsZXQgaW5pdCA9IGluaXRpYWxpemVycy5wb3AoKTtcbiAgICAgICAgcHJvbWlzZXMucHVzaChpbml0KGlkcykpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgICBpZiAoaW5pdGlhbGl6ZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZsdXNoSW5pdGlhbGl6ZXJzKGluaXRpYWxpemVycywgaWRzKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuTG9hZGFibGUucHJlbG9hZEFsbCA9ICgpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBmbHVzaEluaXRpYWxpemVycyhBTExfSU5JVElBTElaRVJTKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgfSk7XG59O1xuTG9hZGFibGUucHJlbG9hZFJlYWR5ID0gKGlkcyA9IFtdKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSAoKSA9PiB7XG4gICAgICAgICAgICBpbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICB9O1xuICAgICAgICAvLyBXZSBhbHdheXMgd2lsbCByZXNvbHZlLCBlcnJvcnMgc2hvdWxkIGJlIGhhbmRsZWQgd2l0aGluIGxvYWRpbmcgVUlzLlxuICAgICAgICBmbHVzaEluaXRpYWxpemVycyhSRUFEWV9JTklUSUFMSVpFUlMsIGlkcykudGhlbihyZXMsIHJlcyk7XG4gICAgfSk7XG59O1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93Ll9fTkVYVF9QUkVMT0FEUkVBRFkgPSBMb2FkYWJsZS5wcmVsb2FkUmVhZHk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBMb2FkYWJsZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgZGxsX2MyZTEwZDE4M2I5NTBhNjdkOWU3ICovIFwiZGxsLXJlZmVyZW5jZSBkbGxfYzJlMTBkMTgzYjk1MGE2N2Q5ZTdcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanNcIik7IiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxLjQuMVxuICogdXNlLXN1YnNjcmlwdGlvbi5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcbnZhciByZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbi8vXG4vLyBJbiBvcmRlciB0byBhdm9pZCByZW1vdmluZyBhbmQgcmUtYWRkaW5nIHN1YnNjcmlwdGlvbnMgZWFjaCB0aW1lIHRoaXMgaG9vayBpcyBjYWxsZWQsXG4vLyB0aGUgcGFyYW1ldGVycyBwYXNzZWQgdG8gdGhpcyBob29rIHNob3VsZCBiZSBtZW1vaXplZCBpbiBzb21lIHdheeKAk1xuLy8gZWl0aGVyIGJ5IHdyYXBwaW5nIHRoZSBlbnRpcmUgcGFyYW1zIG9iamVjdCB3aXRoIHVzZU1lbW8oKVxuLy8gb3IgYnkgd3JhcHBpbmcgdGhlIGluZGl2aWR1YWwgY2FsbGJhY2tzIHdpdGggdXNlQ2FsbGJhY2soKS5cblxuZnVuY3Rpb24gdXNlU3Vic2NyaXB0aW9uKF9yZWYpIHtcbiAgdmFyIGdldEN1cnJlbnRWYWx1ZSA9IF9yZWYuZ2V0Q3VycmVudFZhbHVlLFxuICAgICAgc3Vic2NyaWJlID0gX3JlZi5zdWJzY3JpYmU7XG5cbiAgLy8gUmVhZCB0aGUgY3VycmVudCB2YWx1ZSBmcm9tIG91ciBzdWJzY3JpcHRpb24uXG4gIC8vIFdoZW4gdGhpcyB2YWx1ZSBjaGFuZ2VzLCB3ZSdsbCBzY2hlZHVsZSBhbiB1cGRhdGUgd2l0aCBSZWFjdC5cbiAgLy8gSXQncyBpbXBvcnRhbnQgdG8gYWxzbyBzdG9yZSB0aGUgaG9vayBwYXJhbXMgc28gdGhhdCB3ZSBjYW4gY2hlY2sgZm9yIHN0YWxlbmVzcy5cbiAgLy8gKFNlZSB0aGUgY29tbWVudCBpbiBjaGVja0ZvclVwZGF0ZXMoKSBiZWxvdyBmb3IgbW9yZSBpbmZvLilcbiAgdmFyIF91c2VTdGF0ZSA9IHJlYWN0LnVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0Q3VycmVudFZhbHVlOiBnZXRDdXJyZW50VmFsdWUsXG4gICAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICAgIHZhbHVlOiBnZXRDdXJyZW50VmFsdWUoKVxuICAgIH07XG4gIH0pLFxuICAgICAgc3RhdGUgPSBfdXNlU3RhdGVbMF0sXG4gICAgICBzZXRTdGF0ZSA9IF91c2VTdGF0ZVsxXTtcblxuICB2YXIgdmFsdWVUb1JldHVybiA9IHN0YXRlLnZhbHVlOyAvLyBJZiBwYXJhbWV0ZXJzIGhhdmUgY2hhbmdlZCBzaW5jZSBvdXIgbGFzdCByZW5kZXIsIHNjaGVkdWxlIGFuIHVwZGF0ZSB3aXRoIGl0cyBjdXJyZW50IHZhbHVlLlxuXG4gIGlmIChzdGF0ZS5nZXRDdXJyZW50VmFsdWUgIT09IGdldEN1cnJlbnRWYWx1ZSB8fCBzdGF0ZS5zdWJzY3JpYmUgIT09IHN1YnNjcmliZSkge1xuICAgIC8vIElmIHRoZSBzdWJzY3JpcHRpb24gaGFzIGJlZW4gdXBkYXRlZCwgd2UnbGwgc2NoZWR1bGUgYW5vdGhlciB1cGRhdGUgd2l0aCBSZWFjdC5cbiAgICAvLyBSZWFjdCB3aWxsIHByb2Nlc3MgdGhpcyB1cGRhdGUgaW1tZWRpYXRlbHksIHNvIHRoZSBvbGQgc3Vic2NyaXB0aW9uIHZhbHVlIHdvbid0IGJlIGNvbW1pdHRlZC5cbiAgICAvLyBJdCBpcyBzdGlsbCBuaWNlIHRvIGF2b2lkIHJldHVybmluZyBhIG1pc21hdGNoZWQgdmFsdWUgdGhvdWdoLCBzbyBsZXQncyBvdmVycmlkZSB0aGUgcmV0dXJuIHZhbHVlLlxuICAgIHZhbHVlVG9SZXR1cm4gPSBnZXRDdXJyZW50VmFsdWUoKTtcbiAgICBzZXRTdGF0ZSh7XG4gICAgICBnZXRDdXJyZW50VmFsdWU6IGdldEN1cnJlbnRWYWx1ZSxcbiAgICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgICAgdmFsdWU6IHZhbHVlVG9SZXR1cm5cbiAgICB9KTtcbiAgfSAvLyBEaXNwbGF5IHRoZSBjdXJyZW50IHZhbHVlIGZvciB0aGlzIGhvb2sgaW4gUmVhY3QgRGV2VG9vbHMuXG5cblxuICByZWFjdC51c2VEZWJ1Z1ZhbHVlKHZhbHVlVG9SZXR1cm4pOyAvLyBJdCBpcyBpbXBvcnRhbnQgbm90IHRvIHN1YnNjcmliZSB3aGlsZSByZW5kZXJpbmcgYmVjYXVzZSB0aGlzIGNhbiBsZWFkIHRvIG1lbW9yeSBsZWFrcy5cbiAgLy8gKExlYXJuIG1vcmUgYXQgcmVhY3Rqcy5vcmcvZG9jcy9zdHJpY3QtbW9kZS5odG1sI2RldGVjdGluZy11bmV4cGVjdGVkLXNpZGUtZWZmZWN0cylcbiAgLy8gSW5zdGVhZCwgd2Ugd2FpdCB1bnRpbCB0aGUgY29tbWl0IHBoYXNlIHRvIGF0dGFjaCBvdXIgaGFuZGxlci5cbiAgLy9cbiAgLy8gV2UgaW50ZW50aW9uYWxseSB1c2UgYSBwYXNzaXZlIGVmZmVjdCAodXNlRWZmZWN0KSByYXRoZXIgdGhhbiBhIHN5bmNocm9ub3VzIG9uZSAodXNlTGF5b3V0RWZmZWN0KVxuICAvLyBzbyB0aGF0IHdlIGRvbid0IHN0cmV0Y2ggdGhlIGNvbW1pdCBwaGFzZS5cbiAgLy8gVGhpcyBhbHNvIGhhcyBhbiBhZGRlZCBiZW5lZml0IHdoZW4gbXVsdGlwbGUgY29tcG9uZW50cyBhcmUgc3Vic2NyaWJlZCB0byB0aGUgc2FtZSBzb3VyY2U6XG4gIC8vIEl0IGFsbG93cyBlYWNoIG9mIHRoZSBldmVudCBoYW5kbGVycyB0byBzYWZlbHkgc2NoZWR1bGUgd29yayB3aXRob3V0IHBvdGVudGlhbGx5IHJlbW92aW5nIGFuIGFub3RoZXIgaGFuZGxlci5cbiAgLy8gKExlYXJuIG1vcmUgYXQgaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9zL2sweXZyNTk3MG8pXG5cbiAgcmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGlkVW5zdWJzY3JpYmUgPSBmYWxzZTtcblxuICAgIHZhciBjaGVja0ZvclVwZGF0ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBJdCdzIHBvc3NpYmxlIHRoYXQgdGhpcyBjYWxsYmFjayB3aWxsIGJlIGludm9rZWQgZXZlbiBhZnRlciBiZWluZyB1bnN1YnNjcmliZWQsXG4gICAgICAvLyBpZiBpdCdzIHJlbW92ZWQgYXMgYSByZXN1bHQgb2YgYSBzdWJzY3JpcHRpb24gZXZlbnQvdXBkYXRlLlxuICAgICAgLy8gSW4gdGhpcyBjYXNlLCBSZWFjdCB3aWxsIGxvZyBhIERFViB3YXJuaW5nIGFib3V0IGFuIHVwZGF0ZSBmcm9tIGFuIHVubW91bnRlZCBjb21wb25lbnQuXG4gICAgICAvLyBXZSBjYW4gYXZvaWQgdHJpZ2dlcmluZyB0aGF0IHdhcm5pbmcgd2l0aCB0aGlzIGNoZWNrLlxuICAgICAgaWYgKGRpZFVuc3Vic2NyaWJlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gV2UgdXNlIGEgc3RhdGUgdXBkYXRlciBmdW5jdGlvbiB0byBhdm9pZCBzY2hlZHVsaW5nIHdvcmsgZm9yIGEgc3RhbGUgc291cmNlLlxuICAgICAgLy8gSG93ZXZlciBpdCdzIGltcG9ydGFudCB0byBlYWdlcmx5IHJlYWQgdGhlIGN1cnJlbnRseSB2YWx1ZSxcbiAgICAgIC8vIHNvIHRoYXQgYWxsIHNjaGVkdWxlZCB3b3JrIHNoYXJlcyB0aGUgc2FtZSB2YWx1ZSAoaW4gdGhlIGV2ZW50IG9mIG11bHRpcGxlIHN1YnNjcmlwdGlvbnMpLlxuICAgICAgLy8gVGhpcyBhdm9pZHMgdmlzdWFsIFwidGVhcmluZ1wiIHdoZW4gYSBtdXRhdGlvbiBoYXBwZW5zIGR1cmluZyBhIChjb25jdXJyZW50KSByZW5kZXIuXG5cblxuICAgICAgdmFyIHZhbHVlID0gZ2V0Q3VycmVudFZhbHVlKCk7XG4gICAgICBzZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICAgIC8vIElnbm9yZSB2YWx1ZXMgZnJvbSBzdGFsZSBzb3VyY2VzIVxuICAgICAgICAvLyBTaW5jZSB3ZSBzdWJzY3JpYmUgYW4gdW5zdWJzY3JpYmUgaW4gYSBwYXNzaXZlIGVmZmVjdCxcbiAgICAgICAgLy8gaXQncyBwb3NzaWJsZSB0aGF0IHRoaXMgY2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkIGZvciBhIHN0YWxlIChwcmV2aW91cykgc3Vic2NyaXB0aW9uLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGF2b2lkcyBzY2hlZHVsaW5nIGFuIHVwZGF0ZSBmb3IgdGhhdCBzdGFsZSBzdWJzY3JpcHRpb24uXG4gICAgICAgIGlmIChwcmV2U3RhdGUuZ2V0Q3VycmVudFZhbHVlICE9PSBnZXRDdXJyZW50VmFsdWUgfHwgcHJldlN0YXRlLnN1YnNjcmliZSAhPT0gc3Vic2NyaWJlKSB7XG4gICAgICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgICAgICAgfSAvLyBTb21lIHN1YnNjcmlwdGlvbnMgd2lsbCBhdXRvLWludm9rZSB0aGUgaGFuZGxlciwgZXZlbiBpZiB0aGUgdmFsdWUgaGFzbid0IGNoYW5nZWQuXG4gICAgICAgIC8vIElmIHRoZSB2YWx1ZSBoYXNuJ3QgY2hhbmdlZCwgbm8gdXBkYXRlIGlzIG5lZWRlZC5cbiAgICAgICAgLy8gUmV0dXJuIHN0YXRlIGFzLWlzIHNvIFJlYWN0IGNhbiBiYWlsIG91dCBhbmQgYXZvaWQgYW4gdW5uZWNlc3NhcnkgcmVuZGVyLlxuXG5cbiAgICAgICAgaWYgKHByZXZTdGF0ZS52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gcHJldlN0YXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9hc3NpZ24oe30sIHByZXZTdGF0ZSwge1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgdW5zdWJzY3JpYmUgPSBzdWJzY3JpYmUoY2hlY2tGb3JVcGRhdGVzKTsgLy8gQmVjYXVzZSB3ZSdyZSBzdWJzY3JpYmluZyBpbiBhIHBhc3NpdmUgZWZmZWN0LFxuICAgIC8vIGl0J3MgcG9zc2libGUgdGhhdCBhbiB1cGRhdGUgaGFzIG9jY3VycmVkIGJldHdlZW4gcmVuZGVyIGFuZCBvdXIgZWZmZWN0IGhhbmRsZXIuXG4gICAgLy8gQ2hlY2sgZm9yIHRoaXMgYW5kIHNjaGVkdWxlIGFuIHVwZGF0ZSBpZiB3b3JrIGhhcyBvY2N1cnJlZC5cblxuICAgIGNoZWNrRm9yVXBkYXRlcygpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBkaWRVbnN1YnNjcmliZSA9IHRydWU7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgIH07XG4gIH0sIFtnZXRDdXJyZW50VmFsdWUsIHN1YnNjcmliZV0pOyAvLyBSZXR1cm4gdGhlIGN1cnJlbnQgdmFsdWUgZm9yIG91ciBjYWxsZXIgdG8gdXNlIHdoaWxlIHJlbmRlcmluZy5cblxuICByZXR1cm4gdmFsdWVUb1JldHVybjtcbn1cblxuZXhwb3J0cy51c2VTdWJzY3JpcHRpb24gPSB1c2VTdWJzY3JpcHRpb247XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvdXNlLXN1YnNjcmlwdGlvbi5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy91c2Utc3Vic2NyaXB0aW9uLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiLypcclxuICogQEF1dGhvcjogcmVubGVpXHJcbiAqIEBEYXRlOiAyMDIwLTA1LTE4IDE3OjI0OjExXHJcbiAqIEBMYXN0RWRpdG9yczogcmVubGVpXHJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjAtMDUtMTggMTc6NTc6NTRcclxuICogQERlc2NyaXB0aW9uOlxyXG4gKi9cclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5jb25zdCBEeW5hbWljQ29tcG9uZW50ID0gZHluYW1pYyhpbXBvcnQoXCIuLi9jb21wb25lbnRzL2hlbGxvXCIpKTtcclxuY29uc3QgRHluYW1pY0NvbXBvbmVudFdpdGhDdXN0b21Mb2FkaW5nID0gZHluYW1pYyhcclxuICBpbXBvcnQoXCIuLi9jb21wb25lbnRzL2hlbGxvMlwiKSxcclxuICB7XHJcbiAgICBsb2FkaW5nOiAoKSA9PiA8cD4uLi4yMTMzMTIxMjMxMzI8L3A+LFxyXG4gIH1cclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8RHluYW1pY0NvbXBvbmVudFdpdGhDdXN0b21Mb2FkaW5nIC8+XHJcbiAgICA8RHluYW1pY0NvbXBvbmVudCAvPiBXZWxjb21lIHRvIEFib3V0IVxyXG4gIDwvZGl2PlxyXG4pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGRsbF9jMmUxMGQxODNiOTUwYTY3ZDllNzsiXSwic291cmNlUm9vdCI6IiJ9