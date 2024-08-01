import { z } from "zod";

export const schema = z.object({
  email:z
  .string()
  .min(1, { message: "Email field has to be filled." })
  .email("This is not a valid email."),
  password: z.string().trim().min(6, {
    message: "Password field must be at least 6 characters.",
  }).max(20, {message:'Password must field be at most 20 characters.'}).regex(/^[a-zA-Z0-9]+$/,
    {message:'Password field must be alphanumeric'}
  ),
});