import { useUserStore } from '@/stores/userStore'
import type { Router } from 'vue-router'

const WHITE_LIST = ['/login', '/404', '/']

export function createPermissionGuard(router: Router) {
  router.beforeEach(async (to) => {
    const userStore = useUserStore()

    if (!userStore.userData?.token) {
      if (WHITE_LIST.includes(to.path)) return true
      return { path: 'login', query: { ...to.query, redirect: to.path } }
    }
    if (to.path === '/login') return { path: '/' }

    const routes = router.getRoutes()
    if (routes.find((route) => route.name === to.name)) return true

    return { name: '404', query: { path: to.fullPath } }
  })
}
