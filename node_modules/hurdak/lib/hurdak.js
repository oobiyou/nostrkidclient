(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("uuid"));
	else if(typeof define === 'function' && define.amd)
		define("hurdak", ["uuid"], factory);
	else if(typeof exports === 'object')
		exports["hurdak"] = factory(require("uuid"));
	else
		root["hurdak"] = factory(root["uuid"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_126__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var curryN = function curryN(n, f) {
  return function () {
    for (var _len = arguments.length, a = Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    return a.length >= n ? f.apply(undefined, a) : curryN(n - a.length, function () {
      for (var _len2 = arguments.length, b = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        b[_key2] = arguments[_key2];
      }

      return f.apply(undefined, a.concat(b));
    });
  };
};

exports.default = curryN;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 =
/*#__PURE__*/
__webpack_require__(2);

var _isPlaceholder =
/*#__PURE__*/
__webpack_require__(5);
/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */


function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;

      case 1:
        return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
          return fn(a, _b);
        });

      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
          return fn(_a, b);
        }) : _isPlaceholder(b) ? _curry1(function (_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}

module.exports = _curry2;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var _isPlaceholder =
/*#__PURE__*/
__webpack_require__(5);
/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */


function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}

module.exports = _curry1;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 =
/*#__PURE__*/
__webpack_require__(1);
/**
 * See if an object (i.e. `val`) is an instance of the supplied constructor. This
 * function will check up the inheritance chain, if any.
 * If `val` was created using `Object.create`, `R.is(Object, val) === true`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Type
 * @sig (* -> {*}) -> a -> Boolean
 * @param {Object} ctor A constructor
 * @param {*} val The value to test
 * @return {Boolean}
 * @example
 *
 *      R.is(Object, {}); //=> true
 *      R.is(Number, 1); //=> true
 *      R.is(Object, 1); //=> false
 *      R.is(String, 's'); //=> true
 *      R.is(String, new String('')); //=> true
 *      R.is(Object, new String('')); //=> true
 *      R.is(Object, 's'); //=> false
 *      R.is(Number, {}); //=> false
 */


var is =
/*#__PURE__*/
_curry2(function is(Ctor, val) {
  return val instanceof Ctor || val != null && (val.constructor === Ctor || Ctor.name === 'Object' && typeof val === 'object');
});

module.exports = is;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x) {
  return x.replace(/[-_ ]+/g, '_').replace(/(^_)_*([A-Z][a-z]+)/g, '$1_$2').replace(/([a-z0-9])([A-Z])/g, '$1_$2').toLowerCase();
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _isPlaceholder(a) {
  return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
}

module.exports = _isPlaceholder;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * Determine if the passed argument is an integer.
 *
 * @private
 * @param {*} n
 * @category Type
 * @return {Boolean}
 */
module.exports = Number.isInteger || function _isInteger(n) {
  return n << 0 === n;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curryN = __webpack_require__(0);

var _curryN2 = _interopRequireDefault(_curryN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _curryN2.default)(2, function (kf, vf, x) {
  var r = {};

  for (var k in x) {
    r[kf(k)] = vf(x[k]);
  }

  return r;
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 =
/*#__PURE__*/
__webpack_require__(2);

var _has =
/*#__PURE__*/
__webpack_require__(9);

var _isArguments =
/*#__PURE__*/
__webpack_require__(44); // cover IE < 9 keys issues


var hasEnumBug = !
/*#__PURE__*/
{
  toString: null
}.propertyIsEnumerable('toString');
var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString']; // Safari bug

var hasArgsEnumBug =
/*#__PURE__*/
function () {
  'use strict';

  return arguments.propertyIsEnumerable('length');
}();

var contains = function contains(list, item) {
  var idx = 0;

  while (idx < list.length) {
    if (list[idx] === item) {
      return true;
    }

    idx += 1;
  }

  return false;
};
/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @see R.keysIn, R.values, R.toPairs
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */


var keys = typeof Object.keys === 'function' && !hasArgsEnumBug ?
/*#__PURE__*/
_curry1(function keys(obj) {
  return Object(obj) !== obj ? [] : Object.keys(obj);
}) :
/*#__PURE__*/
_curry1(function keys(obj) {
  if (Object(obj) !== obj) {
    return [];
  }

  var prop, nIdx;
  var ks = [];

  var checkArgsLength = hasArgsEnumBug && _isArguments(obj);

  for (prop in obj) {
    if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
      ks[ks.length] = prop;
    }
  }

  if (hasEnumBug) {
    nIdx = nonEnumerableProps.length - 1;

    while (nIdx >= 0) {
      prop = nonEnumerableProps[nIdx];

      if (_has(prop, obj) && !contains(ks, prop)) {
        ks[ks.length] = prop;
      }

      nIdx -= 1;
    }
  }

  return ks;
});
module.exports = keys;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = _has;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 =
/*#__PURE__*/
__webpack_require__(1);

var _isString =
/*#__PURE__*/
__webpack_require__(18);
/**
 * Returns the nth element of the given list or string. If n is negative the
 * element at index length + n is returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> a | Undefined
 * @sig Number -> String -> String
 * @param {Number} offset
 * @param {*} list
 * @return {*}
 * @example
 *
 *      const list = ['foo', 'bar', 'baz', 'quux'];
 *      R.nth(1, list); //=> 'bar'
 *      R.nth(-1, list); //=> 'quux'
 *      R.nth(-99, list); //=> undefined
 *
 *      R.nth(2, 'abc'); //=> 'c'
 *      R.nth(3, 'abc'); //=> ''
 * @symb R.nth(-1, [a, b, c]) = c
 * @symb R.nth(0, [a, b, c]) = a
 * @symb R.nth(1, [a, b, c]) = b
 */


var nth =
/*#__PURE__*/
_curry2(function nth(offset, list) {
  var idx = offset < 0 ? list.length + offset : offset;
  return _isString(list) ? list.charAt(idx) : list[idx];
});

module.exports = nth;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
module.exports = Array.isArray || function _isArray(val) {
  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

function _arity(n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0:
      return function () {
        return fn.apply(this, arguments);
      };

    case 1:
      return function (a0) {
        return fn.apply(this, arguments);
      };

    case 2:
      return function (a0, a1) {
        return fn.apply(this, arguments);
      };

    case 3:
      return function (a0, a1, a2) {
        return fn.apply(this, arguments);
      };

    case 4:
      return function (a0, a1, a2, a3) {
        return fn.apply(this, arguments);
      };

    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments);
      };

    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments);
      };

    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments);
      };

    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments);
      };

    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments);
      };

    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments);
      };

    default:
      throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
}

module.exports = _arity;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /* eslint consistent-return: 0 */

var _curryN = __webpack_require__(0);

