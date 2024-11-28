export interface User {
  id: number
  username: string
  role: 'USER' | 'ADMIN'
  token?: string
  password?: string
  name?: string
  avatar?: string
  email?: string
  phone?: string
  location?: string
  mealTimes?: {
    breakfast: string
    lunch: string
    dinner: string
  }
}

export interface IAccount {
  username: string
  password: string
}