import { z } from "zod";

export const createTokenSchema = z.object({
  name: z.string().min(2).max(20),
  symbol: z.string().min(2).max(4),
  totalSupply: z.string(),
  imageUrl: z.string().url().optional(),
});
