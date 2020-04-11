webpackHotUpdate("static/development/pages/index.js",{

/***/ "./bin/postContactForm.js":
/*!********************************!*\
  !*** ./bin/postContactForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function postContactForm(data, successCallback, failCallback) {
  fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data)
  }).then(successCallback)["catch"](failCallback);
}

/* harmony default export */ __webpack_exports__["default"] = (postContactForm);

/***/ })

})
//# sourceMappingURL=index.js.1d82c1df7a281688ac05.hot-update.js.map