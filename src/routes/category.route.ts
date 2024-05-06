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

categoryRouter.get("/", checkLogIn, isLoggedIn, isAdmin, getCategories);
categoryRouter.get("/:id", checkLogIn, isLoggedIn, isAdmin, getCategory);
categoryRouter.post(
  "/",
  checkLogIn,
  isLoggedIn,
  isAdmin,
  CategoryValidator,
  addCategory
);
categoryRouter.put(
  "/:id",
  checkLogIn,
  isLoggedIn,
  isAdmin,
  CategoryValidator,
  updateCategory
);
categoryRouter.delete("/:id", checkLogIn, isLoggedIn, isAdmin, deleteCategory);

export default categoryRouter;
