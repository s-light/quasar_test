(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("2f39");


/***/ }),

/***/ "2f39":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("967e");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("fa84");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@quasar/extras/roboto-font/roboto-font.css
var roboto_font = __webpack_require__("7d6e");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/material-icons/material-icons.css
var material_icons = __webpack_require__("e54f");

// EXTERNAL MODULE: ./node_modules/quasar/dist/quasar.styl
var quasar = __webpack_require__("62f2");

// EXTERNAL MODULE: ./src/css/app.styl
var css_app = __webpack_require__("7e6d");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// EXTERNAL MODULE: ./node_modules/quasar/lang/en-us.js
var en_us = __webpack_require__("1f91");

// EXTERNAL MODULE: ./node_modules/quasar/icon-set/material-icons.js
var icon_set_material_icons = __webpack_require__("42d2");

// EXTERNAL MODULE: ./node_modules/quasar/src/vue-plugin.js + 1 modules
var vue_plugin = __webpack_require__("b05d");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/layout/QLayout.js + 1 modules
var QLayout = __webpack_require__("4d5a");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/header/QHeader.js
var QHeader = __webpack_require__("e359");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/drawer/QDrawer.js
var QDrawer = __webpack_require__("9404");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPageContainer.js
var QPageContainer = __webpack_require__("09e3");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__("9989");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__("65c6");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbarTitle.js
var QToolbarTitle = __webpack_require__("6ac5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__("1c1c");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js + 1 modules
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__("0170");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/editor/QEditor.js + 6 modules
var QEditor = __webpack_require__("d66b");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js + 3 modules
var QSelect = __webpack_require__("ddd8");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/toggle/QToggle.js + 3 modules
var QToggle = __webpack_require__("9564");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/slider/QSlider.js + 1 modules
var QSlider = __webpack_require__("c1d0");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerGears.js
var QSpinnerGears = __webpack_require__("cf57");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerRadio.js
var QSpinnerRadio = __webpack_require__("9569");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/badge/QBadge.js
var QBadge = __webpack_require__("58a8");

// EXTERNAL MODULE: ./node_modules/quasar/src/directives/Ripple.js + 1 modules
var Ripple = __webpack_require__("714f");

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Notify.js + 1 modules
var Notify = __webpack_require__("2a19");

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/LocalStorage.js
var LocalStorage = __webpack_require__("18d6");

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/SessionStorage.js
var SessionStorage = __webpack_require__("a639");

// CONCATENATED MODULE: ./.quasar/import-quasar.js
/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/



;
vue_runtime_esm["a" /* default */].use(vue_plugin["a" /* default */], {
  config: {
    "notify": {
      "position": "top"
    },
    "dark": "auto"
  },
  lang: en_us["a" /* default */],
  iconSet: icon_set_material_icons["a" /* default */],
  components: {
    QLayout: QLayout["a" /* default */],
    QHeader: QHeader["a" /* default */],
    QDrawer: QDrawer["a" /* default */],
    QPageContainer: QPageContainer["a" /* default */],
    QPage: QPage["a" /* default */],
    QToolbar: QToolbar["a" /* default */],
    QToolbarTitle: QToolbarTitle["a" /* default */],
    QBtn: QBtn["a" /* default */],
    QIcon: QIcon["a" /* default */],
    QList: QList["a" /* default */],
    QItem: QItem["a" /* default */],
    QItemSection: QItemSection["a" /* default */],
    QItemLabel: QItemLabel["a" /* default */],
    QInput: QInput["a" /* default */],
    QEditor: QEditor["a" /* default */],
    QSelect: QSelect["a" /* default */],
    QToggle: QToggle["a" /* default */],
    QSlider: QSlider["a" /* default */],
    QSpinnerGears: QSpinnerGears["a" /* default */],
    QSpinnerRadio: QSpinnerRadio["a" /* default */],
    QBadge: QBadge["a" /* default */]
  },
  directives: {
    Ripple: Ripple["a" /* default */]
  },
  plugins: {
    Notify: Notify["a" /* default */],
    LocalStorage: LocalStorage["a" /* default */],
    SessionStorage: SessionStorage["a" /* default */]
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=f8b79544&
var Appvue_type_template_id_f8b79544_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"q-app"}},[_c('router-view')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=f8b79544&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: 'App'
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js_,
  Appvue_type_template_id_f8b79544_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (component.exports);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("8c4f");

// CONCATENATED MODULE: ./src/router/routes.js
var routes = [{
  path: '/',
  component: function component() {
    return __webpack_require__.e(/* import() */ 6).then(__webpack_require__.bind(null, "9804"));
  },
  children: [{
    path: '',
    component: function component() {
      return __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, "449a"));
    }
  }, {
    path: 'welcome',
    component: function component() {
      return __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, "449a"));
    }
  }, {
    path: 'font',
    component: function component() {
      return __webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(null, "6649"));
    }
  }, {
    path: 'font_editor',
    component: function component() {
      return __webpack_require__.e(/* import() */ 8).then(__webpack_require__.bind(null, "c446"));
    }
  }, {
    path: 'hid',
    component: function component() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, "b994"));
    }
  }, {
    path: 'serial',
    component: function component() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, "db37"));
    }
  }, {
    path: 'serial_minimal',
    component: function component() {
      return __webpack_require__.e(/* import() */ 14).then(__webpack_require__.bind(null, "da60"));
    }
  }, {
    path: 'bluetooth',
    component: function component() {
      return __webpack_require__.e(/* import() */ 13).then(__webpack_require__.bind(null, "2bc0"));
    }
  }, {
    path: 'about',
    component: function component() {
      return __webpack_require__.e(/* import() */ 12).then(__webpack_require__.bind(null, "fbfb"));
    }
  }]
}, {
  path: '/help',
  component: function component() {
    return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, "51c9"));
  },
  children: [{
    path: '',
    component: function component() {
      return __webpack_require__.e(/* import() */ 9).then(__webpack_require__.bind(null, "9fc0"));
    }
  }]
}]; // Always leave this as last one

