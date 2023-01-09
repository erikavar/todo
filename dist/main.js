/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    background-color: #F0ECE2;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n#navbar {\n    font-size: 28px;\n    margin: 50px 50px 0px;\n    display: flex;\n}\n\n#sidebar {\n    font-size: 22px;\n    margin: 50px 25px 50px 50px;\n}\n\n#pageContainer {\n    display: grid;\n    grid-template-columns: 220px auto;\n}\n\n#taskContainer {\n    margin: 50px 50px 50px;\n}\n\n.tagline {\n    color: #B3B3B3;\n    margin-left: 16px;\n}\n\n.sidebarBtn {\n    margin: 30px 0px 0px;\n}\n\n.sidebarBtn:hover {\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.selectedBtn {\n    text-decoration: underline;\n}\n\n.task {\n    background-color: white;\n    color: #D9D9D9;\n    font-size: 18px;\n    padding: 25px 25px 25px;\n    margin-bottom: 30px;\n    display: flex;\n}\n\n.taskDetails {\n    display: flex;\n    justify-content: space-around;\n}\n\n.taskDetails > * {\n    width: 184px;\n}\n\n.newTaskBtn, .checkOffTaskBtn {\n    color: white;\n    background-color: #D9D9D9;\n    height: 29px;\n    width: 35px;\n    padding-top: 6px;\n    border-radius: 50%;\n    text-align: center;\n    margin-right: 10px;\n}\n\nform {\n    display: flex;\n}\n\ninput {\n    font-size: 18px;\n    width: 180px;\n    border: none;\n}\n\ninput:hover, .addTaskBtn:hover, .checkOffTaskBtn:hover, .deleteTaskBtn:hover, .editBtn:hover {\n    cursor: pointer;\n}\n\ninput:focus {\n    outline: none;\n}\n\n.taskText {\n    padding-top: 4px;\n    color: black;\n}\n\n.addTaskBtn, .addInHomeView, .addInTaskView {\n    background-color: #f1eee7;\n    border: none;\n    font-size: 18px;\n    width: 200px;\n}\n\n.deleteTaskBtn, .editBtn {\n    background-color: #f1eee7;\n    border: none;\n    font-size: 18px;\n    width: 100px;\n}\n\n.completedTask {\n    text-decoration: line-through;\n    text-decoration-color: black;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,yCAAyC;AAC7C;;AAEA;IACI,eAAe;IACf,qBAAqB;IACrB,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,iCAAiC;AACrC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,0BAA0B;IAC1B,eAAe;AACnB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,uBAAuB;IACvB,cAAc;IACd,eAAe;IACf,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,6BAA6B;IAC7B,4BAA4B;AAChC","sourcesContent":["html {\n    background-color: #F0ECE2;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n#navbar {\n    font-size: 28px;\n    margin: 50px 50px 0px;\n    display: flex;\n}\n\n#sidebar {\n    font-size: 22px;\n    margin: 50px 25px 50px 50px;\n}\n\n#pageContainer {\n    display: grid;\n    grid-template-columns: 220px auto;\n}\n\n#taskContainer {\n    margin: 50px 50px 50px;\n}\n\n.tagline {\n    color: #B3B3B3;\n    margin-left: 16px;\n}\n\n.sidebarBtn {\n    margin: 30px 0px 0px;\n}\n\n.sidebarBtn:hover {\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.selectedBtn {\n    text-decoration: underline;\n}\n\n.task {\n    background-color: white;\n    color: #D9D9D9;\n    font-size: 18px;\n    padding: 25px 25px 25px;\n    margin-bottom: 30px;\n    display: flex;\n}\n\n.taskDetails {\n    display: flex;\n    justify-content: space-around;\n}\n\n.taskDetails > * {\n    width: 184px;\n}\n\n.newTaskBtn, .checkOffTaskBtn {\n    color: white;\n    background-color: #D9D9D9;\n    height: 29px;\n    width: 35px;\n    padding-top: 6px;\n    border-radius: 50%;\n    text-align: center;\n    margin-right: 10px;\n}\n\nform {\n    display: flex;\n}\n\ninput {\n    font-size: 18px;\n    width: 180px;\n    border: none;\n}\n\ninput:hover, .addTaskBtn:hover, .checkOffTaskBtn:hover, .deleteTaskBtn:hover, .editBtn:hover {\n    cursor: pointer;\n}\n\ninput:focus {\n    outline: none;\n}\n\n.taskText {\n    padding-top: 4px;\n    color: black;\n}\n\n.addTaskBtn, .addInHomeView, .addInTaskView {\n    background-color: #f1eee7;\n    border: none;\n    font-size: 18px;\n    width: 200px;\n}\n\n.deleteTaskBtn, .editBtn {\n    background-color: #f1eee7;\n    border: none;\n    font-size: 18px;\n    width: 100px;\n}\n\n.completedTask {\n    text-decoration: line-through;\n    text-decoration-color: black;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/addTask.js":
/*!************************!*\
  !*** ./src/addTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storeTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storeTasks */ "./src/storeTasks.js");
/* harmony import */ var _newTaskConstructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newTaskConstructor */ "./src/newTaskConstructor.js");



function addTaskToArray() {

    let newTask = new _newTaskConstructor__WEBPACK_IMPORTED_MODULE_1__["default"]();

    newTask.title = document.getElementById("taskTitle").value;
    newTask.label = document.getElementById("taskLabel").value;
    newTask.priority = document.getElementById("taskPriority").value;
    newTask.dueDate = document.getElementById("dueDate").value;

    if (newTask.title) {
        _storeTasks__WEBPACK_IMPORTED_MODULE_0__["default"].push(newTask);
    }

    document.querySelector("form").reset();

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTaskToArray);

/***/ }),

/***/ "./src/arrayToDisplay.js":
/*!*******************************!*\
  !*** ./src/arrayToDisplay.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storeTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storeTasks */ "./src/storeTasks.js");
/* harmony import */ var _storeDatedTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storeDatedTasks */ "./src/storeDatedTasks.js");



