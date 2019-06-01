
const routes = [
    {
        path: '/',
        component: () => import('layouts/MyTests.vue'),
        children: [
            { path: '', component: () => import('pages/mytests/welcome.vue') },
            { path: 'welcome', component: () => import('pages/mytests/welcome.vue') },
            { path: 'font', component: () => import('pages/mytests/font.vue') },
            { path: 'font_editor', component: () => import('pages/mytests/font_editor.vue') },
            { path: 'hid', component: () => import('pages/mytests/hid.vue') },
            { path: 'serial', component: () => import('pages/mytests/serial.vue') },
            { path: 'bluetooth', component: () => import('pages/mytests/bluetooth.vue') },
            { path: 'about', component: () => import('pages/mytests/about.vue') }
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
