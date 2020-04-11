webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/contact/index.js":
/*!*************************************!*\
  !*** ./components/contact/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SectionHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SectionHeader */ "./components/SectionHeader.js");
/* harmony import */ var _Info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Info */ "./components/contact/Info.js");
/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./InputField */ "./components/contact/InputField.js");
/* harmony import */ var _ContactTemplate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ContactTemplate */ "./components/ContactTemplate.js");





var _jsxFileName = "/mnt/c/Users/antho/Desktop/Graham-drywall/components/contact/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Contact = /*#__PURE__*/function (_ContactTemplate) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Contact, _ContactTemplate);

  var _super = _createSuper(Contact);

  function Contact() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Contact);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Contact, [{
    key: "render",
    value: function render() {
      var _this = this;

      var FieldNames = this.constructor.FieldNames;
      var FieldOptions = this.constructor.FieldOptions;
      var _this$state = this.state,
          success = _this$state.success,
          error = _this$state.error,
          inflight = _this$state.inflight;
      return __jsx("section", {
        className: "section contact-us__container grey darken-4",
        id: "contact!",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 7
        }
      }, __jsx(_SectionHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "CONTACT US",
        className: "white-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "row container contact-us white",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }
      }, success ? __jsx("form", {
        className: "col s12 l7",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 15
        }
      }, FieldNames.map(function (name) {
        return __jsx(_InputField__WEBPACK_IMPORTED_MODULE_8__["default"], {
          icon: FieldOptions[name].icon,
          label: FieldOptions[name].label,
          type: FieldOptions[name].type,
          name: name,
          value: _this.state[name],
          onChange: _this.handleInputOnChange,
          error: _this.getErrorStatus(name),
          key: name,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 19
          }
        });
      }), error && __jsx("p", {
        className: "contact-error",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 27
        }
      }, error), __jsx("button", {
        className: "btn waves-effect waves-light col s12",
        disabled: inflight,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 17
        }
      }, "Submit"))) : __jsx("div", {
        className: "col s12 l7 contact-us__success amber section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }
      }, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 15
        }
      }, "Thanks For Contacting Us"), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 15
        }
      }, "Thank you for your interest in our services, we will respond as soon as possible.")), __jsx(_Info__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }
      })));
    }
  }], [{
    key: "FieldOptions",
    get: function get() {
      return {
        name: {
          icon: 'account_circle',
          label: 'Name',
          type: 'text'
        },
        phone: {
          icon: 'phone',
          label: 'Telephone',
          type: 'tel'
        },
        email: {
          icon: 'email',
          label: 'Email',
          type: 'email'
        },
        message: {
          icon: 'mode_edit',
          label: 'Message',
          type: 'text'
        }
      };
    }
  }]);

  return Contact;
}(_ContactTemplate__WEBPACK_IMPORTED_MODULE_9__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=index.js.558c68e54ec0b5acceeb.hot-update.js.map