function arrayToDisplay(arr) {

    document.getElementById("addedTaskContainer").textContent = "";

    arr.forEach(function(task, index) {

        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        const detailsDiv = document.createElement("div");
        detailsDiv.classList.add("taskDetails");

        const check = document.createElement("div");
        check.classList.add("checkOffTaskBtn");
        if (arr === _storeTasks__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            check.classList.add("homeCheck");
            check.classList.remove("calCheck");
            task.homePosition = index + 1;
        } else if (arr === _storeDatedTasks__WEBPACK_IMPORTED_MODULE_1__["default"]) {
            check.classList.add("calCheck");
            check.classList.remove("homeCheck");
        }
        check.textContent = "☐";
        check.addEventListener("click", task.checkOffTask.bind(task));
        detailsDiv.appendChild(check);

        let deets = Object.keys(task);

        deets.forEach((property) => {
            const div = document.createElement("div");
            if (property !== "done" && property !== "checkOffTask" && property!== "homePosition") {
                div.textContent = (`${task[property]}`);
                div.classList.add("taskText");
                div.classList.add(property);
                detailsDiv.appendChild(div);
            }
        });

        if (task.done === "done") {
            check.classList.add("completedTask");
            detailsDiv.classList.add("completedTask");
        } 

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("deleteTaskBtn")

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("editBtn");
       
        taskDiv.setAttribute("data-index-number", index);

        deleteBtn.addEventListener("click", function() {
            if (confirm("This task will be permanently deleted.")) {
                document.getElementById("addedTaskContainer").removeChild(taskDiv);
                arr.splice(Number(taskDiv.dataset.indexNumber), 1);
            }
        });
        
        editBtn.addEventListener("click", function() {        
            let taskTitle = taskDiv.querySelector(".title");
            let label = taskDiv.querySelector(".label");
            let priority = taskDiv.querySelector(".priority");
            let dueDate = taskDiv.querySelector(".dueDate");
            taskTitle.contentEditable = true;
            dueDate.contentEditable = true;
            label.contentEditable = true;
            priority.contentEditable = true;
            editBtn.textContent = "Save";
            editBtn.addEventListener("click", function() {
                task.title = taskTitle.textContent;
                task.label = label.textContent;
                task.priority = priority.textContent;
                task.dueDate = dueDate.textContent;
                arr.splice(Number(taskDiv.dataset.indexNumber), 1, task);
                taskTitle.contentEditable = false;
                dueDate.contentEditable = false;
                editBtn.textContent = "Edit";
            });
            taskTitle.contentEditable = true;
            label.contentEditable = true;
            priority.contentEditable = true;
            dueDate.contentEditable = true;
            editBtn.textContent = "Save";
        });

        taskDiv.appendChild(detailsDiv);
        taskDiv.appendChild(deleteBtn);
        taskDiv.appendChild(editBtn);
        document.getElementById("addedTaskContainer").appendChild(taskDiv);
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayToDisplay);

/***/ }),

/***/ "./src/checkOffTasks.js":
/*!******************************!*\
  !*** ./src/checkOffTasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayToDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayToDisplay */ "./src/arrayToDisplay.js");
/* harmony import */ var _storeDatedTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storeDatedTasks */ "./src/storeDatedTasks.js");
/* harmony import */ var _storeTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storeTasks */ "./src/storeTasks.js");




function checkOffTasks(x) {
    document.getElementById("addedTaskContainer").addEventListener("click", function(e) {
        const target = e.target.closest(".checkOffTaskBtn");
        if(target) {
            if(target.classList.contains("calCheck")) {
                // loop through storeDatedTasks and storeTasks
                // find objects with common title but not common done property value
                
                let arr1 = _storeTasks__WEBPACK_IMPORTED_MODULE_2__["default"].filter(o => _storeDatedTasks__WEBPACK_IMPORTED_MODULE_1__["default"].some(({title, done}) => o.title === title && o.done !== done));

                //replace storeTasks done value with storeDatedTasks done value
                // 1) find where storeTasks title === arr1 title
                // 2) storeTasks[index].done === done ? not done : done
                for (let i=0; i<arr1.length; i++) {
                    let index = _storeTasks__WEBPACK_IMPORTED_MODULE_2__["default"].map(e => e.title).indexOf(arr1[i].title);
                    for (let j=0; j<_storeTasks__WEBPACK_IMPORTED_MODULE_2__["default"].length; j++) {
                        if (j===index) {
                            _storeTasks__WEBPACK_IMPORTED_MODULE_2__["default"][j].done === "not done" ? _storeTasks__WEBPACK_IMPORTED_MODULE_2__["default"][j].done = "done" : _storeTasks__WEBPACK_IMPORTED_MODULE_2__["default"][j].done = "not done"; 
                        }
                    }
                }
            }
            (0,_arrayToDisplay__WEBPACK_IMPORTED_MODULE_0__["default"])(x);
        }
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkOffTasks);

/***/ }),

/***/ "./src/loadCalView.js":
/*!****************************!*\
  !*** ./src/loadCalView.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayToDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayToDisplay */ "./src/arrayToDisplay.js");
/* harmony import */ var _checkOffTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkOffTasks */ "./src/checkOffTasks.js");
/* harmony import */ var _sortByDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sortByDate */ "./src/sortByDate.js");
/* harmony import */ var _storeDatedTasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storeDatedTasks */ "./src/storeDatedTasks.js");
//import storeTasks from "./storeTasks";





function loadCalView() {

    (0,_sortByDate__WEBPACK_IMPORTED_MODULE_2__["default"])();

    document.getElementById("calViewBtn").classList.add("selectedBtn");
    document.getElementById("homeViewBtn").classList.remove("selectedBtn");

    document.querySelector(".addTaskBtn").classList.add("addInCalView");
    document.querySelector(".addTaskBtn").classList.remove("addInHomeView");

    document.getElementById("addedTaskContainer").textContent = "";

    (0,_arrayToDisplay__WEBPACK_IMPORTED_MODULE_0__["default"])(_storeDatedTasks__WEBPACK_IMPORTED_MODULE_3__["default"]);
    (0,_checkOffTasks__WEBPACK_IMPORTED_MODULE_1__["default"])(_storeDatedTasks__WEBPACK_IMPORTED_MODULE_3__["default"]);
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadCalView);

/***/ }),

/***/ "./src/loadHomeView.js":
/*!*****************************!*\
  !*** ./src/loadHomeView.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storeTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storeTasks */ "./src/storeTasks.js");
/* harmony import */ var _arrayToDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrayToDisplay */ "./src/arrayToDisplay.js");
/* harmony import */ var _checkOffTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkOffTasks */ "./src/checkOffTasks.js");
/* harmony import */ var _sortByDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sortByDate */ "./src/sortByDate.js");





