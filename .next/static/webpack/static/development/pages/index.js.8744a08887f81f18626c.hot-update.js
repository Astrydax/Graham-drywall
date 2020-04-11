webpackHotUpdate("static/development/pages/index.js",{

/***/ "./bin/postContactForm.js":
/*!********************************!*\
  !*** ./bin/postContactForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var url = 'http://localhost:3000';

function postContactForm(data, successCallback, failCallback) {
  fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data)
  }).then(successCallback)["catch"](failCallback);
}

/* harmony default export */ __webpack_exports__["default"] = (postContactForm);

/***/ })

})
//# sourceMappingURL=index.js.8744a08887f81f18626c.hot-update.js.map