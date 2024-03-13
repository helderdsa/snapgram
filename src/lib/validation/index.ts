import { z } from "zod";

export const SignupValidation = z.object({
  name: z.string().min(2, {message: 'O Nome precisa ter pelo menos 2 caracteres'}),
  username: z.string().min(2, {message: 'O Username precisa ter pelo menos 2 caracteres'}),
  email: z.string().email(),
  password: z.string().min(8, {message: "A Senha precisa ter pelo menos 2 caracteres"})
});