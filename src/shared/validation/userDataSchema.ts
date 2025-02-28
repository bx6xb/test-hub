import { z } from 'zod'

export const userDataSchema = z.object({
  email: z.string().min(1).email(),
  password: z.string().min(6).max(32),
})
