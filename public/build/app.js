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
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);





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

      // const list = this.resources.slice();
      // if (!!this.sort.key) {
      // 	list.sort((a, b) => {
      // 		a = a[this.sort.key]
      // 		b = b[this.sort.key]
      //
      // 		return (a === b ? 0 : a > b ? 1 : -1) * (this.sort.isAsc ? 1 : -1)
      // 	});
      // }
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

      return lang;
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_axios_index_js-node_m-67e4a6"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDhCQUE4QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3wvXFwuKGp8dClzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9CYXNpY0luZm8udnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9CYXNpY0luZm8udnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9CYXNpY0luZm8udnVlPzRjYjgiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0Jhc2ljSW5mby52dWU/YjE2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuKGp8dClzeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIlxuXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuLy8gaW1wb3J0IEFwcCBmcm9tICcuL0Jhc2ljQ291bnRyeUluZm8nO1xuaW1wb3J0IEFwcCBmcm9tICcuL0Jhc2ljSW5mbyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJ1xuaW1wb3J0ICdib290c3RyYXAtdnVlL2Rpc3QvYm9vdHN0cmFwLXZ1ZS5jc3MnXG5cbmltcG9ydCBCb290c3RyYXBWdWUgZnJvbSAnYm9vdHN0cmFwLXZ1ZSdcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnXG5pbXBvcnQgJ2Jvb3RzdHJhcC12dWUvZGlzdC9ib290c3RyYXAtdnVlLmNzcydcbnZhciBqUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcblxuVnVlLnVzZShCb290c3RyYXBWdWUpXG5cbndpbmRvdy5heGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5WdWUuY29uZmlnLnByb2R1Y3Rpb25UaXAgPSBmYWxzZVxuXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcbiAgICAvLyBlbDogJyNhcHAnLFxuXHRcdGNvbXBvbmVudHM6IHsgQXBwfSxcblx0XHR0ZW1wbGF0ZTogXCI8QXBwLz5cIlxuXHRcdCAvLyByZW5kZXI6IGggPT4gaChBcHApXG59KS4kbW91bnQoJyNhcHAnKVxuXG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuKGp8dClzeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCI8dGVtcGxhdGU+XHJcblx0PGRpdj5cclxuPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cclxuPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5cclxuXHQ8c3Ryb25nPiBBbGwgUmVzb3VyY2VzPC9zdHJvbmc+XHJcbjwvZGl2PlxyXG5cdFx0XHRcdCA8ZGl2IGNsYXNzPVwicm93XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInNlYXJjaC13cmFwcGVyIHBhbmVsLWhlYWRpbmcgY29sLXNtLTEyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cInNlYXJjaFF1ZXJ5XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiAvPlxyXG5cdFx0XHRcdFx0XHQgXHQ8L2Rpdj5cclxuXHRcdFx0XHQgPC9kaXY+XHJcblxyXG48IS0tXHRcdFx0IDx0YWJsZSAgY2xhc3M9XCJ0YWJsZVwiIGlkPVwicXVlcnlcIj4tLT5cclxuPCEtLVx0XHRcdFx0XHRcdFx0XHRcdFx0IDx0aGVhZD4tLT5cclxuPCEtLVx0XHRcdFx0XHRcdFx0XHRcdFx0IDx0cj4tLT5cclxuPCEtLVx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgPHRoPkNvdW50cnk8L3RoPi0tPlxyXG48IS0tXHRcdFx0XHRcdFx0XHRcdFx0IDx0aCA+Q2FwaXRhbDwvdGg+LS0+XHJcbjwhLS1cdFx0XHRcdFx0XHRcdFx0XHQgPHRoPkNvbnRpbmVudDwvdGg+LS0+XHJcbjwhLS1cdFx0XHRcdFx0XHRcdFx0XHQgPHRoPkN1cnJlbmN5PC90aD4tLT5cclxuPCEtLVx0XHRcdFx0XHRcdFx0XHRcdCA8dGg+TGFuZ3VhZ2VzPC90aD4tLT5cclxuPCEtLVx0XHRcdFx0XHRcdFx0XHRcdCA8dGg+RmxhZzwvdGg+LS0+XHJcbjwhLS1cdFx0XHRcdFx0XHRcdFx0IDwvdHI+LS0+XHJcbjwhLS1cdFx0XHRcdFx0XHQgPC90aGVhZD4tLT5cclxuPCEtLVx0XHRcdFx0XHRcdCA8dGJvZHk+LS0+XHJcbjwhLS1cdFx0XHRcdFx0XHQgXHRcdDx0ciB2LWZvcj1cIml0ZW0gaW4gcmVzdWx0UXVlcnlcIj4tLT5cclxuPCEtLVx0XHRcdFx0XHRcdFx0XHRcdCA8dGQ+e3tpdGVtLmNvdW50cnlOYW1lfX08L3RkPi0tPlxyXG48IS0tXHRcdFx0XHRcdFx0XHRcdFx0IDx0ZD57e2l0ZW0uY2FwaXRhbE5hbWV9fTwvdGQ+LS0+XHJcbjwhLS1cdFx0XHRcdFx0XHRcdFx0XHQgPHRkPnt7aXRlbS5jb250aW5lbnROYW1lfX08L3RkPi0tPlxyXG48IS0tXHRcdFx0XHRcdFx0XHRcdFx0IDx0ZD57e2l0ZW0uY3VycmVuY3l9fTwvdGQ+LS0+XHJcbjwhLS1cdFx0XHRcdFx0XHRcdFx0XHQgPHRkIHYtZm9yPVwibGFuZyBpbiBpdGVtXCI+LS0+XHJcbjwhLS1cdFx0XHRcdFx0XHRcdFx0XHRcdCB7e2xhbmcuc05hbWV9fS0tPlxyXG48IS0tXHRcdFx0XHRcdFx0XHRcdFx0IDwvdGQ+LS0+XHJcbjwhLS1cdFx0XHRcdFx0XHRcdFx0XHQgPHRkPjxpbWcgdi1iaW5kOnNyYz1cIml0ZW0uZmxhZ1wiIGFsdD1cIlwiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiNTBcIj48L3RkPi0tPlxyXG48IS0tXHRcdFx0XHRcdFx0XHRcdCA8L3RyPi0tPlxyXG48IS0tXHRcdFx0XHRcdFx0IDwvdGJvZHk+LS0+XHJcbjwhLS1cdFx0XHRcdCA8L3RhYmxlPi0tPlxyXG5cclxuXHRcdFx0IDx0YWJsZSAgY2xhc3M9XCJ0YWJsZVwiPlxyXG5cdFx0XHRcdCA8dGhlYWQ+XHJcblx0XHRcdFx0IDx0cj5cclxuXHRcdFx0XHRcdCA8dGggOmNsYXNzPVwic29ydGVkQ2xhc3MoJ2NvdW50cnlOYW1lJylcIiBAY2xpY2s9XCJzb3J0QnkoJ2NvdW50cnlOYW1lJylcIj5Db3VudHJ5PC90aD5cclxuXHRcdFx0XHRcdCA8dGggOmNsYXNzPVwic29ydGVkQ2xhc3MoJ2NhcGl0YWxOYW1lJylcIiBAY2xpY2s9XCJzb3J0QnkoJ2NhcGl0YWxOYW1lJylcIj5DYXBpdGFsPC90aD5cclxuXHRcdFx0XHRcdCA8dGggOmNsYXNzPVwic29ydGVkQ2xhc3MoJ2NvbnRpbmVudE5hbWUnKVwiIEBjbGljaz1cInNvcnRCeSgnY29udGluZW50TmFtZScpXCI+Q29udGluZW50PC90aD5cclxuXHRcdFx0XHRcdCA8dGggOmNsYXNzPVwic29ydGVkQ2xhc3MoJ2N1cnJlbmN5JylcIiBAY2xpY2s9XCJzb3J0QnkoJ2N1cnJlbmN5JylcIj5DdXJyZW5jeTwvdGg+XHJcblx0XHRcdFx0XHQgPHRoIDpjbGFzcz1cInNvcnRlZENsYXNzKCdmbGFnJylcIiBAY2xpY2s9XCJzb3J0QnkoJ2ZsYWcnKVwiPkZsYWc8L3RoPlxyXG5cdFx0XHRcdFx0IDx0aCA6Y2xhc3M9XCJzb3J0ZWRDbGFzcygnbGFuZ3VhZ2VzJylcIiBAY2xpY2s9XCJzb3J0QnkoJ2ZsYWcnKVwiPkxhbmd1YWdlczwvdGg+XHJcblx0XHRcdFx0IDwvdHI+XHJcblx0XHRcdFx0IDwvdGhlYWQ+XHJcblx0XHRcdFx0IDx0Ym9keT5cclxuXHRcdFx0XHQgPHRyIHYtZm9yPVwiaXRlbSBpbiBzb3J0ZWRJdGVtc1wiICA+XHJcblx0XHRcdFx0XHQgPHRkPnt7aXRlbS5jb3VudHJ5TmFtZX19PC90ZD5cclxuXHRcdFx0XHRcdCA8dGQ+e3tpdGVtLmNhcGl0YWxOYW1lfX08L3RkPlxyXG5cdFx0XHRcdFx0IDx0ZD57e2l0ZW0uY29udGluZW50TmFtZX19PC90ZD5cclxuXHRcdFx0XHRcdCA8dGQ+e3tpdGVtLmN1cnJlbmN5fX08L3RkPlxyXG5cdFx0XHRcdFx0IDx0ZD5cclxuXHRcdFx0XHRcdFx0IDxpbWcgdi1iaW5kOnNyYz1cIml0ZW0uZmxhZ1wiIGFsdD1cIlwiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiNTBcIj5cclxuXHRcdFx0XHRcdCA8L3RkPlxyXG5cdFx0XHRcdFx0IDx0ZCB2LWZvcj1cImxhbmcgaW4gaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHQge3tsYW5nLnNOYW1lfX1cclxuXHRcdFx0XHRcdCA8L3RkPlxyXG5cdFx0XHRcdCA8L3RyPlxyXG5cdFx0XHRcdCA8L3Rib2R5PlxyXG5cdFx0XHQgPC90YWJsZT5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5jb21wb25lbnRzOiB7XHJcbn0sXHJcbmRhdGEgKCkge1xyXG4gIHJldHVybiB7XHJcbiAgXHRzZWFyY2hRdWVyeTogXCJcIixcclxuXHQgIHJlc291cmNlczogW10sXHJcblx0ICBzb3J0OiB7XHJcblx0XHQgIGtleTogJycsXHJcblx0XHQgIGlzQXNjOiBmYWxzZVxyXG5cdCAgfSxcclxuXHQgIGNsaWNrOiBmYWxzZVxyXG4gIH1cclxufSxcclxuXHRjb21wdXRlZDoge1xyXG5cdFx0c29ydGVkSXRlbXMoKSB7XHJcblxyXG5cdFx0XHQvLyBjb25zdCBsaXN0ID0gdGhpcy5yZXNvdXJjZXMuc2xpY2UoKTtcclxuXHRcdFx0Ly8gaWYgKCEhdGhpcy5zb3J0LmtleSkge1xyXG5cdFx0XHQvLyBcdGxpc3Quc29ydCgoYSwgYikgPT4ge1xyXG5cdFx0XHQvLyBcdFx0YSA9IGFbdGhpcy5zb3J0LmtleV1cclxuXHRcdFx0Ly8gXHRcdGIgPSBiW3RoaXMuc29ydC5rZXldXHJcblx0XHRcdC8vXHJcblx0XHRcdC8vIFx0XHRyZXR1cm4gKGEgPT09IGIgPyAwIDogYSA+IGIgPyAxIDogLTEpICogKHRoaXMuc29ydC5pc0FzYyA/IDEgOiAtMSlcclxuXHRcdFx0Ly8gXHR9KTtcclxuXHRcdFx0Ly8gfVxyXG5cclxuXHRcdFx0Y29uc3QgbGFuZyA9IHRoaXMucmVzb3VyY2VzLmZpbHRlcigoaXRlbSk9PntcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhpdGVtLmxhbmd1YWdlcy5zTmFtZSlcclxuXHRcdFx0XHRcdHJldHVybiBpdGVtLmxhbmd1YWdlcy5zTmFtZVxyXG5cdFx0XHR9KVxyXG5cclxuXHRcdFx0aWYgKCEhdGhpcy5zb3J0LmtleSkge1xyXG5cdFx0XHRcdGxhbmcuc29ydCgoYSwgYikgPT4ge1xyXG5cdFx0XHRcdFx0YSA9IGFbdGhpcy5zb3J0LmtleV1cclxuXHRcdFx0XHRcdGIgPSBiW3RoaXMuc29ydC5rZXldXHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIChhID09PSBiID8gMCA6IGEgPiBiID8gMSA6IC0xKSAqICh0aGlzLnNvcnQuaXNBc2MgPyAxIDogLTEpXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBsYW5nO1xyXG5cdFx0fSxcclxuXHRcdHJlc3VsdFF1ZXJ5KCl7XHJcblx0XHRcdGlmKHRoaXMuc2VhcmNoUXVlcnkpe1xyXG5cclxuXHRcdFx0XHRsZXQgY291bnRyeSA9IHRoaXMucmVzb3VyY2VzLmZpbHRlcigoaXRlbSk9PntcclxuXHRcdFx0XHRcdHJldHVybiBpdGVtLmNvdW50cnlOYW1lLmluY2x1ZGVzKHRoaXMuc2VhcmNoUXVlcnkpXHJcblx0XHRcdFx0fSlcclxuXHJcblx0XHRcdFx0bGV0IGNvZGUgPSB0aGlzLnJlc291cmNlcy5maWx0ZXIoKGl0ZW0pPT57XHJcblx0XHRcdFx0XHRyZXR1cm4gaXRlbS5jb3VudHJ5Q29kZS5pbmNsdWRlcyh0aGlzLnNlYXJjaFF1ZXJ5KVxyXG5cdFx0XHRcdH0pXHJcblxyXG5cdFx0XHRcdGxldCBsYW5nID0gdGhpcy5yZXNvdXJjZXMuZmlsdGVyKChpdGVtKT0+e1xyXG5cdFx0XHRcdFx0aWYoaXRlbS5sYW5ndWFnZXMuc05hbWUgPT09IHRoaXMuc2VhcmNoUXVlcnkpe1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gaXRlbS5sYW5ndWFnZXMuc05hbWVcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHJldHVybiBjb3VudHJ5LmNvbmNhdChjb2RlLGxhbmcpXHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLnJlc291cmNlcztcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0fSxcclxuXHRjcmVhdGVkKCkge1xyXG5cdFx0dGhpcy5nZXRCYXNpY0NvdW50cnlJbmZvKCksXHJcblx0XHR0aGlzLnNob3dIaWRlVGFibGUoKVxyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0Z2V0QmFzaWNDb3VudHJ5SW5mbygpIHtcclxuXHRcdFx0YXhpb3MuZ2V0KCcvY291bnRyeScpLnRoZW4ocmVzcG9uc2UgPT4gKFxyXG5cdFx0XHRcdFx0dGhpcy5yZXNvdXJjZXMgPSByZXNwb25zZS5kYXRhXHJcblx0XHRcdCkpIFxyXG5cdFx0fSxcclxuXHRcdHNvcnRlZENsYXNzKGtleSkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5zb3J0LmtleSA9PT0ga2V5ID8gYHNvcnRlZCAke3RoaXMuc29ydC5pc0FzYyA/ICdhc2MnIDogJ2Rlc2MnIH1gIDogJyc7XHJcblx0XHR9LFxyXG5cdFx0c29ydEJ5KGtleSkge1xyXG5cdFx0XHR0aGlzLnNvcnQuaXNBc2MgPSB0aGlzLnNvcnQua2V5ID09PSBrZXkgPyAhdGhpcy5zb3J0LmlzQXNjIDogZmFsc2U7XHJcblx0XHRcdHRoaXMuc29ydC5rZXkgPSBrZXk7XHJcblx0XHR9LFxyXG5cdFx0c2hvd0hpZGVUYWJsZSgpe1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG59XHJcbjwvc2NyaXB0PlxyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Jhc2ljSW5mby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmFmMDE0NDQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQmFzaWNJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQmFzaWNJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxccHJvamVjdHNcXFxcc3ltZm9ueS1kb2NrZXJcXFxcc3ltZm9ueVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2YWYwMTQ0NCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2YWYwMTQ0NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2YWYwMTQ0NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQmFzaWNJbmZvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YWYwMTQ0NCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2YWYwMTQ0NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL0Jhc2ljSW5mby52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQmFzaWNJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Jhc2ljSW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBhbmVsIHBhbmVsLWRlZmF1bHRcIiB9LCBbXG4gICAgICBfdm0uX20oMCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2VhcmNoLXdyYXBwZXIgcGFuZWwtaGVhZGluZyBjb2wtc20tMTJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2hRdWVyeSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaFF1ZXJ5XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlNlYXJjaFwiIH0sXG4gICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnNlYXJjaFF1ZXJ5IH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3ZtLnNlYXJjaFF1ZXJ5ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZVwiIH0sIFtcbiAgICAgICAgX2MoXCJ0aGVhZFwiLCBbXG4gICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zb3J0ZWRDbGFzcyhcImNvdW50cnlOYW1lXCIpLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc29ydEJ5KFwiY291bnRyeU5hbWVcIilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJDb3VudHJ5XCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zb3J0ZWRDbGFzcyhcImNhcGl0YWxOYW1lXCIpLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc29ydEJ5KFwiY2FwaXRhbE5hbWVcIilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJDYXBpdGFsXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zb3J0ZWRDbGFzcyhcImNvbnRpbmVudE5hbWVcIiksXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zb3J0QnkoXCJjb250aW5lbnROYW1lXCIpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiQ29udGluZW50XCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zb3J0ZWRDbGFzcyhcImN1cnJlbmN5XCIpLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc29ydEJ5KFwiY3VycmVuY3lcIilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJDdXJyZW5jeVwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc29ydGVkQ2xhc3MoXCJmbGFnXCIpLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc29ydEJ5KFwiZmxhZ1wiKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIkZsYWdcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNvcnRlZENsYXNzKFwibGFuZ3VhZ2VzXCIpLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc29ydEJ5KFwiZmxhZ1wiKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIkxhbmd1YWdlc1wiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgIF92bS5fbChfdm0uc29ydGVkSXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLmNvdW50cnlOYW1lKSldKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoaXRlbS5jYXBpdGFsTmFtZSkpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uY29udGluZW50TmFtZSkpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uY3VycmVuY3kpKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBpdGVtLmZsYWcsXG4gICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI1MFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX2woaXRlbSwgZnVuY3Rpb24obGFuZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgXCIgKyBfdm0uX3MobGFuZy5zTmFtZSkgKyBcIlxcblxcdFxcdFxcdFxcdFxcdCBcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDJcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAwXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicGFuZWwtaGVhZGluZ1wiIH0sIFtcbiAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCIgQWxsIFJlc291cmNlc1wiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsIlZ1ZSIsIkFwcCIsIkJvb3RzdHJhcFZ1ZSIsImpRdWVyeSIsInJlcXVpcmUiLCJ1c2UiLCJ3aW5kb3ciLCJheGlvcyIsImNvbmZpZyIsInByb2R1Y3Rpb25UaXAiLCJhcHAiLCJjb21wb25lbnRzIiwidGVtcGxhdGUiLCIkbW91bnQiLCJzdGFydFN0aW11bHVzQXBwIiwiY29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=