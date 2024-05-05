import { Request, Response, NextFunction } from "express";
import { getProductService } from "../services/product.service";
import { StatusCodes } from "http-status-codes";
export const getProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const result = await getProductService(parseInt(id));

  console.log(result);

  if (result instanceof Error) next(result);
  res.status(StatusCodes.OK).json(result);
};
export const getProducts = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json({ message: "Get all products" });
};

export const addProduct = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: "Add a product" });
};

export const updateProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json({ message: "Update a product" });
};

export const deleteProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json({ message: "Delete a product" });
};
