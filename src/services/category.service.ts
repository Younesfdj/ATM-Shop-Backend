import { prismaClient } from "../config/prisma";
import { BadRequestError } from "../errors/bad-request";

/**
 * @description  Get category by Id
 * @param categoryId  - number
 * @returns  Error | BadRequestError | Category
 */

export const getCategoryService = async (CategoryId: number) => {
  try {
    const category = await prismaClient.category.findUnique({
      where: {
        CategoryId,
      },
    });
    if (!category) {
      return new BadRequestError("category not found", 2001);
    }

    return {
      categoryName: category.CategoryName,
    };
  } catch (error) {
    return new Error("Internal Server Error");
  }
};

/**
 * @description  Get categories
 * @returns  Error | BadRequestError | Category[]
 */

export const getCategoriesService = async () => {
  try {
    const categories = await prismaClient.category.findMany();
    return categories;
  } catch (error) {
    return new Error("Internal Server Error");
  }
};

/**
 * @description  Add category
 * @param newcategory  - Category
 * @returns  Error | BadRequestError | Category
 */

export const addCategoryService = async (newcategory: Category) => {
  try {
    const category = await prismaClient.category.create({
      data: {
        CategoryName: newcategory.CategoryName,
      },
    });

    return {
      categoryId: category.CategoryId,
      categoryName: category.CategoryName,
    };
  } catch (error) {
    console.log(error);
    return new Error("Internal Server Error");
  }
};

/**
 * @description  Update category by Id
 * @param categoryId  - number
 * @param newcategory  - Category
 * @returns  Error | BadRequestError | Category
 */

export const updateCategoryService = async (
  CategoryId: number,
  newcategory: Category
) => {
  try {
    const category = await prismaClient.category.update({
      where: {
        CategoryId,
      },
      data: {
        CategoryName: newcategory.CategoryName,
      },
    });
    if (!category) {
      return new BadRequestError("category not found", 2001);
    }

    return {
      CategoryId: category.CategoryId,
      CategoryName: category.CategoryName,
    };
  } catch (error) {
    return new Error("Internal Server Error");
  }
};

/**
 * @description  Delete category by Id
 * @param categoryId  - number
 * @returns  Error | BadRequestError | Category
 */

export const deleteCategoryService = async (CategoryId: number) => {
  try {
    const category = await prismaClient.category.delete({
      where: {
        CategoryId,
      },
    });
    if (!category) {
      return new BadRequestError("category not found", 2001);
    }

    return {
      CategoryId: category.CategoryId,
      CategoryName: category.CategoryName,
    };
  } catch (error) {
    return new Error("Internal Server Error");
  }
};
