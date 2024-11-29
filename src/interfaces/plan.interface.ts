export enum Meal {
  Breakfast = 'Breakfast',
  Lunch = 'Lunch',
  Dinner = 'Dinner',
  Snack = 'Snack'
}

export enum Day {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday'
}

export const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
] as Day[]
export const meals = ['Breakfast', 'Lunch', 'Dinner', 'Snack'] as Meal[]

export interface Plan {
  id: number
  planId: number
  recipeId: number
  day: Day[]
  type: Meal[]
  portion: number
}