'use server';

import { z } from 'zod';

const registerSchema = z.object({
  username: z.string().min(3, 'Username deve ter pelo menos 3 caracteres'),
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Password deve ter pelo menos 6 caracteres'),
  confirmPassword: z.string(),
  starter_id: z.string().optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords não coincidem",
  path: ["confirmPassword"],
});

export async function registerUser(formData: FormData) {
  try {
    const rawData = {
      username: formData.get('username') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      confirmPassword: formData.get('confirmPassword') as string,
      starter_id: formData.get('starter_id') as string,
    };

    const validatedData = registerSchema.parse(rawData);

    // Mock registration - replace with actual database logic
    console.log('Registering user:', validatedData);

    return {
      success: 'Conta criada com sucesso! Redirecionando para login...',
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const details: Record<string, string[]> = {};
      error.errors.forEach((err) => {
        const path = err.path[0] as string;
        if (!details[path]) {
          details[path] = [];
        }
        details[path].push(err.message);
      });

      return {
        error: 'Dados inválidos',
        details,
      };
    }

    return {
      error: 'Erro interno do servidor',
    };
  }
}