function loadHomeView() {
    document.getElementById("homeViewBtn").classList.add("selectedBtn");
    document.getElementById("calViewBtn").classList.remove("selectedBtn");

    document.querySelector(".addTaskBtn").classList.add("addInHomeView");
    document.querySelector(".addTaskBtn").classList.remove("addInCalView");
    
    (0,_arrayToDisplay__WEBPACK_IMPORTED_MODULE_1__["default"])(_storeTasks__WEBPACK_IMPORTED_MODULE_0__["default"]);
    (0,_checkOffTasks__WEBPACK_IMPORTED_MODULE_2__["default"])(_storeTasks__WEBPACK_IMPORTED_MODULE_0__["default"]);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomeView);

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function generateNavbar() {
    const logo = document.createElement("div");
    logo.textContent = "get it done";
    logo.classList.add("logo");
    document.getElementById("navbar").appendChild(logo);

    const tagline = document.createElement("div");
    tagline.textContent = "| a todo app";
    tagline.classList.add("tagline");
    document.getElementById("navbar").appendChild(tagline);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateNavbar);

/***/ }),

/***/ "./src/newTaskConstructor.js":
/*!***********************************!*\
  !*** ./src/newTaskConstructor.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayToDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayToDisplay */ "./src/arrayToDisplay.js");
/* harmony import */ var _loadHomeView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadHomeView */ "./src/loadHomeView.js");



function Task (title, label, priority, dueDate, homePosition) {
    this.title = title,
    this.label = label,
    this.priority = priority,
    this.dueDate = dueDate,
    this.done = "not done"; 
    this.checkOffTask = function() {
        this.done === "not done" ? this.done = "done" : this.done = "not done";
    }
    this.homePosition = homePosition;   
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function generateSidebar() {
    const allTasksBtn = document.createElement("div");
    allTasksBtn.textContent = "all tasks";
    allTasksBtn.setAttribute("id", "homeViewBtn");
    allTasksBtn.classList.add("selectedBtn");

    const calViewBtn = document.createElement("div");
    calViewBtn.textContent = "calendar view";
    calViewBtn.setAttribute("id", "calViewBtn");

    const projViewBtn = document.createElement("div");
    projViewBtn.textContent = "project view";
    projViewBtn.setAttribute("id", "projViewBtn");

    allTasksBtn.classList.add("sidebarBtn");
    calViewBtn.classList.add("sidebarBtn");
    projViewBtn.classList.add("sidebarBtn");

    document.getElementById("sidebar").appendChild(allTasksBtn);
    document.getElementById("sidebar").appendChild(calViewBtn);
    document.getElementById("sidebar").appendChild(projViewBtn);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateSidebar);

/***/ }),

/***/ "./src/sortByDate.js":
/*!***************************!*\
  !*** ./src/sortByDate.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storeTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storeTasks */ "./src/storeTasks.js");
/* harmony import */ var _storeDatedTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storeDatedTasks */ "./src/storeDatedTasks.js");



function sortByDate() {

    _storeDatedTasks__WEBPACK_IMPORTED_MODULE_1__["default"].length = 0;

    let arr1 = _storeTasks__WEBPACK_IMPORTED_MODULE_0__["default"].map(obj => {
        return {...obj, dueDate: new Date(obj.dueDate)};
    });

    arr1.sort((a, b) => Number(a.dueDate) - Number(b.dueDate));

    for (const obj of arr1) {
        _storeDatedTasks__WEBPACK_IMPORTED_MODULE_1__["default"].push(obj);
    }

    // so that task deletion is registered in home view array too:
    
    document.addEventListener("click", function(e) {
        const target = e.target.closest(".deleteTaskBtn");
        if(target) {

            let arr2 = _storeTasks__WEBPACK_IMPORTED_MODULE_0__["default"].filter(({ title }) => _storeDatedTasks__WEBPACK_IMPORTED_MODULE_1__["default"].some((e) => e.title === title));

            _storeTasks__WEBPACK_IMPORTED_MODULE_0__["default"].length = 0;
    
            for (const obj of arr2) {
                _storeTasks__WEBPACK_IMPORTED_MODULE_0__["default"].push(obj);
            };
        }
    });

    document.addEventListener("click", function(e) {
        const target = e.target.closest(".editBtn");
        if(target) {
            if(target.textContent === "Edit") {

                let arr2 = _storeDatedTasks__WEBPACK_IMPORTED_MODULE_1__["default"];                
                arr2.sort((a, b) => a.homePosition - b.homePosition);

                _storeTasks__WEBPACK_IMPORTED_MODULE_0__["default"].length = 0;
        
                for (const obj of arr2) {
                    _storeTasks__WEBPACK_IMPORTED_MODULE_0__["default"].push(obj);
                };
            }
        }
    });

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortByDate);

/***/ }),

/***/ "./src/storeDatedTasks.js":
/*!********************************!*\
  !*** ./src/storeDatedTasks.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let storeDatedTasks = [];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storeDatedTasks);

/***/ }),

/***/ "./src/storeTasks.js":
/*!***************************!*\
  !*** ./src/storeTasks.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let storeTasks = [];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storeTasks);

/***/ }),

/***/ "./src/taskAdderForm.js":
/*!******************************!*\
  !*** ./src/taskAdderForm.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const form = document.createElement("form");
form.setAttribute("method", "post");
form.setAttribute("action", "submit");

const taskTitle = document.createElement("input");
taskTitle.setAttribute("type", "text");
taskTitle.setAttribute("name", "taskTitle");
taskTitle.setAttribute("id", "taskTitle");
taskTitle.setAttribute("placeholder", "New task title");
taskTitle.setAttribute("autocomplete", "off");

const taskLabel = document.createElement("input");
taskLabel.setAttribute("type", "text");
taskLabel.setAttribute("name", "taskLabel");
taskLabel.setAttribute("id", "taskLabel");
taskLabel.setAttribute("placeholder", "Project");
taskLabel.setAttribute("autocomplete", "off");

const taskPriority = document.createElement("input");
taskPriority.setAttribute("type", "text");
taskPriority.setAttribute("list", "priorityOptions");
taskPriority.setAttribute("name", "taskPriority");
taskPriority.setAttribute("id", "taskPriority");
taskPriority.setAttribute("placeholder", "Priority");
taskPriority.setAttribute("autocomplete", "off");

const priorityOptions = document.createElement("datalist");
priorityOptions.setAttribute("id", "priorityOptions");

const option1 = document.createElement("option");
option1.setAttribute("value", "Urgent");
priorityOptions.appendChild(option1);

const option2 = document.createElement("option");
option2.setAttribute("value", "High");
priorityOptions.appendChild(option2);

const option3 = document.createElement("option");
option3.setAttribute("value", "Normal");
priorityOptions.appendChild(option3);

taskPriority.appendChild(priorityOptions);

const dueDate = document.createElement("input");
dueDate.setAttribute("type", "text");
dueDate.setAttribute("name", "dueDate");
dueDate.setAttribute("id", "dueDate");
dueDate.setAttribute("placeholder", "Due date");
dueDate.setAttribute("onfocus","(this.type='date')");
dueDate.setAttribute("autocomplete", "off");

const s = document.createElement("button");
s.setAttribute("type", "button");
s.classList.add("addTaskBtn");
s.classList.add("addInHomeView");
s.textContent = "Add to list";

form.appendChild(taskTitle);
form.appendChild(taskLabel);
form.appendChild(taskPriority);
form.appendChild(dueDate);
form.appendChild(s);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);

/***/ }),

