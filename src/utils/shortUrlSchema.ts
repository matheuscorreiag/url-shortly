import { z } from "zod";

export const shortUrlSchema = z.object({
  full_url: z.string().refine(
    (value) => {
      return value.startsWith("https://") || value.startsWith("www.");
    },
    {
      message: "The URL must start with 'https://www.' or 'www.'",
    }
  ),
});

