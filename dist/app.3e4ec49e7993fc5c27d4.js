(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "dSPy":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return print; });\nfunction print(text){\r\n    console.log(text)\r\n}\n\n//# sourceURL=webpack:///./src/print.js?");

/***/ }),

/***/ "tjUo":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"LvDl\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print.js */ \"dSPy\");\n\r\n\r\n\r\nfunction component(){\r\n    let element = document.createElement('div')\r\n    element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join(['Hello', 'webpack!'],' ')\r\n    element.onclick = _print_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bind(null, 'Hello webpack!')\r\n    return element\r\n}\r\n\r\ndocument.body.appendChild(component())\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

},[["tjUo","runtime","vendors"]]]);