import type { Recipe } from '@/interfaces/recipe.interface'
import api from '.'

export async function selectRecipeAll(): Promise<Recipe[]> {
  return api.get('recipe/selectAll').then((res) => res.data)
}

export async function selectRecipeByID(id: number): Promise<Recipe> {
  return api.get('recipe/selectById/' + id).then((res) => res.data)
}

export async function createRecipe(body: Recipe): Promise<Recipe> {
  return api.post('recipe/add', body).then((res) => res.data)
}