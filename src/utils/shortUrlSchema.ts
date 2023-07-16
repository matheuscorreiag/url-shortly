import { z } from "zod";

export const shortUrlSchema = z.object({
  full_url: z.string().url("The field must be a URL!"),
});