var _curryN2 = _interopRequireDefault(_curryN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _curryN2.default)(2, function (f, x) {
  var entries = Object.entries(x);

  for (var i = 0; i < entries.length; i++) {
    var _entries$i = _slicedToArray(entries[i], 2),
        k = _entries$i[0],
        v = _entries$i[1];

    if (f(v, k)) {
      return [k, v];
    }
  }
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prop = __webpack_require__(81);

var _prop2 = _interopRequireDefault(_prop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (x) {
  return (0, _prop2.default)('constructor', x) === Object;
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 =
/*#__PURE__*/
__webpack_require__(1);

var paths =
/*#__PURE__*/
__webpack_require__(87);
/**
 * Retrieve the value at a given path.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @typedefn Idx = String | Int | Symbol
 * @sig [Idx] -> {a} -> a | Undefined
 * @param {Array} path The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path`.
 * @see R.prop, R.nth
 * @example
 *
 *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 *      R.path(['a', 'b', 0], {a: {b: [1, 2, 3]}}); //=> 1
 *      R.path(['a', 'b', -2], {a: {b: [1, 2, 3]}}); //=> 2
 */


var path =
/*#__PURE__*/
_curry2(function path(pathAr, obj) {
  return paths([pathAr], obj)[0];
});

module.exports = path;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 =
/*#__PURE__*/
__webpack_require__(24);

var _has =
/*#__PURE__*/
__webpack_require__(9);

var _isInteger =
/*#__PURE__*/
__webpack_require__(6);

var _assoc =
/*#__PURE__*/
__webpack_require__(88);

var isNil =
/*#__PURE__*/
__webpack_require__(89);
/**
 * Makes a shallow clone of an object, setting or overriding the nodes required
 * to create the given path, and placing the specific value at the tail end of
 * that path. Note that this copies and flattens prototype properties onto the
 * new object as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Idx = String | Int | Symbol
 * @sig [Idx] -> a -> {a} -> {a}
 * @param {Array} path the path to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except along the specified path.
 * @see R.dissocPath
 * @example
 *
 *      R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
 *
 *      // Any missing or non-object keys in path will be overridden
 *      R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}
 */


var assocPath =
/*#__PURE__*/
_curry3(function assocPath(path, val, obj) {
  if (path.length === 0) {
    return val;
  }

  var idx = path[0];

  if (path.length > 1) {
    var nextObj = !isNil(obj) && _has(idx, obj) ? obj[idx] : _isInteger(path[1]) ? [] : {};
    val = assocPath(Array.prototype.slice.call(path, 1), val, nextObj);
  }

  return _assoc(idx, val, obj);
});

module.exports = assocPath;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _curryN = __webpack_require__(0);

var _curryN2 = _interopRequireDefault(_curryN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (0, _curryN2.default)(3, function (fromKey, toKey, obj) {
  return _extends({}, obj, _defineProperty({}, toKey, obj[fromKey]));
});

/***/ }),
/* 18 */
/***/ (function(module, exports) {

function _isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
}

module.exports = _isString;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 =
/*#__PURE__*/
__webpack_require__(1);

var _dispatchable =
/*#__PURE__*/
__webpack_require__(56);

var _map =
/*#__PURE__*/
__webpack_require__(58);

var _reduce =
/*#__PURE__*/
__webpack_require__(20);

var _xmap =
/*#__PURE__*/
__webpack_require__(62);

var curryN =
/*#__PURE__*/
__webpack_require__(64);

var keys =
/*#__PURE__*/
__webpack_require__(8);
/**
 * Takes a function and
 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
 * applies the function to each of the functor's values, and returns
 * a functor of the same shape.
 *
 * Ramda provides suitable `map` implementations for `Array` and `Object`,
 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
 *
 * Dispatches to the `map` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * Also treats functions as functors and will compose them together.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => (a -> b) -> f a -> f b
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @see R.transduce, R.addIndex, R.pluck, R.project
 * @example
 *
 *      const double = x => x * 2;
 *
 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
 *
 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
 * @symb R.map(f, [a, b]) = [f(a), f(b)]
 * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
 * @symb R.map(f, functor_o) = functor_o.map(f)
 */


var map =
/*#__PURE__*/
_curry2(
/*#__PURE__*/
_dispatchable(['fantasy-land/map', 'map'], _xmap, function map(fn, functor) {
  switch (Object.prototype.toString.call(functor)) {
    case '[object Function]':
      return curryN(functor.length, function () {
        return fn.call(this, functor.apply(this, arguments));
      });

    case '[object Object]':
      return _reduce(function (acc, key) {
        acc[key] = fn(functor[key]);
        return acc;
      }, {}, keys(functor));

    default:
      return _map(fn, functor);
  }
}));

module.exports = map;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var _isArrayLike =
/*#__PURE__*/
__webpack_require__(59);

var _xwrap =
/*#__PURE__*/
__webpack_require__(60);

var bind =
/*#__PURE__*/
__webpack_require__(61);

function _arrayReduce(xf, acc, list) {
  var idx = 0;
  var len = list.length;

  while (idx < len) {
    acc = xf['@@transducer/step'](acc, list[idx]);

    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }

    idx += 1;
  }

  return xf['@@transducer/result'](acc);
}

function _iterableReduce(xf, acc, iter) {
  var step = iter.next();

  while (!step.done) {
    acc = xf['@@transducer/step'](acc, step.value);

    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }

    step = iter.next();
  }

  return xf['@@transducer/result'](acc);
}

function _methodReduce(xf, acc, obj, methodName) {
  return xf['@@transducer/result'](obj[methodName](bind(xf['@@transducer/step'], xf), acc));
}

var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';

function _reduce(fn, acc, list) {
  if (typeof fn === 'function') {
    fn = _xwrap(fn);
  }

  if (_isArrayLike(list)) {
    return _arrayReduce(fn, acc, list);
  }

  if (typeof list['fantasy-land/reduce'] === 'function') {
    return _methodReduce(fn, acc, list, 'fantasy-land/reduce');
  }

  if (list[symIterator] != null) {
    return _iterableReduce(fn, acc, list[symIterator]());
  }

  if (typeof list.next === 'function') {
    return _iterableReduce(fn, acc, list);
  }

  if (typeof list.reduce === 'function') {
    return _methodReduce(fn, acc, list, 'reduce');
  }

  throw new TypeError('reduce: list must be array or iterable');
}

module.exports = _reduce;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var noopPromise = { then: function then() {
    return noopPromise;
  }, catch: function _catch() {
    return noopPromise;
  } };

exports.default = noopPromise;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curryN = __webpack_require__(0);

var _curryN2 = _interopRequireDefault(_curryN);

var _mapObj = __webpack_require__(7);

var _mapObj2 = _interopRequireDefault(_mapObj);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _curryN2.default)(2, function (f, x) {
  return (0, _mapObj2.default)(function (a) {
    return a;
  }, f, x);
});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = __webpack_require__(15);

var _path2 = _interopRequireDefault(_path);

var _assocPath = __webpack_require__(16);

var _assocPath2 = _interopRequireDefault(_assocPath);

var _merge = __webpack_require__(25);

var _merge2 = _interopRequireDefault(_merge);

var _curryN = __webpack_require__(0);

var _curryN2 = _interopRequireDefault(_curryN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _curryN2.default)(3, function (p, v, x) {
  return (0, _assocPath2.default)(p, (0, _merge2.default)((0, _path2.default)(p, x), v), x);
});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 =
/*#__PURE__*/
__webpack_require__(2);

var _curry2 =
/*#__PURE__*/
__webpack_require__(1);

var _isPlaceholder =
/*#__PURE__*/
__webpack_require__(5);
/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */


function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;

      case 1:
        return _isPlaceholder(a) ? f3 : _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        });

      case 2:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function (_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder(b) ? _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        }) : _curry1(function (_c) {
          return fn(a, b, _c);
        });

      default:
        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function (_a, _b) {
          return fn(_a, _b, c);
        }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function (_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        }) : _isPlaceholder(a) ? _curry1(function (_a) {
          return fn(_a, b, c);
        }) : _isPlaceholder(b) ? _curry1(function (_b) {
          return fn(a, _b, c);
        }) : _isPlaceholder(c) ? _curry1(function (_c) {
          return fn(a, b, _c);
        }) : fn(a, b, c);
    }
  };
}

module.exports = _curry3;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _curryN = __webpack_require__(0);

var _curryN2 = _interopRequireDefault(_curryN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _curryN2.default)(2, function (a, b) {
  return _extends({}, a, b);
});

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = __webpack_require__(15);

var _path2 = _interopRequireDefault(_path);

var _assocPath = __webpack_require__(16);

var _assocPath2 = _interopRequireDefault(_assocPath);

var _mergeRight = __webpack_require__(27);

var _mergeRight2 = _interopRequireDefault(_mergeRight);

var _curryN = __webpack_require__(0);

