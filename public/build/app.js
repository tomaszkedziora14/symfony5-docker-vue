(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$":
/*!*****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j|t)sx?$ ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_12__.Controller);



/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _BasicInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasicInfo */ "./assets/BasicInfo.vue");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-vue/dist/bootstrap-vue.css */ "./node_modules/bootstrap-vue/dist/bootstrap-vue.css");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");

 // import App from './BasicCountryInfo';








var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

vue__WEBPACK_IMPORTED_MODULE_4__["default"].use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["default"]);
window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
vue__WEBPACK_IMPORTED_MODULE_4__["default"].config.productionTip = false;
var app = new vue__WEBPACK_IMPORTED_MODULE_4__["default"]({
  // el: '#app',
  components: {
    App: _BasicInfo__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  template: "<App/>" // render: h => h(App)

}).$mount('#app');

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/BasicInfo.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/BasicInfo.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  data: function data() {
    return {
      searchQuery: "",
      resources: [],
      sort: {
        key: '',
        isAsc: false
      },
      click: false
    };
  },
  computed: {
    sortedItems: function sortedItems() {
      var _this = this;

      var list = this.resources.slice();

      if (!!this.sort.key) {
        list.sort(function (a, b) {
          a = a[_this.sort.key];
          b = b[_this.sort.key];
          return (a === b ? 0 : a > b ? 1 : -1) * (_this.sort.isAsc ? 1 : -1);
        });
      }

      var lang = this.resources.filter(function (item) {
        console.log(item.languages.sName);
        return item.languages.sName;
      });

      if (!!this.sort.key) {
        lang.sort(function (a, b) {
          a = a[_this.sort.key];
          b = b[_this.sort.key];
          return (a === b ? 0 : a > b ? 1 : -1) * (_this.sort.isAsc ? 1 : -1);
        });
      }

      return list;
    },
    resultQuery: function resultQuery() {
      var _this2 = this;

      if (this.searchQuery) {
        var country = this.resources.filter(function (item) {
          return item.countryName.includes(_this2.searchQuery);
        });
        var code = this.resources.filter(function (item) {
          return item.countryCode.includes(_this2.searchQuery);
        });
        var lang = this.resources.filter(function (item) {
          if (item.languages.sName === _this2.searchQuery) {
            return item.languages.sName;
          }
        });
        return country.concat(code, lang);
      } else {
        return this.resources;
      }
    }
  },
  created: function created() {
    this.getBasicCountryInfo(), this.showHideTable();
  },
  methods: {
    getBasicCountryInfo: function getBasicCountryInfo() {
      var _this3 = this;

      axios.get('/country').then(function (response) {
        return _this3.resources = response.data;
      });
    },
    sortedClass: function sortedClass(key) {
      return this.sort.key === key ? "sorted ".concat(this.sort.isAsc ? 'asc' : 'desc') : '';
    },
    sortBy: function sortBy(key) {
      this.sort.isAsc = this.sort.key === key ? !this.sort.isAsc : false;
      this.sort.key = key;
    },
    showHideTable: function showHideTable() {}
  }
});

/***/ }),

/***/ "./assets/BasicInfo.vue":
/*!******************************!*\
  !*** ./assets/BasicInfo.vue ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BasicInfo_vue_vue_type_template_id_6af01444___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasicInfo.vue?vue&type=template&id=6af01444& */ "./assets/BasicInfo.vue?vue&type=template&id=6af01444&");
/* harmony import */ var _BasicInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasicInfo.vue?vue&type=script&lang=js& */ "./assets/BasicInfo.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BasicInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BasicInfo_vue_vue_type_template_id_6af01444___WEBPACK_IMPORTED_MODULE_0__.render,
  _BasicInfo_vue_vue_type_template_id_6af01444___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/BasicInfo.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/BasicInfo.vue?vue&type=script&lang=js&":
