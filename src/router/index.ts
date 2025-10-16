import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  },
  routes: [
    {
      path: '/',
      redirect: '/overview'
    },
    // Main Dashboard
    {
      path: '/overview',
      name: 'Overview',
      component: () => import('../views/Overview.vue'),
      meta: {
        title: 'Overview',
      },
    },
    // Application Ads
    {
      path: '/account-application',
      name: 'Account Application',
      component: () => import('../views/AccountApplication.vue'),
      meta: {
        title: 'Account Application',
      },
    },
    {
      path: '/opening-record',
      name: 'Opening Record',
      component: () => import('../views/OpeningRecord.vue'),
      meta: {
        title: 'Opening Record',
      },
    },
    // Wallet
    {
      path: '/wallet',
      name: 'Wallet',
      component: () => import('../views/Wallet.vue'),
      meta: {
        title: 'Wallet',
      },
    },
    // Account Management
    {
      path: '/facebook-request',
      name: 'Facebook Request',
      component: () => import('../views/FacebookRequest.vue'),
      meta: {
        title: 'Facebook Request',
      },
    },
    {
      path: '/request-history',
      name: 'Request History',
      component: () => import('../views/RequestHistory.vue'),
      meta: {
        title: 'Request History',
      },
    },
    // User Management
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/Profile.vue'),
      meta: {
        title: 'Profile',
      },
    },
    // Authentication (keep for future use)
    {
      path: '/signin',
      name: 'Signin',
      component: () => import('../views/Auth/Signin.vue'),
      meta: {
        title: 'Signin',
      },
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../views/Auth/Signup.vue'),
      meta: {
        title: 'Signup',
      },
    },
  ],
})

export default router

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Adpion Dashboard`
  next()
})

