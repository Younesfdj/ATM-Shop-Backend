import { Router } from "express";
import {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller";

const productRouter = Router();

productRouter.get("/", getProducts);
productRouter.get("/:id", getProduct);
productRouter.post("/", addProduct);
productRouter.put("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);

export default productRouter;