var _curryN2 = _interopRequireDefault(_curryN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _curryN2.default)(3, function (p, v, x) {
  return (0, _assocPath2.default)(p, (0, _mergeRight2.default)((0, _path2.default)(p, x), v), x);
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _curryN = __webpack_require__(0);

var _curryN2 = _interopRequireDefault(_curryN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _curryN2.default)(2, function (a, b) {
  return _extends({}, b, a);
});

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 =
/*#__PURE__*/
__webpack_require__(1);
/**
 * Returns a partial copy of an object omitting the keys specified.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [String] -> {String: *} -> {String: *}
 * @param {Array} names an array of String property names to omit from the new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with properties from `names` not on it.
 * @see R.pick
 * @example
 *
 *      R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
 */


var omit =
/*#__PURE__*/
_curry2(function omit(names, obj) {
  var result = {};
  var index = {};
  var idx = 0;
  var len = names.length;

  while (idx < len) {
    index[names[idx]] = 1;
    idx += 1;
  }

  for (var prop in obj) {
    if (!index.hasOwnProperty(prop)) {
      result[prop] = obj[prop];
    }
  }

  return result;
});

module.exports = omit;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (n, label, pluralLabel) {
  return n === 1 ? label : pluralLabel || label + "s";
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (k, m) {
  return m[k] || m.default;
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toSnake = __webpack_require__(4);

var _toSnake2 = _interopRequireDefault(_toSnake);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

exports.default = function (x) {
  return (0, _toSnake2.default)(x).split('_').map(function (_ref) {
    var _ref2 = _toArray(_ref),
        a = _ref2[0],
        w = _ref2.slice(1);

    return [(a || '').toUpperCase()].concat(_toConsumableArray(w)).join('');
  }).join('');
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = __webpack_require__(15);

var _path2 = _interopRequireDefault(_path);

var _assocPath = __webpack_require__(16);

var _assocPath2 = _interopRequireDefault(_assocPath);

var _curryN = __webpack_require__(0);

var _curryN2 = _interopRequireDefault(_curryN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _curryN2.default)(3, function (p, f, x) {
  return (
    // Provide the value at the path, the value's immediate parent, and the root
    // object as context. Return the entire object with the path changed
    (0, _assocPath2.default)(p, f((0, _path2.default)(p, x), (0, _path2.default)(p.slice(0, -1), x), x), x)
  );
});

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _anyProp = __webpack_require__(34);

Object.defineProperty(exports, 'anyProp', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_anyProp).default;
  }
});

var _apply = __webpack_require__(35);

Object.defineProperty(exports, 'apply', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_apply).default;
  }
});

var _argsToObj = __webpack_require__(36);

Object.defineProperty(exports, 'argsToObj', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_argsToObj).default;
  }
});

var _between = __webpack_require__(37);

Object.defineProperty(exports, 'between', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_between).default;
  }
});

var _bidiHash = __webpack_require__(38);

Object.defineProperty(exports, 'bidiHash', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_bidiHash).default;
  }
});

var _bytes = __webpack_require__(39);

Object.defineProperty(exports, 'bytes', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_bytes).default;
  }
});

var _chunk = __webpack_require__(40);

Object.defineProperty(exports, 'chunk', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_chunk).default;
  }
});

var _closure = __webpack_require__(41);

Object.defineProperty(exports, 'closure', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_closure).default;
  }
});

var _concatAll = __webpack_require__(42);

Object.defineProperty(exports, 'concatAll', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_concatAll).default;
  }
});

var _copyProp = __webpack_require__(17);

Object.defineProperty(exports, 'copyProp', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_copyProp).default;
  }
});

var _count = __webpack_require__(43);

Object.defineProperty(exports, 'count', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_count).default;
  }
});

var _createMapOf = __webpack_require__(45);

Object.defineProperty(exports, 'createMapOf', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_createMapOf).default;
  }
});

var _createMap = __webpack_require__(46);

Object.defineProperty(exports, 'createMap', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_createMap).default;
  }
});

var _curryN = __webpack_require__(0);

Object.defineProperty(exports, 'curryN', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_curryN).default;
  }
});

var _multimethod = __webpack_require__(47);

Object.defineProperty(exports, 'defmulti', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_multimethod).default;
  }
});

var _displayList = __webpack_require__(48);

Object.defineProperty(exports, 'displayList', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_displayList).default;
  }
});

var _doPipe = __webpack_require__(50);

Object.defineProperty(exports, 'doPipe', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_doPipe).default;
  }
});

var _doto = __webpack_require__(51);

Object.defineProperty(exports, 'doto', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_doto).default;
  }
});

var _ellipsize = __webpack_require__(52);

Object.defineProperty(exports, 'ellipsize', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ellipsize).default;
  }
});

var _ensurePlural = __webpack_require__(53);

Object.defineProperty(exports, 'ensurePlural', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ensurePlural).default;
  }
});

var _ffirst = __webpack_require__(54);

Object.defineProperty(exports, 'ffirst', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ffirst).default;
  }
});

var _fillArray = __webpack_require__(55);

Object.defineProperty(exports, 'fillArray', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_fillArray).default;
  }
});

var _fillKeys = __webpack_require__(66);

Object.defineProperty(exports, 'fillKeys', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_fillKeys).default;
  }
});

var _filterVals = __webpack_require__(71);

Object.defineProperty(exports, 'filterVals', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_filterVals).default;
  }
});

var _findObjIndex = __webpack_require__(72);

Object.defineProperty(exports, 'findObjIndex', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_findObjIndex).default;
  }
});

var _findObjPair = __webpack_require__(13);

Object.defineProperty(exports, 'findObjPair', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_findObjPair).default;
  }
});

var _findObj = __webpack_require__(73);

Object.defineProperty(exports, 'findObj', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_findObj).default;
  }
});

var _first = __webpack_require__(74);

Object.defineProperty(exports, 'first', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_first).default;
  }
});

var _flatMap = __webpack_require__(75);

Object.defineProperty(exports, 'flatMap', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_flatMap).default;
  }
});

var _forEachObj = __webpack_require__(76);

Object.defineProperty(exports, 'forEachObj', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_forEachObj).default;
  }
});

var _initArray = __webpack_require__(77);

Object.defineProperty(exports, 'initArray', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_initArray).default;
  }
});

var _intersperseWith = __webpack_require__(78);

Object.defineProperty(exports, 'intersperseWith', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_intersperseWith).default;
  }
});

var _invert = __webpack_require__(79);

Object.defineProperty(exports, 'invert', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_invert).default;
  }
});

var _isObject = __webpack_require__(80);

Object.defineProperty(exports, 'isObject', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isObject).default;
  }
});

var _isPojo = __webpack_require__(14);

Object.defineProperty(exports, 'isPojo', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isPojo).default;
  }
});

var _isUrl = __webpack_require__(82);

Object.defineProperty(exports, 'isUrl', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isUrl).default;
  }
});

var _killPromise = __webpack_require__(83);

Object.defineProperty(exports, 'killPromise', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_killPromise).default;
  }
});

var _logarithm = __webpack_require__(84);

Object.defineProperty(exports, 'logarithm', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_logarithm).default;
  }
});

var _mapKeys = __webpack_require__(85);

Object.defineProperty(exports, 'mapKeys', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mapKeys).default;
  }
});

var _mapObj = __webpack_require__(7);

Object.defineProperty(exports, 'mapObj', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mapObj).default;
  }
});

var _mapValues = __webpack_require__(22);

Object.defineProperty(exports, 'mapValues', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mapValues).default;
  }
});

var _mergeIn = __webpack_require__(86);

Object.defineProperty(exports, 'mergeIn', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mergeIn).default;
  }
});

var _mergePath = __webpack_require__(23);

Object.defineProperty(exports, 'mergePath', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mergePath).default;
  }
});

var _mergeRightIn = __webpack_require__(90);

Object.defineProperty(exports, 'mergeRightIn', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mergeRightIn).default;
  }
});

var _mergeRightPath = __webpack_require__(26);

Object.defineProperty(exports, 'mergeRightPath', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mergeRightPath).default;
  }
});

var _mergeRight = __webpack_require__(27);

Object.defineProperty(exports, 'mergeRight', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mergeRight).default;
  }
});

var _merge = __webpack_require__(25);

Object.defineProperty(exports, 'merge', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_merge).default;
  }
});

var _modifyKeysRecursive = __webpack_require__(91);

Object.defineProperty(exports, 'modifyKeysRecursive', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_modifyKeysRecursive).default;
  }
});

var _modifyValuesRecursive = __webpack_require__(92);

Object.defineProperty(exports, 'modifyValuesRecursive', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_modifyValuesRecursive).default;
  }
});

var _moveProp = __webpack_require__(93);

Object.defineProperty(exports, 'moveProp', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_moveProp).default;
  }
});

var _noopPromise = __webpack_require__(21);

Object.defineProperty(exports, 'noopPromise', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_noopPromise).default;
  }
});

var _noop = __webpack_require__(94);

Object.defineProperty(exports, 'noop', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_noop).default;
  }
});

var _numbers = __webpack_require__(95);

Object.defineProperty(exports, 'numbers', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_numbers).default;
  }
});

var _partial = __webpack_require__(96);

Object.defineProperty(exports, 'partial', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_partial).default;
  }
});

var _pickValues = __webpack_require__(97);

Object.defineProperty(exports, 'pickValues', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pickValues).default;
  }
});

var _pluralize = __webpack_require__(29);

