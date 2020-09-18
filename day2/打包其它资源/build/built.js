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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/css-loader/dist/cjs.js!./src/iconfont.css":
/*!*****************************************************************************************!*\
  !*** D:/workspace/webpack_study/node_modules/css-loader/dist/cjs.js!./src/iconfont.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../../node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _iconfont_eot_t_1600430009716__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iconfont.eot?t=1600430009716 */ \"./src/iconfont.eot?t=1600430009716\");\n/* harmony import */ var _iconfont_woff_t_1600430009716__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iconfont.woff?t=1600430009716 */ \"./src/iconfont.woff?t=1600430009716\");\n/* harmony import */ var _iconfont_ttf_t_1600430009716__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./iconfont.ttf?t=1600430009716 */ \"./src/iconfont.ttf?t=1600430009716\");\n/* harmony import */ var _iconfont_svg_t_1600430009716__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./iconfont.svg?t=1600430009716 */ \"./src/iconfont.svg?t=1600430009716\");\n// Imports\n\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_iconfont_eot_t_1600430009716__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_iconfont_eot_t_1600430009716__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { hash: \"#iefix\" });\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_iconfont_woff_t_1600430009716__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_iconfont_ttf_t_1600430009716__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_iconfont_svg_t_1600430009716__WEBPACK_IMPORTED_MODULE_5__[\"default\"], { hash: \"#iconfont\" });\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"@font-face {font-family: \\\"iconfont\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \"); /* IE9 */\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('embedded-opentype'), \\n  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),\\n  url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format('woff'),\\n  url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format('truetype'), \\n  url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \") format('svg'); /* iOS 4.1- */\\n}\\n\\n.iconfont {\\n  font-family: \\\"iconfont\\\" !important;\\n  font-size: 16px;\\n  font-style: normal;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\n.icon-doctor:before {\\n  content: \\\"\\\\e70c\\\";\\n}\\n\\n.icon-ruler:before {\\n  content: \\\"\\\\e70e\\\";\\n}\\n\\n.icon-find:before {\\n  content: \\\"\\\\e70f\\\";\\n}\\n\\n.icon-notebook:before {\\n  content: \\\"\\\\e710\\\";\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/iconfont.css?D:/workspace/webpack_study/node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************************************!*\
  !*** D:/workspace/webpack_study/node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///D:/workspace/webpack_study/node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************************************!*\
  !*** D:/workspace/webpack_study/node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///D:/workspace/webpack_study/node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************************************!*\
  !*** D:/workspace/webpack_study/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///D:/workspace/webpack_study/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/iconfont.css":
/*!**************************!*\
  !*** ./src/iconfont.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./iconfont.css */ \"../../node_modules/css-loader/dist/cjs.js!./src/iconfont.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/iconfont.css?");

/***/ }),

/***/ "./src/iconfont.eot?t=1600430009716":
/*!******************************************!*\
  !*** ./src/iconfont.eot?t=1600430009716 ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"ac87536804.eot\");\n\n//# sourceURL=webpack:///./src/iconfont.eot?");

/***/ }),

/***/ "./src/iconfont.svg?t=1600430009716":
/*!******************************************!*\
  !*** ./src/iconfont.svg?t=1600430009716 ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"1717516f87.svg\");\n\n//# sourceURL=webpack:///./src/iconfont.svg?");

/***/ }),

/***/ "./src/iconfont.ttf?t=1600430009716":
/*!******************************************!*\
  !*** ./src/iconfont.ttf?t=1600430009716 ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"06cf78f6d8.ttf\");\n\n//# sourceURL=webpack:///./src/iconfont.ttf?");

/***/ }),

/***/ "./src/iconfont.woff?t=1600430009716":
/*!*******************************************!*\
  !*** ./src/iconfont.woff?t=1600430009716 ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"4e2ea23f9e.woff\");\n\n//# sourceURL=webpack:///./src/iconfont.woff?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _iconfont_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iconfont.css */ \"./src/iconfont.css\");\n/* harmony import */ var _iconfont_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_iconfont_css__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });