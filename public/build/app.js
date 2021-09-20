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
    _c("table", { staticClass: "table" }, [
      _c("thead", [
        _c("tr", [
          _c(
            "th",
            {
              on: {
                click: function($event) {
                  return _vm.sortBy("countryName")
                }
              }
            },
            [_vm._v("Country")]
          ),
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
              _vm._l(item, function(lang) {
                return _c("td", [
                  _vm._v(
                    "\r\n\t\t\t\t\t\t " + _vm._s(lang.sName) + "\r\n\t\t\t\t\t "
                  )
                ])
              }),
              _vm._v(" "),
              _c("td", [
                _c("img", {
                  attrs: { src: item.flag, alt: "", width: "100", height: "50" }
                })
              ])
            ],
            2
          )
        }),
        0
      )
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_axios_index_js-node_m-332cd3"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFDQUFxQztBQUN4RCxzQkFBc0Isd0JBQXdCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsOEJBQThCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vYXNzZXRzL0Jhc2ljSW5mby52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0Jhc2ljSW5mby52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0Jhc2ljSW5mby52dWU/NGNiOCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQmFzaWNJbmZvLnZ1ZT9iMTZiIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC4oanx0KXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdzdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiXG5cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG4vLyBpbXBvcnQgQXBwIGZyb20gJy4vQmFzaWNDb3VudHJ5SW5mbyc7XG5pbXBvcnQgQXBwIGZyb20gJy4vQmFzaWNJbmZvJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnXG5pbXBvcnQgJ2Jvb3RzdHJhcC12dWUvZGlzdC9ib290c3RyYXAtdnVlLmNzcydcblxuaW1wb3J0IEJvb3RzdHJhcFZ1ZSBmcm9tICdib290c3RyYXAtdnVlJ1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcydcbmltcG9ydCAnYm9vdHN0cmFwLXZ1ZS9kaXN0L2Jvb3RzdHJhcC12dWUuY3NzJ1xuXG5WdWUudXNlKEJvb3RzdHJhcFZ1ZSlcblxud2luZG93LmF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXG5cbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xuICAgIC8vIGVsOiAnI2FwcCcsXG5cdFx0Y29tcG9uZW50czogeyBBcHB9LFxuXHRcdHRlbXBsYXRlOiBcIjxBcHAvPlwiXG5cdFx0IC8vIHJlbmRlcjogaCA9PiBoKEFwcClcbn0pLiRtb3VudCgnI2FwcCcpXG5cbi8vIG5hcGlzeiB0YWJlbGtlXG4vLyB3eXNpZXRsYWogd3N6eXN0a2llIHdpZXJzemVcbi8vIGRvZGFqIHd5c3p1a2l3YW5pZSB3aWVyc3phICwgZm9ybXVsYXJ6IHNlYXJjaFxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLihqfHQpc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiPHRlbXBsYXRlPlxyXG48ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxyXG48ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiPlxyXG5cdFx0XHQ8c3Ryb25nPiBBbGwgUmVzb3VyY2VzPC9zdHJvbmc+PC9kaXY+XHJcblx0XHRcdFx0IDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic2VhcmNoLXdyYXBwZXIgcGFuZWwtaGVhZGluZyBjb2wtc20tMTJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwic2VhcmNoUXVlcnlcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIC8+XHJcblx0XHRcdFx0XHRcdCA8L2Rpdj5cclxuXHRcdFx0XHQgPC9kaXY+XHJcbjwhLS1cdFx0IDxkaXYgY2xhc3M9XCJ0YWJsZS1yZXNwb25zaXZlXCI+LS0+XHJcbjwhLS1cdFx0XHRcdFx0XHRcdFx0XHQgPHRhYmxlIHYtaWY9XCJyZXNvdXJjZXMubGVuZ3RoXCIgY2xhc3M9XCJ0YWJsZVwiPi0tPlxyXG48IS0tXHRcdFx0XHRcdFx0XHRcdFx0XHQgPHRoZWFkPi0tPlxyXG48IS0tXHRcdFx0XHRcdFx0XHRcdFx0XHQgPHRyPi0tPlxyXG48IS0tXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCA8dGg+Q291bnRyeTwvdGg+LS0+XHJcbjwhLS1cdFx0XHRcdFx0XHRcdFx0XHQgPHRoPkNhcGl0YWw8L3RoPi0tPlxyXG48IS0tXHRcdFx0XHRcdFx0XHRcdFx0IDx0aD5Db250aW5lbnQ8L3RoPi0tPlxyXG48IS0tXHRcdFx0XHRcdFx0XHRcdFx0IDx0aD5DdXJyZW5jeTwvdGg+LS0+XHJcbjwhLS1cdFx0XHRcdFx0XHRcdFx0XHQgPHRoPkxhbmd1YWdlczwvdGg+LS0+XHJcbjwhLS1cdFx0XHRcdFx0XHRcdFx0XHQgPHRoPkZsYWc8L3RoPi0tPlxyXG48IS0tXHRcdFx0XHRcdFx0XHRcdCA8L3RyPi0tPlxyXG48IS0tXHRcdFx0XHRcdFx0IDwvdGhlYWQ+LS0+XHJcbjwhLS1cdFx0XHRcdFx0XHQgPHRib2R5Pi0tPlxyXG48IS0tXHRcdFx0XHRcdFx0XHRcdCA8dHIgdi1mb3I9XCJpdGVtIGluIHJlc3VsdFF1ZXJ5XCI+LS0+XHJcbjwhLS1cdFx0XHRcdFx0XHRcdFx0XHQgPHRkPnt7aXRlbS5jb3VudHJ5TmFtZX19PC90ZD4tLT5cclxuPCEtLVx0XHRcdFx0XHRcdFx0XHRcdCA8dGQ+e3tpdGVtLmNhcGl0YWxOYW1lfX08L3RkPi0tPlxyXG48IS0tXHRcdFx0XHRcdFx0XHRcdFx0IDx0ZD57e2l0ZW0uY29udGluZW50TmFtZX19PC90ZD4tLT5cclxuPCEtLVx0XHRcdFx0XHRcdFx0XHRcdCA8dGQ+e3tpdGVtLmN1cnJlbmN5fX08L3RkPi0tPlxyXG48IS0tXHRcdFx0XHRcdFx0XHRcdFx0IDx0ZCB2LWZvcj1cImxhbmcgaW4gaXRlbVwiPi0tPlxyXG48IS0tXHRcdFx0XHRcdFx0XHRcdFx0XHQge3tsYW5nLnNOYW1lfX0tLT5cclxuPCEtLVx0XHRcdFx0XHRcdFx0XHRcdCA8L3RkPi0tPlxyXG48IS0tXHRcdFx0XHRcdFx0XHRcdFx0IDx0ZD48aW1nIHYtYmluZDpzcmM9XCJpdGVtLmZsYWdcIiBhbHQ9XCJcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjUwXCI+PC90ZD4tLT5cclxuPCEtLVx0XHRcdFx0XHRcdFx0XHQgPC90cj4tLT5cclxuPCEtLVx0XHRcdFx0XHRcdCA8L3Rib2R5Pi0tPlxyXG48IS0tXHRcdFx0XHQgPC90YWJsZT4tLT5cclxuXHJcblx0XHRcdCA8dGFibGUgIGNsYXNzPVwidGFibGVcIj5cclxuXHRcdFx0XHQgPHRoZWFkPlxyXG5cdFx0XHRcdCA8dHI+XHJcblx0XHRcdFx0XHQgPHRoICBAY2xpY2s9XCJzb3J0QnkoJ2NvdW50cnlOYW1lJylcIj5Db3VudHJ5PC90aD5cclxuXHRcdFx0XHRcdCA8dGg+Q2FwaXRhbDwvdGg+XHJcblx0XHRcdFx0XHQgPHRoPkNvbnRpbmVudDwvdGg+XHJcblx0XHRcdFx0XHQgPHRoPkN1cnJlbmN5PC90aD5cclxuXHRcdFx0XHRcdCA8dGg+TGFuZ3VhZ2VzPC90aD5cclxuXHRcdFx0XHRcdCA8dGg+RmxhZzwvdGg+XHJcblx0XHRcdFx0IDwvdHI+XHJcblx0XHRcdFx0IDwvdGhlYWQ+XHJcblx0XHRcdFx0IDx0Ym9keT5cclxuXHRcdFx0XHQgPHRyIHYtZm9yPVwiaXRlbSBpbiBzb3J0ZWRJdGVtc1wiPlxyXG5cdFx0XHRcdFx0IDx0ZD57e2l0ZW0uY291bnRyeU5hbWV9fTwvdGQ+XHJcblx0XHRcdFx0XHQgPHRkPnt7aXRlbS5jYXBpdGFsTmFtZX19PC90ZD5cclxuXHRcdFx0XHRcdCA8dGQ+e3tpdGVtLmNvbnRpbmVudE5hbWV9fTwvdGQ+XHJcblx0XHRcdFx0XHQgPHRkPnt7aXRlbS5jdXJyZW5jeX19PC90ZD5cclxuXHRcdFx0XHRcdCA8dGQgdi1mb3I9XCJsYW5nIGluIGl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0IHt7bGFuZy5zTmFtZX19XHJcblx0XHRcdFx0XHQgPC90ZD5cclxuXHRcdFx0XHRcdCA8dGQ+PGltZyB2LWJpbmQ6c3JjPVwiaXRlbS5mbGFnXCIgYWx0PVwiXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCI1MFwiPjwvdGQ+XHJcblx0XHRcdFx0IDwvdHI+XHJcblx0XHRcdFx0IDwvdGJvZHk+XHJcblx0XHRcdCA8L3RhYmxlPlxyXG5cclxuXHJcblxyXG5cclxuXHRcdCA8L2Rpdj5cclxuPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbmNvbXBvbmVudHM6IHtcclxufSxcclxuZGF0YSAoKSB7XHJcbiAgcmV0dXJuIHtcclxuICBcdHNlYXJjaFF1ZXJ5OiBcIlwiLFxyXG5cdCAgcmVzb3VyY2VzOiBbXSxcclxuXHQgIHNvcnQ6IHtcclxuXHRcdCAga2V5OiAnJyxcclxuXHRcdCAgaXNBc2M6IGZhbHNlXHJcblx0ICB9LFxyXG4gIH1cclxufSxcclxuXHRjb21wdXRlZDoge1xyXG5cdFx0c29ydGVkSXRlbXMgKCkge1xyXG5cdFx0XHRjb25zdCBsaXN0ID0gdGhpcy5yZXNvdXJjZXMuc2xpY2UoKTtcclxuXHRcdFx0aWYgKCEhdGhpcy5zb3J0LmtleSkge1xyXG5cdFx0XHRcdGxpc3Quc29ydCgoYSwgYikgPT4ge1xyXG5cdFx0XHRcdFx0YSA9IGFbdGhpcy5zb3J0LmtleV1cclxuXHRcdFx0XHRcdGIgPSBiW3RoaXMuc29ydC5rZXldXHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIChhID09PSBiID8gMCA6IGEgPiBiID8gMSA6IC0xKSAqICh0aGlzLnNvcnQuaXNBc2MgPyAxIDogLTEpXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBsaXN0O1xyXG5cdFx0fSxcclxuXHRcdHJlc3VsdFF1ZXJ5KCl7XHJcblx0XHRcdGlmKHRoaXMuc2VhcmNoUXVlcnkpe1xyXG5cclxuXHRcdFx0XHRsZXQgY291bnRyeSA9IHRoaXMucmVzb3VyY2VzLmZpbHRlcigoaXRlbSk9PntcclxuXHRcdFx0XHRcdHJldHVybiBpdGVtLmNvdW50cnlOYW1lLmluY2x1ZGVzKHRoaXMuc2VhcmNoUXVlcnkpXHJcblx0XHRcdFx0fSlcclxuXHJcblx0XHRcdFx0bGV0IGNvZGUgPSB0aGlzLnJlc291cmNlcy5maWx0ZXIoKGl0ZW0pPT57XHJcblx0XHRcdFx0XHRyZXR1cm4gaXRlbS5jb3VudHJ5Q29kZS5pbmNsdWRlcyh0aGlzLnNlYXJjaFF1ZXJ5KVxyXG5cdFx0XHRcdH0pXHJcblxyXG5cdFx0XHRcdGxldCBsYW5nID0gdGhpcy5yZXNvdXJjZXMuZmlsdGVyKChpdGVtKT0+e1xyXG5cdFx0XHRcdFx0aWYoaXRlbS5sYW5ndWFnZXMuc05hbWUgPT09IHRoaXMuc2VhcmNoUXVlcnkpe1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gaXRlbS5sYW5ndWFnZXMuc05hbWVcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHJldHVybiBjb3VudHJ5LmNvbmNhdChjb2RlLGxhbmcpXHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLnJlc291cmNlcztcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0fSxcclxuXHRjcmVhdGVkKCkge1xyXG5cdFx0dGhpcy5nZXRCYXNpY0NvdW50cnlJbmZvKCk7XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRnZXRCYXNpY0NvdW50cnlJbmZvKCkge1xyXG5cdFx0XHRheGlvcy5nZXQoJy9jb3VudHJ5JykudGhlbihyZXNwb25zZSA9PiAoXHJcblx0XHRcdFx0XHR0aGlzLnJlc291cmNlcyA9IHJlc3BvbnNlLmRhdGFcclxuXHRcdFx0KSkgXHJcblx0XHR9LFxyXG5cdFx0c29ydEJ5KGtleSkge1xyXG5cdFx0XHR0aGlzLnNvcnQuaXNBc2MgPSB0aGlzLnNvcnQua2V5ID09PSBrZXkgPyAhdGhpcy5zb3J0LmlzQXNjIDogZmFsc2U7XHJcblx0XHRcdHRoaXMuc29ydC5rZXkgPSBrZXk7XHJcblx0XHR9XHJcblxyXG5cdH1cclxufVxyXG48L3NjcmlwdD5cclxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9CYXNpY0luZm8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZhZjAxNDQ0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Jhc2ljSW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Jhc2ljSW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHByb2plY3RzXFxcXHN5bWZvbnktZG9ja2VyXFxcXHN5bWZvbnlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNmFmMDE0NDQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNmFmMDE0NDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNmFmMDE0NDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Jhc2ljSW5mby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmFmMDE0NDQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNmFmMDE0NDQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9CYXNpY0luZm8udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Jhc2ljSW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CYXNpY0luZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBhbmVsIHBhbmVsLWRlZmF1bHRcIiB9LCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNlYXJjaC13cmFwcGVyIHBhbmVsLWhlYWRpbmcgY29sLXNtLTEyXCIgfSwgW1xuICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoUXVlcnksXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoUXVlcnlcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlNlYXJjaFwiIH0sXG4gICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zZWFyY2hRdWVyeSB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF92bS5zZWFyY2hRdWVyeSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlXCIgfSwgW1xuICAgICAgX2MoXCJ0aGVhZFwiLCBbXG4gICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc29ydEJ5KFwiY291bnRyeU5hbWVcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiQ291bnRyeVwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQ2FwaXRhbFwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQ29udGluZW50XCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJDdXJyZW5jeVwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiTGFuZ3VhZ2VzXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJGbGFnXCIpXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInRib2R5XCIsXG4gICAgICAgIF92bS5fbChfdm0uc29ydGVkSXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoaXRlbS5jb3VudHJ5TmFtZSkpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoaXRlbS5jYXBpdGFsTmFtZSkpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoaXRlbS5jb250aW5lbnROYW1lKSldKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLmN1cnJlbmN5KSldKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9sKGl0ZW0sIGZ1bmN0aW9uKGxhbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0IFwiICsgX3ZtLl9zKGxhbmcuc05hbWUpICsgXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQgXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBpdGVtLmZsYWcsIGFsdDogXCJcIiwgd2lkdGg6IFwiMTAwXCIsIGhlaWdodDogXCI1MFwiIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIH0pLFxuICAgICAgICAwXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicGFuZWwtaGVhZGluZ1wiIH0sIFtcbiAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCIgQWxsIFJlc291cmNlc1wiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsIlZ1ZSIsIkFwcCIsIkJvb3RzdHJhcFZ1ZSIsInVzZSIsIndpbmRvdyIsImF4aW9zIiwicmVxdWlyZSIsImNvbmZpZyIsInByb2R1Y3Rpb25UaXAiLCJhcHAiLCJjb21wb25lbnRzIiwidGVtcGxhdGUiLCIkbW91bnQiLCJzdGFydFN0aW11bHVzQXBwIiwiY29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=