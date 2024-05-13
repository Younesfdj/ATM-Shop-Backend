import { Router } from "express";
import {
  getOrder,
  getOrders,
  addOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/order.controller";
import { checkLogIn, isAdmin, isLoggedIn } from "../middlewares/auth";
import { OrderValidator } from "../validators/OrderValidator";

const orderRouter = Router();

orderRouter.get("/orders", checkLogIn, isLoggedIn, isAdmin, getOrders);
orderRouter.get("/order/:id", checkLogIn, isLoggedIn, isAdmin, getOrder);
orderRouter.post("/order", checkLogIn, isLoggedIn, OrderValidator, addOrder);
orderRouter.put(
  "/order/:id",
  checkLogIn,
  isLoggedIn,
  isAdmin,
  OrderValidator,
  updateOrder
);
orderRouter.delete("/order/:id", checkLogIn, isLoggedIn, isAdmin, deleteOrder);

export default orderRouter;
