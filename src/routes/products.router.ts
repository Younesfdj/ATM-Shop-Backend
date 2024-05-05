import { Router } from "express";
import {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller";

const productRouter = Router();

productRouter.get("/product", getProducts);
productRouter.get("/product/:id", getProduct);
productRouter.post("/product", addProduct);
productRouter.put("/product/:id", updateProduct);
productRouter.delete("/product/:id", deleteProduct);

export default productRouter;
