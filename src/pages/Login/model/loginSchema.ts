import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().min(1, 'Email обязателен').email('Некорректный email'),
  password: z
    .string()
    .min(6, 'Пароль должен содержать минимум 6 символов')
    .max(32, 'Пароль не должен превышать 32 символа'),
})
