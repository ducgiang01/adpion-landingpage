import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

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
        requiresAuth: true,
      },
    },
    // Application Ads
    {
      path: '/account-application',
      name: 'Account Application',
      component: () => import('../views/AccountApplication.vue'),
      meta: {
        title: 'Account Application',
        requiresAuth: true,
      },
    },
    {
      path: '/opening-record',
      name: 'Opening Record',
      component: () => import('../views/OpeningRecord.vue'),
      meta: {
        title: 'Opening Record',
        requiresAuth: true,
      },
    },
    // Wallet
    {
      path: '/wallet',
      name: 'Wallet',
      component: () => import('../views/Wallet.vue'),
      meta: {
        title: 'Wallet',
        requiresAuth: true,
      },
    },
    // Account Management
    {
      path: '/facebook-request',
      name: 'Facebook Request',
      component: () => import('../views/FacebookRequest.vue'),
      meta: {
        title: 'Facebook Request',
        requiresAuth: true,
      },
    },
    {
      path: '/request-history',
      name: 'Request History',
      component: () => import('../views/RequestHistory.vue'),
      meta: {
        title: 'Request History',
        requiresAuth: true,
      },
    },
    // User Management
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/Profile.vue'),
      meta: {
        title: 'Profile',
        requiresAuth: true,
      },
    },
    // Authentication
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Auth/Login.vue'),
      meta: {
        title: 'Login',
        requiresGuest: true,
      },
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/Auth/Register.vue'),
      meta: {
        title: 'Register',
        requiresGuest: true,
      },
    },
  ],
})

export default router

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Adpion Dashboard`
  
  // Get auth state
  const { isAuthenticated } = useAuth()
  
  // Check if route requires authentication
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    next('/login')
    return
  }
  
  // Check if route requires guest (not authenticated)
  if (to.meta.requiresGuest && isAuthenticated.value) {
    next('/')
    return
  }
  
  next()
})

