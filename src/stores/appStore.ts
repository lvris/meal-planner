import { defineStore } from 'pinia'
import { useDark } from '@vueuse/core'

interface AppState {
  isDark: boolean
  showMenu: boolean
}

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    isDark: useDark().value,
    showMenu: true
  }),
  actions: {
    toggleDark() {
      this.isDark = !this.isDark
    }
  },
  persist: true
})