/***/ "./src/taskList.js":
/*!*************************!*\
  !*** ./src/taskList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _taskAdderForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskAdderForm */ "./src/taskAdderForm.js");


function generateTaskList() {
    const task = document.createElement("div");
    task.classList.add("task");
    document.getElementById("inputContainer").appendChild(task);

    const newTaskBtn = document.createElement("div");
    newTaskBtn.textContent = "→";
    newTaskBtn.classList.add("newTaskBtn");
    document.querySelector(".task").appendChild(newTaskBtn);

    document.querySelector(".task").appendChild(_taskAdderForm__WEBPACK_IMPORTED_MODULE_0__["default"]);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateTaskList);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _taskList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskList */ "./src/taskList.js");
/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addTask */ "./src/addTask.js");
/* harmony import */ var _loadCalView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadCalView */ "./src/loadCalView.js");
/* harmony import */ var _loadHomeView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadHomeView */ "./src/loadHomeView.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./src/style.css");








(0,_navbar__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_sidebar__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_taskList__WEBPACK_IMPORTED_MODULE_2__["default"])();
document.querySelector(".addTaskBtn").addEventListener("click", _addTask__WEBPACK_IMPORTED_MODULE_3__["default"]);
document.getElementById("calViewBtn").addEventListener("click", _loadCalView__WEBPACK_IMPORTED_MODULE_4__["default"]);
document.getElementById("homeViewBtn").addEventListener("click", _loadHomeView__WEBPACK_IMPORTED_MODULE_5__["default"]);

