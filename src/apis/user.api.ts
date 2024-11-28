import type { ICreateUser } from '@/interfaces/user.interface'
import api from '.'

export async function createUser(body: ICreateUser): Promise<null> {
  return api.post('user/add', body).then((res) => res.data)
}
