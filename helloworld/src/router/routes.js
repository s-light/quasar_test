
const routes = [
    {
        path: '/',
        component: () => import('layouts/MyTests.vue'),
        children: [
            { path: '', component: () => import('pages/tests/welcome.vue') },
            { path: 'welcome', component: () => import('pages/tests/welcome.vue') },
            { path: 'font', component: () => import('pages/tests/font.vue') },
            { path: 'font_editor', component: () => import('pages/tests/font_editor.vue') },
            { path: 'hid', component: () => import('pages/tests/hid.vue') },
            { path: 'serial', component: () => import('pages/tests/serial.vue') },
            { path: 'bluetooth', component: () => import('pages/tests/bluetooth.vue') },
            { path: 'about', component: () => import('pages/tests/about.vue') }
        ]
    },
    {
        path: '/help',
        component: () => import('layouts/LayoutExample.vue'),
        children: [
            { path: '', component: () => import('pages/Help.vue') }
        ]
    }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
    routes.push({
        path: '*',
        component: () => import('pages/Error404.vue')
    })
}

export default routes