document.querySelector(".addTaskBtn").addEventListener("click", someListener);
function someListener(event) {
    let element = event.target;
    if (element.classList.contains("addInHomeView")) {
        (0,_loadHomeView__WEBPACK_IMPORTED_MODULE_5__["default"])();
    } else if (element.classList.contains("addInCalView")) {
        (0,_loadCalView__WEBPACK_IMPORTED_MODULE_4__["default"])();
    }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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by8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2FkZFRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9hcnJheVRvRGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NoZWNrT2ZmVGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2FkQ2FsVmlldy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2xvYWRIb21lVmlldy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL25hdmJhci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL25ld1Rhc2tDb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zb3J0QnlEYXRlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3RvcmVEYXRlZFRhc2tzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3RvcmVUYXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Rhc2tBZGRlckZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90YXNrTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEVDRTI7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jbmF2YmFyIHtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBtYXJnaW46IDUwcHggNTBweCAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBtYXJnaW46IDUwcHggMjVweCA1MHB4IDUwcHg7XFxufVxcblxcbiNwYWdlQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMjBweCBhdXRvO1xcbn1cXG5cXG4jdGFza0NvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogNTBweCA1MHB4IDUwcHg7XFxufVxcblxcbi50YWdsaW5lIHtcXG4gICAgY29sb3I6ICNCM0IzQjM7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xcbn1cXG5cXG4uc2lkZWJhckJ0biB7XFxuICAgIG1hcmdpbjogMzBweCAwcHggMHB4O1xcbn1cXG5cXG4uc2lkZWJhckJ0bjpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZWxlY3RlZEJ0biB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogI0Q5RDlEOTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBwYWRkaW5nOiAyNXB4IDI1cHggMjVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRhc2tEZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi50YXNrRGV0YWlscyA+ICoge1xcbiAgICB3aWR0aDogMTg0cHg7XFxufVxcblxcbi5uZXdUYXNrQnRuLCAuY2hlY2tPZmZUYXNrQnRuIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDlEOUQ5O1xcbiAgICBoZWlnaHQ6IDI5cHg7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHdpZHRoOiAxODBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5pbnB1dDpob3ZlciwgLmFkZFRhc2tCdG46aG92ZXIsIC5jaGVja09mZlRhc2tCdG46aG92ZXIsIC5kZWxldGVUYXNrQnRuOmhvdmVyLCAuZWRpdEJ0bjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4udGFza1RleHQge1xcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5hZGRUYXNrQnRuLCAuYWRkSW5Ib21lVmlldywgLmFkZEluVGFza1ZpZXcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFlZWU3O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uZGVsZXRlVGFza0J0biwgLmVkaXRCdG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFlZWU3O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4uY29tcGxldGVkVGFzayB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IGJsYWNrO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qiw0QkFBNEI7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEVDRTI7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jbmF2YmFyIHtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBtYXJnaW46IDUwcHggNTBweCAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBtYXJnaW46IDUwcHggMjVweCA1MHB4IDUwcHg7XFxufVxcblxcbiNwYWdlQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMjBweCBhdXRvO1xcbn1cXG5cXG4jdGFza0NvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogNTBweCA1MHB4IDUwcHg7XFxufVxcblxcbi50YWdsaW5lIHtcXG4gICAgY29sb3I6ICNCM0IzQjM7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xcbn1cXG5cXG4uc2lkZWJhckJ0biB7XFxuICAgIG1hcmdpbjogMzBweCAwcHggMHB4O1xcbn1cXG5cXG4uc2lkZWJhckJ0bjpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZWxlY3RlZEJ0biB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogI0Q5RDlEOTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBwYWRkaW5nOiAyNXB4IDI1cHggMjVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRhc2tEZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi50YXNrRGV0YWlscyA+ICoge1xcbiAgICB3aWR0aDogMTg0cHg7XFxufVxcblxcbi5uZXdUYXNrQnRuLCAuY2hlY2tPZmZUYXNrQnRuIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDlEOUQ5O1xcbiAgICBoZWlnaHQ6IDI5cHg7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHdpZHRoOiAxODBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5pbnB1dDpob3ZlciwgLmFkZFRhc2tCdG46aG92ZXIsIC5jaGVja09mZlRhc2tCdG46aG92ZXIsIC5kZWxldGVUYXNrQnRuOmhvdmVyLCAuZWRpdEJ0bjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4udGFza1RleHQge1xcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5hZGRUYXNrQnRuLCAuYWRkSW5Ib21lVmlldywgLmFkZEluVGFza1ZpZXcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFlZWU3O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uZGVsZXRlVGFza0J0biwgLmVkaXRCdG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFlZWU3O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4uY29tcGxldGVkVGFzayB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IGJsYWNrO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBzdG9yZVRhc2tzIGZyb20gXCIuL3N0b3JlVGFza3NcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL25ld1Rhc2tDb25zdHJ1Y3RvclwiO1xuXG5mdW5jdGlvbiBhZGRUYXNrVG9BcnJheSgpIHtcblxuICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2soKTtcblxuICAgIG5ld1Rhc2sudGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tUaXRsZVwiKS52YWx1ZTtcbiAgICBuZXdUYXNrLmxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrTGFiZWxcIikudmFsdWU7XG4gICAgbmV3VGFzay5wcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza1ByaW9yaXR5XCIpLnZhbHVlO1xuICAgIG5ld1Rhc2suZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKS52YWx1ZTtcblxuICAgIGlmIChuZXdUYXNrLnRpdGxlKSB7XG4gICAgICAgIHN0b3JlVGFza3MucHVzaChuZXdUYXNrKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKS5yZXNldCgpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFkZFRhc2tUb0FycmF5OyIsImltcG9ydCBzdG9yZVRhc2tzIGZyb20gXCIuL3N0b3JlVGFza3NcIjtcbmltcG9ydCBzdG9yZURhdGVkVGFza3MgZnJvbSBcIi4vc3RvcmVEYXRlZFRhc2tzXCI7XG5cbmZ1bmN0aW9uIGFycmF5VG9EaXNwbGF5KGFycikge1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRlZFRhc2tDb250YWluZXJcIikudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgYXJyLmZvckVhY2goZnVuY3Rpb24odGFzaywgaW5kZXgpIHtcblxuICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcblxuICAgICAgICBjb25zdCBkZXRhaWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGV0YWlsc0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFza0RldGFpbHNcIik7XG5cbiAgICAgICAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjaGVjay5jbGFzc0xpc3QuYWRkKFwiY2hlY2tPZmZUYXNrQnRuXCIpO1xuICAgICAgICBpZiAoYXJyID09PSBzdG9yZVRhc2tzKSB7XG4gICAgICAgICAgICBjaGVjay5jbGFzc0xpc3QuYWRkKFwiaG9tZUNoZWNrXCIpO1xuICAgICAgICAgICAgY2hlY2suY2xhc3NMaXN0LnJlbW92ZShcImNhbENoZWNrXCIpO1xuICAgICAgICAgICAgdGFzay5ob21lUG9zaXRpb24gPSBpbmRleCArIDE7XG4gICAgICAgIH0gZWxzZSBpZiAoYXJyID09PSBzdG9yZURhdGVkVGFza3MpIHtcbiAgICAgICAgICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoXCJjYWxDaGVja1wiKTtcbiAgICAgICAgICAgIGNoZWNrLmNsYXNzTGlzdC5yZW1vdmUoXCJob21lQ2hlY2tcIik7XG4gICAgICAgIH1cbiAgICAgICAgY2hlY2sudGV4dENvbnRlbnQgPSBcIuKYkFwiO1xuICAgICAgICBjaGVjay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFzay5jaGVja09mZlRhc2suYmluZCh0YXNrKSk7XG4gICAgICAgIGRldGFpbHNEaXYuYXBwZW5kQ2hpbGQoY2hlY2spO1xuXG4gICAgICAgIGxldCBkZWV0cyA9IE9iamVjdC5rZXlzKHRhc2spO1xuXG4gICAgICAgIGRlZXRzLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgaWYgKHByb3BlcnR5ICE9PSBcImRvbmVcIiAmJiBwcm9wZXJ0eSAhPT0gXCJjaGVja09mZlRhc2tcIiAmJiBwcm9wZXJ0eSE9PSBcImhvbWVQb3NpdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgZGl2LnRleHRDb250ZW50ID0gKGAke3Rhc2tbcHJvcGVydHldfWApO1xuICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwidGFza1RleHRcIik7XG4gICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQocHJvcGVydHkpO1xuICAgICAgICAgICAgICAgIGRldGFpbHNEaXYuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRhc2suZG9uZSA9PT0gXCJkb25lXCIpIHtcbiAgICAgICAgICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWRUYXNrXCIpO1xuICAgICAgICAgICAgZGV0YWlsc0Rpdi5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkVGFza1wiKTtcbiAgICAgICAgfSBcblxuICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICAgICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZVRhc2tCdG5cIilcblxuICAgICAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICAgICAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJlZGl0QnRuXCIpO1xuICAgICAgIFxuICAgICAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXgtbnVtYmVyXCIsIGluZGV4KTtcblxuICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGNvbmZpcm0oXCJUaGlzIHRhc2sgd2lsbCBiZSBwZXJtYW5lbnRseSBkZWxldGVkLlwiKSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkZWRUYXNrQ29udGFpbmVyXCIpLnJlbW92ZUNoaWxkKHRhc2tEaXYpO1xuICAgICAgICAgICAgICAgIGFyci5zcGxpY2UoTnVtYmVyKHRhc2tEaXYuZGF0YXNldC5pbmRleE51bWJlciksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyAgICAgICAgXG4gICAgICAgICAgICBsZXQgdGFza1RpdGxlID0gdGFza0Rpdi5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpO1xuICAgICAgICAgICAgbGV0IGxhYmVsID0gdGFza0Rpdi5xdWVyeVNlbGVjdG9yKFwiLmxhYmVsXCIpO1xuICAgICAgICAgICAgbGV0IHByaW9yaXR5ID0gdGFza0Rpdi5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5XCIpO1xuICAgICAgICAgICAgbGV0IGR1ZURhdGUgPSB0YXNrRGl2LnF1ZXJ5U2VsZWN0b3IoXCIuZHVlRGF0ZVwiKTtcbiAgICAgICAgICAgIHRhc2tUaXRsZS5jb250ZW50RWRpdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgZHVlRGF0ZS5jb250ZW50RWRpdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgbGFiZWwuY29udGVudEVkaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHByaW9yaXR5LmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gXCJTYXZlXCI7XG4gICAgICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0YXNrLnRpdGxlID0gdGFza1RpdGxlLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIHRhc2subGFiZWwgPSBsYWJlbC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHkudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgdGFzay5kdWVEYXRlID0gZHVlRGF0ZS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICBhcnIuc3BsaWNlKE51bWJlcih0YXNrRGl2LmRhdGFzZXQuaW5kZXhOdW1iZXIpLCAxLCB0YXNrKTtcbiAgICAgICAgICAgICAgICB0YXNrVGl0bGUuY29udGVudEVkaXRhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZHVlRGF0ZS5jb250ZW50RWRpdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRhc2tUaXRsZS5jb250ZW50RWRpdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgbGFiZWwuY29udGVudEVkaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHByaW9yaXR5LmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICBkdWVEYXRlLmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gXCJTYXZlXCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGV0YWlsc0Rpdik7XG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRlZFRhc2tDb250YWluZXJcIikuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFycmF5VG9EaXNwbGF5OyIsImltcG9ydCBhcnJheVRvRGlzcGxheSBmcm9tIFwiLi9hcnJheVRvRGlzcGxheVwiO1xuaW1wb3J0IHN0b3JlRGF0ZWRUYXNrcyBmcm9tIFwiLi9zdG9yZURhdGVkVGFza3NcIjtcbmltcG9ydCBzdG9yZVRhc2tzIGZyb20gXCIuL3N0b3JlVGFza3NcIjtcblxuZnVuY3Rpb24gY2hlY2tPZmZUYXNrcyh4KSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRlZFRhc2tDb250YWluZXJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQuY2xvc2VzdChcIi5jaGVja09mZlRhc2tCdG5cIik7XG4gICAgICAgIGlmKHRhcmdldCkge1xuICAgICAgICAgICAgaWYodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNhbENoZWNrXCIpKSB7XG4gICAgICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIHN0b3JlRGF0ZWRUYXNrcyBhbmQgc3RvcmVUYXNrc1xuICAgICAgICAgICAgICAgIC8vIGZpbmQgb2JqZWN0cyB3aXRoIGNvbW1vbiB0aXRsZSBidXQgbm90IGNvbW1vbiBkb25lIHByb3BlcnR5IHZhbHVlXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IGFycjEgPSBzdG9yZVRhc2tzLmZpbHRlcihvID0+IHN0b3JlRGF0ZWRUYXNrcy5zb21lKCh7dGl0bGUsIGRvbmV9KSA9PiBvLnRpdGxlID09PSB0aXRsZSAmJiBvLmRvbmUgIT09IGRvbmUpKTtcblxuICAgICAgICAgICAgICAgIC8vcmVwbGFjZSBzdG9yZVRhc2tzIGRvbmUgdmFsdWUgd2l0aCBzdG9yZURhdGVkVGFza3MgZG9uZSB2YWx1ZVxuICAgICAgICAgICAgICAgIC8vIDEpIGZpbmQgd2hlcmUgc3RvcmVUYXNrcyB0aXRsZSA9PT0gYXJyMSB0aXRsZVxuICAgICAgICAgICAgICAgIC8vIDIpIHN0b3JlVGFza3NbaW5kZXhdLmRvbmUgPT09IGRvbmUgPyBub3QgZG9uZSA6IGRvbmVcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8YXJyMS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBzdG9yZVRhc2tzLm1hcChlID0+IGUudGl0bGUpLmluZGV4T2YoYXJyMVtpXS50aXRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGo9MDsgajxzdG9yZVRhc2tzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaj09PWluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVUYXNrc1tqXS5kb25lID09PSBcIm5vdCBkb25lXCIgPyBzdG9yZVRhc2tzW2pdLmRvbmUgPSBcImRvbmVcIiA6IHN0b3JlVGFza3Nbal0uZG9uZSA9IFwibm90IGRvbmVcIjsgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcnJheVRvRGlzcGxheSh4KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjaGVja09mZlRhc2tzOyIsIi8vaW1wb3J0IHN0b3JlVGFza3MgZnJvbSBcIi4vc3RvcmVUYXNrc1wiO1xuaW1wb3J0IGFycmF5VG9EaXNwbGF5IGZyb20gXCIuL2FycmF5VG9EaXNwbGF5XCI7XG5pbXBvcnQgY2hlY2tPZmZUYXNrcyBmcm9tIFwiLi9jaGVja09mZlRhc2tzXCI7XG5pbXBvcnQgc29ydEJ5RGF0ZSBmcm9tIFwiLi9zb3J0QnlEYXRlXCI7XG5pbXBvcnQgc3RvcmVEYXRlZFRhc2tzIGZyb20gXCIuL3N0b3JlRGF0ZWRUYXNrc1wiO1xuXG5mdW5jdGlvbiBsb2FkQ2FsVmlldygpIHtcblxuICAgIHNvcnRCeURhdGUoKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FsVmlld0J0blwiKS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRCdG5cIik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lVmlld0J0blwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRCdG5cIik7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRhc2tCdG5cIikuY2xhc3NMaXN0LmFkZChcImFkZEluQ2FsVmlld1wiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRhc2tCdG5cIikuY2xhc3NMaXN0LnJlbW92ZShcImFkZEluSG9tZVZpZXdcIik7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZGVkVGFza0NvbnRhaW5lclwiKS50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICBhcnJheVRvRGlzcGxheShzdG9yZURhdGVkVGFza3MpO1xuICAgIGNoZWNrT2ZmVGFza3Moc3RvcmVEYXRlZFRhc2tzKTtcbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZENhbFZpZXc7IiwiaW1wb3J0IHN0b3JlVGFza3MgZnJvbSBcIi4vc3RvcmVUYXNrc1wiO1xuaW1wb3J0IGFycmF5VG9EaXNwbGF5IGZyb20gXCIuL2FycmF5VG9EaXNwbGF5XCI7XG5pbXBvcnQgY2hlY2tPZmZUYXNrcyBmcm9tIFwiLi9jaGVja09mZlRhc2tzXCI7XG5pbXBvcnQgc29ydEJ5RGF0ZSBmcm9tIFwiLi9zb3J0QnlEYXRlXCI7XG5cbmZ1bmN0aW9uIGxvYWRIb21lVmlldygpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVWaWV3QnRuXCIpLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZEJ0blwiKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbFZpZXdCdG5cIikuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkQnRuXCIpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUYXNrQnRuXCIpLmNsYXNzTGlzdC5hZGQoXCJhZGRJbkhvbWVWaWV3XCIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkVGFza0J0blwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWRkSW5DYWxWaWV3XCIpO1xuICAgIFxuICAgIGFycmF5VG9EaXNwbGF5KHN0b3JlVGFza3MpO1xuICAgIGNoZWNrT2ZmVGFza3Moc3RvcmVUYXNrcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lVmlldzsiLCJmdW5jdGlvbiBnZW5lcmF0ZU5hdmJhcigpIHtcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb2dvLnRleHRDb250ZW50ID0gXCJnZXQgaXQgZG9uZVwiO1xuICAgIGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ29cIik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXJcIikuYXBwZW5kQ2hpbGQobG9nbyk7XG5cbiAgICBjb25zdCB0YWdsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YWdsaW5lLnRleHRDb250ZW50ID0gXCJ8IGEgdG9kbyBhcHBcIjtcbiAgICB0YWdsaW5lLmNsYXNzTGlzdC5hZGQoXCJ0YWdsaW5lXCIpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyXCIpLmFwcGVuZENoaWxkKHRhZ2xpbmUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZU5hdmJhcjsiLCJpbXBvcnQgYXJyYXlUb0Rpc3BsYXkgZnJvbSBcIi4vYXJyYXlUb0Rpc3BsYXlcIjtcbmltcG9ydCBsb2FkSG9tZVZpZXcgZnJvbSBcIi4vbG9hZEhvbWVWaWV3XCI7XG5cbmZ1bmN0aW9uIFRhc2sgKHRpdGxlLCBsYWJlbCwgcHJpb3JpdHksIGR1ZURhdGUsIGhvbWVQb3NpdGlvbikge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZSxcbiAgICB0aGlzLmxhYmVsID0gbGFiZWwsXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5LFxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGUsXG4gICAgdGhpcy5kb25lID0gXCJub3QgZG9uZVwiOyBcbiAgICB0aGlzLmNoZWNrT2ZmVGFzayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmRvbmUgPT09IFwibm90IGRvbmVcIiA/IHRoaXMuZG9uZSA9IFwiZG9uZVwiIDogdGhpcy5kb25lID0gXCJub3QgZG9uZVwiO1xuICAgIH1cbiAgICB0aGlzLmhvbWVQb3NpdGlvbiA9IGhvbWVQb3NpdGlvbjsgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFzazsiLCJmdW5jdGlvbiBnZW5lcmF0ZVNpZGViYXIoKSB7XG4gICAgY29uc3QgYWxsVGFza3NCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFsbFRhc2tzQnRuLnRleHRDb250ZW50ID0gXCJhbGwgdGFza3NcIjtcbiAgICBhbGxUYXNrc0J0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWVWaWV3QnRuXCIpO1xuICAgIGFsbFRhc2tzQnRuLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZEJ0blwiKTtcblxuICAgIGNvbnN0IGNhbFZpZXdCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhbFZpZXdCdG4udGV4dENvbnRlbnQgPSBcImNhbGVuZGFyIHZpZXdcIjtcbiAgICBjYWxWaWV3QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FsVmlld0J0blwiKTtcblxuICAgIGNvbnN0IHByb2pWaWV3QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qVmlld0J0bi50ZXh0Q29udGVudCA9IFwicHJvamVjdCB2aWV3XCI7XG4gICAgcHJvalZpZXdCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qVmlld0J0blwiKTtcblxuICAgIGFsbFRhc2tzQnRuLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyQnRuXCIpO1xuICAgIGNhbFZpZXdCdG4uY2xhc3NMaXN0LmFkZChcInNpZGViYXJCdG5cIik7XG4gICAgcHJvalZpZXdCdG4uY2xhc3NMaXN0LmFkZChcInNpZGViYXJCdG5cIik7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJcIikuYXBwZW5kQ2hpbGQoYWxsVGFza3NCdG4pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclwiKS5hcHBlbmRDaGlsZChjYWxWaWV3QnRuKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJcIikuYXBwZW5kQ2hpbGQocHJvalZpZXdCdG4pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZVNpZGViYXI7IiwiaW1wb3J0IHN0b3JlVGFza3MgZnJvbSBcIi4vc3RvcmVUYXNrc1wiO1xuaW1wb3J0IHN0b3JlRGF0ZWRUYXNrcyBmcm9tIFwiLi9zdG9yZURhdGVkVGFza3NcIjtcblxuZnVuY3Rpb24gc29ydEJ5RGF0ZSgpIHtcblxuICAgIHN0b3JlRGF0ZWRUYXNrcy5sZW5ndGggPSAwO1xuXG4gICAgbGV0IGFycjEgPSBzdG9yZVRhc2tzLm1hcChvYmogPT4ge1xuICAgICAgICByZXR1cm4gey4uLm9iaiwgZHVlRGF0ZTogbmV3IERhdGUob2JqLmR1ZURhdGUpfTtcbiAgICB9KTtcblxuICAgIGFycjEuc29ydCgoYSwgYikgPT4gTnVtYmVyKGEuZHVlRGF0ZSkgLSBOdW1iZXIoYi5kdWVEYXRlKSk7XG5cbiAgICBmb3IgKGNvbnN0IG9iaiBvZiBhcnIxKSB7XG4gICAgICAgIHN0b3JlRGF0ZWRUYXNrcy5wdXNoKG9iaik7XG4gICAgfVxuXG4gICAgLy8gc28gdGhhdCB0YXNrIGRlbGV0aW9uIGlzIHJlZ2lzdGVyZWQgaW4gaG9tZSB2aWV3IGFycmF5IHRvbzpcbiAgICBcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldC5jbG9zZXN0KFwiLmRlbGV0ZVRhc2tCdG5cIik7XG4gICAgICAgIGlmKHRhcmdldCkge1xuXG4gICAgICAgICAgICBsZXQgYXJyMiA9IHN0b3JlVGFza3MuZmlsdGVyKCh7IHRpdGxlIH0pID0+IHN0b3JlRGF0ZWRUYXNrcy5zb21lKChlKSA9PiBlLnRpdGxlID09PSB0aXRsZSkpO1xuXG4gICAgICAgICAgICBzdG9yZVRhc2tzLmxlbmd0aCA9IDA7XG4gICAgXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG9iaiBvZiBhcnIyKSB7XG4gICAgICAgICAgICAgICAgc3RvcmVUYXNrcy5wdXNoKG9iaik7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldC5jbG9zZXN0KFwiLmVkaXRCdG5cIik7XG4gICAgICAgIGlmKHRhcmdldCkge1xuICAgICAgICAgICAgaWYodGFyZ2V0LnRleHRDb250ZW50ID09PSBcIkVkaXRcIikge1xuXG4gICAgICAgICAgICAgICAgbGV0IGFycjIgPSBzdG9yZURhdGVkVGFza3M7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGFycjIuc29ydCgoYSwgYikgPT4gYS5ob21lUG9zaXRpb24gLSBiLmhvbWVQb3NpdGlvbik7XG5cbiAgICAgICAgICAgICAgICBzdG9yZVRhc2tzLmxlbmd0aCA9IDA7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgb2JqIG9mIGFycjIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVUYXNrcy5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHNvcnRCeURhdGU7IiwibGV0IHN0b3JlRGF0ZWRUYXNrcyA9IFtdO1xuZXhwb3J0IGRlZmF1bHQgc3RvcmVEYXRlZFRhc2tzOyIsImxldCBzdG9yZVRhc2tzID0gW107XG5leHBvcnQgZGVmYXVsdCBzdG9yZVRhc2tzOyIsImltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuZm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJwb3N0XCIpO1xuZm9ybS5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiwgXCJzdWJtaXRcIik7XG5cbmNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbnRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbnRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFza1RpdGxlXCIpO1xudGFza1RpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFza1RpdGxlXCIpO1xudGFza1RpdGxlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiTmV3IHRhc2sgdGl0bGVcIik7XG50YXNrVGl0bGUuc2V0QXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIsIFwib2ZmXCIpO1xuXG5jb25zdCB0YXNrTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG50YXNrTGFiZWwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG50YXNrTGFiZWwuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRhc2tMYWJlbFwiKTtcbnRhc2tMYWJlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2tMYWJlbFwiKTtcbnRhc2tMYWJlbC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlByb2plY3RcIik7XG50YXNrTGFiZWwuc2V0QXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIsIFwib2ZmXCIpO1xuXG5jb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG50YXNrUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG50YXNrUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwibGlzdFwiLCBcInByaW9yaXR5T3B0aW9uc1wiKTtcbnRhc2tQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFza1ByaW9yaXR5XCIpO1xudGFza1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFza1ByaW9yaXR5XCIpO1xudGFza1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiUHJpb3JpdHlcIik7XG50YXNrUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIsIFwib2ZmXCIpO1xuXG5jb25zdCBwcmlvcml0eU9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGF0YWxpc3RcIik7XG5wcmlvcml0eU9wdGlvbnMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eU9wdGlvbnNcIik7XG5cbmNvbnN0IG9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xub3B0aW9uMS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlVyZ2VudFwiKTtcbnByaW9yaXR5T3B0aW9ucy5hcHBlbmRDaGlsZChvcHRpb24xKTtcblxuY29uc3Qgb3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5vcHRpb24yLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiSGlnaFwiKTtcbnByaW9yaXR5T3B0aW9ucy5hcHBlbmRDaGlsZChvcHRpb24yKTtcblxuY29uc3Qgb3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5vcHRpb24zLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTm9ybWFsXCIpO1xucHJpb3JpdHlPcHRpb25zLmFwcGVuZENoaWxkKG9wdGlvbjMpO1xuXG50YXNrUHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJpb3JpdHlPcHRpb25zKTtcblxuY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbmR1ZURhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5kdWVEYXRlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkdWVEYXRlXCIpO1xuZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImR1ZURhdGVcIik7XG5kdWVEYXRlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRHVlIGRhdGVcIik7XG5kdWVEYXRlLnNldEF0dHJpYnV0ZShcIm9uZm9jdXNcIixcIih0aGlzLnR5cGU9J2RhdGUnKVwiKTtcbmR1ZURhdGUuc2V0QXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIsIFwib2ZmXCIpO1xuXG5jb25zdCBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnMuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbnMuY2xhc3NMaXN0LmFkZChcImFkZFRhc2tCdG5cIik7XG5zLmNsYXNzTGlzdC5hZGQoXCJhZGRJbkhvbWVWaWV3XCIpO1xucy50ZXh0Q29udGVudCA9IFwiQWRkIHRvIGxpc3RcIjtcblxuZm9ybS5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuZm9ybS5hcHBlbmRDaGlsZCh0YXNrTGFiZWwpO1xuZm9ybS5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbmZvcm0uYXBwZW5kQ2hpbGQocyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm07IiwiaW1wb3J0IGZvcm0gZnJvbSBcIi4vdGFza0FkZGVyRm9ybVwiO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVRhc2tMaXN0KCkge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2suY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dENvbnRhaW5lclwiKS5hcHBlbmRDaGlsZCh0YXNrKTtcblxuICAgIGNvbnN0IG5ld1Rhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Rhc2tCdG4udGV4dENvbnRlbnQgPSBcIuKGklwiO1xuICAgIG5ld1Rhc2tCdG4uY2xhc3NMaXN0LmFkZChcIm5ld1Rhc2tCdG5cIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrXCIpLmFwcGVuZENoaWxkKG5ld1Rhc2tCdG4pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrXCIpLmFwcGVuZENoaWxkKGZvcm0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZVRhc2tMaXN0OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBnZW5lcmF0ZU5hdmJhciBmcm9tICcuL25hdmJhcic7XG5pbXBvcnQgZ2VuZXJhdGVTaWRlYmFyIGZyb20gJy4vc2lkZWJhcic7XG5pbXBvcnQgZ2VuZXJhdGVUYXNrTGlzdCBmcm9tICcuL3Rhc2tMaXN0JztcbmltcG9ydCBhZGRUYXNrVG9BcnJheSBmcm9tICcuL2FkZFRhc2snO1xuaW1wb3J0IGxvYWRDYWxWaWV3IGZyb20gJy4vbG9hZENhbFZpZXcnO1xuaW1wb3J0IGxvYWRIb21lVmlldyBmcm9tICcuL2xvYWRIb21lVmlldyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZ2VuZXJhdGVOYXZiYXIoKTtcbmdlbmVyYXRlU2lkZWJhcigpO1xuZ2VuZXJhdGVUYXNrTGlzdCgpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUYXNrQnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUYXNrVG9BcnJheSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbFZpZXdCdG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRDYWxWaWV3KTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVZpZXdCdG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRIb21lVmlldyk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkVGFza0J0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc29tZUxpc3RlbmVyKTtcbmZ1bmN0aW9uIHNvbWVMaXN0ZW5lcihldmVudCkge1xuICAgIGxldCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImFkZEluSG9tZVZpZXdcIikpIHtcbiAgICAgICAgbG9hZEhvbWVWaWV3KCk7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImFkZEluQ2FsVmlld1wiKSkge1xuICAgICAgICBsb2FkQ2FsVmlldygpO1xuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=