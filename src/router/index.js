import { createRouter, createWebHistory } from 'vue-router'

/**
 * List of routes
 */
const routes = [
  {
    path: '/index.html',
    component: () => import('@/layouts/DashboardLayout.vue'),
    children: [
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
  {
    path: '/popup.html',
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
]

/**
 * Create router
 */
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})
router.beforeEach((to, from, next) => {
  document.title = String(to.meta.title) || 'Dashboard'
  next()
})

export default router
