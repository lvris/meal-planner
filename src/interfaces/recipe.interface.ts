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

export interface IRecipe {
  id: number
  name: string
  ingredients: Array<{
    name: string
    amount: number
  }>
  imgUrl?: string
  userId?: number
  adminId?: number
  description?: string
  steps: Array<{
    no: number
    step: string
  }>
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

export interface RecipeQuery {
  query: string
  ingredients?: string[]
  tags?: string[]
}

export interface ISearchRecipe {}

export const iRecipeToRecipe = (iRecipe: IRecipe): Recipe => {
  return {
    id: iRecipe.id,
    name: iRecipe.name,
    ingredients: iRecipe.ingredients.reduce<Record<string, number>>((acc, { name, amount }) => {
      acc[name] = amount
      return acc
    }, {}),
    imgUrl: iRecipe.imgUrl,
    userId: iRecipe.userId,
    adminId: iRecipe.adminId,
    description: iRecipe.description,
    steps: iRecipe.steps.reduce<RecipeStep>((acc, { no, step }) => {
      acc[no] = step
      return acc
    }, {}),
    tags: iRecipe.tags
  }
}
