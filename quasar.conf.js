// Configuration for your app

module.exports = function (ctx) {
    return {
        // app boot file (/src/boot)
        // --> boot files are part of "main.js"
        boot: [
        ],

        css: [
            'app.styl'
        ],

        extras: [
            'roboto-font',
            'material-icons' // optional, you are not bound to it
            // 'ionicons-v4',
            // 'mdi-v3',
            // 'fontawesome-v5',
            // 'eva-icons'
        ],

        framework: {
            // all: true, // --- includes everything; for dev only!

            components: [
                'QLayout',
                'QHeader',
                'QDrawer',
                'QPageContainer',
                'QPage',
                'QToolbar',
                'QToolbarTitle',
                'QBtn',
                'QIcon',
                'QList',
                'QItem',
                'QItemSection',
                'QItemLabel',
                'QInput',
                'QEditor',
                'QSelect',
                'QToggle',
                'QSlider',
                'QSpinnerGears',
                'QSpinnerRadio',
                'QBadge'
            ],

            directives: [
                'Ripple'
            ],

            // Quasar plugins
            plugins: [
                'Notify',
                'LocalStorage',
                'SessionStorage'
            ]

            // iconSet: 'ionicons-v4'
            // lang: 'de' // Quasar language
        },

        supportIE: false,

        build: {
            scopeHoisting: true,
            // vueRouterMode: 'history',
            // vueCompiler: true,
            // gzip: true,
            // analyze: true,
            // extractCSS: false,
            extendWebpack (cfg) {
                cfg.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /node_modules/
                })
                cfg.externals = {
                    serialport: 'serialport',
                    'node-hid': 'commonjs node-hid'
                }
            }
        },

        devServer: {
            https: true,
            // port: 8080,
            open: true // opens browser window automatically
        },

        // animations: 'all', // --- includes all animations
        animations: [],

        ssr: {
            pwa: false
        },

        pwa: {
            // workboxPluginMode: 'InjectManifest',
            // workboxOptions: {}, // only for NON InjectManifest
            manifest: {
                // name: 'Quasar App',
                // short_name: 'Quasar-PWA',
                // description: 'Best PWA App in town!',
                display: 'standalone',
                orientation: 'portrait',
                background_color: '#ffffff',
                theme_color: '#027be3',
                icons: [
                    {
                        'src': 'statics/icons/icon-128x128.png',
                        'sizes': '128x128',
                        'type': 'image/png'
                    },
                    {
                        'src': 'statics/icons/icon-192x192.png',
                        'sizes': '192x192',
                        'type': 'image/png'
                    },
                    {
                        'src': 'statics/icons/icon-256x256.png',
                        'sizes': '256x256',
                        'type': 'image/png'
                    },
                    {
                        'src': 'statics/icons/icon-384x384.png',
                        'sizes': '384x384',
                        'type': 'image/png'
                    },
                    {
                        'src': 'statics/icons/icon-512x512.png',
                        'sizes': '512x512',
                        'type': 'image/png'
                    }
                ]
            }
        },

        cordova: {
            // id: 'org.cordova.quasar.app'
            // noIosLegacyBuildFlag: true // uncomment only if you know what you are doing
        },

        electron: {
            bundler: 'builder', // or 'packager'

            extendWebpack (cfg) {
                // do something with Electron main process Webpack cfg
                // chainWebpack also available besides this extendWebpack
                // cfg.externals = {
                //     serialport: 'serialport'
                // }
            },

            packager: {
                // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

                // OS X / Mac App Store
                // appBundleId: '',
                // appCategoryType: '',
                // osxSign: '',
                // protocol: 'myapp://path',

                // Window only
                // win32metadata: { ... }
            },

            builder: {
                // https://www.electron.build/configuration/configuration
                // for now we use the defaults and will see what's happening..
                // 'publish': ['github'],
                // ^ should be automatically be the default if GH_TOKEN is set.

                // 'appId': 'eu.s-light.app.quasar.helloworld',
                // 'copyright': 'Copyright © 2019 Stefan Krüger',
                // 'productName': 'Quasar HelloWorld',
                'linux': {
                    'category': 'Utility'
                    // 'category': 'Office'
                    // 'target': [
                    //     {
                    //         'target': 'AppImage',
                    //         'arch': [
                    //             'x64'
                    //         ]
                    //     }
                    // ]
                }
                // },
                // 'win': {
                //     'legalTrademarks': 'Copyright © 2019 Stefan Krüger',
                //     'publisherName': 'Stefan Krüger'
                // }
            }
        }
    }
}