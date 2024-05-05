import { prismaClient } from "..";
import { BadRequestError } from "../errors/bad-request";
export const getProductService = async (ProductId: number) => {
  try {
    const product = await prismaClient.product.findUnique({
      where: {
        ProductId,
      },
    });
    if (!product) {
      return new BadRequestError("Product not found", 2001);
    }

    return {
      ProductId: product.ProductId,
      ProductName: product.ProductName,
      ProductDesc: product.ProductDesc,
      ProductPrice: product.ProductPrice,
      ProductSKU: product.ProductSKU,
      ProductCategoryId: product.ProductCategoryId,
      ProductImagePath: product.ProductImagePath,
    };
  } catch (error) {
    return new Error("Internal Server Error");
  }
};
