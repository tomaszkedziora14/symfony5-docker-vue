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







vue__WEBPACK_IMPORTED_MODULE_4__["default"].use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["default"]);
window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
vue__WEBPACK_IMPORTED_MODULE_4__["default"].config.productionTip = false;
var app = new vue__WEBPACK_IMPORTED_MODULE_4__["default"]({
  // el: '#app',
  components: {
    App: _BasicInfo__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  template: "<App/>" // render: h => h(App)

}).$mount('#app'); // napisz tabelke
// wysietlaj wszystkie wiersze
// dodaj wyszukiwanie wiersza , formularz search

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
      }
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
    this.getBasicCountryInfo();
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
    }
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
  return _c("div", { staticClass: "panel panel-default" }, [
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
    _c("div", { staticClass: "table-responsive" }, [
      _vm.resources.length
        ? _c("table", { staticClass: "table" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.resultQuery, function(item) {
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
                    _vm._l(item, function(lang) {
                      return _c("td", [
                        _vm._v(
                          "\r\n\t\t\t\t\t\t\t\t\t\t " +
                            _vm._s(lang.sName) +
                            "\r\n\t\t\t\t\t\t\t\t\t "
                        )
                      ])
                    }),
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
                    ])
                  ],
                  2
                )
              }),
              0
            )
          ])
        : _vm._e()
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Country")]),
        _vm._v(" "),
        _c("th", [_vm._v("Capital")]),
        _vm._v(" "),
        _c("th", [_vm._v("Continent")]),
        _vm._v(" "),
        _c("th", [_vm._v("Currency")]),
        _vm._v(" "),
        _c("th", [_vm._v("Languages")]),
        _vm._v(" "),
        _c("th", [_vm._v("Flag")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_axios_index_js-node_m-332cd3"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ3BDLGtCQUFrQix1REFBdUQ7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUNBQXFDO0FBQ3hELHNCQUFzQix3QkFBd0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUNBQWlDO0FBQ2pEO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw4QkFBOEI7QUFDckQ7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy98L1xcLihqfHQpc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy9hc3NldHMvQmFzaWNJbmZvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQmFzaWNJbmZvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQmFzaWNJbmZvLnZ1ZT80Y2I4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9CYXNpY0luZm8udnVlP2IyNjciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0Jhc2ljSW5mby52dWU/YjE2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuKGp8dClzeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIlxuXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuLy8gaW1wb3J0IEFwcCBmcm9tICcuL0Jhc2ljQ291bnRyeUluZm8nO1xuaW1wb3J0IEFwcCBmcm9tICcuL0Jhc2ljSW5mbyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJ1xuaW1wb3J0ICdib290c3RyYXAtdnVlL2Rpc3QvYm9vdHN0cmFwLXZ1ZS5jc3MnXG5cbmltcG9ydCBCb290c3RyYXBWdWUgZnJvbSAnYm9vdHN0cmFwLXZ1ZSdcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnXG5pbXBvcnQgJ2Jvb3RzdHJhcC12dWUvZGlzdC9ib290c3RyYXAtdnVlLmNzcydcblxuVnVlLnVzZShCb290c3RyYXBWdWUpXG5cbndpbmRvdy5heGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5WdWUuY29uZmlnLnByb2R1Y3Rpb25UaXAgPSBmYWxzZVxuXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcbiAgICAvLyBlbDogJyNhcHAnLFxuXHRcdGNvbXBvbmVudHM6IHsgQXBwfSxcblx0XHR0ZW1wbGF0ZTogXCI8QXBwLz5cIlxuXHRcdCAvLyByZW5kZXI6IGggPT4gaChBcHApXG59KS4kbW91bnQoJyNhcHAnKVxuXG4vLyBuYXBpc3ogdGFiZWxrZVxuLy8gd3lzaWV0bGFqIHdzenlzdGtpZSB3aWVyc3plXG4vLyBkb2RhaiB3eXN6dWtpd2FuaWUgd2llcnN6YSAsIGZvcm11bGFyeiBzZWFyY2hcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC4oanx0KXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsIjx0ZW1wbGF0ZT5cclxuPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cclxuPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5cclxuXHRcdFx0PHN0cm9uZz4gQWxsIFJlc291cmNlczwvc3Ryb25nPjwvZGl2PlxyXG5cdFx0XHRcdCA8ZGl2IGNsYXNzPVwicm93XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInNlYXJjaC13cmFwcGVyIHBhbmVsLWhlYWRpbmcgY29sLXNtLTEyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cInNlYXJjaFF1ZXJ5XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiAvPlxyXG5cdFx0XHRcdFx0XHQgPC9kaXY+XHJcblx0XHRcdFx0IDwvZGl2PlxyXG5cdFx0IDxkaXYgY2xhc3M9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCA8dGFibGUgdi1pZj1cInJlc291cmNlcy5sZW5ndGhcIiBjbGFzcz1cInRhYmxlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IDx0aGVhZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgPHRyPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IDx0aD5Db3VudHJ5PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0IDx0aD5DYXBpdGFsPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0IDx0aD5Db250aW5lbnQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgPHRoPkN1cnJlbmN5PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0IDx0aD5MYW5ndWFnZXM8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgPHRoPkZsYWc8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0IDwvdHI+XHJcblx0XHRcdFx0XHRcdCA8L3RoZWFkPlxyXG5cdFx0XHRcdFx0XHQgPHRib2R5PlxyXG5cdFx0XHRcdFx0XHRcdFx0IDx0ciB2LWZvcj1cIml0ZW0gaW4gcmVzdWx0UXVlcnlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0IDx0ZD57e2l0ZW0uY291bnRyeU5hbWV9fTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCA8dGQ+e3tpdGVtLmNhcGl0YWxOYW1lfX08L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgPHRkPnt7aXRlbS5jb250aW5lbnROYW1lfX08L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgPHRkPnt7aXRlbS5jdXJyZW5jeX19PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0IDx0ZCB2LWZvcj1cImxhbmcgaW4gaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCB7e2xhbmcuc05hbWV9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgPC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0IDx0ZD48aW1nIHYtYmluZDpzcmM9XCJpdGVtLmZsYWdcIiBhbHQ9XCJcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjUwXCI+PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdCA8L3RyPlxyXG5cdFx0XHRcdFx0XHQgPC90Ym9keT5cclxuXHRcdFx0XHQgPC90YWJsZT5cclxuXHJcbjwhLS1cdFx0XHQgPHRhYmxlIHYtaWY9XCJzb3J0ZWRJdGVtcy5sZW5ndGhcIiBjbGFzcz1cInRhYmxlXCI+LS0+XHJcbjwhLS1cdFx0XHRcdCA8dGhlYWQ+LS0+XHJcbjwhLS1cdFx0XHRcdCA8dHI+LS0+XHJcbjwhLS1cdFx0XHRcdFx0IDx0aCA6Y2xhc3M9XCJzb3J0ZWRDbGFzcygnY291bnRyeU5hbWUnKVwiIEBjbGljaz1cInNvcnRCeSgnY291bnRyeU5hbWUnKVwiPkNvdW50cnk8L3RoPi0tPlxyXG48IS0tXHRcdFx0XHRcdCA8dGggOmNsYXNzPVwic29ydGVkQ2xhc3MoJ2NhcGl0YWxOYW1lJylcIiBAY2xpY2s9XCJzb3J0QnkoJ2NhcGl0YWxOYW1lJylcIj5DYXBpdGFsPC90aD4tLT5cclxuPCEtLVx0XHRcdFx0XHQgPHRoPkNvbnRpbmVudDwvdGg+LS0+XHJcbjwhLS1cdFx0XHRcdFx0IDx0aD5DdXJyZW5jeTwvdGg+LS0+XHJcbjwhLS1cdFx0XHRcdFx0IDx0aD5MYW5ndWFnZXM8L3RoPi0tPlxyXG48IS0tXHRcdFx0XHRcdCA8dGg+RmxhZzwvdGg+LS0+XHJcbjwhLS1cdFx0XHRcdCA8L3RyPi0tPlxyXG48IS0tXHRcdFx0XHQgPC90aGVhZD4tLT5cclxuPCEtLVx0XHRcdFx0IDx0Ym9keT4tLT5cclxuPCEtLVx0XHRcdFx0IDx0ciB2LWZvcj1cIml0ZW0gaW4gc29ydGVkSXRlbXNcIj4tLT5cclxuPCEtLVx0XHRcdFx0XHQgPHRkPnt7aXRlbS5jb3VudHJ5TmFtZX19PC90ZD4tLT5cclxuPCEtLVx0XHRcdFx0XHQgPHRkPnt7aXRlbS5jYXBpdGFsTmFtZX19PC90ZD4tLT5cclxuPCEtLVx0XHRcdFx0XHQgPHRkPnt7aXRlbS5jb250aW5lbnROYW1lfX08L3RkPi0tPlxyXG48IS0tXHRcdFx0XHRcdCA8dGQ+e3tpdGVtLmN1cnJlbmN5fX08L3RkPi0tPlxyXG48IS0tXHRcdFx0XHRcdCA8dGQgdi1mb3I9XCJsYW5nIGluIGl0ZW1cIj4tLT5cclxuPCEtLVx0XHRcdFx0XHRcdCB7e2xhbmcuc05hbWV9fS0tPlxyXG48IS0tXHRcdFx0XHRcdCA8L3RkPi0tPlxyXG48IS0tXHRcdFx0XHRcdCA8dGQ+PGltZyB2LWJpbmQ6c3JjPVwiaXRlbS5mbGFnXCIgYWx0PVwiXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCI1MFwiPjwvdGQ+LS0+XHJcbjwhLS1cdFx0XHRcdCA8L3RyPi0tPlxyXG48IS0tXHRcdFx0XHQgPC90Ym9keT4tLT5cclxuPCEtLVx0XHRcdCA8L3RhYmxlPi0tPlxyXG5cclxuXHJcblxyXG5cclxuXHRcdCA8L2Rpdj5cclxuPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbmNvbXBvbmVudHM6IHtcclxufSxcclxuZGF0YSAoKSB7XHJcbiAgcmV0dXJuIHtcclxuICBcdHNlYXJjaFF1ZXJ5OiBcIlwiLFxyXG5cdCAgcmVzb3VyY2VzOiBbXSxcclxuXHQgIHNvcnQ6IHtcclxuXHRcdCAga2V5OiAnJyxcclxuXHRcdCAgaXNBc2M6IGZhbHNlXHJcblx0ICB9LFxyXG4gIH1cclxufSxcclxuXHRjb21wdXRlZDoge1xyXG5cdFx0c29ydGVkSXRlbXMgKCkge1xyXG5cdFx0XHRjb25zdCBsaXN0ID0gdGhpcy5yZXNvdXJjZXMuc2xpY2UoKTtcclxuXHRcdFx0aWYgKCEhdGhpcy5zb3J0LmtleSkge1xyXG5cdFx0XHRcdGxpc3Quc29ydCgoYSwgYikgPT4ge1xyXG5cdFx0XHRcdFx0YSA9IGFbdGhpcy5zb3J0LmtleV1cclxuXHRcdFx0XHRcdGIgPSBiW3RoaXMuc29ydC5rZXldXHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIChhID09PSBiID8gMCA6IGEgPiBiID8gMSA6IC0xKSAqICh0aGlzLnNvcnQuaXNBc2MgPyAxIDogLTEpXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBsaXN0O1xyXG5cdFx0fSxcclxuXHRcdHJlc3VsdFF1ZXJ5KCl7XHJcblx0XHRcdGlmKHRoaXMuc2VhcmNoUXVlcnkpe1xyXG5cclxuXHRcdFx0XHRsZXQgY291bnRyeSA9IHRoaXMucmVzb3VyY2VzLmZpbHRlcigoaXRlbSk9PntcclxuXHRcdFx0XHRcdHJldHVybiBpdGVtLmNvdW50cnlOYW1lLmluY2x1ZGVzKHRoaXMuc2VhcmNoUXVlcnkpXHJcblx0XHRcdFx0fSlcclxuXHJcblx0XHRcdFx0bGV0IGNvZGUgPSB0aGlzLnJlc291cmNlcy5maWx0ZXIoKGl0ZW0pPT57XHJcblx0XHRcdFx0XHRyZXR1cm4gaXRlbS5jb3VudHJ5Q29kZS5pbmNsdWRlcyh0aGlzLnNlYXJjaFF1ZXJ5KVxyXG5cdFx0XHRcdH0pXHJcblxyXG5cdFx0XHRcdGxldCBsYW5nID0gdGhpcy5yZXNvdXJjZXMuZmlsdGVyKChpdGVtKT0+e1xyXG5cdFx0XHRcdFx0aWYoaXRlbS5sYW5ndWFnZXMuc05hbWUgPT09IHRoaXMuc2VhcmNoUXVlcnkpe1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gaXRlbS5sYW5ndWFnZXMuc05hbWVcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHJldHVybiBjb3VudHJ5LmNvbmNhdChjb2RlLGxhbmcpXHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLnJlc291cmNlcztcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0fSxcclxuXHRjcmVhdGVkKCkge1xyXG5cdFx0dGhpcy5nZXRCYXNpY0NvdW50cnlJbmZvKCk7XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRnZXRCYXNpY0NvdW50cnlJbmZvKCkge1xyXG5cdFx0XHRheGlvcy5nZXQoJy9jb3VudHJ5JykudGhlbihyZXNwb25zZSA9PiAoXHJcblx0XHRcdFx0XHR0aGlzLnJlc291cmNlcyA9IHJlc3BvbnNlLmRhdGFcclxuXHRcdFx0KSkgXHJcblx0XHR9LFxyXG5cdFx0c29ydGVkQ2xhc3MgKGtleSkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5zb3J0LmtleSA9PT0ga2V5ID8gYHNvcnRlZCAke3RoaXMuc29ydC5pc0FzYyA/ICdhc2MnIDogJ2Rlc2MnIH1gIDogJyc7XHJcblx0XHR9LFxyXG5cdFx0c29ydEJ5KGtleSkge1xyXG5cdFx0XHR0aGlzLnNvcnQuaXNBc2MgPSB0aGlzLnNvcnQua2V5ID09PSBrZXkgPyAhdGhpcy5zb3J0LmlzQXNjIDogZmFsc2U7XHJcblx0XHRcdHRoaXMuc29ydC5rZXkgPSBrZXk7XHJcblx0XHR9XHJcblxyXG5cdH1cclxufVxyXG48L3NjcmlwdD5cclxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9CYXNpY0luZm8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZhZjAxNDQ0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Jhc2ljSW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Jhc2ljSW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHByb2plY3RzXFxcXHN5bWZvbnktZG9ja2VyXFxcXHN5bWZvbnlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNmFmMDE0NDQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNmFmMDE0NDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNmFmMDE0NDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Jhc2ljSW5mby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmFmMDE0NDQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNmFmMDE0NDQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9CYXNpY0luZm8udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Jhc2ljSW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CYXNpY0luZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Jhc2ljSW5mby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmFmMDE0NDQmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicGFuZWwgcGFuZWwtZGVmYXVsdFwiIH0sIFtcbiAgICBfdm0uX20oMCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2VhcmNoLXdyYXBwZXIgcGFuZWwtaGVhZGluZyBjb2wtc20tMTJcIiB9LCBbXG4gICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2hRdWVyeSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2hRdWVyeVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiU2VhcmNoXCIgfSxcbiAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnNlYXJjaFF1ZXJ5IH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgX3ZtLnNlYXJjaFF1ZXJ5ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLXJlc3BvbnNpdmVcIiB9LCBbXG4gICAgICBfdm0ucmVzb3VyY2VzLmxlbmd0aFxuICAgICAgICA/IF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLnJlc3VsdFF1ZXJ5LCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uY291bnRyeU5hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uY2FwaXRhbE5hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uY29udGluZW50TmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoaXRlbS5jdXJyZW5jeSkpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChpdGVtLCBmdW5jdGlvbihsYW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGxhbmcuc05hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdCBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IGl0ZW0uZmxhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjUwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBhbmVsLWhlYWRpbmdcIiB9LCBbXG4gICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiIEFsbCBSZXNvdXJjZXNcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkNvdW50cnlcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQ2FwaXRhbFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJDb250aW5lbnRcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQ3VycmVuY3lcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiTGFuZ3VhZ2VzXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkZsYWdcIildKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50IiwiVnVlIiwiQXBwIiwiQm9vdHN0cmFwVnVlIiwidXNlIiwid2luZG93IiwiYXhpb3MiLCJyZXF1aXJlIiwiY29uZmlnIiwicHJvZHVjdGlvblRpcCIsImFwcCIsImNvbXBvbmVudHMiLCJ0ZW1wbGF0ZSIsIiRtb3VudCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJjb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==