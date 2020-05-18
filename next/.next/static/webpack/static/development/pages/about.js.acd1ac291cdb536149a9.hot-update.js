webpackHotUpdate("static\\development\\pages\\about.js",{

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
 * @LastEditTime: 2020-05-18 17:49:27
 * @Description:
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 22
    }
  }, "Welcome to About!");
});

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9keW5hbWljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2xvYWRhYmxlLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbG9hZGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VzZS1zdWJzY3JpcHRpb24vY2pzL3VzZS1zdWJzY3JpcHRpb24uZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VzZS1zdWJzY3JpcHRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWJvdXQuanMiXSwibmFtZXMiOlsiX19pbXBvcnREZWZhdWx0IiwibW9kIiwiX19lc01vZHVsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwicmVhY3RfMSIsInJlcXVpcmUiLCJsb2FkYWJsZV8xIiwiaXNTZXJ2ZXJTaWRlIiwibm9TU1IiLCJMb2FkYWJsZUluaXRpYWxpemVyIiwibG9hZGFibGVPcHRpb25zIiwid2VicGFjayIsIm1vZHVsZXMiLCJMb2FkaW5nIiwibG9hZGluZyIsImNyZWF0ZUVsZW1lbnQiLCJlcnJvciIsImlzTG9hZGluZyIsInBhc3REZWxheSIsInRpbWVkT3V0IiwiZHluYW1pYyIsImR5bmFtaWNPcHRpb25zIiwib3B0aW9ucyIsImxvYWRhYmxlRm4iLCJtZXNzYWdlIiwic3RhY2siLCJQcm9taXNlIiwibG9hZGVyIiwiYXNzaWduIiwiY29uc29sZSIsIndhcm4iLCJyZW5kZXIiLCJsb2FkZWQiLCJwcm9wcyIsIk1hcCIsImxvYWRNb2R1bGVzIiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJ0aGVuIiwibG9hZGFibGVHZW5lcmF0ZWQiLCJzc3IiLCJfX2ltcG9ydFN0YXIiLCJyZXN1bHQiLCJrIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiUmVhY3QiLCJMb2FkYWJsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiZGlzcGxheU5hbWUiLCJ1c2Vfc3Vic2NyaXB0aW9uXzEiLCJsb2FkYWJsZV9jb250ZXh0XzEiLCJBTExfSU5JVElBTElaRVJTIiwiUkVBRFlfSU5JVElBTElaRVJTIiwiaW5pdGlhbGl6ZWQiLCJsb2FkIiwicHJvbWlzZSIsInN0YXRlIiwiZXJyIiwibG9hZE1hcCIsIm9iaiIsInByb21pc2VzIiwicHVzaCIsInJlcyIsImFsbCIsInJlc29sdmUiLCJjcmVhdGVMb2FkYWJsZUNvbXBvbmVudCIsImxvYWRGbiIsIm9wdHMiLCJkZWxheSIsInRpbWVvdXQiLCJzdWJzY3JpcHRpb24iLCJpbml0Iiwic3ViIiwiTG9hZGFibGVTdWJzY3JpcHRpb24iLCJnZXRDdXJyZW50VmFsdWUiLCJiaW5kIiwic3Vic2NyaWJlIiwicmV0cnkiLCJtb2R1bGVJZHMiLCJpZHMiLCJtb2R1bGVJZCIsImluZGV4T2YiLCJMb2FkYWJsZUNvbXBvbmVudCIsInJlZiIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3Vic2NyaXB0aW9uIiwidXNlSW1wZXJhdGl2ZUhhbmRsZSIsIkFycmF5IiwiaXNBcnJheSIsIm1vZHVsZU5hbWUiLCJ1c2VNZW1vIiwicHJlbG9hZCIsImZvcndhcmRSZWYiLCJfbG9hZEZuIiwiX29wdHMiLCJfY2FsbGJhY2tzIiwiU2V0IiwiX2RlbGF5IiwiX3RpbWVvdXQiLCJfcmVzIiwiX2NsZWFyVGltZW91dHMiLCJfc3RhdGUiLCJzZXRUaW1lb3V0IiwiX3VwZGF0ZSIsInBhcnRpYWwiLCJjYWxsYmFjayIsImNsZWFyVGltZW91dCIsImFkZCIsIkxvYWRhYmxlIiwiTG9hZGFibGVNYXAiLCJFcnJvciIsImZsdXNoSW5pdGlhbGl6ZXJzIiwiaW5pdGlhbGl6ZXJzIiwibGVuZ3RoIiwicG9wIiwicHJlbG9hZEFsbCIsInJlamVjdCIsInByZWxv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bUJBQU8sQ0FBQyw0Q0FBTzs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSxrQ0FBa0M7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOzs7QUFHSCxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCO0FBQ3pCO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQSxpREFBaUQ7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxnQ0FBZ0M7O0FBRW5DO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUM1SGE7O0FBRWIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDO0FBQ0QsbUJBQW1CLG1CQUFPLENBQUMsa0hBQXVDO0FBQ2xFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTs7Ozs7OztBQU9BO0FBQ2U7QUFBQSxTQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQU47QUFBQSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhYm91dC5qcy5hY2QxYWMyOTFjZGI1MzYxNDlhOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5jb25zdCBsb2FkYWJsZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2xvYWRhYmxlXCIpKTtcbmNvbnN0IGlzU2VydmVyU2lkZSA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gbm9TU1IoTG9hZGFibGVJbml0aWFsaXplciwgbG9hZGFibGVPcHRpb25zKSB7XG4gICAgLy8gUmVtb3Zpbmcgd2VicGFjayBhbmQgbW9kdWxlcyBtZWFucyByZWFjdC1sb2FkYWJsZSB3b24ndCB0cnkgcHJlbG9hZGluZ1xuICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMud2VicGFjaztcbiAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLm1vZHVsZXM7XG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNjZXNhcnkgdG8gcHJldmVudCByZWFjdC1sb2FkYWJsZSBmcm9tIGluaXRpYWxpemluZyBvbiB0aGUgc2VydmVyXG4gICAgaWYgKCFpc1NlcnZlclNpZGUpIHtcbiAgICAgICAgcmV0dXJuIExvYWRhYmxlSW5pdGlhbGl6ZXIobG9hZGFibGVPcHRpb25zKTtcbiAgICB9XG4gICAgY29uc3QgTG9hZGluZyA9IGxvYWRhYmxlT3B0aW9ucy5sb2FkaW5nO1xuICAgIC8vIFRoaXMgd2lsbCBvbmx5IGJlIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXIgc2lkZVxuICAgIHJldHVybiAoKSA9PiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZywgeyBlcnJvcjogbnVsbCwgaXNMb2FkaW5nOiB0cnVlLCBwYXN0RGVsYXk6IGZhbHNlLCB0aW1lZE91dDogZmFsc2UgfSkpO1xufVxuZXhwb3J0cy5ub1NTUiA9IG5vU1NSO1xuLy8gZnVuY3Rpb24gZHluYW1pYzxQID0ge30sIE8gZXh0ZW5kcyBEeW5hbWljT3B0aW9ucz4ob3B0aW9uczogTyk6XG5mdW5jdGlvbiBkeW5hbWljKGR5bmFtaWNPcHRpb25zLCBvcHRpb25zKSB7XG4gICAgbGV0IGxvYWRhYmxlRm4gPSBsb2FkYWJsZV8xLmRlZmF1bHQ7XG4gICAgbGV0IGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgICAgLy8gQSBsb2FkaW5nIGNvbXBvbmVudCBpcyBub3QgcmVxdWlyZWQsIHNvIHdlIGRlZmF1bHQgaXRcbiAgICAgICAgbG9hZGluZzogKHsgZXJyb3IsIGlzTG9hZGluZywgcGFzdERlbGF5IH0pID0+IHtcbiAgICAgICAgICAgIGlmICghcGFzdERlbGF5KVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLnN0YWNrKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0sXG4gICAgfTtcbiAgICAvLyBTdXBwb3J0IGZvciBkaXJlY3QgaW1wb3J0KCksIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgICAvLyBOb3RlIHRoYXQgdGhpcyBpcyBvbmx5IGtlcHQgZm9yIHRoZSBlZGdlIGNhc2Ugd2hlcmUgc29tZW9uZSBpcyBwYXNzaW5nIGluIGEgcHJvbWlzZSBhcyBmaXJzdCBhcmd1bWVudFxuICAgIC8vIFRoZSByZWFjdC1sb2FkYWJsZSBiYWJlbCBwbHVnaW4gd2lsbCB0dXJuIGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKSBpbnRvIGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAgIC8vIFRvIG1ha2Ugc3VyZSB3ZSBkb24ndCBleGVjdXRlIHRoZSBpbXBvcnQgd2l0aG91dCByZW5kZXJpbmcgZmlyc3RcbiAgICBpZiAoZHluYW1pY09wdGlvbnMgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucy5sb2FkZXIgPSAoKSA9PiBkeW5hbWljT3B0aW9ucztcbiAgICAgICAgLy8gU3VwcG9ydCBmb3IgaGF2aW5nIGltcG9ydCBhcyBhIGZ1bmN0aW9uLCBlZzogZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBkeW5hbWljT3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMubG9hZGVyID0gZHluYW1pY09wdGlvbnM7XG4gICAgICAgIC8vIFN1cHBvcnQgZm9yIGhhdmluZyBmaXJzdCBhcmd1bWVudCBiZWluZyBvcHRpb25zLCBlZzogZHluYW1pYyh7bG9hZGVyOiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyl9KVxuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgZHluYW1pY09wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgbG9hZGFibGVPcHRpb25zKSwgZHluYW1pY09wdGlvbnMpO1xuICAgIH1cbiAgICAvLyBTdXBwb3J0IGZvciBwYXNzaW5nIG9wdGlvbnMsIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSwge2xvYWRpbmc6ICgpID0+IDxwPkxvYWRpbmcgc29tZXRoaW5nPC9wPn0pXG4gICAgbG9hZGFibGVPcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBsb2FkYWJsZU9wdGlvbnMpLCBvcHRpb25zKTtcbiAgICBpZiAodHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAhKGR5bmFtaWNPcHRpb25zIGluc3RhbmNlb2YgUHJvbWlzZSkpIHtcbiAgICAgICAgLy8gc2hvdyBkZXByZWNhdGlvbiB3YXJuaW5nIGZvciBgbW9kdWxlc2Aga2V5IGluIGRldmVsb3BtZW50XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAoZHluYW1pY09wdGlvbnMubW9kdWxlcykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignVGhlIG1vZHVsZXMgb3B0aW9uIGZvciBuZXh0L2R5bmFtaWMgaGFzIGJlZW4gZGVwcmVjYXRlZC4gU2VlIGhlcmUgZm9yIG1vcmUgaW5mbyBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvbmV4dC1keW5hbWljLW1vZHVsZXMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBTdXBwb3J0IGZvciBgcmVuZGVyYCB3aGVuIHVzaW5nIGEgbWFwcGluZywgZWc6IGBkeW5hbWljKHsgbW9kdWxlczogKCkgPT4ge3JldHVybiB7SGVsbG9Xb3JsZDogaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpfSwgcmVuZGVyKHByb3BzLCBsb2FkZWQpIHt9IH0gfSlcbiAgICAgICAgaWYgKGR5bmFtaWNPcHRpb25zLnJlbmRlcikge1xuICAgICAgICAgICAgbG9hZGFibGVPcHRpb25zLnJlbmRlciA9IChsb2FkZWQsIHByb3BzKSA9PiBkeW5hbWljT3B0aW9ucy5yZW5kZXIocHJvcHMsIGxvYWRlZCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3VwcG9ydCBmb3IgYG1vZHVsZXNgIHdoZW4gdXNpbmcgYSBtYXBwaW5nLCBlZzogYGR5bmFtaWMoeyBtb2R1bGVzOiAoKSA9PiB7cmV0dXJuIHtIZWxsb1dvcmxkOiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyl9LCByZW5kZXIocHJvcHMsIGxvYWRlZCkge30gfSB9KVxuICAgICAgICBpZiAoZHluYW1pY09wdGlvbnMubW9kdWxlcykge1xuICAgICAgICAgICAgbG9hZGFibGVGbiA9IGxvYWRhYmxlXzEuZGVmYXVsdC5NYXA7XG4gICAgICAgICAgICBjb25zdCBsb2FkTW9kdWxlcyA9IHt9O1xuICAgICAgICAgICAgY29uc3QgbW9kdWxlcyA9IGR5bmFtaWNPcHRpb25zLm1vZHVsZXMoKTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG1vZHVsZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG1vZHVsZXNba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZE1vZHVsZXNba2V5XSA9ICgpID0+IHZhbHVlLnRoZW4oKG1vZCkgPT4gbW9kLmRlZmF1bHQgfHwgbW9kKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsb2FkTW9kdWxlc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxvYWRhYmxlT3B0aW9ucy5sb2FkZXIgPSBsb2FkTW9kdWxlcztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBjb21pbmcgZnJvbSBidWlsZC9iYWJlbC9wbHVnaW5zL3JlYWN0LWxvYWRhYmxlLXBsdWdpbi5qc1xuICAgIGlmIChsb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWQpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBsb2FkYWJsZU9wdGlvbnMpLCBsb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWQpO1xuICAgICAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkO1xuICAgIH1cbiAgICAvLyBzdXBwb3J0IGZvciBkaXNhYmxpbmcgc2VydmVyIHNpZGUgcmVuZGVyaW5nLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyksIHtzc3I6IGZhbHNlfSlcbiAgICBpZiAodHlwZW9mIGxvYWRhYmxlT3B0aW9ucy5zc3IgPT09ICdib29sZWFuJykge1xuICAgICAgICBpZiAoIWxvYWRhYmxlT3B0aW9ucy5zc3IpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMuc3NyO1xuICAgICAgICAgICAgcmV0dXJuIG5vU1NSKGxvYWRhYmxlRm4sIGxvYWRhYmxlT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5zc3I7XG4gICAgfVxuICAgIHJldHVybiBsb2FkYWJsZUZuKGxvYWRhYmxlT3B0aW9ucyk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBkeW5hbWljO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZWFjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xuZXhwb3J0cy5Mb2FkYWJsZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBleHBvcnRzLkxvYWRhYmxlQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdMb2FkYWJsZUNvbnRleHQnO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbkBjb3B5cmlnaHQgKGMpIDIwMTctcHJlc2VudCBKYW1lcyBLeWxlIDxtZUB0aGVqYW1lc2t5bGUuY29tPlxuIE1JVCBMaWNlbnNlXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nXG5hIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcblwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xud2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvXG5wZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG9cbnRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbkVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbk5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkVcbkxJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT05cbk9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTlxuV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkVcbiovXG4vLyBodHRwczovL2dpdGh1Yi5jb20vamFtaWVidWlsZHMvcmVhY3QtbG9hZGFibGUvYmxvYi92NS41LjAvc3JjL2luZGV4LmpzXG4vLyBNb2RpZmllZCB0byBiZSBjb21wYXRpYmxlIHdpdGggd2VicGFjayA0IC8gTmV4dC5qc1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuY29uc3QgdXNlX3N1YnNjcmlwdGlvbl8xID0gcmVxdWlyZShcInVzZS1zdWJzY3JpcHRpb25cIik7XG5jb25zdCBsb2FkYWJsZV9jb250ZXh0XzEgPSByZXF1aXJlKFwiLi9sb2FkYWJsZS1jb250ZXh0XCIpO1xuY29uc3QgQUxMX0lOSVRJQUxJWkVSUyA9IFtdO1xuY29uc3QgUkVBRFlfSU5JVElBTElaRVJTID0gW107XG5sZXQgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbmZ1bmN0aW9uIGxvYWQobG9hZGVyKSB7XG4gICAgbGV0IHByb21pc2UgPSBsb2FkZXIoKTtcbiAgICBsZXQgc3RhdGUgPSB7XG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIGxvYWRlZDogbnVsbCxcbiAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgfTtcbiAgICBzdGF0ZS5wcm9taXNlID0gcHJvbWlzZVxuICAgICAgICAudGhlbihsb2FkZWQgPT4ge1xuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLmxvYWRlZCA9IGxvYWRlZDtcbiAgICAgICAgcmV0dXJuIGxvYWRlZDtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5lcnJvciA9IGVycjtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICAgIHJldHVybiBzdGF0ZTtcbn1cbmZ1bmN0aW9uIGxvYWRNYXAob2JqKSB7XG4gICAgbGV0IHN0YXRlID0ge1xuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgbG9hZGVkOiB7fSxcbiAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgfTtcbiAgICBsZXQgcHJvbWlzZXMgPSBbXTtcbiAgICB0cnkge1xuICAgICAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBsb2FkKG9ialtrZXldKTtcbiAgICAgICAgICAgIGlmICghcmVzdWx0LmxvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5sb2FkZWRba2V5XSA9IHJlc3VsdC5sb2FkZWQ7XG4gICAgICAgICAgICAgICAgc3RhdGUuZXJyb3IgPSByZXN1bHQuZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb21pc2VzLnB1c2gocmVzdWx0LnByb21pc2UpO1xuICAgICAgICAgICAgcmVzdWx0LnByb21pc2VcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLmxvYWRlZFtrZXldID0gcmVzO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5lcnJvciA9IGVycjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBzdGF0ZS5lcnJvciA9IGVycjtcbiAgICB9XG4gICAgc3RhdGUucHJvbWlzZSA9IFByb21pc2UuYWxsKHByb21pc2VzKVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICAgIHJldHVybiBzdGF0ZTtcbn1cbmZ1bmN0aW9uIHJlc29sdmUob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iai5kZWZhdWx0IDogb2JqO1xufVxuZnVuY3Rpb24gcmVuZGVyKGxvYWRlZCwgcHJvcHMpIHtcbiAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVzb2x2ZShsb2FkZWQpLCBwcm9wcyk7XG59XG5mdW5jdGlvbiBjcmVhdGVMb2FkYWJsZUNvbXBvbmVudChsb2FkRm4sIG9wdGlvbnMpIHtcbiAgICBsZXQgb3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBsb2FkZXI6IG51bGwsXG4gICAgICAgIGxvYWRpbmc6IG51bGwsXG4gICAgICAgIGRlbGF5OiAyMDAsXG4gICAgICAgIHRpbWVvdXQ6IG51bGwsXG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICB3ZWJwYWNrOiBudWxsLFxuICAgICAgICBtb2R1bGVzOiBudWxsLFxuICAgIH0sIG9wdGlvbnMpO1xuICAgIGxldCBzdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGlmICghc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBzdWIgPSBuZXcgTG9hZGFibGVTdWJzY3JpcHRpb24obG9hZEZuLCBvcHRzKTtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IHtcbiAgICAgICAgICAgICAgICBnZXRDdXJyZW50VmFsdWU6IHN1Yi5nZXRDdXJyZW50VmFsdWUuYmluZChzdWIpLFxuICAgICAgICAgICAgICAgIHN1YnNjcmliZTogc3ViLnN1YnNjcmliZS5iaW5kKHN1YiksXG4gICAgICAgICAgICAgICAgcmV0cnk6IHN1Yi5yZXRyeS5iaW5kKHN1YiksXG4gICAgICAgICAgICAgICAgcHJvbWlzZTogc3ViLnByb21pc2UuYmluZChzdWIpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uLnByb21pc2UoKTtcbiAgICB9XG4gICAgLy8gU2VydmVyIG9ubHlcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgQUxMX0lOSVRJQUxJWkVSUy5wdXNoKGluaXQpO1xuICAgIH1cbiAgICAvLyBDbGllbnQgb25seVxuICAgIGlmICghaW5pdGlhbGl6ZWQgJiZcbiAgICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgdHlwZW9mIG9wdHMud2VicGFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zdCBtb2R1bGVJZHMgPSBvcHRzLndlYnBhY2soKTtcbiAgICAgICAgUkVBRFlfSU5JVElBTElaRVJTLnB1c2goaWRzID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbW9kdWxlSWQgb2YgbW9kdWxlSWRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlkcy5pbmRleE9mKG1vZHVsZUlkKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluaXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBMb2FkYWJsZUNvbXBvbmVudCA9IChwcm9wcywgcmVmKSA9PiB7XG4gICAgICAgIGluaXQoKTtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHJlYWN0XzEuZGVmYXVsdC51c2VDb250ZXh0KGxvYWRhYmxlX2NvbnRleHRfMS5Mb2FkYWJsZUNvbnRleHQpO1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHVzZV9zdWJzY3JpcHRpb25fMS51c2VTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoe1xuICAgICAgICAgICAgcmV0cnk6IHN1YnNjcmlwdGlvbi5yZXRyeSxcbiAgICAgICAgfSksIFtdKTtcbiAgICAgICAgaWYgKGNvbnRleHQgJiYgQXJyYXkuaXNBcnJheShvcHRzLm1vZHVsZXMpKSB7XG4gICAgICAgICAgICBvcHRzLm1vZHVsZXMuZm9yRWFjaChtb2R1bGVOYW1lID0+IHtcbiAgICAgICAgICAgICAgICBjb250ZXh0KG1vZHVsZU5hbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5sb2FkaW5nIHx8IHN0YXRlLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG9wdHMubG9hZGluZywge1xuICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IHN0YXRlLmxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgIHBhc3REZWxheTogc3RhdGUucGFzdERlbGF5LFxuICAgICAgICAgICAgICAgICAgICB0aW1lZE91dDogc3RhdGUudGltZWRPdXQsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBzdGF0ZS5lcnJvcixcbiAgICAgICAgICAgICAgICAgICAgcmV0cnk6IHN1YnNjcmlwdGlvbi5yZXRyeSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXRlLmxvYWRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcHRzLnJlbmRlcihzdGF0ZS5sb2FkZWQsIHByb3BzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbcHJvcHMsIHN0YXRlXSk7XG4gICAgfTtcbiAgICBMb2FkYWJsZUNvbXBvbmVudC5wcmVsb2FkID0gKCkgPT4gaW5pdCgpO1xuICAgIExvYWRhYmxlQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gJ0xvYWRhYmxlQ29tcG9uZW50JztcbiAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmZvcndhcmRSZWYoTG9hZGFibGVDb21wb25lbnQpO1xufVxuY2xhc3MgTG9hZGFibGVTdWJzY3JpcHRpb24ge1xuICAgIGNvbnN0cnVjdG9yKGxvYWRGbiwgb3B0cykge1xuICAgICAgICB0aGlzLl9sb2FkRm4gPSBsb2FkRm47XG4gICAgICAgIHRoaXMuX29wdHMgPSBvcHRzO1xuICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuX2RlbGF5ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fdGltZW91dCA9IG51bGw7XG4gICAgICAgIHRoaXMucmV0cnkoKTtcbiAgICB9XG4gICAgcHJvbWlzZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlcy5wcm9taXNlO1xuICAgIH1cbiAgICByZXRyeSgpIHtcbiAgICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0cygpO1xuICAgICAgICB0aGlzLl9yZXMgPSB0aGlzLl9sb2FkRm4odGhpcy5fb3B0cy5sb2FkZXIpO1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBhc3REZWxheTogZmFsc2UsXG4gICAgICAgICAgICB0aW1lZE91dDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHsgX3JlczogcmVzLCBfb3B0czogb3B0cyB9ID0gdGhpcztcbiAgICAgICAgaWYgKHJlcy5sb2FkaW5nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdHMuZGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdHMuZGVsYXkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUucGFzdERlbGF5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RlbGF5ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3REZWxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LCBvcHRzLmRlbGF5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdHMudGltZW91dCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZSh7IHRpbWVkT3V0OiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIH0sIG9wdHMudGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcmVzLnByb21pc2VcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZSh7fSk7XG4gICAgICAgICAgICB0aGlzLl9jbGVhclRpbWVvdXRzKCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaGFuZGxlLWNhbGxiYWNrLWVyclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGUoe30pO1xuICAgICAgICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0cygpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fdXBkYXRlKHt9KTtcbiAgICB9XG4gICAgX3VwZGF0ZShwYXJ0aWFsKSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX3N0YXRlKSwgeyBlcnJvcjogdGhpcy5fcmVzLmVycm9yLCBsb2FkZWQ6IHRoaXMuX3Jlcy5sb2FkZWQsIGxvYWRpbmc6IHRoaXMuX3Jlcy5sb2FkaW5nIH0pLCBwYXJ0aWFsKTtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2soKSk7XG4gICAgfVxuICAgIF9jbGVhclRpbWVvdXRzKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGVsYXkpO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG4gICAgfVxuICAgIGdldEN1cnJlbnRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICAgIH1cbiAgICBzdWJzY3JpYmUoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFja3MuZGVsZXRlKGNhbGxiYWNrKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5mdW5jdGlvbiBMb2FkYWJsZShvcHRzKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUxvYWRhYmxlQ29tcG9uZW50KGxvYWQsIG9wdHMpO1xufVxuZnVuY3Rpb24gTG9hZGFibGVNYXAob3B0cykge1xuICAgIGlmICh0eXBlb2Ygb3B0cy5yZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMb2FkYWJsZU1hcCByZXF1aXJlcyBhIGByZW5kZXIobG9hZGVkLCBwcm9wcylgIGZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVMb2FkYWJsZUNvbXBvbmVudChsb2FkTWFwLCBvcHRzKTtcbn1cbkxvYWRhYmxlLk1hcCA9IExvYWRhYmxlTWFwO1xuZnVuY3Rpb24gZmx1c2hJbml0aWFsaXplcnMoaW5pdGlhbGl6ZXJzLCBpZHMpIHtcbiAgICBsZXQgcHJvbWlzZXMgPSBbXTtcbiAgICB3aGlsZSAoaW5pdGlhbGl6ZXJzLmxlbmd0aCkge1xuICAgICAgICBsZXQgaW5pdCA9IGluaXRpYWxpemVycy5wb3AoKTtcbiAgICAgICAgcHJvbWlzZXMucHVzaChpbml0KGlkcykpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgICBpZiAoaW5pdGlhbGl6ZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZsdXNoSW5pdGlhbGl6ZXJzKGluaXRpYWxpemVycywgaWRzKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuTG9hZGFibGUucHJlbG9hZEFsbCA9ICgpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBmbHVzaEluaXRpYWxpemVycyhBTExfSU5JVElBTElaRVJTKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgfSk7XG59O1xuTG9hZGFibGUucHJlbG9hZFJlYWR5ID0gKGlkcyA9IFtdKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSAoKSA9PiB7XG4gICAgICAgICAgICBpbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICB9O1xuICAgICAgICAvLyBXZSBhbHdheXMgd2lsbCByZXNvbHZlLCBlcnJvcnMgc2hvdWxkIGJlIGhhbmRsZWQgd2l0aGluIGxvYWRpbmcgVUlzLlxuICAgICAgICBmbHVzaEluaXRpYWxpemVycyhSRUFEWV9JTklUSUFMSVpFUlMsIGlkcykudGhlbihyZXMsIHJlcyk7XG4gICAgfSk7XG59O1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93Ll9fTkVYVF9QUkVMT0FEUkVBRFkgPSBMb2FkYWJsZS5wcmVsb2FkUmVhZHk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBMb2FkYWJsZTtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MS40LjFcbiAqIHVzZS1zdWJzY3JpcHRpb24uZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG52YXIgcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG4vL1xuLy8gSW4gb3JkZXIgdG8gYXZvaWQgcmVtb3ZpbmcgYW5kIHJlLWFkZGluZyBzdWJzY3JpcHRpb25zIGVhY2ggdGltZSB0aGlzIGhvb2sgaXMgY2FsbGVkLFxuLy8gdGhlIHBhcmFtZXRlcnMgcGFzc2VkIHRvIHRoaXMgaG9vayBzaG91bGQgYmUgbWVtb2l6ZWQgaW4gc29tZSB3YXnigJNcbi8vIGVpdGhlciBieSB3cmFwcGluZyB0aGUgZW50aXJlIHBhcmFtcyBvYmplY3Qgd2l0aCB1c2VNZW1vKClcbi8vIG9yIGJ5IHdyYXBwaW5nIHRoZSBpbmRpdmlkdWFsIGNhbGxiYWNrcyB3aXRoIHVzZUNhbGxiYWNrKCkuXG5cbmZ1bmN0aW9uIHVzZVN1YnNjcmlwdGlvbihfcmVmKSB7XG4gIHZhciBnZXRDdXJyZW50VmFsdWUgPSBfcmVmLmdldEN1cnJlbnRWYWx1ZSxcbiAgICAgIHN1YnNjcmliZSA9IF9yZWYuc3Vic2NyaWJlO1xuXG4gIC8vIFJlYWQgdGhlIGN1cnJlbnQgdmFsdWUgZnJvbSBvdXIgc3Vic2NyaXB0aW9uLlxuICAvLyBXaGVuIHRoaXMgdmFsdWUgY2hhbmdlcywgd2UnbGwgc2NoZWR1bGUgYW4gdXBkYXRlIHdpdGggUmVhY3QuXG4gIC8vIEl0J3MgaW1wb3J0YW50IHRvIGFsc28gc3RvcmUgdGhlIGhvb2sgcGFyYW1zIHNvIHRoYXQgd2UgY2FuIGNoZWNrIGZvciBzdGFsZW5lc3MuXG4gIC8vIChTZWUgdGhlIGNvbW1lbnQgaW4gY2hlY2tGb3JVcGRhdGVzKCkgYmVsb3cgZm9yIG1vcmUgaW5mby4pXG4gIHZhciBfdXNlU3RhdGUgPSByZWFjdC51c2VTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdldEN1cnJlbnRWYWx1ZTogZ2V0Q3VycmVudFZhbHVlLFxuICAgICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgICB2YWx1ZTogZ2V0Q3VycmVudFZhbHVlKClcbiAgICB9O1xuICB9KSxcbiAgICAgIHN0YXRlID0gX3VzZVN0YXRlWzBdLFxuICAgICAgc2V0U3RhdGUgPSBfdXNlU3RhdGVbMV07XG5cbiAgdmFyIHZhbHVlVG9SZXR1cm4gPSBzdGF0ZS52YWx1ZTsgLy8gSWYgcGFyYW1ldGVycyBoYXZlIGNoYW5nZWQgc2luY2Ugb3VyIGxhc3QgcmVuZGVyLCBzY2hlZHVsZSBhbiB1cGRhdGUgd2l0aCBpdHMgY3VycmVudCB2YWx1ZS5cblxuICBpZiAoc3RhdGUuZ2V0Q3VycmVudFZhbHVlICE9PSBnZXRDdXJyZW50VmFsdWUgfHwgc3RhdGUuc3Vic2NyaWJlICE9PSBzdWJzY3JpYmUpIHtcbiAgICAvLyBJZiB0aGUgc3Vic2NyaXB0aW9uIGhhcyBiZWVuIHVwZGF0ZWQsIHdlJ2xsIHNjaGVkdWxlIGFub3RoZXIgdXBkYXRlIHdpdGggUmVhY3QuXG4gICAgLy8gUmVhY3Qgd2lsbCBwcm9jZXNzIHRoaXMgdXBkYXRlIGltbWVkaWF0ZWx5LCBzbyB0aGUgb2xkIHN1YnNjcmlwdGlvbiB2YWx1ZSB3b24ndCBiZSBjb21taXR0ZWQuXG4gICAgLy8gSXQgaXMgc3RpbGwgbmljZSB0byBhdm9pZCByZXR1cm5pbmcgYSBtaXNtYXRjaGVkIHZhbHVlIHRob3VnaCwgc28gbGV0J3Mgb3ZlcnJpZGUgdGhlIHJldHVybiB2YWx1ZS5cbiAgICB2YWx1ZVRvUmV0dXJuID0gZ2V0Q3VycmVudFZhbHVlKCk7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgZ2V0Q3VycmVudFZhbHVlOiBnZXRDdXJyZW50VmFsdWUsXG4gICAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICAgIHZhbHVlOiB2YWx1ZVRvUmV0dXJuXG4gICAgfSk7XG4gIH0gLy8gRGlzcGxheSB0aGUgY3VycmVudCB2YWx1ZSBmb3IgdGhpcyBob29rIGluIFJlYWN0IERldlRvb2xzLlxuXG5cbiAgcmVhY3QudXNlRGVidWdWYWx1ZSh2YWx1ZVRvUmV0dXJuKTsgLy8gSXQgaXMgaW1wb3J0YW50IG5vdCB0byBzdWJzY3JpYmUgd2hpbGUgcmVuZGVyaW5nIGJlY2F1c2UgdGhpcyBjYW4gbGVhZCB0byBtZW1vcnkgbGVha3MuXG4gIC8vIChMZWFybiBtb3JlIGF0IHJlYWN0anMub3JnL2RvY3Mvc3RyaWN0LW1vZGUuaHRtbCNkZXRlY3RpbmctdW5leHBlY3RlZC1zaWRlLWVmZmVjdHMpXG4gIC8vIEluc3RlYWQsIHdlIHdhaXQgdW50aWwgdGhlIGNvbW1pdCBwaGFzZSB0byBhdHRhY2ggb3VyIGhhbmRsZXIuXG4gIC8vXG4gIC8vIFdlIGludGVudGlvbmFsbHkgdXNlIGEgcGFzc2l2ZSBlZmZlY3QgKHVzZUVmZmVjdCkgcmF0aGVyIHRoYW4gYSBzeW5jaHJvbm91cyBvbmUgKHVzZUxheW91dEVmZmVjdClcbiAgLy8gc28gdGhhdCB3ZSBkb24ndCBzdHJldGNoIHRoZSBjb21taXQgcGhhc2UuXG4gIC8vIFRoaXMgYWxzbyBoYXMgYW4gYWRkZWQgYmVuZWZpdCB3aGVuIG11bHRpcGxlIGNvbXBvbmVudHMgYXJlIHN1YnNjcmliZWQgdG8gdGhlIHNhbWUgc291cmNlOlxuICAvLyBJdCBhbGxvd3MgZWFjaCBvZiB0aGUgZXZlbnQgaGFuZGxlcnMgdG8gc2FmZWx5IHNjaGVkdWxlIHdvcmsgd2l0aG91dCBwb3RlbnRpYWxseSByZW1vdmluZyBhbiBhbm90aGVyIGhhbmRsZXIuXG4gIC8vIChMZWFybiBtb3JlIGF0IGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9rMHl2cjU5NzBvKVxuXG4gIHJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRpZFVuc3Vic2NyaWJlID0gZmFsc2U7XG5cbiAgICB2YXIgY2hlY2tGb3JVcGRhdGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gSXQncyBwb3NzaWJsZSB0aGF0IHRoaXMgY2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkIGV2ZW4gYWZ0ZXIgYmVpbmcgdW5zdWJzY3JpYmVkLFxuICAgICAgLy8gaWYgaXQncyByZW1vdmVkIGFzIGEgcmVzdWx0IG9mIGEgc3Vic2NyaXB0aW9uIGV2ZW50L3VwZGF0ZS5cbiAgICAgIC8vIEluIHRoaXMgY2FzZSwgUmVhY3Qgd2lsbCBsb2cgYSBERVYgd2FybmluZyBhYm91dCBhbiB1cGRhdGUgZnJvbSBhbiB1bm1vdW50ZWQgY29tcG9uZW50LlxuICAgICAgLy8gV2UgY2FuIGF2b2lkIHRyaWdnZXJpbmcgdGhhdCB3YXJuaW5nIHdpdGggdGhpcyBjaGVjay5cbiAgICAgIGlmIChkaWRVbnN1YnNjcmliZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIFdlIHVzZSBhIHN0YXRlIHVwZGF0ZXIgZnVuY3Rpb24gdG8gYXZvaWQgc2NoZWR1bGluZyB3b3JrIGZvciBhIHN0YWxlIHNvdXJjZS5cbiAgICAgIC8vIEhvd2V2ZXIgaXQncyBpbXBvcnRhbnQgdG8gZWFnZXJseSByZWFkIHRoZSBjdXJyZW50bHkgdmFsdWUsXG4gICAgICAvLyBzbyB0aGF0IGFsbCBzY2hlZHVsZWQgd29yayBzaGFyZXMgdGhlIHNhbWUgdmFsdWUgKGluIHRoZSBldmVudCBvZiBtdWx0aXBsZSBzdWJzY3JpcHRpb25zKS5cbiAgICAgIC8vIFRoaXMgYXZvaWRzIHZpc3VhbCBcInRlYXJpbmdcIiB3aGVuIGEgbXV0YXRpb24gaGFwcGVucyBkdXJpbmcgYSAoY29uY3VycmVudCkgcmVuZGVyLlxuXG5cbiAgICAgIHZhciB2YWx1ZSA9IGdldEN1cnJlbnRWYWx1ZSgpO1xuICAgICAgc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgICAvLyBJZ25vcmUgdmFsdWVzIGZyb20gc3RhbGUgc291cmNlcyFcbiAgICAgICAgLy8gU2luY2Ugd2Ugc3Vic2NyaWJlIGFuIHVuc3Vic2NyaWJlIGluIGEgcGFzc2l2ZSBlZmZlY3QsXG4gICAgICAgIC8vIGl0J3MgcG9zc2libGUgdGhhdCB0aGlzIGNhbGxiYWNrIHdpbGwgYmUgaW52b2tlZCBmb3IgYSBzdGFsZSAocHJldmlvdXMpIHN1YnNjcmlwdGlvbi5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBhdm9pZHMgc2NoZWR1bGluZyBhbiB1cGRhdGUgZm9yIHRoYXQgc3RhbGUgc3Vic2NyaXB0aW9uLlxuICAgICAgICBpZiAocHJldlN0YXRlLmdldEN1cnJlbnRWYWx1ZSAhPT0gZ2V0Q3VycmVudFZhbHVlIHx8IHByZXZTdGF0ZS5zdWJzY3JpYmUgIT09IHN1YnNjcmliZSkge1xuICAgICAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gICAgICAgIH0gLy8gU29tZSBzdWJzY3JpcHRpb25zIHdpbGwgYXV0by1pbnZva2UgdGhlIGhhbmRsZXIsIGV2ZW4gaWYgdGhlIHZhbHVlIGhhc24ndCBjaGFuZ2VkLlxuICAgICAgICAvLyBJZiB0aGUgdmFsdWUgaGFzbid0IGNoYW5nZWQsIG5vIHVwZGF0ZSBpcyBuZWVkZWQuXG4gICAgICAgIC8vIFJldHVybiBzdGF0ZSBhcy1pcyBzbyBSZWFjdCBjYW4gYmFpbCBvdXQgYW5kIGF2b2lkIGFuIHVubmVjZXNzYXJ5IHJlbmRlci5cblxuXG4gICAgICAgIGlmIChwcmV2U3RhdGUudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfYXNzaWduKHt9LCBwcmV2U3RhdGUsIHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIHVuc3Vic2NyaWJlID0gc3Vic2NyaWJlKGNoZWNrRm9yVXBkYXRlcyk7IC8vIEJlY2F1c2Ugd2UncmUgc3Vic2NyaWJpbmcgaW4gYSBwYXNzaXZlIGVmZmVjdCxcbiAgICAvLyBpdCdzIHBvc3NpYmxlIHRoYXQgYW4gdXBkYXRlIGhhcyBvY2N1cnJlZCBiZXR3ZWVuIHJlbmRlciBhbmQgb3VyIGVmZmVjdCBoYW5kbGVyLlxuICAgIC8vIENoZWNrIGZvciB0aGlzIGFuZCBzY2hlZHVsZSBhbiB1cGRhdGUgaWYgd29yayBoYXMgb2NjdXJyZWQuXG5cbiAgICBjaGVja0ZvclVwZGF0ZXMoKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgZGlkVW5zdWJzY3JpYmUgPSB0cnVlO1xuICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICB9LCBbZ2V0Q3VycmVudFZhbHVlLCBzdWJzY3JpYmVdKTsgLy8gUmV0dXJuIHRoZSBjdXJyZW50IHZhbHVlIGZvciBvdXIgY2FsbGVyIHRvIHVzZSB3aGlsZSByZW5kZXJpbmcuXG5cbiAgcmV0dXJuIHZhbHVlVG9SZXR1cm47XG59XG5cbmV4cG9ydHMudXNlU3Vic2NyaXB0aW9uID0gdXNlU3Vic2NyaXB0aW9uO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3VzZS1zdWJzY3JpcHRpb24ucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvdXNlLXN1YnNjcmlwdGlvbi5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLypcclxuICogQEF1dGhvcjogcmVubGVpXHJcbiAqIEBEYXRlOiAyMDIwLTA1LTE4IDE3OjI0OjExXHJcbiAqIEBMYXN0RWRpdG9yczogcmVubGVpXHJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjAtMDUtMTggMTc6NDk6MjdcclxuICogQERlc2NyaXB0aW9uOlxyXG4gKi9cclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiA8cD5XZWxjb21lIHRvIEFib3V0ITwvcD47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=