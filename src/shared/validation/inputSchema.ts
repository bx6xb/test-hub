import { z } from 'zod';

export const inputSchema = z.object({
  string: z.string().min(1),
});
