import { z } from "zod";

export const createTokenSchema = z.object({
  name: z.string().min(2).max(20),
  symbol: z.string().min(2).max(4),
  totalSupply: z.number().int().positive(),
  imageUrl: z.string().url().optional(),
});
