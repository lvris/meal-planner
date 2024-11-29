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
    },
    {
      path: '/plan',
      name: 'plan',
      component: () => import('@/views/Plan/PlanView.vue')
    },
    {
      path: '/recipe',
      name: 'recipe',
      component: () => import('@/views/Recipe/RecipeView.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('@/views/Recipe/RecipeCreateView.vue')
    },
    {
      path: '/recipe/:id',
      name: 'recipe-detail',
      component: () => import('@/views/Recipe/RecipeDetailView.vue')
    },
    {
      path: '/grocery',
      name: 'grocery',
      component: () => import('@/views/Grocery/GroceryView.vue')
    },
    {
      path: '/statistic',
      name: 'statistic',
      component: () => import('@/views/Statistic/StatisticView.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('@/views/Settings/SettingsView.vue')
    },
    {
      path: '/doc',
      name: 'doc',
      component: () => import('@/views/Doc/DocView.vue')
    }
  ]
})

createMenuGuard(router)
// createPermissionGuard(router)

export default router
