(window.webpackJsonp=window.webpackJsonp||[]).push([["2d0c7cc8"],{"51c9":function(t,a,e){"use strict";e.r(a);var r=e("0967"),n=e("2b0e"),o={name:"LayoutExample",data:function(){return{leftDrawerOpen:this.$q.platform.is.desktop}},methods:{openURL:function(t,a){var e=window.open;if(!0===r.a.is.cordova){if(void 0!==cordova&&void 0!==cordova.InAppBrowser&&void 0!==cordova.InAppBrowser.open)e=cordova.InAppBrowser.open;else if(void 0!==navigator&&void 0!==navigator.app)return navigator.app.loadUrl(t,{openExternal:!0})}else if(void 0!==n.a.prototype.$q.electron)return n.a.prototype.$q.electron.shell.openExternal(t);var o=e(t,"_blank");if(o)return o.focus(),o;a&&a()}}},i=e("2877"),s=Object(i.a)(o,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-layout",{attrs:{view:"lHh Lpr lFf"}},[e("q-header",{attrs:{elevated:""}},[e("q-toolbar",[e("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(a){t.leftDrawerOpen=!t.leftDrawerOpen}}},[e("q-icon",{attrs:{name:"menu"}})],1),e("q-toolbar-title",[t._v("\n                Quasar App\n            ")]),e("div",[t._v("Quasar v"+t._s(t.$q.version))])],1)],1),e("q-drawer",{attrs:{bordered:"","content-class":"bg-grey-2"},model:{value:t.leftDrawerOpen,callback:function(a){t.leftDrawerOpen=a},expression:"leftDrawerOpen"}},[e("q-list",[e("q-item-label",{attrs:{header:""}},[t._v("\n                Essential Links\n            ")]),e("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"http://v1.quasar-framework.org"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"school"}})],1),e("q-item-section",[e("q-item-label",[t._v("\n                        Docs\n                    ")]),e("q-item-label",{attrs:{caption:""}},[t._v("\n                        v1.quasar-framework.org\n                    ")])],1)],1),e("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://github.com/quasarframework/"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"code"}})],1),e("q-item-section",[e("q-item-label",[t._v("\n                        Github\n                    ")]),e("q-item-label",{attrs:{caption:""}},[t._v("\n                        github.com/quasarframework\n                    ")])],1)],1),e("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"http://chat.quasar-framework.org"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"chat"}})],1),e("q-item-section",[e("q-item-label",[t._v("\n                        Discord\n                        Chat Channel\n                    ")]),e("q-item-label",{attrs:{caption:""}},[t._v("\n                        chat.quasar-framework.org\n                    ")])],1)],1),e("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://forum.quasar-framework.org"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"record_voice_over"}})],1),e("q-item-section",[e("q-item-label",[t._v("\n                        Forum\n                    ")]),e("q-item-label",{attrs:{caption:""}},[t._v("\n                        forum.quasar-framework.org\n                    ")])],1)],1),e("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://twitter.com/quasarframework"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"rss_feed"}})],1),e("q-item-section",[e("q-item-label",[t._v("\n                        Twitter\n                    ")]),e("q-item-label",{attrs:{caption:""}},[t._v("\n                        @quasarframework\n                    ")])],1)],1)],1)],1),e("q-page-container",[e("router-view")],1)],1)},[],!1,null,null,null);a.default=s.exports}}]);
//# sourceMappingURL=2d0c7cc8.ff587994.js.map