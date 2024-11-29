import { defineStore } from 'pinia'
import type { RecipeQuery } from '@/interfaces/recipe.interface'

interface FilterState extends RecipeQuery {}

export const useFilterStore = defineStore('filter', {
  state: (): FilterState => ({
    query: '',
    ingredients: [],
    tags: []
  }),
  persist: true
})
