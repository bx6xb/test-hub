import { z } from 'zod'

export const renameSchema = z.object({
  newName: z.string().min(1),
})
