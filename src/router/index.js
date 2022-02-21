import { createRouter, createWebHashHistory } from 'vue-router'

/**
 * List of routes
 */
const routes = [
  {
    path: '/',
    component: () => import('@/layouts/PopupLayout.vue'),
    children: [
      {
        path: '',
        name: 'popup',
        component: () => import('@/views/popup/PopupIndex.vue'),
        meta: {
          title: 'Popup',
        },
      },
    ],
  },
  {
    path: '/dashboard',
    component: () => import('@/layouts/DashboardLayout.vue'),
    children: [
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/NotFound.vue'),
        meta: {
          title: 'Not Found',
        },
      },
      {
        path: '',
        name: 'dashboard',
        component: () => import('@/views/dashboard/DashboardIndex.vue'),
        meta: {
          title: 'Dashboard',
        },
      },
      {
        path: 'options',
        name: 'options',
        component: () => import('@/views/dashboard/DashboardOptions.vue'),
        meta: {
          title: 'Options',
        },
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/dashboard/DashboardAbout.vue'),
        meta: {
          title: 'About',
        },
      },
    ],
  },
]

/**
 * Create router
 */
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})
router.beforeEach((to, _from, next) => {
  document.title = String(to.meta.title) || 'Dashboard'
  next()
})

export default router
