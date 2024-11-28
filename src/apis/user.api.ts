import type { IAccount, User } from '@/interfaces/user.interface'
import api from '.'

export async function loginUser(body: IAccount): Promise<User> {
  return api.post('user/login', body).then((res) => res.data)
}

export async function createUser(body: IAccount): Promise<User> {
  return api.post('user/register', body).then((res) => res.data)
}
