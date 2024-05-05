import { Router } from "express";
import {
  registerUser,
  loginUser,
  registerAdmin,
} from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post("/register", registerUser);
authRouter.post("/registerAdmin", registerAdmin);
authRouter.post("/login", loginUser);

export default authRouter;
