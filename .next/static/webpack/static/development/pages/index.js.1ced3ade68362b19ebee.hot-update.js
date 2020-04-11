webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/hero/contact/index.js":
/*!******************************************!*\
  !*** ./components/hero/contact/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! email-validator */ "./node_modules/email-validator/index.js");
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(email_validator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var phone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! phone */ "./node_modules/phone/dist/index.js");
/* harmony import */ var phone__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(phone__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _FormInput__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FormInput */ "./components/hero/contact/FormInput.js");
/* harmony import */ var _FormMessaging__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./FormMessaging */ "./components/hero/contact/FormMessaging.js");
/* harmony import */ var _bin_postContactForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../bin/postContactForm */ "./bin/postContactForm.js");
/* harmony import */ var _bin_materializeLoader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../bin/materializeLoader */ "./bin/materializeLoader.js");









var _jsxFileName = "/mnt/c/Users/antho/Desktop/Graham-drywall/components/hero/contact/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var Contact = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Contact, _React$Component);

  var _super = _createSuper(Contact);

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Contact, null, [{
    key: "FieldNames",
    get: function get() {
      return ['name', 'phone', 'email', 'message'];
    }
  }]);

  function Contact(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Contact);

    _this = _super.call(this, props); // initial state object for form fields

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleInputOnChange", function (e) {
      e.target.classList.add('active');
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, name, value));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "emailIsValid", function () {
      return email_validator__WEBPACK_IMPORTED_MODULE_10__["validate"](_this.state.email);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "phoneIsValid", function () {
      var result = phone__WEBPACK_IMPORTED_MODULE_11___default()(_this.state.phone, 'USA', true);
      return result.length > 0;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "setError", function (fieldName, bool) {
      return _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, "".concat(fieldName, "Error"), bool));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "validateFields", function () {
      // validates specified fields,
      var fieldsToValidate = ['email', 'phone']; // returns array of errors

      var errors = []; // runs validator fieldIsValid for each

      fieldsToValidate.forEach(function (fieldName) {
        var isValid = _this["".concat(fieldName, "IsValid")]();

        if (!isValid) errors.push("".concat(fieldName, " is invalid"));

        _this.setError(fieldName, !isValid);
      });
      return errors;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "isMissingFields", function () {
      // iterates over field names, checks the field has a value in state
      // if there is no value sets its error state to true
      // returns true if any field is missing
      var missingFieldNames = [];
      var filledFieldNames = []; // sort fieldName into missing or filled

      _this.constructor.FieldNames.forEach(function (fieldName) {
        (!_this.state[fieldName] ? missingFieldNames : filledFieldNames).push(fieldName);
      }); // set fieldError to true or false


      missingFieldNames.forEach(function (fieldName) {
        return _this.setError(fieldName, true);
      });
      filledFieldNames.forEach(function (fieldName) {
        return _this.setError(fieldName, false);
      });
      return missingFieldNames.length > 0;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleErrors", function () {
      // holds errors generated from existence and validation checks
      var errors = [];

      var isMissingFields = _this.isMissingFields();

      if (isMissingFields) {
        // add error message if missing any fields
        errors.push('The highlighted fields are required');
      } else {
        // validates fields, add errors for invalid fields
        errors.push.apply(errors, _this.validateFields());
      } // generates the error message from errors and saves it to state for display
      // as feedback to the user, if none will be empty string


      _this.setState({
        error: errors.join(', ')
      }); // if there are any errors, return false


      return errors.length > 0;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "getErrorStatus", function (fieldName) {
      // helper for getting a fields error state by fieldName
      return _this.state["".concat(fieldName, "Error")];
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleSubmit", function _callee(e) {
      var _this$state, name, phone, email, message, failureMsg, successCallback, failCallback;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // prevent page from refreshing on submit
              e.preventDefault(); // set request status to inflight and force update to disable button

              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_this.setState({
                inflight: true
              }));

            case 3:
              _context.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_this.forceUpdate());

            case 5:
              // Runs only if there are no errors
              if (!_this.handleErrors()) {
                _this$state = _this.state, name = _this$state.name, phone = _this$state.phone, email = _this$state.email, message = _this$state.message;
                failureMsg = 'Something went wrong. Please give us a call instead'; // postContactForm will success or fail callback depending on whether
                // the request resolves or errors out

                successCallback = function successCallback(res) {
                  var success = res.status == 200;

                  _this.setState({
                    success: success,
                    error: success ? '' : failureMsg
                  });
                };

                failCallback = function failCallback() {
                  return _this.setState({
                    success: false,
                    error: failureMsg
                  });
                };

                Object(_bin_postContactForm__WEBPACK_IMPORTED_MODULE_14__["default"])({
                  name: name,
                  phone: phone,
                  email: email,
                  message: message
                }, successCallback, failCallback);
              } // 3 second delay before enabling button


              setTimeout(function () {
                return _this.setState({
                  inflight: false
                });
              }, 3000);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    });

    var stateForFields = {}; // fills initial value and error state for fields

    _this.constructor.FieldNames.forEach(function (fieldName) {
      stateForFields[fieldName] = '';
      stateForFields["".concat(fieldName, "Error")] = false;
    });

    _this.state = _objectSpread({}, stateForFields, {
      success: false,
      error: '',
      inflight: false
    });
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Contact, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          success = _this$state2.success,
          error = _this$state2.error,
          inflight = _this$state2.inflight; // sets contact form messaging based on success state

      var messaging = success ? {
        title: "THANK YOU",
        msg: "We've received your request. Keep an eye out for our email or phone call. We look forward to working with you."
      } : {
        title: "REQUEST A FREE ESTIMATE",
        msg: "Short but sweet prompt to user to contact us. Not too long, not too short."
      };
      return __jsx("form", {
        className: "contact-form col col s12 m12 l5 right z-depth-3",
        onSubmit: this.handleSubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 7
        }
      }, __jsx(_FormMessaging__WEBPACK_IMPORTED_MODULE_13__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, messaging, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 9
        }
      })), !success && __jsx("div", {
        className: "contact-fields",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }
      }, this.constructor.FieldNames.map(function (name) {
        return __jsx(_FormInput__WEBPACK_IMPORTED_MODULE_12__["default"], {
          name: name,
          value: _this2.state[name],
          onChange: _this2.handleInputOnChange,
          error: _this2.getErrorStatus(name),
          key: name,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 15
          }
        });
      }), error && __jsx("p", {
        className: "contact-error",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 23
        }
      }, error), __jsx("button", {
        className: "waves-effect waves-light btn contact-button left",
        disabled: inflight,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 13
        }
      }, "Submit Your Request")));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=index.js.1ced3ade68362b19ebee.hot-update.js.map