import type { Recipe } from '@/interfaces/recipe.interface'
import api from '.'

export async function selectRecipeAll(): Promise<Recipe[]> {
  return api.get('recipe/selectAll').then((res) => res.data)
}