Object.defineProperty(exports, 'pluralize', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pluralize).default;
  }
});

var _quantify = __webpack_require__(98);

Object.defineProperty(exports, 'quantify', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_quantify).default;
  }
});

var _randomId = __webpack_require__(99);

Object.defineProperty(exports, 'randomId', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_randomId).default;
  }
});

var _randomInt = __webpack_require__(100);

Object.defineProperty(exports, 'randomInt', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_randomInt).default;
  }
});

var _range = __webpack_require__(101);

Object.defineProperty(exports, 'range', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_range).default;
  }
});

var _renameProp = __webpack_require__(102);

Object.defineProperty(exports, 'renameProp', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_renameProp).default;
  }
});

var _replaceValues = __webpack_require__(103);

Object.defineProperty(exports, 'replaceValues', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_replaceValues).default;
  }
});

var _resolveAfter = __webpack_require__(107);

Object.defineProperty(exports, 'resolveAfter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_resolveAfter).default;
  }
});

var _round = __webpack_require__(108);

Object.defineProperty(exports, 'round', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_round).default;
  }
});

var _safeDivide = __webpack_require__(109);

Object.defineProperty(exports, 'safeDivide', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_safeDivide).default;
  }
});

var _sleep = __webpack_require__(110);

Object.defineProperty(exports, 'sleep', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sleep).default;
  }
});

var _splice = __webpack_require__(111);

Object.defineProperty(exports, 'splice', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_splice).default;
  }
});

var _stackedPromise = __webpack_require__(112);

Object.defineProperty(exports, 'stackedPromise', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_stackedPromise).default;
  }
});

var _sumProp = __webpack_require__(113);

Object.defineProperty(exports, 'sumProp', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sumProp).default;
  }
});

var _summarize = __webpack_require__(114);

Object.defineProperty(exports, 'summarize', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_summarize).default;
  }
});

var _switcherFn = __webpack_require__(115);

Object.defineProperty(exports, 'switcherFn', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_switcherFn).default;
  }
});

var _switcher = __webpack_require__(30);

Object.defineProperty(exports, 'switcher', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_switcher).default;
  }
});

var _tap = __webpack_require__(116);

Object.defineProperty(exports, 'tap', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tap).default;
  }
});

var _throttle = __webpack_require__(117);

Object.defineProperty(exports, 'throttle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_throttle).default;
  }
});

var _thrower = __webpack_require__(118);

Object.defineProperty(exports, 'thrower', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_thrower).default;
  }
});

var _toCamel = __webpack_require__(119);

Object.defineProperty(exports, 'toCamel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toCamel).default;
  }
});

var _toKebab = __webpack_require__(120);

Object.defineProperty(exports, 'toKebab', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toKebab).default;
  }
});

var _toPascal = __webpack_require__(31);

Object.defineProperty(exports, 'toPascal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toPascal).default;
  }
});

var _toScreamingSnake = __webpack_require__(121);

Object.defineProperty(exports, 'toScreamingSnake', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toScreamingSnake).default;
  }
});

var _toSnake = __webpack_require__(4);

Object.defineProperty(exports, 'toSnake', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toSnake).default;
  }
});

var _toTitle = __webpack_require__(122);

Object.defineProperty(exports, 'toTitle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toTitle).default;
  }
});

var _ucFirst = __webpack_require__(123);

Object.defineProperty(exports, 'ucFirst', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ucFirst).default;
  }
});

var _updateIn = __webpack_require__(124);

Object.defineProperty(exports, 'updateIn', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_updateIn).default;
  }
});

var _updatePath = __webpack_require__(32);

Object.defineProperty(exports, 'updatePath', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_updatePath).default;
  }
});

var _uuid = __webpack_require__(125);

Object.defineProperty(exports, 'uuid', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_uuid).default;
  }
});
Object.defineProperty(exports, 'UUID', {
  enumerable: true,
  get: function get() {
    return _uuid.UUID;
  }
});

var _waitForever = __webpack_require__(127);

Object.defineProperty(exports, 'waitForever', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_waitForever).default;
  }
});

var _waitFor = __webpack_require__(128);

