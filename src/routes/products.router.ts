import { Router } from "express";
import {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller";
import { checkLogIn, isAdmin, isLoggedIn } from "../middlewares/auth";
import { ProductValidator } from "../validators/ProductValidator";

const productRouter = Router();

productRouter.get("/", getProducts);
productRouter.get("/:id", getProduct);
productRouter.post(
  "/",
  checkLogIn,
  isLoggedIn,
  isAdmin,
  ProductValidator,
  addProduct
);
productRouter.put(
  "/:id",
  checkLogIn,
  isLoggedIn,
  isAdmin,
  ProductValidator,
  updateProduct
);
productRouter.delete("/:id", checkLogIn, isLoggedIn, isAdmin, deleteProduct);

export default productRouter;
