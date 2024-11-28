import { createRouter, createWebHistory } from 'vue-router'
import { createPermissionGuard } from './permission.guard'
import { createMenuGuard } from './menu.guard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/404',
      name: '404',
      component: () => import('@/views/Common/404View.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/LoginView.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home/HomeView.vue')
    }
  ]
})

createMenuGuard(router)
createPermissionGuard(router)

export default router
