export interface Ingredient {
  id: number
  name: string
  price?: number
}

export interface RecipeIngredient {
  id: number
  recipeId: number
  ingredientId: number
  amount: number
}

export interface RecipeStep {
  [stepNumber: string]: string
}

export interface Recipe {
  id: number
  name: string
  ingredients: Record<string, number>
  imgUrl?: string
  userId?: number
  adminId?: number
  description?: string
  steps: RecipeStep
  tags?: string[]
}

export interface RecipeListResponse {
  total: number
  list: Recipe[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}
