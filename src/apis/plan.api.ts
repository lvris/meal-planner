import type { Plan } from '@/interfaces/plan.interface'
import api from '.'

export async function selectPlanByWeek(body: { startDate: string }): Promise<Plan[]> {
  return api.post('selectByWeekStartDate', body).then((res) => res.data)
}