/*!*******************************************************!*\
  !*** ./assets/BasicInfo.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./BasicInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/BasicInfo.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/BasicInfo.vue?vue&type=template&id=6af01444&":
/*!*************************************************************!*\
  !*** ./assets/BasicInfo.vue?vue&type=template&id=6af01444& ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicInfo_vue_vue_type_template_id_6af01444___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicInfo_vue_vue_type_template_id_6af01444___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicInfo_vue_vue_type_template_id_6af01444___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./BasicInfo.vue?vue&type=template&id=6af01444& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/BasicInfo.vue?vue&type=template&id=6af01444&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/BasicInfo.vue?vue&type=template&id=6af01444&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/BasicInfo.vue?vue&type=template&id=6af01444& ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "panel panel-default" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "search-wrapper panel-heading col-sm-12" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.searchQuery,
                expression: "searchQuery"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text", placeholder: "Search" },
            domProps: { value: _vm.searchQuery },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.searchQuery = $event.target.value
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("table", { staticClass: "table" }, [
        _c("thead", [
          _c("tr", [
            _c(
              "th",
              {
                class: _vm.sortedClass("countryName"),
                on: {
                  click: function($event) {
                    return _vm.sortBy("countryName")
                  }
                }
              },
              [_vm._v("Country")]
            ),
            _vm._v(" "),
            _c(
              "th",
              {
                class: _vm.sortedClass("capitalName"),
                on: {
                  click: function($event) {
                    return _vm.sortBy("capitalName")
                  }
                }
              },
              [_vm._v("Capital")]
            ),
            _vm._v(" "),
            _c(
              "th",
              {
                class: _vm.sortedClass("continentName"),
                on: {
                  click: function($event) {
                    return _vm.sortBy("continentName")
                  }
                }
              },
              [_vm._v("Continent")]
            ),
            _vm._v(" "),
            _c(
              "th",
              {
                class: _vm.sortedClass("currency"),
                on: {
                  click: function($event) {
                    return _vm.sortBy("currency")
                  }
                }
              },
              [_vm._v("Currency")]
            ),
            _vm._v(" "),
            _c(
              "th",
              {
                class: _vm.sortedClass("flag"),
                on: {
                  click: function($event) {
                    return _vm.sortBy("flag")
                  }
                }
              },
              [_vm._v("Flag")]
            ),
            _vm._v(" "),
            _c(
              "th",
              {
                class: _vm.sortedClass("languages"),
                on: {
                  click: function($event) {
                    return _vm.sortBy("flag")
                  }
                }
              },
              [_vm._v("Languages")]
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.sortedItems, function(item) {
            return _c(
              "tr",
              [
                _c("td", [_vm._v(_vm._s(item.countryName))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.capitalName))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.continentName))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.currency))]),
                _vm._v(" "),
                _c("td", [
                  _c("img", {
                    attrs: {
                      src: item.flag,
                      alt: "",
                      width: "100",
                      height: "50"
                    }
                  })
                ]),
                _vm._v(" "),
                _vm._l(item, function(lang) {
                  return _c("td", [
                    _vm._v(
                      "\n\t\t\t\t\t\t " + _vm._s(lang.sName) + "\n\t\t\t\t\t "
                    )
                  ])
                })
              ],
              2
            )
          }),
          0
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _c("strong", [_vm._v(" All Resources")])
    ])
  }
]
render._withStripped = true



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_axios_index_js-node_m-4375b3"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsOEJBQThCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vYXNzZXRzL0Jhc2ljSW5mby52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0Jhc2ljSW5mby52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0Jhc2ljSW5mby52dWU/NGNiOCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQmFzaWNJbmZvLnZ1ZT9iMTZiIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC4oanx0KXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdzdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiXG5cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG4vLyBpbXBvcnQgQXBwIGZyb20gJy4vQmFzaWNDb3VudHJ5SW5mbyc7XG5pbXBvcnQgQXBwIGZyb20gJy4vQmFzaWNJbmZvJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnXG5pbXBvcnQgJ2Jvb3RzdHJhcC12dWUvZGlzdC9ib290c3RyYXAtdnVlLmNzcydcblxuaW1wb3J0IEJvb3RzdHJhcFZ1ZSBmcm9tICdib290c3RyYXAtdnVlJ1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcydcbmltcG9ydCAnYm9vdHN0cmFwLXZ1ZS9kaXN0L2Jvb3RzdHJhcC12dWUuY3NzJ1xudmFyIGpRdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG5WdWUudXNlKEJvb3RzdHJhcFZ1ZSlcblxud2luZG93LmF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXG5cbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xuICAgIC8vIGVsOiAnI2FwcCcsXG5cdFx0Y29tcG9uZW50czogeyBBcHB9LFxuXHRcdHRlbXBsYXRlOiBcIjxBcHAvPlwiXG5cdFx0IC8vIHJlbmRlcjogaCA9PiBoKEFwcClcbn0pLiRtb3VudCgnI2FwcCcpXG5cbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC4oanx0KXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2PlxyXG48ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxyXG48ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiPlxyXG5cdDxzdHJvbmc+IEFsbCBSZXNvdXJjZXM8L3N0cm9uZz5cclxuPC9kaXY+XHJcblx0XHRcdFx0IDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic2VhcmNoLXdyYXBwZXIgcGFuZWwtaGVhZGluZyBjb2wtc20tMTJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwic2VhcmNoUXVlcnlcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIC8+XHJcblx0XHRcdFx0XHRcdCBcdDwvZGl2PlxyXG5cdFx0XHRcdCA8L2Rpdj5cclxuXHJcbjwhLS1cdFx0XHQgPHRhYmxlICBjbGFzcz1cInRhYmxlXCIgaWQ9XCJxdWVyeVwiPi0tPlxyXG48IS0tXHRcdFx0XHRcdFx0XHRcdFx0XHQgPHRoZWFkPi0tPlxyXG48IS0tXHRcdFx0XHRcdFx0XHRcdFx0XHQgPHRyPi0tPlxyXG48IS0tXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCA8dGg+Q291bnRyeTwvdGg+LS0+XHJcbjwhLS1cdFx0XHRcdFx0XHRcdFx0XHQgPHRoID5DYXBpdGFsPC90aD4tLT5cclxuPCEtLVx0XHRcdFx0XHRcdFx0XHRcdCA8dGg+Q29udGluZW50PC90aD4tLT5cclxuPCEtLVx0XHRcdFx0XHRcdFx0XHRcdCA8dGg+Q3VycmVuY3k8L3RoPi0tPlxyXG48IS0tXHRcdFx0XHRcdFx0XHRcdFx0IDx0aD5MYW5ndWFnZXM8L3RoPi0tPlxyXG48IS0tXHRcdFx0XHRcdFx0XHRcdFx0IDx0aD5GbGFnPC90aD4tLT5cclxuPCEtLVx0XHRcdFx0XHRcdFx0XHQgPC90cj4tLT5cclxuPCEtLVx0XHRcdFx0XHRcdCA8L3RoZWFkPi0tPlxyXG48IS0tXHRcdFx0XHRcdFx0IDx0Ym9keT4tLT5cclxuPCEtLVx0XHRcdFx0XHRcdCBcdFx0PHRyIHYtZm9yPVwiaXRlbSBpbiByZXN1bHRRdWVyeVwiPi0tPlxyXG48IS0tXHRcdFx0XHRcdFx0XHRcdFx0IDx0ZD57e2l0ZW0uY291bnRyeU5hbWV9fTwvdGQ+LS0+XHJcbjwhLS1cdFx0XHRcdFx0XHRcdFx0XHQgPHRkPnt7aXRlbS5jYXBpdGFsTmFtZX19PC90ZD4tLT5cclxuPCEtLVx0XHRcdFx0XHRcdFx0XHRcdCA8dGQ+e3tpdGVtLmNvbnRpbmVudE5hbWV9fTwvdGQ+LS0+XHJcbjwhLS1cdFx0XHRcdFx0XHRcdFx0XHQgPHRkPnt7aXRlbS5jdXJyZW5jeX19PC90ZD4tLT5cclxuPCEtLVx0XHRcdFx0XHRcdFx0XHRcdCA8dGQgdi1mb3I9XCJsYW5nIGluIGl0ZW1cIj4tLT5cclxuPCEtLVx0XHRcdFx0XHRcdFx0XHRcdFx0IHt7bGFuZy5zTmFtZX19LS0+XHJcbjwhLS1cdFx0XHRcdFx0XHRcdFx0XHQgPC90ZD4tLT5cclxuPCEtLVx0XHRcdFx0XHRcdFx0XHRcdCA8dGQ+PGltZyB2LWJpbmQ6c3JjPVwiaXRlbS5mbGFnXCIgYWx0PVwiXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCI1MFwiPjwvdGQ+LS0+XHJcbjwhLS1cdFx0XHRcdFx0XHRcdFx0IDwvdHI+LS0+XHJcbjwhLS1cdFx0XHRcdFx0XHQgPC90Ym9keT4tLT5cclxuPCEtLVx0XHRcdFx0IDwvdGFibGU+LS0+XHJcblxyXG5cdFx0XHQgPHRhYmxlICBjbGFzcz1cInRhYmxlXCI+XHJcblx0XHRcdFx0IDx0aGVhZD5cclxuXHRcdFx0XHQgPHRyPlxyXG5cdFx0XHRcdFx0IDx0aCA6Y2xhc3M9XCJzb3J0ZWRDbGFzcygnY291bnRyeU5hbWUnKVwiIEBjbGljaz1cInNvcnRCeSgnY291bnRyeU5hbWUnKVwiPkNvdW50cnk8L3RoPlxyXG5cdFx0XHRcdFx0IDx0aCA6Y2xhc3M9XCJzb3J0ZWRDbGFzcygnY2FwaXRhbE5hbWUnKVwiIEBjbGljaz1cInNvcnRCeSgnY2FwaXRhbE5hbWUnKVwiPkNhcGl0YWw8L3RoPlxyXG5cdFx0XHRcdFx0IDx0aCA6Y2xhc3M9XCJzb3J0ZWRDbGFzcygnY29udGluZW50TmFtZScpXCIgQGNsaWNrPVwic29ydEJ5KCdjb250aW5lbnROYW1lJylcIj5Db250aW5lbnQ8L3RoPlxyXG5cdFx0XHRcdFx0IDx0aCA6Y2xhc3M9XCJzb3J0ZWRDbGFzcygnY3VycmVuY3knKVwiIEBjbGljaz1cInNvcnRCeSgnY3VycmVuY3knKVwiPkN1cnJlbmN5PC90aD5cclxuXHRcdFx0XHRcdCA8dGggOmNsYXNzPVwic29ydGVkQ2xhc3MoJ2ZsYWcnKVwiIEBjbGljaz1cInNvcnRCeSgnZmxhZycpXCI+RmxhZzwvdGg+XHJcblx0XHRcdFx0XHQgPHRoIDpjbGFzcz1cInNvcnRlZENsYXNzKCdsYW5ndWFnZXMnKVwiIEBjbGljaz1cInNvcnRCeSgnZmxhZycpXCI+TGFuZ3VhZ2VzPC90aD5cclxuXHRcdFx0XHQgPC90cj5cclxuXHRcdFx0XHQgPC90aGVhZD5cclxuXHRcdFx0XHQgPHRib2R5PlxyXG5cdFx0XHRcdCA8dHIgdi1mb3I9XCJpdGVtIGluIHNvcnRlZEl0ZW1zXCIgID5cclxuXHRcdFx0XHRcdCA8dGQ+e3tpdGVtLmNvdW50cnlOYW1lfX08L3RkPlxyXG5cdFx0XHRcdFx0IDx0ZD57e2l0ZW0uY2FwaXRhbE5hbWV9fTwvdGQ+XHJcblx0XHRcdFx0XHQgPHRkPnt7aXRlbS5jb250aW5lbnROYW1lfX08L3RkPlxyXG5cdFx0XHRcdFx0IDx0ZD57e2l0ZW0uY3VycmVuY3l9fTwvdGQ+XHJcblx0XHRcdFx0XHQgPHRkPlxyXG5cdFx0XHRcdFx0XHQgPGltZyB2LWJpbmQ6c3JjPVwiaXRlbS5mbGFnXCIgYWx0PVwiXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCI1MFwiPlxyXG5cdFx0XHRcdFx0IDwvdGQ+XHJcblx0XHRcdFx0XHQgPHRkIHYtZm9yPVwibGFuZyBpbiBpdGVtXCI+XHJcblx0XHRcdFx0XHRcdCB7e2xhbmcuc05hbWV9fVxyXG5cdFx0XHRcdFx0IDwvdGQ+XHJcblx0XHRcdFx0IDwvdHI+XHJcblx0XHRcdFx0IDwvdGJvZHk+XHJcblx0XHRcdCA8L3RhYmxlPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbmNvbXBvbmVudHM6IHtcclxufSxcclxuZGF0YSAoKSB7XHJcbiAgcmV0dXJuIHtcclxuICBcdHNlYXJjaFF1ZXJ5OiBcIlwiLFxyXG5cdCAgcmVzb3VyY2VzOiBbXSxcclxuXHQgIHNvcnQ6IHtcclxuXHRcdCAga2V5OiAnJyxcclxuXHRcdCAgaXNBc2M6IGZhbHNlXHJcblx0ICB9LFxyXG5cdCAgY2xpY2s6IGZhbHNlXHJcbiAgfVxyXG59LFxyXG5cdGNvbXB1dGVkOiB7XHJcblx0XHRzb3J0ZWRJdGVtcygpIHtcclxuXHRcdFx0Y29uc3QgbGlzdCA9IHRoaXMucmVzb3VyY2VzLnNsaWNlKCk7XHJcblx0XHRcdGlmICghIXRoaXMuc29ydC5rZXkpIHtcclxuXHRcdFx0XHRsaXN0LnNvcnQoKGEsIGIpID0+IHtcclxuXHRcdFx0XHRcdGEgPSBhW3RoaXMuc29ydC5rZXldXHJcblx0XHRcdFx0XHRiID0gYlt0aGlzLnNvcnQua2V5XVxyXG5cclxuXHRcdFx0XHRcdHJldHVybiAoYSA9PT0gYiA/IDAgOiBhID4gYiA/IDEgOiAtMSkgKiAodGhpcy5zb3J0LmlzQXNjID8gMSA6IC0xKVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IGxhbmcgPSB0aGlzLnJlc291cmNlcy5maWx0ZXIoKGl0ZW0pPT57XHJcblx0XHRcdFx0Y29uc29sZS5sb2coaXRlbS5sYW5ndWFnZXMuc05hbWUpXHJcblx0XHRcdFx0XHRyZXR1cm4gaXRlbS5sYW5ndWFnZXMuc05hbWVcclxuXHRcdFx0fSlcclxuXHJcblx0XHRcdGlmICghIXRoaXMuc29ydC5rZXkpIHtcclxuXHRcdFx0XHRsYW5nLnNvcnQoKGEsIGIpID0+IHtcclxuXHRcdFx0XHRcdGEgPSBhW3RoaXMuc29ydC5rZXldXHJcblx0XHRcdFx0XHRiID0gYlt0aGlzLnNvcnQua2V5XVxyXG5cclxuXHRcdFx0XHRcdHJldHVybiAoYSA9PT0gYiA/IDAgOiBhID4gYiA/IDEgOiAtMSkgKiAodGhpcy5zb3J0LmlzQXNjID8gMSA6IC0xKVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gbGlzdDtcclxuXHRcdH0sXHJcblx0XHRyZXN1bHRRdWVyeSgpe1xyXG5cdFx0XHRpZih0aGlzLnNlYXJjaFF1ZXJ5KXtcclxuXHJcblx0XHRcdFx0bGV0IGNvdW50cnkgPSB0aGlzLnJlc291cmNlcy5maWx0ZXIoKGl0ZW0pPT57XHJcblx0XHRcdFx0XHRyZXR1cm4gaXRlbS5jb3VudHJ5TmFtZS5pbmNsdWRlcyh0aGlzLnNlYXJjaFF1ZXJ5KVxyXG5cdFx0XHRcdH0pXHJcblxyXG5cdFx0XHRcdGxldCBjb2RlID0gdGhpcy5yZXNvdXJjZXMuZmlsdGVyKChpdGVtKT0+e1xyXG5cdFx0XHRcdFx0cmV0dXJuIGl0ZW0uY291bnRyeUNvZGUuaW5jbHVkZXModGhpcy5zZWFyY2hRdWVyeSlcclxuXHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0XHRsZXQgbGFuZyA9IHRoaXMucmVzb3VyY2VzLmZpbHRlcigoaXRlbSk9PntcclxuXHRcdFx0XHRcdGlmKGl0ZW0ubGFuZ3VhZ2VzLnNOYW1lID09PSB0aGlzLnNlYXJjaFF1ZXJ5KXtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGl0ZW0ubGFuZ3VhZ2VzLnNOYW1lXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRyZXR1cm4gY291bnRyeS5jb25jYXQoY29kZSxsYW5nKVxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5yZXNvdXJjZXM7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdH0sXHJcblx0Y3JlYXRlZCgpIHtcclxuXHRcdHRoaXMuZ2V0QmFzaWNDb3VudHJ5SW5mbygpLFxyXG5cdFx0dGhpcy5zaG93SGlkZVRhYmxlKClcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdGdldEJhc2ljQ291bnRyeUluZm8oKSB7XHJcblx0XHRcdGF4aW9zLmdldCgnL2NvdW50cnknKS50aGVuKHJlc3BvbnNlID0+IChcclxuXHRcdFx0XHRcdHRoaXMucmVzb3VyY2VzID0gcmVzcG9uc2UuZGF0YVxyXG5cdFx0XHQpKSBcclxuXHRcdH0sXHJcblx0XHRzb3J0ZWRDbGFzcyhrZXkpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuc29ydC5rZXkgPT09IGtleSA/IGBzb3J0ZWQgJHt0aGlzLnNvcnQuaXNBc2MgPyAnYXNjJyA6ICdkZXNjJyB9YCA6ICcnO1xyXG5cdFx0fSxcclxuXHRcdHNvcnRCeShrZXkpIHtcclxuXHRcdFx0dGhpcy5zb3J0LmlzQXNjID0gdGhpcy5zb3J0LmtleSA9PT0ga2V5ID8gIXRoaXMuc29ydC5pc0FzYyA6IGZhbHNlO1xyXG5cdFx0XHR0aGlzLnNvcnQua2V5ID0ga2V5O1xyXG5cdFx0fSxcclxuXHRcdHNob3dIaWRlVGFibGUoKXtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxufVxyXG48L3NjcmlwdD5cclxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9CYXNpY0luZm8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZhZjAxNDQ0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Jhc2ljSW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Jhc2ljSW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHByb2plY3RzXFxcXHN5bWZvbnktZG9ja2VyXFxcXHN5bWZvbnlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNmFmMDE0NDQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNmFmMDE0NDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNmFmMDE0NDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Jhc2ljSW5mby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmFmMDE0NDQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNmFmMDE0NDQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9CYXNpY0luZm8udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Jhc2ljSW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CYXNpY0luZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwYW5lbCBwYW5lbC1kZWZhdWx0XCIgfSwgW1xuICAgICAgX3ZtLl9tKDApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNlYXJjaC13cmFwcGVyIHBhbmVsLWhlYWRpbmcgY29sLXNtLTEyXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoUXVlcnksXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2hRdWVyeVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJTZWFyY2hcIiB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zZWFyY2hRdWVyeSB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF92bS5zZWFyY2hRdWVyeSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGVcIiB9LCBbXG4gICAgICAgIF9jKFwidGhlYWRcIiwgW1xuICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc29ydGVkQ2xhc3MoXCJjb3VudHJ5TmFtZVwiKSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNvcnRCeShcImNvdW50cnlOYW1lXCIpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiQ291bnRyeVwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc29ydGVkQ2xhc3MoXCJjYXBpdGFsTmFtZVwiKSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNvcnRCeShcImNhcGl0YWxOYW1lXCIpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2FwaXRhbFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc29ydGVkQ2xhc3MoXCJjb250aW5lbnROYW1lXCIpLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc29ydEJ5KFwiY29udGluZW50TmFtZVwiKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIkNvbnRpbmVudFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc29ydGVkQ2xhc3MoXCJjdXJyZW5jeVwiKSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNvcnRCeShcImN1cnJlbmN5XCIpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiQ3VycmVuY3lcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNvcnRlZENsYXNzKFwiZmxhZ1wiKSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNvcnRCeShcImZsYWdcIilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJGbGFnXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zb3J0ZWRDbGFzcyhcImxhbmd1YWdlc1wiKSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNvcnRCeShcImZsYWdcIilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJMYW5ndWFnZXNcIildXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICBfdm0uX2woX3ZtLnNvcnRlZEl0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoaXRlbS5jb3VudHJ5TmFtZSkpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uY2FwaXRhbE5hbWUpKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLmNvbnRpbmVudE5hbWUpKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLmN1cnJlbmN5KSldKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogaXRlbS5mbGFnLFxuICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNTBcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl9sKGl0ZW0sIGZ1bmN0aW9uKGxhbmcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0IFwiICsgX3ZtLl9zKGxhbmcuc05hbWUpICsgXCJcXG5cXHRcXHRcXHRcXHRcXHQgXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAyXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSksXG4gICAgICAgICAgMFxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBhbmVsLWhlYWRpbmdcIiB9LCBbXG4gICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiIEFsbCBSZXNvdXJjZXNcIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJWdWUiLCJBcHAiLCJCb290c3RyYXBWdWUiLCJqUXVlcnkiLCJyZXF1aXJlIiwidXNlIiwid2luZG93IiwiYXhpb3MiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiYXBwIiwiY29tcG9uZW50cyIsInRlbXBsYXRlIiwiJG1vdW50Iiwic3RhcnRTdGltdWx1c0FwcCIsImNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9