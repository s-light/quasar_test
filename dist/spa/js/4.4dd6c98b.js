(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "01bf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LogView.vue?vue&type=template&id=fa145aac&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"log"},_vm._l((_vm.logInternal),function(line,index){return _c('div',{key:index,staticClass:"line row"},[_c('div',{staticClass:"info q-px-sm"},[_vm._v("\n            "+_vm._s(_vm._f("timeOnly")(line.time))+" "+_vm._s(line.direction)+"\n        ")]),_c('pre',{staticClass:"col-grow"},[_vm._v(_vm._s(line.text))])])}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LogView.vue?vue&type=template&id=fa145aac&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/date.js + 1 modules
var date = __webpack_require__("bd4c");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LogView.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
;
var demoData = [{
  direction: '~',
  time: '2019-06-02T11:42:42.000Z',
  text: 'First Line'
}, {
  direction: '~',
  time: '2019-06-02T11:42:42.102Z',
  text: 'multiline\n content'
}, {
  direction: '~',
  time: '2019-06-02T11:42:42.200Z',
  text: ''
}, {
  direction: '~',
  time: '2019-06-02T11:42:42.420Z',
  text: "this 'line' contains a full unicode styled table:\n\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2566\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2566\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n\u2551      Name      \u2551 Value \u2551 Unit \u2551\n\u2560\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u256C\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u256C\u2550\u2550\u2550\u2550\u2550\u2550\u2563\n\u2551 Ambient Light  \u2551    42 \u2551 LUX  \u2551\n\u2551 LED-Brightness \u2551    50 \u2551 %    \u2551\n\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2569\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2569\u2550\u2550\u2550\u2550\u2550\u2550\u255D"
}, {
  direction: '~',
  time: '2019-06-02T11:43:00.000Z',
  text: 'the end..'
}];
/* harmony default export */ var LogViewvue_type_script_lang_js_ = ({
  props: {
    log: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    logCountMax: {
      type: Number,
      default: 500
    },
    // https://stackoverflow.com/questions/33253275/what-unicode-symbol-represents-a-person
    // direction: '👤',
    directionOutSymbol: {
      type: String,
      default: '→'
    },
    directionInSymbol: {
      type: String,
      default: '*'
    },
    directionSpecialSymbol: {
      type: String,
      default: '~'
    },
    directionCommentSymbol: {
      type: String,
      default: '#'
    },
    showDemoData: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      logInternal: []
    };
  },
  computed: {},
  methods: {
    addEntry: function addEntry(text) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.directionInSymbol;
      var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date();
      var logEntry = {
        direction: direction,
        time: time,
        text: text
      };
      this.logInternal.push(logEntry); // limit log length

      while (this.logInternal.length > this.logCountMax) {
        this.logInternal.shift();
      }

      this.$emit('update:log', this.logInternal);
    },
    addEntryOut: function addEntryOut(text) {
      this.addEntry(text, this.directionOutSymbol, new Date());
    },
    addEntryIn: function addEntryIn(text) {
      this.addEntry(text, this.directionInSymbol, new Date());
    },
    addEntrySpecial: function addEntrySpecial(text) {
      this.addEntry(text, this.directionSpecialSymbol, new Date());
    },
    addEntryComment: function addEntryComment(text) {
      this.addEntry(text, this.directionCommentSymbol, new Date());
    },
    clear: function clear() {
      this.logInternal = [];
    }
  },
  watch: {},
  mounted: function mounted() {
    if (this.showDemoData) {
      this.logInternal = demoData;
    } else {
      this.logInternal = this.log;
    }
  },
  filters: {
    timeOnly: function timeOnly(value) {
      // console.log('value', value)
      var timeStamp = new Date(value); // console.log('timeStamp', timeStamp)

      var result = '';

      if (date["a" /* default */].isValid(timeStamp)) {
        // https://quasar.dev/quasar-utils/date-utils#Format-for-display
        result = date["a" /* default */].formatDate(timeStamp, 'HH:mm:ss.SSS');
      }

      return result;
    }
  }
});
// CONCATENATED MODULE: ./src/components/LogView.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LogViewvue_type_script_lang_js_ = (LogViewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/LogView.vue?vue&type=style&index=0&lang=stylus&
var LogViewvue_type_style_index_0_lang_stylus_ = __webpack_require__("2d47");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/LogView.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LogViewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LogView = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "2d47":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_2_2_node_modules_stylus_loader_index_js_ref_7_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_stylus_variables_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LogView_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fd6b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_2_2_node_modules_stylus_loader_index_js_ref_7_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_stylus_variables_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LogView_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_2_2_node_modules_stylus_loader_index_js_ref_7_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_stylus_variables_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LogView_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_2_2_node_modules_stylus_loader_index_js_ref_7_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_stylus_variables_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LogView_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b994":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/mytests/hid.vue?vue&type=template&id=59e78177&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"flex column",staticStyle:{"align-items":"center"}},[_c('section',{staticClass:"q-mt-md row justify-around items-center "},[_c('q-select',{staticClass:"q-mr-md",staticStyle:{"min-width":"16em","background":"transparent"},attrs:{"rounded":"","outlined":"","label":"Device","disable":_vm.deviceIsOpen,"option-label":function (item) { return item.product; },"option-value":function (item) { return item; },"options":_vm.deviceList},scopedSlots:_vm._u([{key:"option",fn:function(scope){return [_c('q-item',_vm._g(_vm._b({},'q-item',scope.itemProps,false),scope.itemEvents),[_c('q-item-section',[_c('q-item-label',[_vm._v("\n                            "+_vm._s(scope.opt.product)+"\n                        ")]),_c('q-item-label',{attrs:{"caption":""}},[_vm._v("\n                            "+_vm._s(scope.opt.manufacturer)+"\n                        ")]),_c('q-item-label',{attrs:{"caption":""}},[_vm._v("\n                            "+_vm._s(scope.opt.path)+"\n                        ")]),_c('q-item-label',{attrs:{"caption":""}},[_vm._v("\n                            vendorId:"+_vm._s(scope.opt.vendorId)+"\n                        ")]),_c('q-item-label',{attrs:{"caption":""}},[_vm._v("\n                            productId:"+_vm._s(scope.opt.productId)+"\n                        ")]),_c('q-item-label',{attrs:{"caption":""}},[_vm._v("\n                            serialNumber:"+_vm._s(scope.opt.serialNumber)+"\n                        ")])],1)],1)]}},{key:"no-option",fn:function(){return [_c('q-item',[_c('q-item-section',[_vm._v("\n                        No Devices\n                    ")])],1)]},proxy:true},{key:"append",fn:function(){return [_c('q-btn',{attrs:{"flat":"","round":"","dense":"","hint":"search devices","icon":"refresh","disable":_vm.deviceIsOpen,"loading":_vm.deviceSearching},on:{"click":function($event){return _vm.search()}},scopedSlots:_vm._u([{key:"loading",fn:function(){return [_c('q-spinner-radio')]},proxy:true}])})]},proxy:true}]),model:{value:(_vm.deviceSelected),callback:function ($$v) {_vm.deviceSelected=$$v},expression:"deviceSelected"}}),_c('q-btn',{style:({opacity: (_vm.deviceSelected ? 'inherit' : '0.05')}),attrs:{"rounded":"","icon":_vm.deviceIsOpen ? 'phonelink_off' : 'phonelink',"loading":_vm.deviceConnecting,"label":_vm.deviceIsOpen ? 'disconnect' : 'connect',"disable":!_vm.deviceSelected},on:{"click":function($event){return _vm.toggleConnect()}},scopedSlots:_vm._u([{key:"loading",fn:function(){return [_c('q-spinner-gears')]},proxy:true},{key:"after",fn:function(){return [_c('q-icon',{attrs:{"name":"close"}})]},proxy:true}])})],1),_c('section',[_c('p',{staticClass:"q-ma-md"},[_vm._v("\n            "+_vm._s(_vm.deviceSelected)+"\n        ")])]),_c('LogView',{ref:"mylog",staticClass:"q-mt-md q-pa-sm",attrs:{"log":_vm.log},on:{"update:log":function($event){_vm.log=$event}}}),_c('section',{staticClass:"q-mt-md",staticStyle:{"min-width":"50vw"}},[_c('q-input',{attrs:{"filled":"","label":"Send Message","disable":!_vm.deviceIsOpen || _vm.deviceConnecting},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.messageSend()}},scopedSlots:_vm._u([{key:"append",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",style:({opacity: (_vm.messagaeToSend !== '' ? 'inherit' : '0.1')}),attrs:{"name":"close"},on:{"click":function($event){_vm.messagaeToSend = ''}}})]},proxy:true},{key:"after",fn:function(){return [_c('q-btn',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"round":"","dense":"","flat":"","icon":"send","disable":!_vm.deviceIsOpen || _vm.deviceConnecting},on:{"click":function($event){return _vm.messageSend()}}})]},proxy:true}]),model:{value:(_vm.messagaeToSend),callback:function ($$v) {_vm.messagaeToSend=$$v},expression:"messagaeToSend"}})],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/mytests/hid.vue?vue&type=template&id=59e78177&

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__("ac4d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("8a81");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("6b54");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__("06db");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.search.js
var es6_regexp_search = __webpack_require__("386d");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("4db1");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__("5df3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__("1c4c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.starts-with.js
var es6_string_starts_with = __webpack_require__("f559");

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/extend.js
var extend = __webpack_require__("11ec");

// EXTERNAL MODULE: ./src/components/LogView.vue + 4 modules
var LogView = __webpack_require__("01bf");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/mytests/hid.vue?vue&type=script&lang=js&












function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
;

var dummyResponder = {
  vendorId: -1,
  productId: -1,
  path: '/dummyResponder/0',
  serialNumber: '42',
  manufacturer: 's-light.eu',
  product: 'dummyResponder',
  release: -1,
  interface: -1,
  usagePage: -1,
  usage: -1
};
/* harmony default export */ var hidvue_type_script_lang_js_ = ({
  name: 'PageSerialTest',
  data: function data() {
    return {
      hidAvailable: false,
      device: undefined,
      parser: undefined,
      deviceList: [dummyResponder],
      deviceSelected: null,
      deviceIsOpen: false,
      deviceSearching: false,
      deviceConnecting: false,
      messagaeToSend: 'Hello World :-)',
      log: undefined
    };
  },
  methods: {
    toggleConnect: function toggleConnect() {
      console.group('toggleConnect()');
      this.deviceConnecting = true; // console.log('this.deviceConnecting', this.deviceConnecting)
      // console.log('this.deviceIsOpen', this.deviceIsOpen)

      if (this.deviceIsOpen) {
        console.log('we will close now..');
        this.deviceClose();
        console.log('close done.');
      } else {
        console.log('we will open now..');
        this.deviceOpen();
      }

      console.groupEnd();
    },
    deviceOpen: function deviceOpen() {
      var _this = this;

      console.group('deviceOpen()'); // console.log(`this.deviceSelected.path '${this.deviceSelected.path}'`)

      console.log("this.deviceSelected '".concat(this.deviceSelected, "'")); // if (this.deviceSelected.startsWith('dummyResponder')) {

      if (this.deviceSelected.path.startsWith('/dummyResponder/')) {
        setTimeout(function () {
          // we're done, we reset loading state
          _this.deviceConnecting = false;
          _this.deviceIsOpen = true;
        }, 500);
      } else {
        if (this.hidAvailable) {
          try {
            this.device = new HID.HID(this.deviceSelected.path);
            this.device.on('error', function (err) {
              _this.$refs.mylog.addEntrySpecial(err);
            });
            this.device.on('data', function (data) {
              _this.messageReceive(data);
            });
            this.deviceIsOpen = true;
            this.deviceConnecting = false;
          } catch (e) {
            console.error('device open failed:\n', e);
            this.deviceIsOpen = false;
            this.deviceConnecting = false;
          }
        }
      }

      console.groupEnd();
    },
    deviceClose: function deviceClose() {
      var _this2 = this;

      // if (this.deviceSelected.startsWith('dummyResponder')) {
      if (this.deviceSelected.path.startsWith('/dummyResponder/')) {
        setTimeout(function () {
          // we're done, we reset loading state
          _this2.deviceConnecting = false;
          _this2.deviceIsOpen = false;
        }, 500);
      } else {
        // console.log('this.device', this.device)
        if (this.hidAvailable && this.device) {
          this.deviceConnecting = true;
          this.device.close();
          this.deviceIsOpen = false;
          this.deviceConnecting = false;
        }
      }
    },
    messageSend: function messageSend() {
      var _this3 = this;

      console.group('messageSend');
      console.log('messagaeToSend:', this.messagaeToSend);

      if (this.deviceSelected.path.startsWith('/dummyResponder/')) {
        console.log('send to dummyResponder');
        var recMessage = this.messagaeToSend;
        setTimeout(function () {
          _this3.messageReceive(recMessage);
        }, 1000);
      } else {
        if (this.hidAvailable) {
          console.log('hid is available.');

          try {
            console.log('write to device'); // this.device.write([0x05, 42, 0xff])

            var messgeAsCharCodeArray = Array.from(this.messagaeToSend).map(function (val) {
              return val.charCodeAt(0);
            });
            this.device.write(messgeAsCharCodeArray);
          } catch (e) {
            console.error('write failed:\n', e);
          }
        }
      }

      this.$refs.mylog.addEntryOut(this.messagaeToSend);
      this.messagaeToSend = '';
      console.groupEnd();
    },
    messageReceive: function messageReceive(value) {
      this.$refs.mylog.addEntryIn(value);
    },
    search: function search() {
      var _this4 = this;

      console.group('search for devices..');
      this.deviceSearching = true;

      if (this.hidAvailable) {
        // TODO: check/find async version..
        // HID.devices().then(
        //     devices => {
        //         // use code from the 'if part'
        //     },
        //     err => {
        //         console.error('HID.devices:', err)
        //         this.deviceSearching = false
        //     }
        // )
        var devices = HID.devices();

        if (devices) {
          var _this$deviceList;

          // reset list
          var dummyResponderNew = {};
          Object(extend["a" /* default */])(dummyResponderNew, dummyResponder);
          this.deviceList = [dummyResponderNew]; // use new list
          // eslint-disable-next-line no-unused-vars

          var _iterator = _createForOfIteratorHelper(devices),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var device = _step.value;
              console.log("device ".concat(device)); // filter results..
              // if (device.vendorId) {
              //     // console.log(device)
              //     this.deviceList.push(device)
              // }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          (_this$deviceList = this.deviceList).push.apply(_this$deviceList, toConsumableArray_default()(devices)); // cleanup


          this.deviceSelected = this.deviceList[this.deviceList.length - 1];
          this.deviceSearching = false;
        } else {
          console.error('HID.devices:', 'failed.');
          this.deviceSearching = false;
        }
      } else {
        // simulate a delay
        setTimeout(function () {
          // we're done, we reset loading state
          var dummyResponderNew = {}; // https://quasar.dev/quasar-utils/other-utils#(Deep)-Copy-Objects

          Object(extend["a" /* default */])(dummyResponderNew, dummyResponder);
          dummyResponderNew.path = '/dummyResponder/' + _this4.deviceList.length;
          dummyResponderNew.serialNumber = 42 + _this4.deviceList.length * 100;
          dummyResponderNew.product = 'dummyResponder new' + _this4.deviceList.length;

          _this4.deviceList.push(dummyResponderNew);

          _this4.deviceSearching = false;
        }, 2000);
      }

      console.groupEnd();
    }
  },
  computed: {// thing: function () {
    //     let result = []
    //     for (let port of this.deviceList) {
    //         result.push(port.path)
    //     }
    //     return result
    // }
  },
  mounted: function mounted() {
    console.group('mounted..'); // this.deviceSelected = this.deviceList[0]

    if (HID) {
      // console.info('list of HID devices:')
      // for (let device of HID.devices()) {
      //     console.log(device)
      // }
      // console.group('setup HID usage')
      try {
        HID.devices();
        this.hidAvailable = true;
      } catch (e) {
        this.hidAvailable = false;
        console.error(e);
      } // console.groupEnd()


      this.search();
    }

    if (!this.hidAvailable) {
      console.log('create some dummyResponder entries..');
      this.search();
      this.search();
      this.search();
    }

    console.groupEnd();
  },
  beforeDestroy: function beforeDestroy() {
    console.group('beforeDestroy..');
    this.deviceClose();
    console.groupEnd();
  },
  filters: {},
  components: {
    LogView: LogView["a" /* default */]
  }
}); // https://quasar.dev/quasar-plugins/web-storage
// this.$q.localStorage.set(key, value)
// let value = this.$q.localStorage.getItem(key)
//
// this.$q.sessionStorage.set(key, value)
// let value = this.$q.sessionStorage.getItem(key)
// CONCATENATED MODULE: ./src/pages/mytests/hid.vue?vue&type=script&lang=js&
 /* harmony default export */ var mytests_hidvue_type_script_lang_js_ = (hidvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/pages/mytests/hid.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  mytests_hidvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var hid = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "fd6b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=4.4dd6c98b.js.map