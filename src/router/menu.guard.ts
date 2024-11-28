import { useAppStore } from '@/stores/appStore'
import type { Router } from 'vue-router'

const MENU_BLACK_LIST = ['/login', '/404']

export function createMenuGuard(router: Router) {
  router.beforeEach(async (to) => {
    const appStore = useAppStore()
    if (MENU_BLACK_LIST.includes(to.path)) appStore.showMenu = false
    else appStore.showMenu = true
  })
}
