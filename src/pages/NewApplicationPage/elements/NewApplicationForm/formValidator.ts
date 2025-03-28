import { z } from "zod";

export const formValidator = z.object({
  jobTitle: z.string().min(1),
  company: z.string().min(1),
  goodAt: z.string().min(1),
  details: z.string().min(1).max(1200),
});

export type NewApplicationFormValues = z.infer<typeof formValidator>;
