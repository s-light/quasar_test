/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://quasar.dev/quasar-cli/quasar-conf-js
/* eslint-env node */

// const path = require('path')
// console.log('path', path.join(__dirname, '../app_config/'))

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
            iconSet: 'material-icons', // Quasar icon set
            lang: 'en-us', // Quasar language pack
            config: {
                notify: {
                    position: 'top'
                },
                // https://quasar.dev/quasar-plugins/dark#Through-quasar.conf.js
                dark: 'auto' // or Boolean true/false
            },

            // Possible values for "importStrategy":
            // * 'auto' - (DEFAULT) Auto-import needed Quasar components & directives
            // * 'all'  - Manually specify what to import
            importStrategy: 'auto',

            // For special cases outside of where "auto" importStrategy can have an impact
            // (like functional components as one of the examples),
            // you can manually specify Quasar components/directives to be available everywhere:
            //
            // components: [],
            // directives: [],

            // Quasar plugins
            plugins: [
                'Notify',
                'LocalStorage',
                'SessionStorage'
            ]
        },

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
                        'src': 'icons/icon-128x128.png',
                        'sizes': '128x128',
                        'type': 'image/png'
                    },
                    {
                        'src': 'icons/icon-192x192.png',
                        'sizes': '192x192',
                        'type': 'image/png'
                    },
                    {
                        'src': 'icons/icon-256x256.png',
                        'sizes': '256x256',
                        'type': 'image/png'
                    },
                    {
                        'src': 'icons/icon-384x384.png',
                        'sizes': '384x384',
                        'type': 'image/png'
                    },
                    {
                        'src': 'icons/icon-512x512.png',
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
            },

            packager: {
                // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options
            },

            builder: {
                // https://www.electron.build/configuration/configuration
                // for now we use the defaults and will see what's happening..
                // 'publish': ['github'],
                // ^ should be automatically be the default if GH_TOKEN is set.

                'appId': 'eu.s-light.app.quasar.helloworld',
                // 'copyright': 'Copyright © 2019 Stefan Krüger',
                'productName': 'Quasar HelloWorld',
                'mac': {
                    // https://www.electron.build/configuration/dmg
                },
                'linux': {
                    'category': 'Office',
                    'target': [
                        {
                            'target': 'AppImage'
                        }
                    ]
                },
                'win': {
                    // 'publisherName': 'Stefan Krüger',
                    'target': [
                        {
                            'target': 'nsis'
                        },
                        {
                            'target': 'zip'
                        }
                    ]
                },
                'nsis': {
                    // https://www.electron.build/configuration/nsis
                    'oneClick': false
                }
            }
        }
    }
}
