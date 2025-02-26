import { z } from 'zod'

export const inputSchema = z.object({
  message: z.string().min(1),
})
