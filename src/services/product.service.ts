import { InternalError } from "../errors/internal-error";
import { prismaClient } from "../config/prisma";
import { BadRequestError } from "../errors/bad-request";
import { Product } from "../types/Product";

/**
 * @description  Get Product by Id
 * @param ProductId  - number
 * @returns  Error | BadRequestError | Product
 */

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
  } catch (error: any) {
    return new InternalError("Something went wrong", 1007, error);
  }
};

/**
 * @description  Get Products
 * @returns  Error | BadRequestError | Product
 */

export const getProductsService = async () => {
  try {
    const products = await prismaClient.product.findMany();
    return products;
  } catch (error: any) {
    return new InternalError("Something went wrong", 1007, error);
  }
};

/**
 * @description  Add a Product
 * @param newProduct  - Product
 * @returns  Error | BadRequestError | Product
 */

export const addProductService = async (newProduct: Product) => {
  try {
    const product = await prismaClient.product.create({
      data: {
        ProductName: newProduct.ProductName,
        ProductDesc: newProduct.ProductDesc,
        ProductPrice: newProduct.ProductPrice,
        ProductSKU: newProduct.ProductSKU,
        ProductCategoryId: newProduct.ProductCategoryId,
        ProductImagePath: newProduct.ProductImagePath,
      },
    });

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
    console.log(error);
    return new Error("Internal Server Error");
  }
};

/**
 * @description  Update a Product
 * @param ProductId  - number
 * @param newProduct  - Product
 * @returns  Error | BadRequestError | Product
 */

export const updateProductService = async (
  ProductId: number,
  newProduct: Product
) => {
  try {
    const productExists = await prismaClient.product.findUnique({
      where: {
        ProductId,
      },
    });
    if (!productExists) {
      return new BadRequestError("Product not found", 2001);
    }

    const product = await prismaClient.product.update({
      where: {
        ProductId,
      },
      data: {
        ProductName: newProduct.ProductName,
        ProductDesc: newProduct.ProductDesc,
        ProductPrice: newProduct.ProductPrice,
        ProductSKU: newProduct.ProductSKU,
        ProductCategoryId: newProduct.ProductCategoryId,
        ProductImagePath: newProduct.ProductImagePath,
      },
    });

    return {
      ProductId: product.ProductId,
      ProductName: product.ProductName,
      ProductDesc: product.ProductDesc,
      ProductPrice: product.ProductPrice,
      ProductSKU: product.ProductSKU,
      ProductCategoryId: product.ProductCategoryId,
      ProductImagePath: product.ProductImagePath,
    };
  } catch (error: any) {
    return new InternalError("Something went wrong", 1007, error);
  }
};

/**
 * @description  Delete a Product
 * @param ProductId  - number
 * @returns  Error | BadRequestError | Product
 */

export const deleteProductService = async (ProductId: number) => {
  try {
    const productExists = await prismaClient.product.findUnique({
      where: {
        ProductId,
      },
    });
    if (!productExists) {
      return new BadRequestError("Product not found", 2001);
    }

    const product = await prismaClient.product.delete({
      where: {
        ProductId,
      },
    });

    return {
      ProductId: product.ProductId,
      ProductName: product.ProductName,
      ProductDesc: product.ProductDesc,
      ProductPrice: product.ProductPrice,
      ProductSKU: product.ProductSKU,
      ProductCategoryId: product.ProductCategoryId,
      ProductImagePath: product.ProductImagePath,
    };
  } catch (error: any) {
    return new InternalError("Something went wrong", 1007, error);
  }
};
