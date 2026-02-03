/**
 * Exemplos de uso de Zod e Yup (validação).
 * Use conforme necessidade nos formulários do projeto.
 */
import { z } from 'zod'
import * as yup from 'yup'

// Zod: schema de exemplo
export const userSchemaZod = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  age: z.number().min(18).optional(),
})

export type UserZod = z.infer<typeof userSchemaZod>

// Yup: schema de exemplo
export const userSchemaYup = yup.object({
  name: yup.string().min(2, 'Nome deve ter pelo menos 2 caracteres').required(),
  email: yup.string().email('E-mail inválido').required(),
  age: yup.number().min(18).optional(),
})

export type UserYup = yup.InferType<typeof userSchemaYup>
