(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "6649":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/mytests/font.vue?vue&type=template&id=84c44fd6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"flex column",staticStyle:{"align\\-items":"center"}},[_c('section',{staticStyle:{"margin-top":"1em"}},[_c('CanvasTextRender',{staticStyle:{"margin":"1em auto"},attrs:{"value":_vm.testmessage,"font-family":_vm.font_active,"font-weight":_vm.font_weight,"font-style":_vm.font_style,"height":_vm.height}}),_c('div',{staticStyle:{"margin":"2em","background-color":"$primary"},style:({fontFamily: _vm.font_active, fontWeight: _vm.font_weight, fontStyle: _vm.font_style})},[_vm._v("\n            "+_vm._s(_vm.testmessage)+"\n        ")])],1),_c('section',[_c('q-input',{attrs:{"clearable":"","filled":"","label":"Test Message"},model:{value:(_vm.testmessage),callback:function ($$v) {_vm.testmessage=$$v},expression:"testmessage"}}),_c('q-select',{attrs:{"filled":"","label":"select font","options":_vm.font_list_filtered,"use-input":"","input-debounce":"0"},on:{"filter":_vm.filterFn},scopedSlots:_vm._u([{key:"no-option",fn:function(){return [_c('q-item',[_c('q-item-section',{staticClass:"text-grey"},[_vm._v("\n                        No results\n                    ")])],1)]},proxy:true},{key:"option",fn:function(scope){return [_c('q-item',_vm._g(_vm._b({},'q-item',scope.itemProps,false),scope.itemEvents),[_c('q-item-section',[_c('q-item-label',{style:({fontFamily : scope.opt}),domProps:{"innerHTML":_vm._s(scope.opt)}})],1)],1)]}}]),model:{value:(_vm.font_active),callback:function ($$v) {_vm.font_active=$$v},expression:"font_active"}}),_c('q-toggle',{attrs:{"false-value":"","true-value":"italic","label":"italic"},model:{value:(_vm.font_style),callback:function ($$v) {_vm.font_style=$$v},expression:"font_style"}}),_c('q-slider',{attrs:{"min":100,"max":900,"step":100,"snap":"","markers":"","label":""},model:{value:(_vm.font_weight),callback:function ($$v) {_vm.font_weight=$$v},expression:"font_weight"}}),_c('q-badge',{attrs:{"color":"secondary"}},[_vm._v("\n            font_weight: "+_vm._s(_vm.font_weight)+", font_active: "+_vm._s(_vm.font_active)+"\n        ")])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/mytests/font.vue?vue&type=template&id=84c44fd6&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CanvasTextRender.vue?vue&type=template&id=2a12941c&
var CanvasTextRendervue_type_template_id_2a12941c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"canvas-text-render"},[_c('canvas',{ref:"canvas"},[_vm._v("\n        "+_vm._s(_vm.value)+"\n    ")]),_c('div',[_vm._v("\n        "+_vm._s(_vm.width)+"x"+_vm._s(_vm.height)+"\n    ")])])}
var CanvasTextRendervue_type_template_id_2a12941c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CanvasTextRender.vue?vue&type=template&id=2a12941c&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CanvasTextRender.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CanvasTextRendervue_type_script_lang_js_ = ({
  // name: 'CanvasTextRender',
  // props: ['value', 'font', 'width', 'height'],
  props: {
    value: {
      type: String,
      default: ''
    },
    fontFamily: {
      type: String,
      default: 'sans'
    },
    fontSize: {
      type: Number,
      default: 11
    },
    fontWeight: {
      type: Number,
      default: 500
    },
    fontStyle: {
      type: String,
      default: ''
    },
    // width: {
    //     type: Number,
    //     default: 44
    // }
    height: {
      type: Number,
      default: 11
    }
  },
  data: function data() {
    return {
      testmessage: '01:42 Hello World :-)',
      width: 100 // height: 10

    };
  },
  computed: {
    // https://developer.mozilla.org/en-US/docs/Web/CSS/font
    font: function font() {
      var font = '';
      font += this.fontStyle + ' ';
      font += this.fontWeight + ' ';
      font += this.height + 'px'; // font += ' ' + this.fontSize

      font += ' "' + this.fontFamily + '"';
      return font;
    } // },
    // width: function () {
    //     let textWidth = 200
    //     if (this.$refs.canvas) {
    //         console.log('this.$refs.canvas', this.$refs.canvas)
    //         const ctx = this.$refs.canvas.getContext('2d')
    //         textWidth = ctx.measureText(this.value).width
    //     }
    //     console.log('textWidth', textWidth)
    //     return textWidth
    //     // return 100
    // }

  },
  methods: {
    updateCanvas: function updateCanvas() {
      // console.log('this', this)
      var canvas = this.$refs.canvas;

      if (canvas) {
        var ctx = canvas.getContext('2d'); // get new width

        var textWidth = ctx.measureText(this.value).width;
        this.width = textWidth; // ^- fires after updateCanvas is done and so clears the canvas..

        canvas.width = textWidth; // console.log('textWidth', textWidth)
        // clean up

        ctx.clearRect(0, 0, canvas.width, canvas.height); // console.log('this.font', this.font)
        // render

        ctx.fillStyle = 'black';
        ctx.font = this.font;
        ctx.fillText(this.value, 0, this.height - 1);
      }
    }
  },
  watch: {
    value: function value() {
      this.updateCanvas();
    },
    font: function font() {
      this.updateCanvas();
      this.updateCanvas();
    },
    height: function height(value) {
      var canvas = this.$refs.canvas;

      if (canvas) {
        canvas.height = value;
      }

      this.updateCanvas();
    } // width: function () {
    //     this.updateCanvas()
    // }

  },
  mounted: function mounted() {
    var canvas = this.$refs.canvas;

    if (canvas) {
      canvas.height = this.height;
      canvas.width = this.width;
    }

    this.updateCanvas();
    this.updateCanvas();
  }
});
// CONCATENATED MODULE: ./src/components/CanvasTextRender.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CanvasTextRendervue_type_script_lang_js_ = (CanvasTextRendervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/CanvasTextRender.vue?vue&type=style&index=0&lang=css&
var CanvasTextRendervue_type_style_index_0_lang_css_ = __webpack_require__("6e6b");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/CanvasTextRender.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CanvasTextRendervue_type_script_lang_js_,
  CanvasTextRendervue_type_template_id_2a12941c_render,
  CanvasTextRendervue_type_template_id_2a12941c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CanvasTextRender = (component.exports);
// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/mytests/font.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var fontvue_type_script_lang_js_ = ({
  name: 'FontTest',
  data: function data() {
    return {
      testmessage: '16:05 Here we have some text. This is only for testing the font...',
      font_active: 'Titillium',
      font_list: ['Titillium', // "Ruji's Handwriting Font v.2.0",
      // "Ruji's Handwriting Font v20",
      // 'Rujis Handwriting Font v.2.0',
      'Rujis Handwriting Font v20', 'Office Code Pro', // 'Office Code Pro D',
      'Overpass', 'Overpass-mono', 'Roboto' // 'Overlock',
      // 'Ruthie'
      ],
      font_list_filtered: this.font_list,
      font_weight: 500,
      font_style: '',
      height: 11
    };
  },
  methods: {
    // https://quasar.dev/vue-components/select#Example--Basic-autocomplete
    filterFn: function filterFn(val, update, abort) {
      var _this = this;

      update(function () {
        var needle = val.toLowerCase();
        _this.font_list_filtered = _this.font_list.filter(function (v) {
          return v.toLowerCase().indexOf(needle) > -1;
        });
      });
    }
  },
  computed: {
    // https://vuejs.org/v2/guide/computed.html#Basic-Example
    example_computed: function example_computed() {
      return undefined;
    }
  },
  filters: {
    prettyprint: function prettyprint(value) {
      if (!value) return '';
      return JSON.stringify(value, null, '    ');
    }
  },
  components: {
    CanvasTextRender: CanvasTextRender
  }
}); // https://quasar.dev/quasar-plugins/web-storage
// this.$q.localStorage.set(key, value)
// let value = this.$q.localStorage.getItem(key)
//
// this.$q.sessionStorage.set(key, value)
// let value = this.$q.sessionStorage.getItem(key)
// CONCATENATED MODULE: ./src/pages/mytests/font.vue?vue&type=script&lang=js&
 /* harmony default export */ var mytests_fontvue_type_script_lang_js_ = (fontvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/pages/mytests/font.vue





/* normalize component */

var font_component = Object(componentNormalizer["a" /* default */])(
  mytests_fontvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var font = __webpack_exports__["default"] = (font_component.exports);

/***/ }),

/***/ "6e6b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CanvasTextRender_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("993e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CanvasTextRender_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CanvasTextRender_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CanvasTextRender_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "993e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=7.7ccb5a94.js.map