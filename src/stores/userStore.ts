import type { User } from '@/interfaces/user.interface'
import { defineStore } from 'pinia'

interface UserState {
  userData: User | null
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    userData: null
  }),
  getters: {
    isAdmin(state): boolean {
      return state.userData?.role === 'ADMIN'
    },
    mealTimes(state): Record<string, string> | null {
      return state.userData?.mealTimes || null
    }
  },
  actions: {
    updateData(data: User) {
      this.userData = data
    }
  }
})
