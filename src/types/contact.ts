import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email address"),
  phoneNumber: z
    .string()
    .min(6, { message: "Phone number must be at least 6 characters" }),
  service: z.string().optional(),
  message: z.string(),
});
