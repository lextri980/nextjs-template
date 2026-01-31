import { _Translator } from 'next-intl';
import z from 'zod';

export const loginSchema = (t?: _Translator) =>
  z.object({
    username: z.string().min(1, t?.('M001')),
    password: z.string().min(1, t?.('M001')),
    remember: z.boolean().optional(),
  });