if (true) {
  routes.push({
    path: '*',
    component: function component() {
      return __webpack_require__.e(/* import() */ 10).then(__webpack_require__.bind(null, "e51e"));
    }
  });
}

/* harmony default export */ var router_routes = (routes);
// CONCATENATED MODULE: ./src/router/index.js



vue_runtime_esm["a" /* default */].use(vue_router_esm["a" /* default */]);
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

/* harmony default export */ var src_router = (function ()
/* { store, ssrContext } */
{
  var Router = new vue_router_esm["a" /* default */]({
    scrollBehavior: function scrollBehavior() {
      return {
        x: 0,
        y: 0
      };
    },
    routes: router_routes,
    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: "hash",
    base: ""
  });
  return Router;
});
// CONCATENATED MODULE: ./.quasar/app.js




/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/




/* harmony default export */ var _quasar_app = (function () {
  return _ref.apply(this, arguments);
});

function _ref() {
  _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
    var router, app;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(typeof src_router === 'function')) {
              _context.next = 6;
              break;
            }

            _context.next = 3;
            return src_router({
              Vue: vue_runtime_esm["a" /* default */]
            });

          case 3:
            _context.t0 = _context.sent;
            _context.next = 7;
            break;

          case 6:
            _context.t0 = src_router;

          case 7:
            router = _context.t0;
            // Create the app instantiation Object.
            // Here we inject the router, store to all child components,
            // making them available everywhere as `this.$router` and `this.$store`.
            app = {
              router: router,
              render: function render(h) {
                return h(App);
              }
            };
            app.el = '#q-app'; // expose the app, the router and the store.
            // note we are not mounting the app here, since bootstrapping will be
            // different depending on whether we are in a browser or on the server.

            return _context.abrupt("return", {
              app: app,
              router: router
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _ref.apply(this, arguments);
}
// CONCATENATED MODULE: ./.quasar/client-entry.js




/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/

 // We load Quasar stylesheet file






function start() {
  return _start.apply(this, arguments);
}

function _start() {
  _start = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
    var _yield$createApp, app, router;

    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _quasar_app();

          case 2:
            _yield$createApp = _context.sent;
            app = _yield$createApp.app;
            router = _yield$createApp.router;
            new vue_runtime_esm["a" /* default */](app);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _start.apply(this, arguments);
}

start();

/***/ }),

/***/ "7e6d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[0,3,0]]]);
//# sourceMappingURL=app.53d78f22.js.map