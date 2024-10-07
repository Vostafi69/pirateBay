import { z } from "zod";

export const swapperFormSchema = z.object({
  from: z.string(),
  to: z.string(),
});
