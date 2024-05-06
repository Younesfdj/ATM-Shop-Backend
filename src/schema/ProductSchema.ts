import { z } from "zod";
export const ProductSchema = z.object({
  ProductId: z.number().optional(),
  ProductName: z.string().min(4),
  ProductSKU: z.string().min(4),
  ProductPrice: z.number().min(0),
  ProductDesc: z.string().min(10),
  ProductCategoryId: z.number().min(1),
  ProductImagePath: z.string().url(),
});
