
const routes = [
    {
        path: '/',
        component: () => import('layouts/MyLayout.vue'),
        children: [
            { path: '', component: () => import('pages/Index.vue') },
            { path: 'font', component: () => import('pages/font.vue') },
            { path: 'hid', component: () => import('pages/hid.vue') },
            { path: 'serial', component: () => import('pages/serial.vue') },
            { path: 'bluetooth', component: () => import('pages/bluetooth.vue') },
            { path: 'about', component: () => import('pages/about.vue') }
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
