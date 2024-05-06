import { Router } from "express";
import {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller";
import { checkLogIn, isAdmin, isLoggedIn } from "../middlewares/auth";

const productRouter = Router();

productRouter.get("/", getProducts);
productRouter.get("/:id", getProduct);
productRouter.post("/", checkLogIn, isLoggedIn, isAdmin, addProduct);
productRouter.put("/:id", checkLogIn, isLoggedIn, isAdmin, updateProduct);
productRouter.delete("/:id", checkLogIn, isLoggedIn, isAdmin, deleteProduct);

export default productRouter;
