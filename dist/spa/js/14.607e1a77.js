(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "da60":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/mytests/serial_minimal.vue?vue&type=template&id=9026658c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"flex column",staticStyle:{"align-items":"center"}},[_c('section',{staticClass:"q-mt-md"},[_vm._v("\n        SerialPort: "+_vm._s(_vm.serialPortAvailable)+"\n    ")]),_c('q-btn',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"label":"refresh port list"},on:{"click":function($event){return _vm.updatePortList()}}}),_c('section',{staticClass:"q-mt-md"},_vm._l((_vm.deviceList),function(device,index){return _c('div',{key:index},[_c('pre',[_vm._v(_vm._s(device))])])}),0)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/mytests/serial_minimal.vue?vue&type=template&id=9026658c&

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("4db1");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/mytests/serial_minimal.vue?vue&type=script&lang=js&

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
/* harmony default export */ var serial_minimalvue_type_script_lang_js_ = ({
  name: 'SerialList',
  data: function data() {
    return {
      serialPortAvailable: false,
      deviceList: [{
        comName: 'dummyResponder'
      }]
    };
  },
  methods: {
    updatePortList: function updatePortList() {
      var _this = this;

      console.group('updatePortList()');

      if (SerialPort) {
        try {
          SerialPort.list().then(function (ports) {
            var _this$deviceList;

            console.log('ports', ports);
            _this.deviceList = [];

            (_this$deviceList = _this.deviceList).push.apply(_this$deviceList, toConsumableArray_default()(ports));
          }, function (err) {
            console.error('serialport.list:', err);
          });
        } catch (e) {
          console.error('SerialPort.list() failed:\n', e);
        }
      } else {
        this.deviceList = [];
        console.log('SerialPort not available.');
      }

      console.groupEnd();
    }
  },
  mounted: function mounted() {
    this.updatePortList();

    if (SerialPort) {
      this.serialPortAvailable = true;
    }
  }
});
// CONCATENATED MODULE: ./src/pages/mytests/serial_minimal.vue?vue&type=script&lang=js&
 /* harmony default export */ var mytests_serial_minimalvue_type_script_lang_js_ = (serial_minimalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/pages/mytests/serial_minimal.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  mytests_serial_minimalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var serial_minimal = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=14.607e1a77.js.map