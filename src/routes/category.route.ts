import { Router } from "express";
import {
  getCategory,
  getCategories,
  updateCategory,
  deleteCategory,
  addCategory,
} from "../controllers/category.controller";
import { checkLogIn, isAdmin, isLoggedIn } from "../middlewares/auth";
import { CategoryValidator } from "../validators/CategoryValidator";

const categoryRouter = Router();

categoryRouter.get(
  "/categories",
  checkLogIn,
  isLoggedIn,
  isAdmin,
  getCategories
);
categoryRouter.get(
  "/category/:id",
  checkLogIn,
  isLoggedIn,
  isAdmin,
  getCategory
);
categoryRouter.post(
  "/category",
  checkLogIn,
  isLoggedIn,
  isAdmin,
  CategoryValidator,
  addCategory
);
categoryRouter.put(
  "/category/:id",
  checkLogIn,
  isLoggedIn,
  isAdmin,
  CategoryValidator,
  updateCategory
);
categoryRouter.delete(
  "/category/:id",
  checkLogIn,
  isLoggedIn,
  isAdmin,
  deleteCategory
);

export default categoryRouter;
