"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _BasicCountryInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasicCountryInfo */ "./assets/BasicCountryInfo.vue");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
// import './styles/app.css';
//
// // start the Stimulus application
// import './bootstrap';
// //
// //

 //

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
vue__WEBPACK_IMPORTED_MODULE_1__["default"].config.productionTip = false; //

var app = new vue__WEBPACK_IMPORTED_MODULE_1__["default"]({
  el: '#app',
  // components: { BasicCountryInfo  }
  render: function render(h) {
    return h(_BasicCountryInfo__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/BasicCountryInfo.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/BasicCountryInfo.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_0__);
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
  components: {
    Multiselect: (vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default())
  },
  data: function data() {
    return {
      options: [],
      basicCountryInfoService: []
    };
  },
  created: function created() {
    this.getDoc();
    this.checData();
  },
  methods: {
    getDoc: function getDoc() {
      var _this = this;

      axios.get('/country').then(function (response) {
        _this.options = response.data;
        console.log(options);
      })["catch"](function (err) {});
    },
    checData: function checData() {}
  }
});

/***/ }),

/***/ "./assets/BasicCountryInfo.vue":
/*!*************************************!*\
  !*** ./assets/BasicCountryInfo.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BasicCountryInfo_vue_vue_type_template_id_3686f564___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasicCountryInfo.vue?vue&type=template&id=3686f564& */ "./assets/BasicCountryInfo.vue?vue&type=template&id=3686f564&");