Object.defineProperty(exports, 'waitFor', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_waitFor).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x) {
  return x[Object.keys(x)[0]];
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = function (f, args) {
  return f.apply(undefined, _toConsumableArray(args));
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (ks) {
  for (var _len = arguments.length, a = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    a[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, b = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      b[_key2] = arguments[_key2];
    }

    var combined = a.concat(b);

    return Object.fromEntries(ks.map(function (k, i) {
      return [k, combined[i]];
    }));
  };
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curryN = __webpack_require__(0);

var _curryN2 = _interopRequireDefault(_curryN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _curryN2.default)(3, function (low, high, n) {
  return n > low && n < high;
});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/* eslint no-bitwise: 0 */

exports.default = function (n) {
  return ((0x0000FFFF & n) << 16) + ((0xFFFF0000 & n) >> 16);
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (n, unit) {
  switch (unit.toLowerCase()) {
    case 'kb':
      return n * 1024;
    case 'mb':
      return n * 1024 * 1024;
    case 'gb':
      return n * 1024 * 1024 * 1024;
    case 'tb':
      return n * 1024 * 1024 * 1024 * 1024;
    case 'pb':
      return n * 1024 * 1024 * 1024 * 1024 * 1024;
    default:
      throw new Error(unit + ' is not a valid bytes unit');
  }
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curryN = __webpack_require__(0);

var _curryN2 = _interopRequireDefault(_curryN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _curryN2.default)(2, function (chunkLength, coll) {
  var result = [];
  var current = [];

  coll.forEach(function (item) {
    if (current.length < chunkLength) {
      current.push(item);
    }

    if (current.length === chunkLength) {
      result.push(current);
      current = [];
    }
  });

  if (current.length > 0) {
    result.push(current);
  }

  return result;
});

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (f) {
  return f();
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var lists = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return lists.reduce(function (a, b) {
    return a.concat(b);
  }, []);
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(8);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (x) {
  return (0, _keys2.default)(x).length;
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var _has =
/*#__PURE__*/
__webpack_require__(9);

var toString = Object.prototype.toString;

var _isArguments =
/*#__PURE__*/
function () {
  return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
    return toString.call(x) === '[object Arguments]';
  } : function _isArguments(x) {
    return _has('callee', x);
  };
}();

module.exports = _isArguments;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curryN = __webpack_require__(0);

var _curryN2 = _interopRequireDefault(_curryN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _curryN2.default)(3, function (k, vk, xs) {
  var r = {};

  for (var i = 0; i < xs.length; i++) {
    r[xs[i][k]] = xs[i][vk];
  }

  return r;
});

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curryN = __webpack_require__(0);

var _curryN2 = _interopRequireDefault(_curryN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _curryN2.default)(2, function (k, xs) {
  var r = {};

  for (var i = 0; i < xs.length; i++) {
    r[xs[i][k]] = xs[i];
  }

  return r;
});

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint no-useless-call: 0 */

exports.default = defmulti;

var _is = __webpack_require__(3);

var _is2 = _interopRequireDefault(_is);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Default = 'multimethod/Default';

var MultiMethod = function () {
  function MultiMethod(name, dispatch) {
    var methods = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, MultiMethod);

    this.name = name;
    this.dispatch = dispatch;
    this.methods = {};

    this.addMethods(methods);
  }
  // Dorky method signatures for compatibility with function methods


  _createClass(MultiMethod, [{
    key: 'apply',
    value: function apply(_, args) {
      return this.call.apply(this, [null].concat(_toConsumableArray(args)));
    }
  }, {
    key: 'call',
    value: function call(_) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var dv = this.dispatch.apply(this, args);
      var method = this.getMethod(dv) || this.getDefaultMethod();

      if (!method) {
        throw new Error('No method found for "' + this.name + ':' + dv + '"');
      }

      return method.apply(undefined, args);
    }
  }, {
    key: 'callDefault',
    value: function callDefault() {
      var method = this.getDefaultMethod();

      if (!method) {
        throw new Error('No default method found for "' + this.name + '"');
      }

      return method.apply(undefined, arguments);
    }
  }, {
    key: 'addMethod',
    value: function addMethod(dv, fn) {
      if (!(0, _is2.default)(Function, fn)) {
        throw Error('Method provided for "' + this.name + ':' + dv + '" is not callable (got ' + fn + ')');
      }

      this.methods[dv] = fn;

      return this;
    }
  }, {
    key: 'addMethods',
    value: function addMethods(m) {
      for (var k in m) {
        this.addMethod(k, m[k]);
      }
    }
  }, {
    key: 'addDefaultMethod',
    value: function addDefaultMethod(fn) {
      return this.addMethod(Default, fn);
    }
  }, {
    key: 'getMethod',
    value: function getMethod(dv) {
      return this.methods[dv];
    }
  }, {
    key: 'getDefaultMethod',
    value: function getDefaultMethod() {
      return this.methods[Default];
    }
  }, {
    key: 'removeMethod',
    value: function removeMethod(dv) {
      delete this.methods[dv];
    }
  }, {
    key: 'removeDefaultMethod',
    value: function removeDefaultMethod() {
      this.removeMethod(Default);
    }
  }]);

  return MultiMethod;
}();

function defmulti() {
  for (var _len2 = arguments.length, config = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    config[_key2] = arguments[_key2];
  }

  var mm = new (Function.prototype.bind.apply(MultiMethod, [null].concat(config)))();
  var call = function call() {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return mm.call.apply(mm, [null].concat(args));
  };

  return new Proxy(call, {
    get: function get(target, name) {
      return mm[name];
    }
  });
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _last = __webpack_require__(49);

var _last2 = _interopRequireDefault(_last);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (xs) {
  var conj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'and';
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 6;

  if (xs.length === 0) {
    return '';
  } else if (xs.length === 1) {
    return xs[0];
  } else if (xs.length === 2) {
    return xs[0] + ' ' + conj + ' ' + xs[1];
  } else if (xs.length > n + 2) {
    return xs.slice(0, n).join(', ') + ', ' + conj + ' ' + (xs.length - n) + ' others';
  }

  return xs.slice(0, -1).join(', ') + ', ' + conj + ' ' + (0, _last2.default)(xs);
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var nth =
/*#__PURE__*/
__webpack_require__(10);
/**
 * Returns the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.init, R.head, R.tail
 * @example
 *
 *      R.last(['fi', 'fo', 'fum']); //=> 'fum'
 *      R.last([]); //=> undefined
 *
 *      R.last('abc'); //=> 'c'
 *      R.last(''); //=> ''
 */


var last =
/*#__PURE__*/
nth(-1);
module.exports = last;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x, fs) {
  return fs.reduce(function (v, f) {
    return f(v);
  }, x);
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x, f) {
  return f(x);
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (s, l) {
  var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '...';

  if (s.length < l * 1.1) {
    return s;
  }

  while (s.length > l && s.includes(' ')) {
    s = s.split(' ').slice(0, -1).join(' ');
  }

  return s + suffix;
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x) {
  return x instanceof Array ? x : [x];
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (list) {
  return list && list[0] ? list[0][0] : undefined;
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = __webpack_require__(19);

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (length, x) {
  return (0, _map2.default)(function () {
    return x;
  }, new Array(length));
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var _isArray =
/*#__PURE__*/
__webpack_require__(11);

var _isTransformer =
/*#__PURE__*/
__webpack_require__(57);
/**
 * Returns a function that dispatches with different strategies based on the
 * object in list position (last argument). If it is an array, executes [fn].
 * Otherwise, if it has a function with one of the given method names, it will
 * execute that function (functor case). Otherwise, if it is a transformer,
 * uses transducer created by [transducerCreator] to return a new transformer
 * (transducer case).
 * Otherwise, it will default to executing [fn].
 *
 * @private
 * @param {Array} methodNames properties to check for a custom implementation
 * @param {Function} transducerCreator transducer factory if object is transformer
 * @param {Function} fn default ramda implementation
 * @return {Function} A function that dispatches on object in list position
 */


function _dispatchable(methodNames, transducerCreator, fn) {
  return function () {
    if (arguments.length === 0) {
      return fn();
    }

    var obj = arguments[arguments.length - 1];

    if (!_isArray(obj)) {
      var idx = 0;

      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === 'function') {
          return obj[methodNames[idx]].apply(obj, Array.prototype.slice.call(arguments, 0, -1));
        }

        idx += 1;
      }

      if (_isTransformer(obj)) {
        var transducer = transducerCreator.apply(null, Array.prototype.slice.call(arguments, 0, -1));
        return transducer(obj);
      }
    }

    return fn.apply(this, arguments);
  };
}

module.exports = _dispatchable;

/***/ }),
/* 57 */
/***/ (function(module, exports) {

function _isTransformer(obj) {
  return obj != null && typeof obj['@@transducer/step'] === 'function';
}

module.exports = _isTransformer;

/***/ }),
/* 58 */
/***/ (function(module, exports) {

function _map(fn, functor) {
  var idx = 0;
  var len = functor.length;
  var result = Array(len);

  while (idx < len) {
    result[idx] = fn(functor[idx]);
    idx += 1;
  }

  return result;
}

module.exports = _map;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 =
/*#__PURE__*/
__webpack_require__(2);

var _isArray =
/*#__PURE__*/
__webpack_require__(11);

var _isString =
/*#__PURE__*/
__webpack_require__(18);
/**
 * Tests whether or not an object is similar to an array.
 *
 * @private
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @example
 *
 *      _isArrayLike([]); //=> true
 *      _isArrayLike(true); //=> false
 *      _isArrayLike({}); //=> false
 *      _isArrayLike({length: 10}); //=> false
 *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 *      _isArrayLike({nodeType: 1, length: 1}) // => false
 */


var _isArrayLike =
/*#__PURE__*/
_curry1(function isArrayLike(x) {
  if (_isArray(x)) {
    return true;
  }

  if (!x) {
    return false;
  }

  if (typeof x !== 'object') {
    return false;
  }

  if (_isString(x)) {
    return false;
  }

  if (x.length === 0) {
    return true;
  }

  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }

  return false;
});

module.exports = _isArrayLike;

/***/ }),
/* 60 */
/***/ (function(module, exports) {

var XWrap =
/*#__PURE__*/
function () {
  function XWrap(fn) {
    this.f = fn;
  }

  XWrap.prototype['@@transducer/init'] = function () {
    throw new Error('init not implemented on XWrap');
  };

  XWrap.prototype['@@transducer/result'] = function (acc) {
    return acc;
  };

  XWrap.prototype['@@transducer/step'] = function (acc, x) {
    return this.f(acc, x);
  };

  return XWrap;
}();

function _xwrap(fn) {
  return new XWrap(fn);
}

module.exports = _xwrap;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var _arity =
/*#__PURE__*/
__webpack_require__(12);

var _curry2 =
/*#__PURE__*/
__webpack_require__(1);
/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      const log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */


var bind =
/*#__PURE__*/
_curry2(function bind(fn, thisObj) {
  return _arity(fn.length, function () {
    return fn.apply(thisObj, arguments);
  });
});

module.exports = bind;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 =
/*#__PURE__*/
__webpack_require__(1);

var _xfBase =
/*#__PURE__*/
__webpack_require__(63);

var XMap =
/*#__PURE__*/
function () {
  function XMap(f, xf) {
    this.xf = xf;
    this.f = f;
  }

  XMap.prototype['@@transducer/init'] = _xfBase.init;
  XMap.prototype['@@transducer/result'] = _xfBase.result;

  XMap.prototype['@@transducer/step'] = function (result, input) {
    return this.xf['@@transducer/step'](result, this.f(input));
  };

  return XMap;
}();

var _xmap =
/*#__PURE__*/
_curry2(function _xmap(f, xf) {
  return new XMap(f, xf);
});

module.exports = _xmap;

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = {
  init: function () {
    return this.xf['@@transducer/init']();
  },
  result: function (result) {
    return this.xf['@@transducer/result'](result);
  }
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var _arity =
/*#__PURE__*/
__webpack_require__(12);

var _curry1 =
/*#__PURE__*/
__webpack_require__(2);

var _curry2 =
/*#__PURE__*/
__webpack_require__(1);

var _curryN =
/*#__PURE__*/
__webpack_require__(65);
/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      const sumArgs = (...args) => R.sum(args);
 *
 *      const curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      const f = curriedAddFourNumbers(1, 2);
 *      const g = f(3);
 *      g(4); //=> 10
 */


var curryN =
/*#__PURE__*/
_curry2(function curryN(length, fn) {
  if (length === 1) {
    return _curry1(fn);
  }

  return _arity(length, _curryN(length, [], fn));
});

module.exports = curryN;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var _arity =
/*#__PURE__*/
__webpack_require__(12);

var _isPlaceholder =
/*#__PURE__*/
__webpack_require__(5);
/**
 * Internal curryN function.
 *
 * @private
 * @category Function
 * @param {Number} length The arity of the curried function.
 * @param {Array} received An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */


function _curryN(length, received, fn) {
  return function () {
    var combined = [];
    var argsIdx = 0;
    var left = length;
    var combinedIdx = 0;

    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;

      if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }

      combined[combinedIdx] = result;

      if (!_isPlaceholder(result)) {
        left -= 1;
      }

      combinedIdx += 1;
    }

    return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
  };
}

module.exports = _curryN;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _clone = __webpack_require__(67);

var _clone2 = _interopRequireDefault(_clone);

var _curryN = __webpack_require__(0);

var _curryN2 = _interopRequireDefault(_curryN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _curryN2.default)(2, function (ks, x) {
  var r = {};

  for (var i = 0; i < ks.length; i++) {
    r[ks[i]] = (0, _clone2.default)(x);
  }

  return r;
});

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var _clone =
/*#__PURE__*/
__webpack_require__(68);

var _curry1 =
/*#__PURE__*/
__webpack_require__(2);
/**
 * Creates a deep copy of the source that can be used in place of the source
 * object without retaining any references to it.
 * The source object may contain (nested) `Array`s and `Object`s,
 * `Number`s, `String`s, `Boolean`s and `Date`s.
 * `Function`s are assigned by reference rather than copied.
 *
 * Dispatches to a `clone` method if present.
 *
 * Note that if the source object has multiple nodes that share a reference,
 * the returned object will have the same structure, but the references will
 * be pointed to the location within the cloned value.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {*} -> {*}
 * @param {*} value The object or array to clone
 * @return {*} A deeply cloned copy of `val`
 * @example
 *
 *      const objects = [{}, {}, {}];
 *      const objectsClone = R.clone(objects);
 *      objects === objectsClone; //=> false
 *      objects[0] === objectsClone[0]; //=> false
 */


var clone =
/*#__PURE__*/
_curry1(function clone(value) {
  return value != null && typeof value.clone === 'function' ? value.clone() : _clone(value, [], [], true);
});

module.exports = clone;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var _cloneRegExp =
/*#__PURE__*/
__webpack_require__(69);

var type =
/*#__PURE__*/
__webpack_require__(70);
/**
 * Copies an object.
 *
 * @private
 * @param {*} value The value to be copied
 * @param {Array} refFrom Array containing the source references
 * @param {Array} refTo Array containing the copied source references
 * @param {Boolean} deep Whether or not to perform deep cloning.
 * @return {*} The copied value.
 */


function _clone(value, refFrom, refTo, deep) {
  var copy = function copy(copiedValue) {
    var len = refFrom.length;
    var idx = 0;

    while (idx < len) {
      if (value === refFrom[idx]) {
        return refTo[idx];
      }

      idx += 1;
    }

    refFrom[idx] = value;
    refTo[idx] = copiedValue;

    for (var key in value) {
      if (value.hasOwnProperty(key)) {
        copiedValue[key] = deep ? _clone(value[key], refFrom, refTo, true) : value[key];
      }
    }

    return copiedValue;
  };

  switch (type(value)) {
    case 'Object':
      return copy(Object.create(Object.getPrototypeOf(value)));

    case 'Array':
      return copy([]);

    case 'Date':
      return new Date(value.valueOf());

    case 'RegExp':
      return _cloneRegExp(value);

    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'BigInt64Array':
    case 'BigUint64Array':
      return value.slice();

    default:
      return value;
  }
}

module.exports = _clone;

/***/ }),
/* 69 */
/***/ (function(module, exports) {

function _cloneRegExp(pattern) {
  return new RegExp(pattern.source, (pattern.global ? 'g' : '') + (pattern.ignoreCase ? 'i' : '') + (pattern.multiline ? 'm' : '') + (pattern.sticky ? 'y' : '') + (pattern.unicode ? 'u' : ''));
}

module.exports = _cloneRegExp;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 =
/*#__PURE__*/
__webpack_require__(2);
/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Type
 * @sig (* -> {*}) -> String
 * @param {*} val The value to test
 * @return {String}
 * @example
 *
 *      R.type({}); //=> "Object"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 *      R.type(() => {}); //=> "Function"
 *      R.type(undefined); //=> "Undefined"
 */


var type =
/*#__PURE__*/
_curry1(function type(val) {
  return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
});

module.exports = type;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curryN = __webpack_require__(0);

var _curryN2 = _interopRequireDefault(_curryN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _curryN2.default)(2, function (f, x) {
  var r = {};

  for (var k in x) {
    if (f(x[k])) {
      r[k] = x[k];
    }
  }

  return r;
});

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curryN = __webpack_require__(0);

var _curryN2 = _interopRequireDefault(_curryN);

var _findObjPair = __webpack_require__(13);

var _findObjPair2 = _interopRequireDefault(_findObjPair);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _curryN2.default)(2, function (f, x) {
  return ((0, _findObjPair2.default)(f, x) || [])[0];
});

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curryN = __webpack_require__(0);

var _curryN2 = _interopRequireDefault(_curryN);

var _findObjPair = __webpack_require__(13);

var _findObjPair2 = _interopRequireDefault(_findObjPair);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint consistent-return: 0 */

exports.default = (0, _curryN2.default)(2, function (f, x) {
  return ((0, _findObjPair2.default)(f, x) || [])[1];
});

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (list) {
  return list ? list[0] : undefined;
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curryN = __webpack_require__(0);

var _curryN2 = _interopRequireDefault(_curryN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _curryN2.default)(2, function (f, xs) {
  return xs.map(f).reduce(function (a, b) {
    return a.concat(b);
  }, []);
});

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _curryN = __webpack_require__(0);

var _curryN2 = _interopRequireDefault(_curryN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _curryN2.default)(2, function (f, x) {
  return Object.entries(x).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        k = _ref2[0],
        v = _ref2[1];

    return f(v, k);
  });
});

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = __webpack_require__(19);

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Use ramda's map since array initialization is squirrely
exports.default = function (length, x) {
  return (0, _map2.default)(x, new Array(length));
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curryN = __webpack_require__(0);

var _curryN2 = _interopRequireDefault(_curryN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _curryN2.default)(2, function (f, xs) {
  return xs.reduce(function (r, x, i) {
    return r.length ? r.concat([f(x, i), x]) : r.concat(x);
  }, []);
});

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (outer) {
  var r = [];

  outer.forEach(function (inner, i) {
    return inner.forEach(function (value, j) {
      r[j] = r[j] || [];
      r[j][i] = value;
    });
  });

  return r;
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _is = __webpack_require__(3);

var _is2 = _interopRequireDefault(_is);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (x) {
  return (0, _is2.default)(Object, x) && !(0, _is2.default)(Array, x);
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 =
/*#__PURE__*/
__webpack_require__(1);

var _isInteger =
/*#__PURE__*/
__webpack_require__(6);

var nth =
/*#__PURE__*/
__webpack_require__(10);
/**
 * Returns a function that when supplied an object returns the indicated
 * property of that object, if it exists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @typedefn Idx = String | Int | Symbol
 * @sig Idx -> {s: a} -> a | Undefined
 * @param {String|Number} p The property name or array index
 * @param {Object} obj The object to query
 * @return {*} The value at `obj.p`.
 * @see R.path, R.props, R.pluck, R.project, R.nth
 * @example
 *
 *      R.prop('x', {x: 100}); //=> 100
 *      R.prop('x', {}); //=> undefined
 *      R.prop(0, [100]); //=> 100
 *      R.compose(R.inc, R.prop('x'))({ x: 3 }) //=> 4
 */


var prop =
/*#__PURE__*/
_curry2(function prop(p, obj) {
  if (obj == null) {
    return;
  }

  return _isInteger(p) ? nth(p, obj) : obj[p];
});

module.exports = prop;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (url) {
  try {
    return Boolean(new URL(url));
  } catch (e) {
    return false;
  }
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _noopPromise = __webpack_require__(21);

var _noopPromise2 = _interopRequireDefault(_noopPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (p) {
  p.catch(function () {
    return undefined;
  });

  return _noopPromise2.default;
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (base, n) {
  return Math.log(n) / Math.log(base);
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curryN = __webpack_require__(0);

var _curryN2 = _interopRequireDefault(_curryN);

var _mapObj = __webpack_require__(7);

var _mapObj2 = _interopRequireDefault(_mapObj);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _curryN2.default)(2, function (f, x) {
  return (0, _mapObj2.default)(f, function (a) {
    return a;
  }, x);
});

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curryN = __webpack_require__(0);

var _curryN2 = _interopRequireDefault(_curryN);

var _mergePath = __webpack_require__(23);

var _mergePath2 = _interopRequireDefault(_mergePath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _curryN2.default)(3, function (k, v, x) {
  return (0, _mergePath2.default)([k], v, x);
});

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 =
/*#__PURE__*/
__webpack_require__(1);

var _isInteger =
/*#__PURE__*/
__webpack_require__(6);

var nth =
/*#__PURE__*/
__webpack_require__(10);
/**
 * Retrieves the values at given paths of an object.
 *
 * @func
 * @memberOf R
 * @since v0.27.1
 * @category Object
 * @typedefn Idx = [String | Int | Symbol]
 * @sig [Idx] -> {a} -> [a | Undefined]
 * @param {Array} pathsArray The array of paths to be fetched.
 * @param {Object} obj The object to retrieve the nested properties from.
 * @return {Array} A list consisting of values at paths specified by "pathsArray".
 * @see R.path
 * @example
 *
 *      R.paths([['a', 'b'], ['p', 0, 'q']], {a: {b: 2}, p: [{q: 3}]}); //=> [2, 3]
 *      R.paths([['a', 'b'], ['p', 'r']], {a: {b: 2}, p: [{q: 3}]}); //=> [2, undefined]
 */


var paths =
/*#__PURE__*/
_curry2(function paths(pathsArray, obj) {
  return pathsArray.map(function (paths) {
    var val = obj;
    var idx = 0;
    var p;

    while (idx < paths.length) {
      if (val == null) {
        return;
      }

      p = paths[idx];
      val = _isInteger(p) ? nth(p, val) : val[p];
      idx += 1;
    }

    return val;
  });
});

module.exports = paths;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var _isArray =
/*#__PURE__*/
__webpack_require__(11);

var _isInteger =
/*#__PURE__*/
__webpack_require__(6);
/**
 * Makes a shallow clone of an object, setting or overriding the specified
 * property with the given value. Note that this copies and flattens prototype
 * properties onto the new object as well. All non-primitive properties are
 * copied by reference.
 *
 * @private
 * @param {String|Number} prop The property name to set
 * @param {*} val The new value
 * @param {Object|Array} obj The object to clone
 * @return {Object|Array} A new object equivalent to the original except for the changed property.
 */


function _assoc(prop, val, obj) {
  if (_isInteger(prop) && _isArray(obj)) {
    var arr = [].concat(obj);
    arr[prop] = val;
    return arr;
  }

  var result = {};

  for (var p in obj) {
    result[p] = obj[p];
  }

  result[prop] = val;
  return result;
}

module.exports = _assoc;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 =
/*#__PURE__*/
__webpack_require__(2);
/**
 * Checks if the input value is `null` or `undefined`.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Type
 * @sig * -> Boolean
 * @param {*} x The value to test.
 * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
 * @example
 *
 *      R.isNil(null); //=> true
 *      R.isNil(undefined); //=> true
 *      R.isNil(0); //=> false
 *      R.isNil([]); //=> false
 */


var isNil =
/*#__PURE__*/
_curry1(function isNil(x) {
  return x == null;
});

module.exports = isNil;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curryN = __webpack_require__(0);

var _curryN2 = _interopRequireDefault(_curryN);

var _mergeRightPath = __webpack_require__(26);

var _mergeRightPath2 = _interopRequireDefault(_mergeRightPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _curryN2.default)(3, function (k, v, x) {
  return (0, _mergeRightPath2.default)([k], v, x);
});

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _is = __webpack_require__(3);

var _is2 = _interopRequireDefault(_is);

var _curryN = __webpack_require__(0);

var _curryN2 = _interopRequireDefault(_curryN);

var _isPojo = __webpack_require__(14);

var _isPojo2 = _interopRequireDefault(_isPojo);

var _mapObj = __webpack_require__(7);

var _mapObj2 = _interopRequireDefault(_mapObj);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modifyKeysRecursive = (0, _curryN2.default)(2, function (f, x) {
  if ((0, _is2.default)(Array, x)) {
    return x.map(function (v) {
      return modifyKeysRecursive(f, v);
    });
  }

  if ((0, _isPojo2.default)(x)) {
    return (0, _mapObj2.default)(f, function (v) {
      return modifyKeysRecursive(f, v);
    }, x);
  }

  return x;
});

exports.default = modifyKeysRecursive;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _is = __webpack_require__(3);

var _is2 = _interopRequireDefault(_is);

var _isPojo = __webpack_require__(14);

var _isPojo2 = _interopRequireDefault(_isPojo);

var _curryN = __webpack_require__(0);

var _curryN2 = _interopRequireDefault(_curryN);

var _mapValues = __webpack_require__(22);

var _mapValues2 = _interopRequireDefault(_mapValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modifyValuesRecursive = (0, _curryN2.default)(3, function (match, modify, x) {
  if (match(x)) {
    return modify(x);
  }

  if ((0, _is2.default)(Array, x)) {
    return x.map(modifyValuesRecursive(match, modify));
  }

  // Only recur into pojos
  if ((0, _isPojo2.default)(x)) {
    return (0, _mapValues2.default)(modifyValuesRecursive(match, modify), x);
  }

  return x;
});

exports.default = modifyValuesRecursive;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _omit = __webpack_require__(28);

var _omit2 = _interopRequireDefault(_omit);

var _curryN = __webpack_require__(0);

var _curryN2 = _interopRequireDefault(_curryN);

var _copyProp = __webpack_require__(17);

var _copyProp2 = _interopRequireDefault(_copyProp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _curryN2.default)(3, function (fromKey, toKey, obj) {
  return (0, _omit2.default)([fromKey], (0, _copyProp2.default)(fromKey, toKey, obj));
});

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return undefined;
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DOT_REGEXP = new RegExp(/\.+/);

var _parseFloat = function _parseFloat(x) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  x = parseFloat(x.toString().replace(DOT_REGEXP, '.').trim());

  return isNaN(x) ? fallback : x;
};

var _parseInt = function _parseInt(x) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return parseInt(_parseFloat(x, fallback), 10);
};

var commaFormat = exports.commaFormat = function commaFormat(x) {
  return String(x).split('').reverse().reduce(function (acc, n, i) {
    return n + (i && !(i % 3) ? ',' : '') + acc;
  });
};

exports.default = {
  parseFloat: _parseFloat,
  parseInt: _parseInt,
  commaFormat: commaFormat
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (f) {
  for (var _len = arguments.length, a = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    a[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, b = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      b[_key2] = arguments[_key2];
    }

    return f.apply(undefined, a.concat(b));
  };
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curryN = __webpack_require__(0);

var _curryN2 = _interopRequireDefault(_curryN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _curryN2.default)(2, function (ks, x) {
  return ks.map(function (k) {
    return x[k];
  });
});

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pluralize = __webpack_require__(29);

var _pluralize2 = _interopRequireDefault(_pluralize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (n, label, pluralLabel) {
  return n + ' ' + (0, _pluralize2.default)(n, label, pluralLabel);
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return Math.random().toString().slice(2);
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 9;
  return min + Math.round(Math.random()) * (max - min);
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  var r = [];

  for (var i = a; i < b; i += step) {
    r.push(i);
  }

  return r;
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _omit = __webpack_require__(28);

var _omit2 = _interopRequireDefault(_omit);

var _curryN = __webpack_require__(0);

var _curryN2 = _interopRequireDefault(_curryN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (0, _curryN2.default)(3, function (a, b, x) {
  return _extends({}, (0, _omit2.default)([a], x), _defineProperty({}, b, x[a]));
});

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _when = __webpack_require__(104);

var _when2 = _interopRequireDefault(_when);

var _always = __webpack_require__(105);

var _always2 = _interopRequireDefault(_always);

var _mapObjIndexed = __webpack_require__(106);

var _mapObjIndexed2 = _interopRequireDefault(_mapObjIndexed);

var _curryN = __webpack_require__(0);

var _curryN2 = _interopRequireDefault(_curryN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _curryN2.default)(3, function (f, v, x) {
  return (0, _mapObjIndexed2.default)((0, _when2.default)(f, (0, _always2.default)(v)), x);
});

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 =
/*#__PURE__*/
__webpack_require__(24);
/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is satisfied, the function will return the result of calling
 * the `whenTrueFn` function with the same argument. If the predicate is not
 * satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> b) -> a -> a | b
 * @param {Function} pred       A predicate function
 * @param {Function} whenTrueFn A function to invoke when the `condition`
 *                              evaluates to a truthy value.
 * @param {*}        x          An object to test with the `pred` function and
 *                              pass to `whenTrueFn` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `whenTrueFn`.
 * @see R.ifElse, R.unless, R.cond
 * @example
 *
 *      // truncate :: String -> String
 *      const truncate = R.when(
 *        R.propSatisfies(R.gt(R.__, 10), 'length'),
 *        R.pipe(R.take(10), R.append('…'), R.join(''))
 *      );
 *      truncate('12345');         //=> '12345'
 *      truncate('0123456789ABC'); //=> '0123456789…'
 */


var when =
/*#__PURE__*/
_curry3(function when(pred, whenTrueFn, x) {
  return pred(x) ? whenTrueFn(x) : x;
});

module.exports = when;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 =
/*#__PURE__*/
__webpack_require__(2);
/**
 * Returns a function that always returns the given value. Note that for
 * non-primitives the value returned is a reference to the original value.
 *
 * This function is known as `const`, `constant`, or `K` (for K combinator) in
 * other languages and libraries.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> (* -> a)
 * @param {*} val The value to wrap in a function
 * @return {Function} A Function :: * -> val.
 * @example
 *
 *      const t = R.always('Tee');
 *      t(); //=> 'Tee'
 */


var always =
/*#__PURE__*/
_curry1(function always(val) {
  return function () {
    return val;
  };
});

module.exports = always;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 =
/*#__PURE__*/
__webpack_require__(1);

var _reduce =
/*#__PURE__*/
__webpack_require__(20);

var keys =
/*#__PURE__*/
__webpack_require__(8);
/**
 * An Object-specific version of [`map`](#map). The function is applied to three
 * arguments: *(value, key, obj)*. If only the value is significant, use
 * [`map`](#map) instead.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig ((*, String, Object) -> *) -> Object -> Object
 * @param {Function} fn
 * @param {Object} obj
 * @return {Object}
 * @see R.map
 * @example
 *
 *      const xyz = { x: 1, y: 2, z: 3 };
 *      const prependKeyAndDouble = (num, key, obj) => key + (num * 2);
 *
 *      R.mapObjIndexed(prependKeyAndDouble, xyz); //=> { x: 'x2', y: 'y4', z: 'z6' }
 */


var mapObjIndexed =
/*#__PURE__*/
_curry2(function mapObjIndexed(fn, obj) {
  return _reduce(function (acc, key) {
    acc[key] = fn(obj[key], key, obj);
    return acc;
  }, {}, keys(obj));
});

module.exports = mapObjIndexed;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curryN = __webpack_require__(0);

var _curryN2 = _interopRequireDefault(_curryN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _curryN2.default)(2, function (t, x) {
  return new Promise(function (resolve) {
    return setTimeout(function () {
      return resolve(x);
    }, t);
  });
});

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curryN = __webpack_require__(0);

var _curryN2 = _interopRequireDefault(_curryN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _curryN2.default)(2, function (precision, x) {
  return Math.round(x * Math.pow(10, precision)) / Math.pow(10, precision);
});

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {
  return b === 0 ? 0 : a / b;
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (t) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, t);
  });
};

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curryN = __webpack_require__(0);

var _curryN2 = _interopRequireDefault(_curryN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _curryN2.default)(3, function (i, n, v) {
  return v.slice(0, i).concat(v.slice(i + n));
});

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  // Stack promises to avoid race conditions
  var latest = Promise.resolve();

  return function track(x) {
    // Wrap our value in a promise just in case
    var cur = Promise.resolve(x);

    // Update our latest promise
    latest = cur;

    // Detect whether track got called again by comparing cur
    // against latest. If cur is obsolete, return latest instead.
    var guard = function guard(cb) {
      return function (result) {
        return cur === latest ? cb(result) : track(latest);
      };
    };

    return Promise.resolve(cur).then(guard(function (v) {
      return Promise.resolve(v);
    }), guard(function (v) {
      return Promise.reject(v);
    }));
  };
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curryN = __webpack_require__(0);

var _curryN2 = _interopRequireDefault(_curryN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _curryN2.default)(2, function (k, xs) {
  var r = 0;

  for (var i = 0; i < xs.length; i += 1) {
    r += xs[i][k];
  }

  return r;
});

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _is = __webpack_require__(3);

var _is2 = _interopRequireDefault(_is);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var summarize = function summarize(target) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

  if (depth === 0 && ((0, _is2.default)(Array, target) || (0, _is2.default)(Object, target))) {
    return '<' + (typeof target === 'undefined' ? 'undefined' : _typeof(target)) + '>';
  }

  if ((0, _is2.default)(Array, target)) {
    target = target.map(function (x) {
      return summarize(x, depth - 1);
    });

    return target.length < 3 ? '[' + target.join(', ') + ']' : '[' + target.slice(0, 2).join(', ') + ', ...and ' + (target.length - 3) + ' more]';
  }

  if ((0, _is2.default)(Object, target)) {
    var pairs = [];

    for (var k in target) {
      pairs.push(k + ': ' + summarize(target[k], depth - 1));
    }

    return '{' + pairs.join(', ') + '}';
  }

  if ((0, _is2.default)(Symbol, target)) {
    return target.toString();
  }

  return JSON.stringify(target);
};

exports.default = summarize;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _switcher = __webpack_require__(30);

var _switcher2 = _interopRequireDefault(_switcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _switcher2.default.apply(undefined, arguments)();
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (fn) {
  return function (value) {
    fn(value);

    return value;
  };
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (fn, timeout) {
  var lastCall = 0;

  return function () {
    var now = new Date().valueOf();

    if (now - timeout > lastCall) {
      lastCall = now;
      fn.apply(undefined, arguments);
    }
  };
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  return function () {
    throw new Error(m);
  };
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toPascal3 = __webpack_require__(31);

var _toPascal4 = _interopRequireDefault(_toPascal3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

exports.default = function (x) {
  var _toPascal = (0, _toPascal4.default)(x),
      _toPascal2 = _toArray(_toPascal),
      first = _toPascal2[0],
      rest = _toPascal2.slice(1);

  return (first || '').toLowerCase() + rest.join('');
};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toSnake = __webpack_require__(4);

var _toSnake2 = _interopRequireDefault(_toSnake);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (x) {
  return (0, _toSnake2.default)(x).replace(/_/g, '-');
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toSnake = __webpack_require__(4);

var _toSnake2 = _interopRequireDefault(_toSnake);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (x) {
  return (0, _toSnake2.default)(x).toUpperCase();
};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toSnake = __webpack_require__(4);

var _toSnake2 = _interopRequireDefault(_toSnake);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

exports.default = function (x) {
  return (0, _toSnake2.default)(x).split('_').map(function (_ref) {
    var _ref2 = _toArray(_ref),
        a = _ref2[0],
        w = _ref2.slice(1);

    return [(a || '').toUpperCase()].concat(_toConsumableArray(w)).join('');
  }).join(' ');
};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x) {
  return x.slice(0, 1).toUpperCase() + x.slice(1);
};

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _updatePath = __webpack_require__(32);

var _updatePath2 = _interopRequireDefault(_updatePath);

var _curryN = __webpack_require__(0);

var _curryN2 = _interopRequireDefault(_curryN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _curryN2.default)(3, function (k, f, x) {
  return (0, _updatePath2.default)([k], function (v, p) {
    return f(v, p);
  }, x);
});

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uuid = __webpack_require__(126);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _uuid.v4;
  }
});
var UUID = exports.UUID = '^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$';

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_126__;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return new Promise(function () {
    return null;
  });
};

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (f) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  return new Promise(function (resolve) {
    (function tryIt() {
      var r = f();

      if (r) {
        resolve(r);
      } else {
        setTimeout(tryIt, t);
      }
    })();
  });
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=hurdak.js.map