/* harmony import */ var _BasicCountryInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasicCountryInfo.vue?vue&type=script&lang=js& */ "./assets/BasicCountryInfo.vue?vue&type=script&lang=js&");
/* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BasicCountryInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BasicCountryInfo_vue_vue_type_template_id_3686f564___WEBPACK_IMPORTED_MODULE_0__.render,
  _BasicCountryInfo_vue_vue_type_template_id_3686f564___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/BasicCountryInfo.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/BasicCountryInfo.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./assets/BasicCountryInfo.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicCountryInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./BasicCountryInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/BasicCountryInfo.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicCountryInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/BasicCountryInfo.vue?vue&type=template&id=3686f564&":
/*!********************************************************************!*\
  !*** ./assets/BasicCountryInfo.vue?vue&type=template&id=3686f564& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicCountryInfo_vue_vue_type_template_id_3686f564___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicCountryInfo_vue_vue_type_template_id_3686f564___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicCountryInfo_vue_vue_type_template_id_3686f564___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./BasicCountryInfo.vue?vue&type=template&id=3686f564& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/BasicCountryInfo.vue?vue&type=template&id=3686f564&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/BasicCountryInfo.vue?vue&type=template&id=3686f564&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/BasicCountryInfo.vue?vue&type=template&id=3686f564& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("label", { staticClass: "typo__label" }, [_vm._v("Groups")]),
      _vm._v(" "),
      _c(
        "multiselect",
        {
          attrs: {
            options: _vm.options,
            multiple: true,
            "group-values": "libs",
            "group-label": "title",
            "group-select": true,
            placeholder: "Type to search",
            "track-by": "name",
            label: "name",
            "preselect-first": true,
            "close-on-select": false,
            "clear-on-select": false,
            "preserve-search": true
          },
          model: {
            value: _vm.value,
            callback: function($$v) {
              _vm.value = $$v
            },
            expression: "value"
          }
        },
        [
          _c("span", { attrs: { slot: "noResult" }, slot: "noResult" }, [
            _vm._v(
              "Oops! No elements found. Consider changing the search query."
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("pre", { staticClass: "language-json" }, [
        _c("code", [_vm._v(_vm._s(_vm.value))])
      ]),
      _vm._v(" "),
      _c("button", { on: { click: _vm.exportPDF } }, [_vm._v("Export PDF")])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_axios_index_js-node_modules_vue-multiselect_dist_vue-multiselect_min_css-063d8c"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFQUUsTUFBTSxDQUFDQyxLQUFQLEdBQWVDLG1CQUFPLENBQUMsNENBQUQsQ0FBdEI7QUFJQUosZ0VBQUEsR0FBMkIsS0FBM0IsRUFDQTs7QUFDQSxJQUFNTyxHQUFHLEdBQUcsSUFBSVAsMkNBQUosQ0FBUTtBQUNoQlEsRUFBQUEsRUFBRSxFQUFFLE1BRFk7QUFFaEI7QUFDRkMsRUFBQUEsTUFBTSxFQUFFLGdCQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDVCx5REFBRCxDQUFMO0FBQUE7QUFIUyxDQUFSLENBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDQTtBQUVBO0FBQ0E7QUFDQTtBQURBLEdBREE7QUFJQSxNQUpBLGtCQUlBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBO0FBRkE7QUFJQSxHQVRBO0FBVUEsU0FWQSxxQkFVQTtBQUNBO0FBQ0E7QUFDQSxHQWJBO0FBY0E7QUFDQSxVQURBLG9CQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxXQUdBLGlCQUhBO0FBSUEsS0FOQTtBQU9BLFlBUEEsc0JBUUEsQ0FDQTtBQVRBO0FBZEE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCK0Y7QUFDM0I7QUFDTDtBQUMvRCxDQUFrRzs7O0FBR2xHO0FBQ3VGO0FBQ3ZGLGdCQUFnQix1R0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx3RkFBTTtBQUNSLEVBQUUsaUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUN2QytMLENBQUMsaUVBQWUscU5BQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FsTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLFNBQVMsa0JBQWtCLG9CQUFvQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw4QkFBOEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLE1BQU0sd0JBQXdCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9CYXNpY0NvdW50cnlJbmZvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQmFzaWNDb3VudHJ5SW5mby52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0Jhc2ljQ291bnRyeUluZm8udnVlPzcyOTEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0Jhc2ljQ291bnRyeUluZm8udnVlP2EyNTYiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbi8vIGltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG4vL1xuLy8gLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG4vLyBpbXBvcnQgJy4vYm9vdHN0cmFwJztcbi8vIC8vXG4vLyAvL1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgQmFzaWNDb3VudHJ5SW5mbyBmcm9tICcuL0Jhc2ljQ291bnRyeUluZm8nO1xuLy9cblxud2luZG93LmF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxuXG5cblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXG4vL1xuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XG4gICAgZWw6ICcjYXBwJyxcbiAgICAvLyBjb21wb25lbnRzOiB7IEJhc2ljQ291bnRyeUluZm8gIH1cblx0XHRyZW5kZXI6IGggPT4gaChCYXNpY0NvdW50cnlJbmZvKVxufSk7XG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8bGFiZWwgY2xhc3M9XCJ0eXBvX19sYWJlbFwiPkdyb3VwczwvbGFiZWw+XHJcbiAgICAgICAgICA8bXVsdGlzZWxlY3RcclxuICAgICAgICAgIHYtbW9kZWw9XCJ2YWx1ZVwiXHJcbiAgICAgICAgICA6b3B0aW9ucz1cIm9wdGlvbnNcIlxyXG4gICAgICAgICAgOm11bHRpcGxlPVwidHJ1ZVwiXHJcbiAgICAgICAgICBncm91cC12YWx1ZXM9XCJsaWJzXCJcclxuICAgICAgICAgIGdyb3VwLWxhYmVsPVwidGl0bGVcIlxyXG4gICAgICAgICAgOmdyb3VwLXNlbGVjdD1cInRydWVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHRvIHNlYXJjaFwiXHJcbiAgICAgICAgICB0cmFjay1ieT1cIm5hbWVcIlxyXG4gICAgICAgICAgbGFiZWw9XCJuYW1lXCJcclxuICAgICAgICAgIDpwcmVzZWxlY3QtZmlyc3Q9XCJ0cnVlXCJcclxuICAgICAgICAgIDpjbG9zZS1vbi1zZWxlY3Q9XCJmYWxzZVwiXHJcbiAgICAgICAgICA6Y2xlYXItb24tc2VsZWN0PVwiZmFsc2VcIlxyXG4gICAgICAgICAgOnByZXNlcnZlLXNlYXJjaD1cInRydWVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4gc2xvdD1cIm5vUmVzdWx0XCI+T29wcyEgTm8gZWxlbWVudHMgZm91bmQuIENvbnNpZGVyIGNoYW5naW5nIHRoZSBzZWFyY2ggcXVlcnkuPC9zcGFuPjwvbXVsdGlzZWxlY3Q+XHJcbiAgICAgIDxwcmUgY2xhc3M9XCJsYW5ndWFnZS1qc29uXCI+PGNvZGU+e3sgdmFsdWUgIH19PC9jb2RlPjwvcHJlPlxyXG4gICAgICA8YnV0dG9uIEBjbGljaz1cImV4cG9ydFBERlwiPkV4cG9ydCBQREY8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IE11bHRpc2VsZWN0IGZyb20gJ3Z1ZS1tdWx0aXNlbGVjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuY29tcG9uZW50czoge1xyXG4gIE11bHRpc2VsZWN0XHJcbn0sXHJcbmRhdGEgKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBvcHRpb25zOiBbXSxcclxuICAgIGJhc2ljQ291bnRyeUluZm9TZXJ2aWNlOiBbXSxcclxuICB9XHJcbn0sXHJcbmNyZWF0ZWQoKSB7XHJcbiAgdGhpcy5nZXREb2MoKTtcclxuICB0aGlzLmNoZWNEYXRhKCk7XHJcbn0sXHJcbm1ldGhvZHM6IHtcclxuICBnZXREb2MoKSB7XHJcbiAgICBheGlvcy5nZXQoJy9jb3VudHJ5JykudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICB0aGlzLm9wdGlvbnMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyhvcHRpb25zKTtcclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHt9KVxyXG4gIH0sXHJcbmNoZWNEYXRhKClcclxue1xyXG59LFxyXG4gIH0sXHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc3JjPVwidnVlLW11bHRpc2VsZWN0L2Rpc3QvdnVlLW11bHRpc2VsZWN0Lm1pbi5jc3NcIj48L3N0eWxlPlxyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Jhc2ljQ291bnRyeUluZm8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM2ODZmNTY0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Jhc2ljQ291bnRyeUluZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9CYXNpY0NvdW50cnlJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwidnVlLW11bHRpc2VsZWN0L2Rpc3QvdnVlLW11bHRpc2VsZWN0Lm1pbi5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxccHJvamVjdHNcXFxcc3ltZm9ueS1kb2NrZXJcXFxcc3ltZm9ueVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczNjg2ZjU2NCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczNjg2ZjU2NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczNjg2ZjU2NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQmFzaWNDb3VudHJ5SW5mby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzY4NmY1NjQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzY4NmY1NjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9CYXNpY0NvdW50cnlJbmZvLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CYXNpY0NvdW50cnlJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Jhc2ljQ291bnRyeUluZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJ0eXBvX19sYWJlbFwiIH0sIFtfdm0uX3YoXCJHcm91cHNcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJtdWx0aXNlbGVjdFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIG9wdGlvbnM6IF92bS5vcHRpb25zLFxuICAgICAgICAgICAgbXVsdGlwbGU6IHRydWUsXG4gICAgICAgICAgICBcImdyb3VwLXZhbHVlc1wiOiBcImxpYnNcIixcbiAgICAgICAgICAgIFwiZ3JvdXAtbGFiZWxcIjogXCJ0aXRsZVwiLFxuICAgICAgICAgICAgXCJncm91cC1zZWxlY3RcIjogdHJ1ZSxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlR5cGUgdG8gc2VhcmNoXCIsXG4gICAgICAgICAgICBcInRyYWNrLWJ5XCI6IFwibmFtZVwiLFxuICAgICAgICAgICAgbGFiZWw6IFwibmFtZVwiLFxuICAgICAgICAgICAgXCJwcmVzZWxlY3QtZmlyc3RcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiY2xvc2Utb24tc2VsZWN0XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJjbGVhci1vbi1zZWxlY3RcIjogZmFsc2UsXG4gICAgICAgICAgICBcInByZXNlcnZlLXNlYXJjaFwiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS52YWx1ZSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLnZhbHVlID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ2YWx1ZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgc2xvdDogXCJub1Jlc3VsdFwiIH0sIHNsb3Q6IFwibm9SZXN1bHRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiT29wcyEgTm8gZWxlbWVudHMgZm91bmQuIENvbnNpZGVyIGNoYW5naW5nIHRoZSBzZWFyY2ggcXVlcnkuXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwicHJlXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFuZ3VhZ2UtanNvblwiIH0sIFtcbiAgICAgICAgX2MoXCJjb2RlXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS52YWx1ZSkpXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYnV0dG9uXCIsIHsgb246IHsgY2xpY2s6IF92bS5leHBvcnRQREYgfSB9LCBbX3ZtLl92KFwiRXhwb3J0IFBERlwiKV0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwibmFtZXMiOlsiVnVlIiwiQmFzaWNDb3VudHJ5SW5mbyIsIndpbmRvdyIsImF4aW9zIiwicmVxdWlyZSIsImNvbmZpZyIsInByb2R1Y3Rpb25UaXAiLCJhcHAiLCJlbCIsInJlbmRlciIsImgiXSwic291cmNlUm9vdCI6IiJ9